import styles from "./lecture.module.css";

export default function MotionalEmfDiagram({chapter}: {chapter:number}) {
  const titles=["Moving rod: upper end becomes positive", "Growing area: current up the rod", "External pull balances magnetic drag", "Entry, uniform interior, then exit", "Interrupt large circulating paths"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <defs>{["blue","green","orange"].map((name,i)=><marker key={name} id={`me-${name}`} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7" fill={["#2878ac","#247e68","#e0783e"][i]}/></marker>)}</defs>
    <text x="16" y="27" fontSize="16">{titles[chapter]}</text>
    {chapter<3 && <>
      {[0,1,2,3].map(i=><text key={i} x={108+(i%2)*73} y={119+Math.floor(i/2)*47} fontSize="20" fill="#2878ac">x</text>)}
      <text x="88" y="67" fontSize="15">B into page</text>
      {chapter>0 && <><path d="M58 85 H276 M58 195 H276" stroke="#52636b" strokeWidth="3"/><path d="M58 85 V117 M58 163 V195" stroke="#52636b" strokeWidth="3"/><rect x="46" y="117" width="24" height="46" fill="white" stroke="#52636b"/><text x="21" y="147" fontSize="15">R</text></>}
      <path d="M248 85 V195" stroke="#247e68" strokeWidth="6"/>
      <path d="M283 125 H382" stroke="#2878ac" strokeWidth="3" markerEnd="url(#me-blue)"/><text x="317" y="107" fontSize="15">v right</text>
      {chapter===0 ? <><text x="243" y="73" fontSize="18">+</text><text x="243" y="218" fontSize="18">-</text><path d="M223 169 V111" stroke="#e0783e" strokeWidth="2" markerEnd="url(#me-orange)"/><text x="300" y="173" fontSize="15">Open rod</text><text x="58" y="251" fontSize="15">|V_top - V_bottom| = Blv = 0.6 V</text></> : <><path d="M267 167 V113" stroke="#247e68" strokeWidth="2" markerEnd="url(#me-green)"/><text x="278" y="185" fontSize="15">I up</text>
      {chapter===1 ? <><path d="M199 85 H134" stroke="#247e68" strokeWidth="2" markerEnd="url(#me-green)"/><text x="66" y="250" fontSize="15">I = 0.6 / 2 = 0.3 A; counterclockwise</text></> : <><path d="M244 217 H143" stroke="#e0783e" strokeWidth="3" markerEnd="url(#me-orange)"/><text x="77" y="233" fontSize="15">F_mag left</text><text x="280" y="219" fontSize="15">Pull right</text><text x="82" y="260" fontSize="15">Fv = I2R = 0.18 W at constant speed</text></>}
      </>}
    </>}
    {chapter===3 && <>
      {[0,1,2].map(i=><g key={i}>
        <text x={26+i*140} y="68" fontSize="15">{["Entering","Fully inside","Leaving"][i]}</text>
        <rect x={i*140+15+(i===0?53:0)} y="85" width={i===1?123:70} height="107" fill="#eef5f9"/>
        <rect x={i*140+33} y="103" width="77" height="70" fill="none" stroke="#52636b" strokeWidth="2"/>
        <text x={i*140+(i===0?89:49)} y="143" fontSize="20" fill="#2878ac">x</text>
        <text x={i*140+29} y="220" fontSize="15">{["CCW current","Net emf = 0","CW current"][i]}</text>
      </g>)}
      <text x="31" y="254" fontSize="15">Uniform B into page; rigid loop moves right</text>
    </>}
    {chapter===4 && <>
      <text x="39" y="69" fontSize="15">Solid conductor</text><text x="251" y="69" fontSize="15">Insulated layers</text>
      <rect x="37" y="86" width="139" height="108" fill="#eef5f9" stroke="#52636b"/>
      <ellipse cx="106" cy="140" rx="47" ry="34" fill="none" stroke="#e0783e" strokeWidth="3"/>
      {[0,1,2,3,4].map(i=><rect key={i} x={250+i*29} y="86" width="24" height="108" fill="#eef5f9" stroke="#52636b"/>)}
      <text x="48" y="219" fontSize="15">Large paths</text><text x="248" y="219" fontSize="15">Paths interrupted</text>
      <text x="22" y="253" fontSize="15">Schematic: changing linked flux is required</text>
    </>}
  </svg>;
}
