# Security

MPSC Free Mock is a free study platform used by students. Thank you for helping keep it safe.

## Reporting a vulnerability

Please report security issues privately, not in public issues. Use GitHub's **Report a vulnerability** button on this repository's Security tab, or contact the repository owner directly. Include steps to reproduce. We aim to respond within a week.

## What the app stores

- Practice progress, planner check-offs, simulator attempts and class progress are kept only in the student's own browser (`localStorage`). They are never sent to a server.
- The study assistant sends the current chat messages to `/api/chat`. When an AI key is configured, the server forwards them to the model provider with storage disabled (`store: false`). Nothing is logged except failures.
- There are no accounts, passwords or payments.

## Protections in place

- **Security headers** (`next.config.ts`): a Content Security Policy limited to this origin, `frame-ancestors 'none'` and `X-Frame-Options: DENY` against clickjacking, `nosniff`, a strict referrer policy, HSTS, a Permissions-Policy that disables camera, microphone and location, and no `X-Powered-By` banner.
- **Bots, scrapers and copying** (`proxy.ts`, `app/robots.ts`): requests from AI crawlers and AI page readers (GPTBot, ClaudeBot, PerplexityBot, CCBot, Bytespider and others), whole-site copiers (HTTrack, wget, SiteSucker), scripted clients (curl, Python, Go, Java, Node) and requests with no browser identity get `403`. Other websites cannot load the question banks, recorded classes or API (`Sec-Fetch-Site` check) or embed any of our files (`Cross-Origin-Resource-Policy: same-origin`). `robots.txt` turns AI and SEO crawlers away and keeps data files out of search; pages carry `noai` hints. Google, Bing and chat link previews (WhatsApp, Telegram, Facebook) are still allowed.
- **Copyright:** every page footer links to `/terms`; downloaded notes carry a notice; the repository is `UNLICENSED` (see `LICENSE`).
- **Chat API:**
  - JSON-only requests
  - same-origin check
  - per-client rate limit
  - body size capped while reading
  - strict message schema (no client-supplied system prompts)
  - bounded model output
- **Note downloads:** every value is HTML-escaped, and the file is served with its own locked-down CSP.
- **Automated checks:** CI runs on every pull request. It covers tests, lint, types, a dependency audit (`npm run audit`: the production tree must be clean, and the only allowed exceptions are dev-only advisories with no upstream fix, listed with a review date), the build and a browser smoke test that re-verifies the headers and the API abuse cases. Dependabot proposes dependency updates weekly.

## Known limits

- The bot block reads the `User-Agent`, which a determined copier can fake. For a real human check (the "checking your browser" page some sites show), put the domain behind a CDN bot challenge, such as Cloudflare with Bot Fight Mode and "Block AI bots" turned on, or Vercel's Firewall with Bot Protection and the AI bot rule. These run before the app, cost nothing extra for students, and do not need code here.
- Anything a browser can show, a person can copy by hand. The protections make bulk copying hard and give grounds for takedown notices; they cannot make visible text uncopyable.

- The chat rate limit is held in memory per server instance. On serverless hosting, a determined abuser spread across instances can exceed it. If an AI key is enabled, set a spending limit with the model provider.
- The CSP allows inline scripts, which Next.js needs for statically generated pages without nonces. A nonce-based CSP would remove this, but it would make every page render dynamically.
