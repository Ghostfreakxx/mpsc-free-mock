// Authored by scripts/expand-halogens-oxygen-biomolecules.mjs.
export const halogensOxygenBiomoleculesAdditions = {
  "biomolecules": {
    "base": 13,
    "quizBase": 16,
    "chapters": [
      {
        "title": "DNA base percentages require a defined strand set",
        "formula": "Canonical paired double-stranded DNA: A = T and G = C overall",
        "script": "A DNA base percentage problem must say whether its data describe one strand or the complete paired molecule. For ordinary double stranded DNA with canonical complementary pairing, adenine pairs with thymine and guanine with cytosine. Across the complete two strand molecule, adenine and thymine counts are equal, and guanine and cytosine counts are equal. If adenine is thirty percent of all bases, thymine is also thirty percent, leaving forty percent shared equally between guanine and cytosine. Each of those is twenty percent. Take a molecule containing one thousand base pairs, hence two thousand individual bases. The counts are six hundred adenines, six hundred thymines, four hundred guanines and four hundred cytosines. There are six hundred A T pairs and four hundred G C pairs. Counting two hydrogen bonds per A T pair and three per G C pair gives two thousand four hundred in the standard pairing model. One isolated strand need not have equal adenine and thymine percentages. Mismatches, single stranded material or noncanonical chemistry require the stated model to be reconsidered. Hydrogen bond counts alone also do not determine a DNA melting temperature, which depends on more structural and solution factors.",
        "points": [
          "A = 30% of all bases · T=30%; G=C=20% · Both strands counted together",
          "1000 base pairs · 600 AT + 400 GC pairs · 2000 individual bases",
          "Canonical H-bond count · 2×600 + 3×400 · 2400 hydrogen bonds"
        ],
        "board": {
          "heading": "DNA base percentages require a defined strand set",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "A = 30% of all bases",
              "T=30%; G=C=20%",
              "Both strands counted together"
            ],
            [
              "1000 base pairs",
              "600 AT + 400 GC pairs",
              "2000 individual bases"
            ],
            [
              "Canonical H-bond count",
              "2×600 + 3×400",
              "2400 hydrogen bonds"
            ]
          ]
        }
      },
      {
        "title": "A nucleotide is not just a base or a nucleoside",
        "formula": "Base + sugar = nucleoside; addition of phosphate gives a nucleotide",
        "script": "The terms base, nucleoside and nucleotide identify different amounts of molecular structure. A nitrogenous base attached to a pentose sugar is a nucleoside. Including phosphate gives a nucleotide. In the familiar nucleic acid backbone, phosphodiester links connect the three prime position of one sugar with the five prime position associated with the next nucleotide. The primes distinguish sugar carbon numbering from the base numbering. DNA normally contains deoxyribose, whereas RNA contains ribose with a hydroxyl at the two prime position. That sugar difference is separate from the usual thymine versus uracil base comparison. For an unbranched linear strand containing ten nucleotide residues, there are nine internucleotide phosphodiester links. This does not mean there are always exactly nine phosphate groups: a terminal phosphate may add another, depending on how the ends are specified. A circular unbranched strand has a different link count because its ends join. Likewise, a double stranded DNA fragment consists of two covalently separate backbones connected through base pairing, not one continuous strand crossing between the bases. Count residues, links and terminal groups as distinct quantities before inferring composition.",
        "points": [
          "Base + pentose · No phosphate required · Nucleoside",
          "Nucleoside + phosphate · Sugar numbering uses primes · Nucleotide",
          "10-residue linear strand · n − 1 internucleotide links · 9 links; ends specified separately"
        ],
        "board": {
          "heading": "A nucleotide is not just a base or a nucleoside",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Base + pentose",
              "No phosphate required",
              "Nucleoside"
            ],
            [
              "Nucleoside + phosphate",
              "Sugar numbering uses primes",
              "Nucleotide"
            ],
            [
              "10-residue linear strand",
              "n − 1 internucleotide links",
              "9 links; ends specified separately"
            ]
          ]
        }
      },
      {
        "title": "Protein denaturation and peptide hydrolysis are different",
        "formula": "Ordinary denaturation changes folding without normally cleaving the peptide backbone",
        "script": "Protein structure can change without cutting its amino acid sequence into separate molecules. Ordinary denaturation disrupts the interactions that maintain a native fold, so secondary, tertiary or quaternary organization and biological activity can be altered. The peptide backbone is not normally hydrolyzed merely by calling a process denaturation. Hydrolysis instead cleaves peptide bonds with chemical consumption of water and creates additional chain ends. For one ideal linear pentapeptide with no crosslinks, there are four peptide bonds. Complete hydrolysis consumes four water molecules per peptide molecule and gives five amino acid molecules. Breaking only one internal peptide bond gives two shorter peptide fragments, not five free amino acids. Disulfide bridges are another covalent connection: changing their oxidation state is distinct from cleaving an amide bond in the main chain. Real unfolding can be accompanied by aggregation, side reactions or loss of disulfide structure under particular treatments, so reversibility is not guaranteed. The useful distinction is which bonds and interactions are specified to change. Do not infer complete amino acid release or a new primary sequence solely from loss of native shape or enzyme activity.",
        "points": [
          "Native fold disrupted · Peptide sequence usually retained · Denaturation ≠ full hydrolysis",
          "Linear pentapeptide · 5 residues − 1 · 4 peptide bonds",
          "Complete hydrolysis · Consume 4 H₂O per molecule · 5 free amino acid molecules"
        ],
        "board": {
          "heading": "Protein denaturation and peptide hydrolysis are different",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Native fold disrupted",
              "Peptide sequence usually retained",
              "Denaturation ≠ full hydrolysis"
            ],
            [
              "Linear pentapeptide",
              "5 residues − 1",
              "4 peptide bonds"
            ],
            [
              "Complete hydrolysis",
              "Consume 4 H₂O per molecule",
              "5 free amino acid molecules"
            ]
          ]
        }
      },
      {
        "title": "Estimate anomer fractions from supplied rotation data",
        "formula": "Rotationmix = fα rotationα + (1−fα) rotationβ",
        "script": "Mutarotation describes a change in optical rotation as an interconverting sugar mixture approaches its equilibrium composition. For a numerical glucose example, suppose the supplied specific rotations are plus one hundred twelve for the alpha form, plus eighteen point seven for the beta form, and plus fifty two point seven for the equilibrium mixture, all at matching measurement conditions. Use an explicit two form model that neglects minor open chain and other ring forms. Let the alpha fraction be f. The weighted rotation is one hundred twelve times f plus eighteen point seven times one minus f. Solving gives f equal to thirty four divided by ninety three point three, approximately zero point three six four. The beta fraction is therefore about zero point six three six. Both pure forms are dextrorotatory in this example, so the equilibrium is not a racemate with zero rotation. Alpha and beta describe the anomeric relationship, while D describes configuration relative to a reference structure; these labels do not by themselves state the sign of optical rotation for every sugar. The estimate uses the supplied rotations and additive mixture model, rather than claiming that every glucose solution at every temperature has exactly these fractions.",
        "points": [
          "Given α +112; β +18.7 · Mixture +52.7 · Same measurement conditions",
          "Alpha fraction · (52.7−18.7)/(112−18.7) · fα ≈ 0.364",
          "Two-form approximation · fβ = 1 − fα · β ≈ 63.6%; not a racemate"
        ],
        "board": {
          "heading": "Estimate anomer fractions from supplied rotation data",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Given α +112; β +18.7",
              "Mixture +52.7",
              "Same measurement conditions"
            ],
            [
              "Alpha fraction",
              "(52.7−18.7)/(112−18.7)",
              "fα ≈ 0.364"
            ],
            [
              "Two-form approximation",
              "fβ = 1 − fα",
              "β ≈ 63.6%; not a racemate"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Canonical double-stranded DNA has adenine 30% of all bases. Guanine is:",
        "options": [
          "30%",
          "40%",
          "20%",
          "70%"
        ],
        "answer": 2,
        "explanation": "A=T=30% leaves 40% for G+C; complementary pairing gives G=C=20% overall."
      },
      {
        "question": "For 1000 canonical DNA base pairs with 600 AT pairs and 400 GC pairs, the standard hydrogen-bond count is:",
        "options": [
          "2000",
          "3000",
          "1400",
          "2400"
        ],
        "answer": 3,
        "explanation": "Two bonds for each AT pair and three for each GC pair give 1200+1200=2400."
      },
      {
        "question": "A base attached to a pentose but without phosphate is a:",
        "options": [
          "Nucleoside",
          "Nucleotide triphosphate",
          "Peptide",
          "Phosphodiester link"
        ],
        "answer": 0,
        "explanation": "The base-plus-sugar unit is a nucleoside; phosphate distinguishes a nucleotide."
      },
      {
        "question": "An unbranched linear 10-residue nucleic-acid strand has how many internucleotide phosphodiester links?",
        "options": [
          "10",
          "9",
          "20",
          "11"
        ],
        "answer": 1,
        "explanation": "Joining n residues in a linear chain requires n−1 links. Terminal phosphate groups are a separate count."
      },
      {
        "question": "Ordinary protein denaturation by itself normally:",
        "options": [
          "Completely releases all amino acids",
          "Reverses every peptide bond",
          "Alters native folding while retaining the peptide sequence",
          "Converts DNA into RNA"
        ],
        "answer": 2,
        "explanation": "Denaturation changes higher-order organization; complete peptide hydrolysis is a different chemical change."
      },
      {
        "question": "Complete hydrolysis of one ideal linear pentapeptide with no crosslinks consumes how many water molecules?",
        "options": [
          "5",
          "1",
          "6",
          "4"
        ],
        "answer": 3,
        "explanation": "Five residues form four peptide bonds, each requiring one water for hydrolytic cleavage."
      },
      {
        "question": "Using the two-form supplied-rotation model with alpha +112, beta +18.7 and mixture +52.7, the alpha fraction is about:",
        "options": [
          "0.364",
          "0.636",
          "0.500",
          "0.187"
        ],
        "answer": 0,
        "explanation": "Solve f=(52.7−18.7)/(112−18.7)=34/93.3≈0.364."
      },
      {
        "question": "The positive equilibrium rotation in that glucose example means the mixture is:",
        "options": [
          "Necessarily an equal enantiomer mixture",
          "Not a zero-rotation racemate",
          "Entirely open chain",
          "Always exactly half alpha"
        ],
        "answer": 1,
        "explanation": "The anomer mixture has a positive weighted rotation; alpha and beta are not an enantiomeric racemate."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: nucleic-acid structure",
        "url": "https://openstax.org/books/biology-2e/pages/3-5-nucleic-acids"
      },
      {
        "title": "OpenStax: protein structure",
        "url": "https://openstax.org/books/biology-2e/pages/3-4-proteins"
      },
      {
        "title": "NPTEL: mutarotation and carbohydrate structures",
        "url": "https://archive.nptel.ac.in/content/storage2/courses/104103071/module11/lec30/3.html"
      }
    ]
  },
  "organic-oxygen": {
    "base": 15,
    "quizBase": 16,
    "chapters": [
      {
        "title": "Mixed aldol reactions need donor and acceptor choices",
        "formula": "Two enolizable carbonyl partners can give two self and two crossed connectivities",
        "script": "An aldol question has two roles: an enolate donor and a carbonyl acceptor. If acetaldehyde and propionaldehyde are mixed under an idealized ordinary base catalyzed aldol model, both have alpha hydrogens and can supply enolate donors. Each donor can attack either aldehyde. The elementary first addition list therefore has two self aldol connectivities and two crossed connectivities, four in total. Acetaldehyde acting as donor and propionaldehyde as acceptor is not the same connectivity as propionaldehyde donating to acetaldehyde, because the carbonyl group retained in the product belongs to the donor. Stereoisomers and later dehydration products can enlarge a more detailed product list. Thus four is a restricted connectivity count, not a complete description of every species present after unrestricted reaction. Benzaldehyde has no alpha hydrogen at its aldehyde side chain and cannot supply the ordinary enolate in this comparison. Pairing it with a suitable enolizable carbonyl can reduce the donor choices, but selectivity still depends on the specified conditions. Identify which partner donates, which carbonyl is attacked and whether the question asks for addition or condensation before drawing a single preferred product.",
        "points": [
          "Acetaldehyde + propionaldehyde · Both supply enolate donors · 2 donor choices",
          "Each donor chooses acceptor · Self or crossed addition · 4 first-addition connectivities",
          "Benzaldehyde comparison · No aldehyde alpha hydrogen · Not the ordinary enolate donor"
        ],
        "board": {
          "heading": "Mixed aldol reactions need donor and acceptor choices",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Acetaldehyde + propionaldehyde",
              "Both supply enolate donors",
              "2 donor choices"
            ],
            [
              "Each donor chooses acceptor",
              "Self or crossed addition",
              "4 first-addition connectivities"
            ],
            [
              "Benzaldehyde comparison",
              "No aldehyde alpha hydrogen",
              "Not the ordinary enolate donor"
            ]
          ]
        }
      },
      {
        "title": "Ester hydrolysis has different acid and base accounting",
        "formula": "CH₃COOC₂H₅ + OH⁻ → CH₃COO⁻ + C₂H₅OH",
        "script": "Ester hydrolysis should distinguish an acid catalyzed equilibrium from a base promoted net conversion. For ethyl ethanoate, acid catalyzed hydrolysis connects the ester and water with ethanoic acid and ethanol. The catalyst changes the route and rate, but not the equilibrium constant at a fixed temperature. In the basic net equation, hydroxide is consumed and the acid derived product remains mainly carboxylate under the stated basic conditions. One mole of this simple ester consumes one mole hydroxide to give one mole ethanoate and one mole ethanol. Suppose an illustrative mixture contains zero point zero two zero zero mole ester and zero point zero one five zero mole hydroxide, and assume this net reaction reaches the stated stoichiometric endpoint with no competing processes. Hydroxide limits conversion to zero point zero one five zero mole. Ester remaining is zero point zero zero five zero zero mole, and ethanol formed is zero point zero one five zero mole. Do not describe hydroxide as a recovered acid catalyst in that balance. The carboxylate is not the isolated neutral acid unless a separate acidification is specified. This calculation concerns chemical accounting rather than a practical preparation.",
        "points": [
          "Ethyl ethanoate + OH⁻ · One-to-one net consumption · Ethanoate + ethanol",
          "Ester 0.0200; OH⁻ 0.0150 mol · Hydroxide limits conversion · 0.0150 mol ester reacts",
          "After stipulated endpoint · 0.0200 − 0.0150 · 0.00500 mol ester remains"
        ],
        "board": {
          "heading": "Ester hydrolysis has different acid and base accounting",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Ethyl ethanoate + OH⁻",
              "One-to-one net consumption",
              "Ethanoate + ethanol"
            ],
            [
              "Ester 0.0200; OH⁻ 0.0150 mol",
              "Hydroxide limits conversion",
              "0.0150 mol ester reacts"
            ],
            [
              "After stipulated endpoint",
              "0.0200 − 0.0150",
              "0.00500 mol ester remains"
            ]
          ]
        }
      },
      {
        "title": "Cyanohydrin addition changes carbon count and chirality",
        "formula": "CH₃CHO + HCN ⇌ CH₃CH(OH)CN: one new carbon",
        "script": "A carbonyl addition product can introduce both a new carbon and a stereochemical question. In cyanohydrin formation, the cyanide carbon forms a bond to the carbonyl carbon, followed by proton transfer to oxygen. For acetaldehyde, the product has a carbon bearing hydroxyl, hydrogen, methyl and cyano groups. These four groups differ, so the former planar carbonyl carbon becomes a stereogenic centre. In an achiral environment with no chiral influence, attack at the two enantiotopic faces gives the two enantiomers in equal amounts in the elementary model. The mixture is racemic, rather than a single assigned configuration. Acetaldehyde contributes two carbons and the cyano group one, giving three carbons overall. The corresponding propanone cyanohydrin contains two identical methyl groups at the hydroxyl bearing carbon, so that carbon is not stereogenic despite the same general addition pattern. A carbon count alone therefore cannot establish chirality. The process is reversible and its extent depends on substrate and conditions; the connectivity exercise does not assert complete conversion. Read the cyano carbon explicitly instead of confusing nucleophilic addition with replacement of an existing carbon atom.",
        "points": [
          "Acetaldehyde cyanohydrin · H, OH, CH₃ and CN at one C · Stereogenic; 3 carbons total",
          "Achiral reaction model · Equal face access · Racemic enantiomer pair",
          "Propanone cyanohydrin · Two identical methyl groups · That carbon is not stereogenic"
        ],
        "board": {
          "heading": "Cyanohydrin addition changes carbon count and chirality",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Acetaldehyde cyanohydrin",
              "H, OH, CH₃ and CN at one C",
              "Stereogenic; 3 carbons total"
            ],
            [
              "Achiral reaction model",
              "Equal face access",
              "Racemic enantiomer pair"
            ],
            [
              "Propanone cyanohydrin",
              "Two identical methyl groups",
              "That carbon is not stereogenic"
            ]
          ]
        }
      },
      {
        "title": "Use supplied pKa data before ranking acid amounts",
        "formula": "Ka ratio = 10^(pKa,weak − pKa,strong)",
        "script": "Acid strength and the amount of acid in a solution answer different questions. Compare two supplied monoprotic carboxylic acids in the same solvent at the same temperature, with p K a values three and five. The lower p K a corresponds to the larger acid dissociation constant. Their constant ratio is ten squared, or one hundred, so the first acid is stronger on that defined scale. This does not mean every equal concentration solution has one hundred times the hydrogen ion concentration. Dissociation must also satisfy mass balance and any approximations used. In an ideal weak acid range, where both acids remain only slightly ionized and water ionization is negligible, hydrogen ion concentration scales approximately with the square root of K a times analytical concentration. At equal concentration, a hundredfold K a ratio would then give roughly a tenfold hydrogen ion ratio. Check the small ionization assumption for each acid before applying that estimate. Electron withdrawing substituents can stabilize a carboxylate and increase acidity, while their distance and structural position matter. Supplied same solvent data support the numerical ranking without pretending that a substituent name alone determines every measured p H.",
        "points": [
          "Acid A pKa=3; B pKa=5 · Ka,A/Ka,B = 10² · A is 100× larger in Ka",
          "Equal C; both weakly ionized · [H⁺] ≈ √(Ka C) · Approximate [H⁺] ratio 10",
          "Check the assumptions · Same solvent and temperature · Strength is not concentration"
        ],
        "board": {
          "heading": "Use supplied pKa data before ranking acid amounts",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Acid A pKa=3; B pKa=5",
              "Ka,A/Ka,B = 10²",
              "A is 100× larger in Ka"
            ],
            [
              "Equal C; both weakly ionized",
              "[H⁺] ≈ √(Ka C)",
              "Approximate [H⁺] ratio 10"
            ],
            [
              "Check the assumptions",
              "Same solvent and temperature",
              "Strength is not concentration"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Acetaldehyde and propionaldehyde both provide enolate donors. Counting only elementary first aldol addition connectivities gives:",
        "options": [
          "1",
          "4",
          "8",
          "Only two stereoisomers"
        ],
        "answer": 1,
        "explanation": "Two donor choices times two acceptor choices gives two self and two crossed connectivities, excluding stereoisomers and later reactions."
      },
      {
        "question": "In a crossed aldol addition, the carbonyl group retained before dehydration belongs to the:",
        "options": [
          "Solvent only",
          "Leaving water",
          "Enolate donor",
          "Counter ion"
        ],
        "answer": 2,
        "explanation": "The donor enolate re-forms its carbonyl while the acceptor carbonyl becomes the alcohol-bearing site."
      },
      {
        "question": "In base-promoted ethyl ethanoate hydrolysis, the immediate acid-derived species under basic conditions is:",
        "options": [
          "Only neutral ethanoic acid",
          "Methane",
          "Ethene",
          "Ethanoate"
        ],
        "answer": 3,
        "explanation": "The net reaction consumes hydroxide and forms the carboxylate plus ethanol."
      },
      {
        "question": "0.0200 mol simple ester meets 0.0150 mol hydroxide. At the stipulated complete 1:1 net endpoint, ester remaining is:",
        "options": [
          "0.00500 mol",
          "0.0150 mol",
          "0.0350 mol",
          "Zero necessarily"
        ],
        "answer": 0,
        "explanation": "Hydroxide limits conversion to 0.0150 mol; subtract this from the initial ester amount."
      },
      {
        "question": "Acetaldehyde cyanohydrin contains how many carbon atoms?",
        "options": [
          "2",
          "3",
          "4",
          "1"
        ],
        "answer": 1,
        "explanation": "Two carbons originate in acetaldehyde and one is supplied by the cyano carbon."
      },
      {
        "question": "Under the elementary achiral model, acetaldehyde cyanohydrin is formed as:",
        "options": [
          "Only one guaranteed enantiomer",
          "A meso product",
          "A racemic pair",
          "An achiral carbon with two methyl groups"
        ],
        "answer": 2,
        "explanation": "The new carbon has four different groups, and equal attack on the two enantiotopic faces gives a racemate."
      },
      {
        "question": "Acids A and B have pKa 3 and 5 at matching conditions. Ka,A/Ka,B is:",
        "options": [
          "2",
          "10",
          "0.01",
          "100"
        ],
        "answer": 3,
        "explanation": "Ka=10^(−pKa), so the ratio is 10^(5−3)=100."
      },
      {
        "question": "Only when both equal-concentration acids satisfy the small-ionization model, that Ka ratio predicts an approximate hydrogen-ion ratio of:",
        "options": [
          "10",
          "100",
          "10000",
          "1"
        ],
        "answer": 0,
        "explanation": "The weak-acid approximation gives hydrogen-ion concentration proportional to sqrt(Ka C), so sqrt(100)=10."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: mixed aldol reactions",
        "url": "https://openstax.org/books/organic-chemistry/pages/23-5-mixed-aldol-reactions"
      },
      {
        "title": "OpenStax: cyanohydrin formation",
        "url": "https://openstax.org/books/organic-chemistry/pages/19-6-nucleophilic-addition-of-hcn-cyanohydrin-formation"
      },
      {
        "title": "OpenStax: ester chemistry",
        "url": "https://openstax.org/books/organic-chemistry/pages/21-6-chemistry-of-esters"
      }
    ]
  },
  "organic-halogens": {
    "base": 13,
    "quizBase": 16,
    "chapters": [
      {
        "title": "Halogen exchange depends on the substrate and medium",
        "formula": "Finkelstein: alkyl chloride/bromide → iodide; Swarts: alkyl fluoride",
        "script": "A named reaction is a useful map only when the substrate and conditions match. In the standard Finkelstein comparison, an appropriate alkyl chloride or bromide undergoes halogen exchange with iodide in acetone. The sodium chloride or bromide formed has low solubility in this medium, so its precipitation helps drive the exchange. For a suitable primary substrate, the substitution can follow a concerted backside attack. The carbon skeleton stays unchanged: a two carbon alkyl bromide gives a two carbon alkyl iodide, rather than adding the iodide as a new carbon fragment. The Swarts name instead refers to preparing alkyl fluorides by halogen exchange using suitable metal fluorides. These labels do not make every aryl or vinyl halide behave like a primary alkyl substrate. Chlorobenzene, for example, does not enter ordinary backside substitution at its ring carbon simply because iodide is present. Nor should a solvent precipitation argument be transferred to water without checking salt solubilities. Use the reaction names to identify the exchanged atom, the preserved carbon framework and the stated substrate class. Product bookkeeping is different from an experimental preparation protocol.",
        "points": [
          "Finkelstein comparison · R–Br or R–Cl with iodide · R–I; same carbon skeleton",
          "Acetone medium · Low salt solubility · Precipitation assists exchange",
          "Swarts comparison · Suitable metal fluoride · Alkyl fluoride; not R–I"
        ],
        "board": {
          "heading": "Halogen exchange depends on the substrate and medium",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Finkelstein comparison",
              "R–Br or R–Cl with iodide",
              "R–I; same carbon skeleton"
            ],
            [
              "Acetone medium",
              "Low salt solubility",
              "Precipitation assists exchange"
            ],
            [
              "Swarts comparison",
              "Suitable metal fluoride",
              "Alkyl fluoride; not R–I"
            ]
          ]
        }
      },
      {
        "title": "Mixed Wurtz coupling is not automatically selective",
        "formula": "R–X and R′–X can give R–R, R–R′ and R′–R′",
        "script": "Carbon coupling needs a selectivity check as well as a carbon count. In the elementary Wurtz scheme, two alkyl halide fragments couple in the presence of sodium, with salt as another product. If only one suitable alkyl halide is used, joining two identical fragments gives a symmetrical alkane. Mixing methyl and ethyl halides does not guarantee pure propane. The possible simple coupling connectivities are methyl with methyl, methyl with ethyl, and ethyl with ethyl, giving ethane, propane and butane respectively. The two possible orders of joining methyl to ethyl describe the same propane connectivity, not two different constitutional products. Thus the elementary list contains three alkane connectivities, not four. This count is not a prediction of equal amounts or a fixed statistical yield. Different substrate reactivities, side reactions and conditions affect the actual product mixture. Wurtz coupling is generally more useful for an appropriate symmetrical target than as an unqualified route to one unsymmetrical alkane from a mixed feed. Balance two sodium atoms for two halide ions in the simple overall coupling equation, and keep product identity separate from an assumed product distribution.",
        "points": [
          "Methyl + methyl · 1 + 1 carbon atoms · Ethane: C₂",
          "Methyl + ethyl · 1 + 2 carbon atoms · Propane: C₃",
          "Ethyl + ethyl · 2 + 2 carbon atoms · Butane: C₄; amounts not fixed"
        ],
        "board": {
          "heading": "Mixed Wurtz coupling is not automatically selective",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Methyl + methyl",
              "1 + 1 carbon atoms",
              "Ethane: C₂"
            ],
            [
              "Methyl + ethyl",
              "1 + 2 carbon atoms",
              "Propane: C₃"
            ],
            [
              "Ethyl + ethyl",
              "2 + 2 carbon atoms",
              "Butane: C₄; amounts not fixed"
            ]
          ]
        }
      },
      {
        "title": "Grignard addition combines two carbon ledgers",
        "formula": "CH₃MgBr + CH₃CHO, then protonation → CH₃CH(OH)CH₃",
        "script": "An organomagnesium reagent contributes its carbon fragment to a carbonyl compound in the familiar Grignard addition model. Take methylmagnesium bromide and acetaldehyde, followed by a separate protonation step. The carbon bearing magnesium forms a bond to the former carbonyl carbon. Acetaldehyde supplies two carbon atoms and the methyl fragment supplies one, giving a three carbon alcohol, propan two ol. The carbonyl oxygen becomes an alkoxide oxygen first and is protonated later; the alcohol proton need not come from the original aldehyde. Compare a methyl reagent with formaldehyde: one plus one carbon gives ethanol, a primary alcohol. With propanone, three plus one gives a four carbon tertiary alcohol. These examples classify the alcohol by the groups on its oxygen bearing carbon, not by the total carbon count alone. Water or another suitable proton donor present before addition can instead consume the organomagnesium reagent through an acid base reaction, producing the corresponding hydrocarbon. Therefore carbonyl addition and proton quenching are competing descriptions only after the order of exposure is specified. This is a connectivity and stoichiometry exercise, not a laboratory handling recipe.",
        "points": [
          "Methyl fragment + formaldehyde · 1 + 1 carbons · Ethanol; primary",
          "Methyl fragment + acetaldehyde · 1 + 2 carbons · Propan-2-ol; secondary",
          "Methyl fragment + propanone · 1 + 3 carbons · 2-Methylpropan-2-ol; tertiary"
        ],
        "board": {
          "heading": "Grignard addition combines two carbon ledgers",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Methyl fragment + formaldehyde",
              "1 + 1 carbons",
              "Ethanol; primary"
            ],
            [
              "Methyl fragment + acetaldehyde",
              "1 + 2 carbons",
              "Propan-2-ol; secondary"
            ],
            [
              "Methyl fragment + propanone",
              "1 + 3 carbons",
              "2-Methylpropan-2-ol; tertiary"
            ]
          ]
        }
      },
      {
        "title": "Count substitution and elimination products separately",
        "formula": "2-Bromobutane: substitution gives butan-2-ol; elimination can give butenes",
        "script": "A product count must state whether it counts connectivity or stereochemistry. Consider two bromobutane as a substrate and compare idealized substitution with elimination. Replacing bromine by hydroxyl at the same carbon gives butan two ol as the substitution connectivity. In elimination, removing a beta hydrogen from either adjacent carbon can place the double bond at the end of the chain or in its middle. The constitutional alkene products are but one ene and but two ene. The internal alkene has two distinct groups at each double bond carbon, so it can occur as E and Z geometrical isomers. The terminal alkene has a carbon bearing two hydrogens and therefore has no E Z pair. Counting alkene stereoisomers separately gives three alkene products in this elementary set, while counting alkene connectivities gives two. This enumeration does not claim that all are formed in equal amounts or that substitution is absent under every elimination condition. Base size, solvent, temperature and the available conformations affect competition and selectivity. In an E two pathway, the removed hydrogen and leaving group require a suitable antiperiplanar arrangement; a flat formula alone does not determine the relative yields.",
        "points": [
          "Substitution connectivity · Replace Br by OH · Butan-2-ol",
          "Elimination connectivities · Double bond at C1 or C2 · But-1-ene; but-2-ene",
          "Resolve alkene geometry · But-2-ene has E and Z · 3 alkene stereoisomers total"
        ],
        "board": {
          "heading": "Count substitution and elimination products separately",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Substitution connectivity",
              "Replace Br by OH",
              "Butan-2-ol"
            ],
            [
              "Elimination connectivities",
              "Double bond at C1 or C2",
              "But-1-ene; but-2-ene"
            ],
            [
              "Resolve alkene geometry",
              "But-2-ene has E and Z",
              "3 alkene stereoisomers total"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "A suitable alkyl bromide undergoes Finkelstein exchange with iodide. The carbon skeleton:",
        "options": [
          "Stays unchanged",
          "Gains one carbon from iodide",
          "Always loses one carbon",
          "Becomes an aromatic ring"
        ],
        "answer": 0,
        "explanation": "Halogen exchange replaces the halogen; iodide introduces no carbon atom."
      },
      {
        "question": "In the standard acetone Finkelstein comparison, which effect assists the exchange?",
        "options": [
          "Water always supplies an alkyl group",
          "Precipitation of sodium chloride or bromide",
          "Breaking every carbon bond",
          "Formation of an extra carbonyl"
        ],
        "answer": 1,
        "explanation": "Low solubility of the product sodium halide in acetone helps remove it from the solution equilibrium."
      },
      {
        "question": "The elementary alkane connectivity list from mixed methyl and ethyl Wurtz fragments contains:",
        "options": [
          "Only propane",
          "Two products",
          "Three products",
          "Four distinct propane connectivities"
        ],
        "answer": 2,
        "explanation": "Methyl–methyl, methyl–ethyl and ethyl–ethyl give ethane, propane and butane."
      },
      {
        "question": "Which statement about that mixed coupling product list follows from connectivity alone?",
        "options": [
          "Equal yields are guaranteed",
          "Propane must be the only product",
          "Butane cannot form",
          "Relative yields are not determined"
        ],
        "answer": 3,
        "explanation": "Enumeration identifies possible connectivities but supplies no kinetics or selectivity data."
      },
      {
        "question": "Methylmagnesium bromide adds to acetaldehyde before protonation. The alcohol is:",
        "options": [
          "Propan-2-ol",
          "Ethanol",
          "Butan-1-ol",
          "Methanol"
        ],
        "answer": 0,
        "explanation": "The methyl fragment contributes one carbon to the two-carbon aldehyde, giving a secondary three-carbon alcohol."
      },
      {
        "question": "Methyl addition to propanone followed by protonation gives an alcohol whose oxygen-bearing carbon is:",
        "options": [
          "Primary",
          "Tertiary",
          "Secondary",
          "An unchanged carbonyl carbon"
        ],
        "answer": 1,
        "explanation": "The oxygen-bearing carbon is bonded to three methyl carbon groups after addition."
      },
      {
        "question": "The alkene constitutional products of simple elimination from 2-bromobutane are:",
        "options": [
          "Only ethene",
          "Three different carbon skeletons",
          "But-1-ene and but-2-ene",
          "Only cyclobutane"
        ],
        "answer": 2,
        "explanation": "The two adjacent beta positions place the double bond at C1 or C2 without changing the four-carbon chain."
      },
      {
        "question": "Counting E/Z separately, that elementary butene set contains:",
        "options": [
          "1 alkene",
          "2 alkenes",
          "4 alkenes",
          "3 alkenes"
        ],
        "answer": 3,
        "explanation": "But-1-ene contributes one and but-2-ene contributes E and Z; this is a count, not a yield claim."
      }
    ],
    "sources": [
      {
        "title": "NCERT: Haloalkanes and Haloarenes",
        "url": "https://ncert.nic.in/textbook/pdf/lech106.pdf"
      },
      {
        "title": "OpenStax: Grignard additions to carbonyls",
        "url": "https://openstax.org/books/organic-chemistry/pages/19-7-nucleophilic-addition-of-hydride-and-grignard-reagents-alcohol-formation"
      }
    ]
  }
} as const;
