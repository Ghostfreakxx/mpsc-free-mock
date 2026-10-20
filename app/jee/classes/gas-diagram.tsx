import styles from "./lecture.module.css";

export default function GasDiagram({ chapter, mode }: { chapter: number; mode: "thermodynamics" | "kinetic" }) {
  const thermo = mode === "thermodynamics";
  const labels = thermo ? ["The gas receives six hundred joules and delivers two hundred fifty joules, gaining three hundred fifty joules of internal energy", "Constant pressure expansion work equals the rectangular area on a pressure volume graph", "An isothermal curve differs from constant pressure and constant volume paths", "Reversible adiabatic expansion cools an ideal gas while insulated free expansion leaves its temperature unchanged", "An engine receives one thousand joules, rejects seven hundred and delivers three hundred joules"] : ["Moles and molecules describe the same ideal gas through different constants", "Random molecular collisions transfer momentum to the walls", "The same gas has twice the RMS speed at four times the kelvin temperature", "Monatomic and rigid diatomic gas models have different active degrees of freedom", "A denser gas has a shorter average distance between collisions"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={labels[chapter]}>
    <defs><marker id={`gas-arrow-${mode}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="context-stroke" /></marker></defs>
    {thermo && chapter === 0 && <>
      <text x="25" y="30">Energy account for the gas</text><rect x="140" y="90" width="155" height="110" fill="#e0efe4" stroke="#276b4b" /><text x="170" y="135">Gas system</text><text x="155" y="165">Delta U: +350 J</text>
      <path d="M40 115H130M300 175H400" stroke="#b5472b" strokeWidth="3" markerEnd={`url(#gas-arrow-${mode})`} /><text x="35" y="75">Q: +600 J</text><text x="310" y="145">W: +250 J</text><text x="100" y="240">Heat in minus work by</text>
    </>}
    {thermo && chapter === 1 && <>
      <text x="25" y="25">Constant pressure: 2 x 10^5 Pa</text><path d="M65 55V210H390" fill="none" stroke="#82938b" strokeWidth="2" /><rect x="120" y="90" width="220" height="120" fill="#e0efe4" /><path d="M120 90H340" stroke="#276b4b" strokeWidth="3" markerEnd={`url(#gas-arrow-${mode})`} /><text x="15" y="55">P</text><text x="395" y="210">V</text><text x="110" y="235">1 L</text><text x="330" y="235">3 L</text><text x="160" y="155">Area: 400 J</text><text x="100" y="260">Expansion: positive work</text>
    </>}
    {thermo && chapter === 2 && <>
      <text x="25" y="25">Ideal gas process paths (schematic)</text><path d="M65 55V210H390" fill="none" stroke="#82938b" strokeWidth="2" /><path d="M110 180V65" stroke="#b5472b" strokeWidth="3" /><path d="M110 85H340" stroke="#245e94" strokeWidth="3" /><path d="M110 85C150 130 220 165 340 180" fill="none" stroke="#276b4b" strokeWidth="3" /><text x="15" y="55">P</text><text x="395" y="210">V</text><text x="140" y="65">Constant P</text><text x="240" y="145">Constant T</text><text x="80" y="235">Vertical: constant V; W = 0</text><text x="80" y="260">Isothermal ideal gas: Delta U = 0</text>
    </>}
    {thermo && chapter === 3 && <>
      <text x="25" y="30">Both insulated: Q = 0</text><rect x="30" y="65" width="180" height="125" fill="#e0efe4" stroke="#276b4b" /><rect x="230" y="65" width="180" height="125" fill="#e4edf5" stroke="#245e94" />
      <text x="45" y="95">Reversible</text><text x="45" y="120">expansion</text><text x="45" y="155">400 K to 100 K</text><text x="245" y="95">Free expansion</text><text x="245" y="120">into vacuum</text><text x="245" y="155">Same ideal-gas T</text><text x="55" y="230">Reversible model: volume x8</text><text x="100" y="255">gamma = 5/3</text>
    </>}
    {thermo && chapter === 4 && <>
      <text x="25" y="25">One engine cycle</text><rect x="135" y="70" width="155" height="75" fill="#e0efe4" stroke="#276b4b" /><text x="180" y="110">Engine</text><path d="M210 40V60M210 150V215M295 110H395" stroke="#b5472b" strokeWidth="3" markerEnd={`url(#gas-arrow-${mode})`} /><text x="35" y="55">In: 1000 J</text><text x="300" y="90">Work: 300 J</text><text x="230" y="210">Out: 700 J</text><text x="95" y="250">Efficiency: 300/1000 = 30%</text>
    </>}
    {!thermo && chapter === 0 && <>
      <text x="25" y="30">Count consistently</text><rect x="40" y="65" width="355" height="135" fill="#e0efe4" stroke="#276b4b" /><text x="115" y="105">PV = nRT = N kB T</text><text x="95" y="145">N = n NA; R = NA kB</text><text x="100" y="180">T in K; P absolute</text><text x="70" y="240">Example: P = 99768 Pa</text>
    </>}
    {!thermo && chapter === 1 && <>
      <text x="25" y="30">Random motion; wall impulses</text><rect x="80" y="60" width="280" height="145" fill="#f2f7f4" stroke="#82938b" strokeWidth="3" />
      {[{x:115,y:100,dx:30,dy:15},{x:180,y:160,dx:-25,dy:15},{x:230,y:100,dx:15,dy:-25},{x:305,y:145,dx:40,dy:0}].map((p,i)=><g key={i}><circle cx={p.x} cy={p.y} r="7" fill="#245e94" /><path d={`M${p.x} ${p.y}l${p.dx} ${p.dy}`} stroke="#276b4b" strokeWidth="2" markerEnd={`url(#gas-arrow-${mode})`} /></g>)}
      <text x="80" y="240">P = rho vrms squared / 3</text><text x="75" y="260">Same T: same average translation energy</text>
    </>}
    {!thermo && chapter === 2 && <>
      <text x="25" y="30">Same gas; RMS speed ratio</text><circle cx="90" cy="95" r="10" fill="#245e94" /><circle cx="90" cy="170" r="10" fill="#b5472b" /><path d="M105 95H215M105 170H325" stroke="#276b4b" strokeWidth="3" markerEnd={`url(#gas-arrow-${mode})`} /><text x="235" y="100">300 K</text><text x="335" y="175">1200 K</text><text x="80" y="230">Temperature x4; RMS speed x2</text><text x="95" y="255">Molar mass in kg/mol</text>
    </>}
    {!thermo && chapter === 3 && <>
      <text x="25" y="30">Active modes in simple gas models</text><circle cx="115" cy="110" r="25" fill="#e4edf5" stroke="#245e94" /><circle cx="285" cy="110" r="23" fill="#e0efe4" stroke="#276b4b" /><circle cx="330" cy="110" r="23" fill="#e0efe4" stroke="#276b4b" /><text x="65" y="180">Monatomic</text><text x="250" y="180">Rigid diatomic</text><text x="75" y="210">f = 3; 5/3</text><text x="265" y="210">f = 5; 7/5</text><text x="70" y="250">Ratios shown: gamma = Cp/Cv</text>
    </>}
    {!thermo && chapter === 4 && <>
      <text x="25" y="30">Same diameter; twice number density</text><rect x="35" y="65" width="165" height="125" fill="#e4edf5" stroke="#245e94" /><rect x="240" y="65" width="165" height="125" fill="#e0efe4" stroke="#276b4b" />
      {[{x:65,y:95},{x:155,y:110},{x:95,y:155},{x:165,y:165},{x:265,y:95},{x:305,y:90},{x:365,y:100},{x:275,y:140},{x:325,y:130},{x:375,y:155},{x:295,y:170},{x:345,y:175}].map((p,i)=><circle key={i} cx={p.x} cy={p.y} r="6" fill="#245e94" />)}
      <text x="80" y="225">lambda</text><text x="285" y="225">lambda / 2</text><text x="55" y="255">Shorter mean distance between collisions</text>
    </>}
  </svg>;
}
