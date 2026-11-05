import { notFound } from 'next/navigation';
import LecturePlayer from '../../../../jee/classes/lecture-player';
import { sharedLesson } from '../../shared-lesson';
import map from '../../../../data/neet-physics-chemistry-map.json';
export const dynamicParams=false;
export function generateStaticParams(){return map.recordings.map(r=>({slug:r.id}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const r=map.recordings.find(r=>r.id===slug);return{title:r?`NEET ${r.subject}: ${r.title} | Shared recorded class`:'NEET recorded class'}}
export default async function SharedClass({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const lesson=sharedLesson(slug);if(!lesson)notFound();return <LecturePlayer key={lesson.progressKey} lesson={lesson} exam="NEET"/>}
