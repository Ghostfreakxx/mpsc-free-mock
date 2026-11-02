import { publishedLawQuestions } from "../../data/law-mjs-bank";
import { QuestionBankPreload } from "../../lib/question-bank-preload";
import LawExam from "./law-exam";
import { LAW_BANK_NAME, LAW_SUBJECTS, type LawSubjectId } from "./syllabus";

export const metadata = {
  title: "Mizoram Judicial Service Prelims | Law Practice",
  description: "Free practice and timed mock tests for the Mizoram Judicial Service (Civil Judge) Preliminary Examination, on the BNS, BNSS, BSA, CPC, Constitution and more.",
};

export default function Page() {
  // Only the per-subject counts go to the client as props; the questions load from /question-bank/mjs-law.
  const published = publishedLawQuestions();
  const counts = Object.fromEntries(LAW_SUBJECTS.map(subject => [subject.id, published.filter(question => question.subject === subject.id).length])) as Record<LawSubjectId, number>;
  return <><QuestionBankPreload names={[LAW_BANK_NAME]} /><LawExam counts={counts} /></>;
}
