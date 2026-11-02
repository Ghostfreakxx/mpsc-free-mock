import LecturePlayer from '../lecture-player';
import { lectures } from '../lessons';
export default function CoordinateClass(){return <LecturePlayer key="coordinate-geometry" lesson={lectures.find(l=>l.id==='coordinate-geometry')!}/>;}
