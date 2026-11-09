# NEET challenge batch 8

Current expansion: [batch 9](neet-challenge-batch9-2026.md) raises the challenge pool to 250, with five choices per unit. The details below record batch 8.

Adds 25 original application questions: ten Physics, ten Chemistry and five Biology. The challenge pool now contains 225 questions across 50 mapped units; 25 units have five choices and 25 have four. The combined bank has 852 questions. Every challenge paper retains one application question per unit plus 130 foundation questions, exact 45/45/90 subject allocation, 180-minute timing and +4/−1/0 scoring. Difficulty is an authored comparison rather than official calibration or rank prediction.

New topics include power uncertainty, reversal distance, limiting vertical-circle tension, ballistic impact/rise, displaced-axis inertia, interior/exterior gravity, fluid discharge/projectile motion, first-law path dependence, mean free path, SHM phase/energy, empirical versus molecular formulae, orbital capacity, molecular-ion magnetism, reaction calorimetry, dimer association, conjugate-acid hydrolysis, molar conductivity, Arrhenius inference, ion classification, inert-pair trends, animal phylum comparisons, leaf sections, noncompetitive inhibition, photosynthetic ATP accounting and oxygen transport.

`scripts/create-neet-challenge-batch8.mjs` generates server-only data. The mock fetches `/question-bank/neet-full-mock-v9` to avoid stale earlier banks; previous URLs, existing IDs and saved-attempt keys remain available. The dated 2026 baseline and Foundation selection are unchanged. Every addition has explicit data/assumptions, four unique options and worked reasoning.

Validation includes 100 seeded papers, reachability of all additions, exact subject/unit coverage, unchanged Foundation selection and independent numerical checks. Browser verification checks the deployed 852-question bank, latest additions, four/five-choice unit counts, timing/expiry, scoring, saved progress/results and both themes. Standard checks, build, course checks and full site smoke tests also apply.
