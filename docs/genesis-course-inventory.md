# Genesis course and recording inventory

Run `node scripts/inventory-courses.mjs` for the per-recording listing. Add `--hash-audio` to compare every MP3 by SHA-256 and check its opening bytes. Both modes read local files only.

| Published catalog | Recorded lessons | Written lessons | Checks performed |
| --- | ---: | ---: | --- |
| JEE Physics, Chemistry and Mathematics | 120 | 48 | Catalog references, chapter narration scripts, cue metadata, quizzes, nonempty audio and WebVTT |
| NEET dedicated | 34 | — | Same recorded lesson checks |
| NEET shared Physics and Chemistry | 106 mappings | — | Every mapping resolves to an existing JEE recording |

The checked JEE syllabus inventory has 20 Physics, 20 Chemistry and 14 Mathematics units, with 12, 22 and 14 written lessons respectively. A lesson count alone does not measure subheading coverage. Retain the repository's [NEET Biology coverage](./neet-class-coverage-2026.md), [shared course mapping](./neet-physics-chemistry-mapping-2026.md), and [subheading audit](./neet-subheading-review-2026.md) when marking syllabus completion.

The media pass read all 1,956 MP3s and found no exact duplicates or suspicious opening bytes. That check does not decode the audio or judge narration against a script. The individual class verification scripts and browser playback provide a separate check. Illustration coverage, worked-example quality, audio alignment, and unpublished syllabus gaps need their own walkthrough.

## Narration queue and provider status

The existing published manifests contain **zero missing narration files**. The discovered replacement queue is empty and its estimated generation cost is **US$0**. New syllabus content will need review and a separate quote. The existing generation script names GPT-4o mini TTS. Its model page lists US$0.60 per million text input tokens and US$12 per million audio output tokens and labels the model deprecated. Confirm availability and a current price before proposing any future work. [Provider model and pricing](https://developers.openai.com/api/docs/models/gpt-4o-mini-tts)

The published lesson player reads first-party MP3s and WebVTT. The repository has OpenAI narration and transcription scripts and a separate private classroom API. This pass found no public live lecture API route in this checkout. Leave those existing integrations untouched and verify the intended live integration against the deployment or source that actually owns it. No paid generation was run.
