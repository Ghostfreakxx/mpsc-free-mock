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

This is the cell-structure foundation within Biology Unit 3, not the whole unit. Biomolecules is now recorded as B02 below. Cell Cycle and Cell Division is the next recorded class. Further diagram identification and mixed experimental questions remain ongoing practice work. The questions are original, not official PYQs.

## Biology B02: Biomolecules

Route: `/neet/classes/biomolecules`. Sixteen narrated chapters, sixteen teaching boards, aligned captions and thirty-two original MCQs, with saved playback/answers and downloadable transcript. The separate progress key is `neet.biomolecules.lecture.v1`.

| Required heading | Recorded evidence |
| --- | --- |
| Chemical constituents and analysis | 1–2: tissue fractions, metabolites, polymers and bond types |
| Carbohydrates | 3–4: sugars, glycosidic links, storage and structural polysaccharides |
| Lipids | 5: fats, fatty acids, ester links and phospholipid organization |
| Proteins | 6–8: amino acids, peptides, structural levels and denaturation |
| Nucleic acids | 9: nucleosides/nucleotides, backbone and base pairing |
| Enzyme properties and mechanism | 10–11: activation barrier, binding, regeneration and saturation |
| Factors influencing enzymes | 12 and 15: conditions, controlled comparisons and inhibition |
| Classification and cofactors | 13–14: textbook six classes, modern EC 7 context, coenzymes and prosthetic groups |
| Original applications | 16 and the quiz: independent bond counts and interpretation |

The traditional six-class enzyme scheme is identified as the textbook account; modern IUBMB EC 7 translocases are explained as additional context. Biomolecules does not complete all Biology Unit 3: Cell Cycle and Cell Division remains next, followed by broader mixed practice.

## Wider Biology map

| Unit | Recording status |
| --- | --- |
| Diversity in Living World | Planned |
| Structural Organisation in Animals and Plants | Planned |
| Cell Structure and Function | Cell structure and Biomolecules recorded; Cell Division next |
| Plant Physiology | Planned; existing photosynthesis practice retained |
| Human Physiology | Planned |
| Reproduction | Planned |
| Genetics and Evolution | Planned; existing DNA/inheritance practice retained |
| Biology and Human Welfare | Planned |
| Biotechnology and Its Applications | Planned |
| Ecology and Environment | Planned |

## Release requirements

Git main is the publication source. Check the exact Vercel production commit, Ready state, promotion and main-domain alias. Validate the public class entry, audio, captions, all chapters and answers, resume, notes download, NEET navigation and both themes on mobile. Run the complete repository checks, production build, mobile smoke, and JEE course regressions because the player is shared. No generated alignment cache, credential or temporary review artifact belongs in Git.
