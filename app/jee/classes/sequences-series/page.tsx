import LecturePlayer from '../lecture-player';
import { lectures } from '../lessons';
export default function SequencesClass(){return <LecturePlayer key="sequences-series" lesson={lectures.find(l=>l.id==='sequences-series')!}/>;}
