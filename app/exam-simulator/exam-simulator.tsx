"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Bookmark, Clock, Eraser, Grid3x3, RotateCcw, Send } from "lucide-react";
import { Fragment, useEffect, useMemo, useState } from "react";
import { getReviewedQuestions, reviewedQuestions } from "../data/reviewed-content";
import {
  addToHistory, attemptOnArrival, clearAnswer, examConfigs, formatClock, goTo, maxLength, questionStatus, restoreAttempt, scoreAttempt,
  selectAnswer, selectQuestions, startAttempt, statusCounts, submitAttempt, summarize, toggleMark,
  type Attempt, type AttemptResult, type AttemptSummary, type ExamId, type QuestionStatus,
} from "../lib/exam-simulator";
import styles from "./simulator.module.css";

const ATTEMPT_KEY = "exam-simulator:attempt:v1";
const HISTORY_KEY = "exam-simulator:history:v1";
const examOrder: ExamId[] = ["jee", "neet", "cuet-pg", "mpsc"];
const questionsById = new Map(reviewedQuestions.map(question => [question.id, question]));
const statusLabels: Record<QuestionStatus, string> = {
  "not-visited": "Not visited",
  "not-answered": "Not answered",
  answered: "Answered",
  marked: "Marked for review",
  "answered-marked": "Answered and marked (will be evaluated)",
};

function readStorage(key: string) {
  try { return window.localStorage.getItem(key); } catch { return null; }
}
function writeStorage(key: string, value: string | null) {
  try {
    if (value === null) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, value);
  } catch { /* The exam still runs without saved progress. */ }
}
function readHistory(): AttemptSummary[] {
  try {
    const parsed: unknown = JSON.parse(readStorage(HISTORY_KEY) ?? "[]");
    return Array.isArray(parsed) ? parsed.filter(item => item && typeof item.score === "number" && item.examId in examConfigs).slice(0, 10) : [];
  } catch { return []; }
}
const minutes = (ms: number) => `${Math.round(ms / 60000)} min`;
const seconds = (ms: number) => {
  const total = Math.round(ms / 1000);
  return total < 60 ? `${total} s` : `${Math.floor(total / 60)} min ${total % 60} s`;
};
// Event handlers read the wall clock through this helper; render code never calls it.
const clockNow = () => Date.now();
const formatScore = (value: number) => Number.isInteger(value) ? String(value) : value.toFixed(2);

export default function ExamSimulator() {
  const [loaded, setLoaded] = useState(false);
  const [attempt, setAttempt] = useState<Attempt | null>(null);
  const [history, setHistory] = useState<AttemptSummary[]>([]);
  const [examId, setExamId] = useState<ExamId>("jee");
  const [length, setLength] = useState(examConfigs.jee.lengths[0]);
  const [markingId, setMarkingId] = useState(examConfigs.jee.markingOptions[0].id);
  const [now, setNow] = useState(0);
  const [confirming, setConfirming] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<"all" | "wrong" | "skipped">("wrong");

  // Restore after mount so server and client render the same first frame.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const saved = restoreAttempt(readStorage(ATTEMPT_KEY), questionsById);
      const requested = new URLSearchParams(window.location.search).get("exam");
      if (requested && requested in examConfigs) {
        const config = examConfigs[requested as ExamId];
        setExamId(config.id); setLength(config.lengths[0]); setMarkingId(config.markingOptions[0].id);
      }
      setAttempt(attemptOnArrival(saved, requested));
      setHistory(readHistory());
      setNow(Date.now());
      setLoaded(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    writeStorage(ATTEMPT_KEY, attempt ? JSON.stringify(attempt) : null);
  }, [attempt, loaded]);

  const running = Boolean(attempt && attempt.submittedAt === undefined);
  useEffect(() => {
    if (!running) return;
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, [running]);

  const config = attempt ? examConfigs[attempt.examId] : examConfigs[examId];
  const result = useMemo<AttemptResult | null>(
    () => attempt?.submittedAt !== undefined ? scoreAttempt(attempt, examConfigs[attempt.examId], questionsById) : null,
    [attempt],
  );

  function finish(current: Attempt, at: number) {
    const submitted = submitAttempt(current, at);
    const summary = summarize(submitted, scoreAttempt(submitted, examConfigs[submitted.examId], questionsById));
    const nextHistory = addToHistory(readHistory(), summary);
    writeStorage(HISTORY_KEY, JSON.stringify(nextHistory));
    setHistory(nextHistory);
    setConfirming(false);
    setAttempt(submitted);
    window.scrollTo({ top: 0 });
  }

  // Submit automatically when time runs out, as the real exam does.
  useEffect(() => {
    if (attempt && attempt.submittedAt === undefined && now >= attempt.deadline) {
      const timer = window.setTimeout(() => finish(attempt, attempt.deadline), 0);
      return () => window.clearTimeout(timer);
    }
  }, [attempt, now]);

  function chooseExam(id: ExamId) {
    setExamId(id);
    setLength(examConfigs[id].lengths[0]);
    setMarkingId(examConfigs[id].markingOptions[0].id);
  }

  function begin(id = examId, count = length, marking = markingId) {
    const selected = examConfigs[id];
    const pool = getReviewedQuestions(selected.stream);
    const paper = selectQuestions(selected, pool, count, Math.floor(Math.random() * 2 ** 31));
    const at = Date.now();
    setNow(at);
    setReviewFilter("wrong");
    setAttempt(startAttempt(selected, marking, paper, at));
    window.scrollTo({ top: 0 });
  }

  function act(change: (current: Attempt, at: number) => Attempt) {
    const at = clockNow();
    setNow(at);
    setAttempt(current => current ? change(current, at) : current);
  }

  if (!loaded) {
    return <main className={styles.page}><div className={styles.wrap}><p className={styles.muted} role="status">Loading exam simulator…</p></div></main>;
  }

  if (attempt && attempt.submittedAt === undefined) {
    const question = questionsById.get(attempt.questionIds[attempt.current])!;
    const response = attempt.responses[question.id];
    const remaining = attempt.deadline - now;
    const statuses = attempt.questionIds.map(id => questionStatus(attempt.responses[id]));
    const counts = statusCounts(attempt);
    const count = (status: QuestionStatus) => counts[status];
    const answeredCount = count("answered") + count("answered-marked");
    const last = attempt.current === attempt.questionIds.length - 1;
    const nextOrStay = (current: Attempt, at: number) => last ? current : goTo(current, current.current + 1, at);

    return <main className={styles.page}>
      <div className={styles.examBar}>
        <span className={styles.examName}>{config.name} · {attempt.questionIds.length} questions</span>
        <span className={`${styles.timer} ${remaining < 5 * 60000 ? styles.timerLow : ""}`} role="timer" aria-label={`Time left ${formatClock(remaining)}`}><Clock size={16} /> {formatClock(remaining)}</span>
        <button type="button" className="button button-dark" onClick={() => setConfirming(true)}><Send size={14} /> Submit</button>
      </div>
      <div className={styles.examLayout}>
        <section className={styles.panel} aria-label={`Question ${attempt.current + 1}`}>
          <div className={styles.questionMeta}>
            <span>Question {attempt.current + 1} of {attempt.questionIds.length}</span>
            <span>{question.subject} · {question.category}</span>
          </div>
          <h1 className={styles.questionText}>{question.question}</h1>
          <div className={styles.options} role="group" aria-label="Answer options">
            {question.options.map((option, index) => <button type="button" key={option} className={styles.option} aria-pressed={response.answer === option}
              onClick={() => act((current, at) => selectAnswer(current, option, at))}>
              <span className={styles.letter}>{String.fromCharCode(65 + index)}</span><span>{option}</span>
            </button>)}
          </div>
          <div className={styles.actions}>
            <button type="button" className="button button-outline" disabled={attempt.current === 0} onClick={() => act((current, at) => goTo(current, current.current - 1, at))}><ArrowLeft size={14} /> Previous</button>
            <button type="button" className="button button-outline" disabled={!response.answer} onClick={() => act(clearAnswer)}><Eraser size={14} /> Clear</button>
            <span className={styles.spacer} />
            <button type="button" className="button button-outline" onClick={() => act((current, at) => nextOrStay(toggleMark(current, at), at))}><Bookmark size={14} /> {response.marked ? "Unmark" : "Mark for review"}{last ? "" : " & next"}</button>
            <button type="button" className="button button-dark" disabled={last} onClick={() => act(nextOrStay)}>Save & next <ArrowRight size={14} /></button>
          </div>
        </section>

        <aside className={styles.panel} aria-label="Question palette">
          <button type="button" className={`button button-outline ${styles.paletteToggle}`} aria-expanded={paletteOpen} onClick={() => setPaletteOpen(open => !open)}>
            <Grid3x3 size={14} /> Question palette · {answeredCount}/{attempt.questionIds.length} answered
          </button>
          <div className={paletteOpen ? "" : styles.paletteClosed}>
            <ul className={styles.legend}>
              {(Object.keys(statusLabels) as QuestionStatus[]).map(status => <li key={status}><span className={`${styles.swatch} ${styles[status]}`} aria-hidden="true" />{count(status)} {statusLabels[status].replace(" (will be evaluated)", "")}</li>)}
            </ul>
            <div className={styles.palette}>
              {attempt.questionIds.map((id, index) => {
                const subject = questionsById.get(id)!.subject;
                const startsSubject = index === 0 || questionsById.get(attempt.questionIds[index - 1])!.subject !== subject;
                return <Fragment key={id}>
                  {startsSubject && <span className={styles.subjectLabel}>{subject}</span>}
                  <button type="button" className={`${styles.cell} ${styles[statuses[index]]} ${index === attempt.current ? styles.cellCurrent : ""}`}
                    aria-label={`Question ${index + 1}, ${statusLabels[statuses[index]]}`} aria-current={index === attempt.current ? "step" : undefined}
                    onClick={() => { act((current, at) => goTo(current, index, at)); setPaletteOpen(false); }}>{index + 1}</button>
                </Fragment>;
              })}
            </div>
          </div>
        </aside>
      </div>

      {confirming && <div className={styles.backdrop} role="presentation" onClick={() => setConfirming(false)}>
        <div className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="submit-title" onClick={event => event.stopPropagation()}
          onKeyDown={event => { if (event.key === "Escape") setConfirming(false); }}>
          <h2 id="submit-title">Submit your exam?</h2>
          <p className={styles.muted}>{formatClock(remaining)} left. Answers marked for review are still evaluated. You cannot change answers after submitting.</p>
          <div className={styles.counts}>
            {(Object.keys(statusLabels) as QuestionStatus[]).map(status => <div key={status}><strong>{count(status)}</strong>{statusLabels[status].toLowerCase()}</div>)}
          </div>
          <div className={styles.startRow}>
            <button type="button" className="button button-outline" autoFocus onClick={() => setConfirming(false)}>Back to exam</button>
            <button type="button" className="button button-dark" onClick={() => finish(attempt, Date.now())}>Submit exam</button>
          </div>
        </div>
      </div>}
    </main>;
  }

  if (attempt && result) {
    const marking = (config.markingOptions.find(option => option.id === attempt.markingId) ?? config.markingOptions[0]).marking;
    const reviewItems = result.questions.filter(item => reviewFilter === "all" || (reviewFilter === "wrong" ? item.answer !== undefined && !item.correct : item.answer === undefined));
    return <main className={styles.page}>
      <Header />
      <div className={`${styles.wrap} ${styles.stack}`}>
        <div>
          <span className={styles.kicker}>{config.name} simulator · result</span>
          <h1 className={styles.title}>You scored {formatScore(result.score)} out of {result.max}</h1>
          <p className={styles.lead}>{attempt.questionIds.length} questions · {(config.markingOptions.find(option => option.id === attempt.markingId) ?? config.markingOptions[0]).label}. Original foundation practice, so treat the score as a strategy check rather than a rank prediction.</p>
        </div>
        <section className={styles.scoreRow} aria-label="Score summary">
          <div className={styles.stat}><span>Correct</span><strong className={styles.good}>{result.correct}</strong><small>+{formatScore(result.correct * marking.correct)} marks</small></div>
          <div className={styles.stat}><span>Wrong</span><strong className={styles.bad}>{result.wrong}</strong><small>{formatScore(result.wrong * marking.wrong)} marks</small></div>
          <div className={styles.stat}><span>Skipped</span><strong>{result.skipped}</strong><small>0 marks</small></div>
          <div className={styles.stat}><span>Accuracy</span><strong>{result.accuracy === null ? "—" : `${result.accuracy}%`}</strong><small>{minutes(result.timeUsedMs)} used of {minutes(attempt.deadline - attempt.startedAt)}</small></div>
        </section>

        <section className={styles.insights} aria-label="Strategy insights">
          {marking.wrong < 0 ? <article className={`${styles.insight} ${result.guesses.count ? styles.insightWarn : ""}`}>
            <h3>Quick guesses</h3>
            <p>{result.guesses.count
              ? `${result.guesses.count} wrong ${result.guesses.count === 1 ? "answer was" : "answers were"} given in under ${seconds(result.guesses.thresholdMs)}, costing ${formatScore(result.guesses.marksLost)} ${result.guesses.marksLost === 1 ? "mark" : "marks"}. Skipping them would have scored ${formatScore(result.guesses.scoreIfSkipped)}.`
              : "No fast wrong answers. You were not losing marks to rushed guesses."}</p>
          </article> : <article className={styles.insight}>
            <h3>No negative marking</h3>
            <p>{result.skipped ? `You left ${result.skipped} blank. With no penalty, a guess can only gain marks, so answer every question before time runs out.` : "You answered everything, which is the right strategy when wrong answers cost nothing."}</p>
          </article>}
          <article className={`${styles.insight} ${result.changes.fromCorrect > result.changes.toCorrect ? styles.insightWarn : ""}`}>
            <h3>Changed answers</h3>
            <p>{result.changes.toCorrect + result.changes.fromCorrect === 0
              ? "You did not switch between right and wrong answers."
              : `${result.changes.toCorrect} changed to correct, ${result.changes.fromCorrect} changed away from correct. ${result.changes.fromCorrect > result.changes.toCorrect ? "Your first instinct was more reliable; change an answer only with a clear reason." : "Your reviews helped; keep checking marked questions."}`}</p>
          </article>
          <article className={styles.insight}>
            <h3>Time sinks</h3>
            <p>{result.slowest.length
              ? `Longest: ${result.slowest.map(item => `Q${attempt.questionIds.indexOf(item.question.id) + 1} (${seconds(item.timeMs)}, ${item.answer === undefined ? "skipped" : item.correct ? "correct" : "wrong"})`).join(", ")}. The budget is ${seconds(config.secondsPerQuestion * 1000)} per question.`
              : "No time was recorded on individual questions."}</p>
          </article>
        </section>

        <section className={styles.panel}>
          <h2 className={styles.sectionTitle}>By subject</h2>
          <div className={styles.tableScroll}><table className={styles.table}>
            <thead><tr><th scope="col">Subject</th><th scope="col">Score</th><th scope="col">Correct</th><th scope="col">Wrong</th><th scope="col">Skipped</th></tr></thead>
            <tbody>{result.bySubject.map(subject => <tr key={subject.subject}><td>{subject.subject}</td><td>{formatScore(subject.score)} / {subject.max}</td><td>{subject.correct}</td><td>{subject.wrong}</td><td>{subject.skipped}</td></tr>)}</tbody>
          </table></div>
        </section>

        <div className={styles.startRow}>
          <button type="button" className={`button button-dark ${styles.bigButton}`} onClick={() => begin(attempt.examId, attempt.questionIds.length, attempt.markingId)}><RotateCcw size={15} /> New paper, same settings</button>
          <button type="button" className={`button button-outline ${styles.bigButton}`} onClick={() => { setExamId(attempt.examId); setLength(attempt.questionIds.length); setMarkingId(attempt.markingId); setAttempt(null); }}>Change settings</button>
        </div>

        <section className={styles.stack} aria-label="Answer review">
          <div className={styles.startRow}>
            <h2 className={styles.sectionTitle} style={{ margin: 0 }}>Review answers</h2>
            <div className={styles.chips}>
              {(["wrong", "skipped", "all"] as const).map(filter => <button type="button" key={filter} className={styles.chip} aria-pressed={reviewFilter === filter} onClick={() => setReviewFilter(filter)}>
                {filter === "wrong" ? `Wrong (${result.wrong})` : filter === "skipped" ? `Skipped (${result.skipped})` : `All (${result.questions.length})`}
              </button>)}
            </div>
          </div>
          {reviewItems.length === 0 ? <p className={styles.muted}>Nothing to show for this filter.</p> : <ol className={styles.review}>
            {reviewItems.map(item => <li key={item.question.id} className={`${styles.reviewItem} ${item.answer === undefined ? "" : item.correct ? styles.reviewCorrect : styles.reviewWrong}`}>
              <span className={styles.muted}>Q{attempt.questionIds.indexOf(item.question.id) + 1} · {item.question.subject} · {seconds(item.timeMs)}</span>
              <h3>{item.question.question}</h3>
              <p>Your answer: {item.answer === undefined ? <strong>skipped</strong> : <strong className={item.correct ? styles.good : styles.bad}>{item.answer}</strong>}</p>
              {!item.correct && <p>Correct answer: <strong className={styles.good}>{item.question.answer}</strong></p>}
              <p>{item.question.explanation}</p>
            </li>)}
          </ol>}
        </section>
      </div>
    </main>;
  }

  const pool = getReviewedQuestions(config.stream);
  const lengths = config.lengths.filter(value => value <= maxLength(config, pool));
  return <main className={styles.page}>
    <Header />
    <div className={`${styles.wrap} ${styles.stack}`}>
      <div>
        <span className={styles.kicker}>Exam simulator</span>
        <h1 className={styles.title}>Practise the real exam, not just the questions</h1>
        <p className={styles.lead}>A timed paper with the exam&apos;s marking, a question palette and mark-for-review, like the computer-based test. Afterwards you see where marks went: quick guesses, changed answers and time sinks.</p>
      </div>

      <section className={styles.panel} aria-labelledby="exam-choice">
        <h2 id="exam-choice" className={styles.sectionTitle}>1. Choose your exam</h2>
        <div className={styles.choiceGrid}>
          {examOrder.map(id => <button type="button" key={id} className={styles.choice} aria-pressed={examId === id} onClick={() => chooseExam(id)}>
            <strong>{examConfigs[id].name}</strong>
            <span>{examConfigs[id].markingOptions.length > 1 ? "Choose negative marking" : examConfigs[id].markingOptions[0].label}</span>
          </button>)}
        </div>
      </section>

      <section className={styles.panel} aria-labelledby="length-choice">
        <h2 id="length-choice" className={styles.sectionTitle}>2. Paper length</h2>
        <div className={styles.chips}>
          {lengths.map(value => <button type="button" key={value} className={styles.chip} aria-pressed={length === value} onClick={() => setLength(value)}>
            {value} questions · {minutes(value * config.secondsPerQuestion * 1000)}
          </button>)}
        </div>
      </section>

      {config.markingOptions.length > 1 && <section className={styles.panel} aria-labelledby="marking-choice">
        <h2 id="marking-choice" className={styles.sectionTitle}>3. Marking</h2>
        <div className={styles.chips}>
          {config.markingOptions.map(option => <button type="button" key={option.id} className={styles.chip} aria-pressed={markingId === option.id} onClick={() => setMarkingId(option.id)}>{option.label}</button>)}
        </div>
      </section>}

      <p className={styles.muted}>{config.note} Check the current information bulletin before your exam.</p>

      <div className={styles.startRow}>
        <button type="button" className={`button button-dark ${styles.bigButton}`} onClick={() => begin()}>Start {length}-question {config.name} paper <ArrowRight size={15} /></button>
        <span className={styles.muted}>The timer starts immediately. Your progress is saved on this device if you leave.</span>
      </div>

      {history.length > 0 && <section className={styles.panel} aria-labelledby="history-title">
        <h2 id="history-title" className={styles.sectionTitle}>Your recent papers</h2>
        <ul className={styles.history}>
          {history.map(item => <li key={`${item.finishedAt}-${item.examId}`}>
            <span>{examConfigs[item.examId].name} · {item.count} questions · {new Date(item.finishedAt).toLocaleDateString("en", { day: "numeric", month: "short" })}</span>
            <strong>{formatScore(item.score)} / {item.max}{item.accuracy === null ? "" : ` · ${item.accuracy}%`}</strong>
          </li>)}
        </ul>
      </section>}
    </div>
  </main>;
}

function Header() {
  return <header className={styles.header}>
    <Link href="/"><ArrowLeft size={15} /> Learning space</Link>
    <span>MPSC FREE MOCK</span>
  </header>;
}
