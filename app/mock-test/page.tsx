"use client";
import { getReviewedQuestions } from "../data/reviewed-content";
import QuestionSource from "../question-source";


import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Atom,
  BookMarked,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  LayoutDashboard,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import InstallAppButton from "../install-app-button";
import { useQuestionRotation } from "../lib/use-question-rotation";

const questions = getReviewedQuestions("mpsc");

const categories = ["All", ...Array.from(new Set(questions.map((q) => q.category)))];

export default function HomePage() {
  const [category, setCategory] = useState("All");
  const [responses, setResponses] = useState<Record<string, { category: string; correct: boolean }>>({});
  const [responsesReady, setResponsesReady] = useState(false);

  useEffect(() => {
    const restore = () => {
      try {
        const saved = localStorage.getItem("mpsc.practice.responses.v1");
        if (saved) {
          const parsed: unknown = JSON.parse(saved);
          if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
            const valid = Object.entries(parsed).filter(([, value]) => value && typeof value === "object" && typeof value.category === "string" && typeof value.correct === "boolean");
            setResponses(Object.fromEntries(valid));
          }
        }
      } catch {
        // Practice remains available if browser storage is unavailable.
      }
      setResponsesReady(true);
    };
    const timer = window.setTimeout(restore, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!responsesReady) return;
    try {
      localStorage.setItem("mpsc.practice.responses.v1", JSON.stringify(responses));
    } catch {
      // Keep the current practice session usable without persistence.
    }
  }, [responses, responsesReady]);

  const filteredQuestions = useMemo(() => {
    if (category === "All") return questions;
    return questions.filter((q) => q.category === category);
  }, [category]);

  const rotation = useQuestionRotation(
    filteredQuestions,
    `mpsc:${category}`,
  );
  const currentQuestion = rotation.currentQuestion;
  const selectedAnswer = rotation.selectedAnswer;

  function nextQuestion() {
    rotation.nextQuestion();
  }

  function changeCategory(cat: string) {
    setCategory(cat);
  }

  function chooseAnswer(option: string) {
    if (!currentQuestion || selectedAnswer || !currentQuestion.options.includes(option)) return;
    rotation.recordAnswer(option === currentQuestion.answer, option);
    const questionKey = `${currentQuestion.category}::${currentQuestion.question}`;
    setResponses((current) => ({
      ...current,
      [questionKey]: {
        category: currentQuestion.category,
        correct: option === currentQuestion.answer,
      },
    }));
  }

  const activeResponses = questions.map(question => responses[`${question.category}::${question.question}`]).filter(Boolean);
  const correctAnswers = activeResponses.filter((response) => response.correct).length;
  const accuracy = activeResponses.length
    ? Math.round((correctAnswers / activeResponses.length) * 100)
    : null;
  const selectedWrongExplanation =
    currentQuestion && selectedAnswer
      ? (currentQuestion.wrongExplanations as Record<string, string> | undefined)?.[
          selectedAnswer
        ]
      : undefined;
return (
  <main className="academy-shell">
    <aside className="academy-sidebar">
      <Link href="/" className="academy-brand" aria-label="MPSC Free Mock home">
        <span className="brand-mark"><GraduationCap size={22} strokeWidth={2.1} /></span>
        <span className="brand-copy"><strong>MPSC FREE MOCK</strong><small>LEARNING SPACE</small></span>
      </Link>
      <div className="sidebar-label">YOUR WORKSPACE</div>
      <nav className="sidebar-nav" aria-label="Main navigation">
        <Link href="/" className="sidebar-link"><LayoutDashboard size={18} /><span>Learning space</span><ArrowUpRight className="nav-external" size={14} /></Link>
        <Link href="/mock-test" className="sidebar-link is-active" aria-current="page"><ClipboardCheck size={18} /><span>MPSC practice</span></Link>
      </nav>
      <div className="sidebar-label sidebar-label-spaced">LEARNING RESOURCES</div>
      <nav className="sidebar-nav" aria-label="Learning resources">
        <Link href="/college-notes" className="sidebar-link"><BookMarked size={18} /><span>College notes</span></Link>
        <Link href="/downloads" className="sidebar-link"><BookMarked size={18} /><span>Download notes</span></Link>
          <Link href="/neet" className="sidebar-link"><BookOpen size={18} /><span>NEET practice</span></Link>
          <Link href="/jee" className="sidebar-link"><Atom size={18} /><span>JEE Main practice</span></Link>
          <Link href="/cuet-pg" className="sidebar-link"><GraduationCap size={18} /><span>CUET PG practice</span></Link>
      </nav>
      <div className="sidebar-spacer" />
      <div className="sidebar-help">
        <span className="help-icon"><BookOpen size={17} /></span>
        <div><strong>Keep learning freely</strong><span>Knowledge grows when shared.</span></div>
        <ArrowUpRight size={15} />
      </div>
      <div className="sidebar-profile">
        <span className="profile-avatar">M</span>
        <div><strong>Mizoram aspirant</strong><span>Independent learner</span></div>
        <span className="profile-status" title="Learning space active" />
      </div>
    </aside>

    <div className="academy-main">
      <header className="academy-topbar practice-topbar">
        <Link href="/" className="mobile-brand" aria-label="Back to learning space">
          <span className="brand-mark"><GraduationCap size={19} /></span><strong>MPSC FREE MOCK</strong>
        </Link>
        <p className="practice-breadcrumb">Practice <span>/</span> MPSC question bank</p>
        <div className="topbar-actions">
          <button
            type="button"
            className="icon-button practice-chat-trigger"
            onClick={() => window.dispatchEvent(new Event("mpsc-open-assistant"))}
            aria-label="Open MPSC study assistant"
            title="Open study assistant"
          ><MessageCircle size={18} /></button>
          <Link href="/" className="icon-button practice-back" aria-label="Back to learning space" title="Back to learning space"><ArrowLeft size={18} /></Link>
        </div>
      </header>

      <section className="academy-content practice-content">
        <div className="page-heading-row practice-heading">
          <div>
            <span className="section-kicker">MIZORAM PUBLIC SERVICE COMMISSION</span>
            <h1>MPSC practice</h1>
            <p>Source-checked foundation practice. Original questions, not official PYQs or a complete syllabus.</p>
            <Link href="/downloads#mpsc">Download MPSC notes</Link>
          </div>
          <div className="practice-heading-actions">
            <InstallAppButton />
          </div>
        </div>

        <section className="metric-row practice-metrics" aria-label="MPSC practice summary">
          <div className="metric-item"><span className="metric-icon metric-green"><BookOpen size={18} /></span><div><span className="metric-label">QUESTIONS IN THIS SET</span><strong>{filteredQuestions.length}</strong><span className="metric-note">{category === "All" ? "all MPSC topics" : category}</span></div></div>
          <div className="metric-item"><span className="metric-icon metric-coral"><ClipboardCheck size={18} /></span><div><span className="metric-label">QUESTIONS ANSWERED</span><strong>{activeResponses.length}</strong><span className="metric-note">reviewed set, on this device</span></div></div>
          <div className="metric-item"><span className="metric-icon metric-blue"><TrendingUp size={18} /></span><div><span className="metric-label">PRACTICE ACCURACY</span><strong>{accuracy === null ? "—" : `${accuracy}%`}</strong><span className="metric-note">{accuracy === null ? "Your first answer starts here" : `${correctAnswers} correct answers`}</span></div></div>
        </section>

        <section className="practice-category-panel" aria-label="Choose a MPSC practice topic">
          <div className="practice-section-heading"><div><span className="section-kicker">FOCUS YOUR SESSION</span><h2>Question bank</h2></div><span>{filteredQuestions.length} questions</span></div>
          <div className="practice-category-list">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => changeCategory(cat)}
                aria-pressed={category === cat}
                className={`practice-category-button ${category === cat ? "is-active" : ""}`}
              >{cat}</button>
            ))}
          </div>
        </section>

        <section className="practice-layout">
          <div className="content-panel practice-question-panel">
            {currentQuestion && rotation.summary ? (
              <>
                <div className="practice-question-meta">
                  <span className="section-kicker">{currentQuestion.category}</span>
                  <span className={`practice-round-label ${rotation.summary.isReview ? "is-review" : ""}`}>
                    {rotation.summary.isReview ? "Spaced review" : `Round ${rotation.summary.round}`}
                  </span>
                </div>
                <p className="practice-question-count">
                  {rotation.summary.freshRemaining} fresh {rotation.summary.freshRemaining === 1 ? "question" : "questions"} left
                  {rotation.summary.reviewsPending > 0 && ` · ${rotation.summary.reviewsPending} to review`}
                </p>
                <h2 className="practice-question-title">{currentQuestion.question}</h2>
                <div className="practice-options">
                  {currentQuestion.options?.map((option, index) => {
                    const selected = selectedAnswer === option;
                    const correct = selected && option === currentQuestion.answer;
                    const incorrect = selected && option !== currentQuestion.answer;
                    return (
                      <button
                        key={`${option}-${index}`}
                        type="button"
                        onClick={() => chooseAnswer(option)}
                        disabled={Boolean(selectedAnswer)}
                        aria-pressed={selected}
                        className={`practice-option ${correct ? "is-correct" : ""} ${incorrect ? "is-incorrect" : ""}`}
                      >
                        <span className="practice-option-letter">{String.fromCharCode(65 + index)}</span>
                        <span>{option}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="practice-question-actions">
                  <span>{rotation.summary.reviewsDue > 0 ? `${rotation.summary.reviewsDue} review${rotation.summary.reviewsDue === 1 ? "" : "s"} due` : "Missed questions return later for review"}</span>
                  <button type="button" className="button button-dark" onClick={nextQuestion}>Next question <ArrowUpRight size={15} /></button>
                </div>
              </>
            ) : (
              <div className="practice-loading" role="status">Preparing your question set…</div>
            )}
          </div>

          <aside className="content-panel practice-feedback-panel" aria-live="polite">
            <div className="practice-section-heading"><div><span className="section-kicker">LEARN FROM EACH ANSWER</span><h2>{selectedAnswer && currentQuestion ? selectedAnswer === currentQuestion.answer ? "Correct" : "Review this" : "Explanation"}</h2></div><span className="practice-feedback-mark"><BookOpen size={18} /></span></div>
            {!selectedAnswer || !currentQuestion ? (
              <p className="practice-feedback-empty">Choose an answer to see why it works and what to revisit.</p>
            ) : (
              <div className="practice-feedback-copy">
                <p className={`practice-result ${selectedAnswer === currentQuestion.answer ? "is-correct" : "is-incorrect"}`}>
                  {selectedAnswer === currentQuestion.answer ? "That’s right." : `Correct answer: ${currentQuestion.answer}`}
                </p>
                {selectedAnswer !== currentQuestion.answer && selectedWrongExplanation && <p>{selectedWrongExplanation}</p>}
                <p>{currentQuestion.explanation}</p>
                {currentQuestion.hint && <div className="practice-hint"><strong>Remember</strong><p>{currentQuestion.hint}</p></div>}
                <QuestionSource question={currentQuestion} />
              </div>
            )}
            <div className="practice-review-note"><span>{rotation.summary?.reviewsPending ?? 0}</span><p>missed questions in your spaced review queue</p></div>
          </aside>
        </section>

        <footer className="academy-footer"><span>Open learning for every MPSC aspirant.</span><span>Progress and practice are saved on this device.</span></footer>
      </section>
    </div>

    <nav className="mobile-nav practice-mobile-nav" aria-label="Learning navigation">
      <Link href="/" className="mobile-nav-link"><LayoutDashboard size={17} /><span>Learn</span></Link>
      <Link href="/mock-test" className="mobile-nav-link is-active" aria-current="page"><ClipboardCheck size={17} /><span>Practice</span></Link>
      <Link href="/neet" className="mobile-nav-link"><BookOpen size={17} /><span>NEET</span></Link>
      <Link href="/jee" className="mobile-nav-link"><Atom size={17} /><span>JEE</span></Link>
      <Link href="/cuet-pg" className="mobile-nav-link"><GraduationCap size={17} /><span>CUET PG</span></Link>
    </nav>
  </main>
);
}
