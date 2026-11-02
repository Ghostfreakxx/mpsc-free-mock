// Rules every Law question must meet, shared by the server bank (app/data/law-mjs-bank.ts) and the
// tests (scripts/law-bank.test.mjs). No question data here.
import { LAW_DIFFICULTIES, LAW_SUBJECTS, isLawSubjectId, type LawQuestion, type LawSubjectId, type PublishedLawQuestion } from "./syllabus.ts";

const flagKinds = ["section-unverified", "recent-amendment", "supreme-court-judgment"];
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

// Returns the problems with one question as written in a bank file; an empty list means it is valid.
export function lawQuestionProblems(value: unknown, fileSubject: LawSubjectId): string[] {
  if (!value || typeof value !== "object" || Array.isArray(value)) return ["not an object"];
  const question = value as Record<string, unknown>;
  const id = typeof question.id === "string" ? question.id : "(no id)";
  const problems: string[] = [];
  const allowed = new Set(["id", "subject", "difficulty", "question", "options", "answerIndex", "explanation", "review"]);
  for (const key of Object.keys(question)) if (!allowed.has(key)) problems.push(`unknown field ${key}`);
  if (!new RegExp(`^${fileSubject}-\\d{3}$`).test(id)) problems.push(`id must look like ${fileSubject}-001`);
  if (!isLawSubjectId(question.subject) || question.subject !== fileSubject) problems.push(`subject must be "${fileSubject}"`);
  if (!LAW_DIFFICULTIES.includes(question.difficulty as never)) problems.push("difficulty must be easy, medium or hard");
  if (typeof question.question !== "string" || question.question.trim().length < 10) problems.push("question text is missing");
  const options = question.options;
  if (!Array.isArray(options) || options.length !== 4 || !options.every(option => typeof option === "string" && option.trim())) problems.push("needs exactly 4 non-empty options");
  else if (new Set(options.map(option => option.trim().toLowerCase())).size !== 4) problems.push("options repeat");
  if (!Number.isInteger(question.answerIndex) || (question.answerIndex as number) < 0 || (question.answerIndex as number) > 3) problems.push("answerIndex must be 0–3");
  const explanation = question.explanation;
  if (typeof explanation !== "string" || explanation.trim().length < 40) problems.push("explanation is missing or too short");
  if (question.review !== undefined) {
    const review = question.review as { flags?: unknown; clearedOn?: unknown };
    if (!review || typeof review !== "object" || !Array.isArray(review.flags) || review.flags.length === 0) problems.push("review needs at least one flag");
    else for (const flag of review.flags as { kind?: unknown; note?: unknown }[]) {
      if (!flag || !flagKinds.includes(flag.kind as string) || typeof flag.note !== "string" || !flag.note.trim()) problems.push("each review flag needs a kind and a note");
    }
    if (review?.clearedOn !== undefined && (typeof review.clearedOn !== "string" || !datePattern.test(review.clearedOn))) problems.push("review.clearedOn must be YYYY-MM-DD");
  }
  return problems.map(problem => `${id}: ${problem}`);
}

// A flagged question reaches students only after a reviewer clears it.
export const isPublishable = (question: LawQuestion) => !question.review || Boolean(question.review.clearedOn);

export function publish(questions: readonly LawQuestion[]): PublishedLawQuestion[] {
  return questions.filter(isPublishable).map(({ id, subject, difficulty, question, options, answerIndex, explanation }) => ({ id, subject, difficulty, question, options, answerIndex, explanation }));
}

// Normalised prompt text, for catching repeated and near-duplicate questions.
export const promptKey = (text: string) => text.toLowerCase().replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();

export function similarity(a: string, b: string) {
  const words = (text: string) => new Set(promptKey(text).split(" ").filter(word => word.length > 2));
  const left = words(a), right = words(b);
  if (!left.size || !right.size) return 0;
  let shared = 0;
  for (const word of left) if (right.has(word)) shared += 1;
  return shared / (left.size + right.size - shared);
}

export const subjectTargets = Object.fromEntries(LAW_SUBJECTS.map(subject => [subject.id, subject.target])) as Record<LawSubjectId, number>;
