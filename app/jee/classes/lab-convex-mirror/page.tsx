import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ConvexMirrorLabClass() {
  return <LecturePlayer key="lab-convex-mirror" lesson={lectures.find(lesson => lesson.id === "lab-convex-mirror")!} />;
}
