export function shuffledIndices(length: number): number[] {
  const order = Array.from({ length }, (_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

export function pickRandom<T>(pool: T[], count: number): T[] {
  const order = shuffledIndices(pool.length).slice(0, count);
  return order.map((index) => pool[index]);
}
