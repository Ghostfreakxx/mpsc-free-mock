import type {StudyLesson} from './course';
import {equilibriumElectrodeLimitsAdditions as additions} from './equilibrium-electrode-limits-additions.ts';
const examples:Record<string,StudyLesson['examples']>={
 equilibrium:[
  {question:'An ideal N2O4⇌2NO2 mixture is initially at equilibrium. Compare inert-gas addition at fixed T,V with addition at fixed T,total pressure that doubles V before reaction.',steps:['At fixed V, each reacting pi=niRT/V stays unchanged, so Q=K remains true.','When V doubles at fixed T, each reacting pressure halves: Qnew/Qold=(1/2)^2/(1/2)=1/2.','Qnew=K/2 causes forward dissociation. K itself stays fixed because T is unchanged.'],answer:'No ideal shift at fixed volume; forward dissociation after the specified constant-pressure expansion. Total pressure is not a substitute for reacting partial pressures.'},
  {question:'Two1 L buffers with pKa5 contain(.010,.010) or(.100,.100) mol of(HA,A−). Add.005 mol H+ to each with negligible volume change. Compare approximate pH values.',steps:['Both start with ratio1 and pH≈5. React H+ with A− first.','Small buffer: nA−=.005,nHA=.015; pH≈5+log(1/3)=4.523.','Large buffer: nA−=.095,nHA=.105; pH≈5+log(19/21)=4.957.'],answer:'Approximately4.52 versus4.96. Equal starting pH does not imply equal capacity; if A− is exhausted, the simple buffer ratio treatment is no longer appropriate.'},
  {question:'Initially[Cl−]=[Br−]=.010 M. Use Ksp(AgCl)=1e−10 and Ksp(AgBr)=5e−13 in the stipulated constant-volume ideal model. Can99.9% bromide removal occur before AgCl starts?',steps:['AgCl onset occurs at free[Ag+]=1e−10/.010=1e−8 M. AgBr starts earlier at5e−13/.010=5e−11 M.','With AgBr solid present at the AgCl boundary,[Br−]=5e−13/1e−8=5e−5 M.','Remaining fraction=(5e−5)/.010=.005, so99.5% has precipitated.'],answer:'No: only99.5% removal at the AgCl onset boundary. A99.9% target needs residual[Br−]=1e−5 M, which would require[Ag+]=5e−8 M, beyond that boundary.'}
 ],
 'redox-electrochemistry':[
  {question:'Total cathode charge gives Q/F=.050 mol e−. Stipulate80% to Ag+ reduction and20% to H2, with no other process. Find both products using MAg=108.',steps:['Ag receives.80×.050=.040 mol electrons and needs one electron per atom.','nAg=.040 mol; mass=.040×108=4.32 g.','Hydrogen receives.010 mol electrons and needs two per molecule, so nH2=.0050 mol.'],answer:'4.32 g Ag and.0050 mol H2. Electron allocations.040+.010=.050 mol conserve charge; product mole counts use different electron factors.'},
  {question:'In the fixed-λ model, titrate50 mL.100 M HCl with.100 M NaOH. Find equivalence volume and conductivity there using λNa=50 and λCl=76 S cm²/mol.',steps:['Initial acid amount=.050 L×.100 mol/L=.0050 mol, so equivalence needs.050 L base.','Total solution volume is.100 L. Sodium and chloride are each.0050/.100=.050 M.','κ=Σλici/1000=(50+76)×.050/1000=.0063 S/cm.'],answer:'50 mL added base and.0063 S/cm. The equivalence mixture retains dissolved Na+ and Cl−; its conductivity is not zero.'},
  {question:'For a specified standard reversible two-electron cell reaction at300 K, E°=.300 V and(dE°/dT)p=−.00020 V/K. Use F=96500 to find ΔG°,ΔS°,ΔH°.',steps:['ΔG°=−nFE°=−2×96500×.300=−57900 J/mol.','ΔS°=nF(dE°/dT)=−38.6 J/mol K.','ΔH°=ΔG°+TΔS°=−57900+300(−38.6)=−69480 J/mol.'],answer:'−57.9 kJ/mol,−38.6 J/mol K and−69.48 kJ/mol respectively, for the same written reaction. This supporting calculation uses standard reversible potential, not loaded terminal voltage.'}
 ]
};
export function extendEquilibriumElectrodeLimitsLesson(lesson:StudyLesson){
 if(!(lesson.id in additions))return;const a=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...a.chapters.map(ch=>({title:ch.title,formula:ch.formula,paragraphs:[ch.script]})));
 lesson.examples.push(...examples[lesson.id]);lesson.quiz.push(...a.quiz.map(q=>({...q,options:[...q.options]})));
 lesson.sources.push(...a.sources.filter(s=>!lesson.sources.some(old=>old.url===s.url)));
}
