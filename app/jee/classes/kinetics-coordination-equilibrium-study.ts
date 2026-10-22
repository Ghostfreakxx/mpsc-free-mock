import type { StudyLesson } from "./course";
import { kineticsCoordinationEquilibriumAdditions as additions } from "./kinetics-coordination-equilibrium-additions.ts";
const examples: Record<string, StudyLesson["examples"]> = {
  "chemical-kinetics": [
    {
      "question": "An ln k versus 1/T plot has slope −6000 K. Use R=8.314 J/(mol K) to find activation energy.",
      "steps": [
        "For this axis convention, slope=−Ea/R.",
        "Ea=6000×8.314=49884 J/mol.",
        "Convert joules to kilojoules."
      ],
      "answer": "49.884 kJ/mol. A common-log or scaled-temperature axis needs its own conversion."
    },
    {
      "question": "0.100 mol A in 1.00 L is instantly diluted to 2.00 L without reaction. It then undergoes first-order loss for one half-life at constant volume and unchanged k. Find final amount and concentration.",
      "steps": [
        "Mixing conserves 0.100 mol; concentration becomes 0.0500 M.",
        "One subsequent half-life leaves 0.0500 mol.",
        "Divide by the new volume 2.00 L."
      ],
      "answer": "0.0500 mol and 0.0250 M; dilution itself consumed no A."
    },
    {
      "question": "Supporting model: A forms B and C through independent irreversible first-order channels with constants 0.020 and 0.030 min⁻¹. Starting from 1.00 mol A only, find products when half of A has reacted.",
      "steps": [
        "Total loss constant=0.050 min⁻¹.",
        "Branch fractions are 0.40 and 0.60.",
        "Multiply each fraction by the reacted amount, 0.500 mol."
      ],
      "answer": "0.200 mol B and 0.300 mol C; time≈13.86 min."
    }
  ],
  "coordination-compounds": [
    {
      "question": "With immediate precipitation and an intact coordination sphere, compare AgCl from 0.0100 mol [Cr(H2O)6]Cl3 and [Cr(H2O)5Cl]Cl2·H2O. Use AgCl molar mass 143.5 g/mol.",
      "steps": [
        "The first has three outer chlorides; the second has two.",
        "AgCl amounts are 0.0300 and 0.0200 mol.",
        "Multiply separately by the supplied molar mass."
      ],
      "answer": "4.305 g and 2.870 g respectively; slow ligand substitution is excluded."
    },
    {
      "question": "For a supplied ideal d3 comparison, Δo=18000 cm⁻¹ and Δt=(4/9)Δo. Find octahedral and high-spin tetrahedral orbital stabilization.",
      "steps": [
        "Octahedral t2g³ gives −1.2Δo.",
        "Tetrahedral e²t2¹ gives −0.8Δt; Δt=8000 cm⁻¹.",
        "Both have three unpaired electrons despite different stabilization."
      ],
      "answer": "−21600 cm⁻¹ octahedral; −6400 cm⁻¹ tetrahedral. Other bonding and energy terms are not included."
    },
    {
      "question": "A 25.0 mL metal aliquot consumes 20.0 mL 0.0100 M EDTA in a quantitative 1:1 buffered model. Find metal concentration and donor count for one fully hexadentate ligand.",
      "steps": [
        "EDTA amount=0.0200×0.0100=0.000200 mol.",
        "Metal concentration=0.000200/0.0250.",
        "One fully bound ligand donates through two N and four O atoms."
      ],
      "answer": "0.00800 M metal; one EDTA ligand supplies six donor positions."
    }
  ],
  "equilibrium": [
    {
      "question": "At one temperature a forward reaction has K=16. Find K when reversed, halved, and reversed then halved.",
      "steps": [
        "Reversal gives reciprocal K.",
        "Halving all coefficients takes square root.",
        "Apply both transformations to obtain sqrt(1/16)."
      ],
      "answer": "1/16, 4, and 1/4 respectively; temperature and standard-state conventions stay fixed."
    },
    {
      "question": "For an ideal weak base with C=0.00100 M, Kb=0.000100 and supplied pKw=14.00, neglect water autoionization and calculate pH.",
      "steps": [
        "Solve x²+Kb x−Kb C=0 for positive hydroxide concentration.",
        "x=(−0.000100+sqrt(0.000100²+4×0.000100×0.00100))/2≈0.000270156 M.",
        "pOH≈3.5684; pH=14.00−pOH. The 27% ionization makes the small-x shortcut unsuitable."
      ],
      "answer": "pH≈10.43 in the supplied ideal concentration model."
    },
    {
      "question": "Initially [A+]=[B+]=0.0100 M. One-to-one salts AX and BX have Ksp 10⁻10 and 10⁻8. With no complexation and negligible added volume, find the fraction of A removed just as BX reaches saturation.",
      "steps": [
        "BX onset requires [X−]=10⁻8/0.0100=10⁻6 M.",
        "AX saturation then leaves [A+]=10⁻10/10⁻6=10⁻4 M.",
        "Remaining fraction=10⁻4/0.0100=0.01."
      ],
      "answer": "99% A removed; AX begins at [X−]=10⁻8 M."
    }
  ]
};
export function extendKineticsCoordinationEquilibriumLesson(lesson: StudyLesson) {
 if (!(lesson.id in additions)) return;
 const added = additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(chapter => ({title: chapter.title, paragraphs: [chapter.script], formula: chapter.formula})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(question => ({...question, options: [...question.options]})));
 lesson.sources.push(...added.sources.filter(source => !lesson.sources.some(existing => existing.url === source.url)));
}
