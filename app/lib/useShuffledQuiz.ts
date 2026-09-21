"use client";

import { useState } from "react";

function shuffledIndices(length: number): number[] {
  const order = Array.from({ length }, (_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

/**
 * Walks a question pool in random order without repeating a question until
 * every question in the pool has been shown once. When the pool is swapped
 * out (e.g. the user picks a different category) the order is reshuffled.
 */
export function useShuffledQuiz<T>(pool: T[]) {
  const [order, setOrder] = useState<number[]>(() => shuffledIndices(pool.length));
  const [pos, setPos] = useState(0);
  const [trackedPool, setTrackedPool] = useState(pool);

  if (pool !== trackedPool) {
    setTrackedPool(pool);
    setOrder(shuffledIndices(pool.length));
    setPos(0);
  }

  const currentIndex = order[pos];
  const currentQuestion = currentIndex === undefined ? undefined : pool[currentIndex];

  function next() {
    const nextPos = pos + 1;

    if (nextPos >= order.length) {
      const reshuffled = shuffledIndices(pool.length);
      const lastShown = order[order.length - 1];

      if (reshuffled.length > 1 && reshuffled[0] === lastShown) {
        [reshuffled[0], reshuffled[1]] = [reshuffled[1], reshuffled[0]];
      }

      setOrder(reshuffled);
      setPos(0);
    } else {
      setPos(nextPos);
    }
  }

  return {
    currentQuestion,
    questionNumber: pos + 1,
    total: order.length,
    next,
  };
}
