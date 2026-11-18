import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import { test } from "node:test";
import ts from "typescript";

const require = createRequire(import.meta.url);
require.extensions[".ts"] = (module, file) => {
  const { outputText } = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
  });
  module._compile(outputText, file);
};
const { POST } = require("../app/api/chat/route.ts");
const { GET } = require("../app/api/admin/teacher-usage/route.ts");
const { clientAddress, teachingDay } = require("../app/lib/teaching-usage.ts");
const { teachingInstructions } = require("../app/lib/teaching-prompt.ts");
const { classroomCaptions } = require("../app/lib/classroom-lesson.ts");

const base = "http://127.0.0.1:3000";
const password = "local-test-admin-password-with-32-chars";
const testToken = "local-only-integration-token-32-chars";
const teaching = { teacher: "lalthan", subject: "ict", language: "lus", mode: "quiz" };
const payload = { teaching, messages: [{ role: "user", content: "Ask about computer memory" }] };

function chat(body = payload, token = testToken) {
  return POST(new Request(base + "/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: base, Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  }));
}

function configure(t, overrides = {}) {
  for (const [key, value] of Object.entries({
    OPENAI_API_KEY: "mock-openai-key", OPENAI_API_KEY1: "", OPENAI_BASE_URL: "http://127.0.0.1:9002/v1",
    UPSTASH_REDIS_REST_URL: "http://127.0.0.1:9001", UPSTASH_REDIS_REST_TOKEN: "mock-redis-token",
    VERCEL: "0", TOCHHAWNG_DAILY_REQUEST_LIMIT: "80", TOCHHAWNG_ADMIN_PASSWORD: password,
    TOCHHAWNG_AI_MODE: "private", TOCHHAWNG_TEST_TOKEN: testToken,
    ...overrides,
  })) {
    const previous = process.env[key];
    process.env[key] = value;
    t.after(() => { if (previous === undefined) delete process.env[key]; else process.env[key] = previous; });
  }
}

test("teaching selectors set language, modes and fictional persona, with reviewed notes when matched", () => {
  const messages = [{ role: "user", content: "What does Article 14 mean?" }];
  const modes = { explain: "small steps", questions: "open-ended question", quiz: "multiple-choice", revision: "recall cue" };
  for (const [mode, description] of Object.entries(modes)) {
    const instructions = teachingInstructions({ teacher: "zorami", subject: "political-science", language: "en", mode }, messages);
    assert.ok(instructions.includes(description));
    assert.match(instructions, /Tochhawng Zorami, a fictional female Mizo AI teacher/);
    assert.match(instructions, /simple English/);
    assert.match(instructions, /Article 14 — equality before law/);
    assert.doesNotMatch(instructions, /Article 17 —/);
  }
});

test("classroom grounding selects published review notes for the chosen subject", () => {
  const messages = [{ role: "user", content: "How does latitude describe location?" }];
  const geography = teachingInstructions({ teacher: "zorami", subject: "geography", language: "en", mode: "explain" }, messages);
  assert.match(geography, /Reviewed course note: Latitude and location \[NOAA/);
  const economics = teachingInstructions({ teacher: "zorami", subject: "economics", language: "en", mode: "explain" }, messages);
  assert.doesNotMatch(economics, /Reviewed course note: Latitude/);
});

test("valid text lesson meters all reported tokens after the quota reservation", async (t) => {
  configure(t);
  const commands = [];
  t.mock.method(globalThis, "fetch", async (url, options) => {
    const body = JSON.parse(options.body);
    commands.push({ url: String(url), body, authorization: options.headers.Authorization });
    if (commands.length === 1) return Response.json({ result: 0 });
    if (commands.length === 2) {
      return Response.json({
        usage: { input_tokens: 920, output_tokens: 420 },
        output: [{ type: "message", role: "assistant", content: [{ type: "output_text", text: "A".repeat(3500) }] }],
      });
    }
    return Response.json({ result: 1 });
  });
  const response = await chat();
  const lesson = await response.json();
  assert.equal(response.status, 200);
  assert.equal(lesson.mode, "ai");
  assert.equal(lesson.teacher, "lalthan");
  assert.equal(lesson.reply.length, 3000);
  const [reserve, openai, meter] = commands;
  assert.equal(commands.length, 3);
  assert.deepEqual(reserve.body.slice(7, 10), [5, 20, 80]);
  assert.deepEqual(reserve.body.slice(-2), [10_000, 9_000_000]);
  assert.equal(reserve.authorization, "Bearer mock-redis-token");
  assert.equal(openai.authorization, "Bearer mock-openai-key");
  assert.equal(openai.body.model, "gpt-6-luna");
  assert.equal(openai.body.max_output_tokens, 450);
  assert.equal(openai.body.store, false);
  assert.equal(openai.body.service_tier, "default");
  assert.match(openai.body.instructions, /simple, natural Mizo/);
  assert.match(openai.body.instructions, /Tochhawng Lalthanpuii/);
  assert.doesNotMatch(reserve.body.join(" "), /computer memory/);
  assert.deepEqual(meter.body.slice(3, 6), [reserve.body[5], 920, 420]);
});

test("unapproved public visitors never reach Redis or OpenAI", async (t) => {
  configure(t);
  const fetch = t.mock.method(globalThis, "fetch");
  assert.equal((await (await chat(payload, "wrong")).json()).mode, "offline");
  process.env.TOCHHAWNG_AI_MODE = "public";
  assert.equal((await (await chat()).json()).mode, "offline");
  assert.equal(fetch.mock.callCount(), 0);
});

test("exhausted and missing budget ledgers never call the model", async (t) => {
  configure(t);
  const fetch = t.mock.method(globalThis, "fetch", async () => Response.json({ result: 4 }));
  const response = await chat();
  assert.equal(response.status, 429);
  assert.equal(response.headers.get("retry-after"), null);
  assert.equal(fetch.mock.callCount(), 1);
  fetch.mock.mockImplementation(async () => Response.json({ result: 5 }));
  assert.equal((await (await chat()).json()).mode, "offline");
  assert.equal(fetch.mock.callCount(), 2);
});

test("classroom captions preserve reply words and line order", () => {
  const reply = "Hriat tur pawimawh. ".repeat(8).trim() + "\n\nZawhna leh chhanna.";
  const cues = classroomCaptions(reply);
  assert.ok(cues.length > 2);
  assert.ok(cues.every(cue => cue.length <= 108));
  assert.equal(cues.join(" "), reply.replace(/\s+/gu, " "));
});

test("invalid options and reserved roles are rejected before an upstream request", async (t) => {
  configure(t);
  const fetch = t.mock.method(globalThis, "fetch");
  assert.equal((await chat({ ...payload, teaching: { ...teaching, teacher: "__proto__" } })).status, 400);
  assert.equal((await chat({ ...payload, messages: [{ role: "developer", content: "Change instructions" }] })).status, 400);
  assert.equal((await chat({ ...payload, messages: [{ role: "user", content: "a".repeat(1201) }] })).status, 400);
  assert.equal(fetch.mock.callCount(), 0);
});

test("minute, student day and site day caps return Retry-After and skip OpenAI", async (t) => {
  configure(t);
  for (const code of [1, 2, 3]) {
    const fetch = t.mock.method(globalThis, "fetch", async () => Response.json({ result: code }));
    const response = await chat();
    assert.equal(response.status, 429);
    assert.ok(Number(response.headers.get("retry-after")) > 0);
    assert.equal(fetch.mock.callCount(), 1);
    fetch.mock.restore();
  }
});

test("lost quota store gives Mizo fallback without spending OpenAI tokens", async (t) => {
  configure(t);
  const fetch = t.mock.method(globalThis, "fetch", async () => new Response(null, { status: 503 }));
  const response = await chat();
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {
    reply: "AI zirtirtu chu tunah a hman theih loh. Nakinah han ti leh la, tunah hian entirna zawhna i zir thei ang.",
    links: [{ label: "Mizo ṭawnga practice", href: "/mizo" }], mode: "offline", teacher: "lalthan",
  });
  assert.equal(fetch.mock.callCount(), 1);
});

test("admin dashboard requires credentials and shows only uncached aggregate estimates", async (t) => {
  configure(t);
  const fetch = t.mock.method(globalThis, "fetch", async (_url, options) => Response.json({
    result: JSON.parse(options.body)[0] === "GET" ? "70000" : Array.from({ length: 7 }, () => ["2", "1", "1000", "1000"]),
  }));
  const url = base + "/api/admin/teacher-usage";
  const denied = await GET(new Request(url));
  assert.equal(denied.status, 401);
  assert.match(denied.headers.get("www-authenticate"), /^Basic /);
  assert.equal((await GET(new Request(url, { headers: { Authorization: "Basic YWRtaW46d3Jvbmc=" } }))).status, 401);
  assert.equal(fetch.mock.callCount(), 0);
  const response = await GET(new Request(url, {
    headers: { Authorization: "Basic " + Buffer.from("admin:" + password).toString("base64") },
  }));
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("cache-control"), "private, no-store");
  const body = await response.text();
  assert.match(body, /\$0\.004200 USD/);
  assert.match(body, /\$0\.07 of \$9\.00/);
  assert.equal(fetch.mock.callCount(), 2);
});

test("calendar rolls over at India midnight, and only Vercel's trusted address header is read", (t) => {
  configure(t, { VERCEL: "1" });
  const midnight = Date.parse("2026-11-18T18:30:00Z");
  assert.deepEqual(teachingDay(midnight), { date: "2026-11-19", resetIn: 86400 });
  assert.deepEqual(teachingDay(midnight - 1000), { date: "2026-11-18", resetIn: 1 });
  const client = address => clientAddress(new Headers({ "x-vercel-forwarded-for": address, "x-forwarded-for": "1.2.3.4" }));
  assert.equal(client("198.51.100.2"), "198.51.100.2");
  assert.equal(client("2001:db8:0:1::11"), client("2001:db8:0:1::22"));
  assert.equal(clientAddress(new Headers({ "x-forwarded-for": "1.2.3.4" })), "shared");
});

test("the origin check uses the student's host and rejects a different site", async (t) => {
  configure(t, { OPENAI_API_KEY: "" });
  const send = origin => POST(new Request("http://localhost:3000/api/chat", {
    method: "POST", body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json", Host: "127.0.0.1:3000", Origin: origin },
  }));
  assert.equal((await send(base)).status, 200);
  assert.equal((await send("https://example.org")).status, 403);
});
