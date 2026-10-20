import type { StudyLesson } from "./course";

export const gravityApplicationsLesson: StudyLesson = {
  id: "gravity-applications", subject: "Physics", unit: 6,
  title: "Gravitation: from Earth's interior to satellite orbits",
  summary: "Altitude and depth, potential, escape speed, circular satellites and Kepler's laws.",
  prerequisites: "Inverse-square forces, centripetal acceleration, energy conservation and simple ratios.",
  remaining: "Core Unit 6 applications are taught here alongside the existing gravity recording and a concise two-chapter Marin applications class. More mixed problems, extended-body fields and transfer-orbit practice remain. The uniform-density interior model is an approximation, not a measured Earth profile.",
  sections: [
    { title: "Measure radius from the centre, not the ground", paragraphs: [
      "Start with a question: does doubling a satellite's height halve gravity? Not generally. Newton's universal law gives attraction of magnitude GMm/r^2 between point masses separated by r. Outside a spherical planet, its field acts as though the mass were at its centre. Divide the force by the small test mass to obtain g = GM/r^2. The radius r is measured from the centre. If the planet has radius R and the height is h, use r = R + h, never just h.",
      "Let g0 = GM/R^2 be surface gravity, ignoring rotation. At height h, the ratio g/g0 is [R/(R+h)]^2. Try h = R before reading the answer. The centre distance is 2R, so gravity is g0/4, not g0/2. For h much smaller than R, expanding (1+h/R)^-2 gives approximately g0(1-2h/R). That shortcut is a small-height approximation; it fails at h = R.",
      "Inside a uniform-density spherical planet, outer spherical shells produce zero net field at an interior point. Only the mass enclosed within radius r contributes. That mass scales as r^3, so GM_enclosed/r^2 scales as r. Thus g = g0 r/R, or g = g0(1-d/R) at depth d. At the centre the field is zero. Real Earth is not uniform in density, and rotation also affects apparent weight. State the ideal model whenever using the straight-line interior graph."
    ], formula: "Outside: g/g0 = [R/(R+h)]^2; uniform interior: g/g0 = 1-d/R" },
    { title: "A negative potential is a useful reference choice", paragraphs: [
      "Choose gravitational potential zero infinitely far from an isolated mass. Outside a spherical planet, potential per unit test mass is V = -GM/r; a small mass m has potential energy U = mV. The negative sign means energy must be supplied to separate the masses to infinity. Potential is a scalar measured in joules per kilogram. Field is a vector measured in newtons per kilogram. Contributions to potential add algebraically; contributions to field must be added as vectors.",
      "Imagine two equal masses at equal distances on opposite sides of a point. Their fields cancel there, but their potentials add to a negative value. Zero field does not imply zero potential. Moving from radius R to 2R outside one planet changes U from -GMm/R to -GMm/(2R). The increase is +GMm/(2R). Gravity does the negative of this work; a slow external lift supplies positive work, neglecting any change in kinetic energy.",
      "The constant-g formula mgh is a local approximation near the surface, not a formula for arbitrary altitude. Inside the same ideal uniform sphere, integrating the inward field gives V(r) = -GM(3R^2-r^2)/(2R^3). It joins -GM/R at the surface and reaches -3GM/(2R) at the centre. The centre field is zero, yet the potential is most negative. Potential slopes and values answer different questions."
    ], formula: "V = -GM/r; U = -GMm/r; uniform interior: V = -GM(3R^2-r^2)/(2R^3)" },
    { title: "Escape speed comes from an energy balance", paragraphs: [
      "Escape means reaching arbitrarily large distance without later returning, in the isolated planet model. The minimum launch speed leaves zero speed at infinity. Equate the initial kinetic plus potential energy to zero: mv_escape^2/2 - GMm/r = 0. The mass m cancels. Therefore v_escape = sqrt(2GM/r). The result assumes no air resistance, no later propulsion and neglects planetary rotation and other gravitating bodies.",
      "At the surface, replace GM by g0R^2 to obtain sqrt(2g0R). Use g0 = 10 m/s^2 and R = 6.4 million metres as stated rounded inputs. The result is sqrt(128 million), about 11.3 kilometres per second. Convert the radius to metres before substituting. Doubling the launch radius reduces the escape speed by a factor sqrt(2), not a factor two.",
      "For a radial launch below escape speed, energy still predicts the greatest radius. Launch from R at half the surface escape speed. Initial kinetic energy is GMm/(4R), so total energy is -3GMm/(4R). At the turning point the radial speed is zero, giving -GMm/r_max = -3GMm/(4R). Hence r_max = 4R/3 and height is R/3. A nonradial bound orbit can have a turning radius with nonzero tangential speed; do not reuse the zero-speed assumption there."
    ], formula: "v_escape = sqrt(2GM/r); surface v_escape = sqrt(2g0R)" },
    { title: "An orbit is continuous free fall", paragraphs: [
      "A satellite is not held up because gravity disappears. In a circular orbit, gravity supplies the centripetal force: GMm/r^2 = mv^2/r. This gives orbital speed sqrt(GM/r), and circumference divided by speed gives period 2pi sqrt(r^3/(GM)). These formulas assume a spherical dominant central body and negligible satellite mass. Use centre distance r = R+h. Larger circular orbits have lower speeds and longer periods.",
      "Potential energy is -GMm/r. Substituting the circular speed into kinetic energy gives +GMm/(2r), so total energy is -GMm/(2r). A higher circular orbit has a less negative total energy although its kinetic energy is smaller. Energy must be added overall to raise the orbit. The difference between two circular-orbit energies is not by itself a launch plan or a single-burn speed requirement.",
      "An astronaut and spacecraft fall together. A freely floating astronaut has nearly zero support force, so a scale reads approximately zero, despite substantial gravitational force. For a geostationary orbit, require a circular equatorial orbit moving in Earth's rotation direction with the sidereal rotation period, approximately 86164 s. Merely having a one-day period does not guarantee a fixed position above the equator. In JEE ratio problems around the same planet, mass and G cancel; if radius increases fourfold, period increases eightfold."
    ], formula: "v_orbit = sqrt(GM/r); T = 2pi sqrt(r^3/(GM)); E_circular = -GMm/(2r)" },
    { title: "Kepler connects orbit shape, speed and period", paragraphs: [
      "Kepler's first law describes bound planetary orbits as ellipses with the attracting Sun at one focus, not at the centre. A circle is the zero-eccentricity special case. The second law says that the line joining the planet to the Sun sweeps equal areas in equal times. A central gravitational force has zero torque about the attracting centre, so angular momentum is conserved. The areal rate is L/(2m), explaining why it remains constant.",
      "At the nearest and farthest points of an ellipse, velocity is perpendicular to the radius. Equal angular momentum then gives r_near v_near = r_far v_far. Suppose the farthest distance is three times the nearest distance. The nearest-point speed is three times the farthest-point speed. The planet moves faster near the Sun; equal areas do not mean equal distances travelled in equal times.",
      "Kepler's third law gives T^2 proportional to a^3 for negligible-mass bodies orbiting the same central mass, where a is the ellipse's semi-major axis. If a doubles, the period multiplies by 2sqrt(2). For circular orbits, a equals r. For an elliptical orbit, total energy is -GMm/(2a), not -GMm/(2r) at every instant. With periapsis R and apoapsis 3R, a = 2R. These results describe the ideal two-body problem; perturbations and finite companion mass require a more general model."
    ], formula: "Areal rate = L/(2m); T^2 = 4pi^2 a^3/(GM); E_ellipse = -GMm/(2a)" },
  ],
  examples: [
    { question: "Where does gravity equal g0/4 above and below the surface of a uniform spherical planet?", steps: ["Outside, set [R/(R+h)]^2 = 1/4. The positive centre distance is 2R, so h = R.", "Inside, set 1-d/R = 1/4, giving d = 3R/4.", "These use different laws. The interior result requires uniform density; both neglect rotation."], answer: "Height R; depth 3R/4 in the uniform-density model." },
    { question: "Compare circular satellites of equal mass at radii r and 4r around the same planet.", steps: ["Orbital speed scales as r^-1/2: v_outer/v_inner = 1/2.", "Period scales as r^3/2: T_outer/T_inner = 8.", "E_inner = -GMm/(2r); E_outer = -GMm/(8r).", "The energy increase is E_outer-E_inner = +3GMm/(8r), even though speed decreases."], answer: "Half the speed, eight times the period, energy increase +3GMm/(8r)." },
    { question: "A bound elliptical orbit has nearest radius R and farthest radius 3R. Compare endpoint speeds, period and energy with a circular orbit of radius R.", steps: ["Angular momentum gives v_near/v_far = 3.", "The semi-major axis is (R+3R)/2 = 2R.", "Relative period is (2R/R)^3/2 = 2sqrt(2).", "Elliptical energy is -GMm/(4R), compared with -GMm/(2R) for the circular orbit. Its magnitude is half."], answer: "Endpoint speed ratio 3; period ratio 2sqrt(2); energy -GMm/(4R)." },
  ],
  quiz: [
    { question: "At height R above a spherical planet of radius R, gravity is:", options: ["g0/2", "g0/4", "g0", "Zero"], answer: 1, explanation: "The centre distance is R+R = 2R. The inverse-square law gives g0(R/(2R))^2 = g0/4." },
    { question: "At depth R/2 in a uniform-density spherical planet, gravity is:", options: ["g0/4", "2g0", "g0/2", "Zero"], answer: 2, explanation: "Inside the uniform sphere, g/g0 = 1-d/R = 1/2. This is not the exterior inverse-square formula." },
    { question: "Escape speed divided by circular orbital speed at the same exterior radius is:", options: ["sqrt(2)", "2", "1/sqrt(2)", "1"], answer: 0, explanation: "Divide sqrt(2GM/r) by sqrt(GM/r). The ratio sqrt(2) is independent of satellite mass in this ideal model." },
    { question: "For circular orbits around the same planet, increasing radius from r to 4r changes the period by:", options: ["2 times", "4 times", "16 times", "8 times"], answer: 3, explanation: "Kepler's period scaling gives T proportional to r^(3/2), hence 4^(3/2) = 8, not the radius ratio itself." },
    { question: "At the centre of an ideal uniform-density sphere, with potential zero at infinity:", options: ["Field and potential are both zero", "Field is zero; potential is negative", "Field is infinite; potential is zero", "Field and potential are positive"], answer: 1, explanation: "Symmetry makes field zero. Potential remains -3GM/(2R); zero field does not determine the potential reference value." },
  ],
  sources: [
    { title: "Official NTA JEE Main 2026 syllabus: Physics Unit 6", url: "https://jeemain.nta.nic.in/document/syllabus-2026/" },
    { title: "OpenStax: Gravitation near Earth's surface", url: "https://openstax.org/books/university-physics-volume-1/pages/13-2-gravitation-near-earths-surface" },
    { title: "OpenStax: Satellite orbits and energy", url: "https://openstax.org/books/university-physics-volume-1/pages/13-4-satellite-orbits-and-energy" },
    { title: "OpenStax: Kepler's laws", url: "https://openstax.org/books/university-physics-volume-1/pages/13-5-keplers-laws-of-planetary-motion" },
  ],
};

export const gravityApplicationsNarration = {
  version: 1, voice: "marin", status: "recorded-condensed-version", recordingId: "gravity-applications",
  voiceInstructions: "Warm, natural female General American English teacher. Conversational, welcoming and lightly playful. Keep scientific terms precise. Slow down for equations and units, and pause briefly at thinking questions. Do not add words or laughter absent from the script.",
  title: gravityApplicationsLesson.title,
  chapters: gravityApplicationsLesson.sections.map(section => ({ title: section.title, formula: section.formula, script: section.paragraphs.join(" ") })),
};
