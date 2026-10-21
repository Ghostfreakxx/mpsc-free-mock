import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function BiomoleculesClass() {
 return <LecturePlayer key="biomolecules" lesson={lectures.find(lesson => lesson.id === "biomolecules")!} />;
}
