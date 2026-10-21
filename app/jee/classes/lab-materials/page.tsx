import LecturePlayer from "../lecture-player";
import {lectures} from "../lessons";
export default function ClassPage() {
  return <LecturePlayer key="lab-materials" lesson={lectures.find(lesson=>lesson.id==="lab-materials")!} />;
}
