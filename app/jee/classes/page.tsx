import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, BookOpen } from "lucide-react";
import { lectures } from "./lessons";
import styles from "./lecture.module.css";

export default function ClassLibrary() {
  return <main className={styles.page}>
    <header className={styles.header}>
      <Link href="/jee"><ArrowLeft size={17} /> JEE practice</Link>
      <Link href="/">MPSC FREE MOCK</Link>
    </header>
    <div className={styles.heading}>
      <p>JEE · PHYSICS · FOUNDATION</p>
      <h1>Physics classes</h1>
      <span>2 recorded classes · Marin · English audio and subtitles</span>
    </div>
    <section aria-label="Available classes" className={styles.library}>
      {lectures.map(lesson => <article key={lesson.id}>
        <div className={styles.lessonNumber}><BookOpen size={28} /><span>{lesson.number}</span></div>
        <div><h2>{lesson.title}</h2><p>{lesson.description}</p>
          <p className={styles.lessonMeta}><Clock size={15} /> {Math.floor(lesson.timings.duration / 60)}:{String(Math.floor(lesson.timings.duration % 60)).padStart(2, "0")} <span>{lesson.segments.length} chapters</span><span>{lesson.quiz.length} practice checks</span></p>
          <Link href={`/jee/classes/${lesson.id}`}>Open class <ArrowRight size={17} /></Link>
        </div>
      </article>)}
    </section>
  </main>;
}
