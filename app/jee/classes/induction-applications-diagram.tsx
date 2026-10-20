import Image from "next/image";
import styles from "./lecture.module.css";

export default function InductionApplicationsDiagram({ chapter }: { chapter: number }) {
  if (chapter === 0) return <Image className={styles.forceDiagram} src="/lectures/foundations/induction-applications.png" width={1200} height={640} alt="Sliding rod current upward with leftward braking; rotating rod local speed grows with distance from its pivot." />;
  const rl = chapter === 1;
  const points = Array.from({ length: 101 }, (_, index) => {
    const x = index / 100;
    const value = rl ? 1 - Math.exp(-5 * x) : 1 / (1 + ((350 + 300 * x) * .2 - 1 / ((350 + 300 * x) * 20e-6)) ** 2 / 100);
    return `${60 + 320 * x},${220 - 150 * value}`;
  }).join(" ");
  return <svg className={styles.forceDiagram} viewBox="0 0 460 310" role="img" aria-label={rl ? "RL growth: current rises asymptotically to 2 A; at 0.10 seconds it is about 1.26 A." : "Series RLC normalized power response peaks at 500 radians per second; half-power endpoints are about 475.62 and 525.62."}>
    <text x="20" y="30" fontSize="17">{rl ? "Current changes continuously" : "Resonance and half-power bandwidth"}</text>
    <path d="M60 60V220H380" fill="none" stroke="#68716e" strokeWidth="2" />
    <polyline points={points} fill="none" stroke="#14745c" strokeWidth="3" />
    {rl ? <><path d="M60 70H380" stroke="#245e94" strokeDasharray="5 4" /><circle cx="124" cy={220 - 150 * (1 - Math.exp(-1))} r="5" fill="#245e94" /><text x="25" y="75" fontSize="14">2 A</text><text x="140" y="135" fontSize="14">tau = 0.10 s</text><text x="63" y="247" fontSize="14">0</text><text x="340" y="247" fontSize="14">0.50 s</text><text x="55" y="283" fontSize="15">At tau: I = 1.26 A; final energy = 1 J</text></> : <><path d="M60 145H380" stroke="#245e94" strokeDasharray="5 4" /><text x="25" y="149" fontSize="14">0.5</text><text x="61" y="247" fontSize="14">350</text><text x="197" y="247" fontSize="14">500</text><text x="315" y="247" fontSize="14">650 rad/s</text><text x="40" y="283" fontSize="15">Bandwidth = 50 rad/s; Q = 10</text></>}
  </svg>;
}
