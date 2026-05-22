"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const questions = [
  {
    category: "ICT",
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Print Unit",
      "Control Program Unit",
    ],
    answer: "Central Processing Unit",
    explanation:
      "CPU means Central Processing Unit. It is called the brain of the computer because it processes instructions and controls the main operations of the system.",
    wrongExplanations: {
      "Computer Power Unit":
        "Wrong. CPU is not related to power supply. Power is supplied by SMPS or battery, not CPU.",
      "Central Print Unit":
        "Wrong. Printing is related to printer devices, not the CPU.",
      "Control Program Unit":
        "Wrong. It sounds technical, but it is not the correct expansion of CPU.",
    },
    hint: "Use elimination. Remove options that sound unrelated to computer processing.",
  },
  {
    category: "Mizoram GK",
    question: "What is the capital of Mizoram?",
    options: ["Silchar", "Aizawl", "Shillong", "Imphal"],
    answer: "Aizawl",
    explanation:
      "Aizawl is the capital city of Mizoram. It is the political, administrative and educational centre of the state.",
    wrongExplanations: {
      Silchar: "Wrong. Silchar is in Assam.",
      Shillong: "Wrong. Shillong is the capital of Meghalaya.",
      Imphal: "Wrong. Imphal is the capital of Manipur.",
    },
    hint: "Remember Mizoram’s capital is located in the central part of the state.",
  },
  {
    category: "Indian Polity",
    question: "Who is known as the Father of the Indian Constitution?",
    options: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Dr. B. R. Ambedkar",
      "Sardar Patel",
    ],
    answer: "Dr. B. R. Ambedkar",
    explanation:
      "Dr. B. R. Ambedkar is known as the Father of the Indian Constitution because he served as the Chairman of the Drafting Committee.",
    wrongExplanations: {
      "Mahatma Gandhi":
        "Wrong. Gandhi led the freedom movement but did not draft the Constitution.",
      "Jawaharlal Nehru":
        "Wrong. Nehru was important in national politics but was not Chairman of the Drafting Committee.",
      "Sardar Patel":
        "Wrong. Patel helped integrate princely states but is not called Father of the Constitution.",
    },
    hint: "Look for the person connected with the Drafting Committee.",
  },
  {
    category: "History",
    question: "The Mizoram Peace Accord was signed in which year?",
    options: ["1972", "1986", "1987", "1991"],
    answer: "1986",
    explanation:
      "The Mizoram Peace Accord was signed on 30 June 1986 between the Government of India and the Mizo National Front.",
    wrongExplanations: {
      "1972": "Wrong. Mizoram became a Union Territory in 1972.",
      "1987": "Wrong. Mizoram became a full state in 1987.",
      "1991": "Wrong. This is not related to the Peace Accord.",
    },
    hint: "Peace Accord first, statehood after that.",
  },
  {
    category: "Geography",
    question: "Mizoram is mainly known for which type of terrain?",
    options: ["Desert", "Coastal plain", "Hilly terrain", "Large plateau"],
    answer: "Hilly terrain",
    explanation:
      "Mizoram is a hilly state. Its physical geography is dominated by hills, valleys, forests and rivers.",
    wrongExplanations: {
      Desert: "Wrong. Mizoram is not a desert region.",
      "Coastal plain": "Wrong. Mizoram has no sea coast.",
      "Large plateau": "Wrong. Mizoram is mainly hilly, not a large plateau.",
    },
    hint: "Think of Mizoram’s roads, slopes and mountains.",
  },
  {
    category: "Economics",
    question: "Inflation means:",
    options: [
      "Fall in prices",
      "Rise in general price level",
      "Increase in rainfall",
      "Decrease in population",
    ],
    answer: "Rise in general price level",
    explanation:
      "Inflation means a continuous rise in the general price level. It reduces the purchasing power of money.",
    wrongExplanations: {
      "Fall in prices": "Wrong. Fall in prices is called deflation.",
      "Increase in rainfall": "Wrong. Rainfall is a geographical concept.",
      "Decrease in population": "Wrong. This is demographic change, not inflation.",
    },
    hint: "Think of market prices becoming expensive.",
  },
];

const categories = ["All", ...Array.from(new Set(questions.map((q) => q.category)))];

export default function HomePage() {
  const [category, setCategory] = useState("All");
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const filteredQuestions = useMemo(() => {
    if (category === "All") return questions;
    return questions.filter((q) => q.category === category);
  }, [category]);

  const currentQuestion = filteredQuestions[index % filteredQuestions.length];

  function nextQuestion() {
    setSelectedAnswer("");
    setIndex((prev) => (prev + 1) % filteredQuestions.length);
  }

  function changeCategory(cat: string) {
    setCategory(cat);
    setIndex(0);
    setSelectedAnswer("");
  }

  const isCorrect = selectedAnswer === currentQuestion.answer;

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

          <p className="mt-4 max-w-3xl text-slate-300">
            MCQ-style practice questions with correct explanation, wrong answer
            explanation, elimination method and hints for Mizoram students.
          </p>

          <div className="mt-6">
            <Link
              href="/college-notes"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Open Arts College Notes
            </Link>
          </div>
        </section>

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

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/50 bg-slate-900 p-6 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
            <p className="text-sm text-cyan-300">
              Question {index + 1} of {filteredQuestions.length} |{" "}
              {currentQuestion.category}
            </p>

            <h2 className="mt-4 text-2xl font-bold text-white">
              {currentQuestion.question}
            </h2>

            <div className="mt-6 grid gap-4">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedAnswer(option)}
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
              className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Next Question
            </button>
          </div>

          <div className="rounded-3xl border border-cyan-400/50 bg-slate-900 p-6 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
            <h2 className="text-3xl font-bold text-cyan-300">Explanation</h2>

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
                      : currentQuestion.wrongExplanations[
                          selectedAnswer as keyof typeof currentQuestion.wrongExplanations
                        ]}
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

                <div className="rounded-2xl border border-yellow-400/50 bg-yellow-400/10 p-4">
                  <h3 className="font-bold text-yellow-300">
                    Elimination Method / Hint
                  </h3>
                  <p className="mt-2 text-slate-300">{currentQuestion.hint}</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}