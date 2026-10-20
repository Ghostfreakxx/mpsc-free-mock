import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function BankedRoadLimitsClass() {
  return <LecturePlayer key="banked-road-limits" lesson={lectures.find(lesson => lesson.id === "banked-road-limits")!} />;
}
