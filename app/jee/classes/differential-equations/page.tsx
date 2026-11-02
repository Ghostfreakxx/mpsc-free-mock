import LecturePlayer from '../lecture-player';
import { lectures } from '../lessons';
export default function DifferentialClass(){return <LecturePlayer key="differential-equations" lesson={lectures.find(l=>l.id==='differential-equations')!}/>;}
