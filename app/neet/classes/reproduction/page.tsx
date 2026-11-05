import LecturePlayer from '../../../jee/classes/lecture-player';
import { reproductionLesson } from '../reproduction-lesson';
export const metadata={title:'NEET Reproduction | Recorded class'};
export default function ReproductionClass(){return <LecturePlayer lesson={reproductionLesson} exam="NEET"/>;}
