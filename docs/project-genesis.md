# Project Genesis development checklist

Work on feature/cinematic-3d-foundation in work/cinematic. Draft PR #62 is the delivery branch. Preserve existing progress keys, question banks, branding and both lines of the motto. No merge, deployment, or paid testing without approval.

| Workstream | Implemented in the first batch | Outstanding |
| --- | --- | --- |
| Classroom | Four reviewed modes, 24 selected topics, source excerpts, subject filter, synonyms, single-typo matching, related quiz and marked Mizo drafts | Broader bilingual coverage, diagrams and audio reuse tied to reviewed curricular mappings |
| Visual system | Local Geist with OFL, desktop/tablet/phone review harness, preserved procedural scene, added facial details and reduced-motion alternatives | Further character, lighting, environment and affordable Android review |
| Courses | Reproducible manifest/file inventory and all-file hash sweep | Syllabus gap content, case-by-case worked-example and diagram review, playback sampling across courses and alternate formats |
| Provider integrations | Existing private chat, narration and transcription tooling preserved. Classroom access remains credential-free. | Locate and verify any separately hosted live lecture service. No public live lecture endpoint was found in this checkout. |
| Offline distribution | Individual recording downloads through the existing player and service worker, with size estimate, completion, cancellation, removal and byte ranges | Subject and chapter pack management, cap cache growth, test interrupted downloads and storage exhaustion on low-end devices |
| Laboratories | Unified lab route with interactive projectile and pendulum experiments | Complete the other labs and tie the existing lecture activities into the unified inventory |
| Lecture presentation | Existing narration, cue-driven diagrams, playback controls, quizzes, study links and progress preserved | Design a shared teacher presentation component and verify manual chapter navigation where timings are absent |
| Quality | Dedicated numeric, retrieval, and browser integration checks | Run all project and course checks after each delivery batch and record actual results in draft PR |

See [course and recording inventory](./genesis-course-inventory.md) and [laboratory inventory](./genesis-laboratory-inventory.md).

## Reproduce the Windows checks

Use the installed browser cache with `PLAYWRIGHT_BROWSERS_PATH` pointed at the sibling `cinematic-browsers` directory and `PLAYWRIGHT_CHANNEL=chromium`. Use a loopback-only production server and set both paid mode flags to `off`.

`npm run build` remains the default. On this Windows checkout, Turbopack's PostCSS worker exited before establishing IPC even after the font was made local. Use `npm run build -- --webpack` on that machine. `npm run start -- -H 127.0.0.1 -p 3000` serves either production build.

Run `npm run check`, `npm run audit`, `npm run smoke`, `node scripts/check-genesis-browser.mjs`, and the AGENTS.md recorded-course checks. The private Zorami fixture is free only without the paid flag. No live endpoint or narration generation job is required to verify this batch.

## First-batch verification

- `npm run check` and the live npm registry audit passed. The check retains one pre-existing unused-variable lint warning.
- The Windows Webpack production build passed and prerendered 458 pages. The default Turbopack build reached the documented worker failure.
- Chromium exercised the four modes after an offline reload and observed zero chat requests. A saved JEE lecture also reloaded, played, sought, displayed its caption and was removed with the browser offline.
- The classroom fits at 360, 768 and 1440 px in both themes. The same widths were checked on the lab route. Screenshots are in [the browser review directory](./genesis-screenshots).
- The recorded library and JEE course scripts passed. The private Zorami fixture intercepted the one chat submission locally and forwarded zero paid calls.
- The built classroom pack includes 24 topics, 72 questions, and 30 Mizo variants. The recent scope expansion uses reviewed English notes with an explicit English fallback.

The full smoke suite passed across 269 routes at 360 px, including exact motto text, mock progress, the simulator, no-WebGL access, classroom modes and lab controls.
