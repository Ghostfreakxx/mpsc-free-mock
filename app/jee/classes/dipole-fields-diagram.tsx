import styles from "./lecture.module.css";

function Magnet({x,y}: {x:number;y:number}) {
  return <g><rect x={x} y={y} width="100" height="34" fill="white" stroke="#52636b" strokeWidth="2"/><path d={`M${x+50} ${y} v34`} stroke="#52636b"/><text x={x+22} y={y+23} fontSize="16" fill="#2878ac">S</text><text x={x+72} y={y+23} fontSize="16" fill="#e0783e">N</text></g>;
}

export default function DipoleFieldsDiagram({chapter}: {chapter:number}) {
  const titles=["A closed field-line pattern", "Axial B is parallel to m on both sides", "Equatorial B points opposite to m", "Finite loop: exact / far-field estimate", "Add the field vectors at one point"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <defs><marker id="df-green" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="#247e68"/></marker><marker id="df-blue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="#2878ac"/></marker><marker id="df-orange" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="#e0783e"/></marker></defs>
    <text x="18" y="28" fontSize="16">{titles[chapter]}</text>
    {chapter===0 && <>
      <path d="M260 140 C350 85 330 65 210 65 C95 65 85 100 160 140 H260 M260 140 C350 185 330 215 210 215 C95 215 85 180 160 140" fill="none" stroke="#2878ac" strokeWidth="2"/>
      <Magnet x={160} y={123}/>
      <path d="M198 140 H224" stroke="#2878ac" strokeWidth="2" markerEnd="url(#df-blue)"/>
      <path d="M231 65 H198" stroke="#2878ac" strokeWidth="2" markerEnd="url(#df-blue)"/><path d="M231 215 H198" stroke="#2878ac" strokeWidth="2" markerEnd="url(#df-blue)"/>
      <path d="M192 174 H251" stroke="#247e68" strokeWidth="2" markerEnd="url(#df-green)"/><text x="264" y="180" fontSize="15">m: S to N</text>
      <text x="18" y="252" fontSize="15">Schematic: outside N to S, inside S to N</text>
    </>}
    {chapter===1 && <>
      <Magnet x={170} y={124}/>
      <path d="M325 141 H405" stroke="#2878ac" strokeWidth="3" markerEnd="url(#df-blue)"/>
      <path d="M34 141 H107" stroke="#2878ac" strokeWidth="3" markerEnd="url(#df-blue)"/>
      <text x="52" y="120" fontSize="15">B right</text><text x="326" y="120" fontSize="15">B right</text>
      <path d="M184 89 H255" stroke="#247e68" strokeWidth="2" markerEnd="url(#df-green)"/><text x="265" y="95" fontSize="15">m</text>
      <path d="M220 181 H362" stroke="#52636b" strokeDasharray="4 4"/><text x="264" y="204" fontSize="15">r from center</text>
      <text x="18" y="250" fontSize="15">m = 0.80 A m^2, r = 0.40 m: B = 2.50 microT</text>
    </>}
    {chapter===2 && <>
      <Magnet x={170} y={175}/>
      <path d="M255 79 H186" stroke="#2878ac" strokeWidth="3" markerEnd="url(#df-blue)"/><text x="95" y="57" fontSize="15">B equatorial: left</text>
      <path d="M220 174 V94" stroke="#52636b" strokeDasharray="4 4"/><text x="233" y="134" fontSize="15">r</text>
      <path d="M184 227 H255" stroke="#247e68" strokeWidth="2" markerEnd="url(#df-green)"/><text x="269" y="232" fontSize="15">m right</text>
      <text x="18" y="262" fontSize="15">At the same far r: axial magnitude = 2 x equatorial</text>
    </>}
    {chapter===3 && <>
      <text x="34" y="59" fontSize="15">x/R</text><text x="126" y="59" fontSize="15">Ratio approaches 1 as distance grows</text>
      {[1,5,10,20].map((ratio,i)=>{
        const value=(1+1/ratio**2)**(-1.5),y=85+i*40;
        return <g key={ratio}><text x="40" y={y+5} fontSize="15">{ratio}</text><rect x="100" y={y-10} width={220*value} height="18" fill="#2878ac"/><text x="337" y={y+5} fontSize="15">{value.toFixed(3)}</text></g>;
      })}
      <text x="18" y="260" fontSize="15">Only for the specified thin circular loop on its axis</text>
    </>}
    {chapter===4 && <>
      <path d="M260 193 H155" stroke="#2878ac" strokeWidth="3" markerEnd="url(#df-blue)"/><text x="140" y="218" fontSize="15">1.25 microT left</text>
      <path d="M260 193 V88" stroke="#e0783e" strokeWidth="3" markerEnd="url(#df-orange)"/><text x="279" y="126" fontSize="15">1.25 microT up</text>
      <path d="M260 193 L155 88" stroke="#247e68" strokeWidth="3" markerEnd="url(#df-green)"/>
      <path d="M155 193 V88 H260" stroke="#52636b" strokeDasharray="4 4" fill="none"/>
      <text x="70" y="73" fontSize="15">Resultant: 1.77 microT, up-left</text>
      <text x="18" y="257" fontSize="15">Equal perpendicular components: magnitude = sqrt(2) B</text>
    </>}
  </svg>;
}
