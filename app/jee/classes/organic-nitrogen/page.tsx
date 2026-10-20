import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function OrganicNitrogenClass() {
 return <LecturePlayer key="organic-nitrogen" lesson={lectures.find(lesson => lesson.id === "organic-nitrogen")!} />;
}
