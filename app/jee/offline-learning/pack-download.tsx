"use client";

import { useEffect, useRef, useState } from "react";
import { cachePublicFile } from "../classes/offline-file";
import type { PackSummary } from "../offline-packs/catalog";
import styles from "../classes/lecture.module.css";

const marker = "/lectures/__offline_ready__";
const limit = 1_500_000_000;

function size(bytes: number) {
  return bytes >= 1_000_000 ? `${(bytes / 1_000_000).toFixed(1)} MB` : `${Math.ceil(bytes / 1000)} kB`;
}

export default function PackDownload({ pack }: { pack: PackSummary }) {
  const route = `/jee/offline-packs/${pack.id}`;
  const cacheName = `mpsc-free-mock-lesson-v1-pack-${pack.id}`;
  const bytes = pack.assets.reduce((total, asset) => total + asset.bytes, 0);
  const [supported, setSupported] = useState(false);
  const [saved, setSaved] = useState(false);
  const [working, setWorking] = useState(false);
  const [message, setMessage] = useState("");
  const [completed, setCompleted] = useState(0);
  const controller = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!("caches" in window) || !("serviceWorker" in navigator) || !navigator.locks) return;
    let active = true;
    void caches.match(marker, { cacheName }).then(result => {
      if (active) { setSupported(true); setSaved(Boolean(result)); }
    }).catch(() => {});
    return () => { active = false; controller.current?.abort(); };
  }, [cacheName]);

  async function save() {
    const request = new AbortController();
    controller.current = request;
    setWorking(true);
    setCompleted(0);
    setMessage("");
    try {
      if (!navigator.serviceWorker.controller) throw new Error("Reload this page once to enable offline downloads.");
      if (bytes <= 0 || bytes > limit || pack.assets.length > 300) throw new Error("This pack exceeds the supported size.");
      const storage = await navigator.storage?.estimate().catch(() => undefined);
      if (storage?.quota !== undefined && storage.usage !== undefined && storage.quota - storage.usage < bytes) {
        throw new Error("There is insufficient free browser storage for this pack.");
      }
      await navigator.locks.request(cacheName, { ifAvailable: true }, async lock => {
        if (!lock) throw new Error("This pack is already being changed in another tab.");
        request.signal.throwIfAborted();
        if (await caches.match(marker, { cacheName })) { setSaved(true); return; }
        await caches.delete(cacheName);
        const cache = await caches.open(cacheName);
        try {
          for (const [index, asset] of pack.assets.entries()) {
            const allowed = asset.kind === "html" ? asset.path === route : asset.kind === "audio"
              ? /^\/lectures\/[\w/-]+\.mp3$/.test(asset.path)
              : /^\/lectures\/[\w/-]+\.vtt$/.test(asset.path) || asset.path === `${route}/captions`;
            if (!allowed) throw new Error("A pack file is outside the allowed paths.");
            await cachePublicFile(cache, asset.path, asset.kind, request.signal, asset.bytes);
            setCompleted(index + 1);
          }
          request.signal.throwIfAborted();
          await cache.put(marker, new Response("saved"));
          setSaved(true);
          setMessage("Offline pack saved. Open the pack to study.");
        } catch (error) {
          await caches.delete(cacheName);
          throw error;
        }
      });
    } catch (error) {
      setMessage(request.signal.aborted ? "Download canceled." : error instanceof Error ? error.message : "The pack could not be saved.");
    } finally {
      setWorking(false);
      controller.current = null;
    }
  }

  async function remove() {
    try {
      await navigator.locks.request(cacheName, async () => { await caches.delete(cacheName); });
      setSaved(false);
      setMessage("Offline pack removed.");
    } catch { setMessage("The offline pack could not be removed."); }
  }

  return <article className={styles.notes}>
    <h2>{pack.title}</h2>
    <p>{pack.description} Audio size {size(bytes)}. Version {pack.version}.</p>
    <p><a href={route}>Open {pack.title}</a></p>
    {supported && (working ? <>
      <progress aria-label="Offline pack files downloaded" max={pack.assets.length} value={completed} />
      <button type="button" onClick={() => controller.current?.abort()}>Cancel pack download</button>
    </> : saved ? <button type="button" onClick={remove}>Remove offline pack</button>
      : <button type="button" onClick={save}>Save offline pack</button>)}
    {message && <p role="status">{message}</p>}
  </article>;
}
