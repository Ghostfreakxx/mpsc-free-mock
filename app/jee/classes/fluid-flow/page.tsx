import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function FluidFlowClass() {
  return <LecturePlayer key="fluid-flow" lesson={lectures.find(lesson => lesson.id === "fluid-flow")!} />;
}
