import styles from "./lecture.module.css";

export default function ConvexMirrorLabDiagram({ chapter }: { chapter: number }) {
  return <svg className={styles.forceDiagram} viewBox="0 0 440 280" role="img" aria-label={chapter === 0 ? "Converging rays from the convex lens aim at C behind the convex mirror. At the return condition C is the centre of curvature. Schematic, not to scale." : "The corrected mirror-pole to image-C separation is 30.2 centimetres; halving gives a focal-length magnitude of 15.1 centimetres."}>
    <path d="M25 140H420" stroke="#6a7d75" strokeDasharray="4 4" />
    {chapter === 0 ? <>
      <ellipse cx="140" cy="140" rx="10" ry="75" fill="#e4edf5" stroke="#245e94" strokeWidth="2" />
      <path d="M264 85Q236 140 264 195" fill="none" stroke="#276b4b" strokeWidth="4" />
      <path d="M140 70L255 102M140 210L255 178" stroke="#245e94" strokeWidth="2" />
      <path d="M255 102L390 140L255 178" fill="none" stroke="#245e94" strokeDasharray="4 4" />
      <circle cx="390" cy="140" r="4" fill="#a54434" />
      <text x="111" y="38">Lens</text><text x="247" y="67">Mirror</text>
      <text x="230" y="220">P</text><text x="385" y="168">C</text>
      <text x="265" y="237">PC = R; f = R/2</text>
      <text x="45" y="271">At C: normal incidence; rays retrace</text>
    </> : <>
      <path d="M90 90V200M340 90V200M90 185H340" stroke="#245e94" strokeWidth="2" />
      <text x="65" y="65">P: 40 cm</text><text x="297" y="65">C: 70 cm</text>
      <text x="106" y="124">Observed radius: 30 cm</text>
      <text x="92" y="159">Add calibration: +0.2 cm</text>
      <text x="110" y="239">Corrected R: 30.2 cm</text>
      <text x="149" y="268">f: 15.1 cm</text>
    </>}
  </svg>;
}
