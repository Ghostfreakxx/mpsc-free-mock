"use client";

import { useState } from "react";
import Link from "next/link";
import type { TeachingOptions } from "../lib/tochhawng-teachers";
import OpenTeachersButton from "./open-teachers-button";
import styles from "./study-room.module.css";

export type ReviewedLesson = {
  id: string;
  subject: TeachingOptions["subject"];
  label: string;
  title: string;
  note: string;
  source: { title: string; url: string };
  quiz: { prompt: string; choices: string[]; answer: number; explanation: string };
};

export default function ReviewedClassroom({ lessons }: { lessons: ReviewedLesson[] }) {
  const [selected, setSelected] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const lesson = lessons[selected];

  return (
    <section className={styles.resources} id="reviewed-classroom" aria-labelledby="reviewed-classroom-title">
      <h2 id="reviewed-classroom-title">Reviewed classroom lessons</h2>
      <p>These English lessons use source-checked material from the Free MPSC Mock question bank.</p>
      <div className={styles.lessonChooser}>
        <label htmlFor="reviewed-topic">Subject</label>
        <select id="reviewed-topic" value={selected} onChange={event => {
          setSelected(Number(event.target.value));
          setAnswer(null);
          setRevealed(false);
        }}>
          {lessons.map((item, index) => <option key={item.id} value={index}>{item.label}</option>)}
        </select>
      </div>
      <article className={styles.reviewedBoard}>
        <h3>{lesson.title}</h3>
        <p>{lesson.note}</p>
        <a href={lesson.source.url} target="_blank" rel="noreferrer">{lesson.source.title} ↗</a>
        <fieldset className={styles.reviewQuiz}>
          <legend>{lesson.quiz.prompt}</legend>
          {lesson.quiz.choices.map((choice, index) => (
            <label key={choice}>
              <input name="reviewed-choice" type="radio" checked={answer === index} disabled={revealed} onChange={() => setAnswer(index)} />
              {choice}
            </label>
          ))}
        </fieldset>
        {revealed ? (
          <p role="status"><strong>{answer === lesson.quiz.answer ? "Correct. " : `Answer: ${lesson.quiz.choices[lesson.quiz.answer]}. `}</strong>{lesson.quiz.explanation}</p>
        ) : <button type="button" className={styles.reviewCheck} disabled={answer === null} onClick={() => setRevealed(true)}>Check answer</button>}
        <div className={styles.roomActions}>
          <OpenTeachersButton subject={lesson.subject} label={`Ask Zorami about ${lesson.label}`} />
          <Link className={styles.primary} href="/mock-test" prefetch={false}>Continue to MPSC practice ↗</Link>
        </div>
      </article>
    </section>
  );
}
