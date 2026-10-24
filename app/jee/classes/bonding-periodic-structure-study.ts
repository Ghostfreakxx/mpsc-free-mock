import type { StudyLesson } from './course';
import { bondingPeriodicStructureAdditions as additions } from './bonding-periodic-structure-additions.ts';
const examples: Record<string, StudyLesson['examples']> = {
 'chemical-bonding':[
  {question:'Use the lower-Z valence MO order σ2s, σ*2s, two degenerate π2p, then σ2p for B2, C2 and N2. Find bond orders and unpaired electrons.',steps:['The σ2s² and σ*2s² populations cancel in bond order. B2 leaves two electrons, which occupy the two π orbitals singly.','C2 leaves four electrons, filling both π orbitals; N2 leaves six, filling π and then σ2p.','Bonding-minus-antibonding populations are 2, 4 and 6; divide each by two.'],answer:'B2: bond order 1, two unpaired; C2: bond order 2, zero unpaired; N2: bond order 3, zero unpaired in this introductory model.'},
  {question:'In NH3+BF3→NH3BF3, identify donor and acceptor, compute N and B formal charges in the four-single-bond adduct drawing, and check total charge.',steps:['Nitrogen donates its lone pair to electron-deficient boron, so the donor arrow is N→B.','Nitrogen formal charge=5−0−8/2=+1; boron formal charge=3−0−8/2=−1.','The charges sum to zero; formal charges do not imply complete physical electron transfer.'],answer:'NH3 is the Lewis base and BF3 the Lewis acid. The adduct has N=+1 and B=−1 formal charges and is neutral overall, with four bond domains around both centres.'},
  {question:'Count sigma and pi bonds in HC≡CH, CH2=CH–C≡N and benzene. Explain the limit of a Kekule pi-bond count.',steps:['Ethyne has two C–H plus one C–C sigma connection and two pi bonds.','Acrylonitrile has three C–H and three heavy-atom sigma connections; its double and triple bonds supply 1+2 pi bonds.','Benzene has six ring and six C–H sigma bonds, but its six pi electrons are delocalized.'],answer:'Ethyne: 3σ,2π. Acrylonitrile: 6σ,3π. Benzene: 12σ; three formal pi bonds in a Kekule drawing represent six delocalized pi electrons.'}
 ],
 'periodic-trends':[
  {question:'Compare ideal hydrolysis of 0.0100 mol Li3N and 0.0100 mol Mg3N2. Write atom-balanced equations and predict ammonia amounts.',steps:['Li3N+3H2O→3LiOH+NH3 preserves three lithium atoms and one nitrogen.','Mg3N2+6H2O→3Mg(OH)2+2NH3 preserves three magnesium atoms and two nitrogens.','Multiply each nitride formula-unit amount by its ammonia coefficient.'],answer:'0.0100 mol NH3 from Li3N; 0.0200 mol NH3 from Mg3N2. The diagonal similarity does not make their stoichiometries identical.'},
  {question:'Explain why CH4<NH3<H2O<HF is a useful across-period acid trend, while HF is weaker than HCl in ordinary dilute water. Does ammonia’s acid role exclude base behaviour?',steps:['Across the simple second-period hydrides, increasing electronegativity helps stabilize the species after proton loss.','Down-group comparisons also involve bond strength and solvent stabilization; the strong H–F bond matters.','A species can donate a proton in one comparison yet accept a proton in another reaction.'],answer:'The across-period acid trend and aqueous HF/HCl comparison involve different changing factors. Ammonia can act as a base; fluorine electronegativity alone cannot rank all acids.'},
  {question:'Using supplied gas-phase bond dissociation enthalpies D(F2)=158 and D(Cl2)=243 kJ/mol molecules, calculate atomization per mol atoms and compare the difference.',steps:['X2(g)→2X(g) produces two moles atoms per mole molecules.','Divide each dissociation enthalpy by two: 79.0 and 121.5 kJ/mol atoms.','The chlorine value exceeds the fluorine value by 42.5 kJ/mol atoms; a full aqueous redox comparison needs additional steps.'],answer:'79.0 kJ/mol F atoms and 121.5 kJ/mol Cl atoms; difference 42.5 kJ/mol atoms. Shorter F–F is not the stronger bond in this comparison.'}
 ]
};
export function extendBondingPeriodicStructureLesson(lesson: StudyLesson){
 if(!(lesson.id in additions))return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(ch=>({title:ch.title,formula:ch.formula,paragraphs:[ch.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(item=>({...item,options:[...item.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(old=>old.url===source.url)));
}
