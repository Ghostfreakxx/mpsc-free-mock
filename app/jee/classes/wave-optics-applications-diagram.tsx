import styles from "./lecture.module.css";

function plot(fn: (value: number) => number, low: number, high: number) {
  return Array.from({ length: 401 }, (_, i) => {
    const value = low + (high - low) * i / 400;
    return `${i ? "L" : "M"}${45 + 370 * i / 400},${250 - 160 * fn(value)}`;
  }).join(" ");
}

export default function WaveOpticsApplicationsDiagram({ chapter }: { chapter: number }) {
  const titles = ["Phase shifts position; amplitude sets contrast", "Interference inside a diffraction envelope", "Track intensity after each ideal polarizer"];
  const envelope = (order: number) => {
    const argument = Math.PI * order / 3;
    return argument === 0 ? 1 : (Math.sin(argument) / argument) ** 2;
  };
  return <svg className={styles.forceDiagram} viewBox="0 0 460 350" role="img" aria-label={titles[chapter]}>
    <text x="18" y="27" fontSize="16">{titles[chapter]}</text>
    {chapter === 0 ? <>
      <path d="M45 65V250H425" fill="none" stroke="#7a827e" />
      <path d={plot(y => (13 + 12 * Math.cos(2 * Math.PI * y + Math.PI / 2)) / 25, -1, 1)} fill="none" stroke="#14745c" strokeWidth="3" />
      <text x="18" y="94" fontSize="14">25</text><text x="24" y="250" fontSize="14">0</text>
      <text x="40" y="274" fontSize="14">-1</text><text x="230" y="274" fontSize="14">0</text><text x="405" y="274" fontSize="14">+1</text>
      <circle cx="183.75" cy="90" r="4" fill="#b04f38" />
      <text x="150" y="65" fontSize="14">Zero-phase order: -0.25 mm</text>
      <text x="18" y="309" fontSize="14">Horizontal axis: y in mm; beta = 1 mm</text>
      <text x="18" y="336" fontSize="14">Imax = 25; Imin = 1; visibility = 12/13</text>
    </> : chapter === 1 ? <>
      <path d="M45 65V250H425" fill="none" stroke="#7a827e" />
      <path d={plot(envelope, -3, 3)} fill="none" stroke="#245e94" strokeDasharray="5 4" strokeWidth="2" />
      <path d={plot(order => envelope(order) * Math.cos(Math.PI * order) ** 2, -3, 3)} fill="none" stroke="#14745c" strokeWidth="3" />
      {[-3, -2, -1, 0, 1, 2, 3].map(order => <text key={order} x={45 + (order + 3) * 370 / 6 - 6} y="274" fontSize="14">{order}</text>)}
      <text x="25" y="90" fontSize="14">1</text><text x="25" y="250" fontSize="14">0</text>
      <text x="18" y="309" fontSize="14">Horizontal axis: y/beta; d/a = 3</text>
      <text x="18" y="336" fontSize="14">Five inner orders; +/-3 are missing at edges</text>
    </> : <>
      {[0, 30, 60, 90].map((angle, i) => {
        const x = 70 + i * 105;
        const dx = 30 * Math.sin(angle * Math.PI / 180), dy = 30 * Math.cos(angle * Math.PI / 180);
        return <g key={angle}>
          <circle cx={x} cy="135" r="40" fill="#edf3f7" stroke="#245e94" strokeWidth="2" />
          <path d={`M${x - dx} ${135 + dy}L${x + dx} ${135 - dy}`} stroke="#14745c" strokeWidth="4" />
          <text x={x - 22} y="75" fontSize="14">{angle} deg</text>
          <text x={x - 26} y="210" fontSize="14">{["50", "37.5", "28.125", "21.094"][i]}</text>
        </g>;
      })}
      <text x="18" y="255" fontSize="14">Input: 100 units, unpolarized</text>
      <text x="18" y="295" fontSize="14">After first: divide by 2; then multiply by 3/4</text>
      <text x="18" y="336" fontSize="14">Axis view along the beam; no step adds energy</text>
    </>}
  </svg>;
}
