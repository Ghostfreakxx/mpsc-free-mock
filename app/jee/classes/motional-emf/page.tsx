import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function MotionalEmfClass() {
  return <LecturePlayer key="motional-emf" lesson={lectures.find(lesson => lesson.id === "motional-emf")!} />;
}
