import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { studyLessons } from "../../study-lessons";
import PracticeQuiz from "../../practice-quiz";
import StudyDownload from "../../study-download";
import styles from "../../lecture.module.css";

export const dynamicParams = false;
export function generateStaticParams() { return studyLessons.map(lesson => ({ slug: lesson.id })); }

const figureAlt: Record<string, string> = {
  "straight-line-motion": "Velocity falls from +6 to -2 m/s over 4 seconds. The positive area is 9 m and negative area is -1 m, giving displacement 8 m and distance 10 m.",
  "mole-concept": "4.4 grams of CO2 divided by 44 grams per mole gives 0.100 mole of CO2. Multiplying by Avogadro's constant gives approximately 6.022 times ten to the power 22 molecules, before final rounding.",
  "sets-and-functions": "The inputs -2, -1, 0, 1 and 2 map through x squared to 4, 1, 0, 1 and 4. Each input has one output, while different inputs can share an output.",
};

export default async function StudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = studyLessons.find(item => item.id === slug);
  if (!lesson) notFound();
  return <main className={styles.page}>
    <header className={styles.header}><Link href="/jee/classes"><ArrowLeft size={17} /> JEE classes</Link><Link href="/jee">JEE practice</Link></header>
    <div className={styles.heading}><p>JEE MAIN · {lesson.subject.toUpperCase()} · UNIT {lesson.unit}</p><h1>{lesson.title}</h1><span>Written foundation lesson · Marin recording not yet available</span></div>
    <div className={styles.sectionHeading}><p className={styles.prerequisites}>Prerequisites: {lesson.prerequisites}</p><StudyDownload lesson={lesson} /></div>
    <nav className={styles.contents} aria-label="Lesson contents"><h2>In this lesson</h2><ol>{lesson.sections.map((section, index) => <li key={section.title}><a href={`#section-${index}`}>{section.title}</a></li>)}</ol><a href="#worked-examples">Worked examples</a><a href="#practice">Practice</a></nav>
    <figure className={styles.studyFigure}><Image src={`/lectures/foundations/${lesson.id}.png`} width={1200} height={640} alt={figureAlt[lesson.id]} /><figcaption>{figureAlt[lesson.id]}</figcaption></figure>
    <div className={styles.reading}>{lesson.sections.map((section, index) => <section id={`section-${index}`} key={section.title}><h2>{index + 1}. {section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.formula && <p className={styles.studyFormula}>{section.formula}</p>}</section>)}</div>
    <section id="worked-examples" className={styles.notes}><h2>Worked examples</h2>{lesson.examples.map((example, index) => <article key={example.question}><h3>Example {index + 1}</h3><p>{example.question}</p><ol>{example.steps.map(step => <li key={step}>{step}</li>)}</ol><p><strong>{example.answer}</strong></p></article>)}</section>
    <div id="practice"><PracticeQuiz quiz={lesson.quiz} progressKey={`jee.study.${lesson.id}.v1`} /></div>
    <section className={styles.notes}><h2>Unit coverage</h2><p>{lesson.remaining}</p><p>Original teaching text and practice, not official past-paper questions.</p><h2>Further reading</h2>{lesson.sources.map(source => <p key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title}</a></p>)}<Link href="/jee/classes"><ArrowLeft size={17} /> Back to JEE classes</Link></section>
  </main>;
}
