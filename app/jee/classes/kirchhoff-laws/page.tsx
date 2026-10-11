import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function KirchhoffClass() {
  return <LecturePlayer key="kirchhoff-laws" lesson={lectures.find(lesson => lesson.id === "kirchhoff-laws")!} />;
}
