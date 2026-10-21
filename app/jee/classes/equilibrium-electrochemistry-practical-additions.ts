// Authored by scripts/expand-equilibrium-electrochemistry-practical.mjs.
export const equilibriumElectrochemistryPracticalAdditions = {
  "equilibrium": {
    "base": 8,
    "quizBase": 12,
    "chapters": [
      {
        "title": "Convert gas equilibrium conventions",
        "formula": "Kp = Kc (RT c°/p°)^Δng for the stated ideal-gas standards",
        "script": "Pressure and concentration equilibrium expressions must use compatible conventions. For an ideal gas, partial pressure equals concentration times R T. If the pressure quotient uses each pressure divided by its standard pressure and the concentration quotient uses each concentration divided by its standard concentration, their conversion includes R T times standard concentration divided by standard pressure. Raise that dimensionless factor to the gaseous product mole count minus the gaseous reactant mole count. For dinitrogen tetroxide forming two nitrogen dioxide molecules, the change is one. Take standard concentration one mole per litre, standard pressure one bar, temperature three hundred kelvin and R zero point zero eight three one four litre bar per mole kelvin. The conversion factor is twenty four point nine four two. A supplied concentration based constant of zero point one zero zero therefore corresponds to a pressure based constant about two point four nine four under these conventions. When the gaseous mole change is zero, the factor cancels. Count gaseous species only and state the standards rather than silently combining incompatible units or treating every reported constant as the same numerical quantity.",
        "points": [
          "N₂O₄ ⇌ 2NO₂ · Δng = 2 − 1 · 1",
          "Stated standards at 300 K · RT c°/p° · 24.942",
          "Kc = 0.100 · 0.100 × 24.942 · Kp ≈ 2.494"
        ],
        "board": {
          "heading": "Convert gas equilibrium conventions",
          "columns": [
            "Quantity / case",
            "Calculation / condition",
            "Result / limit"
          ],
          "rows": [
            [
              "N₂O₄ ⇌ 2NO₂",
              "Δng = 2 − 1",
              "1"
            ],
            [
              "Stated standards at 300 K",
              "RT c°/p°",
              "24.942"
            ],
            [
              "Kc = 0.100",
              "0.100 × 24.942",
              "Kp ≈ 2.494"
            ]
          ]
        }
      },
      {
        "title": "Use dissociation extent and total pressure",
        "formula": "N₂O₄ ⇌ 2NO₂: Kp = [4α²/(1−α²)](P/p°)",
        "script": "Gas dissociation changes the total number of molecules, so the reacted fraction is not generally the same as the product mole fraction. Begin with one mole of pure dinitrogen tetroxide. If a fraction alpha dissociates, one minus alpha mole remains and two alpha moles of nitrogen dioxide form. The total is one plus alpha. At twenty percent dissociation, the amounts are zero point eight and zero point four mole, with a total of one point two. The nitrogen dioxide mole fraction is therefore one third and the tetroxide fraction two thirds. At total pressure one bar, their partial pressures are one third bar and two thirds bar. With standard pressure one bar, the dimensionless pressure quotient is the square of one third divided by two thirds, giving one sixth. The general expression contains four alpha squared divided by one minus alpha squared, multiplied by total pressure divided by standard pressure. Check both atom balance and total moles before inserting a pressure. This model starts with pure reactant and assumes ideal gases without an inert gas or another competing reaction.",
        "points": [
          "At α = 0.20 · n(N₂O₄)=0.80; n(NO₂)=0.40 · ntotal = 1.20",
          "Mole fractions · 0.80/1.20; 0.40/1.20 · 2/3; 1/3",
          "At P = p° = 1 bar · (1/3)² ÷ (2/3) · Kp = 1/6"
        ],
        "board": {
          "heading": "Use dissociation extent and total pressure",
          "columns": [
            "Quantity / case",
            "Calculation / condition",
            "Result / limit"
          ],
          "rows": [
            [
              "At α = 0.20",
              "n(N₂O₄)=0.80; n(NO₂)=0.40",
              "ntotal = 1.20"
            ],
            [
              "Mole fractions",
              "0.80/1.20; 0.40/1.20",
              "2/3; 1/3"
            ],
            [
              "At P = p° = 1 bar",
              "(1/3)² ÷ (2/3)",
              "Kp = 1/6"
            ]
          ]
        }
      },
      {
        "title": "Titration requires reaction before pH",
        "formula": "25.00 mL 0.100 M HCl titrated with 0.100 M NaOH at 25 °C",
        "script": "In a strong acid strong base titration, calculate the neutralization amounts before the remaining ion concentration. Start with twenty five millilitres of zero point one zero zero molar hydrochloric acid. It contains zero point zero zero two five zero mole of acid. Adding twenty millilitres of equally concentrated sodium hydroxide consumes zero point zero zero two zero zero mole, leaving zero point zero zero zero five zero mole of hydrogen ions in forty five millilitres. The concentration is about zero point zero one one one molar and p H about one point nine five. At twenty five millilitres of base, the stoichiometric amounts are equal. For this ideal strong acid strong base example at twenty five degrees Celsius, p H is approximately seven. At thirty millilitres, excess hydroxide is zero point zero zero zero five zero mole in fifty five millilitres, giving p O H about two point zero four and p H about eleven point nine six. Total volume matters on both sides of equivalence. A weak acid titration has different equilibrium behaviour, so do not transfer the neutral equivalence conclusion to every acid base pair.",
        "points": [
          "20.00 mL base · Excess H⁺ / 45.00 mL · pH ≈ 1.95",
          "25.00 mL base · Strong acid/base equivalence · pH ≈ 7.00",
          "30.00 mL base · Excess OH⁻ / 55.00 mL · pH ≈ 11.96"
        ],
        "board": {
          "heading": "Titration requires reaction before pH",
          "columns": [
            "Quantity / case",
            "Calculation / condition",
            "Result / limit"
          ],
          "rows": [
            [
              "20.00 mL base",
              "Excess H⁺ / 45.00 mL",
              "pH ≈ 1.95"
            ],
            [
              "25.00 mL base",
              "Strong acid/base equivalence",
              "pH ≈ 7.00"
            ],
            [
              "30.00 mL base",
              "Excess OH⁻ / 55.00 mL",
              "pH ≈ 11.96"
            ]
          ]
        }
      },
      {
        "title": "Common ions suppress simple solubility",
        "formula": "AgCl: Ksp = aAg⁺ aCl⁻; dilute approximation [Ag⁺][Cl⁻]",
        "script": "A solubility product constrains free ion activities, not the total amount of every metal containing species in solution. For a simple dilute silver chloride model, use the concentration product as an approximation to the activity expression. With illustrative solubility product one point eight times ten to the minus ten, pure water gives equal silver and chloride concentrations and a molar solubility about one point three four times ten to the minus five. Now suppose the solution already contains zero point zero one zero molar chloride. If additional dissolution is small, free chloride remains approximately that value. Divide the solubility product by zero point zero one zero to obtain silver concentration one point eight times ten to the minus eight molar. The added dissolution is tiny relative to the initial chloride, so the approximation is self consistent. This common ion lowers simple solubility in the stated model. Complex formation, other equilibria and nonideal activities can alter the result. In particular, total dissolved silver need not equal free silver when complexes are important. Check what concentration the question actually asks for before applying the product expression.",
        "points": [
          "AgCl in pure water · s = √(1.8 × 10⁻¹⁰) · s ≈ 1.34 × 10⁻⁵ M",
          "Initial Cl⁻ = 0.010 M · [Ag⁺] ≈ Ksp/[Cl⁻] · 1.8 × 10⁻⁸ M",
          "Approximation check · s ≪ 0.010 M · Ignore complexes only if stated"
        ],
        "board": {
          "heading": "Common ions suppress simple solubility",
          "columns": [
            "Quantity / case",
            "Calculation / condition",
            "Result / limit"
          ],
          "rows": [
            [
              "AgCl in pure water",
              "s = √(1.8 × 10⁻¹⁰)",
              "s ≈ 1.34 × 10⁻⁵ M"
            ],
            [
              "Initial Cl⁻ = 0.010 M",
              "[Ag⁺] ≈ Ksp/[Cl⁻]",
              "1.8 × 10⁻⁸ M"
            ],
            [
              "Approximation check",
              "s ≪ 0.010 M",
              "Ignore complexes only if stated"
            ]
          ]
        }
      },
      {
        "title": "Amphiprotic salts need two acid constants",
        "formula": "For a suitable intermediate salt: pH ≈ ½(pKa1 + pKa2)",
        "script": "An amphiprotic species can accept or donate a proton. Hydrogen carbonate is a familiar intermediate in a diprotic acid system. Its acid behaviour is controlled by the second acid dissociation constant, while its base behaviour is related to the first constant through the water ion product. Under the appropriate intermediate salt approximation, p H is approximately half the sum of the two p K a values. For illustrative values six point three and ten point three, the estimate is eight point three. This is a mildly basic result even though the formula contains hydrogen. Do not classify a salt as acidic simply because its anion still carries a proton. The average formula assumes conditions where the amphiprotic salt contribution dominates water effects and the approximations used in its derivation are adequate. Very dilute solutions, additional acids or bases, and important competing equilibria can require a fuller mass and charge balance. The two constants must refer to the same acid system, solvent and temperature. A useful answer states the model and its limits alongside the numerical average.",
        "points": [
          "Intermediate species · Can gain or lose H⁺ · Amphiprotic",
          "Illustrative pKa values · 6.3 and 10.3 · pH ≈ 8.3",
          "Model limitation · Very dilute / competing species · Use full balances if needed"
        ],
        "board": {
          "heading": "Amphiprotic salts need two acid constants",
          "columns": [
            "Quantity / case",
            "Calculation / condition",
            "Result / limit"
          ],
          "rows": [
            [
              "Intermediate species",
              "Can gain or lose H⁺",
              "Amphiprotic"
            ],
            [
              "Illustrative pKa values",
              "6.3 and 10.3",
              "pH ≈ 8.3"
            ],
            [
              "Model limitation",
              "Very dilute / competing species",
              "Use full balances if needed"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "For N2O4 ⇌ 2NO2 at 300 K with the stated 1 M and 1 bar standards, RTc°/p°=24.942 and Kc=0.100. Kp is:",
        "options": [
          "0.00401",
          "2.4942",
          "24.942",
          "0.100"
        ],
        "answer": 1,
        "explanation": "Δng=1, so multiply the concentration-based constant by the stated dimensionless conversion factor."
      },
      {
        "question": "Starting from pure N2O4 with α=0.20, the NO2 mole fraction is:",
        "options": [
          "0.20",
          "0.40",
          "1/3",
          "2/3"
        ],
        "answer": 2,
        "explanation": "NO2 amount is 0.40 and total amount 1.20 per initial mole, giving one third."
      },
      {
        "question": "25.00 mL 0.100 M HCl plus 20.00 mL 0.100 M NaOH has approximate ideal pH:",
        "options": [
          "1.95",
          "7.00",
          "11.96",
          "0.70"
        ],
        "answer": 0,
        "explanation": "0.00050 mol H+ remains in 0.04500 L, giving pH≈1.95."
      },
      {
        "question": "With AgCl Ksp=1.8×10^−10 and initial chloride 0.010 M in the stated simple model, free Ag+ is approximately:",
        "options": [
          "1.34×10^−5 M",
          "1.8×10^−10 M",
          "0.010 M",
          "1.8×10^−8 M"
        ],
        "answer": 3,
        "explanation": "Use Ksp/[Cl−] and check that additional dissolution is negligible relative to initial chloride."
      },
      {
        "question": "For an intermediate amphiprotic salt under the stated approximation, pKa1=6.3 and pKa2=10.3 give pH:",
        "options": [
          "4.0",
          "8.3",
          "16.6",
          "6.3"
        ],
        "answer": 1,
        "explanation": "The appropriate estimate is half the sum: (6.3+10.3)/2=8.3."
      },
      {
        "question": "At α=0.20 for pure N2O4 dissociation and P=p°=1 bar, dimensionless Kp is:",
        "options": [
          "1/3",
          "2/3",
          "1/6",
          "1"
        ],
        "answer": 2,
        "explanation": "Use y(NO2)^2/y(N2O4)=(1/3)^2/(2/3)=1/6."
      }
    ],
    "foundationExtraQuiz": [],
    "sources": [
      {
        "title": "OpenStax: acid-base titrations",
        "url": "https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations"
      },
      {
        "title": "OpenStax: coupled equilibria",
        "url": "https://openstax.org/books/chemistry-2e/pages/15-3-coupled-equilibria"
      }
    ]
  },
  "redox-electrochemistry": {
    "base": 9,
    "quizBase": 12,
    "chapters": [
      {
        "title": "Concentration cells can have nonzero voltage",
        "formula": "Zn concentration cell at 25 °C: E = (0.05916/2) log10(acathode/aanode)",
        "script": "Two identical metal electrodes can produce a cell voltage when their ion activities differ. Consider zinc electrodes in an ideal dilute model at twenty five degrees Celsius, with zinc ion concentrations zero point zero zero one zero and zero point one zero zero molar. The standard cell voltage is zero because the electrode couples are the same. The actual voltage is not zero: concentration contributes through the Nernst equation. The concentrated compartment acts as the cathode in the spontaneous orientation, consuming zinc ions by reduction. The dilute compartment acts as the anode, producing zinc ions by oxidation. With two electrons transferred, the voltage is zero point zero five nine one six divided by two, times the base ten logarithm of one hundred, giving zero point zero five nine one six volt. The process tends to reduce the concentration difference. Use activities when nonideality matters, and neglect liquid junction contributions only within the stated model. Identical electrode materials therefore do not guarantee identical electrode potentials. Label the compartments and electron direction before writing the concentration ratio, because reversing the cell reverses the voltage sign.",
        "points": [
          "Dilute Zn²⁺ side · 0.0010 M · Anode: Zn oxidizes",
          "Concentrated Zn²⁺ side · 0.100 M · Cathode: Zn²⁺ reduces",
          "Voltage at 25 °C · (0.05916/2) log10 100 · +0.05916 V"
        ],
        "board": {
          "heading": "Concentration cells can have nonzero voltage",
          "columns": [
            "Quantity / case",
            "Calculation / condition",
            "Result / limit"
          ],
          "rows": [
            [
              "Dilute Zn²⁺ side",
              "0.0010 M",
              "Anode: Zn oxidizes"
            ],
            [
              "Concentrated Zn²⁺ side",
              "0.100 M",
              "Cathode: Zn²⁺ reduces"
            ],
            [
              "Voltage at 25 °C",
              "(0.05916/2) log10 100",
              "+0.05916 V"
            ]
          ]
        }
      },
      {
        "title": "Connect standard voltage to equilibrium",
        "formula": "At 25 °C: log10 K = nE°/0.05916; ΔG° = −nFE°",
        "script": "Standard cell voltage connects electrochemistry with both Gibbs energy and the equilibrium constant. At twenty five degrees Celsius, the base ten logarithm of the dimensionless equilibrium constant equals electron number times standard voltage divided by approximately zero point zero five nine one six volt. Suppose a defined two electron reaction has standard voltage zero point one one eight three two volt. The logarithm is four and the equilibrium constant is ten thousand. The corresponding standard Gibbs energy is minus electron number times the Faraday constant times standard voltage. Using Faraday constant ninety six thousand five hundred coulombs per mole gives about minus twenty two point eight four kilojoules per mole of reaction as written. Doubling a reaction doubles the electron count and Gibbs energy change, but it does not double its electrode voltage. The equilibrium constant for the doubled equation is squared. Actual reaction direction also depends on composition through the reaction quotient. A positive standard voltage is therefore not a guarantee that every possible initial mixture operates spontaneously in the written direction. Keep equation scaling, standard states and actual mixture conditions separate.",
        "points": [
          "n = 2; E° = 0.11832 V · nE°/0.05916 · log10 K = 4",
          "Equilibrium constant · 10⁴ · K = 10000",
          "F = 96500 C mol⁻¹ · −2 × 96500 × 0.11832 · ΔG° ≈ −22.84 kJ mol⁻¹"
        ],
        "board": {
          "heading": "Connect standard voltage to equilibrium",
          "columns": [
            "Quantity / case",
            "Calculation / condition",
            "Result / limit"
          ],
          "rows": [
            [
              "n = 2; E° = 0.11832 V",
              "nE°/0.05916",
              "log10 K = 4"
            ],
            [
              "Equilibrium constant",
              "10⁴",
              "K = 10000"
            ],
            [
              "F = 96500 C mol⁻¹",
              "−2 × 96500 × 0.11832",
              "ΔG° ≈ −22.84 kJ mol⁻¹"
            ]
          ]
        }
      },
      {
        "title": "Use ionic conductances to infer dissociation",
        "formula": "Λ∞(HA) = Λ∞(HCl) + Λ∞(NaA) − Λ∞(NaCl)",
        "script": "Independent ionic migration at infinite dilution allows useful conductance combinations. For a weak monoprotic acid H A, combine the limiting molar conductances of hydrochloric acid and the sodium salt of A, then subtract sodium chloride. The sodium and chloride contributions cancel, leaving hydrogen ion plus A ion. With illustrative values four hundred twenty six, ninety one and one hundred twenty six in compatible conductance units, the result is three hundred ninety one. Suppose a zero point zero one zero zero molar acid has conductivity one point five six four times ten to the minus four siemens per centimetre. Its molar conductivity is one thousand times conductivity divided by concentration, or fifteen point six four siemens square centimetres per mole. Dividing by the limiting value gives an approximate ionized fraction zero point zero four zero. In the simple weak acid model, K a is concentration times alpha squared divided by one minus alpha, about one point six seven times ten to the minus five. This inference assumes the stated dilute solution and ion mobility approximations; activities, water ionization and other dissolved electrolytes can require a fuller treatment.",
        "points": [
          "Limiting conductance · 426 + 91 − 126 · 391 S cm² mol⁻¹",
          "Molar conductance · 1000κ/c = 15.64 · α ≈ 15.64/391 = 0.040",
          "Weak-acid model · cα²/(1−α) · Ka ≈ 1.67 × 10⁻⁵"
        ],
        "board": {
          "heading": "Use ionic conductances to infer dissociation",
          "columns": [
            "Quantity / case",
            "Calculation / condition",
            "Result / limit"
          ],
          "rows": [
            [
              "Limiting conductance",
              "426 + 91 − 126",
              "391 S cm² mol⁻¹"
            ],
            [
              "Molar conductance",
              "1000κ/c = 15.64",
              "α ≈ 15.64/391 = 0.040"
            ],
            [
              "Weak-acid model",
              "cα²/(1−α)",
              "Ka ≈ 1.67 × 10⁻⁵"
            ]
          ]
        }
      },
      {
        "title": "Same charge does not mean equal metal masses",
        "formula": "m = η Q M/(zF)",
        "script": "Cells connected in series receive the same charge, but their deposited masses depend on molar mass and electron stoichiometry. Take one thousand nine hundred thirty coulombs through a copper two ion cell and a silver ion cell. Using Faraday constant ninety six thousand five hundred, the charge corresponds to zero point zero two zero zero mole of electrons. Copper deposition needs two electrons per atom, giving zero point zero one zero zero mole of copper. With illustrative molar mass sixty three point five, the ideal mass is zero point six three five gram. Silver requires one electron per atom, giving zero point zero two zero zero mole and mass two point one five eight grams for molar mass one hundred seven point nine. If only eighty percent of charge produces copper, its deposited mass becomes zero point five zero eight gram. Do not apply that efficiency to a different cell unless specified. Equal current and time establish equal charge, not equal moles of deposited atoms. Check the actual electrode product and electron number before using the equivalent mass ratio.",
        "points": [
          "Shared charge · 1930/96500 · 0.0200 mol e⁻",
          "Cu²⁺; ideal · 0.0200/2 × 63.5 · 0.635 g Cu",
          "Ag⁺; ideal · 0.0200 × 107.9 · 2.158 g Ag"
        ],
        "board": {
          "heading": "Same charge does not mean equal metal masses",
          "columns": [
            "Quantity / case",
            "Calculation / condition",
            "Result / limit"
          ],
          "rows": [
            [
              "Shared charge",
              "1930/96500",
              "0.0200 mol e⁻"
            ],
            [
              "Cu²⁺; ideal",
              "0.0200/2 × 63.5",
              "0.635 g Cu"
            ],
            [
              "Ag⁺; ideal",
              "0.0200 × 107.9",
              "2.158 g Ag"
            ]
          ]
        }
      },
      {
        "title": "Corrosion is a coupled electrochemical process",
        "formula": "Iron oxidation can couple to oxygen reduction in a moist environment",
        "script": "Corrosion can involve different anodic and cathodic regions on a metal surface. In a common neutral aerated water model, iron oxidizes to iron two ions while oxygen is reduced with water to hydroxide ions. The oxygen half equation consumes four electrons per oxygen molecule and produces four hydroxide ions. Two iron oxidation events supply those four electrons. Further reactions lead to hydrated iron oxide materials commonly called rust; the complete material is not captured by one simple dissolved ion alone. A sacrificial zinc coating or connected zinc piece can preferentially oxidize while electrical contact and suitable environmental conditions are maintained, helping protect iron. A tin coating can serve as a barrier, but a damaged coating exposes a different galvanic situation and does not provide the same sacrificial protection. Do not decide behaviour from a coating's appearance alone. Oxygen supply, moisture, electrical contact and the actual solution affect the process. Distinguish prevention by excluding the environment from prevention by directing oxidation to a more readily oxidized metal. Standard potential tables are a starting guide, not a substitute for the real corrosion conditions.",
        "points": [
          "Anodic iron step · Fe → Fe²⁺ + 2e⁻ · Two events supply 4e⁻",
          "Cathodic oxygen step · O₂ + 2H₂O + 4e⁻ → 4OH⁻ · Neutral aerated model",
          "Sacrificial zinc · Electrical contact matters · Zinc can oxidize first"
        ],
        "board": {
          "heading": "Corrosion is a coupled electrochemical process",
          "columns": [
            "Quantity / case",
            "Calculation / condition",
            "Result / limit"
          ],
          "rows": [
            [
              "Anodic iron step",
              "Fe → Fe²⁺ + 2e⁻",
              "Two events supply 4e⁻"
            ],
            [
              "Cathodic oxygen step",
              "O₂ + 2H₂O + 4e⁻ → 4OH⁻",
              "Neutral aerated model"
            ],
            [
              "Sacrificial zinc",
              "Electrical contact matters",
              "Zinc can oxidize first"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "For the stated Zn concentration cell at 25 °C, [Zn2+] values 0.0010 and 0.100 M give spontaneous E approximately:",
        "options": [
          "0 V",
          "0.05916 V",
          "0.11832 V",
          "−0.05916 V"
        ],
        "answer": 1,
        "explanation": "The ratio is 100; (0.05916/2)log10(100)=0.05916 V in the spontaneous orientation."
      },
      {
        "question": "At 25 °C, n=2 and E°=0.11832 V give equilibrium K:",
        "options": [
          "4",
          "100",
          "10000",
          "0.0001"
        ],
        "answer": 2,
        "explanation": "log10 K = 2×0.11832/0.05916 = 4, hence K=10^4."
      },
      {
        "question": "Illustrative limiting molar conductances 426, 91 and 126 combine as Λ∞(HA)=:",
        "options": [
          "391 S cm²/mol",
          "643 S cm²/mol",
          "461 S cm²/mol",
          "209 S cm²/mol"
        ],
        "answer": 0,
        "explanation": "Add HCl and NaA and subtract NaCl: 426+91−126=391."
      },
      {
        "question": "With Q=1930 C, F=96500 C/mol, Cu2+ and M(Cu)=63.5 g/mol, ideal copper mass is:",
        "options": [
          "1.270 g",
          "2.158 g",
          "0.508 g",
          "0.635 g"
        ],
        "answer": 3,
        "explanation": "0.0200 mol electrons deposits 0.0100 mol Cu, giving 0.635 g at 100% current efficiency."
      },
      {
        "question": "At 80% current efficiency for that copper deposition, mass is:",
        "options": [
          "0.794 g",
          "0.508 g",
          "0.635 g",
          "1.016 g"
        ],
        "answer": 1,
        "explanation": "Multiply the ideal mass by the specified efficiency: 0.8×0.635=0.508 g."
      },
      {
        "question": "Sacrificial zinc protection of iron relies on:",
        "options": [
          "Zinc never reacting",
          "Removing every possible cathodic reaction",
          "Preferential zinc oxidation with suitable electrical contact",
          "A coating colour identifying the anode"
        ],
        "answer": 2,
        "explanation": "The sacrificial metal can oxidize in place of iron while the galvanic conditions and contact support protection."
      }
    ],
    "foundationExtraQuiz": [],
    "sources": [
      {
        "title": "OpenStax: potential, Gibbs energy and equilibrium",
        "url": "https://openstax.org/books/chemistry-2e/pages/17-4-potential-free-energy-and-equilibrium"
      },
      {
        "title": "OpenStax: corrosion",
        "url": "https://openstax.org/books/chemistry-2e/pages/17-6-corrosion"
      }
    ]
  },
  "practical-chemistry": {
    "base": 8,
    "quizBase": 10,
    "chapters": [
      {
        "title": "Read a burette and subtract a blank",
        "formula": "Corrected titre = final reading − initial reading − blank",
        "script": "A titre is a delivered volume, not simply the final burette reading. Suppose the initial reading is three point one zero millilitres and the final reading twenty one point five zero. The delivered volume is eighteen point four zero millilitres. If a valid blank correction for the same analysis is zero point four zero millilitre, the corrected titre is eighteen point zero zero. For illustrative zero point zero two zero zero molar permanganate reducing to manganese two in acid, each mole accepts five electrons. Iron two becoming iron three supplies one electron per ion. The corrected amount therefore corresponds to zero point zero zero one eight zero mole of iron two. If that came from a twenty five point zero zero millilitre sample aliquot, its concentration is zero point zero seven two zero molar. State the reaction medium and use the appropriate electron factor. A blank correction addresses background consumption defined by the method; it is not an arbitrary adjustment to make repeated titres agree. Check delivered volume, correction sign, stoichiometry and sample volume as separate steps.",
        "points": [
          "Delivered volume · 21.50 − 3.10 · 18.40 mL",
          "Corrected titre · 18.40 − 0.40 · 18.00 mL",
          "Fe²⁺ in 25.00 mL · 5 × 0.0200 × 0.01800 · 0.0720 M"
        ],
        "board": {
          "heading": "Read a burette and subtract a blank",
          "columns": [
            "Quantity / case",
            "Calculation / condition",
            "Result / limit"
          ],
          "rows": [
            [
              "Delivered volume",
              "21.50 − 3.10",
              "18.40 mL"
            ],
            [
              "Corrected titre",
              "18.40 − 0.40",
              "18.00 mL"
            ],
            [
              "Fe²⁺ in 25.00 mL",
              "5 × 0.0200 × 0.01800",
              "0.0720 M"
            ]
          ]
        }
      },
      {
        "title": "Distinguish uncertainty bounds from statistics",
        "formula": "For small worst-case relative bounds, add contributions in a product/ratio",
        "script": "A measurement uncertainty statement must identify whether it is a bound or a statistical estimate. For a concentration calculated as standard concentration times titre volume divided by sample volume, small worst case relative bounds add in a first order estimate. Suppose the standard concentration contributes zero point two zero percent, the titre zero point one zero percent and the sample volume zero point one five percent. The estimated worst case relative bound is zero point four five percent. At a central result zero point one zero zero zero molar, that corresponds to about zero point zero zero zero four five molar. This is not automatically a one standard deviation uncertainty or a ninety five percent confidence interval. Independent random standard uncertainties would use a different combination rule. Repeated close titres demonstrate precision under repeatability conditions; they do not by themselves remove calibration error or an incorrect endpoint. A consistent meniscus reading error can remain systematic across many trials. Match the reported significant figures to the actual uncertainty, and keep the meaning of the quoted error clear when comparing two analytical results.",
        "points": [
          "Relative contributions · 0.20% + 0.10% + 0.15% · ≈0.45% worst-case bound",
          "Central C = 0.1000 M · 0.1000 × 0.0045 · ≈0.00045 M bound",
          "Repeated close results · Precision evidence · Not automatic accuracy"
        ],
        "board": {
          "heading": "Distinguish uncertainty bounds from statistics",
          "columns": [
            "Quantity / case",
            "Calculation / condition",
            "Result / limit"
          ],
          "rows": [
            [
              "Relative contributions",
              "0.20% + 0.10% + 0.15%",
              "≈0.45% worst-case bound"
            ],
            [
              "Central C = 0.1000 M",
              "0.1000 × 0.0045",
              "≈0.00045 M bound"
            ],
            [
              "Repeated close results",
              "Precision evidence",
              "Not automatic accuracy"
            ]
          ]
        }
      },
      {
        "title": "Interpret confirmatory anion evidence",
        "formula": "Use a defined test scheme; one observation is not a universal identifier",
        "script": "Qualitative analysis builds a case from a defined sequence of observations and controlled interferences. In the standard carbonate comparison, acid treatment releases a gas that can turn limewater milky, consistent with carbon dioxide formation. Other acid reactive samples and gases require discrimination, so effervescence alone does not uniquely prove carbonate. A sulfate confirmation can involve a white barium sulfate precipitate that persists under the specified dilute acid conditions. For chloride, the familiar silver chloride precipitate is white and can dissolve in dilute aqueous ammonia under the appropriate test scheme. Those observations refer to different reagent systems; they must not be combined into one unlabelled result. Precipitation and complex formation can change what remains available for the next test. The meaning of an observation therefore depends on which aliquot, reagent and prior treatment produced it. Use the supplied method and comparison evidence rather than treating every white solid as the same substance. This chapter interprets analytical data and does not replace supervised laboratory handling, separation or disposal procedures.",
        "points": [
          "Carbonate evidence · Gas; limewater response · Effervescence alone insufficient",
          "Sulfate evidence · BaSO₄ precipitate · Persists in stated dilute acid",
          "Chloride evidence · White AgCl; ammonia response · Interpret within defined scheme"
        ],
        "board": {
          "heading": "Interpret confirmatory anion evidence",
          "columns": [
            "Quantity / case",
            "Calculation / condition",
            "Result / limit"
          ],
          "rows": [
            [
              "Carbonate evidence",
              "Gas; limewater response",
              "Effervescence alone insufficient"
            ],
            [
              "Sulfate evidence",
              "BaSO₄ precipitate",
              "Persists in stated dilute acid"
            ],
            [
              "Chloride evidence",
              "White AgCl; ammonia response",
              "Interpret within defined scheme"
            ]
          ]
        }
      },
      {
        "title": "Cation evidence includes complex formation",
        "formula": "Colour, precipitation and solubility are complementary observations",
        "script": "A cation can change its visible behaviour when its coordination environment changes. In a familiar copper two comparison, aqueous ammonia under suitable conditions can give a deep blue copper ammonia complex. Iron three with thiocyanate can give a strong red complex colour in the stated medium. These are useful pieces of evidence, not promises that colour alone identifies an arbitrary mixture. Concentration, acidity, competing ligands and other coloured species can affect what is observed. Aluminium hydroxide provides a different kind of evidence: its amphoteric behaviour allows dissolution in excess alkali through hydroxo species. Zinc hydroxide can also show amphoteric dissolution, so that observation is not unique to aluminium. Distinguish the original cation from the new precipitate or dissolved complex when explaining a result. A valid analysis often needs separation and more than one confirmation before assigning an ion. The purpose is to connect observed changes with equilibria and coordination chemistry, while retaining the limits of an individual test. Do not infer a complete systematic analysis from one familiar colour name.",
        "points": [
          "Cu²⁺ with suitable NH₃ · Ammine complex · Deep blue evidence",
          "Fe³⁺ with SCN⁻ · Complex formation · Red evidence",
          "Al hydroxide in excess base · Amphoteric dissolution · Zn hydroxide can behave similarly"
        ],
        "board": {
          "heading": "Cation evidence includes complex formation",
          "columns": [
            "Quantity / case",
            "Calculation / condition",
            "Result / limit"
          ],
          "rows": [
            [
              "Cu²⁺ with suitable NH₃",
              "Ammine complex",
              "Deep blue evidence"
            ],
            [
              "Fe³⁺ with SCN⁻",
              "Complex formation",
              "Red evidence"
            ],
            [
              "Al hydroxide in excess base",
              "Amphoteric dissolution",
              "Zn hydroxide can behave similarly"
            ]
          ]
        }
      },
      {
        "title": "Include the vessel in a mixing heat balance",
        "formula": "100c(80−T) = (200c + Ccal)(T−20)",
        "script": "A mixing temperature calculation must account for every specified heat capacity and initial temperature. Mix one hundred grams of water at eighty degrees Celsius with two hundred grams at twenty degrees in a calorimeter initially at twenty degrees. Assume no heat loss, no phase change and constant water specific heat capacity four point two joules per gram kelvin. If the vessel heat capacity were negligible, the final temperature would be forty degrees Celsius. Now include a calorimeter heat capacity of eighty four joules per kelvin. This equals the heat capacity of twenty grams of water in the stated approximation. Heat lost by hot water equals heat gained by cold water and vessel. The weighted temperature is therefore eight thousand plus four thousand plus four hundred, divided by three hundred twenty, giving thirty eight point seven five degrees Celsius. The final temperature lies between the initial temperatures and is lower than the vessel free estimate because the vessel also warms. Do not include its heat capacity twice if a supplied combined calorimeter constant already contains the water contribution. State the insulation and constant heat capacity assumptions before treating the result as an experimental prediction.",
        "points": [
          "Ignoring vessel · (100×80 + 200×20)/300 · 40.00 °C",
          "Vessel heat capacity · 84/4.2 · 20 g water equivalent",
          "Including vessel at 20 °C · 12400/320 · 38.75 °C"
        ],
        "board": {
          "heading": "Include the vessel in a mixing heat balance",
          "columns": [
            "Quantity / case",
            "Calculation / condition",
            "Result / limit"
          ],
          "rows": [
            [
              "Ignoring vessel",
              "(100×80 + 200×20)/300",
              "40.00 °C"
            ],
            [
              "Vessel heat capacity",
              "84/4.2",
              "20 g water equivalent"
            ],
            [
              "Including vessel at 20 °C",
              "12400/320",
              "38.75 °C"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Burette readings 3.10 to 21.50 mL with a valid 0.40 mL blank give corrected titre:",
        "options": [
          "18.40 mL",
          "18.00 mL",
          "21.10 mL",
          "24.60 mL"
        ],
        "answer": 1,
        "explanation": "Delivered volume is 21.50−3.10=18.40 mL; subtract the stated blank to get 18.00 mL."
      },
      {
        "question": "That corrected titre of 0.0200 M permanganate becoming Mn2+ in acid represents Fe2+ concentration in a 25.00 mL aliquot of:",
        "options": [
          "0.0144 M",
          "0.360 M",
          "0.0720 M",
          "0.00360 M"
        ],
        "answer": 2,
        "explanation": "Five Fe2+ per permanganate gives 5×0.0200×0.01800/0.02500=0.0720 M."
      },
      {
        "question": "Small worst-case relative bounds 0.20%, 0.10% and 0.15% combine to a first-order bound of:",
        "options": [
          "0.45%",
          "0.15%",
          "0.003%",
          "45%"
        ],
        "answer": 0,
        "explanation": "For the stated product/ratio worst-case approximation, add the three relative contributions."
      },
      {
        "question": "Amphoteric hydroxide dissolution in excess base uniquely proves aluminium:",
        "options": [
          "Always, regardless of other ions",
          "Only from the colour white",
          "Because zinc hydroxide never dissolves",
          "No; zinc hydroxide can also show this behaviour"
        ],
        "answer": 3,
        "explanation": "The observation supports an amphoteric hydroxide but is not unique to aluminium."
      },
      {
        "question": "For the stated water-mixing example including Ccal=84 J/K initially at 20 °C, final temperature is:",
        "options": [
          "40.00 °C",
          "38.75 °C",
          "42.00 °C",
          "60.00 °C"
        ],
        "answer": 1,
        "explanation": "The vessel equals 20 g water heat capacity: (100×80+200×20+20×20)/320=38.75 °C."
      },
      {
        "question": "Many close repeated titres establish mainly:",
        "options": [
          "Absence of every calibration error",
          "A unique chemical identity",
          "Repeatability precision under those conditions",
          "Automatic 100% accuracy"
        ],
        "answer": 2,
        "explanation": "Systematic calibration or endpoint errors can persist even when repeated results are close."
      }
    ],
    "foundationExtraQuiz": [
      {
        "question": "20.0 mL of 0.100 M monoprotic acid needs what volume of 0.0800 M monobasic base at 1:1 equivalence?",
        "options": [
          "16.0 mL",
          "25.0 mL",
          "20.0 mL always",
          "80.0 mL"
        ],
        "answer": 1,
        "explanation": "Moles = 0.00200, so base volume = 0.00200/0.0800 = 0.0250 L."
      },
      {
        "question": "In the stated simple calorimeter, +836 J gained by solution from 0.0200 mol reaction gives approximate molar reaction heat:",
        "options": [
          "+41.8 kJ/mol",
          "−0.836 kJ/mol",
          "−41.8 kJ/mol",
          "+836 kJ/mol"
        ],
        "answer": 2,
        "explanation": "Reaction heat is −836 J; divide by 0.0200 mol and convert to kJ/mol."
      },
      {
        "question": "At a matched clock threshold, times of 20 s and 40 s imply the first relative average rate is:",
        "options": [
          "Twice the second",
          "Half the second",
          "Equal necessarily",
          "An absolute rate constant of 2"
        ],
        "answer": 0,
        "explanation": "With the same threshold and suitable controls, inverse time gives a factor of 40/20 = 2."
      },
      {
        "question": "Both aluminium and zinc hydroxides dissolve in excess strong base. This observation alone:",
        "options": [
          "Proves aluminium uniquely",
          "Proves zinc uniquely",
          "Proves no metal was present",
          "Does not uniquely distinguish the two"
        ],
        "answer": 3,
        "explanation": "A shared response needs additional selective evidence for identification."
      }
    ],
    "sources": [
      {
        "title": "NCERT: systematic qualitative analysis",
        "url": "https://www.ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/chemistry/kelm207.pdf"
      },
      {
        "title": "OpenStax: calorimetry",
        "url": "https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry"
      }
    ]
  }
};
