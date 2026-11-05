import LecturePlayer from '../../../jee/classes/lecture-player';
import { biotechnologyLesson } from '../biotechnology-lesson';
export const metadata={title:'NEET Biotechnology and Its Applications | Recorded class'};
export default function BiotechnologyClass(){return <LecturePlayer lesson={biotechnologyLesson} exam="NEET"/>;}
