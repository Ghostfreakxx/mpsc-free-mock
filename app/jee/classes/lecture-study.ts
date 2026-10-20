import type { Lecture } from "./lessons";
import type { StudyLesson } from "./course";

export function withLectureClarifications(written: StudyLesson, lecture?: Lecture): StudyLesson {
  const sections = lecture?.segments.filter(segment => segment.note).map(segment => ({
    title: `Clarification: ${segment.title}`, paragraphs: [segment.note!],
  })) ?? [];
  return sections.length ? { ...written, sections: [...written.sections, ...sections] } : written;
}

export function lectureStudyLesson(lecture: Lecture, unit: number, remaining: readonly string[]): StudyLesson {
  return {
    id: lecture.id, subject: "Physics", unit, title: lecture.title,
    summary: lecture.description,
    prerequisites: "The earlier foundation classes in this syllabus unit and the mathematical tools used in the explanations.",
    remaining: [lecture.scope, ...remaining].join(" "),
    sections: lecture.segments.map(segment => ({
      title: segment.title, formula: segment.formula,
      paragraphs: [segment.english, ...(segment.note ? [`Clarification: ${segment.note}`] : [])],
    })),
    examples: [], quiz: lecture.quiz, sources: lecture.sources,
  };
}
