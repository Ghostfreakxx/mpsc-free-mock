// Authored by scripts/expand-thermal-phase-evidence.mjs.
export const thermalPhaseEvidenceAdditions = {
  "chemical-thermodynamics": {
    "base": 23,
    "quizBase": 34,
    "chapters": [
      {
        "title": "Insulated free expansion can generate entropy without heat",
        "formula": "Ideal gas; q=0, w=0, ΔU=0, ΔT=0; ΔS=nR ln(V₂/V₁)>0",
        "script": "Zero heat transfer does not force zero entropy change in an irreversible process. Consider one mole of an ideal gas initially confined to half of a rigid insulated container, with vacuum in the other half. Removing the internal partition doubles the volume available to the gas. External pressure opposing this free expansion is zero, so pressure volume work is zero. The insulated outer walls give zero heat transfer. In the Chemistry convention, internal energy change equals heat plus work and is therefore zero. For an ideal gas, internal energy depends only on temperature, so the final equilibrium temperature equals the initial one. Nevertheless entropy rises. Evaluate it through a reversible isothermal reference path between those same endpoints, giving R times the natural logarithm of two, approximately five point seven six joules per kelvin. This reference path calculates a state function; it is not the actual gas motion inside the vessel. The isolated whole has positive entropy generation while its surroundings exchange no heat. A real gas can show a temperature change in an analogous expansion, and the reversible adiabatic volume temperature power law cannot be imposed on this irreversible event.",
        "points": [
          "Rigid insulated container; initial vacuum · q=0; external pressure=0; w=0 · ΔU=0",
          "One mole ideal gas; V₂=2V₁ · ΔT=0; ΔS=R ln2 · ΔS≈+5.76 J/K",
          "Irreversible actual expansion · Use reversible path only to calculate ΔS · Do not use reversible adiabatic power law"
        ],
        "board": {
          "heading": "Insulated free expansion can generate entropy without heat",
          "columns": [
            "Specified model",
            "Balance / calculation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Rigid insulated container; initial vacuum",
              "q=0; external pressure=0; w=0",
              "ΔU=0"
            ],
            [
              "One mole ideal gas; V₂=2V₁",
              "ΔT=0; ΔS=R ln2",
              "ΔS≈+5.76 J/K"
            ],
            [
              "Irreversible actual expansion",
              "Use reversible path only to calculate ΔS",
              "Do not use reversible adiabatic power law"
            ]
          ]
        }
      },
      {
        "title": "Two gas endpoints need both thermal and volume entropy terms",
        "formula": "ΔS=nCv ln(T₂/T₁)+nR ln(V₂/V₁) for an ideal gas with constant Cv",
        "script": "When an ideal gas changes both temperature and volume, keeping just one entropy term misses part of the endpoint change. Construct a reversible reference path consisting of constant volume warming followed by isothermal expansion at the final temperature. For constant molar heat capacity, the warming contribution is n C V times the natural logarithm of final over initial temperature. The expansion contribution is n R times the logarithm of final over initial volume. Add them because entropy is a state function. Take one mole of a monatomic ideal gas with C V equal to three halves R, temperature increasing from three hundred to six hundred kelvin and volume from ten to twenty litres. Each logarithm is the natural logarithm of two, so the sum is five halves R times that logarithm, approximately fourteen point four one joules per kelvin. Reversing both endpoints changes the sign. These endpoints even have the same ideal gas pressure because temperature and volume double together, but that does not make the entropy change zero. The actual process may follow a different path; its heat and work are not fixed by this entropy calculation alone.",
        "points": [
          "n=1; Cv=3R/2; 300→600 K · Thermal term=(3R/2) ln2 · Use absolute temperatures",
          "Volume 10→20 L · Volume term=R ln2 · Only the ratio needs matching volume units",
          "Total: (5R/2) ln2 · ΔS≈+14.41 J/K · Same endpoint pressure does not mean ΔS=0"
        ],
        "board": {
          "heading": "Two gas endpoints need both thermal and volume entropy terms",
          "columns": [
            "Specified model",
            "Balance / calculation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "n=1; Cv=3R/2; 300→600 K",
              "Thermal term=(3R/2) ln2",
              "Use absolute temperatures"
            ],
            [
              "Volume 10→20 L",
              "Volume term=R ln2",
              "Only the ratio needs matching volume units"
            ],
            [
              "Total: (5R/2) ln2",
              "ΔS≈+14.41 J/K",
              "Same endpoint pressure does not mean ΔS=0"
            ]
          ]
        }
      },
      {
        "title": "Use a temperature interval to predict a new equilibrium constant",
        "formula": "ln(K₂/K₁)=−ΔH°/R × (1/T₂−1/T₁); approximately constant reaction enthalpy",
        "script": "An equilibrium constant belongs to a specified temperature as well as a specified balanced reaction. A supporting integrated van't Hoff calculation predicts its temperature change when reaction enthalpy is approximately constant over the interval. The natural logarithm of K two divided by K one equals minus standard reaction enthalpy divided by R, multiplied by one over temperature two minus one over temperature one. Suppose the supplied reaction has enthalpy plus thirty kilojoules per mole, with K equal to two at three hundred kelvin. At three hundred thirty kelvin, first convert the enthalpy to thirty thousand joules per mole to match R eight point three one four. The logarithm of the constant ratio is approximately one point zero nine three, giving a ratio about two point nine eight five and a new constant about five point nine seven. The increase agrees with the endothermic sign. For a negative reaction enthalpy over the same heating interval, the constant would decrease. Do not replace the natural logarithm with a base ten logarithm without its conversion factor, or hold enthalpy constant across a phase change without checking the model.",
        "points": [
          "ΔH°=+30000 J/mol; K₁=2.00 · T₁=300 K; T₂=330 K · Use R=8.314 J/(mol K)",
          "ln(K₂/K₁)≈1.09345 · K₂/K₁≈2.98454 · K₂≈5.97",
          "Positive enthalpy; heating · K increases for this equation · Constant ΔH° approximation; natural log"
        ],
        "board": {
          "heading": "Use a temperature interval to predict a new equilibrium constant",
          "columns": [
            "Specified model",
            "Balance / calculation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "ΔH°=+30000 J/mol; K₁=2.00",
              "T₁=300 K; T₂=330 K",
              "Use R=8.314 J/(mol K)"
            ],
            [
              "ln(K₂/K₁)≈1.09345",
              "K₂/K₁≈2.98454",
              "K₂≈5.97"
            ],
            [
              "Positive enthalpy; heating",
              "K increases for this equation",
              "Constant ΔH° approximation; natural log"
            ]
          ]
        }
      },
      {
        "title": "A neutralization cycle can isolate an ionization enthalpy",
        "formula": "HA→H⁺+A⁻ plus H⁺+OH⁻→H₂O gives HA+OH⁻→A⁻+H₂O",
        "script": "Neutralization data can reveal a hidden ionization step if all reactions and states are matched. In a supplied dilute solution Hess model, hydrogen ion plus hydroxide forms water with enthalpy minus fifty seven kilojoules per mole water. A weak acid H A reacting with hydroxide gives A minus and water with enthalpy minus fifty five kilojoules per mole water. Add the formal ionization of H A into hydrogen ion and A minus to the first reaction. Hydrogen ions cancel, leaving the weak acid neutralization equation. Therefore ionization enthalpy plus minus fifty seven equals minus fifty five, and ionization enthalpy is plus two kilojoules per mole. In this dataset the endothermic ionization step offsets some heat released by water formation. This is not a universal numerical value for every weak acid, and weak ionization is not automatically an endothermic process in every case. Compare like amounts of water and compatible dilute solution states before subtracting measurements. Heat absorbed by a calorimeter has the opposite sign to the reaction heat, so an observed temperature rise must first be converted to a consistently signed reaction enthalpy.",
        "points": [
          "H⁺+OH⁻→H₂O · ΔH=−57 kJ/mol water · Matched dilute-state baseline",
          "HA+OH⁻→A⁻+H₂O · ΔH=−55 kJ/mol water · Ionization step is included",
          "ΔHion−57=−55 · ΔHion=+2 kJ/mol · Dataset-specific; preserve reaction signs"
        ],
        "board": {
          "heading": "A neutralization cycle can isolate an ionization enthalpy",
          "columns": [
            "Specified model",
            "Balance / calculation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "H⁺+OH⁻→H₂O",
              "ΔH=−57 kJ/mol water",
              "Matched dilute-state baseline"
            ],
            [
              "HA+OH⁻→A⁻+H₂O",
              "ΔH=−55 kJ/mol water",
              "Ionization step is included"
            ],
            [
              "ΔHion−57=−55",
              "ΔHion=+2 kJ/mol",
              "Dataset-specific; preserve reaction signs"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "One mole ideal gas freely expands into vacuum in a rigid insulated vessel, doubling its available volume. The final equilibrium changes are:",
        "options": [
          "q=0, w=0, ΔU=0, ΔT=0, ΔS>0",
          "q>0, w>0, ΔU>0, ΔS=0",
          "q=0 but reversible adiabatic compression occurs",
          "ΔS=0 because no heat crosses the wall"
        ],
        "answer": 0,
        "explanation": "The actual expansion has no heat or pressure-volume work, but its irreversible entropy generation is R ln2 for these ideal-gas endpoints."
      },
      {
        "question": "For that ideal-gas free expansion, ΔS for one mole is approximately (R=8.314 J/(mol K)):",
        "options": [
          "0 J/K",
          "+5.76 J/K",
          "−5.76 J/K",
          "+1729 J/K at every temperature"
        ],
        "answer": 1,
        "explanation": "Use a reversible isothermal reference path to calculate the state change: ΔS=R ln(V₂/V₁)=R ln2."
      },
      {
        "question": "One mole monatomic ideal gas has constant Cv=3R/2, doubles T and doubles V. Its entropy change is:",
        "options": [
          "R ln2",
          "0 because pressure is unchanged",
          "(5R/2) ln2",
          "−(5R/2) ln2"
        ],
        "answer": 2,
        "explanation": "Both endpoint contributions matter: Cv ln(T₂/T₁)+R ln(V₂/V₁)=(3R/2+R)ln2."
      },
      {
        "question": "With R=8.314 J/(mol K), the preceding two-state entropy increase is approximately:",
        "options": [
          "5.76 J/K",
          "8.64 J/K",
          "0 J/K",
          "14.41 J/K"
        ],
        "answer": 3,
        "explanation": "The thermal contribution is 8.644 J/K and the volume contribution 5.763 J/K; add them to obtain 14.407 J/K."
      },
      {
        "question": "A reaction has approximately constant ΔH°=+30.0 kJ/mol and K=2.00 at 300 K. With R=8.314 J/(mol K), its K at 330 K is closest to:",
        "options": [
          "5.97",
          ".670",
          "2.00",
          "1.093"
        ],
        "answer": 0,
        "explanation": "ln(K₂/2)=−30000/8.314×(1/330−1/300)=1.09345; exponentiate before multiplying by 2."
      },
      {
        "question": "For approximately constant negative ΔH°, heating a reaction from T₁ to T₂>T₁ changes its equilibrium constant how?",
        "options": [
          "It must always double",
          "It decreases",
          "It is independent of temperature",
          "It equals the rate constant"
        ],
        "answer": 1,
        "explanation": "The integrated van’t Hoff expression has a negative logarithm of K₂/K₁ for an exothermic reaction heated over the stated interval."
      },
      {
        "question": "Matched reaction enthalpies are −57 kJ/mol for H⁺+OH⁻→H₂O and −55 for HA+OH⁻→A⁻+H₂O. The formal HA ionization enthalpy is:",
        "options": [
          "−112 kJ/mol",
          "−2 kJ/mol",
          "+2 kJ/mol",
          "+112 kJ/mol"
        ],
        "answer": 2,
        "explanation": "Hess addition requires ΔHion+(−57)=−55, giving +2 kJ/mol for the supplied ionization reaction."
      },
      {
        "question": "Why must neutralization enthalpy comparisons use compatible reaction states and normalization?",
        "options": [
          "Every weak acid has the same ionization enthalpy",
          "Calorimeter heat always equals reaction heat with the same sign",
          "One mole acid always makes two moles water",
          "Hess subtraction compares specified reactions, including phases and amount of water formed"
        ],
        "answer": 3,
        "explanation": "Different reaction amounts, solution states or sign conventions can change the difference; the supplied cycle does not justify a universal weak-acid value."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: ideal-gas adiabatic and free expansion",
        "url": "https://openstax.org/books/university-physics-volume-2/pages/3-6-adiabatic-processes-for-an-ideal-gas"
      },
      {
        "title": "OpenStax: entropy and reversible reference paths",
        "url": "https://openstax.org/books/university-physics-volume-2/pages/4-6-entropy"
      },
      {
        "title": "Patrick Fleming, CSU East Bay: integrated van’t Hoff equation",
        "url": "https://chemistry.csueastbay.edu/~pfleming/chem/351/chap10/vantHoff.htm"
      },
      {
        "title": "OpenStax: enthalpy and Hess cycles",
        "url": "https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy"
      }
    ]
  },
  "solutions": {
    "base": 23,
    "quizBase": 34,
    "chapters": [
      {
        "title": "An osmotic liquid height measures a pressure difference",
        "formula": "π=cRT≈ρgh; use the final measured solution concentration and a consistent density model",
        "script": "Osmotic pressure can appear as a hydrostatic level difference rather than a reading in atmospheres. Consider a membrane that passes solvent but retains the chosen non electrolyte, with both free surfaces exposed to the same atmospheric pressure. In a supplied dilute model with nearly equal constant liquid densities, a height difference h provides opposing pressure rho g h. At osmotic equilibrium this balances the osmotic pressure difference. Let the final measured solution concentration be zero point zero zero two zero zero mole per litre, with pure solvent on the other side, at three hundred kelvin. Convert concentration to two moles per cubic metre before using R eight point three one four in S I units. The osmotic pressure is four thousand nine hundred eighty eight point four pascals. With density one thousand kilograms per cubic metre and g nine point eight zero metres per second squared, the level difference is about zero point five zero nine metre. This uses the final concentration: solvent entering during equilibration can dilute an initially prepared solution. Unequal column densities, membrane leakage or an external pressure difference require a revised mechanical and solution balance.",
        "points": [
          "Final c=0.00200 mol/L=2.00 mol/m³ · π=cRT=4988.4 Pa at 300 K · Pure solvent on the other side",
          "ρ=1000 kg/m³; g=9.80 m/s² · h=π/(ρg) · h≈0.509 m",
          "Same atmosphere; constant equal densities · Hydrostatic difference opposes osmosis · Initial concentration may change during flow"
        ],
        "board": {
          "heading": "An osmotic liquid height measures a pressure difference",
          "columns": [
            "Specified model",
            "Balance / calculation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Final c=0.00200 mol/L=2.00 mol/m³",
              "π=cRT=4988.4 Pa at 300 K",
              "Pure solvent on the other side"
            ],
            [
              "ρ=1000 kg/m³; g=9.80 m/s²",
              "h=π/(ρg)",
              "h≈0.509 m"
            ],
            [
              "Same atmosphere; constant equal densities",
              "Hydrostatic difference opposes osmosis",
              "Initial concentration may change during flow"
            ]
          ]
        }
      },
      {
        "title": "Dissolved gases need not keep the headspace composition",
        "formula": "For each dilute gas: xi=yiP/KHi; dissolved-gas-only fraction of A=xA/(xA+xB)",
        "script": "Two gases can dissolve in proportions very different from their proportions in the surrounding gas. Use the specified Henry convention: partial pressure equals Henry constant times dissolved mole fraction. An ideal gas reservoir has total gas pressure one bar, with eighty percent A and twenty percent B by mole; any solvent vapour contribution is already excluded. At the stated temperature, supplied Henry constants are one thousand bar for A and one hundred bar for B. Their partial pressures are zero point eight and zero point two bar. Dissolved mole fractions in the complete liquid mixture are therefore zero point zero zero zero eight and zero point zero zero two. Among the dissolved gas molecules alone, A's fraction is zero point zero zero zero eight divided by their sum zero point zero zero two eight, or two sevenths. Thus B dominates the dissolved gas population even though it was the minority in the headspace. In this convention the smaller Henry constant indicates greater solubility at equal partial pressure. Assume dilute nonreacting gases, the same solvent and temperature, and a sufficiently large gas reservoir so dissolution does not change its stipulated composition.",
        "points": [
          "Gas reservoir: P=1.00 bar; yA=.80, yB=.20 · KH,A=1000; KH,B=100 bar · pA=.80; pB=.20 bar",
          "xA=.80/1000=.000800 · xB=.20/100=.00200 · Mole fractions in the full liquid",
          "Dissolved gases only · A fraction=.0008/.0028=2/7 · Headspace and dissolved-gas ratios differ"
        ],
        "board": {
          "heading": "Dissolved gases need not keep the headspace composition",
          "columns": [
            "Specified model",
            "Balance / calculation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Gas reservoir: P=1.00 bar; yA=.80, yB=.20",
              "KH,A=1000; KH,B=100 bar",
              "pA=.80; pB=.20 bar"
            ],
            [
              "xA=.80/1000=.000800",
              "xB=.20/100=.00200",
              "Mole fractions in the full liquid"
            ],
            [
              "Dissolved gases only",
              "A fraction=.0008/.0028=2/7",
              "Headspace and dissolved-gas ratios differ"
            ]
          ]
        }
      },
      {
        "title": "Matching liquid and vapour compositions establishes azeotrope evidence",
        "formula": "At the stated equilibrium point: xA=.400, pA=32.0 kPa, pB=48.0 kPa ⇒ yA=.400",
        "script": "A measured vapour composition can supply the evidence missing from a total pressure value alone. Consider a specified binary liquid at its boiling equilibrium, with liquid mole fraction A equal to zero point four zero zero. At that temperature its measured partial vapour pressures are thirty two and forty eight kilopascals, so total pressure is eighty. Dalton's relation gives vapour mole fraction A equal to thirty two divided by eighty, or zero point four zero zero. Liquid and vapour compositions match at this nonpure composition: the supplied equilibrium point is azeotropic. An equilibrium vaporization stage there gives no composition enrichment. Now compare the ideal pressure reference at the same temperature, with pure liquid vapour pressures sixty and fifty kilopascals. The ideal total is zero point four times sixty plus zero point six times fifty, or fifty four kilopascals, below the measured eighty. This shows positive total deviation as a separate observation. It is the composition match, not merely that pressure difference, that establishes the azeotropic point in this dataset. Do not assume equal component amounts, a fixed molecular compound formula, or an unchanged azeotropic composition at every pressure.",
        "points": [
          "xA=.400; measured pA=32, pB=48 kPa · P=80; yA=32/80=.400 · Liquid and equilibrium vapour match",
          "Pure pressures: 60 and 50 kPa · Ideal P=.4×60+.6×50=54 · Measured 80>54: positive deviation",
          "At this nonpure equilibrium composition · One vapour stage gives no enrichment · Composition match establishes the azeotrope"
        ],
        "board": {
          "heading": "Matching liquid and vapour compositions establishes azeotrope evidence",
          "columns": [
            "Specified model",
            "Balance / calculation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "xA=.400; measured pA=32, pB=48 kPa",
              "P=80; yA=32/80=.400",
              "Liquid and equilibrium vapour match"
            ],
            [
              "Pure pressures: 60 and 50 kPa",
              "Ideal P=.4×60+.6×50=54",
              "Measured 80>54: positive deviation"
            ],
            [
              "At this nonpure equilibrium composition",
              "One vapour stage gives no enrichment",
              "Composition match establishes the azeotrope"
            ]
          ]
        }
      },
      {
        "title": "Pure ice rejects solute into the remaining liquid",
        "formula": "nsolute fixed; liquid-water mass=initial water−ice; ΔTf=Kf nsolute/mwater,liquid",
        "script": "Partial freezing changes the liquid concentration because the solid need not carry the solute with it. In a supplied dilute water model, dissolve eighteen grams of a non electrolyte of molar mass sixty grams per mole in one kilogram of water. The solute amount is zero point three zero zero mole. With freezing constant one point eight six kelvin kilogram per mole, the initial liquid's freezing onset is depressed by zero point five five eight kelvin. Now suppose zero point four zero zero kilogram of pure ice has separated, while every solute molecule stays dissolved in the remaining liquid. Liquid water mass is zero point six zero zero kilogram and liquid molality rises to zero point five zero zero. Its equilibrium freezing depression is then zero point nine three zero kelvin. The original water total still includes the ice, but that ice is not part of the liquid solvent denominator. Continuing freezing therefore changes the temperature at which this remaining liquid can coexist with ice. The colligative expression alone does not determine heat removal or the amount of ice formed. Solute crystallization, solid solution formation, association or strong nonideality would invalidate the stipulated pure ice and dilute liquid model.",
        "points": [
          "18.0 g solute; M=60.0 g/mol · n=.300 mol; initial water=1.000 kg · Initial ΔTf=1.86×.300=.558 K",
          "Pure ice separated=.400 kg · Liquid water=.600 kg; m=.500 mol/kg · Remaining-liquid ΔTf=.930 K",
          "Solute stays in liquid · Ice excluded from liquid molality denominator · Heat removal needs its own energy balance"
        ],
        "board": {
          "heading": "Pure ice rejects solute into the remaining liquid",
          "columns": [
            "Specified model",
            "Balance / calculation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "18.0 g solute; M=60.0 g/mol",
              "n=.300 mol; initial water=1.000 kg",
              "Initial ΔTf=1.86×.300=.558 K"
            ],
            [
              "Pure ice separated=.400 kg",
              "Liquid water=.600 kg; m=.500 mol/kg",
              "Remaining-liquid ΔTf=.930 K"
            ],
            [
              "Solute stays in liquid",
              "Ice excluded from liquid molality denominator",
              "Heat removal needs its own energy balance"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "A dilute non-electrolyte solution at 300 K has final c=.00200 mol/L. With R=8.314 J/(mol K), its ideal osmotic pressure against pure solvent is:",
        "options": [
          "4.9884 Pa",
          "4988400 Pa",
          "4988.4 Pa",
          "0 Pa"
        ],
        "answer": 2,
        "explanation": "Convert .00200 mol/L to 2.00 mol/m³ before using SI R: π=2×8.314×300=4988.4 Pa."
      },
      {
        "question": "If that pressure balances ρgh with ρ=1000 kg/m³ and g=9.80 m/s², the level difference is approximately:",
        "options": [
          "509 m",
          "5.09 m",
          ".0509 m",
          ".509 m"
        ],
        "answer": 3,
        "explanation": "h=4988.4/(1000×9.80)=.5090 m; use the final measured concentration and the stated column-density model."
      },
      {
        "question": "A gas reservoir at 1 bar has yA=.80 and yB=.20; p=KHx with KH,A=1000 bar and KH,B=100 bar. A’s fraction among dissolved gas molecules alone is:",
        "options": [
          "2/7",
          "4/5",
          "1/5",
          "5/7"
        ],
        "answer": 0,
        "explanation": "xA=.0008 and xB=.0020, so A/(A+B)=.0008/.0028=2/7; the solvent is excluded only in this final ratio."
      },
      {
        "question": "For the specified convention p=KHx, at equal gas partial pressure the gas with smaller KH has:",
        "options": [
          "Smaller dissolved mole fraction",
          "Larger dissolved mole fraction",
          "Necessarily identical solubility",
          "No dissolved molecules"
        ],
        "answer": 1,
        "explanation": "Rearrange x=p/KH at matched solvent and temperature; the inverse dependence belongs to this explicitly stated convention."
      },
      {
        "question": "At boiling equilibrium, xA=.400 and measured vapour partial pressures are pA=32 and pB=48 kPa. What does yA establish?",
        "options": [
          "yA=.667, so the vapour is pure A",
          "yA=.600, so the mixture must be ideal",
          "yA=.400, matching the nonpure liquid composition at this azeotropic point",
          "yA=.800, so both liquids have disappeared"
        ],
        "answer": 2,
        "explanation": "Dalton’s relation gives yA=32/(32+48)=.400. The equilibrium liquid/vapour composition match is the azeotrope evidence."
      },
      {
        "question": "At the same T, pure vapour pressures are 60 and 50 kPa. For xA=.400, the ideal total reference and measured deviation (Pactual=80 kPa) are:",
        "options": [
          "80 kPa; no deviation",
          "54 kPa; negative deviation",
          "110 kPa; positive deviation",
          "54 kPa; positive deviation"
        ],
        "answer": 3,
        "explanation": "Raoult’s ideal total is .4×60+.6×50=54 kPa; the measured 80 kPa is greater by 26 kPa."
      },
      {
        "question": "A .300 mol non-electrolyte remains entirely in liquid while .400 kg pure ice separates from 1.000 kg initial water. Liquid molality becomes:",
        "options": [
          ".500 mol/kg",
          ".300 mol/kg",
          ".214 mol/kg",
          ".750 mol/kg"
        ],
        "answer": 0,
        "explanation": "The liquid solvent mass is 1.000−.400=.600 kg, so m=.300/.600=.500 mol/kg; ice is excluded."
      },
      {
        "question": "With Kf=1.86 K kg/mol and i=1, the remaining liquid’s freezing depression in that model is:",
        "options": [
          ".558 K",
          ".930 K",
          "1.860 K",
          "0 K because ice is present"
        ],
        "answer": 1,
        "explanation": "Use the remaining liquid molality .500 mol/kg: ΔTf=1.86×.500=.930 K, rather than reusing the initial denominator."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: colligative properties, osmotic pressure and pure-solvent freezing",
        "url": "https://openstax.org/books/chemistry-2e/pages/11-4-colligative-properties"
      },
      {
        "title": "OpenStax: gas solubility and Henry conventions",
        "url": "https://openstax.org/books/chemistry-2e/pages/11-3-solubility"
      },
      {
        "title": "OpenStax: partial pressures of gas mixtures",
        "url": "https://openstax.org/books/chemistry-2e/pages/9-3-stoichiometry-of-gaseous-substances-mixtures-and-reactions"
      }
    ]
  }
} as const;
