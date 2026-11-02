import Link from "next/link";
import { CandlestickChart, TriangleAlert } from "lucide-react";
import { lessons } from "../lessons";
import styles from "../trading.module.css";

export const metadata = {
  title: "Markets, Money and Safety | MPSC Free Mock",
  description: "A free course on how markets work, reading charts, trading costs and tax in India, managing risk, keeping your accounts safe and spotting investment scams.",
};

export default function Page() {
  const minutes = lessons.reduce((sum, lesson) => sum + lesson.minutes, 0);
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/">← Home</Link>
        <Link href="/trading"><CandlestickChart size={15} /> Simulator</Link>
      </header>
      <div className={`${styles.wrap} ${styles.stack}`}>
        <div>
          <div className={styles.kicker}>Free course · {lessons.length} lessons · about {minutes} minutes</div>
          <h1 className={styles.title}>Markets, money and staying safe</h1>
          <p className={styles.lead}>
            How prices are made, how to read a chart, what trading really costs in India, how to limit losses, and how to protect yourself from hacks and scams.
            Practise each idea in the <Link href="/trading">trading simulator</Link> with pretend money.
          </p>
        </div>
        <div className={`${styles.panel} ${styles.notice}`}>
          <TriangleAlert size={16} />
          <p>This course is general education, not financial advice. Tax rules change; check the current rules or ask a chartered accountant before you invest.</p>
        </div>
        <nav className={styles.panel} aria-label="Lessons">
          <h2 className={styles.sectionTitle}>Lessons</h2>
          <ol className={styles.toc}>
            {lessons.map(lesson => (
              <li key={lesson.id}><a href={`#${lesson.id}`}><span>{lesson.title}</span><small>{lesson.minutes} min</small></a></li>
            ))}
          </ol>
        </nav>
        {lessons.map((lesson, index) => (
          <article key={lesson.id} id={lesson.id} className={`${styles.panel} ${styles.lesson}`}>
            <div className={styles.kicker}>Lesson {index + 1} · {lesson.minutes} min</div>
            <h2>{lesson.title}</h2>
            <p className={styles.intro}>{lesson.intro}</p>
            {lesson.blocks.map((block, b) => (
              <section key={b}>
                {block.heading && <h3>{block.heading}</h3>}
                {block.text?.map((paragraph, p) => <p key={p}>{paragraph}</p>)}
                {block.points && <ul>{block.points.map((point, p) => <li key={p}>{point}</li>)}</ul>}
              </section>
            ))}
            <div className={styles.remember}>
              <strong>Remember</strong>
              <ul>{lesson.remember.map((point, p) => <li key={p}>{point}</li>)}</ul>
            </div>
            {lesson.check.map((check, c) => (
              <div key={c} className={styles.check}>
                <p>Check yourself: {check.question}</p>
                <ol>{check.options.map(option => <li key={option}>{option}</li>)}</ol>
                <details>
                  <summary>Show answer</summary>
                  <p><strong>{String.fromCharCode(65 + check.options.indexOf(check.answer))}. {check.answer}.</strong> {check.why}</p>
                </details>
              </div>
            ))}
          </article>
        ))}
        <div className={styles.row}>
          <Link href="/trading" className={styles.button}><CandlestickChart size={15} /> Practise in the simulator</Link>
        </div>
      </div>
    </main>
  );
}
