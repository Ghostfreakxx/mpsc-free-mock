import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function OpticsApplicationsClass() {
  return <LecturePlayer key="optics-applications" lesson={lectures.find(lesson => lesson.id === "optics-applications")!} />;
}
