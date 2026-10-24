// Authored by scripts/expand-organic-analysis-reasoning.mjs.
export const organicAnalysisReasoningAdditions = {
  "organic-principles": {
    "base": 17,
    "quizBase": 28,
    "chapters": [
      {
        "title": "Break CIP ties one layer at a time",
        "formula": "Direct atom first; then descending neighbour lists; isotope mass breaks same-element ties",
        "script": "Priority rules compare the atoms directly attached to a stereogenic centre before considering the rest of each group. Oxygen outranks carbon because its atomic number is larger, even if the carbon substituent has a much greater total mass. If the directly attached atoms tie, compare the attached atom lists in descending atomic number order until the first difference. An ethyl group starts with a carbon attached onward to carbon, hydrogen and hydrogen. A methyl carbon instead has hydrogen, hydrogen and hydrogen, so ethyl outranks methyl. A hydroxymethyl carbon has oxygen, hydrogen and hydrogen and outranks ethyl at that first comparison. For multiple bonds, use the standard duplicate atom convention: an aldehyde carbon attached to oxygen by a double bond is compared using oxygen, oxygen and hydrogen. It therefore outranks hydroxymethyl in this comparison. Isotopes of the same element are ranked by mass number, so deuterium outranks ordinary hydrogen. Do not sum the atomic numbers in a whole substituent or rank groups by molecular mass. Establish the ordered groups first, then apply the viewing direction needed for an R or S assignment.",
        "points": [
          "All groups begin with carbon · CH₃: H,H,H; CH₂CH₃: C,H,H · Ethyl outranks methyl",
          "CH₂OH versus CHO · O,H,H versus O,O,H · CHO outranks CH₂OH",
          "Direct atoms first; isotopes second · O outranks C; ²H outranks ¹H · No total substituent-mass shortcut"
        ],
        "board": {
          "heading": "Break CIP ties one layer at a time",
          "columns": [
            "Given / comparison",
            "Reason / accounting",
            "Result / limit"
          ],
          "rows": [
            [
              "All groups begin with carbon",
              "CH₃: H,H,H; CH₂CH₃: C,H,H",
              "Ethyl outranks methyl"
            ],
            [
              "CH₂OH versus CHO",
              "O,H,H versus O,O,H",
              "CHO outranks CH₂OH"
            ],
            [
              "Direct atoms first; isotopes second",
              "O outranks C; ²H outranks ¹H",
              "No total substituent-mass shortcut"
            ]
          ]
        }
      },
      {
        "title": "Two stereocentres can give a meso compound",
        "formula": "2,3-Dibromobutane: RR and SS are enantiomers; RS and SR describe one meso form",
        "script": "The familiar two to the power n count is a maximum for n independent tetrahedral stereocentres, not a guaranteed count for every molecule. Consider two three dibromobutane, whose two stereogenic carbons lie between identical methyl ends. The formal assignments R R and S S give a pair of nonsuperimposable mirror images. The mixed assignments R S and S R instead describe the same meso stereoisomer after the molecular symmetry is recognized. This form is achiral overall despite containing two stereogenic centres. There are therefore three configurational stereoisomers rather than four: one enantiomeric pair and one meso form. A meso sample is not a fifty fifty mixture of two enantiomers. Its lack of optical activity follows from the achiral molecular structure, while a racemic mixture has cancellation between equal amounts of opposite enantiomers under ordinary matched conditions. Nor does every molecule with one R and one S centre have to be meso. The substituent pattern and a valid symmetry or superposition argument must support that conclusion. Check actual connectivity and identical ends before reducing the maximum stereoisomer count.",
        "points": [
          "Two centres: formal maximum 2² · Check identical ends and symmetry · Maximum need not be achieved",
          "2,3-Dibromobutane RR / SS · Mirror-image pair · Two distinct enantiomers",
          "RS and SR for this connectivity · Same meso stereoisomer · Three total; meso is not a racemate"
        ],
        "board": {
          "heading": "Two stereocentres can give a meso compound",
          "columns": [
            "Given / comparison",
            "Reason / accounting",
            "Result / limit"
          ],
          "rows": [
            [
              "Two centres: formal maximum 2²",
              "Check identical ends and symmetry",
              "Maximum need not be achieved"
            ],
            [
              "2,3-Dibromobutane RR / SS",
              "Mirror-image pair",
              "Two distinct enantiomers"
            ],
            [
              "RS and SR for this connectivity",
              "Same meso stereoisomer",
              "Three total; meso is not a racemate"
            ]
          ]
        }
      },
      {
        "title": "Butane has distinct staggered conformations",
        "formula": "Along C2–C3: anti CH₃/CH₃ dihedral 180°; gauche ±60°; both staggered",
        "script": "Rotation about the central carbon carbon single bond of butane changes conformation without changing connectivity or configurational stereocentres. In a Newman projection viewed along carbon two to carbon three, each visible carbon carries a methyl group and two hydrogens. In the anti staggered arrangement, the methyl groups are separated by a dihedral angle of one hundred eighty degrees. In either gauche staggered arrangement, their separation is sixty degrees in one direction or the other. Both are staggered, but they are not equal in energy: the anti form is lower in the usual introductory comparison because the methyl groups are farther apart. The fully eclipsed arrangement with methyl groups aligned has a larger steric and torsional penalty. The two gauche positions do not mean two new constitutional compounds, and rapid rotation means a sample need not remain frozen in its lowest energy drawing. At ordinary conditions more than one conformation can be populated. Read the front carbon bonds from the central point and the rear carbon bonds from the surrounding circle. A flat sketch without that viewing convention can hide which groups actually overlap.",
        "points": [
          "View along C2–C3 · Each carbon: CH₃, H and H · Same butane connectivity",
          "Anti versus gauche · CH₃ dihedral 180° versus ±60° · Both staggered; anti lower in usual model",
          "Rotation changes dihedral angle · Fully eclipsed methyls align · Conformations, not new constitutional isomers"
        ],
        "board": {
          "heading": "Butane has distinct staggered conformations",
          "columns": [
            "Given / comparison",
            "Reason / accounting",
            "Result / limit"
          ],
          "rows": [
            [
              "View along C2–C3",
              "Each carbon: CH₃, H and H",
              "Same butane connectivity"
            ],
            [
              "Anti versus gauche",
              "CH₃ dihedral 180° versus ±60°",
              "Both staggered; anti lower in usual model"
            ],
            [
              "Rotation changes dihedral angle",
              "Fully eclipsed methyls align",
              "Conformations, not new constitutional isomers"
            ]
          ]
        }
      },
      {
        "title": "Enumerate C4H10O without double counting",
        "formula": "Acyclic saturated C₄H₁₀O: four alcohol connectivities plus three ether connectivities",
        "script": "A systematic isomer count needs a defined class and a rule for avoiding duplicate drawings. For ordinary neutral acyclic saturated compounds with formula four carbons, ten hydrogens and one oxygen, consider alcohols and ethers. Alcohols can use the straight four carbon skeleton with hydroxyl at carbon one or carbon two, giving butan one ol and butan two ol. The branched skeleton gives two methylpropan one ol and two methylpropan two ol. These are four alcohol connectivities. For ethers, split the four carbons between the two oxygen bonded groups as one plus three or two plus two. A methyl group can join either a straight propyl or an isopropyl group, giving two ether connectivities. Two ethyl groups give a third. Reversing the left and right groups around oxygen does not make another constitutional isomer. Thus there are seven constitutional isomers in the stated class. Butan two ol has a stereogenic carbon and two enantiomers, so counting individual configurational forms instead gives eight total structures under that different convention. State whether stereoisomers are being distinguished before presenting a single number.",
        "points": [
          "Alcohols: straight and branched skeletons · Two OH positions on each skeleton · Four alcohol connectivities",
          "Ethers: carbon splits 1+3 or 2+2 · Two propyl choices; one ethyl/ethyl · Three ether connectivities",
          "Constitutional count versus stereochemical count · Only butan-2-ol adds an enantiomer · Seven connectivities; eight individual forms"
        ],
        "board": {
          "heading": "Enumerate C4H10O without double counting",
          "columns": [
            "Given / comparison",
            "Reason / accounting",
            "Result / limit"
          ],
          "rows": [
            [
              "Alcohols: straight and branched skeletons",
              "Two OH positions on each skeleton",
              "Four alcohol connectivities"
            ],
            [
              "Ethers: carbon splits 1+3 or 2+2",
              "Two propyl choices; one ethyl/ethyl",
              "Three ether connectivities"
            ],
            [
              "Constitutional count versus stereochemical count",
              "Only butan-2-ol adds an enantiomer",
              "Seven connectivities; eight individual forms"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Under ordinary CIP rules, compare –CHO and –CH2OH attached through carbon. Which has higher priority?",
        "options": [
          "–CH2OH because it has more hydrogens",
          "–CHO because O,O,H outranks O,H,H",
          "They always remain tied",
          "Whichever group has the longer drawn bond"
        ],
        "answer": 1,
        "explanation": "The multiple-bond duplicate convention gives the aldehyde carbon an O,O,H comparison list, which outranks O,H,H."
      },
      {
        "question": "For directly attached isotopes of hydrogen, the higher CIP priority is:",
        "options": [
          "Ordinary 1H",
          "Whichever is drawn on a wedge",
          "Deuterium 2H",
          "They can never be distinguished"
        ],
        "answer": 2,
        "explanation": "Isotopes of the same element are ranked by mass number, so 2H outranks 1H."
      },
      {
        "question": "How many configurational stereoisomers does ordinary 2,3-dibromobutane have after accounting for its meso form?",
        "options": [
          "One",
          "Two",
          "Four",
          "Three"
        ],
        "answer": 3,
        "explanation": "RR and SS are enantiomers, while RS and SR describe the same meso stereoisomer for this symmetric connectivity."
      },
      {
        "question": "A meso form differs from a racemic mixture because the meso form is:",
        "options": [
          "An achiral molecular structure, rather than an equal mixture of opposite enantiomers",
          "Always a mixture of RR and SS molecules",
          "A molecule with no stereogenic centres by definition",
          "Necessarily optically active"
        ],
        "answer": 0,
        "explanation": "Meso describes molecular achirality despite stereogenic centres; racemic describes equal amounts of opposite enantiomers."
      },
      {
        "question": "The methyl–methyl dihedral angle in anti butane viewed along C2–C3 is:",
        "options": [
          "0°",
          "180°",
          "60°",
          "90°"
        ],
        "answer": 1,
        "explanation": "Anti staggered butane places the methyl groups opposite each other, giving a 180° dihedral angle."
      },
      {
        "question": "Which statement about anti and gauche butane is correct?",
        "options": [
          "They have different molecular formulas",
          "Gauche is always eclipsed",
          "Both are staggered conformations of the same connectivity",
          "Anti and gauche must be different constitutional isomers"
        ],
        "answer": 2,
        "explanation": "Single-bond rotation changes conformation; anti and gauche are both staggered but differ in methyl-group separation and energy."
      },
      {
        "question": "Counting only constitutional isomers of ordinary neutral acyclic saturated C4H10O gives:",
        "options": [
          "Four total",
          "Six total",
          "Eight total",
          "Seven total: four alcohols and three ethers"
        ],
        "answer": 3,
        "explanation": "Four alcohol connectivities and three ether connectivities give seven; reversing ether ends does not make a new isomer."
      },
      {
        "question": "If individual configurational forms are also distinguished in that C4H10O set, the total becomes:",
        "options": [
          "Eight, because butan-2-ol contributes an enantiomeric pair",
          "Fourteen, because every connectivity is chiral",
          "Seven, because no alcohol can be chiral",
          "Nine, because every ether has E/Z isomers"
        ],
        "answer": 0,
        "explanation": "Only butan-2-ol in the stated set has a stereogenic centre, replacing one connectivity by two enantiomeric forms."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: CIP sequence rules",
        "url": "https://openstax.org/books/organic-chemistry/pages/5-5-sequence-rules-for-specifying-configuration"
      },
      {
        "title": "OpenStax: meso compounds",
        "url": "https://openstax.org/books/organic-chemistry/pages/5-7-meso-compounds"
      },
      {
        "title": "OpenStax: butane conformations",
        "url": "https://openstax.org/books/organic-chemistry/pages/3-7-conformations-of-other-alkanes"
      },
      {
        "title": "OpenStax: alcohol and ether naming",
        "url": "https://openstax.org/books/organic-chemistry/pages/17-1-naming-alcohols-and-phenols"
      },
      {
        "title": "OpenStax: naming ethers",
        "url": "https://openstax.org/books/organic-chemistry/pages/18-1-names-and-properties-of-ethers"
      }
    ]
  },
  "purification-analysis": {
    "base": 17,
    "quizBase": 24,
    "chapters": [
      {
        "title": "Silver precipitation needs interference control",
        "formula": "Ag⁺ + Cl⁻ → AgCl; 2Ag⁺ + S²⁻ → Ag₂S; Ag⁺ + CN⁻ → AgCN",
        "script": "A silver containing precipitate is not automatically proof that an organic sample contained a halogen. In the classical converted extract model, chloride gives silver chloride, but sulfide and cyanide can also consume silver ions and form precipitates. The sulfide equation needs two silver ions per sulfide because the charges are plus one and minus two. Cyanide forms silver cyanide in a one to one ion ratio. The analytical scheme must therefore address those interferences before interpreting a silver halide result. Acid choice also matters. Hydrochloric acid introduces chloride ions itself, so it can create a false chloride signal in a silver test. A specified nitric acid treatment avoids introducing that particular halide and belongs to the controlled analytical method. This is an interpretation principle, not a prescription for acidifying an unknown extract: reactive metal residues and cyanide or sulfide species require trained laboratory supervision and suitable controls. Precipitate colour or a single reagent observation is supporting evidence rather than a unique identity. Separate the conversion step, removal of interference and detection reaction before assigning an element from the final observation.",
        "points": [
          "Cl⁻, S²⁻ and CN⁻ in converted extract · All can consume Ag⁺ in suitable models · A silver precipitate is not unique evidence",
          "S²⁻ + 2Ag⁺ → Ag₂S · Charge balance needs two silver ions · CN⁻ + Ag⁺ → AgCN is 1:1",
          "HCl itself supplies chloride · Can generate a false chloride signal · Controlled interference treatment is essential"
        ],
        "board": {
          "heading": "Silver precipitation needs interference control",
          "columns": [
            "Given / comparison",
            "Reason / accounting",
            "Result / limit"
          ],
          "rows": [
            [
              "Cl⁻, S²⁻ and CN⁻ in converted extract",
              "All can consume Ag⁺ in suitable models",
              "A silver precipitate is not unique evidence"
            ],
            [
              "S²⁻ + 2Ag⁺ → Ag₂S",
              "Charge balance needs two silver ions",
              "CN⁻ + Ag⁺ → AgCN is 1:1"
            ],
            [
              "HCl itself supplies chloride",
              "Can generate a false chloride signal",
              "Controlled interference treatment is essential"
            ]
          ]
        }
      },
      {
        "title": "A mixed silver-halide mass needs two balances",
        "formula": "nCl+nBr=nTotal; 143.5nCl+188.0nBr=precipitate mass in grams",
        "script": "One precipitate mass is not enough to determine two independent halide amounts unless another measurement or constraint is supplied. Consider a stipulated chloride and bromide mixture that forms only silver chloride and silver bromide quantitatively. An independent determination gives total halide amount three point zero zero millimoles, while the dry mixed precipitate mass is zero point four seven five zero gram. Use the supplied rounded molar masses one hundred forty three point five for silver chloride and one hundred eighty eight point zero grams per mole for silver bromide. If all three millimoles were chloride, the precipitate mass would be zero point four three zero five gram. The actual excess mass is zero point zero four four five gram. Replacing one mole silver chloride by one mole silver bromide raises mass by forty four point five grams, so bromide amount is one point zero zero millimole. Chloride is the remaining two point zero zero millimoles. The result assumes the named precipitates are pure and fully recovered, with no interfering silver compounds or retained liquid. Preserve the independent total amount constraint; a heavier precipitate alone does not uniquely reveal mixture composition.",
        "points": [
          "Total Cl⁻ + Br⁻=3.00 mmol · Dry AgCl/AgBr mass=0.4750 g · Two unknowns require two constraints",
          "All-chloride baseline · 0.00300×143.5=0.4305 g · Extra mass=0.0445 g",
          "AgBr−AgCl molar-mass difference=44.5 · nBr=0.0445/44.5=0.00100 mol · Br⁻ 1.00 mmol; Cl⁻ 2.00 mmol"
        ],
        "board": {
          "heading": "A mixed silver-halide mass needs two balances",
          "columns": [
            "Given / comparison",
            "Reason / accounting",
            "Result / limit"
          ],
          "rows": [
            [
              "Total Cl⁻ + Br⁻=3.00 mmol",
              "Dry AgCl/AgBr mass=0.4750 g",
              "Two unknowns require two constraints"
            ],
            [
              "All-chloride baseline",
              "0.00300×143.5=0.4305 g",
              "Extra mass=0.0445 g"
            ],
            [
              "AgBr−AgCl molar-mass difference=44.5",
              "nBr=0.0445/44.5=0.00100 mol",
              "Br⁻ 1.00 mmol; Cl⁻ 2.00 mmol"
            ]
          ]
        }
      },
      {
        "title": "Crystallization recovery differs from purity",
        "formula": "Given cold solubilities per 100 g water: A=4.0 g, B=8.0 g; sample A=10.0 g, B=2.0 g",
        "script": "Selective crystallization uses different solubilities, but high crystal purity does not require complete recovery of the desired compound. In a stipulated ideal model, a hot solution contains ten point zero grams desired solid A and two point zero grams soluble impurity B in fifty point zero grams water. On cooling, the supplied solubilities are four point zero grams A and eight point zero grams B per one hundred grams water. The liquid can retain two point zero grams A and up to four point zero grams B. Thus eight point zero grams A crystallize while all two grams B can remain dissolved. With no co crystallization or trapped liquid, the crystals are pure A in this model, but recovery is only eighty percent of the original A. A separate fresh ten gram cold water wash that reaches the stated solubility can dissolve another zero point four gram A. Remaining crystals are seven point six grams, or seventy six percent overall recovery. Real washing may not reach equilibrium, and crystal occlusion or mixed solids can affect purity. These are supplied mass balance assumptions, not guarantees of an experimental separation or a solvent handling procedure.",
        "points": [
          "50.0 g water; cold A solubility 4.0/100 · A remaining dissolved=2.0 g · A crystals=8.0 g; recovery 80%",
          "Cold B solubility 8.0/100 · Capacity 4.0 g; only 2.0 g B present · All B stays dissolved in ideal model",
          "Fresh 10.0 g water wash; equilibrated · A loss=0.400 g · 7.60 g remain; overall recovery 76%"
        ],
        "board": {
          "heading": "Crystallization recovery differs from purity",
          "columns": [
            "Given / comparison",
            "Reason / accounting",
            "Result / limit"
          ],
          "rows": [
            [
              "50.0 g water; cold A solubility 4.0/100",
              "A remaining dissolved=2.0 g",
              "A crystals=8.0 g; recovery 80%"
            ],
            [
              "Cold B solubility 8.0/100",
              "Capacity 4.0 g; only 2.0 g B present",
              "All B stays dissolved in ideal model"
            ],
            [
              "Fresh 10.0 g water wash; equilibrated",
              "A loss=0.400 g",
              "7.60 g remain; overall recovery 76%"
            ]
          ]
        }
      },
      {
        "title": "Distillation changes vapour composition",
        "formula": "Ideal liquid and ideal vapour: pi=xipi*; yA=pA/(pA+pB)",
        "script": "Distillation separates a mixture because the vapour can have a different composition from the liquid in equilibrium with it. For a supplied ideal binary liquid, let the liquid mole fraction of A be zero point two five zero and that of B zero point seven five zero. At the stated common temperature, take pure component vapour pressures one hundred kilopascals for A and forty kilopascals for B. Raoult's law gives partial pressures twenty five and thirty kilopascals, with total pressure fifty five. In an ideal vapour mixture, A therefore has mole fraction twenty five divided by fifty five, or about zero point four five five. This exceeds its liquid fraction, so the vapour is enriched in the more volatile component A. It is not pure A, and its mole fraction is not the same as its mass fraction without molar mass information. Repeated equilibration can improve separation in an appropriate fractional distillation model. Actual mixtures may be nonideal or form azeotropes, so repeated stages do not guarantee arbitrary purity for every liquid pair. State temperature, ideality and both phase compositions before interpreting a distillation question.",
        "points": [
          "Liquid xA=0.250; xB=0.750 · Pure vapour pressures 100 and 40 kPa · pA=25; pB=30; total=55 kPa",
          "Ideal vapour fraction yA · 25/(25+30)=5/11 · yA≈0.455, greater than xA",
          "More volatile A enriches the vapour · Enrichment does not mean purity · Nonideality and azeotropes need more data"
        ],
        "board": {
          "heading": "Distillation changes vapour composition",
          "columns": [
            "Given / comparison",
            "Reason / accounting",
            "Result / limit"
          ],
          "rows": [
            [
              "Liquid xA=0.250; xB=0.750",
              "Pure vapour pressures 100 and 40 kPa",
              "pA=25; pB=30; total=55 kPa"
            ],
            [
              "Ideal vapour fraction yA",
              "25/(25+30)=5/11",
              "yA≈0.455, greater than xA"
            ],
            [
              "More volatile A enriches the vapour",
              "Enrichment does not mean purity",
              "Nonideality and azeotropes need more data"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Why can HCl introduce a false positive in a chloride test using silver ions?",
        "options": [
          "It supplies sodium ions",
          "It removes all possible interferences",
          "It contributes chloride ions itself",
          "It converts every halide to bromide"
        ],
        "answer": 2,
        "explanation": "Hydrochloric acid introduces the same chloride ion whose silver precipitate is being interpreted as evidence."
      },
      {
        "question": "In the simple silver sulfide precipitation equation, Ag+ required per sulfide ion is:",
        "options": [
          "One",
          "Three",
          "Four",
          "Two"
        ],
        "answer": 3,
        "explanation": "Sulfide is S2− and silver is Ag+, so charge-neutral Ag2S requires two silver ions per sulfide."
      },
      {
        "question": "A chloride/bromide mixture has total halide 3.00 mmol and AgCl/AgBr precipitate mass 0.4750 g. Using 143.5 and 188.0 g/mol, bromide amount is:",
        "options": [
          "1.00 mmol",
          "2.00 mmol",
          "3.00 mmol",
          "0.500 mmol"
        ],
        "answer": 0,
        "explanation": "Subtract the all-chloride mass 0.4305 g and divide the 0.0445 g excess by 44.5 g/mol to obtain 0.00100 mol."
      },
      {
        "question": "Why was an independent total-halide amount needed for that mixed precipitate problem?",
        "options": [
          "Two masses always mean one unknown",
          "One mixed precipitate mass alone cannot determine both halide amounts",
          "Silver halides contain no silver",
          "Molar masses are irrelevant to mixtures"
        ],
        "answer": 1,
        "explanation": "The chloride and bromide amounts are two unknowns; precipitate mass supplies only one equation without another constraint."
      },
      {
        "question": "The stated crystallization model starts with 10.0 g A in 50.0 g water and cold A solubility 4.0 g/100 g water. A crystals formed are:",
        "options": [
          "10.0 g",
          "2.0 g",
          "8.0 g",
          "6.0 g"
        ],
        "answer": 2,
        "explanation": "Two grams A remain dissolved in fifty grams water, leaving eight grams crystalline A in the ideal mass balance."
      },
      {
        "question": "A subsequent equilibrated fresh 10.0 g cold-water wash dissolves 0.400 g A. Overall recovery from the original 10.0 g A is:",
        "options": [
          "80.0%",
          "96.0%",
          "40.0%",
          "76.0%"
        ],
        "answer": 3,
        "explanation": "Crystals fall from 8.00 to 7.60 g; divide by the original desired A amount of 10.0 g."
      },
      {
        "question": "An ideal liquid has xA=0.250, xB=0.750 and pure vapour pressures 100 and 40 kPa. Total vapour pressure is:",
        "options": [
          "55 kPa",
          "140 kPa",
          "25 kPa",
          "70 kPa"
        ],
        "answer": 0,
        "explanation": "Raoult partial pressures are 0.250×100=25 and 0.750×40=30 kPa, summing to 55 kPa."
      },
      {
        "question": "For that mixture, the ideal vapour mole fraction of A is:",
        "options": [
          "0.250",
          "5/11, approximately 0.455",
          "1.00",
          "0.750"
        ],
        "answer": 1,
        "explanation": "Dalton composition gives yA=pA/P=25/55=5/11, showing enrichment in A without pure A vapour."
      }
    ],
    "sources": [
      {
        "title": "IIT Kanpur SATHEE: organic elemental analysis principles",
        "url": "https://sathee.iitk.ac.in/sathee-cuet/cuet-ug/chemistry/english/study-materials/ncert/nb-che-11/chemistry-11-chapter-12-organic-chemistry-some-basic-principles-and-techniques/"
      },
      {
        "title": "OpenStax: quantitative chemical analysis",
        "url": "https://openstax.org/books/chemistry-2e/pages/4-5-quantitative-chemical-analysis"
      },
      {
        "title": "University of York: recrystallization solvent choice",
        "url": "https://chemtl.york.ac.uk/techniques/purification/recrystallisation/solvent-choice"
      },
      {
        "title": "OpenStax: Raoult law and distillation",
        "url": "https://openstax.org/books/chemistry-2e/pages/11-4-colligative-properties"
      }
    ]
  }
} as const;
