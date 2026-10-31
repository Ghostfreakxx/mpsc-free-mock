import { lectures, type Lecture } from "./lessons";
import { studyLessons } from "./study-lessons";
import type { StudyLesson } from "./course";
import { quizFingerprint, type QuizFingerprint } from "./progress";

// Server-side summaries for the class library. Full lectures carry every subtitle cue and
// segment, so the library page receives only the fields its cards and saved progress use.

export type RecordingSummary = Pick<Lecture, "id" | "number" | "title" | "description" | "subject" | "unit" | "progressKey"> & {
  timings: { duration: number };
  // Hashes of the practice checks, enough to count saved answers (see progress.ts).
  quiz: QuizFingerprint[];
};

export type WrittenSummary = Pick<StudyLesson, "id" | "subject" | "unit" | "title" | "summary"> & {
  exampleCount: number;
  quizCount: number;
};

export function recordingSummaries(): RecordingSummary[] {
  return lectures.map(({ id, number, title, description, subject, unit, progressKey, timings, quiz }) => ({
    id, number, title, description, subject, unit, progressKey,
    timings: { duration: timings.duration },
    quiz: quizFingerprint(quiz),
  }));
}

export function writtenSummaries(): WrittenSummary[] {
  return studyLessons.map(({ id, subject, unit, title, summary, examples, quiz }) => ({
    id, subject, unit, title, summary, exampleCount: examples.length, quizCount: quiz.length,
  }));
}
