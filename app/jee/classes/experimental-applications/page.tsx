import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function ExperimentalApplicationsClass() {
  return <LecturePlayer key="experimental-applications" lesson={lectures.find(lesson => lesson.id === "experimental-applications")!} />;
}
