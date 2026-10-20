import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function BridgesClass() {
  return <LecturePlayer key="bridges" lesson={lectures.find(lesson => lesson.id === "bridges")!} />;
}
