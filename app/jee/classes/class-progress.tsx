"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { ArrowRight } from "lucide-react";
import { readAnswers, readPosition } from "./progress";
import styles from "./lecture.module.css";

function subscribe(notify: () => void) {
  window.addEventListener("storage", notify);
  window.addEventListener("pageshow", notify);
  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener("pageshow", notify);
  };
}

function read(key: string) {
  try { return localStorage.getItem(key); } catch { return null; }
}

const serverSnapshot = () => null;

export default function ClassProgress({ id, progressKey, duration, quiz }: {
  id: string; progressKey: string; duration: number;
  quiz: { question: string; options: string[]; answer: number }[];
}) {
  const savedPosition = useSyncExternalStore(subscribe, () => read(progressKey), serverSnapshot);
  const savedAnswers = useSyncExternalStore(subscribe, () => read(`${progressKey}.answers`), serverSnapshot);
  const position = readPosition(savedPosition, duration);
  const answers = readAnswers(savedAnswers, quiz);
  const count = Object.keys(answers).length;
  const correct = quiz.filter((question, index) => answers[index] === question.answer).length;
  const nearEnd = position >= duration - 2;
  const timestamp = `${Math.floor(position / 60)}:${String(Math.floor(position % 60)).padStart(2, "0")}`;

  return <div className={styles.savedProgress}>
    <progress aria-label="Saved playback position" max={duration} value={position} />
    <p>{position > 0 ? `Last position ${timestamp}` : "Not started"} <span>Practice: {count} / {quiz.length} answered{count > 0 ? ` · ${correct} correct` : ""}</span></p>
    <Link href={`/jee/classes/${id}`}>{nearEnd ? "Replay class" : position > 0 ? "Resume class" : "Open class"} <ArrowRight size={17} /></Link>
  </div>;
}
