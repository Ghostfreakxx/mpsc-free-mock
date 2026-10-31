// The compact question-bank file: each source is listed once and only the fields practice uses are
// sent, which keeps the download and the time to parse it small on phones. Browser code loads this
// file, so it must not import the bank.

export type QuestionSourceInfo = { title: string; url: string };

export type BankQuestion = {
  id: string; subject: string; category: string; question: string;
  options: string[]; answer: string; explanation: string;
  sourceLocation: string; reviewedOn: string; source: QuestionSourceInfo;
  hint?: string; wrongExplanations?: Record<string, string>;
};

type CompactQuestion = Omit<BankQuestion, "source" | "reviewedOn"> & { sourceId: string; reviewedOn?: string };

export type BankFile = {
  format: 2;
  reviewedOn: string;
  sources: Record<string, QuestionSourceInfo>;
  questions: CompactQuestion[];
};

export function compactBank(questions: readonly (Omit<BankQuestion, "source"> & { sourceId: string; source: QuestionSourceInfo })[], reviewedOn: string): BankFile {
  const sources: Record<string, QuestionSourceInfo> = {};
  const compact = questions.map(({ source, sourceId, reviewedOn: checked, ...rest }) => {
    sources[sourceId] = source;
    return { ...rest, sourceId, ...(checked === reviewedOn ? {} : { reviewedOn: checked }) };
  });
  return { format: 2, reviewedOn, sources, questions: compact };
}

// Turns a compact file back into full practice questions. Anything else (the older plain array a
// service worker may still have cached, or the Mizo translation map) passes through unchanged.
export function expandBank(value: unknown): unknown {
  if (!value || typeof value !== "object" || (value as BankFile).format !== 2) return value;
  const { reviewedOn, sources, questions } = value as BankFile;
  if (!Array.isArray(questions) || !sources || typeof sources !== "object") return null;
  return questions.map(({ sourceId, ...question }) => {
    const source = sources[sourceId];
    return source ? { ...question, reviewedOn: question.reviewedOn ?? reviewedOn, source } : null;
  });
}
