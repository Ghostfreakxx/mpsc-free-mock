import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function GravityClass() {
  return <LecturePlayer key="gravity" lesson={lectures.find(lesson => lesson.id === "gravity")!} />;
}
