import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ResistorNetworksClass() {
  return <LecturePlayer key="resistor-networks" lesson={lectures.find(lesson => lesson.id === "resistor-networks")!} />;
}
