import LecturePlayer from '../lecture-player';
import { lectures } from '../lessons';
export default function StatisticsClass(){return <LecturePlayer key="statistics-probability" lesson={lectures.find(l=>l.id==='statistics-probability')!}/>;}
