// Authored by scripts/expand-periodic-coordination-models.mjs.
export const periodicCoordinationModelsAdditions = {
  "periodic-trends": {
    "chapters": [
      {
        "title": "Electron-gain energy and electronegativity describe different comparisons",
        "formula": "X(g)→X+(g)+e−:ionization;X(g)+e−→X−(g):electron gain;electronegativity refers to bonded electron attraction",
        "script": "A periodic property becomes useful only after its process has been defined. First ionization energy concerns removing an electron from an isolated gaseous atom to give a gaseous cation. Electron gain instead adds an electron to an isolated gaseous atom and produces a gaseous anion. Electronegativity describes an atom's attraction for shared electron density in a bond and depends on the scale used. These three ideas are related but are not interchangeable measurements. Suppose a supplied illustrative atom has an ionization enthalpy of positive eight hundred kilojoules per mole and a first electron gain enthalpy of negative three hundred kilojoules per mole. Removing an electron costs energy, while the stated attachment releases energy. A table defining electron affinity as the positive energy released could report positive three hundred for the second process, so its sign convention must be read. Neither energy value is automatically a Pauling electronegativity number. Gas phase atom attachment also does not by itself predict the full energetics of forming an ionic solid or an ion in water. Those processes need additional species and energy terms. Begin with the balanced electronic process, the phase labels and the stated sign convention.",
        "points": [
          "X(g)→X+(g)+e− · Supplied ΔH=+800 kJ/mol · Electron removal",
          "X(g)+e−→X−(g) · Supplied ΔH=−300 kJ/mol · 300 kJ/mol released",
          "Bond electronegativity · Scale-dependent attraction · Not the same gas-phase energy"
        ],
        "board": {
          "heading": "Name the process before comparing a periodic property",
          "columns": [
            "Species / model",
            "Result / inference",
            "Condition / limit"
          ],
          "rows": [
            [
              "X(g)→X+(g)+e−",
              "Supplied ΔH=+800 kJ/mol",
              "Electron removal"
            ],
            [
              "X(g)+e−→X−(g)",
              "Supplied ΔH=−300 kJ/mol",
              "300 kJ/mol released"
            ],
            [
              "Bond electronegativity",
              "Scale-dependent attraction",
              "Not the same gas-phase energy"
            ]
          ]
        }
      },
      {
        "title": "A supplied shielding model estimates attraction rather than measuring atomic radius",
        "formula": "Selected 3s rules:S=.35(same-shell others)+.85(n−1 electrons)+1.00(deeper electrons);Zeff=Z−S",
        "script": "Shielding is not always represented accurately by subtracting the total number of inner electrons from nuclear charge. In a supporting approximate calculation, use explicitly supplied Slater type rules for a selected three s electron. Each other electron in the same three s and three p group contributes zero point three five to shielding. Each electron in the second shell contributes zero point eight five, and each deeper electron contributes one. Neutral sodium has one three s electron outside a neon core. Its shielding estimate is eight times zero point eight five plus two, equal to eight point eight, so its effective nuclear charge estimate is eleven minus eight point eight, or two point two. Neutral magnesium adds one other three s electron and one proton. The shielding estimate becomes nine point one five and the effective charge estimate is two point eight five. The larger attraction estimate is consistent with a qualitative contraction across this pair. It is not a measured atomic charge or a complete many electron wavefunction. An optional radius scaling proportional to nine divided by effective charge would give a ratio near zero point seven seven two, but that model ratio must not be labelled an experimental radius ratio.",
        "points": [
          "Na: Z11;other3s electrons0 · S8.80;Zeff2.20 · 8×.85+2×1.00",
          "Mg: Z12;other3s electrons1 · S9.15;Zeff2.85 · Add .35 shielding and1 proton",
          "Toy r∝9/Zeff · rMg/rNa≈.772 · Not a measured radius ratio"
        ],
        "board": {
          "heading": "The shielding rule is supplied and its result is an estimate",
          "columns": [
            "Species / model",
            "Result / inference",
            "Condition / limit"
          ],
          "rows": [
            [
              "Na: Z11;other3s electrons0",
              "S8.80;Zeff2.20",
              "8×.85+2×1.00"
            ],
            [
              "Mg: Z12;other3s electrons1",
              "S9.15;Zeff2.85",
              "Add .35 shielding and1 proton"
            ],
            [
              "Toy r∝9/Zeff",
              "rMg/rNa≈.772",
              "Not a measured radius ratio"
            ]
          ]
        }
      },
      {
        "title": "Oxoacid comparisons need a matched structural series",
        "formula": "For HClOn:Cl oxidation number=2n−1;selected chlorine oxoacid acidity increases from HClO toward HClO4",
        "script": "A single periodic arrow cannot rank every acid without considering how its acidic hydrogen is bonded. For a selected chlorine oxoacid series, compare hypochlorous acid, chlorous acid, chloric acid and perchloric acid. In these formulas the ionizable hydrogen is bonded through oxygen rather than directly to chlorine. Using hydrogen plus one and ordinary oxygen minus two, the chlorine oxidation numbers are plus one, plus three, plus five and plus seven respectively. The familiar qualitative acidity trend strengthens toward the species with more oxygen in this matched series. Additional oxygen groups alter electron withdrawal and the stabilization of the conjugate base. Oxidation number is a formal ledger correlated with that structural change, not a numerical acid dissociation constant. Counting oxygen atoms across unrelated compounds is not a universal acidity rule. Solvent, actual connectivity and solution conditions still matter, and water can level the apparent behaviour of strong acids. This comparison also differs from hydrogen chloride, hydrogen bromide and hydrogen iodide, whose acidic hydrogen is directly bonded to a halogen. Their trend needs the hydrogen halogen bond and solvation discussed separately. State the family before borrowing its trend.",
        "points": [
          "HClO;HClO2 · Cl+1;Cl+3 · H attached through oxygen",
          "HClO3;HClO4 · Cl+5;Cl+7 · Matched oxoacid comparison",
          "More O in this series · Qualitative acidity increases · Not a universal oxygen-count rule"
        ],
        "board": {
          "heading": "A matched oxoacid family supports a bounded acidity trend",
          "columns": [
            "Species / model",
            "Result / inference",
            "Condition / limit"
          ],
          "rows": [
            [
              "HClO;HClO2",
              "Cl+1;Cl+3",
              "H attached through oxygen"
            ],
            [
              "HClO3;HClO4",
              "Cl+5;Cl+7",
              "Matched oxoacid comparison"
            ],
            [
              "More O in this series",
              "Qualitative acidity increases",
              "Not a universal oxygen-count rule"
            ]
          ]
        }
      },
      {
        "title": "Bond polarity does not assign the same numbers as formal charge",
        "formula": "Supplied Pauling values:H2.20,Cl3.16,Li.98,F3.98;Δχ(HCl)=.96;ordinary H–Cl Lewis formal charges are zero",
        "script": "Electronegativity can indicate the direction of bond polarization without assigning a full ionic charge to each atom. Use supplied Pauling values of two point two zero for hydrogen and three point one six for chlorine. Their difference is zero point nine six, and shared electron density is drawn toward chlorine in the selected hydrogen chloride comparison. Hydrogen is partially positive and chlorine partially negative. In the ordinary single bond Lewis structure of neutral hydrogen chloride, however, the formal charge on each atom is zero because formal charge shares the bond electrons equally by definition. These are two different accounting descriptions of the same bond. Supplied lithium and fluorine values of zero point nine eight and three point nine eight give a difference of three point zero zero, supporting a much more strongly polarized comparison. The difference alone does not calculate an exact fractional charge or a universal ionic percentage. A memorized numerical cutoff is an approximate classification aid rather than a sharp change in the laws of bonding. A homonuclear bond has zero electronegativity difference but can still be a strong bond. Keep bond polarity, formal charge and measured charge distribution distinct.",
        "points": [
          "H2.20;Cl3.16 · Δχ=.96;Hδ+ Clδ− · Pauling scale supplied",
          "Ordinary H–Cl Lewis structure · Formal charge0 on both · Equal bond-electron assignment",
          "Li.98;F3.98 · Δχ=3.00 · No exact partial charge from Δχ"
        ],
        "board": {
          "heading": "Partial charge and formal charge use different definitions",
          "columns": [
            "Species / model",
            "Result / inference",
            "Condition / limit"
          ],
          "rows": [
            [
              "H2.20;Cl3.16",
              "Δχ=.96;Hδ+ Clδ−",
              "Pauling scale supplied"
            ],
            [
              "Ordinary H–Cl Lewis structure",
              "Formal charge0 on both",
              "Equal bond-electron assignment"
            ],
            [
              "Li.98;F3.98",
              "Δχ=3.00",
              "No exact partial charge from Δχ"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "For X(g)+e−→X−(g) with supplied ΔH=−300 kJ/mol, the process is:",
        "options": [
          "Ionization costing300 kJ/mol",
          "Electron gain releasing300 kJ/mol",
          "Bond electronegativity equal to300",
          "Electron removal releasing300 kJ/mol"
        ],
        "answer": 1,
        "explanation": "The electron is a reactant, so this is attachment; the negative enthalpy means energy is released in the stated convention."
      },
      {
        "question": "Which quantity describes an atom attracting shared electron density in a bond?",
        "options": [
          "First ionization enthalpy alone",
          "The mass number",
          "Electronegativity on a stated scale",
          "The number of neutrons"
        ],
        "answer": 2,
        "explanation": "Electronegativity concerns bonded electron attraction; gas-phase ionization and electron attachment have different defined processes."
      },
      {
        "question": "Using the supplied 3s shielding rules, neutral Na has S=8×.85+2=8.80. Its Zeff estimate is:",
        "options": [
          "8.80",
          "11.00",
          "1.00",
          "2.20"
        ],
        "answer": 3,
        "explanation": "Subtract the supplied shielding estimate from nuclear charge: 11−8.80=2.20."
      },
      {
        "question": "For neutral Mg, add .35 shielding for the other3s electron. Its Zeff estimate is:",
        "options": [
          "2.85",
          "2.20",
          "3.20",
          "9.15"
        ],
        "answer": 0,
        "explanation": "S=8.80+.35=9.15 and Z=12, giving Zeff=12−9.15=2.85 in the stated approximate model."
      },
      {
        "question": "Chlorine oxidation numbers in HClO,HClO2,HClO3,HClO4 respectively are:",
        "options": [
          "−1,−1,−1,−1",
          "+1,+3,+5,+7",
          "+1,+2,+3,+4",
          "+2,+4,+6,+8"
        ],
        "answer": 1,
        "explanation": "For a neutral HClOn formula, +1+Cl−2n=0 gives Cl=2n−1."
      },
      {
        "question": "Which statement respects the selected chlorine oxoacid comparison?",
        "options": [
          "Oxygen count alone ranks every acid",
          "Oxidation number equals numerical pKa",
          "Acidity strengthens qualitatively toward HClO4 within this matched family",
          "HCl and HClO have the same hydrogen attachment"
        ],
        "answer": 2,
        "explanation": "The matched oxoacid series supports this qualitative trend; structure, solvent and conditions prevent a universal oxygen-count rule."
      },
      {
        "question": "Supplied Pauling values H2.20 and Cl3.16 give which bond-polarity description?",
        "options": [
          "Δχ=5.36;Hδ− Clδ+",
          "Δχ=.96;both atoms formally−1",
          "Δχ=3.16;hydrogen is a full+1 ion necessarily",
          "Δχ=.96;Hδ+ Clδ−"
        ],
        "answer": 3,
        "explanation": "The electronegativity difference is .96 and chlorine attracts the shared density; this does not assign full ionic charges."
      },
      {
        "question": "In the ordinary H–Cl Lewis structure with one bond and three chlorine lone pairs, formal charges are:",
        "options": [
          "H0 and Cl0",
          "H+1 and Cl−1 necessarily",
          "H−1 and Cl+1",
          "H0 and Cl−1"
        ],
        "answer": 0,
        "explanation": "H is assigned one bond electron and Cl three lone pairs plus one bond electron, matching their neutral valence counts."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: atomic periodic properties and electron affinity",
        "url": "https://openstax.org/books/chemistry-2e/pages/6-5-periodic-variations-in-element-properties"
      },
      {
        "title": "Westfield State University: supplied shielding approximations",
        "url": "https://www.westfield.ma.edu/personalpages/cmasi/advinorg/screen_shots/202590/05_inorganic_2025-shielding_and_trends.pdf"
      },
      {
        "title": "OpenStax: oxoacid family comparisons",
        "url": "https://openstax.org/books/chemistry-atoms-first-2e/pages/14-3-relative-strengths-of-acids-and-bases"
      },
      {
        "title": "OpenStax: bond polarity",
        "url": "https://openstax.org/books/chemistry-2e/pages/7-2-covalent-bonding"
      }
    ]
  },
  "coordination-compounds": {
    "chapters": [
      {
        "title": "Intact complex ions and outer counterions set an ideal particle count",
        "formula": "Ideal complete outer-sphere dissociation:[Co(NH3)6]Cl3 gives4 ions;[Co(NH3)5Cl]Cl2 gives3;[Co(NH3)4Cl2]Cl gives2",
        "script": "An intact coordination entity counts as one dissolved particle even when it contains many ligands. In a stipulated ideal dissociation comparison, hexaamminecobalt three chloride gives one complex cation and three outer chloride ions, or four ions per formula unit. The pentaammine chlorido salt with two outer chlorides gives three ions, while the tetraammine dichlorido salt with one outer chloride gives two. The cobalt oxidation state remains plus three in all three selected formulas. Their coordination numbers are each six because the inner ammine and chlorido donor contacts sum to six. At zero point zero one zero molar formula concentration, the first salt therefore has a formal total dissolved particle concentration of zero point zero four zero molar if the sphere remains intact and ideal complete outer dissociation is assumed. Four particles per formula unit is an ideal van't Hoff factor, not a promise of an exact measured value in every solution. Ion pairing and chemical changes can alter the result. Conductivity is also not simply a particle counter because ionic charges, mobilities, concentration and temperature matter. Keep donor count, counterion count and ideal osmotic particle count in three separate columns.",
        "points": [
          "[Co(NH3)6]Cl3 · 1 complex+3 chloride=4 ions · Co+3;CN6",
          "[Co(NH3)5Cl]Cl2 · 1 complex+2 chloride=3 ions · Co+3;CN6",
          "[Co(NH3)4Cl2]Cl · 1 complex+1 chloride=2 ions · Intact-sphere ideal model"
        ],
        "board": {
          "heading": "Count the intact complex once and outer counterions separately",
          "columns": [
            "Species / model",
            "Result / inference",
            "Condition / limit"
          ],
          "rows": [
            [
              "[Co(NH3)6]Cl3",
              "1 complex+3 chloride=4 ions",
              "Co+3;CN6"
            ],
            [
              "[Co(NH3)5Cl]Cl2",
              "1 complex+2 chloride=3 ions",
              "Co+3;CN6"
            ],
            [
              "[Co(NH3)4Cl2]Cl",
              "1 complex+1 chloride=2 ions",
              "Intact-sphere ideal model"
            ]
          ]
        }
      },
      {
        "title": "A finite ligand inventory requires both metal and ligand mass balances",
        "formula": "M+L⇌ML;equal totals C=.0100 M;Kd=10−4 M;free s satisfies s²/(C−s)=Kd",
        "script": "A large formation constant does not remove the need to conserve the available ligand. Consider a supporting one to one complexation model in which metal and ligand both start with total concentration zero point zero one zero zero molar. The only species are free metal, free ligand and their one to one complex. Use a supplied conditional dissociation constant of ten to the minus four molar, defined through concentrations under the chosen conditions. Equal analytical totals make the two free concentrations equal; call each of them s. The complex concentration is then zero point zero one zero zero minus s, so the equilibrium equation is s squared divided by that complex concentration equals the supplied dissociation constant. Its positive physical root gives free concentration near zero point zero zero zero nine five one molar and complex concentration near zero point zero zero nine zero four nine molar. About ninety point five percent of the metal is bound. Treating the entire analytical ligand concentration as free ligand would overestimate the binding. The model excludes protonation, competing complexes and other stoichiometries. The exact species list and concentration convention must be established before interpreting any real analytical mixture.",
        "points": [
          "Totals M=L=.0100 M · [M]=[L]=s;[ML]=C−s · Only three species allowed",
          "Kd=.0001 M · s≈.000951 M · Physical quadratic root",
          "[ML]≈.009049 M · Bound fraction≈90.5% · Total ligand is not free ligand"
        ],
        "board": {
          "heading": "Finite ligand depletion changes the complexation calculation",
          "columns": [
            "Species / model",
            "Result / inference",
            "Condition / limit"
          ],
          "rows": [
            [
              "Totals M=L=.0100 M",
              "[M]=[L]=s;[ML]=C−s",
              "Only three species allowed"
            ],
            [
              "Kd=.0001 M",
              "s≈.000951 M",
              "Physical quadratic root"
            ],
            [
              "[ML]≈.009049 M",
              "Bound fraction≈90.5%",
              "Total ligand is not free ligand"
            ]
          ]
        }
      },
      {
        "title": "Supporting d9 distortion splits an unevenly occupied orbital pair",
        "formula": "Octahedral d9:t2g6 eg3;selected z elongation lowers dz² relative to dx²−y²;eg-only shifts−δ,+δ give2(−δ)+δ=−δ",
        "script": "An ideal octahedral splitting diagram can hide an instability when degenerate orbitals are unevenly occupied. In a supporting d nine model, the lower set contains six electrons and the upper e g set contains three. The two upper orbitals therefore do not have identical populations in a localized occupancy picture. A selected distortion that lengthens the axial metal ligand contacts reduces the axial interaction and lowers the orbital directed along the z axis relative to the in plane upper orbital. The three upper electrons can then occupy the lower member as a pair and the higher member singly. For a supplied symmetric upper set splitting of minus delta and plus delta relative to their original level, that orbital contribution changes by two times minus delta plus delta, or minus delta. This is not the entire energy of distortion: the lower orbitals, ligand positions, elastic costs and real bonding also matter. The chosen elongated diagram is one model, not a universal prediction that every d nine complex has identical bond lengths or distortion size. One unpaired electron remains in this selected occupancy. Use the distortion to explain a loss of ideal equivalence without assigning an exact measured structure from electron count alone.",
        "points": [
          "Ideal octahedral d9 · t2g6 eg3 · Uneven upper-set occupancy",
          "Selected axial elongation · dz² below dx²−y² · Not every d9 has one fixed geometry",
          "Upper-set shifts−δ,+δ · 2(−δ)+δ=−δ · Orbital term,not full distortion energy"
        ],
        "board": {
          "heading": "A supplied distortion lifts the upper-orbital degeneracy",
          "columns": [
            "Species / model",
            "Result / inference",
            "Condition / limit"
          ],
          "rows": [
            [
              "Ideal octahedral d9",
              "t2g6 eg3",
              "Uneven upper-set occupancy"
            ],
            [
              "Selected axial elongation",
              "dz² below dx²−y²",
              "Not every d9 has one fixed geometry"
            ],
            [
              "Upper-set shifts−δ,+δ",
              "2(−δ)+δ=−δ",
              "Orbital term,not full distortion energy"
            ]
          ]
        }
      },
      {
        "title": "Octahedral and tetrahedral d8 can share a spin count but have different field energies",
        "formula": "Octahedral:t2g6 eg2,CFSE=−1.2Δo;tetrahedral:e4 t2^4,CFSE=−.8Δt;both selected occupancies have2 unpaired electrons",
        "script": "Two complexes can have the same unpaired electron count without having the same geometry or crystal field stabilization. Compare ideal octahedral and tetrahedral d eight occupancies. In the octahedral picture, six electrons fill the lower three orbitals and two occupy the upper pair singly. The crystal field contribution is six times negative zero point four plus two times positive zero point six, giving negative one point two times the octahedral splitting. In the tetrahedral picture, four electrons fill the lower pair and four occupy the upper three orbitals as one pair and two single electrons. Its contribution is four times negative zero point six plus four times positive zero point four, giving negative zero point eight times the tetrahedral splitting. Each selected configuration has two unpaired electrons and three electron pairs. The spin only estimate is therefore the square root of eight, about two point eight three Bohr magnetons, for both. For separately supplied splittings of two hundred for octahedral and eighty for tetrahedral, in kilojoules per mole, the field terms are negative two hundred forty and negative sixty-four respectively. These field contributions alone do not choose the actual molecular geometry. Ligand bonding, other energy terms and the separate square planar possibility must also be considered.",
        "points": [
          "Octahedral d8:t2g6 eg2 · CFSE−1.2Δo;2 unpaired · Three electron pairs",
          "Tetrahedral d8:e4 t2^4 · CFSE−.8Δt;2 unpaired · Three electron pairs",
          "Supplied Δo200;Δt80 kJ/mol · Field terms−240;−64 kJ/mol · Not complete geometry energies"
        ],
        "board": {
          "heading": "Equal spin counts do not imply equal orbital splitting or geometry",
          "columns": [
            "Species / model",
            "Result / inference",
            "Condition / limit"
          ],
          "rows": [
            [
              "Octahedral d8:t2g6 eg2",
              "CFSE−1.2Δo;2 unpaired",
              "Three electron pairs"
            ],
            [
              "Tetrahedral d8:e4 t2^4",
              "CFSE−.8Δt;2 unpaired",
              "Three electron pairs"
            ],
            [
              "Supplied Δo200;Δt80 kJ/mol",
              "Field terms−240;−64 kJ/mol",
              "Not complete geometry energies"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "With an intact coordination sphere and ideal complete outer dissociation, [Co(NH3)6]Cl3 gives how many ions per formula unit?",
        "options": [
          "3",
          "4",
          "6",
          "9"
        ],
        "answer": 1,
        "explanation": "The intact complex is one cation and the three outer chlorides are three additional ions, giving four total."
      },
      {
        "question": "Which ideal particle factors apply to [Co(NH3)5Cl]Cl2 and [Co(NH3)4Cl2]Cl respectively?",
        "options": [
          "6 and6",
          "2 and1",
          "3 and2",
          "4 and3"
        ],
        "answer": 2,
        "explanation": "The first formula gives one complex plus two outer chlorides; the second gives one complex plus one outer chloride."
      },
      {
        "question": "For equal totals C=.0100 M and Kd=.0001 M in the specified M+L⇌ML model, which equation uses both balances?",
        "options": [
          "s²/.0100=Kd always",
          "s/(C+s)=Kd",
          "s²/(C+s)=Kd",
          "s²/(C−s)=Kd"
        ],
        "answer": 3,
        "explanation": "Equal totals give free metal=free ligand=s and complex concentration C−s; Kd=[M][L]/[ML]."
      },
      {
        "question": "The physical root is s≈.000951 M. The metal fraction bound is approximately:",
        "options": [
          "90.5%",
          "99.0%",
          "9.5%",
          "100% exactly"
        ],
        "answer": 0,
        "explanation": "The complex is .0100−.000951=.009049 M, so .009049/.0100≈.905."
      },
      {
        "question": "In the stated ideal octahedral d9 model, the upper eg occupancy is:",
        "options": [
          "eg2",
          "eg3",
          "eg4",
          "eg0"
        ],
        "answer": 1,
        "explanation": "The lower t2g set contains six of the nine electrons, leaving three in eg."
      },
      {
        "question": "For selected eg shifts−δ,+δ and occupations2,1, the eg-only energy change is:",
        "options": [
          "+δ",
          "−3δ",
          "−δ",
          "0"
        ],
        "answer": 2,
        "explanation": "Two electrons at−δ and one at+δ sum to−δ relative to the original common level; this excludes other distortion energy terms."
      },
      {
        "question": "Which CFSE expressions fit the selected octahedral and tetrahedral d8 populations?",
        "options": [
          "−.8Δo and−1.2Δt",
          "−1.2Δo and+.8Δt",
          "+1.2Δo and−.8Δt",
          "−1.2Δo and−.8Δt"
        ],
        "answer": 3,
        "explanation": "Octahedral gives6(−.4)+2(.6)=−1.2; tetrahedral gives4(−.6)+4(.4)=−.8."
      },
      {
        "question": "Both displayed d8 occupancies have two unpaired electrons. Their spin-only moment estimate is:",
        "options": [
          "√8≈2.83 μB",
          "0 μB",
          "√3≈1.73 μB",
          "√24≈4.90 μB"
        ],
        "answer": 0,
        "explanation": "For n=2 unpaired electrons, μ=√[n(n+2)]=√8 μB; equal spin counts do not identify the same geometry."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: coordination entities and crystal field theory",
        "url": "https://openstax.org/books/chemistry-2e/pages/19-2-coordination-chemistry-of-transition-metals"
      },
      {
        "title": "OpenStax: ideal ion particle counts",
        "url": "https://openstax.org/books/chemistry-2e/pages/11-4-colligative-properties"
      },
      {
        "title": "OpenStax: complex formation and dissociation",
        "url": "https://openstax.org/books/chemistry-2e/pages/15-2-lewis-acids-and-bases"
      },
      {
        "title": "IIT Kanpur: supporting d9 distortion",
        "url": "https://home.iitk.ac.in/~madhavr/CHM102/Lec4.pdf"
      }
    ]
  }
} as const;
