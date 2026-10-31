import StreamPractice from "../stream-practice";
import { QuestionBankPreload } from "../lib/question-bank-preload";

export default function NeetPage() {
  return <><QuestionBankPreload names={["neet"]} /><StreamPractice
    route="/neet"
    title="NEET practice"
    eyebrow="NEET UG · BIOLOGY, CHEMISTRY & PHYSICS"
    description="Practice Biology, Chemistry, and Physics with focused questions, worked explanations, and spaced review."
  /></>;
}
