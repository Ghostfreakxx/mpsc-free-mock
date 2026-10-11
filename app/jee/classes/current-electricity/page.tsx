import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function CurrentElectricityClass() {
  const lesson = lectures.find(item => item.id === "current-electricity");
  if (!lesson) return null;
  return <LecturePlayer lesson={lesson} />;
}
