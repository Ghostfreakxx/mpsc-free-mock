import type { StudyLesson } from "./course";
import { thermoSolutionBalancesAdditions as additions } from "./thermo-solution-balances-additions.ts";
const examples: Record<string, StudyLesson["examples"]> = {
  "chemical-thermodynamics": [
    {
      "question": "For 2H2+O2→2H2O(l), 0.300 mol H2 reacts with 0.100 mol O2. Use ΔrH=−572 kJ/mol extent. Find heat, water and excess hydrogen.",
      "steps": [
        "Extent=min(0.300/2,0.100)=0.100 mol.",
        "Water=2ξ=0.200 mol; H2 remaining=0.300−2ξ=0.100 mol.",
        "At constant pressure with only PV work, q=0.100×(−572) kJ."
      ],
      "answer": "−57.2 kJ heat, 0.200 mol liquid water and 0.100 mol excess H2."
    },
    {
      "question": "An isolated combined model transfers 1000 J from an ideal 400 K reservoir to an ideal 300 K reservoir. Calculate the entropy changes.",
      "steps": [
        "Hot reservoir: −1000/400=−2.50 J/K.",
        "Cold reservoir: +1000/300=+3.333... J/K.",
        "Sum=+0.833... J/K; energy remains conserved."
      ],
      "answer": "Total entropy increases by 0.833 J/K; fixed-temperature reservoir assumptions are required."
    },
    {
      "question": "At 300 K, a reaction has dimensionless K=10 and Q=100. Find actual and standard reaction Gibbs energies with R=8.314 J/(mol K).",
      "steps": [
        "Actual ΔrG=RT ln(Q/K)=8.314×300×ln 10.",
        "Standard ΔrG°=−RT ln K has the opposite sign for these data.",
        "The actual positive value favours the reverse direction at the current composition."
      ],
      "answer": "ΔrG≈+5.74 kJ/mol reaction; ΔrG°≈−5.74 kJ/mol reaction. These refer to different states."
    }
  ],
  "solutions": [
    {
      "question": "250 g hydrate of M=250 g/mol contains five waters per formula unit, each M=18. It dissolves completely in 910 g water. Find formal molality and particle molality if i=2.",
      "steps": [
        "One mole hydrate supplies one mole salt formula units and 90 g water.",
        "Solvent water=910+90=1000 g=1.000 kg.",
        "Formal m=1.00 mol/kg; ideal particle molality=i m=2.00 mol/kg."
      ],
      "answer": "1.00 mol/kg salt formula units; 2.00 mol particles/kg in the stipulated complete-dissociation model."
    },
    {
      "question": "A solution is 2.00 mol/L and 2.50 mol/kg with solute molar mass 60 g/mol. Infer density at the same temperature.",
      "steps": [
        "Choose 1 L: solute amount 2.00 mol and mass 120 g.",
        "Solvent mass=2.00/2.50=0.800 kg=800 g.",
        "Total mass=920 g in 1000 mL."
      ],
      "answer": "0.920 g/mL, conditional on all data referring to the same solution and temperature."
    },
    {
      "question": "For an ideal binary liquid, pA°=80 and pB°=40 kPa. Its equilibrium vapour has yA=0.800. Find liquid xA and total pressure.",
      "steps": [
        "Use 80x/[80x+40(1−x)]=0.800.",
        "80x=32+32x gives x=2/3.",
        "Total pressure=80×2/3+40×1/3=66.67 kPa."
      ],
      "answer": "Liquid xA=2/3 and pressure≈66.67 kPa; overall two-phase composition also needs phase amounts."
    }
  ]
};
export function extendThermoSolutionBalancesLesson(lesson: StudyLesson) {
 if (!(lesson.id in additions)) return;
 const added = additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(c => ({title:c.title, formula:c.formula, paragraphs:[c.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(q => ({...q,options:[...q.options]})));
 lesson.sources.push(...added.sources.filter(s => !lesson.sources.some(old => old.url===s.url)));
}
