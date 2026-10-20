import Image from "next/image";
import styles from "./lecture.module.css";

export default function CapacitorApplicationsDiagram({ chapter }: { chapter: number }) {
  if (chapter === 1) return <Image className={styles.forceDiagram} src="/lectures/foundations/capacitor-applications.png" width={1200} height={640} alt="Half-area filling with kappa=3 gives 2C0 by parallel regions; half-thickness filling gives 1.5C0 by series layers." />;
  const sharing = chapter === 0;
  return <svg className={styles.forceDiagram} viewBox="0 0 460 320" role="img" aria-label={sharing ? "Charge sharing: 24 microC remains conserved while stored energy falls from 144 to 48 microJ; final charges are 8 and 16 microC at 4 V." : "Battery-connected insertion supplies 400 microJ and raises stored energy 200 microJ; external work is -200 microJ. A charged floating node has unequal capacitor charge magnitudes."}>
    <text x="18" y="30" fontSize="17">{sharing ? "Charge and energy are different accounts" : "Account for the battery and node charge"}</text>
    {sharing ? <>
      <text x="35" y="80" fontSize="16">Initially: 2 microF at 12 V; 4 microF at 0 V</text>
      <text x="35" y="120" fontSize="16">Final common voltage: 4 V</text>
      <rect x="35" y="150" width="90" height="28" fill="#245e94" /><rect x="125" y="150" width="180" height="28" fill="#14745c" />
      <text x="35" y="205" fontSize="14">8 microC + 16 microC = 24 microC</text>
      <text x="35" y="250" fontSize="16">Energy: 144 to 48 microJ</text>
      <text x="35" y="290" fontSize="15">96 microJ released during real settling</text>
    </> : <>
      <text x="30" y="80" fontSize="16">Battery work: +400 microJ</text>
      <text x="30" y="120" fontSize="16">Stored energy change: +200 microJ</text>
      <text x="30" y="160" fontSize="16">External work: -200 microJ</text>
      <path d="M30 185H420" stroke="#68716e" />
      <text x="30" y="220" fontSize="15">Charged node B: -14 + 20 = +6 microC</text>
      <text x="30" y="258" fontSize="15">B = 5 V; capacitor charges differ</text>
      <text x="30" y="297" fontSize="14">Work result assumes slow, lossless insertion</text>
    </>}
  </svg>;
}
