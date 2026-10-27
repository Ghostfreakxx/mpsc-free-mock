import type {StudyLesson} from './course';
import {kineticsCoordinationInferenceAdditions as additions} from './kinetics-coordination-inference-additions.ts';
const examples:Record<string,StudyLesson['examples']>={
 'chemical-kinetics':[
  {question:'For constant Arrhenius Ea and prefactor, k310/k300=2. Estimate Ea and k320/k310 using R=8.314 J mol⁻¹ K⁻¹.',steps:['Ea=R ln2/(1/300−1/310)≈53594 J/mol.','The new reciprocal-temperature difference divided by the old is (1/310−1/320)/(1/300−1/310)=300/320.','The next multiplier is exp[(300/320)ln2]≈1.915.'],answer:'Ea≈53.6 kJ/mol and k320/k310≈1.915. A fixed ten-kelvin increment does not give exactly the same multiplier at every starting temperature.'},
  {question:'A rigid ideal-gas vessel at constant T initially has pA=80 kPa, pI=40 kPa inert and no B. For A→2B, Ptotal=160 kPa at 100 s. Reconstruct partial pressures and infer first-order k.',steps:['Let x be the pressure equivalent of consumed A. Total pressure=80−x+2x+40=120+x, so x=40 kPa.','pA=40, pB=80 and pI=40 kPa; their sum is the measured 160 kPa.','For first-order disappearance at fixed T,V, k=ln(80/40)/100=ln2/100.'],answer:'pA=40 kPa, pB=80 kPa, pI=40 kPa and k≈.006931 s⁻¹. Initial total pressure cannot substitute for initial reactant partial pressure.'},
  {question:'A supplied remaining-fraction bound is .48≤f≤.52 at exactly 100 s. Assuming first order, obtain bounds on k and half-life.',steps:['k=−ln(f)/100 decreases monotonically with f.','kmin=−ln(.52)/100≈.006539 s⁻¹; kmax=−ln(.48)/100≈.007340 s⁻¹.','t½ decreases with k, giving lower ln2/kmax≈94.44 s and upper ln2/kmin≈106.00 s.'],answer:'k≈.006539–.007340 s⁻¹ and t½≈94.4–106 s. These are propagated supplied bounds, without a statistical confidence interpretation.'}
 ],
 'coordination-compounds':[
  {question:'Give the complex charge, oxidation state, donor count and additive name for [Cr(NH₃)₄(H₂O)Cl]Cl₂. Compare K₂[PtCl₆].',steps:['Two counterion chlorides require [Cr(NH₃)₄(H₂O)Cl]²⁺. Cr−1=+2 gives Cr(+3); there are six monodentate donor atoms.','Alphabetize ammine, aqua, chlorido while ignoring tetra: tetraammineaquachloridochromium(III) chloride.','For K₂[PtCl₆], Pt−6=−2 gives Pt(+4); the anionic name is potassium hexachloridoplatinate(IV).'],answer:'Cr complex: +2, Cr(+3), coordination number 6; Pt complex: −2, Pt(+4), coordination number 6. Oxidation numeral and complex charge must not be conflated.'},
  {question:'Compare ideal octahedral d7 high and low spin for Δo=220 and P=160 kJ/mol. Count pairs and unpaired electrons, then compute the energy difference and spin-only moments.',steps:['HS t2g⁵eg²: 2 pairs, 3 unpaired, EHS=−.8(220)+2(160)=144 kJ/mol.','LS t2g⁶eg¹: 3 pairs, 1 unpaired, ELS=−1.8(220)+3(160)=84 kJ/mol.','ELS−EHS=−60 kJ/mol; μHS=√15≈3.87 μB and μLS=√3≈1.73 μB.'],answer:'The low-spin model is lower by 60 kJ/mol; both forms have unpaired electrons. Energies use a common barycentre and the specified simplified pair cost.'},
  {question:'For a hypothetical 1:1 EDTA complex, β=10⁸ M⁻¹ and supplied free uncomplexed-ligand pool CU=10⁻⁴ M. Compare bound metal fractions at αY4−=10⁻⁴ and 10⁻², with competitors and hydrolysis excluded.',steps:['β′=αβ gives 10⁴ and 10⁶ M⁻¹.','Bound/free metal ratio β′CU is respectively 1 and 100.','Using Cmetal=[M]+[MY], fbound=ratio/(1+ratio).'],answer:'50.0% and 100/101≈99.01%. CU excludes bound EDTA; total added EDTA requires a ligand mass balance before substitution.'}
 ]
};
export function extendKineticsCoordinationInferenceLesson(lesson:StudyLesson){
 if(!(lesson.id in additions))return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(ch=>({title:ch.title,formula:ch.formula,paragraphs:[ch.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(item=>({...item,options:[...item.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(old=>old.url===source.url)));
}
