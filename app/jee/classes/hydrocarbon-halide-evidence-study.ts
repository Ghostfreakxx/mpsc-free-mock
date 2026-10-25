import type { StudyLesson } from './course';
import { hydrocarbonHalideEvidenceAdditions as additions } from './hydrocarbon-halide-evidence-additions.ts';
const examples: Record<string, StudyLesson['examples']>={
 hydrocarbons:[
  {question:'Compare ideal bromonium-mediated anti bromination of cis- and trans-but-2-ene in a suitable non-nucleophilic medium. Can zero optical rotation distinguish their products?',steps:['The trans alkene gives the meso 2,3-dibromobutane configuration with opposite R/S centres.','The cis alkene gives equal (2R,3R) and (2S,3S) products under achiral conditions.','Meso molecular achirality and racemic cancellation can both produce zero net sample rotation.'],answer:'Trans→meso; cis→racemic enantiomer pair. Zero rotation alone does not distinguish these stereochemical outcomes.'},
  {question:'Use the supplied complete oxidative cleavage model to compare pent-2-yne and pent-1-yne after acidic workup. Account for every carbon.',steps:['For internal pent-2-yne, each original triple-bond carbon becomes a carboxyl carbon.','The fragments are C2 ethanoic acid and C3 propanoic acid.','For terminal pent-1-yne, the terminal carbon reaches CO2 and the other C4 fragment becomes butanoic acid.'],answer:'Pent-2-yne: C2+C3 acids. Pent-1-yne: C4 acid+CO2. This endpoint differs from ordinary hydration, which does not cleave the skeleton.'},
  {question:'Twenty mL pure gaseous hydrocarbon and 130 mL O2 give 90 mL cooled gas after complete combustion with water condensed. Selective CO2 absorption leaves 30 mL O2. Use equal T,p comparisons to find the molecular formula.',steps:['CO2 volume=90−30=60 mL; O2 consumed=130−30=100 mL.','Per 20 mL hydrocarbon, x=60/20=3 and x+y/4=100/20=5.','Therefore y=4(5−3)=8; verify C3H8+5O2→3CO2+4H2O.'],answer:'C3H8 (propane) under the stated pure-gas, selective-absorption and complete-combustion assumptions.'}
 ],
 'organic-halogens':[
  {question:'A supplied cyclohexane chair has C1-Br axial up, C2-CH3 axial down and C6-H axial down. Identify the ordinary anti E2 pathway without assuming that the more substituted alkene must win.',steps:['The chair requires opposed axial leaving group and adjacent beta H.','The axial C2 site is occupied by methyl; its remaining H is equatorial.','C6 provides axial down H opposite axial up Br, so C1=C6 is eligible in this chair.'],answer:'Elimination through C1/C6. An equatorial leaving group in another chair needs a suitable flip before this ordinary trans-diaxial pathway applies.'},
  {question:'For the same substrate/nucleophile at equal concentrations, supplied SN2 constants are .010 and .200 L/(mol s) in two solvents. Calculate the rate ratio and explain why it is not a universal solvent multiplier.',steps:['Use v=k[RX][Nu] with matched concentration factors.','Second/first=.200/.010=20.','Solvation, counterion, solubility and competing pathways affect other comparisons; proton basicity is not identical to substrate nucleophilicity.'],answer:'Twenty-fold faster in the specified second dataset; the numerical ratio belongs to those matched conditions.'},
  {question:'An organochlorine gives no rapid direct silver-nitrate response, but a controlled prepared ionic extract gives AgCl. Could HCl be substituted for the prescribed nonchloride acid without affecting the evidence?',steps:['Direct response measures halide release under that reaction system, not total covalent chlorine presence.','A prepared ionic extract can make chloride accessible after controlled conversion.','HCl adds reagent chloride and can give an AgCl false positive; other precipitating ions also need controls.'],answer:'The observations are compatible with covalently bound chlorine. HCl is not an interchangeable reagent in this chloride-evidence comparison.'}
 ]
};
export function extendHydrocarbonHalideEvidenceLesson(lesson: StudyLesson){
 if(!(lesson.id in additions))return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(ch=>({title:ch.title,formula:ch.formula,paragraphs:[ch.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(item=>({...item,options:[...item.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(old=>old.url===source.url)));
}
