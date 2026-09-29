import units from "../../data/jee-lecture.json";
import unitTimings from "../../data/jee-lecture-timings.json";
import measurements from "../../data/jee-measurements-lecture.json";
import measurementTimings from "../../data/jee-measurements-timings.json";

export type Lecture = {
  id: string;
  number: string;
  title: string;
  description: string;
  scope: string;
  progressKey: string;
  audio: string;
  subtitles: string;
  segments: { title: string; formula: string; steps: string[]; english: string; note?: string }[];
  sources: { title: string; url: string }[];
  quiz: { question: string; options: string[]; answer: number; explanation: string }[];
  timings: { duration: number; cues: { start: number; end: number; text: string; chapter: number }[] };
};

export const lectures: Lecture[] = [
  {
    ...units, id: "units", number: "01", timings: unitTimings,
    description: "SI units, dimensional formulas and checking equations.",
    scope: "Original foundation lesson, not an official JEE lecture or the complete measurement syllabus. Significant figures and uncertainty continue in Class 02.",
    progressKey: `jee.units.lecture.v${units.version}`,
    audio: "/lectures/units/narration-marin-v2.mp3",
    subtitles: "/lectures/units/english-marin-v2.vtt",
  },
  {
    id: "measurements", number: "02", title: measurements.title,
    description: "Significant figures, rounding, uncertainty and error analysis.",
    scope: "Original foundation lesson, not an official JEE lecture. Covers significant figures and introductory maximum-uncertainty rules; instrument practicals are not included.",
    progressKey: "jee.measurements.lecture.v1", timings: measurementTimings,
    audio: "/lectures/measurements/narration-marin.mp3",
    subtitles: "/lectures/measurements/english-v2.vtt",
    segments: measurements.chapters.map((chapter, index) => ({
      title: chapter.title, formula: chapter.formula, steps: chapter.points, english: chapter.script,
      ...(index === 2 ? { note: "The recording simplifies the rule for a discarded 5. For an exact halfway value, use round-to-even: 2.745 becomes 2.74, while 2.755 becomes 2.76 (three significant figures). If non-zero digits follow the 5, round up. The spoken 2.746 example is unchanged." } : {}),
    })),
    sources: [measurements.sources[0], { title: "NIST rounding rules (B.7.1)", url: "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors" }],
    quiz: measurements.quiz.map((question, index) => ({
      ...question,
      question: index === 2 ? "What is the percentage uncertainty of 20.0 ± 0.1 cm?" : question.question,
      explanation: [
        "There are three: 4, 5 and the final 0. Leading zeros only position the decimal point; the trailing decimal zero records precision.",
        "Addition follows decimal places. The least precise input, 0.3, ends at tenths, so 12.41 is reported as 12.4.",
        "Relative uncertainty = 0.1 / 20.0 = 0.005. Multiplying by 100 gives 0.5%. The centimetre units cancel.",
      ][index],
    })),
  },
];
