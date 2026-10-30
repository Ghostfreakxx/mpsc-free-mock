// Authored by scripts/expand-mole-organic-basis.mjs.
export const moleOrganicBasisAdditions = {
  "mole-concept": {
    "chapters": [
      {
        "title": "Mixing solutions conserves solute amount before it determines molarity",
        "formula": "nfinal=C1V1+C2V2; Cfinal=nfinal/Vfinal; final solution volume is supplied, not assumed additive",
        "script": "When two solutions of the same nonreacting solute are mixed, their solute amounts add, but their molarities do not. Convert every measured solution volume to litres before multiplying by molarity. Suppose one hundred millilitres of a one molar solution is combined with two hundred millilitres of a zero point five molar solution. Each portion contributes zero point one mole, so the final solute amount is zero point two mole. If the final measured solution volume is two hundred eighty-five millilitres, the final molarity is zero point two divided by zero point two eight five, approximately zero point seven zero two molar. Dividing by three hundred millilitres would silently impose an additive volume assumption that contradicts the stated measurement. The volume change does not create or destroy solute particles in this selected model. Molarity uses the volume of the complete solution, not the amount of solvent poured in. If a chemical reaction, precipitation or evaporation occurs, its species balance must be included separately. The correct order is to conserve the named solute, establish the final solution volume, and only then calculate concentration.",
        "points": [
          ".100 L ×1.00 M · .100 mol solute · Same nonreacting solute",
          ".200 L ×.500 M · .100 mol solute · Total amount .200 mol",
          "Measured final volume .285 L · Final C=.702 M · Do not assume .300 L"
        ],
        "board": {
          "heading": "Amounts add; final molarity uses the actual final volume",
          "columns": [
            "Given / structure",
            "Result / inference",
            "Condition / limit"
          ],
          "rows": [
            [
              ".100 L ×1.00 M",
              ".100 mol solute",
              "Same nonreacting solute"
            ],
            [
              ".200 L ×.500 M",
              ".100 mol solute",
              "Total amount .200 mol"
            ],
            [
              "Measured final volume .285 L",
              "Final C=.702 M",
              "Do not assume .300 L"
            ]
          ]
        }
      },
      {
        "title": "Repeated withdrawal and replacement remove a fraction of the remaining solute",
        "formula": "For well-mixed fixed volume V: n after k cycles=n0(1−v/V)^k",
        "script": "A withdrawal followed by replacement is not the same as adding solvent without removing any solute. Start with one hundred millilitres of a zero point four zero zero molar solution. It contains zero point zero four zero mole of solute. Remove a well mixed twenty-five millilitre portion, then restore the total volume to one hundred millilitres using pure solvent. One quarter of the solute has been removed, leaving zero point zero three zero mole and a concentration of zero point three zero zero molar. Repeat the same withdrawal and replacement once more after mixing. This second portion contains only zero point zero zero seven five mole because the solution is already diluted. The remaining amount is zero point zero two two five mole, giving zero point two two five molar in the restored volume. The total removed amount is zero point zero one seven five mole. Multiplying the original concentration by the total withdrawn volume would overestimate that removal. The geometric factor is one minus the withdrawn fraction for each complete cycle. This assumes uniform mixing, identical restored volumes and no reaction or solute in the replacement solvent.",
        "points": [
          "Initial .100 L at .400 M · .0400 mol · Well mixed before each draw",
          "Remove .025 L, restore twice · .0400×(.75)²=.0225 mol · Final concentration .225 M",
          "First removal .0100 mol · Second removal .0075 mol · Total removed .0175 mol"
        ],
        "board": {
          "heading": "Each withdrawal samples the concentration at that stage",
          "columns": [
            "Given / structure",
            "Result / inference",
            "Condition / limit"
          ],
          "rows": [
            [
              "Initial .100 L at .400 M",
              ".0400 mol",
              "Well mixed before each draw"
            ],
            [
              "Remove .025 L, restore twice",
              ".0400×(.75)²=.0225 mol",
              "Final concentration .225 M"
            ],
            [
              "First removal .0100 mol",
              "Second removal .0075 mol",
              "Total removed .0175 mol"
            ]
          ]
        }
      },
      {
        "title": "Excess oxygen and dry combustion gas use different mole bases",
        "formula": "CH4+2O2→CO2+2H2O; stipulated oxidizer 20 mol%O2,80 mol%N2; dry excludes product water",
        "script": "A combustion gas calculation must state both the oxygen excess and whether water remains in the measured gas. Use a supplied ideal oxidizer containing twenty mole percent oxygen and eighty mole percent inert nitrogen. This is a simplified mixture, not an exact composition of atmospheric air. Complete combustion of zero point one zero zero mole methane needs zero point two zero zero mole oxygen. Twenty percent excess relative to that stoichiometric requirement supplies zero point two four zero mole oxygen and zero point nine six zero mole nitrogen. The ideal products contain zero point one zero zero mole carbon dioxide, zero point two zero zero mole water, zero point zero four zero mole unused oxygen and the unchanged nitrogen. If all water is removed and the other gas amounts are unaffected, the dry total is one point one zero zero mole. The dry carbon dioxide mole fraction is one eleventh. If all product water instead remains vapour, the wet total is one point three zero zero mole and the corresponding fraction is one thirteenth. These are stipulated gas ledgers, excluding dissociation, incomplete combustion and nitrogen reactions. Changing the denominator changes the reported composition without changing carbon dioxide production.",
        "points": [
          ".100 mol CH4;20% excess O2 · O2 feed .240;N2 feed .960 mol · Supplied 20/80 oxidizer",
          "Dry CO2 .100;O2 .040;N2 .960 · Total1.100 mol; xCO2=1/11 · All water removed",
          "Wet adds .200 mol H2O · Total1.300 mol; xCO2=1/13 · All product water vapour"
        ],
        "board": {
          "heading": "Excess is relative to required oxygen; dry excludes water",
          "columns": [
            "Given / structure",
            "Result / inference",
            "Condition / limit"
          ],
          "rows": [
            [
              ".100 mol CH4;20% excess O2",
              "O2 feed .240;N2 feed .960 mol",
              "Supplied 20/80 oxidizer"
            ],
            [
              "Dry CO2 .100;O2 .040;N2 .960",
              "Total1.100 mol; xCO2=1/11",
              "All water removed"
            ],
            [
              "Wet adds .200 mol H2O",
              "Total1.300 mol; xCO2=1/13",
              "All product water vapour"
            ]
          ]
        }
      },
      {
        "title": "Moisture and dry-solid assay require two mass denominators",
        "formula": "Active mass=wet mass×(1−moisture fraction)×dry-solid active fraction",
        "script": "A statement of purity must identify which material supplies the denominator. Consider a ten gram as received sample containing twenty percent water by mass. The dry solid mass is eight grams. If an independent assay says that seventy-five percent of those dry solids is the active compound, its active mass is six grams. The wet sample therefore contains sixty percent active material by mass, although the dry solid assay remains seventy-five percent. These percentages describe the same sample on different bases and do not contradict one another. If the active compound has a supplied molar mass of fifty grams per mole, the original wet sample contains zero point one two zero mole of that compound. Subtracting twenty percentage points directly from seventy-five percent would mix denominators and give the wrong active mass. This calculation assumes water is a separately measured component and that drying would not decompose, volatilize or chemically transform the active compound. Water of crystallization may be part of a compound's formula rather than removable contamination, so that case needs a different species definition. Write the mass tree before converting the named active material into moles.",
        "points": [
          "Wet sample10 g;water20% · Dry solids8 g · Water is separate moisture",
          "Active75% of dry solids · Active6 g · Wet active fraction60%",
          "M(active)=50 g/mol · n(active)=.120 mol · No drying reaction assumed"
        ],
        "board": {
          "heading": "A dry-solid assay is not the active percentage of a wet sample",
          "columns": [
            "Given / structure",
            "Result / inference",
            "Condition / limit"
          ],
          "rows": [
            [
              "Wet sample10 g;water20%",
              "Dry solids8 g",
              "Water is separate moisture"
            ],
            [
              "Active75% of dry solids",
              "Active6 g",
              "Wet active fraction60%"
            ],
            [
              "M(active)=50 g/mol",
              "n(active)=.120 mol",
              "No drying reaction assumed"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Mix .100 L of1.00 M and .200 L of.500 M solutions of the same nonreacting solute. Total solute amount?",
        "options": [
          ".150 mol",
          ".200 mol",
          ".300 mol",
          "1.50 mol"
        ],
        "answer": 1,
        "explanation": "The amounts are .100×1.00=.100 mol and .200×.500=.100 mol, summing to .200 mol."
      },
      {
        "question": "That mixture has a measured final solution volume .285 L. Its molarity is approximately:",
        "options": [
          ".667 M",
          "1.50 M",
          ".702 M",
          ".570 M"
        ],
        "answer": 2,
        "explanation": "Use the measured final volume: .200/.285=.701754... M; volumes are not assumed additive."
      },
      {
        "question": "A .100 L,.400 M solution undergoes two well-mixed .025 L withdrawals, each followed by restoration with pure solvent. Final molarity?",
        "options": [
          ".200 M",
          ".300 M",
          ".100 M",
          ".225 M"
        ],
        "answer": 3,
        "explanation": "Each cycle retains three quarters of the solute at unchanged final volume; .400×(.75)²=.225 M."
      },
      {
        "question": "Total solute removed in that two-cycle example?",
        "options": [
          ".0175 mol",
          ".0200 mol",
          ".0100 mol",
          ".0225 mol"
        ],
        "answer": 0,
        "explanation": "Initial amount .0400 mol minus final amount .0225 mol gives .0175 mol removed."
      },
      {
        "question": "Complete combustion of .100 mol CH4 uses a feed with20% excess over its .200 mol stoichiometric O2 requirement. O2 supplied?",
        "options": [
          ".200 mol",
          ".240 mol",
          ".220 mol",
          "1.20 mol"
        ],
        "answer": 1,
        "explanation": "The supplied oxygen is 1.20×.200=.240 mol; excess is measured relative to the required oxygen amount."
      },
      {
        "question": "For the stated 20%O2/80%N2 oxidizer and complete water removal, dry CO2 mole fraction is:",
        "options": [
          "1/13",
          "1/10",
          "1/11",
          "1/5"
        ],
        "answer": 2,
        "explanation": "Dry amounts .100 CO2+.040 O2+.960 N2=1.100 mol, so xCO2=.100/1.100=1/11."
      },
      {
        "question": "A10 g wet sample is20% water; active material is75% of the dry solids. Active mass?",
        "options": [
          "7.5 g",
          "5.5 g",
          "8.0 g",
          "6.0 g"
        ],
        "answer": 3,
        "explanation": "The dry solids are10×.80=8 g and active mass is8×.75=6 g; the two fractions use different denominators."
      },
      {
        "question": "For that sample and M(active)=50 g/mol, active amount and wet active percentage are:",
        "options": [
          ".120 mol;60%",
          ".150 mol;75%",
          ".110 mol;55%",
          ".160 mol;80%"
        ],
        "answer": 0,
        "explanation": "Six grams is .120 mol at50 g/mol, and6/10×100=60% of the wet sample mass."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: molarity and dilution",
        "url": "https://openstax.org/books/chemistry/pages/3-3-molarity"
      },
      {
        "title": "OpenStax: gas mixture stoichiometry",
        "url": "https://openstax.org/books/chemistry-2e/pages/9-3-stoichiometry-of-gaseous-substances-mixtures-and-reactions"
      },
      {
        "title": "Monash University: reaction mole ratios",
        "url": "https://www.monash.edu/student-academic-success/chemistry/quantifying-changes-in-chemical-reactions/quantifying-substances-in-chemical-reactions"
      }
    ]
  },
  "organic-principles": {
    "chapters": [
      {
        "title": "Conjugation requires a continuous set of adjacent orbitals",
        "formula": "1,3-butadiene:four adjacent p orbitals;1,4-pentadiene:central sp3 carbon interrupts ordinary pi conjugation",
        "script": "Two double bonds in a molecular formula do not automatically form one conjugated system. In the ordinary valence picture of one three butadiene, four consecutive carbon atoms each carry a p orbital, allowing an extended pi system when the orbital orientations permit overlap. The central single bond does not interrupt that sequence merely because its bond order is drawn as one. Compare one four pentadiene. Its middle carbon is a saturated carbon with four sigma bonds in the simple model. That carbon separates the two double bonds, so there is no uninterrupted chain of five ordinary p orbitals linking them. Both molecules contain two pi bonds, but their orbital connectivity differs. Conjugation is a structural and geometric requirement, not a synonym for counting multiple bonds. A cyclic arrangement additionally needs its own planarity and electron count checks before aromaticity is claimed. Conformation can also alter the effectiveness of orbital overlap. The four p orbitals in a conjugated four-carbon fragment generate four pi molecular orbitals, but four pi electrons occupy the lower available levels rather than one electron being assigned to each orbital. Keep atoms, atomic orbitals, molecular orbitals and electrons in separate inventories.",
        "points": [
          "1,3-butadiene · 4 adjacent p orbitals · Overlap orientation matters",
          "1,4-pentadiene · Central sp3 break · 2 pi bonds ≠ one pi system",
          "4 p orbitals →4 pi MOs · 4 pi electrons fill lower levels · Conjugation ≠ aromaticity"
        ],
        "board": {
          "heading": "A single bond can join conjugated sites; an sp3 gap interrupts them",
          "columns": [
            "Given / structure",
            "Result / inference",
            "Condition / limit"
          ],
          "rows": [
            [
              "1,3-butadiene",
              "4 adjacent p orbitals",
              "Overlap orientation matters"
            ],
            [
              "1,4-pentadiene",
              "Central sp3 break",
              "2 pi bonds ≠ one pi system"
            ],
            [
              "4 p orbitals →4 pi MOs",
              "4 pi electrons fill lower levels",
              "Conjugation ≠ aromaticity"
            ]
          ]
        }
      },
      {
        "title": "Methyl cation radical and anion have different electron inventories",
        "formula": "CH3+:6 valence electrons;CH3 radical:7;CH3−:8; localized carbon formal charges +1,0,−1",
        "script": "Three species with the same carbon and hydrogen nuclei can have different electronic structures. The methyl cation, methyl radical and methyl anion contain six, seven and eight total valence electrons respectively. In each selected localized picture, the three carbon hydrogen sigma bonds contain six electrons. The cation has no remaining electron and is represented as planar with an empty p orbital. The methyl radical has one remaining unpaired electron and its simple ground state is planar. The methyl anion has two remaining electrons as a lone pair and is represented as pyramidal in the elementary localized model. A three-bond drawing alone therefore cannot decide the charge, radical character or geometry. Carbon formal charge is found by assigning one electron from each bond to carbon and then adding any nonbonding electrons. Four minus three gives plus one for the cation; four minus four gives zero for the radical; four minus five gives minus one for the anion. Do not extend these methyl examples into a universal geometry rule for every substituted intermediate. Resonance, substituents, the environment and geometric constraints can change the appropriate orbital description.",
        "points": [
          "CH3+;6 valence e− · 3 bonds;empty p · Planar methyl cation model",
          "CH3 radical;7 valence e− · 3 bonds;1 unpaired e− · Planar methyl radical",
          "CH3−;8 valence e− · 3 bonds;one lone pair · Pyramidal localized model"
        ],
        "board": {
          "heading": "The same nuclei can carry zero one or two nonbonding electrons",
          "columns": [
            "Given / structure",
            "Result / inference",
            "Condition / limit"
          ],
          "rows": [
            [
              "CH3+;6 valence e−",
              "3 bonds;empty p",
              "Planar methyl cation model"
            ],
            [
              "CH3 radical;7 valence e−",
              "3 bonds;1 unpaired e−",
              "Planar methyl radical"
            ],
            [
              "CH3−;8 valence e−",
              "3 bonds;one lone pair",
              "Pyramidal localized model"
            ]
          ]
        }
      },
      {
        "title": "Racemate resolution uses diastereomeric partners and a recovery ceiling",
        "formula": "R-acid+R-base versus S-acid+R-base form diastereomeric salt pairs;ordinary separation alone preserves initial enantiomer amounts",
        "script": "A racemic mixture contains equal amounts of two enantiomers, but ordinary separation does not turn one enantiomer into the other. Consider a chiral carboxylic acid reacting with a single enantiomer of a suitable chiral amine. The salts derived from the two acid enantiomers now share the same base configuration. The pair is diastereomeric rather than a pair of complete mirror images. Different physical properties may allow their separation, although a useful solubility difference and recovery are not guaranteed. Regenerating an acid from a separated salt can then recover the selected enantiomer without changing its original stereogenic centre. For zero point zero two zero mole of racemic acid, the starting inventory contains zero point zero one zero mole of each enantiomer. A separation-only route without racemization or another interconversion cannot yield more than zero point zero one zero mole of a single specified enantiomer. That fifty percent ceiling refers to the total original racemate amount, not to the chemical purity of the isolated fraction. An achiral base does not normally create the same diastereomeric distinction in an achiral environment. Distinguish enrichment, recovery and configuration preservation before reporting a successful resolution.",
        "points": [
          "R-acid /S-acid +one R-base · Diastereomeric salt pair · Different properties may help",
          ".020 mol racemate · .010 mol each acid enantiomer · No interconversion assumed",
          "Specified enantiomer ceiling50% · Relative to total starting acid · Purity and recovery differ"
        ],
        "board": {
          "heading": "Resolution separates an inventory rather than duplicating one enantiomer",
          "columns": [
            "Given / structure",
            "Result / inference",
            "Condition / limit"
          ],
          "rows": [
            [
              "R-acid /S-acid +one R-base",
              "Diastereomeric salt pair",
              "Different properties may help"
            ],
            [
              ".020 mol racemate",
              ".010 mol each acid enantiomer",
              "No interconversion assumed"
            ],
            [
              "Specified enantiomer ceiling50%",
              "Relative to total starting acid",
              "Purity and recovery differ"
            ]
          ]
        }
      },
      {
        "title": "A methyl shift moves an entire bonded group and relocates the positive site",
        "formula": "A has three methyl groups and B(H)(CH3)+; migrate one A–CH3 bond to B;positive charge moves from B to A;C6H13+ conserved",
        "script": "A one two methyl shift is an atom-mapping exercise before it is a stability slogan. Label two adjacent carbons A and B. Initially A is bonded to three methyl groups and to B. Carbon B also carries one hydrogen and one methyl group, and it is the positively charged carbon. Select one methyl group originally bonded to A. During the formal shift, the bond from A to that methyl group supplies its electron pair to form a new bond between the methyl group and B. The methyl carbon and all three of its hydrogens migrate together. A loses a bond and becomes the new positive site, while B gains a bond and becomes neutral. There are still six carbon atoms and thirteen hydrogen atoms, with total charge plus one. In this selected structure the initial positive site is secondary and the final one is tertiary, but that comparison alone is not a complete calculation of a reaction rate or product yield. Orbital alignment and competing reactions also matter. A full curved arrow begins at the migrating sigma bond, not at an isolated positive sign. The displayed connectivity map records the changed bond without claiming to be a three-dimensional transition structure.",
        "points": [
          "Before:A–M;positive site B · A has4 bonds;B has3 · M labels a whole CH3 group",
          "Change:A–M→B–M · Bond pair migrates with M · A becomes+;B neutral",
          "C6H13+ before and after · Only connectivity and charge site change · Not a measured rate or yield"
        ],
        "board": {
          "heading": "Move the methyl bond pair and preserve every labelled atom",
          "columns": [
            "Given / structure",
            "Result / inference",
            "Condition / limit"
          ],
          "rows": [
            [
              "Before:A–M;positive site B",
              "A has4 bonds;B has3",
              "M labels a whole CH3 group"
            ],
            [
              "Change:A–M→B–M",
              "Bond pair migrates with M",
              "A becomes+;B neutral"
            ],
            [
              "C6H13+ before and after",
              "Only connectivity and charge site change",
              "Not a measured rate or yield"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Which feature gives the usual continuous conjugated pi fragment in1,3-butadiene?",
        "options": [
          "Four sp3 carbon atoms",
          "Four adjacent p orbitals with suitable overlap",
          "Only the number of H atoms",
          "A cyclic ring is mandatory"
        ],
        "answer": 1,
        "explanation": "Each of the four consecutive sp2 carbons supplies a p orbital; suitable overlap extends the pi system across the central single bond."
      },
      {
        "question": "Why are the two C=C bonds in1,4-pentadiene ordinarily treated as isolated?",
        "options": [
          "It has no pi electrons",
          "Every single bond forbids conjugation",
          "A central sp3 carbon interrupts the adjacent p-orbital sequence",
          "It has an odd number of carbon atoms"
        ],
        "answer": 2,
        "explanation": "The saturated central CH2 carbon breaks the ordinary continuous p-orbital path between the two double bonds."
      },
      {
        "question": "Total valence electron counts for CH3+, CH3 radical and CH3− respectively?",
        "options": [
          "8,7,6",
          "6,6,6",
          "7,8,9",
          "6,7,8"
        ],
        "answer": 3,
        "explanation": "Carbon supplies4 and the three hydrogens3; subtract one for the cation and add one for the anion."
      },
      {
        "question": "Which selected methyl species has three C–H bonds plus one lone pair in the localized model?",
        "options": [
          "CH3−",
          "CH3+",
          "CH3 radical",
          "All three have one lone pair"
        ],
        "answer": 0,
        "explanation": "The anion has8 total valence electrons:6 in three bonds and2 in a carbon lone pair."
      },
      {
        "question": "R-acid/R-base and S-acid/R-base salts form which pair in the stated resolution model?",
        "options": [
          "Identical compounds",
          "Diastereomers",
          "A pair of complete mirror images",
          "Resonance contributors"
        ],
        "answer": 1,
        "explanation": "One stereochemical component changes while the same enantiomeric base is retained, giving a diastereomeric pair."
      },
      {
        "question": "A .020 mol racemate is separated without racemization or interconversion. Maximum amount of one specified original enantiomer?",
        "options": [
          ".020 mol",
          ".040 mol",
          ".010 mol",
          ".005 mol necessarily"
        ],
        "answer": 2,
        "explanation": "The original racemate contains .010 mol of each enantiomer; separation alone cannot increase the inventory of either one."
      },
      {
        "question": "In the labelled A–methyl to B methyl shift, B starts positive. Where is the positive site after the stipulated bond migration?",
        "options": [
          "On the migrating hydrogen",
          "It vanishes from the molecule",
          "On the migrating methyl group",
          "On A"
        ],
        "answer": 3,
        "explanation": "The A–methyl sigma bond pair becomes the B–methyl bond; A loses the bond and takes the positive site."
      },
      {
        "question": "Which atom and charge inventory is retained by that selected methyl shift?",
        "options": [
          "C6H13+",
          "C5H13+",
          "C6H12 with zero charge",
          "C7H16+"
        ],
        "answer": 0,
        "explanation": "An entire CH3 group changes its attachment; no carbon or hydrogen leaves and the total charge remains+1."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: conjugated diene orbital continuity",
        "url": "https://openstax.org/books/organic-chemistry/pages/14-1-stability-of-conjugated-dienes-molecular-orbital-theory"
      },
      {
        "title": "University of Calgary: localized carbocation geometry",
        "url": "https://www3.chem.ucalgary.ca/courses/351/Carey5th/Ch04/ch4-3-2.html"
      },
      {
        "title": "NSOU: elementary methyl anion electron geometry",
        "url": "https://www.wbnsou.ac.in/online_services/SLM_UGC_DEB/UG_4YR/CHEMISTRY/NEC_CH_03_E.pdf"
      },
      {
        "title": "Journal of Organic Chemistry: methyl radical planarity and substituted radical limits",
        "url": "https://pubs.acs.org/doi/abs/10.1021/acs.joc.5c02141"
      },
      {
        "title": "OpenStax: racemic resolution",
        "url": "https://openstax.org/books/organic-chemistry/pages/5-8-racemic-mixtures-and-the-resolution-of-enantiomers"
      },
      {
        "title": "OpenStax: methyl-shift atom connectivity",
        "url": "https://openstax.org/books/organic-chemistry/pages/7-11-evidence-for-the-mechanism-of-electrophilic-additions-carbocation-rearrangements"
      }
    ]
  }
} as const;
