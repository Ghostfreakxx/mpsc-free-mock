"use client";

import { useEffect, useMemo, useState } from "react";
import {
  advanceRotation,
  questionId,
  recordRotationAnswer,
  restoreRotation,
  rotationStorageKey,
  rotationSummary,
  serializeRotation,
  type QuestionRotationState,
  type RotatableQuestion,
} from "./question-rotation";

interface LoadedRotation {
  key: string;
  state: QuestionRotationState | null;
}

export function useQuestionRotation<T extends RotatableQuestion>(
  questions: readonly T[],
  scope: string,
) {
  const key = rotationStorageKey(scope);
  const ids = useMemo(() => questions.map(questionId), [questions]);
  const questionsById = useMemo(
    () => new Map(questions.map((question) => [questionId(question), question])),
    [questions],
  );
  const [loaded, setLoaded] = useState<LoadedRotation | null>(null);
  const ready = loaded?.key === key;
  const state = ready ? loaded.state : null;

  useEffect(() => {
    let cancelled = false;
    const timer = window.setTimeout(() => {
      if (cancelled) return;
      let serialized: string | null = null;
      try {
        serialized = window.localStorage.getItem(key);
      } catch {
        // Keep practice usable when browser storage is unavailable.
      }
      setLoaded({ key, state: restoreRotation(serialized, ids) });
    }, 0);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [ids, key]);

  useEffect(() => {
    if (!ready || !state) return;
    try {
      window.localStorage.setItem(key, serializeRotation(state));
    } catch {
      // The active session remains usable without persistence.
    }
  }, [key, ready, state]);

  const currentQuestion = state
    ? (questionsById.get(state.activeId) ?? null)
    : null;

  function recordAnswer(correct: boolean) {
    if (!state || !currentQuestion) return;
    const id = questionId(currentQuestion);
    setLoaded({
      key,
      state: recordRotationAnswer(state, id, correct),
    });
  }

  function nextQuestion() {
    if (!state) return;
    setLoaded({ key, state: advanceRotation(state, ids) });
  }

  const summary = state ? rotationSummary(state, questions.length) : null;

  return {
    currentQuestion,
    ready: Boolean(ready && state),
    recordAnswer,
    nextQuestion,
    summary,
  };
}
