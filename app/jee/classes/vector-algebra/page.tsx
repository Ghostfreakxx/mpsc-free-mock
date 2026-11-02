import LecturePlayer from '../lecture-player';
import { lectures } from '../lessons';
export default function VectorClass(){return <LecturePlayer key="vector-algebra" lesson={lectures.find(l=>l.id==='vector-algebra')!}/>;}
