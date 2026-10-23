import type { StudyLesson } from "./course";
import { moleAnalysisTransitionAdditions as additions } from "./mole-analysis-transition-additions.ts";
const examples: Record<string,StudyLesson["examples"]> = {
  "mole-concept": [
    {
      "question": "A 1.00 g sample contains only CaCO3 and acid-inert impurity. It consumes part of 40.0 mL 0.500 M HCl; residual acid equals 10.0 mL 0.400 M NaOH. Find carbonate purity with M=100 g/mol.",
      "steps": [
        "Initial acid=0.0400×0.500=0.0200 mol H+; residual=0.0100×0.400=0.00400 mol.",
        "Consumed H+=0.0160 mol; carbonate needs two H+ per formula unit.",
        "Carbonate mass=(0.0160/2)×100=0.800 g."
      ],
      "answer": "80.0% CaCO3, conditional on complete reaction, acid-inert impurity and the stated residual-acid endpoint."
    },
    {
      "question": "A 2.32 g mixture of only FeO and Fe2O3 gives 1.68 g Fe on complete reduction. Use Fe=56 and O=16. Find each oxide amount.",
      "steps": [
        "Iron atoms=1.68/56=0.0300 mol; oxygen atoms=(2.32−1.68)/16=0.0400 mol.",
        "Let oxide moles be a and b: a+2b=0.0300; a+3b=0.0400.",
        "Subtract to get b=0.0100; substitute to get a=0.0100."
      ],
      "answer": "0.0100 mol FeO (0.720 g) and 0.0100 mol Fe2O3 (1.60 g); predicted water=0.0400 mol in the stated reduction model."
    },
    {
      "question": "A 0.100 mol methane/ethane mixture gives 0.160 mol CO2 on complete combustion. Find composition, water production and oxygen requirement.",
      "steps": [
        "a+b=0.100 and a+2b=0.160 give methane a=0.0400 and ethane b=0.0600 mol.",
        "Water amount=2a+3b=0.260 mol.",
        "Oxygen requirement=2a+3.5b=0.290 mol."
      ],
      "answer": "40.0 mol% methane, 60.0 mol% ethane; 0.260 mol water and 0.290 mol oxygen demand under complete-combustion assumptions."
    }
  ],
  "purification-analysis": [
    {
      "question": "A 0.200 g sample quantitatively yields 0.233 g pure dry BaSO4. With M(BaSO4)=233 and M(S)=32 g/mol, find sulfur percent.",
      "steps": [
        "Product amount=0.233/233=0.00100 mol.",
        "One S per formula unit gives sulfur mass 0.00100×32=0.0320 g.",
        "Percent=100×0.0320/0.200."
      ],
      "answer": "16.0% sulfur, assuming the stipulated complete recovery and defined dry product."
    },
    {
      "question": "A 0.310 g sample yields 0.222 g pure dry Mg2P2O7 in a quantitative phosphorus model. Use product M=222 and P=31 g/mol.",
      "steps": [
        "Product amount=0.222/222=0.00100 mol.",
        "Two P atoms per formula unit give 0.00200 mol P and mass 0.0620 g.",
        "Percent=100×0.0620/0.310."
      ],
      "answer": "20.0% phosphorus; omitting the factor two gives the wrong result."
    },
    {
      "question": "An ideal immiscible organic/water pair contributes partial pressures 10/90 kPa at one temperature, with molar masses 180/18. Find vapour organic mole fraction and condensed organic mass per 10.0 g water.",
      "steps": [
        "Total pressure=100 kPa, so organic mole fraction=10/100=0.100.",
        "Organic/water mole ratio=10/90=1/9.",
        "Mass ratio=(1/9)×(180/18)=10/9."
      ],
      "answer": "Organic vapour fraction 0.100; about 11.1 g organic per 10.0 g water while both stipulated immiscible phases remain present."
    }
  ],
  "d-f-block": [
    {
      "question": "Using supplied U=[Rn]5f3 6d1 7s2 and the elementary removal model, find U4+ f count and U oxidation state in UO2²+ if O=−2.",
      "steps": [
        "Four simple removals from the neutral inventory leave [Rn]5f2 for U4+.",
        "For the specified uranyl cation UO2²+, x−4=+2 gives x=+6.",
        "The formal oxidation state describes electron bookkeeping; it does not imply a bare U6+ ion in the covalent uranyl species."
      ],
      "answer": "U4+ is 5f2 in the supplied model; U in UO2²+ is +6. Formula charge must be read explicitly; a formal balance alone does not establish a stable species."
    },
    {
      "question": "Use supplied reduction potentials Mn3+/Mn2+ +1.51 V and Cr3+/Cr2+ −0.41 V. Find E° and ΔG° for Mn3+ + Cr2+ → Mn2+ + Cr3+, with F=96485 C/mol.",
      "steps": [
        "Manganese is reduced and chromium(II) oxidized; one electron transfers.",
        "E°=1.51−(−0.41)=1.92 V.",
        "ΔG°=−nFE°=−1×96485×1.92 J/mol."
      ],
      "answer": "E°=+1.92 V and ΔG°≈−185 kJ per mole of the written reaction under the supplied standard model."
    },
    {
      "question": "Use Fe=56 and C=12 to find carbon fraction in Fe3C and in a stipulated mixture containing 10.0 mass% Fe3C with the rest pure Fe.",
      "steps": [
        "Formula mass=3×56+12=180 g/mol.",
        "Carbon fraction in pure carbide=12/180=0.066667.",
        "Overall fraction=0.100×0.066667."
      ],
      "answer": "6.67 mass% carbon in pure Fe3C; about 0.667 mass% in the stated mixture. This does not predict real alloy microstructure or hardness."
    }
  ]
};
export function extendMoleAnalysisTransitionLesson(lesson: StudyLesson) {
 if (!(lesson.id in additions)) return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(chapter=>({title:chapter.title,paragraphs:[chapter.script],formula:chapter.formula})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(question=>({...question,options:[...question.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(existing=>existing.url===source.url)));
}
