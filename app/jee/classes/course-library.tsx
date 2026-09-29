"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { courseUnits, subjects, type Subject } from "./course";
import { lectures } from "./lessons";
import { studyLessons } from "./study-lessons";
import ClassProgress from "./class-progress";
import styles from "./lecture.module.css";

export default function CourseLibrary() {
  const [subject, setSubject] = useState<Subject>("Physics");
  const available = studyLessons.filter(lesson => lesson.subject === subject);
  return <>
    <nav className={styles.subjects} aria-label="Course subjects">{subjects.map(name => <button key={name} aria-pressed={subject === name} onClick={() => setSubject(name)}>{name}</button>)}</nav>
    <section aria-label={`${subject} available lessons`} className={styles.library}>
      <h2 className={styles.libraryTitle}>{subject} lessons</h2>
      {subject === "Physics" && lectures.map(lesson => <article key={lesson.id}>
        <div className={styles.lessonNumber}><BookOpen size={28} /><span>{lesson.number}</span></div>
        <div><h3>{lesson.title}</h3><p>{lesson.description}</p>
          <p className={styles.lessonMeta}><Clock size={15} /> {Math.floor(lesson.timings.duration / 60)}:{String(Math.floor(lesson.timings.duration % 60)).padStart(2, "0")} <span>Marin recording</span><span>{lesson.quiz.length} practice checks</span></p>
          <ClassProgress id={lesson.id} progressKey={lesson.progressKey} duration={lesson.timings.duration} quiz={lesson.quiz} />
        </div>
      </article>)}
      {available.map(lesson => <article key={lesson.id}>
        <div className={styles.lessonNumber}><BookOpen size={28} /><span>U{lesson.unit}</span></div>
        <div><h3>{lesson.title}</h3><p>{lesson.summary}</p>
          <p className={styles.lessonMeta}>Written lesson <span>{lesson.examples.length} worked examples</span><span>{lesson.quiz.length} practice checks</span></p>
          <p>Marin recording not yet available</p>
          <Link href={`/jee/classes/study/${lesson.id}`}>Read lesson <ArrowRight size={17} /></Link>
        </div>
      </article>)}
    </section>
    <section className={styles.notes} aria-label={`${subject} course map`}>
      <h2>{subject} course map</h2>
      <p>{courseUnits[subject].length} syllabus units · No unit fully taught yet</p>
      <ol className={styles.courseMap}>{courseUnits[subject].map((title, index) => {
        const written = available.find(lesson => lesson.unit === index + 1);
        const recorded = subject === "Physics" && index === 0;
        return <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{title}</strong>
          {written && <Link href={`/jee/classes/study/${written.id}`}>Foundation lesson <ArrowRight size={14} /></Link>}
          {recorded && <Link href="/jee/classes/units">Introductory recordings <ArrowRight size={14} /></Link>}
        </div><span className={written || recorded ? styles.partial : styles.planned}>{written || recorded ? "Partial" : "Planned"}</span></li>;
      })}</ol>
    </section>
  </>;
}
