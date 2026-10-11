import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function WavesApplicationsClass() {
  return <LecturePlayer key="waves-applications" lesson={lectures.find(lesson => lesson.id === "waves-applications")!} />;
}
