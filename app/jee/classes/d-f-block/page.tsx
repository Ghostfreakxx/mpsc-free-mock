import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function DFBlockClass() {
 return <LecturePlayer key="d-f-block" lesson={lectures.find(lesson => lesson.id === "d-f-block")!} />;
}
