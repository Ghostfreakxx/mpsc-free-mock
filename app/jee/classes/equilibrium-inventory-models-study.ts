import type {StudyLesson} from './course';
import {equilibriumInventoryModelsAdditions as a} from './equilibrium-inventory-models-additions.ts';
export function extendEquilibriumInventoryModelsLesson(lesson:StudyLesson){
 if(lesson.id!=='equilibrium')return;
 lesson.sections.push(...a.chapters.map(c=>({title:c.title,formula:c.formula,paragraphs:[c.script]})));
 lesson.quiz.push(...a.quiz.map(q=>({...q,options:[...q.options]})));
 lesson.examples.push(
 {question:'For a hypothetical1:1 salt, Ksp=1×10−10 and supplied γ+=γ−=.50 at fixed background composition. Find equal free-ion concentrations using c°1 M.',steps:['Ksp=γ+γ−([M+]/c°)([X−]/c°).','The normalized concentration product is1×10−10/.25=4×10−10.','Equal free-ion concentrations are2×10−5 M; compare the ideal coefficient estimate1×10−5 M.'],answer:'2×10−5 M each in the stipulated fixed-coefficient model; Ksp itself is unchanged.'},
 {question:'A buffer contains10 mmol HA and10 mmol A−. Add12 mmol HCl to final volume.200 L. With Ka1×10−5, check the leading pH estimate.',steps:['Stoichiometry consumes10 mmol A− and gives20 mmol HA plus2 mmol excess H+.','The background H+ is.010 M and formal HA is.100 M. Solve Ka=(.010+x)x/(.100−x).','The positive root is approximately9.89×10−5 M; pH≈1.996, close to the leading strong-acid estimate2.00.'],answer:'Approximately pH2.00. The buffer ratio formula cannot accept a negative residual conjugate-base amount.'},
 {question:'An ideal1:1 salt has Ksp1×10−8 in1.00 L. Compare supplies5×10−5 and2×10−4 mol, neglecting all side reactions.',steps:['Saturation requires sqrt(Ksp)=1×10−4 M of each ion and1×10−4 mol dissolved salt.','The smaller supply dissolves completely; Q=(5×10−5)²=2.5×10−9<Ksp.','The larger supply reaches saturation and leaves2×10−4−1×10−4=1×10−4 mol solid.'],answer:'Smaller supply: unsaturated with no solid left. Larger supply: saturated with1×10−4 mol remaining.'});
 lesson.sources.push(...a.sources.filter(s=>!lesson.sources.some(old=>old.url===s.url)));
 lesson.remaining='Thirty-seven chapters with Marin recording and written notes, not complete unit coverage. Includes supporting activity-coefficient and ionic-strength models, buffer exhaustion and finite solid inventories. General nonideal speciation, complete coupled mass/charge balances and broader titration datasets remain.';
}
