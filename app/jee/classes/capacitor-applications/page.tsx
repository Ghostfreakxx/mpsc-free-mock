import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function CapacitorApplicationsClass() {
  return <LecturePlayer key="capacitor-applications" lesson={lectures.find(lesson => lesson.id === "capacitor-applications")!} />;
}
