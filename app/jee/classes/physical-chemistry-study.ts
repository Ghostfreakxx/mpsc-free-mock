import { extendThermoSolutionProcessesLesson } from "./thermo-solution-processes-study.ts";
import { extendThermoSolutionBalancesLesson } from "./thermo-solution-balances-study.ts";
import { extendPBlockThermoSolutionsLesson } from "./p-block-thermo-solutions-study.ts";
import type { StudyLesson } from "./course";
import { physicalChemistryAdditions } from "./physical-chemistry-additions.ts";
const syllabus = { title: "NTA: JEE Main 2026 Chemistry syllabus", url: "https://jeemain.nta.nic.in/document/syllabus-2026/" };

export const physicalChemistryLessons: StudyLesson[] = [
  {
    id: "chemical-thermodynamics", subject: "Chemistry", unit: 4,
    title: "Chemical thermodynamics: energy, direction and equilibrium",
    summary: "Heat and work signs, enthalpy, Hess cycles, entropy and Gibbs-energy calculations.",
    prerequisites: "Balanced equations, moles, temperature in kelvin and basic logarithms.",
    remaining: "Unit 4 has a twenty-three-chapter Marin recording and written notes, including a full NaCl Born-Haber cycle, a variable reaction heat-capacity integral, ideal-gas mixing entropy and reaction normalization. More complex ionic cycles, phase-dependent heat capacities and further mixed problems remain; this is not complete Unit 4 coverage.",
    sections: [
      { title: "Define the system before following energy", paragraphs: [
        "Imagine a reaction in a flask. The chosen reacting contents are the system; everything else is its surroundings. An open system can exchange matter and energy, a closed system can exchange energy but not matter, and an isolated system exchanges neither with its surroundings.",
        "Internal energy, enthalpy and entropy are state functions: their changes depend on endpoint states. Heat and work describe transfers along a process. Mass and total volume are extensive properties; temperature and pressure are intensive. Dividing an extensive property by amount can create an intensive molar property."
      ] },
      { title: "Chemistry counts work done on the system as positive", paragraphs: [
        "Use Delta U = q + w, with heat entering positive and work done on the system positive. Against constant external pressure, expansion gives w = -P_external Delta V. A gas that expands loses energy through this work term. Physics sometimes uses work by the gas instead; both conventions agree when the signs are translated consistently.",
        "Absorb 500 J while expanding by 1.00 L against 2.00 bar. Since 1 L bar = 100 J, work is -200 J and internal energy rises by 300 J. Use external pressure in the work expression. Isothermal means constant temperature, adiabatic means no heat transfer, isochoric means constant volume, and isobaric means constant pressure; these are different restrictions."
      ], formula: "Delta U = q + w; w = -integral P_external dV" },
      { title: "Enthalpy connects constant-pressure heat with a state change", paragraphs: [
        "Define H = U + PV. For a closed system with only pressure-volume work at constant pressure, q_p = Delta H. At fixed volume with no other work, q_v = Delta U. Exothermic enthalpy changes are negative; endothermic changes are positive. Always state physical states because forming liquid water and water vapour releases different amounts of energy.",
        "For an ideal-gas reaction at a common temperature, Delta H = Delta U + Delta n_g RT, where Delta n_g counts gaseous products minus gaseous reactants using the balanced coefficients. Heat capacity C connects a small temperature change with heat under the specified constraint. For an ideal gas, molar C_p - C_v = R; do not apply that shortcut to every substance."
      ], formula: "H = U + PV; ideal gases: Delta H = Delta U + Delta n_g RT" },
      { title: "Hess's law lets us choose a convenient route", paragraphs: [
        "A reaction enthalpy is a state-function change. Reverse a thermochemical equation and reverse its enthalpy sign. Multiply every coefficient by a number and multiply the enthalpy by the same number. Add equations only after checking which species cancel.",
        "Using consistent standard formation enthalpies, reaction enthalpy equals the coefficient-weighted product sum minus the reactant sum. Standard formation means forming one mole from elements in their reference states; the formation enthalpy of an element in that reference state is zero, not every enthalpy associated with the element. Average gas-phase bond enthalpies give an approximate broken-minus-formed estimate, not an exact substitute for phase-specific formation data."
      ], formula: "Delta H_reaction = sum nu Delta Hf(products) - sum nu Delta Hf(reactants)" },
      { title: "Name the enthalpy process precisely", paragraphs: [
        "Combustion enthalpy describes complete burning of the specified amount, commonly one mole, with product states stated. Atomization produces gaseous atoms. Sublimation takes a solid to gas. Bond dissociation breaks a specified gas-phase bond; successive bond dissociations need not have identical energies.",
        "Hydration describes gaseous ions becoming hydrated; ionization removes an electron from a gaseous species. Dissolution combines several energetic contributions, so an ionic solid can dissolve with either a positive or negative overall enthalpy. These process definitions are the starting point for later cycles, not a guarantee that one memorised sign solves every numerical problem."
      ] },
      { title: "Spontaneous does not mean fast or always exothermic", paragraphs: [
        "Entropy describes how energy and accessible states are distributed. The second-law direction criterion is Delta S_universe > 0 for a spontaneous process, with system and surroundings both included. The system's entropy alone need not increase. A reversible equilibrium limit has zero total entropy production.",
        "At constant temperature and pressure for the usual closed chemical system with no imposed non-expansion work, Delta G = Delta H - T Delta S. Negative Delta G indicates a thermodynamically favoured direction under those conditions, not its rate. A high activation barrier can make a favourable reaction slow. Convert entropy in J/(mol K) to kJ/(mol K) if enthalpy is in kJ/mol."
      ], formula: "Delta G = Delta H - T Delta S (same endpoint temperature)" },
      { title: "Standard Gibbs energy connects to the equilibrium constant", paragraphs: [
        "At a specified temperature, Delta G = Delta G_standard + RT ln Q for a reaction with the appropriate dimensionless activity quotient. At equilibrium, Delta G is zero and Q is K, so Delta G_standard = -RT ln K. A negative standard change means K exceeds one; it does not mean every possible starting mixture must react forward.",
        "Use natural logarithms and match energy units with R. If Delta G_standard is about -5.744 kJ/mol at 300 K, divide 5744 J/mol by 8.314 x 300 J/mol. This gives ln K about 2.303 and K about ten. Standard refers to stated reference activities, not automatically a temperature of 298 K."
      ], formula: "Delta G_standard = -RT ln K; actual direction also depends on Q" },
    ],
    examples: [
      { question: "A closed gas absorbs 500 J and expands by 1.00 L against constant 2.00 bar. Find w and Delta U.", steps: ["Expansion Delta V is positive; Chemistry work on the gas is negative.", "w = -2.00 x 1.00 x 100 = -200 J.", "Delta U = 500 - 200 = 300 J."], answer: "w = -200 J; Delta U = +300 J." },
      { question: "Illustrative consistent data: C(graphite) + O2 -> CO2 has Delta H = -394 kJ/mol; CO + 1/2 O2 -> CO2 has -283 kJ/mol. Find C + 1/2 O2 -> CO.", steps: ["Reverse the CO oxidation: CO2 -> CO + 1/2 O2, with +283 kJ/mol.", "Add to carbon combustion; cancel CO2 and one half of O2.", "The desired enthalpy is -394 + 283 = -111 kJ/mol for the stated rounded data."], answer: "-111 kJ/mol with the supplied illustrative values." },
      { question: "Assume Delta H = -40.0 kJ/mol and Delta S = -100 J/(mol K) are constant over the stated range. Compare Delta G at 300 K and 500 K.", steps: ["Convert entropy to -0.100 kJ/(mol K).", "At 300 K: -40.0 - 300(-0.100) = -10.0 kJ/mol.", "At 500 K: -40.0 - 500(-0.100) = +10.0 kJ/mol.", "The crossover in this constant-property approximation is 400 K."], answer: "Favoured forward at 300 K; not favoured forward at 500 K under the stated constraints." },
    ],
    quiz: [
      { question: "In the Chemistry convention, expansion work against positive external pressure is:", options: ["Positive", "Negative", "Always zero", "A state function"], answer: 1, explanation: "Expansion has positive Delta V, so work on the system w = -P_external Delta V is negative." },
      { question: "A system absorbs 100 J and has 40 J of work done on it. Delta U is:", options: ["60 J", "-140 J", "140 J", "-60 J"], answer: 2, explanation: "Both incoming transfers are positive: Delta U = q + w = 100 + 40 = 140 J." },
      { question: "For a closed system at constant pressure with only PV work, transferred heat equals:", options: ["Delta H", "Delta G", "Every change in entropy", "Zero in every reaction"], answer: 0, explanation: "Under these constraints, q_p = Delta H; the constraints are essential to this equality." },
      { question: "Reversing a thermochemical equation changes its Delta H by:", options: ["Squaring it", "Keeping its sign", "Setting it to zero", "Reversing its sign"], answer: 3, explanation: "Returning between the same endpoint states reverses the enthalpy difference." },
      { question: "Delta H < 0 and Delta S < 0 favour negative Delta G mainly at:", options: ["Higher temperatures only", "Lower temperatures", "All temperatures necessarily", "No temperature ever"], answer: 1, explanation: "The positive -T Delta S contribution grows with temperature and can overcome the negative enthalpy term." },
      { question: "At a given temperature, negative Delta G_standard implies:", options: ["K = 0", "K < 1", "K > 1", "Every initial mixture has negative actual Delta G"], answer: 2, explanation: "Delta G_standard = -RT ln K makes ln K positive, but actual Delta G also depends on Q." },
    ],
    sources: [syllabus, { title: "OpenStax: enthalpy and Hess's law", url: "https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy" }, { title: "OpenStax: Gibbs energy", url: "https://openstax.org/books/chemistry-2e/pages/16-4-free-energy" }],
  },
  {
    id: "solutions", subject: "Chemistry", unit: 5,
    title: "Solutions: concentration, vapour pressure and particle counting",
    summary: "Concentration units, Raoult's law, non-ideality, colligative effects and molar mass.",
    prerequisites: "Mole Concept, ratios, temperature in kelvin and basic gas equations.",
    remaining: "Unit 5 has a twenty-three-chapter Marin recording and written notes, including density conversions, Henry's law, azeotropes, boiling elevation and further dissociation practice. Detailed phase diagrams, quantitative nonideal activities and wider mixed problems remain; this is not complete solution chemistry.",
    sections: [
      { title: "The denominator is part of the definition", paragraphs: [
        "Molarity is solute moles per litre of solution, while molality is solute moles per kilogram of solvent. Dissolve one mole in enough liquid to make two litres of solution and molarity is 0.50 mol/L. Dissolve one mole in 0.50 kg solvent and molality is 2.0 mol/kg. These descriptions cannot be converted into one another without further mass or density information.",
        "Solution volume usually changes with temperature, so molarity can change without losing solute. For a fixed composition with no evaporation, molality uses masses and avoids that volume dependence. Do not replace solution volume with the volume of solvent measured before mixing."
      ], formula: "M = n_solute/V_solution(L); m = n_solute/mass_solvent(kg)" },
      { title: "Percentages and mole fractions answer different questions", paragraphs: [
        "Mass percent is solute mass divided by total solution mass times 100. Volume percent uses the stated solute volume divided by final solution volume times 100. A 10% mass solution contains 10 g solute in 100 g solution, not in 100 g solvent. State temperature and preparation convention for volume-based quantities.",
        "Mole fraction x_i is component moles divided by the sum of all component moles. In a binary solution with 1 mol A and 3 mol B, x_A = 0.25 and x_B = 0.75. Their sum is one. Mass fractions and mole fractions are equal only in special cases, not as a general shortcut."
      ], formula: "x_i = n_i/sum n_j; mass percent = 100 mass_solute/mass_solution" },
      { title: "Raoult's law has a model and a temperature", paragraphs: [
        "For an ideal liquid mixture, a volatile component's partial vapour pressure is its liquid mole fraction times its pure-liquid vapour pressure at the same temperature. For a nonvolatile solute, only the solvent contributes appreciably: P_solvent = x_solvent P_pure. If x_solvent = 0.90 and P_pure = 100 kPa, the solution pressure is 90 kPa.",
        "For two volatile ideal components, total pressure is x_A P_A_pure + x_B P_B_pure. The gas above the liquid need not have the same composition: y_A = P_A/P_total in the ideal-vapour model. With x_A = x_B = 0.50 and pure pressures 80 and 40 kPa, total pressure is 60 kPa and vapour y_A = 2/3."
      ], formula: "P_i = x_i P_i_pure; P_total = sum P_i; y_i = P_i/P_total" },
      { title: "Non-ideal interactions bend the pressure pattern", paragraphs: [
        "An ideal solution follows Raoult's law throughout composition and has zero mixing enthalpy and zero mixing volume in that idealization. Real unlike-molecule interactions can differ from the corresponding like-molecule interactions, producing deviations.",
        "Positive deviation means vapour pressure above the ideal prediction, commonly when unlike interactions are less favourable; negative deviation means pressure below it, commonly with stronger unlike interactions. Temperature, composition and the actual system matter. Strong deviations can produce constant-boiling azeotropes; detailed graph reading and distillation limits belong to a later companion."
      ] },
      { title: "Count effective particles for colligative properties", paragraphs: [
        "For a dilute ideal solution with a nonvolatile solute, relative lowering of solvent vapour pressure equals solute mole fraction in the undissociated ideal model. Boiling-point elevation and freezing-point depression depend on molality: Delta T_b = i K_b m and Delta T_f = i K_f m. Depression is reported as a positive magnitude; actual freezing temperature is lower.",
        "Dissolved particles lower solvent chemical potential, altering the temperatures where solvent phases are in equilibrium. Ten grams of a non-electrolyte with molar mass 180 g/mol in 0.100 kg solvent gives m = 0.5556 mol/kg. With K_f = 1.86 K kg/mol and i = 1, depression is about 1.03 K. The formula is a dilute-solution approximation, not a guarantee for concentrated mixtures."
      ], formula: "Delta T_b = i K_b m; Delta T_f = i K_f m" },
      { title: "Osmotic pressure can reveal molar mass", paragraphs: [
        "A semipermeable membrane passes solvent but blocks the chosen solute. Osmotic pressure is the pressure required to prevent net solvent flow driven by a solution's composition difference. In the dilute ideal model, pi = i C R T, with C as solute molarity before applying the particle factor.",
        "Use matching units: R = 0.082057 L atm/(mol K) goes with mol/L and pressure in atm. A 0.100 mol/L non-electrolyte at 300 K gives about 2.46 atm. For solute mass w and solution volume V, molar mass is i w RT/(pi V) in compatible units. The volume is solution volume, unlike the solvent-mass denominator in cryoscopy."
      ], formula: "pi = i C R T; molar mass = i w RT/(pi V)" },
      { title: "Dissociation and association change the apparent mass", paragraphs: [
        "The van't Hoff factor i compares the observed colligative effect with the undissociated-solute prediction. For one formula unit splitting into nu particles with fraction alpha dissociated, i = 1 + alpha(nu - 1). Complete ideal NaCl dissociation predicts i = 2, but real electrolyte interactions can make measured values different.",
        "For association into n-mers, i = 1 - alpha(1 - 1/n), where alpha is the fraction of original molecules incorporated into aggregates. If half the original molecules form dimers, i = 0.75. Ignoring i gives apparent molar mass equal to true molar mass divided by i: association looks heavier, dissociation looks lighter. Check the actual chemical behavior rather than assuming every solute has i = 1."
      ], formula: "Dissociation: i = 1 + alpha(nu - 1); association: i = 1 - alpha(1 - 1/n)" },
    ],
    examples: [
      { question: "Mix 20 g solute and 180 g solvent without loss. Find mass percent and molality if solute molar mass is 100 g/mol.", steps: ["Total solution mass is 200 g, so mass percent is 100 x 20/200 = 10%.", "Solute amount is 20/100 = 0.20 mol.", "Solvent mass is 0.180 kg, so molality is 0.20/0.180 = 1.11 mol/kg."], answer: "10% by mass; approximately 1.11 mol/kg. Molarity needs solution volume." },
      { question: "Find freezing depression for 0.0100 mol non-electrolyte in 0.100 kg water. Use K_f = 1.86 K kg/mol and i = 1.", steps: ["Molality = 0.0100/0.100 = 0.100 mol/kg.", "Delta T_f = 1 x 1.86 x 0.100 = 0.186 K.", "Subtract this depression from the pure-solvent freezing temperature under the same conditions."], answer: "0.186 K depression; approximately -0.186 degrees C if pure water freezes at 0 degrees C under the assumed pressure." },
      { question: "A 2.00 g non-electrolyte in 1.00 L solution gives pi = 0.246 atm at 300 K. Estimate molar mass using R = 0.082057 L atm/(mol K).", steps: ["Assume dilute ideal behavior and i = 1.", "Molar mass = 2.00 x 0.082057 x 300/(0.246 x 1.00).", "The result is approximately 200 g/mol; pressure units cancel through R."], answer: "Approximately 200 g/mol in the stated model." },
    ],
    quiz: [
      { question: "Molality uses which denominator?", options: ["Litres of solvent", "Kilograms of solution", "Kilograms of solvent", "Litres of solution"], answer: 2, explanation: "Molality is solute moles per kilogram of solvent, not per kilogram of total solution." },
      { question: "10 g solute in 90 g solvent gives mass percent:", options: ["10%", "11.1%", "90%", "1%"], answer: 0, explanation: "The total solution is 100 g, so the solute mass percentage is 100 x 10/100 = 10%." },
      { question: "Ideal nonvolatile-solute solution has x_solvent = 0.80 and pure-solvent pressure 50 kPa. Its pressure is:", options: ["10 kPa", "62.5 kPa", "50 kPa", "40 kPa"], answer: 3, explanation: "Raoult's law gives 0.80 x 50 = 40 kPa at the specified common temperature." },
      { question: "For i = 1, K_f = 1.86 and m = 0.100, freezing depression is:", options: ["18.6 K", "0.186 K", "1.86 K", "-1.86 K"], answer: 1, explanation: "Multiply i K_f m = 1 x 1.86 x 0.100 = 0.186 K; depression is a positive magnitude." },
      { question: "Half the original molecules associate into dimers. The ideal particle factor is:", options: ["2", "1.5", "0.75", "0.5"], answer: 2, explanation: "i = 1 - alpha(1 - 1/2) = 1 - 0.5 x 0.5 = 0.75." },
      { question: "Ignoring dissociation with i > 1 makes the inferred molar mass:", options: ["Smaller than the true value", "Always unchanged", "Larger than the true value", "Always zero"], answer: 0, explanation: "The observed effect is larger; an i = 1 calculation gives apparent mass equal to true mass divided by i." },
    ],
    sources: [syllabus, { title: "OpenStax: molarity", url: "https://openstax.org/books/chemistry-2e/pages/3-3-molarity" }, { title: "OpenStax: colligative properties", url: "https://openstax.org/books/chemistry-2e/pages/11-4-colligative-properties" }],
  },
];

// Keep the expanded written companion and recorded practice in step.
for (const lesson of physicalChemistryLessons) {
  const extra = physicalChemistryAdditions[lesson.id as keyof typeof physicalChemistryAdditions];
  lesson.sections.push(...extra.chapters.map(chapter => ({
    title: chapter.title, paragraphs: [chapter.script], formula: chapter.formula,
  })));
  lesson.quiz.push(...extra.quiz);
  lesson.sources.push(...(lesson.id === "solutions" ? [
    { title: "NCERT: Solutions — Henry law and nonideal mixtures", url: "https://ncert.nic.in/textbook/pdf/lech101.pdf" },
  ] : [
    { title: "OpenStax: calorimetry", url: "https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry" },
    { title: "OpenStax: entropy", url: "https://openstax.org/books/chemistry-2e/pages/16-2-entropy" },
  ]));
  if (lesson.id === "chemical-thermodynamics") lesson.examples.push(
    { question: "A solution and vessel have combined heat capacity 500 J/K. A reaction of 0.0500 mol causes a 2.00 K rise. Find its molar heat assuming negligible heat loss.", steps: ["The surroundings absorb 500 × 2 = 1000 J.", "The reaction releases 1.00 kJ, so its heat is negative.", "Divide by 0.0500 mol; at constant pressure with only PV work this gives molar enthalpy."], answer: "−20.0 kJ/mol." },
    { question: "Use lattice dissociation +780 and total ion hydration −750 kJ/mol for matching endpoint states. Find the enthalpy of solution.", steps: ["Dissociate solid into gaseous ions: +780 kJ/mol.", "Hydrate those ions: −750 kJ/mol.", "Add the stages; the gaseous ions cancel."], answer: "+30 kJ/mol for the supplied illustrative data." },
    { question: "One mole warms reversibly from 300 to 600 K at constant pressure with constant molar Cp = 30 J/(mol K). Find its entropy change.", steps: ["Integrate Cp/T between the absolute endpoint temperatures.", "ΔS = 30 ln(600/300) J/(mol K).", "ln 2 ≈ 0.6931; the entropy rises."], answer: "+20.8 J/(mol K)." },
  );
  else lesson.examples.push(
    { question: "Convert 1.00 mol/L to molality for solute molar mass 60.0 g/mol and solution density 1.04 g/mL at the same temperature.", steps: ["Choose 1 L: total mass = 1040 g and solute mass = 60 g.", "Solvent mass = 980 g = 0.980 kg.", "Divide 1.00 mol by 0.980 kg solvent."], answer: "1.02 mol/kg." },
    { question: "A gas obeys p = KH x with KH = 40000 bar at the stated temperature. Find x at gas partial pressure 2.00 bar.", steps: ["Use the partial pressure of this gas.", "x = p/KH = 2.00/40000.", "The pressure units cancel; mole fraction is dimensionless."], answer: "5.00 × 10⁻⁵." },
    { question: "An ideal dissociation model gives i = 2.60 for a solute producing three ions. Find alpha and the formal concentration isotonic with 0.100 M non-electrolyte at the same temperature.", steps: ["i = 1 + alpha(3 − 1), hence alpha = 0.80.", "Equal osmotic pressures at equal temperature require equal iC.", "C = 0.100/2.60 mol/L."], answer: "80% dissociation; approximately 0.0385 M salt solution." },
  );
}

for (const lesson of physicalChemistryLessons) extendPBlockThermoSolutionsLesson(lesson);

for (const lesson of physicalChemistryLessons) extendThermoSolutionBalancesLesson(lesson);

for (const lesson of physicalChemistryLessons) extendThermoSolutionProcessesLesson(lesson);
