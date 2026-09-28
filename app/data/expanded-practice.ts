import type { QuestionSeed } from "./reviewed-content";
import { conceptFacts } from "./concept-facts.ts";
import { conceptPractice, numeric, question, type Fact } from "./question-builders.ts";

const generated: Record<string, QuestionSeed[]> = Object.fromEntries(Object.entries(conceptFacts).map(([id, facts]) => [id, conceptPractice(id.replaceAll("-", " "), facts)]));

const historyFacts: Fact[] = [
  ["Steatite", "stone used for many Harappan seals", "Chapter 1, opening paragraph"],
  ["Archaeobotany", "study of ancient plant remains such as charred seeds", "Chapter 1, Subsistence Strategies"],
  ["2600-1900 BCE", "the approximate Mature Harappan urban phase", "Chapter 1, Terminologies, Places and Time"],
  ["Undeciphered script", "the current reading status of Harappan writing described by NCERT", "Chapter 1, opening paragraph"],
  ["Archaeological evidence", "material remains used to reconstruct past societies", "Chapter 1, opening discussion"],
  ["Daya Ram Sahni", "the archaeologist who began excavations at Harappa in 1921", "Chapter 1, Timeline 2"],
  ["S.R. Rao", "the archaeologist associated with excavations at Lothal from 1955", "Chapter 1, Timeline 2"],
  ["R.S. Bisht", "the archaeologist associated with excavations at Dholavira from 1990", "Chapter 1, Timeline 2"],
  ["1922", "the year excavations at Mohenjodaro began in NCERT's timeline", "Chapter 1, Timeline 2"],
  ["1946", "the year R.E. Wheeler excavated at Harappa in NCERT's timeline", "Chapter 1, Timeline 2"],
  ["1875", "the year of Alexander Cunningham's report on a Harappan seal in NCERT's timeline", "Chapter 1, Timeline 2"],
];
generated.history = conceptPractice("Harappan archaeology", historyFacts);

const environmentFacts: Fact[] = [
  ["Montreal Protocol", "international agreement controlling ozone-depleting substances", "About the Montreal Protocol: introduction"],
  ["1987", "the year the Montreal Protocol was adopted", "About the Montreal Protocol: adoption"],
  ["Ozone layer", "atmospheric protection that reduces harmful ultraviolet exposure", "About the Montreal Protocol: introduction"],
  ["Chlorofluorocarbons", "ozone-depleting chemicals commonly abbreviated CFCs", "About the Montreal Protocol: controlled substances"],
  ["Hydrochlorofluorocarbons", "ozone-depleting chemicals commonly abbreviated HCFCs", "About the Montreal Protocol: controlled substances"],
  ["Hydrofluorocarbons", "non-ozone-depleting gases targeted for climate reasons by the Kigali Amendment", "About the Montreal Protocol: Kigali Amendment"],
  ["Kigali Amendment", "amendment adding an HFC phase-down to the Montreal Protocol framework", "About the Montreal Protocol: Kigali Amendment"],
  ["2016", "the adoption year of the Kigali Amendment", "About the Montreal Protocol: Kigali Amendment"],
  ["Phase-out", "scheduled elimination of controlled production and consumption rather than an immediate universal ban", "About the Montreal Protocol: control schedules"],
];
generated["environmental-studies"] = conceptPractice("Ozone agreements", environmentFacts);

generated.geography = [];
for (let i = 0; i < 11; i++) {
  const north = 8 + i * 2, south = 5 + i;
  generated.geography.push(numeric(`Two locations are at ${north} degrees N and ${south} degrees S. Their difference in latitude is:`, north + south, " degrees", `The points are on opposite sides of the equator, so add ${north} and ${south}.`, "What is latitude?: north/south coordinates", i));
  generated.geography.push(numeric(`A location moves from ${north} degrees N to ${north + south} degrees N along a meridian. Its change in latitude is:`, south, " degrees", `Both coordinates are north: ${north + south} - ${north} = ${south} degrees.`, "What is latitude?: degrees of latitude", i + 1));
}

const englishSentences: [string, boolean][] = [
  ["The collection of stamps ___ valuable.", true], ["The pages of this book ___ numbered.", false],
  ["Each of the rooms ___ available.", true], ["Everyone in these groups ___ welcome.", true],
  ["The teachers near the gate ___ ready.", false], ["The manager of both teams ___ present.", true],
  ["Either of the two plans ___ acceptable.", true], ["Neither of the two routes ___ convenient.", true],
  ["The results of the survey ___ clear.", false], ["The quality of these samples ___ consistent.", true],
  ["Rina and her brother ___ here.", false], ["The keys to this cupboard ___ missing.", false],
  ["One of my classmates ___ absent.", true], ["Somebody from the offices ___ waiting.", true],
  ["The students beside the window ___ quiet.", false], ["The colour of these curtains ___ unusual.", true],
  ["Nobody in these buildings ___ awake.", true], ["The walls of that house ___ white.", false],
  ["A basket of apples ___ on the table.", true], ["The guide and the visitors ___ outside.", false],
  ["The photographs in the album ___ faded.", false], ["Every one of the entries ___ legible.", true],
];
generated.english = englishSentences.map(([sentence, singular], index) => question(`Complete in the simple present: '${sentence}'`, singular ? "is" : "are", singular ? ["are", "am", "be"] : ["is", "am", "be"], `The grammatical subject is ${singular ? "singular" : "plural"}; use '${singular ? "is" : "are"}'. Intervening phrases do not change subject number.`, "Purdue OWL: subject-verb agreement; original sentence variant", index));

generated.economics = [];
for (let i = 0; i < 11; i++) {
  const supply = 130 + i * 15, demand = 80 + i * 9;
  generated.economics.push(numeric(`At price P, quantity supplied is ${supply} units and quantity demanded is ${demand} units. What is the surplus?`, supply - demand, " units", `Surplus = supply - demand = ${supply} - ${demand} = ${supply - demand}.`, "Section 3.1: surplus", i));
  generated.economics.push(numeric(`At price Q, buyers demand ${supply + 7} units and sellers offer ${demand + 3} units. What is the shortage?`, supply - demand + 4, " units", `Shortage = demand - supply = ${supply + 7} - ${demand + 3} = ${supply - demand + 4}.`, "Section 3.1: shortage", i + 1));
}

generated["general-aptitude"] = [];
for (let i = 0; i < 11; i++) {
  const length = 13 + i, width = 4 + i;
  generated["general-aptitude"].push(numeric(`A rectangle is ${length} cm long and ${width} cm wide. What is its perimeter?`, 2 * (length + width), " cm", `P = 2(l + w) = 2(${length} + ${width}) = ${2 * (length + width)} cm.`, "Section 2.5: geometric applications", i));
  generated["general-aptitude"].push(numeric(`A rectangle has area ${length * width} cm^2 and length ${length} cm. Find its width.`, width, " cm", `Width = area / length = ${length * width}/${length} = ${width} cm.`, "Section 2.5: geometric applications", i + 1));
}

generated.physics = [];
for (let i = 0; i < 9; i++) {
  const m = i + 4, a = i + 2, g = 10;
  const location = "Section 4.3: Newton's second law and weight";
  generated.physics.push(
    numeric(`A constant-mass body of ${m} kg accelerates at ${a} m/s^2 in an inertial frame. Find the net force.`, m * a, " N", `F = ma = ${m} x ${a} = ${m * a} N.`, location, i),
    numeric(`A net force of ${m * (a + 2)} N acts on ${m} kg. Find the acceleration.`, a + 2, " m/s^2", `a = F/m = ${m * (a + 2)}/${m} = ${a + 2} m/s^2.`, location, i + 1),
    numeric(`An object accelerates at ${a + 3} m/s^2 under a net force of ${(m + 1) * (a + 3)} N. Find its mass.`, m + 1, " kg", `m = F/a = ${(m + 1) * (a + 3)}/${a + 3} = ${m + 1} kg.`, location, i + 2),
    numeric(`At g = ${g} m/s^2, find the weight of an object of mass ${m + 2} kg.`, (m + 2) * g, " N", `W = mg = ${m + 2} x ${g} = ${(m + 2) * g} N.`, location, i + 3),
    numeric(`Horizontal forces ${m * a + 11} N east and 11 N west act on ${m} kg; vertical forces balance. Find the acceleration magnitude.`, a, " m/s^2", `Net force = ${m * a + 11} - 11 = ${m * a} N east. Divide by ${m} kg.`, location, i),
    numeric(`A body accelerates at ${a} m/s^2. If its net force doubles while mass stays fixed, its new acceleration is:`, 2 * a, " m/s^2", `At constant mass, doubling net force doubles acceleration: 2 x ${a} = ${2 * a}.`, location, i + 1),
    numeric(`A ${m} kg object is supported by an upward force of ${m * 10 + m * a} N. With g = 10 m/s^2 and no other forces, find its upward acceleration.`, a, " m/s^2", `Weight = ${m * 10} N. Upward net force = ${m * a} N, so a = ${m * a}/${m} = ${a}.`, location, i + 2),
  );
}

generated.chemistry = [];
for (let i = 0; i < 8; i++) {
  const z = 12 + i, n = 14 + i, mass = z + n, charge = i % 3 + 1;
  const location = "Section 2.3: atomic number, mass number and ions";
  generated.chemistry.push(
    numeric(`A nucleus has Z = ${z} and mass number ${mass}. Find its neutron count.`, n, "", `N = A - Z = ${mass} - ${z} = ${n}.`, location, i),
    numeric(`An atom contains ${z} protons and ${n + 3} neutrons. Find its mass number.`, mass + 3, "", `A = Z + N = ${z} + ${n + 3} = ${mass + 3}.`, location, i + 1),
    numeric(`An atom has mass number ${mass + 4} and ${n + 4} neutrons. Find its atomic number.`, z, "", `Z = A - N = ${mass + 4} - ${n + 4} = ${z}.`, location, i + 2),
    numeric(`An ion has ${z} protons and charge +${charge}. How many electrons does it contain?`, z - charge, "", `A positive charge denotes an electron deficit: ${z} - ${charge} = ${z - charge}.`, location, i + 3),
    numeric(`An ion has ${z} protons and charge -${charge}. How many electrons does it contain?`, z + charge, "", `A negative charge denotes extra electrons: ${z} + ${charge} = ${z + charge}.`, location, i),
    numeric(`A neutral atom has atomic number ${z + 9}. How many electrons does it have?`, z + 9, "", `In a neutral atom, electron count equals proton count, ${z + 9}.`, location, i + 1),
    numeric(`Two isotopes have mass numbers ${mass} and ${mass + charge + 1}. How many more neutrons does the heavier isotope have?`, charge + 1, "", `Equal proton counts mean the mass-number difference is the neutron-count difference: ${charge + 1}.`, location, i + 2),
    numeric(`A neutral atom contains ${z} protons and ${n} neutrons. Count protons, neutrons and electrons together.`, 2 * z + n, "", `There are ${z} electrons as well as ${z} protons and ${n} neutrons; total = ${2 * z + n}.`, location, i + 3),
  );
}

generated.mathematics = [];
for (let i = 0; i < 8; i++) {
  const r = 6 + i, s = 17 + i, location = "Section 2.5: quadratic equations";
  generated.mathematics.push(
    numeric(`What is the larger root of (x - ${r})(x - ${s}) = 0?`, s, "", `The zero-product rule gives roots ${r} and ${s}; the larger is ${s}.`, location, i),
    numeric(`Find the sum of the roots of x^2 - ${r + s}x + ${r * s} = 0.`, r + s, "", `Factoring gives (x - ${r})(x - ${s}); their sum is ${r + s}.`, location, i + 1),
    numeric(`Find the product of the roots of (x - ${r})(x + ${s}) = 0.`, -r * s, "", `The roots are ${r} and -${s}; their product is ${-r * s}.`, location, i + 2),
    numeric(`Find the discriminant of x^2 - ${2 * r}x + ${r * r - 4} = 0.`, 16, "", `b^2 - 4ac = ${4 * r * r} - ${4 * (r * r - 4)} = 16.`, location, i + 3),
    numeric(`For what k does x^2 + ${2 * r}x + k = 0 have a repeated real root?`, r * r, "", `Zero discriminant gives ${4 * r * r} - 4k = 0; k = ${r * r}.`, location, i),
    numeric(`Find the positive solution of x^2 = ${s * s}.`, s, "", `The roots are plus or minus ${s}; the positive solution is ${s}.`, location, i + 1),
    numeric(`What is the distance between the two real roots of (x + ${r})(x - ${s}) = 0?`, r + s, "", `The roots are -${r} and ${s}; their distance is ${s} - (-${r}) = ${r + s}.`, location, i + 2),
    numeric(`A square has area ${r * r} m^2. What is its side length?`, r, " m", `A positive side length satisfies s^2 = ${r * r}, so s = ${r} m.`, location, i + 3),
  );
}

export const practiceExpansion = generated;

// Counts refer to additions over the released 44-question foundation bank.
export const additionalQuotas: Record<string, Record<string, number>> = {
  mpsc: Object.fromEntries(["political-science", "economics", "english", "environmental-studies", "public-administration", "history", "geography", "education", "general-aptitude"].map(id => [id, 20]).concat([["mizoram", 23]])),
  neet: { biology: 67, chemistry: 67, physics: 66 },
  jee: { physics: 66, chemistry: 67, mathematics: 67 },
  "cuet-pg": Object.fromEntries(["political-science", "economics", "sociology", "english", "history", "geography", "education", "general-aptitude"].map(id => [id, 25])),
};
