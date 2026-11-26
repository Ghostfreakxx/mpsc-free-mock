"use client";

import { useEffect, useRef, useState } from "react";
import { classroomCaptions } from "./lib/classroom-lesson";
import type { TeachingOptions } from "./lib/tochhawng-teachers";

let stopActive: (() => void) | undefined;

export default function ReplyPlayback({ text, language }: {
  text: string; language: TeachingOptions["language"];
}) {
  const ownStop = useRef<(() => void) | undefined>(undefined);
  const [state, setState] = useState<"idle" | "playing" | "paused">("idle");
  const [cue, setCue] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => { window.speechSynthesis?.getVoices(); }, []);
  useEffect(() => () => ownStop.current?.(), [text, language]);

  function listen() {
    const synth = window.speechSynthesis;
    const voice = synth?.getVoices().find(candidate =>
      candidate.localService && candidate.lang.toLowerCase().split(/[-_]/u)[0] === language);
    if (!voice || typeof window.SpeechSynthesisUtterance !== "function") {
      setNotice(language === "lus"
        ? "This device has no local Mizo voice. The reply is available as text."
        : "This device has no local English voice. The reply is available as text.");
      return;
    }
    stopActive?.();
    setNotice("");
    const cues = classroomCaptions(text);
    if (!cues.length) return;
    function stop() {
      if (stopActive !== stop) return;
      stopActive = undefined;
      ownStop.current = undefined;
      synth.cancel();
      if (synth.paused) synth.resume();
      setState("idle");
      setCue("");
    }
    function speak(index: number) {
      if (stopActive !== stop) return;
      if (index >= cues.length) { stop(); return; }
      const utterance = new SpeechSynthesisUtterance(cues[index]);
      utterance.voice = voice ?? null;
      utterance.lang = voice?.lang ?? language;
      utterance.rate = 0.92;
      utterance.onend = () => speak(index + 1);
      utterance.onerror = () => {
        if (stopActive !== stop) return;
        stop();
        setNotice("Playback stopped. You can try Listen again or read the reply.");
      };
      setCue(cues[index]);
      synth.speak(utterance);
    }
    ownStop.current = stop;
    stopActive = stop;
    if (synth.paused) synth.resume();
    setState("playing");
    speak(0);
  }

  function togglePause() {
    if (state === "paused") {
      window.speechSynthesis.resume();
      setState("playing");
    } else {
      window.speechSynthesis.pause();
      setState("paused");
    }
  }

  return (
    <div className="assistant-playback">
      {state === "idle" ? <button type="button" onClick={listen}>Listen</button> : <>
        <button type="button" onClick={togglePause}>{state === "paused" ? "Resume" : "Pause"}</button>
        <button type="button" onClick={() => ownStop.current?.()}>Stop</button>
      </>}
      {cue && <p className="assistant-playback-caption" lang={language}>{cue}</p>}
      {notice && <p role="status">{notice}</p>}
    </div>
  );
}
