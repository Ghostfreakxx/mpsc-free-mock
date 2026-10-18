import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function PeriodicTrendsClass() {
 return <LecturePlayer key="periodic-trends" lesson={lectures.find(lesson => lesson.id === "periodic-trends")!} />;
}
