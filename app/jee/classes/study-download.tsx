"use client";
import { Download } from "lucide-react";
import type { StudyLesson } from "./course";

export default function StudyDownload({ lesson }: { lesson: StudyLesson }) {
  function download() {
    const text = [lesson.title, `${lesson.subject} - written foundation lesson`, `Prerequisites: ${lesson.prerequisites}`,
      ...lesson.sections.map(section => `${section.title}\n${section.paragraphs.join("\n\n")}\n${section.formula ?? ""}`),
      "WORKED EXAMPLES", ...lesson.examples.map(example => `${example.question}\n${example.steps.map((step, index) => `${index + 1}. ${step}`).join("\n")}\n${example.answer}`),
      "ORIGINAL PRACTICE", ...lesson.quiz.map((question, index) => `${index + 1}. ${question.question}\n${question.options.map((option, i) => `${String.fromCharCode(65 + i)}. ${option}`).join("\n")}`),
      "ANSWER KEY", ...lesson.quiz.map((question, index) => `${index + 1}. ${String.fromCharCode(65 + question.answer)}. ${question.explanation}`),
      "UNIT COVERAGE", lesson.remaining, "REFERENCES", ...lesson.sources.map(source => `${source.title}: ${source.url}`),
    ].join("\n\n");
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url; anchor.download = `jee-${lesson.id}-notes.txt`; anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return <button onClick={download}><Download size={17} /> Download notes</button>;
}
