import LecturePlayer from '../../../jee/classes/lecture-player';
import {physicsVectorsLesson} from '../physics-vectors-lesson';
export const metadata={title:'NEET Physics: Targeted recorded review'};
export default function ReviewClass(){return <LecturePlayer lesson={physicsVectorsLesson} exam="NEET"/>}
