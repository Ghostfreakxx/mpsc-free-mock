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

export function numeric(prompt: string, value: number, unit: string, explanation: string, location: string, offset: number): QuestionSeed {
  const format = (n: number) => `${Number(n.toFixed(6))}${unit}`;
  return question(prompt, format(value), [value + 1, value - 1, value + 3].map(format), explanation, `${location}; original numerical variant`, offset);
}
