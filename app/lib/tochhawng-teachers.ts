export const teachers = {
  zorami: { name: "Tochhawng Zorami", givenName: "Zorami", specialty: "Lead teacher · society and humanities" },
  lalthan: { name: "Tochhawng Lalthanpuii", givenName: "Lalthanpuii", specialty: "Science, ICT and mathematics" },
} as const;

export const subjects = {
  general: "General study",
  "political-science": "Political Science",
  history: "History",
  geography: "Geography",
  economics: "Economics",
  science: "Science",
  ict: "ICT",
  mathematics: "Mathematics and Aptitude",
  mizoram: "Mizoram Studies",
  english: "English",
  other: "Other subject",
} as const;

export const teachingModes = {
  explain: "Explain",
  questions: "Ask Questions",
  quiz: "Quiz Me",
  revision: "Quick Revision",
} as const;

export const teachingLanguages = { en: "Simple English", lus: "Mizo" } as const;

export type TeacherId = keyof typeof teachers;

export type TeachingOptions = {
  teacher: TeacherId;
  subject: keyof typeof subjects;
  mode: keyof typeof teachingModes;
  language: keyof typeof teachingLanguages;
};

export const defaultTeachingOptions: TeachingOptions = {
  teacher: "zorami", subject: "general", mode: "explain", language: "en",
};

export const MAX_QUESTION_CHARS = 1_200;
export const MAX_TEACHING_REPLY_CHARS = 3_000;
export const MAX_CHAT_CONTEXT_CHARS = 6_000;
export const MAX_CHAT_MESSAGES = 8;
