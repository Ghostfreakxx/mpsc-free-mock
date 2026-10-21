import styles from "./lecture.module.css";

export default function ThermalDiagram({ chapter }: { chapter: number }) {
  const labels = ["A freely heated rod extends by 1.2 millimetres", "Two rods expand toward a three millimetre gap", "A uniformly heated plate and its circular hole both expand", "Liquid expands by ten millilitres while the vessel gains point three millilitres of capacity", "Fixed mass occupies a larger volume and has lower density"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={labels[chapter]}>
    <defs><marker id="thermal-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="context-stroke" /></marker></defs>
    {chapter === 0 && <>
      <text x="25" y="30">Free expansion; temperature rise 50 K</text>
      <rect x="50" y="80" width="285" height="30" fill="#e4edf5" stroke="#245e94" /><text x="50" y="65">Original: 2 m</text>
      <rect x="50" y="150" width="285" height="30" fill="#e0efe4" stroke="#276b4b" /><rect x="335" y="150" width="25" height="30" fill="#d77945" /><text x="50" y="210">Final: 2.0012 m</text><text x="50" y="240">Extension: 1.2 mm (exaggerated)</text>
    </>}
    {chapter === 1 && <>
      <text x="25" y="30">Outer ends fixed; inner ends free</text><path d="M35 70V185M405 70V185" stroke="#82938b" strokeWidth="6" />
      <rect x="38" y="100" width="155" height="35" fill="#e4edf5" stroke="#245e94" /><rect x="247" y="100" width="155" height="35" fill="#e0efe4" stroke="#276b4b" />
      <path d="M165 165H208M275 165H232" stroke="#b5472b" strokeWidth="3" markerEnd="url(#thermal-arrow)" /><text x="175" y="80">Gap: 3 mm</text>
      <text x="45" y="210">20 x 10^-6</text><text x="270" y="210">10 x 10^-6</text><text x="45" y="240">Each rod: 1 m; closing rise: 100 K</text>
    </>}
    {chapter === 2 && <>
      <text x="25" y="30">The hole expands with the plate</text><rect x="105" y="70" width="220" height="145" fill="#e0efe4" stroke="#276b4b" /><rect x="95" y="60" width="240" height="165" fill="none" stroke="#b5472b" strokeWidth="2" strokeDasharray="6 4" />
      <circle cx="215" cy="140" r="45" fill="white" stroke="#245e94" strokeWidth="2" /><circle cx="215" cy="140" r="52" fill="none" stroke="#b5472b" strokeWidth="2" strokeDasharray="6 4" />
      <text x="35" y="255">Radius: 10 to 10.02 mm (exaggerated)</text>
    </>}
    {chapter === 3 && <>
      <text x="25" y="30">Both liquid and vessel expand</text><path d="M90 65V205H245V65" fill="none" stroke="#82938b" strokeWidth="4" /><rect x="92" y="80" width="151" height="123" fill="#e4edf5" /><path d="M245 80Q300 65 310 110" stroke="#245e94" strokeWidth="3" fill="none" markerEnd="url(#thermal-arrow)" />
      <text x="110" y="145">500 mL</text><text x="270" y="145">Overflow</text><text x="270" y="170">9.7 mL</text><text x="45" y="240">10 mL gained - 0.3 mL extra room</text>
    </>}
    {chapter === 4 && <>
      <text x="25" y="30">Same mass; volume increases 1%</text><rect x="45" y="80" width="120" height="110" fill="#e4edf5" stroke="#245e94" /><rect x="250" y="75" width="130" height="120" fill="#e0efe4" stroke="#276b4b" />
      <path d="M180 130H230" stroke="#b5472b" strokeWidth="3" markerEnd="url(#thermal-arrow)" /><text x="40" y="220">1000 kg/m cubed</text><text x="235" y="220">990.1 kg/m cubed</text><text x="65" y="255">Size change exaggerated</text>
    </>}
  </svg>;
}
