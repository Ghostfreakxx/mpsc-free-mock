import styles from "./lecture.module.css";

export default function OpticsApplicationsDiagram({ chapter }: { chapter: number }) {
  const titles = ["Converging rays become a virtual object", "Parallel input: back focus versus effective f", "A single air-to-glass spherical boundary"];
  return <svg className={styles.forceDiagram} viewBox="0 0 460 340" role="img" aria-label={titles[chapter]}>
    <text x="18" y="27" fontSize="16">{titles[chapter]}</text>
    <path d="M20 180H440" stroke="#7a827e" strokeDasharray="5 4" />
    {chapter === 0 ? <>
      <path d="M100 65V280M260 65V280" stroke="#245e94" strokeWidth="3" />
      <path d="M20 113.33L100 100L260 153.33L324 180M20 246.67L100 260L260 206.67L324 180" fill="none" stroke="#14745c" strokeWidth="3" />
      <path d="M260 153.33L340 180M260 206.67L340 180" fill="none" stroke="#b04f38" strokeDasharray="5 4" strokeWidth="2" />
      <circle cx="324" cy="180" r="4" fill="#14745c" /><circle cx="340" cy="180" r="4" fill="#b04f38" />
      <text x="80" y="54" fontSize="14">Lens 1</text><text x="240" y="54" fontSize="14">Lens 2</text>
      <text x="18" y="305" fontSize="14">L1: x = 0; L2: x = 10 cm; final: x = 14 cm</text>
      <text x="18" y="329" fontSize="14">Dashed continuation: would meet at x = 15 cm</text>
    </> : chapter === 1 ? <>
      <path d="M100 65V265M220 65V265" stroke="#245e94" strokeWidth="3" />
      <path d="M20 110H100L220 145L316 180M20 250H100L220 215L316 180" fill="none" stroke="#14745c" strokeWidth="3" />
      <circle cx="316" cy="180" r="4" fill="#14745c" />
      <text x="72" y="54" fontSize="14">10 D</text><text x="207" y="54" fontSize="14">5 D</text>
      <path d="M220 278H316M220 272V284M316 272V284" stroke="#b04f38" strokeWidth="2" />
      <text x="220" y="300" fontSize="14">Back focus: 4 cm</text>
      <text x="18" y="329" fontSize="14">Separation: 5 cm; effective focal length: 8 cm</text>
    </> : <>
      <path d="M140 60Q100 180 140 280L440 280V60Z" fill="#edf3f7" />
      <path d="M140 60Q100 180 140 280" fill="none" stroke="#245e94" strokeWidth="3" />
      <path d="M30 180L131 110L405 180M30 180L131 250L405 180" fill="none" stroke="#14745c" strokeWidth="3" />
      <circle cx="30" cy="180" r="4" fill="#14745c" /><circle cx="405" cy="180" r="4" fill="#14745c" />
      <text x="18" y="55" fontSize="14">n1 = 1</text><text x="255" y="55" fontSize="14">n2 = 1.5</text>
      <text x="18" y="305" fontSize="14">u = -60 cm; R = +20 cm; v = +180 cm</text>
      <text x="18" y="329" fontSize="14">Schematic, not to scale; no second boundary</text>
    </>}
  </svg>;
}
