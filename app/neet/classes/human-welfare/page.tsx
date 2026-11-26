import { biologyNotesHref } from "../biology-companions";
import LecturePlayer from '../../../jee/classes/lecture-player';
import { humanWelfareLesson } from '../human-welfare-lesson';
export const metadata={title:'NEET Biology and Human Welfare | Recorded class'};
export default function HumanWelfareClass(){return <LecturePlayer lesson={humanWelfareLesson} exam="NEET" writtenHref={biologyNotesHref("human-welfare")}/>;}
