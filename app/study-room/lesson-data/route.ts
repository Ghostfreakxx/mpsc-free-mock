import { humanWelfareLesson } from "../../neet/classes/human-welfare-lesson";
import { flowerTissueDiagramsLesson } from "../../neet/classes/flower-tissue-diagrams-lesson";
import { diversityLesson } from "../../neet/classes/diversity-lesson";
import { structuralLesson } from "../../neet/classes/structural-lesson";
import { reproductionLesson } from "../../neet/classes/reproduction-lesson";
import { ecologyLesson } from "../../neet/classes/ecology-lesson";
import { humanPhysiologyLesson } from "../../neet/classes/human-physiology-lesson";
import { plantPhysiologyLesson } from "../../neet/classes/plant-physiology-lesson";
import { biomoleculesLesson } from "../../neet/classes/biomolecules-lesson";
import { biologyCompanions, biologyNotesHref } from "../../neet/classes/biology-companions";
import { divisionLesson } from "../../neet/classes/cell-division-lesson";
import { geneticsEvolutionLesson } from "../../neet/classes/genetics-evolution-lesson";
import { cellNotes, cellQuestions, cellRevision, cellSyllabus, cellWrittenHref } from "../../neet/classes/cell-written";
import { getMizoTranslation } from "../../data/mizo-translations";
import { reviewedQuestions, sources, topics } from "../../data/reviewed-content";
import { lectures } from "../../jee/classes/lessons";
import { cellLesson } from "../../neet/classes/cell-lesson";
import { memoryLesson } from "../ict-lesson";
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
  "union-polity": "political-science", "local-government": "political-science", "union-judiciary": "political-science",
  "mughal-chronicles": "history", "national-income": "economics", "newtons-laws": "science",
  "evolution-evidence": "science", "cellular-respiration": "science",
  percentages: "mathematics", "simple-interest": "mathematics", "speed-distance-time": "mathematics",
} as const;

const recordedCompanions = {
  physics: lectures.find(item => item.id === "newtons-laws"),
  chemistry: lectures.find(item => item.id === "atomic-structure"),
  biology: cellLesson,
};

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
    const recording = Object.hasOwn(recordedCompanions, id) ? recordedCompanions[id as keyof typeof recordedCompanions] : undefined;
    const companion = recording && { title: recording.title, audio: recording.audio, captions: recording.subtitles,
      href: id === "biology" ? "/neet/classes/cell-unit-life" : `/jee/classes/${recording.id}` };
    const labs: Record<string, string> = { chemistry: "/laboratory#molecular-geometry", biology: "/laboratory#plant-animal-cells",
      "newtons-laws": "/laboratory#force-friction", physics: "/laboratory#force-friction" };
    return { id, subject, companion, lab: labs[id], label: topic.subject, title: topic.title, notes: topic.notes, pitfall: topic.pitfall, source: sources[topic.sourceId], quiz };
  });
  const cellOrganization: ReviewedLesson = {
    id: "neet-cell-organization", subject: "science", label: "Biology", title: "Cell organization and protein transport",
    notes: cellNotes, revision: cellRevision, source: cellSyllabus,
    pitfall: "A replicated chromosome has two sister chromatids until they separate.",
    lab: "/laboratory#plant-animal-cells", writtenHref: cellWrittenHref,
    companion: { title: cellLesson.title, audio: cellLesson.audio, captions: cellLesson.subtitles, href: "/neet/classes/cell-unit-life" },
    quiz: cellQuestions.map(({ question, options, answer, explanation }) => ({ prompt: question, choices: options, answer, explanation })),
  };
  const biologyRecordings = [divisionLesson, geneticsEvolutionLesson, biomoleculesLesson, plantPhysiologyLesson, humanPhysiologyLesson, reproductionLesson, ecologyLesson, diversityLesson, structuralLesson, humanWelfareLesson, flowerTissueDiagramsLesson];
  const writtenBiology: ReviewedLesson[] = biologyCompanions.map(item => {
    const recording = biologyRecordings.find(candidate => candidate.id === "neet-" + item.id);
    if (!recording) throw new Error("Missing Biology recording: " + item.id);
    return {
      id: "neet-written-" + item.id, title: item.title, label: "Biology", subject: "science",
      notes: item.sections.slice(0, -1).flatMap(section => section.paragraphs),
      revision: item.sections.at(-1)?.paragraphs,
      pitfall: item.sections[0].paragraphs[0], source: item.reference, lab: item.lab?.href,
      writtenHref: biologyNotesHref(item.id),
      companion: { title: recording.title, audio: recording.audio, captions: recording.subtitles, href: "/neet/classes/" + item.id },
      quiz: item.quiz.map(({ question, options, answer, explanation }) => ({ prompt: question, choices: options, answer, explanation })),
    };
  });
  return Response.json([...lessons, memoryLesson, cellOrganization, ...writtenBiology]);
}
