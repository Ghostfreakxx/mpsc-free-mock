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
| Lecture presentation | Opt-in Zorami blackboard follows chapter and caption cues. Manual chapter navigation is available when coverage is incomplete. Three classroom topics reuse matching existing audio. | Extend classroom recording mappings and visually verify the presentation against more chapter and device combinations |
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

## Recorded lecture follow-up

The classroom can open existing English recordings for Newton's laws, atomic structure, and cell structure. In the recorded player, the opt-in Zorami view follows the current chapter and narration cues, without claiming lip synchronization. A missing chapter timestamp switches chapter navigation to manual selection. The browser test verified audio metadata in the linked classroom recording and a changed blackboard chapter after seeking.

## Continue development

1. Trace the separately hosted live lecture service before changing any provider configuration. Use a non-billable local fixture at that service boundary. Keep the recorded player and its progress keys intact.
2. Compare the generated per-unit inventory with the existing JEE and NEET syllabus audits. Prepare worked examples and diagrams for the named gaps, then create a narration queue only after the new scripts are reviewed.
3. Expand the lab by reusing the existing class diagrams and motion engine. Verify each module before marking its row complete.
4. Extend individual offline downloads to chapter and subject packs. Keep individual lesson download and audio seek tests as regressions and exercise browser-specific quota and eviction behavior before relying on the PWA for a full course.

In one Chromium run at 360 px with 4× CPU throttling, 150 ms latency and a 1.6 Mbps download limit, the classroom selector appeared in 2.86 seconds and had transferred about 312 kB of completed resources. The lab slider appeared in 0.83 seconds and had transferred about 33 kB. Neither page started WebGL before entry. These are loopback simulation measurements, with no physical-device benchmark.

The final offline browser check injected a storage quota failure, verified that no incomplete pack remained, and then downloaded, reloaded, played, sought and removed the lesson successfully.

## Security and circuit follow-up

See [the security audit](./security-audit.md) for the comparison with main, local API and cache fixtures, and live lecture investigation. The third laboratory module adds ideal series and parallel resistor networks, linked to the existing JEE recording and practice. The recorded audit checked all 154 distinct published WebVTT timelines against the player cues for count, text, and timestamps within 2 ms. This comparison does not independently verify the spoken audio.

The individual recording-download flow is retained. Chapter-only narrated packs and bulk subject packs still need a manifest with versioned assets, storage rules, and progress through partial failures. Use the existing media audit and offline seek fixture as regressions before publishing those packs.

Chapter notes can now be downloaded individually from the lecture player, and the JEE library offers full text transcript downloads for Physics, Chemistry, and Mathematics. These text files remain readable outside the app. Individual audio packs remain available in the player. Chapter-only audio and bundled subject audio packs are still outstanding.
