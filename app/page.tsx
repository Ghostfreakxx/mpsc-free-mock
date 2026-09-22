"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useShuffledQuiz } from "./lib/useShuffledQuiz";
import { mpscQuestions } from "./data/mpscQuestions";
import { createQuestionKeyer } from "./lib/questionKey";
import {
  getBookmarks,
  getStats,
  recordAnswer,
  toggleBookmark,
  EMPTY_BOOKMARKS,
  EMPTY_STATS,
} from "./lib/progressStore";
import { useProgressValue } from "./lib/useProgressValue";
import ProgressPanel from "./components/ProgressPanel";
import MockTest from "./components/MockTest";

const APP_ID = "mpsc";
const questions = mpscQuestions;
const questionKey = createQuestionKeyer(questions);

const categories = ["All", ...Array.from(new Set(questions.map((q) => q.category)))];

export default function HomePage() {
  const [category, setCategory] = useState("All");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [mode, setMode] = useState<"practice" | "test">("practice");
  const [bookmarkedOnly, setBookmarkedOnly] = useState(false);

  const bookmarks = useProgressValue(() => getBookmarks(APP_ID), EMPTY_BOOKMARKS);
  const stats = useProgressValue(() => getStats(APP_ID), EMPTY_STATS);

  const baseQuestions = useMemo(() => {
    return category === "All" ? questions : questions.filter((q) => q.category === category);
  }, [category]);

  const filteredQuestions = useMemo(() => {
    if (!bookmarkedOnly) return baseQuestions;
    return baseQuestions.filter((q) => bookmarks.includes(questionKey(q)));
  }, [baseQuestions, bookmarkedOnly, bookmarks]);

  const { currentQuestion, questionNumber, total, next } =
    useShuffledQuiz(filteredQuestions);
  const currentKey = questionKey(currentQuestion);
  const isBookmarked = bookmarks.includes(currentKey);

  function selectAnswer(option: string) {
    if (!currentQuestion) return;
    if (!selectedAnswer) {
      recordAnswer(APP_ID, currentQuestion.category, option === currentQuestion.answer);
    }
    setSelectedAnswer(option);
  }

  function nextQuestion() {
    setSelectedAnswer("");
    next();
  }

  function changeCategory(cat: string) {
    setCategory(cat);
    setSelectedAnswer("");
  }

  function toggleBookmarkedOnly() {
    setBookmarkedOnly((prev) => !prev);
    setSelectedAnswer("");
  }

return (
  <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
    <div className="mx-auto max-w-7xl">

      <section className="mb-8 rounded-3xl border border-cyan-400/40 bg-slate-900 p-6 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Mizoram Exam Practice
        </p>

        <h1 className="mt-3 text-4xl font-bold text-cyan-300 md:text-6xl">
          MPSC FREE MOCK
        </h1>

        <div className="mt-8 rounded-3xl border border-cyan-400/40 bg-slate-950/70 p-6 text-center shadow-[0_0_35px_rgba(34,211,238,0.25)]">
          <div className="animate-bounce text-4xl">📖</div>

          <p className="mt-2 text-sm text-slate-300 md:text-base">
            Don’t distribute it like a five-star dish.
          </p>

          <p className="mt-3 text-lg font-semibold italic text-cyan-300">
            That’s our motto.
          </p>
        </div>

        <p className="mt-4 max-w-3xl text-slate-300">
          MCQ-style practice questions with answers, explanations and elimination
          hints.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">

  <Link
    href="/college-notes"
    className="rounded-xl border border-cyan-400 px-5 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
  >
    📖 Open Arts College Notes
  </Link>

  <Link
    href="/daily"
    className="rounded-xl border border-cyan-400 px-5 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
  >
    🗓️ Daily Quiz
  </Link>

  <Link
    href="/neet"
    className="rounded-xl border border-cyan-400 px-5 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
  >
    🧬 NEET Science Practice
  </Link>

  <Link
    href="/jee"
    className="rounded-xl border border-cyan-400 px-5 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
  >
    🧪 JEE Practice
  </Link>

  <Link
    href="/cuet-pg"
    className="rounded-xl border border-cyan-400 px-5 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
  >
    🎓 CUET PG Practice
  </Link>

</div>
      </section>

      <ProgressPanel stats={stats} currentLabel={category} />

      <section className="mb-6 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => changeCategory(cat)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold ${
              category === cat
                ? "bg-cyan-400 text-slate-950"
                : "border-cyan-400 text-cyan-300 hover:bg-cyan-400/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      <section className="mb-6 flex flex-wrap gap-3">
        <button
          onClick={toggleBookmarkedOnly}
          className={`rounded-full border px-4 py-2 text-sm font-semibold ${
            bookmarkedOnly
              ? "bg-yellow-400 text-slate-950 border-yellow-400"
              : "border-yellow-400/60 text-yellow-300 hover:bg-yellow-400/10"
          }`}
        >
          ⭐ {bookmarkedOnly ? "Showing Bookmarked" : "Show Bookmarked Only"}
        </button>

        <button
          onClick={() => setMode(mode === "test" ? "practice" : "test")}
          className={`rounded-full border px-4 py-2 text-sm font-semibold ${
            mode === "test"
              ? "bg-cyan-400 text-slate-950 border-cyan-400"
              : "border-cyan-400 text-cyan-300 hover:bg-cyan-400/10"
          }`}
        >
          📝 {mode === "test" ? "Exit Timed Test" : "Start Timed Mock Test"}
        </button>
      </section>

      {mode === "test" ? (
        <MockTest pool={filteredQuestions} onExit={() => setMode("practice")} />
      ) : !currentQuestion ? (
        <section className="rounded-3xl border border-red-400/40 bg-red-400/10 p-6">
          <p className="text-red-200">
            No questions found. Try a different category or turn off the bookmarked filter.
          </p>
        </section>
      ) : (
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-cyan-400/50 bg-slate-900 p-6 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-cyan-300">
              Question {questionNumber} of {total} |{" "}
              {currentQuestion.category}
            </p>

            <button
              onClick={() => toggleBookmark(APP_ID, currentKey)}
              className={`text-xl ${isBookmarked ? "text-yellow-300" : "text-slate-500 hover:text-yellow-300"}`}
              aria-label="Toggle bookmark"
            >
              {isBookmarked ? "★" : "☆"}
            </button>
          </div>

          <h2 className="mt-4 text-2xl font-bold text-white">
            {currentQuestion.question}
          </h2>

          <div className="mt-6 grid gap-4">
            {currentQuestion.options?.map((option) => (
              <button
                key={option}
                onClick={() => selectAnswer(option)}
                className={`rounded-2xl border p-4 text-left transition ${
                  selectedAnswer === option
                    ? option === currentQuestion?.answer
                      ? "border-green-400 bg-green-400/15"
                      : "border-red-400 bg-red-400/15"
                    : "border-cyan-400/70 hover:bg-cyan-400/10"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <button
            onClick={nextQuestion}
            className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Next Question
          </button>
        </div>

        <div className="rounded-3xl border border-cyan-400/50 bg-slate-900 p-6 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
          <h2 className="text-3xl font-bold text-cyan-300">
            Explanation
          </h2>

          {!selectedAnswer ? (
            <p className="mt-6 text-slate-300">
              Select an answer to view the explanation.
            </p>
          ) : (
            <>
            {(() => {
              const isCorrect = selectedAnswer === currentQuestion.answer;
              return (
            <div className="mt-6 space-y-5">
              <div
                className={`rounded-2xl border p-4 ${
                  isCorrect
                    ? "border-green-400 bg-green-400/10"
                    : "border-red-400 bg-red-400/10"
                }`}
              >
                <h3
                  className={`text-xl font-bold ${
                    isCorrect ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {isCorrect ? "Correct Answer" : "Wrong Answer"}
                </h3>

                <p className="mt-3 text-slate-300">
                  {isCorrect
                    ? currentQuestion.explanation
                    : currentQuestion.wrongExplanations
                    ? currentQuestion.wrongExplanations[
                        selectedAnswer as keyof typeof currentQuestion.wrongExplanations
                      ]
                    : currentQuestion.explanation}
                </p>
              </div>

              {!isCorrect && (
                <div className="rounded-2xl border border-cyan-400/50 p-4">
                  <p className="text-cyan-300">
                    Correct Answer:
                  </p>

                  <p className="mt-2 text-xl font-bold text-white">
                    {currentQuestion.answer}
                  </p>

                  <p className="mt-4 text-slate-300">
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}

              <div className="rounded-2xl border border-yellow-400/50 bg-yellow-400/10 p-4">
                <h3 className="font-bold text-yellow-300">
                  Elimination Method / Hint
                </h3>

                <p className="mt-2 text-slate-300">
                  {currentQuestion.hint}
                </p>
              </div>
            </div>
              );
            })()}
            </>
          )}
        </div>
      </section>
      )}

    </div>
  </main>
);
}
