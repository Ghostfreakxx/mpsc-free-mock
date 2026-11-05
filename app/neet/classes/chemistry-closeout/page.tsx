import LecturePlayer from '../../../jee/classes/lecture-player';
import {chemistryCloseoutLesson} from '../chemistry-closeout-lesson';
export const metadata={title:'NEET Chemistry: Targeted recorded review'};
export default function ReviewClass(){return <LecturePlayer lesson={chemistryCloseoutLesson} exam="NEET"/>}
