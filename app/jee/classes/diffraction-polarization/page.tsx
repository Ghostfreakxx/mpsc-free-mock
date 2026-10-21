import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ClassPage() {
  return <LecturePlayer key="diffraction-polarization" lesson={lectures.find(lesson => lesson.id === "diffraction-polarization")!} />;
}
