import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function AmpereClass() {
  return <LecturePlayer key="ampere-solenoids" lesson={lectures.find(lesson => lesson.id === "ampere-solenoids")!} />;
}
