import { NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ResourceLink = {
  label: string;
  href: string;
};

type Guidance = {
  reply: string;
  links: ResourceLink[];
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

function offlineGuidance(prompt: string): Guidance {
  const text = prompt.toLowerCase();

  if (/\b(plan|planner|schedule|today|time|hours)\b/.test(text)) {
    return {
      reply:
        "Try a focused 90-minute session: spend 25 minutes revising one topic, 30 minutes answering practice questions, 20 minutes reviewing every miss, then 15 minutes recalling the key points without notes. Keep the session realistic and tick off a step in your study planner when you finish.",
      links: [{ label: "Open your study dashboard", href: "/" }],
    };
  }

  if (/\b(accuracy|wrong|mistake|improv|stuck|review)\b/.test(text)) {
    return {
      reply:
        "After each practice set, sort missed questions into three causes: a fact you did not know, a concept you misunderstood, or a rushed reading. Review just that gap, then retry the question later without looking at the answer. A short error log is more useful than repeating full sets blindly.",
      links: [{ label: "Review MPSC practice questions", href: "/mock-test" }],
    };
  }

  if (/\b(mock|practice|question|quiz|test)\b/.test(text)) {
    return {
      reply:
        "Open MPSC practice, choose a subject, and try a small set without notes. Check the explanation for each answer, especially the ones you guessed, then revisit those topics in your next session.",
      links: [{ label: "Start MPSC practice", href: "/mock-test" }],
    };
  }

  if (/\b(neet|biology|physics|chemistry)\b/.test(text)) {
    return {
      reply: "The NEET practice area is in the learning library. For a better recommendation, tell me your subject and the topic you are working on.",
      links: [{ label: "Open NEET practice", href: "/neet" }],
    };
  }

  if (/\b(cuet|postgraduate|pg)\b/.test(text)) {
    return {
      reply: "You can find CUET PG practice in the learning library. Share a subject or a question and I can help you work through it.",
      links: [{ label: "Open CUET PG practice", href: "/cuet-pg" }],
    };
  }

  if (/\b(notes|college|arts)\b/.test(text)) {
    return {
      reply: "College notes are available in the learning library. Tell me the paper or topic you need and I can help you make a concise revision outline.",
      links: [{ label: "Browse college notes", href: "/college-notes" }],
    };
  }

  if (/\b(syllabus|notification|current affairs|current affair|exam date|deadline)\b/.test(text)) {
    return {
      reply:
        "For current MPSC syllabus details, notifications, dates, and current affairs, use the latest official notice as your source; I do not want to guess on time-sensitive exam information. Paste a notice or question here and I can help explain it.",
      links: [{ label: "Open the learning dashboard", href: "/" }],
    };
  }

  if (/\b(help|what can you|who are you)\b/.test(text)) {
    return {
      reply:
        "I can help you break down a question, plan a focused study session, review wrong answers, or find a practice area. Paste a question or tell me your exam goal and how much time you have today.",
      links: [
        { label: "MPSC practice", href: "/mock-test" },
        { label: "Study dashboard", href: "/" },
      ],
    };
  }

  return {
    reply:
      "Tell me what you are studying or paste the question you are stuck on. I can help you reason it through, plan a revision session, or point you to the right practice area.",
    links: [{ label: "Browse learning resources", href: "/" }],
  };
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

  const rawBody = await request.text();
  if (rawBody.length > MAX_BODY_LENGTH) {
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
        model: process.env.OPENAI_MODEL || "gpt-6-astra",
        instructions:
          "You are the MPSC study mentor for a learning platform built for students in Mizoram. Be warm, concise, practical, and teach reasoning rather than only giving answers. Help with study planning, concept explanations, and reviewing practice mistakes. The platform has MPSC practice at /mock-test, a student dashboard and planner at /, college notes at /college-notes, NEET practice at /neet, and CUET PG practice at /cuet-pg. Do not claim access to the student's scores or saved plan. Never invent current MPSC syllabus rules, exam dates, notifications, or current affairs; flag time-sensitive details and ask the learner to verify an official notice. If a question is ambiguous, ask one focused follow-up.",
        input: messages,
        max_output_tokens: 450,
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
