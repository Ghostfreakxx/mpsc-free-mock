# Chemistry expansion: sixteen topics

The sixteen-topic draft batch has been converted to recorded-class content after narration access was restored. The generation process now reads the updated local credential rather than inheriting the expired value. Credentials are not stored in these sources.

This batch adds **16 narrated topics, 32 original MCQs, 12 worked examples and 4 diagrams** across four classes. These are supplementary teaching materials, not official past-paper questions or exhaustive syllabus coverage. Deployment and public verification are checked separately in the release workflow.

| Class | New topics | New MCQs | New worked examples | Final chapters | Final questions |
| --- | --- | --- | --- | --- | --- |
| Kinetics | 4 | 8 | 3 | 30 | 58 |
| Practical Chemistry | 4 | 8 | 3 | 33 | 56 |
| Atomic Structure | 4 | 8 | 3 | 33 | 58 |
| Chemical Bonding | 4 | 8 | 3 | 33 | 58 |

## Kinetics and Practical Chemistry

Kinetics adds independent concentration perturbations, conditional collision filtering, depletion and feed boundaries, and a supporting two-population first-order signal model. Its new diagram shows the two component signals and their weighted sum.

Practical Chemistry adds nickel dimethylglyoxime confirmation, calcium oxalate acid response, flame-test blanks and phosphate-molybdate confirmation. The donor diagram distinguishes two bidentate ligands from four donor atoms. The notes interpret evidence and are not an unsupervised laboratory procedure.

## Atomic Structure and Chemical Bonding

Atomic Structure adds accelerating-voltage wavelengths, filtered hydrogen spectral gaps, orbital projections and common chromium/copper cation configurations. The spectrum diagram separates six potential gaps into ultraviolet, the selected visible window and infrared, without asserting equal intensities or every dipole selection rule.

Chemical Bonding adds selected electron-deficient chloride adducts, common-factor ionic energy comparisons, CO charge conventions and the oxygen molecular-ion series. The oxygen diagram shows separate antibonding occupations and unpaired counts.

## Implementation and validation

The authored additions, study extensions and diagrams are under the kinetics-practical-controls and atomic-bonding-comparisons file groups. Their authors refresh additions by default; the explicit --write-lectures option updates the recording source. Original recorded chapter and question prefixes are preserved.

The full content suite contains 642 independent tests across 140 files. Release checks cover lint, TypeScript, dependency audit, production build, mobile/security smoke, course and library browser checks, and each expanded recorded class. Narration is reviewed independently before publication. See chemistry-written-coverage-2026.md for the course inventory and remaining scope.
