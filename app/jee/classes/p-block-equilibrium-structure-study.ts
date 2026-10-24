import type { StudyLesson } from "./course";
import { pBlockEquilibriumStructureAdditions as additions } from "./p-block-equilibrium-structure-additions.ts";
const examples: Record<string, StudyLesson["examples"]> = {
  "p-block": [
    {
      "question": "Check B(OH)3+2H2O ⇌ B(OH)4−+H3O+ for atoms and charge, and identify the Lewis acid.",
      "steps": [
        "Left inventory: B1, O5, H7 and total charge zero.",
        "Right inventory: B1, O5, H7 and charges −1+1=0.",
        "Boron accepts an electron pair in formation of B(OH)4−."
      ],
      "answer": "The equation is balanced; B(OH)3 is the Lewis acid. It does not establish complete conversion in water."
    },
    {
      "question": "Use the usual H3PO2, H3PO3 and H3PO4 structures to compare basicity. How much OH− completely neutralizes 0.0100 mol H3PO3 in a stipulated complete-neutralization model?",
      "steps": [
        "Count O–H groups: one, two and three respectively.",
        "P–H hydrogens do not contribute to this ordinary aqueous acid-basicity count.",
        "H3PO3 consumes two hydroxides per molecule in the stated complete-neutralization model."
      ],
      "answer": "Basicities 1, 2 and 3; 0.0200 mol OH− for 0.0100 mol H3PO3. Actual endpoints require stated conditions."
    },
    {
      "question": "An ideal C60 cage has 60 vertices, each connected to three neighbours. Find distinct edges and molar mass using C=12.",
      "steps": [
        "Sum of vertex degrees=60×3=180.",
        "Each edge touches two vertices, so distinct edges=180/2=90.",
        "Molar mass=60×12=720 g/mol of cage molecules."
      ],
      "answer": "90 C–C connections and 720 g/mol C60 molecules; this is not the molar mass per mole of carbon atoms."
    }
  ],
  "equilibrium": [
    {
      "question": "Find ideal pH for C=10−8 M fully dissociated monoprotic acid at 25 °C with Kw=10−14.",
      "steps": [
        "Charge balance gives H=C+OH, while H×OH=Kw.",
        "Solve H²−CH−Kw=0 with its positive root.",
        "H=(C+sqrt(C²+4Kw))/2≈1.051249×10−7 M; take −log10."
      ],
      "answer": "pH≈6.978, slightly acidic. Water ionization, ideal activities and absence of other species are part of the model."
    },
    {
      "question": "For hypothetical A2B3(s)⇌2A3++3B2− with concentration-model Ksp=1.08×10−18, find pure-water molar solubility and ion concentrations.",
      "steps": [
        "Set [A3+]=2s and [B2−]=3s.",
        "Ksp=(2s)²(3s)³=108s⁵, so s⁵=10−20.",
        "The fifth root gives s=10−4 M; multiply by each ion coefficient."
      ],
      "answer": "s=1.00×10−4 M; A3+=2.00×10−4 M and B2−=3.00×10−4 M, excluding other equilibria."
    },
    {
      "question": "A hypothetical M(OH)2 has Ksp=10−11 and initial free M2+=0.0100 M. At pKw=14, find onset pH and removal if pH is then maintained at 10 with negligible volume change.",
      "steps": [
        "At onset, OH=sqrt(10−11/0.0100)=10−4.5 M, giving pH=9.5.",
        "At pH 10, OH=10−4 M and saturated free metal=10−11/(10−4)²=0.00100 M.",
        "Remaining fraction=0.00100/0.0100=0.10."
      ],
      "answer": "Saturation boundary pH 9.5; 90% removal at maintained pH 10 in the stated model, excluding complexation and redissolution."
    }
  ]
};
export function extendPBlockEquilibriumStructureLesson(lesson: StudyLesson) {
 if (!(lesson.id in additions)) return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(c=>({title:c.title,formula:c.formula,paragraphs:[c.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(q=>({...q,options:[...q.options]})));
 lesson.sources.push(...added.sources.filter(s=>!lesson.sources.some(old=>old.url===s.url)));
}
