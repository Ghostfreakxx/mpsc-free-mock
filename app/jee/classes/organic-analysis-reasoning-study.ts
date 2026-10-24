import type { StudyLesson } from './course';
import { organicAnalysisReasoningAdditions as additions } from './organic-analysis-reasoning-additions.ts';
const examples: Record<string, StudyLesson['examples']> = {
 'organic-principles':[
  {question:'Rank –CHO, –CH2OH, –CH2CH3 and –CH3 by ordinary CIP priority at a centre to which all four attach through carbon. Also compare directly attached O with C and 2H with 1H.',steps:['The first carbon atoms tie, so compare descending neighbour lists.','The lists are O,O,H; O,H,H; C,H,H; H,H,H, using the carbonyl duplicate convention.','For unlike directly attached atoms, atomic number takes priority; isotope mass number resolves the same-element isotope comparison.'],answer:'–CHO > –CH2OH > –CH2CH3 > –CH3. Direct O outranks C, and 2H outranks 1H; whole substituent mass is not the ranking rule.'},
  {question:'Count configurational stereoisomers of ordinary 2,3-dibromobutane and distinguish a meso sample from a racemate.',steps:['Two formal stereocentres give a maximum 2^2=4 assignments before symmetry is considered.','RR and SS form an enantiomeric pair; for this symmetric connectivity RS and SR describe the same meso form.','Meso is molecular achirality, while a racemate is equal amounts of opposite enantiomers.'],answer:'Three configurational stereoisomers: RR, SS and one meso form. An R,S label is not by itself a universal meso test for other connectivities.'},
  {question:'Enumerate constitutional isomers of neutral acyclic saturated C4H10O in the alcohol/ether class. How does the total change when individual enantiomers are counted?',steps:['Alcohols: butan-1-ol, butan-2-ol, 2-methylpropan-1-ol and 2-methylpropan-2-ol.','Ethers: 1-methoxypropane, 2-methoxypropane and ethoxyethane; swapping ether ends duplicates a connectivity.','Only butan-2-ol in this set contributes an enantiomeric pair.'],answer:'Seven constitutional isomers, or eight individual configurational forms when the two butan-2-ol enantiomers are counted separately.'}
 ],
 'purification-analysis':[
  {question:'A pure AgCl/AgBr mixed precipitate weighs 0.4750 g and an independent result gives total halide 0.00300 mol. Use AgCl=143.5 and AgBr=188.0 g/mol to find chloride and bromide amounts.',steps:['Let chloride and bromide amounts be c and b: c+b=0.00300.','An all-chloride baseline weighs 0.00300×143.5=0.4305 g.','Excess mass 0.0445 g divided by the molar-mass increment 44.5 g/mol gives b=0.00100 mol.'],answer:'Bromide 1.00 mmol and chloride 2.00 mmol. The calculation assumes quantitative recovery of only the named dry silver halides.'},
  {question:'A hot solution has A=10.0 g and B=2.0 g in 50.0 g water. At the final temperature, solubilities are A=4.0 and B=8.0 g per 100 g water. Find ideal crystals and loss in a separate equilibrated 10.0 g fresh-water wash.',steps:['Cold liquid retains 2.0 g A and has capacity for 4.0 g B, so all 2.0 g B can remain dissolved.','Ideal crystals contain 8.0 g A, giving 80% recovery with no co-crystallization or retained liquid.','A separate equilibrated 10.0 g water wash dissolves 0.400 g A, leaving 7.60 g.'],answer:'8.0 g ideal pure A before washing; 7.60 g after the stipulated wash, or 76.0% recovery of original A. Real recovery and purity need experimental controls.'},
  {question:'At a fixed temperature an ideal binary liquid has xA=0.250, xB=0.750, pA*=100 kPa and pB*=40 kPa. Find total pressure and equilibrium ideal-vapour A fraction.',steps:['Raoult partial pressures: pA=0.250×100=25 kPa and pB=0.750×40=30 kPa.','Total pressure is 55 kPa.','Ideal-vapour composition is yA=25/55=5/11≈0.455, larger than xA.'],answer:'55 kPa and yA≈0.455. Vapour is enriched in A but is not pure A; nonideal mixtures and azeotropes need a different model.'}
 ]
};
export function extendOrganicAnalysisReasoningLesson(lesson: StudyLesson){
 if(!(lesson.id in additions))return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(ch=>({title:ch.title,formula:ch.formula,paragraphs:[ch.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(item=>({...item,options:[...item.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(old=>old.url===source.url)));
}
