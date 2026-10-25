// Authored by scripts/expand-hydrocarbon-halide-evidence.mjs.
export const hydrocarbonHalideEvidenceAdditions = {
  "hydrocarbons": {
    "base": 21,
    "quizBase": 32,
    "chapters": [
      {
        "title": "Anti addition distinguishes meso from racemic products",
        "formula": "trans-But-2-ene → meso dibromide; cis-but-2-ene → (2R,3R)/(2S,3S) pair in the ideal anti model",
        "script": "Stereospecific addition can preserve information about an alkene's starting geometry. Consider the usual bromonium mediated anti addition to but two ene in a suitable non nucleophilic medium. The trans alkene gives meso two three dibromobutane, with opposite configurations at its two stereogenic carbons and internal symmetry. The cis alkene instead gives the two enantiomeric configurations two R three R and two S three S in equal amounts under achiral conditions. The meso product and the racemic mixture can both show zero net optical rotation, but for different reasons. A meso molecule is achiral despite containing stereogenic centres; a racemic sample contains chiral molecules whose rotations cancel. Do not identify these outcomes merely from the word anti, since chain rotation can change a product drawing without changing its configuration. Track the initial alkene geometry and the three dimensional addition together. Both transformations retain four carbons and add two bromines, giving the same constitutional dibromide formula. A competing nucleophile such as water can change the functional product, so this comparison assumes the stated dibromide pathway.",
        "points": [
          "trans-But-2-ene; anti Br₂ addition · Opposite C2 / C3 configurations · Meso 2,3-dibromobutane",
          "cis-But-2-ene; achiral conditions · (2R,3R) and (2S,3S) · Racemic enantiomer pair",
          "Both can show zero sample rotation · Meso molecule versus racemic sample · Same formula, different stereochemistry"
        ],
        "board": {
          "heading": "Anti addition distinguishes meso from racemic products",
          "columns": [
            "Specified structure",
            "Reaction / observation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "trans-But-2-ene; anti Br₂ addition",
              "Opposite C2 / C3 configurations",
              "Meso 2,3-dibromobutane"
            ],
            [
              "cis-But-2-ene; achiral conditions",
              "(2R,3R) and (2S,3S)",
              "Racemic enantiomer pair"
            ],
            [
              "Both can show zero sample rotation",
              "Meso molecule versus racemic sample",
              "Same formula, different stereochemistry"
            ]
          ]
        }
      },
      {
        "title": "Strong alkyne cleavage counts both triple-bond carbons",
        "formula": "Pent-2-yne → C2 acid + C3 acid; pent-1-yne → C4 acid + CO₂ in the stated oxidation model",
        "script": "Strong oxidative cleavage of an alkyne does not give the same products as its ordinary hydration. In a supplied cleavage model, each carbon of an internal triple bond becomes a carboxyl carbon in one fragment after the stated acidic workup. Pent two yne therefore gives ethanoic acid with two carbons and propanoic acid with three. The triple bond divided the five carbon chain into those two pieces; no extra carbon entered with oxygen. For pent one yne, the terminal triple bond carbon instead reaches carbon dioxide in the complete oxidation model, while the other fragment is four carbon butanoic acid. Counting only the isolated organic acid would miss one starting carbon. Compare these outcomes with a hydration map, which retains all five carbons in one carbonyl product rather than cleaving the skeleton. Actual oxidation can be more complex and yields need not be quantitative, so the named products belong to the stated ideal cleavage endpoint. Mark both original triple bond carbons before naming the fragments, and include inorganic carbon products when checking total carbon conservation.",
        "points": [
          "Pent-2-yne: internal C≡C · Ethanoic + propanoic acids · Carbon count 2 + 3 = 5",
          "Pent-1-yne: terminal C≡CH · Butanoic acid + CO₂ · Carbon count 4 + 1 = 5",
          "Compare complete oxidation / hydration · Cleavage versus one carbonyl skeleton · Endpoint and workup matter"
        ],
        "board": {
          "heading": "Strong alkyne cleavage counts both triple-bond carbons",
          "columns": [
            "Specified structure",
            "Reaction / observation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Pent-2-yne: internal C≡C",
              "Ethanoic + propanoic acids",
              "Carbon count 2 + 3 = 5"
            ],
            [
              "Pent-1-yne: terminal C≡CH",
              "Butanoic acid + CO₂",
              "Carbon count 4 + 1 = 5"
            ],
            [
              "Compare complete oxidation / hydration",
              "Cleavage versus one carbonyl skeleton",
              "Endpoint and workup matter"
            ]
          ]
        }
      },
      {
        "title": "Aromatic sulfonation is a reversible substitution map",
        "formula": "C₆H₆ + SO₃ ⇌ C₆H₅SO₃H; substitution changes a ring H, not the carbon skeleton",
        "script": "Aromatic sulfonation is a useful exception to treating every substitution arrow as irreversible. In the conceptual benzene and sulfur trioxide map, a ring hydrogen is replaced by a sulfonic acid group while the six carbon framework remains intact. Sulfur trioxide and strongly acidic sulfonating media favour the forward transformation; suitable hot dilute aqueous acidic conditions can favour removal of the sulfonic group and return a ring hydrogen. The overall direction depends on the specified medium and equilibrium, not just on recognizing a named reaction. A sulfonic acid group deactivates the ring and is usually meta directing toward further electrophilic substitution. It can also occupy a position temporarily in a supporting synthesis plan, but removal requires a separate stated transformation. Do not confuse sulfonation with attaching an alkyl group or with a sulfone containing two carbon groups on sulfur. The formula benzene plus sulfur trioxide balances without losing carbon or generating an extra ring. This is a functional group and reversibility comparison, not a set of experimental preparation conditions or a promise that every substituted aromatic substrate follows the same selective pathway.",
        "points": [
          "Benzene + SO₃ · Ring H replaced by SO₃H · Six ring carbons retained",
          "Sulfonation / desulfonation · Direction depends on medium · Reversible substitution map",
          "Ring-bound SO₃H group · Deactivating; usually meta directing · Temporary occupation needs explicit removal"
        ],
        "board": {
          "heading": "Aromatic sulfonation is a reversible substitution map",
          "columns": [
            "Specified structure",
            "Reaction / observation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Benzene + SO₃",
              "Ring H replaced by SO₃H",
              "Six ring carbons retained"
            ],
            [
              "Sulfonation / desulfonation",
              "Direction depends on medium",
              "Reversible substitution map"
            ],
            [
              "Ring-bound SO₃H group",
              "Deactivating; usually meta directing",
              "Temporary occupation needs explicit removal"
            ]
          ]
        }
      },
      {
        "title": "Combustion gas volumes can determine a hydrocarbon formula",
        "formula": "CxHy uses x+y/4 volumes O₂ and forms x volumes CO₂ per volume hydrocarbon",
        "script": "Supplied gas volume data can identify a molecular formula under carefully stated assumptions. Consider twenty millilitres of one pure gaseous hydrocarbon mixed with one hundred thirty millilitres of oxygen. Complete combustion is followed by cooling so water condenses. At the same comparison temperature and pressure, the remaining gas volume is ninety millilitres. A separate selective carbon dioxide absorption leaves thirty millilitres of oxygen. Thus carbon dioxide occupied sixty millilitres and oxygen consumed was one hundred. Dividing by the original hydrocarbon volume gives three carbon dioxide volumes and five oxygen volumes per hydrocarbon volume. In the equation for carbon x hydrogen y, carbon dioxide coefficient is x and oxygen coefficient is x plus y over four. Therefore x is three and y is eight: the supplied hydrocarbon is propane. The cooled ninety millilitres is not pure carbon dioxide because excess oxygen remains. The calculation assumes only the stated gases, complete combustion, selective absorption and negligible residual water vapour. It is interpretation of idealized observations, not an instruction to ignite a gas mixture.",
        "points": [
          "Initial: 20 mL hydrocarbon + 130 O₂ · After cooling: 90 mL gas · Water condensed; excess O₂ remains",
          "After CO₂ absorption: 30 mL O₂ · CO₂=90−30=60; O₂ used=100 · Ratios per fuel volume: 3 and 5",
          "x=3; x+y/4=5 · y=4(5−3)=8 · Molecular formula C₃H₈"
        ],
        "board": {
          "heading": "Combustion gas volumes can determine a hydrocarbon formula",
          "columns": [
            "Specified structure",
            "Reaction / observation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Initial: 20 mL hydrocarbon + 130 O₂",
              "After cooling: 90 mL gas",
              "Water condensed; excess O₂ remains"
            ],
            [
              "After CO₂ absorption: 30 mL O₂",
              "CO₂=90−30=60; O₂ used=100",
              "Ratios per fuel volume: 3 and 5"
            ],
            [
              "x=3; x+y/4=5",
              "y=4(5−3)=8",
              "Molecular formula C₃H₈"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Ideal anti bromination of trans-but-2-ene in a suitable non-nucleophilic medium gives:",
        "options": [
          "Meso 2,3-dibromobutane",
          "Only (2R,3R) product",
          "An alkane without bromine",
          "A seven-carbon product"
        ],
        "answer": 0,
        "explanation": "The trans alkene gives the internally symmetric meso dibromide in the standard anti-addition model."
      },
      {
        "question": "Why can both a meso dibromide sample and a racemic dibromide sample show zero net rotation?",
        "options": [
          "Both contain no stereogenic centres",
          "Meso molecules are achiral; opposite enantiomer rotations cancel in a racemate",
          "They must be the same stereoisomer",
          "Anti addition always destroys carbon atoms"
        ],
        "answer": 1,
        "explanation": "Zero sample rotation does not distinguish molecular achirality from cancellation by enantiomers."
      },
      {
        "question": "The supplied complete oxidative cleavage of pent-2-yne yields:",
        "options": [
          "Two propanoic acids",
          "Propanone only",
          "Ethanoic acid and propanoic acid",
          "Butanoic acid only"
        ],
        "answer": 2,
        "explanation": "The internal triple bond divides the five carbons into C2 and C3 acid fragments."
      },
      {
        "question": "In the stated complete oxidation endpoint, pent-1-yne gives:",
        "options": [
          "Pentanal only",
          "Two ethanoic acids",
          "Methanol and propene",
          "Butanoic acid and carbon dioxide"
        ],
        "answer": 3,
        "explanation": "The terminal alkyne carbon becomes CO2 while the other four carbons form butanoic acid."
      },
      {
        "question": "The conceptual aromatic sulfonation map is best described as:",
        "options": [
          "A reversible ring substitution whose direction depends on medium",
          "An obligatory carbon–carbon addition",
          "An irreversible removal of one ring carbon",
          "Formation of an alkyl halide"
        ],
        "answer": 0,
        "explanation": "Sulfonation and desulfonation interconvert ring H and the sulfonic group under different stated conditions."
      },
      {
        "question": "A ring-bound sulfonic acid group is usually:",
        "options": [
          "Activating and only ortho directing",
          "Deactivating and meta directing",
          "A source of an extra ring carbon",
          "A neutral alkyl group"
        ],
        "answer": 1,
        "explanation": "SO3H deactivates the ring and directs further ordinary electrophilic substitution mainly meta."
      },
      {
        "question": "After cooling, a combustion residue is 90 mL; selective CO2 absorption leaves 30 mL O2. The CO2 volume was:",
        "options": [
          "90 mL",
          "30 mL",
          "60 mL",
          "120 mL"
        ],
        "answer": 2,
        "explanation": "Subtract the residual oxygen from the original cooled gas mixture."
      },
      {
        "question": "A 20 mL pure hydrocarbon consumes 100 mL O2 and gives 60 mL CO2 at matching T,p. Its formula is:",
        "options": [
          "C2H4",
          "C3H6",
          "C4H10",
          "C3H8"
        ],
        "answer": 3,
        "explanation": "x=60/20=3 and x+y/4=100/20=5, hence y=8."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: anti halogenation of alkenes",
        "url": "https://openstax.org/books/organic-chemistry/pages/8-2-halogenation-of-alkenes-addition-of-x2"
      },
      {
        "title": "OpenStax: oxidative cleavage of alkynes",
        "url": "https://openstax.org/books/organic-chemistry/pages/9-6-oxidative-cleavage-of-alkynes"
      },
      {
        "title": "OpenStax: aromatic sulfonation and other substitutions",
        "url": "https://openstax.org/books/organic-chemistry/pages/16-2-other-aromatic-substitutions"
      },
      {
        "title": "OpenStax: chemical equation stoichiometry",
        "url": "https://openstax.org/books/chemistry-2e/pages/4-3-reaction-stoichiometry"
      }
    ]
  },
  "organic-halogens": {
    "base": 21,
    "quizBase": 32,
    "chapters": [
      {
        "title": "A cyclohexane E2 pathway needs the right axial hydrogen",
        "formula": "Ordinary chair E2: axial leaving group and anti-periplanar axial β-H on a neighbouring carbon",
        "script": "Chair geometry can restrict elimination before alkene substitution preferences are compared. In the ordinary cyclohexane chair E two model, a leaving group and the removed beta hydrogen must be trans diaxial: axial on adjacent carbons and pointing in opposite directions. Consider a supplied chair with bromine axial up at carbon one. Carbon two has methyl axial down, so its hydrogen is equatorial and cannot supply the required axial hydrogen on that side. Carbon six instead has an axial down hydrogen. Elimination can therefore form the bond between carbons one and six in this chair, rather than the more substituted alternative between one and two. The methyl group occupies a needed hydrogen position; it does not itself become a leaving group. If bromine is equatorial in another chair, the ordinary trans diaxial pathway requires a suitable ring flip first. A flip exchanges axial and equatorial positions while retaining each substituent's up or down identity. This is an analysis of the supplied chair geometry, not a universal rule that the most substituted alkene always wins or that all equatorial halides are permanently unable to eliminate.",
        "points": [
          "C1: Br axial up · Adjacent β-H must be axial down · Trans-diaxial requirement",
          "C2: CH₃ axial down · C2-H is equatorial · C1=C2 route blocked in this chair",
          "C6: H axial down · Eligible C1 / C6 pair · Geometry checked before substitution rule"
        ],
        "board": {
          "heading": "A cyclohexane E2 pathway needs the right axial hydrogen",
          "columns": [
            "Specified structure",
            "Reaction / observation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "C1: Br axial up",
              "Adjacent β-H must be axial down",
              "Trans-diaxial requirement"
            ],
            [
              "C2: CH₃ axial down",
              "C2-H is equatorial",
              "C1=C2 route blocked in this chair"
            ],
            [
              "C6: H axial down",
              "Eligible C1 / C6 pair",
              "Geometry checked before substitution rule"
            ]
          ]
        }
      },
      {
        "title": "Solvent changes nucleophile availability in SN2",
        "formula": "Polar protic solvation can suppress anionic nucleophilicity; polar aprotic media often favour suitable SN2 reactions",
        "script": "A nucleophile ranking must state the solvent and the reaction being compared. Polar protic solvents such as water or alcohols can form hydrogen bond shells around anionic nucleophiles. This stabilization can reduce their availability for backside attack on a suitable alkyl substrate. Polar aprotic solvents such as acetone or dimethyl sulfoxide often support faster S N two reactions of suitable dissolved anionic nucleophiles, because the solvation environment is different. Do not call those anions completely unsolvated or infer an identical rate increase for every salt. Counterions, solubility, substrate crowding, temperature and competing elimination still matter. In an original matched rate dataset, let the same substrate and nucleophile concentrations give rate constant zero point zero one zero and zero point two zero zero litre per mole per second in two stated solvents. The second reaction is twenty times faster at the same concentrations, but this ratio is supplied evidence for that comparison rather than a universal solvent constant. Basicity concerns proton acceptance, while nucleophilicity concerns reaction with the electrophilic substrate; the two descriptors need not give one solvent independent ordering.",
        "points": [
          "Polar protic medium · Hydrogen-bond solvation of anions · Can reduce SN2 availability",
          "Polar aprotic comparison · Different ion-solvation environment · Often faster for suitable dissolved anions",
          "Supplied k: .010 vs .200 L/(mol s) · Matched concentrations; ratio .200/.010 · 20-fold rate ratio, not universal"
        ],
        "board": {
          "heading": "Solvent changes nucleophile availability in SN2",
          "columns": [
            "Specified structure",
            "Reaction / observation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Polar protic medium",
              "Hydrogen-bond solvation of anions",
              "Can reduce SN2 availability"
            ],
            [
              "Polar aprotic comparison",
              "Different ion-solvation environment",
              "Often faster for suitable dissolved anions"
            ],
            [
              "Supplied k: .010 vs .200 L/(mol s)",
              "Matched concentrations; ratio .200/.010",
              "20-fold rate ratio, not universal"
            ]
          ]
        }
      },
      {
        "title": "Silver-nitrate timing probes halide release, not total halogen",
        "formula": "RX must release X⁻ before Ag⁺ + X⁻ → AgX; observation depends on the whole test system",
        "script": "A silver halide precipitate reports available halide ions, not merely a halogen atom somewhere in an organic formula. In a supplied silver nitrate in ethanol comparison, ionization prone tertiary, benzylic or allylic halides may release halide more readily than an ordinary primary substrate. Silver ion can itself assist halide departure, so this is not a measurement of an entirely unaffected isolated carbon halogen bond. Aryl and vinyl halides do not follow the same ordinary ionization pathway. A negative or slow result therefore does not prove that an unknown contains no covalently bonded halogen. Time to visible precipitation also depends on temperature, solvent composition, concentrations, mixing and the detection threshold. Compare known reference compounds under matching conditions before assigning a structural class. The precipitate colour or its subsequent solubility may help distinguish the halide, but one timing observation alone does not uniquely identify an organic molecule or prove a single mechanism under all conditions. This chapter interprets a stipulated test system rather than giving an experimental recipe or transferring its ranking to a polar aprotic S N two reaction.",
        "points": [
          "Silver nitrate / ethanol comparison · Available X⁻ gives AgX · Halide must first be released",
          "Ionization-prone substrates · Tertiary / benzylic / allylic can respond rapidly · System and reference conditions matter",
          "Aryl or vinyl halide may respond poorly · Slow result ≠ no organic halogen · Do not transplant ranking to SN2"
        ],
        "board": {
          "heading": "Silver-nitrate timing probes halide release, not total halogen",
          "columns": [
            "Specified structure",
            "Reaction / observation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Silver nitrate / ethanol comparison",
              "Available X⁻ gives AgX",
              "Halide must first be released"
            ],
            [
              "Ionization-prone substrates",
              "Tertiary / benzylic / allylic can respond rapidly",
              "System and reference conditions matter"
            ],
            [
              "Aryl or vinyl halide may respond poorly",
              "Slow result ≠ no organic halogen",
              "Do not transplant ranking to SN2"
            ]
          ]
        }
      },
      {
        "title": "Elemental halogen evidence needs a clean ionic extract",
        "formula": "Covalent organic halogen → prepared ionic extract; reagent chloride can create a false positive",
        "script": "Elemental analysis and direct substitution tests answer different questions. In the standard sodium fusion concept, covalently bound halogen is converted into an ionic form so a prepared extract can be examined for chloride, bromide or iodide. Simply mixing an unchanged organochlorine compound with aqueous silver nitrate need not release its chlorine as chloride. The analysis scheme also needs controls on the reagents and interfering ions. Introducing hydrochloric acid would add chloride from outside the sample and could give silver chloride even when the sample contributed none. The prescribed nitric acid medium avoids that particular added chloride source. Cyanide or sulfide in an untreated extract can also interfere with silver precipitation, which is why the specified interference removal is part of the analytical scheme. This is interpretation of a prepared extract and its controls, not instructions for conducting sodium fusion or acid treatment. Once ionic chloride is independently established, the net precipitation equation is one silver ion plus one chloride giving one silver chloride formula unit. Keep the original organic molecule, the converted extract species and reagent contamination as three separate sources of evidence.",
        "points": [
          "Organic C–Cl is covalent · Prepared extract converts halogen to ions · Direct AgNO₃ may not detect it",
          "HCl introduces external chloride · AgCl could come from reagent · Nitric acid avoids that chloride source",
          "CN⁻ / S²⁻ can interfere · Use a controlled prepared-extract scheme · Ag⁺ + Cl⁻ → AgCl is 1:1"
        ],
        "board": {
          "heading": "Elemental halogen evidence needs a clean ionic extract",
          "columns": [
            "Specified structure",
            "Reaction / observation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Organic C–Cl is covalent",
              "Prepared extract converts halogen to ions",
              "Direct AgNO₃ may not detect it"
            ],
            [
              "HCl introduces external chloride",
              "AgCl could come from reagent",
              "Nitric acid avoids that chloride source"
            ],
            [
              "CN⁻ / S²⁻ can interfere",
              "Use a controlled prepared-extract scheme",
              "Ag⁺ + Cl⁻ → AgCl is 1:1"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "The ordinary E2 requirement for a cyclohexane chair is:",
        "options": [
          "Any equatorial H and any halogen",
          "A trans-diaxial leaving group and adjacent beta H",
          "A beta methyl group acting as a leaving group",
          "A planar aromatic ring"
        ],
        "answer": 1,
        "explanation": "The usual anti-periplanar geometry in a chair requires appropriately opposed axial groups."
      },
      {
        "question": "In the supplied chair, C1-Br is axial up, C2-CH3 axial down and C6-H axial down. Which new double bond is eligible?",
        "options": [
          "C1=C2 only",
          "C2=C3 only",
          "C1=C6",
          "No bond can form even after all ring flips"
        ],
        "answer": 2,
        "explanation": "The methyl group occupies the C2 axial site, but C6 provides the required axial beta H."
      },
      {
        "question": "Why can a polar protic solvent slow a suitable anionic SN2 nucleophile?",
        "options": [
          "It always removes every electron",
          "It converts every substrate into an aryl halide",
          "It makes the reaction stoichiometry zero",
          "Hydrogen-bond solvation can reduce the anion’s reaction availability"
        ],
        "answer": 3,
        "explanation": "The effect concerns solvation of the reacting nucleophile, not a universal change in its identity."
      },
      {
        "question": "Matched SN2 datasets have k=.010 and .200 L/(mol s) at equal reactant concentrations. The rate ratio second/first is:",
        "options": [
          "20",
          "2",
          ".05",
          "2000"
        ],
        "answer": 0,
        "explanation": "The concentration factors cancel in this specified comparison, leaving .200/.010=20."
      },
      {
        "question": "A slow silver nitrate/ethanol response from chlorobenzene means:",
        "options": [
          "The molecule certainly contains no chlorine",
          "The covalent aryl C–Cl does not release chloride readily through that ordinary test pathway",
          "It is necessarily a primary alkyl chloride",
          "All chloride salts also react equally slowly"
        ],
        "answer": 1,
        "explanation": "Elemental presence is distinct from release of a free halide under a particular reaction system."
      },
      {
        "question": "Which is a valid limitation of interpreting precipitation time?",
        "options": [
          "It uniquely identifies every organic structure",
          "It is independent of temperature",
          "It depends on solvent, concentration and the detection threshold as well as substrate",
          "It directly counts total covalent halogen atoms without conversion"
        ],
        "answer": 2,
        "explanation": "Timing observations need controlled comparisons and are not a universal mechanism or identity test."
      },
      {
        "question": "A reagent blank contains .00100 mol HCl and excess Ag+. If chloride precipitates quantitatively, reagent-derived AgCl amount is:",
        "options": [
          "0 mol",
          ".000500 mol",
          ".00200 mol",
          ".00100 mol"
        ],
        "answer": 3,
        "explanation": "Added HCl supplies .00100 mol chloride, which can give .00100 mol AgCl even without sample-derived chloride."
      },
      {
        "question": "The conceptual purpose of converting organic halogen into a prepared ionic extract is:",
        "options": [
          "To make ionic halide evidence accessible after controlled conversion",
          "To add an extra carbon to every organic molecule",
          "To prove all haloarenes undergo rapid SN1",
          "To eliminate the need for interference controls"
        ],
        "answer": 0,
        "explanation": "The original covalent species and the analyzable ionic halide are different forms; controls still matter."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: E2 reactions and cyclohexane conformation",
        "url": "https://openstax.org/books/organic-chemistry/pages/11-9-the-e2-reaction-and-cyclohexane-conformation"
      },
      {
        "title": "OpenStax: substrate, nucleophile and solvent effects on SN2",
        "url": "https://openstax.org/books/organic-chemistry/pages/11-3-characteristics-of-the-sn2-reaction"
      },
      {
        "title": "University of Delaware: silver nitrate and alkyl-halide evidence",
        "url": "https://www1.udel.edu/chem/CHEM322/Handouts/unknowns_lab_handout.pdf"
      },
      {
        "title": "Michigan State University: silver-assisted alkyl-halide ionization",
        "url": "https://www2.chemistry.msu.edu/faculty/reusch/VirtTxtJml/alhalrx2.htm"
      },
      {
        "title": "IIT Kanpur SATHEE: qualitative halogen analysis",
        "url": "https://sathee.iitk.ac.in/important-formula/chemistry/qualitative_analysis/"
      }
    ]
  }
} as const;
