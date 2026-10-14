import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function ChemicalThermodynamicsClass() {
 return <LecturePlayer key="chemical-thermodynamics" lesson={lectures.find(lesson => lesson.id === "chemical-thermodynamics")!} />;
}
