import LecturePlayer from "../lecture-player";
import {lectures} from "../lessons";

export default function WireForcesClass() {
  return <LecturePlayer key="wire-forces" lesson={lectures.find(lesson => lesson.id === "wire-forces")!} />;
}
