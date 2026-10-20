import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function InductionApplicationsClass() {
  return <LecturePlayer key="induction-applications" lesson={lectures.find(lesson => lesson.id === "induction-applications")!} />;
}
