"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Captions, Download, RotateCcw } from "lucide-react";
import type { Lecture } from "./lessons";
import PracticeQuiz from "./practice-quiz";
import styles from "./lecture.module.css";

const formatTime = (value: number) => `${Math.floor(value / 60)}:${Math.floor(value % 60).toString().padStart(2, "0")}`;

export default function LecturePlayer({ lesson }: { lesson: Lecture }) {
  const { timings, progressKey } = lesson;
  const chapterStarts = lesson.segments.map((_, index) => timings.cues.find(cue => cue.chapter === index)!.start);
  const audio = useRef<HTMLAudioElement>(null);
  const [time, setTime] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [captions, setCaptions] = useState(true);
  const [error, setError] = useState(false);
  const lastSaved = useRef(-1);
  const restored = useRef(false);
  const cue = timings.cues.find(item => time >= item.start && time < item.end);
  const chapterIndex = Math.max(0, chapterStarts.findLastIndex(start => time >= start));
  const chapter = lesson.segments[chapterIndex];

  useEffect(() => {
    const player = audio.current;
    if (!player) return;
    // A media request can fail before hydration installs React's error handler.
    if (player.error) queueMicrotask(() => setError(true));
    const restore = () => {
      if (restored.current) return;
      try {
        const saved = Number(localStorage.getItem(progressKey));
        if (Number.isFinite(saved) && saved > 0 && saved < timings.duration - 2) {
          player.currentTime = saved;
        }
      } catch { /* Start at the beginning if storage is unavailable. */ }
      restored.current = true;
    };
    const save = () => {
      if (!player || !restored.current) return;
      try { localStorage.setItem(progressKey, String(player.currentTime)); } catch { /* Playback still works without storage. */ }
    };
    window.addEventListener("pagehide", save);
    player.addEventListener("loadedmetadata", restore);
    if (player.readyState >= 1) restore();
    return () => { save(); window.removeEventListener("pagehide", save); player.removeEventListener("loadedmetadata", restore); };
  }, [progressKey, timings.duration]);

  function seek(value: number) {
    if (!audio.current || !Number.isFinite(audio.current.duration)) return;
    audio.current.currentTime = Math.max(0, Math.min(value, timings.duration));
    setTime(audio.current.currentTime);
  }

  function downloadTranscript() {
    const text = `${lesson.title}\nEnglish narration · American English · Marin · AI-generated voice\n\n` + lesson.segments.map((segment, index) =>
      `${index + 1}. ${segment.title}\n${segment.formula}\n${segment.steps.join("\n")}\n\n${segment.english}\n${segment.note ? `Clarification: ${segment.note}\n` : ""}`
    ).join("\n") + "\nSources\n" + lesson.sources.map(source => `${source.title}: ${source.url}`).join("\n");
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `jee-${lesson.id}-notes.txt`;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return <main className={styles.page}>
    <header className={styles.header}>
      <Link href="/jee/classes"><ArrowLeft size={17} /> JEE classes</Link>
      <Link href="/">MPSC FREE MOCK</Link>
    </header>
    <div className={styles.heading}>
      <p>JEE · PHYSICS · FOUNDATION CLASS {lesson.number}</p>
      <h1>{lesson.title}</h1>
      <span>{formatTime(timings.duration)} · American English · Marin · AI-generated voice</span>
    </div>
    <div className={styles.layout}>
      <section aria-label="Recorded visual lesson" className={styles.player}>
        <div className={styles.board}>
          <p className={styles.chapterNumber}>CHAPTER {String(chapterIndex + 1).padStart(2, "0")} / {lesson.segments.length}</p>
          <h2>{chapter.title}</h2>
          {lesson.id === "units" && chapterIndex < 5 && <svg className={styles.ruler} viewBox="0 0 600 85" role="img" aria-label="A ruler showing equal intervals from zero to five metres">
            <rect x="25" y="8" width="550" height="42" rx="3" fill="#e1f0eb" />
            <path d="M25 50H575" stroke="#146b55" strokeWidth="2" />
            {[0, 1, 2, 3, 4, 5].map(value => <g key={value}><path d={`M${25 + value * 110} 20v30`} stroke="#146b55" strokeWidth="2" /><text x={25 + value * 110} y="74" textAnchor="middle" fontSize="16" fill="#20483e">{value} m</text></g>)}
          </svg>}
          <div className={styles.formula}>{chapter.formula}</div>
          <ol className={styles.steps}>{chapter.steps.map(step => <li key={step}>{step}</li>)}</ol>
          {chapter.note && <p className={styles.clarification}><strong>Clarification:</strong> {chapter.note}</p>}
        </div>
        <div className={styles.caption} aria-label="English subtitles">{captions ? cue?.text ?? "English subtitles" : "Subtitles off"}</div>
        <audio ref={audio} src={lesson.audio} controls preload="metadata" aria-label="Class narration"
          onRateChange={() => setSpeed(audio.current?.playbackRate ?? 1)}
          onError={() => setError(true)}
          onCanPlay={() => setError(false)}
          onTimeUpdate={() => {
            const current = audio.current?.currentTime ?? 0;
            setTime(current);
            if (restored.current && Math.floor(current) !== lastSaved.current) {
              lastSaved.current = Math.floor(current);
              try { localStorage.setItem(progressKey, String(current)); } catch { /* Optional local resume. */ }
            }
          }}>
          <track kind="captions" src={lesson.subtitles} srcLang="en-US" label="English" default />
        </audio>
        {error && <p role="alert">The recording could not load. <button onClick={() => audio.current?.load()}>Retry audio</button> or read the transcript below.</p>}
        <div className={styles.controls}>
          <button title="Restart class" aria-label="Restart class" onClick={() => seek(0)}><RotateCcw size={19} /></button>
          <button title="English subtitles" aria-label="English subtitles" aria-pressed={captions} onClick={() => setCaptions(!captions)}><Captions size={20} /></button>
          <label>Speed <select aria-label="Playback speed" value={speed} onChange={event => {
            const value = Number(event.target.value); setSpeed(value); if (audio.current) audio.current.playbackRate = value;
          }}>{[0.75, 1, 1.25, 1.5].map(value => <option key={value} value={value}>{value}×</option>)}</select></label>
          <button disabled={chapterIndex === lesson.segments.length - 1} onClick={() => seek(chapterStarts[chapterIndex + 1] + 0.05)}>Next chapter <ArrowRight size={17} /></button>
        </div>
      </section>
      <aside className={styles.outline} aria-label="Class chapters">
        <h2>Class chapters</h2>
        <ol>{lesson.segments.map((segment, index) => <li key={segment.title}>
          <button aria-current={chapterIndex === index ? "step" : undefined} onClick={() => seek(chapterStarts[index] + 0.05)}>
            <span>{String(index + 1).padStart(2, "0")}</span><strong>{segment.title}</strong><time>{formatTime(chapterStarts[index])}</time>
          </button>
        </li>)}</ol>
      </aside>
    </div>
    <section className={styles.notes}>
      <div className={styles.sectionHeading}><h2>Class notes & transcript</h2><button onClick={downloadTranscript}><Download size={17} /> Download notes</button></div>
      <p>{lesson.scope}</p>
      <details><summary>Read the English transcript</summary>{lesson.segments.map(segment => <article key={segment.title}><h3>{segment.title}</h3><p>{segment.english}</p>{segment.note && <p className={styles.clarification}><strong>Clarification:</strong> {segment.note}</p>}</article>)}</details>
      <p className={styles.sources}>References: {lesson.sources.map(source => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.title}</a>)}</p>
    </section>
    {lesson.id === "units" && <section className={styles.notes}>
      <h2>Next class</h2>
      <p>Continue with significant figures, uncertainty and error analysis.</p>
      <Link href="/jee/classes/measurements">Open the measurement class <ArrowRight size={17} /></Link>
    </section>}
    <PracticeQuiz quiz={lesson.quiz} progressKey={progressKey} />
    <Link href="/jee">Continue to JEE practice <ArrowRight size={17} /></Link>
  </main>;
}
