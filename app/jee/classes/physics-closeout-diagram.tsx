import styles from "./lecture.module.css";

const green = "#146b55", orange = "#b54e32", ink = "#20483e";
export default function PhysicsCloseoutDiagram({ id, chapter }: { id: string; chapter: number }) {
  const road = id === "banked-road-limits";
  const optics = id === "optics-derivations";
  const title = road ? (chapter === 0 ? "Upper limit: friction down the bank" : "Lower limit: friction up the bank") : optics ? ["Two rays give the same image", "Angles to the curved-surface normal", "Final-image choice changes the telescope"][chapter] : (chapter === 0 ? "Ideal heat ledger: include the container" : "A stated loss changes the inferred heat");
  return <svg className={styles.diagram} viewBox="0 0 460 360" role="img" aria-label={title}>
    <title>{title}</title>
    <rect width="460" height="360" fill="#f5faf7" />
    <g fill={ink} fontSize="14" fontFamily="Arial, sans-serif">
      <text x="230" y="25" textAnchor="middle" fontWeight="bold">{title}</text>
      {road ? <>
        <path d="M70 220L350 100" stroke={ink} strokeWidth="4" />
        <path d="M70 220H350" stroke={ink} strokeDasharray="5 5" />
        <circle cx="225" cy="154" r="9" fill={orange} />
        <path d="M225 154L193 79M225 154V246" stroke={green} strokeWidth="3" />
        <path d="M188 88L193 79L202 83M220 237L225 246L230 237" fill="none" stroke={green} strokeWidth="3" />
        <text x="145" y="74">Normal N</text><text x="240" y="242">Weight mg</text>
        {chapter === 0 ? <><path d="M225 154L135 193M146 183L135 193L149 194" stroke={orange} strokeWidth="3" fill="none" /><text x="77" y="168">Friction down</text></> : <><path d="M225 154L315 115M302 114L315 115L307 125" stroke={orange} strokeWidth="3" fill="none" /><text x="276" y="90">Friction up</text></>}
        <path d="M70 268H145M78 263L70 268L78 273" stroke={ink} fill="none" /><text x="155" y="273">Inward toward circle center</text>
        <text x="35" y="304">tan(theta) = 0.75; mu = 0.25; r = 25 m; g = 10</text>
        <text x="35" y="331">{chapter === 0 ? "Upper boundary: 17.54 m/s; f = mu N" : "Allowed: 10.26 to 17.54 m/s; no-friction: 13.69"}</text>
      </> : optics && chapter === 0 ? <>
        <path d="M35 180H405M360 90Q389 180 360 260" stroke={ink} fill="none" strokeWidth="2" />
        <path d="M60 180V130M60 130H360L210 205M60 130L360 180L210 205" stroke={green} fill="none" strokeWidth="2" />
        <path d="M210 180V205" stroke={orange} strokeWidth="4" />
        <text x="44" y="115">Object h</text><text x="168" y="231">Image -H</text>
        <text x="254" y="200">F</text><text x="350" y="284">Pole</text>
        <text x="38" y="307">H/h = V/U = (V - F)/F</text>
        <text x="38" y="332">u = -30 cm; v = -15 cm; f = -10 cm; m = -0.5</text>
      </> : optics && chapter === 1 ? <>
        <path d="M40 200H430M250 70Q270 200 250 275" stroke={ink} fill="none" strokeWidth="2" />
        <path d="M100 200L260 130L440 200" stroke={green} fill="none" strokeWidth="3" />
        <path d="M200 77L340 200" stroke={orange} strokeDasharray="5 5" strokeWidth="2" />
        <circle cx="260" cy="130" r="5" fill={orange} />
        <text x="74" y="221">O</text><text x="247" y="223">P</text><text x="333" y="221">C</text><text x="433" y="221">I</text>
        <text x="150" y="95">Normal</text><text x="55" y="254">n1, u &lt; 0</text><text x="310" y="254">n2, v &gt; 0</text>
        <text x="35" y="290">i = alpha + gamma; r = gamma - beta</text>
        <text x="35" y="315">n2/v - n1/u = (n2 - n1)/R</text>
        <text x="35" y="339">Paraxial geometry; sketch not to scale</text>
      </> : optics ? <>
        <text x="32" y="60">Normal adjustment: final image at infinity</text>
        <path d="M35 115H420M85 78V152M350 88V142" stroke={ink} strokeWidth="2" />
        <path d="M40 95L85 95L320 115L350 95L410 95M40 135L85 135L320 115L350 135L410 135" fill="none" stroke={green} strokeWidth="2" />
        <text x="32" y="179">M = -20; separation = 105 cm</text>
        <text x="32" y="215">Near point: final image 25 cm before eyepiece</text>
        <text x="32" y="244">s = 5 x 25/(25 + 5) = 4.167 cm</text>
        <text x="32" y="273">M = -24; separation = 104.167 cm</text>
        <text x="32" y="308">fo = 100 cm; fe = 5 cm; D = 25 cm</text>
        <text x="32" y="335">Eye at eyepiece; paraxial model</text>
      </> : <>
        <text x="35" y="65">Known solid: 0.1 kg x 900 x (80 - 30)</text>
        <rect x="35" y="85" width="390" height="28" fill={green} /><text x="35" y="139">Heat released = 4500 J</text>
        <rect x="35" y="165" width={chapter === 0 ? 364 : 347} height="28" fill="#397d9e" />
        <rect x={chapter === 0 ? 399 : 382} y="165" width="26" height="28" fill={orange} />
        {chapter === 1 && <rect x="408" y="165" width="17" height="28" fill="#88669b" />}
        <text x="35" y="219">{chapter === 0 ? "Liquid: 4200 J; container: 300 J" : "Liquid: 4000 J; container: 300 J; loss: 200 J"}</text>
        <text x="35" y="253">Liquid mass = 0.2 kg; temperature rise = 10 K</text>
        <text x="35" y="289">{chapter === 0 ? "cl = 4200/(0.2 x 10) = 2100 J/(kg K)" : "cl = 4000/(0.2 x 10) = 2000 J/(kg K)"}</text>
        <text x="35" y="326">Constructed observations; no phase change</text>
      </>}
    </g>
  </svg>;
}
