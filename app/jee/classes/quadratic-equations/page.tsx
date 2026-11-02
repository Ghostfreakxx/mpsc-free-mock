import LecturePlayer from '../lecture-player';
import { lectures } from '../lessons';
export default function ComplexQuadraticsClass(){return <LecturePlayer key="quadratic-equations" lesson={lectures.find(l=>l.id==='quadratic-equations')!}/>;}
