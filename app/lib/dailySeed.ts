function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

// mulberry32 — small, fast, deterministic PRNG from an integer seed.
function seededRandom(seed: number): () => number {
  let state = seed | 0;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Deterministically picks `count` items from `pool`, the same way for every
 * caller that passes the same `seedText` (e.g. today's date), so everyone
 * gets the same "question of the day" set without needing a backend. */
export function pickDeterministic<T>(pool: T[], count: number, seedText: string): T[] {
  const rand = seededRandom(hashString(seedText));
  const indices = pool.map((_, i) => i);

  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  return indices.slice(0, count).map((i) => pool[i]);
}
