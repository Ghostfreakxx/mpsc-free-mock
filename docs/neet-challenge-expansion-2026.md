# NEET challenge expansion — batch 2

Current release: [complete unit rotation](neet-challenge-rotation-2026.md) raises the challenge pool to 100, with two choices per unit. The details below describe batch 2.

Adds 25 original application questions: ten Physics, ten Chemistry and five Biology. The combined mock bank now has 702 questions, including 75 challenge questions across all 50 mapped units. Each challenge paper still selects one application question per unit (50 total) plus 130 foundation questions. The 25 units with additional choices now rotate between challenge questions; the other 25 retain their original challenge question. Foundation selection, timing, scoring and existing IDs/attempt keys are unchanged.

New scenarios include projectile components, apparent weight, inelastic energy loss, angular momentum/internal work, variable gravitational potential, capillarity, engine/refrigerator energy, beats, isolated capacitors, cut-wire networks, purity and acid equivalents, hydrogen-like spectra, equilibrium Gibbs energy, colligative ion counts, dilution/ionization, electrolysis, zero-order exhaustion, low-spin coordination, combustion analysis, diprotic titration, mitotic counting, fertilization chromosome counts, conditional Hardy–Weinberg probability, PCR splitting and trophic-energy back-calculation.

All stems include required numerical data and assumptions; explanations distinguish commonly confused quantities. Difficulty remains an authored comparison with the foundation pool, not an official NEET calibration or rank prediction. The dated 2026 baseline remains unchanged.

`scripts/create-neet-challenge-expansion.mjs` generates server-only JSON. `/question-bank/neet-full-mock-v3` loads the expanded bank through the existing loader and avoids stale cached banks. Older URLs remain available. Browser navigation checks wait for DOM readiness and explicit interactive controls, rather than unrelated late page resources; all scoring, coverage, persistence, timer and theme assertions remain in place.

Checks: 100 seeded full papers, exact 45/45/90 subject allocation, 50-unit challenge coverage, selection reachability of every new question, unchanged foundation papers, independent numerical checks, unique stems/options, full repository checks/build/smoke/course checks and production browser verification.
