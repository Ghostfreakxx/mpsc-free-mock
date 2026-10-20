import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function GaussLawClass() {
  return <LecturePlayer key="gauss-law" lesson={lectures.find(lesson => lesson.id === "gauss-law")!} />;
}
