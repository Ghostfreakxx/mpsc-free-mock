import StreamPractice from "../stream-practice";
import { QuestionBankPreload } from "../lib/question-bank-preload";

export default function CuetPgPage() {
  return <><QuestionBankPreload names={["cuet-pg"]} /><StreamPractice
    route="/cuet-pg"
    title="CUET PG practice"
    eyebrow="COMMON UNIVERSITY ENTRANCE TEST · POSTGRADUATE"
    description="Choose a subject and topic, work through focused MCQs, and use explanations to strengthen your recall."
  /></>;
}
