import LecturePlayer from '../../../jee/classes/lecture-player';
import { cellLesson } from '../cell-lesson';
export const metadata = { title: 'NEET Cell: The Unit of Life | Recorded class' };
export default function CellClass() { return <LecturePlayer lesson={cellLesson} exam="NEET" />; }
