export interface RotatableQuestion {
  question: string;
  answer: string;
  options?: readonly string[];
  category?: string;
  subject?: string;
}

export interface ReviewQuestion {
  id: string;
  dueAt: number;
  interval: number;
  attempts: number;
}

export interface QuestionRotationState {
  version: 1;
  order: string[];
  cursor: number;
  activeId: string;
  activeMode: "fresh" | "review";
  round: number;
  lastRoundFirst: string;
  freshCompleted: number;
  reviews: ReviewQuestion[];
  answered?: boolean;
  selectedAnswer?: string;
}

const STORAGE_PREFIX = "question-rotation:v1:";
const MAX_REVIEW_INTERVAL = 24;

function shuffle(values: readonly string[], random: () => number): string[] {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function makeRound(
  ids: readonly string[],
  random: () => number,
  round: number,
  lastRoundFirst: string,
  freshCompleted: number,
  reviews: ReviewQuestion[],
): QuestionRotationState | null {
  if (ids.length === 0) return null;
  const order = shuffle(ids, random);
  if (order.length > 1 && order[0] === lastRoundFirst) {
    [order[0], order[1]] = [order[1], order[0]];
  }
  return {
    version: 1,
    order,
    cursor: 1,
    activeId: order[0],
    activeMode: "fresh",
    round,
    lastRoundFirst: order[0],
    freshCompleted,
    reviews,
  };
}

export function questionId(question: RotatableQuestion): string {
  const source = JSON.stringify([
    question.subject ?? "",
    question.category ?? "",
    question.question,
    question.options ?? [],
    question.answer,
  ]);
  let firstHash = 0x811c9dc5;
  let secondHash = 0x811c9dc5 ^ 0x9e3779b9;
  for (let i = 0; i < source.length; i += 1) {
    const code = source.charCodeAt(i);
    firstHash = Math.imul(firstHash ^ code, 0x01000193);
    secondHash = Math.imul(secondHash ^ (code + i), 0x01000193);
  }
  return `${(firstHash >>> 0).toString(36)}${(secondHash >>> 0).toString(36)}`;
}

export function rotationStorageKey(scope: string): string {
  return `${STORAGE_PREFIX}${encodeURIComponent(scope)}`;
}

export function createRotation(
  ids: readonly string[],
  random: () => number = Math.random,
): QuestionRotationState | null {
  return makeRound(ids, random, 1, "", 0, []);
}

function isStoredState(value: unknown): value is QuestionRotationState {
  if (!value || typeof value !== "object") return false;
  const state = value as Partial<QuestionRotationState>;
  return (
    state.version === 1 &&
    Array.isArray(state.order) &&
    state.order.every((id) => typeof id === "string") &&
    new Set(state.order).size === state.order.length &&
    Number.isInteger(state.cursor) &&
    state.cursor! >= 0 &&
    state.cursor! <= state.order.length &&
    typeof state.activeId === "string" &&
    (state.activeMode === "fresh" || state.activeMode === "review") &&
    Number.isInteger(state.round) &&
    state.round! >= 1 &&
    typeof state.lastRoundFirst === "string" &&
    Number.isInteger(state.freshCompleted) &&
    state.freshCompleted! >= 0 &&
    (state.answered === undefined || typeof state.answered === "boolean") &&
    (state.selectedAnswer === undefined || typeof state.selectedAnswer === "string") &&
    Array.isArray(state.reviews) &&
    state.reviews.every(
      (review) =>
        review &&
        typeof review.id === "string" &&
        Number.isInteger(review.dueAt) &&
        review.dueAt >= 0 &&
        Number.isInteger(review.interval) &&
        review.interval > 0 &&
        Number.isInteger(review.attempts) &&
        review.attempts >= 0,
    ) &&
    new Set(state.reviews.map((review) => review.id)).size === state.reviews.length
  );
}

// When questions are added, edited or removed, keep the student's place, the
// questions already seen this round and the review queue for questions that remain.
function reconcileRotation(
  state: QuestionRotationState,
  ids: readonly string[],
  random: () => number,
): QuestionRotationState | null {
  const idSet = new Set(ids);
  const stored = new Set(state.order);
  if (state.cursor >= 1 && state.order.length === ids.length && ids.every((id) => stored.has(id)) && idSet.has(state.activeId) && idSet.has(state.lastRoundFirst) && state.reviews.every((review) => idSet.has(review.id))) {
    return state;
  }
  const seen = state.order.slice(0, state.cursor).filter((id) => idSet.has(id));
  const upcoming = shuffle(
    [...state.order.slice(state.cursor).filter((id) => idSet.has(id)), ...ids.filter((id) => !stored.has(id))],
    random,
  );
  const reviews = state.reviews.filter((review) => idSet.has(review.id));
  const order = [...seen, ...upcoming];
  const lastRoundFirst = idSet.has(state.lastRoundFirst) ? state.lastRoundFirst : order[0] ?? "";
  if (order.length === 0) return null;

  if (idSet.has(state.activeId) && (state.activeMode === "review" || seen.includes(state.activeId))) {
    return { ...state, order, cursor: seen.length, lastRoundFirst, reviews };
  }
  // The active question no longer exists: move on to the next unseen one.
  const base = { ...state, order, lastRoundFirst, reviews, answered: false, selectedAnswer: "" };
  if (seen.length < order.length) {
    return { ...base, cursor: seen.length + 1, activeId: order[seen.length], activeMode: "fresh" };
  }
  return makeRound(ids, random, state.round + 1, lastRoundFirst, state.freshCompleted, reviews);
}

export function restoreRotation(
  serialized: string | null,
  ids: readonly string[],
  random: () => number = Math.random,
): QuestionRotationState | null {
  if (!serialized || ids.length === 0) return createRotation(ids, random);
  try {
    const value: unknown = JSON.parse(serialized);
    if (isStoredState(value)) return reconcileRotation(value, ids, random);
  } catch {
    // Fall through to a fresh rotation.
  }
  return createRotation(ids, random);
}

export function recordRotationAnswer(
  state: QuestionRotationState,
  id: string,
  correct: boolean,
  selectedAnswer = "",
): QuestionRotationState {
  if (state.activeId !== id || state.answered) return state;
  state = { ...state, answered: true, selectedAnswer };
  const existing = state.reviews.find((review) => review.id === id);
  const reviews = state.reviews.filter((review) => review.id !== id);
  if (correct) return { ...state, reviews };

  const interval = existing
    ? Math.min(existing.interval * 2, MAX_REVIEW_INTERVAL)
    : 3;
  reviews.push({
    id,
    dueAt: state.freshCompleted + interval,
    interval,
    attempts: existing ? existing.attempts + 1 : 0,
  });
  return { ...state, reviews };
}

export function advanceRotation(
  state: QuestionRotationState,
  ids: readonly string[],
  random: () => number = Math.random,
): QuestionRotationState | null {
  const freshCompleted =
    state.freshCompleted + (state.activeMode === "fresh" ? 1 : 0);
  const base = { ...state, freshCompleted, answered: false, selectedAnswer: "" };
  const dueReview = [...base.reviews]
    .filter(
      (review) => review.id !== state.activeId && review.dueAt <= freshCompleted,
    )
    .sort((a, b) => a.dueAt - b.dueAt)[0];

  if (dueReview) {
    return { ...base, activeId: dueReview.id, activeMode: "review" };
  }

  if (base.cursor < base.order.length) {
    const activeId = base.order[base.cursor];
    return {
      ...base,
      cursor: base.cursor + 1,
      activeId,
      activeMode: "fresh",
    };
  }

  return makeRound(
    ids,
    random,
    base.round + 1,
    base.lastRoundFirst,
    freshCompleted,
    base.reviews,
  );
}

export function rotationSummary(
  state: QuestionRotationState,
  total: number,
) {
  return {
    round: state.round,
    freshRemaining:
      total - state.cursor + (state.activeMode === "fresh" ? 1 : 0),
    reviewsPending: state.reviews.length,
    reviewsDue: state.reviews.filter(
      (review) => review.dueAt <= state.freshCompleted,
    ).length,
    isReview: state.activeMode === "review",
  };
}

export function serializeRotation(state: QuestionRotationState): string {
  return JSON.stringify(state);
}

export { STORAGE_PREFIX };
