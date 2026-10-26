import type { StudyLesson } from './course';
import {coupledEquilibriumElectrodesAdditions as additions} from './coupled-equilibrium-electrodes-additions.ts';
const examples: Record<string,StudyLesson['examples']>={
 equilibrium:[
  {question:'A .100 M ideal salt BH⁺A⁻ has parent acid Ka(HA)=10⁻⁵ and parent base Kb(B)=10⁻⁴ at 25°C. Estimate its pH under the small-hydrolysis approximation and identify both hydrolysing ions.',steps:['BH⁺ is an acid with Ka=Kw/Kb(B)=10⁻¹⁰.','A⁻ is a base with Kb=Kw/Ka(HA)=10⁻⁹.','pH≈½[pKw+pKa(HA)−pKb(B)]=½(14+5−4)=7.50. The anion has the larger hydrolysis constant.'],answer:'Approximately pH 7.50, mildly basic. Both ions react with water; extreme dilution needs a full mass/charge balance.'},
  {question:'Titrate .0100 mol hypothetical H₂A with strong base. Given pKa₁=4 and pKa₂=9, identify both buffer midpoints, the first-equivalence pH estimate and the second-equivalence base amount.',steps:['At .00500 mol OH⁻, H₂A/HA⁻ amounts are approximately equal: pH≈4.','At .0100 mol OH⁻, HA⁻ predominates: pH≈½(4+9)=6.50 in the usual amphiprotic regime.','At .0150 mol OH⁻, HA⁻/A²⁻ amounts are equal: pH≈9. The second equivalence is at .0200 mol OH⁻.'],answer:'Midpoint pH values approximately 4 and 9; first equivalence approximately 6.50; full two-proton neutralization needs .0200 mol OH⁻.'},
  {question:'Use Ksp(AgCl)=10⁻¹⁰ and Kf([Ag(NH₃)₂]⁺)=10⁷ with free NH₃ maintained at .100 M. With no initial chloride and excess AgCl solid, find total solubility and free silver.',steps:['The formation multiplier is 1+KfL²=100001.','Let total dissolved silver and chloride both equal s. Then Ksp=(s/100001)s, so s≈.0031623 M.','Free Ag⁺=s/100001≈3.1623×10⁻⁸ M. The net dissolution-plus-complexation constant is KspKf=10⁻³.'],answer:'Total solubility≈.00316 M; free Ag⁺≈3.16×10⁻⁸ M. Free ammonia must be distinguished from its total inventory including bound ligand.'}
 ],
 'redox-electrochemistry':[
  {question:'Compare 1930 C through two ideal CuSO₄ cells depositing copper: one has a copper anode; the other has an inert anode producing only O₂ from water. Use F=96500 C/mol and MCu=63.5 g/mol.',steps:['Both pass .0200 mol electrons and deposit .0100 mol Cu, gaining .635 g at the cathode.','The copper anode loses .0100 mol Cu or .635 g, replenishing dissolved copper ions ideally.','The inert anode gives .00500 mol O₂ and .0200 mol H⁺; no copper is supplied from that anode.'],answer:'Equal ideal cathode gains, but different anode and solution inventories. Current efficiencies and the stipulated electrode pathways are essential assumptions.'},
  {question:'For one mole H₂ forming liquid water at the stated standard temperature, supplied ΔG=−237 and ΔH=−286 kJ/mol. Find reversible voltage and electrical efficiency on this enthalpy basis (F=96500 C/mol).',steps:['The reaction transfers 2 mol electrons per mol H₂.','Erev=237000/(2×96500)=1.228 V.','The reversible electrical-to-enthalpy ratio is 237/286=.8287≈82.9%.'],answer:'Approximately 1.228 V and 82.9% on the stated liquid-water enthalpy basis. Operating losses, utilization and auxiliaries can reduce delivered efficiency.'},
  {question:'A silver electrode at 25°C has total dissolved silver .0100 M, free NH₃=.100 M and Kf=10⁷ for its diamminesilver complex. With E°=.800 V, calculate the electrode potential in the ideal model excluding precipitation.',steps:['Free Ag⁺=.0100/(1+10⁷×.100²)≈9.9999×10⁻⁸ M.','For Ag⁺+e⁻→Ag, E=.800+.05916 log₁₀([Ag⁺]/1 M)≈.38588 V.','Without complexation at .0100 M free silver, the comparison gives .68168 V, approximately .2958 V higher.'],answer:'E≈.386 V relative to the same reference. Total silver cannot replace free silver in the Nernst expression, and a second electrode is needed for a cell voltage.'}
 ]
};
export function extendCoupledEquilibriumElectrodesLesson(lesson:StudyLesson){
 if(!(lesson.id in additions))return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(ch=>({title:ch.title,formula:ch.formula,paragraphs:[ch.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(item=>({...item,options:[...item.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(old=>old.url===source.url)));
}
