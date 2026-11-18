import { createHash, timingSafeEqual } from "node:crypto";
import { requestOrigin } from "../../../lib/request-origin";
import { lastSevenTeachingDays, teachingDailyLimit, TEACHING_MODEL } from "../../../lib/teaching-usage";

export const dynamic = "force-dynamic";

const privateHeaders = {
  "Cache-Control": "private, no-store",
  "Vary": "Authorization",
  "X-Robots-Tag": "noindex, nofollow, noarchive",
};

function authorized(header: string | null, password: string) {
  if (!header?.startsWith("Basic ") || header.length > 512) return false;
  const credentials = Buffer.from(header.slice(6), "base64");
  const given = createHash("sha256").update(credentials).digest();
  const expected = createHash("sha256").update(`admin:${password}`).digest();
  return timingSafeEqual(given, expected);
}

export async function GET(request: Request) {
  const url = requestOrigin(request);
  if (!url || (url.protocol !== "https:" && !["127.0.0.1", "localhost", "[::1]"].includes(url.hostname))) {
    return new Response("Not found", { status: 404, headers: privateHeaders });
  }
  const password = process.env.TOCHHAWNG_ADMIN_PASSWORD?.trim() ?? "";
  if (password.length < 32) return new Response("Not found", { status: 404, headers: privateHeaders });
  if (!authorized(request.headers.get("authorization"), password)) {
    return new Response("Administrator credentials required.", {
      status: 401,
      headers: { ...privateHeaders, "WWW-Authenticate": 'Basic realm="Tochhawng Teachers usage", charset="UTF-8"' },
    });
  }

  try {
    const days = await lastSevenTeachingDays();
    const current = days[0];
    const total = days.reduce((sum, day) => sum + day.estimate, 0);
    // Row dates are fixed-format server dates. All usage values are validated integers.
    const rows = days.map(day => `<tr><th scope="row">${day.date}</th><td>${day.requests}</td><td>${day.requests - day.metered}</td><td>${day.input.toLocaleString("en-IN")}</td><td>${day.output.toLocaleString("en-IN")}</td><td>$${day.estimate.toFixed(6)}</td></tr>`).join("");
    return new Response(`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tochhawng Teachers usage</title>
<style>
  :root { color-scheme: light dark; font-family: system-ui, sans-serif }
  body { margin: auto; padding: 1rem; max-width: 60rem }
  p { max-width: 62ch; line-height: 1.6 }
  .table { overflow: auto }
  table { width: 100%; border-collapse: collapse; white-space: nowrap }
  th, td { border-bottom: 1px solid GrayText; padding: .6rem; text-align: right }
  th:first-child { text-align: left }
</style></head>
<body><main><h1>Tochhawng Teachers usage</h1>
<p>Today’s requests: <strong>${current.requests} of ${teachingDailyLimit()}</strong>. Estimated cost over seven days: <strong>$${total.toFixed(6)} USD</strong>.</p>
<p>Estimates use reported ${TEACHING_MODEL} tokens at standard prices. Cached input is counted at the regular rate. Requests without usage data are listed separately and may still incur a charge. This is not a billing statement.</p>
<div class="table" role="region" aria-label="Daily teaching usage" tabindex="0">
<table><thead><tr><th scope="col">Date (India)</th><th scope="col">Requests</th><th scope="col">Unmetered</th><th scope="col">Input tokens</th><th scope="col">Output tokens</th><th scope="col">Estimated USD</th></tr></thead><tbody>${rows}</tbody></table></div>
</main></body></html>`, {
      headers: { ...privateHeaders, "Content-Type": "text/html; charset=utf-8" },
    });
  } catch {
    return new Response("Usage estimates are temporarily unavailable.", { status: 503, headers: privateHeaders });
  }
}
