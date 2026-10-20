import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function MaterialsApplicationsClass() {
  return <LecturePlayer key="materials-applications" lesson={lectures.find(lesson => lesson.id === "materials-applications")!} />;
}
