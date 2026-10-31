import { contentRevision, getReviewedQuestions, notePacks, sources, topics, type ReviewedQuestion, type Stream } from "./reviewed-content.ts";
import { getMizoTranslation, type MizoTranslation } from "./mizo-translations.ts";
import { practiceKeyHash } from "../lib/practice-key.ts";
import { compactBank, type BankFile, type BankQuestion, type QuestionSourceInfo } from "../lib/question-bank-format.ts";

// Server-side builders for the props practice pages receive. The full bank (every stream, the
// question generators and the Mizo dictionaries) stays on the server; each page ships only its
// own stream's questions, so the browser downloads and parses far less JavaScript.

export type { QuestionSourceInfo };
// What practice pages receive for each question (see app/lib/question-bank-format.ts).
export type PracticeQuestion = BankQuestion;

export function practiceQuestions(stream: Stream): (ReviewedQuestion & { source: QuestionSourceInfo })[] {
  return getReviewedQuestions(stream).map(question => ({ ...question, source: sources[question.sourceId] }));
}

// The compact file served at /question-bank/<stream>: only the fields practice uses, each source once.
export function practiceBankFile(stream: Stream): BankFile {
  return compactBank(practiceQuestions(stream).map(({ id, subject, category, question, options, answer, explanation, sourceId, sourceLocation, reviewedOn, hint, wrongExplanations, source }) =>
    ({ id, subject, category, question, options, answer, explanation, sourceId, sourceLocation, reviewedOn, source, ...(hint ? { hint } : {}), ...(wrongExplanations ? { wrongExplanations } : {}) })), contentRevision);
}

// Draft Mizo translations, keyed by question id, computed once at build time.
export function mpscTranslations(questions: ReviewedQuestion[]): Record<string, MizoTranslation> {
  const translations: Record<string, MizoTranslation> = {};
  for (const question of questions) {
    const translation = getMizoTranslation(question);
    if (translation) translations[question.id] = translation;
  }
  return translations;
}

// Hashes of the published MPSC response keys, so the dashboard can count saved answers
// without downloading the bank itself.
export function mpscResponseKeyHashes(): number[] {
  return [...new Set(getReviewedQuestions("mpsc").map(question => practiceKeyHash(`${question.category}::${question.question}`)))];
}

export const streamPoolSizes = (): Record<Stream, number> => ({
  mpsc: getReviewedQuestions("mpsc").length,
  neet: getReviewedQuestions("neet").length,
  jee: getReviewedQuestions("jee").length,
  "cuet-pg": getReviewedQuestions("cuet-pg").length,
});

// The downloads page lists packs from this small summary; each pack's notes load only when a student
// opens it (packContents, served at /downloads/<id>/contents), so the page and its prefetch stay small.
export type DownloadPack = {
  id: string; title: string; group: string; searchText: string;
  topics: { id: string; subject: string; title: string }[];
};
export type PackContents = { id: string; subject: string; title: string; notes: string[]; pitfall: string; source: QuestionSourceInfo }[];

const packTopics = (pack: (typeof notePacks)[number]) => pack.topicIds.map(id => topics.find(topic => topic.id === id)!);

export function downloadPacks(): DownloadPack[] {
  return notePacks.map(pack => {
    const included = packTopics(pack);
    return {
      id: pack.id, title: pack.title, group: pack.group,
      searchText: `${pack.title} ${included.map(topic => topic.subject).join(" ")}`.toLowerCase(),
      topics: included.map(topic => ({ id: topic.id, subject: topic.subject, title: topic.title })),
    };
  });
}

export function packContents(id: string): PackContents | null {
  const pack = notePacks.find(item => item.id === id);
  return pack ? packTopics(pack).map(topic => ({ id: topic.id, subject: topic.subject, title: topic.title, notes: topic.notes, pitfall: topic.pitfall, source: sources[topic.sourceId] })) : null;
}

// First topic id for each college subject, used as the anchor of its download pack.
export function subjectDownloadAnchors(): Record<string, string> {
  const anchors: Record<string, string> = {};
  for (const topic of topics) anchors[topic.subject] ??= topic.id;
  return anchors;
}
