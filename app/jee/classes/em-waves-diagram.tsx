import styles from "./lecture.module.css";

export default function EmWavesDiagram({chapter}: {chapter:number}) {
  const titles=["Changing electric flux in a vacuum gap","E cross B gives the wave direction","Same frequency, different wavelengths","Spectrum order, not a linear scale","Use vacuum wavelength for these comparisons"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <defs>{["#2878ac","#247e68","#e0783e"].map((color,i)=><marker key={color} id={`ew-${i}`} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7" fill={color}/></marker>)}</defs>
    <text x="16" y="27" fontSize="16">{titles[chapter]}</text>
    {chapter===0 && <>
      <path d="M159 77 V196 M283 77 V196" stroke="#52636b" strokeWidth="5"/><text x="151" y="63" fontSize="18">+</text><text x="278" y="63" fontSize="18">-</text>
      <path d="M40 137 H145" stroke="#2878ac" strokeWidth="3" markerEnd="url(#ew-0)"/><text x="42" y="118" fontSize="15">I in wire</text>
      <path d="M175 137 H262" stroke="#247e68" strokeWidth="3" strokeDasharray="5 4" markerEnd="url(#ew-1)"/><text x="181" y="114" fontSize="15">Changing E</text>
      <text x="300" y="130" fontSize="15">Vacuum</text><text x="300" y="154" fontSize="15">gap</text>
      <text x="53" y="224" fontSize="15">Id = C dV/dt = 1 mA for this example</text><text x="40" y="253" fontSize="15">No conduction charge crosses the ideal gap</text>
    </>}
    {chapter===1 && <>
      <path d="M167 173 V69" stroke="#2878ac" strokeWidth="3" markerEnd="url(#ew-0)"/><text x="112" y="77" fontSize="15">E: +y</text>
      <circle cx="167" cy="173" r="15" fill="white" stroke="#247e68" strokeWidth="2"/><circle cx="167" cy="173" r="4" fill="#247e68"/><text x="28" y="197" fontSize="15">B: +z, out</text>
      <path d="M190 173 H366" stroke="#e0783e" strokeWidth="3" markerEnd="url(#ew-2)"/><text x="225" y="151" fontSize="15">Propagation: +x</text>
      <text x="70" y="232" fontSize="15">Instantaneous directions at one location</text><text x="66" y="257" fontSize="15">E0 = 90 V/m; B0 = 0.3 microT in vacuum</text>
    </>}
    {chapter===2 && <>
      <text x="30" y="64" fontSize="15">Vacuum: lambda = 500 nm</text>
      <polyline points={Array.from({length:121},(_,i)=>`${35+i*3},${100-22*Math.sin(i*Math.PI/40)}`).join(" ")} fill="none" stroke="#2878ac" strokeWidth="3"/>
      <text x="30" y="157" fontSize="15">n = 1.5: lambda approximately 333 nm</text>
      <polyline points={Array.from({length:121},(_,i)=>`${35+i*3},${191-22*Math.sin(i*1.5*Math.PI/40)}`).join(" ")} fill="none" stroke="#247e68" strokeWidth="3"/>
      <text x="31" y="247" fontSize="15">Spatial snapshots; f stays 6 x 10^14 Hz</text>
    </>}
    {chapter===3 && <>
      {["Radio","Micro","IR","Visible","UV","X rays","Gamma"].map((band,i)=><g key={band}><rect x={23+i*56} y="90" width="50" height="41" fill={["#2878ac","#247e68","#e0783e","#ce5064","#9b487b","#596776","#363e43"][i]}/><text x={48+i*56} y="153" textAnchor="middle" fontSize="12">{band}</text></g>)}
      <path d="M43 183 H390" stroke="#2878ac" strokeWidth="2" markerEnd="url(#ew-0)"/><text x="117" y="175" fontSize="15">Frequency increases</text>
      <path d="M390 224 H43" stroke="#247e68" strokeWidth="2" markerEnd="url(#ew-1)"/><text x="108" y="214" fontSize="15">Wavelength increases</text>
      <text x="54" y="254" fontSize="15">Named bands can have overlapping ranges</text>
    </>}
    {chapter===4 && <>
      <text x="29" y="76" fontSize="16">3 GHz: lambda = 0.10 m</text><text x="29" y="110" fontSize="15">Microwave communication / radar</text>
      <path d="M29 139 H407" stroke="#52636b"/>
      <text x="29" y="180" fontSize="16">3 x 10^14 Hz: lambda = 1 micrometer</text><text x="29" y="214" fontSize="15">Infrared region</text>
      <text x="29" y="253" fontSize="15">Both have the same propagation speed c</text>
    </>}
  </svg>;
}
