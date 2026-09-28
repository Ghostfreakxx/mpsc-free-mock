# Mizo translation review

## Scope

2026-09-28: Draft bilingual support for all 229 active MPSC foundation questions.
This is not a translation of the archived question banks, NEET, JEE or CUET PG.
No new questions or official past papers were added in this change.

The English bank remains the answer-key and progress-storage source. Translated
options retain its order. English grammar sentences and choices remain in English
because translating those would change the skill being tested. Technical names,
dates, units and formulae may also remain in English. Both languages are visible.

## Status and references

All translations are AI-assisted drafts, not fluent-speaker approved and not
official MPSC translations. Factual source review is not language certification.

Language reference material supplied by the user:
- Mizo Tawng Grammar (166-page scan; sample front matter inspected).
- Mizo Tawng (76-page scan; sample foreword inspected).
- Mizo Study Pack, including SCERT Kumtluang and Zo Nun materials.
- User-supplied bilingual phrase list, treated as supplementary and unverified.

The scans have OCR/legacy-font extraction errors. Reference consultation was
sample-based, not a complete reading of all books. The files are not redistributed.

Public terminology and historical cross-checks:
- https://rajbhavan.mizoram.gov.in/governor-dr-hari-babu-kambhampati-graces-the-celebration-of-the-37th-mizoram-state-day/
  English and Mizo sections, especially statehood and the settlement.
- https://eram.mizoram.gov.in/pages/about-us
  Historical dates only; current administrative counts on this older page are
  not adopted as current facts.

## Before claiming language approval

A fluent reviewer should check every prompt, every distractor and explanation,
including negation, scope, age ranges and technical terms. Prioritise constitutional
rights, economics and education terminology. Record corrections against stable
question IDs in mizo-manual.ts or the shared entries in mizo-concepts.ts. Check all
questions affected by a shared entry. Prefer current SCERT spelling conventions
where older references differ. Technical tests cannot certify translation quality.

Run npm run test:mizo after every source or translation change. The English bank
fingerprint deliberately fails when source text, option order or answers change;
review alignment before updating it. Never update it merely to silence a failure.
Run the existing content and rotation tests, lint and production build as well.
