import ExamSimulator from "../../exam-simulator/exam-simulator";
import { getReviewedQuestions } from "../../data/reviewed-content";

export const metadata = { title: "JEE Mathematics timed practice | Free MPSC Mock" };

export default function MathematicsTimedPractice() {
  const count = getReviewedQuestions("jee").filter(question => question.subject === "Mathematics").length;
  return <ExamSimulator mathOnly poolSizes={{ jee: count, mpsc: 0, neet: 0, "cuet-pg": 0 }} />;
}
