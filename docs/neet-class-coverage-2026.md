# NEET recorded class coverage

Updated 4 November 2026. Baseline: [official NEET UG 2026 syllabus](https://neet.nta.nic.in/document/syllabus-for-neet-ug-2026-examination/). The label is deliberately dated; no 2027 syllabus verification is claimed.

## Biology B01: Cell — The Unit of Life

Route: `/neet/classes/cell-unit-life`, linked from `/neet/classes` and NEET practice. Fifteen narrated chapters, aligned English captions, fifteen original SVG teaching boards, thirty original MCQs, saved playback/answers and downloadable transcript. The voice is disclosed as AI-generated Marin. Progress uses a new `neet.cell-unit-life.lecture.v1` key; JEE and existing NEET question progress remain separate.

| Required cell heading | Chapter evidence |
| --- | --- |
| Cell theory | 1 |
| Prokaryotic/eukaryotic organization | 2–3, with specialized-cell exceptions |
| Cell envelope, membrane and wall | 3–5 |
| ER, Golgi, lysosomes and vacuoles | 6–7; secretory integration in 15 |
| Mitochondria and plastids | 8–9 |
| Ribosomes and microbodies | 10 |
| Cytoskeleton | 11 |
| Cilia, flagella and centrioles | 12, distinguishing doublets, central pair and triplets |
| Nucleus, nucleolus and chromatin | 13 |
| Chromosome structure | 14; centromere positions and replicated-chromosome counting |

This is the cell-structure foundation within Biology Unit 3, not the whole unit. Biomolecules and Cell Cycle and Cell Division are the next recorded classes. Further diagram identification and mixed experimental questions remain ongoing practice work. The questions are original, not official PYQs.

## Wider Biology map

| Unit | Recording status |
| --- | --- |
| Diversity in Living World | Planned |
| Structural Organisation in Animals and Plants | Planned |
| Cell Structure and Function | Cell structure recorded; Biomolecules and Cell Division next |
| Plant Physiology | Planned; existing photosynthesis practice retained |
| Human Physiology | Planned |
| Reproduction | Planned |
| Genetics and Evolution | Planned; existing DNA/inheritance practice retained |
| Biology and Human Welfare | Planned |
| Biotechnology and Its Applications | Planned |
| Ecology and Environment | Planned |

## Release requirements

Git main is the publication source. Check the exact Vercel production commit, Ready state, promotion and main-domain alias. Validate the public class entry, audio, captions, all chapters and answers, resume, notes download, NEET navigation and both themes on mobile. Run the complete repository checks, production build, mobile smoke, and JEE course regressions because the player is shared. No generated alignment cache, credential or temporary review artifact belongs in Git.
