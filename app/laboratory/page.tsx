import Link from "next/link";
import { CellLab, FrictionLab, OpticsLab } from "./advanced-labs";
import CircuitLab from "./circuit-lab";
import MolecularLab from "./molecular-lab";
import { AtomicLab, CivicLab, GeographyLab, InheritanceLab, QuadraticLab } from "./science-labs";
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
        <CircuitLab />
        <FrictionLab />
        <OpticsLab />
        <AtomicLab />
        <MolecularLab />
        <InheritanceLab />
        <CellLab />
        <QuadraticLab />
        <CivicLab />
        <GeographyLab />
      </section>
    </main>
  );
}
