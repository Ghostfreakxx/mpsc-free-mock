import type {StudyLesson} from './course';
import {analysisPracticalSeparationMapsAdditions as additions} from './analysis-practical-separation-maps-additions.ts';
const examples:Record<string,StudyLesson['examples']>={
 'purification-analysis':[
  {question:'A feed has10 g A and2 g B in50 g water. Hot solubilities are20 and10 g/100 g water, cold solubilities2 and6 respectively. Under independent-solubility and no-occlusion assumptions, find the cold solids and the recovery after a separate10 g fresh-cold-water equilibrium wash.',steps:['Hot capacities are10 g A and5 g B, so all feed can dissolve.','Cold capacities are1 g A and3 g B:9 g A crystallizes and all2 g B can remain dissolved.','The fresh10 g wash can dissolve .2 g A, leaving8.8 g A and88% recovery if that loss is reached.'],answer:'Ideal initial crystals9 g A; after the stipulated wash8.8 g A. A appears as1 g in mother liquor, .2 g in wash and8.8 g retained. Actual purity needs evidence beyond this ideal model.'},
  {question:'For tM=1 min, tR,A=4 and tR,B=5 min, compute kA,kB and adjusted selectivity. Compare resolution for baseline widths(.5,.5) and(1.2,1.2) min.',steps:['kA=(4−1)/1=3; kB=(5−1)/1=4; adjusted selectivity=4/3.','Using baseline widths, Rs=2(5−4)/(.5+.5)=2.0.','With broader peaks at unchanged centres, Rs=2(5−4)/(1.2+1.2)=.8333.'],answer:'kA=3,kB=4, selectivity4/3; resolution2.0 versus .8333. Raw retention-time ratio5/4 is not the adjusted selectivity, and a width convention must be stated.'},
  {question:'Already blank-corrected BaSO4 mass is .4660±.0002 g and original sample .6000±.0001 g. Use M(BaSO4)=233 and M(SO4)=96 g/mol and supplied independent bounds. Find central sulfate percentage and endpoint bounds.',steps:['Central sulfate mass=.4660×96/233=.1920 g, giving32.0%.','Minimum=100×(.4658×96/233)/.6001≈31.9809%.','Maximum=100×(.4662×96/233)/.5999≈32.0191%.'],answer:'32.0% centrally; outward-rounded worst-case interval31.98–32.02%. This is not a confidence interval and assumes pure dry precipitate, quantitative conversion and a valid blank.'}
 ],
 'practical-chemistry':[
  {question:'Three controlled silver-halide samples are white/dilute-ammonia soluble, cream/concentrated-ammonia soluble, and yellow/remaining in the concentrated-ammonia comparison. Interpret them and the role of ammonia.',steps:['The usual combined observations fit AgCl,AgBr andAgI respectively.','Ag+ +2NH3⇌[Ag(NH3)2]+ reduces the free silver concentration.','Coupled dissolution and complex formation differ for the three solids; interference controls and specified concentrations remain necessary.'],answer:'AgCl,AgBr,AgI in that order. Colour alone or a claim of absolute zero solubility is insufficient.'},
  {question:'Compare the supplied Al3+/Fe3+ hydroxide scheme. Balance Al(OH)3 dissolution in excess hydroxide and identify the oxidation state of dissolved aluminium.',steps:['Al3++3OH−→Al(OH)3 gives the white hydroxide in the defined comparison.','Al(OH)3+OH−→[Al(OH)4]− balances Al1,O4,H4 and charge−1.','Al+4(−1)=−1 gives Al(+3). Fe(OH)3 remains in the ordinary excess-NaOH comparison.'],answer:'Aluminium stays+3 while its complex has charge−1. This distinguishes the specified pair, but zinc hydroxide can also show amphoteric dissolution.'},
  {question:'Explain whether NH4++OH−→NH3+H2O is redox, and what a supplied moist-red-litmus-to-blue gas observation establishes.',steps:['Both sides contain N1,H5,O1; net charge is+1−1=0 on the left and0 on the right.','For NH4+, N+4=+1 gives N=−3; for NH3, N+3=0 also gives−3.','The indicator response supports a basic gas such as ammonia, but volatile bases can interfere and a controlled scheme is needed.'],answer:'Proton transfer, not nitrogen reduction. Nitrate-to-ammonia conversion would require additional reduction chemistry and cannot be inferred from this equation.'}
 ]
};
export function extendAnalysisPracticalSeparationMapsLesson(lesson:StudyLesson){
 if(!(lesson.id in additions))return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(ch=>({title:ch.title,formula:ch.formula,paragraphs:[ch.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(item=>({...item,options:[...item.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(old=>old.url===source.url)));
}
