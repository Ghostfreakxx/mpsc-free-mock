"use client";

import dynamic from "next/dynamic";
import { Component, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { classroomCaptions, CLASSROOM_LESSON_EVENT, type ClassroomLesson } from "../lib/classroom-lesson";
import { subjects, teachers, teachingModes } from "../lib/tochhawng-teachers";
import ReplyPlayback from "../reply-playback";
import styles from "./study-room.module.css";

const RoomScene = dynamic(() => import("./room-scene"), { ssr: false });

class SceneBoundary extends Component<{ children: ReactNode; onFailure: () => void }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onFailure();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default function StudyRoom() {
  const viewport = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [started, setStarted] = useState(false);
  const [compactRendering, setCompactRendering] = useState(false);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const [closeUp, setCloseUp] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const [greeting, setGreeting] = useState(0);
  const [lesson, setLesson] = useState<ClassroomLesson | null>(null);
  const [subtitles, setSubtitles] = useState(false);
  const [captionIndex, setCaptionIndex] = useState(0);
  const captions = subtitles && lesson ? classroomCaptions(lesson.text) : [];
  const meetZorami = useCallback(() => {
    setGreeting(current => current + 1);
    document.getElementById("reviewed-classroom")?.focus();
  }, []);
  const toggleBook = useCallback(() => setCloseUp((current) => !current), []);
  const markReady = useCallback(() => setReady(true), []);
  const markFailed = useCallback(() => setFailed(true), []);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(motion.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    motion.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (viewport.current) observer.observe(viewport.current);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    function receiveLesson(event: Event) {
      if (!(event instanceof CustomEvent)) return;
      setLesson(event.detail as ClassroomLesson | null);
      setCaptionIndex(0);
    }
    window.addEventListener(CLASSROOM_LESSON_EVENT, receiveLesson);
    return () => window.removeEventListener(CLASSROOM_LESSON_EVENT, receiveLesson);
  }, []);

  function startRoom() {
    if (!("WebGL2RenderingContext" in window)) {
      setFailed(true);
      return;
    }
    const probe = document.createElement("canvas").getContext("webgl2", { powerPreference: "low-power" });
    if (!probe) {
      setFailed(true);
      return;
    }
    probe.getExtension("WEBGL_lose_context")?.loseContext();
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    setCompactRendering(Boolean(connection?.saveData || window.matchMedia("(max-width: 600px)").matches));
    setStarted(true);
  }

  return (
    <div>
      <div className={styles.viewer} ref={viewport} role="group" aria-label="Interactive Zorami and Constitution study desk">
        {started && !failed && (
          <div className={styles.canvas} data-ready={ready} aria-hidden="true">
            <SceneBoundary onFailure={markFailed}>
              <RoomScene active={visible && pageVisible} reducedMotion={reducedMotion}
                closeUp={closeUp} onBookClick={toggleBook} onTeacherClick={meetZorami} greeting={greeting}
                onReady={markReady} onFailure={markFailed} lesson={lesson} compactRendering={compactRendering} />
            </SceneBoundary>
          </div>
        )}
        {lesson && captions.length > 0 && (
          <p className={styles.caption} lang={lesson.language} aria-live="polite">{captions[captionIndex]}</p>
        )}
        <div className={styles.controls}>
          {failed ? <p role="status">The 3D view is unavailable on this device.</p> : (
            <button type="button" onClick={ready ? toggleBook : started ? undefined : startRoom}
              aria-disabled={started && !ready}>
              {ready ? (closeUp ? "Return to room view" : "Inspect the Constitution") : started ? "Loading 3D room…" : "Enter the 3D room"}
            </button>
          )}
          {(ready || failed) && <button type="button" onClick={meetZorami}>Talk to Zorami</button>}
          {closeUp && ready && !failed && <span role="status">Preamble · “We, the people of India”</span>}
        </div>
      </div>
      <section className={styles.lesson} aria-labelledby="classroom-lesson-title">
        <h2 id="classroom-lesson-title" tabIndex={-1}>Classroom notes</h2>
        {lesson ? (
          <div key={lesson.text} className={styles.chalkLesson}>
            <h3>{subjects[lesson.subject]} <span>· {teachingModes[lesson.mode]}</span></h3>
            <p className={styles.lessonTopic}>{lesson.topic}</p>
            <p className={styles.lessonByline}>{lesson.source === "ai" ? `${teachers[lesson.teacher].name} · AI teacher` : lesson.source === "reviewed" ? "Tochhawng Zorami · Reviewed course material" : "Offline study guidance"}</p>
            <p className={styles.lessonText} lang={lesson.language}>{lesson.text}</p>
            {lesson.source !== "reviewed" && <ReplyPlayback text={lesson.text} language={lesson.language} />}
            <div className={styles.captionButtons}>
              <button type="button" aria-pressed={subtitles} onClick={() => setSubtitles(value => !value)}>Classroom subtitles</button>
              {captions.length > 1 && <>
                <button type="button" disabled={captionIndex === 0} onClick={() => setCaptionIndex(index => index - 1)}>Previous subtitle</button>
                <span aria-live="polite">{captionIndex + 1} / {captions.length}</span>
                <button type="button" disabled={captionIndex === captions.length - 1} onClick={() => setCaptionIndex(index => index + 1)}>Next subtitle</button>
              </>}
            </div>
          </div>
        ) : <p>Choose Show on blackboard in a lesson to see it here.</p>}
      </section>
    </div>
  );
}
