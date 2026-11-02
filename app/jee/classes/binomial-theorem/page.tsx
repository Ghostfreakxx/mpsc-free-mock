import LecturePlayer from '../lecture-player';
import { lectures } from '../lessons';
export default function BinomialClass(){return <LecturePlayer key="binomial-theorem" lesson={lectures.find(l=>l.id==='binomial-theorem')!}/>;}
