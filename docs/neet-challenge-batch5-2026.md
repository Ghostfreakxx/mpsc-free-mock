# NEET challenge batch 5

Current expansion: [batch 6](neet-challenge-batch6-2026.md) raises the challenge pool to 175, with three or four choices per unit. The details below record batch 5.

Adds 25 original application questions in the units not expanded by batch 4. The challenge pool now has 150 questions, exactly three per mapped unit; the combined bank has 777. Each challenge paper still selects 50 application questions (one per unit) plus 130 foundation questions, with the existing 45/45/90 allocation, 180-minute clock and +4/−1/0 scoring. Difficulty remains an authored comparison rather than official NEET calibration or rank prediction.

New scenarios cover connected-battery dielectrics, potentiometer internal resistance, loop reshaping, induction, optical frequency/wavelength, powers of lenses in contact, photocurrent/energy, nuclear binding, Zener limits, measurement offsets, acidic redox stoichiometry, linkage isomerism, repeated extraction, unsaturation, aromatic substitution, SN1 scaling, selective silver reduction, amine neutralization, DNA hydrogen bonds, permanganate titration, pollen/seed counts, linkage recombination, antibiotic target inference, restriction-DNA topology and logistic growth.

`scripts/create-neet-challenge-batch5.mjs` generates server-only data. The mock loads `/question-bank/neet-full-mock-v6` to avoid stale earlier banks; previous URLs, IDs and saved-attempt keys remain available. The dated 2026 syllabus baseline is unchanged. Every new question has explicit assumptions, four unique options and a worked explanation.

Validation includes 100 seeded papers, reachability of all 150 challenge questions, exactly three choices per unit, subject/unit coverage, unchanged Foundation selection and independent numerical checks. Browser verification checks the deployed 777-question bank, latest additions, timing/expiry, scoring, progress isolation, saved results and both themes. Standard repository checks, build, course checks and site smoke tests also apply.
