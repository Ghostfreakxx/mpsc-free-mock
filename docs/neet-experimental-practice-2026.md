# NEET experimental and mixed practice

Published route: `/neet/classes/physics-chemistry/practice`.

32 original questions in four eight-question sets: Physics experimental interpretation, Chemistry experimental interpretation, Physics mixed foundations and Chemistry mixed foundations. All numerical observations are synthetic classroom examples. This is a focused companion to the mapped NEET UG 2026 classes, not a complete mock, a new recording or evidence of practical proficiency.

Physics practice includes zero correction, propagated uncertainty, Ohmic slopes, bridge balance, resonance differences, amplitude/energy, Stokes scaling and lens power. Mixed questions connect mechanics, capacitors, circuits, photoelectric energy, ideal gases, vectors, decay and waves.

Chemistry practice includes acid–base stoichiometry, blanks, chromatography, combustion analysis, calorimetry, fixed-threshold kinetics, silver-halide confirmation and recrystallization. Mixed questions connect limiting reagents, gaseous equilibrium, first-order decay, cell energy, coordination oxidation states, buffers, hydrogenation and colligative properties.

Each answer reveals a worked explanation and assumptions. Four independent `neet.experimental-mixed.<set>.v1.answers` keys use the existing validated question/option serialization. Existing class progress is unchanged. Links from the class map and detailed review disable prefetch; question data is imported only by the server page.

Verification: `node scripts/check-neet-experimental-practice.mjs` checks independent numerical calculations, all answers, wrong-answer explanations, reload persistence, isolated reset, related class URLs and light/dark layouts at 320, 360 and 1440 pixels. Standard repository checks, full build and course smoke checks also apply.
