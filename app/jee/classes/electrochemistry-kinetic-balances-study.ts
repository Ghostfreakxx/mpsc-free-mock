import type { StudyLesson } from './course';
import { electrochemistryKineticBalancesAdditions as additions } from './electrochemistry-kinetic-balances-additions.ts';
const examples: Record<string, StudyLesson['examples']>={
 'redox-electrochemistry':[
  {question:'At one temperature a standard with κ=.00120 S/cm has resistance 100 Ω. The unchanged cell gives 300 Ω for an unknown at c=.00200 mol/L. Find the cell constant, unknown conductivity and molar conductivity.',steps:['Calibrate geometry: cell constant=κstandardRstandard=.120 cm⁻¹.','Unknown conductivity=.120/300=.000400 S/cm.','With c in mol/L, Λm=1000κ/c=200 S cm²/mol.'],answer:'Cell constant .120 cm⁻¹; κ=.000400 S/cm; Λm=200 S cm²/mol. Conductance alone is not conductivity.'},
  {question:'Current rises linearly from 2 to 4 A over 600 s. Find copper deposition at 80% charge efficiency, using Cu2++2e−→Cu, F=96500 C/mol and MCu=63.5 g/mol.',steps:['Integrate the linear ramp: mean current=(2+4)/2=3 A; total charge=1800 C.','Charge allocated to copper=.80×1800=1440 C.','Copper amount=1440/(2×96500) mol; multiply by 63.5 g/mol.'],answer:'Approximately .474 g Cu. Using the final current throughout or dropping the two-electron factor overestimates deposition.'},
  {question:'For an ideal single lead-acid cell, use Pb+PbO2+2H2SO4→2PbSO4+2H2O. Find active-reactant amounts consumed by 1.00 A h of discharge with F=96500 C/mol.',steps:['Convert capacity to charge: Q=3600 C.','The written reaction transfers 2 mol electrons per mole of reaction: ξ=3600/(2F)=.01865 mol.','Consume ξ each of Pb and PbO2 and 2ξ of H2SO4.'],answer:'About .0187 mol Pb, .0187 mol PbO2 and .0373 mol H2SO4. This is ideal charge stoichiometry; electrical energy also needs voltage information.'}
 ],
 'chemical-kinetics':[
  {question:'A calibrated clock reaches a cumulative iodine-production threshold .000200 mol/L in 20.0 s or 40.0 s. Calculate the mean formation rates and state the limit of a reciprocal-time comparison.',steps:['First mean rate=.000200/20.0=1.00×10⁻⁵ mol/(L s).','Second mean rate=.000200/40.0=5.00×10⁻⁶ mol/(L s), so their ratio is 2.','The threshold and mixture-volume convention must match; only sufficiently small conversion makes these approximate initial rates.'],answer:'1.00×10⁻⁵ and 5.00×10⁻⁶ mol/(L s). The threshold is cumulative iodine formed, not necessarily free iodine remaining during scavenging.'},
  {question:'At a specified instant a uniform closed reacting system has V=1.00 L, CA=.100 M, dV/dt=.0100 L/s and positive chemical A-disappearance rate r=.00200 M/s. Separate concentration change from chemical amount loss.',steps:['Differentiate nA=CAV: dnA/dt=V dCA/dt+CA dV/dt.','With no flow, chemical dnA/dt=−rV=−.00200 mol/s.','Thus dCA/dt=−r−(CA/V)dV/dt=−.00200−.00100=−.00300 M/s.'],answer:'Observed concentration slope −.00300 M/s; chemical amount-loss rate .00200 mol/s. Expansion changes concentration without consuming additional A.'},
  {question:'For the supplied reversible first-order model A⇌B, kf=.100/min, kr=.0500/min and A+B=.300 M. Starting with only A, find equilibrium and the composition after one relaxation half-time.',steps:['Equal opposing rates give B/A=kf/kr=2; equilibrium A=.100 M and B=.200 M.','Relaxation constant=kf+kr=.150/min; half-time=ln2/.150≈4.62 min.','After that interval, B is halfway from 0 to .200 M, so B=.100 M and A=.200 M.'],answer:'Equilibrium (.100,.200) M for (A,B); after one relaxation half-time (.200,.100) M. The distance from equilibrium halves, not A itself.'}
 ]
};
export function extendElectrochemistryKineticBalancesLesson(lesson: StudyLesson){
 if(!(lesson.id in additions))return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(ch=>({title:ch.title,formula:ch.formula,paragraphs:[ch.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(item=>({...item,options:[...item.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(old=>old.url===source.url)));
}
