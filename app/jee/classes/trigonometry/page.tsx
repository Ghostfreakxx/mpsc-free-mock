import LecturePlayer from '../lecture-player';
import { lectures } from '../lessons';
export default function TrigonometryClass(){return <LecturePlayer key="trigonometry" lesson={lectures.find(l=>l.id==='trigonometry')!}/>;}
