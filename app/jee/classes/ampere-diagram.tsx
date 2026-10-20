import styles from "./lecture.module.css";

function CurrentSymbol({x,y,out}: {x:number;y:number;out:boolean}) {
  return <g><circle cx={x} cy={y} r="12" fill="white" stroke="#2878ac" strokeWidth="2"/>{out ? <circle cx={x} cy={y} r="3" fill="#2878ac"/> : <path d={`M${x-5} ${y-5} l10 10 m0 -10 l-10 10`} stroke="#2878ac" strokeWidth="2"/>}</g>;
}

export default function AmpereDiagram({chapter}: {chapter:number}) {
  const titles=["Counterclockwise path: outward normal", "Concentric circle uses wire symmetry", "Uniform current: inside and outside", "Rectangle through a long solenoid", "Turn density sets the interior field"];
  const outside=Array.from({length:21},(_,i)=>{const x=200+i*6.5; return `${i===0 ? 'M' : 'L'}${x} ${210-120*130/(x-70)}`;}).join(' ');
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <text x="18" y="28" fontSize="16">{titles[chapter]}</text>
    {chapter===0 && <>
      <circle cx="175" cy="132" r="87" fill="none" stroke="#247e68" strokeWidth="2" strokeDasharray="5 5"/>
      <path d="M187 45 H167 l8 -5 m-8 5 l8 5" fill="none" stroke="#e0783e" strokeWidth="3"/>
      <CurrentSymbol x={142} y={109} out/><text x="103" y="143" fontSize="15">2 A out</text>
      <CurrentSymbol x={211} y={164} out={false}/><text x="182" y="196" fontSize="15">5 A in</text>
      <CurrentSymbol x={355} y={131} out/><text x="316" y="168" fontSize="15">7 A outside</text>
      <text x="61" y="252" fontSize="16">I_enclosed = 2 - 5 = -3 A</text>
    </>}
    {chapter===1 && <>
      <circle cx="140" cy="135" r="62" fill="none" stroke="#247e68" strokeWidth="2" strokeDasharray="5 5"/><CurrentSymbol x={140} y={135} out/>
      <path d="M152 73 H130 l8 -5 m-8 5 l8 5" fill="none" stroke="#e0783e" strokeWidth="3"/>
      <path d="M140 135 H202" stroke="#52636b"/><text x="166" y="124" fontSize="15">r</text>
      <text x="238" y="105" fontSize="16">B tangent</text><text x="238" y="147" fontSize="16">B constant</text>
      <text x="55" y="247" fontSize="16">B x 2pi r = mu0 I</text>
    </>}
    {chapter===2 && <>
      <path d="M70 210 H389 M70 210 V57" fill="none" stroke="#52636b" strokeWidth="2"/>
      <path d="M70 210 L200 90" fill="none" stroke="#247e68" strokeWidth="3"/><path d={outside} fill="none" stroke="#2878ac" strokeWidth="3"/>
      <text x="39" y="59" fontSize="16">B</text><text x="195" y="233" fontSize="15">a</text><text x="319" y="233" fontSize="15">2a</text><text x="395" y="213" fontSize="16">r</text>
      <text x="204" y="73" fontSize="15">B(a) = 0.5 mT</text>
      <text x="100" y="254" fontSize="15">Inside: B proportional to r; outside: 1/r</text>
    </>}
    {chapter===3 && <>
      {Array.from({length:14},(_,i)=><ellipse key={i} cx={82+i*21} cy="140" rx="10" ry="44" fill="none" stroke="#247e68" strokeWidth="2"/>)}
      <path d="M95 151 V78 H305 V151 Z" fill="none" stroke="#e0783e" strokeWidth="2" strokeDasharray="5 5"/>
      <path d="M122 140 H282 l-9 -5 m9 5 l-9 5" fill="none" stroke="#2878ac" strokeWidth="3"/>
      <text x="194" y="68" fontSize="15">ell</text><text x="198" y="127" fontSize="15">B</text>
      <text x="42" y="216" fontSize="16">B ell = mu0 (n ell) I</text>
      <text x="42" y="252" fontSize="15">Ideal long coil; outside contribution neglected</text>
    </>}
    {chapter===4 && <>
      <text x="35" y="76" fontSize="16">N = 600; L = 0.30 m; I = 2 A</text>
      <text x="35" y="119" fontSize="16">n = N/L = 2000 per meter</text>
      <text x="35" y="161" fontSize="16">Deep inside: B = 5.03 mT</text>
      <text x="35" y="203" fontSize="16">Long-coil axial end: about 2.51 mT</text>
      <text x="35" y="250" fontSize="15">Fixed N and I: double L, halve interior B</text>
    </>}
  </svg>;
}
