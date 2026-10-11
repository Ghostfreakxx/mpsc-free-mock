import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function StraightLineClass() {
  return <LecturePlayer key="straight-line-motion" lesson={lectures.find(lesson => lesson.id === "straight-line-motion")!} />;
}
