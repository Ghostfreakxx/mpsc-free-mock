import type { StudyLesson } from "./course";
import { halogensOxygenBiomoleculesAdditions as additions } from "./halogens-oxygen-biomolecules-additions.ts";
const examples: Record<string,StudyLesson["examples"]> = {
  "organic-halogens": [
    {
      "question": "List the elementary Wurtz alkane connectivities from a mixed methyl/ethyl feed, without assuming product yields.",
      "steps": [
        "Methyl plus methyl gives a two-carbon chain.",
        "Methyl plus ethyl gives three carbons; swapping fragment order gives the same connectivity.",
        "Ethyl plus ethyl gives four carbons."
      ],
      "answer": "Ethane, propane and butane: three connectivities. Their amounts are not fixed by this enumeration."
    },
    {
      "question": "Compare methylmagnesium bromide addition to methanal, ethanal and propanone, each followed by protonation.",
      "steps": [
        "Add the one-carbon methyl fragment to each carbonyl carbon.",
        "Total carbons are 2, 3 and 4 respectively.",
        "Count carbon groups on the resulting oxygen-bearing carbon to classify the alcohol."
      ],
      "answer": "Ethanol (primary), propan-2-ol (secondary), and 2-methylpropan-2-ol (tertiary)."
    },
    {
      "question": "Count alkene connectivities and E/Z-resolved alkene products in the elementary elimination set from 2-bromobutane.",
      "steps": [
        "Removal at either adjacent beta position gives but-1-ene or but-2-ene.",
        "But-1-ene has two hydrogens on one double-bond carbon and no E/Z pair.",
        "But-2-ene has E and Z forms."
      ],
      "answer": "Two alkene connectivities or three stereoisomer-resolved alkene products; no equal-yield claim."
    }
  ],
  "organic-oxygen": [
    {
      "question": "Count elementary first aldol addition connectivities when both ethanal and propanal can supply donors. Ignore stereoisomers and later reactions.",
      "steps": [
        "There are two enolate donor choices.",
        "Each can attack either of the two carbonyl acceptors.",
        "Retaining donor carbonyl identity distinguishes the two crossed connectivities."
      ],
      "answer": "Four: two self-addition and two crossed-addition connectivities under the restricted model."
    },
    {
      "question": "At a stipulated complete 1:1 base-hydrolysis endpoint, 0.0200 mol ethyl ethanoate reacts with 0.0150 mol hydroxide. Find remaining ester and products.",
      "steps": [
        "Hydroxide is limiting and is consumed in the net reaction.",
        "0.0150 mol ester converts, leaving 0.00500 mol.",
        "Each converted ester yields one ethanoate and one ethanol."
      ],
      "answer": "0.00500 mol ester remains; 0.0150 mol ethanoate and 0.0150 mol ethanol form."
    },
    {
      "question": "Two acids have supplied pKa 3 and 5 under matching conditions. Find their Ka ratio and the conditional equal-concentration hydrogen-ion ratio.",
      "steps": [
        "Ka,A/Ka,B=10^(5−3)=100.",
        "If both satisfy [H+]=sqrt(Ka C), the common concentration cancels.",
        "Take sqrt(100); verify the small-ionization approximation separately for both before using it."
      ],
      "answer": "Ka ratio 100; approximate hydrogen-ion ratio 10 only in the stated weak-ionization model."
    }
  ],
  "biomolecules": [
    {
      "question": "Canonical double-stranded DNA has 1000 base pairs and adenine is 30% of all bases. Find counts and standard base-pair hydrogen bonds.",
      "steps": [
        "There are 2000 individual bases, so A=T=600 and G=C=400.",
        "Pair counts are 600 AT and 400 GC.",
        "Hydrogen bonds=2×600+3×400."
      ],
      "answer": "600 A, 600 T, 400 G, 400 C; 2400 standard base-pair hydrogen bonds."
    },
    {
      "question": "Compare internucleotide links in one unbranched linear 10-residue strand with peptide bonds in one linear pentapeptide. What does complete peptide hydrolysis consume?",
      "steps": [
        "A linear chain of n residues has n−1 inter-residue links.",
        "The strand has 9 phosphodiester links; terminal phosphate counts require separate end information.",
        "The pentapeptide has 4 peptide bonds; complete hydrolysis consumes 4 waters per peptide molecule."
      ],
      "answer": "9 internucleotide links; 4 peptide bonds; 4 waters consumed and 5 amino acid molecules released on complete peptide hydrolysis."
    },
    {
      "question": "In an explicitly two-anomer glucose model, supplied specific rotations are alpha +112, beta +18.7 and equilibrium mixture +52.7 at matching conditions. Find fractions.",
      "steps": [
        "Let f be alpha fraction and 1−f beta fraction.",
        "52.7=112f+18.7(1−f).",
        "f=34/93.3≈0.3644; subtract from one for beta."
      ],
      "answer": "Approximately 36.4% alpha and 63.6% beta, neglecting minor forms under the supplied additive-rotation model."
    }
  ]
};
export function extendHalogensOxygenBiomoleculesLesson(lesson: StudyLesson) {
 if (!(lesson.id in additions)) return;
 const added = additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(chapter=>({title:chapter.title,paragraphs:[chapter.script],formula:chapter.formula})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(question=>({...question,options:[...question.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(existing=>existing.url===source.url)));
}
