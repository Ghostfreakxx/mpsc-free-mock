// Authored by scripts/expand-thermo-solution-phase-ledgers.mjs.
export const thermoSolutionPhaseLedgersAdditions = {
  "chemical-thermodynamics": {
    "chapters": [
      {
        "title": "Isomer combustion cycles compare enthalpies at matched states",
        "formula": "ΔH(A→B)=ΔcH(A)−ΔcH(B), when both combustion endpoints match",
        "script": "Two isomers can have the same molecular formula but different enthalpies. A combustion cycle can measure their difference if the product amounts, product phases and temperature match. Use supplied illustrative molar combustion enthalpies minus three thousand kilojoules for isomer A and minus two thousand nine hundred eighty for isomer B, each leading to the same carbon dioxide and liquid water endpoint. Burn A, then reverse the combustion equation for B. Oxygen and all combustion products cancel, leaving A converting into B. The enthalpy change is minus three thousand minus minus two thousand nine hundred eighty, giving minus twenty kilojoules per mole. B is therefore lower in enthalpy by twenty kilojoules per mole for the stated phases and conditions. Do not reverse this conclusion because A releases more heat on combustion: its larger release starts from the higher enthalpy state. Enthalpy ordering alone does not establish a Gibbs energy ordering, an equilibrium composition or a reaction rate. Entropy, temperature and activation barriers are separate information. If the combustion data use different water phases or different temperatures, correct those endpoints before subtracting the numbers.",
        "points": [
          "A and B: same formula · Same combustion products/phases · Subtract only matched endpoints",
          "ΔcH(A)=−3000; B=−2980 · ΔH(A→B)=−20 kJ/mol · B is lower in enthalpy",
          "H ordering is not G ordering · Entropy and T still matter · No rate or yield follows"
        ],
        "board": {
          "heading": "Isomer combustion cycles compare enthalpies at matched states",
          "columns": [
            "Given / state",
            "Calculation",
            "Interpretation"
          ],
          "rows": [
            [
              "A and B: same formula",
              "Same combustion products/phases",
              "Subtract only matched endpoints"
            ],
            [
              "ΔcH(A)=−3000; B=−2980",
              "ΔH(A→B)=−20 kJ/mol",
              "B is lower in enthalpy"
            ],
            [
              "H ordering is not G ordering",
              "Entropy and T still matter",
              "No rate or yield follows"
            ]
          ]
        }
      },
      {
        "title": "Changing product water phase changes combustion enthalpy",
        "formula": "ΔcH(to H2O(g))=ΔcH(to H2O(l))+ν(H2O)ΔvapH",
        "script": "A combustion enthalpy is incomplete unless the product states are specified. Producing water vapor leaves the products at a higher enthalpy than producing liquid water at the same temperature. In a supplied methane example, take the combustion enthalpy to carbon dioxide gas and two liquid water molecules as minus eight hundred ninety kilojoules per mole of methane. Use an illustrative water vaporization enthalpy of forty four kilojoules per mole at that same temperature. To change the endpoint to two water vapor molecules, add two vaporization steps, a total of plus eighty eight kilojoules. The gas water combustion enthalpy is therefore minus eight hundred two kilojoules per mole. It remains exothermic but releases less heat in magnitude because the water has not condensed. Reversing the endpoint change requires subtracting those vaporization contributions. The coefficient is the number of water moles produced per written reaction, not the number of hydrogen atoms. These are matched temperature enthalpy corrections, not an instruction to use a boiling point latent heat at an unrelated temperature without adjustment. Always attach the phase labels before comparing fuel energy data.",
        "points": [
          "CH4 gives 2 H2O · Liquid-water endpoint:−890 · Units: kJ/mol CH4",
          "At same T: ΔvapH=44 · Add 2×44=88 kJ/mol · Gas-water endpoint:−802",
          "Vapor endpoint has higher H · Less exothermic by88 · Do not mix temperatures"
        ],
        "board": {
          "heading": "Changing product water phase changes combustion enthalpy",
          "columns": [
            "Given / state",
            "Calculation",
            "Interpretation"
          ],
          "rows": [
            [
              "CH4 gives 2 H2O",
              "Liquid-water endpoint:−890",
              "Units: kJ/mol CH4"
            ],
            [
              "At same T: ΔvapH=44",
              "Add 2×44=88 kJ/mol",
              "Gas-water endpoint:−802"
            ],
            [
              "Vapor endpoint has higher H",
              "Less exothermic by88",
              "Do not mix temperatures"
            ]
          ]
        }
      },
      {
        "title": "Maximum useful work needs a sign convention and fixed conditions",
        "formula": "At fixed T,p: wnon-PV,on,rev=ΔG; maximum useful work delivered=−ΔG for ΔG<0",
        "script": "Gibbs energy connects a process to a limit on useful work when temperature and pressure are held fixed. Use the chemistry sign convention in which work done on the system is positive. For a reversible process between specified states at fixed temperature and pressure, the nonexpansion work done on the system equals its Gibbs energy change. If that change is minus forty kilojoules, the maximum useful work delivered to the surroundings has positive magnitude forty kilojoules. The work on the system is negative forty; these are two descriptions with opposite sign conventions, not contradictory answers. Pressure volume displacement work is excluded from this useful nonexpansion work limit. Actual irreversible operation delivers less useful work for the same specified overall state change. A device delivering twenty five kilojoules in this example falls below the forty kilojoule limit; it does not violate energy conservation because heat and other energy transfers also enter the full balance. Do not substitute enthalpy for Gibbs energy or use a standard reaction value for an arbitrary nonstandard finite transformation. Identify the actual states, the environmental constraints and whether the requested answer is work on the system or work delivered.",
        "points": [
          "Fixed T,p; specified states · Reversible non-PV work on = ΔG · Pressure-volume work excluded",
          "ΔG=−40 kJ · Maximum delivered magnitude40 · Work on system=−40",
          "Irreversible delivered work25 · Below the40 kJ limit · Not all enthalpy becomes useful work"
        ],
        "board": {
          "heading": "Maximum useful work needs a sign convention and fixed conditions",
          "columns": [
            "Given / state",
            "Calculation",
            "Interpretation"
          ],
          "rows": [
            [
              "Fixed T,p; specified states",
              "Reversible non-PV work on = ΔG",
              "Pressure-volume work excluded"
            ],
            [
              "ΔG=−40 kJ",
              "Maximum delivered magnitude40",
              "Work on system=−40"
            ],
            [
              "Irreversible delivered work25",
              "Below the40 kJ limit",
              "Not all enthalpy becomes useful work"
            ]
          ]
        }
      },
      {
        "title": "A melting reactant adds a discontinuity to a temperature correction",
        "formula": "ΔH400=ΔH300+∫300^350ΔCp,s dT−ΔfusH(A)+∫350^400ΔCp,l dT",
        "script": "A reaction enthalpy temperature correction must follow the actual phases. Consider an illustrative one to one conversion of A into B at a fixed pressure. At three hundred kelvin both substances are solids and the reaction enthalpy is twenty kilojoules per mole. A melts at three hundred fifty kelvin with fusion enthalpy five kilojoules per mole, while B remains solid to four hundred kelvin. Use constant molar heat capacities thirty for solid A, fifty for liquid A and forty for solid B, all in joules per mole kelvin. From three hundred to three hundred fifty, products minus reactants gives plus ten joules per mole kelvin, raising the reaction enthalpy by half a kilojoule. Melting raises the reactant enthalpy by five kilojoules, so the reaction enthalpy drops by five, not rises. Above the transition, the heat capacity difference is minus ten, giving another negative half kilojoule. The final reaction enthalpy for liquid A becoming solid B at four hundred kelvin is fifteen kilojoules per mole. A single heat capacity integral that omits fusion cannot connect these endpoints. This supporting piecewise model assumes no other transition or temperature dependence.",
        "points": [
          "300→350 K; both solids · ΔCp=40−30=+10 J/mol K · ΔH:20→20.5 kJ/mol",
          "A melts at350 K · Reactant H rises by5 · Reaction ΔH drops to15.5",
          "350→400 K; A liquid · ΔCp=40−50=−10 · Final ΔH=15 kJ/mol"
        ],
        "board": {
          "heading": "A melting reactant adds a discontinuity to a temperature correction",
          "columns": [
            "Given / state",
            "Calculation",
            "Interpretation"
          ],
          "rows": [
            [
              "300→350 K; both solids",
              "ΔCp=40−30=+10 J/mol K",
              "ΔH:20→20.5 kJ/mol"
            ],
            [
              "A melts at350 K",
              "Reactant H rises by5",
              "Reaction ΔH drops to15.5"
            ],
            [
              "350→400 K; A liquid",
              "ΔCp=40−50=−10",
              "Final ΔH=15 kJ/mol"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Matched isomer combustion enthalpies are A:−3000 and B:−2980 kJ/mol. ΔH for A→B is:",
        "options": [
          "−20 kJ/mol",
          "+20 kJ/mol",
          "−5980 kJ/mol",
          "0"
        ],
        "answer": 0,
        "explanation": "Burn A and reverse B combustion:−3000−(−2980)=−20 kJ/mol."
      },
      {
        "question": "What follows from that negative isomerization enthalpy alone?",
        "options": [
          "B must form instantly",
          "B is lower in enthalpy in the stated phases; Gibbs preference needs more data",
          "All entropy changes vanish",
          "Equilibrium must contain only B"
        ],
        "answer": 1,
        "explanation": "Enthalpy is not Gibbs energy or activation energy; T and entropy are still needed."
      },
      {
        "question": "Methane combustion to2H2O(l) has ΔH=−890 kJ/mol. At the same T, ΔvapH(H2O)=44 kJ/mol. The gas-water endpoint has ΔH:",
        "options": [
          "−934 kJ/mol",
          "−978 kJ/mol",
          "−802 kJ/mol",
          "+802 kJ/mol"
        ],
        "answer": 2,
        "explanation": "Add2×44=88 to−890, because vapor products have higher enthalpy."
      },
      {
        "question": "The phase-correction multiplier2 in that methane example counts:",
        "options": [
          "Hydrogen atoms per water",
          "All reactant gas moles",
          "Carbon dioxide atoms",
          "Moles of water produced per written methane reaction"
        ],
        "answer": 3,
        "explanation": "Each of the two product water moles is vaporized once."
      },
      {
        "question": "For a specified fixed-T,p process with ΔG=−40 kJ, maximum reversible useful work delivered has magnitude:",
        "options": [
          "40 kJ",
          "−40 kJ as a positive magnitude",
          "25 kJ necessarily",
          "Equal to ΔH in every process"
        ],
        "answer": 0,
        "explanation": "Useful work delivered has magnitude−ΔG=40 kJ; non-PV work on the system is−40 kJ."
      },
      {
        "question": "Which work is excluded from this Gibbs useful-work limit?",
        "options": [
          "Electrical work",
          "Pressure–volume displacement work",
          "Every kind of work",
          "Only work expressed in joules"
        ],
        "answer": 1,
        "explanation": "At fixed T,p, ΔG bounds nonexpansion work; it is not a total-work formula including PV work."
      },
      {
        "question": "In the supplied phase-crossing model, ΔH300=20 kJ/mol, corrections are+.5,−5 and−.5 kJ/mol. ΔH400 is:",
        "options": [
          "25 kJ/mol",
          "20 kJ/mol",
          "15 kJ/mol",
          "14 kJ/mol"
        ],
        "answer": 2,
        "explanation": "20+.5−5−.5=15 kJ/mol, for liquid A becoming solid B at400 K."
      },
      {
        "question": "Why does melting only the reactant lower the reaction enthalpy at the transition?",
        "options": [
          "Fusion removes all energy",
          "Reaction H is reactants minus products",
          "The product must melt too",
          "Reactant enthalpy rises, and ΔrH is products minus reactants"
        ],
        "answer": 3,
        "explanation": "A positive fusion enthalpy raises the reactant term that is subtracted."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: enthalpy, state labels and Hess cycles",
        "url": "https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy"
      },
      {
        "title": "OpenStax: Gibbs energy and useful work",
        "url": "https://openstax.org/books/chemistry-2e/pages/16-4-free-energy"
      },
      {
        "title": "Shepherd supplement: molar reaction enthalpy and Kirchhoff equation",
        "url": "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Chemical_Thermodynamics_(Supplement_to_Shepherd_et_al.)/18%3A_Fundamental_13_-_Composition_Changes/18.04%3A_Molar_Reaction_Enthalpy"
      }
    ]
  },
  "solutions": {
    "chapters": [
      {
        "title": "Supporting dew-point calculation starts with vapour composition",
        "formula": "1/Pdew=yA/PA*+yB/PB*; xi=yiPdew/Pi* for an ideal binary system",
        "script": "A liquid composition and a vapor composition are different inputs to a phase equilibrium calculation. This supporting binary example assumes ideal liquid behavior and ideal vapor with no other gas; it excludes nonideal mixtures and azeotropes. At a fixed temperature, component A has a pure vapor pressure of one hundred kilopascals, while component B has forty kilopascals. If a liquid has equal mole fractions of the two components, Raoult's law gives a bubble pressure of seventy kilopascals. The first vapor bubble is richer in the more volatile component A, with mole fraction five sevenths. Now start instead with a vapor having equal mole fractions. To find the pressure where its first liquid drop appears, write each liquid fraction as its vapor fraction times total pressure divided by its pure vapor pressure. The two liquid fractions must sum to one. The reciprocal dew pressure is therefore one half over one hundred plus one half over forty, giving pressure four hundred sevenths, about fifty seven point one four kilopascals. The first drop has A fraction two sevenths and B fraction five sevenths. Equal vapor fractions do not mean equal liquid fractions.",
        "points": [
          "PA*=100; PB*=40 kPa · Equal liquid: Pbubble=70 · First vapour yA=5/7",
          "Equal vapour yA=yB=.5 · 1/P=.5/100+.5/40 · Pdew=400/7≈57.14 kPa",
          "First liquid xA=yAP/PA* · xA=2/7; xB=5/7 · Liquid and vapour differ"
        ],
        "board": {
          "heading": "Supporting dew-point calculation starts with vapour composition",
          "columns": [
            "Given / state",
            "Calculation",
            "Interpretation"
          ],
          "rows": [
            [
              "PA*=100; PB*=40 kPa",
              "Equal liquid: Pbubble=70",
              "First vapour yA=5/7"
            ],
            [
              "Equal vapour yA=yB=.5",
              "1/P=.5/100+.5/40",
              "Pdew=400/7≈57.14 kPa"
            ],
            [
              "First liquid xA=yAP/PA*",
              "xA=2/7; xB=5/7",
              "Liquid and vapour differ"
            ]
          ]
        }
      },
      {
        "title": "Mass and particle amount can resolve a two-solute mixture",
        "formula": "nU+nG=πV/(RT); 60nU+180nG=total solute mass in grams",
        "script": "A colligative observation usually measures total dissolved particle amount rather than identifying each solute. A second independent mass constraint can make a two component composition problem solvable. Use an ideal dilute mixture containing only urea and glucose, neither dissociating nor associating. Assign molar masses sixty and one hundred eighty grams per mole. Suppose the total solute mass is four point eight zero grams and an osmotic measurement gives total particle amount zero point zero four zero zero mole through pressure times solution volume divided by R T. Let urea and glucose amounts be u and g. Particle counting gives u plus g equals zero point zero four zero zero. Mass gives sixty u plus one hundred eighty g equals four point eight zero. Subtract sixty times the particle equation from the mass equation. The result is one hundred twenty times the glucose amount equals two point four zero grams, so glucose amount is zero point zero two zero zero mole and the urea amount is the same. Their masses are one point two zero and three point six zero grams. A second colligative measurement proportional to the same particle amount would only cross check that constraint, not automatically add independent chemical identification.",
        "points": [
          "Urea60; glucose180 g/mol · nU+nG=.0400 mol · Total mass4.80 g",
          "Subtract60×particle equation · 120nG=2.40 g · nG=nU=.0200 mol",
          "Masses1.20 and3.60 g · Need independent constraints · Another particle count may be redundant"
        ],
        "board": {
          "heading": "Mass and particle amount can resolve a two-solute mixture",
          "columns": [
            "Given / state",
            "Calculation",
            "Interpretation"
          ],
          "rows": [
            [
              "Urea60; glucose180 g/mol",
              "nU+nG=.0400 mol",
              "Total mass4.80 g"
            ],
            [
              "Subtract60×particle equation",
              "120nG=2.40 g",
              "nG=nU=.0200 mol"
            ],
            [
              "Masses1.20 and3.60 g",
              "Need independent constraints",
              "Another particle count may be redundant"
            ]
          ]
        }
      },
      {
        "title": "Closed-vessel gas dissolution couples Henry law to conservation",
        "formula": "Dilute model: ntotal=P[Vgas/(RT)+nsolvent/kH], using P=kH x and x≈ndiss/nsolvent",
        "script": "Henry's law relates dissolved gas to its equilibrium partial pressure, but a sealed vessel does not provide an unlimited gas reservoir. The pressure must also satisfy conservation of the gas between headspace and liquid. Use a supplied dilute model for one nonreacting gas, neglecting solvent vapor and changes in liquid or headspace volume. Henry's convention is pressure equals k H times dissolved mole fraction. Approximate that mole fraction by dissolved gas moles divided by solvent moles. Let solvent amount be ten moles, k H one thousand bar, headspace volume one liter, and R T twenty five liter bar per mole. The gas phase contains pressure times one over twenty five moles, while the dissolved amount is pressure times ten over one thousand moles. Together these are zero point zero five times pressure in bar. With total gas zero point zero five zero mole, pressure is approximately one bar, partitioned into zero point zero four zero mole in the headspace and zero point zero one zero mole dissolved. The dissolved fraction is twenty percent in this stated approximation. Henry constants and the gas volume term have different roles. Open reservoir reasoning cannot replace the sealed vessel balance.",
        "points": [
          "nsolvent10 mol; kH1000 bar · Vgas1 L; RT25 L bar/mol · ntotal=.050 mol",
          "ngas=.040P; ndiss≈.010P · Conservation:.050=.050P · P≈1 bar",
          "ngas≈.040; ndiss≈.010 mol · 20% of gas dissolved · Dilute approximation; sealed vessel"
        ],
        "board": {
          "heading": "Closed-vessel gas dissolution couples Henry law to conservation",
          "columns": [
            "Given / state",
            "Calculation",
            "Interpretation"
          ],
          "rows": [
            [
              "nsolvent10 mol; kH1000 bar",
              "Vgas1 L; RT25 L bar/mol",
              "ntotal=.050 mol"
            ],
            [
              "ngas=.040P; ndiss≈.010P",
              "Conservation:.050=.050P",
              "P≈1 bar"
            ],
            [
              "ngas≈.040; ndiss≈.010 mol",
              "20% of gas dissolved",
              "Dilute approximation; sealed vessel"
            ]
          ]
        }
      },
      {
        "title": "Solute crystals do not count as dissolved colligative particles",
        "formula": "Use dissolved solute mass after equilibration; anhydrous solute precipitation leaves solvent mass unchanged",
        "script": "A colligative formula must use particles actually dissolved in the liquid, not every gram originally placed in the vessel. Consider a stipulated equilibrium endpoint containing one hundred grams of liquid water and twenty grams total of an anhydrous nonvolatile nonelectrolyte. Its molar mass is one hundred grams per mole, and the supplied solubility at the endpoint is ten grams per one hundred grams of water. Assume no evaporation, no ice, no hydrate formation and no other reaction. Only ten grams can remain dissolved at this equilibrium; the other ten grams are solute crystals. The dissolved amount is zero point one zero mole in zero point one zero kilogram of solvent, so the liquid molality is one point zero, rather than two point zero from counting all twenty grams. If a problem applies an ideal freezing depression model to this stipulated liquid composition with cryoscopic constant one point eight six, the predicted depression is one point eight six kelvin. That calculation is not a complete cooling path: solubility can change with temperature and ice formation would change the solvent inventory. State which solid phase has separated before updating the denominator or counting particles.",
        "points": [
          "100 g water;20 g total solute · Solubility10 g/100 g water · 10 g dissolved;10 g crystals",
          "Msolute=100 g/mol · ndiss=.10 mol; water=.10 kg · Liquid molality1.0 m",
          "Ideal Kf=1.86 at this composition · ΔTf=1.86 K in model · No ice or hydrate in supplied endpoint"
        ],
        "board": {
          "heading": "Solute crystals do not count as dissolved colligative particles",
          "columns": [
            "Given / state",
            "Calculation",
            "Interpretation"
          ],
          "rows": [
            [
              "100 g water;20 g total solute",
              "Solubility10 g/100 g water",
              "10 g dissolved;10 g crystals"
            ],
            [
              "Msolute=100 g/mol",
              "ndiss=.10 mol; water=.10 kg",
              "Liquid molality1.0 m"
            ],
            [
              "Ideal Kf=1.86 at this composition",
              "ΔTf=1.86 K in model",
              "No ice or hydrate in supplied endpoint"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "For ideal PA*=100,PB*=40 kPa and equal vapor fractions, the dew pressure is:",
        "options": [
          "70 kPa",
          "400/7 kPa",
          "100 kPa",
          "40 kPa"
        ],
        "answer": 1,
        "explanation": "1/P=.5/100+.5/40=.0175 kPa−1, so P=400/7≈57.14 kPa."
      },
      {
        "question": "The first liquid drop in that equal-vapor example has xA:",
        "options": [
          "1/2",
          "5/7",
          "2/7",
          "1"
        ],
        "answer": 2,
        "explanation": "Raoult and Dalton give xA=yAP/PA*=.5×(400/7)/100=2/7 for the first liquid drop, not the vapor."
      },
      {
        "question": "An ideal urea/glucose mixture has4.80 g total mass and.0400 mol total particles, with molar masses60 and180. The glucose amount is:",
        "options": [
          ".0400 mol",
          ".0100 mol",
          ".0300 mol",
          ".0200 mol"
        ],
        "answer": 3,
        "explanation": "Subtract60(nU+nG)=2.40 g from the mass equation:120nG=2.40 g."
      },
      {
        "question": "Which extra datum independently resolves two known solutes after their total particle amount is known?",
        "options": [
          "Their total mass when their known molar masses differ",
          "Any second number proportional to the same particle amount",
          "The color of the container",
          "A repeated reading of identical information"
        ],
        "answer": 0,
        "explanation": "Mass and particle amount supply independent equations when the molar masses differ."
      },
      {
        "question": "In the supplied closed-gas dilute model,.050 mol=P(.040+.010) mol/bar. P is:",
        "options": [
          "5 bar",
          "1 bar",
          ".050 bar",
          "25 bar"
        ],
        "answer": 1,
        "explanation": "The gas and dissolved inventories add; P=.050/.050=1 bar in the stipulated approximation."
      },
      {
        "question": "The approximate dissolved fraction of total gas in that model is:",
        "options": [
          "80%",
          "1%",
          "20%",
          "100%"
        ],
        "answer": 2,
        "explanation": ".010 mol dissolved out of.050 mol total gives20%; the remainder is in the headspace."
      },
      {
        "question": "20 g total solute is equilibrated with100 g water, but only10 g is soluble at the stated endpoint. Msolute=100 g/mol. Liquid molality is:",
        "options": [
          "2.0 m",
          ".10 m",
          "10 m",
          "1.0 m"
        ],
        "answer": 3,
        "explanation": "Only the dissolved10 g counts:10/100=.10 mol, then.10/.100=1.0 mol/kg."
      },
      {
        "question": "Which separated solid leaves solvent mass unchanged in the stipulated no-evaporation model?",
        "options": [
          "Anhydrous solute crystals",
          "Pure ice",
          "A hydrate incorporating solvent",
          "All solids under every condition"
        ],
        "answer": 0,
        "explanation": "Anhydrous solute crystals remove solute only; ice or hydrate formation changes the liquid solvent inventory."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: colligative properties and ideal vapor pressure",
        "url": "https://openstax.org/books/chemistry-2e/pages/11-4-colligative-properties"
      },
      {
        "title": "OpenStax: solubility and Henry law",
        "url": "https://openstax.org/books/chemistry-2e/pages/11-3-solubility"
      },
      {
        "title": "Kitchin Research Group: ideal bubble and dew calculations",
        "url": "https://kitchingroup.cheme.cmu.edu/differentiable-flowsheets/docs/thermodynamics.html"
      }
    ]
  }
} as const;
