// Authored by scripts/expand-mole-analysis-transition.mjs.
export const moleAnalysisTransitionAdditions = {
  "d-f-block": {
    "base": 15,
    "quizBase": 18,
    "chapters": [
      {
        "title": "Actinoid charge and f counts need a stated model",
        "formula": "U: [Rn]5f³6d¹7s²; simple U⁴⁺ count gives [Rn]5f²",
        "script": "Actinoid configurations require specifying the actual species rather than copying a neutral atom label onto every ion. Use the supplied elementary neutral uranium configuration with a radon core, three five f electrons, one six d electron and two seven s electrons. In the simple isolated ion bookkeeping used here, forming uranium four plus removes four outer electrons: the two seven s electrons, the six d electron and one five f electron. The remaining count is five f two. The corresponding formal six plus uranium count is five f zero in this model. Now consider the uranyl ion, containing uranium and two oxygens, with overall charge plus two. Assigning each oxygen minus two makes uranium oxidation state plus six, despite the whole ion having charge plus two. Formal oxidation states and actual molecular electron density are different descriptions, so this does not claim that uranyl consists of a free bare uranium six plus ion. More detailed actinoid bonding includes covalency and closely spaced orbitals. Read overall charge, ligand oxidation assignments and the specified electron-count model separately before reporting an f configuration.",
        "points": [
          "Neutral U supplied · [Rn]5f³6d¹7s² · 6 electrons beyond radon",
          "Simple U⁴⁺ removal · Remove 2 from 7s, 1 from 6d, 1 from 5f · [Rn]5f²",
          "UO₂²⁺ formal balance · x + 2(−2) = +2 · U +6; formal f⁰ count"
        ],
        "board": {
          "heading": "Actinoid charge and f counts need a stated model",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Neutral U supplied",
              "[Rn]5f³6d¹7s²",
              "6 electrons beyond radon"
            ],
            [
              "Simple U⁴⁺ removal",
              "Remove 2 from 7s, 1 from 6d, 1 from 5f",
              "[Rn]5f²"
            ],
            [
              "UO₂²⁺ formal balance",
              "x + 2(−2) = +2",
              "U +6; formal f⁰ count"
            ]
          ]
        }
      },
      {
        "title": "Two d4 ions can have different redox roles",
        "formula": "E°cell = E°red(Mn³⁺/Mn²⁺) − E°red(Cr³⁺/Cr²⁺)",
        "script": "Matching d electron counts do not guarantee matching redox behaviour. Chromium two plus and manganese three plus both have a formal d four count, yet their supplied aqueous reduction potentials differ. Use minus zero point four one volt for chromium three plus accepting one electron to become chromium two plus, and plus one point five one volts for manganese three plus accepting one electron to become manganese two plus. Combining manganese reduction with chromium two plus oxidation gives manganese three plus plus chromium two plus forming manganese two plus plus chromium three plus. The standard cell potential is one point five one minus minus zero point four one, or plus one point nine two volts. One electron is transferred per written reaction. With supplied Faraday constant ninety six thousand four hundred eighty five coulombs per mole, standard Gibbs energy change is approximately minus one hundred eighty five kilojoules per mole of reaction. The resulting d five manganese two plus and d three chromium three plus counts help organize the comparison, but measured potentials include the full specified chemical environment. Complexation, concentration and p H can change an actual redox comparison.",
        "points": [
          "Cr³⁺ + e⁻ → Cr²⁺ · Supplied E°red = −0.41 V · Reverse this step for oxidation",
          "Mn³⁺ + e⁻ → Mn²⁺ · Supplied E°red = +1.51 V · Manganese reduction",
          "Combined one-electron reaction · 1.51 − (−0.41) · E°=+1.92 V; ΔG°≈−185 kJ/mol"
        ],
        "board": {
          "heading": "Two d4 ions can have different redox roles",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Cr³⁺ + e⁻ → Cr²⁺",
              "Supplied E°red = −0.41 V",
              "Reverse this step for oxidation"
            ],
            [
              "Mn³⁺ + e⁻ → Mn²⁺",
              "Supplied E°red = +1.51 V",
              "Manganese reduction"
            ],
            [
              "Combined one-electron reaction",
              "1.51 − (−0.41)",
              "E°=+1.92 V; ΔG°≈−185 kJ/mol"
            ]
          ]
        }
      },
      {
        "title": "Carbide composition is not an alloy property prediction",
        "formula": "Fe₃C with supplied Fe=56, C=12: carbon mass fraction = 12/180",
        "script": "A carbide formula can support a composition calculation without determining every property of an alloy. Cementite has the formula iron three carbide, with three iron atoms for each carbon atom. Using supplied atomic masses iron fifty six and carbon twelve gives formula mass one hundred eighty grams per mole. The carbon mass fraction is twelve divided by one hundred eighty, or about six point six seven percent. Thus one point eight zero grams of pure ideal cementite contains zero point one two zero gram carbon and one point six eight grams iron. Now use a stipulated two component mass model containing ten percent cementite and ninety percent pure iron. Since the pure iron component contributes no carbon, overall carbon percentage is one tenth of the cementite carbon percentage, about zero point six six seven percent. This does not mean a real steel is always described by only those two components or that hardness is a linear function of carbon fraction. Microstructure, phase distribution and processing also matter. Count formula units and mass fractions before connecting a composition to any independently supplied materials-property data.",
        "points": [
          "Fe₃C formula mass · 3×56 + 12 · 180 g/mol",
          "Pure cementite carbon fraction · 12/180 · 6.67% by mass",
          "Ideal mixture: 10% Fe₃C, rest Fe · 0.10×6.67% · About 0.667% total carbon"
        ],
        "board": {
          "heading": "Carbide composition is not an alloy property prediction",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Fe₃C formula mass",
              "3×56 + 12",
              "180 g/mol"
            ],
            [
              "Pure cementite carbon fraction",
              "12/180",
              "6.67% by mass"
            ],
            [
              "Ideal mixture: 10% Fe₃C, rest Fe",
              "0.10×6.67%",
              "About 0.667% total carbon"
            ]
          ]
        }
      },
      {
        "title": "Chromium oxide acidity changes with oxidation state",
        "formula": "CrO: Cr(II); Cr₂O₃: Cr(III); CrO₃: Cr(VI)",
        "script": "Oxide acid base behaviour can vary across oxidation states of the same transition element. In the introductory chromium comparison, chromium two oxide is mainly basic, chromium three oxide is amphoteric, and chromium six oxide is acidic. Charge balance gives chromium oxidation states plus two in the monoxide, plus three in the two chromium three oxygen formula, and plus six in the trioxide. A simple acid reaction for the monoxide uses two hydrogen ions to give chromium two ions and water. For chromium three oxide, six hydrogen ions give two chromium three ions and three waters. Amphoteric behaviour also requires reaction with suitable base conditions; its products depend on the stated medium. Chromium trioxide can react with two hydroxide ions to give a chromate ion and water, with chromium remaining plus six. This last equation is acid base conversion, not a chromium oxidation state change. The comparison illustrates a useful trend toward acidic oxides at higher oxidation state, rather than a universal classification rule for every transition metal compound. Keep oxide formula, oxidation state, reaction medium and redox classification as separate checks.",
        "points": [
          "CrO; Cr₂O₃; CrO₃ · Cr oxidation states +2, +3, +6 · Basic; amphoteric; acidic",
          "Cr₂O₃ + 6H⁺ · → 2Cr³⁺ + 3H₂O · Atom and charge balance",
          "CrO₃ + 2OH⁻ · → CrO₄²⁻ + H₂O · Cr stays +6; acid–base conversion"
        ],
        "board": {
          "heading": "Chromium oxide acidity changes with oxidation state",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "CrO; Cr₂O₃; CrO₃",
              "Cr oxidation states +2, +3, +6",
              "Basic; amphoteric; acidic"
            ],
            [
              "Cr₂O₃ + 6H⁺",
              "→ 2Cr³⁺ + 3H₂O",
              "Atom and charge balance"
            ],
            [
              "CrO₃ + 2OH⁻",
              "→ CrO₄²⁻ + H₂O",
              "Cr stays +6; acid–base conversion"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Using supplied U=[Rn]5f3 6d1 7s2 and the stated simple removal model, U4+ has:",
        "options": [
          "5f0",
          "5f1",
          "5f2",
          "5f3"
        ],
        "answer": 2,
        "explanation": "Four removals take the two 7s electrons, one 6d electron and one 5f electron, leaving 5f2."
      },
      {
        "question": "Assign O=−2 in UO2²+. Uranium formal oxidation state is:",
        "options": [
          "+2",
          "+4",
          "0",
          "+6"
        ],
        "answer": 3,
        "explanation": "x−4=+2 gives x=+6. The charge of the complete ion is not the uranium oxidation state."
      },
      {
        "question": "Supplied reduction potentials are Mn3+/Mn2+ +1.51 V and Cr3+/Cr2+ −0.41 V. Mn3+ reduction coupled to Cr2+ oxidation has E°:",
        "options": [
          "+1.92 V",
          "+1.10 V",
          "−1.92 V",
          "−1.10 V"
        ],
        "answer": 0,
        "explanation": "Subtract the reduction potential of the reversed chromium couple: 1.51−(−0.41)=1.92 V."
      },
      {
        "question": "For Mn3+ + Cr2+ → Mn2+ + Cr3+, electrons transferred per written reaction are:",
        "options": [
          "Two",
          "One",
          "Three",
          "Five"
        ],
        "answer": 1,
        "explanation": "Mn gains one electron while Cr loses one; no coefficient scaling is needed."
      },
      {
        "question": "With Fe=56 and C=12, pure Fe3C carbon mass percentage is approximately:",
        "options": [
          "12%",
          "3.00%",
          "6.67%",
          "20.0%"
        ],
        "answer": 2,
        "explanation": "Formula mass=3×56+12=180; carbon mass fraction=12/180."
      },
      {
        "question": "In the stipulated mixture of 10.0 mass% Fe3C and 90.0 mass% pure Fe, carbon mass percentage is about:",
        "options": [
          "6.67%",
          "10.0%",
          "60.0%",
          "0.667%"
        ],
        "answer": 3,
        "explanation": "Only the carbide contributes carbon in this model: 0.10×6.667%=0.6667%."
      },
      {
        "question": "Chromium oxidation states in CrO, Cr2O3 and CrO3 are respectively:",
        "options": [
          "+2, +3, +6",
          "+1, +2, +3",
          "+2, +6, +3",
          "−2, −3, −6"
        ],
        "answer": 0,
        "explanation": "Use oxygen −2 and charge neutrality for each oxide formula separately."
      },
      {
        "question": "In CrO3 + 2OH− → CrO4²− + H2O, chromium:",
        "options": [
          "Is reduced from +6 to +3",
          "Stays +6 in an acid–base conversion",
          "Is oxidized from +3 to +6",
          "Becomes elemental chromium"
        ],
        "answer": 1,
        "explanation": "Both chromium species have formal oxidation state +6; the equation changes acid–base form rather than chromium redox state."
      }
    ],
    "sources": [
      {
        "title": "NCERT: d- and f-block elements",
        "url": "https://www.ncert.nic.in/textbook/pdf/lech104.pdf"
      },
      {
        "title": "OpenStax: galvanic cells and potentials",
        "url": "https://openstax.org/books/chemistry-2e/pages/17-2-galvanic-cells"
      },
      {
        "title": "OpenStax: transition-metal properties",
        "url": "https://openstax.org/books/chemistry-2e/pages/19-1-occurrence-preparation-and-properties-of-transition-metals-and-their-compounds"
      }
    ]
  },
  "purification-analysis": {
    "base": 13,
    "quizBase": 16,
    "chapters": [
      {
        "title": "Sulfur gravimetry counts the sulfur in a weighed product",
        "formula": "Pure BaSO₄ contains one sulfur per formula unit",
        "script": "Gravimetric elemental analysis converts an element into a product of known composition and measures that product mass. In a supplied quantitative sulfur model, all sample sulfur is recovered in pure dry barium sulfate. Use molar masses barium sulfate two hundred thirty three and sulfur thirty two grams per mole. A zero point two zero zero gram sample gives zero point two three three gram barium sulfate. Product amount is zero point zero zero one zero zero mole, and each formula unit contains one sulfur atom, so the sulfur amount is the same. Sulfur mass is zero point zero three two zero gram, giving sixteen percent of the original sample mass. Do not assign the entire precipitate mass to sulfur; most of it is barium and oxygen. The calculation assumes complete conversion, quantitative collection and the specified dry product. Retained moisture or unrelated coprecipitated material would bias an actual mass, while incomplete collection could lower recovery. These supplied-data assumptions connect an observation to a composition calculation. They are not an experimental oxidation or precipitation procedure.",
        "points": [
          "BaSO₄ product mass · 0.233/233 · 0.00100 mol product",
          "One sulfur per formula unit · 0.00100 × 32 · 0.0320 g sulfur",
          "Sample mass 0.200 g · 100×0.0320/0.200 · 16.0% sulfur"
        ],
        "board": {
          "heading": "Sulfur gravimetry counts the sulfur in a weighed product",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "BaSO₄ product mass",
              "0.233/233",
              "0.00100 mol product"
            ],
            [
              "One sulfur per formula unit",
              "0.00100 × 32",
              "0.0320 g sulfur"
            ],
            [
              "Sample mass 0.200 g",
              "100×0.0320/0.200",
              "16.0% sulfur"
            ]
          ]
        }
      },
      {
        "title": "Phosphorus gravimetry needs the factor of two",
        "formula": "Mg₂P₂O₇ contains two phosphorus atoms per formula unit",
        "script": "A gravimetric product can contain more than one atom of the element being estimated. In a supplied phosphorus analysis model, all sample phosphorus is recovered as pure dry magnesium pyrophosphate. Its formula contains two magnesium, two phosphorus and seven oxygen atoms. Use supplied molar mass two hundred twenty two grams per mole and phosphorus atomic mass thirty one. Suppose a zero point three one zero gram sample gives zero point two two two gram of the specified product. That is zero point zero zero one zero zero mole product, containing zero point zero zero two zero zero mole phosphorus atoms. Phosphorus mass is zero point zero six two zero gram and its sample mass percentage is twenty. Using one phosphorus atom per product unit would halve the answer incorrectly. Likewise, a different weighed form would require its own formula factor rather than reuse this conversion unchanged. Quantitative recovery and a defined dry product are assumptions, and this numerical model does not supply hazardous sample-conversion steps. Start from the product formula and the counted atom before writing a shortcut percentage expression.",
        "points": [
          "Mg₂P₂O₇ mass 0.222 g · 0.222/222 · 0.00100 mol product",
          "Two P atoms per unit · 2×0.00100×31 · 0.0620 g phosphorus",
          "Sample mass 0.310 g · 100×0.0620/0.310 · 20.0% phosphorus"
        ],
        "board": {
          "heading": "Phosphorus gravimetry needs the factor of two",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Mg₂P₂O₇ mass 0.222 g",
              "0.222/222",
              "0.00100 mol product"
            ],
            [
              "Two P atoms per unit",
              "2×0.00100×31",
              "0.0620 g phosphorus"
            ],
            [
              "Sample mass 0.310 g",
              "100×0.0620/0.310",
              "20.0% phosphorus"
            ]
          ]
        }
      },
      {
        "title": "Oxygen by difference needs a complete mass basis",
        "formula": "O% = 100 − sum(other measured mass percentages), only when the remainder is oxygen",
        "script": "An elemental percentage obtained by difference is conditional on what the remainder can contain. Suppose a dry sample contains only carbon, hydrogen, nitrogen, sulfur and oxygen. Supplied measured mass percentages are sixty, eight, twelve and four for the first four elements respectively. They sum to eighty four, leaving sixteen percent oxygen under the stated complete composition model. A half gram sample would then contain zero point zero eight zero gram oxygen. Unmeasured halogens, inorganic residue or retained water would make the same subtraction an unreliable oxygen determination unless separately accounted for. All percentages must also refer to the same sample basis; mixing dry basis carbon with a wet basis sample mass breaks the balance. Difference calculations combine measurement uncertainty. If the four supplied small worst case bounds are zero point three, zero point one, zero point two and zero point one percentage points, their conservative sum is zero point seven percentage points for the inferred oxygen fraction. This is not automatically a statistical standard deviation. State the composition model, sample basis and uncertainty interpretation along with the remainder.",
        "points": [
          "Measured C,H,N,S · 60+8+12+4=84% · O=16% under stated model",
          "Sample mass 0.500 g · 0.16×0.500 · 0.0800 g oxygen",
          "Worst-case supplied bounds · 0.3+0.1+0.2+0.1 · ±0.7 percentage points"
        ],
        "board": {
          "heading": "Oxygen by difference needs a complete mass basis",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Measured C,H,N,S",
              "60+8+12+4=84%",
              "O=16% under stated model"
            ],
            [
              "Sample mass 0.500 g",
              "0.16×0.500",
              "0.0800 g oxygen"
            ],
            [
              "Worst-case supplied bounds",
              "0.3+0.1+0.2+0.1",
              "±0.7 percentage points"
            ]
          ]
        }
      },
      {
        "title": "Steam-distillation mole and mass ratios are different",
        "formula": "Ideal immiscible phases present: nA/nwater = pA°/pwater°",
        "script": "Steam distillation of a suitable immiscible pair uses the vapour pressures contributed by both liquid phases at the same temperature. In an idealized supplied example, the organic component contributes ten kilopascals and water ninety. Their sum is one hundred kilopascals, so the mixture can boil against that external pressure while both liquid phases remain present. The vapour organic mole fraction is one tenth. The mole ratio of organic vapour to water vapour is one to nine. A mass ratio also needs molar masses. With organic molar mass one hundred eighty and water eighteen grams per mole, organic mass divided by water mass is ten times one hundred eighty divided by ninety times eighteen, or ten ninths. Thus a representative condensed fraction containing ten grams water would contain about eleven point one grams organic component under this model. Applying liquid mole fractions as though the liquids formed one ideal miscible solution would describe a different model. Phase exhaustion, appreciable mutual solubility, entrainment or chemical instability can invalidate the simple ratio. Keep phase presence, vapour composition and condensed mass accounting explicit.",
        "points": [
          "Partial pressures 10 and 90 kPa · Total = 100 kPa · Organic vapour fraction 0.100",
          "Mole ratio organic/water · 10/90 · 1/9",
          "Mass ratio with M=180 and 18 · (10×180)/(90×18) · 10/9; 10 g water → 11.1 g organic"
        ],
        "board": {
          "heading": "Steam-distillation mole and mass ratios are different",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Partial pressures 10 and 90 kPa",
              "Total = 100 kPa",
              "Organic vapour fraction 0.100"
            ],
            [
              "Mole ratio organic/water",
              "10/90",
              "1/9"
            ],
            [
              "Mass ratio with M=180 and 18",
              "(10×180)/(90×18)",
              "10/9; 10 g water → 11.1 g organic"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "A quantitative sulfur model gives 0.233 g dry BaSO4 with M=233 g/mol. Sulfur-atom amount is:",
        "options": [
          "0.00200 mol",
          "0.00100 mol",
          "0.233 mol",
          "0.000500 mol"
        ],
        "answer": 1,
        "explanation": "There is one S per BaSO4 formula unit; product amount is 0.233/233=0.00100 mol."
      },
      {
        "question": "With S=32 g/mol and sample mass 0.200 g, sulfur percentage is:",
        "options": [
          "8%",
          "32%",
          "16%",
          "100%"
        ],
        "answer": 2,
        "explanation": "Sulfur mass=0.00100×32=0.0320 g; divide by 0.200 g sample and multiply by 100."
      },
      {
        "question": "0.00100 mol Mg2P2O7 contains phosphorus-atom amount:",
        "options": [
          "0.000500 mol",
          "0.00100 mol",
          "0.00700 mol",
          "0.00200 mol"
        ],
        "answer": 3,
        "explanation": "The product formula has two phosphorus atoms per formula unit."
      },
      {
        "question": "0.222 g Mg2P2O7 with M=222 g/mol comes from 0.310 g sample. With P=31, phosphorus percentage is:",
        "options": [
          "20%",
          "10%",
          "31%",
          "62%"
        ],
        "answer": 0,
        "explanation": "P mass=2×(0.222/222)×31=0.0620 g; percentage=100×0.0620/0.310=20%."
      },
      {
        "question": "A dry sample contains only C,H,N,S,O. Measured C,H,N,S are 60,8,12,4 mass percent. Oxygen is:",
        "options": [
          "84%",
          "16%",
          "12%",
          "4%"
        ],
        "answer": 1,
        "explanation": "The other four percentages sum to 84; only under the complete composition model is the 16% remainder oxygen."
      },
      {
        "question": "For that oxygen-by-difference result, which condition is essential?",
        "options": [
          "Ignore all unmeasured elements",
          "Use mixed dry and wet bases",
          "The remainder must be oxygen on the same mass basis",
          "Assume every uncertainty is zero"
        ],
        "answer": 2,
        "explanation": "Unmeasured elements, residue or inconsistent sample bases break the simple difference inference."
      },
      {
        "question": "An ideal immiscible steam-distillation model has organic/water partial pressures 10/90 kPa. Organic vapour mole fraction is:",
        "options": [
          "0.900",
          "1/9",
          "10/9",
          "0.100"
        ],
        "answer": 3,
        "explanation": "The fraction is 10/(10+90)=0.100; the organic/water mole ratio is a different quantity, 1/9."
      },
      {
        "question": "For organic/water molar masses 180/18 and partial pressures 10/90, condensed organic/water mass ratio is:",
        "options": [
          "10/9",
          "1/9",
          "1/10",
          "9/10"
        ],
        "answer": 0,
        "explanation": "Multiply the vapour mole ratio by the molar-mass ratio: (10/90)×(180/18)=10/9."
      }
    ],
    "sources": [
      {
        "title": "NCERT: organic chemistry and quantitative analysis",
        "url": "https://ncert.nic.in/textbook/pdf/kech206.pdf"
      },
      {
        "title": "Government teaching module: quantitative organic analysis",
        "url": "https://www.repository.tribal.gov.in/bitstream/123456789/75128/1/SCST_2018_book_0477.pdf"
      },
      {
        "title": "OpenStax: quantitative chemical analysis",
        "url": "https://openstax.org/books/chemistry-2e/pages/4-5-quantitative-chemical-analysis"
      }
    ]
  },
  "mole-concept": {
    "base": 13,
    "quizBase": 16,
    "chapters": [
      {
        "title": "A back titration counts the acid actually consumed",
        "formula": "CaCO₃ + 2H⁺ → Ca²⁺ + CO₂ + H₂O",
        "script": "A back titration uses an excess reagent, then measures how much remains. Suppose a one point zero zero gram sample contains calcium carbonate and an impurity that does not consume acid. The supplied acid amount is forty point zero millilitres of zero point five zero zero molar hydrochloric acid. After the carbonate reaction, the remaining acid consumes ten point zero millilitres of zero point four zero zero molar sodium hydroxide in a quantitative one to one neutralization. Initial hydrogen ion amount is zero point zero two zero zero mole. Remaining amount is zero point zero zero four zero zero mole, so the sample consumed zero point zero one six zero mole. Calcium carbonate needs two hydrogen ions per formula unit, giving zero point zero zero eight zero zero mole carbonate. With supplied molar mass one hundred grams per mole, its mass is zero point eight zero zero gram and the sample purity is eighty percent. This inference needs complete carbonate reaction, the stated acid-inert impurity and a valid residual-acid endpoint. Other acid-consuming substances would change what the assay measures.",
        "points": [
          "Initial acid · 0.0400 L × 0.500 M · 0.0200 mol H⁺",
          "Residual acid · 0.0100 L × 0.400 M · 0.00400 mol H⁺",
          "Consumed acid; carbonate · 0.0160/2 × 100 g/mol · 0.800 g; 80.0% sample"
        ],
        "board": {
          "heading": "A back titration counts the acid actually consumed",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Initial acid",
              "0.0400 L × 0.500 M",
              "0.0200 mol H⁺"
            ],
            [
              "Residual acid",
              "0.0100 L × 0.400 M",
              "0.00400 mol H⁺"
            ],
            [
              "Consumed acid; carbonate",
              "0.0160/2 × 100 g/mol",
              "0.800 g; 80.0% sample"
            ]
          ]
        }
      },
      {
        "title": "An oxide mixture needs independent atom balances",
        "formula": "For FeO/Fe₂O₃: a+2b = nFe and a+3b = nO",
        "script": "An oxide mixture can be solved from independent iron and oxygen balances. Consider a supplied two point three two gram mixture containing only iron two oxide and iron three oxide. Complete reduction gives one point six eight grams iron, with all original oxygen removed as water. Use atomic masses iron fifty six and oxygen sixteen. Iron amount is zero point zero three zero zero mole atoms. The removed oxygen mass is zero point six four gram, corresponding to zero point zero four zero zero mole oxygen atoms. Let a and b be moles of iron two oxide and iron three oxide. Iron balance gives a plus two b equal to zero point zero three zero zero. Oxygen balance gives a plus three b equal to zero point zero four zero zero. Subtraction gives b zero point zero one zero zero mole and then a the same amount. Their masses are zero point seven two zero and one point six zero grams. The atom balances also predict zero point zero four zero zero mole water if each removed oxygen forms one water molecule in the stipulated complete reduction model.",
        "points": [
          "Iron after reduction · 1.68/56 · 0.0300 mol Fe atoms",
          "Oxygen removed · (2.32−1.68)/16 · 0.0400 mol O atoms",
          "Solve a+2b; a+3b · a=b=0.0100 mol · FeO 0.720 g; Fe₂O₃ 1.60 g"
        ],
        "board": {
          "heading": "An oxide mixture needs independent atom balances",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Iron after reduction",
              "1.68/56",
              "0.0300 mol Fe atoms"
            ],
            [
              "Oxygen removed",
              "(2.32−1.68)/16",
              "0.0400 mol O atoms"
            ],
            [
              "Solve a+2b; a+3b",
              "a=b=0.0100 mol",
              "FeO 0.720 g; Fe₂O₃ 1.60 g"
            ]
          ]
        }
      },
      {
        "title": "Isotope fractions and molecular pair fractions differ",
        "formula": "Random pairing with light fraction 0.75: LL:LH:HH = 9:6:1",
        "script": "An average atomic mass can give isotope number fractions under a stated two isotope model. Suppose chlorine has only mass thirty five and mass thirty seven isotopes, with supplied average mass thirty five point five. If f is the heavy isotope fraction, thirty five times one minus f plus thirty seven times f equals thirty five point five, giving f one quarter. The light isotope fraction is three quarters. For independent random pairing into diatomic chlorine, the light light fraction is nine sixteenths. The mixed pair fraction is six sixteenths, because light heavy and heavy light are two ways of obtaining the same mixed isotopologue. The heavy heavy fraction is one sixteenth. The molecular mass labels are seventy, seventy two and seventy four in this integer-mass model, and their weighted average is seventy one. These are number fractions, not isotope mass fractions. Actual isotope masses differ from integer mass numbers, and random pairing is an explicit statistical assumption. Identify the counted entity before transferring an atomic abundance directly into a molecular peak ratio.",
        "points": [
          "Mean atomic mass 35.5 · 35(1−f)+37f=35.5 · Heavy f=0.25; light=0.75",
          "Independent diatomic pairing · 0.75² : 2×0.75×0.25 : 0.25² · LL:LH:HH = 9:6:1",
          "Integer molecular mass labels · 70, 72, 74 · Weighted mean 71"
        ],
        "board": {
          "heading": "Isotope fractions and molecular pair fractions differ",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Mean atomic mass 35.5",
              "35(1−f)+37f=35.5",
              "Heavy f=0.25; light=0.75"
            ],
            [
              "Independent diatomic pairing",
              "0.75² : 2×0.75×0.25 : 0.25²",
              "LL:LH:HH = 9:6:1"
            ],
            [
              "Integer molecular mass labels",
              "70, 72, 74",
              "Weighted mean 71"
            ]
          ]
        }
      },
      {
        "title": "Combustion data resolve a binary gas mixture",
        "formula": "CH₄/C₂H₆: a+b = total moles; a+2b = CO₂ moles",
        "script": "A binary hydrocarbon mixture needs both a total-amount balance and a carbon balance. Suppose zero point one zero zero mole of a gas mixture contains only methane and ethane. Complete combustion produces zero point one six zero mole carbon dioxide. Let a and b be the methane and ethane amounts. The total balance is a plus b equal to zero point one zero zero. Since methane contributes one carbon and ethane two, the carbon dioxide balance is a plus two b equal to zero point one six zero. Therefore ethane is zero point zero six zero zero mole and methane zero point zero four zero zero mole. Their mole fractions are sixty and forty percent respectively. Water production is two a plus three b, or zero point two six zero mole. Oxygen demand is two a plus three point five b, or zero point two nine zero mole. With supplied molar masses sixteen and thirty, mean mixture molar mass is twenty four point four grams per mole. These results assume only the two named gases and complete formation of carbon dioxide and water.",
        "points": [
          "Total and carbon balances · a+b=0.100; a+2b=0.160 · a=0.0400; b=0.0600 mol",
          "Water and oxygen · 2a+3b; 2a+3.5b · 0.260 mol H₂O; 0.290 mol O₂",
          "Mean molar mass · 0.40×16 + 0.60×30 · 24.4 g/mol"
        ],
        "board": {
          "heading": "Combustion data resolve a binary gas mixture",
          "columns": [
            "Case / given",
            "Reason / calculation",
            "Result / condition"
          ],
          "rows": [
            [
              "Total and carbon balances",
              "a+b=0.100; a+2b=0.160",
              "a=0.0400; b=0.0600 mol"
            ],
            [
              "Water and oxygen",
              "2a+3b; 2a+3.5b",
              "0.260 mol H₂O; 0.290 mol O₂"
            ],
            [
              "Mean molar mass",
              "0.40×16 + 0.60×30",
              "24.4 g/mol"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Initial acid is 40.0 mL 0.500 M HCl. Remaining acid equals 10.0 mL 0.400 M NaOH. Acid consumed is:",
        "options": [
          "0.0160 mol",
          "0.0240 mol",
          "0.00400 mol",
          "0.0200 mol"
        ],
        "answer": 0,
        "explanation": "Initial 0.0200 minus residual 0.00400 gives 0.0160 mol hydrogen ions consumed."
      },
      {
        "question": "If only CaCO3 consumes that acid, with M=100 g/mol, its mass in a 1.00 g sample is:",
        "options": [
          "0.400 g",
          "0.800 g",
          "1.60 g",
          "0.160 g"
        ],
        "answer": 1,
        "explanation": "Carbonate moles are 0.0160/2=0.00800; multiply by 100 g/mol to obtain 0.800 g."
      },
      {
        "question": "A 2.32 g FeO/Fe2O3 mixture gives 1.68 g Fe on complete reduction. With Fe=56 and O=16, oxygen-atom amount removed is:",
        "options": [
          "0.0300 mol",
          "0.0100 mol",
          "0.0400 mol",
          "0.640 mol"
        ],
        "answer": 2,
        "explanation": "Oxygen mass is 2.32−1.68=0.64 g; divide by 16 g/mol for oxygen atoms."
      },
      {
        "question": "For that mixture, a+2b=0.0300 and a+3b=0.0400. Moles a of FeO and b of Fe2O3 are:",
        "options": [
          "0.0200 and 0.0100",
          "0.0100 and 0.0200",
          "0.0300 and 0.0400",
          "0.0100 and 0.0100"
        ],
        "answer": 3,
        "explanation": "Subtract the balances to obtain b=0.0100, then substitute to obtain a=0.0100."
      },
      {
        "question": "A two-isotope integer-mass model uses 35 and 37 with mean 35.5. Heavy-isotope number fraction is:",
        "options": [
          "0.25",
          "0.75",
          "0.50",
          "0.35"
        ],
        "answer": 0,
        "explanation": "Solve 35(1−f)+37f=35.5, giving 2f=0.5 and f=0.25, the number fraction of heavy atoms."
      },
      {
        "question": "Independent random pairing with light fraction 0.75 gives LL:LH:HH fractions in ratio:",
        "options": [
          "3:1:1",
          "9:6:1",
          "9:3:1",
          "1:6:9"
        ],
        "answer": 1,
        "explanation": "The mixed pair includes two orderings, so probabilities are 0.75², 2×0.75×0.25 and 0.25²."
      },
      {
        "question": "0.100 mol CH4/C2H6 produces 0.160 mol CO2 on complete combustion. Ethane amount is:",
        "options": [
          "0.0400 mol",
          "0.100 mol",
          "0.0600 mol",
          "0.160 mol"
        ],
        "answer": 2,
        "explanation": "Subtract a+b=0.100 from a+2b=0.160; b=0.0600 mol of ethane in the original binary mixture."
      },
      {
        "question": "For methane/ethane mole fractions 0.40/0.60 and supplied molar masses 16/30, the mixture molar mass is:",
        "options": [
          "23.0 g/mol",
          "46.0 g/mol",
          "19.6 g/mol",
          "24.4 g/mol"
        ],
        "answer": 3,
        "explanation": "Use the mole-fraction-weighted mean: 0.40×16+0.60×30=24.4 g/mol."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: reaction stoichiometry",
        "url": "https://openstax.org/books/chemistry-2e/pages/4-3-reaction-stoichiometry"
      },
      {
        "title": "OpenStax: atomic structure and isotopes",
        "url": "https://openstax.org/books/chemistry-2e/pages/2-3-atomic-structure-and-symbolism"
      },
      {
        "title": "OpenStax: quantitative chemical analysis",
        "url": "https://openstax.org/books/chemistry-2e/pages/4-5-quantitative-chemical-analysis"
      }
    ]
  }
} as const;
