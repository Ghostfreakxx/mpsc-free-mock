# Genesis course and recording inventory

Run `node scripts/inventory-courses.mjs` for the per-recording listing. Add `--hash-audio` to compare every MP3 by SHA-256 and check its opening bytes. Both modes read local files only.

| Published catalog | Recorded lessons | Written lessons | Checks performed |
| --- | ---: | ---: | --- |
| JEE Physics, Chemistry and Mathematics | 120 | 57 | Catalog references, chapter narration scripts, cue metadata, quizzes, nonempty audio and WebVTT |
| NEET dedicated | 34 | 14 | Same recorded lesson checks |
| NEET shared Physics and Chemistry | 106 mappings | — | Every mapping resolves to an existing JEE recording |

The checked JEE syllabus inventory has 20 Physics, 20 Chemistry and 14 Mathematics units, with 21, 22 and 14 written lessons respectively. The inventory maps a recording to each of the 54 JEE units. All 57 written lessons have a local figure and worked examples. A lesson count alone does not measure subheading coverage. Retain the repository's [NEET Biology coverage](./neet-class-coverage-2026.md), [shared course mapping](./neet-physics-chemistry-mapping-2026.md), and [subheading audit](./neet-subheading-review-2026.md) when marking syllabus completion.

The media pass read all 1,956 MP3s and found no exact duplicates or suspicious opening bytes. That check does not decode the audio or judge narration against a script. The individual class verification scripts and browser playback provide a separate check. The cue comparison verified text, order, and timestamps within 2 ms across all 154 published timelines. Spoken-word alignment, worked-example quality, and unpublished syllabus gaps still need review.

## Narration queue and provider status

The existing published manifests contain **zero missing narration files**. The discovered replacement queue is empty and its estimated generation cost is **US$0**. New syllabus content will need review and a separate quote. The existing generation script names GPT-4o mini TTS. Its model page lists US$0.60 per million text input tokens and US$12 per million audio output tokens and labels the model deprecated. Confirm availability and a current price before proposing any future work. [Provider model and pricing](https://developers.openai.com/api/docs/models/gpt-4o-mini-tts)

The published lesson player reads first-party MP3s and WebVTT. The repository has OpenAI narration and transcription scripts and a separate private classroom API. This pass found no public live lecture API route in this checkout. Leave those existing integrations untouched and verify the intended live integration against the deployment or source that actually owns it. No paid generation was run.

The machine-readable [inventory snapshot](./genesis-course-inventory.json) includes per-lesson section, script, cue, quiz and media checks, written examples, unit mappings, media scan totals and the current narration queue.

## Advanced syllabus and audio review

The recorded map still has a recording for each of the 54 JEE units. All 20 Physics units now have a dedicated written companion. All 154 published caption files still match the player cues. No missing published audio was found.

Chromium decoded all five standalone Newton's laws chapter MP3s. Each media duration matched its existing chapter interval within 0.25 seconds. An independent spoken-word check remains outstanding.

The related `tochhawng-data` repository contains a Next.js data site. Its 52-file tree has no API, live, lecture, stream or voice route. No new lead for the separate lecture service was found. [Related data repository](https://github.com/Ghostfreakxx/tochhawng-data)

## Educational quality pass

Nine companions added for Physics units 1, 4, 10, and 15–20. Each provides five short reading sections, a labelled figure, two worked examples, two questions with explanations, an offline text download, and links to the existing recordings. The dedicated written routes use distinct quiz storage keys. The unit map now shows written material for every Paper 1 unit. This closes the written catalog gaps and leaves room for more exam-style practice and subheading depth.

| Course area | Review outcome and follow-up |
| --- | --- |
| JEE Physics | Prioritise additional mixed vertical-circle and 2D-collision problems, optical instruments and signed ray diagrams, and experimental observation-table interpretation. Existing recordings supply companion material for these topics. |
| JEE Chemistry | Retain the existing practical-chemistry recordings. The prior inventory identifies aniline yellow and preparation/purification explanations as candidates for spoken-word and worked-example review. |
| JEE Mathematics | All 14 units already have written companions. Use the existing practice and board coverage before expanding, with mixed/timed practice still useful. |
| NEET Physics and Chemistry | The existing subheading review documents explanatory coverage, including false keyword gaps. Reuse the shared recordings and add mixed practice and wider diagrams before duplicating lessons. |
| NEET Biology | Keep the 34 dedicated recordings available. The current listing does not provide independent written companions comparable to JEE. Prioritise written revision and labelled diagrams for the existing courses. |

### Narration evidence

The local source retains earlier independent-transcription corrections, including shortened closing reminders in kinetics and aminolysis. Those corrections preserve synthesis input as provenance and reuse the original audio.

This pass independently decoded ten opening and closing excerpts from the published MP3s and compared 16 kHz audio with the visible scripts and active WebVTT. Recognition used Vosk 0.3.45 and the small English model on the Windows workstation. Audio stayed local. Scores below are normalized token-sequence similarity, not listening accuracy or an estimate for the full course.

| Recording | Opening and closing ranges in seconds | Similarity | Outcome |
| --- | --- | --- | --- |
| Units and dimensions | 0–36.640 and 384.412–423.296 | .940 / .900 | Two short additions appear in the written closing but not in the spoken audio. See correction below. |
| Measurements | 0–33.960 and 243.524–272.232 | .961 / .946 | Active captions contain the spoken ending. The legacy caption file extends past the MP3; the player uses the corrected `english-v2.vtt`. |
| Work and energy | 0–35.800 and 301.196–338.736 | .869 / .941 | Common word substitutions such as “joules” rendered as “jewels.” Fifteen joules in the car example remained recognizable in context. |
| Photoelectric effect | 0–36.100 and 439.508–474.408 | .943 / .956 | Recognizer garbled names and some number words. Verify the flagged formula and number fragments by listening before editing. |
| NEET Cell: The Unit of Life | 0–35.740 and 1074.128–1109.068 | .836 / .832 | Several names and biology terms were misrecognized. The sample does not support automatic caption changes. |

**Units and dimensions correction evidence.** In the cue at 384.412–389.528 s, end the sentence after “square root of length,” omitting “not directly on length.” The recognizer places “length” at 388.432–388.822 s, followed by near silence and the next cue. In the closing cue at 417.888–423.296 s, end the sentence after “their own later lessons,” omitting “they are not covered in this class.” The final recognized “lessons” ends around 422.962 s. The remainder of the decoded clip contains only a low-level tail. Retain both qualifications in the separate written notes if desired. Apply this paired change to the authored segments, cue manifest and active caption, and version any already-published offline cache entries together. The existing audio and student progress can be kept. The subsequent narration pass implemented both deletions in the authored text, cue manifest and active v3 captions. The original MP3 and v2 captions are retained for reproducibility and older offline editions.

Further work should manually review the flagged number words and named terms, then sample more recordings before reporting course-wide narration alignment. [Vosk offline English model](https://alphacephei.com/vosk/models)

## Narration correction and NEET written support

- The first dedicated NEET Biology written companion, Cell organization and protein transport, adds a labelled secretory pathway, chromosome-count worked example, quick-revision points and three original questions. Its evidence is linked to the 2026 Biology Unit 3 baseline and the existing chapter inventory. The companion focuses on selected concepts, and the recording remains the broader lesson. The other 33 recordings remain candidates for written support.
- Existing JEE companions now include a vertical-circle problem that separates energy from contact, normal adjustment of an astronomical telescope, and a resistivity problem using a measured V–I slope and diameter. Practical Chemistry examples and Mathematics timed practice remain follow-up work.
- Existing Mizo drafts retain their current labels. The NEET addition uses English until a Mizo translation is available for review.

## Biology written companion expansion

| Recording | Written focus and verified source coverage | Remaining depth |
| --- | --- | --- |
| B03 Cell Cycle and Cell Division | Chapters 2–3 and 9–16 inform the n/C diagram, a worked meiosis count and three practice items. OpenStax Cell Cycle and Process of Meiosis support the distinction between DNA replication, chromosome counts and ploidy. | Prophase I substages, spindle checkpoints and more whole-cell versus pole problems. |
| B09 Genetics and Evolution | Chapters 1–2 inform segregation, a pea test cross and conditional probability. The worked problem uses independent offspring and distinguishes a probability from proof of genotype. OpenStax Laws of Inheritance supports the cross and probability model. | Pedigrees, linkage, molecular genetics and evolution remain in their existing recordings and separate practice. |

All 34 dedicated recordings remain available. These two new English companions plus the earlier cell companion provide focused written support for three recordings. Each new companion contains a figure, worked application, revision, three questions and a text download. The genetics lab illustrates a one-gene cross. The division companion links to the cell structure lab as prerequisite review.

Practical Chemistry now includes a numerical example distinguishing theoretical yield, purity-corrected crude yield and recrystallization recovery. The Mathematics tab links to the existing timed JEE Main paper; a Mathematics-only timer or dedicated mixed set is still open.

The first 40 seconds of Cell Cycle chapters 3 and 13 and Genetics chapters 1 and 2 were decoded locally and compared to actual scripts using Vosk. Token-sequence similarities were .775, .693, .824 and .771 respectively. The weak matches clustered around scientific terms, allele symbols and spoken numerals. No new caption mismatch was confirmed and no audio, cues, captions or existing offline-pack versions were edited.

Teaching references checked for this batch: [Cell cycle](https://openstax.org/books/biology-2e/pages/10-2-the-cell-cycle), [Meiosis](https://openstax.org/books/biology-2e/pages/11-1-the-process-of-meiosis), and [Genotypes and test crosses](https://openstax.org/books/biology-2e/pages/12-2-characteristics-and-traits).

## Dedicated Mathematics practice and Biomolecules

The Mathematics class tab links to a separate timed practice mode with reviewed Mathematics questions from the existing JEE bank. Practice settings are 10 or 20 questions, two minutes per question, one point per correct answer, and zero for wrong or skipped answers. It uses the existing question palette, review flags, deadline, scoring breakdown and explanations. Attempts and recent scores use separate storage keys from full simulator papers. The mode is unofficial and makes no claim about NTA paper format or chapter weight.

The fourth NEET written companion focuses on enzyme activity and substrate saturation, using Biomolecules B02 chapters 10–12 and the existing Unit 3 inventory. It adds a labelled schematic, a worked initial-rate comparison, revision, three explained questions, downloadable notes, and Zorami offline search and revision. Wider Biomolecules headings and unpaired recordings remain in the inventory. The chromosome-count companion distinguishes the undivided mitotic anaphase cell from one pole; the Mendelian companion states the simplified single-gene model assumptions. [OpenStax enzymes](https://openstax.org/books/biology-2e/pages/6-5-enzymes)

Local decoded-audio review compared the first 30 seconds of Biomolecules chapters 10, 11 and 12 with their scripts using Vosk. Token-sequence similarities were .931, .954 and .903. The differences included spelling, words clipped at the excerpt boundary, and recognizer substitutions such as “act of” for “active.” No new narration mismatch was confirmed. The MP3s, cue manifests, active captions and offline pack versions were left intact.

## Biology coverage and quality pass

| Companion | Recorded evidence and written scope |
| --- | --- |
| B06 Plant Physiology | Chapters 9–10 support light limitation, net carbon dioxide uptake, the light compensation point, and controls for interpreting starch evidence. The schematic is a fixed-condition illustration. The worked problem tests whether carbon dioxide supply constrains uptake at high light. |
| B07 Human Physiology | Chapters 14–15 cover nephron organization and transport. The companion follows filtration, reabsorption, secretion and urinary excretion, with a labelled directional diagram and a solute mass balance. Hormonal regulation, the countercurrent mechanism and the other organ systems remain in the recordings. |

Six of 34 dedicated recordings now have focused written companions. The two additions provide worked applications, quick revision, three explained questions, downloadable notes, and Zorami search, Explain, and Quick Revision with English fallback.

The four prior companions gained an application question each. They distinguish whole-cell DNA content from per-pole chromosome counts, independence of individual offspring in a known test cross, vesicle fusion from prior rough ER and Golgi trafficking, and active enzyme amount from equilibrium. The protein transport lesson now explicitly explains exocytosis of soluble cargo.

We decoded the first 30 seconds of Plant Physiology chapter 9 and Human Physiology chapter 15 and compared them with the authored scripts using local Vosk. Token-sequence similarities were .965 and .852. The latter showed substitutions for technical terms including glomerular and lumen. No mismatch was independently confirmed, so scripts, captions, cues, recordings and offline editions were preserved. [NCERT photosynthesis](https://ncert.nic.in/textbook/pdf/kebo111.pdf) · [OpenStax human excretory systems](https://openstax.org/books/biology-2e/pages/41-2-the-kidneys-and-osmoregulatory-organs)

## Reproduction and ecology companions

- B08 Reproduction chapters 7–10 support the fertilization sequence, zygote and endosperm, and the maternal origin of the seed coat. The companion states the typical diploid angiosperm model and gives chromosome-count practice. [OpenStax Angiosperms](https://openstax.org/books/biology-2e/pages/26-3-angiosperms)
- B12 Ecology chapters 15–16 and 20–22 support GPP, NPP, trophic transfer, and the distinction between standing biomass and productivity. The worked energy budget uses a stated 12% transfer and distinguishes a classroom model from universal efficiency. [OpenStax energy flow](https://openstax.org/books/biology-2e/pages/46-2-energy-flow-through-ecosystems)
- Eight of the 34 dedicated recordings now have focused companions. These new notes have diagrams, worked applications, revision, three explained questions, downloads, recording links, and offline Zorami modes with English fallback.
- Rechecked the earlier companion models. Zero net gas exchange balances uptake and release, nephron excretion is filtration minus reabsorption plus secretion on one interval, the enzyme graph fixes active enzyme and assay conditions, and the chromosome-count example separates whole-cell DNA content from pole-specific chromosome counts. Added a numeric light-compensation example and noted that the point varies with response and respiration.

Decoded the first 30 seconds of Reproduction chapter 8 and Ecology chapter 20 and compared them with the authored text using local Vosk. Token-sequence similarities were .824 and .952. The recognizer substituted several biological terms, including “deployed” for “diploid” and “triplet” for “triploid.” No new discrepancy was confirmed. Audio, scripts, cues, active captions and offline editions remain as published.

## Plant classification and leaf anatomy

- B04 Diversity chapters 9–11 support the bryophyte, seedless vascular plant and gymnosperm comparison. The companion uses moss, fern and cone-bearing seed plant evidence and leaves algae and animal classification in the broader lecture. [OpenStax seedless vascular plants](https://openstax.org/books/biology-2e/pages/25-4-seedless-vascular-plants) · [OpenStax gymnosperms](https://openstax.org/books/biology-2e/pages/26-2-gymnosperms)
- B05 Structural Organisation chapter 13 supports leaf anatomy and function. The companion labels a typical dorsiventral section, including mesophyll and a stomatal pore. It practises orientation and diffusion, with other leaf types and organs in the broader course. [OpenStax leaves](https://openstax.org/books/biology-2e/pages/30-4-leaves)
- Rechecked prior calculations. In the typical diploid angiosperm with 2n = 18, syngamy gives 18, triple fusion gives 27, and the maternal seed coat stays at 18 chromosomes per nucleus. In the ecology example, GPP less producer respiration gives 1,000 kJ per square metre per year; 12% gives 120 in the same units. Sequential 12% and 15% transfers from 1,000 give 18. The model uses stated rates and efficiencies.
- Ten dedicated recordings now have focused companions. The remaining syllabus headings and depth are tracked separately.

## Human Welfare and floral diagram companions

B10 chapters 8–12 support basic immunology and the new immune-memory and active/passive immunity companion. Vaccination is treated as an example of active immunity in the source course; the notes focus on antibody origin and evidence for memory. B25 chapters 3–4 support the new placentation comparison, limited to marginal, axile and the illustrated parietal attachment. Twelve of 34 dedicated recordings now have focused companions. These are subtopic-level additions. [OpenStax adaptive immunity](https://openstax.org/books/biology-2e/pages/42-2-adaptive-immune-response) · [IIT Kanpur SATHEE on placentation](https://sathee.iitk.ac.in/ncert-books/neet-ncert-exemplar/ncert_b11_exemplar/morphology_of_flowering_plants/)

## Synapse and vascular diagram companions

B24 chapters 7–8 support directional reasoning at a typical chemical synapse. The companion separates presynaptic calcium entry, vesicle fusion, transmitter diffusion and receptor response. B26 chapters 2 and 5–6 support radial versus collateral arrangement and root/stem section interpretation, with whole-section patterns distinguished from tissue position within a bundle. Fourteen of 34 dedicated recordings now have focused companions. [OpenStax chemical synapses](https://openstax.org/books/biology-2e/pages/35-2-how-neurons-communicate) · [IIT Kanpur SATHEE plant anatomy](https://sathee.iitk.ac.in/sathee-neet/ncert-books/neet-ncert-books/neet-nb-bio-11/bio-11-chapter-6-anatomy-of-flowering-plants/)
