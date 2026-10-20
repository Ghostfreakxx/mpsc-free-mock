import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function PracticalChemistryClass() {
 return <LecturePlayer key="practical-chemistry" lesson={lectures.find(lesson => lesson.id === "practical-chemistry")!} />;
}
