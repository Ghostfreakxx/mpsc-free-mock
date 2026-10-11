import Image from "next/image";
import styles from "./lecture.module.css";

export default function CompanionDiagram({ lessonId, chapter }: { lessonId: string; chapter: number }) {
  if (chapter === 0) {
    const descriptions: Record<string, string> = {
      "rotation-applications": "Two masses have a mass-weighted centre of mass closer to the heavier mass.",
      "materials-applications": "Schematic stress-strain curve distinguishing proportional, elastic and permanent deformation.",
      "thermodynamics-applications": "Two pressure-volume paths between the same endpoints give different work.",
      "kinetic-theory-applications": "Elastic wall collisions reverse normal velocity and transfer momentum to the wall.",
    };
    return <Image src={`/lectures/foundations/${lessonId}.png`} width={1200} height={640} style={{ width: "100%", height: "auto" }} alt={descriptions[lessonId]} />;
  }
  const rotation = lessonId === "rotation-applications";
  const materials = lessonId === "materials-applications";
  const thermo = lessonId === "thermodynamics-applications";
  const labels = rotation
    ? ["", "Parallel midpoint and end axes of a uniform rod", "Halving axial inertia doubles angular speed at fixed angular momentum", "Support reactions balance the two beam loads", "A solid cylinder rolls down an incline with static friction uphill"]
    : materials
      ? ["", "Ideal tank outflow converts a height drop into kinetic energy", "Three energy stages heat ice, melt it and heat the water"]
      : thermo
        ? ["", "Reversible isothermal and adiabatic expansion from the same ideal gas state", "A clockwise rectangular cycle produces one hundred joules of work"]
        : ["", "Helium has a higher RMS speed than nitrogen at equal temperature", "Doubling number density halves the mean free path at fixed molecular diameter"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 280" role="img" aria-label={labels[chapter]}>
    <defs><marker id="companion-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="context-stroke" /></marker></defs>
    {rotation && chapter === 1 && <>
      <path d="M70 130H370" stroke="#6a7d75" strokeWidth="12" />
      <path d="M70 55V215M220 55V215" stroke="#245e94" strokeWidth="2" strokeDasharray="5 4" />
      <text x="38" y="35">End axis</text><text x="167" y="35">Midpoint axis</text>
      <text x="145" y="170">d = 1 m; M = 3 kg</text>
      <text x="85" y="239">I_end = I_CM + M d squared</text>
      <text x="153" y="264">4 = 1 + 3</text>
    </>}
    {rotation && chapter === 2 && <>
      <circle cx="115" cy="110" r="65" fill="#e0efe4" stroke="#276b4b" strokeWidth="2" />
      <circle cx="325" cy="110" r="42" fill="#e4edf5" stroke="#245e94" strokeWidth="2" />
      <text x="61" y="110">I = 4</text><text x="293" y="110">I = 2</text>
      <text x="61" y="200">3 rad/s</text><text x="280" y="200">6 rad/s</text>
      <text x="68" y="238">L = 12 kg m squared per second</text>
      <text x="78" y="264">Energy increases: 18 J to 36 J</text>
    </>}
    {rotation && chapter === 3 && <>
      <path d="M60 150H380" stroke="#6a7d75" strokeWidth="10" />
      <path d="M60 220V155M380 220V155M140 70V140M220 90V140" stroke="#245e94" strokeWidth="3" markerEnd="url(#companion-arrow)" />
      <text x="30" y="244">55 N up</text><text x="330" y="244">25 N up</text>
      <text x="102" y="48">60 N</text><text x="209" y="68">20 N</text>
      <text x="83" y="185">1 m</text><text x="189" y="185">2 m</text><text x="348" y="185">4 m</text>
      <text x="35" y="274">About left: 4 R_right = 60(1) + 20(2)</text>
    </>}
    {rotation && chapter === 4 && <>
      <path d="M50 90L365 225" stroke="#6a7d75" strokeWidth="3" />
      <circle cx="180" cy="103" r="47" fill="#e0efe4" stroke="#276b4b" strokeWidth="2" />
      <path d="M180 103l85 36M195 153l-60 -26" stroke="#245e94" strokeWidth="3" markerEnd="url(#companion-arrow)" />
      <text x="267" y="145">a downhill</text><text x="43" y="184">f uphill</text>
      <text x="69" y="245">At 30 degrees: a = 10/3 m/s squared</text>
      <text x="102" y="273">Drop 0.30 m: v = 2 m/s</text>
    </>}
    {materials && chapter === 1 && <>
      <path d="M60 45V190H255V160M255 140V45" fill="none" stroke="#6a7d75" strokeWidth="3" />
      <path d="M62 85H253" stroke="#245e94" strokeWidth="3" />
      <path d="M255 150H385" stroke="#245e94" strokeWidth="3" markerEnd="url(#companion-arrow)" />
      <text x="92" y="125">h = 0.45 m</text><text x="277" y="125">3 m/s</text>
      <text x="80" y="230">Same atmospheric pressure at both ends</text>
      <text x="100" y="262">Ideal: v = square root of 2gh</text>
    </>}
    {materials && chapter === 2 && <>
      <path d="M60 45V220H400" fill="none" stroke="#6a7d75" strokeWidth="2" />
      <path d="M80 195L130 160H305L370 90" fill="none" stroke="#245e94" strokeWidth="3" />
      <text x="14" y="40">T</text><text x="359" y="243">Heat Q</text>
      <text x="86" y="126">Ice</text><text x="171" y="145">Melting</text><text x="302" y="72">Water</text>
      <text x="83" y="267">2100 + 33400 + 8400 = 43900 J</text>
    </>}
    {thermo && chapter === 1 && <>
      <path d="M55 40V215H400" fill="none" stroke="#6a7d75" strokeWidth="2" />
      <path d="M100 65C145 120 235 155 365 168" fill="none" stroke="#245e94" strokeWidth="3" />
      <path d="M100 65C145 152 235 191 365 200" fill="none" stroke="#276b4b" strokeWidth="3" />
      <text x="22" y="35">P</text><text x="403" y="215">V</text>
      <text x="248" y="145">Isothermal</text><text x="220" y="240">Adiabatic (reversible)</text>
      <text x="68" y="272">Same start; different heat and work</text>
    </>}
    {thermo && chapter === 2 && <>
      <path d="M55 45V215H395" fill="none" stroke="#6a7d75" strokeWidth="2" />
      <rect x="125" y="80" width="215" height="95" fill="#e0efe4" stroke="#276b4b" strokeWidth="2" />
      <path d="M170 80H295M340 104V155M295 175H170M125 155V104" stroke="#245e94" strokeWidth="2" markerEnd="url(#companion-arrow)" />
      <text x="7" y="35">P (Pa)</text><text x="368" y="242">V</text>
      <text x="62" y="76">200000</text><text x="60" y="193">100000</text>
      <text x="96" y="240">0.001</text><text x="315" y="240">0.002</text>
      <text x="70" y="272">Enclosed area = net work = +100 J</text>
    </>}
    {!rotation && !materials && !thermo && chapter === 1 && <>
      <circle cx="70" cy="90" r="8" fill="#245e94" /><circle cx="70" cy="175" r="8" fill="#276b4b" />
      <path d="M85 90H350M85 175H185" stroke="#245e94" strokeWidth="3" markerEnd="url(#companion-arrow)" />
      <text x="100" y="58">Helium: 4 g/mol</text><text x="200" y="180">Nitrogen: 28 g/mol</text>
      <text x="80" y="231">Same T: v_He / v_N2 = square root of 7</text>
      <text x="90" y="265">Equal mean translational energy</text>
    </>}
    {!rotation && !materials && !thermo && chapter === 2 && <>
      <rect x="35" y="60" width="170" height="140" fill="#e4edf5" stroke="#245e94" />
      <rect x="235" y="60" width="170" height="140" fill="#e0efe4" stroke="#276b4b" />
      {[65, 110, 165].map((x, i) => <circle key={x} cx={x} cy={90 + i * 35} r="6" fill="#245e94" />)}
      {[260, 310, 370].map(x => <g key={x}><circle cx={x} cy="100" r="6" fill="#276b4b" /><circle cx={x} cy="165" r="6" fill="#276b4b" /></g>)}
      <text x="80" y="38">N/V</text><text x="275" y="38">2N/V</text>
      <text x="68" y="238">Mean path</text><text x="257" y="238">Half mean path</text>
      <text x="78" y="272">Same diameter; dilute hard-sphere model</text>
    </>}
  </svg>;
}
