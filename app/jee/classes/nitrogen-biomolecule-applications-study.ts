import type { StudyLesson } from './course';
import { nitrogenBiomoleculeApplicationsAdditions as additions } from './nitrogen-biomolecule-applications-additions.ts';
const examples: Record<string, StudyLesson['examples']> = {
 'organic-nitrogen':[
  {question:'Use the carbylamine net equation for 0.0100 mol ethylamine at stipulated complete conversion. Find product formula, amount and net KOH amount.',steps:['Ethylamine C2H7N gains the carbon from CHCl3 in R–NC, retaining its ethyl group.','The product is C3H5N; the net amine:product ratio is 1:1.','Three KOH appear per amine in the balanced net equation.'],answer:'0.0100 mol ethyl isocyanide C3H5N and 0.0300 mol net KOH. This is theoretical atom accounting, not an experimental prescription.'},
  {question:'A conjugate acid has supplied pKaH=9. At externally maintained pH 7 and pH 11, calculate BH+/B and the neutral base percentages.',steps:['Use BH+/B=10^(pKaH−pH), with ideal concentration ratios.','At pH 7 the ratio is 100 and neutral fraction is 1/101.','At pH 11 the ratio is 0.01 and neutral fraction is 100/101.'],answer:'pH 7: ratio 100, neutral ≈0.990%; pH 11: ratio 0.01, neutral ≈99.01%. The pH is supplied, not solved from formal concentration.'},
  {question:'Compare direct bromine-water treatment of aniline with acetyl protection, suitable controlled bromination and deprotection. Track carbon and bromine counts.',steps:['Direct aniline bromination gives the standard 2,4,6-tribromo product.','Acetyl protection adds two carbons and moderates activation; suitable bromination gives mainly the para monobromo protected product.','Hydrolysis removes the temporary acetyl group; carbon ledger is 6→8→8→6.'],answer:'Three ring bromines in the standard direct comparison versus one in the protected para-bromoaniline target. Para preference is condition dependent, not guaranteed exclusivity.'}
 ],
 biomolecules:[
  {question:'Match A, D, E and K with vision, mineral balance, membrane antioxidant protection and clotting-protein activation. Explain the B12 storage exception.',steps:['A supports vision; D supports calcium/phosphate handling and bone mineralization.','E provides antioxidant protection; K supports activation of clotting-related proteins.','B12 is water soluble, yet substantial stores, especially in the liver, can last years.'],answer:'A–vision, D–mineral balance, E–antioxidant protection, K–clotting-protein activation. Water solubility does not imply that every vitamin has no body stores.'},
  {question:'Read open-chain D-fructose in the standard Fischer projection. Locate its carbonyl and stereocentres, count fixed-connectivity configurations, and identify its anomeric carbon after cyclization.',steps:['C2 is the ketone carbon; C1 and C6 are CH2OH groups.','OH positions C3/C4/C5 are left/right/right; these are the three open-chain stereocentres.','Three independent centres allow 2^3=8 configurations for this connectivity; cyclization makes former carbonyl C2 anomeric.'],answer:'C2 carbonyl; C3, C4, C5 stereocentres; eight configurations. C5 supplies the D reference here, while C2 becomes anomeric; D does not imply a rotation sign.'},
  {question:'For linear DNA 5′-AGTC-3′ and its complementary strand, write the reverse complement and count total nucleotides, interbase hydrogen bonds and internucleotide phosphodiester connections.',steps:['Aligned complement is 3′-TCAG-5′, so its own 5′→3′ sequence is GACT.','Four base pairs contain eight nucleotides; two AT and two GC pairs give 2×2+2×3=10 H bonds.','Each linear strand has 4−1=3 internucleotide connections, so the total is six.'],answer:'5′-GACT-3′; eight nucleotides, ten interbase hydrogen bonds and six internucleotide connections. Terminal phosphate chemistry is unspecified.'}
 ]
};
export function extendNitrogenBiomoleculeApplicationsLesson(lesson: StudyLesson){
 if(!(lesson.id in additions))return;
 const added=additions[lesson.id as keyof typeof additions];
 lesson.sections.push(...added.chapters.map(ch=>({title:ch.title,formula:ch.formula,paragraphs:[ch.script]})));
 lesson.examples.push(...examples[lesson.id]);
 lesson.quiz.push(...added.quiz.map(item=>({...item,options:[...item.options]})));
 lesson.sources.push(...added.sources.filter(source=>!lesson.sources.some(old=>old.url===source.url)));
}
