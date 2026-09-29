import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function UnitsClass() {
  return <LecturePlayer key="units" lesson={lectures[0]} />;
}
