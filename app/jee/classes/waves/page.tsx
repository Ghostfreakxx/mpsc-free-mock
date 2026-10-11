import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function WavesClass() {
  return <LecturePlayer key="waves" lesson={lectures.find(lesson => lesson.id === "waves")!} />;
}
