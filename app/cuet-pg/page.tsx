"use client";

import { useMemo, useState } from "react";
import ExamPracticeShell from "../exam-practice-shell";
import { cuetPgQuestions } from "../data/cuetPgQuestions";
import { useQuestionRotation } from "../lib/use-question-rotation";

const questions = cuetPgQuestions;

const subjects = [
  "All",
  ...Array.from(new Set(questions.map((q) => q.subject))),
];

export default function CuetPgPage() {
  const [subject, setSubject] = useState("All");
  const [category, setCategory] = useState("All");
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const categories = useMemo(() => {
    const source =
      subject === "All"
        ? questions
        : questions.filter((q) => q.subject === subject);

    return ["All", ...Array.from(new Set(source.map((q) => q.category)))];
  }, [subject]);

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const subjectMatch = subject === "All" || q.subject === subject;
      const categoryMatch = category === "All" || q.category === category;

      return subjectMatch && categoryMatch;
    });
  }, [subject, category]);

  const rotation = useQuestionRotation(
    filteredQuestions,
    `cuet-pg:${subject}:${category}`,
  );
  const currentQuestion = rotation.currentQuestion;

  function changeSubject(newSubject: string) {
    setSubject(newSubject);
    setCategory("All");
    setSelectedAnswer("");
  }

  function changeCategory(newCategory: string) {
    setCategory(newCategory);
    setSelectedAnswer("");
  }

  function nextQuestion() {
    setSelectedAnswer("");

    rotation.nextQuestion();
  }

  return (
    <ExamPracticeShell
      title="CUET PG practice"
      eyebrow="COMMON UNIVERSITY ENTRANCE TEST · POSTGRADUATE"
      description="Choose a subject and topic, work through focused MCQs, and use explanations to strengthen your recall."
      activeRoute="/cuet-pg"
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
      onNext={nextQuestion}
    />
  );
}
