import type { ReviewedQuestion, Stream } from "../data/reviewed-content";

export type ExamId = "jee" | "neet" | "cuet-pg" | "mpsc";
export type Marking = { correct: number; wrong: number };
export type MarkingOption = { id: string; label: string; marking: Marking };

export type ExamConfig = {
  id: ExamId;
  name: string;
  stream: Stream;
  secondsPerQuestion: number;
  // Relative share of each subject, listed in paper order; unlisted subjects get weight 1.
  subjectWeights?: Record<string, number>;
  lengths: number[];
  markingOptions: MarkingOption[];
  note: string;
};

const nta: MarkingOption = { id: "nta", label: "+4 correct, −1 wrong", marking: { correct: 4, wrong: -1 } };

// Timing and marking follow each exam's published pattern; the bank is original
// foundation practice, so the question mix is not a prediction of the real paper.
export const examConfigs: Record<ExamId, ExamConfig> = {
  jee: {
    id: "jee", name: "JEE Main", stream: "jee", secondsPerQuestion: 144,
    subjectWeights: { Physics: 1, Chemistry: 1, Mathematics: 1 },
    lengths: [15, 30, 75], markingOptions: [nta],
    note: "JEE Main pattern: 75 questions in 3 hours, +4 for a correct answer and −1 for a wrong one. All questions here are multiple choice; the real paper also has numerical-answer questions.",
  },
  neet: {
    id: "neet", name: "NEET UG", stream: "neet", secondsPerQuestion: 60,
    subjectWeights: { Physics: 1, Chemistry: 1, Biology: 2 },
    lengths: [20, 45, 90, 180], markingOptions: [nta],
    note: "NEET UG pattern: 180 questions in 3 hours (1 minute each), +4 for a correct answer and −1 for a wrong one, with Biology making up half the paper.",
  },
  "cuet-pg": {
    id: "cuet-pg", name: "CUET PG", stream: "cuet-pg", secondsPerQuestion: 72,
    lengths: [15, 30, 75], markingOptions: [nta],
    note: "CUET PG pattern: 75 questions in 90 minutes, +4 for a correct answer and −1 for a wrong one. Real papers cover a single chosen subject; this simulator mixes the available subjects.",
  },
  mpsc: {
    id: "mpsc", name: "MPSC", stream: "mpsc", secondsPerQuestion: 72,
    lengths: [25, 50, 100],
    markingOptions: [
      { id: "none", label: "+1 correct, no negative marking", marking: { correct: 1, wrong: 0 } },
      { id: "quarter", label: "+1 correct, −¼ wrong", marking: { correct: 1, wrong: -0.25 } },
      { id: "third", label: "+1 correct, −⅓ wrong", marking: { correct: 1, wrong: -1 / 3 } },
    ],
    note: "MPSC marking and timing differ between examinations. Choose the negative marking stated in your notification; timing is set to 72 seconds per question.",
  },
};

export type Response = {
  answer?: string;
  marked?: boolean;
  visited?: boolean;
  timeMs: number;
  // Every answer the student selected, in order, including changes.
  history: string[];
};

export type Attempt = {
  version: 1;
  examId: ExamId;
  markingId: string;
  questionIds: string[];
  startedAt: number;
  deadline: number;
  current: number;
  activeSince: number;
  responses: Record<string, Response>;
  submittedAt?: number;
};

export type QuestionStatus = "not-visited" | "not-answered" | "answered" | "marked" | "answered-marked";

// Small seeded generator so a paper can be rebuilt from its seed in tests.
function seededRandom(seed: number) {
  let value = seed >>> 0;
  return () => {
    value = (value + 0x6d2b79f5) >>> 0;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(values: readonly T[], random: () => number): T[] {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function maxLength(config: ExamConfig, pool: readonly ReviewedQuestion[]) {
  return Math.min(Math.max(...config.lengths), pool.length);
}

// Allocate questions to subjects by weight, move any shortfall to subjects with spare
// questions, then order the paper subject by subject as real papers are.
export function selectQuestions(config: ExamConfig, pool: readonly ReviewedQuestion[], count: number, seed: number): ReviewedQuestion[] {
  const random = seededRandom(seed);
  const bySubject = new Map<string, ReviewedQuestion[]>();
  for (const question of pool) bySubject.set(question.subject, [...(bySubject.get(question.subject) ?? []), question]);
  // Order subjects as the exam pattern lists them (e.g. NEET: Physics, Chemistry, Biology).
  const listed = Object.keys(config.subjectWeights ?? {});
  const position = (subject: string) => (listed.includes(subject) ? listed.indexOf(subject) : listed.length);
  const subjects = [...bySubject.keys()].sort((a, b) => position(a) - position(b));
  const total = Math.min(count, pool.length);
  const weightOf = (subject: string) => config.subjectWeights?.[subject] ?? 1;
  const weightSum = subjects.reduce((sum, subject) => sum + weightOf(subject), 0);

  const allocation = new Map(subjects.map(subject => [subject, Math.min(bySubject.get(subject)!.length, Math.floor((total * weightOf(subject)) / weightSum))]));
  let remaining = total - [...allocation.values()].reduce((sum, value) => sum + value, 0);
  while (remaining > 0) {
    // Give the next question to the subject furthest below its weighted share that still has spare questions.
    const candidates = subjects.filter(subject => allocation.get(subject)! < bySubject.get(subject)!.length);
    const next = candidates.sort((a, b) => allocation.get(a)! / weightOf(a) - allocation.get(b)! / weightOf(b))[0];
    allocation.set(next, allocation.get(next)! + 1);
    remaining -= 1;
  }
  return subjects.flatMap(subject => shuffle(bySubject.get(subject)!, random).slice(0, allocation.get(subject)));
}

export function startAttempt(config: ExamConfig, markingId: string, questions: readonly ReviewedQuestion[], now: number): Attempt {
  const questionIds = questions.map(question => question.id);
  return {
    version: 1,
    examId: config.id,
    markingId,
    questionIds,
    startedAt: now,
    deadline: now + questionIds.length * config.secondsPerQuestion * 1000,
    current: 0,
    activeSince: now,
    responses: Object.fromEntries(questionIds.map((id, index) => [id, { visited: index === 0, timeMs: 0, history: [] }])),
  };
}

// Time on the open question is banked whenever the student acts, so reloads and
// background tabs never lose or double-count it.
function bankTime(attempt: Attempt, now: number): Attempt {
  const id = attempt.questionIds[attempt.current];
  const limit = Math.min(now, attempt.deadline);
  const elapsed = Math.max(0, limit - attempt.activeSince);
  const response = attempt.responses[id];
  return { ...attempt, activeSince: now, responses: { ...attempt.responses, [id]: { ...response, timeMs: response.timeMs + elapsed } } };
}

function update(attempt: Attempt, now: number, change: (response: Response) => Response): Attempt {
  if (attempt.submittedAt !== undefined) return attempt;
  const banked = bankTime(attempt, now);
  const id = banked.questionIds[banked.current];
  return { ...banked, responses: { ...banked.responses, [id]: change(banked.responses[id]) } };
}

export function goTo(attempt: Attempt, index: number, now: number): Attempt {
  if (attempt.submittedAt !== undefined || index < 0 || index >= attempt.questionIds.length) return attempt;
  const banked = bankTime(attempt, now);
  const id = banked.questionIds[index];
  return { ...banked, current: index, responses: { ...banked.responses, [id]: { ...banked.responses[id], visited: true } } };
}

export function selectAnswer(attempt: Attempt, answer: string, now: number): Attempt {
  return update(attempt, now, response => response.answer === answer ? response : { ...response, answer, history: [...response.history, answer] });
}

export function clearAnswer(attempt: Attempt, now: number): Attempt {
  return update(attempt, now, response => ({ ...response, answer: undefined }));
}

export function toggleMark(attempt: Attempt, now: number): Attempt {
  return update(attempt, now, response => ({ ...response, marked: !response.marked }));
}

export function submitAttempt(attempt: Attempt, now: number): Attempt {
  if (attempt.submittedAt !== undefined) return attempt;
  return { ...bankTime(attempt, now), submittedAt: Math.min(now, attempt.deadline) };
}

export function questionStatus(response: Response | undefined): QuestionStatus {
  if (!response?.visited) return "not-visited";
  if (response.answer && response.marked) return "answered-marked";
  if (response.marked) return "marked";
  return response.answer ? "answered" : "not-answered";
}

export type SubjectResult = { subject: string; score: number; max: number; correct: number; wrong: number; skipped: number };
export type QuestionResult = { question: ReviewedQuestion; answer?: string; correct: boolean; timeMs: number; changedFromCorrect: boolean; changedToCorrect: boolean };

export type AttemptResult = {
  score: number;
  max: number;
  correct: number;
  wrong: number;
  skipped: number;
  accuracy: number | null;
  timeUsedMs: number;
  bySubject: SubjectResult[];
  questions: QuestionResult[];
  // Wrong answers given faster than a third of the time budget are likely guesses.
  guesses: { thresholdMs: number; count: number; marksLost: number; scoreIfSkipped: number };
  changes: { toCorrect: number; fromCorrect: number };
  slowest: QuestionResult[];
};

const round = (value: number) => Math.round(value * 100) / 100;

export function scoreAttempt(attempt: Attempt, config: ExamConfig, questionsById: ReadonlyMap<string, ReviewedQuestion>): AttemptResult {
  const marking = (config.markingOptions.find(option => option.id === attempt.markingId) ?? config.markingOptions[0]).marking;
  const thresholdMs = (config.secondsPerQuestion * 1000) / 3;
  const questions: QuestionResult[] = attempt.questionIds.map(id => {
    const question = questionsById.get(id)!;
    const response = attempt.responses[id];
    const firstChoice = response.history[0];
    const correct = response.answer === question.answer;
    return {
      question, answer: response.answer, correct, timeMs: response.timeMs,
      changedFromCorrect: firstChoice === question.answer && response.answer !== undefined && !correct,
      changedToCorrect: firstChoice !== undefined && firstChoice !== question.answer && correct,
    };
  });

  const subjects = new Map<string, SubjectResult>();
  for (const result of questions) {
    const subject = subjects.get(result.question.subject) ?? { subject: result.question.subject, score: 0, max: 0, correct: 0, wrong: 0, skipped: 0 };
    subject.max += marking.correct;
    if (result.answer === undefined) subject.skipped += 1;
    else if (result.correct) { subject.correct += 1; subject.score += marking.correct; }
    else { subject.wrong += 1; subject.score += marking.wrong; }
    subjects.set(subject.subject, subject);
  }
  const bySubject = [...subjects.values()].map(subject => ({ ...subject, score: round(subject.score) }));
  const correct = bySubject.reduce((sum, subject) => sum + subject.correct, 0);
  const wrong = bySubject.reduce((sum, subject) => sum + subject.wrong, 0);
  const score = round(bySubject.reduce((sum, subject) => sum + subject.score, 0));
  const fastWrong = questions.filter(result => result.answer !== undefined && !result.correct && result.timeMs < thresholdMs);
  const marksLost = round(-fastWrong.length * marking.wrong);

  return {
    score,
    max: questions.length * marking.correct,
    correct,
    wrong,
    skipped: questions.length - correct - wrong,
    accuracy: correct + wrong ? Math.round((correct / (correct + wrong)) * 100) : null,
    timeUsedMs: Math.max(0, (attempt.submittedAt ?? attempt.deadline) - attempt.startedAt),
    bySubject,
    questions,
    guesses: { thresholdMs, count: fastWrong.length, marksLost, scoreIfSkipped: round(score + marksLost) },
    changes: {
      toCorrect: questions.filter(result => result.changedToCorrect).length,
      fromCorrect: questions.filter(result => result.changedFromCorrect).length,
    },
    slowest: [...questions].sort((a, b) => b.timeMs - a.timeMs).slice(0, 3).filter(result => result.timeMs >= 1000),
  };
}

// Reject saved attempts that no longer match the bank instead of crashing mid-exam.
export function restoreAttempt(serialized: string | null, questionsById: ReadonlyMap<string, ReviewedQuestion>): Attempt | null {
  if (!serialized) return null;
  try {
    const value = JSON.parse(serialized) as Partial<Attempt>;
    const valid =
      value?.version === 1 &&
      typeof value.examId === "string" && value.examId in examConfigs &&
      typeof value.markingId === "string" &&
      Array.isArray(value.questionIds) && value.questionIds.length > 0 &&
      value.questionIds.every(id => typeof id === "string" && questionsById.has(id)) &&
      [value.startedAt, value.deadline, value.activeSince, value.current].every(Number.isFinite) &&
      value.current! >= 0 && value.current! < value.questionIds.length &&
      value.responses !== null && typeof value.responses === "object" &&
      value.questionIds.every(id => {
        const response = value.responses![id];
        return response && Number.isFinite(response.timeMs) && Array.isArray(response.history) &&
          (response.answer === undefined || questionsById.get(id)!.options.includes(response.answer));
      });
    return valid ? (value as Attempt) : null;
  } catch {
    return null;
  }
}

export type AttemptSummary = { examId: ExamId; startedAt?: number; finishedAt: number; score: number; max: number; count: number; accuracy: number | null };

export function summarize(attempt: Attempt, result: AttemptResult): AttemptSummary {
  return { examId: attempt.examId, startedAt: attempt.startedAt, finishedAt: attempt.submittedAt ?? attempt.deadline, score: result.score, max: result.max, count: attempt.questionIds.length, accuracy: result.accuracy };
}

// Newest first, one entry per attempt: a double tap or a tap at time-up must not record a paper twice.
export function addToHistory(history: readonly AttemptSummary[], summary: AttemptSummary, limit = 10): AttemptSummary[] {
  const others = history.filter(item => item.startedAt === undefined || item.startedAt !== summary.startedAt);
  return [summary, ...others].slice(0, limit);
}

// The five disjoint palette categories, as the CBT summary shows them; they always add up to the paper length.
export function statusCounts(attempt: Attempt): Record<QuestionStatus, number> {
  const counts: Record<QuestionStatus, number> = { "not-visited": 0, "not-answered": 0, answered: 0, marked: 0, "answered-marked": 0 };
  for (const id of attempt.questionIds) counts[questionStatus(attempt.responses[id])] += 1;
  return counts;
}

export function formatClock(ms: number) {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = String(total % 60).padStart(2, "0");
  return hours ? `${hours}:${String(minutes).padStart(2, "0")}:${seconds}` : `${minutes}:${seconds}`;
}
