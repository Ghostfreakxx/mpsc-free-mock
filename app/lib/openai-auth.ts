export function selectOpenAIApiKey(env: Record<string, string | undefined>): string | undefined {
  // Prefer the recently rotated Vercel secret alias until the environment variable is normalized.
  return env.OPENAI_API_KEY1?.trim() || env.OPENAI_API_KEY?.trim() || undefined;
}

export function sanitizedOpenAIApiErrorCode(payload: unknown): string {
  if (typeof payload !== "object" || payload === null || !("error" in payload)) return "unknown";
  const error = payload.error;
  if (typeof error !== "object" || error === null || !("code" in error)) return "unknown";
  const code = error.code;
  return typeof code === "string" && /^[A-Za-z0-9_.-]{1,64}$/.test(code) ? code : "unknown";
}
