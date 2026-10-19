import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function OrganicHalogensClass() {
 return <LecturePlayer key="organic-halogens" lesson={lectures.find(lesson => lesson.id === "organic-halogens")!} />;
}
