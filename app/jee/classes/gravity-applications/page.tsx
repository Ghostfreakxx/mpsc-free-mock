import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function GravityApplicationsClass() {
  return <LecturePlayer key="gravity-applications" lesson={lectures.find(lesson => lesson.id === "gravity-applications")!} />;
}
