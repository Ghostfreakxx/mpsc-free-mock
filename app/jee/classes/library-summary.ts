import { lectures, type Lecture } from "./lessons";
import { studyLessons } from "./study-lessons";
import type { StudyLesson } from "./course";

// Server-side summaries for the class library. Full lectures carry every subtitle cue and
// segment, so the library page receives only the fields its cards and saved progress use.

export type RecordingSummary = Pick<Lecture, "id" | "number" | "title" | "description" | "subject" | "unit" | "progressKey"> & {
  timings: { duration: number };
  quiz: { question: string; options: string[]; answer: number }[];
};

export type WrittenSummary = Pick<StudyLesson, "id" | "subject" | "unit" | "title" | "summary"> & {
  exampleCount: number;
  quizCount: number;
};

export function recordingSummaries(): RecordingSummary[] {
  return lectures.map(({ id, number, title, description, subject, unit, progressKey, timings, quiz }) => ({
    id, number, title, description, subject, unit, progressKey,
    timings: { duration: timings.duration },
    quiz: quiz.map(({ question, options, answer }) => ({ question, options, answer })),
  }));
}

export function writtenSummaries(): WrittenSummary[] {
  return studyLessons.map(({ id, subject, unit, title, summary, examples, quiz }) => ({
    id, subject, unit, title, summary, exampleCount: examples.length, quizCount: quiz.length,
  }));
}
