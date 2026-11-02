import LecturePlayer from '../lecture-player';
import { lectures } from '../lessons';

export default function MatricesDeterminantsClass() {
  return <LecturePlayer key="matrices-determinants" lesson={lectures.find(lesson=>lesson.id==='matrices-determinants')!}/>;
}
