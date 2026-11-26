import Link from "next/link";
import { packs } from "../offline-packs/catalog";
import SavedPackManager from "./saved-packs";
import PackDownload from "./pack-download";
import styles from "../classes/lecture.module.css";

export const metadata = { title: "Offline learning packs | Free MPSC Mock" };

export default function OfflineLearningPage() {
  return <main className={styles.page}>
    <header className={styles.header}><Link href="/jee/classes" prefetch={false}>JEE classes</Link><Link href="/">Free MPSC Mock</Link></header>
    <div className={styles.heading}>
      <h1>Offline learning packs</h1>
      <p>Save a JEE or NEET recorded subject, or choose an individual Gravitation or Newton’s laws chapter. The files stay in this browser. Open a saved pack from this page or bookmark its address.</p>
    </div>
    <SavedPackManager current={packs.map(pack => pack.id)} />
    {packs.map(({ id, title, description, version, assets }) =>
      <PackDownload key={id} pack={{ id, title, description, version, assets }} />)}
  </main>;
}
