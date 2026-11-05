// Free MPSC study chapters. Text may use **bold** for key names and dates; renderers escape
// everything else. Loaded only by server pages and the download route, never in client code.

export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "note"; label: string; text: string };

export interface ChapterSection {
  id: string;
  title: string;
  blocks: Block[];
  /** "Check yourself" questions, each with a short model answer students can reveal. */
  check: { q: string; a: string }[];
}

export interface Mcq {
  q: string;
  options: [string, string, string, string];
  /** Index of the correct option. */
  answer: 0 | 1 | 2 | 3;
  why: string;
}

export interface Chapter {
  slug: string;
  number: number;
  course: string;
  title: string;
  period: string;
  summary: string;
  hours: string;
  howToStudy: string[];
  examFocus: { paper: string; text: string }[];
  outcomes: string[];
  glossary: [term: string, meaning: string][];
  timeline: [year: string, event: string][];
  sections: ChapterSection[];
  mcqs: Mcq[];
  shortAnswers: { q: string; points: string[] }[];
  mains: { q: string; outline: string[] };
  references: string[];
}
