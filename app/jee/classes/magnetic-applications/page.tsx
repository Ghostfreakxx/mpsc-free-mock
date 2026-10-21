import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function MagneticApplicationsClass() {
  return <LecturePlayer key="magnetic-applications" lesson={lectures.find(lesson => lesson.id === "magnetic-applications")!} />;
}
