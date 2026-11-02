import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { studyLessons } from "../../study-lessons";
import PracticeQuiz from "../../practice-quiz";
import StudyDownload from "../../study-download";
import styles from "../../lecture.module.css";
import { lectures } from "../../lessons";
import { physicsCoverage } from "../../physics-coverage";
import { lectureStudyLesson, withLectureClarifications } from "../../lecture-study";

export const dynamicParams = false;
export function generateStaticParams() {
  return [...new Set([...studyLessons.map(lesson => lesson.id), ...lectures.map(lesson => lesson.id)])].map(slug => ({ slug }));
}

const figureAlt: Record<string, string> = {
  "three-dimensional-geometry": "A schematic projection of skew lines L1=(t,0,0) and L2=(s,2,s+1). Closest points are P=(-1,0,0) and Q=(-1,2,0). Their common perpendicular has equation r=(-1,u,0) and the shortest segment has length two. Projected angles and lengths are not measurements of space geometry.",
  "coordinate-geometry": "A circle x squared plus y squared equals twenty five is cut by y=3 at negative four, three and four, three. The centre to chord distance is three, radius five and half chord four, giving full chord length eight.",
  "differential-equations": "For exponential decay N prime equals negative k N, the initial amount eighty falls to forty after one half life of three time units and twenty after six. The equation is separable and linear; the decay coefficient is natural log two divided by three.",
  "integral-calculus": "On zero through one the line y=x is above the parabola y=x squared. Their enclosed area is the integral of x minus x squared, equal to one sixth square units. Geometric area uses upper minus lower, rather than allowing signed pieces to cancel.",
  "limits-continuity-differentiability": "The quotient (x squared minus four)/(x minus two) has limit four at x=2 but is undefined there. A derivative is a limit of secant slopes; the absolute-value graph is continuous at zero but has left slope negative one and right slope positive one, so it is not differentiable there.",
  "trigonometry": "On the unit circle the point at angle two pi over three has cosine negative one half and sine square root of three over two. Principal inverse sine outputs lie between negative pi over two and pi over two; inverse cosine outputs lie between zero and pi.",
  "sequences-series": "The AP 2,5,8 has constant difference 3. Inserting three arithmetic means between 2 and 18 gives 2,6,10,14,18. Inserting three positive geometric means between 2 and 162 gives 2,6,18,54,162 with ratio 3.",
  "binomial-theorem": "The term T(r+1) in (2x−3)^5 is C(5,r)(2x)^(5−r)(−3)^r. To obtain x cubed, solve 5−r=3, giving r=2 and the third term 720x cubed.",
  "permutations-combinations": "Choosing an unordered committee of three from seven people gives C(7,3)=35. Assigning first, second and third places gives P(7,3)=210. Each committee has 3!=6 internal orders.",
  "matrices-determinants": "For A with rows (2,1) and (5,3), det(A)=1 and its inverse has rows (3,−1) and (−5,2). Multiplication gives the identity. The system 2x+y=5, 5x+3y=13 has solution x=2,y=1.",
  "p-block": "Groups 13 to 18 usually have ns2 np1 through ns2 np6 outer configurations, respectively. Helium is the 1s2 exception in Group 18. These patterns do not prescribe every oxidation state.",
  "d-f-block": "Iron loses its two 4s electrons before a 3d electron: neutral 3d6 4s2 becomes Fe2+ 3d6 and then Fe3+ 3d5. Ionic configurations differ from the neutral atom.",
  "practical-chemistry": "In the specified acidic reaction, one permanganate accepts five electrons and five iron(II) ions each supply one electron. This gives a 1:5 mole ratio, not a universal equal-volume rule.",
  "biomolecules": "Sucrose hydrolyses to glucose and fructose, maltose to two glucose units, and lactose to galactose and glucose. Each hydrolysis consumes one water per disaccharide.",
  "purification-analysis": "Chromatography schematic: spot travel is 3 cm and solvent-front travel is 5 cm from the same baseline, giving dimensionless Rf 0.60. A single Rf does not prove identity.",
  "organic-oxygen": "Suitable oxidation takes ethanol to ethanal and then ethanoic acid. Initial self-aldol addition of two ethanal molecules gives four-carbon 3-hydroxybutanal, not the dehydrated product.",
  "organic-nitrogen": "Nitrile reduction retains two carbons in ethanamine from CH3CN. Hofmann rearrangement of CH3CONH2 removes the carbonyl carbon from the organic product, giving one-carbon methanamine.",
  "hydrocarbons": "Propene plus HBr gives mainly 2-bromopropane in the ordinary ionic pathway, but mainly 1-bromopropane under suitable peroxide-initiated radical conditions. This peroxide rule is not general for HCl or HI.",
  "organic-halogens": "Bromoethane gives ethanol by substitution with aqueous hydroxide under suitable conditions, or ethene by elimination with hot alcoholic KOH in standard textbook conditions. The solvent and temperature affect the competing pathways.",
  "chemical-kinetics": "First-order fraction remaining halves every half-life: one, one half, one quarter and one eighth at zero, one, two and three half-lives. Values follow exponential decay.",
  "coordination-compounds": "Octahedral d6 arrangements: high spin t2g four and eg two has four unpaired electrons; low spin t2g six and eg zero has none. Energy rises upward.",
  "organic-principles": "Schematic projections of cis and trans but-2-ene: both methyl groups are on the same side in cis and opposite sides in trans. Each alkene carbon has a hydrogen and a methyl substituent. Bond angles are not drawn to scale.",
  "equilibrium": "Schematic forward and reverse rates approach the same nonzero value. Equilibrium means equal rates, not stopped reactions or equal concentrations.",
  "redox-electrochemistry": "Daniell galvanic cell: negative zinc anode oxidizes, positive copper cathode reduces, electrons flow externally from zinc to copper and ions carry charge through the salt bridge.",
  "chemical-thermodynamics": "In the Chemistry convention, 500 J absorbed and 200 J of expansion work done by the gas give Delta U = +300 J. Work on the system is -200 J.",
  "solutions": "Ideal binary solution with pure pressures 80 and 40 kPa: equal liquid mole fractions give partial pressures 40 and 20 kPa, total 60 kPa and vapour mole fraction of A equal to 2/3.",
  "atomic-spectra": "Hydrogen energy levels and the n = 4 to n = 2 emission: 2.55 eV, approximately 486 nm.",
  "periodic-trends": "Ten-electron ions shrink as nuclear charge increases: O2- > F- > Na+ > Mg2+. Sizes are schematic, not measured radius data.",
  "chemical-bonding": "Equal opposite bond dipoles cancel in linear CO2, while bent water has a nonzero dipole sum. Chemical polarity arrows point toward oxygen.",
  "chemistry-foundations": "Four iron atoms and three oxygen molecules produce two Fe2O3 formula units. Both sides contain four Fe atoms and six O atoms. This atom-count schematic does not depict molecular geometry.",
  "induction-applications": "A rod moves right on rails in a magnetic field into the page. Induced current is counterclockwise, upward through the rod, and magnetic braking acts left. For a rotating radial rod, local speed omega s increases with distance from the pivot, giving emf B omega l squared divided by two.",
  "magnetic-applications": "Upward current in a finite segment from y=-a to +a produces field into the page at P to its right. For same-direction long wires carrying 3 A and 6 A, fields oppose between the wires and cancel 0.10 m from the weaker wire when separation is 0.30 m.",
  "circuit-applications": "Unbalanced bridge with supply nodes A at 12 V and D at zero. A-B and C-D are 3 ohm, B-D and A-C are 6 ohm, and B-C is 3 ohm. Node potentials B=48/7 V and C=36/7 V give bridge current 4/7 A from B to C.",
  "capacitor-applications": "Half-area dielectric filling spans the full gap and forms parallel regions: C = 2C0 for kappa = 3. Half-thickness filling spans the full area and forms series layers: C = 1.5C0. Ideal plate geometry neglects fringing.",
  "electrostatics-applications": "On the axis of a uniform positive ring, transverse electric-field components cancel while axial components add. For a dipole with charges at minus a and plus a, exact axial fields use the distinct source distances r+a and r-a. The geometry is schematic, not to scale.",
  "materials-applications": "A representative schematic tensile stress-strain curve distinguishes the proportional region, nonlinear elastic response, plastic response and eventual fracture. Boundaries vary by material; the schematic is not measured data.",
  "thermodynamics-applications": "Two quasistatic paths between the same pressure-volume endpoints have different work: expansion at 100000 Pa gives 100 J, while expansion at 200000 Pa gives 200 J. Their enclosed rectangular area is 100 J.",
  "kinetic-theory-applications": "A molecule's velocity component normal to a wall reverses in an ideal elastic collision; momentum delivered to the wall is 2m times the magnitude of that component. Isotropic squared components each contribute one third of the mean squared speed.",
  "gravity-applications": "Gravity in a uniform-density spherical planet rises linearly from zero at the centre to surface gravity at radius R, then decreases by the inverse-square law outside. At radius 2R it is one quarter of surface gravity. Rotation is neglected.",
  "rotation-applications": "Masses 2 kg at zero and 3 kg at four meters have centre of mass at 2.4 meters, nearer the heavier mass. Their centre of mass is not the midpoint.",
  "straight-line-motion": "Velocity falls from +6 to -2 m/s over 4 seconds. The positive area is 9 m and negative area is -1 m, giving displacement 8 m and distance 10 m.",
  "mole-concept": "4.4 grams of CO2 divided by 44 grams per mole gives 0.100 mole of CO2. Multiplying by Avogadro's constant gives approximately 6.022 times ten to the power 22 molecules, before final rounding.",
  "sets-and-functions": "The inputs -2, -1, 0, 1 and 2 map through x squared to 4, 1, 0, 1 and 4. Each input has one output, while different inputs can share an output.",
  "newtons-laws": "Free-body diagram of a 4 kg block sliding right on a horizontal floor. A 28 N applied force points right, 12 N kinetic friction points left, and equal 40 N normal and weight forces point up and down. Net force is 16 N rightward.",
  "atomic-structure": "Ground-state nitrogen has configuration 1s squared, 2s squared, 2p cubed. The 1s and 2s orbitals each have paired opposite spins; three separate 2p orbitals each contain one parallel-spin electron.",
  "quadratic-equations": "The graph y = x squared minus x minus 6 crosses the x-axis at -2 and 3. It is non-positive between these roots and positive outside. The minimum is at x = 0.5, y = -6.25.",
};

export default async function StudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const writtenLesson = studyLessons.find(item => item.id === slug);
  const recording = lectures.find(item => item.id === slug);
  const unitIndex = physicsCoverage.findIndex(unit => unit.recordings.includes(slug));
  const lesson = writtenLesson ? withLectureClarifications(writtenLesson, recording)
    : recording && unitIndex >= 0 ? lectureStudyLesson(recording, unitIndex + 1, physicsCoverage[unitIndex].remaining) : undefined;
  if (!lesson) notFound();
  const svgFigure = ["three-dimensional-geometry", "coordinate-geometry", "differential-equations", "integral-calculus", "limits-continuity-differentiability", "trigonometry", "sequences-series", "binomial-theorem", "permutations-combinations", "matrices-determinants", "chemistry-foundations", "atomic-spectra", "periodic-trends", "chemical-bonding", "chemical-thermodynamics", "solutions", "equilibrium", "redox-electrochemistry", "chemical-kinetics", "coordination-compounds", "organic-principles", "hydrocarbons", "organic-halogens", "organic-oxygen", "organic-nitrogen", "biomolecules", "purification-analysis", "p-block", "d-f-block", "practical-chemistry"].includes(lesson.id);
  const subjectLessons = writtenLesson ? studyLessons.filter(item => item.subject === lesson.subject) : lectures.map(item => ({ id: item.id, title: item.title }));
  const position = subjectLessons.findIndex(item => item.id === lesson.id);
  const previous = subjectLessons[position - 1];
  const next = subjectLessons[position + 1];
  return <main className={styles.page}>
    <header className={styles.header}><Link href="/jee/classes" prefetch={false}><ArrowLeft size={17} /> JEE classes</Link><Link href="/jee">JEE practice</Link></header>
    <div className={styles.heading}><p>JEE MAIN · {lesson.subject.toUpperCase()} · UNIT {lesson.unit}</p><h1>{lesson.title}</h1><span>{writtenLesson ? "Written foundation lesson" : "Class transcript"}</span>{recording && <p><Link href={`/jee/classes/${lesson.id}`} prefetch={false}>Watch the Marin class</Link></p>}</div>
    <div className={styles.sectionHeading}><p className={styles.prerequisites}>Prerequisites: {lesson.prerequisites}</p><StudyDownload lesson={lesson} kind={writtenLesson ? "Written foundation lesson" : "Class transcript"} /></div>
    <nav className={styles.contents} aria-label="Lesson contents"><h2>In this lesson</h2><ol>{lesson.sections.map((section, index) => <li key={section.title}><a href={`#section-${index}`}>{section.title}</a></li>)}</ol>{lesson.examples.length > 0 && <a href="#worked-examples">Worked examples</a>}<a href="#practice">Practice</a></nav>
    {figureAlt[lesson.id] && <figure className={styles.studyFigure}><Image src={`/lectures/foundations/${lesson.id}.${svgFigure ? "svg" : "png"}`} width={svgFigure ? 900 : 1200} height={svgFigure ? 360 : 640} alt={figureAlt[lesson.id]} /><figcaption>{figureAlt[lesson.id]}</figcaption></figure>}
    <div className={styles.reading}>{lesson.sections.map((section, index) => <section id={`section-${index}`} key={section.title}><h2>{index + 1}. {section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.formula && <p className={styles.studyFormula}>{section.formula}</p>}</section>)}</div>
    {lesson.examples.length > 0 && <section id="worked-examples" className={styles.notes}><h2>Worked examples</h2>{lesson.examples.map((example, index) => <article key={example.question}><h3>Example {index + 1}</h3><p>{example.question}</p><ol>{example.steps.map(step => <li key={step}>{step}</li>)}</ol><p><strong>{example.answer}</strong></p></article>)}</section>}
    <div id="practice"><PracticeQuiz quiz={lesson.quiz} progressKey={`jee.study.${lesson.id}.v1`} /></div>
    <nav aria-label="Lesson sequence" className={styles.notes}>
      {previous && <p><Link href={`/jee/classes/study/${previous.id}`}>Previous: {previous.title}</Link></p>}
      {next && <p><Link href={`/jee/classes/study/${next.id}`}>Next: {next.title}</Link></p>}
    </nav>
    <section className={styles.notes}><h2>Unit coverage</h2><p>{lesson.remaining}</p><p>Original teaching text and practice, not official past-paper questions.</p><h2>Further reading</h2>{lesson.sources.map(source => <p key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title}</a></p>)}<Link href="/jee/classes"><ArrowLeft size={17} /> Back to JEE classes</Link></section>
  </main>;
}
