<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Always debug before merging

Students use this app live. Every change, from any agent or person, goes through these steps before merging:

1. `npm run check`: question banks, all tests, lint and types. It must pass.
2. `npm run build`, then start the server (`npx next start -p 3000`) and run `npm run smoke`: security headers, chat API abuse cases, every page at 360px with no browser errors or CSP violations, practice and the simulator.
3. Recorded-class or course changes: also run `node scripts/check-lecture-library.mjs` and `node scripts/check-jee-course.mjs` with `TEST_URL=http://localhost:3000 PLAYWRIGHT_CHANNEL=chromium`.
4. Merge `main` into your branch before merging and re-run the checks. Other agents may have changed the same files.

CI (`.github/workflows/ci.yml`) runs all of this on every pull request. Do not merge a red PR. Never skip, weaken or delete a test to make it pass.

# Security rules

- Never commit secrets. `OPENAI_API_KEY` lives only in the server environment, never in a `NEXT_PUBLIC_` variable or in client code.
- Security headers and the Content Security Policy live in `next.config.ts`. If a page needs a new external origin, add that one origin to the matching directive. Never add wildcards or `'unsafe-eval'` for production.
- Treat every request to `/api/*` as hostile. Validate types and sizes, cap body size while reading, and keep the origin check and rate limit.
- Render user and model text as text. Do not use `dangerouslySetInnerHTML`. Generated HTML (note downloads) must escape every value with `escapeHtml`.
- Links that open a new tab need `rel="noreferrer"`.
- Validate anything read back from `localStorage`; it can be corrupt or edited.
- `npm run audit` must pass: no high or critical advisory anywhere in the tree. The only exception is an entry in `scripts/audit.mjs`'s allowlist, which needs three things: no fixed release exists, the package is dev-only, and the entry has a review date. Never allowlist a production dependency. Review Dependabot PRs promptly.

# Performance rules

Many students use phones on slow mobile data, so keep each page's download small.

- Never import the question bank (`app/data/reviewed-content.ts`, the `*-topics.ts` files) or the Mizo engine (`mizo-translations.ts`, `mizo-concepts.ts`, `mizo-manual.ts`) at runtime in a `"use client"` file. `npm test` enforces this (`scripts/client-bundle.test.mjs`).
- Practice pages and the simulator load questions from `/question-bank/<stream>` (`app/question-bank/[stream]/route.ts`, built from `app/data/practice-data.ts`). Use `useQuestionBank` or `loadQuestionBank` from `app/lib/use-question-bank.ts`. Small Mizo constants live in `app/data/mizo-meta.ts`.
- Do not pass large data as props to client components on pages that other pages link to. Next.js prefetches linked pages, including their props.
- JEE classes: never import `lessons.ts`, `study-lessons.ts`, the `*-study.ts` files or the `app/data/jee-*.json` lectures at runtime in a `"use client"` file. The class library gets slim summaries from `app/jee/classes/library-summary.ts` through its server page. `lecture-player.tsx` loads each class diagram with `next/dynamic`; add new diagrams the same way, not as static imports. A diagram may import its own board data (`*-additions.ts`), because it loads only on its own class page.
- Links to heavy pages such as `/jee/classes` use `prefetch={false}`.
- Keep saved-progress keys unchanged when you refactor a practice page, so students keep their progress.
- Practice recycles questions automatically: options are reshuffled each showing, aptitude questions come back with fresh numbers, and missed questions collect in "My mistakes" (`app/lib/question-presentation.ts`, `app/lib/practice-progress.ts`). Write new aptitude questions as templates in `app/data/aptitude-templates.ts` (with Mizo in `app/data/mizo-aptitude.ts` once a fluent writer drafts it) so they recycle too; `npm test` checks that every template rebuilds its bank questions exactly. Both files are loaded in the browser, so keep them free of bank imports.
