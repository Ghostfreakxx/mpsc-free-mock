import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function FaradayLenzClass() {
  return <LecturePlayer key="faraday-lenz" lesson={lectures.find(lesson => lesson.id === "faraday-lenz")!} />;
}
