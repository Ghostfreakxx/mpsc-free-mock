import type { Lecture } from "./lessons";

type TranscriptLesson = Pick<Lecture, "title" | "segments" | "sources">;

export function formatTranscript(lesson: TranscriptLesson, chapterIndex?: number): string {
  const sections = chapterIndex === undefined ? lesson.segments : lesson.segments.slice(chapterIndex, chapterIndex + 1);
  return `${lesson.title}\nEnglish narration · American English · Marin · AI-generated voice\n\n`
    + sections.map((segment, index) =>
      `${(chapterIndex ?? 0) + index + 1}. ${segment.title}\n${segment.formula}\n${segment.steps.join("\n")}\n\n${segment.english}\n${segment.note ? `Clarification: ${segment.note}\n` : ""}`
    ).join("\n") + "\nSources\n" + lesson.sources.map(source => `${source.title}: ${source.url}`).join("\n") + "\n";
}
