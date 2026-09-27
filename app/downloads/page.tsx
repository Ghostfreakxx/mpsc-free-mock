"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Download, Search, BookOpen } from "lucide-react";
import { contentRevision, contentScope, notePacks, sources, topics } from "../data/reviewed-content";

export default function DownloadsPage() {
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("All");
  const visible = notePacks.filter(pack => (group === "All" || pack.group === group) &&
    `${pack.title} ${pack.topicIds.map(id => topics.find(topic => topic.id === id)?.subject).join(" ")}`.toLowerCase().includes(search.trim().toLowerCase()));
  return <main className="download-library">
    <header className="download-topbar"><Link href="/" className="button button-outline"><ArrowLeft size={16} /> Learning space</Link><span>MPSC FREE MOCK</span></header>
    <section className="download-heading"><span className="section-kicker">STUDY LIBRARY</span><h1>Downloadable notes</h1><p>{contentScope}</p><p className="download-meta">{notePacks.length} packs · Original summaries and self-checks · Reviewed {contentRevision} · HTML / offline / print-ready</p></section>
    <section className="download-controls" aria-label="Find notes"><label className="notes-search-control"><Search size={18} /><span className="sr-only">Search notes</span><input value={search} onChange={event => setSearch(event.target.value)} placeholder="Search streams or subjects" /></label><label>Collection <select value={group} onChange={event => setGroup(event.target.value)}>{["All", "Exam streams", "College subjects"].map(value => <option key={value}>{value}</option>)}</select></label><span role="status">{visible.length} packs</span></section>
    <section aria-label="Available notes" className="download-list">{visible.map(pack => {
      const included = pack.topicIds.map(id => topics.find(topic => topic.id === id)!);
      return <article key={pack.id} className="download-entry" id={pack.id}>
        <div className="download-entry-heading"><div><span className="section-kicker">{pack.group}</span><h2>{pack.title}</h2><p>{included.map(topic => topic.title).join(" · ")}</p></div><a href={`/downloads/${pack.id}`} download className="button button-dark" aria-label={`Download ${pack.title}`}><Download size={17} /> Download</a></div>
        <details><summary><BookOpen size={16} /> Contents and sources</summary>{included.map(topic => <section key={topic.id} className="download-topic"><h3>{topic.subject}: {topic.title}</h3>{topic.notes.map(note => <p key={note}>{note}</p>)}<p><strong>Common pitfall:</strong> {topic.pitfall}</p><a href={sources[topic.sourceId].url} target="_blank" rel="noreferrer">{sources[topic.sourceId].title}</a></section>)}</details>
      </article>;
    })}{visible.length === 0 && <p className="notes-empty">No notes match this search.</p>}</section>
    <footer className="academy-footer"><span>Independent learning resource. Not endorsed by examination bodies.</span><Link href="/mock-test">MPSC practice</Link></footer>
  </main>;
}
