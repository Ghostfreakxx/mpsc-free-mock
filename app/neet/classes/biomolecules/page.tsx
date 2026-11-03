import LecturePlayer from '../../../jee/classes/lecture-player';
import { biomoleculesLesson } from '../biomolecules-lesson';
export const metadata = { title: 'NEET Biomolecules | Recorded class' };
export default function BiomoleculesClass(){return <LecturePlayer lesson={biomoleculesLesson} exam="NEET" />;}
