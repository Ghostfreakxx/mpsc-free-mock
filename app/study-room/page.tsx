import type { Metadata } from "next";
import Link from "next/link";
import StudyRoom from "./study-room";
import styles from "./study-room.module.css";

export const metadata: Metadata = {
  title: "Mizo Study Room | Free MPSC Mock",
  description: "Explore a Mizo study room and open free mock tests, notes, and classes.",
};

const resources = [
  ["Mock tests", "Practise with the MPSC question bank.", "/mock-test"],
  ["Mizo practice", "Study MPSC questions in Mizo.", "/mizo"],
  ["Exam simulator", "Sit a timed examination.", "/exam-simulator"],
  ["College notes", "Read and revise with free notes.", "/college-notes"],
  ["Recorded classes", "Study at your own pace.", "/jee/classes"],
] as const;

export default function StudyRoomPage() {
  return (
    <main className={styles.roomPage}>
      <header className={styles.header}>
        <Link href="/" prefetch={false} className={styles.brand}>Free MPSC Mock</Link>
        <nav aria-label="Study room navigation">
          <a href="#resources">Study resources</a>
          <Link href="/mock-test" prefetch={false}>Mock tests <span aria-hidden="true">↗</span></Link>
        </nav>
      </header>
      <section className={styles.hero} aria-labelledby="room-title">
        <div className={styles.intro}>
          <p className={styles.eyebrow}>By Tochhawng Teachers · Mizoram</p>
          <h1 id="room-title">The Mizo<br />Study Room</h1>
          <p>A place to prepare for your next exam. Free for everyone, with no account required.</p>
          <a className={styles.primary} href="#resources">Find study resources <span aria-hidden="true">↓</span></a>
        </div>
        <StudyRoom />
      </section>
      <section className={styles.motto} aria-labelledby="room-motto">
        <h2 className={styles.eyebrow} id="room-motto">Our motto</h2>
        <blockquote>“Education is an offering to God in a church. Share it freely; do not sell it like a five-star meal.”</blockquote>
        <p>Every revolution starts with a student. Learn freely, ask bold questions, and build a better future together.</p>
      </section>
      <section className={styles.resources} id="resources" aria-labelledby="resource-title">
        <h2 id="resource-title">Choose what to study</h2>
        <ul>
          {resources.map(([title, description, href]) => (
            <li key={href}>
              <Link href={href} prefetch={false}>
                <strong>{title} <span aria-hidden="true">↗</span></strong>
                <span>{description}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/" prefetch={false}>← Back to the dashboard</Link>
      </section>
    </main>
  );
}
