export function atomCounts(protons: number, neutrons: number, electrons: number) {
  return { massNumber: protons + neutrons, charge: protons - electrons };
}

export type PeaGenotype = "YY" | "Yy" | "yy";

export function peaCross(first: PeaGenotype, second: PeaGenotype) {
  return Array.from(first).flatMap(a => Array.from(second, b => [a, b].sort().join("") as PeaGenotype));
}

export function quadraticValue(scale: number, horizontal: number, vertical: number, x: number) {
  return scale * (x - horizontal) ** 2 + vertical;
}

export function quadraticRoots(scale: number, horizontal: number, vertical: number): number[] {
  const square = -vertical / scale;
  if (square < 0) return [];
  if (square === 0) return [horizontal];
  return [horizontal - Math.sqrt(square), horizontal + Math.sqrt(square)];
}

export function simpleMajority(yes: number, no: number) {
  const cast = yes + no;
  return { cast, threshold: cast ? Math.floor(cast / 2) + 1 : null, passed: cast > 0 && yes > no };
}

export function meridianArc(first: number, second: number) {
  const degrees = Math.abs(first - second);
  return { degrees, kilometres: 6_371 * degrees * Math.PI / 180 };
}
