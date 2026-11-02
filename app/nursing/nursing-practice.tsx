"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Grid3x3, ListChecks, Play, RotateCcw, Send, Target, XCircle } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import ThemeToggle from "../theme-toggle";
import { loadQuestionBank, useQuestionBank } from "../lib/use-question-bank";
import {
  categoryId, emptyStats, formatClock, isNursingBank, mockMinutes, optionOrder, percent, readAttempt, readStats,
  recordPractice, scoreMock, seededRandom, shuffled, startMock,
} from "./nursing-logic";
import {
  DIFFICULTY_TARGET, MOCK_MINUTES, MOCK_QUESTIONS, QUESTIONS_PER_CATEGORY, nursingCategories,
  type Difficulty, type MockAttempt, type NursingCategoryId, type NursingQuestion, type PracticeStats,
} from "./types";
import styles from "./nursing.module.css";

// Storage keys: keep them unchanged so students keep their progress.
const ATTEMPT_KEY = "nursing:mock:v1";
const STATS_KEY = "nursing:practice:v1";
const BANK = "nursing";
const LETTERS = ["A", "B", "C", "D"];
const TOTAL_TARGET = QUESTIONS_PER_CATEGORY * nursingCategories.length;

type View = "home" | "practice" | "mock" | "results";
type PracticeSet = NursingCategoryId | "all" | "mistakes";
type DifficultyFilter = Difficulty | "all";
type Practice = {
  set: PracticeSet;
  difficulty: DifficultyFilter;
  queue: string[];
  position: number;
  order: number[];
  // Display position the student chose, or null before answering.
  selected: number | null;
  answered: number;
  correct: number;
};

const noQuestions: NursingQuestion[] = [];
// Event handlers read the clock through these helpers; render code never calls them.
const clockNow = () => Date.now();
const newSeed = () => Math.floor(Math.random() * 2 ** 31);

function readStorage(key: string) {
  try { return window.localStorage.getItem(key); } catch { return null; }
}
function writeStorage(key: string, value: string | null) {
  try {
    if (value === null) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, value);
  } catch { /* Practice still works without saved progress. */ }
}

const setLabel = (set: PracticeSet) =>
  set === "all" ? "All categories" : set === "mistakes" ? "My mistakes" : nursingCategories.find(category => category.id === set)!.name;

export default function NursingPractice({ counts }: { counts: Record<NursingCategoryId, number> }) {
  const bank = useQuestionBank(BANK, isNursingBank);
  const questions = bank.data ?? noQuestions;
  const byId = useMemo(() => new Map(questions.map(question => [question.id, question])), [questions]);

  const [view, setView] = useState<View>("home");
  const [stats, setStats] = useState<PracticeStats | null>(null);
  const [attempt, setAttempt] = useState<MockAttempt | null>(null);
  const [restored, setRestored] = useState(false);
  const [practice, setPractice] = useState<Practice | null>(null);
  const [difficulty, setDifficulty] = useState<DifficultyFilter>("all");
  const [now, setNow] = useState(0);
  const [confirming, setConfirming] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<"wrong" | "skipped" | "all">("wrong");
  const [starting, setStarting] = useState(false);

  // Saved practice statistics, read after mount so server and client render the same first frame.
  useEffect(() => {
    const timer = window.setTimeout(() => setStats(readStats(readStorage(STATS_KEY))), 0);
    return () => window.clearTimeout(timer);
  }, []);

  // A saved mock attempt needs the bank (to check its questions still exist), so restore it once loaded.
  useEffect(() => {
    if (!bank.data || restored) return;
    const timer = window.setTimeout(() => {
      const saved = readAttempt(readStorage(ATTEMPT_KEY), byId);
      setAttempt(saved);
      if (saved && saved.submittedAt === undefined) { setNow(clockNow()); setView("mock"); }
      setRestored(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [bank.data, byId, restored]);

  useEffect(() => {
    if (restored) writeStorage(ATTEMPT_KEY, attempt ? JSON.stringify(attempt) : null);
  }, [attempt, restored]);

  useEffect(() => {
    if (stats) writeStorage(STATS_KEY, JSON.stringify(stats));
  }, [stats]);

  const running = Boolean(attempt && attempt.submittedAt === undefined);
  useEffect(() => {
    if (!running) return;
    const interval = window.setInterval(() => setNow(clockNow()), 1000);
    return () => window.clearInterval(interval);
  }, [running]);

  const finish = useCallback((current: MockAttempt, at: number) => {
    setAttempt({ ...current, submittedAt: Math.min(at, current.deadline) });
    setConfirming(false);
    setPaletteOpen(false);
    setReviewFilter("wrong");
    setView("results");
    window.scrollTo({ top: 0 });
  }, []);

  // Submit automatically when time runs out, as the real exam does.
  useEffect(() => {
    if (attempt && attempt.submittedAt === undefined && now >= attempt.deadline) {
      const timer = window.setTimeout(() => finish(attempt, attempt.deadline), 0);
      return () => window.clearTimeout(timer);
    }
  }, [attempt, now, finish]);

  const result = useMemo(() => attempt?.submittedAt !== undefined ? scoreMock(attempt, byId) : null, [attempt, byId]);
  const mistakes = useMemo(() => (stats?.mistakes ?? []).filter(id => byId.has(id)), [stats, byId]);
  const readyTotal = Object.values(counts).reduce((sum, count) => sum + count, 0);
  const mockSize = Math.min(MOCK_QUESTIONS, questions.length || readyTotal);

  // --- Practice ---

  function practicePool(set: PracticeSet, level: DifficultyFilter) {
    const mistakeIds = new Set(mistakes);
    return questions.filter(question =>
      (set === "all" || (set === "mistakes" ? mistakeIds.has(question.id) : categoryId(question.category) === set))
      && (level === "all" || question.difficulty === level));
  }

  function startPractice(set: PracticeSet, level = difficulty) {
    const random = seededRandom(newSeed());
    const queue = shuffled(practicePool(set, level).map(question => question.id), random);
    setDifficulty(level);
    setPractice({ set, difficulty: level, queue, position: 0, order: optionOrder(random), selected: null, answered: 0, correct: 0 });
    setView("practice");
    window.scrollTo({ top: 0 });
  }

  function answerPractice(display: number) {
    if (!practice || practice.selected !== null) return;
    const question = byId.get(practice.queue[practice.position]);
    if (!question) return;
    const correct = practice.order[display] === question.answer;
    setPractice({ ...practice, selected: display, answered: practice.answered + 1, correct: practice.correct + (correct ? 1 : 0) });
    setStats(current => recordPractice(current ?? emptyStats(), question, correct));
  }

  function nextPractice() {
    if (!practice) return;
    setPractice({ ...practice, position: practice.position + 1, order: optionOrder(seededRandom(newSeed())), selected: null });
  }

  // --- Mock test ---

  async function beginMock() {
    setStarting(true);
    let pool: unknown;
    try { pool = await loadQuestionBank<unknown>(BANK); } catch { pool = null; }
    setStarting(false);
    if (!isNursingBank(pool)) { bank.retry(); return; }
    const at = clockNow();
    const fresh = startMock(pool, newSeed(), at);
    if (!fresh) return;
    setNow(at);
    setAttempt(fresh);
    setRestored(true);
    setView("mock");
    window.scrollTo({ top: 0 });
  }

  function updateAttempt(change: (current: MockAttempt) => MockAttempt) {
    if (!attempt || attempt.submittedAt !== undefined) return;
    if (clockNow() >= attempt.deadline) { finish(attempt, attempt.deadline); return; }
    setAttempt(change(attempt));
  }

  const goTo = (index: number) => {
    updateAttempt(current => ({ ...current, current: Math.max(0, Math.min(current.questionIds.length - 1, index)) }));
    setPaletteOpen(false);
  };

  // --- Screens ---

  const header = (
    <header className={styles.header}>
      <Link href="/"><ArrowLeft size={15} /> Learning space</Link>
      <span className={styles.brand}>MPSC FREE MOCK · NURSING</span>
      <ThemeToggle />
    </header>
  );

  if (bank.failed) {
    return <main className={styles.page}>{header}<div className={styles.wrap}>
      <div className={styles.panel} role="alert">
        <h1 className={styles.sectionTitle}>Questions could not load</h1>
        <p className={styles.muted}>Check your connection and try again.</p>
        <button type="button" className="button button-dark" onClick={bank.retry}><RotateCcw size={15} /> Try again</button>
      </div>
    </div></main>;
  }

  if (view === "mock" && attempt && attempt.submittedAt === undefined) {
    const index = attempt.current;
    const question = byId.get(attempt.questionIds[index]);
    const order = attempt.orders[index];
    const chosen = attempt.answers[index];
    const remaining = attempt.deadline - now;
    const answeredCount = attempt.answers.filter(answer => answer !== null).length;
    return <main className={styles.page}>
      <div className={styles.examBar}>
        <span className={styles.examName}>Nursing mock · {answeredCount}/{attempt.questionIds.length} answered</span>
        <span className={`${styles.timer} ${remaining < 5 * 60_000 ? styles.timerLow : ""}`} role="timer" aria-label="Time left">
          <Clock size={17} /> {formatClock(remaining)}
        </span>
      </div>
      <div className={styles.examLayout}>
        <section className={styles.panel} aria-live="polite">
          {question && <>
            <div className={styles.questionMeta}>
              <span>Question {index + 1} of {attempt.questionIds.length}</span>
              <span>{question.category}</span>
            </div>
            <p className={styles.questionText}>{question.question}</p>
            <div className={styles.options}>
              {order.map((bankIndex, display) => (
                <button type="button" key={bankIndex} className={styles.option} aria-pressed={chosen === bankIndex}
                  onClick={() => updateAttempt(current => ({ ...current, answers: current.answers.map((answer, at) => at === index ? bankIndex : answer) }))}>
                  <span className={styles.letter}>{LETTERS[display]}</span><span>{question.options[bankIndex]}</span>
                </button>
              ))}
            </div>
          </>}
          <div className={styles.actions}>
            <button type="button" className="button button-outline" disabled={index === 0} onClick={() => goTo(index - 1)}><ArrowLeft size={15} /> Previous</button>
            <button type="button" className="button button-outline" disabled={chosen === null}
              onClick={() => updateAttempt(current => ({ ...current, answers: current.answers.map((answer, at) => at === index ? null : answer) }))}>Clear</button>
            <span className={styles.spacer} />
            {index < attempt.questionIds.length - 1
              ? <button type="button" className="button button-dark" onClick={() => goTo(index + 1)}>Next <ArrowRight size={15} /></button>
              : <button type="button" className="button button-dark" onClick={() => setConfirming(true)}><Send size={15} /> Submit</button>}
          </div>
        </section>

        <aside className={styles.panel}>
          <button type="button" className={`button button-outline ${styles.paletteToggle}`} aria-expanded={paletteOpen} onClick={() => setPaletteOpen(open => !open)}>
            <Grid3x3 size={15} /> {paletteOpen ? "Hide" : "Show"} all questions
          </button>
          <div className={`${styles.paletteWrap} ${paletteOpen ? styles.paletteOpen : ""}`}>
            <p className={styles.muted}>Green: answered. White: not answered yet.</p>
            <div className={styles.palette}>
              {attempt.questionIds.map((id, at) => (
                <button type="button" key={id} onClick={() => goTo(at)}
                  className={`${styles.cell} ${attempt.answers[at] !== null ? styles.cellAnswered : ""} ${at === index ? styles.cellCurrent : ""}`}
                  aria-label={`Question ${at + 1}, ${attempt.answers[at] !== null ? "answered" : "not answered"}`}
                  aria-current={at === index ? "step" : undefined}>{at + 1}</button>
              ))}
            </div>
          </div>
          <button type="button" className={`button button-dark ${styles.submit}`} onClick={() => setConfirming(true)}><Send size={15} /> Submit test</button>
        </aside>
      </div>

      {confirming && <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="nursing-confirm">
        <div className={styles.dialog}>
          <h2 id="nursing-confirm" className={styles.sectionTitle}>Submit the test?</h2>
          <p className={styles.muted}>You answered {answeredCount} of {attempt.questionIds.length} questions. You have {formatClock(remaining)} left. You cannot change answers after submitting.</p>
          <div className={styles.actions}>
            <button type="button" className="button button-outline" onClick={() => setConfirming(false)}>Keep working</button>
            <button type="button" className="button button-dark" onClick={() => finish(attempt, clockNow())}><Send size={15} /> Submit</button>
          </div>
        </div>
      </div>}
    </main>;
  }

  if (view === "results" && attempt && result) {
    const minutesTaken = Math.max(1, Math.round(((attempt.submittedAt ?? attempt.deadline) - attempt.startedAt) / 60_000));
    const reviewItems = attempt.questionIds
      .map((id, index) => ({ question: byId.get(id), answer: attempt.answers[index], index }))
      .filter((item): item is { question: NursingQuestion; answer: number | null; index: number } => Boolean(item.question))
      .filter(item => reviewFilter === "all" || (reviewFilter === "skipped" ? item.answer === null : item.answer !== null && item.answer !== item.question.answer));
    return <main className={styles.page}>{header}<div className={styles.wrap}>
      <span className={styles.kicker}>Mock test result</span>
      <h1 className={styles.title}>You scored {result.correct} out of {result.total}</h1>
      <div className={styles.statGrid}>
        <div className={styles.stat}><strong>{percent(result.correct, result.total)}%</strong><span>Score</span></div>
        <div className={styles.stat}><strong>{result.attempted}</strong><span>Answered</span></div>
        <div className={styles.stat}><strong>{result.wrong}</strong><span>Wrong</span></div>
        <div className={styles.stat}><strong>{minutesTaken} min</strong><span>Time taken</span></div>
      </div>
      <p className={styles.muted}>
        With negative marking (+1 for a right answer, −⅓ for a wrong one, as in recent AIIMS NORCET papers) your score would be <strong>{result.negativeMarked}</strong>.
        Check the marking scheme in your own exam notice.
      </p>

      <section className={styles.panel}>
        <h2 className={styles.sectionTitle}>Score by category</h2>
        <ul className={styles.scoreList}>
          {result.byCategory.map(score => {
            const share = percent(score.correct, score.total);
            return <li key={score.category}>
              <span className={styles.scoreName}>{score.category}</span>
              <span className={styles.bar} aria-hidden="true"><span style={{ width: `${share}%` }} /></span>
              <strong>{score.correct}/{score.total}</strong>
            </li>;
          })}
        </ul>
      </section>

      <section className={styles.panel}>
        <div className={styles.reviewHead}>
          <h2 className={styles.sectionTitle}>Review your answers</h2>
          <div className={styles.chips}>
            {(["wrong", "skipped", "all"] as const).map(filter => (
              <button type="button" key={filter} className={styles.chip} aria-pressed={reviewFilter === filter} onClick={() => setReviewFilter(filter)}>
                {filter === "wrong" ? "Wrong" : filter === "skipped" ? "Skipped" : "All"}
              </button>
            ))}
          </div>
        </div>
        {reviewItems.length === 0 && <p className={styles.muted}>Nothing to show here.</p>}
        <ol className={styles.reviewList}>
          {reviewItems.map(({ question, answer, index }) => (
            <li key={question.id} className={styles.reviewItem}>
              <p className={styles.reviewQuestion}><span>Q{index + 1}.</span> {question.question}</p>
              <p className={styles.reviewLine}>
                {answer === null ? <span className={styles.muted}>You skipped this question.</span>
                  : answer === question.answer ? <span className={styles.right}><CheckCircle2 size={14} /> Your answer: {question.options[answer]}</span>
                  : <span className={styles.wrong}><XCircle size={14} /> Your answer: {question.options[answer]}</span>}
              </p>
              {answer !== question.answer && <p className={styles.reviewLine}><span className={styles.right}><CheckCircle2 size={14} /> Correct answer: {question.options[question.answer]}</span></p>}
              <p className={styles.explanation}>{question.explanation}</p>
              {question.reviewNote && <p className={styles.note}>Note: {question.reviewNote}</p>}
            </li>
          ))}
        </ol>
      </section>

      <div className={styles.actions}>
        <button type="button" className="button button-dark" disabled={starting} onClick={beginMock}><RotateCcw size={15} /> New mock test</button>
        <button type="button" className="button button-outline" onClick={() => setView("home")}>Back to categories</button>
      </div>
    </div></main>;
  }

  if (view === "practice" && practice) {
    const question = byId.get(practice.queue[practice.position]);
    const answered = practice.selected !== null;
    const correct = answered && question ? practice.order[practice.selected!] === question.answer : false;
    return <main className={styles.page}>{header}<div className={styles.wrap}>
      <div className={styles.practiceTop}>
        <button type="button" className="button button-outline" onClick={() => setView("home")}><ArrowLeft size={15} /> Categories</button>
        <span className={styles.muted}>{setLabel(practice.set)}{practice.difficulty === "all" ? "" : ` · ${practice.difficulty}`} · {practice.correct}/{practice.answered} correct</span>
      </div>
      {!question ? <section className={styles.panel}>
        <h1 className={styles.sectionTitle}>{practice.queue.length === 0 ? "No questions here yet" : "Set complete"}</h1>
        <p className={styles.muted}>{practice.queue.length === 0
          ? practice.set === "mistakes" ? "Questions you get wrong will appear here." : "Questions for this category are being added. Try another category."
          : `You got ${practice.correct} of ${practice.answered} right (${percent(practice.correct, practice.answered)}%).`}</p>
        <div className={styles.actions}>
          {practice.queue.length > 0 && <button type="button" className="button button-dark" onClick={() => startPractice(practice.set, practice.difficulty)}><RotateCcw size={15} /> Practise again</button>}
          <button type="button" className="button button-outline" onClick={() => setView("home")}>Back to categories</button>
        </div>
      </section> : <section className={styles.panel}>
        <div className={styles.questionMeta}>
          <span>Question {practice.position + 1} of {practice.queue.length}</span>
          <span className={styles.badge}>{question.difficulty}</span>
        </div>
        {practice.set === "all" || practice.set === "mistakes" ? <p className={styles.muted}>{question.category}</p> : null}
        <p className={styles.questionText}>{question.question}</p>
        <div className={styles.options}>
          {practice.order.map((bankIndex, display) => {
            const state = !answered ? "" : bankIndex === question.answer ? styles.optionRight : display === practice.selected ? styles.optionWrong : "";
            return <button type="button" key={bankIndex} className={`${styles.option} ${state}`} disabled={answered} aria-pressed={practice.selected === display} onClick={() => answerPractice(display)}>
              <span className={styles.letter}>{LETTERS[display]}</span><span>{question.options[bankIndex]}</span>
            </button>;
          })}
        </div>
        {answered && <div className={`${styles.feedback} ${correct ? styles.feedbackRight : styles.feedbackWrong}`} role="status">
          <strong>{correct ? <><CheckCircle2 size={16} /> Correct</> : <><XCircle size={16} /> Not quite. The answer is {LETTERS[practice.order.indexOf(question.answer)]}.</>}</strong>
          <p>{question.explanation}</p>
          {question.reviewNote && <p className={styles.note}>Note: {question.reviewNote}</p>}
        </div>}
        <div className={styles.actions}>
          <span className={styles.spacer} />
          <button type="button" className="button button-dark" disabled={!answered} onClick={nextPractice}>
            {practice.position + 1 < practice.queue.length ? <>Next question <ArrowRight size={15} /></> : <>Finish set <ArrowRight size={15} /></>}
          </button>
        </div>
      </section>}
    </div></main>;
  }

  // Home: the two modes and the category cards.
  const loading = !bank.data;
  const inProgress = attempt && attempt.submittedAt === undefined;
  return <main className={styles.page}>{header}<div className={styles.wrap}>
    <span className={styles.kicker}>Staff nurse recruitment · Mizoram H&amp;FW · AIIMS NORCET</span>
    <h1 className={styles.title}>Nursing practice</h1>
    <p className={styles.lead}>Free questions across 11 nursing subjects. Practise one subject with instant answers, or take a timed mock test of {MOCK_QUESTIONS} questions in {MOCK_MINUTES} minutes.</p>

    {inProgress && <div className={`${styles.panel} ${styles.resume}`}>
      <span>You have a mock test in progress.</span>
      <button type="button" className="button button-dark" onClick={() => { setNow(clockNow()); setView("mock"); }}><Play size={15} /> Continue test</button>
    </div>}

    <div className={styles.modeGrid}>
      <section className={styles.panel}>
        <span className={styles.modeIcon}><Clock size={20} /></span>
        <h2 className={styles.sectionTitle}>Mock test</h2>
        <p className={styles.muted}>
          {mockSize >= MOCK_QUESTIONS
            ? `${MOCK_QUESTIONS} questions from all categories in ${MOCK_MINUTES} minutes. Results show your score in each category.`
            : mockSize > 0
              ? `The question bank is still growing, so this mock has ${mockSize} questions in ${mockMinutes(mockSize)} minutes (the same pace as ${MOCK_QUESTIONS} in ${MOCK_MINUTES}).`
              : "The mock test opens when the first questions are added."}
        </p>
        <button type="button" className="button button-dark" disabled={loading || mockSize === 0 || starting || Boolean(inProgress)} onClick={beginMock}>
          <Play size={15} /> {loading ? "Loading questions…" : "Start mock test"}
        </button>
        {result && <button type="button" className={`button button-outline ${styles.secondary}`} onClick={() => setView("results")}>See last result</button>}
      </section>
      <section className={styles.panel}>
        <span className={styles.modeIcon}><Target size={20} /></span>
        <h2 className={styles.sectionTitle}>Practice</h2>
        <p className={styles.muted}>Answer at your own pace. You see the right answer and a short explanation after each question.</p>
        <div className={styles.chips} role="group" aria-label="Difficulty">
          {(["all", "easy", "medium", "hard"] as const).map(level => (
            <button type="button" key={level} className={styles.chip} aria-pressed={difficulty === level} onClick={() => setDifficulty(level)}>
              {level === "all" ? "All levels" : level[0].toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>
        <div className={styles.actions}>
          <button type="button" className="button button-dark" disabled={loading || questions.length === 0} onClick={() => startPractice("all")}><ListChecks size={15} /> All categories</button>
          <button type="button" className="button button-outline" disabled={loading || mistakes.length === 0} onClick={() => startPractice("mistakes")}>My mistakes ({mistakes.length})</button>
        </div>
      </section>
    </div>

    <h2 className={styles.gridTitle}>Categories <span>{readyTotal} of {TOTAL_TARGET} questions ready</span></h2>
    <div className={styles.categoryGrid}>
      {nursingCategories.map(category => {
        const count = counts[category.id];
        const saved = stats?.categories[category.id];
        return <article key={category.id} className={styles.card}>
          <span className={styles.cardCode}>{category.prefix.toUpperCase()}</span>
          <h3>{category.name}</h3>
          <p className={styles.count}>{count === 0 ? "Questions coming soon" : `${count} ${count === 1 ? "question" : "questions"}`}</p>
          <span className={styles.bar} aria-hidden="true"><span style={{ width: `${percent(count, QUESTIONS_PER_CATEGORY)}%` }} /></span>
          <p className={styles.muted}>{saved?.attempted ? `${percent(saved.correct, saved.attempted)}% correct over ${saved.attempted} answers` : "Not practised yet"}</p>
          <button type="button" className="button button-outline" disabled={loading || count === 0} onClick={() => startPractice(category.id)}>
            Practise <ArrowRight size={15} />
          </button>
        </article>;
      })}
    </div>
    <p className={styles.muted}>Each category will have {QUESTIONS_PER_CATEGORY} questions: {DIFFICULTY_TARGET.easy} easy, {DIFFICULTY_TARGET.medium} medium and {DIFFICULTY_TARGET.hard} hard. Questions marked with a note can differ between textbooks or guidelines; follow the source your exam names.</p>
  </div></main>;
}
