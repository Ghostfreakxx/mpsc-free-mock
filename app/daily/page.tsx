"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { mpscQuestions } from "../data/mpscQuestions";
import { neetQuestions } from "../data/neetQuestions";
import { jeeQuestions } from "../data/jeeQuestions";
import { cuetPgQuestions } from "../data/cuetPgQuestions";
import { pickDeterministic } from "../lib/dailySeed";
import { useTodayKey } from "../lib/useProgressValue";
import { getDailyCompletion, setDailyCompletion } from "../lib/progressStore";
import { useProgressValue } from "../lib/useProgressValue";

const QUESTIONS_PER_DAY = 5;

type DailyQuestion = {
  examLabel: string;
  topic: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  wrongExplanations?: Record<string, string>;
};

const combinedPool: DailyQuestion[] = [
  ...mpscQuestions.map((q) => ({
    examLabel: "MPSC",
    topic: q.category,
    question: q.question,
    options: q.options,
    answer: q.answer,
    explanation: q.explanation,
    wrongExplanations: q.wrongExplanations,
  })),
  ...neetQuestions.map((q) => ({
    examLabel: "NEET",
    topic: q.subject,
    question: q.question,
    options: q.options,
    answer: q.answer,
    explanation: q.explanation,
    wrongExplanations: q.wrongExplanations,
  })),
  ...jeeQuestions.map((q) => ({
    examLabel: "JEE",
    topic: `${q.subject} · ${q.category}`,
    question: q.question,
    options: q.options,
    answer: q.answer,
    explanation: q.explanation,
    wrongExplanations: q.wrongExplanations,
  })),
  ...cuetPgQuestions.map((q) => ({
    examLabel: "CUET PG",
    topic: `${q.subject} · ${q.category}`,
    question: q.question,
    options: q.options,
    answer: q.answer,
    explanation: q.explanation,
    wrongExplanations: q.wrongExplanations,
  })),
];

export default function DailyQuizPage() {
  const today = useTodayKey();
  const completion = useProgressValue(getDailyCompletion, null);

  const dailyQuestions = useMemo(
    () => (today ? pickDeterministic(combinedPool, QUESTIONS_PER_DAY, today) : []),
    [today]
  );

  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  if (today === null) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
        <div className="mx-auto max-w-3xl">
          <p className="text-slate-400">Loading today&apos;s quiz…</p>
        </div>
      </main>
    );
  }

  const alreadyDoneToday = completion?.date === today;
  const currentQuestion = dailyQuestions[index];
  const isLastQuestion = index === dailyQuestions.length - 1;
  const isCorrect = selectedAnswer === currentQuestion?.answer;

  function selectAnswer(option: string) {
    if (selectedAnswer) return;
    setSelectedAnswer(option);
    if (option === currentQuestion.answer) {
      setScore((s) => s + 1);
    }
  }

  function nextQuestion() {
    if (isLastQuestion) {
      setDailyCompletion(score, dailyQuestions.length);
      return;
    }
    setSelectedAnswer("");
    setIndex((i) => i + 1);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-3xl">
        <section className="mb-8 rounded-3xl border border-cyan-400/40 bg-slate-900 p-6 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            One Set, Every Day
          </p>

          <h1 className="mt-3 text-4xl font-bold text-cyan-300 md:text-5xl">
            🗓️ Daily Quiz
          </h1>

          <p className="mt-4 text-slate-300">
            {QUESTIONS_PER_DAY} questions pulled from MPSC, NEET, JEE and CUET
            PG — the same set for everyone today. Come back tomorrow for a
            fresh one.
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

        {alreadyDoneToday ? (
          <section className="rounded-3xl border border-green-400/50 bg-green-400/10 p-6 text-center">
            <h2 className="text-2xl font-bold text-green-300">
              You&apos;ve done today&apos;s quiz!
            </h2>
            <p className="mt-3 text-4xl font-bold text-white">
              {completion?.score} / {completion?.total}
            </p>
            <p className="mt-3 text-slate-300">
              Come back tomorrow for a brand new set of questions.
            </p>
          </section>
        ) : (
          <section className="rounded-3xl border border-cyan-400/50 bg-slate-900 p-6 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
            <p className="text-sm text-cyan-300">
              Question {index + 1} of {dailyQuestions.length} |{" "}
              {currentQuestion.examLabel} · {currentQuestion.topic}
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

            {selectedAnswer && (
              <div
                className={`mt-6 rounded-2xl border p-4 ${
                  isCorrect
                    ? "border-green-400 bg-green-400/10"
                    : "border-red-400 bg-red-400/10"
                }`}
              >
                <h3
                  className={`text-lg font-bold ${
                    isCorrect ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {isCorrect ? "Correct!" : "Not quite"}
                </h3>
                <p className="mt-2 text-slate-300">
                  {isCorrect
                    ? currentQuestion.explanation
                    : currentQuestion.wrongExplanations?.[selectedAnswer] ??
                      currentQuestion.explanation}
                </p>
                {!isCorrect && (
                  <p className="mt-2 text-sm text-slate-400">
                    Correct answer: <span className="text-green-400">{currentQuestion.answer}</span>
                  </p>
                )}
              </div>
            )}

            {selectedAnswer && (
              <button
                onClick={nextQuestion}
                className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
              >
                {isLastQuestion ? "Finish" : "Next Question"}
              </button>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
