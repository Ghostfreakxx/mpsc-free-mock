import { aptitudeTemplates, type Rng } from "../data/aptitude-templates.ts";
import { aptitudeMizo, type AptitudeMizo } from "../data/mizo-aptitude.ts";

// How a practice question is shown this time. The bank question stays the record (saved progress,
// mistakes and sources use it); the student sees its options in a new order each time, and an
// aptitude question that comes back gets fresh numbers from the same template.

type SourceQuestion = { question: string; options: readonly string[]; answer: string; explanation: string };

export type QuestionVariant = { question: string; options: string[]; answer: string; explanation: string; mizo?: AptitudeMizo };

export type Presentation = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  // Display position -> index in the bank question's options, so translated options follow the
  // shuffle. Null for a fresh-number version, whose options are new.
  order: number[] | null;
  variant: QuestionVariant | null;
};

// Mulberry32: small, fast and good enough to shuffle four options reproducibly.
export function seededRandom(seed: number): Rng {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function permutation(length: number, random: Rng): number[] {
  const order = Array.from({ length }, (_, index) => index);
  for (let i = length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

// Four distinct, finite, non-negative options; anything else falls back to the bank question.
const usable = (options: readonly string[]) =>
  new Set(options.map(option => option.trim().toLowerCase())).size === options.length &&
  options.every(option => option.trim() && !/NaN|Infinity|(^|\s)-\d/.test(option));

// A fresh-number version of an aptitude question, or null when the question has no template.
export function makeVariant(prompt: string, seed: number, withMizo = false): QuestionVariant | null {
  const template = aptitudeTemplates.find(candidate => candidate.parse(prompt));
  if (!template) return null;
  const random = seededRandom(seed);
  for (let attempt = 0; attempt < 25; attempt += 1) {
    const [question, answer, distractors, explanation] = template.build(template.sample(random));
    const options = [answer, ...distractors];
    if (question === prompt || !usable(options)) continue;
    return { question, options, answer, explanation, mizo: withMizo ? aptitudeMizo(question, answer) : undefined };
  }
  return null;
}

export function presentQuestion(question: SourceQuestion, seed: number | undefined, freshNumbers: boolean, withMizo = false): Presentation {
  if (seed === undefined) {
    return { ...question, options: [...question.options], order: question.options.map((_, index) => index), variant: null };
  }
  const variant = freshNumbers ? makeVariant(question.question, seed, withMizo) : null;
  const source = variant ?? question;
  // A separate stream from the variant's numbers, so the shuffle does not depend on them.
  const order = permutation(source.options.length, seededRandom(seed ^ 0x5bd1e995));
  return {
    question: source.question,
    options: order.map(index => source.options[index]),
    answer: source.answer,
    explanation: source.explanation,
    order: variant ? null : order,
    variant,
  };
}
