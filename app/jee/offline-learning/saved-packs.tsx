"use client";

import { useEffect, useState } from "react";
import styles from "../classes/lecture.module.css";

const prefix = "mpsc-free-mock-lesson-v1-pack-";
const marker = "/lectures/__offline_ready__";
const edition = /^[a-z0-9]+(?:-[a-z0-9]+)*-v[1-9][0-9]*$/;

export default function SavedPackManager({ current }: { current: string[] }) {
  const [available, setAvailable] = useState<number>();
  const [retired, setRetired] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let active = true;
    void navigator.storage?.estimate().then(({ quota, usage }) => {
      if (active && quota !== undefined && usage !== undefined) setAvailable(Math.max(0, quota - usage));
    }).catch(() => {});
    if ("caches" in window && navigator.locks) {
      void caches.keys().then(async names => {
        const versions = names.filter(name => name.startsWith(prefix)).map(name => name.slice(prefix.length))
          .filter(id => edition.test(id) && !current.includes(id));
        const saved = await Promise.all(versions.map(async id => (await caches.match(marker, { cacheName: prefix + id })) ? id : null));
        if (active) setRetired(saved.filter(id => id !== null));
      }).catch(() => {});
    }
    return () => { active = false; };
  }, [current]);

  async function remove(id: string) {
    if (!retired.includes(id) || !edition.test(id)) return;
    const name = prefix + id;
    try {
      await navigator.locks.request(name, async () => { await caches.delete(name); });
      setRetired(items => items.filter(item => item !== id));
      setMessage("Previous pack removed.");
    } catch { setMessage("That pack could not be removed."); }
  }

  if (available === undefined && retired.length === 0 && !message) return null;
  return <section className={styles.notes} aria-label="Manage offline storage">
    {available !== undefined && <p>Estimated free browser storage {(available / 1_000_000).toLocaleString(undefined, { maximumFractionDigits: 0 })} MB.</p>}
    {retired.length > 0 && <>
      <h2>Previous pack versions</h2>
      <ul>{retired.map(id => <li key={id}>
        <a href={`/jee/offline-packs/${id}`}>{id}</a>{" "}
        <button type="button" onClick={() => remove(id)}>Remove {id}</button>
      </li>)}</ul>
    </>}
    {message && <p role="status">{message}</p>}
  </section>;
}
