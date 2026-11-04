import LecturePlayer from '../../../jee/classes/lecture-player';
import { humanPhysiologyLesson } from '../human-physiology-lesson';
export const metadata={title:'NEET Human Physiology | Recorded class'};
export default function HumanPhysiologyClass(){return <LecturePlayer lesson={humanPhysiologyLesson} exam="NEET"/>;}
