import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function EquilibriumClass() {
 return <LecturePlayer key="equilibrium" lesson={lectures.find(lesson => lesson.id === "equilibrium")!} />;
}
