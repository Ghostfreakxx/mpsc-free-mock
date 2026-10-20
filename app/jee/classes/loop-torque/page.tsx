import LecturePlayer from "../lecture-player";
import {lectures} from "../lessons";

export default function LoopTorqueClass() {
  return <LecturePlayer key="loop-torque" lesson={lectures.find(lesson => lesson.id === "loop-torque")!} />;
}
