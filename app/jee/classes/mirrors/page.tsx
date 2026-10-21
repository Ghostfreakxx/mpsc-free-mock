import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function MirrorsClass() {
  return <LecturePlayer key="mirrors" lesson={lectures.find(lesson => lesson.id === "mirrors")!} />;
}
