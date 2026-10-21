import Image from "next/image";
import styles from "./lecture.module.css";

export default function CircuitApplicationsDiagram({ chapter }: { chapter: number }) {
  if (chapter === 2) return <Image className={styles.forceDiagram} src="/lectures/foundations/circuit-applications.png" width={1200} height={640} alt="Unbalanced bridge: 12 V between A and D; B=48/7 V, C=36/7 V, and bridge current 4/7 A from B to C." />;
  const power = chapter === 0;
  const points = Array.from({ length: 101 }, (_, index) => {
    const r = index / 10;
    return `${60 + index * 3.2},${220 - 150 * (144 * r / (r + 2) ** 2) / 18}`;
  }).join(" ");
  return <svg className={styles.forceDiagram} viewBox="0 0 460 320" role="img" aria-label={power ? "Load power for E=12 V and internal resistance 2 ohm peaks at 18 W when load resistance is 2 ohm." : "Heating changes a resistor from 10 to 12 ohm: at fixed 12 V power falls, but at fixed 1.2 A power rises."}>
    <text x="18" y="30" fontSize="17">{power ? "Maximum power is not maximum efficiency" : "Same resistor, different source constraint"}</text>
    {power ? <>
      <path d="M60 60V220H380" fill="none" stroke="#68716e" strokeWidth="2" /><polyline points={points} fill="none" stroke="#14745c" strokeWidth="3" />
      <circle cx="124" cy="70" r="5" fill="#245e94" /><text x="140" y="78" fontSize="14">18 W at R = 2 ohm</text>
      <text x="24" y="63" fontSize="14">P (W)</text><text x="60" y="245" fontSize="14">0</text><text x="105" y="245" fontSize="14">2</text><text x="310" y="245" fontSize="14">10 ohm</text>
      <text x="45" y="282" fontSize="15">Matched load: efficiency = 50 percent</text>
    </> : <>
      <text x="35" y="75" fontSize="16">20 C: 10 ohm</text><text x="260" y="75" fontSize="16">70 C: 12 ohm</text>
      <text x="35" y="125" fontSize="15">Fixed 12 V</text><path d="M150 142H350" stroke="#245e94" strokeWidth="3" /><text x="45" y="175" fontSize="15">14.4 W</text><text x="270" y="175" fontSize="15">12 W</text>
      <text x="35" y="220" fontSize="15">Fixed 1.2 A</text><path d="M150 237H350" stroke="#14745c" strokeWidth="3" /><text x="45" y="270" fontSize="15">14.4 W</text><text x="270" y="270" fontSize="15">17.28 W</text>
      <text x="35" y="306" fontSize="14">alpha = 0.004/K; linear approximation</text>
    </>}
  </svg>;
}
