"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BookMarked,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  LayoutDashboard,
  MessageCircle,
  RotateCw,
} from "lucide-react";
import InstallAppButton from "./install-app-button";
import type { RotatableQuestion } from "./lib/question-rotation";

type RotationSummary = {
  round: number;
  freshRemaining: number;
  reviewsPending: number;
  reviewsDue: number;
  isReview: boolean;
};

type ExamQuestion = RotatableQuestion & {
  explanation: string;
  wrongExplanations?: object;
  hint?: string;
  options: readonly string[];
};

type FilterGroup = {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
};

type Props = {
  title: string;
  eyebrow: string;
  description: string;
  activeRoute: "/neet" | "/cuet-pg";
  totalQuestions: number;
  filters: FilterGroup[];
  currentQuestion: ExamQuestion | null;
  summary: RotationSummary | null;
  selectedAnswer: string;
  onSelectAnswer: (option: string) => void;
  onNext: () => void;
};

const navigation = [
  { href: "/", label: "Learning space", icon: LayoutDashboard },
  { href: "/mock-test", label: "MPSC practice", icon: ClipboardCheck },
  { href: "/mizo", label: "Mizo Tawng", icon: BookOpen },
  { href: "/neet", label: "NEET practice", icon: BookOpen },
  { href: "/cuet-pg", label: "CUET PG practice", icon: GraduationCap },
  { href: "/college-notes", label: "College notes", icon: BookMarked },
] as const;

export default function ExamPracticeShell({
  title,
  eyebrow,
  description,
  activeRoute,
  totalQuestions,
  filters,
  currentQuestion,
  summary,
  selectedAnswer,
  onSelectAnswer,
  onNext,
}: Props) {
  const selectedIsCorrect = Boolean(
    currentQuestion && selectedAnswer === currentQuestion.answer,
  );
  const selectedWrongExplanation = currentQuestion?.wrongExplanations as
    | Record<string, string>
    | undefined;

  return (
    <main className="academy-shell exam-practice-shell">
      <aside className="academy-sidebar">
        <Link href="/" className="academy-brand" aria-label="MPSC Free Mock home">
          <span className="brand-mark"><GraduationCap size={22} strokeWidth={2.1} /></span>
          <span className="brand-copy"><strong>MPSC FREE MOCK</strong><small>LEARNING SPACE</small></span>
        </Link>
        <div className="sidebar-label">YOUR LEARNING SPACE</div>
        <nav className="sidebar-nav" aria-label="Learning navigation">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = item.href === activeRoute;
            return (
              <Link
                href={item.href}
                className={`sidebar-link ${active ? "is-active" : ""}`}
                aria-current={active ? "page" : undefined}
                key={item.href}
              ><Icon size={18} /><span>{item.label}</span>{item.href === "/" && <ArrowUpRight className="nav-external" size={14} />}</Link>
            );
          })}
        </nav>
        <div className="sidebar-spacer" />
        <div className="sidebar-help"><span className="help-icon"><BookOpen size={17} /></span><div><strong>Keep learning freely</strong><span>Knowledge grows when shared.</span></div><ArrowUpRight size={15} /></div>
        <div className="sidebar-profile"><span className="profile-avatar">M</span><div><strong>Mizoram aspirant</strong><span>Independent learner</span></div><span className="profile-status" title="Learning space active" /></div>
      </aside>

      <div className="academy-main">
        <header className="academy-topbar practice-topbar">
          <Link href="/" className="mobile-brand" aria-label="Back to learning space">
            <span className="brand-mark"><GraduationCap size={19} /></span><strong>MPSC FREE MOCK</strong>
          </Link>
          <p className="practice-breadcrumb">Practice <span>/</span> {title}</p>
          <div className="topbar-actions">
            <button
              type="button"
              className="icon-button practice-chat-trigger"
              onClick={() => window.dispatchEvent(new Event("mpsc-open-assistant"))}
              aria-label="Open MPSC study assistant"
              title="Open study assistant"
            ><MessageCircle size={18} /></button>
            <InstallAppButton />
            <Link href="/" className="icon-button practice-back" aria-label="Back to learning space" title="Back to learning space"><ArrowLeft size={18} /></Link>
          </div>
        </header>

        <section className="academy-content practice-content">
          <div className="page-heading-row practice-heading">
            <div><span className="section-kicker">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>
            <Link href="/mock-test" className="button button-outline practice-language-link">MPSC practice <ArrowUpRight size={15} /></Link>
          </div>

          <section className="metric-row practice-metrics exam-practice-metrics" aria-label={`${title} summary`}>
            <div className="metric-item"><span className="metric-icon metric-green"><BookOpen size={18} /></span><div><span className="metric-label">QUESTIONS IN THIS SET</span><strong>{totalQuestions.toLocaleString()}</strong><span className="metric-note">selected topics</span></div></div>
            <div className="metric-item"><span className="metric-icon metric-blue"><RotateCw size={18} /></span><div><span className="metric-label">FRESH THIS ROUND</span><strong>{summary?.freshRemaining ?? totalQuestions}</strong><span className="metric-note">no repeats in a round</span></div></div>
            <div className="metric-item"><span className="metric-icon metric-coral"><ClipboardCheck size={18} /></span><div><span className="metric-label">SPACED REVIEWS</span><strong>{summary?.reviewsPending ?? 0}</strong><span className="metric-note">missed answers to revisit</span></div></div>
          </section>

          <section className="practice-category-panel exam-filter-panel" aria-label="Filter questions">
            <div className="practice-section-heading"><div><span className="section-kicker">FOCUS YOUR SESSION</span><h2>Choose {filters.length > 1 ? "subject and topic" : "subject"}</h2></div><span>{totalQuestions.toLocaleString()} questions</span></div>
            <div className="exam-filter-groups">
              {filters.map((filter) => (
                <div className="exam-filter-group" key={filter.label}>
                  <span className="exam-filter-label">{filter.label}</span>
                  <div className="practice-category-list">
                    {filter.options.map((option) => (
                      <button
                        type="button"
                        key={option}
                        onClick={() => filter.onChange(option)}
                        aria-pressed={filter.value === option}
                        className={`practice-category-button ${filter.value === option ? "is-active" : ""}`}
                      >{option}</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="practice-layout">
            <div className="content-panel practice-question-panel">
              {currentQuestion && summary ? (
                <>
                  <div className="practice-question-meta"><span className="section-kicker">{currentQuestion.subject ?? currentQuestion.category ?? title}</span><span className={`practice-round-label ${summary.isReview ? "is-review" : ""}`}>{summary.isReview ? "Spaced review" : `Round ${summary.round}`}</span></div>
                  <p className="practice-question-count">{summary.freshRemaining} fresh {summary.freshRemaining === 1 ? "question" : "questions"} left{summary.reviewsPending > 0 && ` · ${summary.reviewsPending} to review`}{currentQuestion.category && currentQuestion.subject && ` · ${currentQuestion.category}`}</p>
                  <h2 className="practice-question-title">{currentQuestion.question}</h2>
                  <div className="practice-options">
                    {currentQuestion.options.map((option, index) => {
                      const selected = selectedAnswer === option;
                      const correct = selected && option === currentQuestion.answer;
                      const incorrect = selected && option !== currentQuestion.answer;
                      return (
                        <button
                          type="button"
                          key={`${option}-${index}`}
                          onClick={() => onSelectAnswer(option)}
                          aria-pressed={selected}
                          className={`practice-option ${correct ? "is-correct" : ""} ${incorrect ? "is-incorrect" : ""}`}
                        ><span className="practice-option-letter">{String.fromCharCode(65 + index)}</span><span>{option}</span></button>
                      );
                    })}
                  </div>
                  <div className="practice-question-actions"><span>{summary.reviewsDue > 0 ? `${summary.reviewsDue} review${summary.reviewsDue === 1 ? "" : "s"} due` : "Missed questions return later for review"}</span><button type="button" className="button button-dark" onClick={onNext}>Next question <ArrowUpRight size={15} /></button></div>
                </>
              ) : (
                <div className="practice-loading" role="status">{totalQuestions ? "Preparing your question set…" : "No questions found for these filters."}</div>
              )}
            </div>

            <aside className="content-panel practice-feedback-panel" aria-live="polite">
              <div className="practice-section-heading"><div><span className="section-kicker">LEARN FROM EACH ANSWER</span><h2>{selectedAnswer ? selectedIsCorrect ? "Correct" : "Review this" : "Explanation"}</h2></div><span className="practice-feedback-mark"><CheckCircle2 size={18} /></span></div>
              {!selectedAnswer || !currentQuestion ? (
                <p className="practice-feedback-empty">Choose an answer to see why it works and what to revisit.</p>
              ) : (
                <div className="practice-feedback-copy">
                  <p className={`practice-result ${selectedIsCorrect ? "is-correct" : "is-incorrect"}`}>{selectedIsCorrect ? "That’s right." : `Correct answer: ${currentQuestion.answer}`}</p>
                  <p>{selectedIsCorrect ? currentQuestion.explanation : selectedWrongExplanation?.[selectedAnswer] ?? "That option is not correct. Check the explanation below."}</p>
                  {!selectedIsCorrect && <p>{currentQuestion.explanation}</p>}
                  {currentQuestion.hint && <div className="practice-hint"><strong>Remember</strong><p>{currentQuestion.hint}</p></div>}
                </div>
              )}
              <div className="practice-review-note"><span>{summary?.reviewsPending ?? 0}</span><p>missed questions in your spaced review queue</p></div>
            </aside>
          </section>
          <footer className="academy-footer"><span>Open learning for every student.</span><span>Progress is saved on this device.</span></footer>
        </section>
      </div>

      <nav className="mobile-nav practice-mobile-nav" aria-label="Learning navigation">
        <Link href="/" className="mobile-nav-link"><LayoutDashboard size={17} /><span>Learn</span></Link>
        <Link href="/mock-test" className="mobile-nav-link"><ClipboardCheck size={17} /><span>MPSC</span></Link>
        <Link href="/neet" className={`mobile-nav-link ${activeRoute === "/neet" ? "is-active" : ""}`} aria-current={activeRoute === "/neet" ? "page" : undefined}><BookOpen size={17} /><span>NEET</span></Link>
        <Link href="/cuet-pg" className={`mobile-nav-link ${activeRoute === "/cuet-pg" ? "is-active" : ""}`} aria-current={activeRoute === "/cuet-pg" ? "page" : undefined}><GraduationCap size={17} /><span>CUET PG</span></Link>
      </nav>
    </main>
  );
}
