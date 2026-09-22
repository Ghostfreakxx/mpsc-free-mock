"use client";

import { useEffect, useMemo, useState } from "react";
import { pickRandom } from "../lib/shuffle";

export type MockTestQuestion = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

type MockTestProps<T extends MockTestQuestion> = {
  pool: T[];
  questionCount?: number;
  secondsPerQuestion?: number;
  onExit: () => void;
};

export default function MockTest<T extends MockTestQuestion>({
  pool,
  questionCount = 20,
  secondsPerQuestion = 45,
  onExit,
}: MockTestProps<T>) {
  const testQuestions = useMemo(
    () => pickRandom(pool, Math.min(questionCount, pool.length)),
    // Pick the test set once, when the test starts — never reshuffle mid-test.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const totalSeconds = testQuestions.length * secondsPerQuestion;
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [manuallySubmitted, setManuallySubmitted] = useState(false);
  const submitted = manuallySubmitted || secondsLeft <= 0;

  useEffect(() => {
    if (submitted) return;

    const timer = setTimeout(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft, submitted]);

  if (testQuestions.length === 0) {
    return (
      <section className="rounded-3xl border border-red-400/40 bg-red-400/10 p-6">
        <p className="text-red-200">
          No questions available for a mock test with this filter.
        </p>
        <button
          onClick={onExit}
          className="mt-4 rounded-xl border border-cyan-400 px-5 py-3 font-semibold text-cyan-300 hover:bg-cyan-400/10"
        >
          ← Back to Practice
        </button>
      </section>
    );
  }

  const score = testQuestions.reduce(
    (total, q, i) => total + (answers[i] === q.answer ? 1 : 0),
    0
  );

  if (submitted) {
    const percent = Math.round((score / testQuestions.length) * 100);

    return (
      <section className="space-y-6">
        <div className="rounded-3xl border border-cyan-400/50 bg-slate-900 p-6 text-center shadow-[0_0_25px_rgba(34,211,238,0.15)]">
          <h2 className="text-3xl font-bold text-cyan-300">Test Complete</h2>
          <p className="mt-4 text-5xl font-bold text-white">
            {score} / {testQuestions.length}
          </p>
          <p className="mt-2 text-slate-300">{percent}% correct</p>
          <button
            onClick={onExit}
            className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Back to Practice
          </button>
        </div>

        <div className="space-y-4">
          {testQuestions.map((q, i) => {
            const userAnswer = answers[i];
            const isCorrect = userAnswer === q.answer;

            return (
              <div
                key={i}
                className={`rounded-2xl border p-4 ${
                  isCorrect
                    ? "border-green-400/50 bg-green-400/10"
                    : "border-red-400/50 bg-red-400/10"
                }`}
              >
                <p className="font-semibold text-white">
                  {i + 1}. {q.question}
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Your answer:{" "}
                  <span className={isCorrect ? "text-green-400" : "text-red-400"}>
                    {userAnswer ?? "Not answered"}
                  </span>
                </p>
                {!isCorrect && (
                  <p className="text-sm text-slate-300">
                    Correct answer:{" "}
                    <span className="text-green-400">{q.answer}</span>
                  </p>
                )}
                <p className="mt-2 text-sm text-slate-400">{q.explanation}</p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  const currentQuestion = testQuestions[current];
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  function goTo(index: number) {
    setCurrent(Math.max(0, Math.min(testQuestions.length - 1, index)));
  }

  return (
    <section className="rounded-3xl border border-cyan-400/50 bg-slate-900 p-6 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-cyan-300">
          Question {current + 1} of {testQuestions.length}
        </p>
        <p
          className={`rounded-full border px-3 py-1 text-sm font-semibold ${
            secondsLeft <= 30
              ? "border-red-400 text-red-300"
              : "border-cyan-400 text-cyan-300"
          }`}
        >
          {minutes}:{seconds.toString().padStart(2, "0")}
        </p>
      </div>

      <h2 className="mt-4 text-2xl font-bold text-white">
        {currentQuestion.question}
      </h2>

      <div className="mt-6 grid gap-4">
        {currentQuestion.options.map((option) => (
          <button
            key={option}
            onClick={() =>
              setAnswers((prev) => ({ ...prev, [current]: option }))
            }
            className={`rounded-2xl border p-4 text-left transition ${
              answers[current] === option
                ? "border-cyan-400 bg-cyan-400/15"
                : "border-cyan-400/70 hover:bg-cyan-400/10"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className="rounded-xl border border-cyan-400 px-5 py-3 font-semibold text-cyan-300 hover:bg-cyan-400/10 disabled:opacity-40"
        >
          ← Previous
        </button>

        {current < testQuestions.length - 1 ? (
          <button
            onClick={() => goTo(current + 1)}
            className="rounded-xl border border-cyan-400 px-5 py-3 font-semibold text-cyan-300 hover:bg-cyan-400/10"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={() => setManuallySubmitted(true)}
            className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Submit Test
          </button>
        )}

        <button
          onClick={onExit}
          className="rounded-xl border border-red-400/60 px-5 py-3 font-semibold text-red-300 hover:bg-red-400/10"
        >
          Exit Test
        </button>
      </div>

      <p className="mt-4 text-xs text-slate-400">
        Answered {Object.keys(answers).length} of {testQuestions.length}
      </p>
    </section>
  );
}
