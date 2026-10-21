import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ClassPage() {
  return <LecturePlayer key="lcr-resonance" lesson={lectures.find(lesson => lesson.id === "lcr-resonance")!} />;
}
