import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ThermalExpansionClass() {
  return <LecturePlayer key="thermal-expansion" lesson={lectures.find(lesson => lesson.id === "thermal-expansion")!} />;
}
