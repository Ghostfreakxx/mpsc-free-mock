import { sources, type ReviewedQuestion } from "./data/reviewed-content";

export default function QuestionSource({ question }: { question: ReviewedQuestion }) {
  const source = sources[question.sourceId];
  return <div className="question-source">
    <strong>Source-checked original practice</strong>
    <a href={source.url} target="_blank" rel="noreferrer">{source.title}</a>
    <span>{question.sourceLocation}</span>
    <small>Checked {question.reviewedOn}. Not an official previous-year question.</small>
  </div>;
}
