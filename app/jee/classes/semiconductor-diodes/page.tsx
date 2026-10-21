import LecturePlayer from "../lecture-player";
import {lectures} from "../lessons";
export default function ClassPage() {
  return <LecturePlayer key="semiconductor-diodes" lesson={lectures.find(lesson=>lesson.id==="semiconductor-diodes")!} />;
}
