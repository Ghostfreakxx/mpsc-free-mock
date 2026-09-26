"use client";

import { useMemo, useState } from "react";
import ExamPracticeShell from "../exam-practice-shell";
import { jeeQuestions } from "../data/jeeQuestions";
import { useQuestionRotation } from "../lib/use-question-rotation";

const questions = jeeQuestions;

const subjects = ["All", ...Array.from(new Set(questions.map((question) => question.subject)))];

export default function JeePage() {
  const [subject, setSubject] = useState("All");
  const [category, setCategory] = useState("All");
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const categories = useMemo(() => {
    const source = subject === "All"
      ? questions
      : questions.filter((question) => question.subject === subject);
    return ["All", ...Array.from(new Set(source.map((question) => question.category)))];
  }, [subject]);

  const filteredQuestions = useMemo(
    () => questions.filter((question) =>
      (subject === "All" || question.subject === subject) &&
      (category === "All" || question.category === category),
    ),
    [subject, category],
  );
  const rotation = useQuestionRotation(filteredQuestions, `jee:${subject}:${category}`);
  const currentQuestion = rotation.currentQuestion;

  function changeSubject(value: string) {
    setSubject(value);
    setCategory("All");
    setSelectedAnswer("");
  }

  function changeCategory(value: string) {
    setCategory(value);
    setSelectedAnswer("");
  }

  return (
    <ExamPracticeShell
      title="JEE Main practice"
      eyebrow="JOINT ENTRANCE EXAMINATION · MAIN"
      description="Practice Physics, Chemistry, and Mathematics with topic filters, clear explanations, and spaced review."
      activeRoute="/jee"
      totalQuestions={filteredQuestions.length}
      filters={[
        { label: "Subject", value: subject, options: subjects, onChange: changeSubject },
        { label: "Topic", value: category, options: categories, onChange: changeCategory },
      ]}
      currentQuestion={currentQuestion}
      summary={rotation.summary}
      selectedAnswer={selectedAnswer}
      onSelectAnswer={(option) => {
        if (!currentQuestion) return;
        setSelectedAnswer(option);
        rotation.recordAnswer(option === currentQuestion.answer);
      }}
      onNext={() => {
        setSelectedAnswer("");
        rotation.nextQuestion();
      }}
    />
  );
}
