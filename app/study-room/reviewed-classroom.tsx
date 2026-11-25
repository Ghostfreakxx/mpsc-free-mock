"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { CLASSROOM_LESSON_EVENT, type ClassroomLesson } from "../lib/classroom-lesson";
import { MAX_QUESTION_CHARS, teachingLanguages, teachingModes, type TeachingOptions } from "../lib/tochhawng-teachers";
import { searchLessons } from "./lesson-search";
import styles from "./study-room.module.css";

type Question = { prompt: string; choices: string[]; explanation: string };
export type ReviewedLesson = {
  id: string;
  subject: TeachingOptions["subject"];
  label: string;
  title: string;
  notes: string[];
  pitfall: string;
  source: { title: string; url: string };
  lab?: string;
  companion?: { title: string; audio: string; captions: string; href: string };
  quiz: (Question & { answer: number; mizo?: Question })[];
};

function RecordedCompanion({ companion }: { companion: NonNullable<ReviewedLesson["companion"]> }) {
  const [open, setOpen] = useState(false);
  return <div className={styles.roomActions}>
    <button type="button" className={styles.reviewCheck} aria-expanded={open} onClick={() => setOpen(value => !value)}>
      {open ? "Hide related recording" : "Open related recording"}
    </button>
    {open && <div className={styles.recordedCompanion}>
      <p>{companion.title} · English narration</p>
      <audio controls preload="none" aria-label="Related class narration" src={companion.audio}>
        <track kind="captions" src={companion.captions} srcLang="en" label="English" default />
      </audio>
      <Link className={styles.primary} href={companion.href} prefetch={false}>Open full recorded class and transcript ↗</Link>
    </div>}
  </div>;
}

function translatedExplanations(lesson: ReviewedLesson) {
  return lesson.quiz.flatMap(item => item.mizo ? [item.mizo.explanation] : []);
}

function publish(lesson: ReviewedLesson, mode: TeachingOptions["mode"], language: TeachingOptions["language"], text: string) {
  const detail: ClassroomLesson = { teacher: "zorami", subject: lesson.subject, topic: lesson.title, mode, language, text, source: "reviewed" };
  window.dispatchEvent(new CustomEvent(CLASSROOM_LESSON_EVENT, { detail }));
}

export default function ReviewedClassroom() {
  const [lessons, setLessons] = useState<ReviewedLesson[]>([]);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [selected, setSelected] = useState(0);
  const [mode, setMode] = useState<TeachingOptions["mode"]>("explain");
  const [language, setLanguage] = useState<TeachingOptions["language"]>("en");
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState<{ lesson: ReviewedLesson; points: string[]; language: TeachingOptions["language"] } | null>();
  const [searchSubject, setSearchSubject] = useState<string>("");
  const [quizIndex, setQuizIndex] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const lesson = lessons[selected];
  const active = mode === "questions" ? result?.lesson : lesson;
  const quiz = active?.quiz[quizIndex];
  const displayedQuiz = (language === "lus" && quiz?.mizo) || quiz;
  const mizoNotes = active ? translatedExplanations(active) : [];
  const displayLanguage = result?.language ?? (language === "lus" && (mode === "quiz" ? quiz?.mizo : mizoNotes.length) ? "lus" : "en");
  const notes = result?.points ?? (displayLanguage === "lus" ? mizoNotes : active?.notes ?? []);
  const points = mode === "revision" ? [...notes.slice(0, 2), ...(displayLanguage === "en" && active?.pitfall ? [active.pitfall] : [])] : notes;

  useEffect(() => {
    const controller = new AbortController();
    fetch("/study-room/lesson-data", { signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error("Lessons unavailable");
        return response.json() as Promise<ReviewedLesson[]>;
      })
      .then(setLessons)
      .catch(() => { if (!controller.signal.aborted) setFailed(true); });
    return () => controller.abort();
  }, [attempt]);

  function resetQuiz() {
    setAnswer(null);
    setRevealed(false);
  }

  function ask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = question.trim();
    if (!query) return;
    const candidates = searchSubject ? lessons.filter(item => item.label === searchSubject) : lessons;
    const translated = language === "lus"
      ? searchLessons(candidates.filter(item => translatedExplanations(item).length > 0), query, translatedExplanations)
      : undefined;
    const match = translated ?? searchLessons(candidates, query, item => item.notes);
    const matchLanguage = translated ? "lus" : "en";
    setResult(match ? { ...match, language: matchLanguage } : null);
    if (match) {
      publish(match.lesson, "questions", matchLanguage, match.points.join("\n\n"));
    } else {
      window.dispatchEvent(new CustomEvent(CLASSROOM_LESSON_EVENT, { detail: null }));
    }
  }

  return (
    <section className={styles.resources} aria-labelledby="reviewed-classroom">
      <h2 id="reviewed-classroom" tabIndex={-1}>Reviewed classroom lessons</h2>
      <p>Study with Tochhawng Zorami, a fictional Mizo digital teacher, using notes and questions from Free MPSC Mock. Once loaded, the lessons work without a connection.</p>
      {!lesson && (failed ? (
        <div role="status">
          <p>The classroom lessons could not load.</p>
          <button type="button" className={styles.reviewCheck} onClick={() => { setFailed(false); setAttempt(value => value + 1); }}>Retry loading lessons</button>
        </div>
      ) : <p role="status">Loading classroom lessons…</p>)}
      {lesson && <article className={styles.reviewedBoard}>
        <div className={styles.lessonChooser}>
          {mode !== "questions" && <>
            <label htmlFor="reviewed-topic">Subject and topic</label>
            <select id="reviewed-topic" value={selected} onChange={event => {
              setSelected(Number(event.target.value));
              setQuizIndex(0);
              resetQuiz();
            }}>
              {lessons.map((item, index) => <option key={item.id} value={index}>{item.label} · {item.title}</option>)}
            </select>
          </>}
          <label htmlFor="reviewed-mode">Teaching mode</label>
          <select id="reviewed-mode" value={mode} onChange={event => {
            setMode(event.target.value as TeachingOptions["mode"]);
            setResult(undefined);
            resetQuiz();
          }}>
            {Object.entries(teachingModes).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
          <label htmlFor="reviewed-language">Lesson language</label>
          <select id="reviewed-language" value={language} onChange={event => {
            setLanguage(event.target.value as TeachingOptions["language"]);
            setResult(undefined);
            resetQuiz();
          }}>
            {Object.entries(teachingLanguages).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </div>
        {mode === "questions" && (
          <form className={styles.lessonChooser} onSubmit={ask}>
            <label htmlFor="reviewed-search-subject">Search subject</label>
            <select id="reviewed-search-subject" value={searchSubject} onChange={event => {
              setSearchSubject(event.target.value);
              setResult(undefined);
            }}>
              <option value="">All classroom subjects</option>
              {[...new Set(lessons.map(item => item.label))].sort().map(label => <option key={label}>{label}</option>)}
            </select>
            <label htmlFor="reviewed-question">Ask Zorami a question</label>
            <input id="reviewed-question" value={question} onChange={event => setQuestion(event.target.value)}
              maxLength={MAX_QUESTION_CHARS} required />
            <button type="submit" className={styles.reviewCheck} disabled={!question.trim()}>Find a reviewed lesson</button>
            <p role="status">{result === null ? "No close match in the classroom notes. Try a topic from the list or browse the college notes." : result ? `Related lesson: ${result.lesson.title}` : "Searches reviewed material in the selected subject."}</p>
          </form>
        )}
        {active && <>
          <h3>{active.title}</h3>
          {mode === "questions" && result && <button type="button" className={styles.reviewCheck} onClick={() => {
            const index = lessons.findIndex(item => item.id === result.lesson.id);
            if (index < 0) return;
            setSelected(index);
            setMode("explain");
            setQuizIndex(0);
            resetQuiz();
          }}>Read the full lesson</button>}
          {language === "lus" && <p>{displayLanguage === "lus" ? "Mizo translation draft." : "Mizo material is unavailable here. Showing English."}</p>}
          {mode === "quiz" && quiz && displayedQuiz ? <>
            <p>Question {quizIndex + 1} of {active.quiz.length}</p>
            <fieldset className={styles.reviewQuiz} lang={displayLanguage}>
              <legend>{displayedQuiz.prompt}</legend>
              {displayedQuiz.choices.map((choice, index) => (
                <label key={choice}>
                  <input name="reviewed-choice" type="radio" checked={answer === index} disabled={revealed} onChange={() => setAnswer(index)} />
                  {choice}
                </label>
              ))}
            </fieldset>
            {revealed ? (
              <p role="status"><strong>{answer === quiz.answer ? "Correct. " : "Correct answer: "}</strong>
                <span lang={displayLanguage}>{displayedQuiz.choices[quiz.answer]}. {displayedQuiz.explanation}</span></p>
            ) : <button type="button" className={styles.reviewCheck} disabled={answer === null} onClick={() => {
              setRevealed(true);
              publish(active, mode, displayLanguage, displayedQuiz.explanation);
            }}>Check answer</button>}
            {revealed && active.quiz.length > 1 && <button type="button" className={styles.reviewCheck} onClick={() => {
              setQuizIndex((quizIndex + 1) % active.quiz.length);
              resetQuiz();
            }}>{quizIndex + 1 === active.quiz.length ? "Start quiz again" : "Next question"}</button>}
          </> : mode === "revision" ? (
            <ol className={styles.revisionPoints} lang={displayLanguage}>{points.map(point => <li key={point}>{point}</li>)}</ol>
          ) : points.map(point => <p key={point} lang={displayLanguage}>{point}</p>)}
          {result && <button type="button" className={styles.reviewCheck} onClick={() => {
            setSelected(lessons.indexOf(result.lesson));
            setMode("quiz");
            setResult(undefined);
            setQuizIndex(0);
            resetQuiz();
          }}>Try the related quiz</button>}
          <p><a href={active.source.url} target="_blank" rel="noreferrer">{active.source.title} ↗</a></p>
          <button type="button" className={styles.reviewCheck} onClick={() => {
            const text = mode === "quiz" && displayedQuiz
              ? [displayedQuiz.prompt, ...displayedQuiz.choices, ...(revealed ? [displayedQuiz.explanation] : [])].join("\n")
              : points.join("\n\n");
            publish(active, mode, displayLanguage, text);
            document.getElementById("classroom-lesson-title")?.focus();
          }}>Show on blackboard</button>
          {active.lab && <p><Link href={active.lab} prefetch={false}>Try the related laboratory activity ↗</Link></p>}
          {active.companion && <RecordedCompanion key={active.id} companion={active.companion} />}
        </>}
        <div className={styles.roomActions}>
          <Link className={styles.primary} href="/college-notes" prefetch={false}>Browse college notes ↗</Link>
          <Link className={styles.primary} href="/mock-test" prefetch={false}>Continue to MPSC practice ↗</Link>
        </div>
      </article>}
    </section>
  );
}
