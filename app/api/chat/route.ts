import { NextResponse } from "next/server";
import { createHash, timingSafeEqual } from "node:crypto";
import { offlineGuidance } from "../../lib/study-guidance";
import { sanitizedOpenAIApiErrorCode, selectOpenAIApiKey } from "../../lib/openai-auth";
import { requestOrigin } from "../../lib/request-origin";
import { teachingInstructions, type ChatMessage } from "../../lib/teaching-prompt";
import {
  defaultTeachingOptions, MAX_CHAT_CONTEXT_CHARS, MAX_CHAT_MESSAGES, MAX_QUESTION_CHARS,
  MAX_TEACHING_REPLY_CHARS, subjects, teachers, teachingLanguages, teachingModes, type TeachingOptions,
} from "../../lib/tochhawng-teachers";
import {
  clientAddress, MAX_OUTPUT_TOKENS, MAX_PROVIDER_BODY_BYTES, meterTeachingResponse, reserveTeachingRequest, TEACHING_MODEL,
} from "../../lib/teaching-usage";

const MAX_BODY_LENGTH = 24_000;
const BODY_TIMEOUT = Symbol("body-timeout");
const RATE_WINDOW_MS = 60_000;
const BURST_LIMIT = 15;
const requestsByAddress = new Map<string, { count: number; resetAt: number }>();

function json(data: unknown, status = 200, retryAfter?: number) {
  return NextResponse.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store",
      ...(retryAfter === undefined ? {} : { "Retry-After": String(retryAfter) }),
    },
  });
}

async function readLimitedBody(request: Request, limit: number) {
  if (!request.body) return "";
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  let timedOut = false;
  const timeout = setTimeout(() => {
    timedOut = true;
    void reader.cancel().catch(() => {});
  }, 5_000);
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (timedOut) return BODY_TIMEOUT;
      if (done) break;
      size += value.byteLength;
      if (size > limit) {
        void reader.cancel().catch(() => {});
        return null;
      }
      chunks.push(value);
    }
    return Buffer.concat(chunks, size).toString("utf8");
  } finally {
    clearTimeout(timeout);
    reader.releaseLock();
  }
}

function takeRateLimit(request: Request) {
  const address = clientAddress(request.headers);
  const now = Date.now();
  if (requestsByAddress.size >= 1_000) {
    for (const [key, value] of requestsByAddress) {
      if (value.resetAt <= now) requestsByAddress.delete(key);
    }
  }
  const current = requestsByAddress.get(address);
  if (current && current.resetAt > now) {
    if (current.count >= BURST_LIMIT) return false;
    current.count += 1;
    return true;
  }
  if (!current && requestsByAddress.size >= 4_000) return false;
  requestsByAddress.set(address, { count: 1, resetAt: now + RATE_WINDOW_MS });
  return true;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function isKey<T extends object>(value: unknown, choices: T): value is keyof T {
  return typeof value === "string" && Object.hasOwn(choices, value);
}

function parseTeachingOptions(value: unknown): TeachingOptions | null {
  if (value === undefined) return defaultTeachingOptions;
  if (!isRecord(value)) return null;
  const { teacher, subject, language, mode } = value;
  if (Object.keys(value).length !== 4 || !isKey(teacher, teachers) || !isKey(subject, subjects)
    || !isKey(language, teachingLanguages) || !isKey(mode, teachingModes)) return null;
  return { teacher, subject, language, mode };
}

function parseMessages(value: unknown): ChatMessage[] | null {
  if (!Array.isArray(value) || value.length === 0 || value.length > MAX_CHAT_MESSAGES) return null;
  const messages: ChatMessage[] = [];
  let totalLength = 0;
  for (const item of value) {
    if (!isRecord(item) || Object.keys(item).length !== 2
      || (item.role !== "user" && item.role !== "assistant") || typeof item.content !== "string") return null;
    const content = item.content.trim();
    const limit = item.role === "user" ? MAX_QUESTION_CHARS : MAX_TEACHING_REPLY_CHARS;
    if (!content || content.length > limit || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/u.test(content)) return null;
    totalLength += content.length;
    if (totalLength > MAX_CHAT_CONTEXT_CHARS) return null;
    messages.push({ role: item.role, content });
  }
  return messages.at(-1)?.role === "user" ? messages : null;
}

function offlineReply(prompt: string, options: TeachingOptions) {
  const guidance = offlineGuidance(prompt);
  return json({
    reply: options.language === "lus"
      ? "AI zirtirtu chu tunah a hman theih loh. Nakinah han ti leh la, tunah hian entirna zawhna i zir thei ang."
      : `The AI teacher is unavailable right now. ${guidance.reply}`,
    links: options.language === "lus" ? [{ label: "Mizo ṭawnga practice", href: "/mizo" }] : guidance.links,
    mode: "offline",
    teacher: options.teacher,
  });
}

function tokenCount(value: unknown): value is number {
  return typeof value === "number" && Number.isSafeInteger(value) && value >= 0;
}

function allowedTester(request: Request) {
  const secret = process.env.TOCHHAWNG_TEST_TOKEN?.trim();
  const authorization = request.headers.get("authorization");
  if (process.env.TOCHHAWNG_AI_MODE !== "private" || !secret || secret.length < 32
    || !authorization || authorization.length > 512) return false;
  const digest = (value: string) => createHash("sha256").update(value).digest();
  return timingSafeEqual(digest(authorization), digest(`Bearer ${secret}`));
}

export async function POST(request: Request) {
  if (!takeRateLimit(request)) {
    return json({ error: "That is a lot of questions at once. Please wait a minute and try again." }, 429, 60);
  }
  const contentType = request.headers.get("content-type")?.split(";")[0].trim().toLowerCase();
  if (contentType !== "application/json") return json({ error: "Send a JSON chat message to continue." }, 415);

  const origin = request.headers.get("origin");
  if (origin && origin !== requestOrigin(request)?.origin) {
    return json({ error: "Chat requests must come from this learning platform." }, 403);
  }
  if (Number(request.headers.get("content-length")) > MAX_BODY_LENGTH) {
    return json({ error: "That conversation is too long. Start a new chat and try again." }, 413);
  }

  let body: unknown;
  try {
    const rawBody = await readLimitedBody(request, MAX_BODY_LENGTH);
    if (rawBody === null) return json({ error: "That conversation is too long. Start a new chat and try again." }, 413);
    if (rawBody === BODY_TIMEOUT) return json({ error: "The message took too long to upload. Try again." }, 408);
    body = JSON.parse(rawBody);
  } catch {
    return json({ error: "The chat message could not be read. Please try again." }, 400);
  }

  if (!isRecord(body) || Object.keys(body).some(key => key !== "messages" && key !== "teaching")) {
    return json({ error: "Invalid teaching request." }, 400);
  }
  const messages = parseMessages(body.messages);
  const options = parseTeachingOptions(body.teaching);
  if (!messages || !options) return json({ error: "Check your teaching options and write a short question." }, 400);

  const prompt = messages[messages.length - 1].content;
  const apiKey = selectOpenAIApiKey(process.env);
  if (!apiKey || !allowedTester(request)) return offlineReply(prompt, options);

  const providerBody = JSON.stringify({
    model: TEACHING_MODEL,
    instructions: teachingInstructions(options, messages),
    input: messages,
    max_output_tokens: MAX_OUTPUT_TOKENS,
    reasoning: { effort: "none" },
    service_tier: "default",
    store: false,
  });
  if (Buffer.byteLength(providerBody) > MAX_PROVIDER_BODY_BYTES) {
    return json({ error: "That conversation is too long. Start a new chat and try again." }, 413);
  }

  let reservation: Awaited<ReturnType<typeof reserveTeachingRequest>>;
  try {
    reservation = await reserveTeachingRequest(request);
  } catch {
    // Paid requests fail closed when the shared budget cannot be checked.
    return offlineReply(prompt, options);
  }
  if (!reservation.admitted) {
    const error = reservation.scope === "minute"
      ? "Please wait a minute before asking another question."
      : reservation.scope === "budget"
        ? "The private testing budget is exhausted."
      : reservation.scope === "address-day"
        ? "You have reached the daily teaching limit. Try again tomorrow (India time)."
        : "The free classroom has reached its daily teaching limit. Try again tomorrow (India time).";
    return json({ error }, 429, reservation.retryAfter);
  }

  try {
    const base = (process.env.OPENAI_BASE_URL || "https://api.openai.com/v1").replace(/\/$/, "");
    const endpoint = new URL(`${base}/responses`);
    const loopback = endpoint.protocol === "http:" && ["127.0.0.1", "localhost", "[::1]"].includes(endpoint.hostname);
    if (endpoint.href !== "https://api.openai.com/v1/responses" && !loopback) {
      return offlineReply(prompt, options);
    }
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: providerBody,
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.any([request.signal, AbortSignal.timeout(20_000)]),
    });
    if (!response.ok) {
      const code = sanitizedOpenAIApiErrorCode(await response.json().catch(() => null));
      console.error(`Tochhawng Teachers request failed (${response.status}, ${code}).`);
      return offlineReply(prompt, options);
    }
    const result: unknown = await response.json();
    if (!isRecord(result)) return offlineReply(prompt, options);
    const usage = result.usage;
    if (isRecord(usage) && tokenCount(usage.input_tokens) && tokenCount(usage.output_tokens)) {
      await meterTeachingResponse(reservation.key, usage.input_tokens, usage.output_tokens).catch(() => {
        console.error("Tochhawng Teachers usage could not be recorded.");
      });
    }
    if (!Array.isArray(result.output)) return offlineReply(prompt, options);
    const reply = result.output
      .flatMap(item => isRecord(item) && item.type === "message" && item.role === "assistant" && Array.isArray(item.content) ? item.content : [])
      .filter(item => isRecord(item) && item.type === "output_text" && typeof item.text === "string")
      .map(item => item.text as string).join("\n").trim().slice(0, MAX_TEACHING_REPLY_CHARS);
    if (!reply) return offlineReply(prompt, options);
    return json({ reply, teacher: options.teacher, mode: "ai" });
  } catch {
    console.error("Tochhawng Teachers could not reach the model.");
    return offlineReply(prompt, options);
  }
}
