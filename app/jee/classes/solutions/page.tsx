import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function SolutionsClass() {
 return <LecturePlayer key="solutions" lesson={lectures.find(lesson => lesson.id === "solutions")!} />;
}
