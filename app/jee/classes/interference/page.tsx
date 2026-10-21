import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ClassPage() {
  return <LecturePlayer key="interference" lesson={lectures.find(lesson => lesson.id === "interference")!} />;
}
