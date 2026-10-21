import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function CoordinationCompoundsClass() {
 return <LecturePlayer key="coordination-compounds" lesson={lectures.find(lesson => lesson.id === "coordination-compounds")!} />;
}
