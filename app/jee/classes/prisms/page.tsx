import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ClassPage() {
  return <LecturePlayer key="prisms" lesson={lectures.find(lesson => lesson.id === "prisms")!} />;
}
