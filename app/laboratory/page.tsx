import Link from "next/link";
import Laboratory from "./laboratory";
import styles from "../study-room/study-room.module.css";

export const metadata = { title: "Tochhawng Virtual Laboratory | Free MPSC Mock" };

export default function LaboratoryPage() {
  return (
    <main className={styles.roomPage}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>Free MPSC Mock</Link>
        <Link href="/study-room">Study room</Link>
      </header>
      <section className={styles.resources} aria-labelledby="lab-heading">
        <h1 id="lab-heading" className={styles.labTitle}>Tochhawng Virtual Laboratory</h1>
        <Laboratory />
      </section>
    </main>
  );
}
