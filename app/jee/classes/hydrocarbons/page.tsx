import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function HydrocarbonsClass() {
 return <LecturePlayer key="hydrocarbons" lesson={lectures.find(lesson => lesson.id === "hydrocarbons")!} />;
}
