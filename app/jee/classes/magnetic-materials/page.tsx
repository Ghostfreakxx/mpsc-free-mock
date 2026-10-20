import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function MagneticMaterialsClass() {
  return <LecturePlayer key="magnetic-materials" lesson={lectures.find(lesson => lesson.id === "magnetic-materials")!} />;
}
