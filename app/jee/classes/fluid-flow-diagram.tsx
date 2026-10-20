import styles from "./lecture.module.css";

export default function FluidFlowDiagram({ chapter }: { chapter: number }) {
  const labels = ["A hydraulic lift transmits the same pressure increase to differently sized pistons", "A hydraulic lift trades displacement for force while conserving ideal work", "Constant volume flow rate requires greater speed at a smaller cross section", "In horizontal ideal flow, increased speed accompanies reduced pressure along a streamline", "A large open tank has an outlet below its surface, giving speed square root of two g h"];
  const narrowTop = chapter === 3 ? 116.7 : 125;
  const narrowBottom = chapter === 3 ? 173.3 : 165;
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={labels[chapter]}>
    <defs><marker id="flow-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="context-stroke" /></marker></defs>
    {chapter < 2 && <>
      <text x="30" y="30">Ideal pistons at the same height</text><path d="M75 130V210H355V130" fill="none" stroke="#82938b" strokeWidth="3" />
      <path d="M75 135H115V180H230V135H355V205H75Z" fill="#e4edf5" /><path d="M115 130V180H230V130" fill="none" stroke="#82938b" strokeWidth="3" />
      <path d="M75 130H115M230 130H355" stroke="#276b4b" strokeWidth="8" />
      <path d="M95 75V116" stroke="#b5472b" strokeWidth="3" markerEnd="url(#flow-arrow)" /><path d="M292 123V70" stroke="#245e94" strokeWidth="3" markerEnd="url(#flow-arrow)" />
      <text x="40" y="65">50 N</text><text x="305" y="65">500 N</text><text x="35" y="245">{chapter === 0 ? 'A2 = 10 A1; equal pressure increase' : '0.20 m input; 0.02 m output; 10 J each'}</text>
    </>}
    {(chapter === 2 || chapter === 3) && <>
      <text x="30" y="30">{chapter === 2 ? 'Steady flow: equal volume per second' : 'Horizontal ideal flow: pressure drops'}</text>
      <path d={`M35 105H165L255 ${narrowTop}H405V${narrowBottom}H255L165 185H35Z`} fill="#e4edf5" stroke="#245e94" strokeWidth="2" />
      <path d="M75 145H140" stroke="#276b4b" strokeWidth="3" markerEnd="url(#flow-arrow)" /><path d="M275 145H385" stroke="#276b4b" strokeWidth="3" markerEnd="url(#flow-arrow)" />
      <text x="55" y="82">2 m/s</text><text x="295" y="82">{chapter === 2 ? '8 m/s' : '4 m/s'}</text>
      <text x="45" y="220">{chapter === 2 ? '4 cm squared' : '120,000 Pa'}</text><text x="270" y="220">{chapter === 2 ? '1 cm squared' : '114,000 Pa'}</text>
      <text x="55" y="255">{chapter === 2 ? 'Q = 0.8 litres per second' : 'Water: pressure drop = 6,000 Pa'}</text>
    </>}
    {chapter === 4 && <>
      <text x="30" y="30">Both surface and jet: atmospheric p</text><path d="M60 55V215H270V180M270 167V55" fill="none" stroke="#82938b" strokeWidth="3" />
      <path d="M63 90H267V167H300V180H267V212H63Z" fill="#e4edf5" /><path d="M65 90H265" stroke="#245e94" strokeWidth="2" />
      <path d="M100 95V167" stroke="#276b4b" strokeWidth="3" markerEnd="url(#flow-arrow)" /><text x="115" y="145">h = 1.25 m</text><path d="M285 173H375" stroke="#245e94" strokeWidth="3" markerEnd="url(#flow-arrow)" /><text x="310" y="150">5 m/s</text>
      <text x="45" y="250">Large tank; small outlet; g = 10</text>
    </>}
  </svg>;
}
