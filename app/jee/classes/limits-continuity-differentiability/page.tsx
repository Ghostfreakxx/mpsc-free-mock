import LecturePlayer from '../lecture-player';
import { lectures } from '../lessons';
export default function CalculusClass(){return <LecturePlayer key="limits-continuity-differentiability" lesson={lectures.find(l=>l.id==='limits-continuity-differentiability')!}/>;}
