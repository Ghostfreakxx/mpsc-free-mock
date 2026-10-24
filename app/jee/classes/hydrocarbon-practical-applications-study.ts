import type { StudyLesson } from './course';
import { hydrocarbonPracticalApplicationsAdditions as additions } from './hydrocarbon-practical-applications-additions.ts';
const examples: Record<string, StudyLesson['examples']> = {
 hydrocarbons:[
  {question:'Compare propene under acid-catalysed hydration and hydroboration–oxidation, then predict its complete strong oxidative cleavage products after acid workup.',steps:['Acid hydration gives mainly propan-2-ol; hydroboration–oxidation gives mainly propan-1-ol. Both retain all three carbons.','Strong oxidative cleavage transforms the CH3CH= end into ethanoic acid.','The terminal =CH2 end becomes CO2 in the stipulated complete oxidation model.'],answer:'Propan-2-ol versus propan-1-ol; cleavage gives ethanoic acid plus CO2, retaining a 2+1 carbon ledger.'},
  {question:'Alkenes A and B each consume one H2 to form the same alkane in matched states. Illustrative hydrogenation enthalpies are −120 and −116 kJ/mol. Compare starting enthalpies and state what cannot be inferred.',steps:['Write ΔH(A)=H(product)−H(A) and ΔH(B)=H(product)−H(B), with the same H2 contribution.','Subtract to obtain H(A)−H(B)=−116−(−120)=4 kJ/mol.','The enthalpy cycle supplies neither activation barriers nor the entropy needed for an equilibrium constant.'],answer:'B starts 4 kJ/mol lower in enthalpy. Neither a reaction-rate ranking nor a numerical equilibrium constant follows from these data alone.'},
  {question:'List the possible alkane skeletons from methyl and ethyl bromides in a mixed Wurtz coupling model. Does the list establish equal yields?',steps:['Methyl/methyl pairing combines 1+1 carbons to form ethane.','Methyl/ethyl pairing combines 1+2 to form propane.','Ethyl/ethyl pairing combines 2+2 to form butane; competing reactivities and side reactions affect amounts.'],answer:'Ethane, propane and butane are possible; the list does not imply equal amounts or selective propane formation.'}
 ],
 'practical-chemistry':[
  {question:'A carbonate/bicarbonate-only aliquot consumes 0.100 M acid to VP=10.00 mL and cumulative VT=26.00 mL. Determine initial amounts and second-stage volume.',steps:['At the first endpoint, carbonate amount=cVP=0.00100 mol.','At the total endpoint, cVT=2n(carbonate)+n(bicarbonate), giving bicarbonate=0.000600 mol.','The additional second-stage acid volume is VT−VP=16.00 mL.'],answer:'1.00 mmol carbonate; 0.600 mmol bicarbonate; 16.00 mL in the second stage. Other acid-consuming bases are excluded by assumption.'},
  {question:'A 1.000 g sample is made to 250.0 mL. A 25.00 mL aliquot uses 10.00 mL of 0.0200 M permanganate in an acidic Fe2+ assay. Find Fe mass percent using Fe=56 g/mol.',steps:['Permanganate in the titre=0.0200×0.01000=0.000200 mol.','The 1:5 ratio gives 0.00100 mol Fe in the aliquot; the flask factor is 250.0/25.00=10.','Total Fe is 0.0100 mol, mass 0.560 g, giving 56.0% of the original sample.'],answer:'56.0% iron, assuming quantitative transfer, all measured iron initially Fe2+ and no interfering reductants.'},
  {question:'An ideal iodine clock has 1.00 mmol thiosulfate initially. Compare otherwise matched runs reaching its exhaustion in 40 s and 20 s.',steps:['I2+2S2O3²−→2I−+S4O6²− gives 0.500 mmol iodine consumed at exhaustion.','Average formation rates to that threshold are 0.500/40=0.0125 and 0.500/20=0.0250 mmol/s.','The second rate is twice the first for equal threshold and volume; this alone does not determine a rate constant.'],answer:'0.500 mmol iodine threshold; 0.0125 versus 0.0250 mmol/s average formation rates. Iodine formation precedes persistent starch colour.'}
 ]
};
export function extendHydrocarbonPracticalApplicationsLesson(lesson: StudyLesson){
 if(!(lesson.id in additions))return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(ch=>({title:ch.title,formula:ch.formula,paragraphs:[ch.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(item=>({...item,options:[...item.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(old=>old.url===source.url)));
}
