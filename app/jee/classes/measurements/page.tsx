import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function MeasurementClass() {
  return <LecturePlayer key="measurements" lesson={lectures[1]} />;
}
