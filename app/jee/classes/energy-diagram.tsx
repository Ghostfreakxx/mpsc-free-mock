import styles from "./lecture.module.css";

export default function EnergyDiagram({ chapter }: { chapter: number }) {
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={chapter < 2 ? "Force direction compared with horizontal displacement" : "Energy changes for the chapter's worked example"}>
    <defs><marker id="energy-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="context-stroke" /></marker></defs>
    {chapter < 2 ? <>
      <path d="M40 190H400" stroke="#82938b" strokeWidth="2" />
      <rect x="155" y="133" width="65" height="57" fill="#e0efe4" stroke="#276b4b" />
      <path d="M220 160L278 60" stroke="#245e94" strokeWidth="3" markerEnd="url(#energy-arrow)" />
      <path d="M220 160H278" stroke="#245e94" strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#energy-arrow)" />
      <path d="M130 228H360" stroke="#276b4b" strokeWidth="3" markerEnd="url(#energy-arrow)" />
      <text x="285" y="60">F = 10 N</text><text x="240" y="144">60°</text><text x="285" y="185">F cos θ = 5 N</text><text x="140" y="258">Displacement = 3 m</text>
      {chapter === 1 && <><path d="M155 160H55" stroke="#b5472b" strokeWidth="3" markerEnd="url(#energy-arrow)" /><text x="20" y="140">Friction</text><text x="20" y="80">Negative work</text></>}
    </> : <>
      <path d="M55 220H395" stroke="#82938b" strokeWidth="2" />
      <rect x="75" y={chapter===2?218:70} width="85" height={chapter===2?2:150} fill="#245e94" />
      <rect x="280" y={chapter===3?218:70} width="85" height={chapter===3?2:150} fill="#276b4b" />
      <path d="M180 135H260" stroke="#b5472b" strokeWidth="3" markerEnd="url(#energy-arrow)" />
      <text x="75" y="250">{chapter===4?'Potential':'Initial K'}</text><text x="280" y="250">{chapter===4?'Kinetic':'Final K'}</text>
      <text x="80" y="50">{chapter===2?'0 J':chapter===3?'100 J':'50 J'}</text><text x="285" y="50">{chapter===3?'0 J':'50 J'}</text>
      <text x="173" y="115">{chapter===3?'−100 J':chapter===2?'+50 J':'Transfer'}</text>
    </>}
  </svg>;
}
