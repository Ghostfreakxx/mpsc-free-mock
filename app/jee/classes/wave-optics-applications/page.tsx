import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function WaveOpticsApplicationsClass() {
  return <LecturePlayer key="wave-optics-applications" lesson={lectures.find(lesson => lesson.id === "wave-optics-applications")!} />;
}
