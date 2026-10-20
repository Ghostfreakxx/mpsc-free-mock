import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ClassPage() {
  return <LecturePlayer key="energy-applications" lesson={lectures.find(lesson => lesson.id === "energy-applications")!} />;
}
