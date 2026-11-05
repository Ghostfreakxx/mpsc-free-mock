# NEET Biology diagram and mixed practice

Route: `/neet/classes/biology-practice`. Linked from the NEET recorded-class library with prefetch disabled.

Four newly authored, accessible SVG schematics cover chloroplast compartments, adult human circulation, the typical Polygonum-type embryo sac before polar-nucleus fusion, and a simplified grazing-chain energy model. Each has a title, description and expandable text equivalent. Diagrams are schematics, not anatomical scale drawings. They use inherited theme colours and require no image downloads or client diagram bundle.

32 original questions form six independently saved sets: four diagram sets of four questions and two mixed sets of eight. Mixed practice connects cells, enzymes, diversity, transport, hormones, nephron function, muscle contraction, inheritance, population genetics, transcription, PCR, vectors, immunity, microbes and selection. Each answer reveals reasoning and relevant assumptions; each set links to an existing recording.

Reference checks against NCERT material hosted by IIT Kanpur SATHEE, checked 6 November 2026:

- [Cell exemplar](https://sathee.iitk.ac.in/ncert-books/neet-ncert-exemplar/ncert_b11_exemplar/cell_the_unit_of_life/)
- [Flowering-plant reproduction exemplar](https://sathee.iitk.ac.in/ncert-books/neet-ncert-exemplar/ncert_b12_exemplar/sexual_reproduction_in_flowering_plants)
- [Circulation](https://sathee.iitk.ac.in/sathee-cuet/cuet-ug/biology/english/study-materials/ncert/nb-bio-11/bio-11-chapter-18-body-fluids-and-circulation/)
- [Ecosystem](https://sathee.iitk.ac.in/sathee-neet/ncert-books/neet-ncert-books/neet-nb-bio-12/bio-12-chapter-14-ecosystem/)

This is a focused companion to the mapped 2026 foundations, not an exhaustive review, a fresh recording or a verified 2027 syllabus claim. No examination items or textbook figures are reproduced.

Progress uses the existing validated question/option serialization under six new `neet.biology-diagram-mixed.<set>.v1.answers` keys. Existing recordings and Physics/Chemistry practice keys are unchanged. Server-only question data is passed to the existing small quiz component only on this page.

Verification: `node scripts/check-neet-biology-practice.mjs` checks diagram accessibility, energy/probability/PCR calculations, all answers, incorrect-answer feedback, persistence, isolated reset, linked recordings, browser errors and both themes at 320, 360 and 1440 pixels. Standard repository, build, course and smoke checks also apply.
