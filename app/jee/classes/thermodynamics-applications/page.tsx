import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ThermodynamicsApplicationsClass() {
  return <LecturePlayer key="thermodynamics-applications" lesson={lectures.find(lesson => lesson.id === "thermodynamics-applications")!} />;
}
