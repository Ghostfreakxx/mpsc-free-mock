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

  const filteredQuestions = useMemo(() => {
    if (subject === "All") return questions;

    return questions.filter((q) => q.subject === subject);
  }, [subject]);

  const rotation = useQuestionRotation(filteredQuestions, `neet:${subject}`);
  const currentQuestion = rotation.currentQuestion;
  const selectedAnswer = rotation.selectedAnswer;

  function nextQuestion() {
    rotation.nextQuestion();
  }

  function changeSubject(newSubject: string) {
    setSubject(newSubject);
  }

  return (
    <ExamPracticeShell
      title="NEET practice"
      eyebrow="NEET UG · BIOLOGY, CHEMISTRY & PHYSICS"
      description="Practice Biology, Chemistry, and Physics with focused questions, worked explanations, and spaced review."
      activeRoute="/neet"
      totalQuestions={filteredQuestions.length}
      filters={[{ label: "Subject", value: subject, options: subjects, onChange: changeSubject }]}
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
