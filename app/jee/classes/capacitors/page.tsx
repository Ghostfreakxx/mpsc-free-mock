import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function CapacitorsClass() {
  return <LecturePlayer key="capacitors" lesson={lectures.find(lesson => lesson.id === "capacitors")!} />;
}
