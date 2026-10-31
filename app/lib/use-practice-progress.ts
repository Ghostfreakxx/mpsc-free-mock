"use client";

import { useCallback, useEffect, useState } from "react";
import { emptyProgress, progressStorageKey, readProgress, recordProgress, type PracticeProgress } from "./practice-progress";

type Loaded = { key: string; progress: PracticeProgress; stored: boolean };
const noIds: ReadonlySet<string> = new Set();

// The mistakes set a page practises from is a snapshot: a question answered correctly for the
// second time stays on screen until the student moves on, and only then leaves the set.
export function usePracticeProgress(exam: string) {
  const key = progressStorageKey(exam);
  const [loaded, setLoaded] = useState<Loaded | null>(null);
  const [snapshot, setSnapshot] = useState<{ key: string; ids: ReadonlySet<string> } | null>(null);
  const ready = loaded?.key === key;
  const progress = ready ? loaded.progress : null;

  useEffect(() => {
    let cancelled = false;
    const timer = window.setTimeout(() => {
      if (cancelled) return;
      let raw: string | null = null;
      try { raw = window.localStorage.getItem(key); } catch { /* storage unavailable */ }
      const saved = readProgress(raw);
      const progress = saved ?? emptyProgress();
      setLoaded({ key, progress, stored: Boolean(saved) });
      setSnapshot({ key, ids: new Set(Object.keys(progress.mistakes)) });
    }, 0);
    return () => { cancelled = true; window.clearTimeout(timer); };
  }, [key]);

  useEffect(() => {
    // Nothing is written until the student answers, so older MPSC answers can still be adopted.
    if (!ready || !loaded?.stored) return;
    try { window.localStorage.setItem(key, JSON.stringify(loaded.progress)); } catch { /* session still works */ }
  }, [key, ready, loaded]);

  const record = useCallback((question: { id: string; category: string }, correct: boolean) => {
    setLoaded(current => current?.key === key ? { ...current, progress: recordProgress(current.progress, question, correct), stored: true } : current);
  }, [key]);

  // Called when the student moves on or changes topic.
  const refresh = useCallback(() => {
    if (loaded?.key === key) setSnapshot({ key, ids: new Set(Object.keys(loaded.progress.mistakes)) });
  }, [key, loaded]);

  // One-time start for students who practised before this store existed (MPSC keeps older answers).
  const adopt = useCallback((ids: readonly string[]) => {
    if (loaded?.key !== key || loaded.stored || ids.length === 0) return;
    const mistakes = { ...loaded.progress.mistakes };
    for (const id of ids) mistakes[id] ??= 0;
    setLoaded({ ...loaded, progress: { ...loaded.progress, mistakes }, stored: true });
    setSnapshot({ key, ids: new Set(Object.keys(mistakes)) });
  }, [key, loaded]);

  return {
    ready,
    mistakeIds: snapshot?.key === key ? snapshot.ids : noIds,
    mistakeCount: progress ? Object.keys(progress.mistakes).length : 0,
    topics: progress?.topics ?? {},
    record,
    refresh,
    adopt,
  };
}
