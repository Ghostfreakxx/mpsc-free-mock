import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function AtomicNuclearApplicationsClass() {
  return <LecturePlayer key="atomic-nuclear-applications" lesson={lectures.find(lesson => lesson.id === "atomic-nuclear-applications")!} />;
}
