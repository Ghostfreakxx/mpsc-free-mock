import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function KineticTheoryApplicationsClass() {
  return <LecturePlayer key="kinetic-theory-applications" lesson={lectures.find(lesson => lesson.id === "kinetic-theory-applications")!} />;
}
