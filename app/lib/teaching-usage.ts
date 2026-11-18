import { createHmac, randomUUID } from "node:crypto";
import { isIP } from "node:net";

export const TEACHING_MODEL = "gpt-6-luna";
export const MAX_OUTPUT_TOKENS = 450;
export const MAX_PROVIDER_BODY_BYTES = 16_000;
const RESERVED_MICRODOLLARS = 10_000;
export const TEST_BUDGET_MICRODOLLARS = 9_000_000;
const budgetKey = "mpsc:tochhawng:v1:testing-budget";
export const PER_MINUTE_LIMIT = 5;
export const PER_ADDRESS_DAILY_LIMIT = 20;
const DAY_SECONDS = 86_400;
const INDIA_OFFSET_SECONDS = 19_800;
const USAGE_RETENTION_SECONDS = DAY_SECONDS * 14;

// Standard GPT-6 Luna rates, in USD per million tokens. Cached input is counted at the
// regular input price because the dashboard is a conservative estimate, not an invoice.
export const COST_PER_MILLION = { input: 0.10, output: 0.50 };

const reserveScript = `
  redis.call('ZREMRANGEBYSCORE', KEYS[1], '-inf', tonumber(ARGV[6]) - 60000)
  if redis.call('ZCARD', KEYS[1]) >= tonumber(ARGV[1]) then return 1 end
  if tonumber(redis.call('GET', KEYS[2]) or '0') >= tonumber(ARGV[2]) then return 2 end
  if tonumber(redis.call('HGET', KEYS[3], 'requests') or '0') >= tonumber(ARGV[3]) then return 3 end
  local reserved = tonumber(redis.call('GET', KEYS[4]) or '')
  if not reserved or reserved < 0 or reserved % tonumber(ARGV[8]) ~= 0
    or redis.call('PTTL', KEYS[4]) ~= -1 then return 5 end
  if reserved + tonumber(ARGV[8]) > tonumber(ARGV[9]) then return 4 end
  redis.call('INCRBY', KEYS[4], ARGV[8])
  redis.call('ZADD', KEYS[1], ARGV[6], ARGV[7])
  redis.call('EXPIRE', KEYS[1], 65)
  if redis.call('INCR', KEYS[2]) == 1 then redis.call('EXPIRE', KEYS[2], ARGV[4]) end
  redis.call('HINCRBY', KEYS[3], 'requests', 1)
  redis.call('EXPIRE', KEYS[3], ARGV[5])
  return 0
`;

const meterScript = `
  redis.call('HINCRBY', KEYS[1], 'metered', 1)
  redis.call('HINCRBY', KEYS[1], 'input', ARGV[1])
  redis.call('HINCRBY', KEYS[1], 'output', ARGV[2])
  redis.call('EXPIRE', KEYS[1], ARGV[3])
  return 1
`;

const readScript = `
  local rows = {}
  for i, key in ipairs(KEYS) do
    local row = redis.call('HMGET', key, 'requests', 'metered', 'input', 'output')
    for j = 1, 4 do if not row[j] then row[j] = '0' end end
    rows[i] = row
  end
  return rows
`;

export function teachingDay(now = Date.now()) {
  const shifted = Math.floor(now / 1000) + INDIA_OFFSET_SECONDS;
  const elapsed = shifted % DAY_SECONDS;
  return {
    date: new Date((shifted - elapsed) * 1000).toISOString().slice(0, 10),
    resetIn: DAY_SECONDS - elapsed,
  };
}

export function teachingDailyLimit() {
  const raw = process.env.TOCHHAWNG_DAILY_REQUEST_LIMIT;
  return raw && /^[1-9]\d{0,3}$/.test(raw) ? Number(raw) : 500;
}

export function clientAddress(headers: Headers) {
  // Vercel overwrites this header with the public client IP. Other hosts share one
  // conservative bucket unless they add a documented trusted proxy integration.
  if (process.env.VERCEL !== "1") return "shared";
  const address = headers.get("x-vercel-forwarded-for")?.trim() ?? "";
  const version = isIP(address);
  if (version === 4) return address;
  if (version !== 6) return "shared";

  const canonical = new URL(`http://[${address}]`).hostname.slice(1, -1);
  if (canonical.startsWith("::ffff:")) return canonical;
  const [first, last] = canonical.split("::");
  const prefix = first ? first.split(":") : [];
  if (last !== undefined) {
    const suffix = last ? last.split(":") : [];
    prefix.push(...Array<string>(8 - prefix.length - suffix.length).fill("0"), ...suffix);
  }
  return `${prefix.slice(0, 4).join(":")}/64`;
}

function redisConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
  if (!url || !token) return null;
  const endpoint = new URL(url);
  const loopback = ["localhost", "127.0.0.1", "[::1]"].includes(endpoint.hostname);
  if (endpoint.protocol !== "https:" && !(loopback && endpoint.protocol === "http:")) return null;
  return { endpoint, token };
}

async function redis(command: (string | number)[], config = redisConfig()): Promise<unknown> {
  if (!config) throw new Error("Usage store is not configured.");
  const response = await fetch(config.endpoint, {
    method: "POST",
    headers: { Authorization: `Bearer ${config.token}`, "Content-Type": "application/json" },
    body: JSON.stringify(command),
    cache: "no-store",
    redirect: "error",
    signal: AbortSignal.timeout(3_000),
  });
  if (!response.ok) throw new Error("Usage store rejected the command.");
  const data = await response.json();
  if (!data || !Object.hasOwn(data, "result") || data.error) throw new Error("Invalid usage store response.");
  return data.result;
}

function usageKey(date: string) {
  return `mpsc:tochhawng:v1:usage:${date}`;
}

export async function reserveTeachingRequest(request: Request, now = Date.now()) {
  const config = redisConfig();
  if (!config) throw new Error("Usage store is not configured.");
  const address = createHmac("sha256", config.token).update(clientAddress(request.headers)).digest("hex");
  const day = teachingDay(now);
  const key = usageKey(day.date);
  const result = await redis([
    "EVAL", reserveScript, 4, `mpsc:tochhawng:v1:minute:${address}`,
    `mpsc:tochhawng:v1:day:${day.date}:${address}`, key, budgetKey,
    PER_MINUTE_LIMIT, PER_ADDRESS_DAILY_LIMIT, teachingDailyLimit(), day.resetIn, USAGE_RETENTION_SECONDS,
    now, randomUUID(), RESERVED_MICRODOLLARS, TEST_BUDGET_MICRODOLLARS,
  ], config);
  if (result === 0) return { admitted: true, key } as const;
  if (result === 1) return { admitted: false, scope: "minute", retryAfter: 60 } as const;
  if (result === 4) return { admitted: false, scope: "budget", retryAfter: undefined } as const;
  if (result === 2 || result === 3) {
    return { admitted: false, scope: result === 2 ? "address-day" : "site-day", retryAfter: day.resetIn } as const;
  }
  throw new Error("Invalid admission result.");
}

export async function reservedTestBudget() {
  const result = await redis(["GET", budgetKey]);
  if (result === null) return null;
  if (typeof result !== "string" || !/^\d+$/.test(result) || !Number.isSafeInteger(Number(result))) {
    throw new Error("Invalid testing budget.");
  }
  return Number(result);
}

export async function inspectTestBudget() {
  const [reserved, ttl] = await Promise.all([reservedTestBudget(), redis(["PTTL", budgetKey])]);
  if (reserved === null || ttl === -2) return "missing";
  if (ttl !== -1 || reserved % RESERVED_MICRODOLLARS !== 0) return "invalid";
  return reserved + RESERVED_MICRODOLLARS <= TEST_BUDGET_MICRODOLLARS ? "ready" : "exhausted";
}

export async function meterTeachingResponse(key: string, input: number, output: number) {
  await redis(["EVAL", meterScript, 1, key, input, output, USAGE_RETENTION_SECONDS]);
}

export async function lastSevenTeachingDays(now = Date.now()) {
  const dates = Array.from({ length: 7 }, (_, index) => teachingDay(now - index * DAY_SECONDS * 1000).date);
  const rows = await redis(["EVAL", readScript, dates.length, ...dates.map(usageKey)]);
  if (!Array.isArray(rows) || rows.length !== dates.length) throw new Error("Invalid usage totals.");
  return dates.map((date, index) => {
    const row: unknown = rows[index];
    if (!Array.isArray(row) || row.length !== 4 || row.some(value => typeof value !== "string" || !/^\d+$/.test(value))) {
      throw new Error("Invalid usage row.");
    }
    const [requests, metered, input, output] = row.map(Number);
    if (![requests, metered, input, output].every(Number.isSafeInteger)) throw new Error("Invalid usage totals.");
    return { date, requests, metered, input, output, estimate: (input * COST_PER_MILLION.input + output * COST_PER_MILLION.output) / 1_000_000 };
  });
}
