import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function WorkEnergyClass() {
  return <LecturePlayer key="work-energy" lesson={lectures.find(lesson => lesson.id === "work-energy")!} />;
}
