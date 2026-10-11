import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ClassPage() {
  return <LecturePlayer key="laws-motion-applications" lesson={lectures.find(lesson => lesson.id === "laws-motion-applications")!} />;
}
