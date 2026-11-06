# NEET challenge batch 6

Current expansion: [batch 7](neet-challenge-batch7-2026.md) raises the challenge pool to 200, with four choices per unit. The description below records batch 6.

Adds 25 original application questions: ten Physics, ten Chemistry and five Biology. The challenge pool now contains 175 questions across all 50 mapped units; 25 units have four choices and 25 have three. The combined bank has 802 questions. Each challenge paper retains one application question per unit plus 130 foundation questions, the 45/45/90 subject split, 180-minute deadline and +4/−1/0 scoring. Difficulty is an authored comparison, not official calibration or a rank prediction.

New topics include subtraction uncertainty, static versus kinetic friction, rotational axes, elasticity geometry, gas-mass comparisons, electric field versus potential, helical motion, intensity/photon flux, matter-wave energy, diode power, hydrate composition, Lewis adducts, ideal liquid/vapour composition, series electrolysis, electron-gain exceptions, dichromate stoichiometry, chromatographic scaling, ozonolysis reconstruction, disproportionation, disaccharide hydrolysis, moss generations, enzyme inhibition, nephron volume accounting, X-linked conditional probability and restriction-fragment lengths.

`scripts/create-neet-challenge-batch6.mjs` produces server-only data. The mock fetches `/question-bank/neet-full-mock-v7` to avoid stale earlier banks. Previous URLs, all existing IDs and saved-attempt keys remain available. The dated 2026 syllabus baseline and existing Foundation selection are unchanged. Every addition contains its assumptions, four unique options and a worked explanation.

Validation covers 100 seeded papers, reachability of every addition, exact subject/unit coverage, unchanged Foundation selection and independent numerical checks. Browser verification checks all 802 deployed questions, the latest 25 additions, three/four-choice unit counts, timing/expiry, scoring, progress isolation, saved results and both mobile themes. Standard repository checks, build, course checks and site smoke tests also apply.
