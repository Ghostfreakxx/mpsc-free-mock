import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ElectrostaticsApplicationsClass() {
  return <LecturePlayer key="electrostatics-applications" lesson={lectures.find(lesson => lesson.id === "electrostatics-applications")!} />;
}
