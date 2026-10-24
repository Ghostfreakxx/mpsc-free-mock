// Authored by scripts/expand-halogen-oxygen-transformations.mjs.
export const halogenOxygenTransformationsAdditions = {
  "organic-halogens": {
    "base": 17,
    "quizBase": 24,
    "chapters": [
      {
        "title": "Alcohol activation changes the leaving group problem",
        "formula": "3ROH + PBr₃ → 3RBr + H₃PO₃ in the net conversion model",
        "script": "An alcohol does not usually undergo a simple substitution by expelling free hydroxide without activation. For suitable primary and secondary alcohols, phosphorus tribromide can enable conversion of the carbon oxygen bond into a carbon bromine bond. The net bookkeeping equation uses three alcohol molecules for one phosphorus tribromide, forming three alkyl bromides and phosphorous acid. This balances oxygen and hydrogen as well as bromine. For a stipulated quantitative conversion of zero point zero three zero zero mole ethanol, the theoretical phosphorus tribromide amount from this equation is zero point zero one zero zero mole and bromoethane amount zero point zero three zero zero mole. This is stoichiometric bookkeeping, not a complete experimental reagent prescription. A suitable secondary stereogenic alcohol can undergo inversion at the reacting carbon in the usual substitution pathway. That does not imply an automatic reversal of its R or S letter without checking product priorities. Tertiary substrates do not follow this same simple backside displacement model. Choose the actual substrate class and leaving group activation before copying a reagent rule onto every alcohol.",
        "points": [
          "Suitable primary / secondary ROH · Activate OH for substitution · Carbon skeleton retained",
          "Net equation · 3ROH + PBr₃ → 3RBr + H₃PO₃ · Three alcohols per PBr₃",
          "0.0300 mol ethanol; ideal conversion · PBr₃=0.0300/3 · 0.0100 mol PBr₃; 0.0300 mol RBr"
        ],
        "board": {
          "heading": "Alcohol activation changes the leaving group problem",
          "columns": [
            "Case / substrate",
            "Transformation / reason",
            "Product / limit"
          ],
          "rows": [
            [
              "Suitable primary / secondary ROH",
              "Activate OH for substitution",
              "Carbon skeleton retained"
            ],
            [
              "Net equation",
              "3ROH + PBr₃ → 3RBr + H₃PO₃",
              "Three alcohols per PBr₃"
            ],
            [
              "0.0300 mol ethanol; ideal conversion",
              "PBr₃=0.0300/3",
              "0.0100 mol PBr₃; 0.0300 mol RBr"
            ]
          ]
        }
      },
      {
        "title": "Two eliminations from a dihalide make a triple bond",
        "formula": "BrCH₂CH₂Br − 2HBr → HC≡CH as formal atom accounting",
        "script": "A vicinal dihalide contains halogens on adjacent carbon atoms. In an appropriate double dehydrohalogenation sequence, two eliminations can convert that skeleton into an alkyne. For one two dibromoethane, the starting formula is two carbons, four hydrogens and two bromines. Removing two hydrogen bromide units leaves two carbons and two hydrogens, the formula of ethyne. The first elimination produces a vinyl halide with a carbon carbon double bond. The second elimination acts on that different bonding environment and generally requires a suitably strong base; it is not simply a repeat of the easiest alkyl halide reaction. The overall carbon count remains two. Formal loss of two hydrogen bromide units counts the two elimination events, but does not establish that exactly two equivalents of base suffice in every preparative system. A terminal alkyne can also undergo deprotonation by a sufficiently strong base, followed by separate protonation on workup. Distinguish transformation stoichiometry, intermediate identity and reagent consumption rather than treating a net atom ledger as a complete mechanism or procedure.",
        "points": [
          "Vicinal BrCH₂CH₂Br · First elimination · Vinyl halide intermediate",
          "Second suitable elimination · Formal loss of another HBr · Ethyne; carbon count stays two",
          "Net atom ledger · C₂H₄Br₂ − 2HBr · C₂H₂; actual base demand may differ"
        ],
        "board": {
          "heading": "Two eliminations from a dihalide make a triple bond",
          "columns": [
            "Case / substrate",
            "Transformation / reason",
            "Product / limit"
          ],
          "rows": [
            [
              "Vicinal BrCH₂CH₂Br",
              "First elimination",
              "Vinyl halide intermediate"
            ],
            [
              "Second suitable elimination",
              "Formal loss of another HBr",
              "Ethyne; carbon count stays two"
            ],
            [
              "Net atom ledger",
              "C₂H₄Br₂ − 2HBr",
              "C₂H₂; actual base demand may differ"
            ]
          ]
        }
      },
      {
        "title": "Carbon dioxide and proton quenching give different Grignard products",
        "formula": "RMgX + CO₂, then protonation → RCOOH; proton quench → RH",
        "script": "The fate of a Grignard reagent depends on whether it meets a carbon electrophile or a proton source. Ethylmagnesium bromide contains a two carbon organic group. Addition to carbon dioxide followed by separate protonation gives propanoic acid, whose carboxyl carbon came from carbon dioxide. The product has three carbons. Direct proton quenching of the same reagent instead gives ethane, retaining only the original two carbons. Phenylmagnesium bromide similarly gives benzoic acid after carbon dioxide addition and protonation, so six ring carbons become a seven carbon acid. These transformations do not imply that a carboxylic acid itself is an interchangeable carbon dioxide reagent: an acidic proton can consume the organomagnesium reagent by acid base reaction. The initial addition product in carboxylation is a metal carboxylate, not the fully protonated acid. Other acidic groups or reactive functions in the substrate can prevent a simple Grignard route. Track the source of the added carbon and the timing of protonation before choosing between a carbon forming reaction and a reagent destroying quench.",
        "points": [
          "Ethylmagnesium bromide: two C · CO₂ addition, then protonation · Propanoic acid: three C",
          "Same ethyl reagent · Direct proton source · Ethane: two C",
          "Phenylmagnesium bromide: six C · CO₂ supplies carboxyl carbon · Benzoic acid: seven C"
        ],
        "board": {
          "heading": "Carbon dioxide and proton quenching give different Grignard products",
          "columns": [
            "Case / substrate",
            "Transformation / reason",
            "Product / limit"
          ],
          "rows": [
            [
              "Ethylmagnesium bromide: two C",
              "CO₂ addition, then protonation",
              "Propanoic acid: three C"
            ],
            [
              "Same ethyl reagent",
              "Direct proton source",
              "Ethane: two C"
            ],
            [
              "Phenylmagnesium bromide: six C",
              "CO₂ supplies carboxyl carbon",
              "Benzoic acid: seven C"
            ]
          ]
        }
      },
      {
        "title": "Halogens deactivate a ring but direct ortho and para",
        "formula": "Electrophilic substitution: halogen is deactivating and ortho/para directing",
        "script": "A substituent can influence overall reaction speed and positional preference in different ways. In ordinary electrophilic aromatic substitution, chlorine withdraws electron density inductively, making chlorobenzene less reactive than benzene under comparable conditions. Yet its lone pairs can contribute resonance stabilization to the intermediates for ortho and para attack relative to meta attack. Thus a halogen is a deactivating ortho and para director, not an activating group merely because of those preferred positions. For a simple nitration comparison, ortho and para chloronitrobenzene are the usual favoured positional products, while the carbon chlorine bond remains intact. This is not nucleophilic aromatic substitution, where a nucleophile replaces the leaving group under an appropriate activation pattern. Nor does an ortho para label specify a universal numerical product ratio. Steric effects, electrophile identity and reaction conditions affect the distribution. Keep three separate questions visible: what kind of substitution occurs, which bond changes, and how the existing substituent affects rate and position. A single directing arrow cannot answer all three.",
        "points": [
          "Chlorobenzene in electrophilic substitution · Net inductive withdrawal · Less reactive than benzene",
          "Relative positional preference · Lone-pair resonance contributions · Ortho / para directing",
          "Ring nitration versus aryl substitution · Ring H replaced versus C–Cl replaced · Different reaction classes"
        ],
        "board": {
          "heading": "Halogens deactivate a ring but direct ortho and para",
          "columns": [
            "Case / substrate",
            "Transformation / reason",
            "Product / limit"
          ],
          "rows": [
            [
              "Chlorobenzene in electrophilic substitution",
              "Net inductive withdrawal",
              "Less reactive than benzene"
            ],
            [
              "Relative positional preference",
              "Lone-pair resonance contributions",
              "Ortho / para directing"
            ],
            [
              "Ring nitration versus aryl substitution",
              "Ring H replaced versus C–Cl replaced",
              "Different reaction classes"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "In the net model 3ROH+PBr3→3RBr+H3PO3, converting 0.0300 mol suitable alcohol theoretically uses PBr3 amount:",
        "options": [
          "0.0100 mol",
          "0.0300 mol",
          "0.0900 mol",
          "0.0150 mol"
        ],
        "answer": 0,
        "explanation": "The balanced net equation has three alcohol molecules per PBr3, so 0.0300/3=0.0100 mol."
      },
      {
        "question": "The simple PBr3 backside-substitution model is most appropriate for:",
        "options": [
          "Every tertiary alcohol",
          "Suitable primary and secondary alcohols",
          "Only aromatic C–OH bonds",
          "All alcohols without activation"
        ],
        "answer": 1,
        "explanation": "Substrate class matters; the usual primary/secondary substitution pathway cannot simply be imposed on tertiary centres."
      },
      {
        "question": "Formal loss of 2HBr from C2H4Br2 leaves formula:",
        "options": [
          "C2H4",
          "C2H3Br",
          "C2H2",
          "C2Br2"
        ],
        "answer": 2,
        "explanation": "Subtract two hydrogens and two bromines from the vicinal dihalide formula; the two carbon atoms remain."
      },
      {
        "question": "The intermediate after one elimination from 1,2-dibromoethane is a:",
        "options": [
          "Carboxylic acid",
          "Saturated alcohol",
          "Grignard reagent",
          "Vinyl halide"
        ],
        "answer": 3,
        "explanation": "One elimination creates a double bond while leaving one halogen; the second elimination acts on a vinyl-halide environment."
      },
      {
        "question": "Ethylmagnesium bromide reacts with CO2 and is then protonated. The organic acid has:",
        "options": [
          "Three carbons",
          "Two carbons",
          "One carbon",
          "Four carbons"
        ],
        "answer": 0,
        "explanation": "The two-carbon ethyl group gains the carboxyl carbon supplied by carbon dioxide, giving propanoic acid."
      },
      {
        "question": "Direct proton quenching of ethylmagnesium bromide instead gives:",
        "options": [
          "Propanoic acid",
          "Ethane",
          "Ethene",
          "Benzoic acid"
        ],
        "answer": 1,
        "explanation": "A proton source converts the ethyl group to ethane without adding a carbon atom."
      },
      {
        "question": "In ordinary electrophilic aromatic substitution, chlorine on benzene is:",
        "options": [
          "Activating and meta directing",
          "Activating and ortho/para directing",
          "Deactivating and ortho/para directing",
          "Deactivating and exclusively meta directing"
        ],
        "answer": 2,
        "explanation": "Net inductive withdrawal reduces overall reactivity, while resonance effects favour ortho/para over meta attack."
      },
      {
        "question": "In nitration of chlorobenzene, the usual substitution changes:",
        "options": [
          "The C–Cl bond only",
          "Every ring bond into a single bond",
          "Chlorine into a carbonyl group",
          "A ring C–H bond while C–Cl remains"
        ],
        "answer": 3,
        "explanation": "Electrophilic ring substitution replaces a ring hydrogen; it is distinct from nucleophilic replacement of the aryl halogen."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: alkyl halides from alcohols",
        "url": "https://openstax.org/books/organic-chemistry/pages/10-5-preparing-alkyl-halides-from-alcohols"
      },
      {
        "title": "OpenStax: preparation of alkynes",
        "url": "https://openstax.org/books/organic-chemistry/pages/9-2-preparation-of-alkynes-elimination-reactions-of-dihalides"
      },
      {
        "title": "OpenStax: preparing carboxylic acids",
        "url": "https://openstax.org/books/organic-chemistry/pages/20-5-preparing-carboxylic-acids"
      },
      {
        "title": "OpenStax: substituent effects in electrophilic substitutions",
        "url": "https://openstax.org/books/organic-chemistry/pages/16-4-substituent-effects-in-electrophilic-substitutions"
      }
    ]
  },
  "organic-oxygen": {
    "base": 19,
    "quizBase": 24,
    "chapters": [
      {
        "title": "Carbonyl derivatives keep the carbon ledger but lose water",
        "formula": "R₂C=O + NH₂OH ⇌ R₂C=N–OH + H₂O",
        "script": "Aldehydes and ketones can form nitrogen containing derivatives by condensation with suitable nitrogen nucleophiles. Hydroxylamine gives an oxime, replacing the carbonyl double bond with a carbon nitrogen double bond while retaining an oxygen hydrogen group on nitrogen. Hydrazine gives a hydrazone with a carbon nitrogen double bond and an N H two group attached to that nitrogen. In each simple net equation, one water molecule is eliminated per carbonyl group converted. For acetone plus hydroxylamine, the product oxime has three carbons, seven hydrogens, one nitrogen and one oxygen. Acetone plus hydrazine instead gives the corresponding hydrazone with three carbons, eight hydrogens and two nitrogens. No carbon has been added by either nitrogen reagent. Acetone's two identical methyl groups also mean its simple oxime does not give a distinct E and Z pair at the carbon nitrogen bond. An unsymmetrical carbonyl derivative may require a geometrical isomerism check. Formation and hydrolysis depend on conditions; these net equations do not mean every mixture converts completely. Count the reagent atoms and eliminated water before assigning a derivative formula.",
        "points": [
          "Acetone + hydroxylamine · C=O becomes C=N–OH; lose H₂O · Oxime C₃H₇NO",
          "Acetone + hydrazine · C=O becomes C=N–NH₂; lose H₂O · Hydrazone C₃H₈N₂",
          "Two identical methyl groups · No two different groups on carbon · No distinct E/Z pair for this oxime"
        ],
        "board": {
          "heading": "Carbonyl derivatives keep the carbon ledger but lose water",
          "columns": [
            "Case / substrate",
            "Transformation / reason",
            "Product / limit"
          ],
          "rows": [
            [
              "Acetone + hydroxylamine",
              "C=O becomes C=N–OH; lose H₂O",
              "Oxime C₃H₇NO"
            ],
            [
              "Acetone + hydrazine",
              "C=O becomes C=N–NH₂; lose H₂O",
              "Hydrazone C₃H₈N₂"
            ],
            [
              "Two identical methyl groups",
              "No two different groups on carbon",
              "No distinct E/Z pair for this oxime"
            ]
          ]
        }
      },
      {
        "title": "Phenol bromination depends on the reaction medium",
        "formula": "C₆H₅OH + 3Br₂ → C₆H₂Br₃OH + 3HBr",
        "script": "Phenol's hydroxyl group strongly activates its ring toward electrophilic substitution and favours ortho and para positions. In the standard introductory bromine water comparison, phenol can form two four six tribromophenol, with three ring hydrogens replaced by bromine. The net equation uses three bromine molecules for each phenol and produces three hydrogen bromide units. The oxygen hydrogen bond is retained in this ring substitution ledger. With phenol molar mass ninety four and bromine atom mass eighty, the tribrominated product has molar mass three hundred thirty one grams per mole, because three hydrogens of mass one are replaced by three bromines. Thus zero point zero one zero zero mole product has theoretical mass three point three one grams using those supplied values. Under different controlled low polarity conditions, monobromination can instead be favoured, commonly giving ortho and para products. Do not transfer the three bromine stoichiometry into every phenol bromination question without reading the stated medium and extent. A precipitate observation supports a reaction pattern, not a unique identification of every unknown phenolic sample.",
        "points": [
          "Bromine-water comparison · Three ring H replaced at 2,4,6 · C₆H₂Br₃OH; phenolic OH retained",
          "Supplied masses: phenol 94; Br 80; H 1 · Product M=94−3+3×80 · 331 g/mol",
          "Stipulated 0.0100 mol product · 0.0100×331 · 3.31 g theoretical"
        ],
        "board": {
          "heading": "Phenol bromination depends on the reaction medium",
          "columns": [
            "Case / substrate",
            "Transformation / reason",
            "Product / limit"
          ],
          "rows": [
            [
              "Bromine-water comparison",
              "Three ring H replaced at 2,4,6",
              "C₆H₂Br₃OH; phenolic OH retained"
            ],
            [
              "Supplied masses: phenol 94; Br 80; H 1",
              "Product M=94−3+3×80",
              "331 g/mol"
            ],
            [
              "Stipulated 0.0100 mol product",
              "0.0100×331",
              "3.31 g theoretical"
            ]
          ]
        }
      },
      {
        "title": "Carboxylate carbon loss can give different alkane sizes",
        "formula": "Soda-lime model: n→n−1 C; Kolbe coupling: n→2(n−1) C",
        "script": "Two carboxylate transformations can lose the carboxyl carbon yet give different hydrocarbon sizes. In the standard soda lime decarboxylation model, sodium propanoate gives ethane: the three carbon salt loses its carboxyl carbon into carbonate, leaving a two carbon hydrocarbon. A balanced net equation combines sodium propanoate and sodium hydroxide to form ethane and sodium carbonate. In the ideal Kolbe electrolysis comparison, two propanoate ions each lose one electron and one carbon dioxide unit at the anode. The resulting two ethyl radicals couple to form butane, a four carbon molecule. The anodic net equation is two propanoate ions forming butane, two carbon dioxide molecules and two electrons. One mole of coupled butane therefore corresponds to two moles of electrons in that ideal anodic model. This is a carbon and charge ledger, not a statement that electrolysis always gives a single product at full efficiency. Competing reactions and substrate structure can affect the actual product mixture. Distinguish these transformations from the Kolbe Schmitt carboxylation of phenoxide, which has a similar name but adds a carboxyl group to an aromatic system.",
        "points": [
          "Sodium propanoate: three C · Soda-lime decarboxylation model · Ethane: two C",
          "Two propanoate ions · Ideal Kolbe anodic coupling · Butane: four C + 2CO₂ + 2e⁻",
          "General carbon ledger · n−1 versus 2(n−1) · Different from Kolbe–Schmitt reaction"
        ],
        "board": {
          "heading": "Carboxylate carbon loss can give different alkane sizes",
          "columns": [
            "Case / substrate",
            "Transformation / reason",
            "Product / limit"
          ],
          "rows": [
            [
              "Sodium propanoate: three C",
              "Soda-lime decarboxylation model",
              "Ethane: two C"
            ],
            [
              "Two propanoate ions",
              "Ideal Kolbe anodic coupling",
              "Butane: four C + 2CO₂ + 2e⁻"
            ],
            [
              "General carbon ledger",
              "n−1 versus 2(n−1)",
              "Different from Kolbe–Schmitt reaction"
            ]
          ]
        }
      },
      {
        "title": "Ester aminolysis replaces the acyl substituent",
        "formula": "CH₃COOC₂H₅ + NH₃ → CH₃CONH₂ + C₂H₅OH",
        "script": "An ester can react with ammonia under suitable conditions to give an amide and an alcohol. In the simple ethyl ethanoate example, the acyl fragment contains two carbons and the ethoxy fragment contains two more. Aminolysis produces ethanamide from the two carbon acyl fragment and ethanol from the two carbon ethoxy fragment. The total carbon count remains four across the two organic products. The net equation consumes one ammonia per ester and does not eliminate water in this ester to amide accounting. That differs from writing a direct carboxylic acid plus ammonia condensation without considering initial salt formation or conditions. In the usual nucleophilic acyl substitution description, ammonia attacks the carbonyl carbon, a tetrahedral intermediate forms, proton transfers occur and the alcohol-derived group departs. This is not ordinary backside displacement at the ethyl carbon. A neutral amide product contains a carbonyl bonded to nitrogen, while the alcohol retains the ester alkoxy oxygen in this simple unlabelled structural ledger. Reaction rate, competing hydrolysis and conversion depend on the actual ester and conditions; the net equation alone supplies stoichiometry.",
        "points": [
          "Ethyl ethanoate + ammonia · Nucleophilic acyl substitution · Ethanamide + ethanol",
          "Carbon fragments · Two C acyl; two C ethoxy · 2+2 carbon balance",
          "Net equation · One NH₃ per ester · Alcohol formed; no net H₂O eliminated"
        ],
        "board": {
          "heading": "Ester aminolysis replaces the acyl substituent",
          "columns": [
            "Case / substrate",
            "Transformation / reason",
            "Product / limit"
          ],
          "rows": [
            [
              "Ethyl ethanoate + ammonia",
              "Nucleophilic acyl substitution",
              "Ethanamide + ethanol"
            ],
            [
              "Carbon fragments",
              "Two C acyl; two C ethoxy",
              "2+2 carbon balance"
            ],
            [
              "Net equation",
              "One NH₃ per ester",
              "Alcohol formed; no net H₂O eliminated"
            ]
          ]
        },
        "speechInput": "An ester can react with ammonia under suitable conditions to give an amide and an alcohol. In the simple ethyl ethanoate example, the acyl fragment contains two carbons and the ethoxy fragment contains two more. Aminolysis produces ethanamide from the two carbon acyl fragment and ethanol from the two carbon ethoxy fragment. The total carbon count remains four across the two organic products. The net equation consumes one ammonia per ester and does not eliminate water in this ester to amide accounting. That differs from writing a direct carboxylic acid plus ammonia condensation without considering initial salt formation or conditions. In the usual nucleophilic acyl substitution description, ammonia attacks the carbonyl carbon, a tetrahedral intermediate forms, proton transfers occur and the alcohol-derived group departs. This is not ordinary backside displacement at the ethyl carbon. A neutral amide product contains a carbonyl bonded to nitrogen, while the alcohol retains the ester alkoxy oxygen in this simple unlabelled structural ledger. Reaction rate, competing hydrolysis and conversion depend on the actual ester and conditions; the net equation alone supplies stoichiometry rather than a guaranteed yield.",
        "recordingNote": "Independent transcription review confirmed that the recording ends at stoichiometry, omitting the final reminder phrase. Captions follow that spoken ending; speechInput preserves the exact original synthesis request for cache provenance."
      }
    ],
    "quiz": [
      {
        "question": "Acetone plus hydroxylamine forms the simple oxime with net loss of:",
        "options": [
          "Two carbon atoms",
          "One H2O per converted carbonyl",
          "One CO2",
          "One NH3"
        ],
        "answer": 1,
        "explanation": "Oxime condensation replaces C=O with C=N–OH and eliminates one water molecule in the simple net equation."
      },
      {
        "question": "Acetone has formula C3H6O. Its simple hydrazone from N2H4 has formula:",
        "options": [
          "C3H6N2O",
          "C3H7NO",
          "C3H8N2",
          "C4H8N2"
        ],
        "answer": 2,
        "explanation": "Add N2H4 to C3H6O and subtract H2O; the result is C3H8N2 with no added carbon."
      },
      {
        "question": "Using phenol M=94, Br=80 and H=1, molar mass of 2,4,6-tribromophenol is:",
        "options": [
          "334 g/mol",
          "254 g/mol",
          "174 g/mol",
          "331 g/mol"
        ],
        "answer": 3,
        "explanation": "Three ring hydrogens are replaced: 94−3×1+3×80=331 g/mol."
      },
      {
        "question": "Under the stated tribromination model, phenol consumes bromine molecules per molecule in ratio:",
        "options": [
          "1:3 phenol:Br2",
          "1:1 phenol:Br2",
          "1:2 phenol:Br2",
          "3:1 phenol:Br2"
        ],
        "answer": 0,
        "explanation": "Each of three ring substitutions consumes one Br2 and releases one HBr, so one phenol uses three Br2."
      },
      {
        "question": "Sodium propanoate has three carbons. In the standard soda-lime decarboxylation model its hydrocarbon is:",
        "options": [
          "Propane",
          "Ethane",
          "Butane",
          "Methane"
        ],
        "answer": 1,
        "explanation": "The carboxyl carbon is removed from the organic skeleton, leaving the two-carbon ethane product."
      },
      {
        "question": "Ideal Kolbe coupling of two propanoate ions instead gives:",
        "options": [
          "Ethane",
          "Propane",
          "Butane",
          "Pentane"
        ],
        "answer": 2,
        "explanation": "Each propanoate loses its carboxyl carbon to give an ethyl radical; two two-carbon radicals couple to butane."
      },
      {
        "question": "Ethyl ethanoate aminolysis with ammonia gives:",
        "options": [
          "Ethanoic acid and ethene",
          "Ethylamine and methanol",
          "Ethanamide and water only",
          "Ethanamide and ethanol"
        ],
        "answer": 3,
        "explanation": "Ammonia replaces the alcohol-derived group at the acyl centre; the two carbon fragments become ethanamide and ethanol."
      },
      {
        "question": "In that simple ester aminolysis net equation, the number of water molecules eliminated per ester is:",
        "options": [
          "Zero",
          "One",
          "Two",
          "Three"
        ],
        "answer": 0,
        "explanation": "The net products are an amide and an alcohol; no water is eliminated in this ester-to-amide atom ledger."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: carbonyl condensation with nitrogen nucleophiles",
        "url": "https://openstax.org/books/organic-chemistry/pages/19-8-nucleophilic-addition-of-amines-imine-and-enamine-formation"
      },
      {
        "title": "OpenStax: reactions of phenols",
        "url": "https://openstax.org/books/organic-chemistry/pages/17-10-reactions-of-phenols"
      },
      {
        "title": "King Saud University: alcohol, phenol and ether teaching notes",
        "url": "https://faculty.ksu.edu.sa/sites/default/files/2_CHEM%20241_Alcohols-Phenols-Ethers_0.pdf"
      },
      {
        "title": "IGNOU: monocarboxylic acids and carboxylate transformations",
        "url": "https://www.egyankosh.ac.in/bitstream/123456789/15723/1/Unit-15.pdf"
      },
      {
        "title": "OpenStax: ester aminolysis",
        "url": "https://openstax.org/books/organic-chemistry/pages/21-6-chemistry-of-esters"
      }
    ]
  }
} as const;
