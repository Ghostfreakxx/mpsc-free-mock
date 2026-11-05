import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from '../../../../jee/classes/lecture.module.css';
import map from '../../../../data/neet-physics-chemistry-map.json';
export const dynamicParams=false;
export function generateStaticParams(){return[{subject:'physics'},{subject:'chemistry'}]}
export async function generateMetadata({params}:{params:Promise<{subject:string}>}){const{subject}=await params;return{title:`NEET ${subject==='physics'?'Physics':'Chemistry'} | Unit study map`}}
export default async function SubjectMap({params}:{params:Promise<{subject:string}>}){
 const{subject:slug}=await params;if(!['physics','chemistry'].includes(slug))notFound();const subject=slug==='physics'?'Physics':'Chemistry';
 return <main className={styles.page}>
 <header className={styles.header}><Link href="/neet/classes/physics-chemistry" prefetch={false}>← Physics and Chemistry map</Link><Link href="/neet/classes" prefetch={false}>NEET classes</Link></header>
 <div className={styles.heading}><p>NEET UG · {subject.toUpperCase()}</p><h1>{subject} unit map</h1><span>{map.baseline} · 20 units · Shared foundations</span></div>
 <section className={styles.notes}><p>{map.scope}</p><p>Focus buttons in each class use the original chapter numbering. The full original recording and quiz remain available, with NEET progress saved separately from JEE.</p><a href={map.source} target="_blank" rel="noreferrer">Official syllabus · checked {map.checked}</a></section>
 <section className={styles.notes}><Link href={`/neet/classes/physics-chemistry/review#${slug}`} prefetch={false}>Detailed {subject} subheading review →</Link><p><Link href={subject==='Physics'?'/neet/classes/physics-vectors':'/neet/classes/chemistry-closeout'} prefetch={false}>Watch targeted {subject} supplement →</Link></p></section>
 <nav aria-label={`${subject} units`} className={styles.notes}>{map.units.filter(u=>u.subject===subject).map(u=><p key={u.unit}><a href={`#unit-${u.unit}`}>{u.unit}. {u.title}</a></p>)}</nav>
 {map.units.filter(u=>u.subject===subject).map(u=><section className={styles.notes} key={u.unit} id={`unit-${u.unit}`} aria-labelledby={`heading-${u.unit}`}>
 <h2 id={`heading-${u.unit}`}>Unit {u.unit}: {u.title}</h2><p>{u.topics}</p>
 {u.ids.map(id=>{const r=map.recordings.find(r=>r.id===id)!;return <article key={id}><h3>{r.title}</h3><p>{r.chapterCount} narrated chapters · {Math.round(r.duration/60)} minutes · {r.quizCount} original questions</p><Link href={`/neet/classes/shared/${id}`} prefetch={false}>Watch {r.title} →</Link><details><summary>NEET focus chapters</summary><ol>{r.focus.map(c=><li key={c.number} value={c.number}>{c.title}</li>)}</ol></details></article>})}
 <p><strong>Review:</strong> {u.review}</p><p><strong>Scope:</strong> {u.extra}</p></section>)}
 </main>;
}
