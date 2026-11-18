"use client";

import dynamic from "next/dynamic";
import { Component, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
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
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const [closeUp, setCloseUp] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const [greeting, setGreeting] = useState(0);
  const teacherButton = useRef<HTMLButtonElement>(null);
  const meetZorami = useCallback(() => {
    setGreeting(current => current + 1);
    teacherButton.current?.focus({ preventScroll: true });
    window.dispatchEvent(new CustomEvent("mpsc-open-assistant", { detail: "zorami" }));
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
    setStarted(true);
  }

  return (
    <div className={styles.viewer} ref={viewport} role="group" aria-label="Interactive Zorami and Constitution study desk">
      {started && !failed && (
        <div className={styles.canvas} data-ready={ready} aria-hidden="true">
          <SceneBoundary onFailure={markFailed}>
            <RoomScene active={visible && pageVisible} reducedMotion={reducedMotion}
              closeUp={closeUp} onBookClick={toggleBook} onTeacherClick={meetZorami} greeting={greeting}
              onReady={markReady} onFailure={markFailed} />
          </SceneBoundary>
        </div>
      )}
      <div className={styles.controls}>
        {failed ? <p role="status">The 3D view is unavailable on this device.</p> : (
          <button type="button" onClick={ready ? toggleBook : started ? undefined : startRoom}
            aria-disabled={started && !ready}>
            {ready ? (closeUp ? "Return to room view" : "Inspect the Constitution") : started ? "Loading 3D room…" : "Enter the 3D room"}
          </button>
        )}
        {ready && !failed && <button ref={teacherButton} type="button" onClick={meetZorami}>Talk to Zorami</button>}
        {closeUp && ready && !failed && <span role="status">Preamble · “We, the people of India”</span>}
      </div>
    </div>
  );
}
