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
import { presentQuestion } from "./question-presentation";

type PresentableQuestion = RotatableQuestion & { options: readonly string[]; explanation: string };

interface LoadedRotation {
  key: string;
  state: QuestionRotationState | null;
}

// `withMizo` adds draft Mizo to fresh-number aptitude questions on the bilingual page.
export function useQuestionRotation<T extends PresentableQuestion>(
  questions: readonly T[],
  scope: string,
  withMizo = false,
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
  // Options are reshuffled every time a question is shown; aptitude questions that come back
  // (a review, or any later round) get fresh numbers.
  const seed = state?.seed;
  const freshNumbers = state ? state.activeMode === "review" || state.round > 1 : false;
  const presentation = useMemo(
    () => currentQuestion ? presentQuestion(currentQuestion, seed, freshNumbers, withMizo) : null,
    [currentQuestion, seed, freshNumbers, withMizo],
  );

  function recordAnswer(correct: boolean, answer: string) {
    if (!state || !currentQuestion) return;
    const id = questionId(currentQuestion);
    setLoaded(current => current?.key === key && current.state
      ? { key, state: recordRotationAnswer(current.state, id, correct, answer) }
      : current);
  }

  function nextQuestion() {
    if (!state) return;
    setLoaded({ key, state: advanceRotation(state, ids) });
  }

  const summary = state ? rotationSummary(state, questions.length) : null;

  return {
    currentQuestion,
    presentation,
    selectedAnswer: typeof state?.selectedAnswer === "string" && presentation?.options.includes(state.selectedAnswer) ? state.selectedAnswer : "",
    ready: Boolean(ready && state),
    recordAnswer,
    nextQuestion,
    summary,
  };
}
