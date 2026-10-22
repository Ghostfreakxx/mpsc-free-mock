import type { StudyLesson } from "./course";
import { atomicBondingPeriodicAdditions as additions } from "./atomic-bonding-periodic-additions.ts";
const examples: Record<string, StudyLesson["examples"]> = {
 "atomic-structure": [
  {question:"Hydrogen absorbs 10.2 eV from its ground state. Using En=−13.6/n² eV, identify the final level and the additional energy needed to ionize it.",steps:["Final energy=−13.6+10.2=−3.4 eV.","−13.6/n²=−3.4 gives n²=4 and n=2.","Reaching the zero-energy continuum from this level requires +3.4 eV."],answer:"n=2; a further 3.4 eV ionizes the excited atom."},
  {question:"In n=4, only l=2 and l=3 are allowed. Find maximum occupation. Separately count n=3 states with ml=0 and spin fixed at +1/2.",steps:["For l=2 there are five magnetic values; for l=3 there are seven.","Twelve spatial orbitals with two spin states permit 24 electrons in the first restriction.","For n=3, l=0,1,2 each permits ml=0; fixing spin leaves three complete states."],answer:"24 electrons for the first restriction; 3 for the second."},
  {question:"Estimate minimum electron velocity spread for Δx=1.00×10^−10 m, ℏ=1.055×10^−34 J s and me=9.11×10^−31 kg, using ΔxΔp≥ℏ/2.",steps:["Δpmin=1.055×10^−34/(2×10^−10)=5.275×10^−25 kg m/s.","For nonrelativistic momentum spread, Δvmin=Δpmin/me.","Δvmin≈5.79×10^5 m/s. This is a lower bound on spread, not the mean speed."],answer:"Δv≥approximately 5.79×10^5 m/s in the stated model."}
 ],
 "chemical-bonding": [
  {question:"Use illustrative NaCl data in kJ/mol: ΔHf=−411, sublimation +108, ionization +496, half Cl2 dissociation +122 and electron gain −349. Find lattice formation and dissociation enthalpies.",steps:["The supplied nonlattice terms sum to 108+496+122−349=+377 kJ/mol.","Formation of solid from gaseous ions must contribute −411−377=−788 kJ/mol.","Dissociation reverses that defining reaction and changes its sign."],answer:"Lattice formation −788 kJ/mol; lattice dissociation +788 kJ/mol."},
  {question:"Compare bond-order changes when the highest occupied electron is removed from N2 and O2 in the elementary MO model.",steps:["N2 has bond order 3; its highest occupied orbital is bonding.","Removing a bonding electron lowers its bond order by 1/2 to 2.5.","O2 has bond order 2; removing an antibonding electron raises its bond order by 1/2 to 2.5. Each resulting ion has one unpaired electron in this model."],answer:"N2: 3→2.5; O2: 2→2.5. Equal final bond order does not imply identical bond energies."},
  {question:"Two equal dipole vectors of magnitude 1.50 D meet at 120°. Find the resultant magnitude in the specified vector model.",steps:["Resolve equal vectors along their common angle bisector.","Resultant=2μ cos(θ/2)=2×1.50×cos60°.","The result is 1.50 D, so equal vectors need not cancel."],answer:"1.50 D in the stated two-vector model."}
 ],
 "periodic-trends": [
  {question:"Successive ionization energies are 578, 1817, 2745 and 11577 kJ/mol. Find total energy for M(g)→M3+(g)+3e− and infer the main-group valence pattern.",steps:["The first three removal energies add: 578+1817+2745=5140 kJ/mol.","The large jump is from the third to fourth removal.","A suitable main-group interpretation suggests three outer electrons, consistent with group 13; the jump alone does not prove atomic number."],answer:"5140 kJ/mol; three outer electrons suggested under the stated interpretation."},
  {question:"A homonuclear single bond has internuclear distance 198 pm. Find its covalent radius, then explain why a van der Waals radius should not be substituted without checking definitions.",steps:["For identical bonded atoms, covalent radius is half the supplied internuclear distance.","198/2=99 pm.","Van der Waals values describe nonbonded contacts. Mixing definitions can create apparent trend exceptions."],answer:"Covalent radius 99 pm; compare radii using compatible definitions and environments."},
  {question:"Use supplied standard reduction potentials Li+/Li −3.04 V, Na+/Na −2.71 V and K+/K −2.93 V. Rank the metals' standard aqueous reducing tendencies within this comparison.",steps:["Reverse each reduction half-reaction to describe oxidation of metal to aqueous cation.","The most negative reduction potential corresponds to the strongest reverse reducing tendency against a common reference.","The order is Li, then K, then Na. Hydration contributes to this aqueous comparison; it does not rank reaction speed."],answer:"Li > K > Na for the supplied standard aqueous thermodynamic comparison."}
 ]
};
export function extendAtomicBondingPeriodicLesson(lesson:StudyLesson) {
 if (!(lesson.id in additions)) return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(chapter=>({title:chapter.title,paragraphs:[chapter.script],formula:chapter.formula})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.foundationExtraQuiz,...added.quiz);
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(existing=>existing.url===source.url)));
}
