// Authored by scripts/expand-oxygen-reaction-ledgers.mjs.
export const oxygenReactionLedgersAdditions = {
  "chapters": [
    {
      "title": "Lucas observations need both structure and conditions",
      "formula": "Lucas comparison: concentrated HCl/ZnCl2; turbidity reflects a poorly soluble substitution product",
      "script": "An alcohol classification is useful evidence, but an observed reaction time is not a permanent label attached to every molecule. The Lucas comparison uses concentrated hydrochloric acid and zinc chloride to promote conversion of an alcohol into an alkyl chloride. Cloudiness commonly reflects separation of a poorly water soluble organic product. Among suitable simple alcohols under matched room temperature conditions, a tertiary alcohol generally responds faster than a secondary one, while a simple primary alcohol usually shows no prompt response. This ordering is connected to the ease of the substitution pathway, including carbocation stabilization where relevant. Benzyl alcohol is an important warning against an absolute primary means unreactive rule: its benzylic system can react readily despite its primary classification. Solubility, temperature, observation time and substrate structure matter, so do not assign an exact universal number of minutes to every secondary alcohol. Phenol is also not an ordinary alkyl alcohol undergoing replacement at a saturated carbon. Use a supplied observation together with structural evidence and other tests. This chapter interprets classroom evidence; it is not an instruction to perform the corrosive reagent test.",
      "points": [
        "Matched simple alcohols · Tertiary often fastest · Primary usually no prompt response",
        "Benzyl alcohol is primary · Benzylic stabilization matters · Primary is not universally negative",
        "Cloudiness + stated conditions · Product solubility also matters · Timing alone is not identification"
      ],
      "board": {
        "heading": "Lucas observations need both structure and conditions",
        "columns": [
          "Starting point",
          "Reasoning",
          "Result / limit"
        ],
        "rows": [
          [
            "Matched simple alcohols",
            "Tertiary often fastest",
            "Primary usually no prompt response"
          ],
          [
            "Benzyl alcohol is primary",
            "Benzylic stabilization matters",
            "Primary is not universally negative"
          ],
          [
            "Cloudiness + stated conditions",
            "Product solubility also matters",
            "Timing alone is not identification"
          ]
        ]
      }
    },
    {
      "title": "Dehydration counting separates positions from E and Z forms",
      "formula": "Unrearranged butan-2-ol elimination: but-1-ene, (E)-but-2-ene and (Z)-but-2-ene",
      "script": "When an alcohol loses water, first identify which neighboring carbons can provide the hydrogen removed in elimination. Then check whether each alkene has geometrical isomers. For an unrearranged carbon skeleton starting from butan two ol, removing a hydrogen from carbon one gives but one ene, while removal from carbon three gives but two ene. These are two different constitutional alkene products. But one ene has a terminal carbon bearing two identical hydrogen substituents, so it does not have a separate E and Z pair. But two ene has two different groups on each double bonded carbon and therefore has E and Z forms. Counting geometrical forms separately gives three distinct alkenes within this specified product set. In the usual acid dehydration comparison, the more substituted but two ene family is favored, and its trans form is generally more stable than its cis form. These qualitative preferences do not give exact percentages for unspecified conditions. Carbocation rearrangement, competing substitution and subsequent alkene isomerization must be considered when a question includes them. Always state the product set before counting instead of confusing two double bond positions with two total stereochemical products.",
      "points": [
        "C1 or C3 loses beta H · Two double-bond positions · But-1-ene and but-2-ene",
        "Terminal alkene: identical H · No E/Z pair at C1 · But-2-ene has E and Z",
        "Specified unrearranged set · 1 + 2 = 3 alkenes · Count is not a yield ratio"
      ],
      "board": {
        "heading": "Dehydration counting separates positions from E and Z forms",
        "columns": [
          "Starting point",
          "Reasoning",
          "Result / limit"
        ],
        "rows": [
          [
            "C1 or C3 loses beta H",
            "Two double-bond positions",
            "But-1-ene and but-2-ene"
          ],
          [
            "Terminal alkene: identical H",
            "No E/Z pair at C1",
            "But-2-ene has E and Z"
          ],
          [
            "Specified unrearranged set",
            "1 + 2 = 3 alkenes",
            "Count is not a yield ratio"
          ]
        ]
      }
    },
    {
      "title": "An ester can consume two Grignard carbon groups",
      "formula": "CH3COOCH2CH3 + 2 CH3MgBr; then work-up → (CH3)3COH + CH3CH2OH",
      "script": "An ester does not stop at the same one addition stage used for a simple aldehyde or ketone. In the ordinary Grignard reaction of an ester, the first carbon group adds to the acyl carbon, and collapse of the tetrahedral intermediate expels the alkoxy group. The resulting ketone can react with a second equivalent of the same Grignard reagent. Protonation during workup then gives an alcohol carrying two carbon groups from that reagent. Consider ethyl ethanoate and methylmagnesium bromide. The acyl part initially has a methyl group attached to its carbonyl carbon. Two additional methyl groups arrive from two reagent molecules, producing tert butyl alcohol after workup. The original ethoxy part becomes ethanol on protonation, so it must not disappear from the carbon ledger or be attached to the final tertiary center. Four ester carbons plus two reagent carbons give four carbons in the tertiary alcohol and two in ethanol. This is an ideal stoichiometric product map with suitable conditions, not a guarantee of isolated yield. Esters of methanoic acid are a separate structural case because their acyl substituent is hydrogen.",
      "points": [
        "Ester first addition · Alkoxy group can leave · Ketone intermediate forms",
        "Second Grignard addition · Two incoming methyl groups · Ethyl ethanoate → tert-butanol",
        "Ethoxy fragment after work-up · Ethanol retains two carbons · 4 + 2 = 4 + 2 carbons"
      ],
      "board": {
        "heading": "An ester can consume two Grignard carbon groups",
        "columns": [
          "Starting point",
          "Reasoning",
          "Result / limit"
        ],
        "rows": [
          [
            "Ester first addition",
            "Alkoxy group can leave",
            "Ketone intermediate forms"
          ],
          [
            "Second Grignard addition",
            "Two incoming methyl groups",
            "Ethyl ethanoate → tert-butanol"
          ],
          [
            "Ethoxy fragment after work-up",
            "Ethanol retains two carbons",
            "4 + 2 = 4 + 2 carbons"
          ]
        ]
      }
    },
    {
      "title": "Acidic protons reduce the Grignard reagent available for addition",
      "formula": "RMgX + H–A → R–H + magnesium salt; count quenching before carbonyl addition",
      "script": "Grignard reagent consumption must include acid base reactions before a carbonyl addition ledger can be trusted. A suitable acidic proton can convert the incoming carbon group into its corresponding hydrocarbon, consuming one equivalent of reagent without making the intended carbon carbon bond. Water, alcohol hydroxyl groups and carboxylic acid protons are familiar incompatible features. In a supplied ideal bookkeeping exercise, suppose a mixture contains ten millimoles of a simple ketone and three millimoles of a separate monohydric alcohol, and receives twelve millimoles of methylmagnesium bromide. Assume the three alcohol protons consume reagent quantitatively first, ignore other side reactions, and then allow one reagent equivalent per ketone addition. Nine millimoles remain for addition, so at most nine millimoles of ketone can become the new alcohol before workup. Three millimoles of methane are formed by the stated proton transfer, and one millimole of ketone remains. This is a theoretical upper bound under explicit assumptions, not a preparative recommendation or a prediction that mixing incompatible groups gives a clean yield. Order of addition, protection and all other reactive groups still matter in an actual synthesis.",
      "points": [
        "12 mmol reagent; 3 mmol ROH · One equivalent per O–H · 3 mmol methane; 9 mmol left",
        "10 mmol simple ketone · One equivalent per addition · At most 9 mmol converted",
        "Ideal stated ledger only · 1 mmol ketone remains · Not an isolated yield prediction"
      ],
      "board": {
        "heading": "Acidic protons reduce the Grignard reagent available for addition",
        "columns": [
          "Starting point",
          "Reasoning",
          "Result / limit"
        ],
        "rows": [
          [
            "12 mmol reagent; 3 mmol ROH",
            "One equivalent per O–H",
            "3 mmol methane; 9 mmol left"
          ],
          [
            "10 mmol simple ketone",
            "One equivalent per addition",
            "At most 9 mmol converted"
          ],
          [
            "Ideal stated ledger only",
            "1 mmol ketone remains",
            "Not an isolated yield prediction"
          ]
        ]
      }
    },
    {
      "title": "Ester reduction preserves two separate carbon fragments",
      "formula": "CH3CH2COOCH3 + LiAlH4; then work-up → CH3CH2CH2OH + CH3OH",
      "script": "Reduction of an ester with a suitable strong hydride reagent keeps the acyl carbon but changes how it is bonded to oxygen. In the ordinary lithium aluminium hydride comparison followed by aqueous workup, the acyl fragment becomes a primary alcohol and the original alkoxy fragment is recovered as its own alcohol. For methyl propanoate, the three carbon propanoyl portion gives propan one ol, while the one carbon methoxy portion gives methanol. The total four carbons are therefore divided three plus one between two alcohol products. Do not draw butan one ol by joining fragments across the original ester oxygen. No such new carbon carbon bond is made by the reduction. Contrast this with Grignard addition, which introduces carbon groups and can give a tertiary alcohol from an ordinary nonformate ester. Hydride reduction introduces hydrogen rather than carbon. Also distinguish this ester transformation from the usual sodium borohydride selectivity taught for simple aldehydes and ketones; an unspecified mild reagent should not automatically be assigned the strong ester reduction. Workup supplies protons and is part of the final product statement. Formal reaction maps describe suitable conditions and do not mean every reagent is interchangeable.",
      "points": [
        "Methyl propanoate has 4 C · Acyl fragment has 3 C · Propan-1-ol after reduction",
        "Methoxy fragment has 1 C · Protonation at work-up · Methanol is also formed",
        "Hydride adds no carbon · 3 + 1 remains 3 + 1 · Not butan-1-ol"
      ],
      "board": {
        "heading": "Ester reduction preserves two separate carbon fragments",
        "columns": [
          "Starting point",
          "Reasoning",
          "Result / limit"
        ],
        "rows": [
          [
            "Methyl propanoate has 4 C",
            "Acyl fragment has 3 C",
            "Propan-1-ol after reduction"
          ],
          [
            "Methoxy fragment has 1 C",
            "Protonation at work-up",
            "Methanol is also formed"
          ],
          [
            "Hydride adds no carbon",
            "3 + 1 remains 3 + 1",
            "Not butan-1-ol"
          ]
        ]
      }
    },
    {
      "title": "Phenol acylation forms an O-linked ester",
      "formula": "C6H5OH + (CH3CO)2O → C6H5OCOCH3 + CH3COOH, under suitable acylation conditions",
      "script": "Phenol can form an ester through reaction at its oxygen, even though its aromatic carbon oxygen bond does not behave like the bond of an ordinary primary alcohol in substitution. Under suitable acylation conditions, phenol and ethanoic anhydride can give phenyl ethanoate and ethanoic acid. The phenolic oxygen becomes bonded to the incoming acyl carbon, while its original bond to the phenyl ring is retained. This product is an O linked ester. It is not a ring acylation product such as a hydroxyacetophenone, which would involve a new carbon carbon bond at an aromatic position under different chemistry. The anhydride contains two ethanoic units, but one transfer event gives one ester and one acid in the simple net equation. Phenol has six carbons and the anhydride four; the ester has eight and the acid two. Suitable acid chlorides offer another acylating route with different byproducts. Do not assume ordinary phenol and an unactivated carboxylic acid always follow the same efficient acid catalyzed esterification used for simple alcohol examples. Identify the acylating agent, the oxygen connection and the accompanying product before predicting the complete ledger.",
      "points": [
        "Phenol + ethanoic anhydride · Acyl transfer at oxygen · Phenyl ethanoate + acid",
        "Ring–O bond remains · New O–C(acyl) bond · Not aromatic ring acylation",
        "6 + 4 substrate carbons · 8 + 2 product carbons · One anhydride unit becomes acid"
      ],
      "board": {
        "heading": "Phenol acylation forms an O-linked ester",
        "columns": [
          "Starting point",
          "Reasoning",
          "Result / limit"
        ],
        "rows": [
          [
            "Phenol + ethanoic anhydride",
            "Acyl transfer at oxygen",
            "Phenyl ethanoate + acid"
          ],
          [
            "Ring–O bond remains",
            "New O–C(acyl) bond",
            "Not aromatic ring acylation"
          ],
          [
            "6 + 4 substrate carbons",
            "8 + 2 product carbons",
            "One anhydride unit becomes acid"
          ]
        ]
      }
    },
    {
      "title": "Keto and enol forms are different structures in equilibrium",
      "formula": "CH3COCH3 ⇌ CH2=C(OH)CH3; alpha H and bond connectivity change",
      "script": "An enol contains a hydroxyl group attached to a carbon carbon double bond. A simple carbonyl compound with a suitable alpha hydrogen can interconvert with an enol by proton transfers and rearrangement of the pi bonding pattern. Acetone illustrates the change: its keto form has a carbon oxygen double bond, whereas its enol has a terminal carbon carbon double bond and an oxygen hydrogen bond. The molecular formula remains three carbons, six hydrogens and one oxygen. A hydrogen has changed its connection, so the two structures are tautomers, not resonance contributors of one fixed nuclear framework. Acid or base can catalyze the interconversion without changing the equilibrium constant merely by acting as a catalyst at a fixed temperature. For many simple aldehydes and ketones the keto form predominates, but that preference is not universal across all conjugated or hydrogen bonded systems. Even a small equilibrium enol population can participate in reactions. Benzaldehyde has no ordinary alpha hydrogen on an adjacent saturated carbon, so the usual simple alpha hydrogen enolization route is unavailable. Check the actual structure rather than treating every hydrogen in a molecule as an alpha hydrogen.",
      "points": [
        "Acetone keto ⇌ enol · Same C3H6O formula · H connection and pi bond change",
        "Tautomers are structures · Not resonance contributors · Catalyst changes rate, not K",
        "Ordinary alpha-H route · Benzaldehyde has no alpha H · Keto preference is not universal"
      ],
      "board": {
        "heading": "Keto and enol forms are different structures in equilibrium",
        "columns": [
          "Starting point",
          "Reasoning",
          "Result / limit"
        ],
        "rows": [
          [
            "Acetone keto ⇌ enol",
            "Same C3H6O formula",
            "H connection and pi bond change"
          ],
          [
            "Tautomers are structures",
            "Not resonance contributors",
            "Catalyst changes rate, not K"
          ],
          [
            "Ordinary alpha-H route",
            "Benzaldehyde has no alpha H",
            "Keto preference is not universal"
          ]
        ]
      }
    },
    {
      "title": "Haloform stoichiometry includes halogen and hydroxide",
      "formula": "RCOCH3 + 3 I2 + 4 OH− → RCOO− + CHI3 + 3 I− + 3 H2O",
      "script": "The haloform test can also be used as a stoichiometric problem when the starting material and ideal net equation are specified. For a methyl ketone, exhaustive iodination of the methyl side followed by cleavage gives a carboxylate and iodoform under alkaline conditions. The balanced net equation consumes three iodine molecules and four hydroxide ions per methyl ketone, and produces one iodoform molecule, three iodide ions and three water molecules. With acetone, one methyl carbon leaves in iodoform while the other two carbons remain together in acetate. Ten millimoles of acetone would therefore require thirty millimoles of iodine and forty millimoles of hydroxide for complete ideal conversion. If only twenty four millimoles of iodine are supplied while hydroxide is in excess, iodine limits conversion to eight millimoles and the maximum iodoform amount is eight millimoles. Do not apply the same iodine coefficient blindly to an alcohol that must first be oxidized before reaching the methyl ketone stage. A positive qualitative test also does not measure quantitative yield unless the problem supplies that assumption. Balance iodine atoms, hydrogen, oxygen and total charge rather than memorizing only the yellow solid product.",
      "points": [
        "One methyl ketone · 3 I2 and 4 OH− · 1 CHI3 + carboxylate",
        "10 mmol acetone; 24 mmol I2 · OH− in excess; ideal map · I2 limits conversion to 8 mmol",
        "Acetone carbon split · 2 C acetate + 1 C CHI3 · Alcohol oxidation needs extra accounting"
      ],
      "board": {
        "heading": "Haloform stoichiometry includes halogen and hydroxide",
        "columns": [
          "Starting point",
          "Reasoning",
          "Result / limit"
        ],
        "rows": [
          [
            "One methyl ketone",
            "3 I2 and 4 OH−",
            "1 CHI3 + carboxylate"
          ],
          [
            "10 mmol acetone; 24 mmol I2",
            "OH− in excess; ideal map",
            "I2 limits conversion to 8 mmol"
          ],
          [
            "Acetone carbon split",
            "2 C acetate + 1 C CHI3",
            "Alcohol oxidation needs extra accounting"
          ]
        ]
      }
    }
  ],
  "quiz": [
    {
      "question": "Which observation invalidates a universal rule that every primary alcohol gives no prompt Lucas response?",
      "options": [
        "Benzyl alcohol can react readily",
        "All primary alcohols are tertiary",
        "Phenol is an alkyl chloride",
        "Cloudiness identifies a unique molecule"
      ],
      "answer": 0,
      "explanation": "Benzylic stabilization changes reactivity; solubility and matched test conditions still matter."
    },
    {
      "question": "Why is a fixed universal Lucas time for every secondary alcohol unreliable?",
      "options": [
        "Only the formula matters",
        "Temperature, solubility, structure and observation conditions matter",
        "All secondary alcohols are inert",
        "Cloudiness always measures concentration exactly"
      ],
      "answer": 1,
      "explanation": "The test is contextual evidence, not an exact universal molecular stopwatch."
    },
    {
      "question": "Counting E/Z separately, how many alkenes are in the specified unrearranged butan-2-ol elimination set?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": 2,
      "explanation": "But-1-ene has no E/Z pair; but-2-ene has E and Z:1+2=3."
    },
    {
      "question": "But-1-ene lacks an E/Z pair because:",
      "options": [
        "All terminal alkenes are saturated",
        "It has no double bond",
        "It has only one carbon",
        "One double-bond carbon bears two identical hydrogens"
      ],
      "answer": 3,
      "explanation": "Both double-bond carbons must each bear different substituents for an E/Z pair."
    },
    {
      "question": "Ethyl ethanoate with two equivalents of CH3MgBr, then work-up, gives which organic alcohol pair in the ideal map?",
      "options": [
        "tert-Butanol and ethanol",
        "Propan-2-ol only",
        "Butan-1-ol and methanol",
        "Acetone and phenol"
      ],
      "answer": 0,
      "explanation": "The acyl center accepts two methyl groups; the ethoxy fragment gives ethanol."
    },
    {
      "question": "Why can an ordinary ester consume two Grignard equivalents?",
      "options": [
        "Work-up adds two carbons",
        "The first addition/elimination gives a ketone that can add again",
        "The alkoxy fragment becomes a methyl anion",
        "Every ester has two carbonyl groups"
      ],
      "answer": 1,
      "explanation": "A ketone intermediate follows loss of the alkoxy group, then receives the second carbon group."
    },
    {
      "question": "Under the stated ideal quench-first ledger,12 mmol Grignard meets3 mmol monohydric alcohol and10 mmol ketone. Maximum ketone addition is:",
      "options": [
        "12 mmol",
        "10 mmol",
        "9 mmol",
        "3 mmol"
      ],
      "answer": 2,
      "explanation": "3 mmol reagent is consumed by O–H quenching;9 mmol remains for one-equivalent ketone addition."
    },
    {
      "question": "Methylmagnesium bromide consumed by an alcohol O–H proton forms which hydrocarbon?",
      "options": [
        "Ethene",
        "Ethane",
        "Benzene",
        "Methane"
      ],
      "answer": 3,
      "explanation": "The methyl group receives a proton, becoming CH4, without making the intended C–C bond."
    },
    {
      "question": "Methyl propanoate with suitable LiAlH4 reduction and work-up gives:",
      "options": [
        "Propan-1-ol and methanol",
        "Butan-1-ol only",
        "Propan-2-ol and methane",
        "Acetone and methanol"
      ],
      "answer": 0,
      "explanation": "The acyl three-carbon portion becomes a primary alcohol; the methoxy fragment becomes methanol."
    },
    {
      "question": "Why is drawing butan-1-ol from that ester reduction incorrect?",
      "options": [
        "One carbon must vanish",
        "It incorrectly joins two carbon fragments across the original oxygen",
        "Hydride adds a methyl group",
        "Esters contain no oxygen"
      ],
      "answer": 1,
      "explanation": "Reduction adds hydrogen, not a new carbon–carbon bond joining the acyl and alkoxy fragments."
    },
    {
      "question": "Phenol O-acylation with ethanoic anhydride under suitable conditions forms:",
      "options": [
        "Hydroxyacetophenone only",
        "Anisole",
        "Phenyl ethanoate and ethanoic acid",
        "Benzene and carbon dioxide"
      ],
      "answer": 2,
      "explanation": "The phenolic oxygen receives an ethanoate acyl group; the other anhydride unit becomes acid."
    },
    {
      "question": "Which connection distinguishes this O-acylation from aromatic ring acylation?",
      "options": [
        "A new ring C–C(acyl) bond in both",
        "Loss of every ring–O bond",
        "Conversion of the ring into an alkane",
        "The original ring–O bond stays and a new O–C(acyl) bond forms"
      ],
      "answer": 3,
      "explanation": "O-acylation retains the aryl–oxygen bond and attaches the acyl group to oxygen."
    },
    {
      "question": "Acetone and its simple enol are tautomers rather than resonance contributors because:",
      "options": [
        "A hydrogen changes its nuclear connection",
        "Their total formulas differ",
        "Their carbon counts differ",
        "Resonance moves nuclei"
      ],
      "answer": 0,
      "explanation": "Tautomerism changes H connectivity and pi bonding while retaining the molecular formula."
    },
    {
      "question": "At fixed temperature an ideal catalyst for keto–enol interconversion changes:",
      "options": [
        "The equilibrium constant automatically",
        "The rate of reaching equilibrium",
        "The number of carbon atoms",
        "The identity of every alpha hydrogen"
      ],
      "answer": 1,
      "explanation": "A catalyst changes pathway and rate, not the thermodynamic equilibrium constant at fixed temperature."
    },
    {
      "question": "For10 mmol acetone and24 mmol I2, with excess OH− and the supplied ideal haloform equation, maximum CHI3 is:",
      "options": [
        "10 mmol",
        "24 mmol",
        "8 mmol",
        "6 mmol"
      ],
      "answer": 2,
      "explanation": "Three I2 per methyl ketone limits conversion to24/3=8 mmol, giving8 mmol CHI3."
    },
    {
      "question": "The balanced methyl-ketone haloform equation consumes how many OH− per ketone?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": 3,
      "explanation": "RCOCH3+3I2+4OH− gives RCOO−+CHI3+3I−+3H2O; total charge is−4 on both sides."
    }
  ],
  "sources": [
    {
      "title": "Nichols: alcohol classification evidence and Lucas-test limitations",
      "url": "https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Organic_Chemistry_Lab_Techniques_(Nichols)/06%253A_Miscellaneous_Techniques/6.04%253A_Chemical_Tests/6.4D%253A_Individual_Tests"
    },
    {
      "title": "OpenStax: cis–trans isomerism",
      "url": "https://openstax.org/books/organic-chemistry/pages/7-4-cis-trans-isomerism-in-alkenes"
    },
    {
      "title": "OpenStax: Grignard synthesis of alcohols",
      "url": "https://openstax.org/books/organic-chemistry/pages/17-5-alcohols-from-carbonyl-compounds-grignard-reaction"
    },
    {
      "title": "OpenStax: ester reactions and reduction",
      "url": "https://openstax.org/books/organic-chemistry/pages/21-6-chemistry-of-esters"
    },
    {
      "title": "OpenStax: acid anhydride acyl transfer",
      "url": "https://openstax.org/books/organic-chemistry/pages/21-5-chemistry-of-acid-anhydrides"
    },
    {
      "title": "OpenStax: keto–enol tautomerism",
      "url": "https://openstax.org/books/organic-chemistry/pages/22-1-keto-enol-tautomerism"
    },
    {
      "title": "William Reusch: the haloform reaction",
      "url": "https://organicchemistrydata.org/reusch/virtualtext/haloform-reaction/"
    }
  ]
} as const;
