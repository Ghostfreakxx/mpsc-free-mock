"use client";
import { getReviewedQuestions } from "../data/reviewed-content";


import { useMemo, useState } from "react";
import ExamPracticeShell from "../exam-practice-shell";
import { useQuestionRotation } from "../lib/use-question-rotation";

const questions = getReviewedQuestions("neet");


const subjects = [
  "All",
  ...Array.from(new Set(questions.map((q) => q.subject))),
];

export default function NeetPage() {
  const [subject, setSubject] = useState("All");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const source = subject === "All" ? questions : questions.filter((q) => q.subject === subject);
    return ["All", ...Array.from(new Set(source.map((q) => q.category)))];
  }, [subject]);

  const filteredQuestions = useMemo(
    () => questions.filter((q) =>
      (subject === "All" || q.subject === subject) &&
      (category === "All" || q.category === category),
    ),
    [subject, category],
  );

  // Keep the original per-subject key for "All" topics so saved progress carries over.
  const rotation = useQuestionRotation(filteredQuestions, category === "All" ? `neet:${subject}` : `neet:${subject}:${category}`);
  const currentQuestion = rotation.currentQuestion;
  const selectedAnswer = rotation.selectedAnswer;

  function nextQuestion() {
    rotation.nextQuestion();
  }

  function changeSubject(newSubject: string) {
    setSubject(newSubject);
    setCategory("All");
  }

  return (
    <ExamPracticeShell
      title="NEET practice"
      eyebrow="NEET UG · BIOLOGY, CHEMISTRY & PHYSICS"
      description="Practice Biology, Chemistry, and Physics with focused questions, worked explanations, and spaced review."
      activeRoute="/neet"
      totalQuestions={filteredQuestions.length}
      filters={[
        { label: "Subject", value: subject, options: subjects, onChange: changeSubject },
        { label: "Topic", value: category, options: categories, onChange: setCategory },
      ]}
      currentQuestion={currentQuestion}
      summary={rotation.summary}
      selectedAnswer={selectedAnswer}
      onSelectAnswer={(option) => {
        if (!currentQuestion || selectedAnswer || !currentQuestion.options.includes(option)) return;
        rotation.recordAnswer(option === currentQuestion.answer, option);
      }}
      onNext={nextQuestion}
    />
  );
}
