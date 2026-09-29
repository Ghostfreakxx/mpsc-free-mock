<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Always debug before merging

Students use this app live. Every change, from any agent or person, goes through these steps before merging:

1. `npm run check`: question banks, all tests, lint and types. It must pass.
2. `npm run build`, then start the server (`npx next start -p 3000`) and run `npm run smoke`: security headers, chat API abuse cases, every page at 360px with no browser errors or CSP violations, practice and the simulator.
3. Recorded-class changes: also run `TEST_URL=http://localhost:3000 PLAYWRIGHT_CHANNEL=chromium node scripts/check-lecture-library.mjs`.
4. Merge `main` into your branch before merging and re-run the checks. Other agents may have changed the same files.

CI (`.github/workflows/ci.yml`) runs all of this on every pull request. Do not merge a red PR. Never skip, weaken or delete a test to make it pass.

# Security rules

- Never commit secrets. `OPENAI_API_KEY` lives only in the server environment, never in a `NEXT_PUBLIC_` variable or in client code.
- Security headers and the Content Security Policy live in `next.config.ts`. If a page needs a new external origin, add that one origin to the matching directive. Never add wildcards or `'unsafe-eval'` for production.
- Treat every request to `/api/*` as hostile. Validate types and sizes, cap body size while reading, and keep the origin check and rate limit.
- Render user and model text as text. Do not use `dangerouslySetInnerHTML`. Generated HTML (note downloads) must escape every value with `escapeHtml`.
- Links that open a new tab need `rel="noreferrer"`.
- Validate anything read back from `localStorage`; it can be corrupt or edited.
- `npm audit --audit-level=high` must pass. Review Dependabot PRs promptly.
