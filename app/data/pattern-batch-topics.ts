import type { QuestionSeed, Stream } from "./reviewed-content";
import { fromItems, type Item } from "./question-builders.ts";

// Second batch from the triangulated pattern scan (content/PATTERN-SCAN.md, "Still open"):
// topics several independent paper analyses rank as high-weightage that the bank did not cover.
// Every item is original, written in the exam's style, and cites the section it was checked against.
export const patternBatchSources = {
  coulomb: { title: "OpenStax University Physics Volume 2: 5.3 Coulomb's Law", url: "https://openstax.org/books/university-physics-volume-2/pages/5-3-coulombs-law" },
  thinLenses: { title: "OpenStax University Physics Volume 3: 2.4 Thin Lenses", url: "https://openstax.org/books/university-physics-volume-3/pages/2-4-thin-lenses" },
  firstLaw: { title: "OpenStax University Physics Volume 2: 3.3 First Law of Thermodynamics", url: "https://openstax.org/books/university-physics-volume-2/pages/3-3-first-law-of-thermodynamics" },
  faraday: { title: "OpenStax University Physics Volume 2: 13.1 Faraday's Law", url: "https://openstax.org/books/university-physics-volume-2/pages/13-1-faradays-law" },
  periodicTrends: { title: "OpenStax Chemistry 2e: 6.5 Periodic Variations in Element Properties", url: "https://openstax.org/books/chemistry-2e/pages/6-5-periodic-variations-in-element-properties" },
  enthalpy: { title: "OpenStax Chemistry 2e: 5.3 Enthalpy", url: "https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy" },
  hydrocarbons: { title: "OpenStax Chemistry 2e: 20.1 Hydrocarbons", url: "https://openstax.org/books/chemistry-2e/pages/20-1-hydrocarbons" },
  definiteIntegrals: { title: "OpenStax Calculus Volume 1: 5.3 The Fundamental Theorem of Calculus", url: "https://openstax.org/books/calculus-volume-1/pages/5-3-the-fundamental-theorem-of-calculus" },
  separable: { title: "OpenStax Calculus Volume 2: 4.3 Separable Equations", url: "https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations" },
  linesPlanes: { title: "OpenStax Calculus Volume 3: 2.5 Equations of Lines and Planes in Space", url: "https://openstax.org/books/calculus-volume-3/pages/2-5-equations-of-lines-and-planes-in-space" },
  energyFlow: { title: "OpenStax Biology 2e: 46.2 Energy Flow through Ecosystems", url: "https://openstax.org/books/biology-2e/pages/46-2-energy-flow-through-ecosystems" },
  reproduction: { title: "OpenStax Biology 2e: 43.3 Human Reproductive Anatomy and Gametogenesis", url: "https://openstax.org/books/biology-2e/pages/43-3-human-reproductive-anatomy-and-gametogenesis" },
  evolution: { title: "OpenStax Biology 2e: 18.1 Understanding Evolution", url: "https://openstax.org/books/biology-2e/pages/18-1-understanding-evolution" },
  kidney: { title: "OpenStax Biology 2e: 41.2 The Kidneys and Osmoregulatory Organs", url: "https://openstax.org/books/biology-2e/pages/41-2-the-kidneys-and-osmoregulatory-organs" },
  plantTransport: { title: "OpenStax Biology 2e: 30.5 Transport of Water and Solutes in Plants", url: "https://openstax.org/books/biology-2e/pages/30-5-transport-of-water-and-solutes-in-plants" },
  elasticity: { title: "OpenStax Principles of Economics 3e: 5.1 Price Elasticity of Demand and Price Elasticity of Supply", url: "https://openstax.org/books/principles-economics-3e/pages/5-1-price-elasticity-of-demand-and-price-elasticity-of-supply" },
  stratification: { title: "OpenStax Introduction to Sociology 3e: 9.1 What Is Social Stratification?", url: "https://openstax.org/books/introduction-sociology-3e/pages/9-1-what-is-social-stratification" },
  percent: { title: "OpenStax Prealgebra 2e: 6.2 Solve General Applications of Percent", url: "https://openstax.org/books/prealgebra-2e/pages/6-2-solve-general-applications-of-percent" },
  simpleInterest: { title: "OpenStax Prealgebra 2e: 6.4 Solve Simple Interest Applications", url: "https://openstax.org/books/prealgebra-2e/pages/6-4-solve-simple-interest-applications" },
} as const;

type PatternBatchTopic = {
  id: string; subject: string; title: string;
  // Local-government items reuse the existing May 2024 Constitution source.
  sourceId: keyof typeof patternBatchSources | "constitution";
  streams: Stream[]; notes: string[]; pitfall: string; questions: QuestionSeed[];
};

const round = (value: number) => Number(value.toFixed(1));

// MPSC aptitude items follow fixed English templates so the Mizo draft can be produced from the
// same numbers (see getMizoTranslation). Distractors are the usual slips for each calculation.
const percentItems: Item[] = [
  ...([[12, 250], [15, 80], [35, 60], [8, 450], [125, 40], [2.5, 400]] as const).map(([p, n]): Item => {
    const value = round((p / 100) * n);
    return [`What is ${p}% of ${n}?`, String(value), [String(round(value * 10)), String(round(value / 10)), String(round(value + p))], `${p}/100 x ${n} = ${value}.`, "Section 6.2: translate and solve basic percent equations"];
  }),
  ...([[15, 60], [18, 24], [7, 35], [42, 120]] as const).map(([part, whole]): Item => {
    const value = round((part / whole) * 100);
    return [`${part} is what percent of ${whole}?`, `${value}%`, [`${round((whole / part) * 100)}%`, `${part}%`, `${round(((whole - part) / whole) * 100)}%`], `${part}/${whole} x 100 = ${value}%.`, "Section 6.2: translate and solve basic percent equations"];
  }),
  ...([[40, 50], [200, 230], [250, 300]] as const).map(([from, to]): Item => {
    const change = to - from, value = round((change / from) * 100);
    return [`A price rises from Rs ${from} to Rs ${to}. What is the percentage increase?`, `${value}%`, [`${change}%`, `${round((change / to) * 100)}%`, `${round((to / from) * 100)}%`], `Increase = ${to} - ${from} = ${change}; ${change}/${from} x 100 = ${value}%. Always divide by the original amount.`, "Section 6.2: find percent increase"];
  }),
  ...([[50, 40], [400, 300], [250, 200]] as const).map(([from, to]): Item => {
    const change = from - to, value = round((change / from) * 100);
    return [`A price falls from Rs ${from} to Rs ${to}. What is the percentage decrease?`, `${value}%`, [`${change}%`, `${round((change / to) * 100)}%`, `${round((to / from) * 100)}%`], `Decrease = ${from} - ${to} = ${change}; ${change}/${from} x 100 = ${value}%. Always divide by the original amount.`, "Section 6.2: find percent decrease"];
  }),
];

const interestItems: Item[] = [
  ...([[2000, 5, 3], [1500, 8, 2], [5000, 4, 5], [1200, 10, 4]] as const).map(([principal, rate, years]): Item => {
    const interest = (principal * rate * years) / 100;
    return [`Find the simple interest on Rs ${principal} at ${rate}% per year for ${years} years.`, `Rs ${interest}`, [`Rs ${(principal * rate) / 100}`, `Rs ${principal + interest}`, `Rs ${interest * years}`], `I = P x r x t = ${principal} x ${rate}/100 x ${years} = Rs ${interest}.`, "Section 6.4: simple interest formula I = Prt"];
  }),
  ...([[1000, 6, 4], [2500, 4, 3], [800, 5, 5]] as const).map(([principal, rate, years]): Item => {
    const interest = (principal * rate * years) / 100, amount = principal + interest;
    return [`Rs ${principal} is invested at ${rate}% simple interest per year for ${years} years. What is the total amount at the end?`, `Rs ${amount}`, [`Rs ${interest}`, `Rs ${principal + (principal * rate) / 100}`, `Rs ${amount + interest}`], `I = ${principal} x ${rate}/100 x ${years} = Rs ${interest}; amount = ${principal} + ${interest} = Rs ${amount}.`, "Section 6.4: total amount = principal + interest"];
  }),
  ...([[2000, 480, 4], [1500, 450, 5], [3000, 720, 3]] as const).map(([principal, interest, years]): Item => {
    const rate = (interest * 100) / (principal * years);
    return [`Rs ${principal} earns Rs ${interest} simple interest in ${years} years. What is the annual interest rate?`, `${rate}%`, [`${(interest * 100) / principal}%`, `${rate * 2}%`, `${rate / 2}%`], `r = (I x 100) / (P x t) = (${interest} x 100) / (${principal} x ${years}) = ${rate}%.`, "Section 6.4: solve I = Prt for the rate"];
  }),
];

export const patternBatchTopics: PatternBatchTopic[] = [
  { id: "coulombs-law", subject: "Physics", title: "Electrostatics: Coulomb's law", sourceId: "coulomb", streams: ["jee", "neet"],
    notes: ["The force between two point charges is F = k|q1 q2|/r^2 with k = 1/(4 pi epsilon_0), about 9 x 10^9 N m^2/C^2. It acts along the line joining the charges: like charges repel and unlike charges attract.", "Coulomb's law is an inverse-square law, like Newton's law of gravitation. With several charges, the net force is the vector sum of the individual forces (superposition)."],
    pitfall: "Square the separation, convert microcoulombs to coulombs, and decide attraction or repulsion from the signs before adding forces as vectors.",
    questions: fromItems([
      ["The separation between two point charges is doubled. The electric force between them becomes:", "One-quarter of its original value", ["Half its original value", "Twice its original value", "Four times its original value"], "F is proportional to 1/r^2, so doubling r divides F by 4.", "Section 5.3: Coulomb's law"],
      ["Both point charges are doubled while their separation stays the same. The force between them becomes:", "Four times as large", ["Twice as large", "Unchanged", "Half as large"], "F is proportional to q1 q2, so doubling both multiplies F by 2 x 2 = 4.", "Section 5.3: Coulomb's law"],
      ["Charges of +2 microcoulomb and +3 microcoulomb are 0.3 m apart. Taking k = 9 x 10^9 N m^2/C^2, the force between them is:", "0.6 N, repulsive", ["0.6 N, attractive", "0.18 N, repulsive", "6 N, repulsive"], "F = 9 x 10^9 x (2 x 10^-6)(3 x 10^-6)/0.3^2 = 0.054/0.09 = 0.6 N. Like charges repel.", "Section 5.3: Coulomb's law; original calculation"],
      ["A positive and a negative point charge are near each other. The force on each is:", "Attractive, along the line joining them", ["Repulsive, along the line joining them", "Attractive, perpendicular to the line joining them", "Zero, because the charges are opposite"], "Unlike charges attract, and the Coulomb force acts along the line joining the charges.", "Section 5.3: Coulomb's law"],
      ["The Coulomb constant k has the approximate value:", "9 x 10^9 N m^2/C^2", ["9 x 10^-9 N m^2/C^2", "6.67 x 10^-11 N m^2/kg^2", "8.85 x 10^-12 C^2/(N m^2)"], "k = 1/(4 pi epsilon_0) = 8.99 x 10^9 N m^2/C^2. The value 8.85 x 10^-12 is epsilon_0 itself.", "Section 5.3: Coulomb's constant"],
      ["Coulomb's law has the same inverse-square dependence on distance as:", "Newton's law of gravitation", ["Hooke's law", "Ohm's law", "The ideal gas law"], "Both forces fall off as 1/r^2.", "Section 5.3: comparison with gravitation"],
      ["Two equal charges +q are fixed at points A and B. The net Coulomb force on a third charge placed exactly midway between them is:", "Zero", ["Twice the force due to one charge", "Directed towards A", "Directed towards B"], "The two forces are equal in size and opposite in direction, so by superposition they cancel.", "Section 5.3: superposition of forces; original reasoning"],
      ["Two point charges exert a force of 16 N on each other. Their separation is made four times larger. The new force is:", "1 N", ["4 N", "64 N", "0.25 N"], "F scales as 1/r^2: 16/4^2 = 1 N.", "Section 5.3: Coulomb's law; original calculation"],
      ["Two identical charges 1 m apart repel with force F. To make the force 4F, the separation must become:", "0.5 m", ["2 m", "0.25 m", "4 m"], "F proportional to 1/r^2: four times the force needs half the distance.", "Section 5.3: Coulomb's law; original calculation"],
    ]) },
  { id: "thin-lenses", subject: "Physics", title: "Ray optics: thin lenses", sourceId: "thinLenses", streams: ["jee", "neet"],
    notes: ["With real distances taken as positive (OpenStax), the thin-lens equation is 1/d_o + 1/d_i = 1/f and magnification m = -d_i/d_o. NCERT's Cartesian form 1/v - 1/u = 1/f gives the same distances and image types.", "A converging lens forms a real, inverted image of an object beyond F and a virtual, upright, enlarged image of an object inside F. A diverging lens always gives a virtual, upright, diminished image of a real object. Power P = 1/f with f in metres, in dioptres."],
    pitfall: "Keep one sign convention throughout a problem, and convert focal length to metres before finding power.",
    questions: fromItems([
      ["An object is 30 cm from a converging lens of focal length 20 cm. The image forms:", "60 cm from the lens, on the opposite side", ["12 cm from the lens, on the same side", "60 cm from the lens, on the same side", "10 cm from the lens, on the opposite side"], "1/d_i = 1/20 - 1/30 = 1/60, so d_i = 60 cm: a real image on the far side.", "Section 2.4: thin-lens equation; original calculation"],
      ["An object 30 cm from a converging lens forms a real image 60 cm from the lens. The image is:", "Inverted and twice the size of the object", ["Upright and twice the size of the object", "Inverted and half the size of the object", "Upright and half the size of the object"], "m = -d_i/d_o = -60/30 = -2: inverted and magnified two times.", "Section 2.4: magnification; original calculation"],
      ["The power of a converging lens of focal length 25 cm is:", "+4 D", ["+0.25 D", "+25 D", "-4 D"], "P = 1/f = 1/0.25 m = +4 D; converging lenses have positive power.", "Section 2.4: lens power"],
      ["For a real object, a diverging lens always forms an image that is:", "Virtual, upright and diminished", ["Real, inverted and enlarged", "Real, upright and diminished", "Virtual, inverted and enlarged"], "Rays diverge after the lens, so the image is virtual, upright and smaller.", "Section 2.4: diverging lenses"],
      ["An object is placed at the principal focus of a converging lens. The image is formed:", "At infinity", ["At the focus on the other side", "At 2F on the other side", "At the optical centre"], "1/d_i = 1/f - 1/f = 0, so the refracted rays emerge parallel.", "Section 2.4: thin-lens equation"],
      ["An object at 2F of a converging lens forms an image that is:", "Real, inverted and the same size, at 2F on the other side", ["Virtual, upright and enlarged, on the same side", "Real, inverted and diminished, between F and 2F", "Real, inverted and enlarged, beyond 2F"], "With d_o = 2f, 1/d_i = 1/f - 1/(2f) = 1/(2f), so d_i = 2f and m = -1.", "Section 2.4: image formation by a converging lens"],
      ["An object is 5 cm from a converging lens of focal length 10 cm. The image is:", "10 cm from the lens, on the same side as the object", ["10 cm from the lens, on the opposite side", "3.3 cm from the lens, on the same side", "5 cm from the lens, on the opposite side"], "1/d_i = 1/10 - 1/5 = -1/10, so d_i = -10 cm: a virtual image on the object's side.", "Section 2.4: virtual images; original calculation"],
      ["A converging lens used as a magnifying glass must have the object placed:", "Between the lens and its focal point", ["Beyond 2F", "Exactly at 2F", "Exactly at F"], "Only an object inside F gives a virtual, upright, enlarged image.", "Section 2.4: image formation by a converging lens"],
    ]) },
  { id: "first-law-thermodynamics", subject: "Physics", title: "Thermodynamics: first law", sourceId: "firstLaw", streams: ["jee", "neet"],
    notes: ["The first law is energy conservation: delta U = Q - W, where Q is heat added to the system and W is work done by the system. Chemistry texts often write delta U = q + w with w the work done on the system; the physics is the same.", "Isothermal ideal gas: delta U = 0, so Q = W. Adiabatic: Q = 0, so delta U = -W. Isochoric: W = 0, so delta U = Q. Over a complete cycle delta U = 0."],
    pitfall: "Fix the sign convention first. Work done on a gas is negative W in delta U = Q - W, and heat released is negative Q.",
    questions: fromItems([
      ["A gas absorbs 500 J of heat and does 200 J of work on its surroundings. Its change in internal energy is:", "+300 J", ["+700 J", "-300 J", "-700 J"], "delta U = Q - W = 500 - 200 = +300 J.", "Section 3.3: delta U = Q - W"],
      ["150 J of work is done on a gas while it releases 50 J of heat. Its change in internal energy is:", "+100 J", ["-100 J", "+200 J", "-200 J"], "Q = -50 J and W (by the gas) = -150 J, so delta U = -50 - (-150) = +100 J.", "Section 3.3: sign conventions; original calculation"],
      ["In an isothermal process of an ideal gas, the change in internal energy is:", "Zero", ["Equal to the heat absorbed", "Equal to the work done on the gas", "Always negative"], "An ideal gas's internal energy depends only on temperature, which is constant.", "Section 3.3: internal energy of an ideal gas"],
      ["An adiabatic process is one in which:", "No heat is exchanged with the surroundings", ["The temperature stays constant", "The volume stays constant", "The pressure stays constant"], "Adiabatic means Q = 0.", "Section 3.3: thermodynamic processes"],
      ["A gas is heated at constant volume with 400 J of heat. Its internal energy changes by:", "+400 J", ["0 J", "-400 J", "+200 J"], "At constant volume W = 0, so delta U = Q = +400 J.", "Section 3.3: delta U = Q - W"],
      ["For a system taken around a complete cycle, the net change in internal energy is:", "Zero", ["Equal to the net heat absorbed", "Equal to the net work done", "Always positive"], "Internal energy is a state function and returns to its starting value. (Net heat equals net work, but delta U is zero.)", "Section 3.3: internal energy as a state function"],
      ["A gas expands adiabatically, doing 120 J of work. Its internal energy:", "Decreases by 120 J", ["Increases by 120 J", "Stays the same", "Decreases by 240 J"], "Q = 0, so delta U = -W = -120 J.", "Section 3.3: delta U = Q - W"],
      ["The first law of thermodynamics is a statement of:", "Conservation of energy", ["Conservation of momentum", "The increase of entropy", "Conservation of mass"], "Energy added as heat goes into internal energy or work.", "Section 3.3: first law"],
      ["In delta U = Q - W, the symbol W stands for:", "Work done by the system", ["Work done on the system", "Weight of the system", "Heat lost by the system"], "OpenStax defines W as work done by the system on its surroundings.", "Section 3.3: first law"],
    ]) },
  { id: "faraday-induction", subject: "Physics", title: "Electromagnetic induction: Faraday's law", sourceId: "faraday", streams: ["jee", "neet"],
    notes: ["Magnetic flux through a flat loop is phi = B A cos(theta), measured in webers. Faraday's law: the induced emf is epsilon = -N d(phi)/dt for a coil of N turns.", "The minus sign is Lenz's law: the induced current opposes the change in flux that produces it. If the flux does not change, no emf is induced."],
    pitfall: "Emf depends on the rate of change of flux, not on the flux itself, and multiplies by the number of turns.",
    questions: fromItems([
      ["The flux through a single loop changes uniformly from 0.5 Wb to 0.1 Wb in 0.2 s. The magnitude of the induced emf is:", "2 V", ["0.08 V", "3 V", "0.5 V"], "|epsilon| = delta phi / delta t = 0.4/0.2 = 2 V.", "Section 13.1: Faraday's law; original calculation"],
      ["A 100-turn coil has its flux change by 0.02 Wb per turn in 0.1 s. The average induced emf is:", "20 V", ["0.2 V", "2 V", "200 V"], "|epsilon| = N delta phi / delta t = 100 x 0.02/0.1 = 20 V.", "Section 13.1: Faraday's law; original calculation"],
      ["The SI unit of magnetic flux is the:", "Weber", ["Tesla", "Henry", "Gauss"], "1 Wb = 1 T m^2. The tesla measures field strength, not flux.", "Section 13.1: magnetic flux"],
      ["A bar magnet is held stationary inside a coil. The induced emf in the coil is:", "Zero", ["At its maximum", "Equal to the field times the coil area", "Alternating"], "Without a change in flux there is no induced emf.", "Section 13.1: Faraday's experiments"],
      ["The minus sign in Faraday's law expresses:", "Lenz's law: the induced emf opposes the change in flux", ["That emf is always negative", "That flux always decreases", "Conservation of charge"], "The induced current's field opposes the change that caused it.", "Section 13.1: Faraday's law and Lenz's law"],
      ["A uniform field of 0.4 T is perpendicular to a loop of area 0.05 m^2. The flux through the loop is:", "0.02 Wb", ["8 Wb", "0.125 Wb", "0.45 Wb"], "phi = B A cos 0 = 0.4 x 0.05 = 0.02 Wb.", "Section 13.1: magnetic flux; original calculation"],
      ["The magnetic flux through a loop is greatest when the plane of the loop is:", "Perpendicular to the magnetic field", ["Parallel to the magnetic field", "At 45 degrees to the field", "Flux does not depend on orientation"], "phi = B A cos(theta) is largest when the loop's normal is along B.", "Section 13.1: magnetic flux"],
      ["The rate of change of flux through a coil is doubled. The induced emf:", "Doubles", ["Halves", "Becomes four times as large", "Stays the same"], "Emf is proportional to d(phi)/dt.", "Section 13.1: Faraday's law"],
    ]) },
  { id: "periodic-trends", subject: "Chemistry", title: "Periodic trends in element properties", sourceId: "periodicTrends", streams: ["jee", "neet"],
    notes: ["Covalent radius increases down a group (higher principal quantum number) and generally decreases across a period (effective nuclear charge increases). Cations are smaller and anions larger than their parent atoms.", "First ionization energy generally increases across a period and decreases down a group. Exceptions: B is below Be (2p electron is higher in energy) and O is below N (pairing repulsion in 2p)."],
    pitfall: "In an isoelectronic series, the species with the most protons is the smallest.",
    questions: fromItems([
      ["Across a period from left to right, covalent radius generally:", "Decreases", ["Increases", "Stays constant", "Increases and then decreases"], "Effective nuclear charge rises across the period and pulls the electrons closer.", "Section 6.5: variation in covalent radius"],
      ["Atomic radius increases down a group mainly because:", "Electrons occupy shells with a larger principal quantum number", ["Nuclear charge decreases", "Electrons are removed", "Effective nuclear charge increases sharply"], "Each new period adds a shell further from the nucleus.", "Section 6.5: variation in covalent radius"],
      ["Which of these atoms has the largest radius?", "Na", ["Mg", "Al", "Cl"], "All are in period 3; radius decreases from left to right, so Na is largest.", "Section 6.5: variation in covalent radius"],
      ["Which of these elements has the highest first ionization energy?", "F", ["Li", "B", "O"], "Ionization energy generally rises across period 2; F is furthest right of these.", "Section 6.5: variation in ionization energies"],
      ["The first ionization energy of oxygen is lower than that of nitrogen because:", "Oxygen loses an electron from a doubly occupied 2p orbital, which is eased by electron-electron repulsion", ["Oxygen has a smaller nuclear charge", "Oxygen has fewer electrons", "Nitrogen's outer electron is in a higher shell"], "Pairing in oxygen's 2p subshell raises the energy of that electron, making it easier to remove.", "Section 6.5: variation in ionization energies"],
      ["Compared with a neutral sodium atom, the Na+ ion is:", "Smaller", ["Larger", "The same size", "Larger only in solution"], "Losing the 3s electron removes the outer shell, and the remaining electrons feel more nuclear charge.", "Section 6.5: variation in ionic radii"],
      ["Compared with a neutral chlorine atom, the Cl- ion is:", "Larger", ["Smaller", "The same size", "Smaller only in the gas phase"], "The added electron increases repulsion while the nuclear charge is unchanged.", "Section 6.5: variation in ionic radii"],
      ["Which member of the isoelectronic series O2-, F-, Na+, Mg2+ is smallest?", "Mg2+", ["O2-", "F-", "Na+"], "All have 10 electrons; Mg2+ has the most protons (12), so it holds them most tightly.", "Section 6.5: isoelectronic series"],
      ["Going down Group 1, first ionization energy:", "Decreases", ["Increases", "Stays constant", "Increases and then decreases"], "The outer electron is further from the nucleus in each lower period.", "Section 6.5: variation in ionization energies"],
    ]) },
  { id: "enthalpy-hess", subject: "Chemistry", title: "Thermochemistry: enthalpy and Hess's law", sourceId: "enthalpy", streams: ["jee", "neet"],
    notes: ["delta H is the heat exchanged at constant pressure. Exothermic reactions have negative delta H and endothermic reactions positive delta H. Reversing a reaction changes the sign of delta H; multiplying the equation multiplies delta H.", "Hess's law: delta H is the same whatever the path. The standard enthalpy of formation of an element in its standard state is zero, and delta H(reaction) = sum of n delta Hf(products) - sum of n delta Hf(reactants)."],
    pitfall: "Multiply each enthalpy of formation by its coefficient, and subtract reactants from products, not the reverse.",
    questions: fromItems([
      ["A reaction has delta H = -92 kJ. It is:", "Exothermic: it releases heat to the surroundings", ["Endothermic: it absorbs heat from the surroundings", "Neither exothermic nor endothermic", "Exothermic only above 100 degrees Celsius"], "A negative enthalpy change means heat leaves the system.", "Section 5.3: exothermic and endothermic reactions"],
      ["A -> B has delta H = +50 kJ. For B -> A, delta H is:", "-50 kJ", ["+50 kJ", "0 kJ", "-100 kJ"], "Reversing a reaction reverses the sign of delta H.", "Section 5.3: enthalpy of a reversed reaction"],
      ["1/2 N2 + 3/2 H2 -> NH3 has delta H = -46 kJ. For N2 + 3H2 -> 2NH3, delta H is:", "-92 kJ", ["-46 kJ", "-23 kJ", "+92 kJ"], "Doubling the equation doubles delta H: 2 x (-46) = -92 kJ.", "Section 5.3: enthalpy is an extensive property"],
      ["The standard enthalpy of formation of O2(g) is:", "0 kJ/mol", ["-393.5 kJ/mol", "+249 kJ/mol", "-285.8 kJ/mol"], "Elements in their standard states have delta Hf = 0. (+249 kJ/mol is for O atoms.)", "Section 5.3: standard enthalpy of formation"],
      ["C(s) + O2 -> CO2 has delta H = -394 kJ and CO + 1/2 O2 -> CO2 has delta H = -283 kJ. For C(s) + 1/2 O2 -> CO, delta H is:", "-111 kJ", ["-677 kJ", "+111 kJ", "-283 kJ"], "Keep the first equation and reverse the second: -394 + 283 = -111 kJ.", "Section 5.3: Hess's law; original calculation"],
      ["Hess's law states that the enthalpy change of a reaction:", "Is the same whether it occurs in one step or several", ["Depends on the path taken", "Is always negative", "Equals the activation energy"], "Enthalpy is a state function, so only the start and end states matter.", "Section 5.3: Hess's law"],
      ["delta Hf values (kJ/mol): CO2(g) -394, H2O(l) -286, CH4(g) -75. delta H for CH4 + 2O2 -> CO2 + 2H2O(l) is:", "-891 kJ", ["-605 kJ", "-1041 kJ", "+891 kJ"], "[-394 + 2(-286)] - (-75) = -966 + 75 = -891 kJ.", "Section 5.3: enthalpies of formation; original calculation"],
      ["At constant pressure, the enthalpy change of a system equals:", "The heat it absorbs or releases", ["The work done on it", "Its internal energy", "Its change in temperature"], "delta H = q_p.", "Section 5.3: definition of enthalpy"],
    ]) },
  { id: "hydrocarbons", subject: "Chemistry", title: "Hydrocarbons", sourceId: "hydrocarbons", streams: ["jee", "neet"],
    notes: ["Alkanes (CnH2n+2) are saturated, with sp3 carbons and bond angles near 109.5 degrees; they react with halogens by substitution. Alkenes (CnH2n) contain C=C with sp2 carbons and undergo addition reactions; some show cis-trans isomerism.", "Alkynes (CnH2n-2) contain a triple bond with linear sp carbons, such as ethyne C2H2. Structural isomers share a molecular formula but differ in connectivity: C4H10 has two."],
    pitfall: "Cis-trans isomerism needs two different groups on each carbon of the double bond, so 1-butene has none.",
    questions: fromItems([
      ["The general formula of the alkanes is:", "CnH2n+2", ["CnH2n", "CnH2n-2", "CnHn"], "Alkanes are saturated: every carbon has the maximum number of hydrogens.", "Section 20.1: alkanes"],
      ["An alkene with four carbon atoms has the molecular formula:", "C4H8", ["C4H10", "C4H6", "C4H4"], "Alkenes follow CnH2n: n = 4 gives C4H8.", "Section 20.1: alkenes"],
      ["The H-C-H bond angle in methane is about:", "109.5 degrees", ["120 degrees", "180 degrees", "90 degrees"], "The sp3 carbon is tetrahedral.", "Section 20.1: alkanes"],
      ["The carbon atoms of a carbon-carbon triple bond are:", "sp hybridised, with a linear arrangement", ["sp2 hybridised, trigonal planar", "sp3 hybridised, tetrahedral", "sp3d hybridised"], "Each triple-bonded carbon uses two sp orbitals at 180 degrees.", "Section 20.1: alkynes"],
      ["Which compound can show cis-trans (geometric) isomerism?", "2-Butene", ["1-Butene", "Ethene", "Propane"], "In 2-butene each double-bond carbon carries H and CH3; 1-butene has two H on one carbon.", "Section 20.1: isomers of alkenes"],
      ["The characteristic reaction of alkenes, for example with bromine, is:", "Addition across the double bond", ["Substitution of a hydrogen atom", "Elimination of water", "Decarboxylation"], "The pi bond breaks and each carbon gains a new single bond.", "Section 20.1: reactions of alkenes"],
      ["How many structural isomers have the formula C4H10?", "2", ["1", "3", "4"], "Butane and 2-methylpropane (isobutane).", "Section 20.1: structural isomers"],
      ["Alkanes react with chlorine in light mainly by:", "Substitution", ["Addition", "Polymerisation", "Hydration"], "A chlorine atom replaces a hydrogen atom; alkanes have no multiple bond to add across.", "Section 20.1: reactions of alkanes"],
      ["The molecular formula of ethyne (acetylene) is:", "C2H2", ["C2H4", "C2H6", "CH4"], "Ethyne is the simplest alkyne, CnH2n-2 with n = 2.", "Section 20.1: alkynes"],
    ]) },
  { id: "definite-integrals", subject: "Mathematics", title: "Definite integrals and the fundamental theorem", sourceId: "definiteIntegrals", streams: ["jee"],
    notes: ["Fundamental theorem, part 2: if F' = f, then the integral of f from a to b equals F(b) - F(a). Part 1: d/dx of the integral of f(t) from a to x is f(x).", "The integral of an odd function over [-a, a] is zero. Evaluate the antiderivative at the upper limit first, then subtract its value at the lower limit."],
    pitfall: "Do not drop the lower-limit term: F(a) is not always zero.",
    questions: fromItems([
      ["The integral of 3x^2 from x = 0 to x = 2 is:", "8", ["12", "6", "4"], "[x^3] from 0 to 2 = 8 - 0 = 8.", "Section 5.3: fundamental theorem, part 2"],
      ["The integral of (2x + 1) from x = 1 to x = 3 is:", "10", ["8", "12", "6"], "[x^2 + x] from 1 to 3 = 12 - 2 = 10.", "Section 5.3: fundamental theorem, part 2"],
      ["The integral of cos x from 0 to pi/2 is:", "1", ["0", "-1", "pi/2"], "[sin x] from 0 to pi/2 = 1 - 0 = 1.", "Section 5.3: fundamental theorem, part 2"],
      ["The integral of 1/x from 1 to e is:", "1", ["e", "0", "e - 1"], "[ln x] from 1 to e = 1 - 0 = 1.", "Section 5.3: fundamental theorem, part 2"],
      ["If F'(x) = f(x), the integral of f from a to b equals:", "F(b) - F(a)", ["F(a) - F(b)", "F'(b) - F'(a)", "F(b) + F(a)"], "This is part 2 of the fundamental theorem of calculus.", "Section 5.3: fundamental theorem, part 2"],
      ["The derivative with respect to x of the integral of t^2 from 0 to x is:", "x^2", ["x^3/3", "2x", "t^2"], "Part 1 of the fundamental theorem: replace t by the upper limit x.", "Section 5.3: fundamental theorem, part 1"],
      ["The integral of e^x from 0 to 1 is:", "e - 1", ["e", "1", "e + 1"], "[e^x] from 0 to 1 = e - e^0 = e - 1.", "Section 5.3: fundamental theorem, part 2"],
      ["The integral of sin x from 0 to pi is:", "2", ["0", "1", "-2"], "[-cos x] from 0 to pi = 1 - (-1) = 2.", "Section 5.3: fundamental theorem, part 2"],
      ["The integral of the square root of x from 0 to 4 is:", "16/3", ["8/3", "8", "4"], "[(2/3)x^(3/2)] from 0 to 4 = (2/3) x 8 = 16/3.", "Section 5.3: fundamental theorem, part 2"],
      ["The integral of x^3 from -1 to 1 is:", "0", ["1/2", "2", "-1/2"], "[x^4/4] from -1 to 1 = 1/4 - 1/4 = 0; x^3 is an odd function.", "Section 5.3: fundamental theorem, part 2"],
    ]) },
  { id: "separable-equations", subject: "Mathematics", title: "Differential equations: separation of variables", sourceId: "separable", streams: ["jee"],
    notes: ["A separable equation can be written y' = f(x) g(y). Move all y terms to one side and all x terms to the other, integrate both sides, and add one constant.", "dy/dx = ky gives exponential growth or decay: y = y0 e^(kx). An initial condition fixes the constant."],
    pitfall: "Add the constant of integration before solving for y; adding it afterwards gives the wrong family, for example e^x + C instead of Ce^x.",
    questions: fromItems([
      ["Which differential equation is separable?", "dy/dx = xy", ["dy/dx = x + y", "dy/dx = sin(xy)", "dy/dx = x^2 + y^2"], "xy = f(x) g(y) with f(x) = x and g(y) = y.", "Section 4.3: definition of a separable equation"],
      ["The general solution of dy/dx = 2x is:", "y = x^2 + C", ["y = 2x^2 + C", "y = x^2", "y = 2 + C"], "Integrate both sides: y = x^2 + C.", "Section 4.3: separation of variables"],
      ["The general solution of dy/dx = y is:", "y = Ce^x", ["y = e^x + C", "y = Cx", "y = x + C"], "dy/y = dx gives ln|y| = x + c, so y = Ce^x.", "Section 4.3: separation of variables"],
      ["The solution of dy/dx = ky with y(0) = y0 is:", "y = y0 e^(kx)", ["y = y0 + kx", "y = k e^(y0 x)", "y = y0 e^(-kx)"], "ln|y| = kx + c and y(0) = y0 fixes the constant.", "Section 4.3: exponential growth and decay"],
      ["If dy/dx = y and y(0) = 5, then y(1) equals:", "5e", ["e^5", "5 + e", "6"], "y = 5e^x, so y(1) = 5e.", "Section 4.3: initial-value problems; original calculation"],
      ["Separating the variables in dy/dx = x/y gives:", "y dy = x dx", ["dy/y = x dx", "y dx = x dy", "dy = xy dx"], "Multiply both sides by y dx.", "Section 4.3: separation of variables"],
      ["The general solution of dy/dx = x/y is:", "y^2 - x^2 = C", ["y = x + C", "y^2 + x^2 = C", "y = Cx"], "y^2/2 = x^2/2 + c, so y^2 - x^2 = C.", "Section 4.3: separation of variables; original calculation"],
      ["A population obeys dP/dt = 0.1P. Its doubling time is:", "ln 2 / 0.1, about 6.9 time units", ["10 time units", "0.1 ln 2 time units", "20 time units"], "P = P0 e^(0.1t); P = 2P0 when e^(0.1t) = 2, so t = ln 2 / 0.1.", "Section 4.3: applications of separable equations; original calculation"],
      ["For x, y > 0, the general solution of dy/dx = -y/x is:", "xy = C", ["y = Cx", "y = x + C", "y = C - x"], "dy/y = -dx/x gives ln y = -ln x + c, so xy = C.", "Section 4.3: separation of variables; original calculation"],
    ]) },
  { id: "lines-planes-3d", subject: "Mathematics", title: "3D geometry: lines and planes", sourceId: "linesPlanes", streams: ["jee"],
    notes: ["A line through (x0, y0, z0) with direction <a, b, c> is x = x0 + at, y = y0 + bt, z = z0 + ct. The plane ax + by + cz = d has normal vector <a, b, c>.", "Planes are parallel when their normals are parallel and perpendicular when their normals have zero dot product. The distance from (x1, y1, z1) to ax + by + cz = d is |ax1 + by1 + cz1 - d| / sqrt(a^2 + b^2 + c^2). Non-parallel lines that do not meet are skew."],
    pitfall: "The coefficients of x, y and z give the normal to a plane, not a direction lying in it.",
    questions: fromItems([
      ["The line through (1, 2, 3) with direction <2, -1, 4> has parametric equations:", "x = 1 + 2t, y = 2 - t, z = 3 + 4t", ["x = 2 + t, y = -1 + 2t, z = 4 + 3t", "x = 1 + 2t, y = 2 + t, z = 3 + 4t", "x = 2t, y = -t, z = 4t"], "Start at the point and add t times the direction vector.", "Section 2.5: equations of a line"],
      ["A normal vector to the plane 2x - 3y + 6z = 5 is:", "<2, -3, 6>", ["<2, 3, 6>", "<5, 2, -3>", "<-3, 2, 6>"], "The coefficients of x, y and z form a normal vector.", "Section 2.5: equations of a plane"],
      ["The distance from the origin to the plane 2x - 3y + 6z = 14 is:", "2", ["14", "7", "14/11"], "|0 - 14| / sqrt(4 + 9 + 36) = 14/7 = 2.", "Section 2.5: distance from a point to a plane; original calculation"],
      ["The planes x + 2y - z = 1 and 2x + 4y - 2z = 7 are:", "Parallel and distinct", ["Coincident", "Perpendicular", "Intersecting in a line"], "The normals <1, 2, -1> and <2, 4, -2> are parallel, but 2 x 1 is not 7, so the planes do not coincide.", "Section 2.5: parallel planes"],
      ["The planes x + y + z = 1 and x - y = 3 are:", "Perpendicular", ["Parallel", "Coincident", "Inclined at 45 degrees"], "Normals <1, 1, 1> and <1, -1, 0> have dot product 1 - 1 + 0 = 0.", "Section 2.5: angle between planes"],
      ["The plane through (1, 0, 2) with normal <3, -1, 2> is:", "3x - y + 2z = 7", ["3x - y + 2z = 0", "3x - y + 2z = 1", "x + 2z = 3"], "3(x - 1) - (y - 0) + 2(z - 2) = 0 gives 3x - y + 2z = 7.", "Section 2.5: equations of a plane; original calculation"],
      ["Two lines in space that are not parallel and do not intersect are called:", "Skew lines", ["Coplanar lines", "Perpendicular lines", "Concurrent lines"], "Skew lines do not lie in a common plane.", "Section 2.5: relationships between lines"],
      ["The line x = 1 + t, y = 2t, z = 3 - t meets the plane x + y + z = 10 when t equals:", "3", ["2", "6", "7"], "(1 + t) + 2t + (3 - t) = 4 + 2t = 10, so t = 3.", "Section 2.5: intersection of a line and a plane; original calculation"],
      ["The distance between the points (1, 2, 3) and (4, 6, 15) is:", "13", ["19", "169", "11"], "sqrt(3^2 + 4^2 + 12^2) = sqrt(169) = 13.", "Section 2.5: lines in space; original calculation"],
    ]) },
  { id: "ecosystem-energy", subject: "Biology", title: "Ecology: energy flow through ecosystems", sourceId: "energyFlow", streams: ["neet"],
    notes: ["Gross primary productivity (GPP) is the rate producers capture energy; net primary productivity (NPP) is GPP minus the energy producers use in respiration. Energy flows one way through trophic levels and is lost as heat at each step.", "Only a small fraction of energy, often taken as about 10 percent, passes to the next trophic level, so food chains are short and the pyramid of energy is always upright. Pyramids of numbers and biomass can be inverted. Persistent toxins such as DDT biomagnify in top consumers."],
    pitfall: "Nutrients cycle but energy does not; every transfer between trophic levels loses energy.",
    questions: fromItems([
      ["Net primary productivity equals:", "Gross primary productivity minus the energy producers use in respiration", ["Gross primary productivity plus respiration", "The energy consumed by herbivores", "All the solar energy reaching the ecosystem"], "NPP is the energy producers store as biomass, available to consumers.", "Section 46.2: productivity within trophic levels"],
      ["Producers fix 10,000 kJ. With about 10 percent passing between levels, the energy reaching secondary consumers is about:", "100 kJ", ["1,000 kJ", "10 kJ", "5,000 kJ"], "10,000 -> 1,000 kJ (primary consumers) -> 100 kJ (secondary consumers).", "Section 46.2: trophic level transfer efficiency; original calculation"],
      ["Which ecological pyramid is never inverted?", "Pyramid of energy", ["Pyramid of biomass", "Pyramid of numbers", "All three can be inverted"], "Energy decreases at each higher trophic level, so its pyramid is always upright.", "Section 46.2: ecological pyramids"],
      ["Some aquatic ecosystems have an inverted pyramid of biomass because:", "Phytoplankton reproduce quickly, so a small standing biomass supports a larger consumer biomass", ["Producers store more energy than consumers", "Consumers photosynthesise", "Energy flows from consumers to producers"], "Fast turnover lets a small producer biomass feed more zooplankton biomass.", "Section 46.2: ecological pyramids"],
      ["Biomagnification means that persistent toxins such as DDT:", "Reach their highest concentrations in top consumers", ["Are broken down at each trophic level", "Accumulate mostly in producers", "Spread evenly among trophic levels"], "Each consumer eats many contaminated organisms, concentrating the toxin up the food chain.", "Section 46.2: biomagnification"],
      ["A major reason energy decreases at each higher trophic level is that organisms:", "Use energy in respiration, releasing it as heat", ["Recycle energy back to producers", "Convert heat into chemical energy", "Store all the energy they consume"], "Metabolism releases heat that cannot be passed to the next level.", "Section 46.2: energy flow and the laws of thermodynamics"],
      ["Energy in an ecosystem flows:", "In one direction, from producers to consumers", ["In a cycle, like nutrients", "From top predators to producers", "Randomly between trophic levels"], "Energy enters as sunlight and leaves as heat; it is not recycled.", "Section 46.2: energy flow"],
      ["Food chains rarely have more than four or five trophic levels mainly because:", "Too little energy remains at higher levels", ["Predators cannot digest herbivores", "Producers run out of sunlight", "Nutrients cannot be recycled"], "Losses at each transfer leave too little energy to support further levels.", "Section 46.2: trophic level transfer efficiency"],
    ]) },
  { id: "human-reproduction", subject: "Biology", title: "Human reproduction and gametogenesis", sourceId: "reproduction", streams: ["neet"],
    notes: ["Sperm form in the seminiferous tubules, supported by Sertoli cells; interstitial (Leydig) cells make testosterone. Sperm mature and are stored in the epididymis. One primary spermatocyte gives four spermatids.", "Fertilisation normally occurs in the oviduct, and the endometrium lining the uterus thickens each cycle. Primary oocytes are arrested in prophase I from before birth; one primary oocyte gives one egg and polar bodies."],
    pitfall: "Spermatogenesis yields four functional gametes per meiosis; oogenesis yields one, with the rest of the cytoplasm kept in the egg.",
    questions: fromItems([
      ["Testosterone is produced in the testes by:", "Interstitial (Leydig) cells", ["Sertoli cells", "Spermatogonia", "Cells of the epididymis"], "Leydig cells lie between the seminiferous tubules and secrete testosterone.", "Section 43.3: human male reproductive anatomy"],
      ["Sperm mature and are stored in the:", "Epididymis", ["Seminal vesicle", "Prostate gland", "Urethra"], "Sperm gain motility in the epididymis and are stored there.", "Section 43.3: human male reproductive anatomy"],
      ["In humans, fertilisation normally takes place in the:", "Oviduct (fallopian tube)", ["Uterus", "Cervix", "Vagina"], "The egg is fertilised in the oviduct before it reaches the uterus.", "Section 43.3: human female reproductive anatomy"],
      ["One primary spermatocyte completing meiosis produces:", "Four spermatids", ["One spermatid and three polar bodies", "Two spermatids", "Eight spermatids"], "Meiosis I gives two secondary spermatocytes and meiosis II gives four spermatids.", "Section 43.3: spermatogenesis"],
      ["One primary oocyte completing meiosis produces:", "One egg and polar bodies", ["Four eggs", "Two eggs", "Four polar bodies and no egg"], "Unequal cytoplasmic division gives one large egg and small polar bodies.", "Section 43.3: oogenesis"],
      ["Spermatogenesis takes place in the:", "Seminiferous tubules", ["Epididymis", "Vas deferens", "Seminal vesicles"], "The tubules of the testes contain the dividing spermatogonia.", "Section 43.3: spermatogenesis"],
      ["In human females, primary oocytes are arrested in:", "Prophase I, from before birth until ovulation", ["Metaphase II, from birth", "Telophase II", "Interphase, until menopause"], "Oocytes enter meiosis before birth and pause in prophase I.", "Section 43.3: oogenesis"],
      ["A human spermatogonium is diploid (46 chromosomes). A mature sperm contains:", "23 chromosomes", ["46 chromosomes", "92 chromosomes", "22 chromosomes"], "Meiosis halves the chromosome number.", "Section 43.3: spermatogenesis"],
      ["The inner lining of the uterus that thickens during each cycle is the:", "Endometrium", ["Myometrium", "Perimetrium", "Cervix"], "The endometrium prepares for implantation and is shed in menstruation.", "Section 43.3: human female reproductive anatomy"],
    ]) },
  { id: "evolution-evidence", subject: "Biology", title: "Evolution: natural selection and its evidence", sourceId: "evolution", streams: ["neet"],
    notes: ["Darwin and Wallace independently proposed natural selection: heritable variation, more offspring than can survive, and differential survival and reproduction. Populations evolve; individuals do not.", "Homologous structures share ancestry but may differ in function (forelimbs of humans, bats and whales). Analogous structures share function through convergent evolution, not ancestry (bird and insect wings). Vestigial structures are reduced remnants, such as whale hind-limb bones."],
    pitfall: "Similar function does not mean common ancestry: decide homologous or analogous from origin, not use.",
    questions: fromItems([
      ["Natural selection was proposed independently by Charles Darwin and:", "Alfred Russel Wallace", ["Gregor Mendel", "Jean-Baptiste Lamarck", "Thomas Malthus"], "Darwin and Wallace presented their work together in 1858.", "Section 18.1: Charles Darwin and natural selection"],
      ["The forelimbs of humans, bats and whales are:", "Homologous structures", ["Analogous structures", "Vestigial structures", "Products of convergent evolution"], "They share the same bones inherited from a common ancestor, though their functions differ.", "Section 18.1: homologous structures"],
      ["The wings of a bird and of an insect are:", "Analogous structures", ["Homologous structures", "Vestigial structures", "Inherited from a recent common winged ancestor"], "They serve the same function but evolved independently.", "Section 18.1: convergent evolution"],
      ["Analogous structures arise through:", "Convergent evolution under similar selection pressures", ["Inheritance from a common ancestor", "Genetic drift alone", "Inheritance of acquired characteristics"], "Similar environments can select similar solutions in unrelated groups.", "Section 18.1: convergent evolution"],
      ["Which of these evolves over generations?", "A population", ["An individual organism", "A single cell", "An organ"], "Evolution is a change in a population's genetic make-up; individuals do not evolve.", "Section 18.1: misconceptions of evolution"],
      ["For natural selection to act, variation among individuals must be:", "Heritable", ["Acquired during life", "Always beneficial", "Identical in every generation"], "Only inherited variation can be passed to offspring.", "Section 18.1: processes and patterns of evolution"],
      ["Small hind-limb bones in whales are an example of:", "Vestigial structures", ["Analogous structures", "Convergent adaptations", "Newly evolved organs"], "They are reduced remnants of structures that were functional in ancestors.", "Section 18.1: vestigial structures"],
      ["Darwin's finches on the Galapagos Islands differed mainly in:", "Beak shape, suited to different foods", ["Feather colour only", "Number of wings", "Body temperature"], "Beak size and shape matched the food available on each island.", "Section 18.1: Darwin's observations"],
      ["An adaptation is best described as:", "A heritable trait that aids survival and reproduction in the current environment", ["Any change an individual makes during its life", "A trait that is beneficial in every environment", "A mutation that is always harmful"], "Adaptations are heritable and relative to a particular environment.", "Section 18.1: adaptation"],
    ]) },
  { id: "kidney-excretion", subject: "Biology", title: "Excretion: kidneys and the nephron", sourceId: "kidney", streams: ["neet"],
    notes: ["The nephron is the kidney's functional unit. Urine forms in three steps: glomerular filtration into Bowman's capsule, tubular reabsorption and tubular secretion. Blood enters through the renal artery.", "The proximal convoluted tubule reabsorbs glucose, amino acids and most water and salts. The loop of Henle concentrates urine by a countercurrent mechanism, and the collecting duct adjusts water reabsorption under ADH. Body fluid osmolarity is held near 300 mOsm."],
    pitfall: "Filtration is non-selective by size; selectivity comes from reabsorption and secretion afterwards.",
    questions: fromItems([
      ["The structural and functional unit of the kidney is the:", "Nephron", ["Neuron", "Alveolus", "Villus"], "Each kidney has about a million nephrons.", "Section 41.2: nephron, the functional unit"],
      ["During glomerular filtration, fluid passes from the glomerulus into the:", "Bowman's capsule", ["Loop of Henle", "Collecting duct", "Renal pelvis"], "Bowman's capsule surrounds the glomerulus and collects the filtrate.", "Section 41.2: glomerular filtration"],
      ["The three steps of urine formation, in order, are:", "Filtration, reabsorption, secretion", ["Secretion, filtration, reabsorption", "Reabsorption, secretion, filtration", "Filtration, secretion, storage"], "Blood is filtered, useful substances return, and extra wastes are added to the tubule.", "Section 41.2: kidney function and physiology"],
      ["Glucose in the filtrate is normally reabsorbed mainly in the:", "Proximal convoluted tubule", ["Distal convoluted tubule", "Collecting duct", "Ureter"], "The PCT reabsorbs nearly all glucose and amino acids.", "Section 41.2: tubular reabsorption"],
      ["The loop of Henle helps the kidney to:", "Concentrate urine by a countercurrent mechanism", ["Filter blood cells", "Store urine", "Produce red blood cells"], "Opposite flows in the two limbs build a salt gradient in the medulla.", "Section 41.2: loop of Henle and countercurrent multiplication"],
      ["ADH makes urine more concentrated by:", "Increasing water reabsorption in the collecting duct", ["Increasing glomerular filtration of water", "Decreasing water reabsorption", "Increasing glucose secretion"], "ADH makes the collecting duct more permeable to water.", "Section 41.2: collecting duct; ADH is detailed in Section 41.5"],
      ["Human body fluid osmolarity is kept close to:", "300 mOsm", ["30 mOsm", "1,200 mOsm", "3,000 mOsm"], "The kidneys keep body fluids near 300 mOsm; 1,200 mOsm is reached only deep in the medulla.", "Section 41.2: introduction"],
      ["Blood enters each kidney through the:", "Renal artery", ["Renal vein", "Ureter", "Urethra"], "The renal artery carries blood in; the renal vein drains it.", "Section 41.2: kidneys, the main osmoregulatory organ"],
    ]) },
  { id: "plant-water-transport", subject: "Biology", title: "Plant physiology: transport of water and solutes", sourceId: "plantTransport", streams: ["neet"],
    notes: ["Water moves from higher to lower water potential. Water potential = solute potential + pressure potential; pure water at atmospheric pressure is 0 MPa, and adding solute makes it negative.", "Transpiration from stomata pulls water up the xylem as a continuous column held by cohesion (cohesion-tension theory). Guard cells open stomata by changing turgor. Phloem moves sugars from sources to sinks by pressure flow."],
    pitfall: "Solute potential is never positive, so more dissolved solute always lowers water potential.",
    questions: fromItems([
      ["Water moves passively from a region of:", "Higher water potential to lower water potential", ["Lower water potential to higher water potential", "Lower pressure potential to higher pressure potential only", "Phloem into xylem only"], "Water flows down its water-potential gradient.", "Section 30.5: water potential"],
      ["The water potential of pure water at atmospheric pressure is:", "0 MPa", ["-1 MPa", "+1 MPa", "-0.1 MPa"], "Pure water at standard pressure is the reference point.", "Section 30.5: water potential"],
      ["Dissolving solute in water makes its water potential:", "More negative", ["More positive", "Unchanged", "Exactly zero"], "Solute potential is negative and falls as solute is added.", "Section 30.5: solute potential"],
      ["The cohesion-tension theory explains:", "The rise of water in the xylem, pulled by transpiration", ["Sugar movement in the phloem", "Opening of stomata in light", "Formation of root nodules"], "Evaporation from leaves creates tension that pulls the water column upward.", "Section 30.5: movement of water up the xylem"],
      ["Water in a xylem column stays continuous mainly because of:", "Cohesion between water molecules from hydrogen bonding", ["Covalent bonds between water molecules", "Root pressure alone", "Active transport by xylem cells"], "Hydrogen bonds hold water molecules together under tension.", "Section 30.5: cohesion-tension"],
      ["Sugars are translocated in the phloem from:", "Sources to sinks", ["Sinks to sources", "Roots to leaves only", "Xylem to stomata"], "Photosynthates move from where they are made or stored to where they are used.", "Section 30.5: transport of photosynthates in the phloem"],
      ["The opening and closing of stomata is controlled by:", "Guard cells changing their turgor", ["Root hairs", "Phloem companion cells", "Xylem vessels"], "Turgid guard cells bow apart to open the pore.", "Section 30.5: control of transpiration"],
      ["Most of the water a plant loses leaves through:", "Stomata in the leaves", ["The roots", "The bark", "The flowers"], "Transpiration occurs mainly through open stomata.", "Section 30.5: transpiration"],
      ["A cell has solute potential -0.7 MPa and pressure potential +0.3 MPa. Its water potential is:", "-0.4 MPa", ["-1.0 MPa", "+0.4 MPa", "-0.21 MPa"], "Water potential = -0.7 + 0.3 = -0.4 MPa.", "Section 30.5: water potential; original calculation"],
    ]) },
  { id: "price-elasticity", subject: "Economics", title: "Price elasticity of demand and supply", sourceId: "elasticity", streams: ["cuet-pg"],
    notes: ["Price elasticity of demand = percentage change in quantity demanded / percentage change in price (taken as an absolute value). Above 1 is elastic, below 1 inelastic, exactly 1 unitary. OpenStax computes percentages with the midpoint method.", "When demand is elastic, a price rise lowers total revenue; when inelastic, a price rise raises it. A tax falls mostly on whichever side, buyers or sellers, is less elastic."],
    pitfall: "Divide the change in quantity by the change in price, not the other way round.",
    questions: fromItems([
      ["Price elasticity of demand is calculated as:", "Percentage change in quantity demanded divided by percentage change in price", ["Price divided by quantity", "Change in price divided by change in quantity", "Percentage change in price divided by percentage change in quantity demanded"], "Elasticity measures how strongly quantity responds to price.", "Section 5.1: calculating price elasticity of demand"],
      ["A 10% rise in price lowers quantity demanded by 20%. Demand is:", "Elastic, with elasticity 2", ["Inelastic, with elasticity 0.5", "Inelastic, with elasticity 2", "Elastic, with elasticity 0.5"], "20%/10% = 2, which is greater than 1.", "Section 5.1: elastic demand; original calculation"],
      ["A 10% rise in price lowers quantity demanded by 4%. Demand is:", "Inelastic, with elasticity 0.4", ["Elastic, with elasticity 2.5", "Unitary elastic", "Perfectly elastic"], "4%/10% = 0.4, which is less than 1.", "Section 5.1: inelastic demand; original calculation"],
      ["If demand is elastic, a rise in price will:", "Reduce total revenue", ["Increase total revenue", "Leave total revenue unchanged", "Increase quantity demanded"], "Quantity falls proportionally more than price rises.", "Section 5.1: elasticity and total revenue"],
      ["If demand is inelastic, a rise in price will:", "Increase total revenue", ["Reduce total revenue", "Leave total revenue unchanged", "Make demand perfectly elastic"], "Quantity falls proportionally less than price rises.", "Section 5.1: elasticity and total revenue"],
      ["Unitary elasticity means that:", "A given percentage change in price causes an equal percentage change in quantity", ["Quantity does not respond to price", "Quantity responds infinitely to price", "Price and quantity move in the same direction"], "Elasticity equal to 1 means equal percentage changes.", "Section 5.1: unitary elasticity"],
      ["Price rises from Rs 8 to Rs 12 and quantity demanded falls from 120 to 80. By the midpoint method, the elasticity is:", "1 (unitary)", ["0.5", "2", "1.5"], "Quantity: 40/100 = 40%. Price: 4/10 = 40%. 40%/40% = 1.", "Section 5.1: midpoint method; original calculation"],
      ["A per-unit tax falls mostly on buyers when:", "Supply is more elastic than demand", ["Demand is more elastic than supply", "Both are perfectly elastic", "Demand is perfectly elastic"], "The less elastic side cannot easily avoid the tax, so it bears more of it.", "Section 5.1: elasticity and tax incidence"],
      ["A perfectly inelastic demand curve is:", "Vertical", ["Horizontal", "Downward sloping at 45 degrees", "Upward sloping"], "Quantity demanded does not change whatever the price.", "Section 5.1: polar cases of elasticity"],
    ]) },
  { id: "social-stratification", subject: "Sociology", title: "Social stratification", sourceId: "stratification", streams: ["cuet-pg"],
    notes: ["Social stratification is a society's ranking of people by factors such as wealth, income, education, family background and power. Closed systems (slavery, estate, caste) allow little change in position; open systems such as class systems are based partly on achievement.", "Caste systems usually require endogamy (marriage within one's group); class systems allow exogamy. A meritocracy, where standing rests entirely on merit, is an ideal no society has achieved. Status consistency is how consistent a person's rank is across factors."],
    pitfall: "Open and closed describe how much mobility a system allows, not whether it has ranks: both are stratified.",
    questions: fromItems([
      ["Social stratification refers to:", "A society's ranking of people by factors such as wealth, income, education and power", ["The division of labour among machines", "The study of rock layers", "Equal treatment of all members of society"], "OpenStax defines stratification as ranking people into a hierarchy.", "Section 9.1: definition of social stratification"],
      ["A caste system is:", "A closed system in which status is largely fixed by birth", ["An open system based on achievement", "A system with no social ranking", "A system in which everyone changes caste with income"], "In caste systems people can do little to change the standing they were born into.", "Section 9.1: the caste system"],
      ["A class system is:", "An open system in which achievement allows some mobility", ["A closed system fixed entirely by birth", "Identical to slavery", "A system that forbids marriage outside one's class by law"], "Class systems combine ascribed status with personal achievement.", "Section 9.1: the class system"],
      ["Which is an example of a closed stratification system?", "Slavery", ["A class system", "A meritocracy", "An open labour market"], "Slavery, estate and caste systems are closed systems.", "Section 9.1: closed systems"],
      ["According to OpenStax, a meritocracy is:", "An ideal based on personal effort and merit that no society has fully achieved", ["The caste system of ancient India", "A system based only on inherited wealth", "Common in every modern society"], "No society has ranked people entirely by merit.", "Section 9.1: meritocracy"],
      ["Marriage within one's own social category is called:", "Endogamy", ["Exogamy", "Polygamy", "Monogamy"], "Caste systems typically require endogamous marriage.", "Section 9.1: the caste system"],
      ["Status consistency describes:", "How consistent a person's rank is across factors such as income and education", ["The speed of social change", "A society with no inequality", "The number of social classes"], "Class systems show low status consistency; caste systems show high consistency.", "Section 9.1: status consistency"],
    ]) },
  { id: "local-government", subject: "Political Science", title: "Panchayats and municipalities", sourceId: "constitution",
    // MPSC needs a Mizo translation for every question before publication, so this starts with CUET PG.
    streams: ["cuet-pg"],
    notes: ["Part IX (Articles 243 to 243O) covers panchayats at the village, intermediate and district levels. Not less than one-third of directly elected seats are reserved for women; panchayats last five years from their first meeting. State Finance Commissions (Article 243I) and State Election Commissions (Article 243K) support them; the Eleventh Schedule lists their possible functions.", "Part IXA covers municipalities: Nagar Panchayats, Municipal Councils and Municipal Corporations (Article 243Q), with functions listed in the Twelfth Schedule. Under Article 243M, Part IX does not apply to Nagaland, Meghalaya and Mizoram, which have their own traditional and district-council institutions."],
    pitfall: "The Eleventh Schedule is for panchayats and the Twelfth for municipalities; State Election Commissions, not the Election Commission of India, conduct their elections.",
    questions: fromItems([
      ["Panchayats at the village, intermediate and district levels are constituted under Article:", "243B", ["243K", "280", "324"], "Article 243B requires a three-tier panchayat system.", "Article 243B(1)"],
      ["A state need not constitute panchayats at the intermediate level if its population does not exceed:", "20 lakh", ["10 lakh", "50 lakh", "1 crore"], "Article 243B(2) exempts states with population not exceeding twenty lakhs.", "Article 243B(2)"],
      ["Article 243D reserves for women not less than what share of seats filled by direct election in every panchayat?", "One-third", ["One-half", "One-fourth", "Two-thirds"], "Article 243D(3) sets a minimum of one-third, including seats reserved for SC and ST women.", "Article 243D(3)"],
      ["Unless dissolved sooner, a panchayat continues for:", "Five years from the date appointed for its first meeting", ["Four years from its election", "Six years from its first meeting", "Three years from its election"], "Article 243E(1) fixes a five-year term.", "Article 243E(1)"],
      ["Elections to panchayats are superintended and conducted by the:", "State Election Commission", ["Election Commission of India", "State Finance Commission", "District Collector"], "Article 243K vests panchayat elections in the State Election Commission.", "Article 243K(1)"],
      ["The commission that reviews the financial position of panchayats every five years is constituted under Article:", "243I", ["243K", "280", "243ZD"], "Article 243I provides for a State Finance Commission. Article 280 is the Union Finance Commission.", "Article 243I(1)"],
      ["Matters that may be entrusted to panchayats are listed in the:", "Eleventh Schedule", ["Twelfth Schedule", "Seventh Schedule", "Tenth Schedule"], "Article 243G refers to the Eleventh Schedule.", "Article 243G; Eleventh Schedule"],
      ["Matters that may be entrusted to municipalities are listed in the:", "Twelfth Schedule", ["Eleventh Schedule", "Seventh Schedule", "Sixth Schedule"], "Article 243W refers to the Twelfth Schedule.", "Article 243W; Twelfth Schedule"],
      ["Under Article 243M, Part IX on panchayats does not apply to the states of:", "Nagaland, Meghalaya and Mizoram", ["Assam, Manipur and Tripura", "Sikkim, Arunachal Pradesh and Goa", "Mizoram, Manipur and Tripura"], "Article 243M(2)(a) excludes Nagaland, Meghalaya and Mizoram.", "Article 243M(2)(a)"],
      ["The three types of municipality under Article 243Q are:", "Nagar Panchayat, Municipal Council and Municipal Corporation", ["Gram Sabha, Panchayat Samiti and Zila Parishad", "Ward Committee, District Planning Committee and Metropolitan Planning Committee", "Cantonment Board, Notified Area and Town Area"], "Article 243Q names the three forms by the size of the urban area.", "Article 243Q(1)"],
      ["The Gram Sabha consists of:", "Persons registered in the electoral rolls of a village within the panchayat area", ["All elected panchayat members", "Only the head of the panchayat and ward members", "Government officials of the block"], "Article 243(b) defines the Gram Sabha by the village electoral roll.", "Article 243(b)"],
    ]) },
  { id: "percentages", subject: "General Aptitude", title: "Percentages", sourceId: "percent", streams: ["mpsc", "cuet-pg"],
    notes: ["P% of N is (P/100) x N. To find what percent A is of B, compute (A/B) x 100.", "Percent increase or decrease = (change / original amount) x 100. The base is always the original amount, never the new one."],
    pitfall: "A rise from 40 to 50 is a 25% increase, but a fall from 50 to 40 is a 20% decrease: the base differs.",
    questions: fromItems(percentItems) },
  { id: "simple-interest", subject: "General Aptitude", title: "Simple interest", sourceId: "simpleInterest", streams: ["mpsc", "cuet-pg"],
    notes: ["Simple interest I = P x r x t, where P is the principal, r the annual rate as a decimal (or r/100 when r is a percent) and t the time in years.", "The amount repaid or received at the end is A = P + I. To find the rate as a percent, rearrange: r = (I x 100) / (P x t)."],
    pitfall: "Convert months to years and percentages to decimals before using I = Prt.",
    questions: fromItems(interestItems) },
];
