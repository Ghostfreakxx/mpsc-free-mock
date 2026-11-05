import Link from 'next/link';
import styles from '../../../jee/classes/lecture.module.css';
import map from '../../../data/neet-physics-chemistry-map.json';
export const metadata={title:'NEET Physics and Chemistry | Syllabus and shared classes'};
export default function SharedMap(){return <main className={styles.page}>
 <header className={styles.header}><Link href="/neet/classes" prefetch={false}>← NEET classes</Link><Link href="/neet">NEET practice</Link></header>
 <div className={styles.heading}><p>NEET UG · PHYSICS &amp; CHEMISTRY</p><h1>Physics and Chemistry study map</h1><span>40 syllabus units · {map.recordings.length} shared recorded classes</span></div>
 <section className={styles.notes}><p>Use existing JEE explanations for the overlapping NEET foundations. The audio, boards, captions and original questions are retained. Each shared class opens with NEET navigation and separate saved progress.</p><p>{map.scope}</p><p>Original narration can mention JEE. Extra chapters and questions are supporting material; they do not add requirements to the NEET syllabus.</p></section>
 {['Physics','Chemistry'].map(subject=><section className={styles.notes} key={subject}><h2>{subject}</h2><p>20 units · {map.recordings.filter(r=>r.subject===subject).length} shared recordings · Chapter guidance and review priorities</p><Link href={`/neet/classes/physics-chemistry/${subject.toLowerCase()}`} prefetch={false}>Open {subject} unit map →</Link></section>)}
 <section className={styles.notes}><h2>Coverage and next review</h2><p>All 40 units have mapped foundation recordings. This is not a completed required-subheading audit. Review experimental observations and graphs, named Chemistry preparations and tests, and mixed NEET questions before commissioning replacement classes.</p><p>Physics includes the convex-mirror and unknown-liquid companions. Chemistry practical chapters 42–51 include the focused preparation, sol, heat and iodide–peroxide review.</p><p><a href={map.source} target="_blank" rel="noreferrer">Official {map.baseline} syllabus</a> · Checked {map.checked}. No verified 2027 NEET baseline or NTA endorsement is claimed.</p></section>
 </main>}
