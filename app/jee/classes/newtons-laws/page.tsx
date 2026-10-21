import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function NewtonsClass() {
  return <LecturePlayer key="newtons-laws" lesson={lectures.find(lesson => lesson.id === "newtons-laws")!} />;
}
