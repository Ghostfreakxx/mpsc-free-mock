import { selectOpenAIApiKey } from "../app/lib/openai-auth.ts";
import { lastSevenTeachingDays, reservedTestBudget, TEACHING_MODEL } from "../app/lib/teaching-usage.ts";

const env = process.env;
const key = selectOpenAIApiKey(env);
const alias = env.OPENAI_API_KEY1?.trim() ? "OPENAI_API_KEY1" : "OPENAI_API_KEY";
const privateMode = env.TOCHHAWNG_AI_MODE === "private" && (env.TOCHHAWNG_TEST_TOKEN?.trim().length ?? 0) >= 32;
const admin = (env.TOCHHAWNG_ADMIN_PASSWORD?.trim().length ?? 0) >= 32;
console.log("Credential source:", key ? alias : "none");
console.log("Private text gate configured:", privateMode);
console.log("Dashboard credential configured:", admin);

let modelReady = false;
if (key) {
  try {
    const result = await fetch(`https://api.openai.com/v1/models/${encodeURIComponent(TEACHING_MODEL)}`, {
      headers: { Authorization: `Bearer ${key}` }, redirect: "error", signal: AbortSignal.timeout(10_000),
    });
    modelReady = result.ok && (await result.json()).id === TEACHING_MODEL;
    console.log("OpenAI model metadata:", TEACHING_MODEL, "HTTP", result.status, "available:", modelReady);
    if (!result.ok) void result.body?.cancel().catch(() => {});
  } catch {
    console.log("OpenAI model metadata lookup failed.");
  }
}

let redisReady = false;
if (env.UPSTASH_REDIS_REST_URL?.trim() && env.UPSTASH_REDIS_REST_TOKEN?.trim()) {
  try {
    const [budget, days] = await Promise.all([reservedTestBudget(), lastSevenTeachingDays()]);
    redisReady = budget !== null && days.length === 7;
    console.log("Redis read and initialized ledger:", redisReady);
  } catch {
    console.log("Redis read failed.");
  }
} else {
  console.log("Redis credentials missing.");
}
console.log("Ready for a separately approved private generation test:", modelReady && redisReady && privateMode && admin);
if (!modelReady || !redisReady || !privateMode || !admin) process.exitCode = 1;
