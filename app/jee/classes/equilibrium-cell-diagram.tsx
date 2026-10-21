import styles from "./lecture.module.css";

export default function EquilibriumCellDiagram({lesson}:{lesson:"equilibrium"|"redox-electrochemistry"}) {
 const titration=lesson==="equilibrium";
 const title=titration?"Strong-acid / strong-base titration":"Zinc concentration cell at 25 °C";
 const pH=(v:number)=>{
  const d=(.0025-.0001*v)/(.025+v/1000);
  const dominant=(Math.abs(d)+Math.sqrt(d*d+4e-14))/2;
  return d>=0?-Math.log10(dominant):14+Math.log10(dominant);
 };
 const curve=Array.from({length:701},(_,i)=>{const v=i*.05;return `${40+v*10},${260-14*pH(v)}`;}).join(" ");
 return <svg className={styles.diagram} viewBox="0 0 460 310" role="img" aria-label={title}>
  <title>{title}</title><rect width="460" height="310" rx="12" fill="#f5faf7" />
  <g fill="#20483e" fontFamily="Arial, sans-serif" textAnchor="middle" fontSize="13">
   <text x="230" y="28" fontSize="17" fontWeight="bold">{title}</text>
   {titration?<>
    <text x="230" y="49">25.0 mL 0.100 M HCl + 0.100 M NaOH</text>
    <path d="M40 60V260H400" stroke="#43675b" fill="none" />
    {[0,7,14].map(value=><g key={value}><text x="23" y={265-14*value}>{value}</text><path d={`M40 ${260-14*value}H400`} stroke="#d0ded5"/></g>)}
    <polyline points={curve} fill="none" stroke="#19785d" strokeWidth="3" />
    {[20,25,30].map(v=><g key={v}><circle cx={40+v*10} cy={260-14*pH(v)} r="4" fill="#ac4c31"/><text x={40+v*10} y="280">{v}</text></g>)}
    <text x="180" y="245">20 mL: pH 1.95</text><text x="215" y="153">25 mL: 7.00</text>
    <text x="355" y="77">30 mL: 11.96</text><text x="230" y="300">NaOH added (mL) · ideal model at 25 °C</text>
    <text x="20" y="54">pH</text>
   </>:<>
    <text x="230" y="52">Same Zn²⁺/Zn couple · E°cell = 0</text>
    <path d="M45 105V245H195V105 M265 105V245H415V105" fill="none" stroke="#43675b" strokeWidth="3"/>
    <path d="M47 150H193V243H47Z M267 150H413V243H267Z" fill="#d9ebe3" />
    <rect x="95" y="115" width="28" height="95" fill="#90a4a2"/><rect x="335" y="115" width="28" height="95" fill="#90a4a2"/>
    <path d="M109 115V80H349V115" stroke="#43675b" strokeWidth="3" fill="none"/>
    <path d="M190 73H265L255 67M265 73L255 79" stroke="#a34529" fill="none" strokeWidth="2"/>
    <text x="230" y="99">electrons →</text>
    <path d="M174 177V127Q174 111 190 111H270Q286 111 286 127V177" fill="none" stroke="#a3baad" strokeWidth="9"/>
    <text x="230" y="140">salt bridge</text>
    <text x="120" y="225">0.0010 M Zn²⁺</text><text x="340" y="225">0.100 M Zn²⁺</text>
    <text x="120" y="265">Anode: Zn → Zn²⁺ + 2e⁻</text><text x="340" y="265">Cathode: Zn²⁺ + 2e⁻ → Zn</text>
    <text x="230" y="289">E = (0.05916/2) log₁₀(100) = 0.05916 V</text>
    <text x="230" y="306" fontSize="11">Ideal dilute activities; junction potential neglected</text>
   </>}
  </g>
 </svg>;
}
