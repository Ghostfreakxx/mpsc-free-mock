export type OfflineKind = "html" | "audio" | "captions" | "asset";

const contentTypes: Record<OfflineKind, RegExp> = {
  html: /^text\/html\b/i,
  audio: /^audio\/mpeg\b/i,
  captions: /^text\/vtt\b/i,
  asset: /^(?:text\/css|(?:text|application)\/javascript|font\/|application\/font-)/i,
};

export async function cachePublicFile(cache: Cache, file: string, kind: OfflineKind, signal: AbortSignal, bytes = 0) {
  const site = location.origin;
  const url = new URL(file, site);
  if (!file.startsWith("/") || url.origin !== site || url.search || url.hash || url.pathname.startsWith("/api/")) {
    throw new Error("A public lesson file could not be verified.");
  }
  const response = await fetch(file, { cache: "reload", credentials: "omit", redirect: "error", signal });
  const type = response.headers.get("Content-Type") ?? "";
  const length = response.headers.get("Content-Length");
  if (response.status !== 200 || response.type !== "basic" || response.redirected || !contentTypes[kind].test(type)
    || (bytes && length !== null && Number(length) !== bytes)
    || /(?:^|,)\s*(?:private|no-store)\b/i.test(response.headers.get("Cache-Control") ?? "")) {
    throw new Error("A public lesson file could not be verified.");
  }
  await cache.put(file, response);
}
