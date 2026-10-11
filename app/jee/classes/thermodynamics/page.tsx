import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ThermodynamicsClass() {
  return <LecturePlayer key="thermodynamics" lesson={lectures.find(lesson => lesson.id === "thermodynamics")!} />;
}
