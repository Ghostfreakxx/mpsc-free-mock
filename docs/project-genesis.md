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

## CI, media packs, and cross-subject laboratories

- GitHub reported the CI workflow active and accepted the draft PR event. Use Actions run records or the PR Checks tab when the combined status list is empty. The CI browser job now runs the Genesis and zero-paid-request fixtures. [CI diagnostics](./ci-diagnostics.md)
- The offline library offers full JEE recorded subject media packs and individual Gravitation chapters with rebased captions. Existing individual lesson downloads remain in place. Additional chapter manifests, NEET subject packs, retired-version management and physical-device storage testing remain. [Offline media packs](./genesis-offline-packs.md)
- The new chemistry, biology and mathematics labs cover isotope and ion counts, simple pea inheritance and quadratic graphs. A simple-majority assembly and a spherical meridian model extend the lab to political science and geography. Other models remain in the syllabus inventory. [Laboratory inventory](./genesis-laboratory-inventory.md)
- The current routing, Vercel configuration and environment template contain no active live lecture configuration. Continue only after locating an owning repository and route or an integration document with the authentication and fixture contract. The retired voice audition still has no connection to the live lecture requirement.

## Verification for this pass

- Local checks, registry audit, Webpack production build, the 271-route smoke suite, the recorded-library and JEE course checks, and the private zero-paid-request fixture passed. The default Windows Turbopack build still exits in its worker.
- Chromium verified all eight lab activities, the existing individual recording after clearing the general static cache, and chapter and Mathematics subject packs. The chapter played and sought offline with native captions. The Mathematics pack saved all 14 recordings and loaded its first audio stream offline. All five Gravitation MP3 durations matched their published chapter cues within 0.25 seconds. Spoken-word alignment and wider syllabus review remain open.
- At simulated 360 px with 4× CPU slowdown, 150 ms latency and 1.6 Mbps downstream, lab controls appeared in 0.98 s and offline-library controls in 2.69 s. Physical Android hardware was unavailable.

## Advanced implementation

- The lab preserves its first eight activities and adds force and friction, reflection and refraction, a plant and animal cell comparison, and a 3D molecular bench. The bench loads only after opening. Models and materials are authored in the project. The classroom lighting and spectacles are refined, and cue changes no longer repeatedly restart the same blackboard camera transition.
- The offline classroom adds source-checked questions and notes for polity, history, economics, JEE/NEET science, ICT, and aptitude. Existing Mizo drafts are brought into additional aptitude topics, and English fallback labeling remains. The ICT memory lesson uses the NIST glossary. Classroom topics with suitable lab activities link directly to them. [NIST CSRC Glossary](https://csrc.nist.gov/glossary/term/volatile_memory)
- NEET subject media and five Newton's laws chapters join the existing download catalog. Storage estimates, large-download prompts, retry after interrupted writes, and management of saved retired versions are available. Existing media files and progress keys are untouched.
- Remaining work includes laboratory modules listed in the inventory, broader Mizo review, more chapter packs, device storage testing, and actual spoken-word alignment. The live lecture link still requires its original repository, route, or documented integration. No new service was configured.

### Advanced batch verification

The built offline classroom pack contains 36 topics, 108 questions and 39 Mizo drafts. Chromium found the ICT lesson with networking disabled. Tests covered all twelve lab activities, the unfinished Newton download recovery, retired-edition removal, and the existing individual, chapter and Mathematics subject pack flows. A separate 360 px Chromium run saved the 466.6 MB NEET Biology pack, opened all 32 recording entries offline, loaded the first recording, and removed the pack.

Playwright rendered and rotated the 3D molecule and captured the refreshed classroom at 360, 768 and 1440 px. Chromium used software WebGL, and no physical Android benchmark was run. The local production build passed with Webpack. Turbopack on this Windows machine continues to fail before its worker handshake. The existing Linux build job for Actions run #264 passed.

There was no installed local speech recognizer available for an independent spoken-text comparison. Chapter playback and WebVTT timing are verified to the extent documented by the fixtures. Keep spoken-word alignment separate from those checks.

## Educational quality pass

- Added dedicated written JEE Physics companions for all nine open unit gaps. New lesson routes preserve recorded content and its existing saved answers. The inventory identifies remaining subheading depth and places spoken-word review separately from caption tests.
- Zorami search can open its match in Explain mode. Existing revised language labels and English fallback are preserved. No additional translations were promoted to reviewed status.
- Corrected the plant-cell membrane placement, added an explicitly inspectable central vacuole, and clarified the omission of lone pairs from molecular models. The refraction experiment links to the new optics notes. No additional simulations were added while reviewing the existing set.
- Offline pack cards now refresh when a tab regains focus so another tab’s changes or browser eviction can be reflected. The original cache restrictions, locks, and version names still apply.

### Educational quality verification

Local checks passed for the 499-page Webpack build, 280-route mobile smoke suite, registry audit, recorded library, JEE study pages, and the Genesis browser and private classroom fixtures. The offline test covered two-tab cache removal, offline search-to-Explain, and retained downloading, seeking, and captions. Chromium covered mobile widths, both themes, and reduced motion. No physical Android device was available. The narration sample review and proposed Units and dimensions caption correction are recorded in the course inventory.

Mobile screenshots: [Optics, dark](./genesis-screenshots/optics-companion-dark-360.png), [Optics, light](./genesis-screenshots/optics-companion-light-360.png), and [plant cell](./genesis-screenshots/plant-cell-360.png).

## Narration correction and NEET learning quality

Corrected the two confirmed Units and Dimensions omissions from the authored transcript, timing manifest and active caption track. Retained the original audio, saved progress, and legacy caption URL for existing offline copies. The new lesson and pack editions use the corrected caption URL. The retired pack navigation fallback still checks the existing public-response and completion rules.

Added the Cell organization and protein transport companion to the NEET catalog, recording, and offline classroom. The written companion and Zorami share English explanations, revision cues and practice questions. Expanded three existing JEE Physics companions with worked examples and left Chemistry and timed Mathematics expansion in the inventory.

Mobile screenshot: [NEET cell companion at 360 px](./genesis-screenshots/neet-cell-notes-360.png).

Verification passed locally: repository checks, registry audit, 500-page Webpack production build, 280-route smoke suite at 360 px, recorded-library and JEE course checks, Genesis browser tests, and the private classroom fixture with zero paid requests. Chromium verified the upgraded Units offline track, retired-pack navigation, NEET companion quiz persistence, and offline classroom search and revision. The two-tab fixture now waits for the deletion to finish before simulating focus.

## NEET Biology expansion

Added focused written companions on chromosome counting and Mendelian test crosses with diagrams, original practice, text downloads, and offline classroom integration. Existing recorded content and saved keys are unchanged. The course inventory records the companion boundaries, the local sample narration pass and outstanding course work.

## Mathematics-only timed practice and Biomolecules

Added a dedicated JEE Mathematics practice route with independent progress, reviewed bank questions and the existing exam interface. Added an enzyme activity companion with English offline classroom support and reviewed Biology counting and probability assumptions. The course inventory records source coverage and additional local narration sampling.

Mobile screenshots: [Mathematics practice](./genesis-screenshots/jee-mathematics-timed-360.png) and [Biomolecules](./genesis-screenshots/neet-written-biomolecules-360.png). A local 360 px Chromium fixture also verified both light-theme routes and used a simulated clock to verify that time-up submits the Mathematics paper at its saved deadline.

## Biology coverage and quality pass

Added Plant Physiology and Human Physiology companions, plus application questions in the four earlier Biology lessons. The Mathematics simulator reuses its existing UI and saved keys. Actions are rejected at the deadline even before the timer updates, and malformed saved attempts are rejected. New local Browser and unit checks cover the deadline, score, answer review, keyboard start and saved-state validation.

The local verification covered the 284-route mobile smoke suite, both recorded-course checks, Genesis browser tests, and the private fixture with zero paid requests. Mobile testing used Chromium at 360 px in both themes, including keyboard interaction and a simulated clock. Physical Android performance and assistive technology were not measured. The local Windows production build used Webpack with a reduced worker count after the default worker count exhausted available memory.
