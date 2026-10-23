// Authored by scripts/expand-thermo-solution-balances.mjs.
export const thermoSolutionBalancesAdditions = {
  "chemical-thermodynamics": {
    "base": 15,
    "quizBase": 18,
    "chapters": [
      {
        "title": "Reaction extent scales an extensive heat",
        "formula": "qₚ = ξ ΔᵣH for constant-pressure reaction with only PV work",
        "script": "A reaction enthalpy belongs to a particular balanced equation. Consider the supplied equation two moles of hydrogen plus one mole of oxygen forming two moles of liquid water, with reaction enthalpy minus five hundred seventy two kilojoules per mole of reaction extent. Start with zero point three zero zero mole hydrogen and zero point one zero zero mole oxygen. Dividing each amount by its stoichiometric coefficient gives possible extents zero point one five zero and zero point one zero zero mole. Oxygen limits the extent to zero point one zero zero mole. The reaction forms zero point two zero zero mole water and leaves zero point one zero zero mole hydrogen. At constant pressure with only pressure volume work, the reaction heat is minus fifty seven point two kilojoules. Writing the equation for one mole water halves its reaction enthalpy but doubles the numerical extent for the same physical conversion. Their product stays unchanged. Distinguish reaction extent from product amount, and keep the written coefficient convention attached to every molar reaction enthalpy.",
        "points": [
          "2H₂ + O₂ → 2H₂O(l) · Minimum of 0.300/2, 0.100/1 · ξ=0.100 mol",
          "Product and excess · 2ξ; 0.300−2ξ · 0.200 mol water; 0.100 mol H₂",
          "Constant-pressure reaction heat · 0.100×(−572) · −57.2 kJ"
        ],
        "board": {
          "heading": "Reaction extent scales an extensive heat",
          "columns": [
            "Given / model",
            "Calculation / reason",
            "Result / limit"
          ],
          "rows": [
            [
              "2H₂ + O₂ → 2H₂O(l)",
              "Minimum of 0.300/2, 0.100/1",
              "ξ=0.100 mol"
            ],
            [
              "Product and excess",
              "2ξ; 0.300−2ξ",
              "0.200 mol water; 0.100 mol H₂"
            ],
            [
              "Constant-pressure reaction heat",
              "0.100×(−572)",
              "−57.2 kJ"
            ]
          ]
        }
      },
      {
        "title": "Phase-change entropy needs the transition temperature",
        "formula": "ΔSₜᵣ = ΔHₜᵣ/Tₜᵣ for a reversible equilibrium transition",
        "script": "At a phase transition carried out reversibly at its equilibrium temperature and pressure, the entropy change is the transition enthalpy divided by the absolute transition temperature. Use supplied illustrative fusion enthalpy six point zero zero kilojoules per mole at three hundred kelvin. Melting two point zero zero moles absorbs twelve point zero kilojoules and raises the system entropy by forty point zero joules per kelvin. A thermal reservoir at the same temperature loses forty point zero joules per kelvin in the reversible limit. The total is zero, consistent with equilibrium rather than a finite thermodynamic driving force. Freezing reverses both signs for the same endpoints. This shortcut uses the transition temperature, not an arbitrary room temperature. Away from phase equilibrium, use an appropriate reversible reference path with heating or cooling stages as needed. A positive entropy change of the sample alone does not establish spontaneity, because the surroundings must also be included. State the phase, amount, pressure and transition temperature before applying the ratio.",
        "points": [
          "Supplied fusion data · ΔHfus=6.00 kJ/mol at 300 K · Equilibrium phase transition",
          "Two moles melt · ΔS=2×6000/300 · +40.0 J/K for system",
          "Same-temperature reservoir · −12000/300 · −40.0 J/K; total zero"
        ],
        "board": {
          "heading": "Phase-change entropy needs the transition temperature",
          "columns": [
            "Given / model",
            "Calculation / reason",
            "Result / limit"
          ],
          "rows": [
            [
              "Supplied fusion data",
              "ΔHfus=6.00 kJ/mol at 300 K",
              "Equilibrium phase transition"
            ],
            [
              "Two moles melt",
              "ΔS=2×6000/300",
              "+40.0 J/K for system"
            ],
            [
              "Same-temperature reservoir",
              "−12000/300",
              "−40.0 J/K; total zero"
            ]
          ]
        }
      },
      {
        "title": "Heat flow generates entropy between reservoirs",
        "formula": "ΔSᵤₙᵢᵥ = −Q/Tₕ + Q/T𝒸 for ideal reservoirs",
        "script": "Heat transferred across a finite temperature difference produces entropy even when energy is conserved. Suppose an isolated combined model contains ideal reservoirs at four hundred and three hundred kelvin. One thousand joules flows from the hot reservoir to the cold reservoir, with no work and no energy loss elsewhere. The hot reservoir loses two point five zero joules per kelvin of entropy. The cold reservoir gains three point three three joules per kelvin. Their total entropy change is positive zero point eight three three joule per kelvin. The two energy changes cancel, but the entropy changes do not, because equal heat is divided by different temperatures. Reversing only this heat transfer would make the combined entropy change negative and cannot happen spontaneously in the isolated model. A refrigerator can move heat in that direction only with additional processes and an energy supply. The reservoir approximation means each temperature stays essentially constant during the transfer. Finite bodies that noticeably change temperature require integration rather than using these two fixed denominators.",
        "points": [
          "Hot reservoir: 400 K · ΔS=−1000/400 · −2.50 J/K",
          "Cold reservoir: 300 K · ΔS=+1000/300 · +3.33 J/K",
          "Isolated combined system · −2.50+3.33 · +0.833 J/K; irreversible"
        ],
        "board": {
          "heading": "Heat flow generates entropy between reservoirs",
          "columns": [
            "Given / model",
            "Calculation / reason",
            "Result / limit"
          ],
          "rows": [
            [
              "Hot reservoir: 400 K",
              "ΔS=−1000/400",
              "−2.50 J/K"
            ],
            [
              "Cold reservoir: 300 K",
              "ΔS=+1000/300",
              "+3.33 J/K"
            ],
            [
              "Isolated combined system",
              "−2.50+3.33",
              "+0.833 J/K; irreversible"
            ]
          ]
        }
      },
      {
        "title": "A negative standard Gibbs energy does not fix direction",
        "formula": "ΔᵣG = RT ln(Q/K); use dimensionless activities",
        "script": "Standard reaction Gibbs energy describes standard states, while actual direction also depends on composition. Use the relation reaction Gibbs energy equals R T times the natural logarithm of Q divided by K. For an illustrative reaction at three hundred kelvin, let the dimensionless equilibrium constant be ten and the current dimensionless reaction quotient one hundred. The quotient exceeds the equilibrium constant. Using R equal to eight point three one four joules per mole kelvin gives reaction Gibbs energy plus five point seven four kilojoules per mole of reaction. The forward reaction is thermodynamically uphill at this composition, so the reverse direction is favoured. Yet the standard reaction Gibbs energy is minus R T logarithm ten, or minus five point seven four kilojoules per mole. There is no contradiction: the two values refer to different conditions. At Q equal to K, actual reaction Gibbs energy is zero. Activities are dimensionless; concentration ratios approximate them only under suitable assumptions. Thermodynamic preference does not specify how quickly equilibrium is approached.",
        "points": [
          "300 K, K=10, Q=100 · Q/K=10 · Forward direction uphill",
          "Actual reaction Gibbs energy · 8.314×300×ln(10) · +5.74 kJ/mol reaction",
          "Standard versus actual · ΔᵣG°=−RT ln K · −5.74 kJ/mol; different condition"
        ],
        "board": {
          "heading": "A negative standard Gibbs energy does not fix direction",
          "columns": [
            "Given / model",
            "Calculation / reason",
            "Result / limit"
          ],
          "rows": [
            [
              "300 K, K=10, Q=100",
              "Q/K=10",
              "Forward direction uphill"
            ],
            [
              "Actual reaction Gibbs energy",
              "8.314×300×ln(10)",
              "+5.74 kJ/mol reaction"
            ],
            [
              "Standard versus actual",
              "ΔᵣG°=−RT ln K",
              "−5.74 kJ/mol; different condition"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "For 2H2+O2→2H2O, starting amounts are 0.300 mol H2 and 0.100 mol O2. Maximum reaction extent is:",
        "options": [
          "0.100 mol",
          "0.150 mol",
          "0.200 mol",
          "0.300 mol"
        ],
        "answer": 0,
        "explanation": "Compare reactant amount divided by its written coefficient: oxygen allows only 0.100 mol extent."
      },
      {
        "question": "With ΔrH=−572 kJ per mole extent, the heat for that complete reaction at constant pressure is:",
        "options": [
          "−114.4 kJ",
          "−57.2 kJ",
          "+57.2 kJ",
          "−572 kJ"
        ],
        "answer": 1,
        "explanation": "Multiply the limiting extent 0.100 mol by −572 kJ/mol for the written reaction."
      },
      {
        "question": "Two moles melt reversibly at 300 K with ΔHfus=6.00 kJ/mol. System entropy change is:",
        "options": [
          "−40.0 J/K",
          "+20.0 J/K",
          "+40.0 J/K",
          "+12000 J/K"
        ],
        "answer": 2,
        "explanation": "The absorbed heat is 12000 J; reversible transition entropy is 12000/300=40.0 J/K."
      },
      {
        "question": "For the same reversible melting, total entropy change including a 300 K reservoir is:",
        "options": [
          "+80 J/K",
          "+40 J/K",
          "−40 J/K",
          "0 J/K"
        ],
        "answer": 3,
        "explanation": "The reservoir loses the same 12000 J at 300 K, exactly cancelling the system entropy gain."
      },
      {
        "question": "1000 J flows from an ideal 400 K reservoir to an ideal 300 K reservoir. Total entropy change is:",
        "options": [
          "+0.833 J/K",
          "0 J/K",
          "−0.833 J/K",
          "+5.83 J/K"
        ],
        "answer": 0,
        "explanation": "Add −1000/400 to +1000/300; energy cancels but the entropy contributions have different denominators."
      },
      {
        "question": "Using −Q/Th+Q/Tc directly requires:",
        "options": [
          "Both finite bodies cool equally",
          "Reservoir temperatures remain effectively fixed",
          "Entropy and energy have the same units",
          "Heat must flow cold to hot"
        ],
        "answer": 1,
        "explanation": "The fixed-temperature reservoir model permits each entropy change to be written as heat divided by a constant temperature."
      },
      {
        "question": "At 300 K with K=10 and Q=100, ΔrG is approximately (R=8.314 J/mol/K):",
        "options": [
          "−5.74 kJ/mol",
          "0 kJ/mol",
          "+5.74 kJ/mol",
          "+57.4 kJ/mol"
        ],
        "answer": 2,
        "explanation": "RT ln(Q/K)=8.314×300×ln(10) is positive, about 5743 J per mole of reaction."
      },
      {
        "question": "A reaction has ΔrG°<0 but Q>K at the stated temperature. Its current preferred direction is:",
        "options": [
          "Forward because the standard value is negative",
          "Neither direction at every composition",
          "Whichever direction is faster",
          "Reverse, because actual ΔrG is positive"
        ],
        "answer": 3,
        "explanation": "Actual direction follows RT ln(Q/K); the standard-state Gibbs energy alone does not fix direction at the current composition."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: enthalpy",
        "url": "https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy"
      },
      {
        "title": "OpenStax: second and third laws",
        "url": "https://openstax.org/books/chemistry-2e/pages/16-3-the-second-and-third-laws-of-thermodynamics"
      },
      {
        "title": "OpenStax: free energy",
        "url": "https://openstax.org/books/chemistry-2e/pages/16-4-free-energy"
      }
    ]
  },
  "solutions": {
    "base": 15,
    "quizBase": 18,
    "chapters": [
      {
        "title": "Hydration water joins the solvent inventory",
        "formula": "Hydrate dissolution: count solute formula units and released water separately",
        "script": "A crystalline hydrate contains water that can become part of the solvent after complete dissolution. Consider a supplied ideal model: two hundred fifty grams of a hydrate with molar mass two hundred fifty grams per mole contains five waters of crystallization per formula unit. Each water has molar mass eighteen. The sample therefore contains one mole of anhydrous salt formula units and ninety grams hydration water. Dissolve it in nine hundred ten grams added water. The final solvent water mass is one thousand grams, so the formal salt molality is one point zero zero mole per kilogram. Dividing by the added water alone would give an incorrect denominator for this model. If that salt then dissociates ideally into two ions per formula unit, the ideal solute-particle molality is two point zero zero moles per kilogram. Do not count hydration water as extra solute particles after it has joined the solvent. This is a stated complete-dissolution model without hydrolysis, retained bound complexes or other reactions; actual hydration and activities may require a more detailed description.",
        "points": [
          "250 g hydrate; M=250 · One mole salt; 5×18 g water · 90 g hydration water",
          "Added water 910 g · 910+90=1000 g solvent · Formal molality 1.00 mol/kg",
          "If ideal two-ion dissociation · i=2; particle molality=i m · 2.00 mol particles/kg"
        ],
        "board": {
          "heading": "Hydration water joins the solvent inventory",
          "columns": [
            "Given / model",
            "Calculation / reason",
            "Result / limit"
          ],
          "rows": [
            [
              "250 g hydrate; M=250",
              "One mole salt; 5×18 g water",
              "90 g hydration water"
            ],
            [
              "Added water 910 g",
              "910+90=1000 g solvent",
              "Formal molality 1.00 mol/kg"
            ],
            [
              "If ideal two-ion dissociation",
              "i=2; particle molality=i m",
              "2.00 mol particles/kg"
            ]
          ]
        }
      },
      {
        "title": "Molarity and molality can determine density",
        "formula": "ρ = c(1000/m + M)/1000 in g/mL",
        "script": "Concentration conversions can be reversed to infer a solution density when consistent data are supplied. Suppose a solution has molarity two point zero zero moles per litre and molality two point five zero moles per kilogram, for a solute with molar mass sixty point zero grams per mole. Choose one litre of solution. It contains two moles solute with mass one hundred twenty grams. Molality gives solvent mass two divided by two point five zero, or zero point eight zero zero kilogram. Total solution mass is therefore nine hundred twenty grams in one thousand millilitres, giving density zero point nine two zero gram per millilitre. The two concentrations refer to the same sample and temperature. Molarity uses solution volume, while molality uses solvent mass, so they cannot be equated just because both count moles. The inferred density is a consistency result for supplied data, not a universal density for that solute. Temperature can change volume and molarity even when composition and molality remain unchanged in a closed sample.",
        "points": [
          "One litre at c=2.00 mol/L · Solute mass=2×60 · 120 g solute",
          "Molality m=2.50 mol/kg · Solvent mass=2/2.50 · 800 g solvent",
          "Total mass / volume · 920 g / 1000 mL · ρ=0.920 g/mL"
        ],
        "board": {
          "heading": "Molarity and molality can determine density",
          "columns": [
            "Given / model",
            "Calculation / reason",
            "Result / limit"
          ],
          "rows": [
            [
              "One litre at c=2.00 mol/L",
              "Solute mass=2×60",
              "120 g solute"
            ],
            [
              "Molality m=2.50 mol/kg",
              "Solvent mass=2/2.50",
              "800 g solvent"
            ],
            [
              "Total mass / volume",
              "920 g / 1000 mL",
              "ρ=0.920 g/mL"
            ]
          ]
        }
      },
      {
        "title": "Two colligative measurements cross-check one model",
        "formula": "For the same ideal dilute sample: ΔTᵦ/ΔT𝒻 = Kᵦ/K𝒻",
        "script": "Two colligative measurements on the same solution can check whether a single ideal particle-count model is internally consistent. Use a supplied solvent with boiling elevation constant zero point five two zero and freezing depression constant one point eight six kelvin kilogram per mole. An ideal dilute solution shows boiling elevation zero point two six zero kelvin. The effective particle molality is therefore zero point five zero zero mole per kilogram. The same particle inventory predicts freezing depression zero point nine three zero kelvin. Dividing the two shifts cancels both the formal molality and van't Hoff factor. This cancellation does not by itself reveal the solute molar mass or its dissociation fraction: additional composition information is required. A mismatch may indicate measurement error, different samples, concentration-dependent association, nonideality or an inappropriate approximation. The solute must satisfy the conditions of both dilute-solution relations, including negligible volatility for the boiling-elevation model. Treat both shifts as positive magnitudes relative to the pure solvent, and distinguish a cross-check from an independent molecular identification.",
        "points": [
          "Kb=0.520; ΔTb=0.260 K · i m=0.260/0.520 · 0.500 mol particles/kg",
          "Kf=1.86 · ΔTf=1.86×0.500 · 0.930 K",
          "Same dilute particle model · ΔTb/ΔTf=Kb/Kf · Does not identify i and m separately"
        ],
        "board": {
          "heading": "Two colligative measurements cross-check one model",
          "columns": [
            "Given / model",
            "Calculation / reason",
            "Result / limit"
          ],
          "rows": [
            [
              "Kb=0.520; ΔTb=0.260 K",
              "i m=0.260/0.520",
              "0.500 mol particles/kg"
            ],
            [
              "Kf=1.86",
              "ΔTf=1.86×0.500",
              "0.930 K"
            ],
            [
              "Same dilute particle model",
              "ΔTb/ΔTf=Kb/Kf",
              "Does not identify i and m separately"
            ]
          ]
        }
      },
      {
        "title": "A vapour sample can reveal the ideal liquid composition",
        "formula": "yA = xA pA°/[xA pA°+(1−xA)pB°]",
        "script": "Raoult's law can be solved backward from a vapour composition when the liquid mixture is ideal and both components are volatile. Suppose the pure-component vapour pressures at one temperature are eighty kilopascals for A and forty for B. The equilibrium vapour contains A with mole fraction zero point eight zero zero. Let x be the liquid mole fraction of A. Its partial pressure is eighty x, while B contributes forty times one minus x. Setting eighty x divided by forty plus forty x equal to zero point eight gives x equal to two thirds. The total pressure is then sixty six point six seven kilopascals. The vapour is enriched in the more volatile component A compared with the liquid. The vapour sample composition is not the overall composition of an arbitrary closed two-phase sample; a phase-fraction balance would also be required for that question. The inference assumes equilibrium at the same temperature, an ideal liquid and approximately ideal vapour behaviour. Nonideal mixtures require activities or other supplied equilibrium data instead of this direct expression.",
        "points": [
          "pA°=80; pB°=40 kPa · yA=0.800 · Ideal liquid and vapour model",
          "Solve 80x/(40+40x)=0.800 · 80x=32+32x · Liquid xA=2/3",
          "Total pressure · 80(2/3)+40(1/3) · 66.67 kPa; yA>xA"
        ],
        "board": {
          "heading": "A vapour sample can reveal the ideal liquid composition",
          "columns": [
            "Given / model",
            "Calculation / reason",
            "Result / limit"
          ],
          "rows": [
            [
              "pA°=80; pB°=40 kPa",
              "yA=0.800",
              "Ideal liquid and vapour model"
            ],
            [
              "Solve 80x/(40+40x)=0.800",
              "80x=32+32x",
              "Liquid xA=2/3"
            ],
            [
              "Total pressure",
              "80(2/3)+40(1/3)",
              "66.67 kPa; yA>xA"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "250 g hydrate of M=250 g/mol contains five waters per formula unit (water M=18). Hydration water mass is:",
        "options": [
          "18 g",
          "90 g",
          "160 g",
          "250 g"
        ],
        "answer": 1,
        "explanation": "There is one mole hydrate and five moles water, so the water contribution is 5×18=90 g."
      },
      {
        "question": "That hydrate dissolves completely into 910 g added water. Formal salt molality is:",
        "options": [
          "1.10 mol/kg",
          "0.910 mol/kg",
          "1.00 mol/kg",
          "2.00 mol/kg"
        ],
        "answer": 2,
        "explanation": "Released hydration water joins the solvent: 910+90=1000 g, containing one mole salt formula units."
      },
      {
        "question": "A 2.00 M solution is 2.50 mol/kg, with solute M=60 g/mol. Solvent mass per litre is:",
        "options": [
          "120 g",
          "920 g",
          "1000 g",
          "800 g"
        ],
        "answer": 3,
        "explanation": "Two moles per litre divided by 2.50 moles per kilogram gives 0.800 kg solvent."
      },
      {
        "question": "For that same sample the density is:",
        "options": [
          "0.920 g/mL",
          "1.120 g/mL",
          "0.800 g/mL",
          "2.50 g/mL"
        ],
        "answer": 0,
        "explanation": "One litre contains 800 g solvent plus 120 g solute: 920 g in 1000 mL gives 0.920 g/mL."
      },
      {
        "question": "Kb=0.520 K kg/mol and boiling elevation is 0.260 K. Effective particle molality is:",
        "options": [
          "0.135 mol/kg",
          "0.500 mol/kg",
          "2.00 mol/kg",
          "0.260 mol/kg"
        ],
        "answer": 1,
        "explanation": "Divide the observed elevation by Kb to obtain the product i m, here 0.500 mol/kg."
      },
      {
        "question": "For the same ideal dilute sample with Kf=1.86 K kg/mol, predicted freezing depression is:",
        "options": [
          "0.260 K",
          "1.86 K",
          "0.930 K",
          "3.72 K"
        ],
        "answer": 2,
        "explanation": "The same particle molality is 0.500 mol/kg, giving 1.86×0.500=0.930 K."
      },
      {
        "question": "Ideal volatile A/B has pA°=80 and pB°=40 kPa. Vapour yA=0.800 implies liquid xA:",
        "options": [
          "0.800",
          "0.500",
          "0.333",
          "2/3"
        ],
        "answer": 3,
        "explanation": "Solve 80x/[80x+40(1−x)]=0.800 to obtain 48x=32 and x=2/3."
      },
      {
        "question": "Total equilibrium pressure for that ideal liquid is:",
        "options": [
          "66.67 kPa",
          "80 kPa",
          "40 kPa",
          "120 kPa"
        ],
        "answer": 0,
        "explanation": "Add the liquid-composition-weighted partial pressures: 80×2/3+40×1/3=66.67 kPa."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: molarity",
        "url": "https://openstax.org/books/chemistry-2e/pages/3-3-molarity"
      },
      {
        "title": "OpenStax: colligative properties",
        "url": "https://openstax.org/books/chemistry-2e/pages/11-4-colligative-properties"
      }
    ]
  }
} as const;
