import { NextResponse, type NextRequest } from "next/server";

// Keeps the site for real students in real browsers. It turns away:
//  - AI crawlers and AI "read this page" agents, which copy lessons and question banks into
//    training sets or answer engines (robots.txt asks them politely; this enforces it),
//  - whole-site copiers and scripted scrapers (HTTrack, wget, curl, Python, Go, Java, Node...),
//  - requests with no browser identity at all,
//  - other websites hotlinking our question banks, recorded classes and API.
// Search engines (Google, Bing) and chat link previews (WhatsApp, Telegram, Facebook) stay allowed,
// so students can still find the site and share links.
//
// A determined copier can fake a browser identity, so this is one layer, not a wall. The strongest
// layer is a CDN bot challenge in front of the domain (see SECURITY.md).

// Matched case-insensitively against the User-Agent header. Keep entries specific: a broad word
// could lock out a real phone browser.
export const blockedAgents = [
  // AI training crawlers and AI assistants that fetch pages on request
  "GPTBot", "ChatGPT-User", "OAI-SearchBot", "ClaudeBot", "Claude-User", "Claude-SearchBot", "Claude-Web",
  "anthropic-ai", "PerplexityBot", "Perplexity-User", "CCBot", "Bytespider", "Amazonbot", "Applebot-Extended",
  "Google-Extended", "GoogleOther", "Meta-ExternalAgent", "Meta-ExternalFetcher", "FacebookBot", "cohere-ai",
  "cohere-training-data-crawler", "Diffbot", "YouBot", "Timpibot", "ImagesiftBot", "omgili", "omgilibot",
  "PetalBot", "DuckAssistBot", "MistralAI-User", "AI2Bot", "Ai2Bot-Dolma", "PanguBot", "Kangaroo Bot",
  "Sidetrade", "img2dataset", "Scrapy", "FirecrawlAgent", "Crawl4AI", "Jina", "Webzio",
  // SEO and data-harvesting crawlers that resell copies of sites
  "AhrefsBot", "SemrushBot", "MJ12bot", "DotBot", "DataForSeoBot", "BLEXBot", "serpstatbot", "MegaIndex",
  // Whole-site downloaders
  "HTTrack", "Wget", "SiteSucker", "WebCopier", "WebZIP", "Teleport", "Offline Explorer", "WebStripper",
  "WebReaper", "Cyotek", "website-downloader", "SiteSnagger", "Website Extractor",
  // Scripted HTTP clients
  "curl/", "python-requests", "python-urllib", "python-httpx", "aiohttp", "Go-http-client", "Java/",
  "okhttp", "Apache-HttpClient", "libwww-perl", "lwp-trivial", "node-fetch", "axios/", "undici",
  "PhantomJS", "colly", "Nutch", "heritrix", "Zgrab", "masscan", "nikto", "sqlmap", "nmap",
];

const blockedPattern = new RegExp(
  blockedAgents.map(agent => agent.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&")).join("|"),
  "i",
);

// Paths whose files only this site's own pages should load.
const ownPagesOnly = /^\/(question-bank|lectures|api)\//;

export function isBlockedAgent(userAgent: string | null): boolean {
  const agent = (userAgent ?? "").trim();
  // No identity, or Node's default fetch identity ("node"): not a browser.
  if (agent.length < 8 || /^node$/i.test(agent)) return true;
  return blockedPattern.test(agent);
}

function refuse(reason: string) {
  return new NextResponse(`Access denied: ${reason}\n`, {
    status: 403,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
      "x-robots-tag": "noindex, nofollow, noarchive",
    },
  });
}

export function proxy(request: NextRequest) {
  if (isBlockedAgent(request.headers.get("user-agent"))) {
    return refuse("this site is for students using a web browser. Automated copying is not permitted.");
  }
  // Browsers say who asked for a file. Another website embedding or fetching our banks, classes or
  // API is refused; our own pages ("same-origin") and a student opening the link ("none") are fine.
  const site = request.headers.get("sec-fetch-site");
  if (ownPagesOnly.test(request.nextUrl.pathname) && (site === "cross-site" || site === "same-site")) {
    return refuse("this file can only be used on this site.");
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip hashed build files, images and the files every visitor or crawler may read (robots.txt,
    // manifest, service worker), so they stay fast and crawlers can still read robots.txt. Images
    // must pass: Next's image optimizer fetches them from this server without a browser identity.
    // Cross-Origin-Resource-Policy (next.config.ts) still stops other websites embedding them.
    "/((?!_next/static|_next/image|robots\\.txt|manifest\\.webmanifest|sw\\.js|.*\\.(?:png|webp|jpe?g|svg|ico)$).*)",
  ],
};
