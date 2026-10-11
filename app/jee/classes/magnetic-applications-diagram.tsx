import Image from "next/image";
import styles from "./lecture.module.css";

export default function MagneticApplicationsDiagram({ chapter }: { chapter: number }) {
  if (chapter === 0) return <Image className={styles.forceDiagram} src="/lectures/foundations/magnetic-applications.png" width={1200} height={640} alt="Finite upward-current segment gives field into the page to its right; same-direction long wires cancel between them closer to the weaker current." />;
  const particle = chapter === 1;
  return <svg className={styles.forceDiagram} viewBox="0 0 460 310" role="img" aria-label={particle ? "Helix components: perpendicular speed determines circular radius, parallel speed determines advance per turn." : "A semicircular magnetic analyzer has landing separation two radii; crossed-field selection fixes speed E divided by B."}>
    <text x="18" y="30" fontSize="17">{particle ? "Separate the velocity components" : "Match the equation to the stage"}</text>
    {particle ? <>
      <circle cx="130" cy="145" r="65" stroke="#14745c" strokeWidth="3" fill="none" />
      <path d="M130 145H195 M130 80H215L204 74 M215 80L204 86" stroke="#245e94" strokeWidth="3" fill="none" />
      <text x="137" y="136" fontSize="14">r = 2 cm</text><text x="180" y="66" fontSize="14">v perpendicular</text>
      <path d="M260 145H410L396 137 M410 145L396 153" stroke="#14745c" strokeWidth="3" fill="none" />
      <text x="260" y="125" fontSize="14">Parallel advance</text><text x="260" y="174" fontSize="14">pitch = 6.283 cm</text>
      <text x="45" y="247" fontSize="15">T = 6.283 x 10^-7 s</text><text x="45" y="282" fontSize="15">Static magnetic field: kinetic energy constant</text>
    </> : <>
      <path d="M90 95A65 65 0 0 1 90 225 M90 80V240" stroke="#14745c" strokeWidth="3" fill="none" />
      <path d="M90 160H155" stroke="#245e94" strokeWidth="2" /><text x="113" y="152" fontSize="14">r</text>
      <text x="22" y="164" fontSize="14">2r</text><text x="170" y="115" fontSize="14">Accelerator: |q|V = mv squared / 2</text>
      <text x="170" y="154" fontSize="14">Fixed V: r scales as sqrt(m)</text>
      <text x="170" y="193" fontSize="14">Selector: v = E/B</text><text x="170" y="232" fontSize="14">Fixed v, |q|, B: r scales as m</text>
      <text x="35" y="282" fontSize="15">Semicircle landing separation is a diameter</text>
    </>}
  </svg>;
}
