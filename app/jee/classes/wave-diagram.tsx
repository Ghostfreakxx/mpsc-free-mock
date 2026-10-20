import styles from "./lecture.module.css";

const curve = (cycles: number, amplitude: number, center: number) => Array.from({length: 121}, (_, i) => `${i ? "L" : "M"}${40 + i * 3},${center - amplitude * Math.sin(i * Math.PI * 2 * cycles / 120)}`).join(" ");

export default function WaveDiagram({chapter}: {chapter: number}) {
  const titles = ["The pattern travels; a particle oscillates", "Tension versus inertia", "Add signed displacements", "Third harmonic: three loops", "Closed-open pipe: displacement pattern"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <text x="20" y="28" fontSize="16">{titles[chapter]}</text>
    {chapter === 0 && <>
      <line x1="40" y1="135" x2="400" y2="135" stroke="#718780" />
      <path d={curve(2,35,135)} fill="none" stroke="#2878ac" strokeWidth="3" />
      <path d="M230 65 H340 l-12 -7 m12 7 l-12 7" fill="none" stroke="#247e68" strokeWidth="3" />
      <text x="245" y="52" fontSize="16">wave direction</text>
      <circle cx="130" cy="135" r="6" fill="#c05d28" /><path d="M130 105 V165" stroke="#c05d28" strokeWidth="3" />
      <text x="55" y="211" fontSize="16">Particle motion: up and down</text>
      <text x="55" y="246" fontSize="16">lambda = 0.5 m; f = 40 Hz; v = 20 m/s</text>
    </>}
    {chapter === 1 && <>
      <line x1="50" y1="115" x2="390" y2="115" stroke="#247e68" strokeWidth="4" />
      <path d="M95 80 H45 l12 -7 m-12 7 l12 7 M345 80 H395 l-12 -7 m12 7 l-12 7" stroke="#c05d28" fill="none" strokeWidth="3" />
      <text x="139" y="77">Tension = 8 N</text><text x="105" y="155">4 g spread over 2 m</text>
      <text x="70" y="198">mu = 0.002 kg/m</text><text x="70" y="236">Wave speed = 63.2 m/s</text>
    </>}
    {chapter === 2 && <>
      <line x1="50" y1="155" x2="390" y2="155" stroke="#718780" />
      <path d="M90 155 V80 M220 155 V205 M350 155 V130" stroke="#2878ac" strokeWidth="5" />
      <text x="60" y="65">+3 cm</text><text x="190" y="233">-2 cm</text><text x="320" y="110">+1 cm</text>
      <text x="143" y="145">+</text><text x="270" y="145">=</text>
      <text x="73" y="262" fontSize="15">Same place and time; signs matter</text>
    </>}
    {chapter === 3 && <>
      <line x1="40" y1="130" x2="400" y2="130" stroke="#718780" />
      <path d={curve(1.5,43,130)} fill="none" stroke="#2878ac" strokeWidth="3" />
      <path d={curve(1.5,-43,130)} fill="none" stroke="#2878ac" strokeWidth="2" strokeDasharray="5 5" />
      {[40,160,280,400].map(x=><circle key={x} cx={x} cy="130" r="5" fill="#c05d28" />)}
      <text x="90" y="206">4 nodes; 3 antinodes</text>
      <text x="75" y="241" fontSize="16">L = 1 m, v = 100 m/s, f3 = 150 Hz</text>
    </>}
    {chapter === 4 && <>
      <path d="M55 75 V170 H390 M55 75 H390" fill="none" stroke="#247e68" strokeWidth="3" />
      <line x1="55" y1="122" x2="390" y2="122" stroke="#718780" strokeDasharray="5 5" />
      <path d="M55 122 Q215 61 390 61 M55 122 Q215 183 390 183" fill="none" stroke="#2878ac" strokeWidth="2" />
      <text x="53" y="204" fontSize="15">Closed: node</text><text x="246" y="204" fontSize="15">Open: antinode</text>
      <text x="40" y="236" fontSize="15">L = 0.5 m: fundamental 170 Hz</text>
      <text x="40" y="258" fontSize="15">First overtone = third harmonic = 510 Hz</text>
    </>}
  </svg>;
}
