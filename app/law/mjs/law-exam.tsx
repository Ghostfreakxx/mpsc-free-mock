"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Check, Clock, RotateCcw, Scale, Send, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { loadQuestionBank } from "../../lib/use-question-bank";
import { buildPaper, formatClock, isPublishedLawBank, paperSeconds, restoreAttempt, scoreAttempt, shuffle, seededRandom, type MockAttempt, type MockResult } from "./mock";
import { LAW_BANK_NAME, LAW_SUBJECTS, MOCK_LENGTH, lawSubject, type LawDifficulty, type LawSubjectId, type PublishedLawQuestion } from "./syllabus";
import styles from "./law.module.css";

// Saved in this browser only; validated on every read because it can be corrupt or edited.
const ATTEMPT_KEY = "law-mjs:mock-attempt:v1";
const LAST_RESULT_KEY = "law-mjs:last-result:v1";
// A mock needs enough questions to be worth two hours' pacing; until then it stays locked.
const MIN_MOCK_QUESTIONS = 20;
const letters = ["A", "B", "C", "D"];

type View =
  | { name: "home" }
  | { name: "practice"; subject: LawSubjectId | "all"; difficulty: LawDifficulty | "all"; order: string[]; index: number; picked: number | null; correct: number; answered: number }
  | { name: "mock" }
  | { name: "results" };

function readStorage(key: string) {
  try { return window.localStorage.getItem(key); } catch { return null; }
}
function writeStorage(key: string, value: string | null) {
  try {
    if (value === null) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, value);
  } catch { /* The page still works without saved progress. */ }
}
// Event handlers read the wall clock through this helper; render code never calls it.
const clockNow = () => Date.now();
const newSeed = () => Math.floor(Math.random() * 2 ** 31);

export default function LawExam({ counts }: { counts: Record<LawSubjectId, number> }) {
  const [bank, setBank] = useState<PublishedLawQuestion[] | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const [attempt, setAttempt] = useState<MockAttempt | null>(null);
  const [view, setView] = useState<View>({ name: "home" });
  const [now, setNow] = useState(0);
  const [confirming, setConfirming] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<"wrong" | "unanswered" | "all">("wrong");
  const [ready, setReady] = useState(false);
  const questionsById = useMemo(() => new Map((bank ?? []).map(question => [question.id, question])), [bank]);
  const published = Object.values(counts).reduce((sum, count) => sum + count, 0);
  const mockLength = Math.min(MOCK_LENGTH, published);

  // Load the bank and any saved mock after mount, so server and client render the same first frame.
  const load = useCallback(() => {
    setLoadFailed(false);
    loadQuestionBank<unknown>(LAW_BANK_NAME).then(value => {
      if (!isPublishedLawBank(value)) throw new Error("Unexpected law bank format");
      const byId = new Map(value.map(question => [question.id, question]));
      const saved = restoreAttempt(readStorage(ATTEMPT_KEY), byId);
      if (!saved) writeStorage(ATTEMPT_KEY, null);
      setBank(value);
      setAttempt(saved);
      setNow(clockNow());
      setReady(true);
    }, () => setLoadFailed(true));
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(load, 0);
    return () => window.clearTimeout(timer);
  }, [load]);

  useEffect(() => {
    if (!ready) return;
    writeStorage(ATTEMPT_KEY, attempt ? JSON.stringify(attempt) : null);
  }, [attempt, ready]);

  const running = view.name === "mock" && Boolean(attempt && attempt.submittedAt === undefined);
  useEffect(() => {
    if (!running) return;
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, [running]);

  const submit = useCallback((current: MockAttempt, at: number) => {
    const submitted = { ...current, submittedAt: Math.min(at, current.deadline) };
    const result = scoreAttempt(submitted, questionsById);
    writeStorage(LAST_RESULT_KEY, JSON.stringify({ score: result.score, total: result.total, at: submitted.submittedAt }));
    setConfirming(false);
    setAttempt(submitted);
    setReviewFilter("wrong");
    setView({ name: "results" });
    window.scrollTo({ top: 0 });
  }, [questionsById]);

  // Submit automatically when time runs out, as the real examination does.
  useEffect(() => {
    if (running && attempt && now >= attempt.deadline) {
      const timer = window.setTimeout(() => submit(attempt, attempt.deadline), 0);
      return () => window.clearTimeout(timer);
    }
  }, [running, attempt, now, submit]);

  const result = useMemo<MockResult | null>(() => attempt?.submittedAt !== undefined ? scoreAttempt(attempt, questionsById) : null, [attempt, questionsById]);

  function startPractice(subject: LawSubjectId | "all", difficulty: LawDifficulty | "all" = "all") {
    if (!bank) return;
    const pool = bank.filter(question => (subject === "all" || question.subject === subject) && (difficulty === "all" || question.difficulty === difficulty));
    setView({ name: "practice", subject, difficulty, order: shuffle(pool, seededRandom(newSeed())).map(question => question.id), index: 0, picked: null, correct: 0, answered: 0 });
    window.scrollTo({ top: 0 });
  }

  function startMock() {
    if (!bank) return;
    const questionIds = buildPaper(bank, newSeed());
    const at = clockNow();
    setAttempt({ version: 1, questionIds, answers: {}, current: 0, startedAt: at, deadline: at + paperSeconds(questionIds.length) * 1000 });
    setNow(at);
    setView({ name: "mock" });
    window.scrollTo({ top: 0 });
  }

  function updateAttempt(change: (current: MockAttempt) => MockAttempt) {
    setNow(clockNow());
    setAttempt(current => current && current.submittedAt === undefined ? change(current) : current);
  }

  const header = <header className={styles.header}>
    <Link href="/"><ArrowLeft size={15} /> Learning space</Link>
    <span>EXAMEDGE · LAW</span>
  </header>;

  // ----- Mock test in progress -----
  if (view.name === "mock" && attempt && attempt.submittedAt === undefined) {
    const id = attempt.questionIds[attempt.current];
    const question = questionsById.get(id)!;
    const chosen = attempt.answers[id];
    const remaining = attempt.deadline - now;
    const answeredCount = Object.keys(attempt.answers).length;
    const last = attempt.current === attempt.questionIds.length - 1;
    return <main className={styles.page}>
      <div className={styles.examBar}>
        <span className={styles.examName}>Mock · {attempt.questionIds.length} questions · {answeredCount} answered</span>
        <span className={`${styles.timer} ${remaining < 10 * 60000 ? styles.timerLow : ""}`} role="timer" aria-label={`Time left ${formatClock(remaining)}`}><Clock size={16} /> {formatClock(remaining)}</span>
      </div>
      <div className={styles.examLayout}>
        <section className={styles.panel} aria-labelledby="mock-question">
          <div className={styles.questionMeta}>
            <span>Question {attempt.current + 1} of {attempt.questionIds.length}</span>
            <span>{lawSubject(question.subject).short}</span>
          </div>
          <h2 id="mock-question" className={styles.questionText}>{question.question}</h2>
          <div className={styles.options} role="group" aria-label="Options">
            {question.options.map((option, index) => <button
              key={index}
              type="button"
              className={styles.option}
              aria-pressed={chosen === index}
              onClick={() => updateAttempt(current => ({ ...current, answers: { ...current.answers, [id]: index } }))}
            ><span className={styles.letter}>{letters[index]}</span><span>{option}</span></button>)}
          </div>
          <div className={styles.actions}>
            <button type="button" className="button button-outline" disabled={attempt.current === 0} onClick={() => updateAttempt(current => ({ ...current, current: current.current - 1 }))}><ArrowLeft size={15} /> Previous</button>
            <button type="button" className="button button-outline" disabled={chosen === undefined} onClick={() => updateAttempt(current => {
              const answers = { ...current.answers };
              delete answers[id];
              return { ...current, answers };
            })}>Clear answer</button>
            <span className={styles.spacer} />
            {last
              ? <button type="button" className="button button-dark" onClick={() => setConfirming(true)}><Send size={15} /> Submit</button>
              : <button type="button" className="button button-dark" onClick={() => updateAttempt(current => ({ ...current, current: current.current + 1 }))}>Next <ArrowRight size={15} /></button>}
          </div>
        </section>
        <aside className={styles.panel} aria-label="Question palette">
          <h2 className={styles.sectionTitle}>Questions</h2>
          <div className={styles.palette}>
            {attempt.questionIds.map((questionId, index) => <button
              key={questionId}
              type="button"
              className={`${styles.cell} ${attempt.answers[questionId] !== undefined ? styles.cellAnswered : ""} ${index === attempt.current ? styles.cellCurrent : ""}`}
              aria-label={`Question ${index + 1}${attempt.answers[questionId] !== undefined ? ", answered" : ""}`}
              aria-current={index === attempt.current ? "step" : undefined}
              onClick={() => updateAttempt(current => ({ ...current, current: index }))}
            >{index + 1}</button>)}
          </div>
          <button type="button" className={`button button-dark ${styles.fullWidth}`} onClick={() => setConfirming(true)}><Send size={15} /> Submit test</button>
        </aside>
      </div>
      {confirming && <div className={styles.backdrop}>
        <div className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="confirm-title">
          <h2 id="confirm-title" className={styles.sectionTitle}>Submit the test?</h2>
          <p className={styles.muted}>{answeredCount} of {attempt.questionIds.length} answered, {attempt.questionIds.length - answeredCount} unanswered. There is no negative marking, so an unanswered question scores the same as a wrong one.</p>
          <div className={styles.actions}>
            <button type="button" className="button button-outline" onClick={() => setConfirming(false)}>Keep going</button>
            <button type="button" className="button button-dark" onClick={() => submit(attempt, clockNow())}><Send size={15} /> Submit</button>
          </div>
        </div>
      </div>}
    </main>;
  }

  // ----- Results -----
  if (view.name === "results" && attempt && result) {
    const reviewIds = attempt.questionIds.filter(id => {
      const answer = attempt.answers[id];
      if (reviewFilter === "all") return true;
      if (reviewFilter === "unanswered") return answer === undefined;
      return answer !== undefined && answer !== questionsById.get(id)?.answerIndex;
    });
    const taken = (attempt.submittedAt ?? attempt.deadline) - attempt.startedAt;
    return <main className={styles.page}>
      {header}
      <div className={`${styles.wrap} ${styles.stack}`}>
        <div>
          <span className={styles.kicker}>Mock test result</span>
          <h1 className={styles.title}>{result.score} / {result.total} ({result.percent}%)</h1>
          <p className={styles.lead}>+1 for each correct answer, no negative marking. Time taken: {formatClock(taken)} of {formatClock(paperSeconds(result.total) * 1000)}.</p>
        </div>
        <div className={styles.scoreRow}>
          <div className={styles.stat}><strong>{result.correct}</strong><span>Correct</span></div>
          <div className={styles.stat}><strong>{result.wrong}</strong><span>Wrong</span></div>
          <div className={styles.stat}><strong>{result.unanswered}</strong><span>Unanswered</span></div>
          <div className={styles.stat}><strong>{result.percent}%</strong><span>Score</span></div>
        </div>
        <section className={styles.panel} aria-labelledby="subject-scores">
          <h2 id="subject-scores" className={styles.sectionTitle}>Subject-wise scores</h2>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead><tr><th scope="col">Subject</th><th scope="col">Score</th><th scope="col">Wrong</th><th scope="col">Skipped</th><th scope="col">%</th></tr></thead>
              <tbody>{result.subjects.map(row => <tr key={row.subject}>
                <th scope="row">{lawSubject(row.subject).short}</th>
                <td>{row.correct} / {row.total}</td>
                <td>{row.wrong}</td>
                <td>{row.unanswered}</td>
                <td>{Math.round((row.correct / row.total) * 100)}</td>
              </tr>)}</tbody>
            </table>
          </div>
        </section>
        <section className={styles.panel} aria-labelledby="answer-review">
          <h2 id="answer-review" className={styles.sectionTitle}>Answer review</h2>
          <div className={styles.chips} role="group" aria-label="Show">
            {(["wrong", "unanswered", "all"] as const).map(filter => <button key={filter} type="button" className={styles.chip} aria-pressed={reviewFilter === filter} onClick={() => setReviewFilter(filter)}>
              {filter === "wrong" ? `Wrong (${result.wrong})` : filter === "unanswered" ? `Unanswered (${result.unanswered})` : `All (${result.total})`}
            </button>)}
          </div>
          {reviewIds.length === 0 ? <p className={styles.muted}>Nothing to show here.</p> : <ol className={styles.review}>
            {reviewIds.map(id => {
              const question = questionsById.get(id)!;
              const answer = attempt.answers[id];
              const right = answer === question.answerIndex;
              return <li key={id} className={`${styles.reviewItem} ${right ? styles.reviewCorrect : styles.reviewWrong}`}>
                <span className={styles.muted}>Q{attempt.questionIds.indexOf(id) + 1} · {lawSubject(question.subject).short}</span>
                <h3>{question.question}</h3>
                <p>Your answer: {answer === undefined ? "Not answered" : <span className={right ? styles.good : styles.bad}>{letters[answer]}. {question.options[answer]}</span>}</p>
                {!right && <p>Correct answer: <span className={styles.good}>{letters[question.answerIndex]}. {question.options[question.answerIndex]}</span></p>}
                <p className={styles.explanation}>{question.explanation}</p>
              </li>;
            })}
          </ol>}
        </section>
        <div className={styles.actions}>
          <button type="button" className="button button-dark" onClick={startMock}><RotateCcw size={15} /> New mock test</button>
          <button type="button" className="button button-outline" onClick={() => { setAttempt(null); setView({ name: "home" }); }}>Back to subjects</button>
        </div>
      </div>
    </main>;
  }

  // ----- Practice -----
  if (view.name === "practice" && bank) {
    const question = questionsById.get(view.order[view.index]);
    const subjectTitle = view.subject === "all" ? "All subjects" : lawSubject(view.subject).title;
    const pickDifficulty = (difficulty: LawDifficulty | "all") => startPractice(view.subject, difficulty);
    return <main className={styles.page}>
      {header}
      <div className={`${styles.wrap} ${styles.stack}`}>
        <div>
          <button type="button" className={styles.textButton} onClick={() => setView({ name: "home" })}><ArrowLeft size={14} /> All subjects</button>
          <span className={styles.kicker}>Practice · instant answers</span>
          <h1 className={styles.title}>{subjectTitle}</h1>
          <p className={styles.muted}>{view.answered ? `${view.correct} of ${view.answered} correct this session` : `${view.order.length} questions`}</p>
        </div>
        <div className={styles.chips} role="group" aria-label="Difficulty">
          {(["all", "easy", "medium", "hard"] as const).map(difficulty => <button key={difficulty} type="button" className={styles.chip} aria-pressed={view.difficulty === difficulty} onClick={() => pickDifficulty(difficulty)}>
            {difficulty === "all" ? "All levels" : difficulty[0].toUpperCase() + difficulty.slice(1)}
          </button>)}
        </div>
        {!question ? <section className={styles.panel}>
          <h2 className={styles.sectionTitle}>{view.order.length ? "Set complete" : "No questions here yet"}</h2>
          <p className={styles.muted}>{view.order.length ? `You answered ${view.correct} of ${view.answered} correctly.` : "Try another level or subject."}</p>
          {view.order.length > 0 && <div className={styles.actions}><button type="button" className="button button-dark" onClick={() => pickDifficulty(view.difficulty)}><RotateCcw size={15} /> Practise again</button></div>}
        </section> : <section className={styles.panel} aria-labelledby="practice-question">
          <div className={styles.questionMeta}>
            <span>Question {view.index + 1} of {view.order.length}</span>
            <span>{lawSubject(question.subject).short} · {question.difficulty[0].toUpperCase() + question.difficulty.slice(1)}</span>
          </div>
          <h2 id="practice-question" className={styles.questionText}>{question.question}</h2>
          <div className={styles.options} role="group" aria-label="Options">
            {question.options.map((option, index) => {
              const state = view.picked === null ? "" : index === question.answerIndex ? styles.optionCorrect : index === view.picked ? styles.optionWrong : "";
              return <button
                key={index}
                type="button"
                className={`${styles.option} ${state}`}
                disabled={view.picked !== null}
                onClick={() => setView({ ...view, picked: index, answered: view.answered + 1, correct: view.correct + (index === question.answerIndex ? 1 : 0) })}
              >
                <span className={styles.letter}>{view.picked !== null && index === question.answerIndex ? <Check size={14} aria-label="Correct answer" /> : view.picked === index ? <X size={14} aria-label="Your answer" /> : letters[index]}</span>
                <span>{option}</span>
              </button>;
            })}
          </div>
          {view.picked !== null && <div className={styles.feedback} role="status">
            <p className={view.picked === question.answerIndex ? styles.good : styles.bad}>{view.picked === question.answerIndex ? "Correct." : `Not quite. The answer is ${letters[question.answerIndex]}.`}</p>
            <p className={styles.explanation}>{question.explanation}</p>
          </div>}
          <div className={styles.actions}>
            <span className={styles.spacer} />
            <button type="button" className="button button-dark" disabled={view.picked === null} onClick={() => { setView({ ...view, index: view.index + 1, picked: null }); }}>Next <ArrowRight size={15} /></button>
          </div>
        </section>}
      </div>
    </main>;
  }

  // ----- Home: subjects and mock test -----
  const savedRunning = attempt && attempt.submittedAt === undefined;
  return <main className={styles.page}>
    {header}
    <div className={`${styles.wrap} ${styles.stack}`}>
      <div>
        <span className={styles.kicker}>Mizoram Judicial Service · Civil Judge</span>
        <h1 className={styles.title}>Law prelims practice</h1>
        <p className={styles.lead}>Free practice for the Mizoram Judicial Service (Civil Judge) Preliminary Examination, built only from the official prelims syllabus. Criminal law questions use the Bharatiya Nyaya Sanhita, Nagarik Suraksha Sanhita and Sakshya Adhiniyam, in force from 1 July 2024, with the old IPC, CrPC and Evidence Act sections noted where useful.</p>
      </div>

      <section className={`${styles.panel} ${styles.mockPanel}`} aria-labelledby="mock-title">
        <div>
          <h2 id="mock-title" className={styles.sectionTitle}><Clock size={15} /> Timed mock test</h2>
          <p className={styles.muted}>{mockLength >= MOCK_LENGTH
            ? "100 questions in 2 hours across all eleven subjects, in the syllabus proportions. +1 for each correct answer, no negative marking."
            : `The full mock is 100 questions in 2 hours. While the bank grows, the mock uses the ${published} questions published so far at the same pace (72 seconds each). No negative marking.`}</p>
        </div>
        <div className={styles.actions}>
          {savedRunning && <button type="button" className="button button-dark" onClick={() => { setNow(clockNow()); setView({ name: "mock" }); }}>Resume mock ({formatClock(attempt.deadline - now)} left)</button>}
          <button type="button" className={`button ${savedRunning ? "button-outline" : "button-dark"}`} disabled={!bank || published < MIN_MOCK_QUESTIONS} onClick={startMock}>
            {savedRunning ? "Start a new mock" : `Start mock (${mockLength} questions)`}
          </button>
        </div>
        {published < MIN_MOCK_QUESTIONS && <p className={styles.muted}>The mock test opens once at least {MIN_MOCK_QUESTIONS} questions are published.</p>}
      </section>

      {loadFailed && <p className={styles.notice} role="alert">The question bank did not load. <button type="button" className={styles.textButton} onClick={load}>Try again</button></p>}

      <section aria-labelledby="subjects-title">
        <div className={styles.subjectHead}>
          <h2 id="subjects-title" className={styles.sectionTitle}><BookOpen size={15} /> Subjects</h2>
          <button type="button" className="button button-outline" disabled={!bank || published === 0} onClick={() => startPractice("all")}>Practise all subjects</button>
        </div>
        <ul className={styles.subjectGrid}>
          {LAW_SUBJECTS.map(subject => {
            const count = counts[subject.id];
            return <li key={subject.id} className={styles.subjectCard}>
              <div className={styles.subjectTop}><Scale size={16} aria-hidden="true" /><span className={styles.count}>{count} / {subject.target} questions</span></div>
              <h3>{subject.title}</h3>
              <p className={styles.muted}>{subject.scope}</p>
              <div className={styles.meter} aria-hidden="true"><span style={{ width: `${Math.min(100, (count / subject.target) * 100)}%` }} /></div>
              <button type="button" className="button button-outline" disabled={!bank || count === 0} onClick={() => startPractice(subject.id)}>
                {count === 0 ? "Coming soon" : "Practise"}
              </button>
            </li>;
          })}
        </ul>
      </section>
      <p className={styles.muted}>Questions that depend on recent amendments or court rulings are checked by a reviewer before they appear here. Always confirm section numbers against the current bare acts.</p>
    </div>
  </main>;
}
