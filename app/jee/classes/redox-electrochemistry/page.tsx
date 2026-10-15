import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function ElectrochemistryClass() {
 return <LecturePlayer key="redox-electrochemistry" lesson={lectures.find(lesson => lesson.id === "redox-electrochemistry")!} />;
}
