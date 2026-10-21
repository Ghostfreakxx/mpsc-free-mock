import LecturePlayer from "../lecture-player";
import {lectures} from "../lessons";

export default function GalvanometersClass() {
  return <LecturePlayer key="galvanometers" lesson={lectures.find(lesson => lesson.id === "galvanometers")!} />;
}
