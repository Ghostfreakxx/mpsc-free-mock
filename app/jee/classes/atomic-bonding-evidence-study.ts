import type { StudyLesson } from './course';
import { atomicBondingEvidenceAdditions as additions } from './atomic-bonding-evidence-additions.ts';
const examples: Record<string, StudyLesson['examples']>={
 'atomic-structure':[
  {question:'For hydrogen 3s, let x=r/a₀ and R∝(27−18x+2x²)e^(−x/3). Find its finite radial nodes and explain P(0)=0.',steps:['The exponential has no finite zero, so solve 2x²−18x+27=0.','x=(9±3√3)/2≈1.902 and 7.098, consistent with n−l−1=2.','R(0) is nonzero, while the shell factor r² makes radial probability zero at the origin.'],answer:'Two spherical radial nodes at approximately 1.90a₀ and 7.10a₀; zero angular nodes. The origin is not another radial node.'},
  {question:'In a reduced-mass-only model, nuclear masses are MH=1836mₑ and MD=3670mₑ. Compare frequencies and vacuum wavelengths for the same hydrogen/deuterium electronic transition.',steps:['μH/mₑ=1836/1837 and μD/mₑ=3670/3671.','At fixed Z and n values, fD/fH=(3670/3671)/(1836/1837)≈1.000272.','Vacuum wavelength is inversely proportional to frequency: λD/λH≈0.999728.'],answer:'Deuterium has a slightly higher frequency and shorter wavelength; the shift is about 0.0272%, not a twofold change. Other isotope corrections are omitted.'},
  {question:'A photoelectric graph gives Kmax=.4816 eV at 6×10¹⁴ Hz and 1.3088 eV at 8×10¹⁴ Hz. Find its slope, work function and threshold.',steps:['Slope=(1.3088−.4816)/(2×10¹⁴)=4.136×10⁻¹⁵ eV s.','φ=hf−K=(4.136×10⁻¹⁵)(6×10¹⁴)−.4816=2.000 eV.','f₀=φ/h≈4.836×10¹⁴ Hz. The line below threshold does not represent negative-energy emitted electrons.'],answer:'h=4.136×10⁻¹⁵ eV s, φ=2.000 eV, f₀≈4.836×10¹⁴ Hz in the supplied single-photon model.'}
 ],
 'chemical-bonding':[
  {question:'Fill the supplied simplified HF valence MO model: a deep largely nonbonding F 2s level, σ bonding, two perpendicular nonbonding F 2p levels and empty σ*. Find bond order and pairing.',steps:['H contributes 1 and F contributes 7, for 8 valence electrons.','Occupancies are 2 in deep F 2s, 2 in σ, and 2 in each perpendicular nonbonding orbital.','Only σ/σ* enter the bonding difference: (2−0)/2=1; all occupied levels are paired.'],answer:'Approximate bond order 1 and diamagnetism. The diagram is qualitative, excludes core electrons and does not use homonuclear g/u labels.'},
  {question:'A supplied diatomic potential has separated atoms at zero, its minimum at −450 kJ/mol, and a vibrational ground level 25 kJ/mol above the minimum. Find Dₑ and D₀ and explain the force at equilibrium.',steps:['The potential well depth is Dₑ=450 kJ/mol.','The vibrational ground level is −450+25=−425 kJ/mol; reaching separated atoms requires D₀=425 kJ/mol.','At the potential minimum dV/dr=0, so the net force is zero despite the finite binding energy.'],answer:'Dₑ=450 and D₀=425 kJ/mol. Neither quantity is automatically an unspecified-temperature average bond enthalpy.'},
  {question:'Model two equal C–Cl contributions of 1.50 D on an ideal regular benzene ring, neglecting other contributions. Find ortho, meta and para resultant magnitudes, then compare opposed unequal vectors of 1.50 and 1.00 D.',steps:['Use vector angles 60°,120°,180° for ortho, meta, para.','Apply 2μ|cos(θ/2)|: √3×1.50≈2.60 D, 1.50 D and 0 D.','Opposed unequal vectors subtract: |1.50−1.00|=.50 D.'],answer:'Ideal equal-vector values: 2.60, 1.50, 0 D. Opposed unequal vectors give .50 D; model values are not guaranteed experimental dipole moments.'}
 ]
};
export function extendAtomicBondingEvidenceLesson(lesson: StudyLesson){
 if(!(lesson.id in additions))return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(ch=>({title:ch.title,formula:ch.formula,paragraphs:[ch.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(item=>({...item,options:[...item.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(old=>old.url===source.url)));
}
