import { lectures } from '../../jee/classes/lessons';
import type { PlayerLecture } from '../../jee/classes/lecture-player';
import map from '../../data/neet-physics-chemistry-map.json';

// Server-only caller: retain original IDs/order so the lazy diagrams keep their indexes.
export function sharedLesson(id:string):PlayerLecture|undefined {
 const recording=map.recordings.find(r=>r.id===id);
 if(!recording)return;
 const unit=map.units.find(u=>u.subject===recording.subject&&u.unit===recording.unit)!;
 const original=lectures.find(l=>l.id===id);
 if(!original)return;
 const focus=recording.focus;
 return {...original,subject:recording.subject as 'Physics'|'Chemistry',unit:recording.unit,
  progressKey:`neet.shared.${id}.lecture.v1`,
  scope:`${map.baseline} ${recording.subject} Unit ${unit.unit}: ${unit.title}. Shared JEE recording; original narration and quiz may include extensions. Focus chapters: ${focus.map(c=>c.number).join(', ')}. ${unit.review} ${unit.extra} ${map.scope} Original recording scope: ${original.scope}`,
  sources:[{title:`Official ${map.baseline} syllabus`,url:map.source},...original.sources.filter(s=>s.url!==map.source)],
  reuse:{unitTitle:`${recording.subject} Unit ${unit.unit}: ${unit.title}`,mapHref:`/neet/classes/physics-chemistry/${recording.subject.toLowerCase()}#unit-${unit.unit}`,focus,review:unit.review,extra:unit.extra},
 };
}
