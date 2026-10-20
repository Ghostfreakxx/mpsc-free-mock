import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function LabLiquidMixturesClass() {
  return <LecturePlayer key="lab-liquid-mixtures" lesson={lectures.find(lesson => lesson.id === "lab-liquid-mixtures")!} />;
}
