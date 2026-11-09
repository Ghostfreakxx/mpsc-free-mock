# NEET challenge batch 9

Current expansion: [batch 10](neet-challenge-batch10-2026.md) adds 25 questions; the combined pool now has 275 challenge questions across 50 units. The details below record batch 9.

Adds 25 original application questions in the units not expanded by batch 8. There are now 250 challenge questions, exactly five per mapped syllabus unit, and 877 questions in the combined bank. Every Challenge mix paper retains one application question per unit plus 130 foundation questions, 45/45/90 subjects, 180 minutes and +4/−1/0 scoring. Difficulty is an authored comparison, not official calibration or a rank prediction.

Topics include series-capacitor voltages, constant-volume wire stretching, magnetic direction/scaling, motional power, photon flux, prism symmetry, photoelectric graphs, mixed decay, pulsed-diode heating, apparent depth, lanthanoid contraction, ligand charge accounting, fractionation, resonance, peroxide regioselectivity, benzylic substitution, Grignard carbon counts, amine tests, protein folding, redox blanks, pollen-lineage counting, conditional ABO probability, nodule oxygen buffering, insertional marker inactivation and species evenness.

`scripts/create-neet-challenge-batch9.mjs` generates server-only data. The mock fetches `/question-bank/neet-full-mock-v10`, avoiding stale earlier banks. Previous bank URLs, existing IDs and saved-attempt keys remain available. The dated 2026 syllabus baseline and Foundation selection are unchanged. Every question includes assumptions, four unique choices and a worked explanation.

Verification covers 100 seeded full papers, reachability of all 250 challenge questions, exactly five choices per unit, exact subject/unit quotas, unchanged Foundation papers and independent calculations. Browser checks verify the deployed 877-question bank, latest additions, timing/expiry, scoring, saved progress/results and both themes. Standard repository checks, build, course checks and site smoke tests also apply.
