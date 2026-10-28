import type {StudyLesson} from './course';
import {nitrogenBiomoleculeReactionMapsAdditions as additions} from './nitrogen-biomolecule-reaction-maps-additions.ts';
const examples:Record<string,StudyLesson['examples']>={
 'organic-nitrogen':[
  {question:'Account for F, B, N and ring carbons in the classical benzenediazonium tetrafluoroborate→fluorobenzene map.',steps:['Write C6H5N2+ BF4−→C6H5F+N2+BF3 for the selected decomposition map.','All six ring carbons remain in fluorobenzene. Two diazonium N atoms become one N2 molecule.','Four F atoms divide as one aryl F and three in BF3; one B remains in BF3.'],answer:'C, H, N, B, F and net charge balance. This is the classical Balz–Schiemann route, not a generic substitution of CuF into every Sandmeyer equation.'},
  {question:'For a stipulated ethanal+methylamine reductive amination, identify the imine, final amine class and formal net atom balance.',steps:['Condensation: CH3CHO+CH3NH2⇌CH3CH=NCH3+H2O.','Reduction of C=N gives CH3CH2NHCH3; the original N–CH3 group remains.','Formal net: C2H4O+CH5N+2[H]→C3H9N+H2O. Carbon count is 2+1=3.'],answer:'Ethylmethylamine (N-methylethanamine), a secondary amine. Direct carbonyl reduction alone would give ethanol, not this C–N connectivity.'},
  {question:'A supplied neutral-amine partition coefficient is 20 and pKa(BH+)=10. With 100 mL aqueous and 50 mL organic phase, compare organic fractions at maintained pH8 and pH10. Only neutral B enters the organic phase.',steps:['BH+/B in water=10^(10−pH); D=20/(1+that ratio).','At pH8, D=20/101 and organic fraction=(20/101)×50/[100+(20/101)×50]=10/111.','At pH10, D=10 and fraction=500/(100+500)=5/6.'],answer:'About 9.01% and 83.3% respectively. The model assumes maintained pH, unchanged volumes and no organic ion transfer or additional association.'}
 ],
 biomolecules:[
  {question:'A pure unmodified linear tripeptide contains two Ala and one Gly. Its partial-hydrolysis evidence identifies directed contiguous AG and GA dipeptides without rearrangement. Determine the sequence and compare candidate masses using Ala89, Gly75 and water18 g/mol.',steps:['Distinct N→C sequences with that composition are AAG, AGA and GAA.','AAG contains AA/AG; AGA contains AG/GA; GAA contains GA/AA. Only AGA fits both observations.','Every candidate has two peptide links and molar mass 2×89+75−2×18=217 g/mol.'],answer:'Ala–Gly–Ala. Total composition and mass alone cannot select it; the directed overlapping fragments supply the extra evidence.'},
  {question:'Use supplied Asp pKa values 2.1,3.9,9.8 and Lys values 2.2,9.0,10.5 for an adjacent-state pI estimate. Identify which two numbers apply to each.',steps:['Asp charge sequence is +1,0,−1,−2; neutral lies between the first and second steps.','Lys charge sequence is +2,+1,0,−1; neutral lies between the second and third steps.','Average those bracketing values: Asp(2.1+3.9)/2=3.0; Lys(9.0+10.5)/2=9.75.'],answer:'Approximate pI 3.0 and 9.75 under the supplied dominant-state model. Do not average all three constants or infer that zwitterions lack charged groups.'},
  {question:'A linear 10-residue RNA strand is cut once between residues4 and5 by the specified neighbouring 2′-OH phosphate-attack pathway. Identify the fragments and initial terminal-group changes.',steps:['The residue graph becomes a 4-residue piece and a 6-residue piece, conserving all10 residues.','The upstream attacking ribose can bear a 2′,3′-cyclic phosphate; the downstream fragment acquires 5′-OH after proton transfer.','This initial intramolecular transesterification differs from base-pair separation. DNA lacks the same 2′-OH nucleophile.'],answer:'Two covalent backbone fragments, with10 residues total. Later cyclic-phosphate opening can change terminal phosphate forms; no universal identical cleavage-rate claim is made.'}
 ]
};
export function extendNitrogenBiomoleculeReactionMapsLesson(lesson:StudyLesson){
 if(!(lesson.id in additions))return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(ch=>({title:ch.title,formula:ch.formula,paragraphs:[ch.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(item=>({...item,options:[...item.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(old=>old.url===source.url)));
}
