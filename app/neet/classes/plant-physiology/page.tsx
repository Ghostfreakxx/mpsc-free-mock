import { biologyNotesHref } from "../biology-companions";
import LecturePlayer from '../../../jee/classes/lecture-player';
import { plantPhysiologyLesson } from '../plant-physiology-lesson';
export const metadata={title:'NEET Plant Physiology | Recorded class'};
export default function PlantPhysiologyClass(){return <LecturePlayer lesson={plantPhysiologyLesson} exam="NEET" writtenHref={biologyNotesHref("plant-physiology")}/>;}
