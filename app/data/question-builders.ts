import type { QuestionSeed } from "./reviewed-content";

// Deterministic option rotation keeps generated practice reproducible across builds.
export function question(prompt: string, correct: string, distractors: string[], explanation: string, location: string, offset: number): QuestionSeed {
  const values = [correct, ...distractors];
  if (new Set(values).size !== 4) throw new Error(`Non-distinct options: ${prompt}`);
  const shift = offset % 4;
  const options = [...values.slice(shift), ...values.slice(0, shift)] as QuestionSeed[1];
  return [prompt, options, options.indexOf(correct), explanation, location];
}

export type Fact = [label: string, description: string, location: string];

// Two explicitly different retrieval tasks per source fact: identification and matching.
export function conceptPractice(context: string, facts: Fact[]): QuestionSeed[] {
  return facts.flatMap(([label, description, location], index) => {
    const others = [1, 2, 3].map(step => facts[(index + step) % facts.length]);
    return [
      question(`${context}: which term matches "${description}"?`, label, others.map(fact => fact[0]), `${label}: ${description}.`, `${location}; original recall variant`, index),
      question(`${context}: choose the correct description of ${label}.`, description, others.map(fact => fact[1]), `${label}: ${description}.`, `${location}; original matching variant`, index + 1),
    ];
  });
}

// Distractor spreads that place the answer lowest, second, third or highest among the options.
const numericSpreads = [[1, 2, 3], [-1, 1, 2], [-2, -1, 1], [-3, -2, -1]];

export function numeric(prompt: string, value: number, unit: string, explanation: string, location: string, offset: number): QuestionSeed {
  const format = (n: number) => `${Number(n.toFixed(6))}${unit}`;
  // Rank comes from the prompt text so it varies independently of display position.
  let rank = [...prompt].reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) >>> 0, 7) % 4;
  // Keep distractors positive when the answer is a positive count or measure.
  while (rank > 0 && value > 0 && value - rank <= 0) rank--;
  return question(prompt, format(value), numericSpreads[rank].map(delta => format(value + delta)), explanation, `${location}; original numerical variant`, offset);
}

// Hand-written item: correct answer first, then three distractors.
export type Item = [prompt: string, correct: string, distractors: [string, string, string], explanation: string, location: string];

// Rotating the correct option by item index spreads answers evenly across positions.
export const fromItems = (items: Item[]): QuestionSeed[] =>
  items.map(([prompt, correct, distractors, explanation, location], index) => question(prompt, correct, distractors, explanation, location, index));
