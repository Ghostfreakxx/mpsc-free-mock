// Authored by scripts/expand-mole-organic-structure-balances.mjs.
export const moleOrganicStructureBalancesAdditions = {
  "mole-concept": {
    "quizBase": 40,
    "chapters": [
      {
        "title": "A wet gas pressure includes water vapour",
        "formula": "Pdry=Ptotal−PH2O; ndry=PdryV/(RT), with actual gas pressure and common T specified",
        "script": "A gas collected over water can contain both the intended gas and water vapor. In the ideal mixture comparison, total gas pressure is the sum of their partial pressures. Use the actual gas pressure supplied for the sample, not an atmospheric value that might require a separate liquid level correction. In a stipulated example at one common temperature, total pressure is one atmosphere, water vapor partial pressure is zero point zero three zero atmosphere, gas volume is two point four five liters, and the supplied R T product is twenty four point five liter atmospheres per mole. Dry gas partial pressure is zero point nine seven zero atmosphere. Its amount is therefore zero point nine seven times two point four five divided by twenty four point five, or zero point zero nine seven zero mole. Using total pressure would instead count zero point one zero zero mole of the whole gas mixture. This correction assumes the collected gas does not react significantly with water and that the given vapor pressure applies. Identify the gas species being counted before using a molar volume shortcut.",
        "points": [
          "Ptotal1;Pwater.030 atm · Pdry=.970 atm · Sample pressure given",
          "V2.45 L;RT24.5 L atm/mol · ndry=.970×2.45/24.5 · .0970 mol dry gas",
          "Wet total=.100 mol · Includes water vapour · Water is not analyte"
        ],
        "board": {
          "heading": "Subtract water vapour first",
          "columns": [
            "Given / structure",
            "Count / transformation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Ptotal1;Pwater.030 atm",
              "Pdry=.970 atm",
              "Sample pressure given"
            ],
            [
              "V2.45 L;RT24.5 L atm/mol",
              "ndry=.970×2.45/24.5",
              ".0970 mol dry gas"
            ],
            [
              "Wet total=.100 mol",
              "Includes water vapour",
              "Water is not analyte"
            ]
          ]
        }
      },
      {
        "title": "Equal gas masses do not give equal mole fractions",
        "formula": "Mmix=1/Σ(wi/Mi); equivalently Mmix=Σ(yiMi), with wi mass and yi mole fractions",
        "script": "A gas mixture's average molar mass depends on which fractions are supplied. Equal masses are not equal mole amounts when molar masses differ. Use rounded atomic molar masses four for helium and twenty for neon, in grams per mole. A mixture containing ten grams of each has two point five moles helium and zero point five mole neon. Total amount is three moles and total mass twenty grams, so mean molar mass is twenty thirds, about six point six seven grams per mole. Helium mole fraction is five sixths and neon mole fraction one sixth. Weighting the two molar masses by those mole fractions gives the same result. For mass fractions instead, calculate the reciprocal of the sum of each mass fraction divided by its species molar mass. Simply averaging four and twenty would give twelve, which belongs to equal mole amounts rather than the equal mass mixture here. These noble gases are monatomic, so the counted gas entities are atoms. Ideal gas density can then use this mean molar mass at a specified pressure and temperature.",
        "points": [
          "10 gHe;10 gNe · nHe=2.5;nNe=.5 mol · Total20 g and3 mol",
          "Mmix=20/3≈6.67 g/mol · yHe=5/6;yNe=1/6 · Mole average agrees",
          "Mass fractions are.5,.5 · 1/Mmix=.5/4+.5/20 · 12 assumes equal moles"
        ],
        "board": {
          "heading": "Equal masses are not equal moles",
          "columns": [
            "Given / structure",
            "Count / transformation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "10 gHe;10 gNe",
              "nHe=2.5;nNe=.5 mol",
              "Total20 g and3 mol"
            ],
            [
              "Mmix=20/3≈6.67 g/mol",
              "yHe=5/6;yNe=1/6",
              "Mole average agrees"
            ],
            [
              "Mass fractions are.5,.5",
              "1/Mmix=.5/4+.5/20",
              "12 assumes equal moles"
            ]
          ]
        }
      },
      {
        "title": "Incomplete combustion requires every carbon-containing product",
        "formula": "CH4+1.875O2→.75CO2+.25CO+2H2O in the stipulated complete material ledger",
        "script": "A combustion calculation must not silently place all carbon into carbon dioxide if carbon monoxide is also a stated product. Consider a supplied material balance in which one mole of methane is consumed completely, producing zero point seven five mole carbon dioxide, zero point two five mole carbon monoxide and two moles water, with no other carbon or hydrogen products. Carbon is conserved because the two carbon containing products sum to one mole of carbon atoms. Hydrogen is conserved because two waters contain four moles hydrogen atoms. Oxygen atoms in the products total twice zero point seven five, plus zero point two five, plus two, giving three point seven five moles. The oxygen molecule requirement is half that amount, one point eight seven five moles. Using rounded molar masses gives sixteen grams methane plus sixty grams oxygen, matching thirty three grams carbon dioxide, seven grams carbon monoxide and thirty six grams water. Complete methane consumption is not the same as complete oxidation of every carbon to carbon dioxide. Use the supplied products and check each element before applying a familiar combustion ratio.",
        "points": [
          "1 molCH4 fully consumed · .75 molCO2+.25 molCO · Carbon total1 mol atoms",
          "2 molH2O contains4 molH · Product O atoms=3.75 mol · O2 consumption=1.875 mol",
          "Masses:16+60 g · Products33+7+36 g · CO is not complete C ox."
        ],
        "board": {
          "heading": "Count CO as well as CO2",
          "columns": [
            "Given / structure",
            "Count / transformation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "1 molCH4 fully consumed",
              ".75 molCO2+.25 molCO",
              "Carbon total1 mol atoms"
            ],
            [
              "2 molH2O contains4 molH",
              "Product O atoms=3.75 mol",
              "O2 consumption=1.875 mol"
            ],
            [
              "Masses:16+60 g",
              "Products33+7+36 g",
              "CO is not complete C ox."
            ]
          ]
        }
      },
      {
        "title": "Supporting steady recycle changes the reactor-feed denominator",
        "formula": "Freactor=Ffresh+(1−Xpass)Freactor; perfect A recycle for A→B gives Freactor=Ffresh/Xpass",
        "script": "A steady recycle balance differs from counting one isolated reaction pass. Use a supporting ideal process with one to one conversion of A into B, no side reaction, complete separation of B, perfect recycle of unreacted A and no purge. All rates are in moles per hour. Fresh A enters at one hundred, while the reactor converts forty percent of its own A feed each pass. Let total reactor A feed be F. The unconverted sixty percent returns, so the mixer balance is F equals one hundred plus zero point six F. Solving gives reactor feed two hundred fifty, recycle one hundred fifty and product B one hundred. Single pass conversion is forty percent, but overall fresh feed conversion is one hundred percent in this ideal steady state because no A leaves the process boundary. Recycle does not create new atoms; it counts the same unreacted material on repeated internal passages. Losses, purge, incomplete separation or side reactions change the overall balance. Distinguish the process boundary from the reactor boundary before assigning a conversion denominator.",
        "points": [
          "Fresh100;pass40% · F=100+.60F · ReactorA feed250 mol/h",
          "Recycle=.60×250=150 · B product=.40×250=100 · No purge;perfect split",
          "Pass conversion40% · Overall conversion100% · Recycle is internal"
        ],
        "board": {
          "heading": "Steady recycle: two boundaries",
          "columns": [
            "Given / structure",
            "Count / transformation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Fresh100;pass40%",
              "F=100+.60F",
              "ReactorA feed250 mol/h"
            ],
            [
              "Recycle=.60×250=150",
              "B product=.40×250=100",
              "No purge;perfect split"
            ],
            [
              "Pass conversion40%",
              "Overall conversion100%",
              "Recycle is internal"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "For the supplied wet gas,Ptotal=1.000 atm and PH2O=.030 atm. Dry analyte pressure is:",
        "options": [
          ".970 atm",
          "1.030 atm",
          "1.000 atm",
          ".030 atm"
        ],
        "answer": 0,
        "explanation": "Subtract the water partial pressure from the actual total sample pressure in the specified ideal mixture."
      },
      {
        "question": "Using V=2.45 L and RT=24.5 L atm/mol with that dry pressure, dry gas amount is:",
        "options": [
          ".100 mol",
          ".0970 mol",
          ".0030 mol",
          "9.70 mol"
        ],
        "answer": 1,
        "explanation": "n=.970×2.45/24.5=.0970 mol; .100 mol would count the entire wet mixture."
      },
      {
        "question": "10 gHe and10 gNe have rounded molar masses4 and20 g/mol. Mean gas molar mass is:",
        "options": [
          "12 g/mol",
          "24 g/mol",
          "20/3 g/mol",
          "3 g/mol"
        ],
        "answer": 2,
        "explanation": "First convert each mass to moles:2.5+.5=3 mol. Divide the total20 g by3 mol to get20/3 g/mol."
      },
      {
        "question": "The helium mole fraction in that equal-mass mixture is:",
        "options": [
          "1/2",
          "1/6",
          "1/3",
          "5/6"
        ],
        "answer": 3,
        "explanation": "Helium supplies2.5 of the total3 mol atoms, so its mole fraction is5/6."
      },
      {
        "question": "The stipulated products.75CO2+.25CO+2H2O per CH4 require how much O2?",
        "options": [
          "1.875 mol",
          "2.000 mol",
          "3.750 mol",
          "1.500 mol"
        ],
        "answer": 0,
        "explanation": "Product oxygen atoms total1.50+.25+2=3.75 mol; divide by2 for O2 molecules."
      },
      {
        "question": "Why is complete CH4 consumption not identical to complete carbon oxidation in this example?",
        "options": [
          "No hydrogen is present",
          "Some carbon ends in CO rather than CO2",
          "The input contains no carbon",
          "Carbon mass is lost"
        ],
        "answer": 1,
        "explanation": "Conversion of the reactant and the oxidation state reached by its carbon products are separate questions."
      },
      {
        "question": "Perfect steady recycle, fresh A100 mol/h and40% single-pass conversion for A→B give total reactor A feed:",
        "options": [
          "100 mol/h",
          "150 mol/h",
          "250 mol/h",
          "40 mol/h"
        ],
        "answer": 2,
        "explanation": "The mixer includes fresh feed plus internal recycle:F=100+.60F. Thus.40F=100 and total reactor feed is250 mol/h."
      },
      {
        "question": "In that ideal no-purge process, recycle and B output are respectively:",
        "options": [
          "60 and40 mol/h",
          "100 and150 mol/h",
          "250 and100 mol/h",
          "150 and100 mol/h"
        ],
        "answer": 3,
        "explanation": "The reactor returns60% of its250 mol/h A feed as recycle, or150 mol/h, while40% becomes100 mol/h B."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: gas mixtures and collection over water",
        "url": "https://openstax.org/books/chemistry-2e/pages/9-3-stoichiometry-of-gaseous-substances-mixtures-and-reactions"
      },
      {
        "title": "OpenStax: reaction stoichiometry",
        "url": "https://openstax.org/books/chemistry-2e/pages/4-3-reaction-stoichiometry"
      },
      {
        "title": "University of Colorado LearnChemE: recycle mass balances",
        "url": "https://learncheme.com/quiz-yourself/interactive-self-study-modules/recycle-mass-balances/recycle-mass-balances-screencasts/"
      }
    ]
  },
  "organic-principles": {
    "quizBase": 44,
    "chapters": [
      {
        "title": "Count adjacent C–H bonds before a hyperconjugation comparison",
        "formula": "Simple neighbouring-C–H inventory: CH3CH2+:3; (CH3)2CH+:6; (CH3)3C+:9; CH3+:0",
        "script": "A useful hyperconjugation comparison starts by locating the electron deficient carbon and its neighboring bonds. In a simple adjacent carbon hydrogen bond inventory, the ethyl carbocation has one neighboring methyl group and three such bonds. The isopropyl carbocation has two neighboring methyl groups, giving six, while the tert butyl carbocation has three, giving nine. The methyl carbocation has no neighboring carbon and therefore none in this inventory. Do not count hydrogens attached directly to the positively charged carbon as neighboring carbon donors. These counts describe potentially relevant neighboring bonds across conformations. They do not mean every bond is equally aligned with the empty p orbital at one instant, or that nine identical stabilization energies should be added numerically. Orbital orientation matters, and carbon carbon sigma donation can require a broader treatment. Among comparable simple alkyl cations, donation helps rationalize the familiar tertiary over secondary over primary tendency. Resonance, inductive effects, solvent and structural constraints can change other comparisons. State which bonds are being counted rather than using a bare hydrogen total as a universal stability formula.",
        "points": [
          "Ethyl:1 adjacentCH3 · 3 neighbouring C–H bonds · Exclude H on charged C",
          "iPr:2CH3;tBu:3CH3 · Counts6,9;methyl0 · Bond inventory only",
          "Alignment matters · Not equal donor energies · Stability needs context"
        ],
        "board": {
          "heading": "Count neighbouring C–H bonds",
          "columns": [
            "Given / structure",
            "Count / transformation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Ethyl:1 adjacentCH3",
              "3 neighbouring C–H bonds",
              "Exclude H on charged C"
            ],
            [
              "iPr:2CH3;tBu:3CH3",
              "Counts6,9;methyl0",
              "Bond inventory only"
            ],
            [
              "Alignment matters",
              "Not equal donor energies",
              "Stability needs context"
            ]
          ]
        }
      },
      {
        "title": "A chair flip exchanges axial and equatorial without reversing up and down",
        "formula": "Ring flip: axial-up↔equatorial-up; axial-down↔equatorial-down; connectivity and face are retained",
        "script": "A cyclohexane chair has axial and equatorial positions, but axial does not mean up at every carbon. Axial directions alternate up and down around the ring, while the equatorial direction at each carbon lies on the opposite face from its axial direction. A ring flip exchanges axial and equatorial positions while preserving whether each substituent points up or down. Thus an axial up methyl becomes equatorial up, not equatorial down. The process changes conformation without breaking the substituent bond or changing its connectivity. For methylcyclohexane, the equatorial conformer is usually favored because an axial methyl has unfavorable one three diaxial contacts. A supporting two state example supplies the axial conformer as seven point five kilojoules per mole higher in Gibbs energy at three hundred kelvin. The equatorial to axial population ratio is the exponential of seven thousand five hundred divided by R T, about twenty to one using R eight point three one four. This population ratio is not a ring flip rate or an activation barrier. Use the supplied free energy difference and retain the substituent face.",
        "points": [
          "Axial up/down alternates · Equatorial face opposite · Axial is not always up",
          "Flip keeps up/down · Axial-up↔equatorial-up · Same connectivity",
          "Given Gax−Geq=7.5 kJ/mol · neq/nax=exp(7500/RT) · Two-state ratio≈20:1"
        ],
        "board": {
          "heading": "Chair flips keep up/down",
          "columns": [
            "Given / structure",
            "Count / transformation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Axial up/down alternates",
              "Equatorial face opposite",
              "Axial is not always up"
            ],
            [
              "Flip keeps up/down",
              "Axial-up↔equatorial-up",
              "Same connectivity"
            ],
            [
              "Given Gax−Geq=7.5 kJ/mol",
              "neq/nax=exp(7500/RT)",
              "Two-state ratio≈20:1"
            ]
          ]
        }
      },
      {
        "title": "Cis and trans chairs depend on ring positions as well as faces",
        "formula": "1,2-cis:a,e↔e,a; 1,2-trans:a,a↔e,e; 1,3-cis:a,a↔e,e",
        "script": "For a disubstituted cyclohexane, cis means the two groups lie on the same ring face, not that both are axial or both equatorial. Start with a chair whose carbon one axial direction is up and carbon two axial direction down. If methyl groups at carbons one and two are both up, they are cis, but one must be axial and the other equatorial. Ring flipping exchanges their axial and equatorial roles while retaining both up labels. A trans one two pair can instead be both axial in one chair and both equatorial in the flipped chair. In the usual simple dimethyl comparison, the diequatorial trans conformer is favored. Change the substitution positions to one and three: their axial directions are on the same face. A cis one three pair can therefore interconvert between diaxial and diequatorial forms, while a trans one three pair always has one axial and one equatorial substituent. Identify the numbered carbons and up down faces before choosing a chair. Different substituent sizes or interactions can change conformer energies without changing the cis trans definition.",
        "points": [
          "1,2-cis:same face · One axial,one equatorial · Flip:a,e↔e,a",
          "1,2-trans:opposite faces · Diaxial or diequatorial · Dimethyl favors e,e",
          "1,3 axial faces match · Cis:a,a/e,e;trans:a,e · Check ring numbering"
        ],
        "board": {
          "heading": "Read faces before axial/equatorial",
          "columns": [
            "Given / structure",
            "Count / transformation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "1,2-cis:same face",
              "One axial,one equatorial",
              "Flip:a,e↔e,a"
            ],
            [
              "1,2-trans:opposite faces",
              "Diaxial or diequatorial",
              "Dimethyl favors e,e"
            ],
            [
              "1,3 axial faces match",
              "Cis:a,a/e,e;trans:a,e",
              "Check ring numbering"
            ]
          ]
        }
      },
      {
        "title": "Supporting allene chirality does not require a tetrahedral stereocentre",
        "formula": "For a simple allene a,bC=C=Cc,d: a≠b and c≠d permit axial chirality; terminal substituent planes are perpendicular",
        "script": "A molecule can be chiral without a tetrahedral carbon attached to four different groups. A supporting example is an appropriately substituted allene, whose central carbon is bonded by two cumulated double bonds. The central carbon uses two perpendicular p orbitals, placing the substituents at the two ends in perpendicular planes. For a simple allene, if each terminal carbon bears two different substituents, an axis of chirality can result. Penta two three diene has hydrogen and methyl at each end and exists as a pair of nonsuperimposable mirror images despite lacking the ordinary tetrahedral stereocenter. Unsubstituted propadiene has two hydrogens at each terminal carbon and does not have this axial chirality. Merely seeing two double bonds is therefore not enough. Do not flatten the two end planes and assign ordinary alkene E and Z labels from that false picture. The whole molecular geometry determines whether the mirror image is superimposable. This chapter identifies the structural origin of the allene pair; it does not assign axial stereodescriptors or generalize the same rule to every length of cumulene.",
        "points": [
          "Central C:2 p orbitals · End planes perpendicular · Whole geometry matters",
          "Penta-2,3-diene ends:H/Me · Both end pairs differ · Axial enantiomer pair",
          "Propadiene ends:H/H · No terminal distinction · No such axial chirality"
        ],
        "board": {
          "heading": "Allene ends occupy two planes",
          "columns": [
            "Given / structure",
            "Count / transformation",
            "Conclusion / limit"
          ],
          "rows": [
            [
              "Central C:2 p orbitals",
              "End planes perpendicular",
              "Whole geometry matters"
            ],
            [
              "Penta-2,3-diene ends:H/Me",
              "Both end pairs differ",
              "Axial enantiomer pair"
            ],
            [
              "Propadiene ends:H/H",
              "No terminal distinction",
              "No such axial chirality"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "In the stated neighboring-carbon C–H inventory, CH3CH2+ has how many eligible adjacent C–H bonds?",
        "options": [
          "0",
          "3",
          "5",
          "2"
        ],
        "answer": 1,
        "explanation": "The neighboring CH3 supplies three; hydrogens directly on the cationic carbon are not counted in this inventory."
      },
      {
        "question": "The corresponding inventory for(CH3)3C+ is:",
        "options": [
          "3",
          "6",
          "9",
          "12"
        ],
        "answer": 2,
        "explanation": "Three neighboring methyl groups each supply three C–H bonds. This is not a claim that all nine have equal alignment at once."
      },
      {
        "question": "An axial-up methyl undergoes a cyclohexane chair flip. It becomes:",
        "options": [
          "Axial-down",
          "Equatorial-down",
          "An OH group",
          "Equatorial-up"
        ],
        "answer": 3,
        "explanation": "Ring flipping exchanges axial/equatorial but preserves up/down face and connectivity."
      },
      {
        "question": "The supplied20:1 conformer population ratio directly describes:",
        "options": [
          "Relative equilibrium populations in the two-state model",
          "A20-fold rate constant in every ring flip",
          "The activation barrier in joules",
          "A change in molecular formula"
        ],
        "answer": 0,
        "explanation": "A supplied conformer Gibbs-energy difference fixes a population ratio, not an interconversion rate."
      },
      {
        "question": "A cis-1,2-dimethylcyclohexane chair has which axial/equatorial pattern?",
        "options": [
          "Both axial in every chair",
          "One axial and one equatorial",
          "Both equatorial in every chair",
          "No possible chair"
        ],
        "answer": 1,
        "explanation": "Adjacent axial directions are opposite faces, so a same-face1,2 pair requires one axial and one equatorial group."
      },
      {
        "question": "Which pair can interconvert between diaxial and diequatorial chairs?",
        "options": [
          "cis-1,2 only",
          "trans-1,3 only",
          "trans-1,2 and cis-1,3",
          "Every cis pair at every numbering"
        ],
        "answer": 2,
        "explanation": "The axial directions are opposite for1,2 and matching for1,3; retain the actual up/down faces during flipping."
      },
      {
        "question": "Why can penta-2,3-diene be chiral without a tetrahedral stereocentre?",
        "options": [
          "Its two end planes are forced to be identical",
          "Every molecule with two double bonds is chiral",
          "Its molecular formula changes in the mirror",
          "Perpendicular terminal planes with different groups at each end create an axis of chirality"
        ],
        "answer": 3,
        "explanation": "The allene geometry and distinct terminal substituents permit nonsuperimposable mirror images."
      },
      {
        "question": "Why does propadiene lack that simple allene axial chirality?",
        "options": [
          "Each terminal carbon has two identical hydrogens",
          "Its central carbon has no bonds",
          "All of its carbons are tetrahedral",
          "Every allene is achiral"
        ],
        "answer": 0,
        "explanation": "Identical groups at the terminal sites remove the required end distinctions in the stated simple-allene comparison."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: carbocation structure, orbital alignment and stability",
        "url": "https://openstax.org/books/organic-chemistry/pages/7-9-carbocation-structure-and-stability"
      },
      {
        "title": "OpenStax: substituted cyclohexane conformers",
        "url": "https://openstax.org/books/organic-chemistry/pages/4-7-conformations-of-monosubstituted-cyclohexanes"
      },
      {
        "title": "OpenStax: disubstituted cyclohexanes",
        "url": "https://openstax.org/books/organic-chemistry/pages/4-8-conformations-of-disubstituted-cyclohexanes"
      },
      {
        "title": "Rutgers University: allene axial chirality",
        "url": "https://roche.camden.rutgers.edu/files/Ch05.pdf"
      }
    ]
  }
} as const;
