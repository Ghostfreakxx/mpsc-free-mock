import LecturePlayer from "../lecture-player";
import {lectures} from "../lessons";

export default function DipoleFieldsClass() {
  return <LecturePlayer key="dipole-fields" lesson={lectures.find(lesson => lesson.id === "dipole-fields")!} />;
}
