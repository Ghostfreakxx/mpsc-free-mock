import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CourseLibrary from "./course-library";
import { syllabusBaseline, syllabusSource, syllabusChecked } from "./course";
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
    <div className={styles.heading}>
      <p>PHYSICS · CHEMISTRY · MATHEMATICS</p>
      <h1>JEE classes</h1>
      <span>{lectures.filter(lesson => (lesson.subject ?? "Physics") === "Physics").length} recorded Physics classes · {lectures.filter(lesson => lesson.subject === "Chemistry").length} recorded Chemistry classes · {lectures.filter(lesson => lesson.subject === "Mathematics").length} recorded Mathematics classes · {studyLessons.length} written lessons · Recorded foundations across all 54 units; further practice remains</span>
    </div>
    <CourseLibrary lectures={lectures} studyLessons={studyLessons} />
    <footer className={styles.notes}><p>Following the official NTA syllabus: <a href={syllabusSource} target="_blank" rel="noreferrer">{syllabusBaseline}</a>. Unit names and order checked on {syllabusChecked}. Independently produced classes; no NTA endorsement. Coverage is tracked against the 2027 Paper 1 baseline. Recorded foundations do not establish exhaustive topic or problem coverage. JEE Advanced requires separate verification.</p></footer>
  </main>;
}
