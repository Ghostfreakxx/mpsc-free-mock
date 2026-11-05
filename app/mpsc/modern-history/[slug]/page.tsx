import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download } from "lucide-react";
import { findChapter, historyChapters } from "../../../data/modern-history";
import { Blocks, Rich } from "../rich";
import styles from "../chapter.module.css";

export function generateStaticParams() {
  return historyChapters.map(chapter => ({ slug: chapter.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const chapter = findChapter((await params).slug);
  return chapter
    ? { title: `${chapter.title} | MPSC Modern Indian History`, description: chapter.summary }
    : { title: "Chapter not found" };
}

export default async function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
  const chapter = findChapter((await params).slug);
  if (!chapter) notFound();
  const letters = ["A", "B", "C", "D"];

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/mpsc/modern-history"><ArrowLeft size={16} aria-hidden="true" /> All chapters</Link>
        <a className={styles.download} href={`/downloads/chapters/${chapter.slug}`} download>
          <Download size={16} aria-hidden="true" /> Save for offline
        </a>
      </header>

      <article className={styles.wrap}>
        <p className={styles.kicker}>MPSC · {chapter.course} · Chapter {chapter.number}</p>
        <h1 className={styles.title}>{chapter.title} <span>({chapter.period})</span></h1>
        <p className={styles.lead}>{chapter.summary}</p>
        <p className={styles.free}>Free for every student. Written for MPSC Free Mock in simple English.</p>

        <nav className={styles.toc} aria-label="In this chapter">
          <strong>In this chapter</strong>
          <ol>
            <li><a href="#how-to-study">How to study this chapter</a></li>
            <li><a href="#key-words">Key words</a></li>
            <li><a href="#timeline">Timeline</a></li>
            {chapter.sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}
            <li><a href="#practice">Practice: MCQs, short answers, Mains</a></li>
          </ol>
        </nav>

        <section id="how-to-study" className={styles.section}>
          <h2>How to study this chapter</h2>
          <p className={styles.muted}>{chapter.hours}</p>
          <ul>{chapter.howToStudy.map((tip, i) => <li key={i}><Rich text={tip} /></li>)}</ul>
          <h3>Why it matters for your exam</h3>
          <ul>{chapter.examFocus.map(item => <li key={item.paper}><strong>{item.paper}:</strong> {item.text}</li>)}</ul>
          <h3>By the end you should be able to</h3>
          <ol>{chapter.outcomes.map((outcome, i) => <li key={i}>{outcome}</li>)}</ol>
        </section>

        <section id="key-words" className={styles.section}>
          <h2>Key words (read these first)</h2>
          <dl className={styles.glossary}>
            {chapter.glossary.map(([term, meaning]) => <div key={term}><dt>{term}</dt><dd>{meaning}</dd></div>)}
          </dl>
        </section>

        <section id="timeline" className={styles.section}>
          <h2>Timeline</h2>
          <ol className={styles.timeline}>
            {chapter.timeline.map(([year, event], i) => <li key={i}><span>{year}</span><p>{event}</p></li>)}
          </ol>
        </section>

        {chapter.sections.map(section => (
          <section key={section.id} id={section.id} className={styles.section}>
            <h2>{section.title}</h2>
            <Blocks blocks={section.blocks} />
            <div className={styles.check}>
              <h3>Check yourself</h3>
              <p className={styles.muted}>Answer in your notebook first, then tap a question to compare.</p>
              {section.check.map((item, i) => (
                <details key={i}>
                  <summary>{i + 1}. {item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        ))}

        <section id="practice" className={styles.section}>
          <h2>Practice set</h2>
          <h3>Multiple-choice questions</h3>
          <p className={styles.muted}>Choose your answer, then tap “Show answer”.</p>
          <ol className={styles.mcqs}>
            {chapter.mcqs.map((mcq, i) => (
              <li key={i}>
                <p><Rich text={mcq.q} /></p>
                <ol type="A">{mcq.options.map((option, o) => <li key={o}>{option}</li>)}</ol>
                <details>
                  <summary>Show answer</summary>
                  <p><strong>{letters[mcq.answer]}. {mcq.options[mcq.answer]}</strong> {mcq.why}</p>
                </details>
              </li>
            ))}
          </ol>

          <h3>Short-answer questions</h3>
          {chapter.shortAnswers.map((item, i) => (
            <details key={i} className={styles.answerBlock}>
              <summary>{i + 1}. {item.q}</summary>
              <p className={styles.muted}>Points to include:</p>
              <ul>{item.points.map((point, p) => <li key={p}>{point}</li>)}</ul>
            </details>
          ))}

          <h3>Mains-style question</h3>
          <details className={styles.answerBlock}>
            <summary>{chapter.mains.q}</summary>
            <p className={styles.muted}>Answer outline:</p>
            <ol>{chapter.mains.outline.map((point, p) => <li key={p}>{point}</li>)}</ol>
          </details>
        </section>

        <footer className={styles.footer}>
          <h2>References</h2>
          <ul>{chapter.references.map(reference => <li key={reference}>{reference}</li>)}</ul>
          <p>Original study notes written for MPSC Free Mock from standard textbooks. Review was AI-assisted; check important facts against your textbook before the exam. Doubts? Tap “Ask a doubt”.</p>
        </footer>
      </article>
    </main>
  );
}
