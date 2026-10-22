"use client";

import { useCallback, useEffect, useState } from "react";

// Fetches a static question-bank file (see app/question-bank) once per page load and shares the
// request between components. A failed request is forgotten so `retry` can try again.
const requests = new Map<string, Promise<unknown>>();

export function loadQuestionBank<T>(name: string): Promise<T> {
  let request = requests.get(name);
  if (!request) {
    request = fetch(`/question-bank/${name}`).then(async response => {
      if (!response.ok) throw new Error(`Question bank ${name}: ${response.status}`);
      return response.json();
    });
    request.catch(() => requests.delete(name));
    requests.set(name, request);
  }
  return request as Promise<T>;
}

export function useQuestionBank<T>(name: string | null, validate: (value: unknown) => value is T) {
  const [state, setState] = useState<{ name: string | null; data: T | null; failed: boolean }>({ name: null, data: null, failed: false });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!name) return;
    let cancelled = false;
    loadQuestionBank<unknown>(name).then(
      value => { if (!cancelled) setState(validate(value) ? { name, data: value, failed: false } : { name, data: null, failed: true }); },
      () => { if (!cancelled) setState({ name, data: null, failed: true }); },
    );
    return () => { cancelled = true; };
  }, [name, attempt, validate]);

  const current = state.name === name ? state : { data: null, failed: false };
  const retry = useCallback(() => { setState({ name: null, data: null, failed: false }); setAttempt(value => value + 1); }, []);
  return { data: current.data, failed: current.failed, retry };
}

// Cheap structural checks: the files are our own build output, but a cached copy could be truncated.
export function isQuestionList<T>(value: unknown): value is T[] {
  return Array.isArray(value) && value.every(item => item && typeof item === "object" && typeof item.id === "string" && typeof item.question === "string" && Array.isArray(item.options) && item.options.length === 4 && typeof item.answer === "string");
}

export function isTranslationMap<T>(value: unknown): value is Record<string, T> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value)
    && Object.values(value as object).every(item => item && typeof item === "object" && typeof item.question === "string" && Array.isArray(item.options) && typeof item.explanation === "string");
}
