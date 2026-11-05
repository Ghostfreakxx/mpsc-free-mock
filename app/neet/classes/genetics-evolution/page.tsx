import LecturePlayer from '../../../jee/classes/lecture-player';
import { geneticsEvolutionLesson } from '../genetics-evolution-lesson';
export const metadata={title:'NEET Genetics and Evolution | Recorded class'};
export default function GeneticsEvolutionClass(){return <LecturePlayer lesson={geneticsEvolutionLesson} exam="NEET"/>;}
