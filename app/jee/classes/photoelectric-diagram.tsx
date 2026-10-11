import styles from "./lecture.module.css";

const titles = ["Photon energy must clear the escape barrier", "400 nm: an energy budget", "Same color, different photon rates", "Same stopping voltage, different currents", "The physical branch starts at threshold"];
export default function PhotoelectricDiagram({chapter}: {chapter:number}) {
  return <svg className={styles.forceDiagram} viewBox="0 0 440 300" role="img" aria-label={titles[chapter]}>
    <text x="14" y="25" fontSize="15">{titles[chapter]}</text>
    {chapter===0 && <>
      <rect x="180" y="70" width="30" height="170" fill="#d9e8e5" />
      <path d="M30 110 H175 M215 110 L345 75" stroke="#2878ac" strokeWidth="3" />
      <circle cx="345" cy="75" r="6" fill="#247e68" />
      <path d="M30 190 H175" stroke="#ce5064" strokeWidth="3" />
      <text x="25" y="90" fontSize="14">hf greater than phi</text>
      <text x="25" y="175" fontSize="14">hf less than phi</text>
      <text x="245" y="110" fontSize="14">Electron escapes</text>
      <text x="225" y="195" fontSize="14">No emission</text>
      <text x="150" y="265" fontSize="14">Metal surface</text>
    </>}
    {chapter===1 && <>
      <rect x="70" y="60" width="65" height="155" fill="#2878ac" />
      <rect x="200" y="115" width="65" height="100" fill="#ce5064" />
      <rect x="330" y="160" width="65" height="55" fill="#247e68" />
      <text x="65" y="45" fontSize="14">3.1 eV</text><text x="195" y="100" fontSize="14">2.0 eV</text><text x="325" y="145" fontSize="14">1.1 eV</text>
      <text x="63" y="242" fontSize="14">Photon</text><text x="183" y="242" fontSize="14">Escape cost</text><text x="321" y="242" fontSize="14">K maximum</text>
      <text x="30" y="280" fontSize="14">Energy in = escape cost + maximum kinetic energy</text>
    </>}
    {chapter===2 && <>
      {[0,1,2].map(i=><circle key={i} cx={70+i*55} cy="100" r="8" fill="#2878ac" />)}
      {[0,1,2,3,4,5].map(i=><circle key={i} cx={70+i*55} cy="180" r="8" fill="#2878ac" />)}
      <text x="30" y="65" fontSize="14">Lower intensity: fewer photons each second</text>
      <text x="30" y="150" fontSize="14">Higher intensity: more identical-energy photons</text>
      <text x="30" y="240" fontSize="14">Fixed frequency: hf and K maximum unchanged</text>
      <text x="30" y="270" fontSize="14">Current rises if efficiency and collection stay fixed</text>
    </>}
    {chapter===3 && <>
      <path d="M45 240 H410 M145 255 V55" stroke="#52636b" fill="none" />
      <path d="M75 240 C120 220 150 110 250 110 H395" stroke="#2878ac" strokeWidth="3" fill="none" />
      <path d="M75 240 C120 230 150 175 250 175 H395" stroke="#247e68" strokeWidth="3" fill="none" />
      <text x="160" y="65" fontSize="14">Photocurrent</text><text x="270" y="100" fontSize="14">Higher intensity</text><text x="270" y="165" fontSize="14">Lower intensity</text>
      <text x="50" y="265" fontSize="14">-Vs</text><text x="135" y="275" fontSize="14">0</text><text x="250" y="280" fontSize="14">Collector voltage</text>
    </>}
    {chapter===4 && <>
      <path d="M45 240 H410 M45 240 V55" stroke="#52636b" fill="none" />
      <path d="M150 240 L375 70" stroke="#2878ac" strokeWidth="3" />
      <circle cx="150" cy="240" r="5" fill="#ce5064" />
      <text x="60" y="70" fontSize="14">K maximum</text><text x="170" y="155" fontSize="14">Slope = h</text>
      <text x="65" y="220" fontSize="14">No emission</text><text x="135" y="265" fontSize="14">f0</text><text x="280" y="280" fontSize="14">Frequency f</text>
    </>}
  </svg>;
}
