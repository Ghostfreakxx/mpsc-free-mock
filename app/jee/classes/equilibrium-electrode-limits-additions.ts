// Authored by scripts/expand-equilibrium-electrode-limits.mjs.
export const equilibriumElectrodeLimitsAdditions = {
  "equilibrium": {
    "base": 25,
    "chapters": [
      {
        "title": "Inert-gas effects depend on what is held fixed",
        "formula": "Ideal gases at fixed T: constant V leaves pi unchanged; expansion factor f gives Qnew=Qold f^(−Δng)",
        "script": "Adding an inert gas changes total pressure without necessarily changing the reacting gases' partial pressures. Consider an ideal equilibrium of dinitrogen tetroxide forming two nitrogen dioxide molecules at a fixed temperature. At fixed volume, each reacting species still has partial pressure equal to its own mole amount times R T divided by that unchanged volume. The extra inert gas raises total pressure, but the reaction quotient remains at its original equilibrium value, so there is no composition shift in this ideal model. Now impose fixed total pressure instead, allowing the volume to double after inert gas addition before chemical reequilibration. Each reacting partial pressure is initially halved. Because the quotient has the nitrogen dioxide pressure squared divided by the dinitrogen tetroxide pressure, it becomes half its old value. The quotient is now below K, so dissociation proceeds forward toward the side with more gas molecules. K itself is unchanged because temperature is unchanged. For a reaction with zero net gas mole change, uniform partial pressure scaling cancels from the quotient. Name the constraint and calculate partial pressures instead of applying a rule based only on the words pressure increases.",
        "points": [
          "Fixed T and fixed V · Reacting pi=niRT/V unchanged · Inert gas alone gives no ideal shift",
          "N2O4 ⇌ 2NO2; V doubles · Q scales as(1/2)^2/(1/2) · Qnew=K/2; forward shift",
          "Fixed T means fixed K · Δng=0 cancels uniform scaling · Total pressure alone is insufficient"
        ],
        "board": {
          "heading": "Inert-gas effects depend on what is held fixed",
          "columns": [
            "Specified conditions",
            "Calculation / cause",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Fixed T and fixed V",
              "Reacting pi=niRT/V unchanged",
              "Inert gas alone gives no ideal shift"
            ],
            [
              "N2O4 ⇌ 2NO2; V doubles",
              "Q scales as(1/2)^2/(1/2)",
              "Qnew=K/2; forward shift"
            ],
            [
              "Fixed T means fixed K",
              "Δng=0 cancels uniform scaling",
              "Total pressure alone is insufficient"
            ]
          ]
        }
      },
      {
        "title": "Equal buffer pH does not mean equal capacity",
        "formula": "pH≈pKa+log(nA−/nHA), after strong-acid stoichiometry while both partners remain appreciable",
        "script": "Two buffers with the same conjugate base to acid ratio can begin at the same pH while resisting an added acid by different amounts. Use a weak acid with p K a five and two separate one liter ideal buffer samples. The smaller inventory contains zero point zero one zero mole each of acid and conjugate base. The larger inventory contains zero point one zero zero mole each. Both ratios start at one, giving approximate pH five. Add zero point zero zero five mole of strong acid to each, with negligible volume change. Neutralization consumes conjugate base and creates weak acid before the buffer equation is used. The smaller sample then contains zero point zero zero five mole base and zero point zero one five mole acid, giving approximate pH four point five two. The larger sample has zero point zero nine five mole base and zero point one zero five mole acid, giving about four point nine six. The larger inventory changes pH less. If the added acid exceeds the available conjugate base, this simple buffer ratio calculation no longer applies; excess strong acid and remaining equilibria must be considered. Ratio controls the initial pH, while amounts help determine capacity.",
        "points": [
          "pKa5; both initial ratios1 · Each initially pH≈5 · Inventories differ by10×",
          "Add.005 mol H+ to each · Small ratio.005/.015 · pH≈4.52",
          "Large ratio.095/.105 · pH≈4.96 after same addition · Capacity differs despite initial pH"
        ],
        "board": {
          "heading": "Equal buffer pH does not mean equal capacity",
          "columns": [
            "Specified conditions",
            "Calculation / cause",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "pKa5; both initial ratios1",
              "Each initially pH≈5",
              "Inventories differ by10×"
            ],
            [
              "Add.005 mol H+ to each",
              "Small ratio.005/.015",
              "pH≈4.52"
            ],
            [
              "Large ratio.095/.105",
              "pH≈4.96 after same addition",
              "Capacity differs despite initial pH"
            ]
          ]
        }
      },
      {
        "title": "Selective precipitation needs a residual-ion target",
        "formula": "At AgCl onset: [Ag+]=Ksp(AgCl)/[Cl−]; residual [Br−]=Ksp(AgBr)/[Ag+]",
        "script": "The salt that precipitates first need not be removed completely before another salt starts forming. Use a stipulated constant volume ideal mixture initially containing chloride and bromide, each at zero point zero one zero molar. Neglect complex formation and activity effects. Supplied solubility products are one times ten to the minus ten for silver chloride and five times ten to the minus thirteen for silver bromide. Silver bromide begins precipitating at the lower free silver concentration, five times ten to the minus eleven molar. Silver chloride begins when free silver reaches one times ten to the minus eight molar, while chloride remains essentially at its initial concentration up to that onset. With silver bromide solid present at this boundary, dissolved bromide is five times ten to the minus five molar. That is zero point five percent of its initial concentration, so ninety nine point five percent has precipitated. A requested ninety nine point nine percent bromide removal before any silver chloride precipitation is not achievable in this supplied model. Compare the residual amount with the stated separation target, not merely the order of onset. Dilution, complexes and nonideal activities would require a more complete calculation.",
        "points": [
          "Initial Cl−=Br−=.010 M · Ksp:AgCl1e−10;AgBr5e−13 · AgBr starts at[Ag+]=5e−11 M",
          "AgCl onset:[Ag+]=1e−8 M · [Br−]=5e−13/1e−8=5e−5 M · .5% remains;99.5% removed",
          "Target99.9% before AgCl · Needs lower residual Br− · Not met in this stipulated model"
        ],
        "board": {
          "heading": "Selective precipitation needs a residual-ion target",
          "columns": [
            "Specified conditions",
            "Calculation / cause",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Initial Cl−=Br−=.010 M",
              "Ksp:AgCl1e−10;AgBr5e−13",
              "AgBr starts at[Ag+]=5e−11 M"
            ],
            [
              "AgCl onset:[Ag+]=1e−8 M",
              "[Br−]=5e−13/1e−8=5e−5 M",
              ".5% remains;99.5% removed"
            ],
            [
              "Target99.9% before AgCl",
              "Needs lower residual Br−",
              "Not met in this stipulated model"
            ]
          ]
        }
      },
      {
        "title": "An indicator colour interval is an equilibrium ratio",
        "formula": "HIn ⇌ H+ + In−; pH≈pKa+log([In−]/[HIn]); 1:10 to10:1 gives pKa±1",
        "script": "An acid base indicator changes its dominant color because two chemical forms have different colors and their ratio depends on pH. Represent a simple indicator as a weak acid H In and its conjugate base In minus. In a dilute ideal comparison, the base to acid indicator ratio is ten raised to pH minus the indicator p K a. With p K a nine, pH eight gives ratio one tenth, pH nine gives equal amounts, and pH ten gives ratio ten. The common approximate color transition interval spans a ratio from one to ten through ten to one, corresponding to p K a minus one through plus one. That is not a statement that every observer or indicator has identical visibility thresholds. When choosing an indicator for a titration, its transition should fall within the steep pH change near the chemical equivalence point under the stated conditions. The observed endpoint and the stoichiometric equivalence point are related but distinct. An indicator is usually added in a small enough amount to avoid significantly changing the sample equilibrium. Its p K a is not automatically the p K a of the acid being titrated.",
        "points": [
          "Indicator pKa9 · pH8:base/acid=.1 · Acid form predominates",
          "pH9:ratio1; pH10:ratio10 · Approximate interval8–10 · Visibility limits are contextual",
          "Endpoint is observed colour · Equivalence is stoichiometric · Choose interval within steep pH change"
        ],
        "board": {
          "heading": "An indicator colour interval is an equilibrium ratio",
          "columns": [
            "Specified conditions",
            "Calculation / cause",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Indicator pKa9",
              "pH8:base/acid=.1",
              "Acid form predominates"
            ],
            [
              "pH9:ratio1; pH10:ratio10",
              "Approximate interval8–10",
              "Visibility limits are contextual"
            ],
            [
              "Endpoint is observed colour",
              "Equivalence is stoichiometric",
              "Choose interval within steep pH change"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "At fixed T and V, adding an ideal inert gas to N2O4⇌2NO2 leaves which quantity unchanged immediately?",
        "options": [
          "Reacting-gas partial pressures and Q",
          "Total pressure necessarily",
          "The total number of gas molecules",
          "Temperature-dependent K must double"
        ],
        "answer": 0,
        "explanation": "Each reacting pi=niRT/V is unchanged; extra inert pressure does not enter this ideal reaction quotient."
      },
      {
        "question": "If inert-gas addition at fixed T and total pressure doubles V before reaction, Q for N2O4⇌2NO2 becomes:",
        "options": [
          "2K",
          "K/2",
          "K²",
          "Unchanged for every gas reaction"
        ],
        "answer": 1,
        "explanation": "Each reacting partial pressure halves, so Q scales by(1/2)^2/(1/2)=1/2; dissociation then proceeds forward."
      },
      {
        "question": "After.005 mol H+ reacts with a buffer initially containing.010 mol each HA and A−, nA−/nHA is:",
        "options": [
          "1",
          "3",
          "1/3",
          "0"
        ],
        "answer": 2,
        "explanation": "Strong-acid stoichiometry gives.005 mol A− and.015 mol HA before applying the buffer approximation."
      },
      {
        "question": "Why does the corresponding.100/.100 mol buffer change pH less under the same acid addition?",
        "options": [
          "Its initial pH must be10",
          "The acid does not react",
          "Its pKa changes by10×",
          "Its larger conjugate-pair inventory gives a smaller ratio change"
        ],
        "answer": 3,
        "explanation": "Both start with ratio1 and pH≈pKa, but the same acid amount changes the larger inventories proportionally less."
      },
      {
        "question": "At AgCl onset in the supplied model,[Ag+]=1e−8 M and Ksp(AgBr)=5e−13. Residual[Br−] is:",
        "options": [
          "5e−5 M",
          "5e−21 M",
          ".010 M",
          "1e−8 M"
        ],
        "answer": 0,
        "explanation": "With AgBr solid present,[Br−]=Ksp/[Ag+]=5e−5 M."
      },
      {
        "question": "Starting from.010 M Br−, that residual means how much bromide is removed before AgCl onset?",
        "options": [
          "99.9%",
          "99.5%",
          "50%",
          ".5%"
        ],
        "answer": 1,
        "explanation": "Remaining fraction5e−5/.010=.005=.5%; removed fraction is99.5%, below a99.9% target."
      },
      {
        "question": "For an ideal indicator with pKa9, the ratio[In−]/[HIn] at pH10 is:",
        "options": [
          ".1",
          "1",
          "10",
          "100"
        ],
        "answer": 2,
        "explanation": "The ratio is10^(pH−pKa)=10^1=10."
      },
      {
        "question": "A titration indicator should normally be selected so its transition interval:",
        "options": [
          "Always centers on pH7",
          "Equals the analyte pKa in every titration",
          "Changes the whole sample pH substantially",
          "Falls within the steep pH change around equivalence"
        ],
        "answer": 3,
        "explanation": "A visual endpoint approximates equivalence best when the color transition lies inside that steep pH interval."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: shifting gas equilibria",
        "url": "https://openstax.org/books/chemistry-2e/pages/13-3-shifting-equilibria-le-chateliers-principle"
      },
      {
        "title": "OpenStax: buffers and capacity",
        "url": "https://openstax.org/books/chemistry-2e/pages/14-6-buffers"
      },
      {
        "title": "OpenStax: precipitation equilibria and selective removal",
        "url": "https://openstax.org/books/chemistry-2e/pages/15-1-precipitation-and-dissolution"
      },
      {
        "title": "OpenStax: acid-base titrations and indicators",
        "url": "https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations"
      }
    ]
  },
  "redox-electrochemistry": {
    "base": 26,
    "chapters": [
      {
        "title": "Current efficiency partitions electrons between cathode products",
        "formula": "n(e−)total=Q/F; useful silver electrons=ηQ/F; n(H2)=(1−η)Q/(2F) in the stipulated two-channel model",
        "script": "Faraday's law must use the charge actually assigned to the desired electrode reaction. In a supplied cathode ledger, total charge corresponds to zero point zero five zero mole of electrons. Assume eighty percent of that charge deposits silver from silver ions, while the remaining twenty percent makes hydrogen, with no other cathode process. Silver reduction needs one electron per silver atom. Its electron allocation is zero point zero four zero mole, so the deposited silver amount is the same. Using the supplied rounded molar mass one hundred eight grams per mole gives four point three two grams of silver. The hydrogen allocation is zero point zero one zero mole of electrons, and two electrons are needed per hydrogen molecule, giving zero point zero zero five zero mole of hydrogen. The product mole amounts must not simply be assigned an eighty to twenty ratio because their electron requirements differ. The two electron allocations, not the product amounts, sum to the total electron amount. This is a stipulated current partition, not a prediction from standard electrode potentials alone. Current efficiency, reaction selectivity and thermodynamic voltage answer different questions. Any additional electrode process would need its own electron ledger.",
        "points": [
          "Total charge=.050 mol e− · 80% toAg;20% toH2 · Stipulated two-channel current split",
          "Ag+:1 e− perAg · nAg=.040 mol;M=108 · Silver mass4.32 g",
          "H2:2 e− per molecule · nH2=.010/2=.0050 mol · Sum electron allocations, not products"
        ],
        "board": {
          "heading": "Current efficiency partitions electrons between cathode products",
          "columns": [
            "Specified conditions",
            "Calculation / cause",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Total charge=.050 mol e−",
              "80% toAg;20% toH2",
              "Stipulated two-channel current split"
            ],
            [
              "Ag+:1 e− perAg",
              "nAg=.040 mol;M=108",
              "Silver mass4.32 g"
            ],
            [
              "H2:2 e− per molecule",
              "nH2=.010/2=.0050 mol",
              "Sum electron allocations, not products"
            ]
          ]
        }
      },
      {
        "title": "Supporting selective deposition compares actual electrode potentials",
        "formula": "Illustrative M+/M:E°=.600 V; N2+/N:E°=.304 V; at298 K, EM=.600+.0592log a(M+)",
        "script": "Selective metal deposition depends on actual reduction potentials. Use a supporting illustrative model with two hypothetical metals at two hundred ninety eight kelvin. The first metal, labelled M, has singly charged ions and standard potential zero point six zero zero volt. The second metal, labelled N, has doubly charged ions and standard potential zero point three zero four volt. The second ion activity stays one. All activities are dimensionless. Initially the first ion activity is zero point zero one. Its potential is zero point six zero zero plus zero point zero five nine two times log zero point zero one, giving zero point four eight one six volt. It is the more positive couple. Removing the first metal lowers its dissolved ion activity and potential. Equality with the second couple occurs when the logarithm of the first ion activity is minus five. That first ion activity is ten to the minus five. This ideal potential comparison excludes overpotential, transport limits, complexation and solvent reactions; practical separation needs those additional checks.",
        "points": [
          "Hypothetical M+,N2+;298 K · E°M=.600;E°N=.304 V · a(N2+)=1;EN=.304 V",
          "a(M+)=.010 initially · EM=.600−2×.0592=.4816 · M initially more positive",
          "Equality:log a(M+)=−5 · a(M+)=1e−5 · Ideal limit; kinetics/solvent excluded"
        ],
        "board": {
          "heading": "Supporting selective deposition compares actual electrode potentials",
          "columns": [
            "Specified conditions",
            "Calculation / cause",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Hypothetical M+,N2+;298 K",
              "E°M=.600;E°N=.304 V",
              "a(N2+)=1;EN=.304 V"
            ],
            [
              "a(M+)=.010 initially",
              "EM=.600−2×.0592=.4816",
              "M initially more positive"
            ],
            [
              "Equality:log a(M+)=−5",
              "a(M+)=1e−5",
              "Ideal limit; kinetics/solvent excluded"
            ]
          ]
        }
      },
      {
        "title": "Supporting conductometric titration keeps spectator ions",
        "formula": "κ=Σλici/1000 for ci in mol/L and λi in S cm²/mol; fixed-λ ideal ionic model",
        "script": "A conductivity minimum during acid base titration does not mean that all ions vanish. In a supporting ideal model, titrate fifty milliliters of zero point one zero zero molar hydrochloric acid with sodium hydroxide at the same concentration. Supplied fixed ionic molar conductivities are three hundred fifty for hydrogen, fifty for sodium, seventy six for chloride and one hundred ninety eight for hydroxide. Their units are siemens multiplied by square centimeters, divided by moles. Neutralization replaces highly mobile hydrogen ions with less mobile sodium ions before equivalence. Chloride remains as a spectator. Include the changing total volume. At fifty milliliters of added base, five millimoles of acid have reacted in one hundred milliliters total solution. Sodium and chloride are each zero point zero five zero molar. Their conductivity contribution is zero point zero zero six three siemens per centimeter, not zero. Beyond equivalence, excess hydroxide raises conductivity in this model. Fixed ionic conductivities are approximate, while measured conductance also depends on cell geometry.",
        "points": [
          "50 mL.100 M HCl · Titrate with.100 M NaOH · Equivalence at50 mL added",
          "At equivalence:100 mL total · [Na+]=[Cl−]=.050 M · κ=(50+76).050/1000=.0063",
          "Before:H+ replaced byNa+ · After:excessOH− contributes · Minimum is not zero conductivity"
        ],
        "board": {
          "heading": "Supporting conductometric titration keeps spectator ions",
          "columns": [
            "Specified conditions",
            "Calculation / cause",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "50 mL.100 M HCl",
              "Titrate with.100 M NaOH",
              "Equivalence at50 mL added"
            ],
            [
              "At equivalence:100 mL total",
              "[Na+]=[Cl−]=.050 M",
              "κ=(50+76).050/1000=.0063"
            ],
            [
              "Before:H+ replaced byNa+",
              "After:excessOH− contributes",
              "Minimum is not zero conductivity"
            ]
          ]
        }
      },
      {
        "title": "Supporting voltage-temperature data give reaction entropy",
        "formula": "ΔG°=−nFE°; ΔS°=nF(dE°/dT)p; ΔH°=ΔG°+TΔS° for the same reaction",
        "script": "A cell's voltage variation with temperature can connect electrochemistry to reaction entropy. Use the standard reversible cell potential for one specified reaction and its fixed pressure temperature derivative. Since standard Gibbs energy is minus n F E, differentiating with respect to temperature and using the Gibbs entropy relation gives standard reaction entropy equal to n F times the voltage temperature slope. This is a supporting thermodynamic extension; it concerns the reversible standard potential, not an arbitrary loaded terminal voltage. In a supplied example at three hundred kelvin, let electron number be two, Faraday constant ninety six thousand five hundred coulombs per mole, standard voltage zero point three zero zero volt, and slope minus zero point zero zero zero two zero volt per kelvin. Standard Gibbs energy is minus fifty seven point nine kilojoules per mole of the written reaction. Standard entropy is minus thirty eight point six joules per mole kelvin. Adding T times that entropy to Gibbs energy gives standard enthalpy minus sixty nine point four eight kilojoules per mole. Convert entropy to consistent energy units before combining. A falling voltage therefore indicates negative reaction entropy in this comparison, not automatically a nonspontaneous reaction.",
        "points": [
          "n=2;F=96500;T=300 K · E°=.300 V;slope−.00020 V/K · Standard reversible potential data",
          "ΔG°=−57.9 kJ/mol · ΔS°=−38.6 J/mol K · Derivative taken at fixed pressure",
          "ΔH°=ΔG°+TΔS° · −57.9−11.58=−69.48 · Loaded terminal voltage is different"
        ],
        "board": {
          "heading": "Supporting voltage-temperature data give reaction entropy",
          "columns": [
            "Specified conditions",
            "Calculation / cause",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "n=2;F=96500;T=300 K",
              "E°=.300 V;slope−.00020 V/K",
              "Standard reversible potential data"
            ],
            [
              "ΔG°=−57.9 kJ/mol",
              "ΔS°=−38.6 J/mol K",
              "Derivative taken at fixed pressure"
            ],
            [
              "ΔH°=ΔG°+TΔS°",
              "−57.9−11.58=−69.48",
              "Loaded terminal voltage is different"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Q/F=.050 mol e− and80% of charge deposits Ag from Ag+. Using MAg=108 g/mol, silver mass is:",
        "options": [
          "5.40 g",
          "4.32 g",
          "2.16 g",
          ".432 g"
        ],
        "answer": 1,
        "explanation": "Ag receives.80×.050=.040 mol e−; one electron perAg gives.040×108=4.32 g."
      },
      {
        "question": "The remaining20% charge makes H2 only. Its amount is:",
        "options": [
          ".010 mol",
          ".025 mol",
          ".0050 mol",
          ".050 mol"
        ],
        "answer": 2,
        "explanation": "Hydrogen receives.010 mol e− and needs two electrons per molecule, so nH2=.0050 mol."
      },
      {
        "question": "In the supplied hypothetical model, EM=.600+.0592log a(M+). At a(M+)=.010, EM is:",
        "options": [
          ".600 V",
          ".304 V",
          ".7184 V",
          ".4816 V"
        ],
        "answer": 3,
        "explanation": "log(.010)=−2; .600−.1184=.4816 V."
      },
      {
        "question": "Equality with EN=.304 V occurs at which M+ activity in that model?",
        "options": [
          "1e−5",
          "1e−2",
          "1",
          "1e5"
        ],
        "answer": 0,
        "explanation": "log a=(.304−.600)/.0592=−5, so dimensionless activity is10^−5."
      },
      {
        "question": "50 mL.100 M HCl is titrated by.100 M NaOH. Equivalence requires:",
        "options": [
          "25 mL",
          "50 mL",
          "100 mL",
          "5 mL"
        ],
        "answer": 1,
        "explanation": "There are5 mmol acid; .100 mmol/mL base requires50 mL for1:1 neutralization."
      },
      {
        "question": "At equivalence in the supplied fixed-λ model,[Na+]=[Cl−]=.050 M,λNa=50,λCl=76. κ is:",
        "options": [
          "0",
          ".063 S/cm",
          ".0063 S/cm",
          "6.3 S/cm"
        ],
        "answer": 2,
        "explanation": "κ=(50+76)×.050/1000=.0063 S/cm; spectator ions still conduct."
      },
      {
        "question": "For n=2,F=96500 and dE°/dT=−.00020 V/K, ΔS° is:",
        "options": [
          "+38.6 J/mol K",
          "−57.9 kJ/mol",
          "0",
          "−38.6 J/mol K"
        ],
        "answer": 3,
        "explanation": "ΔS°=nF(dE°/dT)=2×96500×(−.00020)=−38.6 J/mol K."
      },
      {
        "question": "With E°=.300 V,T=300 K and those same n,F,slope values, ΔH° is:",
        "options": [
          "−69.48 kJ/mol",
          "−57.90 kJ/mol",
          "+69.48 kJ/mol",
          "−46.32 kJ/mol"
        ],
        "answer": 0,
        "explanation": "ΔG°=−57.9 kJ/mol and TΔS°=−11.58 kJ/mol, so ΔH°=−69.48 kJ/mol."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: electrolysis and electron stoichiometry",
        "url": "https://openstax.org/books/chemistry-2e/pages/17-7-electrolysis"
      },
      {
        "title": "OpenStax: potentials, Gibbs energy and the Nernst equation",
        "url": "https://openstax.org/books/chemistry-2e/pages/17-4-potential-free-energy-and-equilibrium"
      },
      {
        "title": "IIT Roorkee: conductometric titration theory",
        "url": "https://vlab.iitr.ac.in/assets/explore-labs/Environmental%20Chemistry%20Lab/labs/exp8/theory.html"
      },
      {
        "title": "DeVoe: thermodynamic cell calculations and temperature coefficients",
        "url": "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/DeVoes_Thermodynamics_and_Chemistry/14%3A_Galvanic_Cells/14.07%3A_Chapter_14_Problems"
      }
    ]
  }
} as const;
