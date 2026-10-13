import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function ChemicalKineticsClass() {
 return <LecturePlayer key="chemical-kinetics" lesson={lectures.find(lesson => lesson.id === "chemical-kinetics")!} />;
}
