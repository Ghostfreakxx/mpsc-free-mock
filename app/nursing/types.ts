// Types and category list for the Nursing section (Mizoram Health & Family Welfare staff nurse posts
// and AIIMS NORCET). Loaded in the browser, so it must stay free of question-bank imports: the
// questions live in app/data/nursing/*.json and reach the browser from /question-bank/nursing.

export const nursingCategories = [
  { id: "fundamentals", prefix: "fon", name: "Fundamentals of Nursing", short: "Fundamentals" },
  { id: "anatomy", prefix: "aap", name: "Anatomy & Physiology", short: "Anatomy & Physiology" },
  { id: "medical-surgical", prefix: "msn", name: "Medical-Surgical Nursing", short: "Medical-Surgical" },
  { id: "obstetrics", prefix: "obg", name: "Obstetrics & Gynaecological Nursing (Midwifery)", short: "Obstetrics & Midwifery" },
  { id: "paediatric", prefix: "ped", name: "Paediatric Nursing", short: "Paediatrics" },
  { id: "community", prefix: "chn", name: "Community Health Nursing", short: "Community Health" },
  { id: "mental-health", prefix: "mhn", name: "Mental Health Nursing", short: "Mental Health" },
  { id: "pharmacology", prefix: "phr", name: "Pharmacology", short: "Pharmacology" },
  { id: "microbiology", prefix: "mic", name: "Microbiology", short: "Microbiology" },
  { id: "nutrition", prefix: "nut", name: "Nutrition", short: "Nutrition" },
  { id: "mizoram-gk", prefix: "mne", name: "Mizoram & Northeast Health GK", short: "Mizoram & NE Health GK" },
] as const;

export type NursingCategoryInfo = (typeof nursingCategories)[number];
export type NursingCategoryId = NursingCategoryInfo["id"];
export type NursingCategory = NursingCategoryInfo["name"];
export type Difficulty = "easy" | "medium" | "hard";

export const difficulties: readonly Difficulty[] = ["easy", "medium", "hard"];

// The bank's target: 50 questions per category (15 easy, 25 medium, 10 hard), 550 in all.
export const QUESTIONS_PER_CATEGORY = 50;
export const DIFFICULTY_TARGET: Record<Difficulty, number> = { easy: 15, medium: 25, hard: 10 };

export type NursingQuestion = {
  id: string; // `${prefix}-${three digits}`, e.g. "fon-001"
  category: NursingCategory;
  difficulty: Difficulty;
  question: string;
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3; // index into options
  explanation: string; // 2-3 sentences
  // Set when the answer can differ between guidelines, textbooks or years (a reviewer checks these).
  reviewNote?: string;
};

// The mock test: 100 questions in 90 minutes, drawn evenly across the categories.
export const MOCK_QUESTIONS = 100;
export const MOCK_MINUTES = 90;

export type MockAttempt = {
  version: 1;
  questionIds: string[];
  // Display position -> index in the question's options, so the options are shuffled per attempt.
  orders: number[][];
  // Chosen bank option index per question, or null when skipped.
  answers: (number | null)[];
  current: number;
  startedAt: number;
  deadline: number;
  submittedAt?: number;
};

export type CategoryScore = {
  category: NursingCategory;
  total: number;
  attempted: number;
  correct: number;
};

export type MockResult = {
  total: number;
  attempted: number;
  correct: number;
  wrong: number;
  // NORCET-style marking: +1 for a correct answer, -1/3 for a wrong one, 0 for a skip.
  negativeMarked: number;
  byCategory: CategoryScore[];
};

// Saved practice statistics per category, plus ids of missed questions ("My mistakes").
export type PracticeStats = {
  version: 1;
  categories: Partial<Record<NursingCategoryId, { attempted: number; correct: number }>>;
  mistakes: string[];
};
