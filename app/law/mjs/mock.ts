// Pure helpers for the Law mock test and practice. No bank imports: the browser loads this file.
import { LAW_DIFFICULTIES, LAW_SUBJECTS, MOCK_LENGTH, MOCK_SECONDS_PER_QUESTION, isLawSubjectId, type LawSubjectId, type PublishedLawQuestion } from "./syllabus.ts";

// Small seeded generator so a paper can be rebuilt from its seed in tests.
export function seededRandom(seed: number) {
  let value = seed >>> 0;
  return () => {
    value = (value + 0x6d2b79f5) >>> 0;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle<T>(values: readonly T[], random: () => number): T[] {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// How many questions each subject gets in a paper of `length`: the blueprint's shares, scaled for a
// shorter paper, capped by what the bank holds, with any shortfall moved to subjects with spare questions.
export function allocate(available: Partial<Record<LawSubjectId, number>>, length = MOCK_LENGTH): Record<LawSubjectId, number> {
  const total = Math.min(length, LAW_SUBJECTS.reduce((sum, subject) => sum + (available[subject.id] ?? 0), 0));
  const shareSum = LAW_SUBJECTS.reduce((sum, subject) => sum + subject.mockShare, 0);
  const allocation = Object.fromEntries(LAW_SUBJECTS.map(subject => [subject.id, 0])) as Record<LawSubjectId, number>;
  let placed = 0;
  for (const subject of LAW_SUBJECTS) {
    const want = Math.floor((total * subject.mockShare) / shareSum);
    allocation[subject.id] = Math.min(available[subject.id] ?? 0, want);
    placed += allocation[subject.id];
  }
  // Hand out the rest one at a time, in syllabus order, to subjects that still have questions.
  while (placed < total) {
    let progressed = false;
    for (const subject of LAW_SUBJECTS) {
      if (placed >= total) break;
      if (allocation[subject.id] < (available[subject.id] ?? 0)) {
        allocation[subject.id] += 1;
        placed += 1;
        progressed = true;
      }
    }
    if (!progressed) break;
  }
  return allocation;
}

// A paper ordered subject by subject, as the syllabus lists them, with questions shuffled within each.
export function buildPaper(pool: readonly PublishedLawQuestion[], seed: number, length = MOCK_LENGTH): string[] {
  const random = seededRandom(seed);
  const bySubject = new Map<LawSubjectId, PublishedLawQuestion[]>();
  for (const question of pool) bySubject.set(question.subject, [...(bySubject.get(question.subject) ?? []), question]);
  const available = Object.fromEntries([...bySubject].map(([id, questions]) => [id, questions.length]));
  const allocation = allocate(available, length);
  return LAW_SUBJECTS.flatMap(subject => shuffle(bySubject.get(subject.id) ?? [], random).slice(0, allocation[subject.id]).map(question => question.id));
}

// Two hours for 100 questions; a shorter paper (while the bank is still growing) keeps the same pace.
export const paperSeconds = (length: number) => Math.round(length * MOCK_SECONDS_PER_QUESTION);

export type MockAttempt = {
  version: 1;
  questionIds: string[];
  answers: Record<string, number>; // question id -> chosen option index
  current: number;
  startedAt: number;
  deadline: number;
  submittedAt?: number;
};

export type SubjectScore = { subject: LawSubjectId; total: number; correct: number; wrong: number; unanswered: number };
export type MockResult = { total: number; correct: number; wrong: number; unanswered: number; score: number; percent: number; subjects: SubjectScore[] };

// +1 for each correct answer; wrong and unanswered questions score 0 (no negative marking).
export function scoreAttempt(attempt: Pick<MockAttempt, "questionIds" | "answers">, questionsById: ReadonlyMap<string, PublishedLawQuestion>): MockResult {
  const subjects = new Map<LawSubjectId, SubjectScore>();
  for (const id of attempt.questionIds) {
    const question = questionsById.get(id);
    if (!question) continue;
    const row = subjects.get(question.subject) ?? { subject: question.subject, total: 0, correct: 0, wrong: 0, unanswered: 0 };
    const answer = attempt.answers[id];
    row.total += 1;
    if (answer === undefined) row.unanswered += 1;
    else if (answer === question.answerIndex) row.correct += 1;
    else row.wrong += 1;
    subjects.set(question.subject, row);
  }
  const rows = LAW_SUBJECTS.map(subject => subjects.get(subject.id)).filter((row): row is SubjectScore => Boolean(row));
  const sum = (key: "total" | "correct" | "wrong" | "unanswered") => rows.reduce((total, row) => total + row[key], 0);
  const total = sum("total");
  const correct = sum("correct");
  return { total, correct, wrong: sum("wrong"), unanswered: sum("unanswered"), score: correct, percent: total ? Math.round((correct / total) * 1000) / 10 : 0, subjects: rows };
}

// A saved attempt comes back from localStorage, which can be corrupt or edited: accept it only if
// every field has the right shape and every question still exists in the bank.
export function restoreAttempt(serialized: string | null, questionsById: ReadonlyMap<string, PublishedLawQuestion>): MockAttempt | null {
  if (!serialized || serialized.length > 50_000) return null;
  let value: unknown;
  try { value = JSON.parse(serialized); } catch { return null; }
  if (!value || typeof value !== "object") return null;
  const saved = value as Partial<MockAttempt>;
  const ids = saved.questionIds;
  if (saved.version !== 1 || !Array.isArray(ids) || ids.length === 0 || ids.length > MOCK_LENGTH) return null;
  if (!ids.every(id => typeof id === "string" && questionsById.has(id)) || new Set(ids).size !== ids.length) return null;
  const finite = (number: unknown): number is number => typeof number === "number" && Number.isFinite(number);
  if (!finite(saved.startedAt) || !finite(saved.deadline) || saved.deadline <= saved.startedAt) return null;
  if (saved.deadline - saved.startedAt > paperSeconds(ids.length) * 1000 + 1000) return null;
  if (saved.submittedAt !== undefined && !finite(saved.submittedAt)) return null;
  if (!Number.isInteger(saved.current) || saved.current! < 0 || saved.current! >= ids.length) return null;
  if (!saved.answers || typeof saved.answers !== "object" || Array.isArray(saved.answers)) return null;
  const answers: Record<string, number> = {};
  for (const [id, answer] of Object.entries(saved.answers)) {
    if (!ids.includes(id) || !Number.isInteger(answer) || (answer as number) < 0 || (answer as number) > 3) return null;
    answers[id] = answer as number;
  }
  return { version: 1, questionIds: ids, answers, current: saved.current!, startedAt: saved.startedAt, deadline: saved.deadline, ...(saved.submittedAt !== undefined ? { submittedAt: saved.submittedAt } : {}) };
}

// Cheap structural check of the downloaded bank file: it is our own build output, but a cached copy could be truncated.
export function isPublishedLawBank(value: unknown): value is PublishedLawQuestion[] {
  return Array.isArray(value) && value.every(item => item && typeof item === "object"
    && typeof item.id === "string" && isLawSubjectId(item.subject) && LAW_DIFFICULTIES.includes(item.difficulty)
    && typeof item.question === "string" && Array.isArray(item.options) && item.options.length === 4
    && item.options.every((option: unknown) => typeof option === "string")
    && Number.isInteger(item.answerIndex) && item.answerIndex >= 0 && item.answerIndex <= 3
    && typeof item.explanation === "string");
}

export function formatClock(ms: number) {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
