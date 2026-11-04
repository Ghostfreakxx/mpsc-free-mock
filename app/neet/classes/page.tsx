import Link from 'next/link';
import styles from '../../jee/classes/lecture.module.css';
import data from '../../data/neet-cell-unit-life-lecture.json';
import biomolecules from '../../data/neet-biomolecules-lecture.json';
import division from '../../data/neet-cell-cycle-division-lecture.json';
export const metadata = { title: 'NEET recorded classes' };
export default function NeetClasses() {
 return <main className={styles.page}>
  <header className={styles.header}><Link href="/neet" prefetch={false}>← NEET practice</Link><Link href="/">MPSC FREE MOCK</Link></header>
  <div className={styles.heading}><p>NEET UG · BIOLOGY</p><h1>NEET recorded classes</h1><span>Three recorded Biology foundations · More units in development</span></div>
  <section className={styles.notes}><h2>Cell: The Unit of Life</h2><p>Biology Unit 3 · {data.chapters.length} narrated chapters · {data.quiz.length} original practice questions · Captions and downloadable transcript</p><p>Cell theory, prokaryotic and eukaryotic organization, membranes, walls, organelles, cytoskeleton, nucleus and chromosome structure.</p><Link href="/neet/classes/cell-unit-life" prefetch={false}>Watch recorded class →</Link><p>Continue with Biomolecules and Cell Cycle and Cell Division for the other Unit 3 foundations.</p></section>
  <section className={styles.notes}><h2>Biomolecules</h2><p>Biology Unit 3 · {biomolecules.chapters.length} narrated chapters · {biomolecules.quiz.length} original practice questions · Captions and downloadable transcript</p><p>Carbohydrates, lipids, proteins, nucleic acids, enzyme mechanisms, activity, classification, cofactors and inhibition.</p><Link href="/neet/classes/biomolecules" prefetch={false}>Watch recorded class →</Link><p>Builds on Cell: The Unit of Life; continue with Cell Cycle and Cell Division.</p></section>
  <section className={styles.notes}><h2>Cell Cycle and Cell Division</h2><p>Biology Unit 3 · {division.chapters.length} narrated chapters · {division.quiz.length} original practice questions · Captions and downloadable transcript</p><p>Cell-cycle phases, mitosis, meiosis, recombination, significance and chromosome/DNA counting by stage and compartment.</p><Link href="/neet/classes/cell-cycle-division" prefetch={false}>Watch recorded class →</Link><p>Completes the three planned Unit 3 foundations. Further mixed diagrams and experimental practice remain.</p></section>
  <footer className={styles.notes}><p>Checked against the <a href="https://neet.nta.nic.in/document/syllabus-for-neet-ug-2026-examination/" target="_blank" rel="noreferrer">official NEET UG 2026 syllabus</a> on 4 November 2026. This is a dated baseline, not a claim of a verified 2027 syllabus. Independent teaching with original questions; no NTA endorsement or official PYQ claim.</p></footer>
 </main>;
}
