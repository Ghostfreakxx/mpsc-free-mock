import type { MetadataRoute } from "next";

// Search engines may list the pages so students can find them; AI crawlers and site copiers may not
// read anything. proxy.ts enforces this for crawlers that ignore robots.txt.
const aiAndCopyBots = [
  "GPTBot", "ChatGPT-User", "OAI-SearchBot", "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai",
  "PerplexityBot", "Perplexity-User", "CCBot", "Bytespider", "Amazonbot", "Applebot-Extended", "Google-Extended",
  "GoogleOther", "Meta-ExternalAgent", "FacebookBot", "cohere-ai", "Diffbot", "YouBot", "Timpibot", "PetalBot",
  "ImagesiftBot", "omgilibot", "DuckAssistBot", "MistralAI-User", "AI2Bot", "img2dataset", "Scrapy",
  "AhrefsBot", "SemrushBot", "MJ12bot", "DotBot", "DataForSeoBot", "BLEXBot", "HTTrack", "Wget",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: aiAndCopyBots, disallow: "/" },
      // Data files and the API are for the site's own pages, not for indexing.
      { userAgent: "*", allow: "/", disallow: ["/api/", "/question-bank/", "/lectures/", "/downloads/"] },
    ],
  };
}
