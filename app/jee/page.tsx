import StreamPractice from "../stream-practice";
import { QuestionBankPreload } from "../lib/question-bank-preload";

export default function JeePage() {
  return <><QuestionBankPreload names={["jee"]} /><StreamPractice
    route="/jee"
    title="JEE Main practice"
    eyebrow="JOINT ENTRANCE EXAMINATION · MAIN"
    description="Practice Physics, Chemistry, and Mathematics with topic filters, clear explanations, and spaced review."
  /></>;
}
