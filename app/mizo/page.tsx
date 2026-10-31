import MpscPractice from "../mpsc-practice";
import { QuestionBankPreload } from "../lib/question-bank-preload";

export const metadata = {
  title: "MPSC Mizo + English practice",
  description: "Bilingual foundation practice with draft Mizo translations and original English questions.",
};

export default function Page() {
  return <><QuestionBankPreload names={["mpsc", "mpsc-mizo"]} /><MpscPractice bilingual /></>;
}
