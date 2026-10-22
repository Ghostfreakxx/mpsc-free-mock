import type { StudyLesson } from "./course";
import { nitrogenPracticalPeriodicAdditions as additions } from "./nitrogen-practical-periodic-additions.ts";
const examples: Record<string,StudyLesson["examples"]> = {
  "organic-nitrogen": [
    {
      "question": "A suitable ethyl halide is taken through the elementary Gabriel scheme. Which carbons remain in the released primary amine, and does unactivated chlorobenzene enter the same ordinary displacement?",
      "steps": [
        "The alkyl fragment attaches to the imide nitrogen.",
        "Removal of the temporary imide framework releases the two-carbon ethylamine.",
        "An unactivated aryl carbon is not the ordinary alkyl SN2 site used in this scheme."
      ],
      "answer": "Ethylamine retains the two-carbon ethyl fragment; this scheme is not a general chlorobenzene-to-aniline route."
    },
    {
      "question": "Dry N2 from a quantitative primary-aliphatic-amine model occupies 24.0 mL at 100 kPa and 300 K. Use R=8.314 L kPa/(mol K). Find reactive amine concentration in a 25.0 mL aliquot.",
      "steps": [
        "Convert gas volume to 0.0240 L.",
        "n=100×0.0240/(8.314×300)≈0.00096223 mol.",
        "The stipulated 1:1 gas ratio gives that amine amount; divide by 0.0250 L solution."
      ],
      "answer": "Approximately 0.0385 M reactive amine under the supplied dry-gas and quantitative-reaction assumptions."
    },
    {
      "question": "Track atoms when a benzene-derived diazonium group either leaves as N2 or couples with a phenol ring in the simple azo model.",
      "steps": [
        "The group contains two N atoms, one from the original amino group and one from the nitrosating source in elementary accounting.",
        "A replacement releasing N2 removes both group nitrogen atoms from the aromatic framework.",
        "Azo coupling retains the two N atoms and joins two six-carbon aromatic fragments."
      ],
      "answer": "Replacement: one N2 molecule released. Coupling: twelve carbons and two azo nitrogens retained in the simple product."
    }
  ],
  "practical-chemistry": [
    {
      "question": "10.0 g target dissolves in 50.0 g water at a hot condition. Cold solubility is 5.00 g per 100 g water. With equilibrium, no evaporation and no other loss, find target crystal recovery.",
      "steps": [
        "Cold solution retains 5.00×50.0/100=2.50 g target.",
        "Recovered target=10.0−2.50=7.50 g.",
        "Recovery=100×7.50/10.0; this mass balance does not itself establish crystal purity."
      ],
      "answer": "7.50 g target, or 75.0% ideal target recovery."
    },
    {
      "question": "Pure Mohr’s salt has supplied M=392 g/mol and one Fe2+ per formula unit. Dissolve 3.92 g to 250 mL. Find the 0.0200 M permanganate volume for 25.0 mL aliquot at a stipulated 5:1 Fe2+:MnO4− ratio.",
      "steps": [
        "Salt and Fe2+ amount=3.92/392=0.0100 mol; formal concentration=0.0400 M.",
        "Aliquot Fe2+=0.0400×0.0250=0.00100 mol; titrant amount=0.00100/5.",
        "Volume=0.000200/0.0200=0.0100 L."
      ],
      "answer": "10.0 mL at the specified quantitative endpoint, using the full hydrated formula mass."
    },
    {
      "question": "A negative sol has supplied coagulation thresholds of 50, 1 and 0.1 mM for three salts. Rank inverse-threshold power relative to the first and identify counter-ion sign.",
      "steps": [
        "Reciprocal thresholds are 0.02, 1 and 10 per mM.",
        "Divide each by 0.02 for the normalized ratio.",
        "Counter-ions are positive for a negatively charged sol."
      ],
      "answer": "Relative powers 1:50:500; positive counter-ions. These are supplied-data ratios, not universal numerical constants."
    }
  ],
  "periodic-trends": [
    {
      "question": "Locate neutral [Ne]3s2 3p3 and count protons, neutrons and electrons in 37Cl− with Z=17.",
      "steps": [
        "The neutral configuration has 15 electrons, highest n=3, and five outer s+p electrons.",
        "It is period three, group fifteen, p block.",
        "For the chlorine ion: p=17, n=37−17, e=17+1."
      ],
      "answer": "Neutral atom: Z=15, period 3, group 15, p block. 37Cl−: 17 protons, 20 neutrons, 18 electrons."
    },
    {
      "question": "Supplied oxygen first and second electron-gain energies are −141 and +744 kJ/mol. Find the total for O(g)+2e−→O2−(g), and explain its limited implication for oxide solids.",
      "steps": [
        "Add step energies with their signs.",
        "−141+744=+603 kJ/mol.",
        "A full solid-formation cycle also includes lattice formation and other appropriate preparation/ionization terms."
      ],
      "answer": "+603 kJ/mol for the stipulated isolated two-electron gain; it does not by itself determine oxide-solid stability."
    },
    {
      "question": "Supporting conversion: a hypothetical atom has threshold 5.00 eV. Use 96.485 kJ/mol per eV and E(eV)=1240/λ(nm). Find molar threshold and threshold wavelength.",
      "steps": [
        "Molar energy=5.00×96.485=482.425 kJ/mol.",
        "Wavelength=1240/5.00=248 nm.",
        "A 200 nm photon is above and a 300 nm photon below the supplied one-photon energy threshold."
      ],
      "answer": "482.425 kJ/mol and 248 nm using the supplied rounded constants; energy sufficiency alone does not predict an ionization yield."
    }
  ]
};
export function extendNitrogenPracticalPeriodicLesson(lesson: StudyLesson) {
 if (!(lesson.id in additions)) return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(chapter=>({title:chapter.title,paragraphs:[chapter.script],formula:chapter.formula})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(question=>({...question,options:[...question.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(existing=>existing.url===source.url)));
}
