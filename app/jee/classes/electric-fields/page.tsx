import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ElectricFieldsClass() {
  return <LecturePlayer key="electric-fields" lesson={lectures.find(lesson => lesson.id === "electric-fields")!} />;
}
