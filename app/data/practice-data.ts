import { getReviewedQuestions, notePacks, sources, topics, type ReviewedQuestion, type Stream } from "./reviewed-content.ts";
import { getMizoTranslation, type MizoTranslation } from "./mizo-translations.ts";
import { practiceKeyHash } from "../lib/practice-key.ts";

// Server-side builders for the props practice pages receive. The full bank (every stream, the
// question generators and the Mizo dictionaries) stays on the server; each page ships only its
// own stream's questions, so the browser downloads and parses far less JavaScript.

export type QuestionSourceInfo = { title: string; url: string };
export type PracticeQuestion = ReviewedQuestion & { source: QuestionSourceInfo };

export function practiceQuestions(stream: Stream): PracticeQuestion[] {
  return getReviewedQuestions(stream).map(question => ({ ...question, source: sources[question.sourceId] }));
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

export type DownloadPack = {
  id: string; title: string; group: string; searchText: string;
  topics: { id: string; subject: string; title: string; notes: string[]; pitfall: string; source: QuestionSourceInfo }[];
};

export function downloadPacks(): DownloadPack[] {
  return notePacks.map(pack => {
    const included = pack.topicIds.map(id => topics.find(topic => topic.id === id)!);
    return {
      id: pack.id, title: pack.title, group: pack.group,
      searchText: `${pack.title} ${included.map(topic => topic.subject).join(" ")}`.toLowerCase(),
      topics: included.map(topic => ({ id: topic.id, subject: topic.subject, title: topic.title, notes: topic.notes, pitfall: topic.pitfall, source: sources[topic.sourceId] })),
    };
  });
}

// First topic id for each college subject, used as the anchor of its download pack.
export function subjectDownloadAnchors(): Record<string, string> {
  const anchors: Record<string, string> = {};
  for (const topic of topics) anchors[topic.subject] ??= topic.id;
  return anchors;
}
