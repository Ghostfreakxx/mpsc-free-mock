import LecturePlayer from "../lecture-player";
import {lectures} from "../lessons";

export default function ClassPage() {
  return <LecturePlayer key="atoms" lesson={lectures.find(lesson => lesson.id === "atoms")!} />;
}
