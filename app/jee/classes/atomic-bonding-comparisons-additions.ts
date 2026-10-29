// Authored by scripts/draft-atomic-bonding-comparisons.mjs.
export const atomicBondingComparisonsAdditions = {
  "atomic-structure": {
    "base": 29,
    "quizBase": 50,
    "chapters": [
      {
        "title": "Accelerating voltage fixes kinetic energy before it fixes wavelength",
        "formula": "Nonrelativistic particle accelerated from rest: K=|q|V; λ=h/√(2m|q|V)",
        "script": "An accelerating potential gives energy per unit charge, not the same speed to every particle. For a particle starting effectively from rest, the kinetic energy gained is the magnitude of its charge times the accelerating potential difference. In the nonrelativistic model, momentum is the square root of twice mass times this kinetic energy, so the de Broglie wavelength follows by dividing Planck's constant by momentum. For one electron species, quadrupling the accelerating voltage doubles momentum and halves wavelength. Using the stated rounded electron estimate, one hundred volts gives about zero point one two three nanometres, while four hundred volts gives about half that value. Different charged particles require both mass and charge in the comparison. A bare alpha particle has approximately four proton masses and twice the proton charge. At the same accelerating voltage, its wavelength is the proton wavelength divided by the square root of eight. These comparisons neglect initial thermal motion, energy losses and relativistic corrections. Equal potential difference must not be replaced by equal kinetic energy when the particle charges differ.",
        "points": [
          "Same electron:V→4V · p×2; λ÷2 · Nonrelativistic",
          "Proton vs bare alpha · mα≈4mp;qα=2e · Same V gives different K",
          "λα/λp · 1/√8 · From rest; no losses"
        ],
        "board": {
          "heading": "Voltage, charge and mass enter separately",
          "columns": [
            "Model / given",
            "Result / count",
            "Condition / limit"
          ],
          "rows": [
            [
              "Same electron:V→4V",
              "p×2; λ÷2",
              "Nonrelativistic"
            ],
            [
              "Proton vs bare alpha",
              "mα≈4mp;qα=2e",
              "Same V gives different K"
            ],
            [
              "λα/λp",
              "1/√8",
              "From rest; no losses"
            ]
          ]
        }
      },
      {
        "title": "A detector window filters possible hydrogen emission wavelengths",
        "formula": "Potential transitions among n=1,2,3,4 give six gaps; a400–700 nm window includes only4→2 and3→2",
        "script": "Counting possible energy gaps is different from counting lines within a detector's wavelength range. Consider an ensemble with access to hydrogen levels one through four in a simplified one electron energy model. The all pairs downward count is six, but a detector that accepts only wavelengths from four hundred to seven hundred nanometres does not record all six. Using the supplied Rydberg relation, the transitions from four to two and three to two have wavelengths about four hundred eighty-six and six hundred fifty-six nanometres. They lie inside this chosen window. The three transitions ending at level one are ultraviolet, with wavelengths around ninety-seven to one hundred twenty-two nanometres, and the transition from four to three is near one thousand eight hundred seventy-five nanometres in the infrared. This is a wavelength-filtered list of potential energy-gap lines, not a claim that a single atom emits every line or that intensities are equal. Population preparation, dipole selection rules, detector sensitivity and line broadening are separate issues. State both the accessible levels and the detection window before reporting an observed line count.",
        "points": [
          "Levels1 through4 · 6 possible downward gaps · Ensemble gap model",
          "400–700 nm window · 4→2:486;3→2:656 · 2 candidate lines",
          "Ends at1;4→3 · UV; infrared · Outside this window"
        ],
        "board": {
          "heading": "Possible gaps are not all detected lines",
          "columns": [
            "Model / given",
            "Result / count",
            "Condition / limit"
          ],
          "rows": [
            [
              "Levels1 through4",
              "6 possible downward gaps",
              "Ensemble gap model"
            ],
            [
              "400–700 nm window",
              "4→2:486;3→2:656",
              "2 candidate lines"
            ],
            [
              "Ends at1;4→3",
              "UV; infrared",
              "Outside this window"
            ]
          ]
        }
      },
      {
        "title": "Zero orbital projection does not mean zero orbital angular momentum",
        "formula": "For l=2: |L|=√6 ħ; Lz=ml ħ with ml=−2,−1,0,1,2",
        "script": "An angular momentum magnitude and its component along a selected axis answer different questions. In the orbital angular momentum model, a state with quantum number l has magnitude square root of l times l plus one, multiplied by h bar. Its projection along a chosen z axis is m l times h bar. For a d state, l equals two, so the magnitude is square root of six h bar. The five allowed projection labels run from minus two through zero to plus two. A state with projection label zero therefore has zero z component while retaining the same nonzero orbital angular momentum magnitude as the other d states. Even the largest positive projection, two h bar, is smaller than the magnitude square root of six h bar. These statements concern quantum observables and must not be drawn as a classical electron travelling on one definite tilted circle. The five projection states are five spatial orbital states in this angular basis; adding two allowed electron spin projections gives ten spin orbitals, not ten distinct values of m l. An external environment can change energies without changing these label definitions.",
        "points": [
          "d state:l=2 · |L|=√6 ħ · Same magnitude for all ml",
          "ml=−2,−1,0,1,2 · 5 Lz possibilities · ml=0 still has L≠0",
          "2 spin projections each · 10 spin orbitals · Not10 spatial orbitals"
        ],
        "board": {
          "heading": "A component can vanish while the magnitude remains",
          "columns": [
            "Model / given",
            "Result / count",
            "Condition / limit"
          ],
          "rows": [
            [
              "d state:l=2",
              "|L|=√6 ħ",
              "Same magnitude for all ml"
            ],
            [
              "ml=−2,−1,0,1,2",
              "5 Lz possibilities",
              "ml=0 still has L≠0"
            ],
            [
              "2 spin projections each",
              "10 spin orbitals",
              "Not10 spatial orbitals"
            ]
          ]
        }
      },
      {
        "title": "Chromium and copper ions require the observed neutral configuration first",
        "formula": "Cr:[Ar]3d5 4s1;Cu:[Ar]3d10 4s1; common cations lose the4s electron before further3d electrons",
        "script": "A neutral atom's observed ground configuration is the starting inventory, not a license to remove electrons in the order orbitals were first introduced in a filling mnemonic. Chromium has the common neutral configuration argon core, three d five, four s one. Copper has argon core, three d ten, four s one. For the selected common atomic cations, remove the four s electron first. Chromium three plus then loses two more electrons from the d set and has three d three. Copper one plus has three d ten, while copper two plus has three d nine. The electron totals provide an independent check: chromium three plus has twenty-one electrons and copper one plus twenty-eight. In the elementary atomic d orbital occupation picture, d three has three unpaired electrons, d ten has none, and d nine has one. These counts are not a complete prediction of a bulk solid's magnetism or a substitute for a ligand field treatment of every complex. Keep nuclear charge, ionic charge, orbital occupation and the stated magnetic model separate instead of treating all copper species as having the same electron arrangement.",
        "points": [
          "Cr3+:24−3=21 e− · [Ar]3d3 · 3 unpaired in atomic map",
          "Cu+:29−1=28 e− · [Ar]3d10 · No unpaired d electron",
          "Cu2+:29−2=27 e− · [Ar]3d9 · 1 unpaired in atomic map"
        ],
        "board": {
          "heading": "Recount the ion after removing4s first",
          "columns": [
            "Model / given",
            "Result / count",
            "Condition / limit"
          ],
          "rows": [
            [
              "Cr3+:24−3=21 e−",
              "[Ar]3d3",
              "3 unpaired in atomic map"
            ],
            [
              "Cu+:29−1=28 e−",
              "[Ar]3d10",
              "No unpaired d electron"
            ],
            [
              "Cu2+:29−2=27 e−",
              "[Ar]3d9",
              "1 unpaired in atomic map"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "For a fixed nonrelativistic electron species accelerated from rest, voltage rises from V to4V. Wavelength changes how?",
        "options": [
          "Doubles",
          "Halves",
          "Quadruples",
          "Stays unchanged"
        ],
        "answer": 1,
        "explanation": "Momentum scales as√V, so λ=h/p scales as1/√V under the stated assumptions."
      },
      {
        "question": "At equal accelerating voltage, use mα=4mp and qα=2e for a bare alpha particle. Find λα/λp.",
        "options": [
          "1/2",
          "1/4",
          "1/√8",
          "√8"
        ],
        "answer": 2,
        "explanation": "The product m|q| is eight times larger, so the wavelength is smaller by√8. Equal voltage is not equal kinetic energy here."
      },
      {
        "question": "In the stated n≤4 hydrogen gap model, how many candidate lines lie within400–700 nm?",
        "options": [
          "6",
          "3",
          "1",
          "2"
        ],
        "answer": 3,
        "explanation": "4→2 is about486 nm and3→2 about656 nm; the Lyman gaps and4→3 are outside the window."
      },
      {
        "question": "Which candidate hydrogen transition among n≤4 is near1875 nm and excluded by that visible window?",
        "options": [
          "4→3",
          "4→2",
          "3→2",
          "2→1"
        ],
        "answer": 0,
        "explanation": "The small4-to3 energy gap corresponds to infrared light; a possible gap is not automatically a detected visible line."
      },
      {
        "question": "A d state has ml=0. Which relation is correct in the orbital model?",
        "options": [
          "|L|=0 and Lz=0",
          "|L|=√6 ħ and Lz=0",
          "|L|=2 ħ and Lz=√6 ħ",
          "|L|=√6 ħ and Lz=3 ħ"
        ],
        "answer": 1,
        "explanation": "l=2 fixes the magnitude√[l(l+1)]ħ, while ml=0 fixes only the z component."
      },
      {
        "question": "How many spatial ml states and spin orbitals belong to one d subshell?",
        "options": [
          "10 spatial;10 spin orbitals",
          "5 spatial;5 spin orbitals",
          "5 spatial;10 spin orbitals",
          "2 spatial;5 spin orbitals"
        ],
        "answer": 2,
        "explanation": "ml has five values; each spatial state allows two electron spin projections."
      },
      {
        "question": "Which ordered set gives Cr3+,Cu+,Cu2+ d occupations in the stated common atomic cation map?",
        "options": [
          "d5,d9,d10",
          "d3,d9,d10",
          "d4,d10,d8",
          "d3,d10,d9"
        ],
        "answer": 3,
        "explanation": "Start from Cr3d5 4s1 and Cu3d10 4s1; remove4s before the further d electrons."
      },
      {
        "question": "How many electrons are in Cr3+ and Cu+,using Z=24 and29?",
        "options": [
          "21 and28",
          "27 and30",
          "24 and29",
          "18 and18"
        ],
        "answer": 0,
        "explanation": "The electron number is Z minus the positive ionic charge; the argon core alone is not the whole ion."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: matter waves and accelerating voltage",
        "url": "https://openstax.org/books/university-physics-volume-3/pages/6-6-wave-particle-duality"
      },
      {
        "title": "OpenStax: Bohr energies and spectra",
        "url": "https://openstax.org/books/chemistry-2e/pages/6-2-the-bohr-model"
      },
      {
        "title": "OpenStax: hydrogen angular momentum projections",
        "url": "https://openstax.org/books/university-physics-volume-3/pages/8-1-the-hydrogen-atom"
      },
      {
        "title": "OpenStax: atomic and ionic electron configurations",
        "url": "https://openstax.org/books/chemistry-2e/pages/6-4-electronic-structure-of-atoms-electron-configurations"
      }
    ]
  },
  "chemical-bonding": {
    "base": 29,
    "quizBase": 50,
    "chapters": [
      {
        "title": "An electron-deficient BeCl2 monomer and a four-coordinate adduct have different Lewis counts",
        "formula": "Selected map:BeCl2+2Cl−→[BeCl4]2−; two-coordinate monomer versus four-coordinate complex",
        "script": "The octet rule is a useful counting guide, not a rule that every isolated Lewis drawing must obey by inventing extra electrons. In the selected gaseous monomer comparison, beryllium dichloride has two beryllium chlorine connections and only four electrons around beryllium in the simple Lewis structure. Its two bonding domains give a linear molecular model. Now compare a specified chloride donor adduct containing beryllium bonded to four chlorine atoms with overall charge two minus. Two chloride donors add two new electron pair connections to the electron deficient centre. The total valence electron count changes from sixteen in neutral beryllium dichloride to thirty-two in tetrachloroberyllate. A four-domain, no-lone-pair model at beryllium is tetrahedral, and its Lewis octet is complete. These are different chemical species and different coordination numbers, not two resonance drawings of the same molecule. The monomer description must not be applied automatically to every phase of beryllium chloride, which can associate into bridged structures. This map illustrates electron-pair acceptance. It is not a preparation method and does not promise a quantitative product yield.",
        "points": [
          "BeCl2 monomer · 16 valence e−;2 domains · Linear;Be has4 e−",
          "Add2Cl− donors · [BeCl4]2−;32 e− · 4 domains;tetrahedral",
          "Species and phase differ · Not resonance forms · No universal phase claim"
        ],
        "board": {
          "heading": "Count electrons again when the species changes",
          "columns": [
            "Model / given",
            "Result / count",
            "Condition / limit"
          ],
          "rows": [
            [
              "BeCl2 monomer",
              "16 valence e−;2 domains",
              "Linear;Be has4 e−"
            ],
            [
              "Add2Cl− donors",
              "[BeCl4]2−;32 e−",
              "4 domains;tetrahedral"
            ],
            [
              "Species and phase differ",
              "Not resonance forms",
              "No universal phase claim"
            ]
          ]
        }
      },
      {
        "title": "A supplied ionic model separates charge products from ion separation",
        "formula": "With a common structural factor: |U|∝|z+z−|/r0; ratio=(charge-product ratio)×(distance inverse ratio)",
        "script": "A lattice energy trend needs a model and a sign convention before it needs arithmetic. Consider a stipulated electrostatic comparison in which all structural and repulsion factors are held the same. The magnitude of the model lattice energy is proportional to the magnitude of the ionic charge product divided by nearest-neighbour separation. Let solid A have charges plus one and minus one with separation two hundred fifty picometres. Let solid B have charges plus two and minus two with separation two hundred picometres. The charge product magnitude grows from one to four, and the smaller separation adds a factor of two hundred fifty divided by two hundred. The predicted energy magnitude ratio B to A is therefore five. This is an original ideal-model exercise, not a table of measured lattice enthalpies for two real salts. A formation lattice enthalpy is negative under the usual convention, whereas dissociation into gaseous ions has the opposite sign. A larger lattice energy magnitude alone also does not determine aqueous solubility, because hydration and entropy contributions must be considered in a dissolution free energy balance.",
        "points": [
          "A:±1;250 pm · Charge product1 · Common model factor",
          "B:±2;200 pm · Ratio4×250/200=5 · Magnitude comparison",
          "Formation vs dissociation · Opposite signs · Solubility needs more terms"
        ],
        "board": {
          "heading": "State the electrostatic model and the sign",
          "columns": [
            "Model / given",
            "Result / count",
            "Condition / limit"
          ],
          "rows": [
            [
              "A:±1;250 pm",
              "Charge product1",
              "Common model factor"
            ],
            [
              "B:±2;200 pm",
              "Ratio4×250/200=5",
              "Magnitude comparison"
            ],
            [
              "Formation vs dissociation",
              "Opposite signs",
              "Solubility needs more terms"
            ]
          ]
        }
      },
      {
        "title": "Carbon monoxide separates formal charge from oxidation state",
        "formula": "In :C≡O: with one lone pair each:FC(C)=−1,FC(O)=+1; conventional OS(C)=+2,OS(O)=−2",
        "script": "Formal charge and oxidation state assign bonding electrons by different bookkeeping rules. Draw the selected octet Lewis structure of carbon monoxide with a triple bond and one lone pair on each atom. Carbon has four valence electrons in the neutral reference, two nonbonding electrons in this drawing and three electrons assigned from half of the six bonding electrons. Its formal charge is minus one. Oxygen similarly gives six minus two minus three, or plus one. The formal charges sum to zero, matching the neutral molecule. For conventional oxidation states, the heteronuclear bonding electrons are instead assigned to the more electronegative oxygen. Oxygen receives oxidation state minus two and carbon plus two. There is no contradiction because the two conventions answer different accounting questions. Neither pair of integer labels by itself specifies an experimentally measured full atomic charge distribution. Do not infer that carbon monoxide consists of a free carbon anion and oxygen cation, or that formal charge alone measures a bond dipole. State the convention before comparing charge labels across molecules, resonance contributors or coordination compounds.",
        "points": [
          "Octet Lewis:C≡O · FC(C)=−1;FC(O)=+1 · Equal bonding split",
          "Oxidation-state convention · C:+2;O:−2 · Assign bonds to O",
          "Both sums equal0 · Different bookkeeping · Not free atomic ions"
        ],
        "board": {
          "heading": "Two charge conventions can give different labels",
          "columns": [
            "Model / given",
            "Result / count",
            "Condition / limit"
          ],
          "rows": [
            [
              "Octet Lewis:C≡O",
              "FC(C)=−1;FC(O)=+1",
              "Equal bonding split"
            ],
            [
              "Oxidation-state convention",
              "C:+2;O:−2",
              "Assign bonds to O"
            ],
            [
              "Both sums equal0",
              "Different bookkeeping",
              "Not free atomic ions"
            ]
          ]
        }
      },
      {
        "title": "Adding electrons to oxygen fills antibonding orbitals in the selected series",
        "formula": "O2,O2−,O2^2−:valence electrons12,13,14;bond orders2,1.5,1;unpaired counts2,1,0",
        "script": "The molecular orbital model can distinguish an oxygen molecule from superoxide and peroxide without changing the two oxygen nuclei. In the usual introductory oxygen ordering, the neutral molecule has twelve valence electrons and two singly occupied degenerate pi antibonding orbitals. It has bond order two and two unpaired electrons. Add one electron to make superoxide: an antibonding orbital gains a partner, leaving one unpaired electron and lowering bond order to one point five. Add another to make peroxide: both pi antibonding orbitals are paired, bond order falls to one, and no unpaired electron remains in this simple configuration. The added electrons change populations rather than creating an extra oxygen atom or changing either nuclear charge. Within this related series, the decreasing bond order supports a qualitative trend toward a longer, weaker oxygen oxygen link. It is not a universal numerical bond-length formula for every compound or an assertion that isolated ions and all solid salts have identical spectra. A Lewis peroxide single bond is compatible with this count, while oxygen's unpaired electrons require the molecular orbital occupation picture to explain its elementary paramagnetism.",
        "points": [
          "O2:12 valence e− · BO2;2 unpaired · Two singly occupied π*",
          "O2−:13 valence e− · BO1.5;1 unpaired · One added π* electron",
          "O2^2−:14 valence e− · BO1;0 unpaired · Both π* orbitals paired"
        ],
        "board": {
          "heading": "Track the antibonding electrons as charge changes",
          "columns": [
            "Model / given",
            "Result / count",
            "Condition / limit"
          ],
          "rows": [
            [
              "O2:12 valence e−",
              "BO2;2 unpaired",
              "Two singly occupied π*"
            ],
            [
              "O2−:13 valence e−",
              "BO1.5;1 unpaired",
              "One added π* electron"
            ],
            [
              "O2^2−:14 valence e−",
              "BO1;0 unpaired",
              "Both π* orbitals paired"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Selected isolated BeCl2 monomer versus[BeCl4]2−:which domain-shape pair is consistent?",
        "options": [
          "Both linear with2 domains",
          "2 linear;4 tetrahedral",
          "Both square planar",
          "2 bent;4 linear"
        ],
        "answer": 1,
        "explanation": "The selected monomer has two bonds and no central lone pair; the chloride adduct has four central bonding domains."
      },
      {
        "question": "Valence electron count for[BeCl4]2− using Be2,Cl7?",
        "options": [
          "28",
          "30",
          "32",
          "34"
        ],
        "answer": 2,
        "explanation": "2+4×7+2=32; the negative charge adds two electrons to the neutral-atom total."
      },
      {
        "question": "Common-factor ionic model:A has±1 charges at250 pm;B has±2 at200 pm. Ratio |UB|/|UA|?",
        "options": [
          "4",
          "1.25",
          "3.2",
          "5"
        ],
        "answer": 3,
        "explanation": "The charge-product ratio is4 and inverse-distance factor250/200=1.25,so the model ratio is5."
      },
      {
        "question": "Does that larger lattice-energy magnitude alone establish lower aqueous solubility?",
        "options": [
          "No;hydration and entropy also enter dissolution free energy",
          "Yes;only lattice energy matters",
          "Yes;all crystal factors are universal",
          "Yes;formation and dissociation signs are identical"
        ],
        "answer": 0,
        "explanation": "A complete dissolution balance includes solvent and entropy effects; the model ratio is not a standalone solubility prediction."
      },
      {
        "question": "In the selected triple-bonded CO Lewis structure with one lone pair each,which formal charges occur on C,O?",
        "options": [
          "+2,−2",
          "−1,+1",
          "0,0",
          "+1,−1"
        ],
        "answer": 1,
        "explanation": "FC(C)=4−2−3=−1;FC(O)=6−2−3=+1. These sum to zero."
      },
      {
        "question": "Which conventional oxidation states occur on C,O in neutral CO?",
        "options": [
          "−1,+1",
          "0,0",
          "+2,−2",
          "−2,+2"
        ],
        "answer": 2,
        "explanation": "Oxidation-state bookkeeping assigns the heteronuclear bond electrons toward more electronegative O; it differs from formal-charge splitting."
      },
      {
        "question": "Which ordered bond orders describe O2,O2−,O2^2− in the selected oxygen MO model?",
        "options": [
          "1,1.5,2",
          "2,2.5,3",
          "3,2,1",
          "2,1.5,1"
        ],
        "answer": 3,
        "explanation": "Each added electron occupies the π* set and lowers bond order by one half."
      },
      {
        "question": "How many unpaired electrons occur in O2,O2−,O2^2− in that elementary MO configuration?",
        "options": [
          "2,1,0",
          "0,1,2",
          "2,2,2",
          "1,0,1"
        ],
        "answer": 0,
        "explanation": "The degenerate π* pair starts singly occupied,then acquires one and finally two partners."
      }
    ],
    "sources": [
      {
        "title": "UNT chemistry: octet exceptions and BeCl4 donor adduct",
        "url": "https://chem.libretexts.org/Courses/University_of_North_Texas/UNT%3A_CHEM_1410_-_General_Chemistry_for_Science_Majors_I/Text/07%3A_Further_Aspects_of_Covalent_Bonding/7.02%3A_Exceptions_to_the_Octet_Rule"
      },
      {
        "title": "OpenStax: ionic strength and charge-distance model",
        "url": "https://openstax.org/books/chemistry/pages/7-5-strengths-of-ionic-and-covalent-bonds"
      },
      {
        "title": "OpenStax: formal charges",
        "url": "https://openstax.org/books/chemistry-2e/pages/7-4-formal-charges-and-resonance"
      },
      {
        "title": "OpenStax: molecular orbital theory",
        "url": "https://openstax.org/books/chemistry-2e/pages/8-4-molecular-orbital-theory"
      }
    ]
  }
} as const;
