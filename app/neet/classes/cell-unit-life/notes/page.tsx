import Image from "next/image";
import Link from "next/link";
import PracticeQuiz from "../../../../jee/classes/practice-quiz";
import styles from "../../../../jee/classes/lecture.module.css";
import { cellNotes, cellQuestions, cellRevision, cellSyllabus } from "../../cell-written";

export const metadata = { title: "Cell organization and protein transport | NEET Biology notes" };

const headings = ["Compare bacteria and eukaryotes", "Follow a secretory protein", "Distinguish plant-cell boundaries", "Count chromosomes after replication"];

export default function CellNotesPage() {
  return <main className={styles.page}>
    <header className={styles.header}>
      <Link href="/neet/classes" prefetch={false}>← NEET classes</Link>
      <Link href="/neet/classes/cell-unit-life" prefetch={false}>Watch the recorded class</Link>
    </header>
    <div className={styles.heading}><p>NEET BIOLOGY · UNIT 3</p><h1>Cell organization and protein transport</h1></div>
    <div className={styles.reading}>
      {cellNotes.map((note, index) => <section key={note}><h2>{headings[index]}</h2><p>{note}</p></section>)}
    </div>
    <figure className={styles.studyFigure}>
      <Image src="/lectures/foundations/neet-cell-secretion.svg" width={760} height={240} alt={cellRevision[1]} />
      <figcaption>Route for a typical secreted protein. The arrows trace cargo movement, and the compartments are schematic.</figcaption>
    </figure>
    <section className={styles.notes}><h2>Worked example</h2>
      <p>A eukaryotic cell starts with four chromosomes and duplicates its DNA. Each chromosome now has two sister chromatids, giving eight chromatids. The chromosome count stays at four until sister chromatids separate. S phase doubles DNA content without doubling chromosome number.</p>
    </section>
    <section className={styles.notes}><h2>Quick revision</h2><ul>{cellRevision.map(point => <li key={point}>{point}</li>)}</ul></section>
    <PracticeQuiz quiz={cellQuestions} progressKey="neet.study.cell-organization.v1" />
    <section className={styles.notes}><h2>Continue studying</h2>
      <p>This companion covers selected cell-structure concepts. Use the recording for cytoskeleton, cilia, plastids and the full organelle survey.</p>
      <p><Link href="/laboratory#plant-animal-cells" prefetch={false}>Compare plant and animal cells in the lab</Link></p>
      <p><Link href="/study-room" prefetch={false}>Open Zorami’s classroom</Link></p>
      <p><a href={cellSyllabus.url} rel="noreferrer">{cellSyllabus.title}</a> · <a href="https://ncert.nic.in/textbook/pdf/kebo108.pdf" rel="noreferrer">NCERT cell chapter</a></p>
    </section>
  </main>;
}
