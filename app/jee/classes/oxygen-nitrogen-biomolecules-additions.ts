// Authored by scripts/expand-oxygen-nitrogen-biomolecules.mjs.
export const oxygenNitrogenBiomoleculesAdditions = {
  "organic-oxygen": {
    "base": 10,
    "chapters": [
      {
        "title": "Choose a reduction by functional group",
        "formula": "Carbonyl reduction preserves the carbon skeleton",
        "script": "A reducing agent must be chosen for the actual functional group. In the ordinary introductory comparison, sodium borohydride reduces aldehydes and ketones to alcohols. Formaldehyde gives methanol; acetaldehyde gives ethanol; acetone gives the secondary alcohol isopropyl alcohol. The carbonyl carbon remains in the product, so no carbon is added by this reduction. A suitable lithium aluminium hydride reduction followed by workup can also convert a carboxylic acid into a primary alcohol. Ethanoic acid therefore gives ethanol while retaining its two carbons. Do not assign this ordinary acid reduction to sodium borohydride merely because both reagents contain hydrogen. Reagent selectivity and the workup are part of the stated transformation. Reduction of a ketone creates a secondary alcohol, whereas reduction of an aldehyde other than formaldehyde creates a primary alcohol. A carbonyl attached to different substituents can also create a new stereogenic centre after reduction, so a flat formula alone may not describe all stereochemical products. Start with functional class, check reagent scope, then verify the carbon count and final oxygen bonding.",
        "points": [
          "Aldehyde · NaBH₄ reduction · Primary alcohol",
          "Ketone · NaBH₄ reduction · Secondary alcohol",
          "Carboxylic acid · Suitable LiAlH₄; workup · Primary alcohol; same C"
        ],
        "board": {
          "heading": "Choose a reduction by functional group",
          "columns": [
            "Example",
            "Reasoning",
            "Result / limit"
          ],
          "rows": [
            [
              "Aldehyde",
              "NaBH₄ reduction",
              "Primary alcohol"
            ],
            [
              "Ketone",
              "NaBH₄ reduction",
              "Secondary alcohol"
            ],
            [
              "Carboxylic acid",
              "Suitable LiAlH₄; workup",
              "Primary alcohol; same C"
            ]
          ]
        }
      },
      {
        "title": "Use chemical tests as combined evidence",
        "formula": "A test result supports a functional-group hypothesis, not a unique structure",
        "script": "Chemical tests are useful when their scope and exceptions are understood. In common introductory examples, aldehydes can reduce Tollens reagent while ordinary ketones do not. Some other reducing structures, including suitable alpha hydroxy ketones, can also respond, so a positive result is not a unique molecular identification. Two four dinitrophenylhydrazine tests for many aldehyde and ketone carbonyl groups through derivative formation; it does not by itself distinguish the two classes. The iodoform test instead points to a methyl ketone or a structure that can form the required intermediate under the test conditions. Ethanol and isopropyl alcohol are familiar positive alcohol examples, whereas ordinary propyl alcohol is negative in the standard comparison. A ferric chloride colour response can support a phenolic group but is not a universal proof of one particular phenol. Combine observations with the molecular formula and other evidence. Never infer a complete structure from one colour or precipitate alone. These are principles for interpreting supplied observations, rather than instructions for carrying out laboratory tests.",
        "points": [
          "2,4-DNPH · Many aldehydes / ketones · Does not separate classes",
          "Tollens · Reducing structures · Ordinary ketones negative",
          "Iodoform · Methyl-ketone pathway · Ethanol also positive"
        ],
        "board": {
          "heading": "Use chemical tests as combined evidence",
          "columns": [
            "Example",
            "Reasoning",
            "Result / limit"
          ],
          "rows": [
            [
              "2,4-DNPH",
              "Many aldehydes / ketones",
              "Does not separate classes"
            ],
            [
              "Tollens",
              "Reducing structures",
              "Ordinary ketones negative"
            ],
            [
              "Iodoform",
              "Methyl-ketone pathway",
              "Ethanol also positive"
            ]
          ]
        }
      },
      {
        "title": "Phenol formylation and carboxylation",
        "formula": "Reimer–Tiemann adds CHO; Kolbe–Schmitt adds COOH after workup",
        "script": "Two named phenol transformations add a carbon but give different functional groups. In the standard Reimer Tiemann reaction, phenol with chloroform and aqueous base followed by the stated workup gives mainly an ortho formyl product. The familiar product is salicylaldehyde, also called two hydroxybenzaldehyde. Its new group is an aldehyde, not a carboxylic acid. In the Kolbe Schmitt transformation, a phenoxide reacts with carbon dioxide under appropriate conditions and acid workup gives salicylic acid, or two hydroxybenzoic acid, as the familiar main product. Here the new carbon belongs to a carboxyl group. Both products have seven carbons compared with phenol's six, but they differ in oxidation level and functional class. The directing pattern is a useful introductory outcome, not a claim that no other positional product can ever form. Keep the reagent source of the added carbon visible in a reaction map. Chloroform and carbon dioxide are not interchangeable labels. Identify the new group first, then name the product and count the ring plus substituent carbons.",
        "points": [
          "Reimer–Tiemann · CHCl₃ / base; workup · Salicylaldehyde; CHO",
          "Kolbe–Schmitt · Phenoxide + CO₂; workup · Salicylic acid; COOH",
          "Carbon ledger · Phenol 6 → product 7 · One added carbon"
        ],
        "board": {
          "heading": "Phenol formylation and carboxylation",
          "columns": [
            "Example",
            "Reasoning",
            "Result / limit"
          ],
          "rows": [
            [
              "Reimer–Tiemann",
              "CHCl₃ / base; workup",
              "Salicylaldehyde; CHO"
            ],
            [
              "Kolbe–Schmitt",
              "Phenoxide + CO₂; workup",
              "Salicylic acid; COOH"
            ],
            [
              "Carbon ledger",
              "Phenol 6 → product 7",
              "One added carbon"
            ]
          ]
        }
      },
      {
        "title": "Aldol condensation versus disproportionation",
        "formula": "Alpha H permits aldol; absence of alpha H can permit Cannizzaro",
        "script": "Aldol and Cannizzaro questions require inspecting the carbon next to the carbonyl. Acetaldehyde has alpha hydrogens and can form an enolate under suitable base conditions. Two molecules first give a four carbon hydroxy aldehyde with formula C H three, C H with O H, C H two, C H O. Subsequent dehydration gives the unsaturated aldehyde commonly called crotonaldehyde, with four carbons still present. Water loss does not remove a carbon. Benzaldehyde lacks an alpha hydrogen at its carbonyl substituent, so it does not undergo that ordinary self aldol pathway. Under suitable concentrated base conditions, two benzaldehyde molecules can instead disproportionate through the Cannizzaro reaction. One becomes benzyl alcohol and the other a benzoate ion. Each organic product retains seven carbons; the two molecules have not joined into one fourteen carbon product. Acid workup converts benzoate to benzoic acid. State whether the question asks for the initial addition product, the dehydrated product or the material after workup. These choices change the formula and functional groups even when the carbon accounting remains straightforward.",
        "points": [
          "Acetaldehyde · Alpha H present · CH₃CH(OH)CH₂CHO",
          "Aldol dehydration · Lose H₂O · Crotonaldehyde; still 4 C",
          "Benzaldehyde · No alpha H; strong base · Alcohol + benzoate; 7 C each"
        ],
        "board": {
          "heading": "Aldol condensation versus disproportionation",
          "columns": [
            "Example",
            "Reasoning",
            "Result / limit"
          ],
          "rows": [
            [
              "Acetaldehyde",
              "Alpha H present",
              "CH₃CH(OH)CH₂CHO"
            ],
            [
              "Aldol dehydration",
              "Lose H₂O",
              "Crotonaldehyde; still 4 C"
            ],
            [
              "Benzaldehyde",
              "No alpha H; strong base",
              "Alcohol + benzoate; 7 C each"
            ]
          ]
        }
      },
      {
        "title": "Calculate an esterification equilibrium",
        "formula": "For the supplied ideal model: K = x²/(1 − x)²",
        "script": "Esterification is reversible, so a catalyst does not guarantee complete conversion. Consider an illustrative homogeneous ideal equilibrium model for one mole of ethanoic acid and one mole of ethanol, initially without ester or water. The balanced reaction forms one mole each of ethyl ethanoate and water for every mole of acid consumed. Let the extent in moles be x. Remaining acid and alcohol are each one minus x, while ester and water are each x. For a supplied equilibrium constant of four in this ideal ratio model, the square of x divided by the square of the quantity one minus x equals four. Take the positive square root to obtain x divided by one minus x equals two. Solving gives x equal to two thirds, so about sixty six point seven percent of each starting reactant is converted. Check that every amount stays nonnegative and the quotient returns four. Actual mixtures need their appropriate activities and conditions. A catalyst speeds approach to equilibrium at fixed temperature without changing its constant. Removing a product can alter the equilibrium composition.",
        "points": [
          "Initial acid / alcohol · 1.00 mol each · No initial ester / water",
          "Equilibrium amounts · 1−x, 1−x, x, x · K = x²/(1−x)²",
          "Supplied K = 4 · x/(1−x) = 2 · x = 2/3 mol"
        ],
        "board": {
          "heading": "Calculate an esterification equilibrium",
          "columns": [
            "Example",
            "Reasoning",
            "Result / limit"
          ],
          "rows": [
            [
              "Initial acid / alcohol",
              "1.00 mol each",
              "No initial ester / water"
            ],
            [
              "Equilibrium amounts",
              "1−x, 1−x, x, x",
              "K = x²/(1−x)²"
            ],
            [
              "Supplied K = 4",
              "x/(1−x) = 2",
              "x = 2/3 mol"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Ordinary NaBH4 reduction of acetone gives:",
        "options": [
          "Ethanol",
          "Isopropyl alcohol",
          "Ethanoic acid",
          "Methanol"
        ],
        "answer": 1,
        "explanation": "A ketone reduces to a secondary alcohol while retaining its three-carbon skeleton."
      },
      {
        "question": "A positive 2,4-DNPH result alone normally establishes:",
        "options": [
          "The exact aldehyde structure",
          "A carboxylic acid uniquely",
          "Evidence for a suitable aldehyde or ketone carbonyl",
          "That every ketone reduces Tollens reagent"
        ],
        "answer": 2,
        "explanation": "The derivative test supports carbonyl-class identification but does not alone distinguish aldehyde from ketone."
      },
      {
        "question": "The familiar principal Reimer–Tiemann product from phenol is:",
        "options": [
          "Salicylaldehyde",
          "Salicylic acid",
          "Benzoic acid",
          "Benzyl alcohol"
        ],
        "answer": 0,
        "explanation": "The transformation introduces a formyl group; the usual ortho product is salicylaldehyde."
      },
      {
        "question": "Two benzaldehyde molecules in a suitable Cannizzaro reaction produce:",
        "options": [
          "One 14-carbon aldol only",
          "Two methyl ketones",
          "Ethene and water",
          "Benzyl alcohol and benzoate"
        ],
        "answer": 3,
        "explanation": "One aldehyde is reduced and one oxidized; each main organic product retains seven carbons."
      },
      {
        "question": "In the stated ideal esterification model, initial acid/alcohol are 1 mol each and K=4. Extent x is:",
        "options": [
          "1/3 mol",
          "2/3 mol",
          "1 mol",
          "4 mol"
        ],
        "answer": 1,
        "explanation": "x/(1−x)=2 gives 3x=2; substitution returns K=4."
      },
      {
        "question": "The familiar Kolbe–Schmitt product after acid workup is:",
        "options": [
          "Salicylaldehyde",
          "Acetone",
          "Salicylic acid",
          "Ethyl ethanoate"
        ],
        "answer": 2,
        "explanation": "Carbon dioxide supplies the new carboxyl carbon in the phenol-derived acid."
      }
    ],
    "foundationExtraQuiz": [
      {
        "question": "Williamson ether synthesis is usually best planned using:",
        "options": [
          "A tertiary electrophile in every case",
          "An accessible primary alkyl electrophile",
          "Only an aryl chloride under ordinary SN2 conditions",
          "No nucleophile"
        ],
        "answer": 1,
        "explanation": "An accessible primary centre favours backside substitution; tertiary electrophiles often eliminate."
      },
      {
        "question": "Suitable HI cleavage of anisole gives the conceptual products:",
        "options": [
          "Iodobenzene and methanol",
          "Benzene and iodine",
          "Phenol and methyl iodide",
          "Only ethanol"
        ],
        "answer": 2,
        "explanation": "Cleavage occurs at the methyl side rather than by ordinary backside displacement at aromatic carbon."
      },
      {
        "question": "Methylmagnesium bromide plus acetone, followed by suitable work-up, gives:",
        "options": [
          "A four-carbon tertiary alcohol",
          "A three-carbon primary alcohol",
          "A two-carbon acid",
          "Only methane necessarily"
        ],
        "answer": 0,
        "explanation": "The incoming methyl adds one carbon to acetone, giving tert-butyl alcohol."
      },
      {
        "question": "Which change retains oxygen as OH in the organic product?",
        "options": [
          "Acetone to propane by deoxygenation",
          "Ethanol dehydration to ethene",
          "Ether cleavage to two alkenes necessarily",
          "Acetone hydride reduction to isopropyl alcohol"
        ],
        "answer": 3,
        "explanation": "Hydride reduction converts C=O into the alcohol group while retaining oxygen."
      }
    ],
    "sources": [
      {
        "title": "NCERT: alcohols, phenols and ethers",
        "url": "https://ncert.nic.in/textbook/pdf/lech202.pdf"
      },
      {
        "title": "OpenStax: alcohols from carbonyl reduction",
        "url": "https://openstax.org/books/organic-chemistry/pages/17-4-alcohols-from-carbonyl-compounds-reduction"
      }
    ]
  },
  "organic-nitrogen": {
    "base": 8,
    "chapters": [
      {
        "title": "Choose amine routes by carbon count",
        "formula": "Nitrile reduction retains C; Hofmann amide rearrangement loses one C",
        "script": "Amine preparation routes can give different carbon skeletons even when all products are primary amines. Reduction of propanenitrile retains its nitrile carbon, producing the three carbon primary amine propylamine. In contrast, Hofmann rearrangement of propanamide produces ethylamine, with one fewer carbon than the starting amide. The amide carbonyl carbon does not remain in that amine skeleton. Gabriel synthesis provides another planning route: a suitable primary alkyl halide is converted through a phthalimide intermediate and then released as a primary amine. Bromoethane can therefore lead to ethylamine without adding a carbon to its ethyl group. Ordinary Gabriel alkylation is not a general preparation of aniline from an aryl halide, because the required substitution chemistry is different. Do not confuse the names Hofmann rearrangement and Hofmann elimination; they describe different transformations. Write the carbon count beside both starting material and proposed product before choosing a named reaction. The route must fit the substrate as well as the desired nitrogen substitution class.",
        "points": [
          "Propanenitrile reduction · Retain nitrile carbon · Propylamine; 3 C",
          "Propanamide rearrangement · Lose carbonyl carbon · Ethylamine; 2 C",
          "Gabriel: ethyl halide · Suitable alkyl substitution · Ethylamine; 2 C"
        ],
        "board": {
          "heading": "Choose amine routes by carbon count",
          "columns": [
            "Example",
            "Reasoning",
            "Result / limit"
          ],
          "rows": [
            [
              "Propanenitrile reduction",
              "Retain nitrile carbon",
              "Propylamine; 3 C"
            ],
            [
              "Propanamide rearrangement",
              "Lose carbonyl carbon",
              "Ethylamine; 2 C"
            ],
            [
              "Gabriel: ethyl halide",
              "Suitable alkyl substitution",
              "Ethylamine; 2 C"
            ]
          ]
        }
      },
      {
        "title": "Amine acylation and protection",
        "formula": "Primary / secondary amines form amides; ordinary tertiary amines lack N–H",
        "script": "Acylation attaches an acyl group to a nitrogen nucleophile and changes its electronic properties. A primary or secondary amine with a nitrogen hydrogen can form an amide with a suitable acylating reagent. A tertiary amine has no nitrogen hydrogen and does not give the same ordinary neutral amide by this substitution. It may still participate in other reactions or act as a base, so the absence of that product is not universal inertness. Aniline can be converted into acetanilide by introducing an acetyl group on nitrogen. The nitrogen lone pair then interacts with the carbonyl, reducing its availability and moderating the strong activation associated with free amino substitution on the ring. This is useful in reaction planning where the amino group must be protected or its reactivity controlled. Subsequent suitable hydrolysis can restore the amine. Acylation is distinct from alkylation: the new group contains a carbonyl and the product is an amide. Track the atom receiving the group instead of assuming every new carbon group on nitrogen produces another simple amine.",
        "points": [
          "Primary / secondary amine · N–H available · Amide formation possible",
          "Tertiary amine · No N–H · Not the same neutral amide",
          "Aniline acylation · Acetyl group on N · Acetanilide; moderated reactivity"
        ],
        "board": {
          "heading": "Amine acylation and protection",
          "columns": [
            "Example",
            "Reasoning",
            "Result / limit"
          ],
          "rows": [
            [
              "Primary / secondary amine",
              "N–H available",
              "Amide formation possible"
            ],
            [
              "Tertiary amine",
              "No N–H",
              "Not the same neutral amide"
            ],
            [
              "Aniline acylation",
              "Acetyl group on N",
              "Acetanilide; moderated reactivity"
            ]
          ]
        }
      },
      {
        "title": "Interpret Hinsberg observations",
        "formula": "Sulfonamide N–H controls the introductory alkali-solubility distinction",
        "script": "The Hinsberg comparison distinguishes amine classes through reaction and solubility evidence rather than by counting alkyl groups in a name alone. In the standard model, a primary amine forms a sulfonamide that retains a nitrogen hydrogen. That hydrogen can be removed by alkali, giving a soluble ionic form under the stated conditions. Acidification can return the neutral sulfonamide. A secondary amine forms a sulfonamide without that nitrogen hydrogen, so it lacks the same alkali dissolution step in the introductory comparison. A tertiary amine does not form the corresponding sulfonamide in this test but can dissolve in dilute acid by forming an ammonium salt. Distinguish absence of a derivative from inability to form any salt. The observations depend on the specified substrate and medium, and solubility on its own is not a complete structure identification. Draw the nitrogen substituents in the proposed derivative before selecting the class. This reasoning concerns interpretation of a supplied test sequence, not a procedure for handling the reagent in a laboratory.",
        "points": [
          "Primary amine derivative · Sulfonamide N–H remains · Can dissolve in alkali",
          "Secondary amine derivative · No sulfonamide N–H · No same dissolution step",
          "Tertiary amine · No corresponding derivative · Can form acid-soluble salt"
        ],
        "board": {
          "heading": "Interpret Hinsberg observations",
          "columns": [
            "Example",
            "Reasoning",
            "Result / limit"
          ],
          "rows": [
            [
              "Primary amine derivative",
              "Sulfonamide N–H remains",
              "Can dissolve in alkali"
            ],
            [
              "Secondary amine derivative",
              "No sulfonamide N–H",
              "No same dissolution step"
            ],
            [
              "Tertiary amine",
              "No corresponding derivative",
              "Can form acid-soluble salt"
            ]
          ]
        }
      },
      {
        "title": "Diazonium replacements and carbon ledgers",
        "formula": "Ring–N₂⁺ can be replaced; incoming CN adds one carbon",
        "script": "An aromatic diazonium group is a useful junction for several replacement reactions. In the usual aniline preparation, nitrous acid is generated under cold acidic conditions and the diazonium salt is handled as a condition dependent intermediate. Different reagents then lead to different ring substituents. Copper one chloride or bromide supports the corresponding halogen replacement in the familiar Sandmeyer pattern. Copper one cyanide introduces a nitrile group, while suitable warm aqueous conditions can lead to phenol with nitrogen release. Count carbons when the incoming group contains carbon. Starting from a six carbon aniline ring, replacement by hydroxyl gives a six carbon phenol, but replacement by cyanide gives seven carbon benzonitrile. Hydrolysis of that nitrile can then give seven carbon benzoic acid. The nitrogen atoms in the departing diazonium group do not become the nitrile nitrogen by simple retention; identify the incoming reagent. Reaction maps should label both the replacing group and the conditions, rather than drawing one unspecified arrow that could mean several incompatible products.",
        "points": [
          "Ring–N₂⁺ → ring–OH · Suitable aqueous conversion · Phenol; 6 C",
          "Ring–N₂⁺ → ring–CN · Cu(I) cyanide pattern · Benzonitrile; 7 C",
          "Benzonitrile hydrolysis · Retain nitrile carbon · Benzoic acid; 7 C"
        ],
        "board": {
          "heading": "Diazonium replacements and carbon ledgers",
          "columns": [
            "Example",
            "Reasoning",
            "Result / limit"
          ],
          "rows": [
            [
              "Ring–N₂⁺ → ring–OH",
              "Suitable aqueous conversion",
              "Phenol; 6 C"
            ],
            [
              "Ring–N₂⁺ → ring–CN",
              "Cu(I) cyanide pattern",
              "Benzonitrile; 7 C"
            ],
            [
              "Benzonitrile hydrolysis",
              "Retain nitrile carbon",
              "Benzoic acid; 7 C"
            ]
          ]
        }
      },
      {
        "title": "Quantify base strength with pKb",
        "formula": "At 25 °C in water: pKa(BH⁺) + pKb(B) ≈ 14",
        "script": "Base strength comparisons become quantitative when the constants refer to the same solvent and temperature. A smaller p K b means a larger base dissociation constant. For illustrative bases with p K b values four and nine in water at twenty five degrees Celsius, their base constants are ten to the minus four and ten to the minus nine. The first is one hundred thousand times larger. This ratio does not mean the hydroxide concentrations must have the same ratio in arbitrary solutions, because concentration and equilibrium balances still matter. For a conjugate acid and base pair in water, their constants multiply to the water ion product. At this temperature, p K a of the conjugate acid plus p K b of the base is approximately fourteen. Thus a base with p K b four has conjugate acid p K a about ten. At a different temperature, use the appropriate water constant. Do not combine a gas phase basicity ranking with aqueous constants or assume that electron donation, resonance and solvation always produce the same amine ordering.",
        "points": [
          "Base A: pKb 4 · Kb = 10⁻⁴ · Stronger than B",
          "Base B: pKb 9 · Kb = 10⁻⁹ · Kb(A)/Kb(B) = 10⁵",
          "Conjugate pair at 25 °C · pKa + pKb ≈ 14 · For A: pKa ≈ 10"
        ],
        "board": {
          "heading": "Quantify base strength with pKb",
          "columns": [
            "Example",
            "Reasoning",
            "Result / limit"
          ],
          "rows": [
            [
              "Base A: pKb 4",
              "Kb = 10⁻⁴",
              "Stronger than B"
            ],
            [
              "Base B: pKb 9",
              "Kb = 10⁻⁹",
              "Kb(A)/Kb(B) = 10⁵"
            ],
            [
              "Conjugate pair at 25 °C",
              "pKa + pKb ≈ 14",
              "For A: pKa ≈ 10"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Propanamide under a suitable Hofmann rearrangement gives mainly:",
        "options": [
          "Propylamine",
          "Ethylamine",
          "Methylamine",
          "Aniline"
        ],
        "answer": 1,
        "explanation": "The amide carbonyl carbon is lost from the amine skeleton: three starting carbons give two."
      },
      {
        "question": "Acylation of aniline with an acetyl group on nitrogen gives:",
        "options": [
          "A tertiary alkylamine only",
          "Nitrobenzene",
          "Acetanilide",
          "Benzoic acid"
        ],
        "answer": 2,
        "explanation": "The product is an amide, with the nitrogen attached to an acetyl carbonyl group."
      },
      {
        "question": "The primary-amine sulfonamide in the standard Hinsberg comparison retains:",
        "options": [
          "An N–H that can be deprotonated by alkali",
          "No nitrogen atom",
          "A diazonium group",
          "A mandatory carbon–carbon triple bond"
        ],
        "answer": 0,
        "explanation": "Its remaining nitrogen hydrogen explains the introductory alkali-solubility distinction."
      },
      {
        "question": "Aniline → diazonium → nitrile → carboxylic acid gives a final main organic product with:",
        "options": [
          "5 carbons",
          "6 carbons",
          "8 carbons",
          "7 carbons"
        ],
        "answer": 3,
        "explanation": "Incoming cyanide adds one carbon to the six-carbon ring, retained on nitrile hydrolysis."
      },
      {
        "question": "Two bases have pKb 4 and 9 in the same medium. Kb(first)/Kb(second) is:",
        "options": [
          "5",
          "100000",
          "0.00001",
          "13"
        ],
        "answer": 1,
        "explanation": "10^−4 divided by 10^−9 equals 10^5."
      },
      {
        "question": "At 25 °C in water, pKb(B)=4 gives approximate pKa(BH+) of:",
        "options": [
          "4",
          "14",
          "10",
          "18"
        ],
        "answer": 2,
        "explanation": "Use pKa(BH+) + pKb(B) ≈ 14 for a conjugate pair under the stated conditions."
      }
    ],
    "foundationExtraQuiz": [
      {
        "question": "At 25°C with pKw = 14, conjugate-acid pKa = 10 gives base pKb:",
        "options": [
          "24",
          "10",
          "4",
          "-4"
        ],
        "answer": 2,
        "explanation": "pKa + pKb = 14 for the conjugate pair under these conditions."
      },
      {
        "question": "Diazonium replacement by CN on an otherwise unsubstituted six-carbon ring gives how many carbons in the nitrile?",
        "options": [
          "5",
          "6",
          "12",
          "7"
        ],
        "answer": 3,
        "explanation": "The cyano group contributes one additional carbon."
      },
      {
        "question": "The sulfonamide from a primary amine can dissolve in alkali because it:",
        "options": [
          "Retains an acidic N-H",
          "Has no nitrogen",
          "Always has a quaternary ion",
          "Cannot lose a proton"
        ],
        "answer": 0,
        "explanation": "The retained sulfonamide N-H can be deprotonated under suitable alkaline conditions."
      },
      {
        "question": "An azo product joining two unsubstituted six-carbon aromatic rings contains:",
        "options": [
          "6 carbons",
          "12 carbons",
          "14 carbons",
          "No nitrogen"
        ],
        "answer": 1,
        "explanation": "Six plus six carbons gives twelve; the N=N bridge contributes nitrogen and no carbon."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: synthesis of amines",
        "url": "https://openstax.org/books/organic-chemistry/pages/24-6-synthesis-of-amines"
      }
    ]
  },
  "biomolecules": {
    "base": 8,
    "chapters": [
      {
        "title": "Read the Fischer pattern of D-glucose",
        "formula": "Open chain: OH positions C2–C5 = right, left, right, right",
        "script": "A Fischer projection encodes stereochemistry and is not simply a vertical decorative formula. For open chain D glucose, place the aldehyde group at the top and the terminal hydroxymethyl group at the bottom. The hydroxyl positions from carbon two through carbon five are right, left, right and right. Horizontal bonds point toward the viewer and vertical bonds point away in this projection convention. Carbon one belongs to the aldehyde; carbon six belongs to the terminal hydroxymethyl group. The D label is assigned by the configuration at the highest numbered stereogenic centre in this standard comparison, which is carbon five here. It does not mean every hydroxyl lies on the right. Nor does D automatically predict positive optical rotation. Changing one stereogenic centre can give a different sugar; merely rotating a whole spatial molecule does not. The projection is a useful open chain representation even though aqueous glucose is mainly cyclic. Keep carbon numbering visible when connecting the chain to a ring so that the anomeric carbon can be identified correctly.",
        "points": [
          "Carbon numbering · CHO at C1; CH₂OH at C6 · Six carbons",
          "OH at C2, C3, C4, C5 · Right, left, right, right · D-glucose pattern",
          "D label · Configuration at C5 here · Not optical-rotation sign"
        ],
        "board": {
          "heading": "Read the Fischer pattern of D-glucose",
          "columns": [
            "Example",
            "Reasoning",
            "Result / limit"
          ],
          "rows": [
            [
              "Carbon numbering",
              "CHO at C1; CH₂OH at C6",
              "Six carbons"
            ],
            [
              "OH at C2, C3, C4, C5",
              "Right, left, right, right",
              "D-glucose pattern"
            ],
            [
              "D label",
              "Configuration at C5 here",
              "Not optical-rotation sign"
            ]
          ]
        }
      },
      {
        "title": "Distinguish alpha and beta glucose",
        "formula": "For D-glucopyranose: anomeric OH trans / cis to CH₂OH gives α / β",
        "script": "When glucose forms a six membered pyranose ring, the carbon five hydroxyl oxygen connects with the carbon one aldehyde carbon to make a cyclic hemiacetal. Carbon one becomes the anomeric centre. Two configurations are possible there while the other stereogenic centres retain their relationships. In the standard Haworth representation of D glucopyranose with the hydroxymethyl group drawn up, an anomeric hydroxyl drawn down is alpha and one drawn up is beta. More generally, compare the anomeric hydroxyl with the reference hydroxymethyl group: trans gives alpha and cis gives beta for this representation. The schematic highlights those groups and does not show every hydroxyl. The two anomers can interconvert through ring opening and closure in solution, producing mutarotation. They are not different molecular formulas and they are not simply two conformations of one unchanged anomeric configuration. Alpha and beta labels also do not mean the signs of optical rotation. A chair conformation supplies further three dimensional information beyond this simplified ring projection, which should not be treated as an exact planar molecular shape.",
        "points": [
          "Ring formation · C5 oxygen joins C1 · C1 is anomeric",
          "α-D-glucopyranose · OH down; CH₂OH up · Opposite sides",
          "β-D-glucopyranose · OH up; CH₂OH up · Same side"
        ],
        "board": {
          "heading": "Distinguish alpha and beta glucose",
          "columns": [
            "Example",
            "Reasoning",
            "Result / limit"
          ],
          "rows": [
            [
              "Ring formation",
              "C5 oxygen joins C1",
              "C1 is anomeric"
            ],
            [
              "α-D-glucopyranose",
              "OH down; CH₂OH up",
              "Opposite sides"
            ],
            [
              "β-D-glucopyranose",
              "OH up; CH₂OH up",
              "Same side"
            ]
          ]
        }
      },
      {
        "title": "Reducing ends and sugar hydrolysis",
        "formula": "Sucrose + H₂O → glucose + fructose; 342 + 18 = 180 + 180",
        "script": "A free anomeric hemiacetal can open to a carbonyl form and provides a useful way to identify a reducing end. Maltose and lactose retain a free anomeric centre and are reducing disaccharides in the usual comparison. Sucrose links the anomeric centres of its glucose and fructose units, so it lacks that free reducing end before hydrolysis. Its hydrolysis gives one mole of glucose and one mole of fructose per mole of sucrose. With rounded molar masses, three hundred forty two grams of sucrose reacts with eighteen grams of water to give one hundred eighty grams of each monosaccharide. The total product mass is three hundred sixty grams; water has become part of the products rather than mass appearing from nowhere. Fructose can give reducing test behaviour under suitable alkaline conditions despite its open chain ketone classification, so aldehyde naming alone is not the complete criterion. Distinguish a sugar before hydrolysis from the mixture produced afterward. A change in a test result can reveal a changed linkage or newly accessible reducing end.",
        "points": [
          "Maltose / lactose · Free anomeric centre · Reducing",
          "Sucrose before hydrolysis · Both anomeric centres linked · Nonreducing",
          "1 mol sucrose + water · 342 g + 18 g · 180 g glucose + 180 g fructose"
        ],
        "board": {
          "heading": "Reducing ends and sugar hydrolysis",
          "columns": [
            "Example",
            "Reasoning",
            "Result / limit"
          ],
          "rows": [
            [
              "Maltose / lactose",
              "Free anomeric centre",
              "Reducing"
            ],
            [
              "Sucrose before hydrolysis",
              "Both anomeric centres linked",
              "Nonreducing"
            ],
            [
              "1 mol sucrose + water",
              "342 g + 18 g",
              "180 g glucose + 180 g fructose"
            ]
          ]
        }
      },
      {
        "title": "Amino acids change charge with pH",
        "formula": "Glycine: +1 in acid; net 0 zwitterion; −1 in base",
        "script": "An amino acid contains groups that can gain or lose protons, so its predominant charge depends on p H. Glycine provides a simple example without an ionizable side chain. In sufficiently acidic solution, its amino group is protonated and its carboxyl group is mostly neutral, giving net charge plus one. In the intermediate zwitterionic form, the amino group remains positive while the carboxylate is negative, giving net charge zero. In sufficiently basic solution, the carboxylate remains negative and the amino group is neutral, giving net charge minus one. A zwitterion is therefore not a structure with no formal charges; it has opposite charges in the same molecule. At the isoelectric point, the average net charge is zero under the stated conditions. This does not mean every molecule has permanently lost both acid base functions. Amino acids with ionizable side chains need additional protonation states and cannot be analysed by copying glycine's pattern alone. Identify all ionizable groups, compare the p H with the relevant dissociation constants, and then add their charges.",
        "points": [
          "Acidic glycine · NH₃⁺ and COOH · Net +1",
          "Zwitterionic glycine · NH₃⁺ and COO⁻ · Net 0; internal charges",
          "Basic glycine · NH₂ and COO⁻ · Net −1"
        ],
        "board": {
          "heading": "Amino acids change charge with pH",
          "columns": [
            "Example",
            "Reasoning",
            "Result / limit"
          ],
          "rows": [
            [
              "Acidic glycine",
              "NH₃⁺ and COOH",
              "Net +1"
            ],
            [
              "Zwitterionic glycine",
              "NH₃⁺ and COO⁻",
              "Net 0; internal charges"
            ],
            [
              "Basic glycine",
              "NH₂ and COO⁻",
              "Net −1"
            ]
          ]
        }
      },
      {
        "title": "Peptide direction and condensation mass",
        "formula": "Linear n-residue chain: n − 1 peptide links and n − 1 waters lost",
        "script": "A peptide bond joins a carboxyl carbon of one amino acid to the nitrogen of another, with loss of water in the simplified condensation account. A linear chain with five residues has four peptide links and loses four water molecules when assembled from those free amino acids. A cyclic chain has different end group bookkeeping, so the linear rule must be stated. Sequence is directional: glycine followed by alanine is not the same connectivity as alanine followed by glycine, although the two dipeptides have the same total composition. Write from the amino terminus to the carboxyl terminus in the usual sequence convention. Using illustrative rounded molar masses of seventy five for glycine and eighty nine for alanine, forming one dipeptide gives seventy five plus eighty nine minus eighteen, or one hundred forty six grams per mole. Hydrolysis reverses the water balance. This calculation concerns one condensation link, not the loss of an entire hydroxyl or amino group from the residue count. Distinguish sequence, number of residues, number of links and mass balance before comparing peptide formulas.",
        "points": [
          "Five-residue linear chain · n − 1 links · 4 peptide links",
          "Gly–Ala / Ala–Gly · Different sequence · Same total composition",
          "Rounded molar masses · 75 + 89 − 18 · 146 g mol⁻¹"
        ],
        "board": {
          "heading": "Peptide direction and condensation mass",
          "columns": [
            "Example",
            "Reasoning",
            "Result / limit"
          ],
          "rows": [
            [
              "Five-residue linear chain",
              "n − 1 links",
              "4 peptide links"
            ],
            [
              "Gly–Ala / Ala–Gly",
              "Different sequence",
              "Same total composition"
            ],
            [
              "Rounded molar masses",
              "75 + 89 − 18",
              "146 g mol⁻¹"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "In the standard open-chain Fischer projection of D-glucose, OH positions C2–C5 are:",
        "options": [
          "Right, right, right, right",
          "Right, left, right, right",
          "Left, right, left, left",
          "Left, left, right, right"
        ],
        "answer": 1,
        "explanation": "The standard D-glucose pattern is right–left–right–right; D refers to its reference stereocentre."
      },
      {
        "question": "For the stated D-glucopyranose Haworth drawing with CH2OH up, anomeric OH down is:",
        "options": [
          "Beta",
          "An open-chain aldehyde only",
          "Alpha",
          "A different molecular formula"
        ],
        "answer": 2,
        "explanation": "The anomeric OH is trans to the reference CH2OH group in the stated alpha arrangement."
      },
      {
        "question": "One mole of sucrose hydrolyses to:",
        "options": [
          "One mole each of glucose and fructose",
          "Two moles of glucose only",
          "One mole of lactose",
          "No monosaccharides"
        ],
        "answer": 0,
        "explanation": "Hydrolysis consumes one mole of water and releases one glucose and one fructose unit."
      },
      {
        "question": "Glycine drawn with NH3+ and COO− is:",
        "options": [
          "Uncharged on every atom",
          "Net +2",
          "Net −2",
          "Net zero with opposite internal charges"
        ],
        "answer": 3,
        "explanation": "The zwitterion contains +1 and −1 groups whose sum is zero."
      },
      {
        "question": "A linear peptide of five amino acid residues has how many peptide links?",
        "options": [
          "5",
          "4",
          "6",
          "10"
        ],
        "answer": 1,
        "explanation": "Joining n residues in one linear chain creates n−1 links."
      },
      {
        "question": "Using rounded glycine 75 and alanine 89 g/mol, their dipeptide molar mass is:",
        "options": [
          "164 g/mol",
          "182 g/mol",
          "146 g/mol",
          "128 g/mol"
        ],
        "answer": 2,
        "explanation": "One condensation loses one water: 75 + 89 − 18 = 146 g/mol."
      }
    ],
    "foundationExtraQuiz": [
      {
        "question": "Complete hydrolysis of one mole of sucrose yields:",
        "options": [
          "Two moles glucose",
          "One mole glucose and one mole fructose",
          "Only amino acids",
          "One mole lactose"
        ],
        "answer": 1,
        "explanation": "Sucrose contains one glucose and one fructose unit."
      },
      {
        "question": "Whole complementary double-stranded DNA has 30% A. Its G percentage is:",
        "options": [
          "30%",
          "40%",
          "20%",
          "70%"
        ],
        "answer": 2,
        "explanation": "T is 30%, leaving 40% for equal G and C: 20% each."
      },
      {
        "question": "Which protein level requires multiple polypeptide subunits?",
        "options": [
          "Quaternary",
          "Primary",
          "Secondary only",
          "Every tertiary structure"
        ],
        "answer": 0,
        "explanation": "Quaternary structure describes the arrangement of multiple subunits."
      },
      {
        "question": "An enzyme at fixed conditions changes:",
        "options": [
          "The equilibrium constant necessarily",
          "Every product into a different element",
          "Only the substrate molecular formula",
          "The reaction pathway and rate"
        ],
        "answer": 3,
        "explanation": "Catalysis changes the kinetic pathway while preserving the equilibrium constant at fixed conditions."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: cyclic monosaccharides and anomers",
        "url": "https://openstax.org/books/organic-chemistry/pages/25-5-cyclic-structures-of-monosaccharides-anomers"
      },
      {
        "title": "OpenStax: amino acids",
        "url": "https://openstax.org/books/organic-chemistry/pages/26-1-structures-of-amino-acids"
      }
    ]
  }
};
