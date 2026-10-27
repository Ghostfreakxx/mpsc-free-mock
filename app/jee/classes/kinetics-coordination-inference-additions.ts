// Authored by scripts/expand-kinetics-coordination-inference.mjs.
export const kineticsCoordinationInferenceAdditions = {
  "chemical-kinetics": {
    "base": 22,
    "quizBase": 42,
    "chapters": [
      {
        "title": "A ten-kelvin rate multiplier depends on the starting temperature",
        "formula": "ln(k₂/k₁)=(Ea/R)(1/T₁−1/T₂); k₃₂₀/k₃₁₀=2^(300/320)≈1.915",
        "script": "The statement that a reaction doubles its rate constant for every ten degree rise is an approximate shortcut, not a universal Arrhenius identity. Suppose the rate constant doubles between three hundred and three hundred ten kelvin. Assume one unchanged mechanism, a temperature independent activation energy and a constant pre exponential factor across the small range. The logarithm of the rate constant ratio equals activation energy over the gas constant times the difference of reciprocal absolute temperatures. Using the gas constant eight point three one four gives an activation energy about fifty three point six kilojoules per mole. For the next interval, three hundred ten to three hundred twenty kelvin, the reciprocal temperature difference is smaller. Divide that new difference by the first difference to obtain three hundred over three hundred twenty. The next multiplier is therefore two raised to that ratio, approximately one point nine one five, rather than exactly two. This calculation compares rate constants. Actual reaction rates also depend on concentrations through the experimental rate law. Use kelvin throughout, preserve the sign, and do not extrapolate a fitted activation energy across a mechanism change.",
        "points": [
          "k310/k300=2; constant Ea and prefactor · Ea=R ln2/(1/300−1/310) · Ea≈53.6 kJ/mol",
          "Compare 310→320 with 300→310 · Reciprocal-T difference ratio=300/320 · k320/k310≈1.915",
          "Rate constants versus measured rates · Concentrations may also change · No universal ten-degree doubling rule"
        ],
        "board": {
          "heading": "A ten-kelvin rate multiplier depends on the starting temperature",
          "columns": [
            "Given / model",
            "Reasoning",
            "Result / boundary"
          ],
          "rows": [
            [
              "k310/k300=2; constant Ea and prefactor",
              "Ea=R ln2/(1/300−1/310)",
              "Ea≈53.6 kJ/mol"
            ],
            [
              "Compare 310→320 with 300→310",
              "Reciprocal-T difference ratio=300/320",
              "k320/k310≈1.915"
            ],
            [
              "Rate constants versus measured rates",
              "Concentrations may also change",
              "No universal ten-degree doubling rule"
            ]
          ]
        }
      },
      {
        "title": "An inert gas changes the total-pressure bookkeeping",
        "formula": "A→2B; pA=2pA,0+pI−Ptotal at fixed T,V; k=ln(pA,0/pA)/t for first order",
        "script": "A total pressure measurement contains every gas, including an inert gas that does not react. Consider a closed rigid vessel at constant temperature. Initially reactant A has partial pressure eighty kilopascals and an inert gas has forty kilopascals. There is initially no product. The only reaction is one A forming two B. Let the pressure equivalent of the reacted amount be x. Reactant pressure becomes eighty minus x, product pressure becomes twice x, and inert pressure stays forty. Total pressure is therefore one hundred twenty plus x. At a measured total pressure of one hundred sixty kilopascals, x is forty, leaving reactant pressure forty and product pressure eighty. If disappearance is first order and this reading occurs after one hundred seconds, the rate constant is the natural logarithm of two divided by one hundred, about zero point zero zero six nine three per second. The correct reconstruction uses twice the initial reactant partial pressure plus inert pressure minus total pressure. Twice the initial total pressure minus the current total pressure would give the wrong result. These equations require ideal gases, fixed temperature and volume, and the supplied single reaction.",
        "points": [
          "Initial pA=80; pI=40 kPa; no B · Ptotal,0=120 kPa; A→2B · pI constant at fixed T,V",
          "Ptotal=160 kPa gives x=40 kPa · pA=40; pB=80; pI=40 · pA=2pA,0+pI−Ptotal",
          "At t=100 s; first-order disappearance · k=ln(80/40)/100 · k≈.00693 s⁻¹"
        ],
        "board": {
          "heading": "An inert gas changes the total-pressure bookkeeping",
          "columns": [
            "Given / model",
            "Reasoning",
            "Result / boundary"
          ],
          "rows": [
            [
              "Initial pA=80; pI=40 kPa; no B",
              "Ptotal,0=120 kPa; A→2B",
              "pI constant at fixed T,V"
            ],
            [
              "Ptotal=160 kPa gives x=40 kPa",
              "pA=40; pB=80; pI=40",
              "pA=2pA,0+pI−Ptotal"
            ],
            [
              "At t=100 s; first-order disappearance",
              "k=ln(80/40)/100",
              "k≈.00693 s⁻¹"
            ]
          ]
        }
      },
      {
        "title": "Supporting inference: a measured fraction gives a range of rate constants",
        "formula": "f∈[.48,.52] at 100 s ⇒ k=−ln(f)/100∈[.006539,.007340] s⁻¹",
        "script": "A calculated rate constant inherits the uncertainty of the measurement used to obtain it. Consider a supporting inference exercise under an already accepted irreversible first order model, at fixed temperature and volume. After one hundred seconds, a calibrated experiment bounds the fraction remaining between zero point four eight and zero point five two. Treat these as supplied bounds, not as a statistical confidence interval, and neglect timing error. The rate constant equals negative natural logarithm of the fraction divided by time. Because the logarithm increases with its argument, the larger remaining fraction gives the smaller disappearance constant. The lower constant is negative logarithm of zero point five two divided by one hundred, about zero point zero zero six five three nine per second. The upper constant uses zero point four eight, about zero point zero zero seven three four zero per second. Half life is natural logarithm of two divided by the constant, so its bounds run in the opposite order: approximately ninety four point four to one hundred six seconds. A midpoint measurement would suggest one hundred seconds, but cannot erase the supplied interval. One bounded reading also does not establish the reaction order by itself.",
        "points": [
          "At 100 s, measured remaining fraction .48–.52 · Assume first order; time error neglected · Bounds are not a confidence claim",
          "k=−ln(f)/100 decreases as f increases · kmin from .52; kmax from .48 · .006539–.007340 s⁻¹",
          "t½=ln2/k decreases as k increases · t½,min from kmax · About 94.4–106 s"
        ],
        "board": {
          "heading": "Supporting inference: a measured fraction gives a range of rate constants",
          "columns": [
            "Given / model",
            "Reasoning",
            "Result / boundary"
          ],
          "rows": [
            [
              "At 100 s, measured remaining fraction .48–.52",
              "Assume first order; time error neglected",
              "Bounds are not a confidence claim"
            ],
            [
              "k=−ln(f)/100 decreases as f increases",
              "kmin from .52; kmax from .48",
              ".006539–.007340 s⁻¹"
            ],
            [
              "t½=ln2/k decreases as k increases",
              "t½,min from kmax",
              "About 94.4–106 s"
            ]
          ]
        }
      },
      {
        "title": "Supporting mechanism: cancel species before deriving an apparent law",
        "formula": "Fast A+B⇌I; slow I+C→P+B; net A+C→P; v=k₂Kc[A][B][C] under pre-equilibrium",
        "script": "A proposed mechanism can contain species absent from the net reaction, yet those species can affect its rate. Use a hypothetical supporting mechanism with a fast reversible association of A and B to form intermediate I, followed by a slow elementary reaction of I with C to give P and regenerate B. Adding the forward steps cancels I and B, leaving A plus C forming P. Intermediate I is produced first and consumed later. Catalyst B is consumed first and regenerated later. If the fast first step remains close to equilibrium while the slow step consumes I, its concentration is the concentration equilibrium constant times free A times free B. The slow elementary step has rate constant k two times I times C. Substitution gives k two times the equilibrium constant times free A, free B and C: an apparent third order law in this specified regime. The two elementary forward steps are each bimolecular; there is no three body elementary collision implied by the overall third order law. Free B must not automatically be replaced by total catalyst when appreciable B is bound in I. This conditional derivation illustrates reasoning, not proof that a real reaction follows this mechanism.",
        "points": [
          "Fast A+B⇌I; slow I+C→P+B · Cancel I and B in the forward sum · Net A+C→P; B is regenerated",
          "Pre-equilibrium: [I]=Kc[A][B] · v=k₂[I][C] · v=k₂Kc[A][B][C]",
          "Free [B], not automatically total B · Both forward elementary steps bimolecular · Apparent order 3 is not molecularity 3"
        ],
        "board": {
          "heading": "Supporting mechanism: cancel species before deriving an apparent law",
          "columns": [
            "Given / model",
            "Reasoning",
            "Result / boundary"
          ],
          "rows": [
            [
              "Fast A+B⇌I; slow I+C→P+B",
              "Cancel I and B in the forward sum",
              "Net A+C→P; B is regenerated"
            ],
            [
              "Pre-equilibrium: [I]=Kc[A][B]",
              "v=k₂[I][C]",
              "v=k₂Kc[A][B][C]"
            ],
            [
              "Free [B], not automatically total B",
              "Both forward elementary steps bimolecular",
              "Apparent order 3 is not molecularity 3"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "If k310/k300=2 with constant Arrhenius Ea and prefactor, the predicted k320/k310 is closest to:",
        "options": [
          "1.915",
          "2.000 exactly",
          "4.000",
          "0.500"
        ],
        "answer": 0,
        "explanation": "The ratio of reciprocal-temperature differences is 300/320; the multiplier is 2^(300/320)≈1.915."
      },
      {
        "question": "The Arrhenius temperatures in this comparison must be entered as:",
        "options": [
          "Degrees Celsius without conversion",
          "Absolute temperatures in kelvin",
          "Temperature differences alone",
          "Any scale because the formula contains a ratio"
        ],
        "answer": 1,
        "explanation": "Reciprocal absolute temperatures appear; Celsius values cannot be substituted directly."
      },
      {
        "question": "For A→2B at fixed T,V, initial pA=80 kPa, inert pI=40 kPa and no B. At Ptotal=160 kPa, pA is:",
        "options": [
          "80 kPa",
          "120 kPa",
          "40 kPa",
          "0 kPa"
        ],
        "answer": 2,
        "explanation": "Total pressure rises from 120 by x=40; pA=80−40=40 kPa."
      },
      {
        "question": "If that reading is at 100 s and A disappearance is first order, k is approximately:",
        "options": [
          ".400 s⁻¹",
          ".01386 s⁻¹",
          ".00100 s⁻¹",
          ".00693 s⁻¹"
        ],
        "answer": 3,
        "explanation": "k=ln(80/40)/100=ln2/100≈.00693 s⁻¹; use reactant partial pressure."
      },
      {
        "question": "For fixed t and first-order k=−ln(f)/t, which fraction gives the smallest k within f=.48–.52?",
        "options": [
          ".52",
          ".50",
          ".48",
          "Both endpoints give the same k"
        ],
        "answer": 0,
        "explanation": "More reactant remaining after the same time means a smaller disappearance constant."
      },
      {
        "question": "The corresponding first-order half-life range for f=.48–.52 at 100 s is approximately:",
        "options": [
          "48–52 s",
          "94.4–106 s",
          "6.54–7.34 s",
          "Exactly 100 s without uncertainty"
        ],
        "answer": 1,
        "explanation": "Use ln2/kmax for the lower half-life and ln2/kmin for the upper half-life."
      },
      {
        "question": "For fast A+B⇌I followed by slow I+C→P+B, the catalyst and intermediate respectively are:",
        "options": [
          "I and B",
          "A and P",
          "B and I",
          "C and A"
        ],
        "answer": 2,
        "explanation": "B is consumed then regenerated; I is formed then consumed. Both cancel from the net forward reaction."
      },
      {
        "question": "Under the stated pre-equilibrium mechanism, the apparent law is:",
        "options": [
          "k₂[A][C] regardless of B",
          "k₂[I] with no C",
          "k₂Kc[A][C]/[B]",
          "k₂Kc[A][B][C] using free concentrations"
        ],
        "answer": 3,
        "explanation": "[I]=Kc[A][B] and v=k₂[I][C]. Its third apparent order does not make an elementary step termolecular."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: Arrhenius equation and collision theory",
        "url": "https://openstax.org/books/chemistry-2e/pages/12-5-collision-theory"
      },
      {
        "title": "OpenStax: integrated first-order rate laws",
        "url": "https://openstax.org/books/chemistry-2e/pages/12-4-integrated-rate-laws"
      },
      {
        "title": "OpenStax: ideal-gas partial pressures",
        "url": "https://openstax.org/books/chemistry-2e/pages/9-3-stoichiometry-of-gaseous-substances-mixtures-and-reactions"
      },
      {
        "title": "OpenStax: elementary steps and pre-equilibrium mechanisms",
        "url": "https://openstax.org/books/chemistry-2e/pages/12-6-reaction-mechanisms"
      }
    ]
  },
  "coordination-compounds": {
    "base": 22,
    "quizBase": 42,
    "chapters": [
      {
        "title": "Name mixed ligands after solving the charge ledger",
        "formula": "[Cr(NH₃)₄(H₂O)Cl]Cl₂: tetraammineaquachloridochromium(III) chloride; K₂[PtCl₆]: potassium hexachloridoplatinate(IV)",
        "script": "Mixed ligand names require two separate decisions: charge accounting and alphabetical ligand order. Consider a salt written as a chromium complex containing four ammonia ligands, one water and one coordinated chloride, with two chloride counterions outside the brackets. The complex has charge plus two. Ammonia and water are neutral, while the bound chloride contributes minus one, so chromium is plus three. There are six donor atoms and coordination number six. For the additive name, use ammine with two m letters for ammonia, aqua for water, and chlorido for coordinated chloride. Alphabetize the ligand names without using the numerical prefix tetra to choose their order. The complex cation is tetraammineaquachloridochromium three, with three written as a Roman numeral, followed by chloride for the counterion. Compare potassium hexachloridoplatinate four: two potassium ions imply a complex charge minus two; six chlorides then require platinum plus four. The anionic complex uses the metal ending ate, here platinate. Oxidation state and complex charge are different quantities. This name determines composition but does not by itself specify every possible geometrical arrangement of the mixed ligand complex.",
        "points": [
          "[Cr(NH₃)₄(H₂O)Cl]Cl₂ · Complex +2; Cr +3; six donors · ammine → aqua → chlorido",
          "Ignore tetra when alphabetizing · tetraammineaquachloridochromium(III) · Then chloride counterion",
          "K₂[PtCl₆]: complex −2 · Pt−6=−2 ⇒ Pt +4 · potassium hexachloridoplatinate(IV)"
        ],
        "board": {
          "heading": "Name mixed ligands after solving the charge ledger",
          "columns": [
            "Given / model",
            "Reasoning",
            "Result / boundary"
          ],
          "rows": [
            [
              "[Cr(NH₃)₄(H₂O)Cl]Cl₂",
              "Complex +2; Cr +3; six donors",
              "ammine → aqua → chlorido"
            ],
            [
              "Ignore tetra when alphabetizing",
              "tetraammineaquachloridochromium(III)",
              "Then chloride counterion"
            ],
            [
              "K₂[PtCl₆]: complex −2",
              "Pt−6=−2 ⇒ Pt +4",
              "potassium hexachloridoplatinate(IV)"
            ]
          ]
        }
      },
      {
        "title": "A d8 count alone does not determine geometry or magnetism",
        "formula": "[NiCl₄]²⁻: tetrahedral d8, 2 unpaired; [Ni(CN)₄]²⁻: square-planar d8, 0 unpaired in the standard model",
        "script": "A d electron count is a starting point, not a complete geometry prediction. Compare the usual introductory descriptions of tetrachloridonickelate two minus and tetracyanidonickelate two minus. In each complex, four ligands each carry charge minus one and the overall charge is minus two. Nickel is therefore plus two and has a d eight count in both cases. The chloride complex is normally described as tetrahedral with two unpaired electrons, whereas the cyanide complex is square planar with all electrons paired. Their spin only moments are consequently square root of eight, about two point eight three Bohr magnetons, and zero respectively. These are model values; measured moments can contain additional contributions. For a separate square planar platinum two complex with two ammonia and two chloride ligands, cis and trans arrangements are distinguishable because adjacent and opposite positions are inequivalent. An ideal tetrahedral complex with two ligands of each type has no corresponding cis and trans pair, since all vertex pairs are equivalent. Geometry must therefore be established before counting this kind of geometrical isomerism. Do not infer identical magnetism or identical isomer counts merely from the common d eight count.",
        "points": [
          "Both [NiCl₄]²⁻ and [Ni(CN)₄]²⁻ · Ni(+2), d8; four donor atoms · Same d count, different splitting",
          "Typical tetrahedral chloride complex · 2 unpaired; μspin-only=√8 · Typical square-planar cyanide: paired",
          "Square-planar MA₂B₂ has cis/trans · Ideal tetrahedral MA₂B₂ has one arrangement · Geometry precedes isomer counting"
        ],
        "board": {
          "heading": "A d8 count alone does not determine geometry or magnetism",
          "columns": [
            "Given / model",
            "Reasoning",
            "Result / boundary"
          ],
          "rows": [
            [
              "Both [NiCl₄]²⁻ and [Ni(CN)₄]²⁻",
              "Ni(+2), d8; four donor atoms",
              "Same d count, different splitting"
            ],
            [
              "Typical tetrahedral chloride complex",
              "2 unpaired; μspin-only=√8",
              "Typical square-planar cyanide: paired"
            ],
            [
              "Square-planar MA₂B₂ has cis/trans",
              "Ideal tetrahedral MA₂B₂ has one arrangement",
              "Geometry precedes isomer counting"
            ]
          ]
        }
      },
      {
        "title": "Octahedral d7 adds one pairing cost when it goes low spin",
        "formula": "HS t₂g⁵eg²: E=−.8Δo+2P, n=3; LS t₂g⁶eg¹: E=−1.8Δo+3P, n=1",
        "script": "The high spin and low spin ledgers must be rebuilt for each electron count. In an ideal octahedral d seven configuration, the high spin filling has five electrons in the lower set and two in the upper set. There are two doubly occupied orbitals and three unpaired electrons. Its crystal field term is negative zero point eight times the octahedral splitting, and its pairing contribution is twice the supplied cost per pair. Low spin has six electrons in the lower set and one in the upper set. It contains three pairs and one unpaired electron. Its energy is negative one point eight times the splitting plus three pairing costs. Subtract high spin from low spin: the difference is pairing cost minus splitting. With supplied splitting two hundred twenty and pairing cost one hundred sixty kilojoules per mole, the low spin model is lower by sixty kilojoules per mole. The corresponding spin only moments are approximately three point eight seven and one point seven three Bohr magnetons. Both forms are paramagnetic in this simple count. These energies use the same spherical barycentre reference and a simplified constant pairing cost; a negative crystal field contribution alone is not the entire energy comparison.",
        "points": [
          "High spin t₂g⁵eg² · 2 pairs; 3 unpaired · EHS=−.8Δo+2P",
          "Low spin t₂g⁶eg¹ · 3 pairs; 1 unpaired · ELS=−1.8Δo+3P",
          "Δo=220; P=160 kJ/mol · ELS−EHS=P−Δo=−60 kJ/mol · μHS≈3.87; μLS≈1.73 μB"
        ],
        "board": {
          "heading": "Octahedral d7 adds one pairing cost when it goes low spin",
          "columns": [
            "Given / model",
            "Reasoning",
            "Result / boundary"
          ],
          "rows": [
            [
              "High spin t₂g⁵eg²",
              "2 pairs; 3 unpaired",
              "EHS=−.8Δo+2P"
            ],
            [
              "Low spin t₂g⁶eg¹",
              "3 pairs; 1 unpaired",
              "ELS=−1.8Δo+3P"
            ],
            [
              "Δo=220; P=160 kJ/mol",
              "ELS−EHS=P−Δo=−60 kJ/mol",
              "μHS≈3.87; μLS≈1.73 μB"
            ]
          ]
        }
      },
      {
        "title": "Supporting analysis: protonation changes a conditional chelation constant",
        "formula": "β′=αY⁴⁻β; [MY]/[M]=β′CU; fbound=β′CU/(1+β′CU) for supplied free-ligand pool CU",
        "script": "A metal formation constant can be large while protonation reduces the ligand fraction available in its binding form. Consider a supporting EDTA model at fixed temperature and buffered pH. Define beta for metal plus fully deprotonated Y four minus forming one metal EDTA complex. Define the uncomplexed ligand pool as the sum of all free protonation forms, excluding ligand already bound to metal. If alpha is the fraction of that pool present as Y four minus, the conditional concentration formation constant is alpha times beta. Use a hypothetical beta of ten to the eight per molar and a supplied free ligand pool of one tenth millimolar. At alpha equal to ten to the minus four, the conditional constant is ten to the four per molar, so bound to free metal ratio is one and half the metal is complexed. At alpha equal to ten to the minus two with the same pool, the ratio becomes one hundred and the bound fraction one hundred over one hundred one. These alpha values are supplied, not assigned to particular pH values. The calculation excludes competing metals, metal hydrolysis and other complexes. Total added EDTA cannot replace the free pool when binding substantially depletes it.",
        "points": [
          "β=10⁸ M⁻¹; free pool CU=10⁻⁴ M · [Y⁴⁻]=αCU; β′=αβ · Pool excludes metal-bound EDTA",
          "α=10⁻⁴ gives β′CU=1 · [MY]/[M]=1 · fbound=1/2",
          "α=10⁻² gives β′CU=100 · fbound=100/101≈.9901 · No hydrolysis, competitors or depletion model"
        ],
        "board": {
          "heading": "Supporting analysis: protonation changes a conditional chelation constant",
          "columns": [
            "Given / model",
            "Reasoning",
            "Result / boundary"
          ],
          "rows": [
            [
              "β=10⁸ M⁻¹; free pool CU=10⁻⁴ M",
              "[Y⁴⁻]=αCU; β′=αβ",
              "Pool excludes metal-bound EDTA"
            ],
            [
              "α=10⁻⁴ gives β′CU=1",
              "[MY]/[M]=1",
              "fbound=1/2"
            ],
            [
              "α=10⁻² gives β′CU=100",
              "fbound=100/101≈.9901",
              "No hydrolysis, competitors or depletion model"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "In [Cr(NH₃)₄(H₂O)Cl]Cl₂, the chromium oxidation state and complex charge are:",
        "options": [
          "+2 and +3",
          "+3 and +2",
          "+1 and +2",
          "+3 and 0"
        ],
        "answer": 1,
        "explanation": "Two outer chlorides require a +2 complex; neutral NH₃/H₂O and one bound Cl− then give Cr(+3)."
      },
      {
        "question": "When ordering the ligands ammine, aqua and chlorido in its additive name, the prefix tetra is:",
        "options": [
          "Used to put ammine last",
          "An oxidation-state label",
          "Ignored for alphabetical ordering",
          "A reason to call water oxido"
        ],
        "answer": 2,
        "explanation": "Alphabetize the ligand names themselves: ammine, aqua, chlorido; tetra states multiplicity."
      },
      {
        "question": "The standard introductory descriptions of [NiCl₄]²⁻ and [Ni(CN)₄]²⁻ respectively are:",
        "options": [
          "Both necessarily tetrahedral and paired",
          "Both octahedral",
          "Square planar with 0, tetrahedral with 2 unpaired",
          "Tetrahedral with 2, square planar with 0 unpaired"
        ],
        "answer": 3,
        "explanation": "Both have Ni(+2), d8, but their usual geometries and orbital fillings differ."
      },
      {
        "question": "Which statement about ideal MA₂B₂ geometry is correct?",
        "options": [
          "Square planar can have cis/trans; tetrahedral has no such pair",
          "Both always have two cis/trans forms",
          "Tetrahedral alone has cis/trans",
          "Neither can have any geometric distinction"
        ],
        "answer": 0,
        "explanation": "Adjacent and opposite positions differ in a square, while all vertex pairs in an ideal tetrahedron are equivalent."
      },
      {
        "question": "For ideal octahedral d7, the high-spin and low-spin unpaired-electron counts respectively are:",
        "options": [
          "5 and 3",
          "3 and 1",
          "2 and 0",
          "4 and 2"
        ],
        "answer": 1,
        "explanation": "HS t2g5eg2 has three unpaired; LS t2g6eg1 has one. Both are paramagnetic in this model."
      },
      {
        "question": "Using the stated d7 ledger, Δo=220 and P=160 kJ/mol gives ELS−EHS:",
        "options": [
          "+60 kJ/mol",
          "−220 kJ/mol",
          "−60 kJ/mol",
          "0"
        ],
        "answer": 2,
        "explanation": "Going low spin gains one Δo of crystal-field stabilization but costs one additional pair: P−Δo=−60."
      },
      {
        "question": "For β=10⁸ M⁻¹, α=10⁻⁴ and supplied uncomplexed ligand pool CU=10⁻⁴ M, the metal fraction bound is:",
        "options": [
          "1",
          "10⁻⁴",
          "1/101",
          "1/2"
        ],
        "answer": 3,
        "explanation": "β′=αβ=10⁴ M⁻¹; β′CU=1; fbound=1/(1+1)."
      },
      {
        "question": "In that conditional formation expression, CU means:",
        "options": [
          "Sum of free ligand protonation forms, excluding metal-bound ligand",
          "Total added EDTA regardless of binding",
          "Only the already bound ligand",
          "Only free Y⁴⁻"
        ],
        "answer": 0,
        "explanation": "Alpha converts the uncomplexed ligand pool CU to [Y4−]. Total added ligand requires an additional mass balance."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: coordination formulas, names and geometrical isomers",
        "url": "https://openstax.org/books/chemistry-2e/pages/19-2-coordination-chemistry-of-transition-metals"
      },
      {
        "title": "OpenStax: crystal-field splitting and magnetic properties",
        "url": "https://openstax.org/books/chemistry-2e/pages/19-3-spectroscopic-and-magnetic-properties-of-coordination-compounds"
      },
      {
        "title": "David Harvey: complexation titrations and conditional formation constants",
        "url": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Analytical_Chemistry_2.1_by_David_Harvey/Analytical_Chemistry_2.1_(Harvey)/09%3A_Titrimetric_Methods/9.03%3A_Complexation_Titrations"
      }
    ]
  }
} as const;
