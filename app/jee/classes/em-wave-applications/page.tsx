import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function EmWaveApplicationsClass() {
  return <LecturePlayer key="em-wave-applications" lesson={lectures.find(lesson => lesson.id === "em-wave-applications")!} />;
}
