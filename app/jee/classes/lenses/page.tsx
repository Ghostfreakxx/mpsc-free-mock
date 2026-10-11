import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ClassPage() {
  return <LecturePlayer key="lenses" lesson={lectures.find(lesson => lesson.id === "lenses")!} />;
}
