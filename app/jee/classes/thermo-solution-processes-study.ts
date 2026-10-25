import type { StudyLesson } from './course';
import { thermoSolutionProcessesAdditions as additions } from './thermo-solution-processes-additions.ts';
const examples: Record<string, StudyLesson['examples']>={
 'chemical-thermodynamics':[
  {question:'Use the supplied NaCl cycle: sodium sublimation +108, ionization +496, half chlorine dissociation +122, electron-gain enthalpy −349 and standard formation −411 kJ/mol. Find both lattice conventions.',steps:['The signed route from elements to gaseous ions is 108+496+122−349=+377 kJ/mol.','Hess balance: −411=377+Δlattice,formation.','Reverse the lattice arrow to obtain its dissociation enthalpy.'],answer:'Lattice formation −788 kJ/mol; lattice dissociation +788 kJ/mol for the supplied data.'},
  {question:'For one fixed reaction with ΔrCp(T)=10+0.020T J/(mol K), correct ΔrH(300 K)=−50.0 kJ/mol to 500 K. Assume no phase change and model validity over the interval.',steps:['Integrate the constant term: 10(500−300)=2000 J/mol.','Integrate the linear term: 0.010(500²−300²)=1600 J/mol.','Convert 3600 J/mol to +3.60 kJ/mol and add it to the starting enthalpy.'],answer:'ΔrH(500 K)=−46.40 kJ/mol. An endpoint heat-capacity substitution is not the exact integral.'},
  {question:'One mole each of different ideal gases, initially at the same T and p, mix at 300 K. Use R=8.314 J/(mol K). Find total ΔS and ΔG, and compare identical gases under the same conditions.',steps:['Each component expands into twice its own initial volume: ΔS=2R ln 2.','The result is 11.53 J/K for the two-mole sample; ideal isothermal mixing gives ΔH=0.','ΔG=−300×11.53 J≈−3.46 kJ. Removing a partition between identical gases at equal T,p creates no chemical mixing entropy.'],answer:'Different gases: ΔS≈+11.53 J/K, ΔG≈−3.46 kJ. Identical gas at equal T,p: no mixing contribution.'}
 ],
 solutions:[
  {question:'A 10 mol binary liquid contains 6 mol A. A removed 1 mol vapour sample has measured average yA=0.80. Find the residual component amounts and liquid composition.',steps:['Removed A=0.80 mol and B=0.20 mol.','Residual A=5.20 mol; B=4−0.20=3.80 mol; total=9.00 mol.','The residual fraction is 5.20/9.00. The supplied average vapour composition avoids assuming it stays at the initial equilibrium value throughout withdrawal.'],answer:'xA,res≈0.5778 and xB,res≈0.4222. These are material balances, not a complete finite-distillation VLE model.'},
  {question:'A solvent-only membrane separates .0100 mol and .0200 mol non-electrolyte, initially in 100 mL each. Find the ideal final volumes at equal mechanical pressure, fixed T and conserved additive volume.',steps:['Total solute .0300 mol and total solution volume .200 L give equal final concentrations .150 M.','Left volume=.0100/.150=.06667 L; right=.0200/.150=.13333 L.','The right gains .03333 L of solvent. A hydrostatic pressure difference would change the equal-concentration condition.'],answer:'Final left 66.7 mL, right 133.3 mL; approximately 33.3 mL solvent transfers from left to right in this model.'},
  {question:'A wet ideal gas has total pressure 5.00 bar and supplied water contribution .040 bar. Gas A is .250 of the dry gas; use pA=KH xA and KH=20000 bar. Find dissolved xA.',steps:['Dry total=5.00−.040=4.96 bar.','pA=.250×4.96=1.24 bar.','Divide by the Henry constant defined for this solvent and temperature.'],answer:'xA=1.24/20000=6.20×10⁻⁵. A dry-gas fraction multiplies dry pressure; a wet-gas fraction would multiply total pressure.'}
 ]
};
export function extendThermoSolutionProcessesLesson(lesson: StudyLesson){
 if(!(lesson.id in additions))return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(ch=>({title:ch.title,formula:ch.formula,paragraphs:[ch.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(item=>({...item,options:[...item.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(old=>old.url===source.url)));
}
