import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ViscosityClass() {
  return <LecturePlayer key="viscosity-surface-tension" lesson={lectures.find(lesson => lesson.id === "viscosity-surface-tension")!} />;
}
