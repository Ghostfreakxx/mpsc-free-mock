// Authored by scripts/expand-nitrogen-biomolecule-reaction-maps.mjs.
export const nitrogenBiomoleculeReactionMapsAdditions = {
  "organic-nitrogen": {
    "base": 25,
    "quizBase": 40,
    "chapters": [
      {
        "title": "Diazonium fluorination uses a different reagent map",
        "formula": "ArN₂⁺BF₄⁻ → ArF + N₂ + BF₃ in the classical Balz–Schiemann map",
        "script": "A diazonium replacement must name the incoming group and the appropriate reaction route. In the classical Balz Schiemann map, an arenediazonium tetrafluoroborate gives an aryl fluoride with nitrogen gas and boron trifluoride on decomposition under the specified reaction conditions. For a benzene derived example, the organic product is fluorobenzene, with the six ring carbons retained. The net atom ledger starts with four fluorines in tetrafluoroborate: one enters the aryl fluoride and three remain with boron in boron trifluoride. Both nitrogens of the diazonium group leave together as one nitrogen molecule. This differs from the familiar copper one chloride or bromide replacement maps; drawing copper fluoride as though all copper assisted replacement reagents were interchangeable is not the intended classical route. Replacing the amino derived diazonium group by fluorine adds no carbon and leaves no nitrogen in the selected organic product. The reaction name describes a controlled chemical transformation, not a guarantee that every substituted ring behaves identically. This chapter supplies reaction and atom accounting, not instructions for isolating or heating a diazonium salt. Keep the counterion, organic substitution and gaseous products distinct.",
        "points": [
          "ArN₂⁺BF₄⁻; classical Schiemann map · Replace diazonium group by F · ArF + N₂ + BF₃",
          "Four F atoms in the starting counterion · 1 in ArF; 3 in BF₃ · B and F inventory conserved",
          "Benzene-derived ring: six carbons · Both diazonium N leave as N₂ · Not a generic Cu-halide interchange"
        ],
        "board": {
          "heading": "Diazonium fluorination uses a different reagent map",
          "columns": [
            "Given / structure",
            "Follow the change",
            "Result / boundary"
          ],
          "rows": [
            [
              "ArN₂⁺BF₄⁻; classical Schiemann map",
              "Replace diazonium group by F",
              "ArF + N₂ + BF₃"
            ],
            [
              "Four F atoms in the starting counterion",
              "1 in ArF; 3 in BF₃",
              "B and F inventory conserved"
            ],
            [
              "Benzene-derived ring: six carbons",
              "Both diazonium N leave as N₂",
              "Not a generic Cu-halide interchange"
            ]
          ]
        }
      },
      {
        "title": "Diazotization can remove a temporary amino directing group",
        "formula": "ArNH₂ → ArN₂⁺ → ArH using the specified diazotization then H₃PO₂ reduction map",
        "script": "An amino group can help choose where another group enters an aromatic ring and then be removed from the final framework. In the familiar deamination map, a primary aromatic amine is first converted to an arenediazonium species. Reduction with hypophosphorous acid replaces the diazonium group by hydrogen while nitrogen gas is released. Consider a ring labelled with amino at carbon one, methyl at carbon four, and bromines already at carbons two and six. Those bromines are ortho to the amino group in the supplied precursor. Replacing the amino derived diazonium group by hydrogen preserves the ring and methyl carbons. Renumbering the product from its methyl substituent places the bromines at positions three and five, giving three five dibromotoluene. The bromine atoms have not migrated; only the naming reference changed after the directing group was removed. This can achieve a substitution pattern that direct bromination of toluene would not normally favour. The example starts from the specified substituted precursor and does not assume an unqualified bromination gives a single pure product. Follow the original ring labels through replacement before assigning the final product name.",
        "points": [
          "Precursor: NH₂ at C1; CH₃ at C4 · Br at original C2 and C6 · Specified substituted aromatic framework",
          "Diazotization, then H₃PO₂ reduction · Original C1 gains H; N₂ leaves · Ring, methyl and Br positions retained",
          "Renumber relative to CH₃ · Br become positions 3 and 5 · 3,5-dibromotoluene; no Br migration"
        ],
        "board": {
          "heading": "Diazotization can remove a temporary amino directing group",
          "columns": [
            "Given / structure",
            "Follow the change",
            "Result / boundary"
          ],
          "rows": [
            [
              "Precursor: NH₂ at C1; CH₃ at C4",
              "Br at original C2 and C6",
              "Specified substituted aromatic framework"
            ],
            [
              "Diazotization, then H₃PO₂ reduction",
              "Original C1 gains H; N₂ leaves",
              "Ring, methyl and Br positions retained"
            ],
            [
              "Renumber relative to CH₃",
              "Br become positions 3 and 5",
              "3,5-dibromotoluene; no Br migration"
            ]
          ]
        }
      },
      {
        "title": "Reductive amination retains the substituent already attached to nitrogen",
        "formula": "CH₃CHO + CH₃NH₂ ⇌ CH₃CH=NCH₃ + H₂O; reduction → CH₃CH₂NHCH₃",
        "script": "The class of an amine product depends on which groups remain attached to nitrogen, not just on whether a carbonyl was reduced. Use a specified reductive amination map starting from acetaldehyde and methylamine. Condensation gives an imine intermediate, meaning a carbon nitrogen double bond compound, with an ethylidene carbon nitrogen double bond and the original methyl group still bonded to nitrogen. The carbonyl oxygen leaves in the water balance rather than remaining in the selected carbon nitrogen double bond intermediate. Reducing the carbon nitrogen double bond then gives ethylmethylamine. Nitrogen is bonded to an ethyl group, a methyl group and one hydrogen, so the product is a secondary amine. The organic inventory is three carbons: two from acetaldehyde and one from methylamine. In formal atom bookkeeping, acetaldehyde plus methylamine plus two reducing hydrogen equivalents gives the three carbon amine plus water. Direct reduction of acetaldehyde alone would instead give ethanol, a different functional group. Actual reductive amination requires suitable control of condensation and reduction, and competing reactions can affect yield. This supporting reaction map identifies connectivity and atom sources rather than prescribing a complete reagent sequence or claiming exclusive conversion.",
        "points": [
          "Ethanal C2 + methylamine C1 · Imine CH₃CH=NCH₃ + H₂O · Original N–CH₃ bond retained",
          "Reduce C=N; preserve all three carbons · CH₃CH₂NHCH₃ · Secondary amine: two C groups on N",
          "Formal net: C₂H₄O + CH₅N + 2[H] · C₃H₉N + H₂O · Direct carbonyl reduction alone gives alcohol"
        ],
        "board": {
          "heading": "Reductive amination retains the substituent already attached to nitrogen",
          "columns": [
            "Given / structure",
            "Follow the change",
            "Result / boundary"
          ],
          "rows": [
            [
              "Ethanal C2 + methylamine C1",
              "Imine CH₃CH=NCH₃ + H₂O",
              "Original N–CH₃ bond retained"
            ],
            [
              "Reduce C=N; preserve all three carbons",
              "CH₃CH₂NHCH₃",
              "Secondary amine: two C groups on N"
            ],
            [
              "Formal net: C₂H₄O + CH₅N + 2[H]",
              "C₃H₉N + H₂O",
              "Direct carbonyl reduction alone gives alcohol"
            ]
          ]
        }
      },
      {
        "title": "Supporting extraction: protonation changes the amine distribution ratio",
        "formula": "D=P/(1+10^(pKa(BH⁺)−pH)); forg=D Vorg/(Vaq+D Vorg)",
        "script": "Partition of an amine requires both its acid base equilibrium and its neutral species partition coefficient. In a supplied supporting model, neutral base B distributes between an organic phase and water with coefficient P equal to twenty, defined as organic neutral concentration divided by aqueous neutral concentration. Protonated base remains in water. The conjugate acid has supplied p K a ten, and an external buffer maintains the stated aqueous p H. The ratio of protonated to neutral base in water is ten raised to p K a minus p H. The total organic to aqueous analytical distribution ratio is consequently P divided by one plus that ratio. At p H eight, D is twenty over one hundred one. For one hundred millilitres water and fifty millilitres organic phase, the fraction of total amine in organic solution is ten over one hundred eleven, about nine point zero one percent. At p H ten, D becomes ten and the organic fraction five sixths, about eighty three point three percent. These results assume equilibrium, unchanged phase volumes, no ion transfer into organic solution and no additional association. The supplied p H is maintained rather than calculated from the amine alone.",
        "points": [
          "Pneutral=20; pKa(BH⁺)=10 · BH⁺ stays aqueous; maintained pH · D=20/(1+10^(10−pH))",
          "Vaq=100 mL; Vorg=50 mL; pH8 · D=20/101; forg=10/111 · About 9.01% organic",
          "Same volumes; pH10 · D=10; forg=5/6 · About 83.3%; model assumptions explicit"
        ],
        "board": {
          "heading": "Supporting extraction: protonation changes the amine distribution ratio",
          "columns": [
            "Given / structure",
            "Follow the change",
            "Result / boundary"
          ],
          "rows": [
            [
              "Pneutral=20; pKa(BH⁺)=10",
              "BH⁺ stays aqueous; maintained pH",
              "D=20/(1+10^(10−pH))"
            ],
            [
              "Vaq=100 mL; Vorg=50 mL; pH8",
              "D=20/101; forg=10/111",
              "About 9.01% organic"
            ],
            [
              "Same volumes; pH10",
              "D=10; forg=5/6",
              "About 83.3%; model assumptions explicit"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "The classical thermal reaction map for ArN₂⁺BF₄⁻ gives:",
        "options": [
          "ArF + N₂ + BF₃",
          "ArCl + N₂ + BF₄",
          "ArCN + BF₃",
          "ArNH₂ + F₂"
        ],
        "answer": 0,
        "explanation": "One fluorine enters the aryl fluoride, three remain with boron, and both diazonium nitrogens leave as N2."
      },
      {
        "question": "For benzenediazonium tetrafluoroborate in that map, the selected organic product contains:",
        "options": [
          "Seven carbons and one nitrogen",
          "Six carbons and no nitrogen",
          "Six carbons and two nitrogen atoms",
          "Five carbons and one boron"
        ],
        "answer": 1,
        "explanation": "Fluorobenzene retains the six-carbon ring and has no nitrogen; N2 and BF3 are separate products."
      },
      {
        "question": "The specified H₃PO₂ reduction of an arenediazonium group replaces that group by:",
        "options": [
          "CN",
          "OH",
          "H",
          "Br"
        ],
        "answer": 2,
        "explanation": "The deamination map gives ArH with nitrogen loss, allowing a temporary amino directing group to be removed."
      },
      {
        "question": "A precursor has NH₂ at ring C1, CH₃ at C4 and Br at C2/C6. Removing the amino group through the specified diazonium reduction gives:",
        "options": [
          "2,6-dibromotoluene by bromine migration",
          "Benzene with all substituents removed",
          "Only an azo dye",
          "3,5-dibromotoluene after renumbering from methyl"
        ],
        "answer": 3,
        "explanation": "The original bromines stay at their carbons. Changing the naming reference to methyl makes those positions 3 and 5."
      },
      {
        "question": "Specified reductive amination of acetaldehyde with methylamine gives:",
        "options": [
          "Ethylmethylamine, a secondary amine",
          "Ethylamine, a primary amine with only two carbons",
          "Ethanol as the amination product",
          "Trimethylamine necessarily"
        ],
        "answer": 0,
        "explanation": "The nitrogen retains its methyl group and gains the reduced two-carbon fragment, giving CH3CH2NHCH3."
      },
      {
        "question": "The carbon count in that selected amine product is:",
        "options": [
          "Two",
          "Three",
          "Four",
          "One"
        ],
        "answer": 1,
        "explanation": "Two carbons come from acetaldehyde and one from methylamine; condensation removes water, not a carbon."
      },
      {
        "question": "For the supplied amine extraction model P=20, pKa(BH⁺)=10, pH8, Vaq=100 mL and Vorg=50 mL, organic fraction is:",
        "options": [
          "20/21",
          "5/6",
          "10/111",
          "100/101"
        ],
        "answer": 2,
        "explanation": "D=20/101 and forg=D×50/(100+D×50)=10/111."
      },
      {
        "question": "At maintained pH10 with the same supplied model and volumes, the organic fraction becomes:",
        "options": [
          "1/2",
          "10/111",
          "1/6",
          "5/6"
        ],
        "answer": 3,
        "explanation": "At pH=pKa the aqueous BH+/B ratio is one, D=20/2=10 and forg=500/600=5/6."
      }
    ],
    "sources": [
      {
        "title": "NCERT Chemistry: amines and diazonium replacement reactions",
        "url": "https://ncert.nic.in/textbook/pdf/lech204.pdf"
      },
      {
        "title": "OpenStax: arylamine reactions and temporary directing groups",
        "url": "https://openstax.org/books/organic-chemistry/pages/24-8-reactions-of-arylamines"
      },
      {
        "title": "OpenStax: reductive amination",
        "url": "https://openstax.org/books/organic-chemistry/pages/24-6-synthesis-of-amines"
      },
      {
        "title": "OpenStax: amine basicity and acid-base separation",
        "url": "https://openstax.org/books/organic-chemistry/pages/24-3-basicity-of-amines"
      }
    ]
  },
  "biomolecules": {
    "base": 25,
    "quizBase": 40,
    "chapters": [
      {
        "title": "Glucose pentaacetate distinguishes free carbonyl evidence from a protected ring",
        "formula": "Glucose forms an oxime; glucose pentaacetate does not in the usual textbook comparison; five acetylated OH groups do not imply a free CHO group",
        "script": "Structural evidence must identify which form of a sugar is actually being tested. Unmodified glucose can react with hydroxylamine to give an oxime through its accessible carbonyl chemistry, even though cyclic hemiacetal forms predominate in water. Acetylation gives glucose pentaacetate, supporting the presence of five hydroxyl groups available for that transformation. In the usual textbook comparison, glucose pentaacetate does not react with hydroxylamine to give the analogous oxime. The protected cyclic structure lacks the freely available aldehyde behaviour assumed by a permanent open chain drawing. Acetylating the anomeric hydroxyl prevents the ordinary hemiacetal ring opening equilibrium without first changing the protected groups. This does not mean that glucose never has an open chain form, or that every acetate group is a new aldehyde. The two observations ask different questions: how many hydroxyl groups can be acetylated, and whether the tested derivative has an accessible carbonyl under the specified conditions. Hydrolysis or deprotection can change that answer, so the derivative and reaction conditions must remain explicit. Combine these observations with the other glucose evidence rather than treating one negative test as a complete structure proof.",
        "points": [
          "Unmodified glucose · Accessible carbonyl chemistry with NH₂OH · Oxime formation is possible",
          "Glucose pentaacetate · Five OH groups acetylated, including anomeric OH · No analogous oxime in textbook comparison",
          "Protected cyclic derivative differs from glucose · Ring opening would require changing protection · Negative test is condition-dependent evidence"
        ],
        "board": {
          "heading": "Glucose pentaacetate distinguishes free carbonyl evidence from a protected ring",
          "columns": [
            "Given / structure",
            "Follow the change",
            "Result / boundary"
          ],
          "rows": [
            [
              "Unmodified glucose",
              "Accessible carbonyl chemistry with NH₂OH",
              "Oxime formation is possible"
            ],
            [
              "Glucose pentaacetate",
              "Five OH groups acetylated, including anomeric OH",
              "No analogous oxime in textbook comparison"
            ],
            [
              "Protected cyclic derivative differs from glucose",
              "Ring opening would require changing protection",
              "Negative test is condition-dependent evidence"
            ]
          ]
        }
      },
      {
        "title": "Partial peptide fragments can distinguish identical total compositions",
        "formula": "Two Ala + one Gly: AAG, AGA, GAA; observed contiguous AG and GA fragments select AGA in the stated model",
        "script": "Complete hydrolysis can reveal peptide composition without fixing the order of residues. Suppose a supplied linear tripeptide contains two alanine residues and one glycine residue, with no modified residues or cyclization. Write sequences from amino terminus to carboxyl terminus and abbreviate alanine A and glycine G. The distinct composition compatible sequences are A A G, A G A and G A A; exchanging the two identical alanines does not make a fourth sequence. Now suppose controlled partial hydrolysis identifies both A G and G A as contiguous dipeptide fragments from the same pure tripeptide, with no rearrangement or transpeptidation in the stated evidence model. Only A G A contains both directed adjacent pairs. A A G contains A A and A G, while G A A contains G A and A A. All three candidates have two peptide bonds and the same mass computed from two free alanines plus one glycine minus two waters. Sequence evidence therefore adds information that mass and total amino acid counts cannot supply. Real sequence determination needs appropriate controls and fragment identification; this small overlap puzzle is a supporting inference exercise rather than a universal sequencing method.",
        "points": [
          "Composition: 2 Ala + 1 Gly; linear tripeptide · Distinct N→C sequences: AAG, AGA, GAA · Same composition and condensation mass",
          "Directed contiguous fragments AG and GA observed · AGA contains both; other candidates contain AA · AGA selected under stated evidence model",
          "Two peptide links in every candidate · 2×89+75−2×18=217 g/mol · Mass alone cannot fix sequence"
        ],
        "board": {
          "heading": "Partial peptide fragments can distinguish identical total compositions",
          "columns": [
            "Given / structure",
            "Follow the change",
            "Result / boundary"
          ],
          "rows": [
            [
              "Composition: 2 Ala + 1 Gly; linear tripeptide",
              "Distinct N→C sequences: AAG, AGA, GAA",
              "Same composition and condensation mass"
            ],
            [
              "Directed contiguous fragments AG and GA observed",
              "AGA contains both; other candidates contain AA",
              "AGA selected under stated evidence model"
            ],
            [
              "Two peptide links in every candidate",
              "2×89+75−2×18=217 g/mol",
              "Mass alone cannot fix sequence"
            ]
          ]
        }
      },
      {
        "title": "Supporting pI calculation uses the two steps surrounding net zero charge",
        "formula": "Asp model pKa 2.1,3.9,9.8 ⇒ pI≈3.0; Lys model 2.2,9.0,10.5 ⇒ pI≈9.75",
        "script": "An ionizable side chain changes which dissociation steps surround an amino acid's net neutral form. Use a supporting dominant state calculation with supplied stepwise p K a values, rather than averaging every number automatically. For an aspartic acid model, the values are two point one, three point nine and nine point eight. Increasing p H removes protons through net charge states plus one, zero, minus one and minus two. The neutral state lies between the first two steps, so its approximate isoelectric point is their average, three point zero. For a lysine model with values two point two, nine point zero and ten point five, the successive net charges are plus two, plus one, zero and minus one. Here the neutral state lies between the last two steps, giving approximate isoelectric point nine point seven five. These are supplied illustrative constants and the usual adjacent state approximation, not universal values for every solvent and temperature. At the isoelectric point the average net charge is zero; charged groups within individual zwitterions still exist. Identify every ionizable group and the charge ladder before selecting the two constants.",
        "points": [
          "Asp supplied pKa: 2.1,3.9,9.8 · Charge ladder +1 → 0 → −1 → −2 · pI≈(2.1+3.9)/2=3.0",
          "Lys supplied pKa: 2.2,9.0,10.5 · Charge ladder +2 → +1 → 0 → −1 · pI≈(9.0+10.5)/2=9.75",
          "Use steps adjacent to net-neutral state · Dominant adjacent-state approximation · Do not average all three pKa values"
        ],
        "board": {
          "heading": "Supporting pI calculation uses the two steps surrounding net zero charge",
          "columns": [
            "Given / structure",
            "Follow the change",
            "Result / boundary"
          ],
          "rows": [
            [
              "Asp supplied pKa: 2.1,3.9,9.8",
              "Charge ladder +1 → 0 → −1 → −2",
              "pI≈(2.1+3.9)/2=3.0"
            ],
            [
              "Lys supplied pKa: 2.2,9.0,10.5",
              "Charge ladder +2 → +1 → 0 → −1",
              "pI≈(9.0+10.5)/2=9.75"
            ],
            [
              "Use steps adjacent to net-neutral state",
              "Dominant adjacent-state approximation",
              "Do not average all three pKa values"
            ]
          ]
        }
      },
      {
        "title": "Supporting RNA cleavage depends on the nearby two-prime hydroxyl",
        "formula": "RNA 2′-O⁻ attacks adjacent phosphate → 2′,3′-cyclic phosphate + downstream 5′-OH; DNA lacks the same 2′-OH pathway",
        "script": "The sugar difference between R N A and D N A affects backbone chemistry as well as molecular naming. In a supporting alkaline cleavage model, the two prime hydroxyl of an R N A ribose can lose a proton and provide a nearby oxygen nucleophile. That oxygen attacks the phosphorus of the adjacent three prime phosphate linkage within the same chain. The downstream phosphorus oxygen five prime connection breaks, leaving a two prime three prime cyclic phosphate on one fragment and a five prime hydroxyl on the other after proton transfer. The initial cleavage is an intramolecular transesterification; later opening of the cyclic phosphate can give additional hydrolysis products. This is different from merely separating complementary bases or denaturing a duplex. A D N A sugar has hydrogen rather than hydroxyl at two prime, so it cannot use this same neighbouring hydroxyl attack pathway. That distinction does not mean D N A is indestructible or that every R N A linkage cleaves at an identical rate. Sequence, conformation and conditions matter. For one specified internal cleavage in a linear chain, the number of covalently connected backbone pieces increases from one to two without creating or deleting nucleotide residues.",
        "points": [
          "RNA ribose has 2′-OH; DNA has 2′-H · Nearby RNA oxygen can attack phosphate · Structure changes available pathway",
          "Initial P–O5′ cleavage · 2′,3′-cyclic phosphate + downstream 5′-OH · Intramolecular transesterification first",
          "One internal cut in a linear strand · One backbone becomes two pieces · Residues conserved; not just duplex denaturation"
        ],
        "board": {
          "heading": "Supporting RNA cleavage depends on the nearby two-prime hydroxyl",
          "columns": [
            "Given / structure",
            "Follow the change",
            "Result / boundary"
          ],
          "rows": [
            [
              "RNA ribose has 2′-OH; DNA has 2′-H",
              "Nearby RNA oxygen can attack phosphate",
              "Structure changes available pathway"
            ],
            [
              "Initial P–O5′ cleavage",
              "2′,3′-cyclic phosphate + downstream 5′-OH",
              "Intramolecular transesterification first"
            ],
            [
              "One internal cut in a linear strand",
              "One backbone becomes two pieces",
              "Residues conserved; not just duplex denaturation"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "In the usual textbook hydroxylamine comparison, which statement is correct?",
        "options": [
          "Glucose and every protected derivative must react identically",
          "Glucose has no accessible carbonyl chemistry",
          "Glucose can form an oxime; its pentaacetate does not give the analogous response",
          "Pentaacetate means five aldehyde groups"
        ],
        "answer": 2,
        "explanation": "The protected cyclic derivative differs from unmodified glucose; acetylation evidence for five OH groups does not establish a free CHO group in the derivative."
      },
      {
        "question": "What would invalidate directly transferring that negative pentaacetate test result to a later sample?",
        "options": [
          "Using the same derivative under the same conditions",
          "Counting its carbon atoms",
          "Recognizing cyclic glucose",
          "Hydrolysis or deprotection that changes the tested structure"
        ],
        "answer": 3,
        "explanation": "Changing protected groups can restore different ring opening or carbonyl chemistry, so sample identity and conditions must be explicit."
      },
      {
        "question": "How many distinct N→C linear tripeptide sequences contain exactly two identical Ala residues and one Gly?",
        "options": [
          "3",
          "6",
          "2",
          "1"
        ],
        "answer": 0,
        "explanation": "The distinct sequences are AAG, AGA and GAA; the two Ala residues are not distinguishable labels."
      },
      {
        "question": "Under the stated pure-tripeptide partial-hydrolysis model, both directed contiguous AG and GA dipeptides identify:",
        "options": [
          "AAG",
          "AGA",
          "GAA",
          "All three equally"
        ],
        "answer": 1,
        "explanation": "Only AGA contains both A→G and G→A adjacent pairs without rearrangement."
      },
      {
        "question": "For supplied Asp stepwise pKa values 2.1,3.9,9.8 and charge ladder +1,0,−1,−2, the adjacent-state pI estimate is:",
        "options": [
          "5.95",
          "6.85",
          "3.0",
          "9.8"
        ],
        "answer": 2,
        "explanation": "Net zero lies between the first two dissociation steps; average 2.1 and 3.9."
      },
      {
        "question": "For supplied Lys pKa values 2.2,9.0,10.5 and charge ladder +2,+1,0,−1, the estimate is:",
        "options": [
          "5.6",
          "6.35",
          "7.23",
          "9.75"
        ],
        "answer": 3,
        "explanation": "Net zero lies between the second and third steps; average 9.0 and 10.5."
      },
      {
        "question": "The nearby group enabling the specified intramolecular alkaline RNA cleavage is:",
        "options": [
          "The ribose 2′-OH",
          "A thymine methyl group",
          "An amino acid side chain",
          "An extra peptide bond"
        ],
        "answer": 0,
        "explanation": "The deprotonated 2′ oxygen can attack the adjacent phosphate; DNA lacks the same 2′-OH."
      },
      {
        "question": "One specified internal phosphodiester cleavage in a linear 10-residue RNA chain gives initially:",
        "options": [
          "Two 10-residue chains with duplicated material",
          "Two backbone fragments containing 10 residues in total",
          "Ten fragments necessarily",
          "Only loss of base-pair hydrogen bonds"
        ],
        "answer": 1,
        "explanation": "One internal cut splits the covalent chain into two pieces while preserving the total nucleotide-residue inventory."
      }
    ],
    "sources": [
      {
        "title": "NCERT Chemistry: glucose and its protected derivative evidence",
        "url": "https://ncert.nic.in/textbook/pdf/lech205.pdf"
      },
      {
        "title": "OpenStax: peptide structure and sequence determination",
        "url": "https://openstax.org/books/organic-chemistry/pages/26-5-amino-acid-analysis-of-peptides"
      },
      {
        "title": "OpenStax: amino-acid isoelectric points",
        "url": "https://openstax.org/books/organic-chemistry/pages/26-2-amino-acids-and-the-henderson-hasselbalch-equation-isoelectric-points"
      },
      {
        "title": "UC San Diego: phosphate transfer and RNA cleavage",
        "url": "https://chemistry.ucsd.edu/undergraduate/student-resources/CHEM40-Chapter09-UCSD-ED-23-24.pdf"
      }
    ]
  }
} as const;
