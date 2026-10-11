import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function HeatTransferClass() {
  return <LecturePlayer key="heat-transfer" lesson={lectures.find(lesson => lesson.id === "heat-transfer")!} />;
}
