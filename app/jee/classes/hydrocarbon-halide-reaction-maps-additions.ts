// Authored by scripts/expand-hydrocarbon-halide-reaction-maps.mjs.
export const hydrocarbonHalideReactionMapsAdditions = {
  "hydrocarbons": {
    "base": 25,
    "quizBase": 40,
    "chapters": [
      {
        "title": "Radical product proportions count sites and per-hydrogen reactivity",
        "formula": "Propane: 6 primary H and 2 secondary H; supplied ksecondary/kprimary=4 ⇒ weights 6:8 ⇒ products 3:4",
        "script": "The more reactive type of hydrogen does not automatically supply the product ratio by itself. Consider an original low conversion monochlorination model for propane. Its two equivalent methyl ends contain six primary hydrogens in total, and its middle carbon contains two secondary hydrogens. Suppose the supplied relative abstraction rate per secondary hydrogen is four, while that per primary hydrogen is one under the stated conditions. Multiply the number of each type of hydrogen by its per hydrogen reactivity. The primary substitution channel has weight six times one, or six. The secondary channel has weight two times four, or eight. Normalize by the total fourteen to obtain three sevenths one chloropropane and four sevenths two chloropropane, approximately forty two point nine and fifty seven point one percent. The two equivalent chain ends give the same primary constitutional product. Neither the raw six to two hydrogen count nor the bare one to four reactivity ratio is the final product ratio. The value four is supplied for this exercise, not a universal chlorination constant. Repeated substitution, changing conditions and substantial conversion can invalidate the simple two channel estimate.",
        "points": [
          "Propane: CH₃–CH₂–CH₃ · 6 primary H; 2 secondary H · Equivalent ends give one primary product",
          "Supplied per-H rates: primary 1, secondary 4 · Weights=6×1 and 2×4 · 1-chloro : 2-chloro = 3:4",
          "Normalize by 6+8=14 · Fractions 3/7 and 4/7 · Low-conversion monochlorination model"
        ],
        "board": {
          "heading": "Radical product proportions count sites and per-hydrogen reactivity",
          "columns": [
            "Substrate / condition",
            "Track the change",
            "Result / limit"
          ],
          "rows": [
            [
              "Propane: CH₃–CH₂–CH₃",
              "6 primary H; 2 secondary H",
              "Equivalent ends give one primary product"
            ],
            [
              "Supplied per-H rates: primary 1, secondary 4",
              "Weights=6×1 and 2×4",
              "1-chloro : 2-chloro = 3:4"
            ],
            [
              "Normalize by 6+8=14",
              "Fractions 3/7 and 4/7",
              "Low-conversion monochlorination model"
            ]
          ]
        }
      },
      {
        "title": "Syn hydroxylation gives a different stereochemical map from anti addition",
        "formula": "Ideal syn OH addition: cis-but-2-ene→meso butane-2,3-diol; trans→(2R,3R)+(2S,3S) under achiral conditions",
        "script": "Two reactions that add groups to the same double bond can produce different stereochemical outcomes because their addition geometries differ. Use an ideal stereospecific syn hydroxylation of but two ene, meaning both oxygen groups are delivered from the same alkene face and then appear as adjacent hydroxyl groups after the stated workup. The carbon skeleton stays intact and the product is butane two three diol. Starting from the cis alkene gives the meso configuration, with opposite R and S centres; its alternative R S and S R labels describe the same molecule under the end to end symmetry. Starting from the trans alkene gives the R R and S S enantiomer pair when both faces react equally under achiral conditions. Compare this with the earlier anti bromination map: the stereochemical relationship is reversed. Do not transfer the word meso from one reaction to another without checking syn versus anti delivery and the actual substituents. Both a meso sample and an exactly racemic sample can have zero net optical rotation for different reasons. These statements assume the specified stereospecific pathway, an achiral environment and no later stereochemical scrambling; they are not a claim that every oxidizing condition gives an intact diol.",
        "points": [
          "Specified syn hydroxylation; intact C4 chain · Two OH groups delivered from one face · Butane-2,3-diol",
          "cis-but-2-ene · Opposite R/S centres with internal symmetry · Meso diol",
          "trans-but-2-ene; achiral equal-face reaction · (2R,3R) and (2S,3S) · Racemic pair; different from anti map"
        ],
        "board": {
          "heading": "Syn hydroxylation gives a different stereochemical map from anti addition",
          "columns": [
            "Substrate / condition",
            "Track the change",
            "Result / limit"
          ],
          "rows": [
            [
              "Specified syn hydroxylation; intact C4 chain",
              "Two OH groups delivered from one face",
              "Butane-2,3-diol"
            ],
            [
              "cis-but-2-ene",
              "Opposite R/S centres with internal symmetry",
              "Meso diol"
            ],
            [
              "trans-but-2-ene; achiral equal-face reaction",
              "(2R,3R) and (2S,3S)",
              "Racemic pair; different from anti map"
            ]
          ]
        }
      },
      {
        "title": "Cleaving a cyclic double bond can leave one connected molecule",
        "formula": "Cyclohexene + reductive ozonolysis ⇒ OHC–(CH₂)₄–CHO; one hexane-1,6-dial per ring",
        "script": "Breaking a double bond does not always split an organic molecule into two separate molecules. Consider cyclohexene with one double bond between labelled ring carbons one and two. In reductive ozonolysis, remove the bond between those two carbons and replace each double bonded carbon by a carbonyl carbon while retaining its other original neighbours. Each alkene carbon originally bears a hydrogen, so each becomes an aldehyde end under the stated reductive workup. The remaining path through carbons three, four, five and six still connects the two former double bond carbons. The product is therefore a single six carbon chain with an aldehyde at each end: hexane one six dial, written O H C, four methylene groups, then C H O. Its formula is carbon six hydrogen ten oxygen two. One mole of the starting monocyclic alkene gives one mole of this dialdehyde in the ideal quantitative map, not two moles of three carbon aldehyde. The ring has opened, but the carbon inventory remains six. Further oxidation can convert aldehyde ends to acids, so the workup must be stated. More complicated polycyclic substrates require tracing every remaining carbon connection rather than applying a universal two fragment rule.",
        "points": [
          "Label cyclohexene C1=C2 · Delete that edge; keep the other ring path · All six carbons remain connected",
          "Each alkene carbon has one H · Reductive workup gives two CHO ends · OHC–(CH₂)₄–CHO",
          "Ideal 1 mol cyclohexene · 1 mol hexane-1,6-dial, C₆H₁₀O₂ · Ring opening need not give two molecules"
        ],
        "board": {
          "heading": "Cleaving a cyclic double bond can leave one connected molecule",
          "columns": [
            "Substrate / condition",
            "Track the change",
            "Result / limit"
          ],
          "rows": [
            [
              "Label cyclohexene C1=C2",
              "Delete that edge; keep the other ring path",
              "All six carbons remain connected"
            ],
            [
              "Each alkene carbon has one H",
              "Reductive workup gives two CHO ends",
              "OHC–(CH₂)₄–CHO"
            ],
            [
              "Ideal 1 mol cyclohexene",
              "1 mol hexane-1,6-dial, C₆H₁₀O₂",
              "Ring opening need not give two molecules"
            ]
          ]
        }
      },
      {
        "title": "An electrophilic addition can rearrange before halide capture",
        "formula": "CH₂=CH–CH(CH₃)–CH₃ + HCl: secondary C2 cation → 1,2-H shift → tertiary C3 cation → rearranged chloride",
        "script": "An orientation rule for proton addition is not the last step when a carbocation can rearrange. Use three methylbut one ene with its four carbon chain labelled one through four and a methyl branch at carbon three. In a conventional ionic hydrogen chloride addition description, proton attachment at terminal carbon one leaves a secondary carbocation at carbon two. A neighbouring carbon three hydrogen can migrate with its bond pair to carbon two, moving the positive site to carbon three and giving a tertiary carbocation. Chloride capture there yields the rearranged connectivity two chloro two methylbutane after renumbering the product. Direct capture before the shift instead gives the unrearranged connectivity two chloro three methylbutane. Both retain five carbons and have formula carbon five hydrogen eleven chlorine. Their relative amounts depend on competing pathways; a stability comparison alone does not justify declaring a single quantitative product. This is a specified ionic H C l example, not the peroxide initiated hydrogen bromide chain mechanism. Track the labelled carbons through protonation, hydrogen migration and capture before renumbering the final name. The migrating hydrogen carries an electron pair; no carbon atom or free hydride reagent is inserted.",
        "points": [
          "3-methylbut-1-ene; ionic HCl addition · H adds C1; secondary cation at C2 · Check rearrangement before capture",
          "C3–H bond pair migrates to C2 · Tertiary cation at original C3 · Cl capture: 2-chloro-2-methylbutane",
          "Direct C2 capture can compete · 2-chloro-3-methylbutane · Both C₅H₁₁Cl; no yield ratio assumed"
        ],
        "board": {
          "heading": "An electrophilic addition can rearrange before halide capture",
          "columns": [
            "Substrate / condition",
            "Track the change",
            "Result / limit"
          ],
          "rows": [
            [
              "3-methylbut-1-ene; ionic HCl addition",
              "H adds C1; secondary cation at C2",
              "Check rearrangement before capture"
            ],
            [
              "C3–H bond pair migrates to C2",
              "Tertiary cation at original C3",
              "Cl capture: 2-chloro-2-methylbutane"
            ],
            [
              "Direct C2 capture can compete",
              "2-chloro-3-methylbutane",
              "Both C₅H₁₁Cl; no yield ratio assumed"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "For the supplied propane monochlorination model with 6 primary H, 2 secondary H and per-H rates 1:4, one-chloropropane fraction is:",
        "options": [
          "3/7",
          "1/4",
          "3/4",
          "1/7"
        ],
        "answer": 0,
        "explanation": "Site-weighted rates are 6 and 8; primary product fraction=6/(6+8)=3/7."
      },
      {
        "question": "Why are the two propane ends not counted as different primary constitutional products?",
        "options": [
          "They have no hydrogens",
          "They are related by the carbon-skeleton symmetry",
          "Every chlorination is stereospecific",
          "The secondary carbon is absent"
        ],
        "answer": 1,
        "explanation": "Substitution at either equivalent methyl end gives the same one-chloropropane connectivity."
      },
      {
        "question": "Ideal stereospecific syn hydroxylation of cis-but-2-ene gives:",
        "options": [
          "Only (2R,3R) diol",
          "Only (2S,3S) diol",
          "Meso butane-2,3-diol",
          "Two disconnected aldehydes"
        ],
        "answer": 2,
        "explanation": "The syn map from cis-but-2-ene produces opposite R/S centres in an internally symmetric diol."
      },
      {
        "question": "The corresponding trans-but-2-ene syn hydroxylation under achiral equal-face conditions gives:",
        "options": [
          "Only meso diol",
          "Only an achiral ketone",
          "No new stereocentres",
          "Equal (2R,3R) and (2S,3S) diols"
        ],
        "answer": 3,
        "explanation": "The two alkene faces lead to the enantiomer pair. Zero sample rotation would not alone distinguish this from a meso sample."
      },
      {
        "question": "Reductive ozonolysis of cyclohexene gives the principal carbon skeleton:",
        "options": [
          "One OHC–(CH₂)₄–CHO molecule",
          "Two propanal molecules",
          "One four-carbon aldehyde only",
          "Six formaldehyde molecules"
        ],
        "answer": 0,
        "explanation": "The other five ring edges keep all six carbons connected after the alkene edge is cleaved."
      },
      {
        "question": "Under the stipulated quantitative reductive cleavage map, .0200 mol cyclohexene gives how much hexane-1,6-dial?",
        "options": [
          ".0400 mol",
          ".0200 mol",
          ".0100 mol",
          ".1200 mol"
        ],
        "answer": 1,
        "explanation": "One monocyclic starting molecule becomes one connected dialdehyde molecule, despite having two carbonyl groups."
      },
      {
        "question": "In the supplied ionic HCl addition to 3-methylbut-1-ene, shifting H with its bond pair from original C3 toward C2 places the positive site at:",
        "options": [
          "Original C1",
          "The migrating free proton",
          "Original C3",
          "The external chloride ion"
        ],
        "answer": 2,
        "explanation": "The C3–H electron pair fills C2’s deficiency, leaving a tertiary carbocation at original C3."
      },
      {
        "question": "Chloride capture at that rearranged tertiary site gives the connectivity:",
        "options": [
          "1-chloro-3-methylbutane",
          "2-chloro-3-methylbutane only",
          "Chlorobenzene",
          "2-chloro-2-methylbutane"
        ],
        "answer": 3,
        "explanation": "After capture and product renumbering, the tertiary chloride is 2-chloro-2-methylbutane; direct unrearranged capture can compete."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: radical halogenation of alkanes",
        "url": "https://openstax.org/books/organic-chemistry/pages/10-2-preparing-alkyl-halides-from-alkanes-radical-halogenation"
      },
      {
        "title": "OpenStax: syn hydroxylation of alkenes",
        "url": "https://openstax.org/books/organic-chemistry/pages/8-7-oxidation-of-alkenes-epoxidation-and-hydroxylation"
      },
      {
        "title": "OpenStax: oxidative cleavage of alkenes",
        "url": "https://openstax.org/books/organic-chemistry/pages/8-8-oxidation-of-alkenes-cleavage-to-carbonyl-compounds"
      },
      {
        "title": "OpenStax: carbocation rearrangements in electrophilic addition",
        "url": "https://openstax.org/books/organic-chemistry/pages/7-11-evidence-for-the-mechanism-of-electrophilic-additions-carbocation-rearrangements"
      }
    ]
  },
  "organic-halogens": {
    "base": 25,
    "quizBase": 40,
    "chapters": [
      {
        "title": "Activated aromatic fluoride can outrun chloride in a specified pathway",
        "formula": "Addition-limited SNAr comparison: p-NO₂–C₆H₄–F can react faster than p-NO₂–C₆H₄–Cl under comparable conditions",
        "script": "A leaving group ranking learned for ordinary alkyl substitution cannot be transferred unchanged to every aromatic mechanism. Consider a specified addition elimination nucleophilic aromatic substitution on otherwise comparable para nitro aryl halides, with nucleophile addition as the rate controlling stage. The nitro group opposite the halogen can stabilize negative charge developed in the addition intermediate through resonance. Fluorine strongly withdraws inductively and can facilitate that initial addition, so the activated aryl fluoride can react faster than the corresponding chloride in this regime despite the strong carbon fluorine bond. Fluoride departs in the later stage as aromaticity is restored. This does not mean fluoride is the best leaving group for an ordinary alkyl S N two displacement, nor that unactivated fluorobenzene is automatically reactive under mild conditions. Moving the nitro group to a meta position removes the same direct resonance stabilization in the usual intermediate comparison. The observed ranking depends on substrate activation, nucleophile, solvent and which elementary stage controls the rate. This chapter treats the supplied addition limited pathway rather than all modern aromatic substitution mechanisms. Locate the activating group and identify the rate controlling event before using bond strength alone to rank reactivity.",
        "points": [
          "Comparable p-nitro aryl F and Cl · Specified addition-limited SNAr · Aryl F can react faster",
          "Nitro ortho/para to attacked carbon · Stabilizes negative charge in addition stage · Meta does not provide the same resonance path",
          "Aromaticity restored when X leaves · Different from ordinary alkyl SN2 · No universal fluoride ranking"
        ],
        "board": {
          "heading": "Activated aromatic fluoride can outrun chloride in a specified pathway",
          "columns": [
            "Substrate / condition",
            "Track the change",
            "Result / limit"
          ],
          "rows": [
            [
              "Comparable p-nitro aryl F and Cl",
              "Specified addition-limited SNAr",
              "Aryl F can react faster"
            ],
            [
              "Nitro ortho/para to attacked carbon",
              "Stabilizes negative charge in addition stage",
              "Meta does not provide the same resonance path"
            ],
            [
              "Aromaticity restored when X leaves",
              "Different from ordinary alkyl SN2",
              "No universal fluoride ranking"
            ]
          ]
        }
      },
      {
        "title": "Supporting ring closure: count the oxygen as a ring atom",
        "formula": "⁻O–CH₂–CH₂–CH₂–CH₂–Br → cyclic (OCH₂CH₂CH₂CH₂) + Br⁻; five-membered ether ring",
        "script": "An intramolecular substitution can make a ring without adding any carbon atoms. Use a supporting reaction map for the alkoxide derived from four bromobutan one ol. Label its existing chain from the oxygen bearing carbon one to the bromine bearing carbon four. In the specified intramolecular Williamson pathway, oxygen attacks carbon four from the backside while the carbon bromine bond breaks. The new ring contains oxygen and all four chain carbons, giving a five membered cyclic ether, tetrahydrofuran, with formula carbon four hydrogen eight oxygen. Counting only the four carbons would incorrectly call it a four membered ring. The oxygen carbon one bond was already present; the newly made bond joins oxygen to carbon four. The attacking end carries charge minus one, and bromide leaves with minus one, so overall charge is conserved while the organic ring becomes neutral. The precursor alcohol differs from its alkoxide by one proton, which must be accounted for separately in a full preparation. Intermolecular reactions and other pathways can compete, so this connectivity map is not a promise of exclusive yield. It illustrates a suitable primary substitution site and favourable ring size, not a rule that every chain cyclizes equally well.",
        "points": [
          "Alkoxide ⁻O–(CH₂)₄–Br · O attacks primary terminal C4 · New O–C4 bond; C4–Br breaks",
          "Existing O–C1 and four-carbon path retained · Ring atoms: O + 4 C · Five-membered tetrahydrofuran",
          "C₄H₈BrO⁻ → C₄H₈O + Br⁻ · Atoms and total charge conserved · Supporting local pathway, not exclusive yield"
        ],
        "board": {
          "heading": "Supporting ring closure: count the oxygen as a ring atom",
          "columns": [
            "Substrate / condition",
            "Track the change",
            "Result / limit"
          ],
          "rows": [
            [
              "Alkoxide ⁻O–(CH₂)₄–Br",
              "O attacks primary terminal C4",
              "New O–C4 bond; C4–Br breaks"
            ],
            [
              "Existing O–C1 and four-carbon path retained",
              "Ring atoms: O + 4 C",
              "Five-membered tetrahydrofuran"
            ],
            [
              "C₄H₈BrO⁻ → C₄H₈O + Br⁻",
              "Atoms and total charge conserved",
              "Supporting local pathway, not exclusive yield"
            ]
          ]
        }
      },
      {
        "title": "An epoxide extends a Grignard chain by two carbons",
        "formula": "C₂H₅MgBr + ethylene oxide; then proton workup ⇒ CH₃CH₂CH₂CH₂OH",
        "script": "An organomagnesium reagent can form a carbon carbon bond by opening an epoxide as well as by adding to a carbonyl. Use ethylmagnesium bromide and the symmetrical two carbon epoxide ethylene oxide in a supporting carbon counting map. The ethyl carbon bearing the magnesium association attacks one epoxide carbon, and the bond from that attacked carbon to oxygen breaks. The two original epoxide carbons remain joined to one another. Oxygen stays attached to the other epoxide carbon as an alkoxide before the later proton workup. The final organic product is butan one ol, containing the two ethyl carbons plus the two epoxide carbons in one four carbon chain. The oxygen atom in the alcohol comes from the epoxide, while the hydroxyl proton is supplied at workup. This differs from formaldehyde addition, which extends the ethyl carbon skeleton by one carbon to propan one ol. Water present before the planned bond formation can instead quench the Grignard reagent to ethane. The two epoxide carbons here are equivalent, so there is no regioisomer choice in this particular example. Unsymmetrical epoxides require an additional attack site analysis, and acidic groups elsewhere on a substrate can change the outcome.",
        "points": [
          "Ethyl Grignard contributes C2 · Ethylene oxide contributes C2 and O · One C4 alkoxide skeleton",
          "Break attacked epoxide C–O bond · Other C–O bond remains; then protonate · Butan-1-ol",
          "Compare formaldehyde: adds C1 · Ethyl + formaldehyde gives propan-1-ol · Early water instead quenches to ethane"
        ],
        "board": {
          "heading": "An epoxide extends a Grignard chain by two carbons",
          "columns": [
            "Substrate / condition",
            "Track the change",
            "Result / limit"
          ],
          "rows": [
            [
              "Ethyl Grignard contributes C2",
              "Ethylene oxide contributes C2 and O",
              "One C4 alkoxide skeleton"
            ],
            [
              "Break attacked epoxide C–O bond",
              "Other C–O bond remains; then protonate",
              "Butan-1-ol"
            ],
            [
              "Compare formaldehyde: adds C1",
              "Ethyl + formaldehyde gives propan-1-ol",
              "Early water instead quenches to ethane"
            ]
          ]
        }
      },
      {
        "title": "A stipulated SN2 inversion can keep the same R descriptor",
        "formula": "HOCH₂–CH(Br)–CH₃ → HOCH₂–CH(CN)–CH₃: Br>CH₂OH>CH₃>H becomes CH₂OH>CN>CH₃>H",
        "script": "Spatial inversion and a change of the printed R or S descriptor are different questions. Use a stipulated single S N two displacement on a stereogenic carbon bonded to bromine, hydroxymethyl, methyl and hydrogen. Begin with the R configuration. Its priorities are bromine first, hydroxymethyl second, methyl third and hydrogen fourth. Replace bromine by a carbon bonded cyanide group in an ideal backside displacement, excluding competing pathways for this local stereochemical exercise. The product priorities must be rebuilt. Hydroxymethyl and cyanide both begin with carbon, but their next comparison lists are oxygen hydrogen hydrogen and nitrogen nitrogen nitrogen respectively; the multiple bond duplication rule supplies the repeated nitrogen entries. Since oxygen outranks nitrogen, hydroxymethyl is now first and cyanide second. Methyl remains third and hydrogen fourth. Physical inversion alone reverses orientation, but the exchange of the first two priority identities reverses the naming comparison again. The product therefore also receives R in this stated example, despite actual inversion at the reacting carbon. This is not spatial retention and does not guarantee a particular experimental yield or pathway for every haloalcohol. The nitrile carbon adds one carbon to the organic inventory.",
        "points": [
          "Initial centre: Br, CH₂OH, CH₃, H · Priorities 1,2,3,4; original R · Stipulate one backside SN2 step",
          "Product comparison: CH₂OH versus CN · [O,H,H] outranks [N,N,N] · CH₂OH first; CN second",
          "Spatial inversion plus priority interchange · Two sign changes in descriptor calculation · Product also R; not spatial retention"
        ],
        "board": {
          "heading": "A stipulated SN2 inversion can keep the same R descriptor",
          "columns": [
            "Substrate / condition",
            "Track the change",
            "Result / limit"
          ],
          "rows": [
            [
              "Initial centre: Br, CH₂OH, CH₃, H",
              "Priorities 1,2,3,4; original R",
              "Stipulate one backside SN2 step"
            ],
            [
              "Product comparison: CH₂OH versus CN",
              "[O,H,H] outranks [N,N,N]",
              "CH₂OH first; CN second"
            ],
            [
              "Spatial inversion plus priority interchange",
              "Two sign changes in descriptor calculation",
              "Product also R; not spatial retention"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "In the specified addition-limited SNAr comparison, p-nitroaryl fluoride can react faster than the chloride because:",
        "options": [
          "Fluoride is always the best alkyl leaving group",
          "Its inductive effect can facilitate the rate-controlling nucleophile addition",
          "Every C–F bond is weaker than C–Cl",
          "A free phenyl cation is required"
        ],
        "answer": 1,
        "explanation": "The rate-controlling addition stage and nitro stabilization matter; the usual alkyl SN2 leaving-group shortcut does not determine this comparison."
      },
      {
        "question": "A nitro group meta rather than para to the attacked carbon in that usual SNAr intermediate comparison:",
        "options": [
          "Always gives stronger direct resonance stabilization",
          "Makes the substrate an alkyl halide",
          "Lacks the same direct resonance stabilization of the relevant intermediate",
          "Eliminates every possible aromatic pathway"
        ],
        "answer": 2,
        "explanation": "The statement concerns the standard addition-elimination activation pattern, not universal chemical inertness."
      },
      {
        "question": "Intramolecular attack of ⁻O–(CH₂)₄–Br at the terminal C–Br site gives a ring containing:",
        "options": [
          "Four atoms because only carbon counts",
          "Six atoms because bromine remains in the ring",
          "Three atoms",
          "Five atoms: oxygen and four carbons"
        ],
        "answer": 3,
        "explanation": "The new O–C bond closes a five-membered ether ring; bromide leaves."
      },
      {
        "question": "The organic product formula and leaving ion in that stipulated ring closure are:",
        "options": [
          "C₄H₈O and Br⁻",
          "C₄H₁₀O and Br⁺",
          "C₃H₆O and CH₃Br",
          "C₄H₈BrO⁻ with no ion released"
        ],
        "answer": 0,
        "explanation": "The alkoxide substrate C4H8BrO− becomes neutral C4H8O plus Br−, preserving atoms and total charge."
      },
      {
        "question": "Ethylmagnesium bromide plus ethylene oxide followed by proton workup gives:",
        "options": [
          "Propan-1-ol",
          "Butan-1-ol",
          "Butan-2-ol",
          "Ethanol"
        ],
        "answer": 1,
        "explanation": "Two ethyl carbons and two epoxide carbons form a C4 chain with terminal OH."
      },
      {
        "question": "In that product, the alcohol oxygen is supplied by:",
        "options": [
          "The magnesium atom",
          "The bromide ion",
          "The original epoxide oxygen",
          "A new carbonyl oxygen from nowhere"
        ],
        "answer": 2,
        "explanation": "Ring opening retains one epoxide C–O bond; later workup protonates the alkoxide oxygen."
      },
      {
        "question": "For the stipulated product centre bearing CH₂OH, CN, CH₃ and H, the highest priority is:",
        "options": [
          "CN, because nitrogen always outranks oxygen",
          "CH₃",
          "H",
          "CH₂OH, because [O,H,H] outranks [N,N,N]"
        ],
        "answer": 3,
        "explanation": "The directly attached carbons tie; the next layer is decided by O(8)>N(7)."
      },
      {
        "question": "For the specified R haloalcohol centre undergoing one backside SN2 replacement of Br by carbon-bonded CN, the product is:",
        "options": [
          "R despite spatial inversion, because the priority order changes",
          "R because no spatial inversion occurred",
          "S in every substitution regardless of priorities",
          "Achiral because every nitrile lacks stereocentres"
        ],
        "answer": 0,
        "explanation": "Actual inversion and interchange of the first two priority identities give two sign changes in the descriptor comparison. This is a local stipulated map, not an experimental-yield claim."
      }
    ],
    "sources": [
      {
        "title": "Chris Schaller: addition-limited aromatic substitution and fluoride",
        "url": "https://employees.csbsju.edu/cschaller/Reactivity/carbonyl/COaromsub.htm"
      },
      {
        "title": "OpenStax: activated nucleophilic aromatic substitution",
        "url": "https://openstax.org/books/organic-chemistry/pages/16-6-nucleophilic-aromatic-substitution"
      },
      {
        "title": "OpenStax: Williamson ether synthesis",
        "url": "https://openstax.org/books/organic-chemistry/pages/18-2-preparing-ethers"
      },
      {
        "title": "OpenStax: epoxide opening with Grignard reagents",
        "url": "https://openstax.org/books/organic-chemistry/pages/18-5-reactions-of-epoxides-ring-opening"
      },
      {
        "title": "OpenStax: SN2 stereochemistry",
        "url": "https://openstax.org/books/organic-chemistry/pages/11-2-the-sn2-reaction"
      },
      {
        "title": "OpenStax: CIP priority comparison and multiple bonds",
        "url": "https://openstax.org/books/organic-chemistry/pages/5-5-sequence-rules-for-specifying-configuration"
      }
    ]
  }
} as const;
