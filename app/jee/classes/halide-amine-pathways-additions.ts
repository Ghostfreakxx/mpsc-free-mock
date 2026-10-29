// Authored by scripts/expand-halide-amine-pathways.mjs.
export const halideAminePathwaysAdditions = {
  "organic-halogens": {
    "chapters": [
      {
        "title": "Benzyne substitution can put the incoming group at a neighbouring carbon",
        "formula": "Elimination–addition: remove adjacent H and X; nucleophile can attach at either benzyne carbon",
        "script": "Ordinary chlorobenzene resists the usual alkyl substitution pathways, but a sufficiently strong base can enable a different reaction map. In the selected benzyne pathway, loss of a halogen and an adjacent hydrogen creates a highly reactive intermediate involving those two ring carbons. A nucleophile can then add at either end of that unit, followed by proton transfer. Number the original halogen-bearing carbon one and its selected neighbour two. An isotope label on carbon one stays on that carbon throughout; the incoming amino group need not end up bonded to the labelled carbon in every product. Capture at carbon two instead places the label next to the amino group. With an otherwise unsubstituted ring, these labelled products distinguish pathways that unlabelled aniline alone would conceal. This is a mechanism and atom-tracking comparison, not ordinary backside attack at an aromatic carbon. A suitable adjacent hydrogen is required for the specified elimination route. Substituents and conditions can change which intermediate forms and its product proportions; do not infer a universal equal mixture from this schematic.",
        "points": [
          "C1–X, adjacent C2–H · Eliminate to C1–C2 unit · Strong-base route",
          "Label stays at C1 · NH2 can enter C1 or C2 · Two label relationships",
          "No suitable adjacent H · Specified route blocked · Other routes differ"
        ],
        "board": {
          "heading": "Track the ring atom, not just the name",
          "columns": [
            "Starting map",
            "Result / count",
            "Condition / limit"
          ],
          "rows": [
            [
              "C1–X, adjacent C2–H",
              "Eliminate to C1–C2 unit",
              "Strong-base route"
            ],
            [
              "Label stays at C1",
              "NH2 can enter C1 or C2",
              "Two label relationships"
            ],
            [
              "No suitable adjacent H",
              "Specified route blocked",
              "Other routes differ"
            ]
          ]
        }
      },
      {
        "title": "Allylic capture can move the double bond without moving carbon atoms",
        "formula": "C1=C2–C3+ ↔ +C1–C2=C3; capture at C1 or C3 preserves the C1–C2–C3 skeleton",
        "script": "An allylic carbocation distributes positive charge over a connected three-carbon system. The two familiar resonance drawings are not separate molecules repeatedly exchanging atoms. Use an explicitly numbered four-carbon skeleton to follow a selected ionizing substitution: carbon one is double bonded to carbon two, carbon two is single bonded to carbon three, and carbon three is bonded to carbon four. Departure of a leaving group from carbon three gives an allylic cation. One contributor places positive charge at carbon three; another places it at carbon one with the double bond between carbons two and three. Capture by water and subsequent proton loss can give an alcohol at carbon three with the original terminal double bond, or an alcohol at carbon one with the shifted double bond. The carbon backbone has not been rearranged by a carbon migration. These products have four carbons and the same molecular formula but different connectivity. Actual ratios depend on conditions, and direct concerted allylic substitution can also be relevant elsewhere. The stipulated ionizing model does not predict every allylic halide reaction.",
        "points": [
          "C1=C2–C3+–C4 · Capture C3: OH at C3 · Terminal C1=C2 stays",
          "+C1–C2=C3–C4 · Capture C1: OH at C1 · Double bond shifts",
          "Both alcohol skeletons · 4 C; C4H8O · No C–C migration"
        ],
        "board": {
          "heading": "Resonance changes the capture map",
          "columns": [
            "Starting map",
            "Result / count",
            "Condition / limit"
          ],
          "rows": [
            [
              "C1=C2–C3+–C4",
              "Capture C3: OH at C3",
              "Terminal C1=C2 stays"
            ],
            [
              "+C1–C2=C3–C4",
              "Capture C1: OH at C1",
              "Double bond shifts"
            ],
            [
              "Both alcohol skeletons",
              "4 C; C4H8O",
              "No C–C migration"
            ]
          ]
        }
      },
      {
        "title": "A proton donor consumes Grignard reagent before carbonyl addition",
        "formula": "Ideal ledger: 0.040 mol EtMgBr − 0.015 mol EtOH = 0.025 mol remaining EtMgBr",
        "script": "A Grignard reagent has two possible jobs that must not be confused: it can transfer its carbon group to a suitable electrophile, or it can take a proton from a sufficiently acidic donor. In an ideal stated sequence, start with forty millimoles of ethylmagnesium bromide and add fifteen millimoles of ethanol first. Each ethanol molecule supplies one hydroxyl proton, consuming one organomagnesium equivalent and producing one ethane molecule. Twenty-five millimoles of Grignard reagent remain if this quench is complete and no other proton source is present. Only then add excess propanone. At most twenty-five millimoles of the corresponding tertiary alcohol can form after a suitable aqueous workup. Its skeleton has the three carbons of propanone plus the two of the ethyl group, so it is a five-carbon alcohol. The ethane formed earlier does not return to the addition pool. This is an ideal stoichiometric upper bound, not an experimental yield guarantee. Mixing order, water contamination and other reactive groups can invalidate the simplified ledger.",
        "points": [
          "40 mmol EtMgBr +15 EtOH · 15 mmol ethane · OH quench first",
          "25 mmol reagent left · Excess propanone next · At most25 mmol alcohol",
          "3 carbonyl C +2 ethyl C · 5-carbon tertiary alcohol · After workup"
        ],
        "board": {
          "heading": "Spend reagent equivalents only once",
          "columns": [
            "Starting map",
            "Result / count",
            "Condition / limit"
          ],
          "rows": [
            [
              "40 mmol EtMgBr +15 EtOH",
              "15 mmol ethane",
              "OH quench first"
            ],
            [
              "25 mmol reagent left",
              "Excess propanone next",
              "At most25 mmol alcohol"
            ],
            [
              "3 carbonyl C +2 ethyl C",
              "5-carbon tertiary alcohol",
              "After workup"
            ]
          ]
        }
      },
      {
        "title": "The chlorine ozone cycle regenerates the chlorine atom",
        "formula": "Cl• + O3 → ClO• + O2; ClO• + O → Cl• + O2; net O3 + O → 2O2",
        "script": "The environmental significance of a persistent halogen-containing compound depends on what it can become after transport and irradiation. A simplified stratospheric chlorine cycle begins with a chlorine atom reacting with ozone to form chlorine monoxide and molecular oxygen. In a second selected step, chlorine monoxide reacts with an oxygen atom to regenerate the chlorine atom and make another oxygen molecule. Add the equations and cancel chlorine and chlorine monoxide from opposite sides. The net result consumes one ozone molecule and one oxygen atom and produces two oxygen molecules. Chlorine is regenerated rather than consumed once for each net event, which is the catalytic feature of this cycle. It does not create chlorine atoms from nothing, nor imply that one chlorine atom always destroys a fixed number of ozone molecules. Reservoir formation, competing chemistry and available light and oxygen species matter. Other important ozone-loss cycles operate under different atmospheric conditions. The two-step scheme explains a chemical principle; it is not a complete atmospheric model or a current regulatory statement about every halogenated compound.",
        "points": [
          "Cl• + O3 · ClO• + O2 · Ozone consumed",
          "ClO• + O · Cl• + O2 · Chlorine regenerated",
          "Cancel Cl• and ClO• · O3 + O → 2O2 · Selected catalytic cycle"
        ],
        "board": {
          "heading": "Cancel intermediates to find the net change",
          "columns": [
            "Starting map",
            "Result / count",
            "Condition / limit"
          ],
          "rows": [
            [
              "Cl• + O3",
              "ClO• + O2",
              "Ozone consumed"
            ],
            [
              "ClO• + O",
              "Cl• + O2",
              "Chlorine regenerated"
            ],
            [
              "Cancel Cl• and ClO•",
              "O3 + O → 2O2",
              "Selected catalytic cycle"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "In the specified benzyne route, a labelled original halogen-bearing C1 and adjacent C2 form the reactive unit. Which statement is valid?",
        "options": [
          "The label must leave with halide",
          "NH2 can attach at C1 or C2 while the label stays at C1",
          "Every carbon becomes a new isotope",
          "Only alkyl backside SN2 is possible"
        ],
        "answer": 1,
        "explanation": "The carbon label is retained; addition at either benzyne carbon changes its relationship to the amino group."
      },
      {
        "question": "What is required for the specified base-induced elimination of HX to a benzyne?",
        "options": [
          "A tertiary alkyl carbon",
          "Water as the only base",
          "A suitable hydrogen adjacent to the ring halogen",
          "Loss of all six ring carbons"
        ],
        "answer": 2,
        "explanation": "The selected elimination removes X and an adjacent H; this requirement is specific to that route."
      },
      {
        "question": "For the stipulated C1=C2–C3+–C4 allylic cation, capture at C1 gives which bond pattern?",
        "options": [
          "C1=C2 and OH at C3 only",
          "A five-carbon ring",
          "A broken C2–C3 backbone",
          "OH at C1 and C2=C3"
        ],
        "answer": 3,
        "explanation": "The other resonance contributor places charge at C1 and the double bond at C2=C3; carbon connectivity is retained."
      },
      {
        "question": "The two selected water-capture alcohols from the four-carbon allylic cation have which shared formula?",
        "options": [
          "C4H8O",
          "C3H8O",
          "C4H10O2",
          "C5H10O"
        ],
        "answer": 0,
        "explanation": "Both retain four carbons and one alkene; the alcohol position and double-bond position differ."
      },
      {
        "question": "40 mmol EtMgBr is first quenched by15 mmol ethanol, then excess propanone is added. Ideal maximum final tertiary alcohol?",
        "options": [
          "40 mmol",
          "25 mmol",
          "15 mmol",
          "55 mmol"
        ],
        "answer": 1,
        "explanation": "The hydroxyl proton consumes15 mmol reagent before the carbonyl addition, leaving25 mmol."
      },
      {
        "question": "How many carbons are in the alcohol from ethylmagnesium bromide addition to propanone after workup?",
        "options": [
          "2",
          "3",
          "5",
          "6"
        ],
        "answer": 2,
        "explanation": "The carbonyl substrate contributes three and the ethyl group contributes two; proton quenching does not add carbon."
      },
      {
        "question": "Add Cl•+O3→ClO•+O2 and ClO•+O→Cl•+O2. What is the net change?",
        "options": [
          "Cl•→ClO• only",
          "2O3→3O2 for these two steps",
          "O2→2O",
          "O3+O→2O2"
        ],
        "answer": 3,
        "explanation": "Cancel Cl• and ClO•; four oxygen atoms remain balanced on each side."
      },
      {
        "question": "Why is chlorine catalytic in the supplied two-step ozone cycle?",
        "options": [
          "It is regenerated in the second step",
          "It is consumed completely in each cycle",
          "It creates oxygen atoms from nothing",
          "Every chlorine compound has identical atmospheric chemistry"
        ],
        "answer": 0,
        "explanation": "Regeneration allows further cycles; competing reservoir chemistry and conditions limit actual chain lengths."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: benzyne",
        "url": "https://openstax.org/books/organic-chemistry/pages/16-7-benzyne"
      },
      {
        "title": "OpenStax: the SN1 reaction",
        "url": "https://openstax.org/books/organic-chemistry/pages/11-4-the-sn1-reaction"
      },
      {
        "title": "OpenStax: Grignard reagents",
        "url": "https://openstax.org/books/organic-chemistry/pages/10-6-reactions-of-alkyl-halides-grignard-reagents"
      },
      {
        "title": "NOAA: ozone depletion, twenty questions",
        "url": "https://www.csl.noaa.gov/assessments/ozone/2018/twentyquestions/"
      }
    ]
  },
  "organic-nitrogen": {
    "chapters": [
      {
        "title": "Azo coupling needs both an activated ring and suitable solution conditions",
        "formula": "Ar–N2+ + activated Ar′–H → Ar–N=N–Ar′ + H+; ring carbon joins the azo group",
        "script": "A diazonium ion can act as an electrophile toward a sufficiently activated aromatic ring. In a selected coupling with phenol, the new bond joins a carbon of the phenol ring to the terminal nitrogen of the diazonium group. The product contains an azo bridge between two aromatic systems; it is not made by simply joining the two oxygen atoms or removing both nitrogen atoms. If the para position of phenol is available, para coupling is commonly favoured in the elementary map, while a blocked position changes the available sites. Solution conditions matter because phenoxide is a stronger ring activator than neutral phenol. For an arylamine coupling component, excessive protonation of the amino group instead reduces its ability to activate the ring. These observations do not justify choosing an arbitrarily extreme pH: the diazonium partner also has condition-dependent stability and competing reactions. Treat the stated medium as part of the reaction identity. Colour is consistent with an extended conjugated product, but colour alone does not establish the complete connectivity or purity of an unknown dye.",
        "points": [
          "Diazonium + activated ring · Ar–N=N–Ar′ · New C–N bond",
          "Phenol: para site open · Para often favoured · Blocked sites change map",
          "Phenoxide / anilinium · Activation differs · Use stated medium"
        ],
        "board": {
          "heading": "The coupling partner and medium both matter",
          "columns": [
            "Starting map",
            "Result / count",
            "Condition / limit"
          ],
          "rows": [
            [
              "Diazonium + activated ring",
              "Ar–N=N–Ar′",
              "New C–N bond"
            ],
            [
              "Phenol: para site open",
              "Para often favoured",
              "Blocked sites change map"
            ],
            [
              "Phenoxide / anilinium",
              "Activation differs",
              "Use stated medium"
            ]
          ]
        }
      },
      {
        "title": "Aromatic amide reduction and rearrangement give different amines",
        "formula": "PhCONH2 → PhCH2NH2 by suitable reduction; PhCONH2 → PhNH2 by Hofmann rearrangement",
        "script": "Two transformations of the same primary amide can produce amines with different carbon skeletons. Take benzamide, with a benzene ring directly attached to a carbonyl carbon and that carbonyl attached to an amino group. Suitable amide reduction converts the carbonyl carbon into a methylene without deleting it. The product is benzylamine, in which nitrogen is bonded to a saturated carbon outside the ring. In a Hofmann rearrangement of a primary amide, the carbonyl carbon is removed from the organic amine skeleton. Benzamide therefore gives aniline instead, with nitrogen directly attached to the aromatic ring. Both products are primary amines because nitrogen has one carbon substituent, but only aniline is an arylamine in this comparison. Apply the same bookkeeping to phenylacetamide, which already has a methylene between ring and carbonyl: its Hofmann product is benzylamine, not aniline. Count and mark the carbonyl carbon before choosing the product name. Reagent compatibility and actual yield remain separate questions, and Hofmann rearrangement must not be confused with elimination from a quaternary ammonium hydroxide.",
        "points": [
          "PhCONH2: reduction · PhCH2NH2;7 C · Carbonyl C retained",
          "PhCONH2: rearrangement · PhNH2;6 C · Carbonyl C removed",
          "PhCH2CONH2: rearrange · PhCH2NH2;7 C · Existing CH2 retained"
        ],
        "board": {
          "heading": "Mark the carbonyl carbon before naming",
          "columns": [
            "Starting map",
            "Result / count",
            "Condition / limit"
          ],
          "rows": [
            [
              "PhCONH2: reduction",
              "PhCH2NH2;7 C",
              "Carbonyl C retained"
            ],
            [
              "PhCONH2: rearrangement",
              "PhNH2;6 C",
              "Carbonyl C removed"
            ],
            [
              "PhCH2CONH2: rearrange",
              "PhCH2NH2;7 C",
              "Existing CH2 retained"
            ]
          ]
        }
      },
      {
        "title": "Gas and total-base data can resolve a stipulated two-amine mixture",
        "formula": "n(primary) = n(N2); n(tertiary) = n(total monobasic amines) − n(N2)",
        "script": "One measurement rarely identifies every component of an arbitrary mixture. A selected two-component problem becomes solvable only after its chemical assumptions are stated. Suppose a sample contains just a primary aliphatic monoamine and a tertiary aliphatic monoamine, with no other acid-consuming species. A separate aliquot establishes thirty millimoles of total monobasic amine sites. Under the specified quantitative nitrous-acid comparison, only the primary component supplies the measured nitrogen gas, and ten millimoles of nitrogen are collected after suitable corrections. The primary amine amount is therefore ten millimoles, and subtraction gives twenty millimoles of the tertiary component. The primary mole fraction is one third, not automatically its mass fraction. The nitrogen molecule contains one nitrogen atom from the amine and one supplied by the nitrosating reagent; it does not require two primary amine molecules per nitrogen molecule. Gas dissolution, water vapour, other nitrogen-forming species and incomplete conversion would need correction in a real analysis. Without the two-component and selective-response assumptions, these two numbers need not uniquely determine the composition.",
        "points": [
          "Total monoamine sites · 30 mmol · Separate measurement",
          "Corrected N2 amount · 10 mmol primary amine · Stated selective model",
          "Tertiary:30−10 · 20 mmol; primary x=1/3 · Not mass fraction"
        ],
        "board": {
          "heading": "Two independent measurements, stated assumptions",
          "columns": [
            "Starting map",
            "Result / count",
            "Condition / limit"
          ],
          "rows": [
            [
              "Total monoamine sites",
              "30 mmol",
              "Separate measurement"
            ],
            [
              "Corrected N2 amount",
              "10 mmol primary amine",
              "Stated selective model"
            ],
            [
              "Tertiary:30−10",
              "20 mmol; primary x=1/3",
              "Not mass fraction"
            ]
          ]
        }
      },
      {
        "title": "Amine salt mass measures protonation equivalents, not nitrogen substitution class",
        "formula": "B + HCl → BH+Cl−; 0.020 mol monoamine binds0.020 mol HCl in the stated dry-salt ledger",
        "script": "A primary, secondary or tertiary monoamine can each accept one proton at its available nitrogen lone pair. The number of carbon groups bonded to nitrogen is not the number of hydrogen chloride equivalents needed for ordinary complete protonation. In a selected dry-salt calculation, a pure monobasic amine sample has amount twenty millimoles and mass one point four six grams. Complete formation of its anhydrous hydrochloride increases the mass by twenty millimoles times thirty-six point five grams per mole, or zero point seven three grams. The ideal salt mass is therefore two point one nine grams, and the starting amine molar mass is seventy-three grams per mole. These numbers do not distinguish primary, secondary and tertiary structural isomers with that molar mass. Salt formation adds a proton and chloride counterion without adding an organic carbon group. A diamine, a hydrate, residual solvent or incomplete drying would require a different ledger. Acid-base stoichiometry, nitrogen substitution class and a molecular structural assignment are three separate tasks; use additional evidence before claiming a unique amine.",
        "points": [
          "20 mmol monoamine · 20 mmol HCl · One basic site each",
          "Mass gain:.020×36.5 · 0.730 g · Anhydrous salt model",
          "1.460+.730 · 2.190 g salt; M(B)=73 · Class not determined"
        ],
        "board": {
          "heading": "A salt balance does not identify an isomer",
          "columns": [
            "Starting map",
            "Result / count",
            "Condition / limit"
          ],
          "rows": [
            [
              "20 mmol monoamine",
              "20 mmol HCl",
              "One basic site each"
            ],
            [
              "Mass gain:.020×36.5",
              "0.730 g",
              "Anhydrous salt model"
            ],
            [
              "1.460+.730",
              "2.190 g salt; M(B)=73",
              "Class not determined"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "In selected phenol azo coupling, which new connection forms?",
        "options": [
          "O–O between two phenols",
          "A ring C–N bond to an azo bridge",
          "Deletion of both diazonium nitrogen atoms",
          "A carbon–magnesium bond"
        ],
        "answer": 1,
        "explanation": "The activated ring carbon bonds to the diazonium nitrogen end, yielding Ar–N=N–Ar′."
      },
      {
        "question": "Why must medium be considered in an azo-coupling problem?",
        "options": [
          "pH never affects either partner",
          "Strongest possible acid always maximizes phenoxide",
          "Phenol/phenoxide and amine/anilinium have different activation, and diazonium stability also matters",
          "Any coloured product proves one unique structure"
        ],
        "answer": 2,
        "explanation": "Protonation changes activation; both coupling partner and diazonium reagent must be compatible with the stated conditions."
      },
      {
        "question": "Suitable reduction versus Hofmann rearrangement of benzamide gives which ordered pair?",
        "options": [
          "Aniline; benzylamine",
          "Benzene; phenol",
          "Two identical aniline products",
          "Benzylamine; aniline"
        ],
        "answer": 3,
        "explanation": "Reduction retains the carbonyl carbon as CH2; rearrangement removes it from the amine skeleton."
      },
      {
        "question": "Hofmann rearrangement of PhCH2CONH2 gives which organic amine?",
        "options": [
          "PhCH2NH2",
          "PhNH2",
          "PhCH2CH2NH2",
          "PhCONH2"
        ],
        "answer": 0,
        "explanation": "The carbonyl carbon is removed, but the pre-existing benzylic CH2 remains."
      },
      {
        "question": "A stipulated primary/tertiary aliphatic monoamine mixture contains30 mmol total sites and gives10 mmol N2 only from the primary amine. Tertiary amount?",
        "options": [
          "10 mmol",
          "20 mmol",
          "30 mmol",
          "40 mmol"
        ],
        "answer": 1,
        "explanation": "One primary amine supplies one N2 in this stated response;30−10=20 mmol tertiary amine."
      },
      {
        "question": "For that30 mmol mixture with10 mmol primary amine, what is the primary mole fraction?",
        "options": [
          "2/3",
          "1/2",
          "1/3",
          "Its mass fraction must be1/3"
        ],
        "answer": 2,
        "explanation": "10/30=1/3; mass fractions additionally depend on molar masses."
      },
      {
        "question": "A1.460 g,20 mmol monobasic amine forms an anhydrous hydrochloride completely. Use M(HCl)=36.5. Salt mass?",
        "options": [
          "1.460 g",
          "1.825 g",
          "0.730 g",
          "2.190 g"
        ],
        "answer": 3,
        "explanation": "The salt gains.020×36.5=.730 g, giving2.190 g."
      },
      {
        "question": "Does one HCl equivalent per monoamine establish whether it is primary, secondary or tertiary?",
        "options": [
          "No; each can accept one proton at its one basic nitrogen",
          "Yes; only primary amines protonate",
          "Yes; tertiary amines require three equivalents",
          "Yes; salt formation adds an organic carbon group"
        ],
        "answer": 0,
        "explanation": "Protonation equivalents count available basic sites, not the number of carbon substituents on nitrogen."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: arylamine reactions",
        "url": "https://openstax.org/books/organic-chemistry/pages/24-8-reactions-of-arylamines"
      },
      {
        "title": "OpenStax: amine synthesis",
        "url": "https://openstax.org/books/organic-chemistry/pages/24-6-synthesis-of-amines"
      },
      {
        "title": "NCERT via IIT Kanpur SATHEE: amines",
        "url": "https://sathee.iitk.ac.in/ncert-books/ncert-books-theory/class-12/nbt-che-12/chem-12-unit-13-amines/"
      },
      {
        "title": "OpenStax: amine basicity",
        "url": "https://openstax.org/books/organic-chemistry/pages/24-3-basicity-of-amines"
      }
    ]
  }
} as const;
