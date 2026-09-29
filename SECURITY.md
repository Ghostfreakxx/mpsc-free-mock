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
- **Chat API:**
  - JSON-only requests
  - same-origin check
  - per-client rate limit
  - body size capped while reading
  - strict message schema (no client-supplied system prompts)
  - bounded model output
- **Note downloads:** every value is HTML-escaped, and the file is served with its own locked-down CSP.
- **Automated checks:** CI runs on every pull request. It covers tests, lint, types, `npm audit`, the build and a browser smoke test that re-verifies the headers and the API abuse cases. Dependabot proposes dependency updates weekly.

## Known limits

- The chat rate limit is held in memory per server instance. On serverless hosting, a determined abuser spread across instances can exceed it. If an AI key is enabled, set a spending limit with the model provider.
- The CSP allows inline scripts, which Next.js needs for statically generated pages without nonces. A nonce-based CSP would remove this, but it would make every page render dynamically.
