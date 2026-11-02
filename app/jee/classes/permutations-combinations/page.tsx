import LecturePlayer from '../lecture-player';
import { lectures } from '../lessons';
export default function CountingClass(){return <LecturePlayer key="permutations-combinations" lesson={lectures.find(l=>l.id==='permutations-combinations')!}/>;}
