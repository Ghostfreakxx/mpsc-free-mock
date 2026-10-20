import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CourseLibrary from "./course-library";
import { syllabusBaseline, syllabusSource, syllabusChecked } from "./course";
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
      <span>{lectures.filter(lesson => (lesson.subject ?? "Physics") === "Physics").length} recorded Physics classes · {lectures.filter(lesson => lesson.subject === "Chemistry").length} recorded Chemistry classes · {studyLessons.length} written lessons · More Chemistry and Mathematics classes in development</span>
    </div>
    <CourseLibrary />
    <footer className={styles.notes}><p>Following the official NTA syllabus: <a href={syllabusSource} target="_blank" rel="noreferrer">{syllabusBaseline}</a>. Unit names and order checked on {syllabusChecked}. Independently produced classes; no NTA endorsement. Coverage is tracked against this 2026 baseline; 2027 and JEE Advanced require separate verification.</p></footer>
  </main>;
}
