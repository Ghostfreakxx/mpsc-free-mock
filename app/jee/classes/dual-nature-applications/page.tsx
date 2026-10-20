import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function DualNatureApplicationsClass() {
  return <LecturePlayer key="dual-nature-applications" lesson={lectures.find(lesson => lesson.id === "dual-nature-applications")!} />;
}
