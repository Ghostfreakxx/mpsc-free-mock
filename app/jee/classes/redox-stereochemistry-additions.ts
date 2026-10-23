// Authored by scripts/expand-redox-stereochemistry.mjs.
export const redoxStereochemistryAdditions = {
  "redox-electrochemistry": {
    "base": 14,
    "quizBase": 18,
    "chapters": [
      {
        "title": "Combine electrode steps through Gibbs energies",
        "formula": "E°overall = (n₁E°₁+n₂E°₂)/(n₁+n₂) for sequential reductions",
        "script": "Electrode potentials cannot generally be added like reaction energies. Consider supplied reduction steps for the same element in one consistent medium. The three plus ion accepts one electron to become the two plus ion, with standard reduction potential plus zero point six zero volt. The two plus ion accepts two electrons to form the metal, with potential minus zero point three zero volt. The overall step transfers three electrons. Convert each potential to standard Gibbs energy using minus n F E, add the two energies, then divide by minus three F. The resulting potential is zero volt, because one times zero point six zero plus two times minus zero point three zero equals zero. The simple arithmetic mean would instead give plus zero point one five volt, which is wrong. All endpoint states and standard-state conventions must match for this cancellation. Zero standard potential means zero standard Gibbs energy for the combined half-reaction relative to the chosen reference, not that every actual mixture is at equilibrium. Composition can still change the electrode potential.",
        "points": [
          "M³⁺ + e⁻ → M²⁺ · n₁=1; E°₁=+0.60 V · ΔG°₁=−0.60F",
          "M²⁺ + 2e⁻ → M · n₂=2; E°₂=−0.30 V · ΔG°₂=+0.60F",
          "M³⁺ + 3e⁻ → M · E°=(0.60−0.60)/3 · 0.00 V; match endpoint states"
        ],
        "board": {
          "heading": "Combine electrode steps through Gibbs energies",
          "columns": [
            "Given / case",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "M³⁺ + e⁻ → M²⁺",
              "n₁=1; E°₁=+0.60 V",
              "ΔG°₁=−0.60F"
            ],
            [
              "M²⁺ + 2e⁻ → M",
              "n₂=2; E°₂=−0.30 V",
              "ΔG°₂=+0.60F"
            ],
            [
              "M³⁺ + 3e⁻ → M",
              "E°=(0.60−0.60)/3",
              "0.00 V; match endpoint states"
            ]
          ]
        }
      },
      {
        "title": "Disproportionation oxidizes and reduces one species",
        "formula": "2Cu⁺ → Cu²⁺ + Cu; E° = 0.52−0.15 = +0.37 V",
        "script": "Disproportionation converts one oxidation state into both a higher and a lower oxidation state. Use supplied rounded aqueous copper reduction potentials: copper one plus accepting one electron to become copper metal has plus zero point five two volt, and copper two plus accepting one electron to become copper one plus has plus zero point one five volt. Reverse the second half-reaction to oxidize one copper one plus ion. Add it to reduction of another copper one plus ion. The balanced result is two copper one plus ions forming one copper two plus ion and one copper atom. Standard cell potential is zero point five two minus zero point one five, or plus zero point three seven volt. One electron transfers per written reaction, so standard Gibbs energy is minus zero point three seven F. Positive standard voltage favours disproportionation under the stated standard conditions. It does not guarantee the same behaviour in every ligand environment: complexation, precipitation and activities can alter the comparison. Check atom balance, charge balance and the electron count before inferring a redox direction.",
        "points": [
          "Reduction: Cu⁺ + e⁻ → Cu · Supplied E°=+0.52 V · Cu(+1) becomes Cu(0)",
          "Oxidation: Cu⁺ → Cu²⁺ + e⁻ · Reverse E°red=+0.15 V · Cu(+1) becomes Cu(+2)",
          "Net: 2Cu⁺ → Cu²⁺ + Cu · 0.52−0.15=+0.37 V · n=1; stated aqueous conditions"
        ],
        "board": {
          "heading": "Disproportionation oxidizes and reduces one species",
          "columns": [
            "Given / case",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Reduction: Cu⁺ + e⁻ → Cu",
              "Supplied E°=+0.52 V",
              "Cu(+1) becomes Cu(0)"
            ],
            [
              "Oxidation: Cu⁺ → Cu²⁺ + e⁻",
              "Reverse E°red=+0.15 V",
              "Cu(+1) becomes Cu(+2)"
            ],
            [
              "Net: 2Cu⁺ → Cu²⁺ + Cu",
              "0.52−0.15=+0.37 V",
              "n=1; stated aqueous conditions"
            ]
          ]
        }
      },
      {
        "title": "Hydrogen-electrode potential depends on pH",
        "formula": "At 298 K and pH₂/p°=1: E = −0.05916 pH volts",
        "script": "A hydrogen electrode is at zero standard potential only under its specified standard conditions. Write the reduction as two hydrogen ions plus two electrons forming hydrogen gas. At two hundred ninety eight kelvin, with hydrogen pressure equal to the standard pressure and approximately ideal gas behaviour, the Nernst equation gives potential minus zero point zero five nine one six times p H in volts relative to the standard hydrogen electrode. Thus p H three gives minus zero point one seven seven four eight volt, while p H five gives minus zero point two nine five eight zero volt. The potential difference between these otherwise matched electrodes has magnitude zero point one one eight three two volt. The lower p H side has the more positive reduction potential and acts as the cathode in the ideal cell. This model neglects liquid junction potentials and uses hydrogen ion activities through the definition of p H. A nonstandard gas pressure adds its own term. Always state temperature, gas pressure and reference before treating a measured potential as a p H indicator.",
        "points": [
          "298 K; hydrogen p/p°=1 · E=−0.05916 pH · Relative to standard H electrode",
          "pH 3 versus pH 5 · −0.17748 versus −0.29580 V · Lower pH has higher Ered",
          "Matched ideal cell · Ecathode−Eanode · +0.11832 V; junction neglected"
        ],
        "board": {
          "heading": "Hydrogen-electrode potential depends on pH",
          "columns": [
            "Given / case",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "298 K; hydrogen p/p°=1",
              "E=−0.05916 pH",
              "Relative to standard H electrode"
            ],
            [
              "pH 3 versus pH 5",
              "−0.17748 versus −0.29580 V",
              "Lower pH has higher Ered"
            ],
            [
              "Matched ideal cell",
              "Ecathode−Eanode",
              "+0.11832 V; junction neglected"
            ]
          ]
        }
      },
      {
        "title": "Water electrolysis links charge to two gas amounts",
        "formula": "2H₂O → 2H₂ + O₂; n(H₂)=Q/(2F), n(O₂)=Q/(4F)",
        "script": "Water electrolysis produces different gas amounts at the two electrodes because their electron requirements differ. In a supplied ideal acidified-water model with inert electrodes, the cathode reduces hydrogen ions to hydrogen, while the anode oxidizes water to oxygen. Each hydrogen molecule corresponds to two electrons, and each oxygen molecule to four. Suppose the same circuit passes nineteen thousand three hundred coulombs, using Faraday constant ninety six thousand five hundred coulombs per mole. The electron amount is zero point two zero zero mole. At full current efficiency, hydrogen production is zero point one zero zero mole and oxygen production zero point zero five zero zero mole. At the same temperature and pressure, with approximately ideal gas behaviour, their dry volumes are in ratio two to one. Do not add the electrode electron amounts: the same circuit charge passes through both electrodes. Competing electrode reactions, gas dissolution, leakage and collection over water can change observed amounts or require corrections. This model specifically excludes chloride or other species that could change the anode product. Balance each half-reaction before translating charge into a collected gas amount.",
        "points": [
          "Cathode: 2H⁺ + 2e⁻ → H₂ · Q/F=19300/96500 · 0.200 mol electrons",
          "Anode: 2H₂O → O₂ + 4H⁺ + 4e⁻ · H₂=0.200/2; O₂=0.200/4 · 0.100 mol H₂; 0.0500 mol O₂",
          "Same T and P; ideal dry gases · Volume ratio follows mole ratio · H₂:O₂ = 2:1; full efficiency"
        ],
        "board": {
          "heading": "Water electrolysis links charge to two gas amounts",
          "columns": [
            "Given / case",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Cathode: 2H⁺ + 2e⁻ → H₂",
              "Q/F=19300/96500",
              "0.200 mol electrons"
            ],
            [
              "Anode: 2H₂O → O₂ + 4H⁺ + 4e⁻",
              "H₂=0.200/2; O₂=0.200/4",
              "0.100 mol H₂; 0.0500 mol O₂"
            ],
            [
              "Same T and P; ideal dry gases",
              "Volume ratio follows mole ratio",
              "H₂:O₂ = 2:1; full efficiency"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Sequential reductions transfer one electron at +0.60 V, then two electrons at −0.30 V. Combined standard potential is:",
        "options": [
          "0.00 V",
          "+0.15 V",
          "+0.30 V",
          "−0.90 V"
        ],
        "answer": 0,
        "explanation": "Add standard Gibbs energies, giving the electron-weighted potential (1×0.60+2×−0.30)/3=0.00 V."
      },
      {
        "question": "The thermodynamic quantity added when combining matched electrode half-reactions is:",
        "options": [
          "Electrode potential without weighting",
          "Standard Gibbs energy change",
          "pH",
          "Current efficiency"
        ],
        "answer": 1,
        "explanation": "Gibbs energy is extensive and additive for matched reaction steps; electrode potential is not."
      },
      {
        "question": "Supplied E°red(Cu+/Cu)=+0.52 V and E°red(Cu2+/Cu+)=+0.15 V. For 2Cu+→Cu2++Cu, E° is:",
        "options": [
          "−0.37 V",
          "+0.67 V",
          "+0.37 V",
          "0.00 V"
        ],
        "answer": 2,
        "explanation": "Reduce one Cu+ and oxidize another: 0.52−0.15=+0.37 V for disproportionation."
      },
      {
        "question": "For that written disproportionation, the electron transfer count n in ΔG°=−nFE° is:",
        "options": [
          "Two because two Cu+ react",
          "Three",
          "Zero",
          "One"
        ],
        "answer": 3,
        "explanation": "One Cu+ loses one electron while another accepts it; n is one for the reaction as written."
      },
      {
        "question": "At 298 K and standard hydrogen gas pressure, hydrogen electrode potential at pH 3 is:",
        "options": [
          "−0.17748 V",
          "+0.17748 V",
          "−0.05916 V",
          "0 V at every pH"
        ],
        "answer": 0,
        "explanation": "The supplied Nernst form is E=−0.05916 pH V, giving −0.17748 V relative to SHE."
      },
      {
        "question": "In an ideal hydrogen-electrode cell at pH 3 and pH 5 with equal standard gas pressures, the cathode is:",
        "options": [
          "The pH 5 side",
          "The pH 3 side",
          "Neither side can reduce",
          "Determined only by electrode size"
        ],
        "answer": 1,
        "explanation": "The pH 3 electrode has the more positive reduction potential and is the cathode in this model."
      },
      {
        "question": "Ideal water electrolysis passes 19300 C with F=96500 C/mol. At full efficiency, hydrogen amount is:",
        "options": [
          "0.200 mol",
          "0.0500 mol",
          "0.100 mol",
          "0.400 mol"
        ],
        "answer": 2,
        "explanation": "The charge is 0.200 mol electrons; forming each H2 molecule requires two electrons, giving 0.100 mol H2."
      },
      {
        "question": "For that ideal acidified-water electrolysis, the oxygen amount is:",
        "options": [
          "0.200 mol",
          "0.100 mol",
          "0.0250 mol",
          "0.0500 mol"
        ],
        "answer": 3,
        "explanation": "Each O2 molecule corresponds to four electrons, so 0.200 mol electrons gives 0.0500 mol O2."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: potential, free energy and equilibrium",
        "url": "https://openstax.org/books/chemistry-2e/pages/17-4-potential-free-energy-and-equilibrium"
      },
      {
        "title": "OpenStax: electrode and cell potentials",
        "url": "https://openstax.org/books/chemistry-2e/pages/17-3-electrode-and-cell-potentials"
      },
      {
        "title": "OpenStax: electrolysis",
        "url": "https://openstax.org/books/chemistry-2e/pages/17-7-electrolysis"
      }
    ]
  },
  "organic-principles": {
    "base": 13,
    "quizBase": 20,
    "chapters": [
      {
        "title": "R and S require priority and viewing direction",
        "formula": "Lowest priority away: clockwise 1→2→3 is R; anticlockwise is S",
        "script": "An R or S label describes a spatial arrangement, not the sign of optical rotation. Consider a tetrahedral carbon attached to bromine, chlorine, fluorine and hydrogen. Their directly attached atomic numbers give priorities bromine first, chlorine second, fluorine third and hydrogen fourth. In the stated viewing diagram, hydrogen points directly away from the viewer. Bromine is at the top, chlorine at the lower right and fluorine at the lower left. Following priorities one, two and three is clockwise, so this arrangement is R. Interchanging the chlorine and fluorine positions gives S. If the lowest priority group points toward the viewer instead, the apparent clockwise or anticlockwise result must be reversed. Rotating a molecule in space does not interchange its configuration, while exchanging one pair of groups reverses a single tetrahedral centre. This example avoids priority ties; comparing carbon chains or multiple bonds requires additional sequence rules. Do not infer a positive optical rotation from R or a negative rotation from S: that relationship requires experimental information.",
        "points": [
          "Br, Cl, F, H · Atomic numbers 35>17>9>1 · Priorities 1,2,3,4",
          "H away; Br top; Cl lower right · F lower left; 1→2→3 clockwise · R for the stated view",
          "Exchange Cl and F · One pair interchanged · S; rotation sign not implied"
        ],
        "board": {
          "heading": "R and S require priority and viewing direction",
          "columns": [
            "Given / case",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Br, Cl, F, H",
              "Atomic numbers 35>17>9>1",
              "Priorities 1,2,3,4"
            ],
            [
              "H away; Br top; Cl lower right",
              "F lower left; 1→2→3 clockwise",
              "R for the stated view"
            ],
            [
              "Exchange Cl and F",
              "One pair interchanged",
              "S; rotation sign not implied"
            ]
          ]
        }
      },
      {
        "title": "Enantiomeric excess is a difference in fractions",
        "formula": "ee = |xR−xS|; a binary mixture has xmajor=(1+ee)/2",
        "script": "A mixture containing two enantiomers can have unequal amounts without being a pure enantiomer. Suppose a sample contains seventy percent R and thirty percent S by amount, with no other components. Enantiomeric excess is the absolute difference, forty percent in favour of R. It is not seventy percent. Conversely, forty percent excess of one enantiomer means seventy percent major and thirty percent minor, because their fractions sum to one as well as differing by zero point four zero. In a supplied ideal linear optical-rotation model, suppose pure R has specific rotation plus fifty under fixed solvent, temperature and wavelength conditions. Pure S then has minus fifty under the same conditions, and the mixture has plus twenty. This inference assumes only that enantiomeric pair contributes and the stated additive model applies. The sign assigned to R is supplied experimental information, not a consequence of the R label. Zero net rotation can result from a racemic mixture, but it does not prove every molecule is achiral. Other components or changing measurement conditions can invalidate a simple excess calculation.",
        "points": [
          "Binary sample: R 70%, S 30% · ee=70−30 · 40% excess R",
          "Given pure R rotation +50 · 0.70(+50)+0.30(−50) · Mixture rotation +20",
          "Given ee=0.40 · xmajor=(1+0.40)/2 · 0.70 major; 0.30 minor"
        ],
        "board": {
          "heading": "Enantiomeric excess is a difference in fractions",
          "columns": [
            "Given / case",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Binary sample: R 70%, S 30%",
              "ee=70−30",
              "40% excess R"
            ],
            [
              "Given pure R rotation +50",
              "0.70(+50)+0.30(−50)",
              "Mixture rotation +20"
            ],
            [
              "Given ee=0.40",
              "xmajor=(1+0.40)/2",
              "0.70 major; 0.30 minor"
            ]
          ]
        }
      },
      {
        "title": "Bond cleavage tracks one electron or an electron pair",
        "formula": "Homolysis: A–B → A· + B·; heterolysis: A–B → A⁺ + B⁻",
        "script": "The products of bond cleavage depend on where the two bonding electrons go. In homolytic cleavage of a neutral single bond, one electron goes to each fragment. The elementary products are two radicals, represented with dots for unpaired electrons, and electron movement uses single headed fishhook arrows. In heterolytic cleavage, both bonding electrons go to one fragment. For the stated neutral A B bond with both electrons assigned to B, the elementary products are A plus and B minus, shown with a full headed curved arrow from the bond toward B. Overall charge is conserved in both descriptions. The labels do not imply that any chosen bond will cleave spontaneously, or that isolated ions remain stable in every solvent. Bond energy, light, temperature, solvent and the surrounding mechanism determine which pathway is relevant. Radicals are not automatically positively charged, and a negative ion can have paired electrons. Start each electron arrow at an existing electron source and keep electron count separate from formal charge when checking a proposed elementary step.",
        "points": [
          "Homolysis of neutral A–B · One bonding electron to each · A· + B·; fishhook arrows",
          "Heterolysis; pair goes to B · Both bonding electrons to B · A⁺ + B⁻; pair arrow",
          "Conservation checks · Two electrons; total charge zero · Path depends on actual conditions"
        ],
        "board": {
          "heading": "Bond cleavage tracks one electron or an electron pair",
          "columns": [
            "Given / case",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Homolysis of neutral A–B",
              "One bonding electron to each",
              "A· + B·; fishhook arrows"
            ],
            [
              "Heterolysis; pair goes to B",
              "Both bonding electrons to B",
              "A⁺ + B⁻; pair arrow"
            ],
            [
              "Conservation checks",
              "Two electrons; total charge zero",
              "Path depends on actual conditions"
            ]
          ]
        }
      },
      {
        "title": "Tautomers move atoms; resonance contributors do not",
        "formula": "CH₃–C(=O)–CH₃ ⇌ CH₂=C(OH)–CH₃ is keto–enol tautomerism",
        "script": "Keto enol tautomerism and resonance are different structural relationships. Acetone has three carbon atoms, six hydrogens and one oxygen. A corresponding enol has a carbon carbon double bond, an oxygen hydrogen bond and the same overall molecular formula. In this interconversion, a hydrogen changes its attachment and the positions of the double bonds change. The two neutral structures are constitutional isomers that can be in chemical equilibrium, not alternative resonance drawings of one fixed atomic arrangement. By contrast, resonance contributors of an enolate keep every atom in place and differ in electron placement and formal charges. Acetone has six alpha hydrogens on two symmetry equivalent methyl groups; these give one distinct constitutional monoenol connectivity. This statement does not count different conformations. The simple enolization route needs an alpha hydrogen on a carbon adjacent to the carbonyl. The equilibrium proportion is not fixed at fifty percent and depends on the actual compound and conditions. Recognize whether a drawing changes an atom attachment before choosing an equilibrium arrow or a resonance arrow.",
        "points": [
          "Acetone ⇌ its enol · H attachment and bond positions change · Tautomers; formula C₃H₆O",
          "Enolate resonance contributors · Atomic positions unchanged · Electrons and formal charges differ",
          "Acetone symmetry · Six equivalent alpha H atoms · One constitutional monoenol"
        ],
        "board": {
          "heading": "Tautomers move atoms; resonance contributors do not",
          "columns": [
            "Given / case",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Acetone ⇌ its enol",
              "H attachment and bond positions change",
              "Tautomers; formula C₃H₆O"
            ],
            [
              "Enolate resonance contributors",
              "Atomic positions unchanged",
              "Electrons and formal charges differ"
            ],
            [
              "Acetone symmetry",
              "Six equivalent alpha H atoms",
              "One constitutional monoenol"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "For a tetrahedral carbon attached directly to Br, Cl, F and H, the highest-priority substituent is:",
        "options": [
          "H",
          "Br",
          "Cl",
          "F"
        ],
        "answer": 1,
        "explanation": "Directly attached atomic number decides this untied case: Br 35 outranks Cl 17, F 9 and H 1."
      },
      {
        "question": "With priority 4 pointing away, the path 1→2→3 is clockwise. Configuration is:",
        "options": [
          "S",
          "Racemic",
          "R",
          "Always optically positive"
        ],
        "answer": 2,
        "explanation": "Clockwise gives R only after the lowest-priority substituent is oriented away from the viewer."
      },
      {
        "question": "A binary enantiomer mixture is 70% R and 30% S. Enantiomeric excess is:",
        "options": [
          "70% R",
          "30% S",
          "100% R",
          "40% R"
        ],
        "answer": 3,
        "explanation": "The excess is the difference 70−30=40%, in favour of the R enantiomer."
      },
      {
        "question": "In a supplied additive model, pure R has specific rotation +50 and pure S −50. A 70:30 R/S mixture gives:",
        "options": [
          "+20",
          "+40",
          "+50",
          "−20"
        ],
        "answer": 0,
        "explanation": "Use the stated same-condition linear model: 0.70×50+0.30×(−50)=+20."
      },
      {
        "question": "Homolysis of a neutral A–B single bond gives the elementary products:",
        "options": [
          "A+ and B−",
          "A radical and B radical",
          "Two cations",
          "Two anions"
        ],
        "answer": 1,
        "explanation": "One bonding electron goes to each fragment; each product is a radical in this elementary model."
      },
      {
        "question": "Heterolysis of neutral A–B assigning both bond electrons to B gives:",
        "options": [
          "A− and B+",
          "A radical and B radical",
          "A+ and B−",
          "A+ and B+"
        ],
        "answer": 2,
        "explanation": "The entire bonding pair goes to B, giving A+ and B− while conserving the overall neutral charge."
      },
      {
        "question": "Acetone and CH2=C(OH)CH3 are related as:",
        "options": [
          "Resonance contributors",
          "Conformers only",
          "Enantiomers",
          "Keto–enol tautomers"
        ],
        "answer": 3,
        "explanation": "Hydrogen attachment changes along with bond order, so these are distinct constitutional tautomers."
      },
      {
        "question": "Ignoring conformations, acetone gives how many distinct constitutional monoenol connectivities by ordinary alpha enolization?",
        "options": [
          "One",
          "Two",
          "Three",
          "Six"
        ],
        "answer": 0,
        "explanation": "Its two methyl groups are symmetry equivalent; the six alpha hydrogens lead to the same monoenol connectivity."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: sequence rules for configuration",
        "url": "https://openstax.org/books/organic-chemistry/pages/5-5-sequence-rules-for-specifying-configuration"
      },
      {
        "title": "OpenStax: optical activity",
        "url": "https://openstax.org/books/organic-chemistry/pages/5-3-optical-activity"
      },
      {
        "title": "OpenStax: radical and polar reactions",
        "url": "https://openstax.org/books/organic-chemistry/pages/6-2-how-organic-reactions-occur-mechanisms"
      },
      {
        "title": "OpenStax: keto–enol tautomerism",
        "url": "https://openstax.org/books/organic-chemistry/pages/22-1-keto-enol-tautomerism"
      }
    ]
  }
} as const;
