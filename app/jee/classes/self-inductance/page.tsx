import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ClassPage() {
  return <LecturePlayer key="self-inductance" lesson={lectures.find(lesson => lesson.id === "self-inductance")!} />;
}
