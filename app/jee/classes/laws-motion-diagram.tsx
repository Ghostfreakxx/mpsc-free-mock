import styles from "./lecture.module.css";

const blue = "#2878ac", green = "#247e68", red = "#ce5064", ink = "#52636b";
const descriptions = [
  "A positive triangular force pulse has height 20 newtons and width 0.4 seconds, giving an impulse of 4 newton seconds.",
  "Three forces on a light knot: inclined tension up and right, horizontal tension left, and a 100 newton load downward.",
  "An ideal Atwood machine has a 3 kilogram mass accelerating down and a 2 kilogram mass accelerating up, with equal 24 newton tensions.",
  "The free body diagram of a block shows normal upward, weight downward, push right and friction left; static friction adjusts below its limit.",
  "In top view a car travels tangentially around a level turn; tire friction points inward, supplying centripetal acceleration.",
  "A road rises outward to the right. Weight is downward and the normal reaction points upward and inward. Friction is unnecessary at the ideal banking speed.",
];

function Label({ x, y, children }: { x: number; y: number; children: React.ReactNode }) {
  return <text x={x} y={y} fontSize="18">{children}</text>;
}

function Arrow({ x1, y1, x2, y2, color }: { x1: number; y1: number; x2: number; y2: number; color: string }) {
  const angle = Math.atan2(y2 - y1, x2 - x1), length = 9;
  const point = (a: number) => `${x2 - length * Math.cos(a)},${y2 - length * Math.sin(a)}`;
  return <g stroke={color} fill={color} strokeWidth="2.5"><line x1={x1} y1={y1} x2={x2} y2={y2} /><polygon points={`${x2},${y2} ${point(angle - .45)} ${point(angle + .45)}`} /></g>;
}

export default function LawsMotionDiagram({ chapter }: { chapter: number }) {
  return <svg className={`${styles.forceDiagram} ${styles.applicationsDiagram}`} viewBox="0 0 440 320" role="img" aria-label={descriptions[chapter]}>
    {chapter === 0 && <>
      <path d="M60 220 H390 M60 220 V60" stroke={ink} fill="none" />
      <path d="M60 220 L205 85 L350 220 Z" fill="#e7f2f8" stroke={blue} strokeWidth="3" />
      <Label x={35} y={40}>Net force (N)</Label><Label x={185} y={70}>20</Label>
      <Label x={52} y={245}>0</Label><Label x={327} y={245}>0.4 s</Label>
      <Label x={90} y={170}>Area = 4 N s</Label>
      <Label x={25} y={282}>Impulse = change in momentum</Label>
      <Label x={25} y={310}>For 0.5 kg: delta v = 8 m/s</Label>
    </>}
    {chapter === 1 && <>
      <circle cx="220" cy="150" r="6" fill={ink} />
      <Arrow x1={220} y1={150} x2={340} y2={81} color={blue} />
      <Arrow x1={220} y1={150} x2={95} y2={150} color={green} />
      <Arrow x1={220} y1={150} x2={220} y2={240} color={red} />
      <path d="M225 150 H352 M260 150 Q260 138 255 130" stroke={ink} strokeDasharray="4 4" fill="none" />
      <Label x={230} y={47}>Inclined T = 200 N</Label><Label x={275} y={138}>30 deg</Label>
      <Label x={30} y={124}>Horizontal rope</Label><Label x={235} y={232}>100 N load</Label>
      <Label x={25} y={283}>T sin(30 deg) = 100 N</Label>
      <Label x={25} y={310}>Horizontal tension = 100 sqrt(3) N</Label>
    </>}
    {chapter === 2 && <>
      <circle cx="220" cy="85" r="30" stroke={ink} fill="none" strokeWidth="2" />
      <path d="M190 85 V160 M250 85 V180" stroke={ink} strokeWidth="2" />
      <rect x="160" y="160" width="60" height="46" fill="#e7f2f8" stroke={blue} />
      <rect x="235" y="180" width="60" height="38" fill="#e8f4ee" stroke={green} />
      <Label x={168} y={190}>3 kg</Label><Label x={242} y={205}>2 kg</Label>
      <Arrow x1={175} y1={157} x2={175} y2={105} color={blue} />
      <Arrow x1={275} y1={177} x2={275} y2={125} color={blue} />
      <Arrow x1={175} y1={207} x2={175} y2={254} color={red} />
      <Arrow x1={275} y1={218} x2={275} y2={252} color={red} />
      <Label x={70} y={111}>T = 24 N</Label><Label x={297} y={142}>T = 24 N</Label>
      <Label x={82} y={250}>30 N</Label><Label x={298} y={248}>20 N</Label>
      <Label x={25} y={34}>Heavier down; lighter up</Label>
      <Label x={25} y={285}>Equal acceleration magnitudes: 2 m/s^2</Label>
      <Label x={25} y={310}>Light taut rope; ideal massless pulley</Label>
    </>}
    {chapter === 3 && <>
      <path d="M35 217 H405" stroke={ink} />
      <rect x="175" y="167" width="90" height="50" fill="#e7f2f8" stroke={blue} />
      <Arrow x1={220} y1={167} x2={220} y2={90} color={green} />
      <Arrow x1={220} y1={217} x2={220} y2={258} color={red} />
      <Arrow x1={265} y1={190} x2={380} y2={190} color={blue} />
      <Arrow x1={175} y1={190} x2={60} y2={190} color={red} />
      <Label x={232} y={108}>N = 40 N</Label><Label x={237} y={251}>mg = 40 N</Label>
      <Label x={40} y={171}>Friction</Label><Label x={308} y={169}>Push</Label>
      <Label x={25} y={43}>Static limit: 20 N; sliding: 12 N</Label>
      <Label x={25} y={285}>18 N push: friction = 18 N; at rest</Label>
      <Label x={25} y={310}>24 N push: slides; a = 3 m/s^2</Label>
    </>}
    {chapter === 4 && <>
      <circle cx="155" cy="159" r="76" stroke={blue} fill="none" strokeWidth="2" />
      <rect x="222" y="145" width="18" height="28" fill={blue} />
      <Arrow x1={223} y1={159} x2={150} y2={159} color={green} />
      <Arrow x1={231} y1={141} x2={231} y2={67} color={red} />
      <Label x={25} y={38}>Level turn: top view</Label><Label x={245} y={78}>Velocity</Label>
      <Label x={90} y={145}>Friction</Label><Label x={265} y={181}>r = 20 m</Label>
      <Label x={25} y={265}>Inward force = mv^2/r</Label>
      <Label x={25} y={288}>mu_s = 0.5; g = 10 m/s^2</Label>
      <Label x={25} y={311}>Maximum no-skid speed = 10 m/s</Label>
    </>}
    {chapter === 5 && <>
      <path d="M105 238 L330 108 M105 238 H340" stroke={ink} fill="none" strokeWidth="2" />
      <circle cx="220" cy="171" r="10" fill={blue} />
      <Arrow x1={220} y1={171} x2={174} y2={92} color={green} />
      <Arrow x1={220} y1={171} x2={220} y2={241} color={red} />
      <path d="M174 92 H220 V171" stroke={green} strokeDasharray="4 4" fill="none" />
      <Label x={25} y={34}>Bank rises outward (right)</Label>
      <Label x={75} y={78}>Normal N</Label><Label x={240} y={232}>mg</Label>
      <Label x={35} y={158}>Inward</Label><Label x={275} y={138}>Outward</Label>
      <Label x={136} y={228}>theta</Label><Label x={250} y={84}>No friction</Label>
      <Label x={25} y={284}>N cos(theta) = mg</Label>
      <Label x={25} y={310}>N sin(theta) = mv^2/r</Label>
    </>}
  </svg>;
}
