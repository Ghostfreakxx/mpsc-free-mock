import type { StudyLesson } from "./course";
import { pBlockThermoSolutionsAdditions as additions } from "./p-block-thermo-solutions-additions.ts";
const examples: Record<string, StudyLesson["examples"]> = {
  "p-block": [
    {
      "question": "Count bonds and lone pairs in molecular white P4 using 20 valence electrons.",
      "steps": [
        "Four vertices each meet three edges; divide 4 × 3 by two.",
        "Six two-electron bonds use 12 electrons.",
        "Eight electrons remain as four lone pairs."
      ],
      "answer": "Six P–P single bonds and four lone pairs; this describes molecular white phosphorus."
    },
    {
      "question": "How are the 12 valence electrons allocated in the elementary diborane bonding model?",
      "steps": [
        "Four terminal B–H bonds use eight electrons.",
        "Two B–H–B bridges share the remaining four electrons.",
        "Each bridge is one three-centre two-electron interaction, not two ordinary bonds."
      ],
      "answer": "Eight terminal-bond electrons and four bridge electrons."
    },
    {
      "question": "Find central lone pairs and molecular shape for BrF5.",
      "steps": [
        "Total valence electrons = 7 + 5 × 7 = 42.",
        "Five bonds use ten; terminal fluorine octets use thirty.",
        "Two remain on Br: six domains with one lone pair."
      ],
      "answer": "One central lone pair; square pyramidal molecular shape."
    }
  ],
  "chemical-thermodynamics": [
    {
      "question": "One mole of ideal gas expands reversibly and isothermally from 2.00 to 4.00 L at 300 K. Find chemistry work and heat, with only PV work.",
      "steps": [
        "Use w = −nRT ln(V2/V1).",
        "w = −1 × 8.314 × 300 × ln 2 = −1729 J.",
        "Ideal-gas internal energy is unchanged at constant T, so q = −w."
      ],
      "answer": "w ≈ −1.729 kJ; q ≈ +1.729 kJ."
    },
    {
      "question": "Supporting application: ΔH298 = −100 kJ/mol and constant ΔCp = +50 J/(mol K). Find ΔH398 with no phase changes.",
      "steps": [
        "Temperature increment = 100 K.",
        "Enthalpy correction = 50 × 100 = 5000 J/mol.",
        "Convert to +5 kJ/mol before adding."
      ],
      "answer": "ΔH398 = −95.0 kJ/mol under the constant heat-capacity assumption."
    },
    {
      "question": "For N2 + 3H2 → 2NH3, use supplied standard entropies 192, 131 and 193 J/(mol K), ΔrH = −92 kJ/mol and T = 298 K. Find ΔrG.",
      "steps": [
        "ΔrS = 2 × 193 − (192 + 3 × 131) = −199 J/(mol K).",
        "Convert entropy to −0.199 kJ/(mol K).",
        "ΔrG = −92 − 298 × (−0.199)."
      ],
      "answer": "−32.698 ≈ −32.7 kJ per mole of reaction as written."
    }
  ],
  "solutions": [
    {
      "question": "One mole solvent and 0.100 mol nonvolatile solute form an ideal binary solution. Pure solvent pressure is 27.0 kPa. Find pressure.",
      "steps": [
        "Solvent mole fraction = 1.00/1.10.",
        "Multiply pure pressure by solvent mole fraction.",
        "Relative lowering is 0.100/1.100, not the solute/solvent ratio."
      ],
      "answer": "24.55 kPa; relative lowering ≈ 0.09091."
    },
    {
      "question": "Mix 0.0100 mol glucose and 0.0200 mol fully dissociated NaCl in 0.100 kg water. Use Kf = 1.86 K kg/mol and ideal dilute behaviour.",
      "steps": [
        "Effective particles = 0.0100 + 2 × 0.0200 = 0.0500 mol.",
        "Divide by the common 0.100 kg solvent mass to obtain 0.500 mol/kg.",
        "Multiply by Kf."
      ],
      "answer": "Freezing-point depression = 0.930 K in the stated ideal model."
    },
    {
      "question": "A membrane blocks solute between ideal 0.100 M and 0.200 M nonelectrolyte solutions at 300 K. Find the balancing pressure difference and flow under 3.00 atm applied to the concentrated side.",
      "steps": [
        "Δπ = RTΔC = 0.082057 × 300 × 0.100.",
        "The balancing pressure is 2.46171 atm applied on the concentrated side.",
        "3.00 atm exceeds that difference, reversing net solvent flow."
      ],
      "answer": "Balance at about 2.46 atm; at 3.00 atm solvent flows from the concentrated side toward the dilute side."
    }
  ]
};
export function extendPBlockThermoSolutionsLesson(lesson: StudyLesson) {
 if (!(lesson.id in additions)) return;
 const added = additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(chapter => ({title: chapter.title, paragraphs: [chapter.script], formula: chapter.formula})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.foundationExtraQuiz, ...added.quiz);
 lesson.sources.push(...added.sources.filter(source => !lesson.sources.some(existing => existing.url === source.url)));
}
