import Link from 'next/link';
import PracticeQuiz from '../../../../jee/classes/practice-quiz';
import styles from '../../../../jee/classes/lecture.module.css';
import { sets } from './questions';

export const metadata = { title: 'NEET Physics and Chemistry | Experimental and mixed practice' };

export default function ExperimentalPractice() {
  return <main className={styles.page}>
    <header className={styles.header}><Link href="/neet/classes/physics-chemistry" prefetch={false}>← Physics and Chemistry classes</Link><Link href="/neet/classes" prefetch={false}>NEET class library</Link></header>
    <div className={styles.heading}><p>NEET UG · PRACTICE COMPANION</p><h1>Experimental and mixed-question practice</h1><span>32 original questions · four independent saved sets</span></div>
    <section className={styles.notes}><p>Interpret supplied observations, choose a model, calculate with units and check assumptions. These synthetic classroom values are for reasoning practice, not reports of actual measurements or instructions for performing experiments.</p><p>Aligned to the mapped NEET UG 2026 foundations. This focused set is not an exhaustive syllabus test, a timed mock or a claim of laboratory proficiency. Existing recorded classes remain available alongside it.</p><p>Choose an answer to reveal the worked explanation. Answers save on this browser; Retry practice clears only that set.</p><nav aria-label="Practice sets">{sets.map(set => <p key={set.id}><a href={`#${set.id}`}>{set.title} →</a></p>)}</nav></section>
    {sets.map(set => <section id={set.id} key={set.id} aria-labelledby={`${set.id}-heading`}>
      <div className={styles.notes}><h2 id={`${set.id}-heading`}>{set.title}</h2><p>8 questions · Untimed · One best answer each</p><Link href={`/neet/classes/shared/${set.lesson}`} prefetch={false}>Review a related recorded class →</Link><p><Link href={`/neet/classes/physics-chemistry/${set.id.startsWith('physics') ? 'physics' : 'chemistry'}`} prefetch={false}>Find topic-specific classes in the unit map →</Link></p></div>
      <PracticeQuiz quiz={set.quiz} progressKey={`neet.experimental-mixed.${set.id}.v1`} />
    </section>)}
    <section className={styles.notes}><h2>Use the result</h2><p>Revisit explanations for incorrect answers, then retry without referring to the solution. Separate mistakes in units, sign, stoichiometry and experimental assumptions. A remembered answer is not proof that you can solve a fresh variant.</p><Link href="/neet/classes/physics-chemistry/review" prefetch={false}>Return to the detailed syllabus review →</Link></section>
  </main>;
}
