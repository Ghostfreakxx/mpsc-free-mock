import type { StudyLesson } from "./course";
import { hydrocarbonsAtomicBondingAdditions as additions } from "./hydrocarbons-atomic-bonding-additions.ts";
const examples: Record<string,StudyLesson["examples"]> = {
  "hydrocarbons": [
    {
      "question": "For C6H10, compare DBE with hydrogen uptake for one cycloalkene, an acyclic diene and an acyclic alkyne. Assume complete multiple-bond saturation with no ring opening.",
      "steps": [
        "DBE=(2×6+2−10)/2=2.",
        "A one-ring monoalkene consumes one H2 while retaining its ring.",
        "Acyclic diene and alkyne each consume two H2 on complete saturation."
      ],
      "answer": "DBE 2 in each case; uptake 1, 2 and 2 mol H2 per mol molecule respectively. Uptake alone does not distinguish the last two."
    },
    {
      "question": "An ideal ethene addition polymer has chain molar mass 28000 g/mol and repeat mass 28 g/mol. Ignore ends. Find repeat and carbon counts.",
      "steps": [
        "Degree of polymerization≈28000/28=1000.",
        "Each repeat unit retains two carbons and four hydrogens.",
        "Do not subtract a water per link in this ideal addition model."
      ],
      "answer": "About 1000 repeats and 2000 carbons per ideal chain, without claiming a monodisperse real sample."
    },
    {
      "question": "A benzene ring has CH3 at C1 and COOH at C4. Combine ordinary electrophilic directing preferences and count distinct preferred monoproduct connectivities.",
      "steps": [
        "Methyl prefers free ortho sites C2 and C6; its para site is occupied.",
        "Both C2 and C6 are meta to the C4 carboxyl group.",
        "Reflection interchanges C2 and C6 while preserving the substituents."
      ],
      "answer": "Both preferences agree at C2/C6, giving one symmetry-distinct preferred connectivity; yields and overall reactivity require more information."
    }
  ],
  "atomic-structure": [
    {
      "question": "Count n=3 spatial orbitals and spin states in the elementary one-electron Coulomb model. How many electrons occupy a hydrogen atom?",
      "steps": [
        "Allowed l values 0,1,2 give 1+3+5 spatial orbitals.",
        "Two spin states per spatial orbital give 18 states.",
        "Hydrogen still has one electron; available states are not occupied-electron counts."
      ],
      "answer": "9 spatial orbitals, 18 possible spin states, one actual electron in H."
    },
    {
      "question": "For a hydrogen-like 1s state with x=Zr/a0 and radial density px=4x² exp(−2x), find the maximum for r>0. Use a0=0.529 Å for He+.",
      "steps": [
        "Differentiate: dpx/dx=8x(1−x)exp(−2x).",
        "The positive-radius maximum is at x=1.",
        "r=a0/Z=0.529/2 Å; probability density per volume has a different maximum."
      ],
      "answer": "Radial maximum at 0.2645 Å for He+; density per unit volume is largest at the origin."
    },
    {
      "question": "A one-electron n=3→2 emission has 17.0 eV energy. Use 13.6Z²(1/4−1/9) eV and hc≈1240 eV nm. Identify ion and wavelength.",
      "steps": [
        "1/4−1/9=5/36.",
        "Z²=17.0/(13.6×5/36)=9, so Z=3.",
        "Lithium must have two electrons removed to leave one; wavelength=1240/17.0."
      ],
      "answer": "Li2+ and approximately 72.94 nm in the stated model; the atom energy change is −17.0 eV."
    }
  ],
  "chemical-bonding": [
    {
      "question": "A supplied MgCl2 cycle has Mg atomization 148, ionizations 738 and 1451, Cl2 atomization 243, two Cl gains −349 each, and overall formation −642 kJ/mol. Find lattice formation enthalpy.",
      "steps": [
        "Subtotal=148+738+1451+243−2×349=1882 kJ/mol.",
        "Write −642=1882+Lformation.",
        "The reverse dissociation term changes sign between the same states."
      ],
      "answer": "Lformation=−2524 kJ/mol; dissociation=+2524 kJ/mol for the supplied rounded data."
    },
    {
      "question": "Estimate gas-phase ethene hydrogenation energy from supplied C=C 614, H–H 436, C–C 347 and C–H 413 kJ/mol.",
      "steps": [
        "Cancel the four C–H bonds present on both sides.",
        "Changed bonds broken cost 614+436=1050.",
        "Changed bonds formed release 347+2×413=1173."
      ],
      "answer": "Approximately −123 kJ/mol; average bond enthalpies and separate phase terms limit accuracy."
    },
    {
      "question": "In the introductory MO model compare CO, NO and NO+ valence electrons, bond orders and unpaired counts.",
      "steps": [
        "CO has ten valence electrons and a paired model with bond order three.",
        "NO has eleven; one pi antibonding electron gives bond order 2.5 and one unpaired electron.",
        "Removing that antibonding electron gives NO+ with ten valence electrons, model bond order three and paired occupation."
      ],
      "answer": "CO: 10, 3, 0; NO: 11, 2.5, 1; NO+: 10, 3, 0. Equal counts do not imply identical heteronuclear orbital energies or dipoles."
    }
  ]
};
export function extendHydrocarbonsAtomicBondingLesson(lesson: StudyLesson) {
 if (!(lesson.id in additions)) return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(chapter=>({title:chapter.title,paragraphs:[chapter.script],formula:chapter.formula})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(question=>({...question,options:[...question.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(existing=>existing.url===source.url)));
}
