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

export function restoreRotation(
  serialized: string | null,
  ids: readonly string[],
  random: () => number = Math.random,
): QuestionRotationState | null {
  if (!serialized) return createRotation(ids, random);
  try {
    const value: unknown = JSON.parse(serialized);
    if (!value || typeof value !== "object") return createRotation(ids, random);
    const state = value as Partial<QuestionRotationState>;
    const idSet = new Set(ids);
    const validOrder =
      Array.isArray(state.order) &&
      state.order.length === ids.length &&
      new Set(state.order).size === ids.length &&
      state.order.every((id) => typeof id === "string" && idSet.has(id));
    const validReviews =
      Array.isArray(state.reviews) &&
      state.reviews.every(
        (review) =>
          review &&
          typeof review.id === "string" &&
          idSet.has(review.id) &&
          Number.isInteger(review.dueAt) &&
          review.dueAt >= 0 &&
          Number.isInteger(review.interval) &&
          review.interval > 0 &&
          Number.isInteger(review.attempts) &&
          review.attempts >= 0,
      ) &&
      new Set(state.reviews.map((review) => review.id)).size ===
        state.reviews.length;

    if (
      state.version === 1 &&
      validOrder &&
      Number.isInteger(state.cursor) &&
      state.cursor! >= 1 &&
      state.cursor! <= ids.length &&
      typeof state.activeId === "string" &&
      idSet.has(state.activeId) &&
      (state.activeMode === "fresh" || state.activeMode === "review") &&
      Number.isInteger(state.round) &&
      state.round! >= 1 &&
      typeof state.lastRoundFirst === "string" &&
      idSet.has(state.lastRoundFirst) &&
      Number.isInteger(state.freshCompleted) &&
      state.freshCompleted! >= 0 &&
      validReviews
    ) {
      return state as QuestionRotationState;
    }
  } catch {
    return createRotation(ids, random);
  }
  return createRotation(ids, random);
}

export function recordRotationAnswer(
  state: QuestionRotationState,
  id: string,
  correct: boolean,
): QuestionRotationState {
  if (state.activeId !== id) return state;
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
  const base = { ...state, freshCompleted };
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
