// Authored by scripts/expand-atomic-bonding-periodic.mjs.
export const atomicBondingPeriodicAdditions = {
  "atomic-structure": {
    "base": 8,
    "quizBase": 12,
    "writtenBase": 5,
    "chapters": [
      {
        "title": "Separate excitation from ionization",
        "formula": "Hydrogen: Eₙ = −13.6/n² eV; ionization ends at E = 0",
        "script": "Exciting an atom and ionizing it are different energy changes. Begin with hydrogen in its ground state at minus thirteen point six electron volts. Absorbing ten point two electron volts raises its energy to minus three point four, corresponding to principal level two. The electron remains bound because its energy is still negative relative to the stated continuum. Removing it from that excited level requires another three point four electron volts. These two steps add to the ground state ionization energy, thirteen point six. A photon below the remaining ionization threshold cannot ionize this isolated atom in the elementary single photon model, although it may match an allowed bound transition. For a one electron helium ion, nuclear charge is two, so all these level energies scale by four within the hydrogen like approximation. Its level two energy is therefore minus thirteen point six electron volts and ionization from that level requires positive thirteen point six. Specify the initial state before quoting an ionization energy. Do not use the ground state threshold automatically for an excited atom or apply one electron formulas to neutral helium.",
        "points": [
          "H ground → n=2 · −3.4 − (−13.6) · Absorb 10.2 eV",
          "H n=2 → continuum · 0 − (−3.4) · Absorb 3.4 eV",
          "He⁺ n=2 → continuum · Z² = 4 · Absorb 13.6 eV"
        ],
        "board": {
          "heading": "Separate excitation from ionization",
          "columns": [
            "Quantity / case",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "H ground → n=2",
              "−3.4 − (−13.6)",
              "Absorb 10.2 eV"
            ],
            [
              "H n=2 → continuum",
              "0 − (−3.4)",
              "Absorb 3.4 eV"
            ],
            [
              "He⁺ n=2 → continuum",
              "Z² = 4",
              "Absorb 13.6 eV"
            ]
          ]
        }
      },
      {
        "title": "Count possible lines across an ensemble",
        "formula": "Maximum pairwise energy differences among n levels: n(n−1)/2",
        "script": "A spectral line corresponds to an energy difference, not simply to the number written on an excited level. Consider many hydrogen atoms prepared in principal level four. Across an ensemble that can populate all lower levels through allowed cascades, the elementary level model permits six distinct principal level differences: four to three, four to two, four to one, three to two, three to one and two to one. The pair count is four times three divided by two. This is a maximum set across the ensemble, not a promise that one atom emits six photons. A single downward sequence from four through three and two to one contains three emissions. A direct four to one transition emits just one. For the four to two Balmer line, energy is thirteen point six times one quarter minus one sixteenth, giving two point five five electron volts. With the supplied conversion twelve hundred forty electron volt nanometres, its wavelength is about four hundred eighty six point three nanometres. Selection rules and experimental populations affect which lines appear. Keep the simplified principal level counting assumption separate from a claim about every detailed atomic transition.",
        "points": [
          "Levels 1 to 4 · 4 × 3 / 2 · Up to 6 differences",
          "Single 4 → 3 → 2 → 1 · Three downward steps · 3 emitted photons",
          "Hydrogen 4 → 2 · 1240 / 2.55 · λ ≈ 486.3 nm"
        ],
        "board": {
          "heading": "Count possible lines across an ensemble",
          "columns": [
            "Quantity / case",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Levels 1 to 4",
              "4 × 3 / 2",
              "Up to 6 differences"
            ],
            [
              "Single 4 → 3 → 2 → 1",
              "Three downward steps",
              "3 emitted photons"
            ],
            [
              "Hydrogen 4 → 2",
              "1240 / 2.55",
              "λ ≈ 486.3 nm"
            ]
          ]
        }
      },
      {
        "title": "Count orbitals with restricted quantum numbers",
        "formula": "For each allowed l: ml = −l,…,+l; two spins per spatial orbital",
        "script": "A restricted quantum number question requires counting the permitted states rather than substituting the full shell capacity automatically. In principal shell four, angular quantum number can be zero, one, two or three. If the question allows only angular values two and three, the available subshells are four d and four f. They contain five and seven spatial orbitals, so together they can hold twenty four electrons. The familiar full shell capacity thirty two includes the excluded s and p states and would be wrong here. In shell three, suppose the magnetic quantum number must be zero. Each of the three allowed angular values has one such orbital, giving three orbitals and at most six electrons. If spin is also fixed to plus one half, only one of the two spin states in each orbital remains, so the count becomes three electrons. Count allowed angular values, then magnetic values, then spin choices. Pauli exclusion limits occupation of each complete state, and the capacity calculation does not imply that every permitted state is occupied in a particular ground state atom.",
        "points": [
          "n=4; l=2 or 3 · 5 + 7 spatial orbitals · 24 electrons maximum",
          "n=3; ml=0 · One orbital for each l · 6 electrons maximum",
          "Also fix ms=+½ · One spin state per orbital · 3 electrons maximum"
        ],
        "board": {
          "heading": "Count orbitals with restricted quantum numbers",
          "columns": [
            "Quantity / case",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "n=4; l=2 or 3",
              "5 + 7 spatial orbitals",
              "24 electrons maximum"
            ],
            [
              "n=3; ml=0",
              "One orbital for each l",
              "6 electrons maximum"
            ],
            [
              "Also fix ms=+½",
              "One spin state per orbital",
              "3 electrons maximum"
            ]
          ]
        }
      },
      {
        "title": "Separate radial nodes from angular nodes",
        "formula": "Hydrogen-like orbitals: radial n−l−1; angular l; total n−1",
        "script": "Orbital node questions distinguish radial and angular structure. A hydrogen like orbital has angular node count equal to angular quantum number, radial node count equal to principal number minus angular number minus one, and total node count principal number minus one. For a three p orbital, angular number is one. There is one radial node and one angular node, giving two in total. For a four d orbital, angular number is two, leaving one radial node and two angular nodes, or three total. A node is a region where the wavefunction is zero; the probability density is also zero there. A sign change in an orbital drawing indicates wavefunction phase, not positive versus negative electric charge. Do not count a radial probability maximum as a node. Also distinguish the radial wavefunction from the radial probability distribution, which includes the spherical volume factor. The zero of that volume factor at the origin is not an extra spherical radial node in this standard counting rule. Use these counts within the stated hydrogen like orbital description rather than treating every approximate many electron orbital as exactly the same mathematical function.",
        "points": [
          "3p: n=3, l=1 · Radial 1; angular 1 · Total 2 nodes",
          "4d: n=4, l=2 · Radial 1; angular 2 · Total 3 nodes",
          "Probability maximum · Nonzero peak · Not a node"
        ],
        "board": {
          "heading": "Separate radial nodes from angular nodes",
          "columns": [
            "Quantity / case",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "3p: n=3, l=1",
              "Radial 1; angular 1",
              "Total 2 nodes"
            ],
            [
              "4d: n=4, l=2",
              "Radial 1; angular 2",
              "Total 3 nodes"
            ],
            [
              "Probability maximum",
              "Nonzero peak",
              "Not a node"
            ]
          ]
        }
      },
      {
        "title": "Use uncertainty as a lower bound",
        "formula": "Δx Δp ≥ ℏ/2; nonrelativistic Δp = m Δv",
        "script": "The uncertainty relation gives a lower bound on the product of position and momentum spreads. It does not state that an electron follows a classical orbit with an unknown but exact radius. Suppose position spread is one times ten to the minus ten metre. Using reduced Planck constant one point zero five five times ten to the minus thirty four joule second, the minimum momentum spread is about five point two seven five times ten to the minus twenty five kilogram metre per second. Dividing by the supplied electron mass nine point one one times ten to the minus thirty one kilogram gives a minimum velocity spread about five point seven nine times ten to the five metres per second in the nonrelativistic relation. This is a spread, not the electron's measured speed or mean velocity. Halving position spread doubles the minimum momentum spread. Equality is attained only for suitable minimum uncertainty states; it is not automatic for an arbitrary wavefunction. State which uncertainty convention is used, preserve the factor of two, and compare dimensions before interpreting the result. This limitation comes from the quantum description rather than merely from careless measurement equipment.",
        "points": [
          "Δx = 1.0 × 10⁻¹⁰ m · ℏ/(2Δx) · Δpmin = 5.275 × 10⁻²⁵",
          "Electron mass supplied · Δpmin / me · Δvmin ≈ 5.79 × 10⁵ m/s",
          "Halve Δx · Fixed lower-bound product · Double minimum Δp"
        ],
        "board": {
          "heading": "Use uncertainty as a lower bound",
          "columns": [
            "Quantity / case",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Δx = 1.0 × 10⁻¹⁰ m",
              "ℏ/(2Δx)",
              "Δpmin = 5.275 × 10⁻²⁵"
            ],
            [
              "Electron mass supplied",
              "Δpmin / me",
              "Δvmin ≈ 5.79 × 10⁵ m/s"
            ],
            [
              "Halve Δx",
              "Fixed lower-bound product",
              "Double minimum Δp"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Hydrogen initially at n=2 needs how much energy to reach the continuum in the stated Bohr model?",
        "options": [
          "10.2 eV",
          "−3.4 eV",
          "3.4 eV",
          "13.6 eV"
        ],
        "answer": 2,
        "explanation": "Ionization changes energy from −3.4 eV to zero; the required input is positive 3.4 eV."
      },
      {
        "question": "Across an ensemble with levels 1 through 4 accessible in the simple principal-level model, the maximum distinct energy differences are:",
        "options": [
          "3",
          "4",
          "12",
          "6"
        ],
        "answer": 3,
        "explanation": "There are 4×3/2=6 pairs; this is not six photons from a single atom."
      },
      {
        "question": "For n=4 restricted to l=2 or l=3, the maximum electron count is:",
        "options": [
          "24",
          "32",
          "12",
          "14"
        ],
        "answer": 0,
        "explanation": "The d and f subshells contain 5+7 spatial orbitals, each with two spin states."
      },
      {
        "question": "A hydrogen-like 4d orbital has radial and angular node counts respectively:",
        "options": [
          "2 and 1",
          "1 and 2",
          "3 and 0",
          "0 and 3"
        ],
        "answer": 1,
        "explanation": "With n=4 and l=2, radial nodes=4−2−1=1 and angular nodes=2. Their total is n−1=3; a probability maximum is not a node."
      },
      {
        "question": "With Δx=10^−10 m, ℏ=1.055×10^−34 J s and me=9.11×10^−31 kg, the minimum velocity spread is approximately:",
        "options": [
          "5.79×10^5 m/s",
          "5.79×10^−5 m/s",
          "The mean speed necessarily",
          "Zero"
        ],
        "answer": 0,
        "explanation": "Use ℏ/(2meΔx). This is a minimum spread, not a mean or measured speed."
      },
      {
        "question": "At n=3 with ml=0 and ms fixed at +1/2, the maximum allowed electron count is:",
        "options": [
          "6",
          "9",
          "18",
          "3"
        ],
        "answer": 3,
        "explanation": "There is one ml=0 orbital for each l=0,1,2 and one permitted spin state per orbital."
      }
    ],
    "foundationExtraQuiz": [
      {
        "question": "A 500 nm photon has what energy using hc = 1240 eV nm?",
        "options": [
          "0.403 eV",
          "2.48 eV",
          "6.20 eV",
          "1240 eV"
        ],
        "answer": 1,
        "explanation": "Divide 1240 eV nm by 500 nm: 2.48 eV. The wavelength units cancel."
      },
      {
        "question": "Below a metal's single-photon photoelectric threshold, increasing intensity ordinarily:",
        "options": [
          "Raises every photon's frequency",
          "Guarantees electron emission",
          "Does not overcome the per-photon threshold",
          "Makes the work function zero"
        ],
        "answer": 2,
        "explanation": "More below-threshold photons do not change the energy of each photon in this elementary model."
      },
      {
        "question": "For hydrogen at n = 2, energy required to reach the continuum is:",
        "options": [
          "3.40 eV",
          "13.6 eV",
          "-3.40 eV",
          "10.2 eV"
        ],
        "answer": 0,
        "explanation": "E2 = -13.6/4 = -3.40 eV. Reaching zero requires a positive 3.40 eV."
      },
      {
        "question": "Which system permits the basic one-electron Bohr formulas?",
        "options": [
          "Neutral helium",
          "Neutral lithium",
          "Oxygen molecule",
          "Li2+"
        ],
        "answer": 3,
        "explanation": "Li2+ retains exactly one electron. The other listed systems are not hydrogen-like one-electron ions."
      },
      {
        "question": "Quadrupling non-relativistic electron accelerating voltage changes wavelength by:",
        "options": [
          "Four times",
          "One half",
          "One quarter",
          "Two times"
        ],
        "answer": 1,
        "explanation": "Lambda is proportional to V^(-1/2), so the ratio is 1/sqrt(4) = 1/2."
      },
      {
        "question": "Halving position spread changes the minimum allowed momentum spread by:",
        "options": [
          "One half",
          "One quarter",
          "Two times",
          "No constraint"
        ],
        "answer": 2,
        "explanation": "The uncertainty-product lower bound stays fixed, so the minimum momentum spread doubles."
      },
      {
        "question": "In the hydrogen-like model, how many radial and angular nodes does 3p have?",
        "options": [
          "0 radial, 2 angular",
          "2 radial, 0 angular",
          "1 radial, 1 angular",
          "3 radial, 1 angular"
        ],
        "answer": 2,
        "explanation": "For n=3 and l=1, radial nodes are n-l-1=1 and angular nodes are l=1."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: quantum theory",
        "url": "https://openstax.org/books/chemistry-2e/pages/6-3-development-of-quantum-theory"
      }
    ]
  },
  "chemical-bonding": {
    "base": 8,
    "quizBase": 12,
    "writtenBase": 6,
    "chapters": [
      {
        "title": "Close a Born–Haber cycle with signs",
        "formula": "ΔHf = sublimation + ionization + ½ dissociation + electron gain + lattice formation",
        "script": "A Born Haber cycle relates formation of an ionic solid to a sequence of gaseous atom and ion steps. Use the supplied illustrative sodium chloride data in kilojoules per mole: sodium sublimation plus one hundred eight, sodium ionization plus four hundred ninety six, half the chlorine bond dissociation plus one hundred twenty two, and chlorine electron gain minus three hundred forty nine. Suppose solid formation from the elements is minus four hundred eleven. The nonlattice steps sum to plus three hundred seventy seven, so lattice formation must be minus seven hundred eighty eight to close the cycle. This is the enthalpy for gaseous sodium and chloride ions forming solid sodium chloride. Reversing that process gives lattice dissociation plus seven hundred eighty eight. Some tables use the opposite lattice convention, so copy the defining reaction before the sign. The chlorine contribution is half a mole of diatomic molecules for one mole of salt; using the full dissociation value would double that step incorrectly. The cycle uses Hess's law, not a new independent empirical sign rule. Check both the balanced overall reaction and the physical states of every intermediate.",
        "points": [
          "Nonlattice steps · 108 + 496 + 122 − 349 · +377 kJ/mol",
          "Lattice formation · −411 − 377 · −788 kJ/mol",
          "Lattice dissociation · Reverse formation step · +788 kJ/mol"
        ],
        "board": {
          "heading": "Close a Born–Haber cycle with signs",
          "columns": [
            "Quantity / case",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Nonlattice steps",
              "108 + 496 + 122 − 349",
              "+377 kJ/mol"
            ],
            [
              "Lattice formation",
              "−411 − 377",
              "−788 kJ/mol"
            ],
            [
              "Lattice dissociation",
              "Reverse formation step",
              "+788 kJ/mol"
            ]
          ]
        }
      },
      {
        "title": "Ionization can strengthen or weaken a bond",
        "formula": "Bond order = ½(Nbonding − Nantibonding)",
        "script": "Removing an electron does not always strengthen a chemical bond. The result depends on whether that electron occupied a bonding or an antibonding molecular orbital. In the elementary nitrogen molecule diagram, nitrogen has bond order three and its highest occupied orbital is a sigma bonding orbital. Removing one electron to form the nitrogen molecular cation lowers bond order to two point five and leaves an unpaired electron. Oxygen starts with bond order two and two unpaired electrons in the degenerate pi antibonding set. Removing one of those antibonding electrons raises bond order to two point five and leaves one unpaired electron. Thus the same operation, ionization, produces opposite bond order changes in these two examples. Their equal final bond orders do not prove identical bond lengths or bond energies, because the atoms and orbital energies differ. For a given related molecular series, bond order often helps compare length and strength, but it is not a universal numerical conversion between different elements. State the appropriate orbital energy ordering, locate the electron being removed, and then recount bonding, antibonding and unpaired electrons before assigning stability or magnetism.",
        "points": [
          "N₂ → N₂⁺ · Remove bonding electron · Bond order 3 → 2.5",
          "O₂ → O₂⁺ · Remove antibonding electron · Bond order 2 → 2.5",
          "Compare unlike molecules · Same bond order alone · Not identical bond energy"
        ],
        "board": {
          "heading": "Ionization can strengthen or weaken a bond",
          "columns": [
            "Quantity / case",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "N₂ → N₂⁺",
              "Remove bonding electron",
              "Bond order 3 → 2.5"
            ],
            [
              "O₂ → O₂⁺",
              "Remove antibonding electron",
              "Bond order 2 → 2.5"
            ],
            [
              "Compare unlike molecules",
              "Same bond order alone",
              "Not identical bond energy"
            ]
          ]
        }
      },
      {
        "title": "Place lone pairs before naming the shape",
        "formula": "AX₄E: seesaw; AX₃E₂: T-shaped; AX₄E₂: square planar",
        "script": "Molecular shape describes the positions of atoms, while electron domain geometry includes lone pairs. Sulfur tetrafluoride has four bonding domains and one lone pair in the elementary valence shell model. Five domains adopt a trigonal bipyramidal arrangement. Placing the lone pair in an equatorial site reduces the number of ninety degree interactions, leaving a seesaw arrangement of atoms. Chlorine trifluoride has three bonds and two lone pairs, again five domains. The two lone pairs preferentially occupy equatorial sites, leaving a T shaped atomic arrangement. Xenon tetrafluoride instead has six domains: four bonds and two lone pairs. An octahedral domain arrangement with the lone pairs opposite each other leaves four fluorine atoms in one square plane. All three molecules have different domain and atomic descriptions; counting bonds alone cannot distinguish them. These are qualitative valence shell geometries, and actual bond angles can deviate from ideal drawings. Use a valid electron count and molecular charge before assigning the number of lone pairs. A drawing should label lone pairs separately from atoms so an electron domain diagram is not mistaken for the observed molecular shape.",
        "points": [
          "SF₄: AX₄E · 5 domains; equatorial lone pair · Seesaw",
          "ClF₃: AX₃E₂ · 5 domains; 2 equatorial pairs · T-shaped",
          "XeF₄: AX₄E₂ · 6 domains; opposite lone pairs · Square planar"
        ],
        "board": {
          "heading": "Place lone pairs before naming the shape",
          "columns": [
            "Quantity / case",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "SF₄: AX₄E",
              "5 domains; equatorial lone pair",
              "Seesaw"
            ],
            [
              "ClF₃: AX₃E₂",
              "5 domains; 2 equatorial pairs",
              "T-shaped"
            ],
            [
              "XeF₄: AX₄E₂",
              "6 domains; opposite lone pairs",
              "Square planar"
            ]
          ]
        }
      },
      {
        "title": "Average equivalent resonance bonds carefully",
        "formula": "Equivalent contributors can give an average Lewis bond order",
        "script": "Resonance contributors represent one delocalized electronic structure, not molecules rapidly switching between different drawings. In nitrate, three equivalent oxygen positions can share the double bond in the simplest equivalent Lewis contributors. Each contributor has one double and two single nitrogen oxygen bonds, so the total Lewis bond order across those three links is four. The average for each equivalent link is four thirds. In nitrite, the two equivalent oxygen positions share one single and one double link in the elementary contributors, giving average one point five. These bookkeeping averages are useful descriptions, not a promise that bond order is always an exactly measured fractional observable. Equivalent atom positions and contributor weights matter. For unequally weighted contributors, taking a simple unweighted average can mislead. Also keep the overall ionic charge fixed while moving electrons; resonance does not move the nuclei or create a different atom connectivity. Formal charges in individual nitrate contributors add to minus one even though their distribution changes. Compare equivalent bonds within the same species and distinguish an average resonance representation from assigning one permanently short double bond and separate permanently long single bonds.",
        "points": [
          "Nitrate: 3 equivalent links · (2 + 1 + 1) / 3 · Average 4/3",
          "Nitrite: 2 equivalent links · (2 + 1) / 2 · Average 1.5",
          "Resonance transformation · Move electrons; keep nuclei · Same connectivity and charge"
        ],
        "board": {
          "heading": "Average equivalent resonance bonds carefully",
          "columns": [
            "Quantity / case",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Nitrate: 3 equivalent links",
              "(2 + 1 + 1) / 3",
              "Average 4/3"
            ],
            [
              "Nitrite: 2 equivalent links",
              "(2 + 1) / 2",
              "Average 1.5"
            ],
            [
              "Resonance transformation",
              "Move electrons; keep nuclei",
              "Same connectivity and charge"
            ]
          ]
        }
      },
      {
        "title": "Add bond dipoles with the angle included",
        "formula": "Two equal bond vectors: μresultant = 2μ cos(θ/2)",
        "script": "A molecular dipole is a vector sum, so equal bond dipoles do not automatically cancel. Consider a simple two bond model in which the vectors have equal magnitude mu and included angle theta. Adding their components along the angle bisector gives resultant two times mu times the cosine of half theta. At one hundred eighty degrees, the equal opposing vectors cancel. At one hundred twenty degrees, cosine sixty is one half, so the resultant equals one bond dipole rather than zero. At ninety degrees, the magnitude is square root two times mu. These comparisons use the specified vector model; they are not an exact method for predicting every molecule's measured dipole moment from an isolated bond table. Lone pairs and the full electron distribution can affect real molecular values. A symmetric molecule with several bonds may cancel all vector components, but the actual geometry and identities must support that cancellation. Draw arrows consistently and specify whether a chemistry dipole arrow or the physical electric dipole vector convention is being used. Reversing all arrows together preserves the calculated magnitude, while reversing just one changes the model.",
        "points": [
          "Two equal vectors: 180° · 2μ cos 90° · 0",
          "Two equal vectors: 120° · 2μ cos 60° · μ",
          "Two equal vectors: 90° · 2μ cos 45° · √2 μ"
        ],
        "board": {
          "heading": "Add bond dipoles with the angle included",
          "columns": [
            "Quantity / case",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Two equal vectors: 180°",
              "2μ cos 90°",
              "0"
            ],
            [
              "Two equal vectors: 120°",
              "2μ cos 60°",
              "μ"
            ],
            [
              "Two equal vectors: 90°",
              "2μ cos 45°",
              "√2 μ"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "For the supplied NaCl cycle, ΔHf=−411 and nonlattice sum=+377 kJ/mol. Lattice formation enthalpy is:",
        "options": [
          "+788 kJ/mol",
          "−34 kJ/mol",
          "−788 kJ/mol",
          "+34 kJ/mol"
        ],
        "answer": 2,
        "explanation": "Formation must close the Hess cycle: −411−377=−788; dissociation reverses its sign."
      },
      {
        "question": "Removing one electron from the highest occupied bonding orbital of N2 gives N2+ bond order:",
        "options": [
          "3.5",
          "2.5",
          "3",
          "2"
        ],
        "answer": 1,
        "explanation": "Removing a bonding electron lowers bond order by one half."
      },
      {
        "question": "Which pair has molecular shapes T-shaped and square planar respectively?",
        "options": [
          "SF4 and NH3",
          "XeF4 and ClF3",
          "CO2 and BF3",
          "ClF3 and XeF4"
        ],
        "answer": 3,
        "explanation": "AX3E2 leaves a T shape from five domains; AX4E2 leaves a square plane from six domains."
      },
      {
        "question": "The simple equivalent-contributor average N–O bond order in nitrate is:",
        "options": [
          "4/3",
          "3/2",
          "2",
          "1/3"
        ],
        "answer": 0,
        "explanation": "One double plus two single links gives total four over three equivalent N–O positions."
      },
      {
        "question": "Two equal dipole vectors, each 1.50 D, have included angle 120°. Their resultant magnitude is:",
        "options": [
          "0 D",
          "3.00 D",
          "1.50 D",
          "2.12 D"
        ],
        "answer": 2,
        "explanation": "2×1.50×cos60°=1.50 D in the stated vector model."
      },
      {
        "question": "Why do N2 and O2 show opposite bond-order changes on removing their highest occupied electron?",
        "options": [
          "Every cation has the same bond order",
          "Different occupied orbital types: bonding versus antibonding",
          "Nitrogen loses a proton",
          "Oxygen cannot lose electrons"
        ],
        "answer": 1,
        "explanation": "The removed electron is bonding in the stated N2 diagram and antibonding in O2."
      }
    ],
    "foundationExtraQuiz": [
      {
        "question": "In introductory VSEPR, SF4 has which molecular shape?",
        "options": [
          "Tetrahedral",
          "Square planar",
          "Seesaw",
          "Trigonal planar"
        ],
        "answer": 2,
        "explanation": "Five domains comprise four bonds and one equatorial lone pair, giving seesaw shape."
      },
      {
        "question": "XeF4 has four bond domains and two opposite lone pairs. Its molecular shape is:",
        "options": [
          "Square planar",
          "Tetrahedral",
          "Linear",
          "Octahedral"
        ],
        "answer": 0,
        "explanation": "The six-domain arrangement is octahedral, but the four atomic positions form a square plane."
      },
      {
        "question": "How many sigma and pi bonds are in ethyne, H-C≡C-H?",
        "options": [
          "2 sigma, 3 pi",
          "3 sigma, 2 pi",
          "1 sigma, 2 pi",
          "5 sigma, 0 pi"
        ],
        "answer": 1,
        "explanation": "Two C-H sigma bonds and the C-C sigma bond give three; the triple bond also contains two pi bonds."
      },
      {
        "question": "Which statement about equivalent carbonate resonance contributors is correct?",
        "options": [
          "They rapidly swap oxygen nuclei",
          "One C-O bond is permanently unique",
          "They have different total electron counts",
          "Their nuclei stay fixed while electron placement differs"
        ],
        "answer": 3,
        "explanation": "Resonance describes delocalization over unchanged nuclear connectivity, not movement of atoms."
      },
      {
        "question": "Which has greater covalent character in the usual Fajans comparison?",
        "options": [
          "LiF compared with LiI",
          "Both are necessarily purely covalent",
          "LiI compared with LiF",
          "Neither has ionic interactions"
        ],
        "answer": 2,
        "explanation": "The larger iodide anion is more polarizable, increasing covalent character with the same cation."
      },
      {
        "question": "Dimethyl ether can accept hydrogen bonds from water because:",
        "options": [
          "Every C-H is a strong donor",
          "Its oxygen has available lone pairs",
          "It contains an O-H bond",
          "Its electrons are absent"
        ],
        "answer": 1,
        "explanation": "An acceptor need not contain its own O-H donor. Ether oxygen can accept from water."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: ionic and covalent bond strengths",
        "url": "https://openstax.org/books/chemistry-2e/pages/7-5-strengths-of-ionic-and-covalent-bonds"
      },
      {
        "title": "OpenStax: molecular orbital theory",
        "url": "https://openstax.org/books/chemistry-2e/pages/8-4-molecular-orbital-theory"
      }
    ]
  },
  "periodic-trends": {
    "base": 8,
    "quizBase": 10,
    "writtenBase": 6,
    "chapters": [
      {
        "title": "Infer valence from a successive-energy jump",
        "formula": "Large jump after IEₖ suggests k outer electrons in a suitable main-group model",
        "script": "Successive ionization data can reveal a valence pattern when a much larger energy is required after the outer electrons have been removed. Take supplied values five hundred seventy eight, one thousand eight hundred seventeen, two thousand seven hundred forty five and eleven thousand five hundred seventy seven kilojoules per mole. The conspicuous jump is between the third and fourth removals. In a suitable main group interpretation this suggests three outer electrons before a more tightly bound inner shell is reached. It is consistent with group thirteen behaviour, but these four values alone are not a general proof of an exact atomic number. Each successive ionization starts from a different, more positively charged gaseous ion, so the terms are not repeated removals from an unchanged neutral atom. To form the triply charged gaseous ion from the neutral gaseous atom, add the first three energies, giving five thousand one hundred forty. Do not use only the third energy for the whole process. Configuration, periodic position and the stated model should support the assignment, especially when transition elements or unusual electronic states are possible.",
        "points": [
          "Supplied IE₁, IE₂, IE₃ · 578; 1817; 2745 · Sum = 5140 kJ/mol",
          "IE₄ = 11577 · Large jump after third · 3 outer electrons suggested",
          "Main-group interpretation · ns² np¹ pattern · Group 13 consistent"
        ],
        "board": {
          "heading": "Infer valence from a successive-energy jump",
          "columns": [
            "Quantity / case",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Supplied IE₁, IE₂, IE₃",
              "578; 1817; 2745",
              "Sum = 5140 kJ/mol"
            ],
            [
              "IE₄ = 11577",
              "Large jump after third",
              "3 outer electrons suggested"
            ],
            [
              "Main-group interpretation",
              "ns² np¹ pattern",
              "Group 13 consistent"
            ]
          ]
        }
      },
      {
        "title": "Keep electron-gain energy signs explicit",
        "formula": "X(g) + e⁻ → X⁻(g): negative ΔH means energy release",
        "script": "Electron gain enthalpy describes the energy change when a gaseous species accepts an electron. Under the enthalpy change convention, an exothermic addition has a negative value. A table of electron affinity may instead report a positive magnitude for energy released, so the same physical event can appear with a different sign convention. Read the defining reaction and heading first. Suppose illustrative first electron gain enthalpies are minus three hundred twenty eight for fluorine and minus three hundred forty nine kilojoules per mole for chlorine. Chlorine releases more energy in this comparison, despite fluorine being higher in the group. The compact fluorine valence shell produces stronger repulsions for the added electron. Now distinguish adding an electron to a neutral oxygen atom from adding another to an oxygen anion. The second addition faces electrostatic repulsion and is endothermic for the isolated gaseous ion. The existence of oxide ions in solids does not contradict that fact: lattice formation and other steps contribute to the overall thermodynamic cycle. One electron gain term alone cannot decide whether an entire ionic compound forms.",
        "points": [
          "Enthalpy-change convention · X(g) + e⁻ → X⁻(g) · Negative = exothermic",
          "Illustrative F and Cl · −328 versus −349 kJ/mol · Cl releases 21 kJ/mol more",
          "Second addition to O⁻ · Repulsion from an anion · Endothermic isolated-ion step"
        ],
        "board": {
          "heading": "Keep electron-gain energy signs explicit",
          "columns": [
            "Quantity / case",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Enthalpy-change convention",
              "X(g) + e⁻ → X⁻(g)",
              "Negative = exothermic"
            ],
            [
              "Illustrative F and Cl",
              "−328 versus −349 kJ/mol",
              "Cl releases 21 kJ/mol more"
            ],
            [
              "Second addition to O⁻",
              "Repulsion from an anion",
              "Endothermic isolated-ion step"
            ]
          ]
        }
      },
      {
        "title": "Compare radii defined by the same method",
        "formula": "Covalent, metallic, van der Waals and ionic radii use different definitions",
        "script": "An atomic radius is an operational description, not a sharply defined surface around an electron cloud. A covalent radius can be obtained from half the internuclear distance between identical bonded atoms. If a supplied homonuclear single bond distance is one hundred ninety eight picometres, that convention gives ninety nine picometres for the atom. A van der Waals radius uses nonbonded contacts and is usually larger for the same element. Metallic and ionic radii come from other structural environments. An ionic radius also depends on the stated coordination and oxidation state convention. Therefore a ranking that mixes a noble gas van der Waals value with a neighbour's covalent value can produce an apparent exception that reflects the measurement definition. Within a consistent isoelectronic series, increasing nuclear charge commonly contracts the electronic distribution; within one element, a cation is generally smaller than its neutral atom under suitable comparisons. These useful trends do not remove the need to compare compatible datasets. Check charge, electron count, coordination environment and radius definition before explaining a small numerical difference as a new periodic law.",
        "points": [
          "Homonuclear distance 198 pm · Covalent radius = d/2 · 99 pm",
          "Nonbonded contact radius · Different operational definition · Do not mix blindly",
          "Ionic radius comparison · Charge and coordination matter · Use compatible tables"
        ],
        "board": {
          "heading": "Compare radii defined by the same method",
          "columns": [
            "Quantity / case",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Homonuclear distance 198 pm",
              "Covalent radius = d/2",
              "99 pm"
            ],
            [
              "Nonbonded contact radius",
              "Different operational definition",
              "Do not mix blindly"
            ],
            [
              "Ionic radius comparison",
              "Charge and coordination matter",
              "Use compatible tables"
            ]
          ]
        }
      },
      {
        "title": "Use oxide equations to support classification",
        "formula": "Amphoteric oxides react with both acids and bases under suitable conditions",
        "script": "Oxide acid base classification should be supported by the actual compound and a balanced reaction. Sodium oxide reacts with hydrochloric acid to form sodium chloride and water: one sodium oxide requires two hydrogen chloride units. Aluminium oxide can react with acid as well. One aluminium oxide plus six hydrogen chloride units forms two aluminium chloride units and three waters in a simplified formula equation. Under suitable aqueous strongly basic conditions, aluminium oxide can form tetrahydroxoaluminate. A balanced representation uses one aluminium oxide, two hydroxide ions and three waters to form two tetrahydroxoaluminate ions. This acid and base behaviour supports the word amphoteric. It does not mean the oxide is neutral or reacts equally rapidly under arbitrary conditions. Silicon dioxide can show acidic oxide behaviour through reactions with suitable strong bases, while conditions and product conventions must be stated. Oxidation state matters too: different oxides of the same element need not share one classification. Use a broad across period trend to organize examples, then check the actual chemistry rather than treating a left to right arrow as a substitute for an equation.",
        "points": [
          "Na₂O + 2HCl · → 2NaCl + H₂O · Basic oxide evidence",
          "Al₂O₃ + 6HCl · → 2AlCl₃ + 3H₂O · Reaction with acid",
          "Al₂O₃ + 2OH⁻ + 3H₂O · → 2[Al(OH)₄]⁻ · Reaction with base"
        ],
        "board": {
          "heading": "Use oxide equations to support classification",
          "columns": [
            "Quantity / case",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Na₂O + 2HCl",
              "→ 2NaCl + H₂O",
              "Basic oxide evidence"
            ],
            [
              "Al₂O₃ + 6HCl",
              "→ 2AlCl₃ + 3H₂O",
              "Reaction with acid"
            ],
            [
              "Al₂O₃ + 2OH⁻ + 3H₂O",
              "→ 2[Al(OH)₄]⁻",
              "Reaction with base"
            ]
          ]
        }
      },
      {
        "title": "Aqueous reducing power needs the full process",
        "formula": "More negative standard reduction potential can indicate a stronger reverse reducing tendency",
        "script": "A gas phase ionization trend does not by itself determine the reducing strength of a metal in aqueous standard conditions. Converting a solid metal to an aqueous cation involves atomization, ionization and hydration contributions. Compare the supplied standard reduction potentials for lithium, sodium and potassium ions becoming their metals: minus three point zero four, minus two point seven one and minus two point nine three volts respectively. Reversing each half reaction describes metal oxidation. In this comparison lithium has the most negative reduction potential and the strongest standard thermodynamic reducing tendency of the three metals. This does not follow the simple expectation obtained by looking only at how easily a gas phase electron is removed down the group. Strong stabilization of the small aqueous lithium ion is part of the explanation. These potentials do not rank the observed speed or violence of a metal reacting with water. Surface condition, melting, mass transfer and reaction pathways affect that observation. Keep thermodynamic tendency, individual energy terms and reaction rate distinct. Use the stated solvent and standard conditions; changing the medium can change the comparison.",
        "points": [
          "Supplied E°red: Li; Na; K · −3.04; −2.71; −2.93 V · Li most negative",
          "Reverse to metal oxidation · Consider full aqueous process · Hydration contributes",
          "Observed reaction speed · Surface, transport and pathways · Not ranked by E° alone"
        ],
        "board": {
          "heading": "Aqueous reducing power needs the full process",
          "columns": [
            "Quantity / case",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Supplied E°red: Li; Na; K",
              "−3.04; −2.71; −2.93 V",
              "Li most negative"
            ],
            [
              "Reverse to metal oxidation",
              "Consider full aqueous process",
              "Hydration contributes"
            ],
            [
              "Observed reaction speed",
              "Surface, transport and pathways",
              "Not ranked by E° alone"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Successive IE data 578, 1817, 2745, 11577 kJ/mol show the major jump after removal number:",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": 2,
        "explanation": "The largest jump is from IE3 to IE4, consistent with three outer electrons in the stated main-group model."
      },
      {
        "question": "Using those data, energy for M(g) → M3+(g) + 3e− is:",
        "options": [
          "2745 kJ/mol",
          "5140 kJ/mol",
          "11577 kJ/mol",
          "16600 kJ/mol"
        ],
        "answer": 1,
        "explanation": "Add IE1+IE2+IE3: 578+1817+2745=5140 kJ/mol."
      },
      {
        "question": "With electron-gain enthalpies F=−328 and Cl=−349 kJ/mol, chlorine releases:",
        "options": [
          "21 kJ/mol more",
          "21 kJ/mol less",
          "677 kJ/mol more",
          "No energy"
        ],
        "answer": 0,
        "explanation": "The chlorine step is 21 kJ/mol more exothermic under this enthalpy-change convention."
      },
      {
        "question": "A supplied homonuclear single-bond distance of 198 pm gives covalent radius:",
        "options": [
          "198 pm",
          "396 pm",
          "49.5 pm",
          "99 pm"
        ],
        "answer": 3,
        "explanation": "The same-atom covalent radius convention takes half the internuclear distance."
      },
      {
        "question": "In Al2O3 + aOH− + bH2O → 2[Al(OH)4]−, the balanced values (a,b) are:",
        "options": [
          "(6,0)",
          "(2,3)",
          "(3,2)",
          "(1,6)"
        ],
        "answer": 1,
        "explanation": "Two hydroxides conserve charge −2, and three waters complete the oxygen and hydrogen balance."
      },
      {
        "question": "Given E°red Li=−3.04, Na=−2.71 and K=−2.93 V, which metal has strongest standard aqueous reducing tendency in this comparison?",
        "options": [
          "Na",
          "K",
          "Li",
          "All reaction speeds must be equal"
        ],
        "answer": 2,
        "explanation": "Li has the most negative reduction potential of the supplied three; observed reaction rate is a separate issue."
      }
    ],
    "foundationExtraQuiz": [
      {
        "question": "Helium has configuration 1s2 but is placed in:",
        "options": [
          "Group 2",
          "Group 1",
          "Group 18",
          "Group 17"
        ],
        "answer": 2,
        "explanation": "Its closed-shell chemistry places helium with the noble gases in group 18."
      },
      {
        "question": "Which radius comparison is normally valid?",
        "options": [
          "Na+ is larger than Na",
          "Cl- is smaller than Cl",
          "All radius definitions are interchangeable",
          "Na+ is smaller than Na"
        ],
        "answer": 3,
        "explanation": "Sodium loses its outer shell on forming Na+, producing a smaller ion."
      },
      {
        "question": "Which period-three oxide is amphoteric?",
        "options": [
          "Al2O3",
          "Na2O",
          "MgO",
          "SO3"
        ],
        "answer": 0,
        "explanation": "Aluminium oxide reacts with both acids and bases under suitable conditions."
      },
      {
        "question": "Which is smaller within the same ten-electron series?",
        "options": [
          "Mg2+ compared with Al3+",
          "Al3+ compared with Mg2+",
          "Both must be identical",
          "Electron count is different"
        ],
        "answer": 1,
        "explanation": "Both have ten electrons; Al3+ has the greater nuclear charge and smaller radius."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: periodic variations",
        "url": "https://openstax.org/books/chemistry-2e/pages/6-5-periodic-variations-in-element-properties"
      },
      {
        "title": "OpenStax: electrode potentials",
        "url": "https://openstax.org/books/chemistry-2e/pages/17-3-electrode-and-cell-potentials"
      }
    ]
  }
};
