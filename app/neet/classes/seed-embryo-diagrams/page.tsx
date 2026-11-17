import LecturePlayer from '../../../jee/classes/lecture-player';
import {seedEmbryoDiagramsLesson} from '../seed-embryo-diagrams-lesson';
export const metadata={title:'NEET Seed and Embryo Diagrams | Recorded class'};
export default function SeedEmbryoDiagramsClass(){return <LecturePlayer lesson={seedEmbryoDiagramsLesson} exam="NEET"/>;}
