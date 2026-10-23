import type { StudyLesson } from "./course";
import { redoxStereochemistryAdditions as additions } from "./redox-stereochemistry-additions.ts";
const examples: Record<string, StudyLesson["examples"]> = {
  "redox-electrochemistry": [
    {
      "question": "Sequential reductions M3+→M2+ and M2+→M transfer one and two electrons, with E°=+0.60 and −0.30 V. Find overall E° for M3+→M.",
      "steps": [
        "Convert each step to ΔG°=−nFE°.",
        "The values are −0.60F and +0.60F, so their sum is zero.",
        "The overall step transfers three electrons: E°overall=−0/(3F)."
      ],
      "answer": "0.00 V for the supplied matched-state model; an unweighted arithmetic mean is invalid."
    },
    {
      "question": "Hydrogen electrodes at 298 K have pH 3 and pH 5, with both gas pressures standard. Use E=−0.05916 pH and neglect junction potentials. Find voltage and cathode.",
      "steps": [
        "At pH 3, E=−0.17748 V; at pH 5, E=−0.29580 V.",
        "The pH 3 side has the more positive reduction potential and is the cathode.",
        "Cell voltage=−0.17748−(−0.29580) V."
      ],
      "answer": "+0.11832 V; the lower-pH side is the cathode under the specified ideal conditions."
    },
    {
      "question": "Ideal acidified-water electrolysis with inert electrodes passes 19300 C. Use F=96500 C/mol and full current efficiency. Find dry hydrogen and oxygen amounts.",
      "steps": [
        "Circuit charge corresponds to 19300/96500=0.200 mol electrons.",
        "H2 requires two electrons per molecule: 0.100 mol H2.",
        "O2 corresponds to four electrons per molecule: 0.0500 mol O2. The same circuit charge applies at both electrodes."
      ],
      "answer": "0.100 mol H2 and 0.0500 mol O2; ideal dry gas volumes are 2:1 at equal temperature and pressure."
    }
  ],
  "organic-principles": [
    {
      "question": "A tetrahedral C has Br, Cl, F and H. View with H directly away, Br top, Cl lower right and F lower left. Assign configuration; then exchange Cl and F.",
      "steps": [
        "Direct atomic numbers give Br>Cl>F>H, so H is priority 4.",
        "With priority 4 away, the path Br→Cl→F is clockwise.",
        "A single exchange reverses the configuration."
      ],
      "answer": "The stated first arrangement is R; exchanging Cl and F gives S. Neither label determines optical-rotation sign."
    },
    {
      "question": "A binary sample contains 70% R and 30% S. Under the supplied same-condition additive model, pure R and S have specific rotations +50 and −50. Find ee and mixture rotation.",
      "steps": [
        "Enantiomeric excess is |0.70−0.30|=0.40 in favour of R.",
        "Weighted specific rotation=0.70×50+0.30×(−50).",
        "The sign of the pure R rotation is supplied experimental information."
      ],
      "answer": "40% ee in favour of R; specific rotation +20 under the stated linear model."
    },
    {
      "question": "Compare acetone and CH2=C(OH)CH3 with two enolate resonance contributors. Which relationship moves an atom attachment?",
      "steps": [
        "The neutral keto/enol structures both have formula C3H6O but differ in hydrogen attachment.",
        "They are constitutional tautomers connected by a chemical equilibrium.",
        "Enolate resonance contributors keep atomic positions and connectivity fixed while electron placement changes."
      ],
      "answer": "Keto–enol tautomerism changes an atom attachment; enolate resonance does not. Acetone has one constitutional monoenol connectivity by symmetry."
    }
  ]
};
export function extendRedoxStereochemistryLesson(lesson: StudyLesson) {
 if (!(lesson.id in additions)) return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(c=>({title:c.title,formula:c.formula,paragraphs:[c.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(q=>({...q,options:[...q.options]})));
 lesson.sources.push(...added.sources.filter(s=>!lesson.sources.some(old=>old.url===s.url)));
}
