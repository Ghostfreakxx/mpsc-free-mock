import type { StudyLesson } from './course';
import { pDFReactionEvidenceAdditions as additions } from './p-d-f-reaction-evidence-additions.ts';
const examples: Record<string, StudyLesson['examples']> = {
 'p-block':[
  {question:'Balance the supplied acidic reaction of PbO2 with iodide to form Pb2+, I2 and water. Find iodine and iodide amounts for 0.0100 mol PbO2 at complete net conversion.',steps:['Lead changes +4→+2, accepting two electrons; two I− give I2 and two electrons.','Balance oxygen with two waters and hydrogen with four H+: PbO2+4H++2I−→Pb2++I2+2H2O.','Apply the coefficient ratio PbO2:I2:I−=1:1:2.'],answer:'0.0100 mol I2 and 0.0200 mol consumed I− in the stated net model; medium and species determine the actual chemistry.'},
  {question:'Assign sulfur oxidation states in H2SO5, H2S2O8 and H2S2O7 using their stated O–O versus S–O–S connectivity.',steps:['H2SO5 has two peroxide O at −1 and three ordinary O at −2: 2+S−2−6=0.','H2S2O8 has two peroxide O and six ordinary O: 2+2S−2−12=0.','H2S2O7 has no O–O linkage: 2+2S−14=0.'],answer:'Sulfur is +6 in all three stated structures. H2SO5 and H2S2O8 each have one peroxide linkage; H2S2O7 has an S–O–S bridge.'},
  {question:'Use a formal Lewis/domain model to compare XeOF4, XeO3 and XeO4. Count valence electrons, central lone pairs and molecular shapes.',steps:['XeOF4: 8+6+4×7=42 electrons; terminal octets and formal bonds leave one Xe lone pair, giving AX5E.','XeO3: 8+3×6=26 electrons; the corresponding double-bond drawing leaves one Xe lone pair, giving AX3E.','XeO4: 8+4×6=32 electrons; four bonding domains and no central lone pair give AX4.'],answer:'XeOF4 square pyramidal; XeO3 trigonal pyramidal; XeO4 tetrahedral. A multiple bond counts as one domain; these shapes do not establish literal d-orbital expansion.'}
 ],
 'd-f-block':[
  {question:'In the supplied Cu2+/iodide precipitation model, account separately for iodide oxidized to I2 and iodide retained in CuI. Use 0.0100 mol Cu2+ at complete conversion.',steps:['Each copper changes +2→+1 and needs one electron, so 0.0100 mol iodide is oxidized to 0.00500 mol I2.','Another 0.0100 mol iodide supplies the counterions in 0.0100 mol CuI(s).','Net consumption is therefore 0.0200 mol iodide, consistent with 2Cu2++4I−→2CuI(s)+I2.'],answer:'0.0100 mol CuI and 0.00500 mol I2; total iodide consumption 0.0200 mol. Precipitation changes Cu(I) stability relative to a different aqueous environment.'},
  {question:'An assigned one-photon transition absorbs at 500 nm. Use hc=1240 eV nm and 1 eV per particle=96.485 kJ/mol. Calculate the transition energy in both units.',steps:['Energy per photon=1240/500=2.48 eV.','Per mole of assigned transitions, energy=2.48×96.485=239.2828 kJ/mol.','This gap does not by itself identify every absorption mechanism, observed colour or unpaired-electron count.'],answer:'2.48 eV per transition, or about 239 kJ/mol of transitions; a d→d assignment needs separate evidence.'},
  {question:'Add the two formal iron catalytic stages: S2O8²−+2Fe²+→2SO4²−+2Fe³+ and 2Fe³++2I−→2Fe²++I2. Identify the regenerated catalyst and net coefficients.',steps:['Place both stages on the same amount basis.','Cancel 2Fe2+ and 2Fe3+ from opposite sides.','The remaining equation is S2O8²−+2I−→2SO4²−+I2; total charge is −4 on each side.'],answer:'Fe2+ is regenerated in the stated cycle. Net ratios are 1:2:2:1; the stages are bookkeeping, not necessarily elementary collisions, and K is unchanged at fixed temperature.'}
 ]
};
export function extendPDFReactionEvidenceLesson(lesson: StudyLesson){
 if(!(lesson.id in additions))return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(ch=>({title:ch.title,formula:ch.formula,paragraphs:[ch.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(item=>({...item,options:[...item.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(old=>old.url===source.url)));
}
