import type { StudyLesson } from "./course";

export const nextStudyLessons: StudyLesson[] = [
  {
    id: "newtons-laws", subject: "Physics", unit: 3,
    title: "Newton's laws: draw the forces before the equation",
    summary: "Free-body diagrams, net force, friction and inclined planes.",
    prerequisites: "Acceleration, signed components and elementary sine/cosine.",
    remaining: "Connected bodies, impulse, momentum conservation and circular-motion applications still need further lessons. This is introductory coverage, not the complete unit.",
    sections: [
      { title: "Choose one body and an inertial frame", paragraphs: [
        "A motion problem becomes a force problem when we ask why velocity changes. First choose the body being studied. Then draw only the external forces acting on that body. For a box on a floor, these may include its weight, the floor's normal reaction, an applied pull and friction. Do not add a separate force called motion or acceleration.",
        "Newton's laws take their familiar form in an inertial frame: a frame in which a force-free body has constant velocity. For ordinary classroom problems we usually treat the ground as approximately inertial. If net force is zero, the body can remain at rest or move with constant velocity; zero net force does not mean zero velocity."
      ] },
      { title: "Add forces before dividing by mass", paragraphs: [
        "For constant mass, the vector sum of external forces equals mass times acceleration. In a chosen x direction, add signed force components to obtain the net force, then divide by mass. A 14 N rightward pull opposed by 4 N friction on a 5 kg box gives a = (14 - 4)/5 = 2 m/s² to the right.",
        "Treat perpendicular directions separately. On a horizontal floor with no vertical acceleration and no other vertical forces, N - mg = 0. This is why N equals mg in that particular case. It is not a universal identity: an angled pull, an incline or a vertically accelerating lift can change the normal force."
      ], formula: "ΣF(x) = ma(x);  ΣF(y) = ma(y)" },
      { title: "Third-law forces act on different bodies", paragraphs: [
        "When your hand pushes a box, the box pushes your hand with equal magnitude and opposite direction. Those two forces form a third-law pair, but they belong on different free-body diagrams. They cannot cancel each other in the net force calculated for the box alone.",
        "A book's weight and the table's upward normal force are not a third-law pair, even if they balance. Weight is Earth's gravitational pull on the book; its partner is the book's pull on Earth. The normal force's partner is the book's contact force on the table. Ask who exerts each force and on what body."
      ] },
      { title: "Static friction adjusts; sliding friction has a model", paragraphs: [
        "For dry contact in the elementary model, static friction supplies the force needed to prevent slipping, up to a maximum μs N. If the required friction is below that maximum, use the required value, not the maximum. A 3 N horizontal push may be balanced by 3 N static friction even when the limiting value is 10 N.",
        "After sliding begins, the usual model gives kinetic friction magnitude μk N. Friction opposes relative slipping, or the tendency to slip, at the contact. It does not always oppose the centre-of-mass motion; for example, static friction can accelerate a walking person forward. Decide the contact's slipping tendency before assigning a direction."
      ], formula: "0 ≤ |f(static)| ≤ μs N;  |f(kinetic)| = μk N" },
      { title: "Rotate your axes for a slope", paragraphs: [
        "For a fixed incline at angle θ to the horizontal, choose one axis down the slope and one perpendicular to it. Weight resolves into mg sin θ down the slope and mg cos θ into the slope. With no other perpendicular forces and no perpendicular acceleration, N = mg cos θ.",
        "A frictionless sliding block therefore has a = g sin θ down the incline. If it slides downward with kinetic friction, the net downslope force is mg sin θ - μk mg cos θ. Check the assumed motion and units before using the result. A negative value means acceleration is upslope; it does not by itself mean the block is already moving uphill."
      ] },
    ],
    examples: [
      { question: "A 4 kg block initially rests on a horizontal floor. μs = 0.5, μk = 0.3, and g = 10 m/s². Find friction and acceleration for a horizontal 12 N push.", steps: ["N = mg = 40 N because the vertical acceleration is zero.", "Maximum static friction is 0.5 × 40 = 20 N.", "The 12 N push can be balanced without exceeding 20 N. Actual friction is 12 N opposite the push.", "Net horizontal force is zero, so acceleration is zero."], answer: "Static friction 12 N; acceleration 0." },
      { question: "For the same block, increase the push to 28 N. Find acceleration once the block slides.", steps: ["The push exceeds the 20 N limiting static friction, so the initial rest condition cannot persist.", "During sliding, friction is μk N = 0.3 × 40 = 12 N.", "Net horizontal force is 28 - 12 = 16 N.", "a = 16/4 = 4 m/s² in the push direction."], answer: "4 m/s²." },
      { question: "A 2 kg block slides down a frictionless 30° incline. Take g = 10 m/s². Find acceleration and normal force.", steps: ["Downslope force = mg sin 30° = 2 × 10 × 0.5 = 10 N.", "Acceleration = 10/2 = 5 m/s² down the slope.", "Normal force = mg cos 30° = 20 × √3/2 = 10√3 N.", "The normal force is perpendicular to the slope, not vertical."], answer: "a = 5 m/s²; N = 10√3 N (about 17.3 N)." },
    ],
    quiz: [
      { question: "A 3 kg body has horizontal forces 15 N right and 6 N left. What is its acceleration?", options: ["7 m/s² right", "3 m/s² right", "3 m/s² left", "5 m/s² right"], answer: 1, explanation: "Net force is 15 - 6 = 9 N rightward. Dividing by the 3 kg mass gives 3 m/s², not the result of adding the magnitudes." },
      { question: "A body has zero net force in an inertial frame. Which statement must hold?", options: ["Its velocity is zero", "Its acceleration is zero", "No forces act on it", "Its mass is zero"], answer: 1, explanation: "For non-zero constant mass, ΣF = ma gives zero acceleration. Forces can balance while the body continues at a non-zero constant velocity." },
      { question: "A resting box is pushed horizontally with 4 N. Its maximum static friction is 10 N. What friction acts if it stays at rest?", options: ["0 N", "4 N", "10 N", "14 N"], answer: 1, explanation: "Static friction adjusts to the required 4 N in the opposite direction. The 10 N value is an upper limit, not the friction in every situation." },
      { question: "Which forces form a third-law pair?", options: ["Weight and normal force on one book", "Two pulls on one rope end", "Earth pulling a book and the book pulling Earth", "Net force and acceleration"], answer: 2, explanation: "The pair belongs to one interaction between two bodies. Each force acts on the other body; balancing forces on a single body need not be a third-law pair." },
      { question: "On a frictionless 30° incline, with g = 10 m/s², what is a block's downslope acceleration?", options: ["10 m/s²", "5 m/s²", "5√3 m/s²", "0"], answer: 1, explanation: "The downslope component of weight is mg sin 30°. Dividing by mass gives g sin 30° = 10 × 0.5 = 5 m/s²." },
    ],
    sources: [
      { title: "OpenStax: Newton's second law", url: "https://openstax.org/books/university-physics-volume-1/pages/5-3-newtons-second-law" },
      { title: "OpenStax: friction", url: "https://openstax.org/books/university-physics-volume-1/pages/6-2-friction" },
    ],
  },
  {
    id: "atomic-structure", subject: "Chemistry", unit: 2,
    title: "Atomic structure: shells, orbitals and electron arrangements",
    summary: "Particle counts, energy levels, quantum numbers and orbital filling.",
    prerequisites: "Atomic symbols, the mole concept and simple integer arithmetic.",
    remaining: "Spectral calculations, the Bohr-model derivations, wave-particle relations and uncertainty calculations remain to complete this unit.",
    sections: [
      { title: "Count particles before discussing orbitals", paragraphs: [
        "The atomic number Z counts protons and determines the element. The mass number A counts protons plus neutrons in a specified isotope. Therefore neutrons = A - Z. A neutral atom has Z electrons, while an ion's electron count changes with its charge. Removing electrons makes a positive ion; adding electrons makes a negative ion.",
        "For example, sodium-23 has Z = 11, so it contains 11 protons and 12 neutrons. Its Na+ ion contains 10 electrons. Isotopes have the same proton number but different neutron numbers. Do not confuse mass number, an integer for one isotope, with the relative atomic mass reported as an isotope-weighted average."
      ] },
      { title: "Energy levels replace arbitrary electron energies", paragraphs: [
        "Atomic electrons do not take every possible bound-state energy. An electron absorbs energy to reach a higher allowed level and releases energy when moving to a lower one. For a photon involved in a transition, the photon energy is the positive magnitude of the difference between the atomic levels.",
        "The simple Bohr expression E(n) = -13.6 Z²/n² eV describes the non-relativistic hydrogen-like, one-electron model. It must not be applied directly to a many-electron neutral atom. The negative sign means the electron is bound relative to the separated electron and nucleus at zero energy. Larger n corresponds to less negative energy."
      ], formula: "Photon energy = |E(final) - E(initial)|" },
      { title: "An orbital is not a miniature planetary track", paragraphs: [
        "An orbital is a quantum state described by a wavefunction, not a drawn circular path followed by an electron. The probability density is associated with the squared magnitude of the wavefunction. At this stage, use orbital pictures as descriptions of spatial probability, not as hard-edged containers.",
        "The principal quantum number n takes positive integers. For a given n, the angular-momentum quantum number l can be 0 through n - 1. The familiar labels s, p, d and f mean l = 0, 1, 2 and 3. Thus a 2d subshell is impossible: n = 2 allows only l = 0 or 1."
      ] },
      { title: "Count orbitals and electrons separately", paragraphs: [
        "For a specified l, the magnetic quantum number m(l) takes integer values from -l to +l, giving 2l + 1 orbitals. A p subshell has three orbitals, while a d subshell has five. Each orbital can hold at most two electrons with opposite spin quantum numbers, +1/2 and -1/2.",
        "Pauli's exclusion principle forbids two electrons in the same atom from having all four quantum numbers identical. Combining the orbital count with the two-electron limit gives subshell capacities s: 2, p: 6, d: 10 and f: 14. Summing across a shell gives a maximum of 2n² electrons; this is capacity, not a claim that shells always fill completely in n order."
      ], formula: "Orbitals per subshell = 2l + 1; maximum electrons = 2(2l + 1)" },
      { title: "Fill the lowest states, then check the total", paragraphs: [
        "For the basic ground-state configurations used here, begin 1s, 2s, 2p, 3s, 3p and 4s. Aufbau filling uses lower-energy available states first. Hund's rule says equal-energy orbitals within a subshell are occupied singly with parallel spins before pairing. For nitrogen, 1s² 2s² 2p³ leaves one electron in each of the three 2p orbitals.",
        "For oxygen, 1s² 2s² 2p⁴ gives one pair and two unpaired electrons in 2p. Count every superscript and verify it matches the required electron total. Transition-metal configurations have important exceptions, and their ionization ordering needs separate treatment. Do not extend a memorized filling arrow into an unconditional rule for all atoms and ions."
      ] },
    ],
    examples: [
      { question: "An aluminium-27 ion is Al3+ with Z = 13. Find its proton, neutron and electron counts.", steps: ["Protons = Z = 13.", "Neutrons = A - Z = 27 - 13 = 14.", "A 3+ charge means three electrons have been removed: 13 - 3 = 10.", "The nucleus is unchanged by this ordinary ionization."], answer: "13 protons, 14 neutrons and 10 electrons." },
      { question: "For the 3d subshell, list allowed m(l) values and find the maximum electron count.", steps: ["The label d means l = 2, allowed because n = 3 permits l up to 2.", "m(l) = -2, -1, 0, +1, +2: five orbitals.", "Each orbital holds at most two electrons, so capacity is 5 × 2 = 10."], answer: "Five orbitals; maximum 10 electrons." },
      { question: "In the Bohr model of hydrogen, an electron drops from n = 3 to n = 2. Find the emitted photon energy using 13.6 eV.", steps: ["For hydrogen Z = 1: E3 = -13.6/9 eV and E2 = -13.6/4 eV.", "The atom's energy decreases. The emitted photon has energy E3 - E2.", "13.6 × (1/4 - 1/9) = 13.6 × 5/36 ≈ 1.89 eV.", "The photon energy is positive even though both bound-state energies are negative."], answer: "Approximately 1.89 eV." },
    ],
    quiz: [
      { question: "For magnesium-24, Z = 12. How many electrons are in Mg2+?", options: ["10", "12", "14", "24"], answer: 0, explanation: "A neutral magnesium atom has 12 electrons. A 2+ ion has lost two, leaving 10; its proton count remains 12." },
      { question: "Which subshell label is impossible?", options: ["1s", "2p", "2d", "3d"], answer: 2, explanation: "For n = 2, l can only be 0 or 1. A d subshell requires l = 2, so it first becomes possible when n = 3." },
      { question: "What is the maximum number of electrons in a p subshell?", options: ["2", "3", "6", "10"], answer: 2, explanation: "For p, l = 1, giving three orbitals. Each holds at most two opposite-spin electrons, so the maximum is six." },
      { question: "How many unpaired electrons are in the ground-state 2p subshell of nitrogen (Z = 7)?", options: ["0", "1", "2", "3"], answer: 3, explanation: "Nitrogen is 1s² 2s² 2p³. Hund's rule places one electron in each of the three equal-energy 2p orbitals before pairing." },
      { question: "In a hydrogen-like Bohr model, an electron falls to a lower energy level. What occurs?", options: ["A photon is absorbed", "A photon is emitted", "The proton number changes", "Photon energy is negative"], answer: 1, explanation: "The atom loses energy and emits a photon carrying the positive energy difference. This electronic transition does not change the nucleus." },
    ],
    sources: [
      { title: "OpenStax: quantum theory", url: "https://openstax.org/books/chemistry-2e/pages/6-3-development-of-quantum-theory" },
      { title: "OpenStax: electron configurations", url: "https://openstax.org/books/chemistry-atoms-first-2e/pages/3-4-electronic-structure-of-atoms-electron-configurations" },
    ],
  },
  {
    id: "quadratic-equations", subject: "Mathematics", unit: 2,
    title: "Quadratics: roots, graphs and parameter checks",
    summary: "Factoring, the discriminant, root relationships and sign intervals.",
    prerequisites: "Algebraic expansion, square roots, inequalities and function notation.",
    remaining: "Complex-number algebra, Argand diagrams and advanced parameter/root-location problems remain to complete this unit.",
    sections: [
      { title: "Put the equation into standard form", paragraphs: [
        "A quadratic equation is ax² + bx + c = 0 with a not equal to zero. Move every term to one side before identifying a, b and c. The signs belong to the coefficients: in 2x² - 5x + 2 = 0, b is -5, not 5. A root is a value of x that makes the entire expression zero.",
        "The zero-product property works when a product equals zero. If (x - 2)(x + 3) = 0, at least one factor must be zero, giving roots 2 and -3. It does not let us set each factor to zero when their product equals 6. Always finish the rearrangement before using factorization."
      ] },
      { title: "Derive a method that does not depend on guessing factors", paragraphs: [
        "Divide the standard equation by a, move c/a to the other side, then add (b/2a)² to both sides. The left becomes (x + b/2a)². Taking both square-root signs and rearranging produces the quadratic formula. The ± sign is essential: it represents both possible square roots.",
        "For real coefficients, define D = b² - 4ac. Positive D gives two distinct real roots, zero D gives a repeated real root, and negative D gives no real roots. Negative D still gives two complex conjugate roots in the complex number system. State which number system the question allows before saying there are no solutions."
      ], formula: "x = (-b ± √(b² - 4ac)) / (2a)" },
      { title: "Use the roots without calculating each root", paragraphs: [
        "If the roots are α and β, expand a(x - α)(x - β). Comparing coefficients with ax² + bx + c gives α + β = -b/a and αβ = c/a. These relations remain valid for repeated or complex roots. They often avoid unnecessary square-root arithmetic.",
        "For a monic equation with sum S and product P of roots, write x² - Sx + P = 0. To find α² + β², use (α + β)² - 2αβ. Do not replace a sum of squares by the square of a sum: the latter includes an extra cross-term."
      ], formula: "α + β = -b/a;  αβ = c/a" },
      { title: "Connect roots to a graph and an inequality", paragraphs: [
        "The graph of y = ax² + bx + c is a parabola. It opens upward when a > 0 and downward when a < 0. The roots are its x-axis crossings or tangencies. Its vertex has x-coordinate -b/(2a), with y found by substitution. A repeated root corresponds to the vertex touching the x-axis.",
        "For two distinct real roots r1 < r2 and a > 0, the expression is positive outside the roots and negative between them. Check a sample value in each interval or inspect the signs of the factors. Reverse those signs when a < 0. Include the roots for ≤ or ≥, but exclude them for strict inequalities."
      ] },
      { title: "Check exceptional parameter values first", paragraphs: [
        "A parameter can make the leading coefficient zero. For example, (k - 1)x² + 2x + 1 = 0 is not quadratic at k = 1; it becomes the linear equation 2x + 1 = 0. Handle that case separately before applying a discriminant condition intended for a quadratic.",
        "Before accepting an answer, substitute it into the original equation and check any domain exclusions introduced by denominators or square roots. Squaring may create extra candidates, while division by an expression that could be zero may discard a valid one. A formula is a tool inside a set of assumptions, not a replacement for checking those assumptions."
      ] },
    ],
    examples: [
      { question: "Solve 2x² - 5x + 2 = 0 and verify the root sum and product.", steps: ["Factor the expression: (2x - 1)(x - 2) = 0.", "Roots are x = 1/2 and x = 2.", "Their sum is 5/2, matching -b/a = 5/2.", "Their product is 1, matching c/a = 2/2."], answer: "x = 1/2 or 2." },
      { question: "For real k, when does x² - 4x + k = 0 have real roots?", steps: ["The leading coefficient is always 1, so the equation remains quadratic for every k.", "D = (-4)² - 4 × 1 × k = 16 - 4k.", "Real roots require D ≥ 0, so k ≤ 4.", "At k = 4 the repeated root is x = 2; for k < 4 the real roots are distinct."], answer: "k ≤ 4." },
      { question: "Solve x² - x - 6 ≤ 0 over the real numbers.", steps: ["Factor: (x - 3)(x + 2) ≤ 0.", "The roots are -2 and 3. The leading coefficient is positive.", "Between the roots the factors have opposite signs; outside, their product is positive.", "Include both roots because equality is allowed."], answer: "x belongs to [-2, 3]." },
    ],
    quiz: [
      { question: "What are the roots of x² - 5x + 6 = 0?", options: ["-2 and -3", "2 and 3", "1 and 6", "-1 and -6"], answer: 1, explanation: "The factorization is (x - 2)(x - 3). The roots sum to 5 and multiply to 6, as required by the coefficients." },
      { question: "What is the discriminant of 2x² + 3x + 5 = 0?", options: ["49", "-31", "31", "-49"], answer: 1, explanation: "D = b² - 4ac = 3² - 4 × 2 × 5 = 9 - 40 = -31. The equation has no real roots, but it has complex roots." },
      { question: "If α and β are roots of x² - 7x + 10 = 0, what is α² + β²?", options: ["49", "20", "29", "69"], answer: 2, explanation: "The sum is 7 and product is 10. Thus α² + β² = (α + β)² - 2αβ = 49 - 20 = 29." },
      { question: "Solve (x - 1)(x - 4) < 0 over the reals.", options: ["x < 1 or x > 4", "1 < x < 4", "1 ≤ x ≤ 4", "All real x"], answer: 1, explanation: "The product is negative only between the two distinct roots. The strict inequality excludes the roots themselves." },
      { question: "When k = 1, what does (k - 1)x² + 2x + 1 = 0 become?", options: ["A quadratic with a double root", "An equation with no solution", "The linear equation 2x + 1 = 0", "An identity true for every x"], answer: 2, explanation: "The x² coefficient vanishes at k = 1. The remaining equation is linear and has x = -1/2; the quadratic formula is not applicable with a = 0." },
    ],
    sources: [{ title: "OpenStax: quadratic equations", url: "https://openstax.org/books/college-algebra-2e/pages/2-5-quadratic-equations" }],
  },
];
