import LecturePlayer from "../lecture-player";
import {lectures} from "../lessons";
export default function ClassPage() {
  return <LecturePlayer key="lab-devices" lesson={lectures.find(lesson=>lesson.id==="lab-devices")!} />;
}
