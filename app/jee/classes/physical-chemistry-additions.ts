// Authored by scripts/expand-physical-chemistry.mjs.
export const physicalChemistryAdditions = {
  "chemical-thermodynamics": {
    "chapters": [
      {
        "title": "Formation and bond-enthalpy calculations",
        "formula": "ΔH°r = ΣνΔH°f(products) − ΣνΔH°f(reactants)",
        "script": "Formation enthalpies let us assemble a reaction without measuring it directly. Use the balanced coefficients and the physical states in the data. For methane combustion to carbon dioxide gas and liquid water, take illustrative standard formation enthalpies in kilojoules per mole: methane minus seventy five, carbon dioxide minus three hundred ninety four, and liquid water minus two hundred eighty six. Oxygen in its reference state contributes zero. Products contribute minus three hundred ninety four plus twice minus two hundred eighty six, giving minus nine hundred sixty six. Subtract the reactant contribution of minus seventy five. The reaction enthalpy is minus eight hundred ninety one kilojoules per mole of methane for these rounded data. Changing the product to water vapour changes the answer. Average bond enthalpies instead estimate energy for gas phase bonds broken minus bonds formed. They are approximate and do not automatically include condensation or solid lattice effects. An element's zero standard formation enthalpy applies to its reference state, not to every allotrope, gaseous atom or ion. Always label the amount and phase beside a thermochemical result.",
        "points": [
          "Products · −394 + 2(−286) · −966",
          "Reactants · −75 + 2(0) · −75",
          "Products − reactants · −966 − (−75) · −891 kJ mol⁻¹"
        ],
        "board": {
          "heading": "Formation and bond-enthalpy calculations",
          "columns": [
            "Step",
            "Supplied data / kJ mol⁻¹",
            "Result"
          ],
          "rows": [
            [
              "Products",
              "−394 + 2(−286)",
              "−966"
            ],
            [
              "Reactants",
              "−75 + 2(0)",
              "−75"
            ],
            [
              "Products − reactants",
              "−966 − (−75)",
              "−891 kJ mol⁻¹"
            ]
          ]
        }
      },
      {
        "title": "Lattice dissociation and hydration",
        "formula": "ΔHsolution = ΔHlattice(dissociation) + ΣΔHhydration",
        "script": "An ionic dissolution cycle separates processes that are easily confused. First imagine pulling the solid into separated gaseous ions. Define this lattice dissociation enthalpy as positive. Then hydrate those gaseous ions to the chosen aqueous reference states; hydration enthalpies are normally negative. Adding both stages gives the enthalpy of solution for matching endpoints and concentration conventions. With illustrative values of plus seven hundred eighty kilojoules per mole for lattice dissociation and minus seven hundred fifty for total hydration, dissolution has enthalpy plus thirty kilojoules per mole. A positive result does not by itself prove that dissolution is impossible, because the Gibbs energy also contains an entropy contribution. Some tables instead define lattice enthalpy for forming the solid from gaseous ions. That is the opposite process and has the opposite sign. Never insert a number until its process is clear. Atomization, ionization and electron attachment provide further steps in a full Born Haber cycle. Keep each species and charge balanced when adding them. This two stage example isolates dissolution bookkeeping rather than claiming to reproduce every step of a complete formation cycle.",
        "points": [
          "Lattice dissociation · +780 · Solid → gaseous ions",
          "Total hydration · −750 · Gas ions → aqueous ions",
          "Dissolution · +30 · Sum matching endpoints"
        ],
        "board": {
          "heading": "Lattice dissociation and hydration",
          "columns": [
            "Process",
            "Illustrative ΔH / kJ mol⁻¹",
            "Direction"
          ],
          "rows": [
            [
              "Lattice dissociation",
              "+780",
              "Solid → gaseous ions"
            ],
            [
              "Total hydration",
              "−750",
              "Gas ions → aqueous ions"
            ],
            [
              "Dissolution",
              "+30",
              "Sum matching endpoints"
            ]
          ]
        }
      },
      {
        "title": "Calorimetry with the vessel included",
        "formula": "qsurroundings = (m c + Ccal) ΔT",
        "script": "A calorimeter records a temperature change in material surrounding the reacting system. Include every heat capacity specified in the problem. Suppose one hundred grams of solution has specific heat capacity four point two joules per gram kelvin, and the calorimeter contributes eighty joules per kelvin. The combined heat capacity is four hundred twenty plus eighty, or five hundred joules per kelvin. A temperature rise of two kelvin means the measured surroundings gain one thousand joules. If heat loss is negligible, the reaction releases one thousand joules. For zero point zero five zero mole reacting as written, the molar heat is minus twenty kilojoules per mole. The negative sign belongs to the reaction, while the solution and vessel gained heat. At approximately constant pressure with only pressure volume work, the reaction heat corresponds to enthalpy change. In a rigid bomb calorimeter, the corresponding constant volume heat gives internal energy change; convert to enthalpy when the gas mole correction is required. Check whether a supplied calorimeter constant already includes the solution before adding its heat capacity again.",
        "points": [
          "Total heat capacity · 100 × 4.2 + 80 · 500 J K⁻¹",
          "Surroundings heat · 500 × 2 · +1000 J",
          "Per mole reaction · −1.00 / 0.050 · −20 kJ mol⁻¹"
        ],
        "board": {
          "heading": "Calorimetry with the vessel included",
          "columns": [
            "Quantity",
            "Calculation",
            "Value"
          ],
          "rows": [
            [
              "Total heat capacity",
              "100 × 4.2 + 80",
              "500 J K⁻¹"
            ],
            [
              "Surroundings heat",
              "500 × 2",
              "+1000 J"
            ],
            [
              "Per mole reaction",
              "−1.00 / 0.050",
              "−20 kJ mol⁻¹"
            ]
          ]
        }
      },
      {
        "title": "Entropy from a reversible reference path",
        "formula": "ΔS = qrev/T; ΔStransition = ΔHtransition/Ttransition",
        "script": "Entropy change must be evaluated using a reversible reference path between the same endpoints. Heat divided by temperature is not a universal expression for an arbitrary irreversible transfer. At an equilibrium phase transition at constant temperature and pressure, the molar entropy change is the molar transition enthalpy divided by that temperature. For melting with illustrative enthalpy six kilojoules per mole at three hundred kelvin, the entropy increase is twenty joules per mole kelvin. Freezing between the reverse endpoints gives minus twenty. For warming a substance at constant pressure with approximately constant molar heat capacity, integrate heat capacity divided by temperature. The result is molar heat capacity times the natural logarithm of final temperature divided by initial temperature. With thirty joules per mole kelvin and warming from three hundred to six hundred kelvin, the increase is thirty times the natural logarithm of two, about twenty point eight joules per mole kelvin. Both temperatures must be absolute. If heat capacity varies appreciably, retain it inside the integral rather than reusing the constant value shortcut.",
        "points": [
          "Melting at equilibrium · 6000 / 300 · +20.0",
          "Reverse freezing · −6000 / 300 · −20.0",
          "Constant Cp warming · 30 ln(600/300) · +20.8"
        ],
        "board": {
          "heading": "Entropy from a reversible reference path",
          "columns": [
            "Process",
            "Calculation",
            "ΔS / J mol⁻¹ K⁻¹"
          ],
          "rows": [
            [
              "Melting at equilibrium",
              "6000 / 300",
              "+20.0"
            ],
            [
              "Reverse freezing",
              "−6000 / 300",
              "−20.0"
            ],
            [
              "Constant Cp warming",
              "30 ln(600/300)",
              "+20.8"
            ]
          ]
        }
      },
      {
        "title": "System, surroundings and the second law",
        "formula": "ΔSuniverse = ΔSsystem + ΔSsurroundings",
        "script": "A system can lose entropy while a spontaneous process increases the total entropy of system and surroundings. Consider an illustrative process at three hundred kelvin and constant pressure that releases six kilojoules per mole into a large thermal reservoir. Assume only pressure volume work and negligible changes elsewhere. The reservoir receives six thousand joules per mole, so its entropy increases by twenty joules per mole kelvin. If the system entropy decreases by ten joules per mole kelvin, the total increases by ten. The process is thermodynamically favourable under those stated conditions. Its Gibbs energy change is minus six kilojoules minus three hundred times minus zero point zero one zero kilojoules per kelvin, giving minus three kilojoules per mole. Negative temperature times the universe entropy change gives the same result under these constraints. The reservoir temperature is effectively constant; do not divide a large varying temperature heat transfer by one arbitrary temperature. This example also shows why exothermic and spontaneous are different labels. Identify the surroundings, constraints and entropy contribution before using the sign of heat as a direction test.",
        "points": [
          "Surroundings entropy · +6000 / 300 · +20 J mol⁻¹ K⁻¹",
          "Universe entropy · −10 + 20 · +10 J mol⁻¹ K⁻¹",
          "System Gibbs change · −6 − 300(−0.010) · −3 kJ mol⁻¹"
        ],
        "board": {
          "heading": "System, surroundings and the second law",
          "columns": [
            "Quantity",
            "Calculation",
            "Result"
          ],
          "rows": [
            [
              "Surroundings entropy",
              "+6000 / 300",
              "+20 J mol⁻¹ K⁻¹"
            ],
            [
              "Universe entropy",
              "−10 + 20",
              "+10 J mol⁻¹ K⁻¹"
            ],
            [
              "System Gibbs change",
              "−6 − 300(−0.010)",
              "−3 kJ mol⁻¹"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "With the supplied methane combustion formation data, products sum to −966 and reactants to −75 kJ/mol. ΔH is:",
        "options": [
          "−1041 kJ/mol",
          "−891 kJ/mol",
          "+891 kJ/mol",
          "−75 kJ/mol"
        ],
        "answer": 1,
        "explanation": "Subtract the reactant sum: −966 − (−75) = −891 kJ/mol."
      },
      {
        "question": "Lattice dissociation +780 and total hydration −750 kJ/mol give dissolution enthalpy:",
        "options": [
          "−1530 kJ/mol",
          "−30 kJ/mol",
          "+30 kJ/mol",
          "+1530 kJ/mol"
        ],
        "answer": 2,
        "explanation": "Add the stated processes with matching endpoints: 780 − 750 = 30."
      },
      {
        "question": "A combined heat capacity of 500 J/K warms by 2 K. The surroundings absorb:",
        "options": [
          "1000 J",
          "250 J",
          "−1000 J",
          "500 J"
        ],
        "answer": 0,
        "explanation": "The surroundings gain heat: q = C ΔT = 500 × 2 = +1000 J."
      },
      {
        "question": "Melting enthalpy 6.00 kJ/mol at equilibrium at 300 K gives entropy change:",
        "options": [
          "−20 J/(mol K)",
          "1800 J/(mol K)",
          "2 J/(mol K)",
          "+20 J/(mol K)"
        ],
        "answer": 3,
        "explanation": "Use 6000 J/mol divided by 300 K."
      },
      {
        "question": "Constant molar Cp = 30 J/(mol K), warming from 300 to 600 K, gives ΔS approximately:",
        "options": [
          "30 J/(mol K)",
          "20.8 J/(mol K)",
          "−20.8 J/(mol K)",
          "9000 J/(mol K)"
        ],
        "answer": 1,
        "explanation": "ΔS = Cp ln(T2/T1) = 30 ln 2 ≈ 20.8."
      },
      {
        "question": "At 300 K, ΔH = −6 kJ/mol and ΔSsystem = −10 J/(mol K). ΔG is:",
        "options": [
          "+3 kJ/mol",
          "−9 kJ/mol",
          "−3 kJ/mol",
          "+6 kJ/mol"
        ],
        "answer": 2,
        "explanation": "Convert entropy to −0.010 kJ/(mol K): −6 − 300(−0.010) = −3."
      }
    ]
  },
  "solutions": {
    "chapters": [
      {
        "title": "Convert molarity using density",
        "formula": "m = 1000 M / (1000ρ − M Ms)",
        "script": "Density connects solution volume to the masses needed for molality. Take a one point zero zero molar solution of a solute with molar mass sixty grams per mole and solution density one point zero four grams per millilitre at the stated temperature. Choose one litre of solution. It contains one mole, or sixty grams, of solute. Its total mass is one thousand forty grams. Subtracting the solute leaves nine hundred eighty grams of solvent, or zero point nine eight zero kilogram. Molality is therefore one divided by zero point nine eight zero, about one point zero two moles per kilogram. Do not divide by the total solution mass. In the general conversion formula, density in grams per millilitre makes one litre weigh one thousand times density in grams. Subtract molarity times solute molar mass, then convert the remaining grams to kilograms. This calculation assumes a single identified solute and a correctly specified final solution density. Molarity and density must refer to the same temperature. A negative calculated solvent mass signals inconsistent data or a unit error, not a physically meaningful concentration.",
        "points": [
          "Solution mass · 1000 × 1.04 · 1040 g",
          "Solvent mass · 1040 − 60 · 980 g",
          "Molality · 1.00 / 0.980 · 1.02 mol kg⁻¹"
        ],
        "board": {
          "heading": "Convert molarity using density",
          "columns": [
            "One litre basis",
            "Calculation",
            "Result"
          ],
          "rows": [
            [
              "Solution mass",
              "1000 × 1.04",
              "1040 g"
            ],
            [
              "Solvent mass",
              "1040 − 60",
              "980 g"
            ],
            [
              "Molality",
              "1.00 / 0.980",
              "1.02 mol kg⁻¹"
            ]
          ]
        }
      },
      {
        "title": "Henry law: state the convention",
        "formula": "p = KH x at fixed temperature",
        "script": "Henry law describes dilute dissolved gas in equilibrium with its gas phase at a specified temperature. Several conventions use the same name, so write the equation before interpreting its constant. Here the gas partial pressure equals K H times its dissolved mole fraction. Suppose K H is forty thousand bar and the relevant gas partial pressure is two bar. The dissolved mole fraction is two divided by forty thousand, or five times ten to the minus five. Use the gas partial pressure rather than the total pressure of an unrelated gas mixture. In this convention, a larger K H means a smaller dissolved mole fraction at the same pressure. A constant defined by concentration divided by pressure has the opposite interpretation. Temperature changes the constant; do not compare values at different temperatures as if conditions were identical. The simple relationship assumes a dilute solution and no major chemical reaction changing the gas species in solution. Increasing pressure increases equilibrium solubility within the model, but equilibrium solubility does not specify how fast the gas enters the liquid. Keep the pressure unit consistent with the tabulated constant.",
        "points": [
          "Gas partial pressure · p · 2.00 bar",
          "Henry constant · KH in p = KH x · 40000 bar",
          "Dissolved fraction · x = p/KH · 5.00 × 10⁻⁵"
        ],
        "board": {
          "heading": "Henry law: state the convention",
          "columns": [
            "Given",
            "Relation",
            "Result"
          ],
          "rows": [
            [
              "Gas partial pressure",
              "p",
              "2.00 bar"
            ],
            [
              "Henry constant",
              "KH in p = KH x",
              "40000 bar"
            ],
            [
              "Dissolved fraction",
              "x = p/KH",
              "5.00 × 10⁻⁵"
            ]
          ]
        }
      },
      {
        "title": "Nonideal mixtures and azeotropes",
        "formula": "Positive / negative deviations refer to Raoult predictions",
        "script": "For an ideal liquid mixture, each component follows the partial pressure prediction from its liquid mole fraction and pure liquid vapour pressure. Real mixtures can lie above or below that prediction. In a common positive deviation picture, unlike molecule attractions are less favourable than the corresponding like molecule interactions, and total vapour pressure is higher than the ideal prediction. Negative deviation gives lower vapour pressure. Mixing enthalpy and volume can provide supporting evidence, but they require actual mixture data. A sufficiently large deviation can produce an azeotrope at a specified pressure. At that composition, the equilibrium vapour and liquid have the same composition, so ordinary fractional distillation cannot carry that mixture past the azeotropic composition. Minimum boiling azeotropes are associated with a suitable positive deviation; maximum boiling ones with a suitable negative deviation. Not every nonideal mixture forms an azeotrope. Nor does an azeotrope require equal mole fractions of the two components. State whether a graph holds pressure or temperature fixed before reading its boiling or vapour pressure extrema.",
        "points": [
          "Vapour pressure · Above ideal prediction · Below ideal prediction",
          "Possible azeotrope · Minimum boiling · Maximum boiling",
          "At azeotrope · Vapour = liquid composition · Not necessarily x = 0.5"
        ],
        "board": {
          "heading": "Nonideal mixtures and azeotropes",
          "columns": [
            "Feature",
            "Positive deviation",
            "Negative deviation"
          ],
          "rows": [
            [
              "Vapour pressure",
              "Above ideal prediction",
              "Below ideal prediction"
            ],
            [
              "Possible azeotrope",
              "Minimum boiling",
              "Maximum boiling"
            ],
            [
              "At azeotrope",
              "Vapour = liquid composition",
              "Not necessarily x = 0.5"
            ]
          ]
        }
      },
      {
        "title": "Infer molar mass from boiling elevation",
        "formula": "Ms = i Kb w / (ΔTb masssolvent in kg)",
        "script": "Boiling elevation can provide a molar mass when the solvent amount and particle behaviour are known. Dissolve one point eight zero grams of a nonvolatile non electrolyte in one hundred grams of solvent. Let the solvent boiling constant be zero point five two kelvin kilograms per mole, and the measured elevation be zero point zero five two kelvin. Assume a dilute solution and particle factor one. Dividing the elevation by the boiling constant gives molality zero point one zero zero moles per kilogram. Multiply by zero point one zero zero kilogram of solvent to obtain zero point zero one zero zero moles of solute. Divide one point eight zero grams by that amount to get one hundred eighty grams per mole. The measured elevation is a positive difference, not the absolute boiling temperature. If the pure solvent boils at one hundred degrees Celsius under the stated pressure, the model solution boils at one hundred point zero five two degrees Celsius. Association or dissociation changes the effective particle count and therefore the inferred molar mass. Check the assumed particle factor and solvent mass before treating a numerical answer as a molecular formula.",
        "points": [
          "Molality · 0.052 / 0.52 · 0.100 mol kg⁻¹",
          "Solute amount · 0.100 × 0.100 · 0.0100 mol",
          "Molar mass · 1.80 / 0.0100 · 180 g mol⁻¹"
        ],
        "board": {
          "heading": "Infer molar mass from boiling elevation",
          "columns": [
            "Step",
            "Calculation",
            "Result"
          ],
          "rows": [
            [
              "Molality",
              "0.052 / 0.52",
              "0.100 mol kg⁻¹"
            ],
            [
              "Solute amount",
              "0.100 × 0.100",
              "0.0100 mol"
            ],
            [
              "Molar mass",
              "1.80 / 0.0100",
              "180 g mol⁻¹"
            ]
          ]
        }
      },
      {
        "title": "Dissociation and isotonic comparisons",
        "formula": "i = 1 + α(ν − 1); equal π at equal T needs equal iC",
        "script": "Consider a solute that produces three ions per formula unit in the ideal dissociation model. Starting with one mole of formula units, a fraction alpha dissociates. One minus alpha mole remains intact and three alpha moles appear as ions. Total particles are one plus two alpha. If a dilute colligative measurement gives particle factor two point six zero, alpha is zero point eight zero, or eighty percent. The complete dissociation limit is three, so a value above three would not fit this simple single process model. Real electrolyte interactions can also affect measured factors. Now compare osmotic pressures at the same temperature. A zero point one zero zero molar non electrolyte has effective particle concentration zero point one zero zero molar. A salt solution with factor two point six zero matches it at formal concentration zero point one zero zero divided by two point six zero, about zero point zero three eight five molar. Equal formal molarities would not be isotonic here. These equations assume the stated membranes retain the relevant solutes and that the dilute solution model is adequate.",
        "points": [
          "Dissociation factor · i = 1 + 2α · 2.60",
          "Degree of dissociation · (2.60 − 1)/2 · 0.80",
          "Isotonic formal C · 0.100 / 2.60 · 0.0385 mol L⁻¹"
        ],
        "board": {
          "heading": "Dissociation and isotonic comparisons",
          "columns": [
            "Quantity",
            "Calculation",
            "Result"
          ],
          "rows": [
            [
              "Dissociation factor",
              "i = 1 + 2α",
              "2.60"
            ],
            [
              "Degree of dissociation",
              "(2.60 − 1)/2",
              "0.80"
            ],
            [
              "Isotonic formal C",
              "0.100 / 2.60",
              "0.0385 mol L⁻¹"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "One litre of 1.00 M solution has density 1.04 g/mL and solute molar mass 60 g/mol. Solvent mass is:",
        "options": [
          "1040 g",
          "1000 g",
          "980 g",
          "60 g"
        ],
        "answer": 2,
        "explanation": "The solution weighs 1040 g and contains 60 g solute; subtract to get 980 g solvent."
      },
      {
        "question": "The molality of that solution is approximately:",
        "options": [
          "1.02 mol/kg",
          "0.962 mol/kg",
          "60 mol/kg",
          "1.04 mol/kg"
        ],
        "answer": 0,
        "explanation": "One mole divided by 0.980 kg solvent is 1.0204 mol/kg."
      },
      {
        "question": "For p = KH x, KH = 40000 bar and gas partial pressure 2 bar, x is:",
        "options": [
          "20000",
          "0.020",
          "8 × 10⁴",
          "5 × 10⁻⁵"
        ],
        "answer": 3,
        "explanation": "Use x = 2/40000; matching pressure units cancel."
      },
      {
        "question": "At an azeotrope at its stated pressure, equilibrium liquid and vapour:",
        "options": [
          "Must each be equimolar",
          "Have the same composition",
          "Have no molecules in common",
          "Always follow ideal Raoult behaviour"
        ],
        "answer": 1,
        "explanation": "Equal phase compositions explain the ordinary fractional distillation limitation."
      },
      {
        "question": "1.80 g non-electrolyte in 0.100 kg solvent gives ΔTb = 0.052 K with Kb = 0.52 K kg/mol. Molar mass is:",
        "options": [
          "18 g/mol",
          "360 g/mol",
          "180 g/mol",
          "90 g/mol"
        ],
        "answer": 2,
        "explanation": "Molality is 0.100, so amount is 0.0100 mol and mass/amount is 180 g/mol."
      },
      {
        "question": "A solute producing three ions has i = 2.60 in the ideal degree model. Its dissociated fraction is:",
        "options": [
          "0.80",
          "0.60",
          "1.30",
          "0.20"
        ],
        "answer": 0,
        "explanation": "i = 1 + 2α, so α = (2.60 − 1)/2 = 0.80."
      }
    ]
  }
};
