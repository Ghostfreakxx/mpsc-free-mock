import type { StudyLesson } from "./course";
import { moleAnalysisDFAdditions as additions } from "./mole-analysis-d-f-additions.ts";
const examples: Record<string,StudyLesson["examples"]>={
 "mole-concept":[
  {question:"A pure 2.50 g CuSO4·xH2O sample corresponds to 1.60 g anhydrous CuSO4. Assume only water is lost, with molar masses 160 and 18 g/mol. Find x.",steps:["Water mass=2.50−1.60=0.90 g; water amount=0.90/18=0.0500 mol.","Anhydrous salt amount=1.60/160=0.0100 mol.","The formula ratio is 0.0500/0.0100=5 waters per CuSO4 formula unit."],answer:"x=5 under the stated complete-water-loss model."},
  {question:"A 4.64 g mixture contains only anhydrous Na2CO3 and NaHCO3. Complete acid reaction yields 2.20 g CO2. Use molar masses 106, 84 and 44 g/mol. Find each salt amount and total H+ consumption.",steps:["Let a and b be salt moles. Gas balance gives a+b=2.20/44=0.0500.","Mass balance gives 106a+84b=4.64; subtract 84(a+b)=4.20 to obtain 22a=0.44.","a=0.0200 and b=0.0300 mol. Hydrogen-ion demand=2a+b=0.0700 mol."],answer:"0.0200 mol Na2CO3, 0.0300 mol NaHCO3; 0.0700 mol H+ consumed."},
  {question:"A NaOH solution is 20.0% by mass, with density 1.20 g/mL at the stated temperature. Use M(NaOH)=40 g/mol. Find molarity and molality.",steps:["Choose 1.00 L solution: mass=1.20×1000=1200 g.","Solute mass=0.200×1200=240 g, containing 6.00 mol; molarity is 6.00 mol/L.","Solvent mass=960 g=0.960 kg. Molality=6.00/0.960=6.25 mol/kg."],answer:"6.00 M and 6.25 mol/kg, using the supplied solution density."}
 ],
 "purification-analysis":[
  {question:"A suitable 0.250 g sample gives 20.0 mL N2 collected over water at 300 K. Total pressure is 100 kPa and supplied water pressure 3.00 kPa. Use R=8.314 L kPa/(mol K) and M(N2)=28 g/mol. Find nitrogen percentage, assuming ideal gas and quantitative recovery.",steps:["Dry nitrogen pressure=100−3.00=97.0 kPa; volume=0.0200 L.","n(N2)=97.0×0.0200/(8.314×300)=0.0007778 mol.","Nitrogen mass=28n≈0.02178 g; percentage=0.02178/0.250×100≈8.71%."],answer:"Approximately 8.71% nitrogen; do not subtract water pressure if gas is already dry."},
  {question:"In a suitable Kjeldahl model, ammonia from 0.500 g sample is captured in 25.0 mL 0.100 M HCl. Residual acid needs 10.0 mL 0.100 M NaOH. Find nitrogen percentage using Ar(N)=14.",steps:["Initial acid=2.50 mmol; residual acid=1.00 mmol.","Captured NH3=1.50 mmol, equal to nitrogen-atom amount in the specified quantitative model.","Nitrogen mass=0.00150×14=0.0210 g; percentage=0.0210/0.500×100=4.20%."],answer:"4.20% nitrogen, subject to the stated method applicability and quantitative conversion."},
  {question:"For constant partition ratio K=corg/caq=4, compare one 25.0 mL organic extraction with two fresh 12.5 mL extractions of 100 mL aqueous solution. Assume immiscible phases, unchanged volumes and complete equilibration.",steps:["Aqueous fraction after one 25.0 mL extraction=100/(100+4×25)=1/2.","Each 12.5 mL contact leaves 100/(100+4×12.5)=2/3 of the amount then present.","Two contacts leave (2/3)²=4/9; extracted fractions are 50.0% and 55.6% respectively."],answer:"Two fresh portions extract about 55.6%, compared with 50.0% for one equal-total-volume portion."}
 ],
 "d-f-block":[
  {question:"For 4FeCr2O4 + 8Na2CO3 + 7O2 → 8Na2CrO4 + 2Fe2O3 + 8CO2, count electrons lost by iron and chromium and accepted by oxygen.",steps:["Each of eight Cr atoms changes +3→+6, losing 24 electrons in total.","Each of four Fe atoms changes +2→+3, losing 4 more electrons.","Seven O2 molecules accept 7×4=28 electrons as O changes 0→−2. Carbon stays +4."],answer:"Cr loses 24, Fe loses 4 and oxygen accepts 28 electrons for the written coefficients."},
  {question:"Balance dichromate conversion to chromate in base and decide whether chromium is oxidized.",steps:["Begin Cr2O7²−→2CrO4²−; add two OH− on the left and one H2O on the right.","Both sides contain 2 Cr, 9 O and 2 H; charge is −4 on each side.","Chromium is +6 in both ions, so no electron transfer belongs in this net interconversion."],answer:"Cr2O7²− + 2OH− → 2CrO4²− + H2O; chromium remains +6."},
  {question:"Compare electrons accepted by 1.00 mmol permanganate when the specified products are Mn2+, MnO2 and MnO4²− respectively.",steps:["Starting Mn oxidation state is +7.","Ending states are +2, +4 and +6, requiring 5, 3 and 1 electrons per manganese atom.","Multiply each electron factor by 1.00 mmol; do not apply the acidic five-electron factor to every product."],answer:"5.00, 3.00 and 1.00 mmol electrons respectively, for the specified products."}
 ]
};
export function extendMoleAnalysisDFLesson(lesson:StudyLesson){
 if(!(lesson.id in additions))return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(chapter=>({title:chapter.title,paragraphs:[chapter.script],formula:chapter.formula})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.foundationExtraQuiz,...added.quiz);
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(existing=>existing.url===source.url)));
}
