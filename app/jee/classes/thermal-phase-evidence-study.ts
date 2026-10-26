import type {StudyLesson} from './course';
import {thermalPhaseEvidenceAdditions as additions} from './thermal-phase-evidence-additions.ts';
const examples:Record<string,StudyLesson['examples']>={
 'chemical-thermodynamics':[
  {question:'One mole ideal gas initially at 300 K occupies half a rigid insulated vessel; the other half is vacuum. Remove the partition. Find q, w, ΔU, final T and entropy change (R=8.314 J/(mol K)).',steps:['The external opposing pressure is zero, so pressure-volume work is zero. Insulation gives q=0.','ΔU=q+w=0; ideal-gas U depends only on T, so final equilibrium T=300 K.','Use a reversible isothermal reference path only to calculate the endpoint entropy: ΔS=R ln2=5.763 J/K.'],answer:'q=w=ΔU=0, final T=300 K, ΔS≈+5.76 J/K. The actual expansion is irreversible, with positive entropy generation.'},
  {question:'A supplied reaction has K₁=2.00 at 300 K and approximately constant ΔH°=+30.0 kJ/mol. Estimate K at 330 K with R=8.314 J/(mol K).',steps:['Convert ΔH° to 30000 J/mol to match R.','ln(K₂/2)=−(30000/8.314)(1/330−1/300)=1.09345.','K₂=2exp(1.09345)=5.969. The increase agrees with the endothermic reaction sign.'],answer:'K₂≈5.97 for the same balanced reaction and standard-state convention. A varying reaction enthalpy or phase change needs a refined integration.'},
  {question:'Matched dilute-state reactions give ΔH=−57 kJ/mol for H⁺+OH⁻→H₂O and −55 kJ/mol for HA+OH⁻→A⁻+H₂O. Find ΔH for HA→H⁺+A⁻.',steps:['Add the formal ionization to H⁺+OH⁻→H₂O.','Cancel H⁺ to recover HA+OH⁻→A⁻+H₂O.','Hess addition requires ΔHion−57=−55, so ΔHion=+2 kJ/mol.'],answer:'The supplied ionization step is endothermic by 2 kJ/mol. This difference is tied to the stated reactions, normalization and solution states.'}
 ],
 solutions:[
  {question:'At 300 K, final measured non-electrolyte concentration is .00200 mol/L against pure solvent. Find ideal osmotic pressure and hydrostatic level difference for equal liquid densities 1000 kg/m³ and g=9.80 m/s² (R=8.314 SI).',steps:['Convert final concentration to 2.00 mol/m³.','π=cRT=2.00×8.314×300=4988.4 Pa.','With both free surfaces at the same atmospheric pressure, ρgh=π gives h=4988.4/9800=.5090 m.'],answer:'π=4988.4 Pa and h≈.509 m in the stated constant equal-density model. Initial concentration alone would not account for dilution during solvent flow.'},
  {question:'A large dry gas reservoir at 1.00 bar contains 80.0% A and 20.0% B. For p=KHx, supplied constants are 1000 bar and 100 bar. Find dissolved xA, xB and A’s fraction among dissolved gases alone.',steps:['Partial pressures are pA=.800 and pB=.200 bar.','Dissolved mole fractions in the whole liquid are xA=.800/1000=.000800 and xB=.200/100=.00200.','Normalize only over dissolved gases for the requested final ratio: .000800/(.000800+.00200)=2/7.'],answer:'xA=.000800, xB=.00200; A’s dissolved-gas-only fraction is 2/7≈28.6%. The remaining liquid fraction is solvent.'},
  {question:'Eighteen grams non-electrolyte with M=60.0 g/mol is dissolved in 1.000 kg water. If .400 kg pure ice separates with all solute retained in liquid, compare freezing depressions using Kf=1.86 K kg/mol and i=1.',steps:['Solute amount=18.0/60.0=.300 mol; initial depression=1.86×.300/1.000=.558 K.','Remaining liquid water=1.000−.400=.600 kg, so liquid molality=.300/.600=.500 mol/kg.','The remaining liquid’s depression=1.86×.500=.930 K; ice is outside the liquid-solvent denominator.'],answer:'Depression increases from .558 to .930 K under the supplied dilute pure-ice model. The ice amount and heat removal require a separate energy balance.'}
 ]
};
export function extendThermalPhaseEvidenceLesson(lesson:StudyLesson){
 if(!(lesson.id in additions))return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(ch=>({title:ch.title,formula:ch.formula,paragraphs:[ch.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(item=>({...item,options:[...item.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(old=>old.url===source.url)));
}
