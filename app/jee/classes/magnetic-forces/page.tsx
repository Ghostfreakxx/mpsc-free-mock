import LecturePlayer from "../lecture-player";
import {lectures} from "../lessons";

export default function MagneticForcesClass() {
  return <LecturePlayer key="magnetic-forces" lesson={lectures.find(lesson => lesson.id === "magnetic-forces")!} />;
}
