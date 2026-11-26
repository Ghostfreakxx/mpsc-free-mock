# Free MPSC Mock production checklist

## Final offline release-candidate audit

**Decision: NOT READY for production.** The application build from `c555e7372793c85a55c6eea1249f7b819c99953c` is the candidate. Local upgrade and offline checks passed, but the currently available pre-release main worker deletes explicitly saved lecture packs on rollback. Release requires a pack-preserving rollback target tested on the same origin, or an explicit release decision accepting pack loss and the verified re-download procedure. Authorization and verification of the target environment, deployment revision, and recovery plan also remain open. No production settings were accessed or changed.

Both hosted jobs passed for this candidate: [tests, lint, types, audit and build](https://github.com/Ghostfreakxx/mpsc-free-mock/actions/runs/45897324284/job/140174345882) and [browser smoke, security headers and classes](https://github.com/Ghostfreakxx/mpsc-free-mock/actions/runs/45897324284/job/140177729817), including the recorded-course, Genesis and zero-paid-request steps in [run #274](https://github.com/Ghostfreakxx/mpsc-free-mock/actions/runs/45897324284).

### Upgrade and rollback evidence

Two production builds ran behind a loopback proxy on a single browser origin. GitHub `main` resolved to `62130b61c3c032b0ffad85a86bec1a679f593af4`. A disposable Chromium profile used the main UI to write a legacy practice answer, submit one 25-question MPSC exam, and leave a second paper in progress with a selected and marked answer. Main predates the pack UI, so the fixture seeded the cache with a real public Gravitation chapter pack and current completion marker before switching the builds. No student profile was used.

| Transition | Verified result |
| --- | --- |
| Main v13 to candidate v14 | The replacement worker claimed the client. The saved practice data, history, paper IDs, selections, review status, active question, and original deadline survived. The paper reopened with the network disabled. The saved chapter, captions and a 16-byte audio range were available offline. |
| Candidate v14 to main v13 | The original practice, history and unfinished paper survived online and offline on the same origin. The old worker's activation cleanup removed the saved pack. Main has no pack catalog for recovery. A worker change and cache cleanup can complete at different moments around a reload. |
| Main v13 back to candidate v14 | Student progress remained intact. The old pack did not reappear. Saving it again from the catalog while online restored offline access. No browser reset was needed. |

The fixture uses the real production workers without changing their cache policies. Manual recovery for this rollback is to reopen the candidate catalog while online and save the lost packs again. Keep the same origin and avoid clearing site data because the three existing MPSC keys still hold progress. The preceding feature commit `a6d8742` has a byte-identical v14 worker and is a possible recovery build to rehearse. This audit did not test it as a hosted rollback target. Re-run the v13-to-v14 fixture with `node scripts/check-release-transition.mjs` and set `RELEASE_MAIN_URL` and `RELEASE_CANDIDATE_URL` to two separate loopback production servers, using `http://127.0.0.1` with explicit ports. Set `PLAYWRIGHT_CHANNEL=chromium` if using the installed Chromium channel.

### Security and accessibility evidence

Local servers ran with the `OPENAI`, `UPSTASH` and `TOCHHAWNG` environment variables removed. Voice remains off by default, the private adapter has no public provider route, and the chat gate falls back to offline teaching before provider or Redis work when credentials are absent. The private fixture replaces generation with a local response and counts paid-route forwards. The existing authorization, persistent ledger, CSP and no-store policies are unchanged.

Credential-free chat returned `200`, `mode: offline` and `Cache-Control: no-store`. The dashboard returned `404` with `private, no-store`, a deny-by-default CSP and `Vary: Authorization` alongside the framework's variation headers. The dashboard response stayed out of Cache Storage while the public MPSC bank remained cached. The private Zorami browser fixture forwarded zero paid requests. No live OpenAI or Redis calls were exercised.

The repository checks, registry audit, three-worker Windows Webpack production build (514 pages), 292-route mobile smoke, both recorded-course checks, Genesis browser suite and the release transition fixture passed. The registry audit found two existing allowlisted development advisories and a clean production tree. The default Windows Turbopack retry reproduced the PostCSS worker startup failure in this environment; the Webpack build was the one exercised locally. No build configuration was changed.

At 360 px with reduced motion enabled, keyboard focus moved from the NEET library link to the recording link to the notes button, and Enter downloaded the notes. The chemical synapse diagram had a descriptive accessible name and a figure caption. The sample caption measured **5.66:1 light** and **9.30:1 dark**. Doubling the sample lesson paragraph font size produced no horizontal scrolling in either theme. Physical Android, OS text scaling and screen-reader behavior remain unverified. The existing 14 NEET companions, 57 JEE written lessons, 12 laboratories, 1,216 MPSC questions and recorded courses were retained. Further companion writing and narration review are nonblocking educational work.

### Procedure after an authorized deployment

1. Verify the deployed full SHA, both job conclusions for that revision, the intended hostname and the effective target flags `TOCHHAWNG_AI_MODE=off` and `TOCHHAWNG_PAID_VOICE_MODE=off`. Keep provider credentials out of the offline target. Record the tested rollback revision and worker policy before routing student traffic.
2. On the target origin, check a public learning route, `/sw.js`, `/api/chat`, the private usage dashboard, and a public pack page. Confirm the expected CSP and security headers, public cache eligibility, and private/no-store protections. Confirm unauthenticated dashboard access fails. Verify an ordinary classroom request remains offline/reviewed and inspect outbound telemetry for zero provider calls. Use no live credentials.
3. On the same hostname, use a dedicated synthetic profile with a practice answer, exam history, a live paper, and a saved recording pack. Record the active worker and storage keys. After the intended worker gains control, reload, disable the network, and reopen the saved practice, paper and classroom. Verify the original deadline, answers and history, and play and seek the saved recording with captions. Verify private responses are absent from Cache Storage.
4. Rehearse rollback on a disposable target and dedicated synthetic profile using the planned rollback revision. Confirm that worker activation preserves stores and pack playback, or document and approve the known re-download path before release. Verify production's rollback revision remains available. Do not rehearse by rolling back live student traffic.

## Offline-only release matrix

Statuses apply to the evidence described in each row. **Verified** means the stated scope passed on a local production build. **Partially Verified** means important scope remains open. **Not Tested** records absent evidence. **Blocked** marks a release gate that still needs an authorized action.

| Platform area | Status | Evidence and outstanding scope |
| --- | --- | --- |
| MPSC mocks and practice | Verified | Local question-bank validation, mobile smoke, answer persistence and exam controls. Ongoing editorial review remains part of the content process. |
| Classroom | Verified | The reviewed Zorami modes, lecture blackboard, no-WebGL fallback and offline classroom reload passed. Mizo drafts retain English fallback. |
| JEE | Verified | Recorded library and written-course regressions passed. Mathematics timed practice checks cover separate progress, deadline and answer review. |
| NEET | Partially Verified | Recorded course and practice routes passed the checked flows. Fourteen of 34 dedicated recordings have focused written companions. The course inventory tracks broader subheading and narration review. |
| Virtual laboratories | Verified | Chromium exercised the twelve shipped activities and the on-demand molecule view. Physical GPU performance remains unmeasured. |
| Offline learning | Partially Verified | Saved recording playback, seek, captions, pack recovery and retired editions passed in Chromium. Initial visit and explicit saving require a connection. OS eviction behaviour on real phones remains untested. |
| Security | Partially Verified | Local checks cover the effective CSP, private/no-store responses, API boundaries, cache isolation and the dependency audit. Deployment-specific headers and environment have yet to be verified. |
| Accessibility | Partially Verified | Keyboard actions, visible focus, semantic labels, reduced motion and no-WebGL fallback were exercised in Chromium. Screen-reader interaction remains untested. |
| Mobile performance | Partially Verified | The 360 px smoke suite and browser bundle measurements cover responsive layouts and on-demand assets. Physical Android and constrained-device measurements remain untested. |
| Paid API cost protections | Verified for paid-off mode | The private fixture forwarded zero paid requests. Server-side gates and safeguards remain in place. Provider credentials, live Redis and live charges are outside the offline release scope. |
| Production configuration | Blocked pending release approval and verification | Repository defaults keep both paid modes off and disable automatic deployment for this branch. The effective target environment, release commit, and approved deployment have yet to be verified. |

**Before an offline-only release** — Obtain authorization for the release commit, complete the main integration required by AGENTS.md, and confirm its CI. In the authorized target configuration, verify both paid modes are off and the offline classroom works without provider credentials. After authorized deployment, confirm the exact revision, public security headers, service worker and a representative saved-content flow against the target.

**Follow-up work** — Additional Biology companions, complete narration alignment, reviewed Mizo translations, screen-reader testing and physical Android storage and performance measurements. Live paid generation is a separate decision and does not gate the offline-only release. [Course inventory](./genesis-course-inventory.md) · [Security audit](./security-audit.md) · [Project verification](./project-genesis.md)

## Local credential setup in VS Code

Open the repository root in VS Code. Create `.env.local` alongside `package.json` using `.env.example` as the template. Git ignores `.env.local`. Keep real values out of source, screenshots, command arguments, and PRs.

- In the OpenAI API platform, select a dedicated project for this test. In **Project → API Keys**, create or rotate a project key with permission to read Models and create Responses. In **Project → Limits → Model usage**, allow `gpt-6-luna` if it is available to the project. A nonblank `OPENAI_API_KEY1` takes precedence over `OPENAI_API_KEY`. Replace the selected variable or remove a stale alias. An inherited variable in the VS Code terminal takes precedence over the same name in `.env.local`. Remove stale terminal or task variables and restart the terminal and server. If a new key still returns 401, check project membership and any IP allowlist before changing the model. [OpenAI project settings](https://help.openai.com/en/articles/9186755-managing-projects-in-the-api-platform) · [OpenAI authentication errors](https://developers.openai.com/api/docs/guides/error-codes)
- In Upstash, open the existing durable Redis database associated with this allowance, or create a new database only if this allowance has never had one. Keep eviction off. On the database page under **REST API**, copy the endpoint to `UPSTASH_REDIS_REST_URL` and the standard read/write token to `UPSTASH_REDIS_REST_TOKEN`. Keep that database across deployments. In its Redis console use `GET mpsc:tochhawng:v1:testing-budget` and `PTTL mpsc:tochhawng:v1:testing-budget`. The ledger must have no expiration (`PTTL = -1`). For a confirmed first-ever ledger only, initialize it with `SET mpsc:tochhawng:v1:testing-budget 0 NX`. An unexpectedly missing or expiring ledger needs reconciliation with provider usage before testing. [Upstash REST API](https://upstash.com/docs/redis/features/restapi) · [Upstash eviction](https://upstash.com/docs/redis/features/eviction)
- Generate two different random secrets of at least 32 characters for `TOCHHAWNG_TEST_TOKEN` and `TOCHHAWNG_ADMIN_PASSWORD`. Keep `TOCHHAWNG_PAID_VOICE_MODE=off`. Use `TOCHHAWNG_DAILY_REQUEST_LIMIT=1` in an isolated test environment if the shared ledger can be restricted to this test. Keep `TOCHHAWNG_AI_MODE=off` until private testing is authorized. The preflight reports the private gate as not ready while it is off.

From the repository root run the read-only preflight:

```powershell
node --experimental-strip-types scripts/verify-teaching-env.mjs
```

Add `--development` when matching `next dev` environment-file loading. Run the default command for `next start`. The model check is a metadata GET and generates no tokens. A successful check confirms visibility for the selected key. Response generation, billed tokens, and the live Redis write path still require the approved end-to-end test.

Leave `OPENAI_BASE_URL` unset for the approved test so the application uses the official endpoint.

## One private Zorami test

Install dependencies with `npm ci` and install the test browser with `npx playwright install chromium` if needed. Build and run the app using `npm run build` and `npm run start -- -H 127.0.0.1 -p 3000`. The fixture is safe while paid AI is off:

```powershell
node --experimental-strip-types scripts/test-private-zorami.mjs
```

After explicit approval, use a dedicated private environment and set `TOCHHAWNG_AI_MODE=private`, restart the loopback server, and run the preflight again. When each check is ready, run:

```powershell
node --experimental-strip-types scripts/test-private-zorami.mjs --approve-one-paid-request
```

The harness enters the 3D classroom, selects Political Science, asks Zorami to explain democracy, verifies the reply on the blackboard, and completes the existing reviewed constitutional-rights quiz. It forwards at most one authenticated chat POST without retries. It checks the private admin route, a single $0.01 reservation, and one request and metered result with positive input/output token deltas. Use an otherwise idle test ledger. A failed or timed-out test can still leave a reservation or incur a charge. Reconcile the ledger and project usage before any separately approved retry.

## Provider and Vercel safeguards

- In **OpenAI → Project → Limits**, set a low rate limit for the allowed model, a monthly spending limit appropriate to the $9 testing allowance, and an alert below that amount. If the panel offers hard enforcement for that project, turn it on. Enforcement can lag. The provider limit and the $9 Redis reservation ceiling are separate. The reservation ceiling covers this application and its shared Redis database. Check the provider's usage for actual billed tokens and any other callers. [OpenAI project spending controls](https://help.openai.com/en/articles/9186755-managing-projects-in-the-api-platform)
- In **Vercel → Project → Settings → Environment Variables**, use a private Preview scope for any later authorized remote test. Set the same server-only names listed in `.env.example`. Mark keys, tokens, and passwords **Sensitive**. Verify the effective value of the preferred alias in that scope. Keep production `TOCHHAWNG_AI_MODE=off` and `TOCHHAWNG_PAID_VOICE_MODE=off`. Keep the existing non-evicting ledger when configuring later previews. Environment changes affect subsequent deployments. The feature branch is configured to skip automatic Vercel deployment. [Vercel environment scopes](https://vercel.com/docs/environment-variables) · [Sensitive variables](https://vercel.com/docs/environment-variables/sensitive-environment-variables)
- Before an approved merge, bring the development branch up to date with `main` as required by `AGENTS.md`. Run `check`, `audit`, `build`, `smoke`, and the recorded-course checks. Confirm PR CI is green. Approve merge and deployment separately. Following an approved offline-only deployment, verify the public classroom, the exam simulator, and saved progress before considering any private paid test.

## Pre-release compatibility check

Fetched main at `62130b61c3c032b0ffad85a86bec1a679f593af4` and compared it with feature baseline `40ea0b8c15b083608507df9b6e1e1fe64ff32ad5`. The initial checkout was shallow; deepening it exposed the shared history. Main was the merge base (0 main-only commits, 22 feature-only commits). The Git merge-tree simulation exited successfully and returned the same tree as the feature baseline. No checkout merge, branch merge, or deployment was performed.

The comparison found no feature-side edits to the MPSC question-bank content, question-bank route, direct mock/practice route entry points or practice-progress module. The MPSC practice component adds a learning trail and entrance styling. Its answer logic and storage keys are unchanged. The shared simulator does change on the feature branch: Mathematics has isolated attempt/history keys and stricter deadline/save validation. Existing full simulator keys remain. The only data-file differences are JEE Units transcript and cue corrections. Deployment-sensitive differences are the existing feature-branch Vercel deployment opt-out, example environment additions, route headers, proxy and service-worker filters. These were reviewed against main and left intact by this batch. No integration conflict or incompatible interface was found in the simulated tree. Recheck against the eventual release head if main advances.

## Paid-off and cache evidence

This checkout has no local environment file other than the example. The local production fixture ran with both paid modes explicitly off and with provider/Redis credentials absent. The teaching handler returns reviewed/offline content before reaching provider fetch unless an API key and private tester authorization are available. Approved private text calls would also need an atomic Redis reservation. The Lua check covers request quotas and the persistent budget ledger and fails closed when Redis or an acceptable ledger is unavailable. The voice adapter has its own off-by-default guard and no registered provider route. No live provider or Redis test was used.

The service worker excludes all API routes, authenticated requests and no-store requests from its cache path; only full public same-origin responses can enter saved caches. Genesis checks exercise the administrator private/no-store response, cache separation, download recovery, versioned packs and offline captions. These tests address the repository and local runtime; the effective production settings and headers still require verification in an approved target.

## Release-candidate checks

- **Verified scope.** The MPSC bank and practice-progress code are unchanged from the fetched main. The feature’s practice component changes are limited to the learning trail and heading styling. The shared simulator and service worker receive separate runtime coverage.
- **Migration risk.** Practice answers use `mpsc.practice.responses.v1`; shared simulator attempts and results use `exam-simulator:attempt:v1` and `exam-simulator:history:v1`. Keep data on the existing origin and preserve these keys. Existing simulator validation can reject a malformed or no-longer-matching paper. Browser eviction, private browsing, storage quotas and a hostname change can affect saved state. This batch adds no migration.
- **Paid API safety.** Run with both modes off. The teaching handler requires a key and private authorization before reservation and provider work. Redis failures or invalid ledgers fail closed. The dormant voice adapter requires its own gate and is unregistered. All verification in this batch uses local, non-billable fixtures.
- **Rollback.** Keep the same origin and paid-off configuration. Main's v13 worker removes saved packs during activation. Select a pack-preserving recovery revision and verify it before release, or explicitly approve re-download recovery. Preserve browser progress and the budget ledger during recovery.
- **Release blockers.** Authorization, target configuration checks, and a verified and approved rollback plan remain open. Additional writing, narration review, assistive technology and physical-device evidence are separate follow-up work.
- **After an authorized deployment.** Confirm the deployed SHA and green candidate CI. Verify effective paid-off flags without exposing values and open public study pages with provider access disabled. Inspect CSP, privacy and cache headers on public, pack and admin paths; check the active service worker and public/private cache boundaries. On the unchanged origin, use a dedicated seeded browser profile to verify an older MPSC answer, in-progress simulator paper, and versioned lecture pack survive refresh and offline playback. Confirm no paid requests were forwarded, then verify the rollback revision is still available.

For commit `a6d8742`, both GitHub Actions jobs passed in [run #273](https://github.com/Ghostfreakxx/mpsc-free-mock/actions/runs/45894653554). See the draft PR for the candidate run and screenshots.

### Local release-candidate evidence

The MPSC regression used a fresh 360 px Chromium context with touch capabilities and reduced motion. It loaded 1,216 original bank entries, activated each of 78 topic categories, saved a practice answer, and reloaded both English and bilingual routes offline. A separate exam flow started a 25-question MPSC paper, selected an answer, marked for review, reloaded offline, restored the marked answer and submitted. It checked the existing practice response, full simulator attempt and full simulator history keys and confirmed the isolated Mathematics key remained unused.

Local production ran with both paid modes explicitly off and no OpenAI or Upstash credentials. Browser fixtures exercised offline classroom and recorded playback, cache isolation, CSP and no-store responses. The private fixture forwarded zero paid requests. The new lesson layouts fit 360 px in both themes and with paragraph text doubled from 17 px to 34 px. Touch input, keyboard navigation and focus were Chromium checks. Android hardware, OS text scaling, real touch hardware and screen-reader interaction remain unverified.

The candidate passed repository validation, the live registry advisory audit, both 514-page Windows builds (default Turbopack and three-worker Webpack), 292-route Chromium smoke at 360 px, recorded-library and JEE course checks, the Genesis browser suite, and the private zero-paid-request fixture. The offline checks include representative media playback and seeking, and leave production configuration untouched.
