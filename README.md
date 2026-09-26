# MPSC Free Mock

A learning space for MPSC aspirants and other students in Mizoram. It brings the existing practice banks and study resources together with a learner dashboard, daily planner and progress view.

## Learning Routes

- `/` - Student overview, learning library, daily planner and practice progress.
- `/mock-test` - MPSC subject practice with answers, explanations and hints.
- `/college-notes` - Arts college notes.
- `/neet` - NEET science practice.
- `/cuet-pg` - CUET PG practice.

Planner checkoffs and MPSC answer history are saved in the browser on the current device. They are not synced between devices or accounts.

The MPSC study assistant works with built-in study guidance when no AI key is configured. To enable generated tutoring responses, set `OPENAI_API_KEY` in the server environment. Optionally set `OPENAI_MODEL` to choose an API-supported model. Never expose the key in a `NEXT_PUBLIC_` variable.

## Local Development

Install dependencies and start Next.js:

```bash
npm ci
npm run dev
```

The production build is generated with `npm run build` and served with `npm run start`.

`node ids.js` reports legacy question ID lines without changing files. Use `node ids.js --write` only when you intend to remove them from the MPSC practice bank; `remove-ids.js` remains as a compatibility alias.
