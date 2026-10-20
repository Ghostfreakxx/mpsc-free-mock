import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function PurificationAnalysisClass() {
 return <LecturePlayer key="purification-analysis" lesson={lectures.find(lesson => lesson.id === "purification-analysis")!} />;
}
