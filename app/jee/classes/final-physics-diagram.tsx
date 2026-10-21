import styles from "./lecture.module.css";

type Board = { title: string; rows: string[]; xLabel?: string; yLabel?: string; xmax?: number; ymax?: number; points?: number[][]; kind?: "clamp" | "logic" | "meter" };
const boards: Record<string, Board[]> = {
  "dual-nature-applications": [
    { title: "Stopping potential above threshold", xLabel: "Frequency / 10^14 Hz", yLabel: "Stopping potential (V)", xmax: 10, ymax: 3, points: [[4.835589942,0],[6,.4816],[8,1.3088],[10,2.136]], rows: ["Slope: 4.136 x 10^-15 V s", "Threshold: 4.836 x 10^14 Hz", "Work function: 2 eV; no subthreshold emission"] },
    { title: "Photon energy is not beam power", xLabel: "Wavelength (nm)", yLabel: "Photon energy (eV)", xmax: 800, ymax: 4, points: Array.from({length:41},(_,i)=>{ const wavelength=400+i*10; return [wavelength,1240/wavelength]; }), rows: ["400 nm: Kmax = 1.1 eV on a 2 eV surface", "2 mW: about 4.03 x 10^15 photons/s", "0.1% collected-electron yield: about 0.645 microA"] },
    { title: "Low-energy electrons: wavelength versus V", xLabel: "Accelerating voltage (V)", yLabel: "Wavelength (angstrom)", xmax: 200, ymax: 3, points: Array.from({length:36}, (_,i) => { const v=25+i*5; return [v,12.27/Math.sqrt(v)]; }), rows: ["150 V: lambda = 1.002 angstrom", "Same momentum: same wavelength", "Same small K: lambda_e/lambda_p = 42.85"] },
  ],
  "atomic-nuclear-applications": [
    { title: "Head-on alpha turning distance for gold", xLabel: "Initial energy (MeV)", yLabel: "Closest approach (fm)", xmax: 10, ymax: 90, points: Array.from({length:29},(_,i)=>{ const k=3+i*.25; return [k,2*79*1.44/k]; }), rows: ["5 MeV: 45.504 fm", "Double energy: half the closest distance", "Fixed heavy target; zero impact parameter"] },
    { title: "He+ has one electron: level bookkeeping", rows: ["n = 3: E = -6.044 eV", "n = 2: E = -13.600 eV", "3 -> 2: photon = 7.556 eV; lambda = 164.1 nm", "n = 2 radius = 0.1058 nm", "Ground-state scale = -54.4 eV"] },
    { title: "Atomic masses balance the fusion ledger", rows: ["D + T: 2.014102 + 3.016049 u", "He + neutron: 4.002603 + 1.008665 u", "Initial minus final: 0.018883 u", "Q = +17.5895 MeV", "Two atomic electrons on both sides"] },
  ],
  "electronics-applications": [
    { title: "The clamp splits current between branches", kind: "clamp", rows: ["I series = 4.30 mA; I load = 0.07 mA", "I diode = 4.23 mA at Vin = +5 V", "Vin = -0.5 V: diode off; Vout = -0.4545 V"] },
    { title: "Regulated current has a usable window", xLabel: "Input voltage (V)", yLabel: "Zener current (mA)", xmax: 16, ymax: 30, points: [[8.433,5],[12,15.8090909091],[15.033,25]], rows: ["VZ = 5.1 V; R = 330 ohm; load = 1 kilo-ohm", "Stated usable IZ: 5 to 25 mA", "220 ohm load at 12 V: regulation fails"] },
    { title: "Tied-input inversions build OR and AND", kind: "logic", rows: ["Three NANDs: NOT(NOT A AND NOT B) = OR", "Three NORs: NOT(NOT A OR NOT B) = AND", "Ideal binary logic; test all four input rows"] },
  ],
  "experimental-applications": [
    { title: "Positive zero error needs subtraction", rows: ["Raw: 12 + 7 x 0.02 = 12.14 mm", "Zero error: +0.04 mm", "Corrected diameter: 12.10 mm", "Volume bound: 2 x 0.02/12.10 + 0.1/40", "Small worst-case bound: 0.581%, not an SD"] },
    { title: "Pendulum graph: the slope determines g", xLabel: "Length L (m)", yLabel: "Period squared (s squared)", xmax: 1.1, ymax: 4.5, points: [[0,0],[.4,1.6],[.6,2.4],[.8,3.2],[1,4]], rows: ["Slope = 4 s squared/m; g = 9.87 m/s squared", "20 cycles: 40.0 +/-0.2 s; T = 2.00 +/-0.01 s", "Constructed observations; small-angle model"] },
    { title: "The ammeter includes voltmeter current", kind: "meter", rows: ["At 1 V: IR = 1 mA; IV = 0.1 mA", "Total 1.1 mA gives apparent R = 909.1 ohm", "Bridge: X/2 = 40/60 -> X = 4/3 ohm"] },
  ],
};

export default function FinalPhysicsDiagram({ id, chapter }: { id: string; chapter: number }) {
  const board = boards[id]?.[chapter];
  if (!board) return null;
  const graph = board.points && board.xmax && board.ymax;
  return <svg className={styles.forceDiagram} viewBox="0 0 460 360" role="img" aria-label={board.title}>
    <text x="18" y="27" fontSize="16">{board.title}</text>
    {graph ? <>
      <text x="30" y="62" fontSize="14">{board.yLabel}</text>
      <path d="M55 80V215H415" fill="none" stroke="#7a827e" />
      <path d={board.points!.map(([x,y],i)=>`${i ? "L" : "M"}${55+360*x/board.xmax!},${215-135*y/board.ymax!}`).join(" ")} fill="none" stroke="#14745c" strokeWidth="3" />
      {board.points!.length < 8 && board.points!.map(([x,y],i)=><circle key={i} cx={55+360*x/board.xmax!} cy={215-135*y/board.ymax!} r="3" fill="#245e94" />)}
      <text x="45" y="234" fontSize="13">0</text><text x="415" y="234" fontSize="13" textAnchor="end">{board.xmax}</text>
      <text x="25" y="86" fontSize="13">{board.ymax}</text><text x="29" y="216" fontSize="13">0</text>
      <text x="135" y="254" fontSize="14">{board.xLabel}</text>
    </> : board.kind === "clamp" || board.kind === "meter" ? <>
      <path d={board.kind === "clamp" ? "M30 125H85M150 125H390V160M390 195V225H30M240 125V157M240 183V225" : "M30 125H95M135 125H390V160M390 195V225H30M240 125V157M240 197V225"} fill="none" stroke="#245e94" strokeWidth="2" />
      {board.kind === "clamp" && <rect x="85" y="115" width="65" height="20" fill="#edf3f7" stroke="#245e94" strokeWidth="2" />}
      <rect x="380" y="160" width="20" height="35" fill="#edf3f7" stroke="#245e94" strokeWidth="2" />
      {board.kind === "clamp" ? <>
        <path d="M225 157H255L240 183ZM225 183H255" fill="#edf3f7" stroke="#14745c" strokeWidth="2" />
        <text x="35" y="91" fontSize="14">5 V</text><text x="85" y="91" fontSize="14">1 kilo-ohm</text><text x="275" y="91" fontSize="14">Vout = 0.7 V</text>
        <text x="280" y="177" fontSize="14">10 kilo-ohm</text>
      </> : <>
        <circle cx="115" cy="125" r="20" fill="#edf3f7" stroke="#14745c" strokeWidth="2" /><text x="109" y="131" fontSize="16">A</text>
        <circle cx="240" cy="177" r="20" fill="#edf3f7" stroke="#14745c" strokeWidth="2" /><text x="234" y="183" fontSize="16">V</text>
        <text x="57" y="87" fontSize="14">1.1 mA</text><text x="200" y="91" fontSize="14">RV = 10 kilo-ohm</text><text x="300" y="177" fontSize="14">R = 1k</text>
      </>}
    </> : board.kind === "logic" ? <>
      <text x="50" y="78" fontSize="15">A</text><text x="115" y="78" fontSize="15">B</text><text x="200" y="78" fontSize="15">OR</text><text x="305" y="78" fontSize="15">AND</text>
      {[[0,0,0,0],[0,1,1,0],[1,0,1,0],[1,1,1,1]].map((row,i)=><g key={i}>
        <path d={`M35 ${98+i*36}H410`} stroke="#dae3df" />
        {row.map((value,j)=><text key={j} x={[50,115,210,320][j]} y={120+i*36} fontSize="16">{value}</text>)}
      </g>)}
    </> : <>
      {board.rows.map((row,i)=><g key={row}><path d={`M20 ${65+i*53}H440`} stroke="#dae3df"/><text x="25" y={96+i*53} fontSize="14">{row}</text></g>)}
    </>}
    {(graph || board.kind) && board.rows.map((row,i)=><text key={row} x="18" y={284+i*28} fontSize="14">{row}</text>)}
  </svg>;
}
