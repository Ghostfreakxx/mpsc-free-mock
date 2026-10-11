import styles from "./lecture.module.css";

export default function ViscosityDiagram({ chapter }: { chapter: number }) {
  const labels = ["A moving upper plate creates a linear velocity gradient across a Newtonian fluid", "A falling sphere at terminal speed has weight balanced by buoyancy and Stokes drag", "Two surfaces of a soap film pull a movable wire with total force two gamma l", "A liquid droplet has one interface while a thin soap bubble has two", "Surface tension supports a raised column in a wetting capillary"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={labels[chapter]}>
    <defs><marker id="viscosity-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="context-stroke" /></marker></defs>
    {chapter === 0 && <>
      <text x="35" y="30">Moving plate: 1 m/s; bottom at rest</text><rect x="65" y="80" width="220" height="110" fill="#e4edf5" /><path d="M50 80H300M50 190H300" stroke="#82938b" strokeWidth="6" />
      {[{y:100,x:225},{y:135,x:185},{y:170,x:145}].map(row=><path key={row.y} d={`M110 ${row.y}H${row.x}`} stroke="#245e94" strokeWidth="3" markerEnd="url(#viscosity-arrow)" />)}
      <text x="305" y="140">0.01 m</text><text x="65" y="230">Shear force: 1 N</text><text x="65" y="255">Linear velocity profile</text>
    </>}
    {chapter === 1 && <>
      <text x="30" y="30">Terminal speed: net force is zero</text><circle cx="190" cy="145" r="30" fill="#e0efe4" stroke="#276b4b" strokeWidth="2" />
      <path d="M180 115V65" stroke="#276b4b" strokeWidth="3" markerEnd="url(#viscosity-arrow)" /><path d="M205 115V85" stroke="#245e94" strokeWidth="3" markerEnd="url(#viscosity-arrow)" /><path d="M190 175V235" stroke="#b5472b" strokeWidth="3" markerEnd="url(#viscosity-arrow)" />
      <text x="60" y="70">Drag</text><text x="235" y="90">Buoyancy</text><text x="235" y="230">Weight</text><text x="30" y="258">Descent speed: 0.01 m/s</text>
    </>}
    {chapter === 2 && <>
      <text x="30" y="30">Thin soap film: two surfaces</text><rect x="80" y="75" width="200" height="115" fill="#e4edf5" stroke="#82938b" strokeWidth="2" /><path d="M280 65V200" stroke="#276b4b" strokeWidth="6" />
      <path d="M270 115H220" stroke="#245e94" strokeWidth="3" markerEnd="url(#viscosity-arrow)" /><path d="M270 150H220" stroke="#245e94" strokeWidth="3" markerEnd="url(#viscosity-arrow)" /><text x="305" y="135">Wire</text>
      <text x="70" y="230">F = 2 gamma l = 0.006 N</text><text x="70" y="255">Move 1 cm: store 60 microjoules</text>
    </>}
    {chapter === 3 && <>
      <text x="30" y="30">Same r = 1 mm; gamma = 0.03 N/m</text><circle cx="110" cy="120" r="55" fill="#e4edf5" stroke="#245e94" strokeWidth="3" /><circle cx="320" cy="120" r="55" fill="none" stroke="#276b4b" strokeWidth="3" /><circle cx="320" cy="120" r="49" fill="none" stroke="#276b4b" strokeWidth="2" />
      <text x="75" y="205">Droplet</text><text x="275" y="205">Soap bubble</text><text x="65" y="235">1 interface</text><text x="275" y="235">2 interfaces</text><text x="80" y="260">60 Pa</text><text x="290" y="260">120 Pa</text>
    </>}
    {chapter === 4 && <>
      <text x="30" y="30">Wetting capillary: contact angle zero</text><path d="M50 155V220H395V155" fill="none" stroke="#82938b" strokeWidth="2" /><rect x="52" y="180" width="341" height="38" fill="#e4edf5" /><path d="M52 180H393" stroke="#245e94" strokeWidth="2" />
      <path d="M145 65Q155 80 165 65V218H145Z" fill="#e4edf5" /><path d="M145 50V218M165 50V218" stroke="#82938b" strokeWidth="2" /><path d="M145 65Q155 80 165 65" fill="none" stroke="#245e94" strokeWidth="2" />
      <path d="M205 80V180" stroke="#276b4b" strokeWidth="2" /><text x="220" y="125">h = 3 cm</text><text x="220" y="155">r = 0.5 mm</text><text x="65" y="255">Upward surface force = column weight</text>
    </>}
  </svg>;
}
