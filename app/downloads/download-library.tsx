"use client";

import Link from "next/link";
import { useState, type SyntheticEvent } from "react";
import { ArrowLeft, Download, Search, BookOpen } from "lucide-react";
import type { DownloadPack, PackContents } from "../data/practice-data";

type Props = { packs: DownloadPack[]; contentScope: string; contentRevision: string };

// The served JSON is our own build output, but check its shape before rendering it.
const isContents = (value: unknown): value is PackContents => Array.isArray(value) && value.every(topic =>
  topic && typeof topic === "object" && typeof topic.id === "string" && typeof topic.subject === "string" && typeof topic.title === "string"
  && Array.isArray(topic.notes) && topic.notes.every((note: unknown) => typeof note === "string") && typeof topic.pitfall === "string"
  && topic.source && typeof topic.source.url === "string" && typeof topic.source.title === "string");

// Notes load the first time a pack is opened, so the page itself downloads only the list.
function PackDetails({ id }: { id: string }) {
  const [state, setState] = useState<{ status: "idle" | "loading" | "failed" } | { status: "ready"; contents: PackContents }>({ status: "idle" });
  function load() {
    setState({ status: "loading" });
    fetch(`/downloads/${id}/contents`)
      .then(response => response.ok ? response.json() : Promise.reject(new Error(String(response.status))))
      .then(value => setState(isContents(value) ? { status: "ready", contents: value } : { status: "failed" }), () => setState({ status: "failed" }));
  }
  function onToggle(event: SyntheticEvent<HTMLDetailsElement>) {
    if (event.currentTarget.open && state.status === "idle") load();
  }
  return <details onToggle={onToggle}><summary><BookOpen size={16} /> Contents and sources</summary>
    {state.status === "loading" && <p role="status">Loading notes…</p>}
    {state.status === "failed" && <p role="alert">The notes could not load. <button type="button" className="button button-outline" onClick={load}>Try again</button></p>}
    {state.status === "ready" && state.contents.map(topic => <section key={topic.id} className="download-topic"><h3>{topic.subject}: {topic.title}</h3>{topic.notes.map(note => <p key={note}>{note}</p>)}<p><strong>Common pitfall:</strong> {topic.pitfall}</p><a href={topic.source.url} target="_blank" rel="noreferrer">{topic.source.title}</a></section>)}
  </details>;
}

export default function DownloadLibrary({ packs, contentScope, contentRevision }: Props) {
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("All");
  const query = search.trim().toLowerCase();
  const visible = packs.filter(pack => (group === "All" || pack.group === group) && pack.searchText.includes(query));
  return <main className="download-library">
    <header className="download-topbar"><Link href="/" className="button button-outline"><ArrowLeft size={16} /> Learning space</Link><span>MPSC FREE MOCK</span></header>
    <section className="download-heading"><span className="section-kicker">STUDY LIBRARY</span><h1>Downloadable notes</h1><p>{contentScope}</p><p className="download-meta">{packs.length} packs · Original summaries and self-checks · Reviewed {contentRevision} · HTML / offline / print-ready</p></section>
    <section className="download-controls" aria-label="Find notes"><label className="notes-search-control"><Search size={18} /><span className="sr-only">Search notes</span><input value={search} onChange={event => setSearch(event.target.value)} placeholder="Search streams or subjects" /></label><label>Collection <select value={group} onChange={event => setGroup(event.target.value)}>{["All", "Exam streams", "College subjects"].map(value => <option key={value}>{value}</option>)}</select></label><span role="status">{visible.length} packs</span></section>
    <section aria-label="Available notes" className="download-list">{visible.map(pack => <article key={pack.id} className="download-entry" id={pack.id}>
      <div className="download-entry-heading"><div><span className="section-kicker">{pack.group}</span><h2>{pack.title}</h2><p>{pack.topics.map(topic => topic.title).join(" · ")}</p></div><a href={`/downloads/${pack.id}`} download className="button button-dark" aria-label={`Download ${pack.title}`}><Download size={17} /> Download</a></div>
      <PackDetails id={pack.id} />
    </article>)}{visible.length === 0 && <p className="notes-empty">No notes match this search.</p>}</section>
    <footer className="academy-footer"><span>Independent learning resource. Not endorsed by examination bodies.</span><Link href="/mock-test">MPSC practice</Link></footer>
  </main>;
}
