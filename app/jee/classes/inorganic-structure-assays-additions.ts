// Authored by scripts/expand-inorganic-structure-assays.mjs.
export const inorganicStructureAssaysAdditions = {
  "p-block": {
    "base": 23,
    "quizBase": 34,
    "chapters": [
      {
        "title": "Phosphorus pentachloride changes structural description with phase",
        "formula": "Molecular PCl₅: trigonal bipyramidal; ordinary solid: [PCl₄]⁺[PCl₆]⁻ = 2 empirical PCl₅ units",
        "script": "A chemical formula does not guarantee the same structural unit in every phase. In the molecular gas description, phosphorus pentachloride has five phosphorus chlorine bonds and trigonal bipyramidal geometry. Ordinary solid phosphorus pentachloride is instead described by tetrachlorophosphonium cations and hexachlorophosphate anions. The cation has four chlorine atoms and tetrahedral geometry, while the anion has six and octahedral geometry in the elementary electron domain model. One cation and one anion together contain two phosphorus atoms and ten chlorines. That pair therefore corresponds to two empirical phosphorus pentachloride units, not one. The cation's valence electron count is five plus four times seven minus one, or thirty two. The anion's is five plus six times seven plus one, or forty eight. Terminal chlorine lone pairs and the stated bonds account for those electrons without a central lone pair in either ion. Phosphorus oxidation state remains plus five in both charged species; overall ion charge is not its oxidation state. This phase comparison does not claim that every hot vapour remains entirely undissociated or that every phosphorus halide has the same solid structure.",
        "points": [
          "Molecular gas PCl₅ · 5 bonds; 40 valence electrons · Trigonal bipyramidal",
          "Solid [PCl₄]⁺ and [PCl₆]⁻ · 32 / 48 valence electrons · Tetrahedral / octahedral",
          "One cation + one anion · P₂Cl₁₀; total charge zero · Equivalent to 2 empirical PCl₅ units"
        ],
        "board": {
          "heading": "Phosphorus pentachloride changes structural description with phase",
          "columns": [
            "Specified species",
            "Accounting / evidence",
            "Interpretation / limit"
          ],
          "rows": [
            [
              "Molecular gas PCl₅",
              "5 bonds; 40 valence electrons",
              "Trigonal bipyramidal"
            ],
            [
              "Solid [PCl₄]⁺ and [PCl₆]⁻",
              "32 / 48 valence electrons",
              "Tetrahedral / octahedral"
            ],
            [
              "One cation + one anion",
              "P₂Cl₁₀; total charge zero",
              "Equivalent to 2 empirical PCl₅ units"
            ]
          ]
        }
      },
      {
        "title": "Chlorine disproportionation has two different product ledgers",
        "formula": "Cl₂+2OH⁻→Cl⁻+ClO⁻+H₂O; 3Cl₂+6OH⁻→5Cl⁻+ClO₃⁻+3H₂O",
        "script": "Disproportionation puts atoms of the same starting element into both lower and higher oxidation states. In the usual cold dilute alkali comparison, chlorine gives chloride and hypochlorite, with chlorine oxidation numbers minus one and plus one. One chlorine molecule and two hydroxides form one of each ion and one water. In the familiar hot concentrated alkali comparison, the idealized overall products are chloride and chlorate. Chlorate has chlorine plus five, so one chlorine atom losing five electrons must be balanced by five chlorine atoms each gaining one. The net equation therefore uses three chlorine molecules and six hydroxides to form five chlorides, one chlorate and three waters. Five sixths of the chlorine atoms are reduced and one sixth oxidized in this second ledger. For zero point zero three zero zero mole chlorine completely following that stipulated endpoint, chlorate amount is zero point zero one zero zero mole and chloride zero point zero five zero zero mole. These are alternative condition dependent overall comparisons, not two identical product ratios. The equations balance atoms and charge but do not specify an elementary mechanism, a universal reaction rate or an experimental preparation procedure.",
        "points": [
          "Cold dilute alkali comparison · Cl oxidation: 0→−1 and +1 · Chloride : hypochlorite = 1:1",
          "Hot concentrated alkali comparison · Cl oxidation: 0→−1 and +5 · Chloride : chlorate = 5:1",
          "0.0300 mol Cl₂; second endpoint · ClO₃⁻=.0100; Cl⁻=.0500 mol · 1/6 of Cl atoms oxidized; 5/6 reduced"
        ],
        "board": {
          "heading": "Chlorine disproportionation has two different product ledgers",
          "columns": [
            "Specified species",
            "Accounting / evidence",
            "Interpretation / limit"
          ],
          "rows": [
            [
              "Cold dilute alkali comparison",
              "Cl oxidation: 0→−1 and +1",
              "Chloride : hypochlorite = 1:1"
            ],
            [
              "Hot concentrated alkali comparison",
              "Cl oxidation: 0→−1 and +5",
              "Chloride : chlorate = 5:1"
            ],
            [
              "0.0300 mol Cl₂; second endpoint",
              "ClO₃⁻=.0100; Cl⁻=.0500 mol",
              "1/6 of Cl atoms oxidized; 5/6 reduced"
            ]
          ]
        }
      },
      {
        "title": "A boron Lewis-acid comparison must name the donor and energy measure",
        "formula": "BX₃+L→L→BX₃; supplied matched ΔH values: BF₃ −80, BCl₃ −100, BBr₃ −115 kJ/mol adduct",
        "script": "Boron trihalides can accept a lone pair from a Lewis base, but ranking them requires a specified comparison. Let the same donor L form one to one adducts with boron trifluoride, trichloride and tribromide in a supplied matched state model. Their illustrative formation enthalpies are minus eighty, minus one hundred and minus one hundred fifteen kilojoules per mole adduct. Tribromide formation is most exothermic in this dataset. The planar three coordinate boron parent becomes approximately four coordinate in the adduct, so binding includes the energy needed to deform the parent as well as the new donor acceptor interaction. Electron donation within the parent molecule can influence its bonding, but one electronegativity arrow or a simple octet count does not account for all these energy terms. The familiar acidity ordering toward suitable strong donors need not be an invariant ranking toward every weak donor or in every solvent. Nor do the supplied enthalpies alone determine equilibrium constants: Gibbs energy also includes entropy at the stated temperature. These original numbers illustrate matched data interpretation, not a set of measured universal constants or proof that an acid base equilibrium is a redox reaction.",
        "points": [
          "Same L; same stated conditions · ΔH: −80 / −100 / −115 kJ/mol · BBr₃ adduct most exothermic here",
          "BX₃: planar parent → four-coordinate adduct · Deformation and interaction both matter · Do not use electronegativity alone",
          "Equilibrium depends on ΔG=ΔH−TΔS · No entropy data supplied · Enthalpy ranking alone does not fix all K values"
        ],
        "board": {
          "heading": "A boron Lewis-acid comparison must name the donor and energy measure",
          "columns": [
            "Specified species",
            "Accounting / evidence",
            "Interpretation / limit"
          ],
          "rows": [
            [
              "Same L; same stated conditions",
              "ΔH: −80 / −100 / −115 kJ/mol",
              "BBr₃ adduct most exothermic here"
            ],
            [
              "BX₃: planar parent → four-coordinate adduct",
              "Deformation and interaction both matter",
              "Do not use electronegativity alone"
            ],
            [
              "Equilibrium depends on ΔG=ΔH−TΔS",
              "No entropy data supplied",
              "Enthalpy ranking alone does not fix all K values"
            ]
          ]
        }
      },
      {
        "title": "Shared tetrahedron corners determine an ideal silicate ratio",
        "formula": "If k corners per SiO₄ tetrahedron are shared: O/Si=4−k/2; net unit charge per Si=k−4",
        "script": "Silicate formulas can be understood by counting shared oxygen corners rather than treating every silicon oxygen unit as an isolated molecule. In the supplied ideal model, every silicon is surrounded by four oxygens, and a bridging oxygen belongs to two silicon centres. If k corners per tetrahedron are shared, the oxygen count per silicon is four minus k over two. With silicon plus four and oxygen minus two, net charge per silicon formula unit is k minus four. An isolated tetrahedron, with no shared corners, is silicon oxygen four carrying charge minus four. A pair sharing one corner has two silicons and seven oxygens, with total charge minus six. An ideal infinite chain with two shared corners per tetrahedron has repeating ratio silicon oxygen three and charge minus two per silicon. A fully corner shared pure silica framework has ratio silicon oxygen two and zero net formal charge. Finite chain ends, hydroxyl groups, aluminium substitution and counterions require additional bookkeeping, so these simple ratios do not describe every mineral without modification. A shared silicon oxygen silicon bridge is not an oxygen oxygen peroxide bond. The counting graph identifies connectivity; it does not make the actual tetrahedra planar.",
        "points": [
          "k=0: isolated; k=1: paired · SiO₄⁴⁻; Si₂O₇⁶⁻ · Each bridging O counted once overall",
          "k=2: ideal infinite chain · O/Si=3; charge per Si=−2 · Repeat ratio (SiO₃)²⁻",
          "k=4: pure corner-shared framework · O/Si=2; formal charge zero · SiO₂; finite ends/substitutions excluded"
        ],
        "board": {
          "heading": "Shared tetrahedron corners determine an ideal silicate ratio",
          "columns": [
            "Specified species",
            "Accounting / evidence",
            "Interpretation / limit"
          ],
          "rows": [
            [
              "k=0: isolated; k=1: paired",
              "SiO₄⁴⁻; Si₂O₇⁶⁻",
              "Each bridging O counted once overall"
            ],
            [
              "k=2: ideal infinite chain",
              "O/Si=3; charge per Si=−2",
              "Repeat ratio (SiO₃)²⁻"
            ],
            [
              "k=4: pure corner-shared framework",
              "O/Si=2; formal charge zero",
              "SiO₂; finite ends/substitutions excluded"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "One [PCl₄]⁺ cation plus one [PCl₆]⁻ anion contains the same P/Cl inventory as:",
        "options": [
          "One PCl₅ unit",
          "One PCl₃ unit",
          "Two PCl₅ units",
          "Two PCl₃ units"
        ],
        "answer": 2,
        "explanation": "The ionic pair contains P₂Cl₁₀ with zero net charge, requiring two empirical PCl₅ units for the same atom inventory."
      },
      {
        "question": "The elementary geometries of [PCl₄]⁺ and [PCl₆]⁻ are respectively:",
        "options": [
          "Square planar and trigonal prismatic",
          "Trigonal bipyramidal and tetrahedral",
          "Tetrahedral and square pyramidal",
          "Tetrahedral and octahedral"
        ],
        "answer": 3,
        "explanation": "The cation has four bond domains and no central lone pair; the anion has six bond domains and no central lone pair in this model."
      },
      {
        "question": "In 3Cl₂+6OH⁻→5Cl⁻+ClO₃⁻+3H₂O, the chloride:chlorate mole ratio is:",
        "options": [
          "5:1",
          "1:1",
          "1:5",
          "3:6"
        ],
        "answer": 0,
        "explanation": "One chlorine atom oxidized from 0 to +5 loses five electrons, balanced by five atoms each reduced from 0 to −1."
      },
      {
        "question": "If .0300 mol Cl₂ completely follows that chlorate endpoint, chlorate amount is:",
        "options": [
          ".0300 mol",
          ".0100 mol",
          ".0500 mol",
          ".0600 mol"
        ],
        "answer": 1,
        "explanation": "The balanced equation produces one mole chlorate per three moles chlorine molecules, so divide .0300 by three."
      },
      {
        "question": "Matched original adduct-formation enthalpies are BF₃ −80, BCl₃ −100 and BBr₃ −115 kJ/mol with the same donor L. Which is most exothermic in this dataset?",
        "options": [
          "BF₃",
          "All three equally",
          "BBr₃",
          "BCl₃"
        ],
        "answer": 2,
        "explanation": "The most negative supplied enthalpy is −115 kJ/mol for BBr₃; this specified energy comparison is not a universal donor-independent ranking."
      },
      {
        "question": "Why do those adduct enthalpies alone not determine every equilibrium constant?",
        "options": [
          "Lewis acid–base addition must change oxidation states",
          "Entropy never affects binding",
          "All Lewis donors give identical interactions",
          "Gibbs energy also depends on entropy, temperature and the defined chemical conditions"
        ],
        "answer": 3,
        "explanation": "Use ΔG=ΔH−TΔS and ΔG°=−RT lnK; matched enthalpy data alone do not supply all missing entropy or medium information."
      },
      {
        "question": "Two SiO₄ tetrahedra sharing one oxygen corner have the ideal combined anion formula:",
        "options": [
          "Si₂O₇⁶⁻",
          "Si₂O₈⁸⁻",
          "SiO₂",
          "Si₂O₆⁴⁻"
        ],
        "answer": 0,
        "explanation": "Start with eight oxygen corners and count the shared oxygen only once: seven O, with charge 2(+4)+7(−2)=−6."
      },
      {
        "question": "An ideal infinite silicate chain sharing two corners per SiO₄ tetrahedron has oxygen-to-silicon ratio:",
        "options": [
          "4",
          "3",
          "2",
          "7/2"
        ],
        "answer": 1,
        "explanation": "Each shared corner counts half an oxygen per Si; O/Si=4−2/2=3, excluding finite chain-end corrections."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: phosphorus halides and solid PCl₅ ions",
        "url": "https://openstax.org/books/chemistry-2e/pages/18-8-occurrence-preparation-and-properties-of-phosphorus"
      },
      {
        "title": "Purdue University: halogen reactions with hydroxide",
        "url": "https://chemed.chem.purdue.edu/genchem/topicreview/bp/ch10/group7.php"
      },
      {
        "title": "Bickelhaupt and coauthors: donor-dependent boron trihalide interactions",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7756781/"
      },
      {
        "title": "OpenStax: silicate tetrahedra and network structures",
        "url": "https://openstax.org/books/chemistry-2e/pages/18-3-structure-and-general-properties-of-the-metalloids"
      }
    ]
  },
  "d-f-block": {
    "base": 23,
    "quizBase": 34,
    "chapters": [
      {
        "title": "Dichromate iodometry links two reactions before the mole ratio",
        "formula": "Cr₂O₇²⁻ generates 3 I₂ equivalents; each I₂ consumes 2 S₂O₃²⁻; ratio 1:6",
        "script": "An indirect assay needs the stoichiometry of both chemical stages. In a stipulated quantitative acidic model, one dichromate accepts six electrons while becoming two chromium three ions. Negative iodide ions, written I minus, provide those electrons and form three iodine molecules per dichromate. Each iodine equivalent then reacts with two thiosulfate ions to form two iodide ions and one tetrathionate ion. Combining the amounts gives six thiosulfates per dichromate. After complete iodine capture and blank correction, a twenty five millilitre sample corresponds to twenty millilitres of zero point zero three zero zero molar thiosulfate. The thiosulfate inventory is six times ten to the minus four mole. Divide by six: dichromate inventory is one times ten to the minus four mole. Divide by sample volume zero point zero two five litre: dichromate concentration is four times ten to the minus three mole per litre. With excess negative I minus ions, iodine may be carried as triiodide; the iodine equivalent electron ledger remains the same. This is an indirect assay model, not permission to assume that direct dichromate thiosulfate mixing has this sole product. Iodine loss, side reactions and incompatible acidity would require method controls.",
        "points": [
          "One dichromate: 6 electron equivalents · Iodine formed=3 I₂ equivalents · Cr(VI)→Cr(III) at both centres",
          "I₂+2S₂O₃²⁻→2I⁻+S₄O₆²⁻ · Overall thiosulfate:dichromate=6:1 · Two linked stages, not direct mixing",
          "20.0 mL × .0300 mol/L=.000600 mol · Dichromate=.000100 mol in 25.0 mL · Sample concentration=.00400 M"
        ],
        "board": {
          "heading": "Dichromate iodometry links two reactions before the mole ratio",
          "columns": [
            "Specified species",
            "Accounting / evidence",
            "Interpretation / limit"
          ],
          "rows": [
            [
              "One dichromate: 6 electron equivalents",
              "Iodine formed=3 I₂ equivalents",
              "Cr(VI)→Cr(III) at both centres"
            ],
            [
              "I₂+2S₂O₃²⁻→2I⁻+S₄O₆²⁻",
              "Overall thiosulfate:dichromate=6:1",
              "Two linked stages, not direct mixing"
            ],
            [
              "20.0 mL × .0300 mol/L=.000600 mol",
              "Dichromate=.000100 mol in 25.0 mL",
              "Sample concentration=.00400 M"
            ]
          ]
        }
      },
      {
        "title": "Permanganate–oxalate stoichiometry differs from its catalytic rate",
        "formula": "2MnO₄⁻+5C₂O₄²⁻+16H⁺→2Mn²⁺+10CO₂+8H₂O",
        "script": "A balanced permanganate oxalate equation predicts amounts without giving the complete kinetic mechanism. In the specified acidic endpoint, manganese falls from plus seven to plus two and accepts five electrons per permanganate. Each carbon in oxalate begins at plus three and ends at plus four in carbon dioxide. One oxalate therefore donates two electrons. Balancing ten electron equivalents requires two permanganates and five oxalates, with sixteen hydrogen ions giving two manganese two ions, ten carbon dioxide molecules and eight waters. For zero point zero zero two zero zero mole permanganate consumed through this model, oxalate consumption is zero point zero zero five zero zero mole and carbon dioxide production zero point zero one zero zero mole. The reaction also has a classic autocatalytic feature: manganese two product can promote the reaction through a more complicated pathway involving intermediate manganese species under suitable acidic conditions. An initial slow period can therefore be followed by acceleration, though reactant depletion eventually matters. Stoichiometric coefficients do not establish reaction orders, and the balanced net equation is not a single elementary collision. State the endpoint and medium before applying either the electron factor or a kinetic interpretation.",
        "points": [
          "Mn(VII)→Mn(II): 5 e⁻ each · Oxalate carbon +3→+4: 2 e⁻ per ion · Permanganate:oxalate=2:5",
          ".00200 mol MnO₄⁻ consumed · Oxalate=.00500; CO₂=.0100 mol · Acidic complete endpoint",
          "Mn²⁺ product can promote the pathway · Autocatalytic kinetic feature · Net coefficients do not determine rate orders"
        ],
        "board": {
          "heading": "Permanganate–oxalate stoichiometry differs from its catalytic rate",
          "columns": [
            "Specified species",
            "Accounting / evidence",
            "Interpretation / limit"
          ],
          "rows": [
            [
              "Mn(VII)→Mn(II): 5 e⁻ each",
              "Oxalate carbon +3→+4: 2 e⁻ per ion",
              "Permanganate:oxalate=2:5"
            ],
            [
              ".00200 mol MnO₄⁻ consumed",
              "Oxalate=.00500; CO₂=.0100 mol",
              "Acidic complete endpoint"
            ],
            [
              "Mn²⁺ product can promote the pathway",
              "Autocatalytic kinetic feature",
              "Net coefficients do not determine rate orders"
            ]
          ]
        }
      },
      {
        "title": "Lanthanoid redox cannot be decided from special f counts alone",
        "formula": "Ce⁴⁺+Eu²⁺→Ce³⁺+Eu³⁺; supplied E°=1.61−(−0.35)=1.96 V",
        "script": "Empty and half filled f configurations help organize lanthanoid chemistry but cannot decide every reaction by themselves. Use supplied compatible reduction data of plus one point six one volts for cerium four accepting one electron to become cerium three, and minus zero point three five volt for europium three accepting one electron to become europium two. Combine cerium reduction with europium two oxidation. The balanced reaction converts one cerium four plus one europium two into cerium three plus europium three. Its standard cell potential is one point nine six volts and the electron transfer number one. With Faraday constant ninety six thousand five hundred, the standard Gibbs change is minus one hundred eighty nine point one four kilojoules per mole of written reaction. Cerium four begins with formal f zero and europium two with f seven, whereas the products have f one and f six. Thus a preference slogan about empty or half filled shells cannot override the supplied redox thermodynamics. Solvation, ligands and medium contribute to the measured potentials, and actual nonstandard mixtures require their reaction quotient. Both sides have total ionic charge plus six, so charge and electrons remain balanced without inventing a two electron transfer.",
        "points": [
          "Supplied Ce⁴⁺/Ce³⁺: +1.61 V · Supplied Eu³⁺/Eu²⁺: −0.35 V · Ce⁴⁺ reduced; Eu²⁺ oxidized",
          "One electron per written reaction · E°=1.96 V; ΔG°=−nFE° · ΔG°=−189.14 kJ/mol reaction",
          "Formal f counts: 0+7 → 1+6 · Special occupancy is not a full energy balance · Solvation, ligands and activities matter"
        ],
        "board": {
          "heading": "Lanthanoid redox cannot be decided from special f counts alone",
          "columns": [
            "Specified species",
            "Accounting / evidence",
            "Interpretation / limit"
          ],
          "rows": [
            [
              "Supplied Ce⁴⁺/Ce³⁺: +1.61 V",
              "Supplied Eu³⁺/Eu²⁺: −0.35 V",
              "Ce⁴⁺ reduced; Eu²⁺ oxidized"
            ],
            [
              "One electron per written reaction",
              "E°=1.96 V; ΔG°=−nFE°",
              "ΔG°=−189.14 kJ/mol reaction"
            ],
            [
              "Formal f counts: 0+7 → 1+6",
              "Special occupancy is not a full energy balance",
              "Solvation, ligands and activities matter"
            ]
          ]
        }
      },
      {
        "title": "A metal’s density needs its molar volume as well as its mass",
        "formula": "ρ=M/Vm; supplied M=63.5 g/mol, Vm=7.10 cm³/mol ⇒ ρ≈8.94 g/cm³",
        "script": "Transition metal density is a mass per volume property, not a direct count of unpaired electrons. A supporting data calculation uses density equal to molar mass divided by molar volume for the stated pure phase at its temperature and pressure. With supplied rounded copper data, molar mass sixty three point five grams per mole and molar volume seven point one zero cubic centimetres per mole, the ratio is about eight point nine four grams per cubic centimetre. The mole units cancel; this is not grams per mole again. Comparing two metals requires both quantities. In an original hypothetical pair, the second molar mass is one point five times the first, but its molar volume is twice as large. Its density is therefore only three quarters of the first despite the heavier atoms. Across a transition series, changes in atomic volume and structure can shape the observed pattern, so a simple increase in atomic number does not guarantee monotonic density or melting point. Alloy composition, phases and volume changes need their own information; averaging component densities is not a general law. Keep density, hardness, magnetism and bond strength as distinct properties.",
        "points": [
          "Pure phase at specified T,p · ρ=M/Vm · Mass and volume units must match",
          "M=63.5 g/mol; Vm=7.10 cm³/mol · ρ=63.5/7.10 · ρ≈8.94 g/cm³",
          "Second: M×1.5; Vm×2 · ρ₂/ρ₁=1.5/2=.750 · Heavier atoms need not mean greater density"
        ],
        "board": {
          "heading": "A metal’s density needs its molar volume as well as its mass",
          "columns": [
            "Specified species",
            "Accounting / evidence",
            "Interpretation / limit"
          ],
          "rows": [
            [
              "Pure phase at specified T,p",
              "ρ=M/Vm",
              "Mass and volume units must match"
            ],
            [
              "M=63.5 g/mol; Vm=7.10 cm³/mol",
              "ρ=63.5/7.10",
              "ρ≈8.94 g/cm³"
            ],
            [
              "Second: M×1.5; Vm×2",
              "ρ₂/ρ₁=1.5/2=.750",
              "Heavier atoms need not mean greater density"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "In the specified indirect dichromate–iodine–thiosulfate assay, one mole dichromate corresponds to thiosulfate amount:",
        "options": [
          "6 mol",
          "1 mol",
          "3 mol",
          "2 mol"
        ],
        "answer": 0,
        "explanation": "One dichromate liberates three I₂ equivalents; each I₂ requires two thiosulfates, so the combined factor is six."
      },
      {
        "question": "A 25.0 mL sample aliquot corresponds to 20.0 mL .0300 M thiosulfate in that quantitative blank-corrected model. Dichromate concentration is:",
        "options": [
          ".0240 M",
          ".00400 M",
          ".000100 M",
          ".00120 M"
        ],
        "answer": 1,
        "explanation": "Thiosulfate amount=.0200×.0300=.000600 mol; divide by 6 and then by .0250 L to obtain .00400 M."
      },
      {
        "question": "Acidic permanganate–oxalate conversion consumes .00200 mol MnO₄⁻ with the stated Mn²⁺ endpoint. Oxalate consumption is:",
        "options": [
          ".000800 mol",
          ".00200 mol",
          ".00500 mol",
          ".0100 mol"
        ],
        "answer": 2,
        "explanation": "Permanganate accepts five electrons and oxalate donates two per ion; oxalate amount=(5/2)×.00200=.00500 mol."
      },
      {
        "question": "Which product supplies the classic autocatalytic feature of that specified acidic permanganate–oxalate reaction?",
        "options": [
          "CO₂ acting as a stoichiometric oxidant",
          "Water changing into a metal",
          "A catalyst that shifts the fixed reaction equilibrium constant",
          "Mn²⁺ promoting a pathway with intermediate manganese species"
        ],
        "answer": 3,
        "explanation": "Product Mn²⁺ can catalyse the pathway under suitable conditions; the net coefficients do not specify elementary steps or reaction orders."
      },
      {
        "question": "Supplied reduction potentials are Ce⁴⁺/Ce³⁺ +1.61 V and Eu³⁺/Eu²⁺ −.35 V. E° for Ce⁴⁺+Eu²⁺→Ce³⁺+Eu³⁺ is:",
        "options": [
          "1.96 V",
          "1.26 V",
          "−1.96 V",
          "3.92 V"
        ],
        "answer": 0,
        "explanation": "Subtract the europium reduction potential from the cerium reduction potential: 1.61−(−.35)=1.96 V; one electron is transferred."
      },
      {
        "question": "For that one-electron reaction with F=96500 C/mol, ΔG° is:",
        "options": [
          "+189.14 kJ/mol",
          "−189.14 kJ/mol",
          "−378.28 kJ/mol",
          "−1.96 kJ/mol"
        ],
        "answer": 1,
        "explanation": "ΔG°=−nFE°=−1×96500×1.96 J/mol=−189.14 kJ/mol of the written reaction."
      },
      {
        "question": "Supplied copper data are M=63.5 g/mol and Vm=7.10 cm³/mol. Density is approximately:",
        "options": [
          "450.85 g/cm³",
          "7.10 g/cm³",
          "8.94 g/cm³",
          ".112 g/cm³"
        ],
        "answer": 2,
        "explanation": "Divide molar mass by molar volume: 63.5/7.10≈8.94 g/cm³, with mole units cancelling."
      },
      {
        "question": "A second pure-phase dataset has M₂=1.5M₁ and Vm,₂=2Vm,₁. Its density relative to the first is:",
        "options": [
          "3.00",
          "1.50",
          "2.00",
          ".750"
        ],
        "answer": 3,
        "explanation": "The ratio is (M₂/M₁)/(Vm,₂/Vm,₁)=1.5/2=.750; increased atomic mass alone does not fix density."
      }
    ],
    "sources": [
      {
        "title": "CSU Dominguez Hills: iodine/thiosulfate analytical stoichiometry",
        "url": "https://www2.csudh.edu/oliver/che230/labmanual/copbrass.htm"
      },
      {
        "title": "IChO preparatory problems: indirect chromate iodometry",
        "url": "https://eko.ut.ee/pdf/icho/icho2013pp.en.pdf"
      },
      {
        "title": "Primary study: permanganate–oxalate autocatalytic reaction",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11981605/"
      },
      {
        "title": "OpenStax: transition-metal properties and redox comparisons",
        "url": "https://openstax.org/books/chemistry-2e/pages/19-1-occurrence-preparation-and-properties-of-transition-metals-and-their-compounds"
      },
      {
        "title": "OpenStax: density as a mass-to-volume property",
        "url": "https://openstax.org/books/chemistry-2e/pages/1-4-measurements"
      }
    ]
  }
} as const;
