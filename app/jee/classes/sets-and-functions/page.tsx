import LecturePlayer from '../lecture-player';
import { lectures } from '../lessons';
export default function SetsFunctionsClass(){return <LecturePlayer key="sets-and-functions" lesson={lectures.find(l=>l.id==='sets-and-functions')!}/>;}
