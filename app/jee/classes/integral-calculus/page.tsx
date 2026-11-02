import LecturePlayer from '../lecture-player';
import { lectures } from '../lessons';
export default function IntegralClass(){return <LecturePlayer key="integral-calculus" lesson={lectures.find(l=>l.id==='integral-calculus')!}/>;}
