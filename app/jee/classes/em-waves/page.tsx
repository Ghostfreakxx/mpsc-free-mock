import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ElectromagneticWavesClass() {
  return <LecturePlayer key="em-waves" lesson={lectures.find(lesson => lesson.id === "em-waves")!} />;
}
