import styles from "./lecture.module.css";

export default function HeatDiagram({ chapter, mode }: { chapter: number; mode: "calorimetry" | "transfer" }) {
  const calorimetry = mode === "calorimetry";
  const labels = calorimetry ? ["Half a kilogram of water gains twenty one kilojoules for a ten kelvin rise", "Hot and cold water reach a forty four degree equilibrium", "Hot metal warms the water and the calorimeter", "A heating curve shows ice warming, melting at a plateau and liquid warming", "Insufficient energy leaves both ice and water at zero degrees"] : ["Conduction, convection and radiation transfer energy by different mechanisms", "Steady conduction across a slab transfers two hundred watts", "Series thermal resistances split a fifty kelvin drop into twenty and thirty", "A four hundred kelvin body emits and absorbs radiation in three hundred kelvin surroundings", "Newton cooling reduces temperature excess exponentially"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={labels[chapter]}>
    <defs><marker id={`heat-arrow-${mode}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="context-stroke" /></marker></defs>
    {calorimetry && chapter === 0 && <>
      <text x="25" y="30">Heating without a phase change</text><path d="M135 65V205H305V65" fill="none" stroke="#82938b" strokeWidth="4" /><rect x="137" y="100" width="166" height="103" fill="#e4edf5" /><text x="160" y="145">0.5 kg water</text><text x="150" y="175">Rise: 10 K</text><text x="90" y="240">Q = 21 kJ; c = 4200 J/(kg K)</text>
    </>}
    {calorimetry && chapter === 1 && <>
      <text x="25" y="30">Insulated mixture; cup neglected</text><rect x="40" y="75" width="135" height="65" fill="#fde9de" stroke="#b5472b" /><rect x="255" y="75" width="145" height="65" fill="#e4edf5" stroke="#245e94" />
      <text x="55" y="100">0.2 kg; 80 C</text><text x="270" y="100">0.3 kg; 20 C</text><path d="M110 150L190 190M325 150L245 190" stroke="#276b4b" strokeWidth="3" /><text x="165" y="220">Final: 44 C</text><text x="65" y="255">More cold water: below 50 C</text>
    </>}
    {calorimetry && chapter === 2 && <>
      <text x="25" y="30">Metal loses 2800 J</text><rect x="155" y="60" width="110" height="55" fill="#fde9de" stroke="#b5472b" /><text x="172" y="92">Hot metal</text><path d="M190 125L120 175M230 125L320 175" stroke="#276b4b" strokeWidth="3" />
      <text x="40" y="205">Water: 240 J/K</text><text x="255" y="205">Cup: 40 J/K</text><text x="75" y="245">Together: 280 J/K; rise: 10 K</text>
    </>}
    {calorimetry && chapter === 3 && <>
      <text x="25" y="25">Temperature versus energy added</text><path d="M60 50V210H395" fill="none" stroke="#82938b" strokeWidth="2" /><path d="M75 190L115 155H300L365 80" fill="none" stroke="#276b4b" strokeWidth="4" /><text x="15" y="160">0 C</text><text x="150" y="140">Melting plateau</text><text x="65" y="240">2.1 + 33.4 + 8.4 = 43.9 kJ</text><text x="95" y="260">Stages not drawn to scale</text>
    </>}
    {calorimetry && chapter === 4 && <>
      <text x="25" y="30">8400 J available; 16700 J needed</text><path d="M105 65V205H330V65" fill="none" stroke="#82938b" strokeWidth="4" /><rect x="107" y="105" width="221" height="98" fill="#e4edf5" /><rect x="180" y="85" width="60" height="45" fill="white" stroke="#245e94" /><text x="160" y="175">Final: 0 C</text><text x="70" y="240">Ice remains: approximately 24.85 g</text>
    </>}
    {!calorimetry && chapter === 0 && <>
      <text x="25" y="30">Three mechanisms; often together</text><path d="M65 90H365" stroke="#b5472b" strokeWidth="8" /><text x="90" y="70">Conduction through a solid</text><path d="M110 145Q165 115 200 145Q165 180 110 145" stroke="#245e94" strokeWidth="3" fill="none" /><text x="220" y="155">Fluid convection</text><path d="M60 215Q90 190 120 215T180 215T240 215" stroke="#276b4b" strokeWidth="3" fill="none" /><text x="270" y="220">Radiation</text><text x="90" y="255">Radiation can cross a vacuum</text>
    </>}
    {!calorimetry && chapter === 1 && <>
      <text x="25" y="30">Steady state: fixed face temperatures</text><rect x="140" y="65" width="150" height="125" fill="#e0efe4" stroke="#276b4b" /><text x="35" y="115">Hot</text><text x="325" y="115">Cold</text><path d="M90 145H345" stroke="#b5472b" strokeWidth="3" markerEnd={`url(#heat-arrow-${mode})`} /><text x="170" y="95">L = 0.1 m</text><text x="150" y="220">Rate: 200 W</text><text x="55" y="250">After 60 s: 12 kJ transferred</text>
    </>}
    {!calorimetry && chapter === 2 && <>
      <text x="25" y="30">Same power through series layers</text><rect x="110" y="70" width="90" height="125" fill="#e4edf5" stroke="#245e94" /><rect x="200" y="70" width="135" height="125" fill="#e0efe4" stroke="#276b4b" /><text x="35" y="60">80 C</text><text x="180" y="60">60 C</text><text x="345" y="60">30 C</text><text x="125" y="140">R: 0.2</text><text x="235" y="140">R: 0.3</text><text x="65" y="230">Drops: 20 K and 30 K; H = 100 W</text><text x="125" y="255">R units: K/W</text>
    </>}
    {!calorimetry && chapter === 3 && <>
      <text x="25" y="30">Surroundings: 300 K</text><rect x="65" y="55" width="315" height="155" fill="none" stroke="#82938b" strokeWidth="2" /><circle cx="220" cy="130" r="40" fill="#fde9de" stroke="#b5472b" /><text x="190" y="135">400 K</text><path d="M265 115H345M140 160H170" stroke="#276b4b" strokeWidth="3" markerEnd={`url(#heat-arrow-${mode})`} /><text x="60" y="240">Emits and absorbs; net: 99.225 W</text><text x="95" y="260">Use absolute temperatures</text>
    </>}
    {!calorimetry && chapter === 4 && <>
      <text x="25" y="25">Temperature excess decays</text><path d="M65 55V210H385M75 205V215M195 205V215M315 205V215" fill="none" stroke="#82938b" strokeWidth="2" /><path d="M75 65C110 100 155 122 195 137.5S275 165 315 173.75L370 184" stroke="#276b4b" strokeWidth="4" fill="none" /><text x="15" y="70">40 K</text><text x="180" y="125">20 K</text><text x="300" y="162">10 K</text><text x="72" y="230">0</text><text x="190" y="230">t</text><text x="308" y="230">2t</text><text x="65" y="260">Equal intervals halve the excess</text>
    </>}
  </svg>;
}
