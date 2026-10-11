import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function FluidStaticsClass() {
  return <LecturePlayer key="fluid-statics" lesson={lectures.find(lesson => lesson.id === "fluid-statics")!} />;
}
