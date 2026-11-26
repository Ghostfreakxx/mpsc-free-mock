import { selectOpenAIApiKey } from "../app/lib/openai-auth.ts";
import { inspectTestBudget, lastSevenTeachingDays, teachingDailyLimit, TEACHING_MODEL } from "../app/lib/teaching-usage.ts";
import { loadTeachingEnv } from "./load-teaching-env.mjs";

loadTeachingEnv();

const env = process.env;
const key = selectOpenAIApiKey(env);
const alias = env.OPENAI_API_KEY1?.trim() ? "OPENAI_API_KEY1" : "OPENAI_API_KEY";
const privateMode = env.TOCHHAWNG_AI_MODE === "private" && (env.TOCHHAWNG_TEST_TOKEN?.trim().length ?? 0) >= 32;
const admin = (env.TOCHHAWNG_ADMIN_PASSWORD?.trim().length ?? 0) >= 32;
const officialEndpoint = !env.OPENAI_BASE_URL?.trim() || env.OPENAI_BASE_URL.replace(/\/$/, "") === "https://api.openai.com/v1";
console.log("Credential source:", key ? alias : "none");
console.log("Private text gate configured:", privateMode);
console.log("Dashboard credential configured:", admin);
console.log("Generation endpoint uses the official API base:", officialEndpoint);

let modelReady = false;
if (key) {
  try {
    const result = await fetch(`https://api.openai.com/v1/models/${encodeURIComponent(TEACHING_MODEL)}`, {
      headers: { Authorization: `Bearer ${key}` }, redirect: "error", signal: AbortSignal.timeout(10_000),
    });
    modelReady = result.ok && (await result.json()).id === TEACHING_MODEL;
    console.log("OpenAI model metadata:", TEACHING_MODEL, "HTTP", result.status, "available:", modelReady);
    if (result.status === 401) {
      const code = (await result.json().catch(() => null))?.error?.code;
      if (code === "expired_secret_key") console.log("OpenAI reports that the selected credential is expired.");
      else if (code === "invalid_api_key") console.log("OpenAI reports that the selected credential is invalid.");
      else console.log("Authentication rejected. Check the selected key, its project membership, and any IP allowlist before testing model access.");
    }
    if (result.status === 403 || result.status === 404) console.log("Check this project's model visibility and permission to read models.");
    if (!result.ok) void result.body?.cancel().catch(() => {});
  } catch {
    console.log("OpenAI model metadata lookup failed.");
  }
}

let redisReady = false;
if (env.UPSTASH_REDIS_REST_URL?.trim() && env.UPSTASH_REDIS_REST_TOKEN?.trim()) {
  try {
    const [budget, days] = await Promise.all([inspectTestBudget(), lastSevenTeachingDays()]);
    redisReady = budget === "ready" && days[0].requests < teachingDailyLimit();
    console.log("Redis ledger:", budget, "| available under daily limit:", redisReady);
  } catch {
    console.log("Redis read failed.");
  }
} else {
  console.log("Redis credentials missing.");
}
const ready = modelReady && redisReady && privateMode && admin && officialEndpoint;
console.log("Ready for a separately approved private generation test:", ready);
if (!ready) process.exitCode = 1;
