import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ClassPage() {
  return <LecturePlayer key="ac-basics" lesson={lectures.find(lesson => lesson.id === "ac-basics")!} />;
}
