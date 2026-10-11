"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { courseUnits, subjects, syllabusBaseline, syllabusPdf, type Subject } from "./course";
import { lectures } from "./lessons";
import { studyLessons } from "./study-lessons";
import ClassProgress from "./class-progress";
import { physicsCoverage } from "./physics-coverage";
import { groupRecordings } from "./recording-groups";
import styles from "./lecture.module.css";

export default function CourseLibrary() {
  const [subject, setSubject] = useState<Subject>("Physics");
  const available = studyLessons.filter(lesson => lesson.subject === subject);
  const recordingGroups = groupRecordings(courseUnits.Physics, physicsCoverage, lectures);
  return <>
    <nav className={styles.subjects} aria-label="Course subjects">{subjects.map(name => <button key={name} aria-pressed={subject === name} onClick={() => setSubject(name)}>{name}</button>)}</nav>
    <section aria-label={`${subject} available lessons`} className={styles.library}>
      <h2 className={styles.libraryTitle}>{subject} lessons</h2>
      {subject === "Physics" && recordingGroups.map((group, index) => <details className={styles.recordingGroup} key={group.title} open={index === 0}>
        <summary><span>{group.title}</span><small>{group.lessons.length} {group.lessons.length === 1 ? "class" : "classes"} · {Math.floor(group.duration / 60)} min</small></summary>
        {group.lessons.map(lesson => <article key={lesson.id}>
        <div className={styles.lessonNumber}><BookOpen size={28} /><span>{lesson.number}</span></div>
        <div><h3>{lesson.title}</h3><p>{lesson.description}</p>
          <p className={styles.lessonMeta}><Clock size={15} /> {Math.floor(lesson.timings.duration / 60)}:{String(Math.floor(lesson.timings.duration % 60)).padStart(2, "0")} <span>Marin recording</span><span>{lesson.quiz.length} practice checks</span></p>
          <ClassProgress id={lesson.id} progressKey={lesson.progressKey} duration={lesson.timings.duration} quiz={lesson.quiz} />
          <Link href={`/jee/classes/study/${lesson.id}`}>Read class notes <ArrowRight size={17} /></Link>
        </div>
      </article>)}
      </details>)}
      {available.map(lesson => <article key={lesson.id}>
        <div className={styles.lessonNumber}><BookOpen size={28} /><span>U{lesson.unit}</span></div>
        <div><h3>{lesson.title}</h3><p>{lesson.summary}</p>
          <p className={styles.lessonMeta}>Written lesson <span>{lesson.examples.length} worked examples</span><span>{lesson.quiz.length} practice checks</span></p>
          {lectures.some(recording => recording.id === lesson.id) ? <Link href={`/jee/classes/${lesson.id}`}>Watch recorded class <ArrowRight size={17} /></Link> : <p>Marin recording not yet available</p>}
          <Link href={`/jee/classes/study/${lesson.id}`}>Read lesson <ArrowRight size={17} /></Link>
        </div>
      </article>)}
    </section>
    <section className={styles.notes} aria-label={`${subject} course map`}>
      <h2>{subject} course map</h2>
      <p><a href={syllabusPdf} target="_blank" rel="noreferrer">Official NTA syllabus: {syllabusBaseline}</a></p>
      <p>{courseUnits[subject].length} syllabus units · {subject === "Physics" ? `${physicsCoverage.filter(unit => unit.recordings.length > 0).length} with recorded lesson sets` : "Written and recorded coverage in development"}</p>
      <ol className={styles.courseMap}>{courseUnits[subject].map((title, index) => {
        const written = available.filter(lesson => lesson.unit === index + 1);
        const coverage = subject === "Physics" ? physicsCoverage[index] : undefined;
        const recorded = lectures.filter(lecture => coverage?.recordings.includes(lecture.id));
        return <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{title}</strong>
          {written.map(lesson => <Link key={lesson.id} href={`/jee/classes/study/${lesson.id}`}>{lesson.title} <ArrowRight size={14} /></Link>)}
          {recorded.map(lesson => <Link key={lesson.id} href={`/jee/classes/${lesson.id}`}>{lesson.title} <ArrowRight size={14} /></Link>)}
          {coverage && <details><summary>Further practice and extensions</summary><ul>{coverage.remaining.map(topic => <li key={topic}>{topic}</li>)}</ul></details>}
        </div><span className={written.length || recorded.length ? styles.partial : styles.planned}>{recorded.length ? "Recorded" : written.length ? "Written" : "Planned"}</span></li>;
      })}</ol>
    </section>
  </>;
}
