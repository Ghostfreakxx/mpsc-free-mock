import type { StudyLesson } from "./course";

export const magneticApplicationsLesson: StudyLesson = {
  id: "magnetic-applications", subject: "Physics", unit: 13,
  title: "Magnetic applications: finite wires and particle trajectories",
  summary: "Finite-source fields, signed superposition, helical motion and magnetic-sector geometry.",
  prerequisites: "Biot-Savart law, cross products, circular motion and elementary integration.",
  remaining: "Original JEE-style examples accompany the separate three-chapter Marin applications classroom and existing magnetic foundations; they are not official past-paper questions. Wider conductor geometry, instrument loading and material-response practice remain.",
  sections: [
    { title: "A finite wire is not automatically an infinite wire", paragraphs: [
      "Place a straight wire on the y axis from y=-a to y=+a, carrying current upward. Observe point P at x=b, y=0, with b positive. Every small current element produces field into the page at P. Its magnitude is proportional to b dy/(b squared+y squared) to the power three halves. Integration gives B = mu0 I a/[2 pi b sqrt(a squared+b squared)]. Direction follows the current-element cross product, not the sign of a distance.",
      "Using mu0/(4 pi) approximately 10^-7 in SI units, take I=5 A, a=0.30 m and b=0.40 m. The field is 1.5 microT into the page. An infinite wire would give 2.5 microT, so that approximation overestimates this finite-source result. The ratio is a/sqrt(a squared+b squared), tending to one only when the wire extends much farther than the observation distance. The rest of a real circuit may also contribute; this calculation isolates the stated straight segment."
    ], formula: "Symmetric finite segment: B = mu0 I a/[2 pi b sqrt(a^2+b^2)]" },
    { title: "Superposition needs a direction for every contribution", paragraphs: [
      "Two long parallel wires carry current out of the page. Put 3 A at x=0 and 6 A at x=0.30 m. Between them, the left wire produces field upward and the right wire produces field downward. Cancellation requires 3/x = 6/(0.30-x), giving x=0.10 m. This point is closer to the weaker wire because its field needs a smaller distance to match the stronger current's field.",
      "Outside the interval, the two fields point in the same direction, so there is no finite cancellation point there for these same-direction currents. Reversing a current changes that conclusion and requires a fresh direction diagram. Equal numerical magnitudes alone do not establish cancellation. Distances must be positive geometrical lengths; keep vector signs separately. This long-wire model neglects ends and other conductors, and is appropriate only when those effects are small."
    ], formula: "Long wire magnitude: B=mu0 I/(2 pi r); net field is the vector sum" },
    { title: "A uniform magnetic field changes direction, not speed", paragraphs: [
      "Magnetic force is q times velocity cross field, perpendicular to velocity. Its instantaneous power is force dot velocity, which is zero. Therefore a static magnetic field alone cannot increase a particle's kinetic energy. For perpendicular entry, the force supplies centripetal acceleration: radius r = m v/(absolute q B). Charge sign decides which way the path bends, but the radius uses charge magnitude.",
      "Split an oblique entry velocity into perpendicular and parallel components. The parallel component remains constant while the perpendicular component rotates, producing a helix. Period T = 2 pi m/(absolute q B) and axial advance per turn is v_parallel T. For m=2 x 10^-27 kg, q=+1 x 10^-19 C, B=0.20 T, v_perp=2 x 10^5 m/s and v_parallel=1 x 10^5 m/s, radius is 0.020 m, period about 6.283 x 10^-7 s and pitch 0.06283 m. These are nonrelativistic, uniform-field results."
    ], formula: "r=m v_perp/(|q|B); T=2 pi m/(|q|B); pitch=v_parallel T" },
    { title: "The detector geometry determines which distance is measured", paragraphs: [
      "A particle accelerated from negligible initial speed through potential difference V gains kinetic energy absolute q times V, if losses are negligible. On entering a perpendicular magnetic field, r = sqrt(2mV/absolute q)/B. For the same charge magnitude, accelerating voltage and field, radius scales as the square root of mass. Doubling mass does not double radius; it multiplies it by sqrt(2).",
      "If the trajectory completes a semicircle and reaches the original entry boundary, the landing separation from entry is 2r. That is a diameter, not a radius. Other detector placements give different distances. Before substituting numbers, sketch the entry direction, charge sign, field direction and detector boundary. The field does not supply the acceleration energy; the electric potential difference did. The magnetic region changes direction while preserving the already acquired speed."
    ], formula: "After acceleration: r=sqrt(2mV/|q|)/B; semicircle boundary separation=2r" },
    { title: "Crossed fields select a velocity, not an energy", paragraphs: [
      "Take velocity along positive x, magnetic field along positive z and electric field along positive y. Velocity cross magnetic field points along negative y. Electric and magnetic forces cancel when E=vB, provided the particle enters with the stated direction. Thus a selector transmits speed E/B independent of mass and charge magnitude. Reversing charge reverses both forces and retains cancellation at that speed.",
      "For E=4 x 10^4 V/m and B=0.20 T, the selected speed is 2 x 10^5 m/s. An entering particle of another speed deflects, and a particle entering at another angle does not satisfy this simple scalar balance. Different masses at the selected speed still have different kinetic energies. In JEE combinations, distinguish a velocity selector from an accelerating region and a magnetic analyzer, then apply the correct equation to each stage rather than treating all three as one device."
    ], formula: "Perpendicular crossed fields with opposing forces: v=E/B" },
  ],
  examples: [
    { question: "An upward 5 A segment extends from y=-0.30 to +0.30 m. Find its field at x=0.40 m, y=0.", steps: ["Source distance at each end is sqrt(0.30^2+0.40^2)=0.50 m.", "Use the symmetric finite-wire formula with mu0/(4 pi)=10^-7.", "B=2 x 10^-7 x 5 x 0.30/(0.40 x 0.50)=1.5 x 10^-6 T.", "Upward current crossed with displacement toward the right gives field into the page."], answer: "1.5 microT into the page." },
    { question: "Long wires at x=0 and 0.30 m carry 3 A and 6 A out of the page. Where does their field cancel?", steps: ["Fields oppose between the wires, not outside.", "Equate magnitudes: 3/x=6/(0.30-x).", "0.90-3x=6x gives x=0.10 m.", "Distances are 0.10 and 0.20 m, giving equal current-to-distance ratios."], answer: "x=0.10 m, between the wires." },
    { question: "Find helix radius and pitch for m=2 x 10^-27 kg, |q|=10^-19 C, B=0.20 T, v_perp=2 x 10^5 m/s and v_parallel=10^5 m/s.", steps: ["Radius uses perpendicular speed: r=m v_perp/(|q|B)=0.020 m.", "Period is 2 pi m/(|q|B)=6.283 x 10^-7 s.", "Pitch is v_parallel T=0.06283 m.", "The total speed stays constant; parallel velocity is unchanged."], answer: "Radius 0.020 m; pitch approximately 0.06283 m." },
  ],
  quiz: [
    { question: "What field does the stated finite 5 A segment produce at P?", options: ["2.5 microT out of page", "1.5 microT into page", "2.5 microT into page", "1.5 microT out of page"], answer: 1, explanation: "The finite factor is 0.30/0.50=0.6 of the infinite-wire magnitude, and the current cross product gives field into the page." },
    { question: "For the stated same-direction 3 A and 6 A wires, where is cancellation?", options: ["At x=0.20 m", "Outside on the right", "At x=0.10 m", "At x=0.15 m"], answer: 2, explanation: "Between the wires, opposing field magnitudes obey 3/x=6/(0.30-x), giving x=0.10 m closer to the weaker current." },
    { question: "A particle enters a static uniform magnetic field with no electric field. What happens to kinetic energy?", options: ["It stays constant", "It increases each turn", "It decreases each turn", "It becomes zero"], answer: 0, explanation: "Magnetic force is perpendicular to velocity, so its power is zero. It changes direction without changing the particle's kinetic energy." },
    { question: "At equal charge magnitude, accelerating voltage and B, doubling particle mass changes radius by what factor?", options: ["2", "1/2", "1", "sqrt(2)"], answer: 3, explanation: "Combining electric acceleration energy with magnetic circular motion gives radius proportional to sqrt(m), not directly to mass." },
    { question: "A perpendicular crossed-field selector has E=4 x 10^4 V/m and B=0.20 T. What speed passes undeflected in the specified direction?", options: ["8 x 10^3 m/s", "2 x 10^5 m/s", "4 x 10^4 m/s", "8 x 10^4 m/s"], answer: 1, explanation: "Opposing electric and magnetic forces cancel at v=E/B=2 x 10^5 m/s. This assumes the stated perpendicular entry direction." },
  ],
  sources: [
    { title: "OpenStax: magnetic field due to a straight wire", url: "https://openstax.org/books/university-physics-volume-2/pages/12-2-magnetic-field-due-to-a-thin-straight-wire" },
    { title: "OpenStax: charged-particle motion", url: "https://openstax.org/books/university-physics-volume-2/pages/11-3-motion-of-a-charged-particle-in-a-magnetic-field" },
    { title: "Official JEE Main 2026 syllabus", url: "https://jeemain.nta.nic.in/document/syllabus-2026/" },
  ],
};
