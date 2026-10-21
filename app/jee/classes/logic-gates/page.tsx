import LecturePlayer from "../lecture-player";
import {lectures} from "../lessons";
export default function ClassPage() {
  return <LecturePlayer key="logic-gates" lesson={lectures.find(lesson=>lesson.id==="logic-gates")!} />;
}
