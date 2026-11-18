import type { TeachingOptions } from "./tochhawng-teachers";

export const CLASSROOM_LESSON_EVENT = "mpsc-classroom-lesson";

export type ClassroomLesson = {
  teacher: TeachingOptions["teacher"];
  language: TeachingOptions["language"];
  subject: TeachingOptions["subject"];
  mode: TeachingOptions["mode"];
  topic: string;
  text: string;
  source: "ai" | "offline";
};

// Captions are derived from the exact displayed text. A future audio provider can
// add cue timings and visemes to a separate track for the same immutable lesson.
export function classroomCaptions(text: string) {
  const pages: string[] = [];
  for (const paragraph of text.trim().split(/\n+/u)) {
    let page = "";
    for (const word of paragraph.trim().split(/\s+/u)) {
      if (!word) continue;
      if (page && page.length + word.length + 1 > 108) {
        pages.push(page);
        page = "";
      }
      page = page ? `${page} ${word}` : word;
    }
    if (page) pages.push(page);
  }
  return pages;
}
