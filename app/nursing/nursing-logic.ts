import {
  MOCK_MINUTES, MOCK_QUESTIONS, difficulties, nursingCategories,
  type CategoryScore, type MockAttempt, type MockResult, type NursingCategory, type NursingCategoryId,
  type NursingQuestion, type PracticeStats,
} from "./types.ts";

// Pure logic for the Nursing section: checking questions, building and scoring a mock test, and
// reading saved state back from localStorage (which can be corrupt or edited). Loaded in the
// browser and by scripts/nursing-bank.test.mjs, so it must not import the question bank.

export type Rng = () => number;

const prefixByName = new Map<string, string>(nursingCategories.map(category => [category.name, category.prefix]));
const idByName = new Map<string, NursingCategoryId>(nursingCategories.map(category => [category.name, category.id]));

export const categoryId = (name: NursingCategory): NursingCategoryId => idByName.get(name)!;

const isText = (value: unknown, max: number): value is string => typeof value === "string" && value.trim().length > 0 && value.length <= max;

export function isNursingQuestion(value: unknown): value is NursingQuestion {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  const prefix = typeof item.category === "string" ? prefixByName.get(item.category) : undefined;
  return Boolean(prefix)
    && typeof item.id === "string" && new RegExp(`^${prefix}-\\d{3}$`).test(item.id)
    && typeof item.difficulty === "string" && (difficulties as readonly string[]).includes(item.difficulty)
    && isText(item.question, 600)
    && Array.isArray(item.options) && item.options.length === 4 && item.options.every(option => isText(option, 200))
    && typeof item.answer === "number" && Number.isInteger(item.answer) && item.answer >= 0 && item.answer <= 3
    && isText(item.explanation, 700)
    && (item.reviewNote === undefined || isText(item.reviewNote, 400));
}

export function isNursingBank(value: unknown): value is NursingQuestion[] {
  return Array.isArray(value) && value.every(isNursingQuestion);
}

// Mulberry32: small and good enough for shuffles.
export function seededRandom(seed: number): Rng {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffled<T>(items: readonly T[], random: Rng): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export const optionOrder = (random: Rng) => shuffled([0, 1, 2, 3], random);

// Minutes allowed: the full 90 for a full paper, the same pace (0.9 min each) for a shorter one
// while the bank is still being filled.
export const mockMinutes = (count: number) => Math.max(1, Math.round((MOCK_MINUTES * count) / MOCK_QUESTIONS));

// Draws up to 100 questions spread as evenly as the bank allows: each category gets an equal share,
// and seats a small category cannot fill go to the others. Questions appear grouped by category,
// in the category order, as in a printed paper.
export function selectMockQuestions(bank: readonly NursingQuestion[], random: Rng, size = MOCK_QUESTIONS): NursingQuestion[] {
  const pools = nursingCategories
    .map(category => shuffled(bank.filter(question => question.category === category.name), random))
    .filter(pool => pool.length > 0);
  const counts = pools.map(() => 0);
  let remaining = Math.min(size, pools.reduce((sum, pool) => sum + pool.length, 0));
  // Hand out seats one round at a time; categories that take the leftover seats are chosen at random.
  while (remaining > 0) {
    const open = pools.map((pool, index) => index).filter(index => counts[index] < pools[index].length);
    const round = open.length <= remaining ? open : shuffled(open, random).slice(0, remaining);
    for (const index of round) counts[index] += 1;
    remaining -= round.length;
  }
  return pools.flatMap((pool, index) => pool.slice(0, counts[index]));
}

export function startMock(bank: readonly NursingQuestion[], seed: number, now: number): MockAttempt | null {
  const random = seededRandom(seed);
  const questions = selectMockQuestions(bank, random);
  if (questions.length === 0) return null;
  return {
    version: 1,
    questionIds: questions.map(question => question.id),
    orders: questions.map(() => optionOrder(random)),
    answers: questions.map(() => null),
    current: 0,
    startedAt: now,
    deadline: now + mockMinutes(questions.length) * 60_000,
  };
}

const isOrder = (value: unknown) => Array.isArray(value) && value.length === 4 && [0, 1, 2, 3].every(index => value.includes(index));

// A saved attempt is used only if it is well formed and every question is still in the bank.
export function readAttempt(raw: string | null, byId: ReadonlyMap<string, NursingQuestion>): MockAttempt | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw) as Partial<MockAttempt>;
    const ids = value.questionIds;
    if (value.version !== 1 || !Array.isArray(ids) || ids.length === 0 || ids.length > MOCK_QUESTIONS) return null;
    if (!ids.every(id => typeof id === "string" && byId.has(id)) || new Set(ids).size !== ids.length) return null;
    if (!Array.isArray(value.orders) || value.orders.length !== ids.length || !value.orders.every(isOrder)) return null;
    if (!Array.isArray(value.answers) || value.answers.length !== ids.length) return null;
    if (!value.answers.every(answer => answer === null || (Number.isInteger(answer) && answer >= 0 && answer <= 3))) return null;
    const finite = (number: unknown): number is number => typeof number === "number" && Number.isFinite(number);
    if (!finite(value.startedAt) || !finite(value.deadline) || value.deadline <= value.startedAt) return null;
    if (value.deadline - value.startedAt > MOCK_MINUTES * 60_000 + 60_000) return null;
    if (value.submittedAt !== undefined && !finite(value.submittedAt)) return null;
    const current = Number.isInteger(value.current) && value.current! >= 0 && value.current! < ids.length ? value.current! : 0;
    return {
      version: 1, questionIds: ids, orders: value.orders, answers: value.answers, current,
      startedAt: value.startedAt, deadline: value.deadline,
      ...(value.submittedAt === undefined ? {} : { submittedAt: value.submittedAt }),
    };
  } catch { return null; }
}

export function scoreMock(attempt: MockAttempt, byId: ReadonlyMap<string, NursingQuestion>): MockResult {
  const scores = new Map<NursingCategory, CategoryScore>();
  let attempted = 0, correct = 0;
  attempt.questionIds.forEach((id, index) => {
    const question = byId.get(id);
    if (!question) return;
    const score = scores.get(question.category) ?? { category: question.category, total: 0, attempted: 0, correct: 0 };
    score.total += 1;
    const answer = attempt.answers[index];
    if (answer !== null) {
      score.attempted += 1; attempted += 1;
      if (answer === question.answer) { score.correct += 1; correct += 1; }
    }
    scores.set(question.category, score);
  });
  const wrong = attempted - correct;
  return {
    total: attempt.questionIds.length, attempted, correct, wrong,
    negativeMarked: Math.round((correct - wrong / 3) * 100) / 100,
    byCategory: nursingCategories.map(category => scores.get(category.name)).filter((score): score is CategoryScore => Boolean(score)),
  };
}

export const emptyStats = (): PracticeStats => ({ version: 1, categories: {}, mistakes: [] });

const categoryIds: ReadonlySet<string> = new Set(nursingCategories.map(category => category.id));
const isCount = (value: unknown): value is number => Number.isInteger(value) && (value as number) >= 0 && (value as number) < 1e7;

export function readStats(raw: string | null): PracticeStats {
  if (!raw) return emptyStats();
  try {
    const value = JSON.parse(raw) as Partial<PracticeStats>;
    if (value.version !== 1 || !value.categories || typeof value.categories !== "object") return emptyStats();
    const categories: PracticeStats["categories"] = {};
    for (const [id, entry] of Object.entries(value.categories)) {
      if (categoryIds.has(id) && entry && isCount(entry.attempted) && isCount(entry.correct) && entry.correct <= entry.attempted) {
        categories[id as NursingCategoryId] = { attempted: entry.attempted, correct: entry.correct };
      }
    }
    const mistakes = Array.isArray(value.mistakes)
      ? [...new Set(value.mistakes.filter((id): id is string => typeof id === "string" && /^[a-z]{3}-\d{3}$/.test(id)))].slice(0, 1000)
      : [];
    return { version: 1, categories, mistakes };
  } catch { return emptyStats(); }
}

// A wrong answer adds the question to "My mistakes"; a right one removes it.
export function recordPractice(stats: PracticeStats, question: NursingQuestion, correct: boolean): PracticeStats {
  const id = categoryId(question.category);
  const previous = stats.categories[id] ?? { attempted: 0, correct: 0 };
  const mistakes = stats.mistakes.filter(mistake => mistake !== question.id);
  return {
    version: 1,
    categories: { ...stats.categories, [id]: { attempted: previous.attempted + 1, correct: previous.correct + (correct ? 1 : 0) } },
    mistakes: correct ? mistakes : [...mistakes, question.id],
  };
}

export const percent = (part: number, whole: number) => whole === 0 ? 0 : Math.round((part / whole) * 100);

export function formatClock(ms: number) {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const hours = Math.floor(total / 3600), minutes = Math.floor((total % 3600) / 60), seconds = total % 60;
  const pad = (number: number) => String(number).padStart(2, "0");
  return hours ? `${hours}:${pad(minutes)}:${pad(seconds)}` : `${pad(minutes)}:${pad(seconds)}`;
}
