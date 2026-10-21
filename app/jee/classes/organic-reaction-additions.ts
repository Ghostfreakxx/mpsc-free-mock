// Authored by scripts/expand-organic-reactions.mjs.
export const organicReactionAdditions = {
  "hydrocarbons": {
    "chapters": [
      {
        "title": "Alkyne hydration gives carbonyl products",
        "formula": "Propyne: Hg²⁺/acid hydration → propanone; hydroboration–oxidation → propanal",
        "script": "Alkyne hydration usually requires following an initially formed enol to its carbonyl tautomer. An enol has hydroxyl attached to an alkene carbon; the final carbonyl product is not obtained by simply leaving that double bond unchanged. For propyne, aqueous acid with mercury two catalysis gives the Markovnikov hydration pattern and, after tautomerization, propanone. A suitable bulky borane followed by alkaline peroxide oxidation instead gives the terminal alkyne the complementary hydration orientation, leading to the aldehyde C H three, C H two, C H O, also called propionaldehyde. Both products retain the three carbon skeleton. They have the same molecular formula but different carbonyl positions and functional classes. Ethyne is an important special case: its acid catalysed hydration gives the aldehyde C H three, C H O, also called acetaldehyde, rather than a methyl ketone. Internal unsymmetrical alkynes can give product mixtures, so a terminal alkyne shortcut must not be applied indiscriminately. Read the catalyst and workup before selecting a product. Tautomerization moves a proton and changes bond placement; it is not merely resonance between drawings with the same hydrogen attachments. This distinction connects hydrocarbon reactions with the carbonyl chemistry developed in the Organic Oxygen class.",
        "points": [
          "Propyne · Hg²⁺, aqueous acid · Propanone",
          "Propyne · Bulky borane; oxidation · Propanal",
          "Ethyne · Acid-catalysed hydration · Ethanal exception"
        ],
        "board": {
          "heading": "Alkyne hydration gives carbonyl products",
          "columns": [
            "Case",
            "Key condition",
            "Result / check"
          ],
          "rows": [
            [
              "Propyne",
              "Hg²⁺, aqueous acid",
              "Propanone"
            ],
            [
              "Propyne",
              "Bulky borane; oxidation",
              "Propanal"
            ],
            [
              "Ethyne",
              "Acid-catalysed hydration",
              "Ethanal exception"
            ]
          ]
        }
      },
      {
        "title": "Reconstruct an alkene from carbonyl fragments",
        "formula": "Reductive ozonolysis: join the two carbonyl carbons with C=C",
        "script": "Reductive ozonolysis can be read backward as well as forward. Each carbon of the original double bond becomes a carbonyl carbon while retaining its attached carbon groups. Suppose the products are one molecule of propanone and one of acetaldehyde, the two carbon aldehyde C H three, C H O. Propanone's carbonyl carbon carries two methyl groups. This aldehyde's carbonyl carbon carries one methyl group and one hydrogen. Join those two carbonyl carbons with a double bond and remove the carbonyl oxygens in the reconstruction. The original alkene is two methylbut two ene. It contains five carbons, matching three plus two in the products. This reconstruction determines connectivity, but carbonyl fragments alone do not generally recover an alkene's original E or Z geometry. In this particular alkene, two identical methyl groups on one double bonded carbon prevent E and Z isomerism. The workup matters: oxidative ozonolysis can further oxidize aldehyde products, changing the evidence used for reconstruction. State reductive conditions before treating an aldehyde as the final fragment. Finish by counting carbon atoms and checking which double bonded carbon had a hydrogen.",
        "points": [
          "Fragment 1 · Propanone · Two methyl groups",
          "Fragment 2 · Ethanal · Methyl and H",
          "Reconstructed alkene · Join carbonyl carbons · 2-methylbut-2-ene"
        ],
        "board": {
          "heading": "Reconstruct an alkene from carbonyl fragments",
          "columns": [
            "Case",
            "Key condition",
            "Result / check"
          ],
          "rows": [
            [
              "Fragment 1",
              "Propanone",
              "Two methyl groups"
            ],
            [
              "Fragment 2",
              "Ethanal",
              "Methyl and H"
            ],
            [
              "Reconstructed alkene",
              "Join carbonyl carbons",
              "2-methylbut-2-ene"
            ]
          ]
        }
      },
      {
        "title": "Check aromaticity before counting alone",
        "formula": "Cyclic, planar, continuously conjugated; 4n + 2 π electrons",
        "script": "Aromaticity in the simple Hückel model requires more than a special electron count. The ring must be cyclic, approximately planar and continuously conjugated, with a suitable p orbital at each position. A closed shell ring with four n plus two pi electrons can then be aromatic. Benzene has six pi electrons, corresponding to n equal to one. The cyclopentadienyl anion also has six: four from two double bonds and two from the relevant lone pair in its conjugated ring. The cycloheptatrienyl cation has six pi electrons from three double bonds and an empty p orbital at the cationic position. Charge alone therefore does not prohibit aromaticity. A planar fully conjugated four pi electron ring instead fits the antiaromatic pattern. A nonplanar molecule that avoids continuous effective overlap may be nonaromatic rather than antiaromatic, even if a naive count gives four n electrons. Cyclooctatetraene is the familiar nonplanar example. Always check geometry and conjugation before applying the electron rule. The model here concerns simple monocyclic systems and is not a universal classification shortcut for every fused or unusual structure.",
        "points": [
          "Benzene · Planar conjugated ring · 6 π; aromatic",
          "Cyclopentadienyl anion · Lone pair participates · 6 π; aromatic",
          "Cyclooctatetraene · Nonplanar ground state · Nonaromatic"
        ],
        "board": {
          "heading": "Check aromaticity before counting alone",
          "columns": [
            "Case",
            "Key condition",
            "Result / check"
          ],
          "rows": [
            [
              "Benzene",
              "Planar conjugated ring",
              "6 π; aromatic"
            ],
            [
              "Cyclopentadienyl anion",
              "Lone pair participates",
              "6 π; aromatic"
            ],
            [
              "Cyclooctatetraene",
              "Nonplanar ground state",
              "Nonaromatic"
            ]
          ]
        }
      },
      {
        "title": "Separate directing effects from activation",
        "formula": "Halogens: deactivating yet ortho/para-directing in electrophilic substitution",
        "script": "An existing substituent affects both how fast an aromatic ring reacts and where a new group preferentially enters. Those are separate questions. Relative to carbon one bearing the substituent, carbons two and six are ortho, three and five are meta, and carbon four is para. A methyl group commonly activates the ring toward electrophilic substitution and favours ortho and para products. A nitro group strongly deactivates and favours meta substitution. Halogens are the important combination: they deactivate the ring overall but still direct predominantly ortho and para. Their inductive withdrawal and resonance donation influence different aspects of the comparison. Do not infer that an ortho para director must always make the ring more reactive than benzene. Nor does directing preference promise one pure product. Steric effects, electrophile, medium and additional substituents can affect the product mixture. The labelled rings show relative positions rather than exact yields. For several substituents, compare their competing effects and blocked sites before predicting the next position. Keep electrophilic ring substitution distinct from radical reaction at an alkyl side chain.",
        "points": [
          "Methyl substituent · Electrophilic substitution · Activating; ortho/para",
          "Nitro substituent · Electrophilic substitution · Deactivating; meta",
          "Halogen substituent · Electrophilic substitution · Deactivating; ortho/para"
        ],
        "board": {
          "heading": "Separate directing effects from activation",
          "columns": [
            "Case",
            "Key condition",
            "Result / check"
          ],
          "rows": [
            [
              "Methyl substituent",
              "Electrophilic substitution",
              "Activating; ortho/para"
            ],
            [
              "Nitro substituent",
              "Electrophilic substitution",
              "Deactivating; meta"
            ],
            [
              "Halogen substituent",
              "Electrophilic substitution",
              "Deactivating; ortho/para"
            ]
          ]
        }
      },
      {
        "title": "Benzylic reactions need the right site",
        "formula": "Side-chain oxidation usually requires at least one benzylic H",
        "script": "The benzylic carbon is directly attached to an aromatic ring. Its chemistry differs from that of a carbon bearing hydrogen within the ring itself. Under the usual strong side chain oxidation conditions, an alkylbenzene with at least one benzylic hydrogen can yield a carboxyl group at the ring attachment, followed by acid workup. Toluene and ethylbenzene therefore both give benzoic acid in that introductory comparison. The extra carbon in ethylbenzene does not become a longer carboxylic acid side chain. Carbon lost from the side chain must be accounted for in a full balanced oxidation, rather than silently assumed to remain in the main organic product. Tert butylbenzene has no hydrogen on its benzylic carbon and does not follow this ordinary side chain oxidation shortcut. Radical halogenation under suitable light or radical initiating conditions can also target benzylic positions, whereas electrophilic aromatic halogenation uses a different pathway and catalyst context. Identify the reacting carbon, the presence of its hydrogen and the reagent conditions before deciding whether the ring or side chain changes.",
        "points": [
          "Toluene · Benzylic H present · Benzoic acid after workup",
          "Ethylbenzene · Benzylic H present · Benzoic acid after workup",
          "tert-Butylbenzene · No benzylic H · Shortcut does not apply"
        ],
        "board": {
          "heading": "Benzylic reactions need the right site",
          "columns": [
            "Case",
            "Key condition",
            "Result / check"
          ],
          "rows": [
            [
              "Toluene",
              "Benzylic H present",
              "Benzoic acid after workup"
            ],
            [
              "Ethylbenzene",
              "Benzylic H present",
              "Benzoic acid after workup"
            ],
            [
              "tert-Butylbenzene",
              "No benzylic H",
              "Shortcut does not apply"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Propyne under aqueous acid/Hg(II) hydration gives mainly:",
        "options": [
          "Propanal",
          "Propanone",
          "Propanoic acid",
          "Propane"
        ],
        "answer": 1,
        "explanation": "The initial enol tautomerizes to propanone under the stated Markovnikov hydration conditions."
      },
      {
        "question": "Propanone and ethanal from reductive ozonolysis reconstruct:",
        "options": [
          "But-2-ene",
          "Pent-1-ene",
          "2-Methylbut-2-ene",
          "Ethene"
        ],
        "answer": 2,
        "explanation": "Join the carbonyl carbons: one bears two methyls and the other methyl plus H; total carbon count is five."
      },
      {
        "question": "The cyclopentadienyl anion has how many π electrons in its aromatic ring?",
        "options": [
          "6",
          "4",
          "5",
          "8"
        ],
        "answer": 0,
        "explanation": "Two double bonds contribute four and the conjugated lone pair contributes two."
      },
      {
        "question": "A halogen substituent in ordinary electrophilic aromatic substitution is:",
        "options": [
          "Activating and meta-directing",
          "Always activating",
          "Deactivating and only meta-directing",
          "Deactivating but ortho/para-directing"
        ],
        "answer": 3,
        "explanation": "Overall inductive deactivation coexists with ortho/para directing resonance effects."
      },
      {
        "question": "Which lacks a benzylic hydrogen for the ordinary alkylbenzene oxidation shortcut?",
        "options": [
          "Toluene",
          "tert-Butylbenzene",
          "Ethylbenzene",
          "Propylbenzene"
        ],
        "answer": 1,
        "explanation": "The ring-attached carbon in tert-butylbenzene is bonded to three methyl groups and has no H."
      },
      {
        "question": "Propyne with suitable bulky-borane hydroboration followed by oxidation gives:",
        "options": [
          "Propanone",
          "Ethanal",
          "Propanal",
          "Propene"
        ],
        "answer": 2,
        "explanation": "The complementary hydration orientation of this terminal alkyne gives the aldehyde propanal."
      }
    ],
    "foundationExtraQuiz": [
      {
        "question": "The degree of unsaturation of neutral hydrocarbon C6H6 is:",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": 3,
        "explanation": "(2 × 6 + 2 − 6)/2 = 4. This count does not uniquely identify benzene."
      },
      {
        "question": "Reductive ozonolysis of 2-methylpropene gives:",
        "options": [
          "Two ethanal molecules",
          "Propanone and methanal",
          "Only methane",
          "Two propanone molecules"
        ],
        "answer": 1,
        "explanation": "The carbon bearing two methyl groups gives propanone; the terminal CH2 carbon gives methanal."
      },
      {
        "question": "Partial hydrogenation of an appropriate internal alkyne with a Lindlar catalyst usually gives:",
        "options": [
          "A cis alkene",
          "A trans alkene only",
          "An acetylide salt",
          "A haloarene"
        ],
        "answer": 0,
        "explanation": "The Lindlar system allows selective partial hydrogenation with the usual cis relationship for an appropriate internal alkyne."
      },
      {
        "question": "Which group is generally deactivating and meta directing in aromatic substitution?",
        "options": [
          "Methyl",
          "Ethyl",
          "Nitro",
          "Chlorine"
        ],
        "answer": 2,
        "explanation": "Nitro deactivates and directs meta. Chlorine deactivates but directs ortho/para."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: alkyne hydration",
        "url": "https://openstax.org/books/organic-chemistry/pages/9-4-hydration-of-alkynes"
      },
      {
        "title": "OpenStax: aromatic ions",
        "url": "https://openstax.org/books/organic-chemistry/pages/15-4-aromatic-ions"
      }
    ]
  },
  "organic-halogens": {
    "chapters": [
      {
        "title": "SN2 inversion concerns spatial arrangement",
        "formula": "Backside attack → inversion at the reacting stereogenic carbon",
        "script": "An S N two substitution occurs through a concerted bond making and bond breaking event. The incoming nucleophile approaches opposite the leaving group, producing inversion of the spatial arrangement at a reacting stereogenic carbon. This is often called Walden inversion. It does not imply that every printed R descriptor must change to S, because replacing a group can change the priority order used to assign the descriptor. First follow the actual three dimensional arrangement, then assign priorities to the product. A methyl substrate has no stereogenic carbon, so its S N two reaction cannot be described as producing a pair of carbon enantiomers merely because backside attack occurred. The bimolecular rate law refers to the elementary substitution step and depends on both substrate and nucleophile concentration under that model. Steric crowding near the reacting carbon can hinder the required approach. A tertiary substrate therefore does not become a good ordinary S N two substrate just because a strong nucleophile is present. Separate reaction mechanism, spatial inversion and the final naming descriptor rather than treating them as one memorized word.",
        "points": [
          "Concerted substitution · Backside approach · Spatial inversion",
          "R / S naming · Reassign product priorities · Do not switch blindly",
          "Methyl carbon · Not stereogenic · No enantiomer pair here"
        ],
        "board": {
          "heading": "SN2 inversion concerns spatial arrangement",
          "columns": [
            "Case",
            "Key condition",
            "Result / check"
          ],
          "rows": [
            [
              "Concerted substitution",
              "Backside approach",
              "Spatial inversion"
            ],
            [
              "R / S naming",
              "Reassign product priorities",
              "Do not switch blindly"
            ],
            [
              "Methyl carbon",
              "Not stereogenic",
              "No enantiomer pair here"
            ]
          ]
        }
      },
      {
        "title": "SN1 stereochemistry and rearrangements",
        "formula": "Planar carbocation permits attack from either face",
        "script": "An S N one model begins with ionization to a carbocation and a leaving group. A simple trigonal planar carbocation can be approached from either face, so substitution at a suitable stereogenic centre can give both configurations. The result is often described as racemization, but real ion pairs and solvent cages can make the proportions unequal. Do not promise an exact fifty fifty mixture without the additional assumptions needed for equal access. Carbocation intermediates can also rearrange by suitable hydride or alkyl shifts when a more favourable cation is accessible. Such a shift moves a bonding pair together with the migrating group and changes which carbon bears the positive charge. It is not a resonance contributor that leaves every hydrogen attachment unchanged. Product prediction therefore needs the substrate structure and conditions, rather than the S N one label alone. The rate determining ionization model gives first order dependence on substrate when that step controls the observed rate. A favourable carbocation does not exclude competing elimination, especially when the surrounding conditions encourage proton removal.",
        "points": [
          "Carbocation geometry · Approximately planar · Two faces accessible",
          "Observed products · Ion pairs can matter · Not always exactly 50:50",
          "Rearrangement · Bonded group migrates · Connectivity can change"
        ],
        "board": {
          "heading": "SN1 stereochemistry and rearrangements",
          "columns": [
            "Case",
            "Key condition",
            "Result / check"
          ],
          "rows": [
            [
              "Carbocation geometry",
              "Approximately planar",
              "Two faces accessible"
            ],
            [
              "Observed products",
              "Ion pairs can matter",
              "Not always exactly 50:50"
            ],
            [
              "Rearrangement",
              "Bonded group migrates",
              "Connectivity can change"
            ]
          ]
        }
      },
      {
        "title": "Substitution and elimination compete",
        "formula": "Aqueous / alcoholic base is a clue, not a universal guarantee",
        "script": "An alkyl halide may undergo substitution or elimination, and the reagent label alone is not a complete prediction. In a common introductory comparison, aqueous hydroxide can replace bromide in bromoethane to give ethanol, while heated alcoholic base can promote elimination to ethene. Both products retain the two carbon skeleton, but they change different bonds. Substitution makes a new carbon oxygen bond; elimination removes a beta hydrogen and the leaving group to form a carbon carbon double bond. A beta hydrogen must be available for this ordinary elimination. With more substituted substrates, base strength and size, solvent, temperature and geometry influence the competition and alkene distribution. In an E two process, the relevant beta carbon hydrogen bond and carbon leaving group bond favour an antiperiplanar arrangement. A bulky base can alter which beta hydrogen is removed, so a single major alkene rule is not universal. Methyl halides lack a beta carbon and cannot undergo the usual beta elimination to an alkene. Inspect the actual substrate and competing paths before using a preparation shortcut.",
        "points": [
          "Bromoethane · Aqueous OH⁻ example · Ethanol by substitution",
          "Bromoethane · Heated alcoholic base · Ethene by elimination",
          "Methyl halide · No beta carbon · No ordinary β elimination"
        ],
        "board": {
          "heading": "Substitution and elimination compete",
          "columns": [
            "Case",
            "Key condition",
            "Result / check"
          ],
          "rows": [
            [
              "Bromoethane",
              "Aqueous OH⁻ example",
              "Ethanol by substitution"
            ],
            [
              "Bromoethane",
              "Heated alcoholic base",
              "Ethene by elimination"
            ],
            [
              "Methyl halide",
              "No beta carbon",
              "No ordinary β elimination"
            ]
          ]
        }
      },
      {
        "title": "Ambidentate cyanide and carbon counting",
        "formula": "R–CN differs from R–NC; nitrile hydrolysis retains its added carbon",
        "script": "An ambidentate reagent can connect through different atoms, so product connectivity matters. In the usual introductory alkyl halide comparison, ionic cyanide such as potassium cyanide favours carbon bonded nitrile formation, while silver cyanide is associated with isocyanide formation through nitrogen under the specified preparation conditions. Do not draw those products as interchangeable resonance forms. For bromoethane reacting by nitrile formation, the two carbon ethyl group acquires the cyanide carbon, producing propanenitrile with three carbons. Subsequent nitrile hydrolysis can give propanoic acid after the appropriate workup. Carbon counting exposes a common error: the product is not ethanoic acid merely because the starting halide was ethyl. An isocyanide has the alkyl group attached to nitrogen instead and requires separate reaction reasoning. These are reagent dependent preparation patterns, not a claim that every substrate reacts equally well. The normal nucleophilic substitution limitations still apply, particularly steric hindrance for a direct S N two pathway. Always identify the atom making the new bond before naming the product or planning the next conversion.",
        "points": [
          "Ethyl halide + KCN · C attachment · Propanenitrile; 3 C",
          "Ethyl halide + AgCN · N attachment pattern · Ethyl isocyanide",
          "Propanenitrile hydrolysis · Retain nitrile carbon · Propanoic acid"
        ],
        "board": {
          "heading": "Ambidentate cyanide and carbon counting",
          "columns": [
            "Case",
            "Key condition",
            "Result / check"
          ],
          "rows": [
            [
              "Ethyl halide + KCN",
              "C attachment",
              "Propanenitrile; 3 C"
            ],
            [
              "Ethyl halide + AgCN",
              "N attachment pattern",
              "Ethyl isocyanide"
            ],
            [
              "Propanenitrile hydrolysis",
              "Retain nitrile carbon",
              "Propanoic acid"
            ]
          ]
        }
      },
      {
        "title": "Aryl, vinyl and benzyl halides differ",
        "formula": "Classify the carbon directly bonded to halogen",
        "script": "A halogen attached directly to an aromatic ring is aryl, while one attached to an alkene carbon is vinylic. A benzyl halide instead has the halogen on a saturated carbon directly next to the aromatic ring. These positions are not equivalent. Benzyl chloride contains a carbon chlorine bond at an S P three carbon, whereas chlorobenzene attaches chlorine to an aromatic S P two carbon. Ordinary alkyl substitution shortcuts cannot simply be transferred to chlorobenzene or a vinyl halide. In an aryl carbon halogen bond, conjugation and the geometry of the carbon framework affect reactivity. Suitable activating substituents and forcing conditions can enable other aromatic substitution pathways, but that does not establish a normal freely formed phenyl carbocation mechanism. Benzyl substrates can be reactive in substitution because their adjacent aromatic system can stabilize relevant intermediates or transition states, subject to the actual pathway and substituents. Classify the reaction centre first, then inspect the nucleophile, solvent and activation pattern. The presence of a benzene ring somewhere in the molecule is not enough to classify every carbon halogen bond as aryl.",
        "points": [
          "Chlorobenzene · Cl directly on ring · Aryl C–Cl",
          "Vinyl chloride · Cl on C=C carbon · Vinylic C–Cl",
          "Benzyl chloride · Ph–CH₂–Cl · Benzylic sp³ C–Cl"
        ],
        "board": {
          "heading": "Aryl, vinyl and benzyl halides differ",
          "columns": [
            "Case",
            "Key condition",
            "Result / check"
          ],
          "rows": [
            [
              "Chlorobenzene",
              "Cl directly on ring",
              "Aryl C–Cl"
            ],
            [
              "Vinyl chloride",
              "Cl on C=C carbon",
              "Vinylic C–Cl"
            ],
            [
              "Benzyl chloride",
              "Ph–CH₂–Cl",
              "Benzylic sp³ C–Cl"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "An SN2 reaction at a stereogenic carbon directly implies:",
        "options": [
          "Guaranteed R → S in every naming case",
          "Inversion of spatial arrangement",
          "A free planar carbocation",
          "No dependence on nucleophile"
        ],
        "answer": 1,
        "explanation": "Backside displacement gives inversion; changed CIP priorities can affect the final R/S label."
      },
      {
        "question": "A real SN1 reaction gives both configurations at a reacting centre. Their proportions:",
        "options": [
          "Must always be exactly 50:50",
          "Must be exactly 100:0",
          "Can differ because ion pairs and solvent cages matter",
          "Prove a concerted SN2 mechanism"
        ],
        "answer": 2,
        "explanation": "Planar access supports both configurations, but real environments need not give equal face access."
      },
      {
        "question": "Which substrate lacks a beta carbon for ordinary beta elimination?",
        "options": [
          "Bromomethane",
          "Bromoethane",
          "2-Bromopropane",
          "1-Bromopropane"
        ],
        "answer": 0,
        "explanation": "The methyl substrate has no neighbouring carbon carrying a beta hydrogen."
      },
      {
        "question": "Bromoethane → nitrile using ionic cyanide → acid by hydrolysis gives:",
        "options": [
          "Methanoic acid",
          "Ethanoic acid",
          "Butanoic acid",
          "Propanoic acid"
        ],
        "answer": 3,
        "explanation": "The cyanide carbon adds one to the two-carbon ethyl skeleton and remains in the acid."
      },
      {
        "question": "In benzyl chloride Ph–CH2–Cl, chlorine is bonded to:",
        "options": [
          "An aromatic ring carbon directly",
          "A saturated benzylic carbon",
          "A vinylic carbon",
          "A carbonyl oxygen"
        ],
        "answer": 1,
        "explanation": "The reacting C–Cl carbon is sp3 and adjacent to the aromatic ring."
      },
      {
        "question": "The connectivity R–CN versus R–NC distinguishes:",
        "options": [
          "Two conformers of one nitrile",
          "Identical atom connectivity",
          "Nitrile and isocyanide",
          "An E/Z alkene pair"
        ],
        "answer": 2,
        "explanation": "The alkyl group is bonded to carbon in the nitrile and to nitrogen in the isocyanide."
      }
    ],
    "foundationExtraQuiz": [
      {
        "question": "For rate = k[R-X][Nu], doubling both concentrations changes rate by:",
        "options": [
          "1",
          "2",
          "4",
          "8"
        ],
        "answer": 2,
        "explanation": "The two independent factors of two multiply to four."
      },
      {
        "question": "Under standard elementary conditions, bromoethane with hot alcoholic KOH mainly undergoes:",
        "options": [
          "Beta elimination to ethene",
          "Addition to benzene",
          "Carbon-chain growth",
          "Formation of ethyne in one step"
        ],
        "answer": 0,
        "explanation": "Base removes beta hydrogen while bromide leaves, forming the two-carbon alkene."
      },
      {
        "question": "Which nitro position can provide the usual resonance activation for nucleophilic aromatic displacement of ring halogen?",
        "options": [
          "Only meta",
          "Any position identically",
          "Only a distant side chain",
          "Ortho or para"
        ],
        "answer": 3,
        "explanation": "Ortho and para nitro groups can stabilize the intermediate in the usual addition-elimination pathway."
      },
      {
        "question": "Why is mixed-halide Wurtz coupling often poorly selective for one unsymmetrical alkane?",
        "options": [
          "No carbon-carbon bond can form",
          "Several homo- and cross-coupling pairings can occur",
          "Only the halogens couple",
          "Every substrate must become an alcohol"
        ],
        "answer": 1,
        "explanation": "Different starting halides permit multiple coupling combinations."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: SN2 characteristics",
        "url": "https://openstax.org/books/organic-chemistry/pages/11-3-characteristics-of-the-sn2-reaction"
      },
      {
        "title": "NCERT: haloalkanes and haloarenes",
        "url": "https://ncert.nic.in/textbook/pdf/lech201.pdf"
      }
    ]
  }
};
