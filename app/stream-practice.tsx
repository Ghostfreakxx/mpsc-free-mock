"use client";

import { useMemo, useState } from "react";
import ExamPracticeShell from "./exam-practice-shell";
import type { PracticeQuestion } from "./data/practice-data";
import { MISTAKES_TOPIC, weakestTopic } from "./lib/practice-progress";
import { isQuestionList, useQuestionBank } from "./lib/use-question-bank";
import { usePracticeProgress } from "./lib/use-practice-progress";
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
  const exam = route.slice(1);
  const bank = useQuestionBank(exam, isQuestionList<PracticeQuestion>);
  const progress = usePracticeProgress(exam);
  const questions = bank.data ?? noQuestions;
  const [subject, setSubject] = useState("All");
  const [category, setCategory] = useState("All");
  const reviewingMistakes = category === MISTAKES_TOPIC;
  const { mistakeIds } = progress;

  const subjects = useMemo(() => ["All", ...new Set(questions.map(question => question.subject))], [questions]);
  const subjectQuestions = useMemo(
    () => subject === "All" ? questions : questions.filter(question => question.subject === subject),
    [questions, subject],
  );
  const topics = useMemo(() => [...new Set(subjectQuestions.map(question => question.category))], [subjectQuestions]);
  const mistakesHere = useMemo(() => subjectQuestions.filter(question => mistakeIds.has(question.id)).length, [subjectQuestions, mistakeIds]);
  const categories = useMemo(
    () => ["All", ...(mistakesHere || reviewingMistakes ? [MISTAKES_TOPIC] : []), ...topics],
    [topics, mistakesHere, reviewingMistakes],
  );
  const filteredQuestions = useMemo(
    () => subjectQuestions.filter(question => reviewingMistakes ? mistakeIds.has(question.id) : category === "All" || question.category === category),
    [subjectQuestions, reviewingMistakes, mistakeIds, category],
  );

  const rotation = useQuestionRotation(filteredQuestions, rotationKey(route, subject, category));
  const { currentQuestion, presentation, selectedAnswer, summary } = rotation;
  const displayQuestion = useMemo(
    () => currentQuestion && presentation ? { ...currentQuestion, question: presentation.question, options: presentation.options, answer: presentation.answer, explanation: presentation.explanation } : null,
    [currentQuestion, presentation],
  );

  // When a round ends, point the student at the topic that needs them most.
  const roundJustEnded = Boolean(summary && !reviewingMistakes && summary.round > 1 && !summary.isReview && summary.freshRemaining === filteredQuestions.length);
  const suggestion = roundJustEnded ? weakestTopic(progress.topics, topics, category) : null;

  function changeSubject(value: string) {
    progress.refresh();
    setSubject(value);
    setCategory("All");
  }

  function changeCategory(value: string) {
    progress.refresh();
    setCategory(value);
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
        { label: "Topic", value: category, options: categories, onChange: changeCategory, labels: { [MISTAKES_TOPIC]: `${MISTAKES_TOPIC} (${mistakesHere})` } },
      ]}
      currentQuestion={displayQuestion}
      freshNumbers={Boolean(presentation?.variant)}
      summary={summary}
      selectedAnswer={selectedAnswer}
      onSelectAnswer={option => {
        if (!currentQuestion || !presentation || selectedAnswer || !presentation.options.includes(option)) return;
        const correct = option === presentation.answer;
        rotation.recordAnswer(correct, option);
        progress.record(currentQuestion, correct);
      }}
      onNext={() => {
        progress.refresh();
        rotation.nextQuestion();
      }}
      roundNotice={roundJustEnded ? { round: summary!.round - 1, suggestion, onChoose: changeCategory } : undefined}
      emptyMessage={reviewingMistakes ? "No mistakes left here. Questions you miss will appear in this set automatically." : undefined}
      loadState={bank.data ? "ready" : bank.failed ? "failed" : "loading"}
      onRetry={bank.retry}
    />
  );
}
