# Content publication policy

Published practice is the source-checked, original foundation set in `app/data/reviewed-content.ts`. It is not a comprehensive exam bank, an official PYQ collection, or a prediction of examination content. Review date: 2026-09-27. Review was AI-assisted, not certification by an examination body or independent subject expert.

The second release adds exactly 200 practice slots to each of the four exam streams: totals MPSC 229, NEET 209, JEE 209 and CUET PG 224. Some questions are shared across streams. The catalog has 571 unique prompts, not 871 distinct concepts. Additions include deterministic numerical variants and paired recall/matching variants within the existing foundation topics. Their source locations explicitly identify those variants. The larger count does not expand this into full-syllabus coverage. Generation is deterministic and does not call an AI service at runtime. Question IDs from the first release are retained.

The original 3,291 question records are preserved verbatim as structured data in `archive/` (MPSC 931, NEET 515, JEE 601, CUET PG 1,244). They are excluded from scored practice while provenance and factual answers await review. Legacy college notes remain visible with a review-pending notice. Historical device responses are retained; current scores include only published questions.

For each new question, check the wording, the unique correct option, every distractor, the explanation and the precise reference location. Record the source URL, review date, stable ID and intended stream. Do not infer verified status from a successful schema test or a working URL.

Official PYQs require the original paper, year/session/shift, question identifier, final official key and matching key identifier. Provisional, dropped and disputed items must not silently enter scored practice. No current published item is claimed as an official PYQ.

Downloads are self-contained, printable HTML foundation packs with original summaries, self-checks, answer reasoning and source links. They work without a network after download; external references need a connection. They are not complete course notes or PDFs. Constitutional references use the explicitly named May 2024 edition. Review legal and syllabus changes before expanding coverage.

Before publication run `npm run validate:banks`, `npm run test:question-rotation`, `npm run test:content`, `npm run lint` and `npm run build`. Review source accuracy separately and test first-answer locking, filters, empty search, each download, narrow screens and offline assets. Automated checks do not establish factual truth.
