"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import type { ClassroomLesson } from "../../lib/classroom-lesson";
import styles from "./lecture.module.css";
import roomStyles from "../../study-room/study-room.module.css";

const StudyRoom = dynamic(() => import("../../study-room/study-room"));

export default function LectureClassroom({ topic, text, subject }: Pick<ClassroomLesson, "topic" | "text" | "subject">) {
  const [open, setOpen] = useState(false);
  const lesson = useMemo<ClassroomLesson>(() => ({ teacher: "zorami", subject, mode: "explain",
    language: "en", topic, text, source: "reviewed" }), [subject, topic, text]);
  return (
    <section className={styles.notes} aria-label="Tochhawng lecture classroom">
      <h2>Tochhawng lecture classroom</h2>
      <p>Follow the current chapter with Zorami while the original recording plays.</p>
      <button type="button" aria-expanded={open} aria-controls="recorded-classroom"
        onClick={() => setOpen(value => !value)}>{open ? "Hide Zorami’s classroom" : "Show Zorami’s classroom"}</button>
      <div id="recorded-classroom" className={roomStyles.roomPage} hidden={!open}>
        {open && <StudyRoom recordedLesson={lesson} />}
      </div>
    </section>
  );
}
