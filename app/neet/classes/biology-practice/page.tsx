import Link from 'next/link';
import PracticeQuiz from '../../../jee/classes/practice-quiz';
import styles from '../../../jee/classes/lecture.module.css';
import BiologyDiagram from './diagrams';
import { sets } from './questions';

export const metadata = { title: 'NEET Biology | Diagram and mixed-question practice' };

export default function BiologyPractice() {
  return <main className={styles.page}>
    <header className={styles.header}><Link href="/neet/classes" prefetch={false}>← NEET recorded classes</Link><Link href="/neet" prefetch={false}>NEET practice</Link></header>
    <div className={styles.heading}><p>NEET UG · BIOLOGY PRACTICE COMPANION</p><h1>Biology diagram and mixed-question practice</h1><span>4 original diagrams · 32 original questions · 6 independent saved sets</span></div>
    <section className={styles.notes}><p>Interpret structures and flow, then connect cells, physiology, reproduction, inheritance, biotechnology and ecology. Each schematic has a text equivalent. These focused sets accompany the existing recorded classes and the mapped 2026 foundations; they are not an exhaustive syllabus test or a timed mock.</p><p>Choose one answer to reveal the explanation. Answers save on this browser; Retry practice clears only its own set.</p><nav aria-label="Biology practice sets">{sets.map(set => <p key={set.id}><a href={`#${set.id}`}>{set.title} →</a></p>)}</nav></section>
    {sets.map(set => <section key={set.id} id={set.id} aria-labelledby={`${set.id}-heading`}>
      <div className={styles.notes}><h2 id={`${set.id}-heading`}>{set.title}</h2><p>{set.quiz.length} questions · One best answer each · Untimed</p><Link href={`/neet/classes/${set.lesson}`} prefetch={false}>Review the related recorded class →</Link><BiologyDiagram id={set.id} /></div>
      <PracticeQuiz quiz={set.quiz} progressKey={`neet.biology-diagram-mixed.${set.id}.v1`} />
    </section>)}
    <section className={styles.notes}><h2>Review and retry</h2><p>Distinguish label errors from mistakes in direction, ploidy, probability and mechanism. Revisit the related class, then explain the answer without reading the options before retrying. A correct remembered option alone does not establish mastery.</p><p>Reference checks: <a href="https://sathee.iitk.ac.in/ncert-books/neet-ncert-exemplar/ncert_b11_exemplar/cell_the_unit_of_life/" target="_blank" rel="noreferrer">NCERT cell exemplar on IIT Kanpur SATHEE</a>, <a href="https://sathee.iitk.ac.in/ncert-books/neet-ncert-exemplar/ncert_b12_exemplar/sexual_reproduction_in_flowering_plants" target="_blank" rel="noreferrer">flowering-plant reproduction exemplar</a> and <a href="https://sathee.iitk.ac.in/sathee-neet/ncert-books/neet-ncert-books/neet-nb-bio-12/bio-12-chapter-14-ecosystem/" target="_blank" rel="noreferrer">ecosystem chapter</a>. Questions and diagrams here are newly authored, not reproduced examination items.</p><Link href="/neet/classes/physics-chemistry/practice" prefetch={false}>Continue with Physics and Chemistry practice →</Link></section>
  </main>;
}
