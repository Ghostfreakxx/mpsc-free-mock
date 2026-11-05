import LecturePlayer from '../../../jee/classes/lecture-player';
import { ecologyLesson } from '../ecology-lesson';
export const metadata={title:'NEET Ecology and Environment | Recorded class'};
export default function EcologyClass(){return <LecturePlayer lesson={ecologyLesson} exam="NEET"/>;}
