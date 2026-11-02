// Server-only: the Mizoram Judicial Service (Civil Judge) prelims question bank. Each subject's
// questions live in app/data/law-mjs/<subject>.json. Never import this from a "use client" file;
// the browser loads published questions from /question-bank/mjs-law.
import coi from "./law-mjs/coi.json";
import cpc from "./law-mjs/cpc.json";
import bnss from "./law-mjs/bnss.json";
import tpa from "./law-mjs/tpa.json";
import ica from "./law-mjs/ica.json";
import bns from "./law-mjs/bns.json";
import bsa from "./law-mjs/bsa.json";
import tort from "./law-mjs/tort.json";
import gk from "./law-mjs/gk.json";
import apt from "./law-mjs/apt.json";
import eng from "./law-mjs/eng.json";
import { lawQuestionProblems, publish } from "../law/mjs/bank-rules.ts";
import { LAW_SUBJECTS, type LawQuestion, type LawSubjectId, type PublishedLawQuestion } from "../law/mjs/syllabus.ts";

const files: Record<LawSubjectId, unknown[]> = { coi, cpc, bnss, tpa, ica, bns, bsa, tort, gk, apt, eng };

// Checked when the bank is first used (at build time), so a malformed file fails the build.
function loadAll(): LawQuestion[] {
  const problems = LAW_SUBJECTS.flatMap(subject => files[subject.id].flatMap(question => lawQuestionProblems(question, subject.id)));
  if (problems.length) throw new Error(`Law question bank is invalid:\n${problems.join("\n")}`);
  return LAW_SUBJECTS.flatMap(subject => files[subject.id] as LawQuestion[]);
}

let cache: LawQuestion[] | null = null;
export const lawQuestions = () => (cache ??= loadAll());
export const publishedLawQuestions = (): PublishedLawQuestion[] => publish(lawQuestions());
