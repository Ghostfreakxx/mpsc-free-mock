import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function MagneticFieldsClass() {
  return <LecturePlayer key="magnetic-fields" lesson={lectures.find(lesson => lesson.id === "magnetic-fields")!} />;
}
