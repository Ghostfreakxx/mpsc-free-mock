import styles from "./lecture.module.css";

export default function NewtonsDiagram({ chapter }: { chapter: number }) {
  const title = chapter === 4 ? "Weight acts downward; normal force is perpendicular to the incline" : chapter === 2 ? "Third-law forces act on different bodies" : "External forces acting on the box";
  return <svg viewBox="0 0 440 270" className={styles.forceDiagram} role="img" aria-label={title}>
    <title>{title}</title>
    <defs><marker id={`force-arrow-${chapter}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="context-stroke" /></marker></defs>
    {chapter === 2 ? <>
      <rect x="40" y="92" width="110" height="70" fill="#e0ecf9" stroke="#245e94" /><text x="95" y="133" textAnchor="middle">Hand</text>
      <rect x="285" y="92" width="110" height="70" fill="#e0efe4" stroke="#276b4b" /><text x="340" y="133" textAnchor="middle">Box</text>
      <path d="M295 185H395" stroke="#276b4b" strokeWidth="3" markerEnd={`url(#force-arrow-${chapter})`} />
      <path d="M140 65H40" stroke="#245e94" strokeWidth="3" markerEnd={`url(#force-arrow-${chapter})`} />
      <text x="30" y="40">Box pushes hand left</text><text x="205" y="225">Hand pushes box right</text>
    </> : chapter === 4 ? <>
      <path d="M65 220L375 41V220Z" fill="#edf0f3" stroke="#788792" />
      <rect x="187" y="107" width="50" height="40" transform="rotate(-30 212 127)" fill="#e0efe4" stroke="#276b4b" />
      <path d="M212 127V227" stroke="#b5472b" strokeWidth="3" markerEnd={`url(#force-arrow-${chapter})`} />
      <path d="M212 127L169 52" stroke="#245e94" strokeWidth="3" markerEnd={`url(#force-arrow-${chapter})`} />
      <path d="M212 127L126 177" stroke="#276b4b" strokeDasharray="5 4" strokeWidth="2" markerEnd={`url(#force-arrow-${chapter})`} />
      <text x="225" y="216">mg</text><text x="115" y="39">N</text><text x="15" y="177">mg sin θ</text><text x="107" y="215">30°</text>
      <text x="245" y="253">a = 5 m/s²</text>
    </> : <>
      <path d="M40 174H400" stroke="#82938b" strokeWidth="2" />
      <rect x="182" y="107" width="76" height="67" fill="#e0efe4" stroke="#276b4b" />
      <text x="220" y="145" textAnchor="middle">{chapter === 1 ? '5 kg' : chapter === 3 ? '4 kg' : 'Box'}</text>
      <g strokeWidth="3" markerEnd={`url(#force-arrow-${chapter})`}>
        <path d="M220 107V40" stroke="#245e94" /><path d="M220 174V235" stroke="#b5472b" />
        <path d="M258 139H370" stroke="#276b4b" /><path d="M182 139H75" stroke="#8053a1" />
      </g>
      <text x="236" y="50">N</text><text x="236" y="233">mg</text>
      <text x="287" y="120">{chapter === 1 ? '14 N' : chapter === 3 ? '28 N' : 'Push'}</text>
      <text x="45" y="120">{chapter === 1 ? '4 N' : chapter === 3 ? '12 N' : 'Friction'}</text>
      {chapter === 3 && <text x="25" y="260">Sliding case: 28 − 12 = 16 N right</text>}
    </>}
  </svg>;
}
