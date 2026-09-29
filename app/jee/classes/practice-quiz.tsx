"use client";

import { useEffect, useState } from "react";
import { RotateCcw } from "lucide-react";
import { readAnswers, serializeAnswers } from "./progress";
import styles from "./lecture.module.css";

type Question = { question: string; options: string[]; answer: number; explanation: string };

export default function PracticeQuiz({ quiz, progressKey }: { quiz: Question[]; progressKey: string }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [ready, setReady] = useState(false);
  const [saved, setSaved] = useState(true);

  useEffect(() => {
    let active = true;
    queueMicrotask(() => {
      if (!active) return;
      try { setAnswers(readAnswers(localStorage.getItem(`${progressKey}.answers`), quiz)); }
      catch { setSaved(false); }
      setReady(true);
    });
    return () => { active = false; };
  }, [progressKey, quiz]);

  function save(next: Record<number, number>) {
    setAnswers(next);
    try {
      localStorage.setItem(`${progressKey}.answers`, serializeAnswers(next, quiz));
      setSaved(true);
    } catch { setSaved(false); }
  }

  return <section className={styles.quiz} aria-label="Lesson practice">
    <div className={styles.sectionHeading}><h2>Check your understanding</h2><button disabled={!ready || Object.keys(answers).length === 0} onClick={() => save({})}><RotateCcw size={17} /> Retry practice</button></div>
    <p>Original practice · {Object.keys(answers).length} / {quiz.length} answered · {quiz.filter((question, index) => answers[index] === question.answer).length} correct</p>
    <p className={styles.saveStatus}>{!ready ? "Loading saved answers..." : saved ? "Answers saved on this browser" : "Answers cannot be saved in this browser. This attempt is temporary."}</p>
    {quiz.map((question, index) => <fieldset key={question.question}>
      <legend>{index + 1}. {question.question}</legend>
      {question.options.map((option, optionIndex) => <label key={option}><input type="radio" disabled={!ready || answers[index] !== undefined} name={`${progressKey}-${index}`} checked={answers[index] === optionIndex} onChange={() => { if (answers[index] === undefined) save({ ...answers, [index]: optionIndex }); }} />{option}</label>)}
      {answers[index] !== undefined && <p role="status" className={answers[index] === question.answer ? styles.correct : styles.incorrect}><strong>{answers[index] === question.answer ? "Correct. " : "Not quite. "}</strong>{question.explanation}</p>}
    </fieldset>)}
  </section>;
}
