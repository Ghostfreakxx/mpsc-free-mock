import styles from "./lecture.module.css";

const blue = "#2878ac", green = "#247e68", red = "#ce5064", ink = "#52636b";
const descriptions = [
  "Two vehicles travel east at 18 and 12 meters per second, closing a 120 meter gap at 6 meters per second.",
  "A northbound boat drifts east; an upstream heading cancels the eastward current for directly opposite landing.",
  "An ideal projectile has constant horizontal velocity and zero vertical velocity, but downward acceleration, at its apex.",
  "A horizontal projectile drops 20 meters in 2 seconds and moves 30 meters horizontally, with perpendicular impact velocity components.",
  "Circular motion has tangential velocity and inward radial acceleration; nonuniform motion also has tangential acceleration.",
  "The position curve rises from zero to four meters at one second, then falls to zero at three seconds; velocity is negative three at two seconds.",
];

function Text({ x, y, children }: { x: number; y: number; children: React.ReactNode }) {
  return <text x={x} y={y} fontSize="18">{children}</text>;
}

export default function KinematicsDiagram({ chapter }: { chapter: number }) {
  return <svg className={`${styles.forceDiagram} ${styles.kinematicsDiagram}`} viewBox="0 0 440 320" role="img" aria-label={descriptions[chapter]}>
    {chapter === 0 && <>
      <path d="M35 105 H395 M35 205 H395" stroke={ink} />
      <rect x="55" y="77" width="65" height="28" fill={blue} />
      <rect x="275" y="177" width="65" height="28" fill={green} />
      <path d="M125 90 H205 l-8 -5 m8 5 l-8 5" fill="none" stroke={blue} strokeWidth="3" />
      <path d="M345 190 H395 l-8 -5 m8 5 l-8 5" fill="none" stroke={green} strokeWidth="3" />
      <Text x={35} y={49}>A: 18 m/s east</Text><Text x={225} y={155}>B: 12 m/s east</Text>
      <path d="M88 225 H308 M88 220 V230 M308 220 V230" stroke={red} />
      <Text x={140} y={250}>Initial gap: 120 m</Text>
      <Text x={35} y={286}>Relative speed: 18 - 12 = 6 m/s</Text>
      <Text x={35} y={310}>Catch-up time: 120 / 6 = 20 s</Text>
    </>}
    {chapter === 1 && <>
      <rect x="25" y="65" width="390" height="155" fill="#e7f2f8" />
      <path d="M25 65 H415 M25 220 H415" stroke={green} strokeWidth="3" />
      <path d="M75 220 L185 65 M285 220 V65" stroke={blue} strokeWidth="3" fill="none" />
      <path d="M75 220 V65 M285 220 L230 140" stroke={ink} strokeDasharray="5 5" fill="none" />
      <path d="M275 30 H380 l-8 -5 m8 5 l-8 5" stroke={red} fill="none" strokeWidth="2" />
      <Text x={25} y={32}>North is upward</Text><Text x={245} y={55}>Current: 3 m/s east</Text>
      <Text x={45} y={125}>5 m/s north</Text><Text x={238} y={110}>4 m/s north</Text>
      <Text x={235} y={177}>Aim upstream</Text>
      <Text x={36} y={246}>24 s; 72 m drift</Text><Text x={252} y={246}>30 s; no drift</Text>
      <Text x={25} y={283}>River width = 120 m; boat/water = 5 m/s</Text>
      <Text x={25} y={309}>Fastest crossing and zero drift differ.</Text>
    </>}
    {chapter === 2 && <>
      <path d="M55 245 H405 M55 245 V70" stroke={ink} fill="none" />
      <path d="M55 245 Q215 5 375 245" stroke={blue} strokeWidth="3" fill="none" />
      <circle cx="215" cy="125" r="5" fill={red} />
      <path d="M215 125 H290 l-8 -5 m8 5 l-8 5 M215 132 V182 l-5 -8 m5 8 l5 -8" fill="none" stroke={green} strokeWidth="2" />
      <Text x={95} y={50}>At apex: vy = 0, but vx is not zero</Text>
      <Text x={265} y={111}>vx constant</Text><Text x={230} y={182}>a downward</Text>
      <path d="M35 125 V245 M30 125 H40 M30 245 H40" stroke={red} />
      <Text x={65} y={158}>H = 5 m</Text><Text x={260} y={270}>T = 2 s</Text>
      <Text x={25} y={287}>Range = 20 sqrt(3) m; same-height landing</Text>
      <Text x={25} y={312}>Schematic path; g = 10 m/s^2, no drag</Text>
    </>}
    {chapter === 3 && <>
      <path d="M60 65 V245 H400" stroke={ink} fill="none" />
      <path d="M60 85 Q210 85 360 245" fill="none" stroke={blue} strokeWidth="3" />
      <path d="M60 85 H165 l-8 -5 m8 5 l-8 5" fill="none" stroke={green} strokeWidth="2" />
      <Text x={65} y={51}>Horizontal launch: 15 m/s</Text>
      <Text x={75} y={157}>Drop: 20 m</Text><Text x={153} y={231}>Range: 30 m</Text>
      <path d="M360 245 H420 l-8 -5 m8 5 l-8 5 M360 245 V287 l-5 -8 m5 8 l5 -8" fill="none" stroke={red} strokeWidth="2" />
      <Text x={295} y={270}>vx = +15</Text><Text x={235} y={292}>vy = -20 m/s</Text>
      <Text x={25} y={310}>Impact speed = 25 m/s; g = 10 m/s^2</Text>
    </>}
    {chapter === 4 && <>
      <circle cx="155" cy="156" r="76" stroke={blue} strokeWidth="2" fill="none" />
      <circle cx="231" cy="156" r="5" fill={red} />
      <path d="M226 156 H155 l8 -5 m-8 5 l8 5" fill="none" stroke={green} strokeWidth="3" />
      <path d="M231 151 V66 l-5 8 m5 -8 l5 8" fill="none" stroke={red} strokeWidth="3" />
      <Text x={250} y={76}>v = 4 m/s</Text><Text x={95} y={141}>Inward</Text>
      <Text x={265} y={172}>r = 2 m</Text><Text x={25} y={265}>Radial acceleration = 8 m/s^2</Text>
      <Text x={25} y={289}>With tangential 6: total = 10 m/s^2</Text>
      <Text x={25} y={313}>omega = 2 rad/s; period = pi s</Text>
    </>}
    {chapter === 5 && <>
      <path d="M50 205 H405 M50 205 V60" stroke={ink} fill="none" />
      <path d="M50 205 C86 97 122 61 158 61 C230 61 302 205 374 205" fill="none" stroke={blue} strokeWidth="3" />
      <path d="M158 61 V205" stroke={ink} strokeDasharray="5 5" />
      <circle cx="158" cy="61" r="4" fill={red} />
      <Text x={25} y={43}>Position x (m)</Text><Text x={176} y={65}>x(1) = 4 m</Text>
      <Text x={40} y={228}>0</Text><Text x={150} y={228}>1</Text><Text x={258} y={228}>2</Text><Text x={367} y={228}>3 s</Text>
      <Text x={25} y={268}>Returns to origin: displacement = 0</Text>
      <Text x={25} y={292}>Distance = 4 + 4 = 8 m</Text>
      <Text x={25} y={310}>At 2 s: velocity = -3 m/s; acceleration = 0</Text>
    </>}
  </svg>;
}
