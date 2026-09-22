"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { cuetPgQuestions } from "../data/cuetPgQuestions";
import { useShuffledQuiz } from "../lib/useShuffledQuiz";
import { createQuestionKeyer } from "../lib/questionKey";
import {
  getBookmarks,
  getStats,
  recordAnswer,
  toggleBookmark,
  EMPTY_BOOKMARKS,
  EMPTY_STATS,
} from "../lib/progressStore";
import { useProgressValue } from "../lib/useProgressValue";
import ProgressPanel from "../components/ProgressPanel";
import MockTest from "../components/MockTest";

const APP_ID = "cuetpg";
const questions = cuetPgQuestions;
const questionKey = createQuestionKeyer(questions);

const subjects = [
  "All",
  ...Array.from(new Set(questions.map((q) => q.subject))),
];

export default function CuetPgPage() {
  const [subject, setSubject] = useState("All");
  const [category, setCategory] = useState("All");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [mode, setMode] = useState<"practice" | "test">("practice");
  const [bookmarkedOnly, setBookmarkedOnly] = useState(false);

  const bookmarks = useProgressValue(() => getBookmarks(APP_ID), EMPTY_BOOKMARKS);
  const stats = useProgressValue(() => getStats(APP_ID), EMPTY_STATS);

  const categories = useMemo(() => {
    const source =
      subject === "All"
        ? questions
        : questions.filter((q) => q.subject === subject);

    return ["All", ...Array.from(new Set(source.map((q) => q.category)))];
  }, [subject]);

  const baseQuestions = useMemo(() => {
    return questions.filter((q) => {
      const subjectMatch = subject === "All" || q.subject === subject;
      const categoryMatch = category === "All" || q.category === category;

      return subjectMatch && categoryMatch;
    });
  }, [subject, category]);

  const filteredQuestions = useMemo(() => {
    if (!bookmarkedOnly) return baseQuestions;
    return baseQuestions.filter((q) => bookmarks.includes(questionKey(q)));
  }, [baseQuestions, bookmarkedOnly, bookmarks]);

  const { currentQuestion, questionNumber, total, next } =
    useShuffledQuiz(filteredQuestions);
  const currentKey = questionKey(currentQuestion);
  const isBookmarked = bookmarks.includes(currentKey);

  function changeSubject(newSubject: string) {
    setSubject(newSubject);
    setCategory("All");
    setSelectedAnswer("");
  }

  function changeCategory(newCategory: string) {
    setCategory(newCategory);
    setSelectedAnswer("");
  }

  function selectAnswer(option: string) {
    if (!currentQuestion) return;
    if (!selectedAnswer) {
      recordAnswer(APP_ID, currentQuestion.category, option === currentQuestion.answer);
    }
    setSelectedAnswer(option);
  }

  function nextQuestion() {
    setSelectedAnswer("");

    if (filteredQuestions.length > 0) {
      next();
    }
  }

  function toggleBookmarkedOnly() {
    setBookmarkedOnly((prev) => !prev);
    setSelectedAnswer("");
  }

  const isCorrect =
    currentQuestion && selectedAnswer === currentQuestion.answer;

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <section className="mb-8 rounded-3xl border border-cyan-400/40 bg-slate-900 p-6 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Free Entrance Practice
          </p>

          <h1 className="mt-3 text-4xl font-bold text-cyan-300 md:text-6xl">
            🎓 CUET PG PRACTICE
          </h1>

          <p className="mt-4 max-w-4xl text-slate-300">
            Free CUET PG practice for different subjects. Choose your subject,
            choose a topic and practise MCQs with explanations and hints.
          </p>

          <div className="mt-6">
            <Link
              href="/"
              className="inline-block rounded-xl border border-cyan-400 px-5 py-3 font-semibold text-cyan-300 hover:bg-cyan-400/10"
            >
              ← Back to Home
            </Link>
          </div>
        </section>

        <ProgressPanel stats={stats} currentLabel={category} />

        {/* SUBJECT FILTER */}
        <section className="mb-6 rounded-3xl border border-cyan-400/30 bg-slate-900 p-5">
          <h2 className="text-xl font-bold text-cyan-300">
            Choose Subject
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">
            {subjects.map((item) => (
              <button
                key={item}
                onClick={() => changeSubject(item)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  subject === item
                    ? "bg-cyan-400 text-slate-950"
                    : "border-cyan-400 text-cyan-300 hover:bg-cyan-400/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {/* CATEGORY FILTER */}
        <section className="mb-6 rounded-3xl border border-cyan-400/30 bg-slate-900 p-5">
          <h2 className="text-xl font-bold text-cyan-300">
            Choose Topic
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => changeCategory(item)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  category === item
                    ? "bg-cyan-400 text-slate-950"
                    : "border-cyan-400 text-cyan-300 hover:bg-cyan-400/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
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

        {/* QUESTION AREA */}
        {mode === "test" ? (
          <MockTest pool={filteredQuestions} onExit={() => setMode("practice")} />
        ) : currentQuestion ? (
          <section className="grid gap-6 lg:grid-cols-2">
            {/* QUESTION */}
            <div className="rounded-3xl border border-cyan-400/50 bg-slate-900 p-6 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm text-cyan-300">
                  Question {questionNumber} of {total}
                </p>

                <button
                  onClick={() => toggleBookmark(APP_ID, currentKey)}
                  className={`text-xl ${isBookmarked ? "text-yellow-300" : "text-slate-500 hover:text-yellow-300"}`}
                  aria-label="Toggle bookmark"
                >
                  {isBookmarked ? "★" : "☆"}
                </button>
              </div>

              <p className="mt-2 text-sm text-slate-400">
                {currentQuestion.subject} | {currentQuestion.category}
              </p>

              <h2 className="mt-4 text-2xl font-bold text-white">
                {currentQuestion.question}
              </h2>

              <div className="mt-6 grid gap-4">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => selectAnswer(option)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      selectedAnswer === option
                        ? option === currentQuestion.answer
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
                className="mt-6 w-full rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300 sm:w-auto"
              >
                Next Question
              </button>
            </div>

            {/* EXPLANATION */}
            <div className="rounded-3xl border border-cyan-400/50 bg-slate-900 p-6 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
              <h2 className="text-3xl font-bold text-cyan-300">
                Explanation
              </h2>

              {!selectedAnswer ? (
                <p className="mt-6 text-slate-300">
                  Select an answer to view the explanation.
                </p>
              ) : (
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
                        : currentQuestion.wrongExplanations?.[
                            selectedAnswer
                          ] ??
                          "That option is not correct. Check the correct answer below."}
                    </p>
                  </div>

                  {!isCorrect && (
                    <div className="rounded-2xl border border-cyan-400/50 p-4">
                      <p className="text-cyan-300">Correct Answer:</p>

                      <p className="mt-2 text-xl font-bold text-white">
                        {currentQuestion.answer}
                      </p>

                      <p className="mt-4 text-slate-300">
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  )}

                  {currentQuestion.hint && (
                    <div className="rounded-2xl border border-yellow-400/50 bg-yellow-400/10 p-4">
                      <h3 className="font-bold text-yellow-300">
                        Elimination Method / Hint
                      </h3>

                      <p className="mt-2 text-slate-300">
                        {currentQuestion.hint}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        ) : (
          <section className="rounded-3xl border border-red-400/40 bg-red-400/10 p-6">
            <p className="text-red-200">
              No questions found for this subject and topic.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
