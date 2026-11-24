import { getMizoTranslation } from "../../data/mizo-translations";
import { reviewedQuestions, sources, topics } from "../../data/reviewed-content";
import type { ReviewedLesson } from "../reviewed-classroom";

export const dynamic = "force-static";

const selection = {
  "political-science": "political-science", history: "history", geography: "geography",
  economics: "economics", biology: "science", mizoram: "mizoram",
  physics: "science", chemistry: "science", mathematics: "mathematics", english: "english",
  "environmental-studies": "science", sociology: "other", "public-administration": "other",
  education: "other", "general-aptitude": "mathematics", "fundamental-duties": "political-science",
  "fundamental-rights-dpsp": "political-science", "centre-state-relations": "political-science",
  "indian-monsoon": "geography", "india-drainage": "geography", inflation: "economics",
  "money-functions": "economics", "acids-bases-ph": "science", "mizoram-geography-culture": "mizoram",
} as const;

export function GET() {
  const lessons: ReviewedLesson[] = Object.entries(selection).map(([id, subject]) => {
    const topic = topics.find(item => item.id === id);
    if (!topic) throw new Error(`Missing reviewed classroom topic: ${id}`);
    const quiz = topic.questions.slice(0, 3).map(([prompt, choices, answer, explanation], index) => {
      const question = reviewedQuestions.find(item => item.id === `${id}-${index + 1}`);
      const mizo = question && getMizoTranslation(question);
      return { prompt, choices, answer, explanation,
        mizo: mizo && { prompt: mizo.question, choices: mizo.options, explanation: mizo.explanation } };
    });
    return { id, subject, label: topic.subject, title: topic.title, notes: topic.notes, pitfall: topic.pitfall, source: sources[topic.sourceId], quiz };
  });
  return Response.json(lessons);
}
