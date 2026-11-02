// Mizoram Judicial Service (Civil Judge) Preliminary Examination: the official prelims syllabus,
// the planned size of each subject's bank and the mock-test blueprint. This file holds no
// questions, so browser code may import it; the questions stay on the server (app/data/law-mjs-bank.ts)
// and reach the browser from /question-bank/mjs-law.

export const LAW_SUBJECT_IDS = ["coi", "cpc", "bnss", "tpa", "ica", "bns", "bsa", "tort", "gk", "apt", "eng"] as const;
export type LawSubjectId = (typeof LAW_SUBJECT_IDS)[number];

export type LawDifficulty = "easy" | "medium" | "hard";
export const LAW_DIFFICULTIES: readonly LawDifficulty[] = ["easy", "medium", "hard"];

// Why a question needs a reviewer before students see it.
export type LawReviewFlagKind =
  | "section-unverified" // the bare-act Section/Article/Order number was not certain when written
  | "recent-amendment" // depends on an amendment or the 2023 criminal codes' transition
  | "supreme-court-judgment"; // depends on a Supreme Court (or High Court) ruling

export type LawReviewFlag = { kind: LawReviewFlagKind; note: string };

// A question as written in the bank files (app/data/law-mjs/<subject>.json).
export type LawQuestion = {
  id: string; // "<subject>-<3 digits>", e.g. "coi-001"
  subject: LawSubjectId;
  difficulty: LawDifficulty;
  question: string;
  options: [string, string, string, string];
  answerIndex: 0 | 1 | 2 | 3;
  explanation: string; // 2–3 sentences citing the Article, Section or Order/Rule
  // Present when the question needs checking. A flagged question is held back from students until a
  // reviewer checks it and records the date in `clearedOn` (YYYY-MM-DD).
  review?: { flags: LawReviewFlag[]; clearedOn?: string };
};

// What the browser receives: published questions only, without reviewer notes.
export type PublishedLawQuestion = Omit<LawQuestion, "review">;

export type LawSubject = {
  id: LawSubjectId;
  title: string;
  short: string;
  scope: string;
  target: number; // planned questions in the full bank
  mockShare: number; // questions in a full 100-question mock
};

// Order follows the official syllabus. Targets total 600; mock shares total 100 (target ÷ 6,
// with the two spare questions going to General Knowledge and Aptitude).
export const LAW_SUBJECTS: readonly LawSubject[] = [
  { id: "coi", title: "Constitution of India", short: "Constitution", scope: "Constitution of India", target: 60, mockShare: 10 },
  { id: "cpc", title: "Code of Civil Procedure, 1908", short: "CPC", scope: "Sections and Orders of the CPC, 1908", target: 60, mockShare: 10 },
  { id: "bnss", title: "Bharatiya Nagarik Suraksha Sanhita, 2023", short: "BNSS (CrPC)", scope: "BNSS, 2023, which replaced the CrPC, 1973 from 1 July 2024", target: 60, mockShare: 10 },
  { id: "tpa", title: "Transfer of Property Act, 1882", short: "TPA", scope: "Transfer of Property Act, 1882", target: 60, mockShare: 10 },
  { id: "ica", title: "Indian Contract Act, 1872", short: "Contract", scope: "Indian Contract Act, 1872", target: 60, mockShare: 10 },
  { id: "bns", title: "Bharatiya Nyaya Sanhita, 2023", short: "BNS (IPC)", scope: "BNS, 2023, which replaced the IPC, 1860 from 1 July 2024", target: 60, mockShare: 10 },
  { id: "bsa", title: "Bharatiya Sakshya Adhiniyam, 2023", short: "BSA (Evidence)", scope: "BSA, 2023, which replaced the Indian Evidence Act, 1872 from 1 July 2024", target: 60, mockShare: 10 },
  { id: "tort", title: "Law of Torts", short: "Torts", scope: "Law of Torts", target: 60, mockShare: 10 },
  { id: "gk", title: "General Knowledge", short: "GK", scope: "India and Mizoram, including the Sixth Schedule and Article 371G", target: 40, mockShare: 7 },
  { id: "apt", title: "Aptitude", short: "Aptitude", scope: "Logical and legal reasoning", target: 40, mockShare: 7 },
  { id: "eng", title: "General English", short: "English", scope: "Grammar, vocabulary and comprehension", target: 40, mockShare: 6 },
];

export const lawSubject = (id: LawSubjectId) => LAW_SUBJECTS.find(subject => subject.id === id)!;
export const isLawSubjectId = (value: unknown): value is LawSubjectId => typeof value === "string" && (LAW_SUBJECT_IDS as readonly string[]).includes(value);

// Mock test pattern: 100 questions in 2 hours, +1 for a correct answer, no negative marking.
export const MOCK_LENGTH = 100;
export const MOCK_SECONDS = 2 * 60 * 60;
export const MOCK_SECONDS_PER_QUESTION = MOCK_SECONDS / MOCK_LENGTH;

export const LAW_BANK_NAME = "mjs-law";
