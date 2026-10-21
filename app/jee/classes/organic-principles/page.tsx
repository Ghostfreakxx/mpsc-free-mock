import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function OrganicPrinciplesClass() {
  return <LecturePlayer key="organic-principles" lesson={lectures.find(lesson => lesson.id === "organic-principles")!} />;
}
