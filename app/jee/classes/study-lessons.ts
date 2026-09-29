import type { StudyLesson } from "./course";

export const studyLessons: StudyLesson[] = [
  {
    id: "straight-line-motion", subject: "Physics", unit: 2,
    title: "Straight-line motion: from a journey to an equation",
    summary: "Displacement, velocity, acceleration and signed motion graphs.",
    prerequisites: "SI units, signed numbers and the area of a triangle.",
    remaining: "Relative motion, variable-acceleration calculus, projectiles and circular motion remain separate lessons. This is not the complete kinematics unit.",
    sections: [
      { title: "Choose a direction before calculating", paragraphs: [
        "Imagine a bus travelling along a straight road. Put an origin at the bus stop and call motion to the right positive. Position x tells us where the bus is relative to that origin. It can be negative without anything being wrong: negative position simply means left of the stop.",
        "Displacement is final position minus initial position. Distance is the total length travelled, including any return journey. A bus that moves 80 m right and then 30 m left travels 110 m, but its displacement is +50 m. Write both answers before moving on; they describe different things."
      ], formula: "Displacement = x(final) - x(initial)" },
      { title: "Speed and velocity answer different questions", paragraphs: [
        "Average speed divides the whole distance by the whole elapsed time. Average velocity uses displacement instead. For the 110 m journey above lasting 10 s, average speed is 11 m/s while average velocity is +5 m/s. Do not average two speeds unless their time intervals are equal.",
        "Instantaneous velocity describes motion at one moment. On a position-time graph it is the slope of the tangent. A horizontal line means the object stays at one position. A negative slope means motion in the chosen negative direction, not necessarily slowing down."
      ], formula: "Average velocity = displacement / elapsed time" },
      { title: "Acceleration changes velocity, not just speed", paragraphs: [
        "Acceleration is the rate at which velocity changes. If velocity rises from +2 to +8 m/s in 3 s, average acceleration is +2 m/s². A negative acceleration is not automatically deceleration: an object moving left with increasingly negative velocity is speeding up.",
        "Compare the signs of velocity and acceleration. Equal signs mean speed increases; opposite signs mean speed decreases until the object stops or changes direction. At a turning instant velocity can be zero while acceleration remains non-zero."
      ], formula: "Average acceleration = (v - u) / t" },
      { title: "Derive the constant-acceleration equations", paragraphs: [
        "When acceleration stays constant, velocity changes by the same amount in each equal time interval. Therefore v = u + at. The velocity-time graph is a straight line. Its signed area is displacement, and its trapezium area is (u + v)t/2.",
        "Substitute v = u + at into that area to get displacement s = ut + at²/2. Eliminating time gives v² = u² + 2as. These equations require constant acceleration over the chosen interval. If a problem switches from accelerating to braking, solve those intervals separately."
      ], formula: "v = u + at;  s = ut + at²/2;  v² = u² + 2as" },
      { title: "Read the sign of an area", paragraphs: [
        "On a velocity-time graph, area above the time axis contributes positive displacement and area below contributes negative displacement. Adding signed areas gives displacement. Adding their magnitudes gives distance. A graph crossing the axis must be split at the crossing before finding distance.",
        "For a falling object, choose upward positive and acceleration is -g. Near Earth's surface, ignoring air resistance, g is approximately 9.8 m/s². Use 10 m/s² only when the problem permits it. State your sign convention and the assumed value before substituting numbers."
      ] },
    ],
    examples: [
      { question: "A cart has u = +3 m/s and constant a = +2 m/s² for 4 s. Find final velocity and displacement.", steps: ["The positive directions already agree. List u = 3, a = 2, t = 4 in SI units.", "v = 3 + 2 × 4 = 11 m/s.", "s = 3 × 4 + (1/2) × 2 × 4² = 12 + 16 = 28 m.", "Check using the graph: average velocity (3 + 11)/2 = 7 m/s; 7 × 4 = 28 m."], answer: "v = +11 m/s; s = +28 m." },
      { question: "A vehicle moves at +20 m/s and brakes with constant acceleration -5 m/s². How far does it travel before stopping?", steps: ["At the stop, v = 0. Do not substitute a positive braking acceleration.", "0 = 20 - 5t, so stopping time is 4 s.", "s = (20 + 0) × 4 / 2 = 40 m.", "This calculation ends at the stop. Continuing the same acceleration beyond 4 s would describe reverse motion, not a vehicle simply remaining parked."], answer: "40 m, reached after 4 s." },
      { question: "Velocity changes linearly from +6 m/s at t = 0 to -2 m/s at t = 4 s. Find distance and displacement.", steps: ["Acceleration = (-2 - 6)/4 = -2 m/s², so velocity reaches zero at 3 s.", "Positive triangular area = (1/2) × 3 × 6 = 9 m.", "Negative triangular area = -(1/2) × 1 × 2 = -1 m.", "Displacement = 9 - 1 = 8 m; distance = 9 + 1 = 10 m."], answer: "Displacement +8 m; distance 10 m." },
    ],
    quiz: [
      { question: "A runner goes 60 m east and 20 m west in 10 s. What is average velocity, taking east positive?", options: ["+8 m/s", "+4 m/s", "-4 m/s", "+6 m/s"], answer: 1, explanation: "Displacement is 60 - 20 = +40 m, so average velocity is +40/10 = +4 m/s. The +8 value uses distance and is average speed." },
      { question: "Velocity is negative and acceleration is negative. What happens to speed?", options: ["It decreases", "It stays zero", "It increases", "The signs give no information"], answer: 2, explanation: "Acceleration makes velocity more negative. Its magnitude, which is speed, increases while these signs persist." },
      { question: "From rest, an object accelerates uniformly at 3 m/s² for 2 s. What displacement does it have?", options: ["3 m", "6 m", "9 m", "12 m"], answer: 1, explanation: "s = ut + at²/2 = 0 + 3 × 2² / 2 = 6 m. The final velocity is 6 m/s, but it was not maintained throughout the interval." },
      { question: "What does the signed area under a velocity-time graph give?", options: ["Acceleration", "Distance in every case", "Displacement", "Final position in every case"], answer: 2, explanation: "Signed area gives displacement. Distance needs the magnitudes of areas on both sides of the time axis; final position also needs the starting position." },
      { question: "Which condition is necessary for s = ut + at²/2 over an interval?", options: ["The initial velocity must be zero", "Acceleration is constant", "Velocity is positive", "The object never changes direction"], answer: 1, explanation: "Acceleration must be constant. Initial velocity may be non-zero or negative, and a reversal is allowed when signs are handled consistently." },
    ],
    sources: [{ title: "OpenStax: constant-acceleration motion", url: "https://openstax.org/books/university-physics-volume-1/pages/3-4-motion-with-constant-acceleration" }],
  },
  {
    id: "mole-concept", subject: "Chemistry", unit: 1,
    title: "The mole: connecting particles, mass and reactions",
    summary: "Particle counting, molar mass, composition and limiting reactants.",
    prerequisites: "Ratios, scientific notation and reading chemical formulas.",
    remaining: "Atomic theory, laws of chemical combination and further stoichiometry problems remain to complete this unit.",
    sections: [
      { title: "A counting unit, not a fixed mass", paragraphs: [
        "A dozen counts twelve objects regardless of what those objects are. A mole similarly counts specified entities, but the count is much larger: exactly 6.02214076 × 10²³ entities per mole. The entities might be atoms, molecules, ions or formula units; always name them.",
        "One mole of O2 molecules contains one mole of molecules but two moles of oxygen atoms. One mole of solid NaCl counts formula units, not separate NaCl molecules. A mole is an amount of substance. Its mass depends on the substance, so one mole of every material does not weigh the same."
      ], formula: "N = n × N(A);  N(A) = 6.02214076 × 10²³ mol⁻¹" },
      { title: "Use molar mass as a bridge", paragraphs: [
        "Molar mass M is mass per mole. Find a compound's molar mass by adding the atomic molar masses, including every subscript. Using the rounded values H = 1 and O = 16 g/mol, water has M = 2 × 1 + 16 = 18 g/mol. A 9 g sample therefore contains 9/18 = 0.5 mol of water molecules.",
        "Follow the units: grams divided by grams per mole gives moles. Multiplying moles by entities per mole gives an entity count. In exam problems use the atomic masses supplied; the rounded values here are stated assumptions, not exact physical constants."
      ], formula: "n = m / M" },
      { title: "Count atoms inside molecules", paragraphs: [
        "For 0.5 mol of water, the molecular count is about 3.011 × 10²³ using N(A) ≈ 6.022 × 10²³ mol⁻¹. Each molecule has two H atoms and one O atom. Thus the sample contains 1 mol of hydrogen atoms, 0.5 mol of oxygen atoms and 1.5 mol of atoms altogether.",
        "Keep the formula unchanged while counting. A subscript describes the composition of one entity. A coefficient before a formula counts entities or moles of that formula. The coefficient 2 in 2H2O doubles the number of water molecules; it does not change water into a different compound."
      ] },
      { title: "Turn composition into a simplest ratio", paragraphs: [
        "An empirical formula records the simplest whole-number atom ratio. A molecular formula records the actual numbers in a molecule. To move from mass percentages to a ratio, assume a 100 g sample, divide each element's mass by its atomic molar mass, then divide all resulting amounts by the smallest.",
        "Do not round a ratio such as 1.5 straight to 2. Multiply all ratios by 2 to obtain integers. Once the empirical formula is known, divide the measured molar mass by the empirical-formula mass. That whole-number multiplier converts the empirical formula to the molecular formula."
      ] },
      { title: "A balanced equation is a recipe in moles", paragraphs: [
        "In 2H2 + O2 → 2H2O, two moles of hydrogen molecules react with one mole of oxygen molecules to form two moles of water. Those are mole ratios, not gram ratios. Convert each supplied mass to moles before applying the coefficients.",
        "When more than one reactant amount is given, divide each available mole amount by its balanced coefficient. The smallest result identifies the limiting reactant for that reaction. Calculate product from it, then check how much excess reactant remains. These are theoretical yields, assuming the stated reaction goes to completion without losses."
      ], formula: "Reaction extent available = reactant moles / coefficient" },
    ],
    examples: [
      { question: "How many molecules and oxygen atoms are in 4.4 g CO2? Use C = 12, O = 16 g/mol and N(A) = 6.022 × 10²³ mol⁻¹.", steps: ["M(CO2) = 12 + 2 × 16 = 44 g/mol.", "n(CO2) = 4.4/44 = 0.100 mol.", "Molecules = 0.100 × 6.022 × 10²³ = 6.022 × 10²².", "There are two oxygen atoms per molecule, giving 1.2044 × 10²³ oxygen atoms before final rounding."], answer: "Approximately 6.0 × 10²² molecules and 1.2 × 10²³ oxygen atoms (two significant figures)." },
      { question: "A compound is 40.0% C, 6.7% H and 53.3% O by mass. Its molar mass is 180 g/mol. Use C = 12, H = 1, O = 16. Find its formulas.", steps: ["For 100 g, mole amounts are 40.0/12 ≈ 3.333, 6.7/1 = 6.7 and 53.3/16 ≈ 3.331.", "Divide by the smallest: approximately 1 : 2 : 1. The small differences reflect rounded percentages.", "Empirical formula CH2O has formula mass 12 + 2 + 16 = 30.", "180/30 = 6. Multiply every empirical subscript by 6."], answer: "Empirical CH2O; molecular C6H12O6." },
      { question: "Mix 4 mol H2 with 1 mol O2 for 2H2 + O2 → 2H2O. Find the theoretical product and excess reactant.", steps: ["Compare amount/coefficient: H2 gives 4/2 = 2; O2 gives 1/1 = 1.", "O2 is limiting. Its 1 mol consumes 2 mol H2 and forms 2 mol H2O.", "Hydrogen remaining = 4 - 2 = 2 mol."], answer: "2 mol H2O; 2 mol H2 remains." },
    ],
    quiz: [
      { question: "Using M(H2O) = 18 g/mol, how many moles are in 36 g water?", options: ["0.5 mol", "2 mol", "18 mol", "648 mol"], answer: 1, explanation: "n = m/M = 36/18 = 2 mol. Multiplication would give the wrong units." },
      { question: "How many moles of oxygen atoms are in 0.25 mol CO2?", options: ["0.125 mol", "0.25 mol", "0.50 mol", "0.75 mol"], answer: 2, explanation: "Each molecule contains two oxygen atoms, so 2 × 0.25 = 0.50 mol of oxygen atoms. The total atom amount would be 0.75 mol." },
      { question: "What is the empirical formula of C6H12O6?", options: ["C6H12O6", "CH2O", "C2H4O2", "CHO"], answer: 1, explanation: "Divide all three subscripts by their greatest common factor, 6, giving the simplest ratio 1:2:1." },
      { question: "For N2 + 3H2 → 2NH3, 2 mol N2 and 3 mol H2 can form at most how much NH3?", options: ["1 mol", "2 mol", "3 mol", "4 mol"], answer: 1, explanation: "N2/coefficient = 2, while H2/coefficient = 3/3 = 1. Hydrogen limits the reaction, allowing 2 mol ammonia." },
      { question: "Which quantity is identical for 1 mol He atoms and 1 mol CO2 molecules?", options: ["Mass", "Number of atoms", "Number of specified entities", "Volume at every temperature and pressure"], answer: 2, explanation: "Both contain Avogadro's number of specified entities. CO2 has three atoms per molecule; their masses are different." },
    ],
    sources: [{ title: "OpenStax: formula mass and the mole", url: "https://openstax.org/books/chemistry-2e/pages/3-1-formula-mass-and-the-mole-concept" }],
  },
  {
    id: "sets-and-functions", subject: "Mathematics", unit: 1,
    title: "Sets and functions: inputs, outputs and restrictions",
    summary: "Set operations, function tests, domains and composition.",
    prerequisites: "Basic algebra, inequalities and square roots over the real numbers.",
    remaining: "Equivalence relations, deeper function classification and extended composition problems remain to complete this unit.",
    sections: [
      { title: "A set keeps membership, not repetition", paragraphs: [
        "A set is a well-defined collection. The set {1, 2, 2, 3} is the same as {1, 2, 3}; repeated writing does not add members. Order also does not matter. The empty set has no elements, while {0} has one: the number zero.",
        "If every element of A belongs to B, A is a subset of B. A power set contains all subsets, including the empty set and the whole set. For each of n distinct elements, a subset either includes it or excludes it, giving 2^n possible subsets."
      ], formula: "If |A| = n, then |P(A)| = 2^n" },
      { title: "Union, intersection and the universal set", paragraphs: [
        "The union A ∪ B includes elements in at least one of the sets. The intersection A ∩ B includes only elements in both. A complement must be taken relative to a stated universal set U: it contains the members of U that are not in A.",
        "Counting |A| + |B| counts every shared element twice. Subtract |A ∩ B| once to correct that double count. For A = {1, 2, 3} and B = {3, 4}, the union has four elements, not five. Draw two overlapping regions when the words become hard to track."
      ], formula: "|A ∪ B| = |A| + |B| - |A ∩ B|" },
      { title: "A function gives every input exactly one output", paragraphs: [
        "A relation can pair inputs with outputs in many ways. A function f: A → B must assign exactly one member of B to every member of A. Different inputs may share the same output. However, one input cannot have two outputs, and no input in the stated domain may be left without an output.",
        "For example, {(1, 4), (2, 4)} is a function on {1, 2}; sharing 4 is allowed. The relation {(1, 4), (1, 5)} is not a function on {1}. For a graph y = f(x), a vertical line meeting the graph twice reveals two y-values for one x-value."
      ] },
      { title: "Domain, codomain and range are not interchangeable", paragraphs: [
        "The domain is the permitted input set, the codomain is the specified target set, and the range is the set of outputs actually reached. For f(x) = x² with real domain and real codomain, the range is [0, infinity). Negative real numbers are in the codomain but never reached.",
        "A function is one-to-one when different inputs always give different outputs. It is onto when its range equals its codomain. On all real inputs x² is not one-to-one because x and -x share an output. Restricting the domain to non-negative reals changes that conclusion. Always read the declared sets."
      ] },
      { title: "Build the domain before simplifying", paragraphs: [
        "Over the reals, a denominator cannot be zero and an even-root radicand cannot be negative. For sqrt(x - 2)/(x - 5), combine x ≥ 2 with x ≠ 5. The natural real domain is [2, 5) ∪ (5, infinity). These are simultaneous restrictions, not alternatives.",
        "Composition means applying the inner function first: (f ∘ g)(x) = f(g(x)). The input must be in g's domain and g(x) must be allowed by f. With f(x) = 1/x and g(x) = x - 2, the composition is 1/(x - 2), excluding x = 2. Cancelling algebraic factors does not restore inputs that the original expression excluded."
      ], formula: "(f ∘ g)(x) = f(g(x))" },
    ],
    examples: [
      { question: "In a group of 40 students, 24 study Physics, 20 study Chemistry and 10 study both. How many study neither?", steps: ["Students taking at least one subject = 24 + 20 - 10 = 34.", "Subtract from the entire group: 40 - 34 = 6.", "Check the disjoint groups: Physics only 14, Chemistry only 10, both 10, neither 6; total 40."], answer: "6 students." },
      { question: "Find the natural real domain of f(x) = sqrt(3 - x)/(x + 1).", steps: ["The square root requires 3 - x ≥ 0, hence x ≤ 3.", "The denominator requires x + 1 ≠ 0, hence x ≠ -1.", "Intersect the conditions. The endpoint 3 is allowed; -1 is excluded."], answer: "(-infinity, -1) ∪ (-1, 3]." },
      { question: "Let f(x) = 2x + 1 and g(x) = x², both on the reals. Compare f(g(x)) and g(f(x)).", steps: ["For f(g(x)), replace the input of f by x²: 2x² + 1.", "For g(f(x)), square the whole inner expression: (2x + 1)² = 4x² + 4x + 1.", "At x = 1 the outputs are 3 and 9, proving the compositions are not the same function."], answer: "Composition is generally not commutative." },
    ],
    quiz: [
      { question: "How many subsets does {a, b, c} have?", options: ["3", "6", "8", "9"], answer: 2, explanation: "Each of the three distinct elements is either included or excluded, so there are 2³ = 8 subsets, including the empty and full sets." },
      { question: "If |A| = 12, |B| = 9 and |A ∩ B| = 4, what is |A ∪ B|?", options: ["17", "21", "25", "5"], answer: 0, explanation: "12 + 9 counts the four shared elements twice. Subtract 4 once: 17." },
      { question: "Which relation is a function with domain {1, 2}?", options: ["{(1, 3)}", "{(1, 3), (1, 4), (2, 5)}", "{(1, 3), (2, 3)}", "The empty relation"], answer: 2, explanation: "Both domain elements receive exactly one output. The same output for two different inputs is allowed." },
      { question: "What is the natural real domain of 1/sqrt(x - 4)?", options: ["x ≥ 4", "x > 4", "x ≠ 4", "All real x"], answer: 1, explanation: "The radicand must be non-negative, but the square root is also a denominator and cannot be zero. Together these require x - 4 > 0." },
      { question: "If f(x) = x + 3 and g(x) = 2x, what is f(g(2))?", options: ["7", "10", "8", "5"], answer: 0, explanation: "Apply g first: g(2) = 4. Then f(4) = 7. The value 10 comes from reversing the order." },
    ],
    sources: [{ title: "OpenStax: functions and notation", url: "https://openstax.org/books/college-algebra-2e/pages/3-1-functions-and-function-notation" }],
  },
];
