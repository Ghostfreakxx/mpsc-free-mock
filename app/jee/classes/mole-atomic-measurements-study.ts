import type { StudyLesson } from './course';
import { moleAtomicMeasurementsAdditions as additions } from './mole-atomic-measurements-additions.ts';
const examples: Record<string, StudyLesson['examples']> = {
 'mole-concept':[
  {question:'A solution has 3.00 mg solute per litre and density 1.20 kg/L. Find mass ppm and explain why mg/L cannot always be used unchanged.',steps:['One litre has total solution mass 1.20 kg.','Mass ppm is mg solute per kg solution: 3.00/1.20=2.50.','The common mg/L approximation needs density near 1 kg/L and a stated mass basis.'],answer:'2.50 mass ppm, equivalent to 2500 mass ppb; mg/L is a mass-per-volume concentration and requires density for this conversion.'},
  {question:'An ideal gas mixture has 2 mol He and 1 mol N2 at 3 bar. Using molar masses 4 and 28 g/mol, find helium partial pressure, helium mass fraction and mean molar mass.',steps:['The helium mole fraction is 2/3, giving partial pressure (2/3)×3=2 bar.','Masses are 8 g He and 28 g N2, so helium mass fraction is 8/36=2/9.','Mean molar mass is 36 g/3 mol=12 g/mol.'],answer:'2 bar; helium mass fraction 2/9; mean molar mass 12 g/mol. Mole fraction and mass fraction use different denominators.'},
  {question:'Mix 25.00 mL 0.100 M AgNO3 with 40.00 mL 0.0500 M NaCl. In a complete precipitation model with additive volumes and AgCl=143.5 g/mol, find precipitate mass and excess Ag+ concentration.',steps:['Ag+ initially=2.50 mmol and Cl− initially=2.00 mmol; the net equation is 1:1.','AgCl formed=2.00 mmol, giving 0.287 g; Ag+ excess=0.500 mmol.','Divide 0.000500 mol by 0.06500 L to obtain about 0.00769 M.'],answer:'0.287 g AgCl and about 0.00769 M excess Ag+. This model neglects finite solubility, complex formation and volume changes.'}
 ],
 'atomic-structure':[
  {question:'For head-on alpha approach to a heavy fixed gold nucleus, use Z=79, ke²=1.44 MeV fm and initial kinetic energy 5.00 MeV. Find the turning separation and its value at double the energy.',steps:['Set initial kinetic energy equal to k(2e)(Ze)/r at the turning point.','r=2×79×1.44/5.00=45.504 fm.','Doubling initial energy halves this centre-to-centre turning separation to 22.752 fm.'],answer:'About 45.5 fm, or 22.8 fm at 10.0 MeV. These separations are not nuclear radii; the model assumes head-on motion and negligible recoil.'},
  {question:'Compare hydrogen 2s and a real 2p orbital using x=r/a0, then compare electron and proton matter wavelengths at equal kinetic energy and equal speed with mp/me=1836.',steps:['The 2s radial factor contains (2−x), giving one spherical node at x=2. A real 2p has an angular nodal plane and no positive-radius radial node.','At equal nonrelativistic K, λe/λp=√(mp/me)=√1836≈42.8.','At equal speed, λe/λp=mp/me=1836. Probability distributions and matter wavelengths describe different quantum questions.'],answer:'2s: one radial node; real 2p: one angular node. Wavelength ratios are about 42.8 at equal K and 1836 at equal speed.'},
  {question:'A 4.00 mW monochromatic beam has photon energy 4.00 eV and overall collected electron yield 0.200 per incident photon. Use e=1.60×10^−19 C and find photon rate and current.',steps:['Photon energy=4.00×1.60×10^−19=6.40×10^−19 J.','Photon rate=0.00400/(6.40×10^−19)=6.25×10^15 s^−1.','Current=e×0.200×photon rate=0.000200 A. The stipulated yield already includes collection losses.'],answer:'6.25×10^15 photons/s and 0.200 mA, assuming above-threshold single-photon emission under the stated overall yield.'}
 ]
};
export function extendMoleAtomicMeasurementsLesson(lesson: StudyLesson){
 if(!(lesson.id in additions))return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(ch=>({title:ch.title,formula:ch.formula,paragraphs:[ch.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(item=>({...item,options:[...item.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(old=>old.url===source.url)));
}
