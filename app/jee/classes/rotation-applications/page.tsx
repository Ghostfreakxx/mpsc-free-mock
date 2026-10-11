import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function RotationApplicationsClass() {
  return <LecturePlayer key="rotation-applications" lesson={lectures.find(lesson => lesson.id === "rotation-applications")!} />;
}
