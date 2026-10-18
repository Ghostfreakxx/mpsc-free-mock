import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function MoleConceptClass() {
 return <LecturePlayer key="mole-concept" lesson={lectures.find(lesson => lesson.id === "mole-concept")!} />;
}
