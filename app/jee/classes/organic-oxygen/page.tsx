import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function OrganicOxygenClass() {
 return <LecturePlayer key="organic-oxygen" lesson={lectures.find(lesson => lesson.id === "organic-oxygen")!} />;
}
