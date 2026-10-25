// Authored by scripts/expand-coordination-practical-evidence.mjs.
export const coordinationPracticalEvidenceAdditions = {
  "coordination-compounds": {
    "base": 18,
    "quizBase": 34,
    "chapters": [
      {
        "title": "Octahedral d4 has a different pairing ledger",
        "formula": "High spin: t₂g³eg¹, −0.6Δo; low spin: t₂g⁴eg⁰, −1.6Δo + P",
        "script": "Count a new electron configuration rather than copying the d five or d six result. In an ideal octahedral d four model, high spin places three electrons in the lower set and one in the upper set. All four are unpaired, and its crystal field contribution is negative zero point six times the splitting, with no electron pair. Low spin places all four electrons in the lower set, making one pair and leaving two unpaired electrons. Its energy on the same reference is negative one point six times the splitting plus one pairing cost. Low spin minus high spin is therefore P minus delta, not twice that expression as in some other configurations. For supplied splitting two hundred and pairing cost one hundred fifty kilojoules per mole, low spin is lower by fifty kilojoules per mole. The spin only moments are approximately four point nine zero for high spin and two point eight three Bohr magnetons for low spin. These are elementary occupancy and energy comparisons; distortions and more detailed electronic interactions are outside this supplied ideal model.",
        "points": [
          "High spin d⁴ · t₂g³eg¹; four unpaired · E = −.6Δo",
          "Low spin d⁴ · t₂g⁴eg⁰; two unpaired · E = −1.6Δo + P",
          "Δo=200; P=150 kJ/mol · Elow − Ehigh = P − Δo · −50 kJ/mol; low spin lower"
        ],
        "board": {
          "heading": "Octahedral d4 has a different pairing ledger",
          "columns": [
            "Specified model",
            "Count / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "High spin d⁴",
              "t₂g³eg¹; four unpaired",
              "E = −.6Δo"
            ],
            [
              "Low spin d⁴",
              "t₂g⁴eg⁰; two unpaired",
              "E = −1.6Δo + P"
            ],
            [
              "Δo=200; P=150 kJ/mol",
              "Elow − Ehigh = P − Δo",
              "−50 kJ/mol; low spin lower"
            ]
          ]
        }
      },
      {
        "title": "A bridging ligand contributes contacts at two metals",
        "formula": "Four terminal Cl + two μ-Cl: six unique ligands, eight M–Cl contacts, CN 4 at each M",
        "script": "A bridging ligand attaches to more than one central atom. The Greek prefix mu identifies that role; it is not the same as a ligand using two different donor atoms to chelate one metal. Consider a supplied two metal connectivity model with two terminal chlorides on each metal and two additional chloride ligands bridging both metals. There are four terminal plus two bridging chlorides, six unique chloride ligands in total. Each metal touches its two terminal chlorides and both bridges, giving coordination number four at each centre. The structure therefore has eight metal chloride contacts even though it contains only six chloride atoms. If both metals have oxidation state plus two, the complete six chloride entity has total charge negative two. This is bookkeeping for the stated connectivity, not a claim that every dissolved metal chloride adopts this dimer. The molecular formula alone cannot establish bridge positions or a unique geometry. Distinguish unique ligand count, donor contacts at one metal and total contacts in the entity before calculating coordination number.",
        "points": [
          "Two M sites; 4 terminal Cl · Two more Cl bridge both sites · 6 unique chloride ligands",
          "Each M: 2 terminal + 2 bridge · CN at each metal = 4 · 8 M–Cl contacts total",
          "Each M has oxidation state +2 · 2(+2) + 6(−1) · Entity charge −2"
        ],
        "board": {
          "heading": "A bridging ligand contributes contacts at two metals",
          "columns": [
            "Specified model",
            "Count / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Two M sites; 4 terminal Cl",
              "Two more Cl bridge both sites",
              "6 unique chloride ligands"
            ],
            [
              "Each M: 2 terminal + 2 bridge",
              "CN at each metal = 4",
              "8 M–Cl contacts total"
            ],
            [
              "Each M has oxidation state +2",
              "2(+2) + 6(−1)",
              "Entity charge −2"
            ]
          ]
        },
        "speechInput": "A bridging ligand attaches to more than one central atom. The Greek prefix mu identifies that role; it is not the same as a ligand using two different donor atoms to chelate one metal. Consider a supplied two metal connectivity model with two terminal chlorides on each metal and two additional chloride ligands bridging both metals. There are four terminal plus two bridging chlorides, six unique chloride ligands in total. Each metal touches its two terminal chlorides and both bridges, giving coordination number four at each centre. The structure therefore has eight metal chloride contacts even though it contains only six chloride atoms. If both metals have oxidation state plus two, the complete six chloride entity has total charge negative two. This is bookkeeping for the stated connectivity, not a claim that every dissolved metal chloride adopts this dimer. The molecular formula alone cannot establish bridge positions or a unique geometry. Distinguish unique ligand count, donor contacts at one metal and total contacts in the entity before calculating coordination number or charge.",
        "recordingNote": "Two independent audio reviews confirm the closing reminder ends at coordination number. The original synthesis input is retained for audio provenance; the earlier charge calculation is fully spoken."
      },
      {
        "title": "Bis-chelate cis and trans need a separate optical check",
        "formula": "Ideal octahedral [Co(en)₂Cl₂]⁺: cis enantiomer pair plus one achiral trans form",
        "script": "Geometrical isomerism and optical isomerism are separate questions for a chelate complex. Take the ideal octahedral cobalt complex with two neutral ethane one two diamine ligands and two chlorides, carrying total charge plus one. The two bidentate ligands contribute four nitrogen donors and the chlorides two more, so coordination number is six and cobalt oxidation state is plus three. Adjacent chloride positions define cis, while opposite positions define trans. When the chelate connections are included, the cis form has two nonsuperimposable mirror configurations. The ideal trans form is achiral in the usual introductory treatment. Thus the standard count is two geometrical classes but three configurational stereoisomers when the cis mirror pair is counted separately. This count ignores individual chelate ring conformations and assumes the stated ligand connectivity. A racemic cis sample can show zero net rotation even though its component molecules are chiral. Do not conclude that every cis complex is optically active or that drawing two mirror images automatically proves they cannot be superimposed by a proper rotation.",
        "points": [
          "[Co(en)₂Cl₂]⁺ · Four N donors plus two Cl · CN 6; cobalt +3",
          "Cis versus trans chloride sites · Adjacent versus opposite · Two geometrical classes",
          "Include chelate handedness · Cis mirror pair; trans achiral · Three configurational forms"
        ],
        "board": {
          "heading": "Bis-chelate cis and trans need a separate optical check",
          "columns": [
            "Specified model",
            "Count / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "[Co(en)₂Cl₂]⁺",
              "Four N donors plus two Cl",
              "CN 6; cobalt +3"
            ],
            [
              "Cis versus trans chloride sites",
              "Adjacent versus opposite",
              "Two geometrical classes"
            ],
            [
              "Include chelate handedness",
              "Cis mirror pair; trans achiral",
              "Three configurational forms"
            ]
          ]
        }
      },
      {
        "title": "Formation strength does not determine exchange speed",
        "formula": "Formation constants describe equilibrium; exchange half-times describe a specified kinetic experiment",
        "script": "A formation constant and a ligand exchange rate measure different things. Compare two supplied one to one complex formation models under matching standard state conventions. Complex A has formation constant ten to the twelve, while B has ten to the six. A is more strongly favoured relative to its specified separated metal and ligand reference states. Now a separately defined labelled ligand exchange experiment gives first order constants zero point one zero zero per minute for A and zero point zero zero one zero zero per minute for B. Their exchange half times are natural logarithm two divided by those constants, about six point nine three and six hundred ninety three minutes. A therefore exchanges faster in this experiment despite its larger formation constant. The exchange measurement follows replacement of a labelled ligand, not necessarily loss of the total amount of complex in solution. Labile and inert describe rates under specified conditions; stable and unstable require an equilibrium reaction and reference states. Do not infer any universal numerical time boundary from this illustrative comparison, or assume that increasing a formation constant must proportionally slow every substitution pathway.",
        "points": [
          "Formation: KA=10¹²; KB=10⁶ · Specified 1:1 reference reactions · A more formation-favoured",
          "Labelled exchange: kA=.100/min · kB=.00100/min · Different kinetic experiment",
          "t½=ln2/k · A: 6.93 min; B: 693 min · Larger K does not mean slower exchange"
        ],
        "board": {
          "heading": "Formation strength does not determine exchange speed",
          "columns": [
            "Specified model",
            "Count / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Formation: KA=10¹²; KB=10⁶",
              "Specified 1:1 reference reactions",
              "A more formation-favoured"
            ],
            [
              "Labelled exchange: kA=.100/min",
              "kB=.00100/min",
              "Different kinetic experiment"
            ],
            [
              "t½=ln2/k",
              "A: 6.93 min; B: 693 min",
              "Larger K does not mean slower exchange"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "An ideal high-spin octahedral d4 ion has occupancy and unpaired count:",
        "options": [
          "t2g³eg¹; four unpaired",
          "t2g⁴eg⁰; zero unpaired",
          "t2g²eg²; two unpaired",
          "t2g⁶eg⁰; zero unpaired"
        ],
        "answer": 0,
        "explanation": "High spin singly occupies the three lower orbitals and one upper orbital before pairing."
      },
      {
        "question": "For ideal octahedral d4 with Δo=200 and P=150 kJ/mol, Elow−Ehigh equals:",
        "options": [
          "+50 kJ/mol",
          "−50 kJ/mol",
          "−100 kJ/mol",
          "0 kJ/mol"
        ],
        "answer": 1,
        "explanation": "The d4 difference is P−Δo=−50 kJ/mol; one extra pair accompanies the lower occupancy."
      },
      {
        "question": "In the stated dimer with four terminal and two bridging chlorides, each metal touches two terminal and both bridges. Each metal coordination number is:",
        "options": [
          "2",
          "6",
          "4",
          "8"
        ],
        "answer": 2,
        "explanation": "Count donor contacts at one centre: 2+2=4, not all six chloride ligands in the entity."
      },
      {
        "question": "That structure contains how many unique chloride ligands and total M–Cl contacts respectively?",
        "options": [
          "8 and 6",
          "4 and 4",
          "6 and 6",
          "6 and 8"
        ],
        "answer": 3,
        "explanation": "Each of the two bridges contributes two contacts, giving 4+2 unique chlorides and 4+2×2 contacts."
      },
      {
        "question": "The usual ideal [Co(en)2Cl2]+ model has configurational stereoisomers total:",
        "options": [
          "3: a cis mirror pair and one trans form",
          "2: both necessarily achiral",
          "4: two mirror pairs",
          "1: rotations erase all differences"
        ],
        "answer": 0,
        "explanation": "Cis and trans are two geometrical classes; only the cis class contributes the standard enantiomer pair."
      },
      {
        "question": "An equal mixture of the two cis enantiomers has zero net rotation. This means:",
        "options": [
          "Each cis molecule is necessarily achiral",
          "Opposite rotations cancel in the racemic sample",
          "The complex has become trans",
          "Cobalt oxidation state has changed"
        ],
        "answer": 1,
        "explanation": "Sample rotation cancellation does not make the component configurations identical."
      },
      {
        "question": "Given KA=10¹², KB=10⁶, and labelled-exchange constants kA=.100/min, kB=.00100/min, the valid comparison is:",
        "options": [
          "A must exchange more slowly because its K is larger",
          "Both have equal exchange half-times",
          "A is more formation-favoured and exchanges faster in the stated experiment",
          "Formation constants have units of minutes"
        ],
        "answer": 2,
        "explanation": "Equilibrium preference and labelled ligand exchange kinetics are separately specified."
      },
      {
        "question": "The exchange half-time for k=.00100/min in that first-order model is approximately:",
        "options": [
          ".000693 min",
          "6.93 min",
          "69.3 min",
          "693 min"
        ],
        "answer": 3,
        "explanation": "Use t½=ln2/k=.693147/.00100≈693 min."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: coordination crystal fields and magnetism",
        "url": "https://openstax.org/books/chemistry-2e/pages/19-3-spectroscopic-and-magnetic-properties-of-coordination-compounds"
      },
      {
        "title": "IUPAC Gold Book: bridging ligand",
        "url": "https://old.goldbook.iupac.org/html/B/B00741.html"
      },
      {
        "title": "University of Sargodha: coordination stereoisomerism",
        "url": "https://lms.su.edu.pk/download?filename=1607015985-isomersism.pdf&lesson=51720"
      },
      {
        "title": "Karpagam Academy: substitution lability and inertness",
        "url": "https://kahedu.edu.in/naac/C-3/Additional%20documents/E-content/641.pdf"
      }
    ]
  },
  "practical-chemistry": {
    "base": 21,
    "quizBase": 32,
    "chapters": [
      {
        "title": "Gravimetry converts precipitate mass into analyte mass",
        "formula": "n(SO₄²⁻)=m(BaSO₄,corrected)/M(BaSO₄); sulfate mass is not precipitate mass",
        "script": "A gravimetric precipitate contains the analyte plus atoms supplied by the precipitating reagent. In a supplied sulfate analysis, a zero point six zero zero zero gram sample gives a measured barium sulfate mass zero point four seven one zero gram. A matched additive blank contributes zero point zero zero five zero gram, leaving corrected precipitate mass zero point four six six zero. Use the supplied rounded barium sulfate molar mass two hundred thirty three grams per mole. The corrected precipitate represents zero point zero zero two zero zero zero mole sulfate, since each formula unit contains one sulfate. Multiplying by the sulfate molar mass ninety six gives zero point one nine two gram sulfate, or thirty two point zero percent of the original sample. Calling the entire precipitate mass sulfate would count the added barium as analyte. This result assumes the isolated material has the stated composition, quantitative recovery and a valid blank correction. Retained liquid or coprecipitated material can bias mass upward, whereas incomplete precipitation or transfer loss can bias it downward. A larger recovered mass does not automatically demonstrate a more accurate analysis.",
        "points": [
          "Sample .6000 g; precipitate .4710 g · Subtract matched blank .0050 g · Corrected BaSO₄ .4660 g",
          "MBaSO₄=233; MSO₄=96 · n=.4660/233=.002000 mol · Sulfate mass .1920 g",
          "Mass fraction = .1920/.6000 · Added Ba is not sulfate · 32.0% sulfate by mass"
        ],
        "board": {
          "heading": "Gravimetry converts precipitate mass into analyte mass",
          "columns": [
            "Specified model",
            "Count / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Sample .6000 g; precipitate .4710 g",
              "Subtract matched blank .0050 g",
              "Corrected BaSO₄ .4660 g"
            ],
            [
              "MBaSO₄=233; MSO₄=96",
              "n=.4660/233=.002000 mol",
              "Sulfate mass .1920 g"
            ],
            [
              "Mass fraction = .1920/.6000",
              "Added Ba is not sulfate",
              "32.0% sulfate by mass"
            ]
          ]
        }
      },
      {
        "title": "Selective precipitation starts with free-ion thresholds",
        "formula": "At onset: Ksp=[Mⁿ⁺][OH⁻]ⁿ; pH model uses Kw=10⁻¹⁴ at 25 °C",
        "script": "Selective precipitation needs a defined free ion model rather than a colour observation alone. Take initial free iron three and magnesium two concentrations both zero point zero one zero zero molar. Use supplied idealized solubility products ten to the negative thirty eight for iron hydroxide and ten to the negative eleven for magnesium hydroxide, with water ion product ten to the negative fourteen at twenty five degrees Celsius. The iron hydroxide onset requires hydroxide concentration equal to the cube root of ten to the negative thirty six, or ten to the negative twelve molar. That corresponds to p H two. Magnesium hydroxide onset instead needs the square root of ten to the negative nine, about three point one six times ten to the negative five molar, giving p H nine point five. In this simplified comparison a p H of five can precipitate iron hydroxide without reaching magnesium hydroxide saturation. These are onset and selectivity calculations, not a complete salt analysis protocol. Metal hydrolysis, other complexes, activities and changing free ion concentrations can alter real boundaries. Use the hydroxide stoichiometric exponent before comparing two numerical solubility products.",
        "points": [
          "Initial free metal: .0100 M each · Fe(OH)₃: Ksp=10⁻³⁸ · Onset [OH⁻]=10⁻¹²; pH 2",
          "Mg(OH)₂: Ksp=10⁻¹¹ · [OH⁻]=√10⁻⁹ · Onset pH 9.5",
          "At pH 5 in stated ideal model · Fe precipitates; Mg unsaturated · Complexation can change boundaries"
        ],
        "board": {
          "heading": "Selective precipitation starts with free-ion thresholds",
          "columns": [
            "Specified model",
            "Count / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Initial free metal: .0100 M each",
              "Fe(OH)₃: Ksp=10⁻³⁸",
              "Onset [OH⁻]=10⁻¹²; pH 2"
            ],
            [
              "Mg(OH)₂: Ksp=10⁻¹¹",
              "[OH⁻]=√10⁻⁹",
              "Onset pH 9.5"
            ],
            [
              "At pH 5 in stated ideal model",
              "Fe precipitates; Mg unsaturated",
              "Complexation can change boundaries"
            ]
          ]
        }
      },
      {
        "title": "Standardize the titrant before using its concentration",
        "formula": "Primary-standard acid amount → standardized NaOH → unknown acid equivalents",
        "script": "A titrant label is not a substitute for a measured concentration. In a supplied standardization dataset, zero point five one zero five gram of pure potassium hydrogen phthalate, abbreviated K H P, is neutralized by twenty five point zero zero millilitres of sodium hydroxide. Use molar mass two hundred four point two grams per mole and one neutralizable proton per formula unit. The standard amount is zero point zero zero two five zero zero mole, so sodium hydroxide concentration is zero point one zero zero zero molar. Now a separate zero point two five zero zero gram sample of a pure diprotic acid consumes twenty point zero zero millilitres of this base at the stipulated complete two proton equivalence. The base amount is zero point zero zero two zero zero zero mole, corresponding to zero point zero zero one zero zero zero mole acid. Its inferred molar mass is two hundred fifty grams per mole. The second calculation uses the standardized concentration and the acid's two equivalent stoichiometry. It assumes complete neutralization, a suitable endpoint and no other base consuming species. These are original data interpretation exercises rather than instructions to prepare either solution.",
        "points": [
          "KHP .5105 g; M=204.2 · One acid equivalent per mole · n=.002500 mol",
          "NaOH volume .02500 L · C=.002500/.02500 · .1000 mol/L NaOH",
          "H₂A .2500 g uses .02000 L · nacid=nOH/2=.001000 mol · M(H₂A)=250 g/mol"
        ],
        "board": {
          "heading": "Standardize the titrant before using its concentration",
          "columns": [
            "Specified model",
            "Count / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "KHP .5105 g; M=204.2",
              "One acid equivalent per mole",
              "n=.002500 mol"
            ],
            [
              "NaOH volume .02500 L",
              "C=.002500/.02500",
              ".1000 mol/L NaOH"
            ],
            [
              "H₂A .2500 g uses .02000 L",
              "nacid=nOH/2=.001000 mol",
              "M(H₂A)=250 g/mol"
            ]
          ]
        }
      },
      {
        "title": "Back titration subtracts amounts before applying ratios",
        "formula": "Acid consumed by carbonate = acid added − residual acid; n(CaCO₃)=n(H⁺ consumed)/2",
        "script": "Back titration determines an analyte from a known excess reagent and the amount left afterward. Consider a supplied one point zero zero zero gram sample containing calcium carbonate and an acid inert residue. It consumes part of twenty five point zero zero millilitres of one point zero zero zero molar hydrochloric acid. A separate residual strong acid determination requires fifteen point zero zero millilitres of zero point five zero zero zero molar sodium hydroxide. Initial acid amount is zero point zero two five zero zero mole and residual acid zero point zero zero seven five zero zero mole. Their difference is zero point zero one seven five zero mole of hydrogen ions consumed by carbonate. Each calcium carbonate consumes two hydrogen ions to give calcium ions, carbon dioxide and water. The carbonate amount is therefore zero point zero zero eight seven five zero mole. Using rounded molar mass one hundred gives zero point eight seven five zero gram carbonate, or eighty seven point five percent purity. This stated model excludes other acid consuming impurities and interference from dissolved carbon dioxide in the residual acid measurement. Subtracting the two volumes directly would be wrong because their concentrations differ.",
        "points": [
          "Added HCl: .02500 L × 1.000 · Residual: .01500 L × .5000 · Consumed H⁺=.01750 mol",
          "CaCO₃ + 2H⁺ reaction · nCaCO₃=.01750/2 · .008750 mol carbonate",
          "MCaCO₃=100; sample 1.000 g · Carbonate mass .8750 g · 87.5% purity; stated interference limits"
        ],
        "board": {
          "heading": "Back titration subtracts amounts before applying ratios",
          "columns": [
            "Specified model",
            "Count / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Added HCl: .02500 L × 1.000",
              "Residual: .01500 L × .5000",
              "Consumed H⁺=.01750 mol"
            ],
            [
              "CaCO₃ + 2H⁺ reaction",
              "nCaCO₃=.01750/2",
              ".008750 mol carbonate"
            ],
            [
              "MCaCO₃=100; sample 1.000 g",
              "Carbonate mass .8750 g",
              "87.5% purity; stated interference limits"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "A .4710 g BaSO4 measurement includes a matched additive .0050 g blank. Corrected precipitate mass is:",
        "options": [
          ".4760 g",
          ".4660 g",
          ".0050 g",
          ".1920 g"
        ],
        "answer": 1,
        "explanation": "Subtract the specified additive blank from measured precipitate mass."
      },
      {
        "question": "For .4660 g corrected BaSO4 with M=233 g/mol, MSO4=96 g/mol and .6000 g sample, sulfate mass percentage is:",
        "options": [
          "77.7%",
          "46.6%",
          "32.0%",
          "19.2%"
        ],
        "answer": 2,
        "explanation": "Sulfate amount=.4660/233=.002000 mol; sulfate mass=.1920 g; percentage=.1920/.6000×100=32.0%."
      },
      {
        "question": "For free [Fe3+]=.0100 M and supplied Ksp(Fe(OH)3)=10⁻³⁸, onset [OH−] is:",
        "options": [
          "10⁻¹⁸ M",
          "10⁻⁹ M",
          "10⁻⁶ M",
          "10⁻¹² M"
        ],
        "answer": 3,
        "explanation": "Solve [OH−]³=10⁻³⁸/.0100=10⁻³⁶, giving [OH−]=10⁻¹² M."
      },
      {
        "question": "For free [Mg2+]=.0100 M, Ksp(Mg(OH)2)=10⁻¹¹ and Kw=10⁻¹⁴, the ideal onset pH is:",
        "options": [
          "9.5",
          "2.0",
          "4.5",
          "12.0"
        ],
        "answer": 0,
        "explanation": "[OH−]=√(10⁻¹¹/.0100)=10⁻⁴·⁵; pH=14−4.5=9.5."
      },
      {
        "question": "Pure monoprotic KHP .5105 g, M=204.2 g/mol, consumes 25.00 mL NaOH. The standardized NaOH concentration is:",
        "options": [
          ".01000 M",
          ".1000 M",
          "1.000 M",
          ".2000 M"
        ],
        "answer": 1,
        "explanation": "KHP amount=.002500 mol; the 1:1 neutralization gives CNaOH=.002500/.02500=.1000 M."
      },
      {
        "question": "A pure diprotic acid sample .2500 g consumes 20.00 mL of that .1000 M base at complete two-proton equivalence. Its molar mass is:",
        "options": [
          "125 g/mol",
          "500 g/mol",
          "250 g/mol",
          "25.0 g/mol"
        ],
        "answer": 2,
        "explanation": "The base amount is .002000 mol, so acid amount is half that; M=.2500/.001000=250 g/mol."
      },
      {
        "question": "Back titration adds .02500 mol HCl and finds .007500 mol residual strong acid. Hydrogen ions consumed by the sample are:",
        "options": [
          ".03250 mol",
          ".007500 mol",
          ".02500 mol",
          ".01750 mol"
        ],
        "answer": 3,
        "explanation": "Subtract amounts: .02500−.007500=.01750 mol H+ consumed."
      },
      {
        "question": "If only CaCO3 consumes that .01750 mol H+ in a 1.000 g sample, using MCaCO3=100 g/mol, purity is:",
        "options": [
          "87.5%",
          "175%",
          "43.75%",
          "17.5%"
        ],
        "answer": 0,
        "explanation": "Each carbonate consumes two protons; .008750 mol corresponds to .8750 g or 87.5% of the sample."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: quantitative gravimetric and titration analysis",
        "url": "https://openstax.org/books/chemistry-2e/pages/4-5-quantitative-chemical-analysis"
      },
      {
        "title": "OpenStax: precipitation and dissolution equilibria",
        "url": "https://openstax.org/books/chemistry-2e/pages/15-1-precipitation-and-dissolution"
      },
      {
        "title": "OpenStax: acid-base titrations and equivalence",
        "url": "https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations"
      }
    ]
  }
} as const;
