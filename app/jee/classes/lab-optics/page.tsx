import LecturePlayer from "../lecture-player";
import {lectures} from "../lessons";
export default function ClassPage() {
  return <LecturePlayer key="lab-optics" lesson={lectures.find(lesson=>lesson.id==="lab-optics")!} />;
}
