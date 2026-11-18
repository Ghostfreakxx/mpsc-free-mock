# Free MPSC Mock production checklist

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
