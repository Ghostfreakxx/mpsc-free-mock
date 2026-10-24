import type { StudyLesson } from "./course";
import { halogenOxygenTransformationsAdditions as additions } from "./halogen-oxygen-transformations-additions.ts";
const examples: Record<string, StudyLesson["examples"]> = {
  "organic-halogens": [
    {
      "question": "Use the net model 3C2H5OH+PBr3→3C2H5Br+H3PO3 for a stipulated quantitative conversion of 0.0300 mol ethanol. Find theoretical PBr3 and bromoethane amounts.",
      "steps": [
        "The net ratio alcohol:PBr3:alkyl bromide is 3:1:3.",
        "PBr3 amount=0.0300/3=0.0100 mol.",
        "Bromoethane amount equals converted ethanol amount in this model."
      ],
      "answer": "0.0100 mol PBr3 and 0.0300 mol bromoethane; these are theoretical net stoichiometric amounts, not a reagent prescription."
    },
    {
      "question": "Track the formula change when 1,2-dibromoethane undergoes two suitable elimination events to an alkyne. Does the net loss establish universal base demand?",
      "steps": [
        "Initial formula is C2H4Br2.",
        "One elimination gives a vinyl halide; net loss of two HBr gives C2H2.",
        "A sufficiently strong base can also deprotonate a terminal alkyne, so preparative base consumption need not equal the formal elimination count."
      ],
      "answer": "Ethyne, C2H2; two formal HBr losses preserve both carbons, but do not specify universal reagent equivalents."
    },
    {
      "question": "Compare ethylmagnesium bromide followed by (a) CO2 then protonation and (b) direct proton quenching. Give organic products and carbon counts.",
      "steps": [
        "The ethyl group supplies two carbons.",
        "CO2 supplies a third carbon that becomes the carboxyl carbon after protonation.",
        "A direct proton source adds no carbon and gives RH."
      ],
      "answer": "(a) Propanoic acid, three carbons; (b) ethane, two carbons. Acidic groups can consume a Grignard reagent before carbon addition."
    }
  ],
  "organic-oxygen": [
    {
      "question": "Acetone C3H6O condenses with hydroxylamine NH2OH or hydrazine N2H4, losing one water per carbonyl. Find each derivative formula.",
      "steps": [
        "Oxime inventory: C3H6O+NH3O−H2O gives C3H7NO.",
        "Hydrazone inventory: C3H6O+N2H4−H2O gives C3H8N2.",
        "Neither nitrogen reagent supplies a carbon atom."
      ],
      "answer": "Acetone oxime C3H7NO and acetone hydrazone C3H8N2, with the three-carbon skeleton retained."
    },
    {
      "question": "Under a stipulated phenol tribromination model, use M(phenol)=94, Br=80 and H=1. Find product molar mass, Br2 amount for 0.0100 mol phenol, and theoretical product mass.",
      "steps": [
        "Three ring H are replaced: M=94−3+3×80=331 g/mol.",
        "Each phenol uses three Br2, so bromine amount=0.0300 mol.",
        "At stipulated full conversion, product amount=0.0100 mol and mass=3.31 g."
      ],
      "answer": "331 g/mol; 0.0300 mol Br2; 3.31 g theoretical tribromophenol. Medium and conversion remain specified assumptions."
    },
    {
      "question": "Compare sodium propanoate in the standard soda-lime model with ideal anodic Kolbe coupling of propanoate. Identify hydrocarbon carbons and the Kolbe electron count.",
      "steps": [
        "The three-carbon salt loses its carboxyl carbon in soda-lime decarboxylation, giving two-carbon ethane.",
        "Two propanoate ions give two ethyl radicals plus two CO2, then couple to four-carbon butane.",
        "The net anodic equation releases two electrons per butane molecule."
      ],
      "answer": "Ethane (2 C) versus butane (4 C); ideal Kolbe anode releases 2 mol electrons per mole coupled butane. This differs from Kolbe–Schmitt carboxylation."
    }
  ]
};
export function extendHalogenOxygenTransformationsLesson(lesson: StudyLesson) {
 if (!(lesson.id in additions)) return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(c=>({title:c.title,formula:c.formula,paragraphs:[c.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(q=>({...q,options:[...q.options]})));
 lesson.sources.push(...added.sources.filter(s=>!lesson.sources.some(old=>old.url===s.url)));
}
