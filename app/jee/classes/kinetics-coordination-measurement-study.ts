import type { StudyLesson } from "./course";
import { kineticsCoordinationMeasurementAdditions as additions } from "./kinetics-coordination-measurement-additions.ts";
const examples: Record<string, StudyLesson["examples"]> = {
  "chemical-kinetics": [
    {
      "question": "A calibrated first-order signal obeys S=S∞+b[A], with S0=0.900, S10=0.500 and S∞=0.100. Find fraction remaining and k in min−1.",
      "steps": [
        "Initial excess signal=0.800; ten-minute excess=0.400.",
        "Their ratio gives [A]10/[A]0=0.500 under the stated linear calibration.",
        "k=ln(0.800/0.400)/10."
      ],
      "answer": "Fraction remaining 0.500; k≈0.06931 min−1. The constant baseline must be subtracted."
    },
    {
      "question": "A fixed-volume first-order sample spends 10 min at k1=ln 2/10 and 5 min at k2=ln 2/5, both in min−1. Find remaining fraction and schedule-effective k.",
      "steps": [
        "Each stage contributes exposure ki ti=ln 2.",
        "Overall fraction=exp(−2 ln 2)=1/4.",
        "Divide total exposure by 15 min for the schedule-effective constant."
      ],
      "answer": "25% remains; keffective≈0.09242 min−1, assuming instantaneous temperature transitions and no additions."
    },
    {
      "question": "In the supplied equal-k sequence A→B→C, only A is present initially and B/A0=kt exp(−kt). With k=0.100 min−1, give peak time and all fractions then.",
      "steps": [
        "The supplied intermediate curve peaks at kt=1, so t=10.0 min.",
        "A/A0=B/A0=1/e≈0.367879.",
        "C/A0=1−2/e≈0.264241; all fractions sum to one."
      ],
      "answer": "Peak at 10.0 min; fractions A≈0.368, B≈0.368 and C≈0.264 in this supporting model."
    }
  ],
  "coordination-compounds": [
    {
      "question": "For octahedral d5, compare high and low spin using Δo=18000 and pairing cost P=20000 cm−1. Use ELS−EHS=−2Δo+2P.",
      "steps": [
        "High spin has t2g3 eg2, zero pairs and five unpaired electrons.",
        "Low spin has t2g5, two pairs and one unpaired electron.",
        "Energy difference=−36000+40000=+4000 cm−1."
      ],
      "answer": "High spin is lower by 4000 cm−1 in the stated model; field stabilization alone omits the pairing cost."
    },
    {
      "question": "An assigned octahedral d1 absorption maximum is 600 nm. Use NAhc=0.119626 J m/mol to estimate molar splitting; compare 500 nm.",
      "steps": [
        "Convert wavelengths to 600×10−9 and 500×10−9 m.",
        "Divide NAhc by each wavelength to get J/mol.",
        "Convert to kJ/mol; the shorter wavelength gives higher energy."
      ],
      "answer": "About 199.4 kJ/mol at 600 nm and 239.3 kJ/mol at 500 nm, conditional on the supplied transition assignment."
    },
    {
      "question": "Only ML2 and MX2 are compared in a supplied dilute model. βL=10^8, βX=10^6, free [L]=0.00100 M and [X]=0.0100 M. Find their concentration ratio.",
      "steps": [
        "Divide the matched formation expressions; free metal cancels.",
        "[ML2]/[MX2]=(10^8/10^6)×(0.00100/0.0100)^2.",
        "The factor 100 is cancelled by the squared free-ligand ratio 0.01."
      ],
      "answer": "Ratio 1.00: equal complex concentrations under the stated model. Total added ligand cannot replace free ligand without additional balances."
    }
  ]
};
export function extendKineticsCoordinationMeasurementLesson(lesson: StudyLesson) {
 if (!(lesson.id in additions)) return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(c=>({title:c.title,formula:c.formula,paragraphs:[c.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(q=>({...q,options:[...q.options]})));
 lesson.sources.push(...added.sources.filter(s=>!lesson.sources.some(old=>old.url===s.url)));
}
