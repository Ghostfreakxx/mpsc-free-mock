import styles from "./lecture.module.css";

export default function MagneticMaterialsDiagram({chapter}: {chapter:number}) {
  const titles = ["Field plus material response", "Diamagnet: M opposes H", "Curie regime: chi decreases with T", "Domains: cancellation versus alignment", "Curie transition: order is lost"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <defs><marker id="mm-blue" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7" fill="#2878ac"/></marker><marker id="mm-orange" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7" fill="#e0783e"/></marker></defs>
    <text x="18" y="28" fontSize="16">{titles[chapter]}</text>
    {chapter===0 && <>
      <text x="30" y="69" fontSize="15">Linear, isotropic material</text>
      <path d="M40 103 H310" stroke="#2878ac" strokeWidth="3" markerEnd="url(#mm-blue)"/><text x="325" y="108" fontSize="15">H</text>
      <path d="M40 155 H150" stroke="#e0783e" strokeWidth="3" markerEnd="url(#mm-orange)"/><text x="168" y="161" fontSize="15">M = chi H</text>
      <text x="30" y="204" fontSize="16">B = mu0 (H + M)</text><text x="30" y="239" fontSize="15">Arrows schematic; units of H and M: A/m</text>
    </>}
    {chapter===1 && <>
      <rect x="112" y="92" width="215" height="80" fill="#f3f7f6" stroke="#52636b"/>
      <path d="M55 72 H360" stroke="#2878ac" strokeWidth="3" markerEnd="url(#mm-blue)"/><text x="370" y="77" fontSize="15">H</text>
      <path d="M277 134 H164" stroke="#e0783e" strokeWidth="3" markerEnd="url(#mm-orange)"/><text x="210" y="119" fontSize="15">M</text>
      <text x="25" y="207" fontSize="16">chi &lt; 0; mu_r slightly below 1</text><text x="25" y="240" fontSize="15">Opposing M does not mean reversed total B</text>
    </>}
    {chapter===2 && <>
      <path d="M65 65 V215 H365" fill="none" stroke="#52636b" strokeWidth="2"/>
      <text x="20" y="64" fontSize="15">chi</text><text x="374" y="220" fontSize="15">T (K)</text>
      <path d="M82 76 C110 118 155 157 340 184" fill="none" stroke="#247e68" strokeWidth="3"/>
      <circle cx="145" cy="143" r="4" fill="#e0783e"/><circle cx="290" cy="177" r="4" fill="#e0783e"/>
      <text x="139" y="124" fontSize="15">300 K: 0.003</text><text x="219" y="160" fontSize="15">600 K: 0.0015</text>
      <text x="70" y="249" fontSize="15">Schematic chi = C/T in its applicable regime</text>
    </>}
    {chapter===3 && <>
      <text x="35" y="70" fontSize="15">Different domains</text><text x="251" y="70" fontSize="15">More alignment</text>
      {[0,1,2,3].map(i=><g key={i}>
        <rect x={35+(i%2)*72} y={90+Math.floor(i/2)*60} width="68" height="56" fill="#f3f7f6" stroke="#52636b"/>
        <path d={i%2===0 ? `M${48+(i%2)*72} ${118+Math.floor(i/2)*60} h37` : `M${86+(i%2)*72} ${118+Math.floor(i/2)*60} h-37`} stroke="#2878ac" strokeWidth="2" markerEnd="url(#mm-blue)"/>
        <rect x={255+(i%2)*72} y={90+Math.floor(i/2)*60} width="68" height="56" fill="#f3f7f6" stroke="#52636b"/>
        <path d={`M${267+(i%2)*72} ${118+Math.floor(i/2)*60} h37`} stroke="#2878ac" strokeWidth="2" markerEnd="url(#mm-blue)"/>
      </g>)}
      <text x="29" y="239" fontSize="15">Schematic domains, not individual electrons</text>
    </>}
    {chapter===4 && <>
      <path d="M60 62 V214 H373" fill="none" stroke="#52636b" strokeWidth="2"/><text x="18" y="58" fontSize="15">M_s</text><text x="380" y="218" fontSize="15">T</text>
      <path d="M72 85 C160 91 225 104 251 214 H368" fill="none" stroke="#247e68" strokeWidth="3"/>
      <path d="M251 62 V214" stroke="#e0783e" strokeDasharray="5 4"/><text x="240" y="237" fontSize="15">T_C</text>
      <text x="267" y="94" fontSize="15">Paramagnetic</text><text x="267" y="116" fontSize="15">above T_C</text>
      <text x="27" y="263" fontSize="15">M_s: spontaneous magnetisation (schematic)</text>
    </>}
  </svg>;
}
