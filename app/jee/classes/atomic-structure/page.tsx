import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function AtomicStructureClass() {
 return <LecturePlayer key="atomic-structure" lesson={lectures.find(lesson => lesson.id === "atomic-structure")!} />;
}
