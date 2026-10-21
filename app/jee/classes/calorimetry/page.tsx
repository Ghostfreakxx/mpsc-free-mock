import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function CalorimetryClass() {
  return <LecturePlayer key="calorimetry" lesson={lectures.find(lesson => lesson.id === "calorimetry")!} />;
}
