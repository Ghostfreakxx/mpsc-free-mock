import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function PBlockClass() {
 return <LecturePlayer key="p-block" lesson={lectures.find(lesson => lesson.id === "p-block")!} />;
}
