import type { PracticeQuestion } from "./data/practice-data";

export default function QuestionSource({ question }: { question: PracticeQuestion }) {
  return <div className="question-source">
    <strong>Source-checked original practice</strong>
    <a href={question.source.url} target="_blank" rel="noreferrer">{question.source.title}</a>
    <span>{question.sourceLocation}</span>
    <small>Checked {question.reviewedOn}. Not an official previous-year question.</small>
  </div>;
}
