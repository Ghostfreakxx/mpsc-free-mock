import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function RotationClass() {
  return <LecturePlayer key="rotation" lesson={lectures.find(lesson => lesson.id === "rotation")!} />;
}
