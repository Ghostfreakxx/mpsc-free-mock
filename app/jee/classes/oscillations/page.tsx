import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function OscillationsClass() {
  return <LecturePlayer key="oscillations" lesson={lectures.find(lesson => lesson.id === "oscillations")!} />;
}
