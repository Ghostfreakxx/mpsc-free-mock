import MpscPractice from "../mpsc-practice";
import { QuestionBankPreload } from "../lib/question-bank-preload";

export default function Page() {
  return <><QuestionBankPreload names={["mpsc"]} /><MpscPractice /></>;
}
