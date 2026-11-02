import { nursingCounts } from "../data/nursing-bank";
import { QuestionBankPreload } from "../lib/question-bank-preload";
import NursingPractice from "./nursing-practice";

export const metadata = {
  title: "Nursing Practice | MPSC Free Mock",
  description: "Free staff nurse exam practice for Mizoram Health & Family Welfare posts and AIIMS NORCET: 11 subjects, instant explanations and a timed 100-question mock test.",
};

// Only the question count per category goes into the page; the questions load from /question-bank/nursing.
export default function NursingPage() {
  return <><QuestionBankPreload names={["nursing"]} /><NursingPractice counts={nursingCounts()} /></>;
}
