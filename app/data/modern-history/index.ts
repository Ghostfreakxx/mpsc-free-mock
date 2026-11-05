import { mughalDecline } from "./ch01-mughal-decline.ts";
import type { Chapter } from "./types.ts";

/** Chapters published so far, in course order. */
export const historyChapters: Chapter[] = [mughalDecline];

/** The planned course, so students can see what is coming. */
export const plannedChapters = [
  "The Mughal Empire breaks up and regional powers rise (1707–1761)",
  "The European companies arrive and the Carnatic Wars",
  "Plassey, Buxar and British power in Bengal",
  "Expansion: Mysore, the Marathas, the Sikhs and annexation",
  "Land revenue settlements and the colonial economy",
  "Social and religious reform movements",
  "The Revolt of 1857",
  "The rise of Indian nationalism and the Congress",
  "The Swadeshi movement and the Revolutionaries",
  "The Gandhian era: Non-Cooperation to Quit India",
  "Partition and Independence",
  "The Northeast and Mizoram in colonial and modern history",
];

export function findChapter(slug: string): Chapter | undefined {
  return historyChapters.find(chapter => chapter.slug === slug);
}
