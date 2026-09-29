import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CourseLibrary from "./course-library";
import { syllabusBaseline, syllabusSource } from "./course";
import { studyLessons } from "./study-lessons";
import { lectures } from "./lessons";
import styles from "./lecture.module.css";

export default function ClassLibrary() {
  return <main className={styles.page}>
    <header className={styles.header}>
      <Link href="/jee"><ArrowLeft size={17} /> JEE practice</Link>
      <Link href="/">MPSC FREE MOCK</Link>
    </header>
    <div className={styles.heading}>
      <p>PHYSICS · CHEMISTRY · MATHEMATICS</p>
      <h1>JEE classes</h1>
      <span>{lectures.length} recorded classes · {studyLessons.length} written lessons · Course in development</span>
    </div>
    <CourseLibrary />
    <footer className={styles.notes}><p>Baseline: <a href={syllabusSource} target="_blank" rel="noreferrer">{syllabusBaseline}</a>. Course map checked 30 September 2026. This is not a verified 2027 or JEE Advanced syllabus.</p></footer>
  </main>;
}
