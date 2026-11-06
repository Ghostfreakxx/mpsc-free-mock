# NEET full-syllabus foundation mock

Route `/neet/mock-test`, linked from NEET practice and the recorded-class library. Published through Git main; verify the exact production commit, target and public alias in Vercel before reporting live.

## Pattern and scope

Uses the dated [2026 NTA information bulletin](https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2026/02/202602231394640855.pdf): 180 single-answer questions, 180 minutes, Physics 45, Chemistry 45, Biology 90, +4/−1/0, maximum 720. This is a browser practice interface; the actual NEET exam uses pen and paper. No 2027 verification, rank prediction or official NTA endorsement is claimed.

Every generated paper spans all 50 mapped syllabus units. Physics and Chemistry have two or three questions per unit; Biology has nine per unit. These quotas are a practice blueprint, not official chapter weightages. “Full syllabus” means unit representation, not that a single paper exhausts every subheading or matches official difficulty.

The 627-question pool contains 621 reused original class questions with exact stems, options, answers and explanations, plus six newly authored measurement questions. Reused questions retain their class URL and quiz index; new questions are labelled in the data and linked to the measurement class. Older three-option class quizzes are excluded from this four-option mock. The generator filters chapter-paired Physics/Chemistry quizzes to the existing NEET focus chapters, limits Chemistry to early foundation questions and explicitly limits p-block to configuration/trend/first-member comparisons. Questions with unresolved contextual references are excluded. Capped samples spread across eligible questions rather than taking only the first chapters. Biology Unit 3 mixes all three cell recordings. No new narration is required.

`scripts/create-neet-full-mock.mjs` generates the server-only question JSON and a 50-unit blueprint. The browser fetches `/question-bank/neet-full-mock` through the existing shared loader; no lecture registry or question corpus enters the client bundle or link prefetch. New keys `neet-full-mock:attempt:v1` and `neet-full-mock:history:v1` keep other simulator and class progress separate.

The wall-clock deadline continues across reloads and time away. Time-up submits automatically. Marked answers are evaluated; explanations stay hidden during the attempt. Results retain subject scoring, unit-by-unit review, worked explanations, class links and a new-paper action. Completed results reopen after reload on this route.

## Verification

`scripts/neet-full-mock.test.mjs`: seed variation, 50-unit inclusion, 45/45/90 quotas, uniqueness, exact provenance, corrupt-pool rejection, deadline and scoring after restore.

`scripts/check-neet-full-mock.mjs`: browser discovery, subject/unit mix, countdown, answered-and-marked persistence, independent storage, cancellation of manual submission, actual clock-driven auto-submit, scoring, result restore, new-paper variation and both mobile themes. Also run all standard checks, full build, course checks and site smoke tests, then repeat the feature check on the public production URL.
