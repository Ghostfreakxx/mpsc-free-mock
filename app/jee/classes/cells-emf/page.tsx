import LecturePlayer from "../lecture-player";
import { lectures } from "../lessons";

export default function CellsClass() {
  return <LecturePlayer key="cells-emf" lesson={lectures.find(lesson => lesson.id === "cells-emf")!} />;
}
