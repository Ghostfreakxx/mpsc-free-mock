// Authored by scripts/expand-kinetics-coordination-equilibrium.mjs.
export const kineticsCoordinationEquilibriumAdditions = {
  "equilibrium": {
    "base": 13,
    "quizBase": 18,
    "chapters": [
      {
        "title": "Transform equilibrium constants with the equation",
        "formula": "Reverse: 1/K; multiply coefficients by n: Kⁿ",
        "script": "An equilibrium constant belongs to a balanced reaction at a stated temperature. Changing the equation changes the corresponding constant. Suppose the supplied dimensionless constant for nitrogen plus three hydrogen forming two ammonia molecules is sixteen. Reversing that equation inverts the reaction quotient, so the reverse constant is one sixteenth. Halving every coefficient takes the square root, giving four for half nitrogen plus three halves hydrogen forming one ammonia. Reversing and then halving gives one quarter, not one eighth. Adding two reactions multiplies their constants because the corresponding quotients multiply and any common intermediate activities cancel. For a supplied reaction converting X to Y with constant five, followed by Y to Z with constant four, the net X to Z constant is twenty. These operations use the same temperature and compatible standard state conventions. The constant is not multiplied by two merely because every reaction coefficient was doubled. Write the transformed quotient or combine standard Gibbs energies if unsure. These bookkeeping rules do not supply the new constant at another temperature; temperature dependence requires additional thermodynamic information.",
        "points": [
          "Given forward K = 16 · Reverse equation · Kreverse = 1/16",
          "Halve all coefficients · Take square root · Khalf = 4",
          "X→Y K=5; Y→Z K=4 · Add reactions; cancel Y · X→Z K=20"
        ],
        "board": {
          "heading": "Transform equilibrium constants with the equation",
          "columns": [
            "Given / case",
            "Calculation / reason",
            "Result / condition"
          ],
          "rows": [
            [
              "Given forward K = 16",
              "Reverse equation",
              "Kreverse = 1/16"
            ],
            [
              "Halve all coefficients",
              "Take square root",
              "Khalf = 4"
            ],
            [
              "X→Y K=5; Y→Z K=4",
              "Add reactions; cancel Y",
              "X→Z K=20"
            ]
          ]
        }
      },
      {
        "title": "Pure solids and pressure in heterogeneous equilibrium",
        "formula": "CaCO₃(s) ⇌ CaO(s) + CO₂(g): Kp = pCO₂/p°",
        "script": "A pure solid does not appear as a variable concentration factor in the usual equilibrium expression while that pure phase is present. Consider calcium carbonate solid reversibly forming calcium oxide solid and carbon dioxide gas at a fixed temperature. If both pure solid phases coexist, their activities are one in the chosen standard states, and the dimensionless equilibrium constant is carbon dioxide partial pressure divided by standard pressure. Suppose the supplied constant is zero point two zero zero and standard pressure is one bar. The equilibrium carbon dioxide pressure is then zero point two zero zero bar. Adding more calcium carbonate alone does not raise that equilibrium pressure when both solids remain present. Compressing the gas volume initially raises its carbon dioxide pressure; reaction can then proceed in the reverse direction until the equilibrium pressure is restored, provided enough appropriate solid remains. Adding an inert gas at fixed volume leaves carbon dioxide partial pressure unchanged in an ideal gas mixture, even though total pressure rises. If a solid phase is exhausted or the temperature changes, the simple coexistence pressure conclusion must be reconsidered. Identify partial pressure and phase presence before using a shortcut.",
        "points": [
          "Both pure solids present · Kp = pCO₂/p° = 0.200 · pCO₂ = 0.200 bar",
          "Add more pure CaCO₃ · Solid activity stays 1 · Same coexistence pressure",
          "Inert gas; fixed V and T · pCO₂ stays unchanged · No ideal-gas shift"
        ],
        "board": {
          "heading": "Pure solids and pressure in heterogeneous equilibrium",
          "columns": [
            "Given / case",
            "Calculation / reason",
            "Result / condition"
          ],
          "rows": [
            [
              "Both pure solids present",
              "Kp = pCO₂/p° = 0.200",
              "pCO₂ = 0.200 bar"
            ],
            [
              "Add more pure CaCO₃",
              "Solid activity stays 1",
              "Same coexistence pressure"
            ],
            [
              "Inert gas; fixed V and T",
              "pCO₂ stays unchanged",
              "No ideal-gas shift"
            ]
          ]
        }
      },
      {
        "title": "Solve a weak-base balance before using the shortcut",
        "formula": "Kb = x²/(C−x); x = (−Kb + √(Kb²+4KbC))/2",
        "script": "A weak base calculation should check whether its ionization is small enough for a square root approximation. Take an uncharged base in water with supplied concentration zero point zero zero one zero zero molar and base constant one times ten to the minus four. Assume ideal dilute behaviour and neglect water autoionization relative to the hydroxide produced. Let x be the equilibrium hydroxide concentration. The conjugate acid concentration is also x, while unreacted base is C minus x. The base constant is x squared divided by C minus x. Solving the quadratic gives approximately zero point zero zero zero two seven zero molar hydroxide. This is about twenty seven percent of the initial base concentration, so replacing C minus x by C is not justified. The square root estimate would be zero point zero zero zero three one six molar, noticeably higher. Using the quadratic value gives p O H about three point five seven and, with supplied p K w fourteen at twenty five degrees Celsius, p H about ten point four three. The subtraction from fourteen is temperature dependent through the ionic product of water. A very dilute base may require including water ionization as well.",
        "points": [
          "C = 1.00×10⁻³ M · Kb = 1.00×10⁻⁴ · Solve quadratic balance",
          "Hydroxide positive root · x ≈ 2.70×10⁻⁴ M · x/C ≈ 27.0%",
          "pKw = 14.00 supplied · pOH ≈ 3.57 · pH ≈ 10.43"
        ],
        "board": {
          "heading": "Solve a weak-base balance before using the shortcut",
          "columns": [
            "Given / case",
            "Calculation / reason",
            "Result / condition"
          ],
          "rows": [
            [
              "C = 1.00×10⁻³ M",
              "Kb = 1.00×10⁻⁴",
              "Solve quadratic balance"
            ],
            [
              "Hydroxide positive root",
              "x ≈ 2.70×10⁻⁴ M",
              "x/C ≈ 27.0%"
            ],
            [
              "pKw = 14.00 supplied",
              "pOH ≈ 3.57",
              "pH ≈ 10.43"
            ]
          ]
        }
      },
      {
        "title": "Compare precipitation thresholds after dilution",
        "formula": "Onset for MX: [X⁻]threshold = Ksp/[M⁺]",
        "script": "Selective precipitation begins with comparing ion products, not simply choosing the smaller printed solubility constant without regard to composition. Consider two hypothetical one to one salts, A X and B X, whose cations are each initially zero point zero one zero zero molar after any mixing dilution. Their supplied solubility products are one times ten to the minus ten and one times ten to the minus eight. Assume ideal behaviour, no complexation and negligible volume change while adding the common anion X. The onset anion concentrations are one times ten to the minus eight molar for A X and one times ten to the minus six for B X. Thus A X begins precipitating first. Just as B X reaches its onset, the remaining dissolved A concentration set by A X saturation is one times ten to the minus four molar. Relative to the original zero point zero one zero zero, ninety nine percent of A has been removed. Equality of ion product and constant marks saturation, not an already large precipitate amount. For different stoichiometries, unequal starting concentrations or significant dilution, recalculate the full expressions before predicting separation quality.",
        "points": [
          "AX: Ksp=10⁻¹⁰; [A⁺]=0.0100 · [X⁻] = Ksp/[A⁺] · Onset 10⁻⁸ M",
          "BX: Ksp=10⁻⁸; [B⁺]=0.0100 · [X⁻] = Ksp/[B⁺] · Onset 10⁻⁶ M",
          "At BX onset · [A⁺]=10⁻¹⁰/10⁻⁶ · 10⁻⁴ M; 99% A removed"
        ],
        "board": {
          "heading": "Compare precipitation thresholds after dilution",
          "columns": [
            "Given / case",
            "Calculation / reason",
            "Result / condition"
          ],
          "rows": [
            [
              "AX: Ksp=10⁻¹⁰; [A⁺]=0.0100",
              "[X⁻] = Ksp/[A⁺]",
              "Onset 10⁻⁸ M"
            ],
            [
              "BX: Ksp=10⁻⁸; [B⁺]=0.0100",
              "[X⁻] = Ksp/[B⁺]",
              "Onset 10⁻⁶ M"
            ],
            [
              "At BX onset",
              "[A⁺]=10⁻¹⁰/10⁻⁶",
              "10⁻⁴ M; 99% A removed"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "A reaction has K=16. Halving every coefficient gives:",
        "options": [
          "8",
          "4",
          "256",
          "1/16"
        ],
        "answer": 1,
        "explanation": "The quotient and constant are raised to the power 1/2."
      },
      {
        "question": "For X→Y with K=5 and Y→Z with K=4 at the same temperature, net X→Z has K:",
        "options": [
          "1",
          "9",
          "20",
          "5/4"
        ],
        "answer": 2,
        "explanation": "Adding reactions multiplies their constants."
      },
      {
        "question": "Both pure CaCO3 and CaO coexist with CO2. Kp=0.200 dimensionless and p°=1 bar. The CO2 equilibrium pressure is:",
        "options": [
          "5 bar",
          "1 bar",
          "0.0400 bar",
          "0.200 bar"
        ],
        "answer": 3,
        "explanation": "Kp=pCO2/p° when both solid activities are one."
      },
      {
        "question": "Adding ideal inert gas at fixed volume and temperature to that equilibrium:",
        "options": [
          "Leaves CO2 partial pressure unchanged",
          "Always doubles CO2 partial pressure",
          "Consumes all CaO",
          "Changes Kp"
        ],
        "answer": 0,
        "explanation": "pCO2=nCO2RT/V is initially unchanged."
      },
      {
        "question": "For C=0.00100 M and Kb=0.000100, the quadratic gives hydroxide approximately:",
        "options": [
          "0.00100 M",
          "0.000270 M",
          "0.000316 M exactly",
          "0.0100 M"
        ],
        "answer": 1,
        "explanation": "The positive root of x²+Kb x−Kb C=0 is 2.70156×10⁻4 M."
      },
      {
        "question": "The fraction ionized in that weak-base example is approximately:",
        "options": [
          "0.027%",
          "2.7%",
          "27%",
          "0.27%"
        ],
        "answer": 2,
        "explanation": "x/C≈0.270. The small-ionization shortcut is not justified."
      },
      {
        "question": "A 1:1 salt has Ksp=10⁻10 and dissolved cation 0.0100 M before onset. Threshold anion concentration is:",
        "options": [
          "10⁻12 M",
          "10⁻10 M",
          "10⁻6 M",
          "10⁻8 M"
        ],
        "answer": 3,
        "explanation": "Threshold=Ksp/cation concentration."
      },
      {
        "question": "At anion concentration 10⁻6 M, AX saturation with Ksp=10⁻10 leaves [A+]=10⁻4 M. Starting from 0.0100 M with negligible volume change, percent removed is:",
        "options": [
          "99%",
          "1%",
          "90%",
          "99.99%"
        ],
        "answer": 0,
        "explanation": "Remaining fraction=10⁻4/10⁻2=0.01; removed fraction=0.99."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: equilibrium calculations",
        "url": "https://openstax.org/books/chemistry-2e/pages/13-4-equilibrium-calculations"
      },
      {
        "title": "OpenStax: precipitation and dissolution",
        "url": "https://openstax.org/books/chemistry-2e/pages/15-1-precipitation-and-dissolution"
      },
      {
        "title": "OpenStax: acid and base equilibria",
        "url": "https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases"
      }
    ]
  },
  "coordination-compounds": {
    "base": 10,
    "quizBase": 18,
    "chapters": [
      {
        "title": "Coordination isomerism exchanges ligand distributions",
        "formula": "Both cation and anion are complex ions in this example",
        "script": "Coordination isomerism concerns how ligands are distributed between a complex cation and a complex anion. Compare a salt containing hexaamminecobalt three plus and hexacyanidochromate three minus with a salt containing hexaamminechromium three plus and hexacyanidocobaltate three minus. The total atom inventory is the same, but the metal to ligand connections differ. In each cation, six neutral ammonia ligands surround a metal in oxidation state plus three. In each anion, six cyanido ligands of charge minus one surround a metal in oxidation state plus three, giving overall charge minus three. Six donor atoms coordinate to each metal in this monodentate example. This exchange is different from linkage isomerism, where one ambidentate ligand changes its donor atom, and different from ionization isomerism, where coordinated and counter ions exchange roles. A formula comparison should establish the same overall composition before applying an isomer label. Merely changing an oxidation number in a written name does not create a valid pair. The example classifies connectivity; it does not imply that every conceivable exchanged salt has equal stability or can be prepared under identical conditions.",
        "points": [
          "[Co(NH₃)₆][Cr(CN)₆] · Both metals +3 · Cation +3; anion −3",
          "[Cr(NH₃)₆][Co(CN)₆] · Same total composition · Ligand distribution differs",
          "Isomer classification · Complex cation and anion · Coordination isomerism"
        ],
        "board": {
          "heading": "Coordination isomerism exchanges ligand distributions",
          "columns": [
            "Given / case",
            "Calculation / reason",
            "Result / condition"
          ],
          "rows": [
            [
              "[Co(NH₃)₆][Cr(CN)₆]",
              "Both metals +3",
              "Cation +3; anion −3"
            ],
            [
              "[Cr(NH₃)₆][Co(CN)₆]",
              "Same total composition",
              "Ligand distribution differs"
            ],
            [
              "Isomer classification",
              "Complex cation and anion",
              "Coordination isomerism"
            ]
          ]
        }
      },
      {
        "title": "Hydrate isomerism distinguishes coordinated water",
        "formula": "Inside-sphere water occupies donor positions; crystal water does not",
        "script": "Water shown in a coordination formula can be a ligand or a molecule of crystallization. Compare hexaaquachromium three chloride, with six water ligands inside the coordination sphere and three chloride counter ions, against pentaaquachloridochromium three chloride monohydrate. In the second compound, five waters and one chloride occupy six donor positions around chromium. Two chlorides remain outside and one water is outside as water of crystallization. Both have the same total inventory of chromium, three chlorines and six waters, while their coordination spheres differ. This is a hydrate or solvate isomerism comparison. In an ideal immediate chloride precipitation test that leaves the coordination sphere intact, one mole of the first compound gives three moles of silver chloride, while one mole of the second gives two. For zero point zero one zero zero mole of each, with supplied silver chloride molar mass one hundred forty three point five grams per mole, the predicted masses are four point three zero five and two point eight seven zero grams. Slow ligand substitution or other side processes can invalidate a simple outer sphere count, so the test conditions and time scale matter.",
        "points": [
          "[Cr(H₂O)₆]Cl₃ · 6 donor waters; 3 free Cl⁻ · 0.0100 mol → 4.305 g AgCl",
          "[Cr(H₂O)₅Cl]Cl₂·H₂O · 5 waters + 1 Cl donor · 0.0100 mol → 2.870 g AgCl",
          "Both formulas · CrCl₃·6H₂O total · Sphere kept intact in test"
        ],
        "board": {
          "heading": "Hydrate isomerism distinguishes coordinated water",
          "columns": [
            "Given / case",
            "Calculation / reason",
            "Result / condition"
          ],
          "rows": [
            [
              "[Cr(H₂O)₆]Cl₃",
              "6 donor waters; 3 free Cl⁻",
              "0.0100 mol → 4.305 g AgCl"
            ],
            [
              "[Cr(H₂O)₅Cl]Cl₂·H₂O",
              "5 waters + 1 Cl donor",
              "0.0100 mol → 2.870 g AgCl"
            ],
            [
              "Both formulas",
              "CrCl₃·6H₂O total",
              "Sphere kept intact in test"
            ]
          ]
        }
      },
      {
        "title": "Compare octahedral and tetrahedral d3 stabilization",
        "formula": "Octahedral d³: −1.2Δo; tetrahedral d³: −0.8Δt",
        "script": "Crystal field stabilization is measured relative to a chosen orbital energy barycentre. For an octahedral d three ion in the elementary model, three electrons occupy the lower three orbitals singly. Each contributes minus zero point four times the octahedral splitting, giving total minus one point two times that splitting, with three unpaired electrons. A tetrahedral d three ion instead fills two lower orbitals singly, then places the third electron in one of the upper three orbitals under the usual high spin assumption. Lower orbitals contribute minus zero point six times the tetrahedral splitting each; the upper electron contributes plus zero point four, giving net minus zero point eight times the tetrahedral splitting. Both arrangements have three unpaired electrons, so equal unpaired counts do not imply equal orbital stabilization or equal geometry. In a supplied ideal comparison, the tetrahedral splitting is four ninths of the octahedral value for otherwise comparable fields. If octahedral splitting is eighteen thousand reciprocal centimetres, tetrahedral splitting is eight thousand, and the two stabilizations are minus twenty one thousand six hundred and minus six thousand four hundred reciprocal centimetres. Actual geometry selection involves more than this one energy contribution.",
        "points": [
          "Octahedral d³ · 3 × (−0.4Δo) · −1.2Δo; 3 unpaired",
          "Tetrahedral d³ · 2 × (−0.6Δt) + 0.4Δt · −0.8Δt; 3 unpaired",
          "Given Δo = 18000 cm⁻¹ · Assume Δt = (4/9)Δo · Δt = 8000 cm⁻¹"
        ],
        "board": {
          "heading": "Compare octahedral and tetrahedral d3 stabilization",
          "columns": [
            "Given / case",
            "Calculation / reason",
            "Result / condition"
          ],
          "rows": [
            [
              "Octahedral d³",
              "3 × (−0.4Δo)",
              "−1.2Δo; 3 unpaired"
            ],
            [
              "Tetrahedral d³",
              "2 × (−0.6Δt) + 0.4Δt",
              "−0.8Δt; 3 unpaired"
            ],
            [
              "Given Δo = 18000 cm⁻¹",
              "Assume Δt = (4/9)Δo",
              "Δt = 8000 cm⁻¹"
            ]
          ]
        }
      },
      {
        "title": "Count EDTA ligands and metal titration amounts",
        "formula": "One hexadentate EDTA ligand can occupy six donor positions",
        "script": "Ligand count and coordination number are different quantities. In a simple metal complex with one fully bound hexadentate EDTA ligand, the ligand uses two nitrogen and four oxygen donor atoms. One ligand can therefore account for six donor positions. Treating six donor atoms as six separate EDTA molecules would give the wrong composition and titration ratio. Consider a supplied one to one metal binding model at a suitable buffered p H, with no interfering ions. A twenty five point zero millilitre metal aliquot consumes twenty point zero millilitres of zero point zero one zero zero molar EDTA. Titrant amount is zero point zero zero zero two zero zero mole, equal to metal amount in the stated model. Dividing by zero point zero two five zero litre gives metal concentration zero point zero zero eight zero zero molar. EDTA protonation and metal hydrolysis depend on p H, so its effective binding strength is conditional; a large formal formation constant alone does not guarantee quantitative titration in every solution. The calculation assumes suitable reaction completion and endpoint detection. It illustrates ligand denticity and analytical stoichiometry, not an instruction to conduct a titration without a laboratory protocol.",
        "points": [
          "One fully bound EDTA · 2 N + 4 O donors · 1 ligand; 6 positions",
          "20.0 mL × 0.0100 M · 0.000200 mol EDTA · Same metal amount",
          "25.0 mL metal aliquot · 0.000200 / 0.0250 · 0.00800 M metal"
        ],
        "board": {
          "heading": "Count EDTA ligands and metal titration amounts",
          "columns": [
            "Given / case",
            "Calculation / reason",
            "Result / condition"
          ],
          "rows": [
            [
              "One fully bound EDTA",
              "2 N + 4 O donors",
              "1 ligand; 6 positions"
            ],
            [
              "20.0 mL × 0.0100 M",
              "0.000200 mol EDTA",
              "Same metal amount"
            ],
            [
              "25.0 mL metal aliquot",
              "0.000200 / 0.0250",
              "0.00800 M metal"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Exchanging ammine and cyanido ligand distributions between complex cation and complex anion illustrates:",
        "options": [
          "Linkage only",
          "Coordination isomerism",
          "Optical rotation only",
          "A change in isotope"
        ],
        "answer": 1,
        "explanation": "Coordination isomerism redistributes ligands between complex cation and complex anion at fixed total composition."
      },
      {
        "question": "The metal oxidation state in [Cr(CN)6]3− is:",
        "options": [
          "0",
          "+6",
          "+3",
          "−3"
        ],
        "answer": 2,
        "explanation": "Six cyanido ligands contribute −6 charge. Charge balance x−6=−3 gives metal oxidation state +3."
      },
      {
        "question": "With sphere intact, 0.0100 mol [Cr(H2O)6]Cl3 gives AgCl mass for M=143.5 g/mol:",
        "options": [
          "1.435 g",
          "2.870 g",
          "0.4305 g",
          "4.305 g"
        ],
        "answer": 3,
        "explanation": "Three outer chloride ions give 0.0300 mol AgCl."
      },
      {
        "question": "The coordination number of Cr in [Cr(H2O)5Cl]Cl2·H2O is:",
        "options": [
          "6",
          "5",
          "8",
          "3"
        ],
        "answer": 0,
        "explanation": "Five water donors plus one coordinated chloride give six. Crystal water is outside."
      },
      {
        "question": "The octahedral d3 crystal field stabilization, excluding other energy terms, is:",
        "options": [
          "−0.8Δo",
          "−1.2Δo",
          "+1.2Δo",
          "−2.4Δo"
        ],
        "answer": 1,
        "explanation": "Three lower t2g electrons each contribute −0.4Δo."
      },
      {
        "question": "For high-spin tetrahedral d3, the orbital stabilization is:",
        "options": [
          "−1.2Δt",
          "+0.8Δt",
          "−0.8Δt",
          "−1.8Δt"
        ],
        "answer": 2,
        "explanation": "Two lower e electrons and one upper t2 electron give −1.2Δt+0.4Δt."
      },
      {
        "question": "One fully hexadentate EDTA ligand supplies how many donor positions?",
        "options": [
          "1",
          "2",
          "4",
          "6"
        ],
        "answer": 3,
        "explanation": "Two nitrogen and four oxygen atoms donate in the stated binding mode."
      },
      {
        "question": "25.0 mL metal consumes 20.0 mL 0.0100 M EDTA in a quantitative 1:1 model. Metal concentration is:",
        "options": [
          "0.00800 M",
          "0.0125 M",
          "0.0200 M",
          "0.000200 M"
        ],
        "answer": 0,
        "explanation": "Metal moles=0.0200×0.0100=0.000200; divide by 0.0250 L."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: coordination chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/19-2-coordination-chemistry-of-transition-metals"
      },
      {
        "title": "OpenStax: crystal field properties",
        "url": "https://openstax.org/books/chemistry-2e/pages/19-3-spectroscopic-and-magnetic-properties-of-coordination-compounds"
      }
    ]
  },
  "chemical-kinetics": {
    "base": 10,
    "quizBase": 18,
    "chapters": [
      {
        "title": "Read the logarithm before using the Arrhenius slope",
        "formula": "ln k versus 1/T: slope = −Ea/R",
        "script": "An Arrhenius graph is useful only after identifying both axes and the logarithm convention. For a fixed mechanism with an approximately constant pre exponential factor, the natural logarithm of the rate constant equals the natural logarithm of that factor minus activation energy divided by R T. A graph of natural logarithm k against reciprocal absolute temperature therefore has slope minus activation energy divided by R. Suppose its measured slope is minus six thousand kelvin. Multiplying the positive magnitude by R, eight point three one four joules per mole kelvin, gives activation energy forty nine point eight eight four kilojoules per mole. If the vertical axis instead uses base ten logarithm k, the slope contains an additional factor two point three zero three in the denominator. Applying the natural logarithm formula to that graph would give the wrong energy. Also inspect horizontal scaling: a graph against one thousand divided by temperature does not have the same numerical slope as one against reciprocal temperature. A straight segment supports a useful model over its measured range; it does not prove the mechanism and pre exponential factor remain unchanged at every temperature.",
        "points": [
          "ln k vs 1/T · Slope = −6000 K · Ea = 49.884 kJ/mol",
          "log₁₀ k vs 1/T · Slope = −Ea/(2.303R) · Different slope convention",
          "Horizontal axis scaling · 1000/T differs from 1/T · Read units first"
        ],
        "board": {
          "heading": "Read the logarithm before using the Arrhenius slope",
          "columns": [
            "Given / case",
            "Calculation / reason",
            "Result / condition"
          ],
          "rows": [
            [
              "ln k vs 1/T",
              "Slope = −6000 K",
              "Ea = 49.884 kJ/mol"
            ],
            [
              "log₁₀ k vs 1/T",
              "Slope = −Ea/(2.303R)",
              "Different slope convention"
            ],
            [
              "Horizontal axis scaling",
              "1000/T differs from 1/T",
              "Read units first"
            ]
          ]
        }
      },
      {
        "title": "Infer fractional orders from controlled initial rates",
        "formula": "r = k[A]^(1/2)[B]; overall order = 3/2",
        "script": "Experimental reaction order need not be an integer and need not equal a balanced equation coefficient. Consider three initial rate measurements at the same temperature and with the same preparation conditions. In the first experiment, A and B concentrations are both zero point one zero zero molar, and the initial rate is zero point zero zero two zero molar per second. In the second, A is increased fourfold while B stays fixed, and the rate doubles. Thus four raised to the order in A equals two, giving order one half. In the third experiment, return A to its original value and triple B. If the initial rate triples, the order in B is one. The overall order is three halves. Dividing rate by the square root of A concentration and by B concentration gives a rate constant with units molarity to the negative one half per second. Fractional order describes an observed rate law; molecularity is a count for an elementary event and is not assigned a fractional value. Use initial rates so changing composition during a run does not obscure the controlled comparison.",
        "points": [
          "A ×4; B fixed · Initial rate ×2 · Order in A = 1/2",
          "A fixed; B ×3 · Initial rate ×3 · Order in B = 1",
          "Overall order 3/2 · Rate units M/s · k units M⁻¹ᐟ² s⁻¹"
        ],
        "board": {
          "heading": "Infer fractional orders from controlled initial rates",
          "columns": [
            "Given / case",
            "Calculation / reason",
            "Result / condition"
          ],
          "rows": [
            [
              "A ×4; B fixed",
              "Initial rate ×2",
              "Order in A = 1/2"
            ],
            [
              "A fixed; B ×3",
              "Initial rate ×3",
              "Order in B = 1"
            ],
            [
              "Overall order 3/2",
              "Rate units M/s",
              "k units M⁻¹ᐟ² s⁻¹"
            ]
          ]
        }
      },
      {
        "title": "Separate dilution from chemical conversion",
        "formula": "Instant dilution changes concentration, not the surviving amount",
        "script": "A sudden concentration decrease is not always evidence that reactant has been consumed. Take a first order reaction in a closed well mixed liquid, with rate constant zero point zero six nine three one per minute. At the selected instant there are zero point one zero zero moles of reactant in one litre. Add inert solvent rapidly so the volume becomes two litres, with no reaction during the idealized mixing step. The amount remains zero point one zero zero moles, but concentration falls from zero point one zero zero to zero point zero five zero zero molar. After mixing, assume the temperature, medium effects and first order rate constant remain unchanged. Ten minutes later, about half the amount remains: zero point zero five zero zero moles in two litres, or zero point zero two five zero zero molar. Using the original concentration as though no dilution occurred would mistake mixing for additional reaction. Real dilution may alter a rate constant through solvent or ionic effects; constancy is an assumption here. Keep separate records of amount, volume and elapsed reaction time before choosing an integrated concentration ratio.",
        "points": [
          "Before mixing · 0.100 mol / 1.00 L · 0.100 M",
          "Immediately after dilution · 0.100 mol / 2.00 L · 0.0500 M",
          "After one 10 min half-life · 0.0500 mol / 2.00 L · 0.0250 M"
        ],
        "board": {
          "heading": "Separate dilution from chemical conversion",
          "columns": [
            "Given / case",
            "Calculation / reason",
            "Result / condition"
          ],
          "rows": [
            [
              "Before mixing",
              "0.100 mol / 1.00 L",
              "0.100 M"
            ],
            [
              "Immediately after dilution",
              "0.100 mol / 2.00 L",
              "0.0500 M"
            ],
            [
              "After one 10 min half-life",
              "0.0500 mol / 2.00 L",
              "0.0250 M"
            ]
          ]
        }
      },
      {
        "title": "Supporting application: competing first-order pathways",
        "formula": "A → B and A → C: ktotal = kB + kC",
        "script": "As a supporting rate law application, suppose one reactant can form either B or C through independent irreversible first order pathways. Let the rate constants be zero point zero two zero and zero point zero three zero per minute, respectively. Assume both stay constant, the products do not react further, and the initial products are absent. Reactant disappears through both channels, so its total first order loss constant is zero point zero five zero per minute. Its half life is the natural logarithm of two divided by that total, about thirteen point eight six minutes. Product formation rates have ratio two to three at every instant, because both contain the same current reactant concentration. Integrating gives forty percent of reacted A as B and sixty percent as C in this ideal model. When half of an initial one mole has reacted, B amount is zero point two zero mole and C amount zero point three zero mole. These are fractions of reacted material, not fractions of the remaining reactant. Reversible steps, product loss or different orders require another model; adding constants blindly is not a general rule for reaction networks.",
        "points": [
          "kB = 0.020; kC = 0.030 · Sum = 0.050 min⁻¹ · Half-life = 13.86 min",
          "Product branch fractions · 0.020/0.050; 0.030/0.050 · B 40%; C 60%",
          "Start 1.00 mol; 50% reacts · 0.500 × branch fraction · B 0.200; C 0.300 mol"
        ],
        "board": {
          "heading": "Supporting application: competing first-order pathways",
          "columns": [
            "Given / case",
            "Calculation / reason",
            "Result / condition"
          ],
          "rows": [
            [
              "kB = 0.020; kC = 0.030",
              "Sum = 0.050 min⁻¹",
              "Half-life = 13.86 min"
            ],
            [
              "Product branch fractions",
              "0.020/0.050; 0.030/0.050",
              "B 40%; C 60%"
            ],
            [
              "Start 1.00 mol; 50% reacts",
              "0.500 × branch fraction",
              "B 0.200; C 0.300 mol"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "The slope of ln k versus 1/T is −6000 K. With R=8.314 J/(mol K), Ea is:",
        "options": [
          "49.884 kJ/mol",
          "6 kJ/mol",
          "−49.884 kJ/mol",
          "114.9 J/mol"
        ],
        "answer": 0,
        "explanation": "Ea is minus slope times R; convert 49884 J/mol to kJ/mol."
      },
      {
        "question": "For log10 k versus 1/T, the slope is:",
        "options": [
          "−Ea/R",
          "−Ea/(2.303R)",
          "+Ea/R",
          "2.303Ea/R"
        ],
        "answer": 1,
        "explanation": "Converting natural to common logarithms divides the slope magnitude by 2.303."
      },
      {
        "question": "Quadrupling A at fixed B doubles the initial rate. Order in A is:",
        "options": [
          "2",
          "1",
          "1/2",
          "4"
        ],
        "answer": 2,
        "explanation": "The controlled rate ratio gives 4^m=2; taking logarithms gives experimental order m=1/2."
      },
      {
        "question": "For r=k[A]^(1/2)[B], the units of k when rate is M/s are:",
        "options": [
          "M/s",
          "s⁻¹",
          "M⁻¹ s⁻¹",
          "M⁻¹ᐟ² s⁻¹"
        ],
        "answer": 3,
        "explanation": "The concentration product has units M^(3/2). Dividing M/s by that product gives M^(-1/2) s^(-1)."
      },
      {
        "question": "A sample has 0.100 mol A. Instant dilution from 1 to 2 L without reaction leaves:",
        "options": [
          "0.100 mol A",
          "0.0500 mol A",
          "0.200 mol A",
          "Zero A"
        ],
        "answer": 0,
        "explanation": "Only concentration halves; amount is unchanged during the stated no-reaction mixing step."
      },
      {
        "question": "After dilution to 0.0500 M, one first-order half-life at fixed volume gives:",
        "options": [
          "0.100 M",
          "0.0250 M",
          "0.0125 M",
          "0.0500 M"
        ],
        "answer": 1,
        "explanation": "Use the concentration after mixing as the start of this time interval."
      },
      {
        "question": "Two independent irreversible first-order channels have constants 0.020 and 0.030 min⁻¹. The loss constant is:",
        "options": [
          "0.010",
          "0.600",
          "0.050",
          "0.0006"
        ],
        "answer": 2,
        "explanation": "The two loss rates add: (kB+kC)[A]."
      },
      {
        "question": "In that two-channel model, the fraction of reacted A forming the 0.030 min⁻¹ channel is:",
        "options": [
          "0.030",
          "0.40",
          "0.50",
          "0.60"
        ],
        "answer": 3,
        "explanation": "Branch fraction=0.030/(0.020+0.030)=0.60."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: collision theory and Arrhenius equation",
        "url": "https://openstax.org/books/chemistry-2e/pages/12-5-collision-theory"
      },
      {
        "title": "OpenStax: rate laws",
        "url": "https://openstax.org/books/chemistry-2e/pages/12-3-rate-laws"
      }
    ]
  }
} as const;
