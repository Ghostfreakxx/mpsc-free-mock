import LecturePlayer from "../lecture-player";
import {lectures} from "../lessons";

export default function ClassPage() {
  return <LecturePlayer key="matter-waves" lesson={lectures.find(lesson => lesson.id === "matter-waves")!} />;
}
