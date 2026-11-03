import Link from 'next/link';
import styles from '../../jee/classes/lecture.module.css';
import data from '../../data/neet-cell-unit-life-lecture.json';
export const metadata = { title: 'NEET recorded classes' };
export default function NeetClasses() {
 return <main className={styles.page}>
  <header className={styles.header}><Link href="/neet" prefetch={false}>← NEET practice</Link><Link href="/">MPSC FREE MOCK</Link></header>
  <div className={styles.heading}><p>NEET UG · BIOLOGY</p><h1>NEET recorded classes</h1><span>One recorded Biology foundation · More units in development</span></div>
  <section className={styles.notes}><h2>Cell: The Unit of Life</h2><p>Biology Unit 3 · {data.chapters.length} narrated chapters · {data.quiz.length} original practice questions · Captions and downloadable transcript</p><p>Cell theory, prokaryotic and eukaryotic organization, membranes, walls, organelles, cytoskeleton, nucleus and chromosome structure.</p><Link href="/neet/classes/cell-unit-life" prefetch={false}>Watch recorded class →</Link><p>Biomolecules and Cell Cycle and Cell Division will follow separately. This class does not complete all of Unit 3.</p></section>
  <footer className={styles.notes}><p>Checked against the <a href="https://neet.nta.nic.in/document/syllabus-for-neet-ug-2026-examination/" target="_blank" rel="noreferrer">official NEET UG 2026 syllabus</a> on 4 November 2026. This is a dated baseline, not a claim of a verified 2027 syllabus. Independent teaching with original questions; no NTA endorsement or official PYQ claim.</p></footer>
 </main>;
}
