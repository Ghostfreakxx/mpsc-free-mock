import Link from "next/link";
import LearningTrail from "../../learning-trail";
import { ArrowLeft } from "lucide-react";
import CourseLibrary from "./course-library";
import { subjects, syllabusBaseline, syllabusSource, syllabusChecked } from "./course";
import { recordingSummaries, writtenSummaries } from "./library-summary";
import styles from "./lecture.module.css";

export default function ClassLibrary() {
  const lectures = recordingSummaries();
  const studyLessons = writtenSummaries();
  return <main className={styles.page}>
    <header className={styles.header}>
      <Link href="/jee"><ArrowLeft size={17} /> JEE practice</Link>
      <Link href="/">MPSC FREE MOCK</Link>
    </header>
    <div className={`${styles.heading} cinema-entrance`}>
      <p>PHYSICS · CHEMISTRY · MATHEMATICS</p>
      <h1>JEE classes</h1>
      <span>{lectures.filter(lesson => (lesson.subject ?? "Physics") === "Physics").length} recorded Physics classes · {lectures.filter(lesson => lesson.subject === "Chemistry").length} recorded Chemistry classes · {lectures.filter(lesson => lesson.subject === "Mathematics").length} recorded Mathematics classes · {studyLessons.length} written lessons · Recorded foundations across all 54 units; further practice remains</span>
    </div>
    <LearningTrail current="courses" />
    <CourseLibrary lectures={lectures} studyLessons={studyLessons} />
    <section className={styles.notes} aria-label="Download subject transcripts">
      <h2>Offline subject transcripts</h2>
      <p><Link href="/jee/offline-learning" prefetch={false}>Open offline audio and caption packs</Link></p>
      <p>Download a text copy of the recorded lessons for an entire JEE subject.</p>
      <ul>{subjects.map(subject => <li key={subject}>
        <a href={`/jee/classes/transcripts/${subject.toLowerCase()}`} download>Download JEE {subject} transcripts</a>
      </li>)}</ul>
    </section>
    <footer className={styles.notes}><p>Following the official NTA syllabus: <a href={syllabusSource} target="_blank" rel="noreferrer">{syllabusBaseline}</a>. Unit names and order checked on {syllabusChecked}. Independently produced classes; no NTA endorsement. Coverage is tracked against the 2027 Paper 1 baseline. Recorded foundations do not establish exhaustive topic or problem coverage. JEE Advanced requires separate verification.</p></footer>
  </main>;
}
