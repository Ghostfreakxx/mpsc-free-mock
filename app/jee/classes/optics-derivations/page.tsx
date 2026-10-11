import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function OpticsDerivationsClass() {
  return <LecturePlayer key="optics-derivations" lesson={lectures.find(lesson => lesson.id === "optics-derivations")!} />;
}
