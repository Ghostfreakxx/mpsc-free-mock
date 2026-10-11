import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function KineticTheoryClass() {
  return <LecturePlayer key="kinetic-theory" lesson={lectures.find(lesson => lesson.id === "kinetic-theory")!} />;
}
