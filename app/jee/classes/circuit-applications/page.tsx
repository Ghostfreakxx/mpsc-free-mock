import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function CircuitApplicationsClass() {
  return <LecturePlayer key="circuit-applications" lesson={lectures.find(lesson => lesson.id === "circuit-applications")!} />;
}
