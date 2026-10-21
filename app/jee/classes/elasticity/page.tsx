import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function ElasticityClass() {
  return <LecturePlayer key="elasticity" lesson={lectures.find(lesson => lesson.id === "elasticity")!} />;
}
