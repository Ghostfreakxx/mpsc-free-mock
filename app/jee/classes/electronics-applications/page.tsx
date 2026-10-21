import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";
export default function ElectronicsApplicationsClass() {
  return <LecturePlayer key="electronics-applications" lesson={lectures.find(lesson => lesson.id === "electronics-applications")!} />;
}
