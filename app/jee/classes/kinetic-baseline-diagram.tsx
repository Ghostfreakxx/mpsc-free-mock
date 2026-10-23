import styles from "./lecture.module.css";

export default function KineticBaselineDiagram() {
  const x=(t:number)=>60+t*11.5;
  const y=(s:number)=>235-s*180;
  const points=Array.from({length:61},(_,i)=>{const t=i/2;return `${x(t)},${y(.1+.8*Math.exp(-Math.log(2)*t/10))}`;}).join(" ");
  return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label="Signal decays from 0.900 toward a 0.100 baseline. At ten minutes signal is 0.500, so the excess signal halves from 0.800 to 0.400.">
    <title>Subtract the baseline before taking a ratio</title>
    <rect width="460" height="330" rx="12" fill="#f5faf7"/>
    <g fontFamily="Arial, sans-serif" fill="#20483e" fontSize="13">
      <text x="230" y="27" textAnchor="middle" fontSize="17" fontWeight="bold">The excess signal follows first order</text>
      <path d="M60 55 V235 H420" fill="none" stroke="#20483e" strokeWidth="2"/>
      <text x="25" y="53">S</text>
      {[0,.1,.5,.9].map(s=><g key={s}><path d={`M55 ${y(s)} H60`} stroke="#20483e"/><text x="48" y={y(s)+4} textAnchor="end">{s.toFixed(1)}</text></g>)}
      {[0,10,20,30].map(t=><g key={t}><path d={`M${x(t)} 235 V240`} stroke="#20483e"/><text x={x(t)} y="257" textAnchor="middle">{t}</text></g>)}
      <path d={`M60 ${y(.1)} H420`} stroke="#b96d45" strokeDasharray="5 4"/>
      <text x="410" y="211" textAnchor="end" fill="#8e502f">Baseline 0.100</text>
      <polyline points={points} fill="none" stroke="#146b55" strokeWidth="3"/>
      <circle cx={x(10)} cy={y(.5)} r="4" fill="#146b55"/>
      <text x="190" y="133">At 10 min: S = 0.500</text>
      <text x="230" y="279" textAnchor="middle">Time / min</text>
      <text x="230" y="303" textAnchor="middle" fontWeight="bold">(0.500−0.100)/(0.900−0.100) = 1/2</text>
      <text x="230" y="322" textAnchor="middle" fontSize="12">S = 0.100 + 0.800 exp[−(ln 2)t/10]</text>
    </g>
  </svg>;
}
