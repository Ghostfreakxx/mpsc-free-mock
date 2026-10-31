import { practiceKeyHash } from "../../lib/practice-key.ts";

type Question = { question: string; options: string[] };

export function readPosition(raw: string | null, duration: number): number {
  const position = Number(raw);
  return Number.isFinite(position) && position >= 0 && position <= duration + 1
    ? Math.min(position, duration) : 0;
}

export function readAnswers(raw: string | null, quiz: Question[]): Record<number, number> {
  try {
    const saved: unknown = JSON.parse(raw ?? "null");
    if (!Array.isArray(saved)) return {};
    const answers: Record<number, number> = {};
    quiz.forEach((question, index) => {
      const entry = saved.find(item => item && typeof item === "object" && item.question === question.question);
      const option = question.options.indexOf(entry?.option);
      if (option >= 0) answers[index] = option;
    });
    return answers;
  } catch { return {}; }
}

export function serializeAnswers(answers: Record<number, number>, quiz: Question[]): string {
  return JSON.stringify(quiz.flatMap((question, index) => {
    const option = question.options[answers[index]];
    return option === undefined ? [] : [{ question: question.question, option }];
  }));
}

// The class library counts saved answers without the quiz text: it receives a short hash of each
// question and option (quizFingerprint) and compares hashes of the saved entries, which gives the
// same result as readAnswers while keeping the library page's data small.
export type QuizFingerprint = { q: string; o: string[]; a: number };

export const textHash = (text: string) => practiceKeyHash(text).toString(36);

export function quizFingerprint(quiz: readonly (Question & { answer: number })[]): QuizFingerprint[] {
  return quiz.map(question => ({ q: textHash(question.question), o: question.options.map(textHash), a: question.answer }));
}

export function readAnswerFingerprints(raw: string | null, quiz: readonly QuizFingerprint[]): Record<number, number> {
  try {
    const saved: unknown = JSON.parse(raw ?? "null");
    if (!Array.isArray(saved)) return {};
    const entries = saved.filter(item => item && typeof item === "object" && typeof item.question === "string" && typeof item.option === "string")
      .map(item => ({ q: textHash(item.question), o: textHash(item.option) }));
    const answers: Record<number, number> = {};
    quiz.forEach((question, index) => {
      const entry = entries.find(item => item.q === question.q);
      const option = entry ? question.o.indexOf(entry.o) : -1;
      if (option >= 0) answers[index] = option;
    });
    return answers;
  } catch { return {}; }
}
