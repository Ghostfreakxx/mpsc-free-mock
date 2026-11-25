"use client";

import { useEffect, useRef, useState } from "react";
import { cachePublicFile } from "./offline-file";
import styles from "./lecture.module.css";

const prefix = "mpsc-free-mock-lesson-v1-";
const ready = "/lectures/__offline_ready__";

function buildAssets() {
  const sources = [
    ...Array.from(document.querySelectorAll<HTMLScriptElement>("script[src]"), item => item.src),
    ...Array.from(document.querySelectorAll<HTMLLinkElement>("link[href]"), item => item.href),
    ...performance.getEntriesByType("resource").map(item => item.name),
  ];
  return [...new Set(sources.map(source => new URL(source, location.href))
    .filter(url => url.origin === location.origin && url.pathname.startsWith("/_next/static/") && !url.search)
    .map(url => url.pathname))];
}

function sizeLabel(bytes: number) {
  return bytes < 1024 ** 2 ? `${Math.ceil(bytes / 1024)} KB` : `${(bytes / 1024 ** 2).toFixed(1)} MB`;
}

export default function OfflineLesson({ audio, captions }: { audio: string; captions: string }) {
  const [cached, setCached] = useState(false);
  const [supported, setSupported] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [mediaSize, setMediaSize] = useState<number>();
  const [available, setAvailable] = useState<number>();
  const [progress, setProgress] = useState<{ total: number; done: number }>();
  const controller = useRef<AbortController | undefined>(undefined);

  useEffect(() => {
    if (!("caches" in window) || !("serviceWorker" in navigator) || !navigator.locks) return;
    if (!/^\/lectures\/[\w/-]+\.mp3$/.test(audio) || !/^\/lectures\/[\w/-]+\.vtt$/.test(captions)) return;
    const request = new AbortController();
    queueMicrotask(() => { if (!request.signal.aborted) setSupported(true); });
    const cacheName = prefix + encodeURIComponent(location.pathname);
    void caches.has(cacheName).then(async exists => {
      if (exists) setCached(Boolean(await (await caches.open(cacheName)).match(ready)));
    }).catch(() => {});
    void Promise.all([audio, captions].map(url => fetch(url, { method: "HEAD", signal: request.signal })))
      .then(responses => {
        if (!responses.every(response => response.ok && response.headers.has("content-length"))) return;
        const size = responses.reduce((sum, response) => sum + Number(response.headers.get("content-length")), 0);
        if (Number.isFinite(size) && size > 0) setMediaSize(size);
      }).catch(() => {});
    void navigator.storage?.estimate().then(({ quota, usage }) => {
      if (quota !== undefined && usage !== undefined) setAvailable(Math.max(0, quota - usage));
    }).catch(() => {});
    return () => { request.abort(); controller.current?.abort(); };
  }, [audio, captions]);

  async function save() {
    const request = new AbortController();
    controller.current = request;
    setSaving(true);
    setMessage("");
    const route = location.pathname;
    const name = prefix + encodeURIComponent(route);
    try {
      if (!navigator.serviceWorker.controller) throw new Error("Reload this page once to enable offline downloads.");
      await navigator.locks.request(name, { ifAvailable: true }, async lock => {
        if (!lock) throw new Error("This lesson is already being changed in another tab.");
        const existing = await caches.open(name);
        if (await existing.match(ready)) { setCached(true); return; }
        await caches.delete(name);
        const cache = await caches.open(name);
        try {
          const files = [...new Set([route, audio, captions, ...buildAssets()])];
          setProgress({ total: files.length, done: 0 });
          for (const [index, file] of files.entries()) {
            const kind = file === route ? "html" : file === audio ? "audio" : file === captions ? "captions" : "asset";
            await cachePublicFile(cache, file, kind, request.signal);
            setProgress({ total: files.length, done: index + 1 });
          }
          request.signal.throwIfAborted();
          await cache.put(ready, new Response("saved"));
          setCached(true);
          setMessage("Lesson saved on this device.");
        } catch (error) {
          await caches.delete(name);
          throw error;
        }
      });
    } catch (error) {
      setMessage(request.signal.aborted ? "Download canceled." : error instanceof Error ? error.message : "The lesson could not be saved.");
    } finally {
      controller.current = undefined;
      setSaving(false);
      setProgress(undefined);
    }
  }

  async function remove() {
    const name = prefix + encodeURIComponent(location.pathname);
    try {
      await navigator.locks.request(name, async () => { await caches.delete(name); });
      setCached(false);
      setMessage("Offline lesson removed. Study progress is still saved.");
    } catch {
      setMessage("Could not remove the offline lesson.");
    }
  }

  if (!supported) return null;
  return <section className={styles.notes} aria-label="Offline lesson download">
    <h2>Offline lesson</h2>
    <p>{cached ? "Saved on this device." : "Save this class, narration, and captions to use offline."}</p>
    {!cached && mediaSize && <p>Narration and captions: {sizeLabel(mediaSize)}. Lesson files use additional space.</p>}
    {!cached && available !== undefined && <p>Estimated browser storage available: {sizeLabel(available)}.</p>}
    {progress && <progress aria-label="Lesson download progress" max={progress.total} value={progress.done} />}
    {saving ? <button type="button" onClick={() => controller.current?.abort()}>Cancel download</button>
      : cached ? <button type="button" onClick={remove}>Remove offline lesson</button>
      : <button type="button" onClick={save}>Save lesson for offline use</button>}
    {message && <p role="status">{message}</p>}
  </section>;
}
