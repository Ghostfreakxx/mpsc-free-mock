// Authored by scripts/expand-organic-biomolecule-structure-evidence.mjs.
export const organicBiomoleculeStructureEvidenceAdditions = {
  "organic-oxygen": {
    "base": 23,
    "quizBase": 32,
    "chapters": [
      {
        "title": "Hydrogen bonding can occur inside one molecule",
        "formula": "o-Nitrophenol: intramolecular O–H···O contact; p-isomer: intermolecular association",
        "script": "The position of a substituent can change how hydrogen bonding affects a physical property. In ortho nitrophenol, the phenolic hydrogen can interact with an oxygen of the adjacent nitro group within the same molecule. This intramolecular contact reduces the tendency to form the same extended intermolecular associations as the para isomer. In the usual textbook comparison, ortho nitrophenol is more readily steam volatile, while para nitrophenol has stronger intermolecular association. The para positions are too far apart for the analogous local internal contact in a single molecule. Both isomers still contain hydrogen bond donor and acceptor groups; intramolecular bonding does not delete those atoms or forbid every interaction with water. Do not turn the comparison into a universal solubility rule independent of temperature, ionization and solvent. In alkaline solution, deprotonation changes the species being compared. Identify whether a proposed dashed hydrogen bond joins two different molecules or two sites in one molecule before using it to explain boiling, volatility or association. The molecular formula alone cannot distinguish these positional isomers.",
        "points": [
          "Ortho OH / NO₂ neighbours · Internal O–H···O contact · Intramolecular H bond",
          "Para OH / NO₂ separated · Association between molecules · Intermolecular H bonding",
          "Usual neutral-isomer comparison · Ortho more steam volatile · Check solvent and ionization"
        ],
        "board": {
          "heading": "Hydrogen bonding can occur inside one molecule",
          "columns": [
            "Structure / condition",
            "Atom / bond evidence",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Ortho OH / NO₂ neighbours",
              "Internal O–H···O contact",
              "Intramolecular H bond"
            ],
            [
              "Para OH / NO₂ separated",
              "Association between molecules",
              "Intermolecular H bonding"
            ],
            [
              "Usual neutral-isomer comparison",
              "Ortho more steam volatile",
              "Check solvent and ionization"
            ]
          ]
        }
      },
      {
        "title": "Alpha halogenation of an acid needs an alpha hydrogen",
        "formula": "CH₃CH₂CH₂COOH → CH₃CH₂CHBrCOOH in the stated HVZ monobromination model",
        "script": "The Hell Volhard Zelinsky transformation replaces an alpha hydrogen of a suitable carboxylic acid by halogen. The alpha carbon is the carbon next to the carboxyl carbon, not the carbonyl carbon itself. In a supplied monobromination model, butanoic acid gives two bromobutanoic acid after the specified hydrolytic workup. All four carbons remain in the product. Its alpha carbon now bears hydrogen, bromine, an ethyl group and a carboxyl group, so it is a new stereogenic centre. Under ordinary achiral conditions an idealized product is racemic rather than a single assigned enantiomer. The familiar bromination sequence involves an acyl bromide and its enol; simply naming bromine without the reaction context is incomplete. Benzoic acid does not have the required ordinary alpha hydrogen for this pathway, and two methylpropanoic acid does have an alpha hydrogen despite being branched. Always draw the adjacent carbon before deciding that a substrate is excluded. This named transformation is substitution near the carboxyl group, not removal of its carbon as in decarboxylation.",
        "points": [
          "Butanoic acid: 4 carbons · Replace α-H by Br · 2-Bromobutanoic acid",
          "Product α carbon · H, Br, ethyl, carboxyl · New stereocentre; racemic model",
          "Eligibility requires α-H · Branched acid may have one · Benzoic acid lacks this site"
        ],
        "board": {
          "heading": "Alpha halogenation of an acid needs an alpha hydrogen",
          "columns": [
            "Structure / condition",
            "Atom / bond evidence",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Butanoic acid: 4 carbons",
              "Replace α-H by Br",
              "2-Bromobutanoic acid"
            ],
            [
              "Product α carbon",
              "H, Br, ethyl, carboxyl",
              "New stereocentre; racemic model"
            ],
            [
              "Eligibility requires α-H",
              "Branched acid may have one",
              "Benzoic acid lacks this site"
            ]
          ]
        }
      },
      {
        "title": "Crossed Cannizzaro keeps the two carbon ledgers separate",
        "formula": "C₆H₅CHO + HCHO + OH⁻ → C₆H₅CH₂OH + HCOO⁻",
        "script": "A useful crossed Cannizzaro model pairs benzaldehyde with excess formaldehyde in the stated alkaline conditions. Formaldehyde acts as the preferred oxidation partner, while benzaldehyde is reduced to benzyl alcohol. The one carbon formaldehyde unit becomes formate in the basic mixture, not a carbon inserted into the benzene ring. The seven carbon benzaldehyde unit becomes seven carbon benzyl alcohol. Adding one hydroxide gives a balanced net equation with eight carbons, nine hydrogens, three oxygens and negative one charge on each side. Under an ideal complete conversion model, zero point zero one zero zero mole benzaldehyde can give zero point zero one zero zero mole benzyl alcohol while the coupled pathway makes the same amount of formate. Excess formaldehyde may undergo other conversion, so that statement counts only the specified coupled pathway. Acid workup changes formate to formic acid. Do not confuse this selected crossed reaction with self Cannizzaro of two benzaldehydes, which gives benzoate and benzyl alcohol. Neither pathway is a carbon carbon joining reaction like aldol addition.",
        "points": [
          "Benzaldehyde: C7 · Reduction keeps its C7 skeleton · Benzyl alcohol: C7",
          "Formaldehyde: C1 · Oxidation partner in cross model · Formate: C1 in base",
          ".0100 mol coupled conversion · 1:1 alcohol / formate · Not an eight-carbon alcohol"
        ],
        "board": {
          "heading": "Crossed Cannizzaro keeps the two carbon ledgers separate",
          "columns": [
            "Structure / condition",
            "Atom / bond evidence",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Benzaldehyde: C7",
              "Reduction keeps its C7 skeleton",
              "Benzyl alcohol: C7"
            ],
            [
              "Formaldehyde: C1",
              "Oxidation partner in cross model",
              "Formate: C1 in base"
            ],
            [
              ".0100 mol coupled conversion",
              "1:1 alcohol / formate",
              "Not an eight-carbon alcohol"
            ]
          ]
        }
      },
      {
        "title": "Supporting map: acetals can temporarily mask a carbonyl",
        "formula": "CH₃CHO + 2CH₃OH ⇌ CH₃CH(OCH₃)₂ + H₂O; acid-catalysed equilibrium",
        "script": "An acetal has two oxygen linked carbon groups attached to the same former carbonyl carbon. In a supporting functional group map, the aldehyde acetaldehyde and two methanol molecules can give its dimethyl acetal and one water under suitable acid catalysis. The acetal contains four carbons: the original two carbon aldehyde skeleton and one carbon from each methanol. No reduction has turned the aldehyde into ethanol. The carbonyl oxygen environment has instead been replaced through a reversible addition and substitution sequence. A hemiacetal has one hydroxyl and one alkoxy group on that carbon, whereas the full acetal has two alkoxy groups. Acidic aqueous conditions can regenerate the carbonyl, so acetal formation is useful as a temporary protection strategy. Ordinary acetals are generally stable to many basic conditions, but that does not promise compatibility with every imaginable reagent or solvent. This is a supporting connection to carbonyl and carbohydrate chemistry, not a claim that every protecting group sequence is an additional required syllabus reaction. Track the external alcohol carbons separately from the original carbonyl skeleton.",
        "points": [
          "Ethanal C2 + 2 methanol C1 · Full acetal + one H₂O · Acetal has 4 carbons",
          "Hemiacetal: OH and OR · Full acetal: OR and OR · Same central carbon",
          "Acid-catalysed reversible map · Aqueous acid can unmask C=O · Protection, not reduction"
        ],
        "board": {
          "heading": "Supporting map: acetals can temporarily mask a carbonyl",
          "columns": [
            "Structure / condition",
            "Atom / bond evidence",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Ethanal C2 + 2 methanol C1",
              "Full acetal + one H₂O",
              "Acetal has 4 carbons"
            ],
            [
              "Hemiacetal: OH and OR",
              "Full acetal: OR and OR",
              "Same central carbon"
            ],
            [
              "Acid-catalysed reversible map",
              "Aqueous acid can unmask C=O",
              "Protection, not reduction"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "The characteristic internal interaction in neutral o-nitrophenol is:",
        "options": [
          "Phenolic O–H with a neighbouring nitro oxygen",
          "A new carbon–carbon bond",
          "A peptide bond",
          "Permanent proton loss in every solvent"
        ],
        "answer": 0,
        "explanation": "Adjacent groups permit intramolecular hydrogen bonding without changing the molecular connectivity."
      },
      {
        "question": "In the usual neutral-isomer textbook comparison, which is more readily steam volatile?",
        "options": [
          "p-Nitrophenol",
          "o-Nitrophenol",
          "Both must be identical because their formulas match",
          "Neither can hydrogen bond"
        ],
        "answer": 1,
        "explanation": "Intramolecular bonding in the ortho isomer reduces intermolecular association relative to the para comparison."
      },
      {
        "question": "The supplied HVZ monobromination product of butanoic acid is:",
        "options": [
          "Bromomethane",
          "3-Bromobutanoic acid",
          "2-Bromobutanoic acid",
          "Benzoic acid"
        ],
        "answer": 2,
        "explanation": "The alpha carbon is carbon 2 next to the carboxyl carbon; the four-carbon skeleton is retained."
      },
      {
        "question": "Which acid lacks the ordinary alpha hydrogen required by this HVZ pathway?",
        "options": [
          "Butanoic acid",
          "Propanoic acid",
          "2-Methylpropanoic acid",
          "Benzoic acid"
        ],
        "answer": 3,
        "explanation": "Benzoic acid has no ordinary adjacent aliphatic alpha C–H of the stated substrate type."
      },
      {
        "question": "In the selected benzaldehyde/formaldehyde crossed Cannizzaro net pathway, formaldehyde becomes:",
        "options": [
          "Formate in the basic mixture",
          "Benzoate",
          "An extra ring carbon",
          "Ethene"
        ],
        "answer": 0,
        "explanation": "The C1 partner is oxidized to formate while the C7 aldehyde is reduced to benzyl alcohol."
      },
      {
        "question": "Complete .0100 mol benzaldehyde conversion through that coupled net pathway gives benzyl alcohol amount:",
        "options": [
          ".00500 mol",
          ".0100 mol",
          ".0200 mol",
          ".0800 mol"
        ],
        "answer": 1,
        "explanation": "The selected crossed equation has a 1:1 ratio of benzaldehyde to benzyl alcohol."
      },
      {
        "question": "Ethanal plus two methanols gives a dimethyl acetal containing how many carbons?",
        "options": [
          "2",
          "3",
          "4",
          "6"
        ],
        "answer": 2,
        "explanation": "The two aldehyde carbons and two alcohol carbons all remain in the acetal."
      },
      {
        "question": "Which comparison distinguishes a hemiacetal from a full acetal at the former carbonyl carbon?",
        "options": [
          "Both contain a peptide linkage",
          "The full acetal is simply an aldehyde reduced to ethanol",
          "Only the hemiacetal contains any oxygen",
          "Hemiacetal has OH and OR; full acetal has two OR groups"
        ],
        "answer": 3,
        "explanation": "The distinction concerns oxygen substituents on the same carbon; acid-catalysed hydrolysis can restore the carbonyl."
      }
    ],
    "sources": [
      {
        "title": "IIT Kanpur SATHEE: nitrophenol hydrogen-bonding comparison",
        "url": "https://sathee.iitk.ac.in/ncert-books/neet-ncert-exemplar/ncert_c12_exemplar/alcohols_phenols_and_ethers/"
      },
      {
        "title": "OpenStax: alpha-substitution reaction summary including HVZ",
        "url": "https://openstax.org/books/organic-chemistry/pages/22-summary-of-reactions"
      },
      {
        "title": "CBSE: crossed Cannizzaro reaction teaching examples",
        "url": "https://cbseacademic.nic.in/web_material/Manuals/Chemistry_G12_Vol1_2023.pdf"
      },
      {
        "title": "OpenStax: acetal formation and protection",
        "url": "https://openstax.org/books/organic-chemistry/pages/19-10-nucleophilic-addition-of-alcohols-acetal-formation"
      }
    ]
  },
  "organic-nitrogen": {
    "base": 21,
    "quizBase": 32,
    "chapters": [
      {
        "title": "Nitro reduction has a six-electron nitrogen ledger",
        "formula": "ArNO₂ + 6H⁺ + 6e⁻ → ArNH₂ + 2H₂O; add H⁺ for ArNH₃⁺",
        "script": "Reducing a nitro group to an amine retains the nitrogen and carbon skeleton but changes the nitrogen oxidation state. For a nitro group bonded to carbon, nitrogen is formally plus three; in the corresponding primary amine it is minus three. The change therefore requires six electrons per nitrogen. A balanced acidic half reaction can be written with one nitro compound, six hydrogen ions and six electrons forming the neutral amine and two waters. If the specified product is the protonated amine in an acidic mixture, add one more hydrogen ion and write an ammonium product instead. That extra proton is acid base bookkeeping, not a seventh reduction electron. Thus an ideal zero point zero one zero zero mole nitrobenzene conversion needs zero point zero six zero zero mole electrons for aniline formation. Actual reagent demand also depends on competing reactions and the oxidation product of the reducing agent. Do not replace the nitro nitrogen with nitrogen from the acid or assume that it leaves as nitrogen gas. This reduction is different from diazonium replacement and from an amide rearrangement that changes carbon count.",
        "points": [
          "Nitro N(+3) → amine N(−3) · Six-electron reduction · C and N skeleton retained",
          "Neutral amine half reaction · 6H⁺ + 6e⁻; two waters · Atoms and charge balanced",
          "Acidic ammonium endpoint · 7H⁺ + 6e⁻ instead · Extra proton, not extra electron"
        ],
        "board": {
          "heading": "Nitro reduction has a six-electron nitrogen ledger",
          "columns": [
            "Structure / condition",
            "Atom / bond evidence",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Nitro N(+3) → amine N(−3)",
              "Six-electron reduction",
              "C and N skeleton retained"
            ],
            [
              "Neutral amine half reaction",
              "6H⁺ + 6e⁻; two waters",
              "Atoms and charge balanced"
            ],
            [
              "Acidic ammonium endpoint",
              "7H⁺ + 6e⁻ instead",
              "Extra proton, not extra electron"
            ]
          ]
        }
      },
      {
        "title": "Supporting distinction: Hofmann elimination is not rearrangement",
        "formula": "[CH₃CH₂N(CH₃)₃]⁺ OH⁻ → CH₂=CH₂ + N(CH₃)₃ + H₂O",
        "script": "Two reactions named Hofmann must not be confused. The amide rearrangement makes an amine with one fewer carbon in its skeleton. Hofmann elimination instead concerns a suitable quaternary ammonium species and can produce an alkene plus a tertiary amine. In a supporting ethyltrimethylammonium hydroxide model, the ethyl group supplies a beta hydrogen. Elimination gives ethene, trimethylamine and water. Count five carbons initially: two in the ethyl group and three in methyl groups. The products divide them into two carbons in ethene and three in trimethylamine; no carbon has vanished as a carboxyl derivative. The carbon bearing nitrogen is alpha, and the adjacent ethyl carbon bearing the eliminated hydrogen is beta. A tetramethylammonium ion has no such beta carbon and cannot follow this ordinary alkene forming beta elimination. Where alternative beta sites exist, the familiar Hofmann comparison often favours a less substituted alkene, but substrate geometry and the stated conditions still matter. This supporting distinction is not a general claim that heating any amine releases an alkene or that every named Hofmann process has the same carbon ledger.",
        "points": [
          "Ethyltrimethylammonium hydroxide · β-H from ethyl group · Ethene + trimethylamine + H₂O",
          "Carbon count: 2 + 3 = 5 · Product carbons: 2 + 3 · Elimination, not amide rearrangement",
          "Tetramethylammonium · No β carbon for this pathway · No ordinary alkene-forming E2"
        ],
        "board": {
          "heading": "Supporting distinction: Hofmann elimination is not rearrangement",
          "columns": [
            "Structure / condition",
            "Atom / bond evidence",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Ethyltrimethylammonium hydroxide",
              "β-H from ethyl group",
              "Ethene + trimethylamine + H₂O"
            ],
            [
              "Carbon count: 2 + 3 = 5",
              "Product carbons: 2 + 3",
              "Elimination, not amide rearrangement"
            ],
            [
              "Tetramethylammonium",
              "No β carbon for this pathway",
              "No ordinary alkene-forming E2"
            ]
          ]
        }
      },
      {
        "title": "Strong acid changes aniline nitration directing arguments",
        "formula": "Aniline −NH₂: o/p activation; anilinium −NH₃⁺: deactivating, meta directing",
        "script": "An aromatic directing argument must use the species present in the reaction medium. Neutral aniline has a nitrogen lone pair that can donate toward the ring, favouring ortho and para electrophilic substitution. In a strongly acidic nitration mixture, much of it is converted into anilinium. That nitrogen bears a positive charge and no available lone pair for the same donation, so the anilinium substituent is deactivating and meta directing. Direct nitration is therefore not accurately summarized as clean para substitution of unchanged neutral aniline. Mixtures and other complications can occur; a large meta contribution does not establish a universal pure meta product. Protecting the amino group as an amide before the stated nitration changes basicity and moderates activation, and suitable subsequent hydrolysis can restore the amino group. The usual acetanilide comparison favours a para nitro derivative while allowing an ortho product. Do not confuse adding a nitro group to the ring with oxidizing the existing amino nitrogen into a nitro substituent. Draw the protonated or protected starting species before assigning electron donation, orientation and the final workup product.",
        "points": [
          "Neutral ArNH₂ · Lone-pair donation to ring · Ortho / para directing",
          "Strong acid: ArNH₃⁺ · Donation suppressed; ring deactivated · Meta-directing species",
          "Acetanilide protection map · Nitration then stated hydrolysis · Often para-favoured; not universal purity"
        ],
        "board": {
          "heading": "Strong acid changes aniline nitration directing arguments",
          "columns": [
            "Structure / condition",
            "Atom / bond evidence",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Neutral ArNH₂",
              "Lone-pair donation to ring",
              "Ortho / para directing"
            ],
            [
              "Strong acid: ArNH₃⁺",
              "Donation suppressed; ring deactivated",
              "Meta-directing species"
            ],
            [
              "Acetanilide protection map",
              "Nitration then stated hydrolysis",
              "Often para-favoured; not universal purity"
            ]
          ]
        }
      },
      {
        "title": "Aniline binds a Friedel–Crafts Lewis acid",
        "formula": "ArNH₂ → AlCl₃ coordination uses the nitrogen lone pair; usual ring alkylation is unsuitable",
        "script": "An amino substituent activates an aromatic ring in some reactions, but that does not guarantee compatibility with every electrophilic substitution reagent. In the usual aluminium chloride mediated Friedel Crafts comparison, aniline's nitrogen acts as a Lewis base and binds the Lewis acid. The lone pair used in coordination is no longer available in the same way to activate the ring, and the resulting strongly deactivating complex prevents the ordinary clean ring alkylation prediction. Therefore benzene and aniline cannot simply be assigned the same alkyl chloride and aluminium chloride arrow with only a change in directing position. This limitation concerns that reagent system, not universal chemical inertness of aniline. Also distinguish ring acylation from nitrogen acylation: formation of acetanilide makes a new nitrogen carbonyl bond and is not proof that a Friedel Crafts carbon carbon bond formed on the ring. When a question proposes aniline becoming an ethyl substituted aniline through the usual Friedel Crafts conditions, flag the incompatibility before counting ortho and para products. Check Lewis acid binding, substrate activation and the atom actually receiving a new group as three separate decisions.",
        "points": [
          "Aniline nitrogen: Lewis base · AlCl₃: Lewis acid · N-lone-pair coordination",
          "Usual Friedel–Crafts system · Complex deactivates aromatic ring · Clean ring alkylation unsuitable",
          "Acetanilide formation · Acyl group bonds to nitrogen · Not ring Friedel–Crafts acylation"
        ],
        "board": {
          "heading": "Aniline binds a Friedel–Crafts Lewis acid",
          "columns": [
            "Structure / condition",
            "Atom / bond evidence",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Aniline nitrogen: Lewis base",
              "AlCl₃: Lewis acid",
              "N-lone-pair coordination"
            ],
            [
              "Usual Friedel–Crafts system",
              "Complex deactivates aromatic ring",
              "Clean ring alkylation unsuitable"
            ],
            [
              "Acetanilide formation",
              "Acyl group bonds to nitrogen",
              "Not ring Friedel–Crafts acylation"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "The formal nitro-N(+3) to amine-N(−3) reduction requires electrons per nitrogen:",
        "options": [
          "3",
          "6",
          "7",
          "2"
        ],
        "answer": 1,
        "explanation": "The oxidation number falls by six, so nitrogen receives six electrons."
      },
      {
        "question": "Writing ArNH3+ rather than ArNH2 as the acidic reduction endpoint changes the balanced half reaction by:",
        "options": [
          "Adding one electron",
          "Removing both oxygens without water",
          "Adding one proton without changing the six-electron count",
          "Replacing the original nitrogen"
        ],
        "answer": 2,
        "explanation": "Protonation is acid-base bookkeeping; it does not change nitrogen oxidation state."
      },
      {
        "question": "The stated ethyltrimethylammonium hydroxide elimination yields:",
        "options": [
          "Ethylamine only",
          "Methane plus ammonia",
          "A primary amine with one fewer carbon",
          "Ethene, trimethylamine and water"
        ],
        "answer": 3,
        "explanation": "The ethyl group supplies a beta hydrogen; the carbon inventory divides into C2 alkene and C3 tertiary amine."
      },
      {
        "question": "Why can tetramethylammonium not give an ordinary alkene by this beta-elimination pathway?",
        "options": [
          "It has no beta carbon bearing the required hydrogen",
          "It has no carbon atoms",
          "Its nitrogen is a nitro group",
          "It is a carboxylic acid"
        ],
        "answer": 0,
        "explanation": "All methyl carbons are directly attached to nitrogen; there is no adjacent beta carbon for ordinary E2 alkene formation."
      },
      {
        "question": "Which species explains a meta-directing contribution during direct aniline nitration in strong acid?",
        "options": [
          "Unchanged neutral aniline only",
          "Anilinium ion",
          "A nitride ion",
          "Ethylamine"
        ],
        "answer": 1,
        "explanation": "Protonation suppresses the neutral amino lone-pair donation; ArNH3+ is deactivating and meta directing."
      },
      {
        "question": "Nitration of protected aniline followed by suitable amide hydrolysis is a map designed to:",
        "options": [
          "Add a carbon to the ring in place of nitrogen",
          "Make nitrogen disappear as N2 in every case",
          "Moderate amino-group reactivity and then restore NH2",
          "Convert all anilines into a single universal product"
        ],
        "answer": 2,
        "explanation": "Protection changes the electronic and acid-base behaviour; product ratios still depend on substrate and conditions."
      },
      {
        "question": "Why is the usual alkyl chloride/AlCl3 Friedel–Crafts ring alkylation unsuitable for aniline?",
        "options": [
          "Aniline contains no aromatic ring",
          "AlCl3 must donate a nitrogen atom",
          "Aniline cannot react with any reagent",
          "Nitrogen coordinates the Lewis acid and the ring becomes deactivated"
        ],
        "answer": 3,
        "explanation": "Lewis acid binding changes the substrate, invalidating a simple neutral-aniline activation argument."
      },
      {
        "question": "Acetanilide formation from aniline is primarily:",
        "options": [
          "Nitrogen acylation",
          "Ring Friedel–Crafts alkylation",
          "Nitrogen gas formation",
          "Addition of a beta hydrogen"
        ],
        "answer": 0,
        "explanation": "The new acyl group attaches to nitrogen; that is distinct from making a ring carbon–carbon bond."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: synthesis of amines by nitro reduction",
        "url": "https://openstax.org/books/organic-chemistry/pages/24-6-synthesis-of-amines"
      },
      {
        "title": "OpenStax: amine reactions and Hofmann elimination",
        "url": "https://openstax.org/books/organic-chemistry/pages/24-7-reactions-of-amines"
      },
      {
        "title": "IIT Kanpur SATHEE: aniline nitration and reagent compatibility",
        "url": "https://sathee.iitk.ac.in/ncert-books/udaan/udaan-che-12/chem-12-unit-13-organic-compounds-containing-nitrogen/"
      },
      {
        "title": "OpenStax: Friedel–Crafts substrate limitations",
        "url": "https://openstax.org/books/organic-chemistry/pages/16-3-alkylation-and-acylation-of-aromatic-rings-the-friedel-crafts-reaction"
      }
    ]
  },
  "biomolecules": {
    "base": 21,
    "quizBase": 32,
    "chapters": [
      {
        "title": "Glucose oxidation probes which terminal groups change",
        "formula": "Bromine-water model: gluconic acid; stronger nitric-acid model: glucaric / saccharic acid",
        "script": "Different reactions of glucose provide different structural evidence. In the familiar mild bromine water oxidation model, the accessible aldehyde end becomes a carboxyl group, giving the six carbon monocarboxylic product gluconic acid. In the stronger nitric acid oxidation comparison, both the aldehyde end and the terminal primary alcohol are oxidized, giving a six carbon dicarboxylic product called glucaric or saccharic acid. No carbon has been added in either change. Hydroxylamine reaction provides separate carbonyl evidence through oxime formation; it does not establish that every molecule remains in the open chain form in water. Acetylation to a pentaacetate supports the presence of five hydroxyl groups in glucose, while the cyclic equilibrium explains why a single static open chain drawing is incomplete. These observations answer different questions and should be combined rather than treated as interchangeable test names. For the supplied oxidation maps, first label carbon one and carbon six, then identify which end changes oxidation level. Product identity depends on the stated oxidant and conditions; a carboxylic acid name alone does not specify whether one or both terminal groups were oxidized.",
        "points": [
          "Mild Br₂-water oxidation · C1 aldehyde → carboxyl · Gluconic acid; one COOH",
          "Stronger nitric-acid comparison · C1 and terminal C6 oxidized · Glucaric / saccharic; two COOH",
          "Both retain six carbons · Oxime / pentaacetate add evidence · Carbonyl / five hydroxyl groups"
        ],
        "board": {
          "heading": "Glucose oxidation probes which terminal groups change",
          "columns": [
            "Structure / condition",
            "Atom / bond evidence",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Mild Br₂-water oxidation",
              "C1 aldehyde → carboxyl",
              "Gluconic acid; one COOH"
            ],
            [
              "Stronger nitric-acid comparison",
              "C1 and terminal C6 oxidized",
              "Glucaric / saccharic; two COOH"
            ],
            [
              "Both retain six carbons",
              "Oxime / pentaacetate add evidence",
              "Carbonyl / five hydroxyl groups"
            ]
          ]
        }
      },
      {
        "title": "Epimers differ at one specified stereocentre",
        "formula": "D-Glucose / D-mannose: C2 epimers; D-glucose / D-galactose: C4 epimers",
        "script": "A pair of epimers differs in configuration at one stereogenic centre while retaining the same connectivity and the other configurations. Compare the open chain Fischer projections of three D aldohexoses. From carbon two through carbon five, glucose has hydroxyl positions right, left, right, right. Mannose has left, left, right, right, differing only at carbon two. Galactose has right, left, left, right, differing from glucose only at carbon four. Thus glucose and mannose are carbon two epimers, while glucose and galactose are carbon four epimers. Mannose and galactose differ at two centres, so they are diastereomers but not epimers of one another. All three remain D sugars because the highest numbered stereogenic centre has the same relative configuration. D does not mean positive optical rotation: configuration and the measured sign of rotation are separate descriptors. Anomers are the special cyclic comparison at the newly created anomeric centre, not a synonym for changing any Fischer position. Always identify the carbon number and projection convention before calling two sugar drawings an epimeric pair.",
        "points": [
          "OH order C2 → C5 · Glucose R L R R · Mannose L L R R",
          "Galactose R L L R · Glucose differs at C4 · Mannose differs at C2",
          "Mannose versus galactose · Different at C2 and C4 · Diastereomers, not epimers"
        ],
        "board": {
          "heading": "Epimers differ at one specified stereocentre",
          "columns": [
            "Structure / condition",
            "Atom / bond evidence",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "OH order C2 → C5",
              "Glucose R L R R",
              "Mannose L L R R"
            ],
            [
              "Galactose R L L R",
              "Glucose differs at C4",
              "Mannose differs at C2"
            ],
            [
              "Mannose versus galactose",
              "Different at C2 and C4",
              "Diastereomers, not epimers"
            ]
          ]
        }
      },
      {
        "title": "Disulfide cross-links are not peptide bonds",
        "formula": "2 cysteine –SH → one –S–S– cross-link; no new peptide linkage",
        "script": "A protein can contain covalent links of different chemical types. A peptide linkage joins a carbonyl carbon to nitrogen along a polypeptide backbone. A disulfide instead joins sulfur atoms from two cysteine side chains after oxidation of their thiol groups. In formal atom bookkeeping, two thiols become one sulfur sulfur bond with loss of two hydrogen equivalents; this is not the condensation water loss used to count peptide assembly. Consider two separate linear tripeptide chains, each with one cysteine residue. Each chain has two peptide bonds, giving four in total. Joining the cysteine side chains with one interchain disulfide adds one cross link while leaving the peptide bond count at four. The connected structure still has two polypeptide backbones, not one newly lengthened six residue peptide backbone. Reducing that disulfide can separate the chains without hydrolysing their peptide bonds. Conversely, cutting a peptide bond is a backbone change and cannot be described solely as reducing sulfur. Distinguish side chain connectivity, chain count and backbone sequence before inferring which chemical treatment changed a protein sample.",
        "points": [
          "Two linear tripeptide chains · 2 peptide bonds per chain · 4 peptide bonds total",
          "One cysteine –SH per chain · Oxidation joins sulfur atoms · One interchain S–S cross-link",
          "After disulfide formation · Backbone sequences unchanged · Still four peptide bonds"
        ],
        "board": {
          "heading": "Disulfide cross-links are not peptide bonds",
          "columns": [
            "Structure / condition",
            "Atom / bond evidence",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Two linear tripeptide chains",
              "2 peptide bonds per chain",
              "4 peptide bonds total"
            ],
            [
              "One cysteine –SH per chain",
              "Oxidation joins sulfur atoms",
              "One interchain S–S cross-link"
            ],
            [
              "After disulfide formation",
              "Backbone sequences unchanged",
              "Still four peptide bonds"
            ]
          ]
        }
      },
      {
        "title": "DNA backbone links and base-pair hydrogen bonds count differently",
        "formula": "Two intact linear N-nucleotide strands: 2(N−1) internal phosphodiester linkages",
        "script": "DNA contains both covalent backbone links and noncovalent interactions between complementary bases. Count them separately. Consider an intact linear double stranded fragment with ten base pairs, six adenine thymine pairs and four guanine cytosine pairs. There are twenty nucleotides, ten in each strand. Within each linear strand, ten nucleotide units are joined by nine internal phosphodiester bridges, giving eighteen internucleotide linkages in both backbones. A terminal phosphate does not create an extra bridge to a missing nucleotide. Using the standard paired base model, the six adenine thymine pairs contribute twelve hydrogen bonds and the four guanine cytosine pairs contribute twelve more, twenty four total. These hydrogen bonds are not the covalent links that hold each individual strand together. Count one internucleotide phosphodiester linkage per joining phosphate bridge, rather than confusing that bridge with each individual phosphorus oxygen ester bond. Circular closure, nicks or unpaired bases would change the assumptions. Strand separation can disrupt base pairing without requiring hydrolysis of all eighteen backbone linkages. Always state linearity, strand length and pairing before applying a counting shortcut.",
        "points": [
          "10 paired positions · 10 nucleotides per strand · 20 nucleotides total",
          "Two intact linear backbones · 2 × (10−1) · 18 phosphodiester linkages",
          "6 AT pairs + 4 GC pairs · 6×2 + 4×3 · 24 base-pair H bonds"
        ],
        "board": {
          "heading": "DNA backbone links and base-pair hydrogen bonds count differently",
          "columns": [
            "Structure / condition",
            "Atom / bond evidence",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "10 paired positions",
              "10 nucleotides per strand",
              "20 nucleotides total"
            ],
            [
              "Two intact linear backbones",
              "2 × (10−1)",
              "18 phosphodiester linkages"
            ],
            [
              "6 AT pairs + 4 GC pairs",
              "6×2 + 4×3",
              "24 base-pair H bonds"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "The familiar mild bromine-water oxidation product of glucose is:",
        "options": [
          "Glucose pentaacetate",
          "Benzyl alcohol",
          "Gluconic acid",
          "Nitrobenzene"
        ],
        "answer": 2,
        "explanation": "This supplied mild oxidation changes the accessible aldehyde end to a carboxyl group while retaining all six carbons."
      },
      {
        "question": "Compared with gluconic acid, glucaric/saccharic acid in the stated stronger oxidation model has:",
        "options": [
          "One fewer carbon",
          "No carboxyl group",
          "An added benzene ring",
          "Two carboxyl ends instead of one"
        ],
        "answer": 3,
        "explanation": "Both terminal C1 and C6 are oxidized in the familiar nitric-acid comparison; the carbon count remains six."
      },
      {
        "question": "D-Glucose and D-mannose differ at which Fischer stereocentre?",
        "options": [
          "C2",
          "C3",
          "C4",
          "C5"
        ],
        "answer": 0,
        "explanation": "Their C2–C5 OH sequences RLRR and LLRR differ only at C2."
      },
      {
        "question": "D-Mannose and D-galactose, with OH sequences LLRR and RLLR, are:",
        "options": [
          "Enantiomers with every centre inverted",
          "Diastereomers differing at two centres, not epimers",
          "Identical compounds",
          "Anomers differing only at a new cyclic C1"
        ],
        "answer": 1,
        "explanation": "They differ at C2 and C4, so they do not meet the one-centre epimer criterion."
      },
      {
        "question": "Two linear tripeptides each have one cysteine. After one interchain disulfide forms, total peptide bonds are:",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": 2,
        "explanation": "Each three-residue backbone has two peptide bonds; the S–S bridge adds no peptide bond."
      },
      {
        "question": "Reducing only that interchain disulfide directly changes:",
        "options": [
          "Every peptide bond into free amino acids",
          "The nucleotide backbone",
          "The number of carbonyl carbons",
          "The sulfur side-chain cross-link while preserving peptide backbones"
        ],
        "answer": 3,
        "explanation": "Disulfide reduction and peptide hydrolysis affect different covalent connections."
      },
      {
        "question": "Two intact linear DNA strands of ten nucleotides each contain internal phosphodiester linkages total:",
        "options": [
          "18",
          "20",
          "24",
          "9"
        ],
        "answer": 0,
        "explanation": "Each linear strand has N−1 joining bridges, so the total is 2×9=18."
      },
      {
        "question": "In the standard pairing model, a ten-base-pair fragment with 6 AT and 4 GC pairs contains base-pair hydrogen bonds:",
        "options": [
          "18",
          "24",
          "20",
          "30"
        ],
        "answer": 1,
        "explanation": "Use two per AT and three per GC pair: 6×2+4×3=24."
      }
    ],
    "sources": [
      {
        "title": "IIT Kanpur SATHEE: NCERT glucose structural evidence",
        "url": "https://sathee.iitk.ac.in/ncert-books/jee-ncert-books/jee-nb-che-12/chem-12-unit-14-biomolecules/"
      },
      {
        "title": "Kwantlen Polytechnic University: carbohydrate configurations and epimers",
        "url": "https://kpu.pressbooks.pub/organicchemistry2/chapter/9-1-classification-and-configurations-of-carbohydrates-and-monosaccharides/"
      },
      {
        "title": "Essentials of Glycobiology: monosaccharide epimers",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK579981/?report=printable"
      },
      {
        "title": "OpenStax: protein peptide and disulfide connections",
        "url": "https://openstax.org/books/biology-2e/pages/3-4-proteins"
      },
      {
        "title": "OpenStax: nucleic acid connectivity and pairing",
        "url": "https://openstax.org/books/biology-2e/pages/3-5-nucleic-acids"
      }
    ]
  }
} as const;
