import styles from "./lecture.module.css";

export default function WavesApplicationsDiagram({ chapter }: { chapter: number }) {
  const points = Array.from({ length: 161 }, (_, i) => {
    const u = i / 160;
    const y = chapter === 0 ? Math.sin(4 * Math.PI * u) : chapter === 1 ? Math.sin(2 * Math.PI * u) : Math.abs(Math.cos(4 * Math.PI * u));
    return `${45 + 350 * u},${140 - 50 * y}`;
  }).join(" ");
  const labels = [
    "A right-going wave at time zero. The particle at the origin crosses equilibrium downward while the pattern moves right at five metres per second.",
    "The second harmonic of a two-metre fixed string has nodes at zero, one and two metres. Adjacent loops have opposite displacement signs at the same time.",
    "Equal-amplitude tones differing by four hertz have envelope maxima separated by one quarter second. The graph shows envelope magnitude, not instantaneous sound pressure.",
  ];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 300" role="img" aria-label={labels[chapter]}>
    <path d="M45 60V205M45 140H400" fill="none" stroke="#6a7d75" strokeWidth="2" />
    <polyline points={points} fill="none" stroke="#245e94" strokeWidth="3" />
    {chapter === 0 && <>
      <text x="45" y="30">t = 0; pattern moves right at 5 m/s</text>
      <circle cx="45" cy="140" r="4" fill="#a54434" />
      <path d="M45 147V193l-5 -8m5 8l5 -8" fill="none" stroke="#a54434" strokeWidth="2" />
      <text x="55" y="223">Particle at x = 0: velocity downward</text>
      <text x="77" y="252">v_y = -0.4 pi m/s; a_y = 0</text>
      <text x="58" y="281">Wavelength 0.5 m; frequency 10 Hz</text>
    </>}
    {chapter === 1 && <>
      {[45, 220, 395].map((x, i) => <g key={x}><circle cx={x} cy="140" r="5" fill="#276b4b" /><text x={x} y="225" textAnchor="middle">{i} m</text></g>)}
      <text x="80" y="30">Second harmonic: 2 loops, 3 nodes</text>
      <text x="70" y="252">Within a loop: same temporal phase</text>
      <text x="82" y="280">Next loop: phase difference pi</text>
    </>}
    {chapter === 2 && <>
      {[0, .25, .5, .75, 1].map(t => <text key={t} x={45 + 350 * t} y="225" textAnchor="middle">{t} s</text>)}
      <text x="63" y="30">Envelope magnitude; delta f = 4 Hz</text>
      <text x="73" y="253">Loud maxima every 0.25 seconds</text>
      <text x="50" y="281">256 Hz + 4 beats/s: 252 or 260 Hz</text>
    </>}
  </svg>;
}
