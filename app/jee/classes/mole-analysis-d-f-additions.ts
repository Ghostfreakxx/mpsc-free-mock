// Authored by scripts/expand-mole-analysis-d-f.mjs.
export const moleAnalysisDFAdditions = {
  "mole-concept": {
    "base": 8,
    "quizBase": 10,
    "writtenBase": 5,
    "chapters": [
      {
        "title": "Find water of crystallization from mass data",
        "formula": "CuSO₄·xH₂O: x = n(water lost)/n(anhydrous salt)",
        "script": "A hydrate calculation uses the mole ratio of water to the anhydrous salt, not the ratio of their measured masses. Suppose supplied analysis says a two and one half gram hydrated copper sulfate sample corresponds to one point six zero grams of anhydrous copper sulfate after complete loss of water. Assume only water is lost, no salt decomposes, and the sample has the stated pure composition. Water mass is zero point nine zero gram. Using rounded molar masses eighteen for water and one hundred sixty grams per mole for anhydrous copper sulfate gives zero point zero five zero mole water and zero point zero one zero mole salt. Their ratio is five, so the formula is copper sulfate with five waters of crystallization. The anhydrous formula unit remains the reference entity. Incomplete water removal or loss of other material would invalidate the interpretation. A near integer ratio should be judged against the supplied measurement precision rather than rounded aggressively from incompatible data. This is interpretation of provided analytical results, not an instruction to heat a substance without an appropriate supervised method.",
        "points": [
          "Water mass · 2.50 − 1.60 · 0.90 g",
          "Mole amounts · 0.90/18; 1.60/160 · 0.050; 0.010 mol",
          "Hydration number · 0.050 / 0.010 · x = 5"
        ],
        "board": {
          "heading": "Find water of crystallization from mass data",
          "columns": [
            "Quantity / case",
            "Balance / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Water mass",
              "2.50 − 1.60",
              "0.90 g"
            ],
            [
              "Mole amounts",
              "0.90/18; 1.60/160",
              "0.050; 0.010 mol"
            ],
            [
              "Hydration number",
              "0.050 / 0.010",
              "x = 5"
            ]
          ]
        }
      },
      {
        "title": "Solve a carbonate mixture with two balances",
        "formula": "a + b = n(CO₂); 106a + 84b = sample mass",
        "script": "Two independent measurements can determine a binary mixture when the reaction model is specified. Take a four point six four gram mixture containing only anhydrous sodium carbonate and sodium hydrogen carbonate. Complete reaction with sufficient strong acid gives two point two zero grams of carbon dioxide. Using carbon dioxide molar mass forty four gives zero point zero five zero mole gas. Each formula unit of either salt gives one carbon dioxide, so their mole amounts a and b satisfy a plus b equals zero point zero five zero. The mass equation is one hundred six a plus eighty four b equals four point six four. Substitution gives a equals zero point zero two zero and b equals zero point zero three zero mole. The acid requirement is different: carbonate consumes two hydrogen ions per formula unit, while hydrogen carbonate consumes one. Total hydrogen ion consumption is therefore zero point zero seven zero mole. Do not confuse equal gas coefficients with equal acid coefficients. Check nonnegative amounts and reconstruct both total mass and gas yield before accepting the solution; additional impurities or incomplete gas recovery require a different model.",
        "points": [
          "CO₂ amount · 2.20 / 44 · a + b = 0.050 mol",
          "Mass balance · 106a + 84b = 4.64 · a=0.020; b=0.030 mol",
          "H⁺ requirement · 2a + b · 0.070 mol"
        ],
        "board": {
          "heading": "Solve a carbonate mixture with two balances",
          "columns": [
            "Quantity / case",
            "Balance / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "CO₂ amount",
              "2.20 / 44",
              "a + b = 0.050 mol"
            ],
            [
              "Mass balance",
              "106a + 84b = 4.64",
              "a=0.020; b=0.030 mol"
            ],
            [
              "H⁺ requirement",
              "2a + b",
              "0.070 mol"
            ]
          ]
        }
      },
      {
        "title": "Apply yields stage by stage",
        "formula": "For stated conditional yields: overall fractional yield = y₁y₂",
        "script": "A reaction chain requires both stoichiometric coefficients and the yield of each stage. Consider the supplied abstract equations two A giving one B, followed by one B giving three C. Start with zero point one zero zero mole A. At complete first stage conversion the theoretical B amount would be zero point zero five zero mole. An eighty percent isolated first stage yield supplies zero point zero four zero mole B to the second stage. That B could theoretically give zero point one two zero mole C. A seventy five percent second stage yield therefore gives zero point zero nine zero mole C. Relative to the original A, the full ideal chain could have produced zero point one five zero mole C, so the overall yield is sixty percent. Multiplying zero point eight by zero point seven five gives the same fractional result because the second yield is defined relative to the intermediate actually supplied. Do not add the percentages or apply both yields directly to the initial mole amount while ignoring coefficient changes. Side reactions, intermediate purity and recycled material need additional information before this simplified chain model can be used.",
        "points": [
          "First stage: 2A → B · 0.100/2 × 0.80 · 0.0400 mol B",
          "Second stage: B → 3C · 0.0400 × 3 × 0.75 · 0.0900 mol C",
          "Overall ideal C = 0.150 mol · 0.0900 / 0.150 · 60.0% yield"
        ],
        "board": {
          "heading": "Apply yields stage by stage",
          "columns": [
            "Quantity / case",
            "Balance / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "First stage: 2A → B",
              "0.100/2 × 0.80",
              "0.0400 mol B"
            ],
            [
              "Second stage: B → 3C",
              "0.0400 × 3 × 0.75",
              "0.0900 mol C"
            ],
            [
              "Overall ideal C = 0.150 mol",
              "0.0900 / 0.150",
              "60.0% yield"
            ]
          ]
        }
      },
      {
        "title": "Read a hydrocarbon from combustion products",
        "formula": "CₓHᵧ + (x + y/4)O₂ → xCO₂ + (y/2)H₂O",
        "script": "Complete combustion products can reveal a hydrocarbon formula when the amount of fuel is independently known. Suppose zero point one zero zero mole of a pure hydrocarbon gives zero point three zero zero mole carbon dioxide and zero point four zero zero mole water. Each carbon dioxide contains one carbon atom, so each fuel molecule contains three carbons. Each water contains two hydrogen atoms, giving eight hydrogens per fuel molecule. The molecular formula is therefore C three H eight, not merely its carbon to hydrogen empirical ratio. The balanced combustion equation consumes five oxygen molecules per fuel molecule, producing three carbon dioxide and four water molecules. For the stated fuel amount, oxygen demand is zero point five zero zero mole. Oxygen atoms in the products total one point zero zero mole of atoms, equivalent to half that many moles of diatomic oxygen. Keep atoms and molecules distinct. This inference assumes complete combustion and quantitative product accounting. If the fuel contains oxygen or the starting fuel mole amount is unknown, the same two product measurements alone require a different analysis. Physical states also matter when converting product moles into measured gas volumes.",
        "points": [
          "Per 0.100 mol fuel · 0.300 mol CO₂; 0.400 mol H₂O · C₃H₈",
          "Balanced coefficients · C₃H₈ + 5O₂ → 3CO₂ + 4H₂O · Oxygen coefficient 5",
          "For 0.100 mol fuel · 5 × 0.100 · 0.500 mol O₂"
        ],
        "board": {
          "heading": "Read a hydrocarbon from combustion products",
          "columns": [
            "Quantity / case",
            "Balance / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Per 0.100 mol fuel",
              "0.300 mol CO₂; 0.400 mol H₂O",
              "C₃H₈"
            ],
            [
              "Balanced coefficients",
              "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O",
              "Oxygen coefficient 5"
            ],
            [
              "For 0.100 mol fuel",
              "5 × 0.100",
              "0.500 mol O₂"
            ]
          ]
        }
      },
      {
        "title": "Connect mass fraction density and molarity",
        "formula": "Molarity uses solution volume; molality uses solvent mass",
        "script": "Mass fraction, molarity and molality describe different denominators. Take a supplied twenty point zero percent by mass sodium hydroxide solution with density one point two zero grams per millilitre at the stated temperature. A one litre sample has total mass twelve hundred grams. Twenty percent of that is two hundred forty grams sodium hydroxide, or six point zero zero moles using molar mass forty. Dividing by one litre gives six point zero zero molar. The solvent mass is twelve hundred minus two hundred forty, or nine hundred sixty grams. Dividing six moles by zero point nine six zero kilogram solvent gives molality six point two five moles per kilogram. The two numerical concentrations are different because one denominator is solution volume and the other solvent mass. Density supplies the link between the given mass fraction and solution volume; it does not justify assuming that volumes of solute and solvent add exactly. Molarity depends on temperature through solution volume. For this conversion use the density corresponding to the same specified solution and temperature, and do not substitute solvent density for solution density.",
        "points": [
          "1.00 L solution · 1.20 g/mL × 1000 mL · 1200 g solution",
          "NaOH: 20.0% by mass · 240 g / 40 g/mol · 6.00 mol; 6.00 M",
          "Solvent mass = 0.960 kg · 6.00 / 0.960 · 6.25 mol/kg"
        ],
        "board": {
          "heading": "Connect mass fraction density and molarity",
          "columns": [
            "Quantity / case",
            "Balance / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "1.00 L solution",
              "1.20 g/mL × 1000 mL",
              "1200 g solution"
            ],
            [
              "NaOH: 20.0% by mass",
              "240 g / 40 g/mol",
              "6.00 mol; 6.00 M"
            ],
            [
              "Solvent mass = 0.960 kg",
              "6.00 / 0.960",
              "6.25 mol/kg"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "A 2.50 g CuSO4·xH2O sample corresponds to 1.60 g anhydrous CuSO4. With molar masses 160 and 18, and only water lost, x is:",
        "options": [
          "2",
          "3",
          "5",
          "9"
        ],
        "answer": 2,
        "explanation": "Water is 0.90/18=0.050 mol and salt 1.60/160=0.010 mol; their ratio is five."
      },
      {
        "question": "A 4.64 g Na2CO3/NaHCO3 mixture gives 2.20 g CO2 on complete acid reaction. Using 106, 84 and 44 g/mol, Na2CO3 amount is:",
        "options": [
          "0.050 mol",
          "0.020 mol",
          "0.030 mol",
          "0.070 mol"
        ],
        "answer": 1,
        "explanation": "Solve a+b=0.050 and 106a+84b=4.64; subtracting 84(a+b) gives 22a=0.44."
      },
      {
        "question": "The hydrogen-ion amount required by that mixture is:",
        "options": [
          "0.020 mol",
          "0.030 mol",
          "0.050 mol",
          "0.070 mol"
        ],
        "answer": 3,
        "explanation": "Carbonate needs two H+ per formula unit and hydrogen carbonate one: 2×0.020+0.030=0.070 mol."
      },
      {
        "question": "For 2A→B then B→3C, start with 0.100 mol A and apply conditional yields 80% then 75%. C obtained is:",
        "options": [
          "0.0900 mol",
          "0.150 mol",
          "0.0600 mol",
          "0.225 mol"
        ],
        "answer": 0,
        "explanation": "First isolate 0.100/2×0.80=0.0400 mol B, then obtain 0.0400×3×0.75=0.0900 mol C."
      },
      {
        "question": "Complete combustion of 0.100 mol hydrocarbon gives 0.300 mol CO2 and 0.400 mol H2O. Oxygen required is:",
        "options": [
          "0.250 mol",
          "0.350 mol",
          "0.500 mol",
          "1.00 mol"
        ],
        "answer": 2,
        "explanation": "The hydrocarbon is C3H8, requiring five O2 per fuel molecule; multiply by 0.100 mol."
      },
      {
        "question": "A 20.0% by-mass NaOH solution has density 1.20 g/mL. With M(NaOH)=40 g/mol, its molarity is:",
        "options": [
          "5.00 M",
          "6.00 M",
          "6.25 M",
          "0.600 M"
        ],
        "answer": 1,
        "explanation": "One litre weighs 1200 g and contains 240 g=6.00 mol NaOH. Molality would instead be 6.25 mol/kg."
      }
    ],
    "foundationExtraQuiz": [
      {
        "question": "Using Ca = 40, O = 16 and H = 1, the molar mass of Ca(OH)2 is:",
        "options": [
          "57 g/mol",
          "74 g/mol",
          "58 g/mol",
          "114 g/mol"
        ],
        "answer": 1,
        "explanation": "40 + 2 × (16 + 1) = 74 g/mol. The subscript two multiplies the entire OH group, so oxygen and hydrogen are both counted twice."
      },
      {
        "question": "A 10 g sample is 80% CaCO3 with inert impurities. Using molar masses 100 and 44 g/mol, theoretical CO2 from complete decomposition is:",
        "options": [
          "4.40 g",
          "8.00 g",
          "3.52 g",
          "2.816 g"
        ],
        "answer": 2,
        "explanation": "Reactive mass = 8 g; (8/100) × 44 = 3.52 g. The last option additionally assumes an 80% yield, which was not given."
      },
      {
        "question": "Actual product is 2.816 g and theoretical product is 3.52 g. Percentage yield is:",
        "options": [
          "80%",
          "125%",
          "20%",
          "100%"
        ],
        "answer": 0,
        "explanation": "2.816/3.52 × 100 = 80%. Compare actual isolated product with theoretical product for the same limiting-reactant basis."
      },
      {
        "question": "50 mL of 0.40 mol/L solution is diluted to 200 mL without reaction. The final concentration is:",
        "options": [
          "1.60 mol/L",
          "0.40 mol/L",
          "0.20 mol/L",
          "0.10 mol/L"
        ],
        "answer": 3,
        "explanation": "Solute amount is constant: 0.40 × 50/200 = 0.10 mol/L. Dilution preserves moles in the stated no-reaction model; use consistent volume units."
      },
      {
        "question": "Equal volumes of ideal gases have equal amounts of substance when:",
        "options": [
          "Their molar masses match only",
          "Temperature and pressure are equal",
          "Their colours match",
          "Their temperatures may be arbitrary"
        ],
        "answer": 1,
        "explanation": "PV = nRT gives equal n for equal V, P and T in the stated ideal-gas comparison. Equal mole amounts do not imply equal masses for different gases."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: reaction stoichiometry",
        "url": "https://openstax.org/books/chemistry-2e/pages/4-3-reaction-stoichiometry"
      },
      {
        "title": "OpenStax: other concentration units",
        "url": "https://openstax.org/books/chemistry-2e/pages/3-4-other-units-for-solution-concentrations"
      }
    ]
  },
  "purification-analysis": {
    "base": 8,
    "quizBase": 10,
    "writtenBase": 6,
    "chapters": [
      {
        "title": "Correct nitrogen gas for water vapour",
        "formula": "Pdry = Ptotal − Pwater; n(N₂) = PdryV/(RT)",
        "script": "Dumas style nitrogen analysis requires the amount of dry nitrogen gas, not an uncorrected wet gas volume at an assumed standard condition. Suppose supplied results for a zero point two five zero gram suitable sample give twenty point zero millilitres nitrogen collected over water at three hundred kelvin. Total pressure is one hundred kilopascals and the supplied water vapour pressure is three point zero zero kilopascals. The nitrogen partial pressure is therefore ninety seven point zero kilopascals. Convert the volume to zero point zero two zero zero litre and use R eight point three one four litre kilopascal per mole kelvin. The ideal gas calculation gives about zero point zero zero zero seven seven seven eight mole nitrogen molecules. Each molecule contains two nitrogen atoms, so the nitrogen mass uses molar mass twenty eight grams per mole of gas, giving about zero point zero two one eight gram. Relative to the sample, nitrogen is about eight point seven one percent. Assume quantitative conversion and gas collection with no other gases present after the stated analytical treatment. If the gas is already dry, do not subtract water pressure again. Temperature, pressure units and the two nitrogen atoms per molecule must all be handled explicitly.",
        "points": [
          "Dry nitrogen pressure · 100 − 3.00 · 97.0 kPa",
          "Gas amount at 300 K · 97.0×0.0200/(8.314×300) · 0.0007778 mol N₂",
          "Nitrogen in 0.250 g sample · 28n / 0.250 × 100 · 8.71% N"
        ],
        "board": {
          "heading": "Correct nitrogen gas for water vapour",
          "columns": [
            "Quantity / case",
            "Balance / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Dry nitrogen pressure",
              "100 − 3.00",
              "97.0 kPa"
            ],
            [
              "Gas amount at 300 K",
              "97.0×0.0200/(8.314×300)",
              "0.0007778 mol N₂"
            ],
            [
              "Nitrogen in 0.250 g sample",
              "28n / 0.250 × 100",
              "8.71% N"
            ]
          ]
        }
      },
      {
        "title": "Back titration counts captured ammonia",
        "formula": "n(NH₃) = initial acid equivalents − residual acid equivalents",
        "script": "A Kjeldahl style numerical problem counts ammonia formed from nitrogen that the stated method converts quantitatively. Use supplied results for a zero point five zero zero gram suitable sample. Its ammonia is captured by twenty five point zero millilitres of zero point one zero zero molar hydrochloric acid. The remaining acid requires ten point zero millilitres of zero point one zero zero molar sodium hydroxide. Initial acid amount is two point five zero millimoles and the residual amount one point zero zero millimole. The difference, one point five zero millimoles, equals captured ammonia and therefore nitrogen atom amount in this model. Multiplying by fourteen gives zero point zero two one zero gram nitrogen, or four point two zero percent of the original sample. Using all the initial acid would overestimate nitrogen. The standard textbook method is not generally applicable to nitrogen in nitro or azo groups or pyridine type rings without appropriate modification; quantitative conversion cannot be assumed for every nitrogen compound. These are interpretation and stoichiometry steps for supplied analytical data, not a procedure for carrying out hazardous digestion or handling laboratory reagents.",
        "points": [
          "Initial HCl · 25.0 mL × 0.100 mol/L · 2.50 mmol",
          "Residual acid from NaOH · 10.0 mL × 0.100 mol/L · 1.00 mmol",
          "Nitrogen = 1.50 mmol · 0.00150 × 14 / 0.500 × 100 · 4.20% N"
        ],
        "board": {
          "heading": "Back titration counts captured ammonia",
          "columns": [
            "Quantity / case",
            "Balance / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Initial HCl",
              "25.0 mL × 0.100 mol/L",
              "2.50 mmol"
            ],
            [
              "Residual acid from NaOH",
              "10.0 mL × 0.100 mol/L",
              "1.00 mmol"
            ],
            [
              "Nitrogen = 1.50 mmol",
              "0.00150 × 14 / 0.500 × 100",
              "4.20% N"
            ]
          ]
        }
      },
      {
        "title": "Convert a silver-halide mass to halogen mass",
        "formula": "One mole AgCl contains one mole Cl atoms",
        "script": "Gravimetric halogen analysis measures a compound containing the halogen, not a pure mass of the halogen itself. Suppose a supplied halogen analysis result says zero point two zero zero gram of a suitable chlorine containing organic sample yields zero point one four three five gram silver chloride. Assume the collected solid is pure dry silver chloride and the conversion and recovery are quantitative. With supplied molar masses one hundred forty three point five for silver chloride and thirty five point five for chlorine, the precipitate amount is zero point zero zero one zero zero mole. Each formula unit contains one chlorine, so chlorine mass is zero point zero three five five gram. The sample chlorine percentage is seventeen point seven five. Do not treat the entire silver chloride mass as chlorine or divide by chlorine gas molar mass seventy one when counting individual chlorine atoms in the salt. Different halogens require the corresponding silver halide molar mass, and mixed precipitates need additional information. Contamination, light induced changes or incomplete recovery can invalidate the simple mass conversion. This chapter uses reported results and chemical accounting; it does not provide a sealed tube experimental recipe.",
        "points": [
          "AgCl from analysis · 0.1435 / 143.5 · 0.00100 mol AgCl",
          "Chlorine mass · 0.00100 × 35.5 · 0.0355 g Cl",
          "Sample = 0.200 g · 0.0355 / 0.200 × 100 · 17.75% Cl"
        ],
        "board": {
          "heading": "Convert a silver-halide mass to halogen mass",
          "columns": [
            "Quantity / case",
            "Balance / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "AgCl from analysis",
              "0.1435 / 143.5",
              "0.00100 mol AgCl"
            ],
            [
              "Chlorine mass",
              "0.00100 × 35.5",
              "0.0355 g Cl"
            ],
            [
              "Sample = 0.200 g",
              "0.0355 / 0.200 × 100",
              "17.75% Cl"
            ]
          ]
        }
      },
      {
        "title": "Compare one extraction with repeated portions",
        "formula": "Fraction left in water = Vaq/(Vaq + K Vorg) in the stated partition model",
        "script": "Repeated solvent portions can remove more solute than one extraction using the same total solvent volume. Consider a neutral solute with constant partition ratio K equal to organic concentration divided by aqueous concentration, taking value four. Assume two immiscible phases with unchanged volumes, complete equilibration, no reaction or ionization and negligible mutual solubility. Begin with one hundred millilitres aqueous phase. A single fresh twenty five millilitre organic portion leaves aqueous fraction one hundred divided by one hundred plus four times twenty five, or one half. Now use two fresh twelve point five millilitre portions in sequence, separating each organic portion before the next contact. Each leaves fraction one hundred divided by one hundred plus fifty, or two thirds, of the solute then present in water. After both, the remaining fraction is four ninths, so about fifty five point six percent has been extracted rather than fifty percent. The second contact acts on the remainder, not the original amount. This calculation assumes a fixed partition ratio for the specified chemical form; changing p H or allowing association can require a more complete distribution model.",
        "points": [
          "One 25.0 mL portion · 100/(100 + 4×25) · 50.0% remains",
          "Each of two 12.5 mL portions · 100/(100 + 4×12.5) · 2/3 of current amount remains",
          "Two fresh portions combined · (2/3)² = 4/9 remains · 55.6% extracted"
        ],
        "board": {
          "heading": "Compare one extraction with repeated portions",
          "columns": [
            "Quantity / case",
            "Balance / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "One 25.0 mL portion",
              "100/(100 + 4×25)",
              "50.0% remains"
            ],
            [
              "Each of two 12.5 mL portions",
              "100/(100 + 4×12.5)",
              "2/3 of current amount remains"
            ],
            [
              "Two fresh portions combined",
              "(2/3)² = 4/9 remains",
              "55.6% extracted"
            ]
          ]
        }
      },
      {
        "title": "Chromatographic agreement is evidence not identity",
        "formula": "Rf = solute travel / solvent-front travel for the same run",
        "script": "Chromatography compares movement under specified stationary phase, mobile phase and experimental conditions. Suppose the solvent front travels five point zero zero centimetres while two sample spots travel two point zero zero and three point five zero centimetres from the same origin. Their retention factors are zero point four zero and zero point seven zero. Both ratios are dimensionless and use the solvent front distance rather than the plate height or the distance between spots. A reference substance with retention factor zero point four zero under the same conditions supports a possible assignment of the first spot, but matching one value does not uniquely prove chemical identity. Different compounds can migrate together, and an apparently single spot does not guarantee absolute purity. Changing solvent composition or using another suitable analytical method can supply independent evidence. When calculating recovery, compare recovered analyte mass with the amount originally present; the mass of an isolated fraction can include solvent or impurities. Keep separation, recovery and identification as distinct claims. Record the run conditions and the observed number of resolved components rather than treating a familiar retention factor as an invariant molecular constant.",
        "points": [
          "Front 5.00 cm; spot 2.00 cm · 2.00 / 5.00 · Rf = 0.40",
          "Second spot 3.50 cm · 3.50 / 5.00 · Rf = 0.70",
          "Matching a reference Rf · Same conditions required · Supporting evidence, not proof"
        ],
        "board": {
          "heading": "Chromatographic agreement is evidence not identity",
          "columns": [
            "Quantity / case",
            "Balance / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Front 5.00 cm; spot 2.00 cm",
              "2.00 / 5.00",
              "Rf = 0.40"
            ],
            [
              "Second spot 3.50 cm",
              "3.50 / 5.00",
              "Rf = 0.70"
            ],
            [
              "Matching a reference Rf",
              "Same conditions required",
              "Supporting evidence, not proof"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "A 0.250 g sample gives 20.0 mL N2 over water at 300 K. Ptotal=100 kPa, Pwater=3.00 kPa and R=8.314 L kPa/(mol K). Nitrogen percentage is approximately:",
        "options": [
          "4.36%",
          "8.71%",
          "8.98%",
          "17.4%"
        ],
        "answer": 1,
        "explanation": "Use dry pressure 97.0 kPa, convert 20.0 mL to 0.0200 L and calculate gas moles. Multiply by 28 g/mol for N2, then divide by 0.250 g and multiply by 100."
      },
      {
        "question": "In the stated suitable nitrogen analysis, 25.0 mL 0.100 M HCl captures ammonia and residual acid needs 10.0 mL 0.100 M NaOH. Nitrogen percentage for a 0.500 g sample is:",
        "options": [
          "7.00%",
          "2.80%",
          "4.20%",
          "14.0%"
        ],
        "answer": 2,
        "explanation": "Captured ammonia is (2.50−1.00) mmol, corresponding to 0.0210 g nitrogen; divide by sample mass."
      },
      {
        "question": "A 0.200 g sample yields 0.1435 g pure AgCl. Using M(AgCl)=143.5 and Ar(Cl)=35.5, chlorine percentage is:",
        "options": [
          "17.75%",
          "71.75%",
          "35.50%",
          "7.175%"
        ],
        "answer": 0,
        "explanation": "The precipitate is 0.00100 mol AgCl and contains 0.0355 g Cl; the rest of its mass includes silver."
      },
      {
        "question": "For K=corg/caq=4, Vaq=100 mL and one fresh Vorg=25 mL portion, the aqueous fraction left is:",
        "options": [
          "1/4",
          "2/3",
          "4/9",
          "1/2"
        ],
        "answer": 3,
        "explanation": "Mass balance gives Vaq/(Vaq+KVorg)=100/200; this uses the stated unchanged-volume partition model."
      },
      {
        "question": "With the same total 25 mL organic solvent split into two fresh 12.5 mL portions, the fraction left in water is:",
        "options": [
          "1/2",
          "4/9",
          "2/3",
          "1/9"
        ],
        "answer": 1,
        "explanation": "Each contact leaves 2/3 of the current amount; multiply the two remaining fractions to obtain 4/9."
      },
      {
        "question": "Two spots travel 2.00 and 3.50 cm with solvent front 5.00 cm. Their Rf values are:",
        "options": [
          "0.40 and 0.70",
          "0.70 and 0.40",
          "2.50 and 1.43",
          "0.57 and 1.00"
        ],
        "answer": 0,
        "explanation": "Divide each spot distance from the origin by the solvent-front distance from that same origin."
      }
    ],
    "foundationExtraQuiz": [
      {
        "question": "A hot saturated solution holds 10 g, while the final cold solution holds 2 g. Ideal maximum crystallized mass is:",
        "options": [
          "12 g",
          "10 g",
          "8 g",
          "2 g"
        ],
        "answer": 2,
        "explanation": "10 − 2 = 8 g before additional losses in this stated model."
      },
      {
        "question": "A 3 cm spot distance and 5 cm solvent-front distance give Rf:",
        "options": [
          "0.60",
          "1.67 cm",
          "2 cm",
          "15"
        ],
        "answer": 0,
        "explanation": "Rf = 3/5 = 0.60 with no length unit."
      },
      {
        "question": "A 0.300 g C,H,O-only sample contains 0.120 g C and 0.0200 g H. Oxygen mass is:",
        "options": [
          "0.440 g",
          "0.280 g",
          "0.0200 g",
          "0.160 g"
        ],
        "answer": 3,
        "explanation": "0.300 − 0.120 − 0.0200 = 0.160 g under the stated composition assumption."
      },
      {
        "question": "Nitrogen gas measured over water requires attention to:",
        "options": [
          "Only liquid colour",
          "Water-vapour pressure and gas conditions",
          "A universal room-temperature molar volume",
          "Only sample shape"
        ],
        "answer": 1,
        "explanation": "Use the dry nitrogen partial pressure and appropriate temperature and volume in the gas relation."
      }
    ],
    "sources": [
      {
        "title": "NCERT CIET: quantitative organic analysis",
        "url": "https://ciet.nic.in/moocspdf/Chemistry02/kech_21204_eText.pdf"
      },
      {
        "title": "OpenStax: quantitative chemical analysis",
        "url": "https://openstax.org/books/chemistry-2e/pages/4-5-quantitative-chemical-analysis"
      }
    ]
  },
  "d-f-block": {
    "base": 10,
    "quizBase": 12,
    "writtenBase": 6,
    "chapters": [
      {
        "title": "Track oxidation from chromite to chromate",
        "formula": "4FeCr₂O₄ + 8Na₂CO₃ + 7O₂ → 8Na₂CrO₄ + 2Fe₂O₃ + 8CO₂",
        "script": "Preparation equations become easier to understand when oxidation numbers are checked alongside atom balance. Chromite has formula iron chromium two oxygen four, with iron two and chromium three in the elementary oxidation state description. In the stated oxidative carbonate conversion, chromium becomes plus six in chromate while iron becomes plus three in iron oxide. The balanced equation uses four chromite units, eight sodium carbonate units and seven oxygen molecules, giving eight sodium chromate, two iron oxide and eight carbon dioxide units. Eight chromium atoms each lose three electrons, while four iron atoms each lose one, making twenty eight electrons transferred. Seven oxygen molecules accept that total when oxygen changes from zero to minus two. Carbon remains plus four, so carbonate is not the redox donor merely because carbon dioxide appears. The sodium chromate product supplies the chromium containing intermediate for subsequent dichromate chemistry. Check chromium, iron, sodium, carbon and oxygen independently before deciding coefficients. These equations summarize chemical principles and the relationship between ore and product, rather than specifying an operational preparation method or claiming that the solid mixture behaves as a simple aqueous ionic reaction.",
        "points": [
          "Cr: +3 → +6 · 8 atoms × 3 electrons · 24 electrons lost",
          "Fe: +2 → +3 · 4 atoms × 1 electron · 4 electrons lost",
          "O₂: 7 molecules · 7 × 4 electrons accepted · 28 electrons balanced"
        ],
        "board": {
          "heading": "Track oxidation from chromite to chromate",
          "columns": [
            "Quantity / case",
            "Balance / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Cr: +3 → +6",
              "8 atoms × 3 electrons",
              "24 electrons lost"
            ],
            [
              "Fe: +2 → +3",
              "4 atoms × 1 electron",
              "4 electrons lost"
            ],
            [
              "O₂: 7 molecules",
              "7 × 4 electrons accepted",
              "28 electrons balanced"
            ]
          ]
        }
      },
      {
        "title": "Chromate and dichromate interconvert without redox",
        "formula": "2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O",
        "script": "Chromate and dichromate provide a useful distinction between acid base equilibrium and oxidation reduction. Their interconversion can be written as two chromate ions plus two hydrogen ions giving one dichromate ion and water, with a reversible arrow. Chromium remains in oxidation state plus six on both sides. Acidification therefore changes the balance between these species without requiring electrons in the net equation. In the common qualitative comparison, chromate is yellow and dichromate orange. Increasing hydroxide concentration consumes hydrogen ions and favours chromate within the stated equilibrium conditions. A basic form of the reverse conversion uses one dichromate plus two hydroxides to give two chromates and one water. Charge is minus four on each side of that equation. The preparation of potassium dichromate can exploit the lower solubility of its salt relative to the corresponding sodium salt under the specified crystallization conditions; it is not explained by changing chromium's oxidation number during salt exchange. Actual speciation depends on concentration and acidity, so the two ion equation is an organizing model rather than a claim that every chromium six solution contains only one species of a single colour.",
        "points": [
          "Acid-favoured comparison · 2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O · Yellow ↔ orange",
          "Basic reverse · Cr₂O₇²⁻ + 2OH⁻ → 2CrO₄²⁻ + H₂O · Charges: −4 each side",
          "Chromium oxidation state · +6 in both ions · No electron transfer"
        ],
        "board": {
          "heading": "Chromate and dichromate interconvert without redox",
          "columns": [
            "Quantity / case",
            "Balance / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Acid-favoured comparison",
              "2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O",
              "Yellow ↔ orange"
            ],
            [
              "Basic reverse",
              "Cr₂O₇²⁻ + 2OH⁻ → 2CrO₄²⁻ + H₂O",
              "Charges: −4 each side"
            ],
            [
              "Chromium oxidation state",
              "+6 in both ions",
              "No electron transfer"
            ]
          ]
        }
      },
      {
        "title": "Distinguish manganate from permanganate preparation",
        "formula": "MnO₄²⁻ → MnO₄⁻ + e⁻; manganese +6 → +7",
        "script": "Manganate and permanganate differ by one unit of ionic charge and one unit of manganese oxidation state. The green manganate ion has manganese plus six, while the purple permanganate ion has manganese plus seven. In the usual preparation scheme, manganese dioxide is first converted under alkaline oxidizing conditions to manganate. An electrolytic oxidation can then remove one electron per manganate to form permanganate. The oxidation half equation is manganate giving permanganate plus an electron; oxygen atom count is unchanged. Manganate can also undergo disproportionation under suitable less strongly basic conditions. The balanced acidic representation uses three manganate ions and four hydrogen ions to form two permanganate ions, one manganese dioxide and two waters. Two manganese centres rise from six to seven, losing two electrons in total, while one falls from six to four and gains two. This is not simply a colour change caused by dilution. State the chemical conditions and distinguish oxidation of all manganate from simultaneous oxidation and reduction of different manganese centres. These are reaction relationships for interpreting preparation chemistry, not a laboratory recipe or a claim that every solution follows the same pathway regardless of p H.",
        "points": [
          "Manganate → permanganate · Mn(+6) → Mn(+7) · Lose 1 electron per Mn",
          "Disproportionation: 3 Mn(+6) · 2 rise to +7; 1 falls to +4 · 2 electrons lost and gained",
          "Net acidic representation · 3MnO₄²⁻ + 4H⁺ → 2MnO₄⁻ + MnO₂ + 2H₂O · Atoms and charge balanced"
        ],
        "board": {
          "heading": "Distinguish manganate from permanganate preparation",
          "columns": [
            "Quantity / case",
            "Balance / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Manganate → permanganate",
              "Mn(+6) → Mn(+7)",
              "Lose 1 electron per Mn"
            ],
            [
              "Disproportionation: 3 Mn(+6)",
              "2 rise to +7; 1 falls to +4",
              "2 electrons lost and gained"
            ],
            [
              "Net acidic representation",
              "3MnO₄²⁻ + 4H⁺ → 2MnO₄⁻ + MnO₂ + 2H₂O",
              "Atoms and charge balanced"
            ]
          ]
        }
      },
      {
        "title": "The permanganate product fixes the electron factor",
        "formula": "Mn(+7) → Mn(+2), Mn(+4), Mn(+6): 5, 3, 1 electrons",
        "script": "The electron factor of permanganate is not one fixed number independent of the product. In the familiar sufficiently acidic reduction to manganese two, manganese changes from plus seven to plus two and accepts five electrons. A balanced acidic half equation also consumes eight hydrogen ions and forms four waters. When the specified reduction product is manganese dioxide, manganese ends at plus four and accepts three electrons. A basic half equation uses permanganate, two waters and three electrons to form manganese dioxide and four hydroxides. When the stated strongly alkaline comparison gives manganate, manganese ends at plus six and accepts one electron, with the same four oxygen atoms. For one millimole permanganate, those three product assumptions correspond to five, three or one millimole electrons. Consequently an equivalent mass or a titration ratio must refer to the actual product and reaction conditions. Medium influences products, but the reducing agent, concentration and kinetics also matter; a p H label alone does not guarantee the same outcome for every reaction. Balance atoms and total charge after selecting the stated product instead of memorizing an electron factor without its chemical context.",
        "points": [
          "MnO₄⁻ → Mn²⁺ · +7 to +2 · 5 electrons per Mn",
          "MnO₄⁻ → MnO₂ · +7 to +4 · 3 electrons per Mn",
          "MnO₄⁻ → MnO₄²⁻ · +7 to +6 · 1 electron per Mn"
        ],
        "board": {
          "heading": "The permanganate product fixes the electron factor",
          "columns": [
            "Quantity / case",
            "Balance / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "MnO₄⁻ → Mn²⁺",
              "+7 to +2",
              "5 electrons per Mn"
            ],
            [
              "MnO₄⁻ → MnO₂",
              "+7 to +4",
              "3 electrons per Mn"
            ],
            [
              "MnO₄⁻ → MnO₄²⁻",
              "+7 to +6",
              "1 electron per Mn"
            ]
          ]
        }
      },
      {
        "title": "Count selected lanthanoid f configurations",
        "formula": "Ce⁴⁺: 4f⁰; Eu²⁺: 4f⁷; Yb²⁺: 4f¹⁴",
        "script": "Selected lanthanoid oxidation states become clearer when the actual ion configuration is written. Cerium three has one electron in the four f subshell in the usual ionic description, while cerium four has an empty four f subshell. Europium three has six four f electrons, and europium two has seven, giving a half filled four f set. Ytterbium three has thirteen four f electrons, while ytterbium two has fourteen and a filled set. A four f subshell contains seven spatial orbitals and at most fourteen electrons. In the elementary Hund filling picture, the half filled seven electron set has one electron in each orbital, whereas the fourteen electron set has all seven pairs. Empty, half filled or filled arrangements can help rationalize particular oxidation state patterns, but electronic bookkeeping alone does not determine stability in every chemical environment. Lattice, hydration and redox energies also contribute. Do not assume that the common plus three state gives the same f count for every element or that every lanthanoid readily exhibits all these alternatives. The purpose of the comparison is to connect element identity, ionic charge and occupancy before discussing periodic trends or magnetic evidence.",
        "points": [
          "Cerium comparison · Ce³⁺: 4f¹ → Ce⁴⁺: 4f⁰ · Empty 4f in Ce⁴⁺",
          "Europium comparison · Eu³⁺: 4f⁶ → Eu²⁺: 4f⁷ · Half-filled 4f in Eu²⁺",
          "Ytterbium comparison · Yb³⁺: 4f¹³ → Yb²⁺: 4f¹⁴ · Filled 4f in Yb²⁺"
        ],
        "board": {
          "heading": "Count selected lanthanoid f configurations",
          "columns": [
            "Quantity / case",
            "Balance / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Cerium comparison",
              "Ce³⁺: 4f¹ → Ce⁴⁺: 4f⁰",
              "Empty 4f in Ce⁴⁺"
            ],
            [
              "Europium comparison",
              "Eu³⁺: 4f⁶ → Eu²⁺: 4f⁷",
              "Half-filled 4f in Eu²⁺"
            ],
            [
              "Ytterbium comparison",
              "Yb³⁺: 4f¹³ → Yb²⁺: 4f¹⁴",
              "Filled 4f in Yb²⁺"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "In the stated chromite-to-chromate equation, four FeCr2O4 units lose how many electrons in total through Fe and Cr oxidation?",
        "options": [
          "24",
          "4",
          "14",
          "28"
        ],
        "answer": 3,
        "explanation": "Eight Cr atoms lose 3 electrons each and four Fe atoms lose 1 each: 24+4=28."
      },
      {
        "question": "Chromium oxidation states in chromate and dichromate are respectively:",
        "options": [
          "+6 and +6",
          "+6 and +3",
          "+3 and +6",
          "+7 and +6"
        ],
        "answer": 0,
        "explanation": "Both oxygen-based charge balances give Cr(+6); their interconversion is not itself a redox reaction."
      },
      {
        "question": "In Cr2O7^2− + aOH− → 2CrO4^2− + bH2O, (a,b) are:",
        "options": [
          "(1,2)",
          "(2,1)",
          "(4,2)",
          "(2,2)"
        ],
        "answer": 1,
        "explanation": "Two hydroxides and one water conserve Cr, O, H and total charge −4 on both sides."
      },
      {
        "question": "Oxidizing one manganate ion to permanganate releases:",
        "options": [
          "5 electrons",
          "3 electrons",
          "1 electron",
          "No electron"
        ],
        "answer": 2,
        "explanation": "Manganese changes from +6 to +7; the oxidation half-equation releases one electron."
      },
      {
        "question": "One mmol permanganate reduced specifically to MnO2 accepts:",
        "options": [
          "1 mmol electrons",
          "5 mmol electrons",
          "7 mmol electrons",
          "3 mmol electrons"
        ],
        "answer": 3,
        "explanation": "Manganese changes from +7 to +4, so each ion accepts three electrons for this specified product."
      },
      {
        "question": "Which sequence gives 4f occupancies of Ce4+, Eu2+ and Yb2+?",
        "options": [
          "0, 7, 14",
          "1, 6, 13",
          "4, 7, 14",
          "0, 6, 13"
        ],
        "answer": 0,
        "explanation": "The selected ions correspond respectively to empty, half-filled and filled 4f subshells in the stated ionic model."
      }
    ],
    "foundationExtraQuiz": [
      {
        "question": "A specified high-spin d6 ion has how many unpaired electrons in the elementary arrangement?",
        "options": [
          "6",
          "2",
          "0",
          "4"
        ],
        "answer": 3,
        "explanation": "Five orbitals fill singly, then the sixth electron pairs, leaving four unpaired."
      },
      {
        "question": "Its spin-only moment, for four unpaired electrons, is approximately:",
        "options": [
          "5.92 μB",
          "4.90 μB",
          "1.73 μB",
          "0 μB"
        ],
        "answer": 1,
        "explanation": "√[4(4+2)] = √24 ≈ 4.90 Bohr magnetons."
      },
      {
        "question": "The d count of Cu2+ is:",
        "options": [
          "d9",
          "d10",
          "d5",
          "d0"
        ],
        "answer": 0,
        "explanation": "Neutral copper is 3d10 4s1 beyond the core; removal gives Cu2+ with 3d9."
      },
      {
        "question": "0.0100 mol dichromate becoming Cr3+ in acid oxidizes how much Fe2+ to Fe3+?",
        "options": [
          "0.0100 mol",
          "0.0300 mol",
          "0.0600 mol",
          "0.00500 mol"
        ],
        "answer": 2,
        "explanation": "Six electrons per dichromate require six iron(II) ions, giving 6 × 0.0100 mol."
      },
      {
        "question": "0.0200 mol permanganate becoming Mn2+ in acid oxidizes how much Fe2+?",
        "options": [
          "0.00400 mol",
          "0.0200 mol",
          "0.0400 mol",
          "0.100 mol"
        ],
        "answer": 3,
        "explanation": "Five electrons per permanganate give 5 × 0.0200 = 0.100 mol Fe2+."
      },
      {
        "question": "The similar sizes of zirconium and hafnium are partly explained by:",
        "options": [
          "Their identical atomic numbers",
          "Lanthanoid contraction",
          "Their both being noble gases",
          "The absence of inner electrons"
        ],
        "answer": 1,
        "explanation": "Contraction associated with imperfect f-electron shielding helps account for the close sizes."
      }
    ],
    "sources": [
      {
        "title": "NCERT: d- and f-block elements",
        "url": "https://www.ncert.nic.in/textbook/pdf/lech104.pdf"
      }
    ]
  }
};
