import { NextResponse } from "next/server";
import { offlineGuidance } from "../../lib/study-guidance";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const MAX_BODY_LENGTH = 24_000;
const MAX_MESSAGES = 8;
const MAX_USER_MESSAGE_LENGTH = 1_200;
const MAX_ASSISTANT_MESSAGE_LENGTH = 4_000;
const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 15;
const requestsByAddress = new Map<string, { count: number; resetAt: number }>();

function json(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

async function readLimitedBody(request: Request, limit: number): Promise<string | null> {
  if (!request.body) return "";
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > limit) {
      await reader.cancel().catch(() => {});
      return null;
    }
    chunks.push(value);
  }
  const body = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength; }
  return new TextDecoder().decode(body);
}

function takeRateLimit(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const address = forwarded?.split(",").at(-1)?.trim() || "local";
  const now = Date.now();
  if (requestsByAddress.size > 1_000) {
    for (const [key, value] of requestsByAddress) {
      if (value.resetAt <= now) requestsByAddress.delete(key);
    }
  }
  const current = requestsByAddress.get(address);

  if (!current || current.resetAt <= now) {
    requestsByAddress.set(address, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }

  if (current.count >= RATE_LIMIT) return false;
  current.count += 1;
  return true;
}

function parseMessages(value: unknown): ChatMessage[] | null {
  if (!Array.isArray(value) || value.length === 0 || value.length > 12) return null;

  const messages: ChatMessage[] = [];
  let totalLength = 0;

  for (const item of value) {
    if (
      typeof item !== "object" ||
      item === null ||
      !("role" in item) ||
      !("content" in item) ||
      (item.role !== "user" && item.role !== "assistant") ||
      typeof item.content !== "string"
    ) {
      return null;
    }

    const content = item.content.trim();
    const limit = item.role === "user" ? MAX_USER_MESSAGE_LENGTH : MAX_ASSISTANT_MESSAGE_LENGTH;
    if (!content || content.length > limit) return null;
    totalLength += content.length;
    if (totalLength > 8_000) return null;
    messages.push({ role: item.role, content });
  }

  if (messages.at(-1)?.role !== "user") return null;
  return messages.slice(-MAX_MESSAGES);
}

const instructions =
  "You are the MPSC study mentor for a learning platform built for students in Mizoram. Be warm, concise, practical, and teach reasoning rather than only giving answers. Help with study planning, concept explanations, and reviewing practice mistakes. The platform has MPSC practice at /mock-test, a student dashboard and planner at /, college notes at /college-notes, NEET practice at /neet, JEE Main practice at /jee, and CUET PG practice at /cuet-pg. Do not claim access to the student's scores or saved plan. Never invent current MPSC syllabus rules, exam dates, notifications, or current affairs; flag time-sensitive details and ask the learner to verify an official notice. If a question is ambiguous, ask one focused follow-up.";

// Ask for a short reasoning step so the first words arrive sooner. A model that does not take the
// setting rejects it; the route then retries without it and stops sending it until a restart.
let reasoningSupported = true;

function requestAnswer(apiKey: string, messages: ChatMessage[], withReasoning: boolean) {
  const base = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
  return fetch(`${base}/responses`, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-5.6-luna",
      instructions,
      input: messages,
      max_output_tokens: 450,
      store: false,
      stream: true,
      ...(withReasoning ? { reasoning: { effort: "low" } } : {}),
    }),
    signal: AbortSignal.timeout(25_000),
  });
}

// Reads the Responses API event stream and yields the answer's text as it is written.
async function* answerText(body: ReadableStream<Uint8Array>) {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  for (;;) {
    const { done, value } = await reader.read();
    if (done) return;
    buffer += decoder.decode(value, { stream: true }).replace(/\r\n/g, "\n");
    let boundary: number;
    while ((boundary = buffer.indexOf("\n\n")) >= 0) {
      const event = buffer.slice(0, boundary);
      buffer = buffer.slice(boundary + 2);
      const data = event.split("\n").filter(line => line.startsWith("data:")).map(line => line.slice(5).trim()).join("");
      if (!data || data === "[DONE]") continue;
      let parsed: unknown;
      try { parsed = JSON.parse(data); } catch { continue; }
      if (!parsed || typeof parsed !== "object" || !("type" in parsed)) continue;
      if (parsed.type === "response.output_text.delta" && "delta" in parsed && typeof parsed.delta === "string") yield parsed.delta;
      else if (parsed.type === "error" || parsed.type === "response.failed") throw new Error(`Responses API stream reported ${parsed.type}`);
    }
  }
}

export async function POST(request: Request) {
  if (!takeRateLimit(request)) {
    return json({ error: "That is a lot of questions at once. Please wait a minute and try again." }, 429);
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return json({ error: "Send a JSON chat message to continue." }, 415);
  }

  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).origin !== new URL(request.url).origin) {
        return json({ error: "Chat requests must come from this learning platform." }, 403);
      }
    } catch {
      return json({ error: "Chat requests must come from this learning platform." }, 403);
    }
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_LENGTH) {
    return json({ error: "That conversation is too long. Start a new chat and try again." }, 413);
  }

  // Read at most MAX_BODY_LENGTH bytes even when the sender omits or understates Content-Length.
  const rawBody = await readLimitedBody(request, MAX_BODY_LENGTH);
  if (rawBody === null) {
    return json({ error: "That conversation is too long. Start a new chat and try again." }, 413);
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return json({ error: "The chat message could not be read. Please try again." }, 400);
  }

  const messages =
    typeof body === "object" && body !== null && "messages" in body
      ? parseMessages(body.messages)
      : null;
  if (!messages) {
    return json({ error: "Write a short message to get started." }, 400);
  }

  const prompt = messages.at(-1)!.content;
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return json({ ...offlineGuidance(prompt), mode: "offline" });
  }

  try {
    let response = await requestAnswer(apiKey, messages, reasoningSupported);
    if (response.status === 400 && reasoningSupported) {
      const detail = await response.text().catch(() => "");
      if (/reasoning/i.test(detail)) {
        reasoningSupported = false;
        response = await requestAnswer(apiKey, messages, false);
      }
    }
    if (!response.ok || !response.body) throw new Error(`Responses API returned ${response.status}`);

    // Wait for the first words before committing to a streamed answer, so an early failure can
    // still fall back to the built-in guidance as a normal JSON reply.
    const text = answerText(response.body);
    const first = await text.next();
    if (first.done || !first.value) throw new Error("Responses API returned no text");

    const encoder = new TextEncoder();
    let length = first.value.length;
    const stream = new ReadableStream<Uint8Array>({
      start(controller) { controller.enqueue(encoder.encode(first.value)); },
      async pull(controller) {
        try {
          const next = await text.next();
          if (next.done) { controller.close(); return; }
          // The client sends answers back as history, which allows at most 4,000 characters.
          const room = MAX_ASSISTANT_MESSAGE_LENGTH - 80 - length;
          if (room <= 0) { await text.return(undefined); controller.close(); return; }
          const piece = next.value.slice(0, room);
          length += piece.length;
          controller.enqueue(encoder.encode(piece));
        } catch (error) {
          console.error("MPSC study assistant stream failed:", error);
          controller.enqueue(encoder.encode("\n\n(The answer was cut short. Please ask again.)"));
          controller.close();
        }
      },
      async cancel() { await text.return(undefined); },
    });
    return new Response(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store", "X-Chat-Mode": "ai" },
    });
  } catch (error) {
    console.error("MPSC study assistant request failed:", error);
    return json({ ...offlineGuidance(prompt), mode: "offline" });
  }
}
