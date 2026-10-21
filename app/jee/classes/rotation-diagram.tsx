import styles from "./lecture.module.css";

export default function RotationDiagram({ chapter }: { chapter: number }) {
  const labels = ["Two points share angular velocity but have different tangential speeds", "A perpendicular force produces torque about a bolt", "Ring and disk mass distributions about central axes", "Constant torque accelerates a disk", "Rolling disk has translational and rotational kinetic energy"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={labels[chapter]}>
    <defs><marker id="rotation-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="context-stroke" /></marker></defs>
    {chapter === 0 && <>
      <circle cx="150" cy="140" r="85" fill="#edf5f0" stroke="#276b4b" strokeWidth="3" />
      <path d="M150 140H235" stroke="#82938b" strokeWidth="2" />
      <circle cx="150" cy="140" r="5" fill="#203a34" /><circle cx="192.5" cy="140" r="5" fill="#245e94" /><circle cx="235" cy="140" r="5" fill="#b5472b" />
      <path d="M192.5 140V105" stroke="#245e94" strokeWidth="3" markerEnd="url(#rotation-arrow)" /><path d="M235 140V70" stroke="#b5472b" strokeWidth="3" markerEnd="url(#rotation-arrow)" />
      <text x="255" y="80">R: 2 m/s</text><text x="255" y="120">R/2: 1 m/s</text><text x="65" y="35">Same angular speed: 4 rad/s</text><text x="90" y="250">Outer radius R = 0.5 m</text>
    </>}
    {chapter === 1 && <>
      <path d="M90 190H315" stroke="#82938b" strokeWidth="16" /><circle cx="90" cy="190" r="15" fill="#edf5f0" stroke="#203a34" strokeWidth="3" />
      <path d="M315 190V70" stroke="#245e94" strokeWidth="3" markerEnd="url(#rotation-arrow)" /><path d="M90 225H315" stroke="#276b4b" strokeWidth="2" />
      <text x="275" y="50">F = 20 N</text><text x="65" y="165">Axis</text><text x="145" y="253">0.25 m</text><text x="40" y="80">Torque = 5 N m</text>
    </>}
    {chapter === 2 && <>
      <circle cx="115" cy="130" r="65" fill="none" stroke="#245e94" strokeWidth="10" /><circle cx="325" cy="130" r="65" fill="#e0efe4" stroke="#276b4b" strokeWidth="3" />
      <circle cx="115" cy="130" r="5" fill="#203a34" /><circle cx="325" cy="130" r="5" fill="#203a34" />
      <text x="40" y="35">Same mass and radius; central axes</text><text x="55" y="235">Ring: MR squared</text><text x="240" y="235">Disk: MR squared / 2</text>
    </>}
    {chapter === 3 && <>
      <text x="35" y="40">Net torque: 1 N m</text><text x="35" y="85">I = 0.25 kg m squared</text><text x="35" y="130">Angular acceleration: 4 rad/s squared</text><text x="35" y="175">After 3 s: 12 rad/s</text><text x="35" y="220">Work = kinetic energy = 18 J</text>
    </>}
    {chapter === 4 && <>
      <path d="M30 195H410" stroke="#82938b" strokeWidth="2" /><circle cx="125" cy="130" r="65" fill="#e0efe4" stroke="#276b4b" strokeWidth="3" /><circle cx="125" cy="130" r="4" fill="#203a34" />
      <path d="M125 130H245" stroke="#245e94" strokeWidth="3" markerEnd="url(#rotation-arrow)" /><path d="M80 92A58 58 0 0 1 169 92" fill="none" stroke="#b5472b" strokeWidth="3" markerEnd="url(#rotation-arrow)" />
      <text x="265" y="100">4 J moving</text><text x="265" y="145">2 J rotating</text><text x="55" y="35">Rolling without slipping: v = R omega</text><text x="60" y="245">Disk total: 6 J; centre speed: 2 m/s</text>
    </>}
  </svg>;
}
