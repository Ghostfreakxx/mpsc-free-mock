import Link from "next/link";
import { packs } from "../offline-packs/catalog";
import PackDownload from "./pack-download";
import styles from "../classes/lecture.module.css";

export const metadata = { title: "Offline learning packs | Free MPSC Mock" };

export default function OfflineLearningPage() {
  return <main className={styles.page}>
    <header className={styles.header}><Link href="/jee/classes" prefetch={false}>JEE classes</Link><Link href="/">Free MPSC Mock</Link></header>
    <div className={styles.heading}>
      <h1>Offline learning packs</h1>
      <p>Save a recorded subject or an individual Gravitation chapter. The files stay in this browser. Open a saved pack from this page or bookmark its address.</p>
    </div>
    {packs.map(({ id, title, description, version, assets }) =>
      <PackDownload key={id} pack={{ id, title, description, version, assets }} />)}
  </main>;
}
