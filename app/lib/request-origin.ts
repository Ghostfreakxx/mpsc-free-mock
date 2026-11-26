// Next's route URL can contain the listener address. The Host header identifies the
// origin the browser actually reached. Only use a forwarded scheme from Vercel.
export function requestOrigin(request: Request) {
  const url = new URL(request.url);
  const host = request.headers.get("host") ?? url.host;
  const useHttps = process.env.VERCEL === "1" && request.headers.get("x-forwarded-proto") === "https";
  if (!/^(?:[a-z0-9.-]+|\[[a-f0-9:]+\])(?::\d{1,5})?$/i.test(host)) return null;
  try {
    return new URL(`${useHttps ? "https:" : url.protocol}//${host}`);
  } catch {
    return null;
  }
}
