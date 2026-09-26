# MPSC Free Mock

A learning space for MPSC aspirants and other students in Mizoram. It brings the existing practice banks and study resources together with a learner dashboard, daily planner and progress view.

## Learning Routes

- `/` - Student overview, learning library, daily planner and practice progress.
- `/mock-test` - MPSC subject practice with answers, explanations and hints.
- `/college-notes` - Arts college notes.
- `/mizo` - Mizo alphabet, pronunciation notes and bilingual practice.
- `/neet` - NEET science practice.
- `/cuet-pg` - CUET PG practice.

Practice rotates through each selected question pool without repeating a fresh question in the same round. Missed answers return in a spaced review queue. Rotation state, planner checkoffs and MPSC answer history are saved in the browser on the current device; they are not synced between devices or accounts.

Run `npm run validate:banks` to check question options, answers, explanations and duplicate prompts. Run `npm run test:question-rotation` to test round exhaustion, retries and saved progress.

The MPSC study assistant works with built-in study guidance when no AI key is configured. To enable generated tutoring responses, set `OPENAI_API_KEY` in the server environment. It defaults to `gpt-5.6-luna`; optionally set `OPENAI_MODEL` to choose another API-supported model. Responses API state storage is disabled for tutoring calls. Never expose the key in a `NEXT_PUBLIC_` variable.

## Local Development

Install dependencies and start Next.js:

```bash
npm ci
npm run dev
```

The production build is generated with `npm run build` and served with `npm run start`.

`node ids.js` reports legacy question ID lines without changing files. Use `node ids.js --write` only when you intend to remove them from the MPSC practice bank; `remove-ids.js` remains as a compatibility alias.
