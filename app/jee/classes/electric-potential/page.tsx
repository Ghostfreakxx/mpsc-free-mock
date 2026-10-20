import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ElectricPotentialClass() {
  return <LecturePlayer key="electric-potential" lesson={lectures.find(lesson => lesson.id === "electric-potential")!} />;
}
