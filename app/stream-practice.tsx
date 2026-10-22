"use client";

import { useMemo, useState } from "react";
import ExamPracticeShell from "./exam-practice-shell";
import type { PracticeQuestion } from "./data/practice-data";
import { isQuestionList, useQuestionBank } from "./lib/use-question-bank";
import { useQuestionRotation } from "./lib/use-question-rotation";

const noQuestions: PracticeQuestion[] = [];

type Props = {
  route: "/neet" | "/jee" | "/cuet-pg";
  title: string;
  eyebrow: string;
  description: string;
};

// Saved rotations keep their original storage keys, so students' progress carries over.
// NEET stored "All topics" progress under the subject key alone.
function rotationKey(route: Props["route"], subject: string, category: string) {
  if (route === "/neet") return category === "All" ? `neet:${subject}` : `neet:${subject}:${category}`;
  return `${route.slice(1)}:${subject}:${category}`;
}

export default function StreamPractice({ route, title, eyebrow, description }: Props) {
  const bank = useQuestionBank(route.slice(1), isQuestionList<PracticeQuestion>);
  const questions = bank.data ?? noQuestions;
  const [subject, setSubject] = useState("All");
  const [category, setCategory] = useState("All");

  const subjects = useMemo(() => ["All", ...new Set(questions.map(question => question.subject))], [questions]);
  const categories = useMemo(() => {
    const source = subject === "All" ? questions : questions.filter(question => question.subject === subject);
    return ["All", ...new Set(source.map(question => question.category))];
  }, [questions, subject]);
  const filteredQuestions = useMemo(
    () => questions.filter(question => (subject === "All" || question.subject === subject) && (category === "All" || question.category === category)),
    [questions, subject, category],
  );

  const rotation = useQuestionRotation(filteredQuestions, rotationKey(route, subject, category));
  const currentQuestion = rotation.currentQuestion;
  const selectedAnswer = rotation.selectedAnswer;

  function changeSubject(value: string) {
    setSubject(value);
    setCategory("All");
  }

  return (
    <ExamPracticeShell
      title={title}
      eyebrow={eyebrow}
      description={description}
      activeRoute={route}
      totalQuestions={filteredQuestions.length}
      filters={[
        { label: "Subject", value: subject, options: subjects, onChange: changeSubject },
        { label: "Topic", value: category, options: categories, onChange: setCategory },
      ]}
      currentQuestion={currentQuestion}
      summary={rotation.summary}
      selectedAnswer={selectedAnswer}
      onSelectAnswer={option => {
        if (!currentQuestion || selectedAnswer || !currentQuestion.options.includes(option)) return;
        rotation.recordAnswer(option === currentQuestion.answer, option);
      }}
      onNext={() => rotation.nextQuestion()}
      loadState={bank.data ? "ready" : bank.failed ? "failed" : "loading"}
      onRetry={bank.retry}
    />
  );
}
