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

function extractResponseText(payload: unknown) {
  if (typeof payload !== "object" || payload === null || !("output" in payload)) return "";
  const output = payload.output;
  if (!Array.isArray(output)) return "";

  return output
    .flatMap((item) => {
      if (typeof item !== "object" || item === null || !("content" in item)) return [];
      return Array.isArray(item.content) ? item.content : [];
    })
    .filter(
      (item): item is { type: string; text: string } =>
        typeof item === "object" &&
        item !== null &&
        "type" in item &&
        item.type === "output_text" &&
        "text" in item &&
        typeof item.text === "string",
    )
    .map((item) => item.text)
    .join("\n")
    .trim();
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
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-5.6-luna",
        instructions:
          "You are the MPSC study mentor for a learning platform built for students in Mizoram. Be warm, concise, practical, and teach reasoning rather than only giving answers. Help with study planning, concept explanations, and reviewing practice mistakes. The platform has MPSC practice at /mock-test, a student dashboard and planner at /, college notes at /college-notes, NEET practice at /neet, JEE Main practice at /jee, and CUET PG practice at /cuet-pg. Do not claim access to the student's scores or saved plan. Never invent current MPSC syllabus rules, exam dates, notifications, or current affairs; flag time-sensitive details and ask the learner to verify an official notice. If a question is ambiguous, ask one focused follow-up.",
        input: messages,
        max_output_tokens: 450,
        store: false,
      }),
      signal: AbortSignal.timeout(25_000),
    });

    if (!response.ok) throw new Error(`Responses API returned ${response.status}`);
    const reply = extractResponseText(await response.json());
    if (!reply) throw new Error("Responses API returned no text");

    return json({ reply, links: [], mode: "ai" });
  } catch (error) {
    console.error("MPSC study assistant request failed:", error);
    return json({ ...offlineGuidance(prompt), mode: "offline" });
  }
}
