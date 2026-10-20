import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function ChemicalBondingClass() {
 return <LecturePlayer key="chemical-bonding" lesson={lectures.find(lesson => lesson.id === "chemical-bonding")!} />;
}
