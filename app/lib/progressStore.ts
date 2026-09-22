"use client";

const STORAGE_PREFIX = "mpsc-mock";

type Listener = () => void;
const listeners = new Set<Listener>();
const cache = new Map<string, unknown>();

function notify() {
  listeners.forEach((listener) => listener());
}

/** Subscribe to any write made through this store (any app, any key). */
export function subscribeToStore(listener: Listener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function readCached<T>(key: string, fallback: T): T {
  if (cache.has(key)) return cache.get(key) as T;
  if (typeof window === "undefined") return fallback;

  let value: T = fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw) value = JSON.parse(raw) as T;
  } catch {
    value = fallback;
  }

  cache.set(key, value);
  return value;
}

function writeCached(key: string, value: unknown) {
  cache.set(key, value);

  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Private browsing / storage full / disabled — the in-memory cache still holds it.
    }
  }

  notify();
}

// ---------- Accuracy stats ----------

export type CategoryStats = { attempts: number; correct: number };

export type QuizStats = {
  attempts: number;
  correct: number;
  byCategory: Record<string, CategoryStats>;
};

export const EMPTY_STATS: QuizStats = { attempts: 0, correct: 0, byCategory: {} };

function statsKey(appId: string) {
  return `${STORAGE_PREFIX}:stats:${appId}`;
}

export function getStats(appId: string): QuizStats {
  return readCached(statsKey(appId), EMPTY_STATS);
}

export function recordAnswer(
  appId: string,
  category: string,
  isCorrect: boolean
): QuizStats {
  const stats = getStats(appId);
  const bucket = stats.byCategory[category] ?? { attempts: 0, correct: 0 };

  const next: QuizStats = {
    attempts: stats.attempts + 1,
    correct: stats.correct + (isCorrect ? 1 : 0),
    byCategory: {
      ...stats.byCategory,
      [category]: {
        attempts: bucket.attempts + 1,
        correct: bucket.correct + (isCorrect ? 1 : 0),
      },
    },
  };

  writeCached(statsKey(appId), next);
  return next;
}

// ---------- Bookmarks ----------

export const EMPTY_BOOKMARKS: number[] = [];

function bookmarksKey(appId: string) {
  return `${STORAGE_PREFIX}:bookmarks:${appId}`;
}

export function getBookmarks(appId: string): number[] {
  return readCached(bookmarksKey(appId), EMPTY_BOOKMARKS);
}

export function toggleBookmark(appId: string, questionKey: number): number[] {
  const current = getBookmarks(appId);
  const next = current.includes(questionKey)
    ? current.filter((key) => key !== questionKey)
    : [...current, questionKey];

  writeCached(bookmarksKey(appId), next);
  return next;
}

// ---------- Streak ----------

export type StreakData = { lastVisit: string; current: number; longest: number };

export const EMPTY_STREAK: StreakData = { lastVisit: "", current: 0, longest: 0 };
const STREAK_KEY = `${STORAGE_PREFIX}:streak`;

function localDateKey(date: Date): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getStreak(): StreakData {
  return readCached(STREAK_KEY, EMPTY_STREAK);
}

/** Call once per page load. Bumps the streak the first time a user visits on a new calendar day. */
export function recordVisitAndGetStreak(): StreakData {
  const today = localDateKey(new Date());
  const data = getStreak();

  if (data.lastVisit === today) {
    return data;
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const wasYesterday = data.lastVisit === localDateKey(yesterday);

  const current = wasYesterday ? data.current + 1 : 1;
  const next: StreakData = {
    lastVisit: today,
    current,
    longest: Math.max(data.longest, current),
  };

  writeCached(STREAK_KEY, next);
  return next;
}

// ---------- Daily quiz completion ----------

export type DailyCompletion = { date: string; score: number; total: number };

function dailyCompletionKey() {
  return `${STORAGE_PREFIX}:daily-completed`;
}

export function getDailyCompletion(): DailyCompletion | null {
  return readCached<DailyCompletion | null>(dailyCompletionKey(), null);
}

export function setDailyCompletion(score: number, total: number) {
  writeCached(dailyCompletionKey(), { date: localDateKey(new Date()), score, total });
}

export { localDateKey };
