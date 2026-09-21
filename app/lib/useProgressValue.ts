"use client";

import { useSyncExternalStore } from "react";
import { subscribeToStore, localDateKey } from "./progressStore";

/**
 * Reads a value out of the progressStore (localStorage-backed) and
 * re-renders whenever any write happens through that store — including
 * writes made by this same component right after mount. `fallback` must be
 * a stable reference (used for both the "no window yet" server snapshot and
 * as the store's own empty-value constant).
 */
export function useProgressValue<T>(getSnapshot: () => T, fallback: T): T {
  return useSyncExternalStore(subscribeToStore, getSnapshot, () => fallback);
}

const noSubscription = () => () => {};

/**
 * Today's local date key, `null` until the first client render. Avoids
 * baking a build-time date into statically prerendered HTML — the real
 * value only appears once React hydrates in the browser.
 */
export function useTodayKey(): string | null {
  return useSyncExternalStore(
    noSubscription,
    () => localDateKey(new Date()),
    () => null
  );
}
