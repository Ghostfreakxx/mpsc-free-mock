import type {StudyLesson} from './course';
import {thermoSolutionPhaseLedgersAdditions as additions} from './thermo-solution-phase-ledgers-additions.ts';
const examples:Record<string,StudyLesson['examples']>={
 'chemical-thermodynamics':[
  {question:'Isomers A and B have matched-state combustion enthalpies−3000 and−2980 kJ/mol. Find ΔH(A→B) and state what it does not establish.',steps:['Add A combustion to reversed B combustion. Identical oxygen and product terms cancel.','ΔH(A→B)=−3000−(−2980)=−20 kJ/mol.','B is lower in enthalpy for the stated phases. Entropy and temperature are still needed for Gibbs preference; activation barriers determine kinetics.'],answer:'−20 kJ/mol; B is lower in enthalpy by20 kJ/mol. Neither complete conversion nor a fast reaction follows.'},
  {question:'For methane combustion, change the product endpoint from2H2O(l) to2H2O(g), using ΔHliquid=−890 kJ/mol and ΔvapH=44 kJ/mol at the same temperature.',steps:['Append2H2O(l)→2H2O(g) to the liquid-water combustion equation.','Its enthalpy is2×44=+88 kJ per mole of methane combusted.','Gas-water combustion enthalpy is−890+88=−802 kJ/mol.'],answer:'−802 kJ/mol CH4. The vapor-water endpoint is less exothermic by88 kJ/mol; phase and temperature labels are essential.'},
  {question:'A(s)→B(s) has ΔH300=20 kJ/mol. A melts at350 K with ΔfusH=5 kJ/mol. Cp values are A(s):30,A(l):50,B(s):40 J/mol K. Find ΔH400 for A(l)→B(s).',steps:['Below350 K, ΔCp=40−30=10; integrate over50 K to add.500 kJ/mol.','Fusion raises the reactant H by5 kJ/mol, so subtract5 from reaction H.','Above350 K, ΔCp=40−50=−10; another50 K adds−.500. Total20+.5−5−.5=15 kJ/mol.'],answer:'15 kJ/mol at400 K in the stipulated piecewise model. Omitting the reactant fusion step would give the wrong phase endpoint.'}
 ],
 solutions:[
  {question:'At fixed T, ideal PA*=100 and PB*=40 kPa. Compare equal-liquid bubble conditions with equal-vapor dew conditions.',steps:['For xA=xB=.5, Pbubble=.5×100+.5×40=70 kPa; yA=50/70=5/7.','For yA=yB=.5, sum liquid fractions:1=P(.5/100+.5/40), giving Pdew=400/7 kPa.','The first liquid drop has xA=.5×(400/7)/100=2/7 and xB=5/7.'],answer:'Equal liquid:70 kPa and first vapor yA=5/7. Equal vapor:≈57.14 kPa and first liquid xA=2/7. The two compositions are different inputs.'},
  {question:'An ideal urea/glucose mixture has total solute mass4.80 g and osmotic particle amountπV/(RT)=.0400 mol. Use molar masses60 and180 g/mol to find both masses.',steps:['Let u and g be solute moles: u+g=.0400 and60u+180g=4.80.','Subtract60 times the first equation:120g=2.40, so g=.0200 mol and u=.0200 mol.','Masses are urea1.20 g and glucose3.60 g, summing4.80 g.'],answer:'1.20 g urea and3.60 g glucose. The independent total-mass constraint resolves information that a second proportional particle-count observation would not.'},
  {question:'In the stipulated dilute sealed-vessel model, nsolvent=10 mol,kH=1000 bar,Vgas=1 L,RT=25 L bar/mol and total gas=.050 mol. Find pressure and phase inventories.',steps:['Ideal headspace gas amount is PV/(RT)=.040P mol with P in bar.','Using P=kH x and x≈ndiss/nsolvent, dissolved amount≈.010P mol.','Conservation gives.050=(.040+.010)P, hence P≈1 bar, ngas≈.040 mol and ndiss≈.010 mol.'],answer:'About1 bar, with20% of the total gas dissolved in this dilute approximation. Solvent vapor, nonideality, reactions and volume changes are excluded.'}
 ]
};
export function extendThermoSolutionPhaseLedgersLesson(lesson:StudyLesson){
 if(!(lesson.id in additions))return;const a=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...a.chapters.map(ch=>({title:ch.title,formula:ch.formula,paragraphs:[ch.script]})));
 lesson.examples.push(...examples[lesson.id]);lesson.quiz.push(...a.quiz.map(q=>({...q,options:[...q.options]})));
 lesson.sources.push(...a.sources.filter(s=>!lesson.sources.some(old=>old.url===s.url)));
}
