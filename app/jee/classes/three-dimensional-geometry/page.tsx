import LecturePlayer from '../lecture-player';
import { lectures } from '../lessons';
export default function SpaceClass(){return <LecturePlayer key="three-dimensional-geometry" lesson={lectures.find(l=>l.id==='three-dimensional-geometry')!}/>;}
