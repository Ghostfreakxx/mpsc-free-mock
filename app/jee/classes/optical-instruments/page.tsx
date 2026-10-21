import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ClassPage() {
  return <LecturePlayer key="optical-instruments" lesson={lectures.find(lesson => lesson.id === "optical-instruments")!} />;
}
