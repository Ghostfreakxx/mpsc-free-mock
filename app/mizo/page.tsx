"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BookMarked,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  LayoutDashboard,
} from "lucide-react";
import { useMemo, useState } from "react";
import InstallAppButton from "../install-app-button";
import { mizoQuestions } from "../data/mizoQuestions";
import { useQuestionRotation } from "../lib/use-question-rotation";

const alphabet = [
  "A", "AW", "B", "CH", "D", "E", "F", "G", "NG", "H", "I", "J", "K",
  "L", "M", "N", "O", "P", "R", "S", "T", "Ṭ", "U", "V", "Z",
];
const vowels = new Set(["A", "AW", "E", "I", "O", "U"]);
const categories = ["All", ...new Set(mizoQuestions.map((question) => question.category))];

export default function MizoPage() {
  const [category, setCategory] = useState("All");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const filteredQuestions = useMemo(
    () => mizoQuestions.filter((question) => category === "All" || question.category === category),
    [category],
  );
  const rotation = useQuestionRotation(filteredQuestions, `mizo:${category}`);
  const currentQuestion = rotation.currentQuestion;
  const correct = Boolean(currentQuestion && selectedAnswer === currentQuestion.answer);

  function chooseCategory(nextCategory: string) {
    setCategory(nextCategory);
    setSelectedAnswer("");
  }

  function nextQuestion() {
    setSelectedAnswer("");
    rotation.nextQuestion();
  }

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
          <Link href="/mock-test" className="sidebar-link"><ClipboardCheck size={18} /><span>MPSC practice</span></Link>
        </nav>
        <div className="sidebar-label sidebar-label-spaced">LEARNING RESOURCES</div>
        <nav className="sidebar-nav" aria-label="Learning resources">
          <Link href="/college-notes" className="sidebar-link"><BookMarked size={18} /><span>College notes</span></Link>
          <Link href="/mizo" className="sidebar-link is-active" aria-current="page"><BookOpen size={18} /><span>Mizo Tawng</span></Link>
          <Link href="/neet" className="sidebar-link"><BookOpen size={18} /><span>NEET practice</span></Link>
          <Link href="/cuet-pg" className="sidebar-link"><GraduationCap size={18} /><span>CUET PG practice</span></Link>
        </nav>
        <div className="sidebar-spacer" />
        <div className="sidebar-help"><span className="help-icon"><BookOpen size={17} /></span><div><strong>Open learning</strong><span>Knowledge grows when shared.</span></div><ArrowUpRight size={15} /></div>
        <div className="sidebar-profile"><span className="profile-avatar">M</span><div><strong>Mizoram learner</strong><span>Independent learner</span></div><span className="profile-status" title="Learning space active" /></div>
      </aside>

      <div className="academy-main">
        <header className="academy-topbar practice-topbar">
          <Link href="/" className="mobile-brand" aria-label="Back to learning space"><span className="brand-mark"><GraduationCap size={19} /></span><strong>MPSC FREE MOCK</strong></Link>
          <p className="practice-breadcrumb">Learning resources <span>/</span> Mizo Tawng</p>
          <div className="topbar-actions"><InstallAppButton /><Link href="/" className="icon-button practice-back" aria-label="Back to learning space" title="Back to learning space"><ArrowLeft size={18} /></Link></div>
        </header>

        <section className="academy-content practice-content mizo-content">
          <div className="page-heading-row practice-heading">
            <div><span className="section-kicker">MIZO TAWNG ZIRNA <span aria-hidden="true">·</span> MIZO LANGUAGE</span><h1>Mizo alphabet</h1><p>Begin with A, AW, B: explore the letter units, vowel set, sounds, and examples.</p></div>
            <a href="#mizo-practice" className="button button-dark mizo-practice-cta"><span>Zir zui rawh</span><span aria-hidden="true">·</span><span>Go to practice</span><ArrowUpRight size={15} /></a>
          </div>

          <section className="metric-row practice-metrics" aria-label="Mizo alphabet summary">
            <div className="metric-item"><span className="metric-icon metric-green"><BookOpen size={18} /></span><div><span className="metric-label">LETTER UNITS</span><strong>25</strong><span className="metric-note">including AW, CH, NG</span></div></div>
            <div className="metric-item"><span className="metric-icon metric-coral"><span className="mizo-metric-letter">A</span></span><div><span className="metric-label">VOWELS</span><strong>6</strong><span className="metric-note">A · AW · E · I · O · U</span></div></div>
            <div className="metric-item"><span className="metric-icon metric-blue"><span className="mizo-metric-letter">AW</span></span><div><span className="metric-label">COMBINED UNITS</span><strong>3</strong><span className="metric-note">AW · CH · NG</span></div></div>
          </section>

          <section className="content-panel mizo-alphabet-panel">
            <div className="practice-section-heading"><div><span className="section-kicker">A, AW, B</span><h2>Capital and small letters</h2></div><span>Vowels are marked in green</span></div>
            <div className="mizo-alphabet-grid">
              {alphabet.map((letter) => (
                <div className={`mizo-letter-tile ${vowels.has(letter) ? "is-vowel" : ""}`} key={letter}>
                  <strong>{letter}</strong><span>{letter.toLowerCase()}</span>
                </div>
              ))}
            </div>
            <p className="mizo-vowel-line"><strong>Vowels / Vowel-te</strong><span>A · AW · E · I · O · U</span></p>
          </section>

          <section className="mizo-notes-grid">
            <div className="content-panel mizo-note-panel">
              <span className="section-kicker">SOUND GUIDE</span>
              <h2>Three combinations to notice</h2>
              <dl className="mizo-sound-list">
                <div><dt>AW</dt><dd>Approximated by the English O sound in the supplied lesson; Aizawl is informally rendered as “Aizol” to illustrate it.</dd></div>
                <div><dt>CH</dt><dd>Compared with the opening sound in the English word “chop”.</dd></div>
                <div><dt>NG</dt><dd>A combined alphabet unit. Listen to a fluent speaker for its sound in each word.</dd></div>
              </dl>
            </div>
            <div className="content-panel mizo-note-panel">
              <span className="section-kicker">WORD EXAMPLES</span>
              <h2>Letters in familiar words</h2>
              <dl className="mizo-word-list">
                <div><dt>A · Arpa</dt><dd>Rooster / cock</dd></div>
                <div><dt>AW · Awle</dt><dd>Crocodile</dd></div>
              </dl>
              <p className="mizo-source-note">Pronunciation is best learned alongside local speakers and audio.</p>
            </div>
          </section>

          <section className="practice-category-panel mizo-quiz-panel" id="mizo-practice" aria-label="Mizo alphabet practice">
            <div className="practice-section-heading"><div><span className="section-kicker">ZIR ZUI RAWH <span aria-hidden="true">·</span> PRACTICE</span><h2>Check your recall</h2></div><span>{filteredQuestions.length} questions</span></div>
            <div className="practice-category-list">
              {categories.map((item) => <button type="button" key={item} onClick={() => chooseCategory(item)} aria-pressed={category === item} className={`practice-category-button ${category === item ? "is-active" : ""}`}>{item}</button>)}
            </div>
          </section>

          <section className="practice-layout">
            <div className="content-panel practice-question-panel">
              {currentQuestion && rotation.summary ? (
                <>
                  <div className="practice-question-meta"><span className="section-kicker">{currentQuestion.category}</span><span className={`practice-round-label ${rotation.summary.isReview ? "is-review" : ""}`}>{rotation.summary.isReview ? "Spaced review" : `Round ${rotation.summary.round}`}</span></div>
                  <p className="practice-question-count">{rotation.summary.freshRemaining} fresh {rotation.summary.freshRemaining === 1 ? "question" : "questions"} left</p>
                  <h2 className="practice-question-title">{currentQuestion.question}</h2>
                  <div className="practice-options">
                    {currentQuestion.options?.map((option, index) => (
                      <button type="button" key={`${option}-${index}`} onClick={() => { setSelectedAnswer(option); rotation.recordAnswer(option === currentQuestion.answer); }} aria-pressed={selectedAnswer === option} className={`practice-option ${selectedAnswer === option && correct ? "is-correct" : ""} ${selectedAnswer === option && !correct ? "is-incorrect" : ""}`}>
                        <span className="practice-option-letter">{String.fromCharCode(65 + index)}</span><span>{option}</span>
                      </button>
                    ))}
                  </div>
                  <div className="practice-question-actions"><span>{rotation.summary.reviewsDue > 0 ? `${rotation.summary.reviewsDue} reviews due` : "Missed answers return later"}</span><button type="button" className="button button-dark" onClick={nextQuestion}>Next question <ArrowUpRight size={15} /></button></div>
                </>
              ) : <div className="practice-loading" role="status">Preparing your question set…</div>}
            </div>
            <aside className="content-panel practice-feedback-panel" aria-live="polite">
              <div className="practice-section-heading"><div><span className="section-kicker">LEARN AS YOU GO</span><h2>{selectedAnswer ? correct ? "Correct" : "Review this" : "Explanation"}</h2></div><span className="practice-feedback-mark"><BookOpen size={18} /></span></div>
              {!selectedAnswer || !currentQuestion ? <p className="practice-feedback-empty">Choose an answer to see its explanation.</p> : <div className="practice-feedback-copy"><p className={`practice-result ${correct ? "is-correct" : "is-incorrect"}`}>{correct ? "That’s right." : `Correct answer: ${currentQuestion.answer}`}</p><p>{currentQuestion.explanation}</p>{currentQuestion.hint && <div className="practice-hint"><strong>Remember</strong><p>{currentQuestion.hint}</p></div>}</div>}
              <div className="practice-review-note"><span>{rotation.summary?.reviewsPending ?? 0}</span><p>missed questions in your review queue</p></div>
            </aside>
          </section>
          <footer className="academy-footer"><span>Zirna chu mi zawng zawng ta a ni.</span><span>Learning belongs to everyone.</span></footer>
        </section>
      </div>

      <nav className="mobile-nav practice-mobile-nav" aria-label="Learning navigation">
        <Link href="/" className="mobile-nav-link"><LayoutDashboard size={17} /><span>Learn</span></Link>
        <Link href="/mock-test" className="mobile-nav-link"><ClipboardCheck size={17} /><span>MPSC</span></Link>
        <Link href="/mizo" className="mobile-nav-link is-active" aria-current="page"><BookOpen size={17} /><span>Mizo</span></Link>
        <Link href="/neet" className="mobile-nav-link"><GraduationCap size={17} /><span>NEET</span></Link>
      </nav>
    </main>
  );
}
