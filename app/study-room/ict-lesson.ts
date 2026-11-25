import type { ReviewedLesson } from "./reviewed-classroom";

export const memoryLesson: ReviewedLesson = {
  id: "volatile-memory",
  subject: "ict",
  label: "ICT",
  title: "Volatile memory and persistent storage",
  notes: [
    "Volatile memory requires power to keep its contents. The ordinary working RAM in a desktop or laptop is an example.",
    "Non-volatile storage retains data when power is off. Saving a document to an SSD writes a copy to persistent storage. Unsaved changes may exist only in working memory.",
  ],
  pitfall: "A computer may reopen a draft from an automatic save, because software wrote a copy to storage before shutdown.",
  source: { title: "NIST CSRC Glossary — Volatile Memory", url: "https://csrc.nist.gov/glossary/term/volatile_memory" },
  quiz: [
    { prompt: "What does volatile mean for working memory?", choices: ["Its contents require power", "Its contents cannot change", "It stores only pictures"], answer: 0,
      explanation: "Volatile memory loses the data it holds when power is removed." },
    { prompt: "Which can normally retain a saved file when a laptop is shut down?", choices: ["Working RAM", "An SSD", "The processor’s current calculation"], answer: 1,
      explanation: "An SSD is designed to keep stored data when the device has no power." },
    { prompt: "Why can a draft reappear after a restart?", choices: ["RAM never needs power", "The screen stores the document", "Software saved a copy to storage"], answer: 2,
      explanation: "An automatic save can recover a copy that was written before power was lost." },
  ],
};
