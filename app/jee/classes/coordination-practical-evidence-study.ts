import type { StudyLesson } from './course';
import { coordinationPracticalEvidenceAdditions as additions } from './coordination-practical-evidence-additions.ts';
const examples: Record<string, StudyLesson['examples']>={
 'coordination-compounds':[
  {question:'For ideal octahedral d4, compare high and low spin with Δo=200 and pairing cost P=150 kJ/mol. Include unpaired-electron counts and spin-only moments.',steps:['High spin t2g³eg¹ has no pairs and four unpaired electrons; energy=−.6Δo.','Low spin t2g⁴ has one pair and two unpaired electrons; energy=−1.6Δo+P.','The difference is P−Δo=−50 kJ/mol; moments √24≈4.90 and √8≈2.83 μB.'],answer:'Low spin is lower by 50 kJ/mol on the stated reference. The d4 pairing ledger differs from d5 and d6.'},
  {question:'A supplied dimer has two M(II) centres, two terminal Cl at each centre and two μ-Cl bridges shared by both. Count unique ligands, contacts, individual coordination numbers and total charge.',steps:['Unique chlorides: four terminal plus two bridging=6.','Contacts: four terminal plus four bridging contacts=8; each M has 2+2=4.','Total formal charge=2(+2)+6(−1)=−2.'],answer:'Six chloride ligands, eight M–Cl contacts, coordination number four at each metal, entity charge −2. Connectivity is supplied rather than inferred from formula alone.'},
  {question:'For ideal octahedral [Co(en)2Cl2]+, distinguish geometrical classes from configurational stereoisomers, ignoring individual chelate-ring conformations.',steps:['Two neutral bidentate en ligands and two chloride donors give coordination number six and Co(+3).','Adjacent versus opposite chloride positions define cis and trans.','The cis class has a non-superimposable mirror pair; the usual ideal trans form is achiral.'],answer:'Two geometrical classes and three configurational stereoisomers. A racemic cis sample can have zero net rotation while containing chiral molecules.'}
 ],
 'practical-chemistry':[
  {question:'A .6000 g sample gives .4710 g BaSO4 including .0050 g additive blank. Use MBaSO4=233 and MSO4=96 g/mol. Find sulfate mass percentage under the stated quantitative recovery model.',steps:['Correct precipitate mass=.4710−.0050=.4660 g.','Sulfate amount=.4660/233=.002000 mol; sulfate mass=.002000×96=.1920 g.','Divide analyte mass by the original .6000 g sample and multiply by 100.'],answer:'32.0% sulfate by mass. The added barium belongs to the measured precipitate, not the sulfate analyte.'},
  {question:'Pure monoprotic KHP .5105 g, M=204.2 g/mol, consumes 25.00 mL NaOH. A separate .2500 g pure diprotic acid consumes 20.00 mL of that base at complete two-proton equivalence. Find standardized base concentration and acid molar mass.',steps:['KHP amount=.5105/204.2=.002500 mol, giving CNaOH=.002500/.02500=.1000 M.','The unknown consumes .02000×.1000=.002000 mol OH−.','Diprotic acid amount is .001000 mol, giving M=.2500/.001000=250 g/mol.'],answer:'.1000 M NaOH and 250 g/mol for the supplied unknown acid. Both endpoint and stoichiometry are explicit assumptions.'},
  {question:'A 1.000 g CaCO3/inert-residue sample consumes part of 25.00 mL 1.000 M HCl. The residual strong acid requires 15.00 mL .5000 M NaOH. Use MCaCO3=100 g/mol and the stipulated absence of CO2/interference in the residual-acid result.',steps:['Initial acid=.02500 mol; residual acid=.01500×.5000=.007500 mol.','Carbonate consumes .01750 mol H+; nCaCO3=.01750/2=.008750 mol.','CaCO3 mass=.8750 g; divide by the 1.000 g sample.'],answer:'87.5% CaCO3 purity. Subtract reagent amounts rather than unequal-concentration volumes.'}
 ]
};
export function extendCoordinationPracticalEvidenceLesson(lesson: StudyLesson){
 if(!(lesson.id in additions))return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(ch=>({title:ch.title,formula:ch.formula,paragraphs:[ch.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(item=>({...item,options:[...item.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(old=>old.url===source.url)));
}
