// Authored by scripts/expand-analysis-practical-separation-maps.mjs.
export const analysisPracticalSeparationMapsAdditions = {
  "purification-analysis": {
    "base": 25,
    "quizBase": 40,
    "chapters": [
      {
        "title": "Two solubility balances explain selective crystallization",
        "formula": "50 g water: cold capacity A=1 g, B=3 g; feed A=10 g, B=2 g ⇒ ideal A crystals=9 g",
        "script": "Selective crystallization requires following the desired substance and the impurity separately. Use a supplied ideal model with ten grams of A and two grams of B in fifty grams of water. Hot solubilities are twenty grams A and ten grams B per hundred grams of water, allowing all of both substances to dissolve. At the specified cold temperature, solubilities become two grams A and six grams B per hundred grams of water. The cold mother liquor can therefore retain one gram A and up to three grams B. Nine grams A crystallize, while all two grams B can remain dissolved. This assumes independent solubilities, unchanged solvent mass and no mixed crystals or trapped mother liquor. Now stipulate a separate equilibrium wash of the isolated crystals with ten grams of fresh water at that same cold temperature. Its capacity for A is two tenths of a gram, leaving eight point eight grams A if that dissolution loss is reached. Recovery of A is then eighty eight percent of its original ten grams. A solubility ledger predicts ideal separation and loss; it does not experimentally certify purity when occlusion, adsorption or nonideal mixed solution effects occur.",
        "points": [
          "Feed: 10 g A + 2 g B; 50 g water · Hot capacities: A 10 g, B 5 g · Both dissolve in the supplied model",
          "Cold solubility per 100 g water: A 2, B 6 g · Cold capacities: A 1 g, B 3 g · A crystals 9 g; all B stays dissolved",
          "Fresh cold wash: 10 g water · A dissolution capacity .2 g · 8.8 g A retained; 88% recovery"
        ],
        "board": {
          "heading": "Two solubility balances explain selective crystallization",
          "columns": [
            "Given / observation",
            "Balance / explanation",
            "Result / boundary"
          ],
          "rows": [
            [
              "Feed: 10 g A + 2 g B; 50 g water",
              "Hot capacities: A 10 g, B 5 g",
              "Both dissolve in the supplied model"
            ],
            [
              "Cold solubility per 100 g water: A 2, B 6 g",
              "Cold capacities: A 1 g, B 3 g",
              "A crystals 9 g; all B stays dissolved"
            ],
            [
              "Fresh cold wash: 10 g water",
              "A dissolution capacity .2 g",
              "8.8 g A retained; 88% recovery"
            ]
          ]
        }
      },
      {
        "title": "Reduced pressure changes the boiling condition",
        "formula": "Boiling requires pvapour(T)=pexternal; supplied p*=20,50,100 kPa at 70,100,130°C",
        "script": "A boiling point belongs to a specified external pressure, not just to the name of a liquid. Consider an original pure liquid model whose equilibrium vapour pressures are twenty kilopascals at seventy degrees Celsius, fifty at one hundred degrees, and one hundred at one hundred thirty degrees. Under an absolute external pressure of twenty kilopascals, the supplied boiling temperature is seventy degrees. At fifty kilopascals it is one hundred degrees, and at one hundred kilopascals it is one hundred thirty. Suppose a separate supplied stability limit says the substance should remain below ninety degrees for the comparison. Of these three pressures, only the twenty kilopascal entry meets that stated temperature criterion. Lowering pressure allows boiling at a lower temperature because the vapour pressure needs to match a smaller external pressure. It does not change molecular identity or prove that decomposition and bumping cannot occur. Use absolute pressure rather than inserting an unconverted gauge reading. The numerical table concerns a pure component; a mixture needs its own phase equilibrium information. This is interpretation of a vacuum distillation principle, not a complete apparatus or operating procedure.",
        "points": [
          "Supplied p* at 70,100,130°C · 20,50,100 kPa respectively · Boil where p*=external absolute pressure",
          "Supplied comparison limit: below 90°C · 20 kPa gives boiling at 70°C · 50 and 100 kPa entries exceed the limit",
          "Pressure changes boiling condition · Not a change of chemical identity · Mixtures and decomposition require more evidence"
        ],
        "board": {
          "heading": "Reduced pressure changes the boiling condition",
          "columns": [
            "Given / observation",
            "Balance / explanation",
            "Result / boundary"
          ],
          "rows": [
            [
              "Supplied p* at 70,100,130°C",
              "20,50,100 kPa respectively",
              "Boil where p*=external absolute pressure"
            ],
            [
              "Supplied comparison limit: below 90°C",
              "20 kPa gives boiling at 70°C",
              "50 and 100 kPa entries exceed the limit"
            ],
            [
              "Pressure changes boiling condition",
              "Not a change of chemical identity",
              "Mixtures and decomposition require more evidence"
            ]
          ]
        }
      },
      {
        "title": "Supporting chromatography: retention and resolution answer different questions",
        "formula": "k=(tR−tM)/tM; Rs=2(tR,B−tR,A)/(wA+wB) for supplied baseline widths",
        "script": "A chromatographic retention time includes the time taken by material that is not retained. In a supporting column model, let the measured dead time be one minute and the two retention times four and five minutes. The retention factor for a peak is its adjusted retention time divided by dead time, giving three for A and four for B. The selectivity ratio using those adjusted factors is four thirds, not five fourths from the raw retention times. Separation quality also depends on peak widths. Define resolution here as twice the difference of retention times divided by the sum of the two baseline widths. If both supplied baseline widths are half a minute, resolution is two. If both broaden to one point two minutes while their retention times stay fixed, resolution falls to about zero point eight three three. Distinct peak centres alone therefore do not guarantee well resolved components. The width convention must remain explicit because a half height formula uses a different numerical coefficient. These supporting quantities describe the supplied chromatogram and do not establish molecular identity or purity from a single retention value.",
        "points": [
          "tM=1 min; tR,A=4, tR,B=5 min · kA=3; kB=4; selectivity=4/3 · Subtract dead time before comparing k",
          "Baseline widths .5 and .5 min · Rs=2(5−4)/(.5+.5) · Rs=2.0",
          "Same centres; widths 1.2 and 1.2 min · Rs=2/2.4≈.833 · Broader peaks reduce resolution"
        ],
        "board": {
          "heading": "Supporting chromatography: retention and resolution answer different questions",
          "columns": [
            "Given / observation",
            "Balance / explanation",
            "Result / boundary"
          ],
          "rows": [
            [
              "tM=1 min; tR,A=4, tR,B=5 min",
              "kA=3; kB=4; selectivity=4/3",
              "Subtract dead time before comparing k"
            ],
            [
              "Baseline widths .5 and .5 min",
              "Rs=2(5−4)/(.5+.5)",
              "Rs=2.0"
            ],
            [
              "Same centres; widths 1.2 and 1.2 min",
              "Rs=2/2.4≈.833",
              "Broader peaks reduce resolution"
            ]
          ]
        }
      },
      {
        "title": "Supporting gravimetry: propagate bounds through the mass ratio",
        "formula": "wSO₄=100(mp/233)96/ms; mp=.4660±.0002 g, ms=.6000±.0001 g ⇒ about31.98–32.02%",
        "script": "A reported analyte percentage inherits the bounds of both the precipitate mass and the original sample mass. Use a supporting sulfate gravimetry model with already blank corrected barium sulfate mass four hundred sixty six milligrams, bounded within two tenths of a milligram. The original sample mass is six hundred milligrams, bounded within one tenth of a milligram. Supplied molar masses are two hundred thirty three for barium sulfate and ninety six for sulfate, in grams per mole. The central sulfate mass fraction is precipitate mass times ninety six over two hundred thirty three, divided by sample mass. Its percentage is thirty two point zero. The smallest percentage uses the smallest allowed precipitate mass and the largest allowed sample mass; the largest percentage uses the opposite endpoints. The resulting interval is contained approximately within thirty one point nine eight to thirty two point zero two percent when rounded outward. These are worst case bounds for the supplied independent ranges, not a statistical confidence interval. The model assumes quantitative conversion, pure dry precipitate and a valid blank correction; uncertainty arithmetic cannot repair a wrong chemical factor or unidentified coprecipitation.",
        "points": [
          "Blank-corrected mp=.4660±.0002 g · Sample ms=.6000±.0001 g · Use supplied independent bounds",
          "Sulfate factor=96/233 · 100×mp×(96/233)/ms · Central result 32.0%",
          "Minimum: mp,min / ms,max · Maximum: mp,max / ms,min · Outward-rounded bound:31.98–32.02%"
        ],
        "board": {
          "heading": "Supporting gravimetry: propagate bounds through the mass ratio",
          "columns": [
            "Given / observation",
            "Balance / explanation",
            "Result / boundary"
          ],
          "rows": [
            [
              "Blank-corrected mp=.4660±.0002 g",
              "Sample ms=.6000±.0001 g",
              "Use supplied independent bounds"
            ],
            [
              "Sulfate factor=96/233",
              "100×mp×(96/233)/ms",
              "Central result 32.0%"
            ],
            [
              "Minimum: mp,min / ms,max",
              "Maximum: mp,max / ms,min",
              "Outward-rounded bound:31.98–32.02%"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "In the supplied cold crystallization model, 50 g water with A solubility2 g/100 g water and B solubility6 g/100 g water retains how much of an initial10 g A and2 g B?",
        "options": [
          "1 g A and2 g B dissolved",
          "2 g A and6 g B dissolved",
          "10 g A and no B",
          "No A and2 g solid B"
        ],
        "answer": 0,
        "explanation": "Cold capacities are1 g A and3 g B, so1 g A and all2 g B remain in solution;9 g A crystallizes ideally."
      },
      {
        "question": "A separate equilibrium wash of those9 g A crystals with10 g fresh cold water can dissolve .2 g A in the stated model. Recovery relative to initial10 g A is:",
        "options": [
          "90%",
          "88%",
          "98%",
          "8.8%"
        ],
        "answer": 1,
        "explanation": "Retained A=9−.2=8.8 g;8.8/10=88%. No mechanical loss is included."
      },
      {
        "question": "For the supplied pure-liquid table, p*=20 kPa at70°C. At20 kPa absolute external pressure the boiling temperature is:",
        "options": [
          "130°C",
          "100°C",
          "70°C",
          "20°C"
        ],
        "answer": 2,
        "explanation": "Boiling occurs when the equilibrium vapour pressure reaches the external absolute pressure."
      },
      {
        "question": "Using an unconverted gauge-pressure reading in that table would be inappropriate because:",
        "options": [
          "Pressure never affects boiling",
          "The liquid changes identity in vacuum",
          "All pressures are equal",
          "The boiling comparison requires absolute external pressure"
        ],
        "answer": 3,
        "explanation": "Gauge pressure is relative to a reference; it must be converted before comparison with an absolute vapour-pressure table."
      },
      {
        "question": "With tM=1 min and tR,A=4,tR,B=5 min, the adjusted retention factors are:",
        "options": [
          "3 and4",
          "4 and5",
          "1/4 and1/5",
          "5 and6"
        ],
        "answer": 0,
        "explanation": "k=(tR−tM)/tM; subtract1 minute from each retention time before dividing by1."
      },
      {
        "question": "For those peak centres and baseline widths .5 min each, the specified resolution is:",
        "options": [
          "1",
          "2",
          "4",
          "0.5"
        ],
        "answer": 1,
        "explanation": "Rs=2(5−4)/(.5+.5)=2. Broader baseline widths at the same centres reduce this value."
      },
      {
        "question": "For the stated gravimetric percentage, which endpoint combination gives the largest value?",
        "options": [
          "Smallest precipitate and largest sample",
          "Both smallest",
          "Largest precipitate and smallest sample",
          "Both largest necessarily"
        ],
        "answer": 2,
        "explanation": "The percentage increases with precipitate mass and decreases with sample mass."
      },
      {
        "question": "The supplied .4660 g BaSO₄ from .6000 g sample gives the central sulfate mass percentage:",
        "options": [
          "77.67%",
          "46.60%",
          "96%",
          "32.0%"
        ],
        "answer": 3,
        "explanation": "Sulfate mass=.4660×96/233=.1920 g; .1920/.6000×100=32.0%."
      }
    ],
    "sources": [
      {
        "title": "Lisa Nichols: crystallization principles and solvent losses",
        "url": "https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Organic_Chemistry_Lab_Techniques_(Nichols)/03%3A_Crystallization/3.04%3A_Crystallization_Theory"
      },
      {
        "title": "Lisa Nichols: reduced-pressure boiling",
        "url": "https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Organic_Chemistry_Lab_Techniques_(Nichols)/05%3A_Distillation/5.04%3A_Vacuum_Distillation/5.4A%3A_Overview_of_Vacuum_Distillation"
      },
      {
        "title": "David Harvey: general chromatography theory",
        "url": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Analytical_Chemistry_2.1_by_David_Harvey/Analytical_Chemistry_2.1_(Harvey)/12%3A_Chromatographic_and_Electrophoretic_Methods/12.02%3A_General_Theory_of_Column_Chromatography"
      }
    ]
  },
  "practical-chemistry": {
    "base": 25,
    "quizBase": 40,
    "chapters": [
      {
        "title": "Silver halides need colour and ammonia behaviour together",
        "formula": "AgCl: white, dissolves in dilute NH₃; AgBr: cream, requires concentrated NH₃ in the usual comparison; AgI: yellow, remains",
        "script": "A silver halide comparison combines precipitation with complex formation rather than relying only on colour. In the standard introductory comparison under a controlled analytical scheme, silver chloride is white and dissolves in dilute aqueous ammonia. Silver bromide is cream and is much less soluble in dilute ammonia, while concentrated ammonia can dissolve it under the usual comparison conditions. Silver iodide is yellow and remains essentially undissolved in that concentrated ammonia comparison. Ammonia binds dissolved silver ions as a diamminesilver complex, lowering the free silver concentration and allowing more solid to dissolve when the combined equilibria permit. The differing silver halide solubilities mean that the same ligand does not produce the same observation for all three. These are qualitative comparison conditions, not claims of absolute zero solubility or a universal endpoint independent of concentration. Mixtures, lighting, small precipitate amounts and interfering ions can make colour alone misleading. Earlier clean extract and acid choice controls still apply. The observation should refer to the defined precipitate and reagent stage, rather than treating every pale solid that responds to ammonia as an infallible identity test.",
        "points": [
          "AgCl white; AgBr cream; AgI yellow · Compare the defined precipitates · Colour alone is insufficient",
          "Dilute ammonia dissolves AgCl · Concentrated ammonia can dissolve AgBr · AgI remains in the usual comparison",
          "Ag⁺ + 2NH₃ ⇌ [Ag(NH₃)₂]⁺ · Complexation lowers free Ag⁺ · Interpret with solubility and interference controls"
        ],
        "board": {
          "heading": "Silver halides need colour and ammonia behaviour together",
          "columns": [
            "Given / observation",
            "Balance / explanation",
            "Result / boundary"
          ],
          "rows": [
            [
              "AgCl white; AgBr cream; AgI yellow",
              "Compare the defined precipitates",
              "Colour alone is insufficient"
            ],
            [
              "Dilute ammonia dissolves AgCl",
              "Concentrated ammonia can dissolve AgBr",
              "AgI remains in the usual comparison"
            ],
            [
              "Ag⁺ + 2NH₃ ⇌ [Ag(NH₃)₂]⁺",
              "Complexation lowers free Ag⁺",
              "Interpret with solubility and interference controls"
            ]
          ]
        }
      },
      {
        "title": "Aluminium and iron hydroxides differ in excess alkali",
        "formula": "Al³⁺+3OH⁻→Al(OH)₃; Al(OH)₃+OH⁻→[Al(OH)₄]⁻; Fe(OH)₃ remains in the usual excess-NaOH comparison",
        "script": "A precipitate should be followed through the next reagent condition before assigning an ion. In the standard aluminium three versus iron three comparison, hydroxide can give a gelatinous white aluminium hydroxide and a reddish brown iron three hydroxide. In suitable excess sodium hydroxide, the amphoteric aluminium hydroxide dissolves through formation of soluble hydroxoaluminate, commonly written as the tetrahydroxoaluminate ion in this aqueous model. The equation aluminium hydroxide plus hydroxide giving that ion balances four oxygens, four hydrogens and charge minus one. Iron three hydroxide does not show the same dissolution in the ordinary excess alkali comparison. This provides a distinction between the specified pair after appropriate separation and controls. It does not identify aluminium uniquely among all possible ions, since zinc hydroxide also shows amphoteric dissolution. The precipitated aluminium has not changed its plus three oxidation state merely because the dissolved complex carries charge minus one. Solution conditions and competing ligands can alter observations, so keep the supplied test scheme explicit. Explain the transition from free cation to precipitate to complex rather than calling disappearance of a solid disappearance of the element.",
        "points": [
          "Al³⁺ +3OH⁻ → white Al(OH)₃ · Excess OH⁻ gives [Al(OH)₄]⁻ · Al stays in oxidation state +3",
          "Fe³⁺ gives reddish-brown Fe(OH)₃ · No analogous dissolution in usual excess NaOH · Distinguishes this specified pair",
          "Zn(OH)₂ can also be amphoteric · Dissolution is not unique proof of Al · Need separation and additional evidence"
        ],
        "board": {
          "heading": "Aluminium and iron hydroxides differ in excess alkali",
          "columns": [
            "Given / observation",
            "Balance / explanation",
            "Result / boundary"
          ],
          "rows": [
            [
              "Al³⁺ +3OH⁻ → white Al(OH)₃",
              "Excess OH⁻ gives [Al(OH)₄]⁻",
              "Al stays in oxidation state +3"
            ],
            [
              "Fe³⁺ gives reddish-brown Fe(OH)₃",
              "No analogous dissolution in usual excess NaOH",
              "Distinguishes this specified pair"
            ],
            [
              "Zn(OH)₂ can also be amphoteric",
              "Dissolution is not unique proof of Al",
              "Need separation and additional evidence"
            ]
          ]
        }
      },
      {
        "title": "Acid persistence separates sulfate from a sulfite comparison",
        "formula": "BaSO₃+2H⁺→Ba²⁺+SO₂+H₂O; BaSO₄ persists under the specified dilute-acid conditions",
        "script": "A white barium precipitate is not by itself a unique sulfate identification. Compare sulfate and sulfite within a supplied controlled analytical scheme. Barium sulfate remains as a white solid under the usual dilute hydrochloric acid comparison, whereas barium sulfite can dissolve on acid treatment as sulfur dioxide and water form. The sulfite ion consumes two protons to give sulfur dioxide and water; with the barium ion released, the full precipitate equation balances both atoms and total charge. Carbonate can also give an acid reactive barium solid but releases carbon dioxide rather than sulfur dioxide, so dissolution or effervescence alone is insufficient. Sulfur dioxide can reduce a suitable oxidant under the stated confirmatory conditions, providing different evidence from a simple carbonate gas response. Gas identity is inferred through a controlled scheme, never by tasting or deliberately smelling it. Oxidation of sulfite to sulfate before observation can change the result, and mixtures require additional separation. Keep the original anion, the precipitate and the acid reaction as distinct stages. A persistent barium precipitate is supporting evidence under specified conditions, not a complete analysis of an arbitrary unknown sample.",
        "points": [
          "White barium salt alone · Could reflect different anions · Need the acid-response stage",
          "BaSO₃ +2H⁺ → Ba²⁺+SO₂+H₂O · Solid dissolves; sulfur stays at +4 · Controlled confirmatory gas evidence",
          "BaSO₄ persists in usual dilute acid · Carbonate instead releases CO₂ · Oxidation and mixtures can interfere"
        ],
        "board": {
          "heading": "Acid persistence separates sulfate from a sulfite comparison",
          "columns": [
            "Given / observation",
            "Balance / explanation",
            "Result / boundary"
          ],
          "rows": [
            [
              "White barium salt alone",
              "Could reflect different anions",
              "Need the acid-response stage"
            ],
            [
              "BaSO₃ +2H⁺ → Ba²⁺+SO₂+H₂O",
              "Solid dissolves; sulfur stays at +4",
              "Controlled confirmatory gas evidence"
            ],
            [
              "BaSO₄ persists in usual dilute acid",
              "Carbonate instead releases CO₂",
              "Oxidation and mixtures can interfere"
            ]
          ]
        }
      },
      {
        "title": "Ammonium evidence follows proton transfer without changing nitrogen oxidation state",
        "formula": "NH₄⁺+OH⁻→NH₃+H₂O; liberated basic gas is evidence within a controlled salt-analysis scheme",
        "script": "Ammonium identification begins with an acid base change rather than a nitrogen oxidation reaction. In the standard analytical model, ammonium ion reacts with hydroxide to form ammonia and water. Nitrogen, hydrogen, oxygen and total charge all balance, and nitrogen remains at oxidation state minus three in both ammonium and ammonia. The ammonium ion carries charge plus one, whereas the ammonia molecule is neutral; a charge change of the species does not by itself imply oxidation. A supplied observation that liberated gas turns moist red litmus blue is consistent with a basic gas such as ammonia. Moisture matters because the indicator response requires the aqueous acid base environment. That one response is not unique proof for every possible unknown, since other volatile bases can interfere. Within a controlled inorganic salt scheme, sample blanks and exclusion of interfering species make the ammonium interpretation stronger. Nitrate does not simply become ammonia by this same hydroxide proton transfer equation; such a transformation would require additional reduction chemistry. Treat the gas observation and balanced equation as connected pieces of evidence, without inventing a reducing reagent or identifying a substance by its smell.",
        "points": [
          "NH₄⁺ + OH⁻ → NH₃ + H₂O · Total charge +1−1=0 · Nitrogen remains −3",
          "Supplied gas turns moist red litmus blue · Consistent with ammonia/basic gas · Moisture enables indicator response",
          "Volatile bases can interfere · Nitrate requires reduction to reach NH₃ · Controlled scheme, not smell identification"
        ],
        "board": {
          "heading": "Ammonium evidence follows proton transfer without changing nitrogen oxidation state",
          "columns": [
            "Given / observation",
            "Balance / explanation",
            "Result / boundary"
          ],
          "rows": [
            [
              "NH₄⁺ + OH⁻ → NH₃ + H₂O",
              "Total charge +1−1=0",
              "Nitrogen remains −3"
            ],
            [
              "Supplied gas turns moist red litmus blue",
              "Consistent with ammonia/basic gas",
              "Moisture enables indicator response"
            ],
            [
              "Volatile bases can interfere",
              "Nitrate requires reduction to reach NH₃",
              "Controlled scheme, not smell identification"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "In the usual controlled silver-halide comparison, the precipitate readily dissolved by dilute aqueous ammonia is:",
        "options": [
          "AgI",
          "AgCl",
          "Every silver salt equally",
          "BaSO₄"
        ],
        "answer": 1,
        "explanation": "Complex formation permits AgCl dissolution under the standard dilute-ammonia comparison; AgBr requires different conditions and AgI remains."
      },
      {
        "question": "Which combined observation is consistent with AgI in that comparison?",
        "options": [
          "White and dissolves readily in dilute ammonia",
          "Cream and always completely soluble in water",
          "Yellow and remains in the concentrated-ammonia comparison",
          "Reddish brown hydroxide"
        ],
        "answer": 2,
        "explanation": "Use both the stated colour and ammonia behaviour, with interference controls."
      },
      {
        "question": "The soluble aluminium species in the supplied excess-OH− model is:",
        "options": [
          "Al⁻",
          "AlO₄⁵⁻",
          "Fe(OH)₄⁻",
          "[Al(OH)₄]⁻"
        ],
        "answer": 3,
        "explanation": "Al(OH)3+OH−→[Al(OH)4]− balances atoms and charge while Al remains +3."
      },
      {
        "question": "Why does excess-alkali dissolution alone not uniquely prove Al³⁺ in an arbitrary unknown?",
        "options": [
          "Zinc hydroxide can also show amphoteric dissolution",
          "All metals are aluminium",
          "Iron must disappear in every solution",
          "Al changes into Zn"
        ],
        "answer": 0,
        "explanation": "The response distinguishes a specified pair but is shared by other ions, requiring separation and confirmation."
      },
      {
        "question": "Acid reaction of the supplied BaSO₃ precipitate produces the gas:",
        "options": [
          "N₂",
          "SO₂",
          "NH₃",
          "H₂"
        ],
        "answer": 1,
        "explanation": "BaSO3+2H+→Ba2++SO2+H2O. The sulfur oxidation state remains +4 in this acid-base conversion."
      },
      {
        "question": "A white barium precipitate that persists in the specified usual dilute-acid comparison is consistent with:",
        "options": [
          "Only carbonate in every case",
          "Ammonium hydroxide",
          "BaSO₄",
          "A proof of every anion in a mixture"
        ],
        "answer": 2,
        "explanation": "BaSO4 persistence supports sulfate under the defined scheme; one observation is not a complete arbitrary-mixture analysis."
      },
      {
        "question": "In NH₄⁺+OH⁻→NH₃+H₂O, the nitrogen oxidation state:",
        "options": [
          "Changes from+1 to0",
          "Changes from+5 to−3",
          "Becomes equal to molecular charge",
          "Remains−3"
        ],
        "answer": 3,
        "explanation": "Both NH4+ and NH3 have nitrogen−3; this is proton transfer, not reduction."
      },
      {
        "question": "Why does a basic liberated gas turning moist red litmus blue need additional context?",
        "options": [
          "Other volatile bases can interfere",
          "Every basic gas is uniquely ammonium",
          "Dry indicator is always sufficient",
          "Nitrate automatically releases NH₃ with no reduction"
        ],
        "answer": 0,
        "explanation": "The observation is consistent with ammonia but needs the controlled scheme and interference exclusions."
      }
    ],
    "sources": [
      {
        "title": "NCERT Laboratory Manual: systematic qualitative analysis",
        "url": "https://www.ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/chemistry/kelm207.pdf"
      },
      {
        "title": "OpenStax: coupled precipitation and complex-ion equilibria",
        "url": "https://openstax.org/books/chemistry-2e/pages/15-2-coupled-equilibria"
      }
    ]
  }
} as const;
