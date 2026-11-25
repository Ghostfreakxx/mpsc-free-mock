import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PracticeQuiz from "../../../../jee/classes/practice-quiz";
import StudyDownload from "../../../../jee/classes/study-download";
import styles from "../../../../jee/classes/lecture.module.css";
import { biologyCompanions } from "../../biology-companions";
import { cellSyllabus } from "../../cell-written";

export const dynamicParams = false;
export function generateStaticParams() {
  return biologyCompanions.map(({ id }) => ({ slug: id }));
}

export default async function BiologyNotes({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = biologyCompanions.find(item => item.id === slug);
  if (!lesson) notFound();
  const sources = [cellSyllabus, lesson.reference];
  const remaining = "This companion covers selected applications. Use the recorded class for broader unit coverage.";
  return <main className={styles.page}>
    <header className={styles.header}>
      <Link href="/neet/classes" prefetch={false}>← NEET classes</Link>
      <Link href={`/neet/classes/${lesson.id}`} prefetch={false}>Watch the recorded class</Link>
    </header>
    <div className={styles.heading}><p>NEET BIOLOGY · UNIT {lesson.unit}</p><h1>{lesson.title}</h1></div>
    <StudyDownload exam="neet" lesson={{ ...lesson, subject: "Biology", prerequisites: "Basic cell and chromosome vocabulary.", remaining, sources }} />
    <div className={styles.reading}>
      {lesson.sections.map(section => <section key={section.title}><h2>{section.title}</h2>
        {section.paragraphs.map(point => <p key={point}>{point}</p>)}</section>)}
    </div>
    <figure className={styles.studyFigure}>
      <Image src={`/lectures/foundations/neet-${lesson.id}-notes.svg`} width={640} height={280} alt={lesson.alt} />
      <figcaption>{lesson.alt}</figcaption>
    </figure>
    <section className={styles.notes}><h2>Worked example</h2>
      {lesson.examples.map(example => <article key={example.question}><p>{example.question}</p>
        <ol>{example.steps.map(step => <li key={step}>{step}</li>)}</ol><p><strong>{example.answer}</strong></p></article>)}
    </section>
    <PracticeQuiz quiz={lesson.quiz} progressKey={`neet.study.${lesson.id}.v1`} />
    <section className={styles.notes}><h2>Continue studying</h2><p>{remaining}</p>
      {lesson.lab && <p><Link href={lesson.lab.href} prefetch={false}>{lesson.lab.title}</Link></p>}
      <p><Link href="/study-room" prefetch={false}>Open Zorami’s classroom</Link></p>
      {sources.map(source => <p key={source.url}><a href={source.url} rel="noreferrer">{source.title}</a></p>)}
    </section>
  </main>;
}
