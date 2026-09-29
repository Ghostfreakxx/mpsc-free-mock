import { createHash, timingSafeEqual } from "node:crypto";

export const runtime = "nodejs";
export const maxDuration = 120;

// Temporary audition capability: only the digest is public; access expires automatically.
const accessDigest = "a56e39bdc3877c29a385f07727eda76bc47110313af20bf5935e2490bead0a9c";
const expires = 1790675984844;
const headers = { "Cache-Control": "no-store" };
const input = "Let's make this simple. Imagine someone tells you a classroom is five long. Five what? Meters? Kilometers? A number needs a unit before it tells us anything useful. Now, here's a common exam trap: one centimeter is one hundredth of a meter, but one square centimeter is not one hundredth of a square meter. Both sides of the square must be converted. So we multiply one hundredth by one hundredth. The result is one ten-thousandth of a square meter. Take a moment to picture that square. Once you understand why, you won't need to memorize the conversion.";

export async function POST(request: Request) {
  const authorization = request.headers.get("authorization") ?? "";
  const digest = createHash("sha256").update(authorization.replace(/^Bearer /, "")).digest();
  if (Date.now() >= expires || !timingSafeEqual(digest, Buffer.from(accessDigest, "hex"))) {
    return Response.json({ error: "Not authorized" }, { status: 401, headers });
  }
  const voice = new URL(request.url).searchParams.get("voice");
  if (voice !== "coral" && voice !== "marin") {
    return Response.json({ error: "Unsupported voice" }, { status: 400, headers });
  }
  const key = process.env.OPENAI_API_KEY?.trim();
  if (!key) return Response.json({ error: "Speech key unavailable" }, { status: 503, headers });
  try {
    const response = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gpt-4o-mini-tts", voice, input, response_format: "mp3",
        instructions: "Speak in natural, neutral American English, with a warm feminine voice. You are a friendly, knowledgeable physics tutor teaching a teenager one-to-one. Sound conversational and genuinely interested, not like an announcer or automated assistant. Use subtle varied intonation, a comfortable teaching pace and brief natural pauses around the numerical example. Emphasize the contrast between length and area. Avoid exaggerated enthusiasm, sing-song delivery, whispering and robotic cadence. Read the supplied words exactly; add no commentary."
      }),
      signal: AbortSignal.timeout(100000),
    });
    if (!response.ok) {
      // Expose only allowlisted diagnostics, never provider messages or credentials.
      const body = await response.json().catch(() => ({}));
      const code = ["insufficient_quota", "invalid_api_key", "model_not_found", "rate_limit_exceeded"].includes(body.error?.code) ? body.error.code : "provider_error";
      return Response.json({ error: code, status: response.status }, { status: 502, headers });
    }
    return new Response(await response.arrayBuffer(), { headers: { ...headers, "Content-Type": "audio/mpeg" } });
  } catch {
    return Response.json({ error: "Speech request failed" }, { status: 502, headers });
  }
}
