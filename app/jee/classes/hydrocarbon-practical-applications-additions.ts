// Authored by scripts/expand-hydrocarbon-practical-applications.mjs.
export const hydrocarbonPracticalApplicationsAdditions = {
  "hydrocarbons": {
    "base": 17,
    "quizBase": 24,
    "chapters": [
      {
        "title": "Hydroboration changes hydration orientation",
        "formula": "Propene: acid hydration → propan-2-ol; hydroboration–oxidation → propan-1-ol",
        "script": "Two alkene hydration routes can give different alcohols while retaining the same carbon skeleton. In ordinary acid catalysed hydration of propene, the hydroxyl group appears mainly on the central carbon, giving propan two ol. Hydroboration followed by suitable oxidation instead gives propan one ol, placing the hydroxyl group on the less substituted terminal carbon. During hydroboration, boron and hydrogen add from the same face of the double bond. Oxidation replaces the carbon boron bond with a carbon oxygen bond with retention at that carbon, so the overall addition of hydrogen and hydroxyl is syn. This is a stereochemical statement, while the less substituted carbon preference is a regiochemical statement. Neither should be confused with the radical peroxide effect for hydrogen bromide. The hydroboration step does not proceed through a free carbocation, so the familiar carbocation rearrangement argument is not the pathway used here. Both propene products have three carbons and the alcohol formula three carbons, eight hydrogens and one oxygen. Their different hydroxyl positions make them constitutional isomers. Always name both the reagent sequence and the product connectivity before applying an orientation label.",
        "points": [
          "Propene; acid-catalysed hydration · OH mainly on central carbon · Propan-2-ol; three carbons",
          "Hydroboration, then oxidation · OH on less substituted carbon · Propan-1-ol; three carbons",
          "B and H add on same face · Oxidation retains configuration · Net syn H / OH; no free carbocation"
        ],
        "board": {
          "heading": "Hydroboration changes hydration orientation",
          "columns": [
            "Given / system",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Propene; acid-catalysed hydration",
              "OH mainly on central carbon",
              "Propan-2-ol; three carbons"
            ],
            [
              "Hydroboration, then oxidation",
              "OH on less substituted carbon",
              "Propan-1-ol; three carbons"
            ],
            [
              "B and H add on same face",
              "Oxidation retains configuration",
              "Net syn H / OH; no free carbocation"
            ]
          ]
        }
      },
      {
        "title": "Oxidative cleavage depends on carbon substitution",
        "formula": "Strong alkene oxidation, then acid workup: =CH₂ → CO₂; =CHR → RCOOH; =CR₂ → ketone",
        "script": "Cleavage of an alkene does not always stop at the same products as reductive ozonolysis. Under the standard strong oxidative cleavage model using hot permanganate with an appropriate acid workup, examine each original double bonded carbon separately. A carbon carrying one hydrogen gives a carboxylic acid fragment. A carbon carrying no hydrogen gives a ketone fragment. A terminal methylene carbon can be oxidized through smaller intermediates to carbon dioxide in the complete oxidation model. Thus propene gives ethanoic acid and carbon dioxide after the specified workup, accounting for two organic carbons plus one inorganic carbon. Two methylbut two ene instead gives propanone and ethanoic acid: its more substituted double bond carbon becomes a ketone and its hydrogen bearing partner becomes an acid. The total carbon count remains five. Cold dilute permanganate under mild conditions can instead favour addition to form a vicinal diol, so the reagent name alone does not fix the oxidation extent. Carboxylate salts can be present before acid workup. State conditions and workup before choosing between diol formation, aldehyde formation and further oxidative cleavage.",
        "points": [
          "Original alkene carbon =CHR · Strong cleavage; acid workup · RCOOH; =CR₂ gives ketone",
          "Propene; complete model · Terminal =CH₂ carbon → CO₂ · Ethanoic acid + CO₂: 2 + 1 C",
          "2-Methylbut-2-ene · Ketone end plus acid end · Propanone + ethanoic acid: 3 + 2 C"
        ],
        "board": {
          "heading": "Oxidative cleavage depends on carbon substitution",
          "columns": [
            "Given / system",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Original alkene carbon =CHR",
              "Strong cleavage; acid workup",
              "RCOOH; =CR₂ gives ketone"
            ],
            [
              "Propene; complete model",
              "Terminal =CH₂ carbon → CO₂",
              "Ethanoic acid + CO₂: 2 + 1 C"
            ],
            [
              "2-Methylbut-2-ene",
              "Ketone end plus acid end",
              "Propanone + ethanoic acid: 3 + 2 C"
            ]
          ]
        }
      },
      {
        "title": "Hydrogenation enthalpy compares starting alkenes",
        "formula": "Same hydrogenation product: H(A) − H(B) = ΔHhyd(B) − ΔHhyd(A)",
        "script": "Hydrogenation energy can compare two starting alkenes only when the reaction endpoints are properly matched. Suppose two isomeric alkenes each consume one mole of hydrogen to form the same alkane in the same physical state. Use illustrative hydrogenation enthalpies of minus one hundred twenty kilojoules per mole for A and minus one hundred sixteen for B. Because both routes finish at the same enthalpy, A must start four kilojoules per mole above B. It releases more heat because its initial enthalpy is higher, so B is the more enthalpically stable alkene in this comparison. The less negative hydrogenation enthalpy therefore corresponds to the lower starting enthalpy when the endpoints match. This does not establish which alkene hydrogenates faster: activation barriers control reaction rates. It also does not directly provide an equilibrium constant, which depends on Gibbs energy and therefore includes entropy. Comparing different product alkanes without correcting their enthalpies would invalidate the simple subtraction. In exam data, first verify equal reaction stoichiometry and a common final product, then subtract the signed enthalpies before interpreting stability.",
        "points": [
          "A → same alkane; illustrative data · ΔHhyd(A)=−120 kJ/mol · A releases more heat",
          "B → same alkane; same states · ΔHhyd(B)=−116 kJ/mol · B starts 4 kJ/mol lower",
          "Common endpoint is essential · Enthalpy difference ≠ rate barrier · No equilibrium K without ΔG"
        ],
        "board": {
          "heading": "Hydrogenation enthalpy compares starting alkenes",
          "columns": [
            "Given / system",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "A → same alkane; illustrative data",
              "ΔHhyd(A)=−120 kJ/mol",
              "A releases more heat"
            ],
            [
              "B → same alkane; same states",
              "ΔHhyd(B)=−116 kJ/mol",
              "B starts 4 kJ/mol lower"
            ],
            [
              "Common endpoint is essential",
              "Enthalpy difference ≠ rate barrier",
              "No equilibrium K without ΔG"
            ]
          ]
        }
      },
      {
        "title": "Mixed Wurtz coupling gives several skeletons",
        "formula": "RBr + R′Br + sodium: R–R, R–R′ and R′–R′ are possible couplings",
        "script": "The Wurtz reaction illustrates why a carbon joining reaction is not automatically a selective synthesis. In the simple net model, two alkyl bromide molecules react with two sodium atoms to give one coupled alkane and two sodium bromide units. With only a suitable primary ethyl halide, the carbon groups can join to give butane. Now consider a mixture of methyl and ethyl halides. Methyl with methyl gives ethane, methyl with ethyl gives propane, and ethyl with ethyl gives butane. The cross coupled product is therefore accompanied by two possible self coupling skeletons. Listing those three products does not prove that they occur in equal amounts, or that the desired cross product has a fixed yield. Reactivity, competing reactions and conditions affect the actual mixture. The mixed route is consequently a poor general way to claim selective preparation of an unsymmetrical alkane. Carbon accounting still provides a reliable check: combine the carbon counts of the two groups that actually join, rather than adding all the starting carbons into every product. Treat the net equation as transformation bookkeeping and keep selectivity separate from theoretical stoichiometry.",
        "points": [
          "One suitable primary ethyl halide · Two two-carbon groups couple · Butane; net 2RBr + 2Na",
          "Mixed methyl and ethyl halides · Self coupling and cross coupling · Ethane, propane and butane possible",
          "Carbon pairs: 1+1, 1+2, 2+2 · Products need not be equal amounts · Poor selective unsymmetrical route"
        ],
        "board": {
          "heading": "Mixed Wurtz coupling gives several skeletons",
          "columns": [
            "Given / system",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "One suitable primary ethyl halide",
              "Two two-carbon groups couple",
              "Butane; net 2RBr + 2Na"
            ],
            [
              "Mixed methyl and ethyl halides",
              "Self coupling and cross coupling",
              "Ethane, propane and butane possible"
            ],
            [
              "Carbon pairs: 1+1, 1+2, 2+2",
              "Products need not be equal amounts",
              "Poor selective unsymmetrical route"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Propene under suitable hydroboration followed by oxidation gives mainly:",
        "options": [
          "Propan-1-ol",
          "Propan-2-ol",
          "Ethanoic acid",
          "Butan-1-ol"
        ],
        "answer": 0,
        "explanation": "The net hydroxyl placement is on the less substituted carbon, retaining the three-carbon skeleton."
      },
      {
        "question": "The overall H/OH addition in standard hydroboration–oxidation is:",
        "options": [
          "Anti through a free carbocation",
          "Syn, with the hydroboration step avoiding a free carbocation",
          "A radical HBr chain reaction",
          "A carbon-chain shortening"
        ],
        "answer": 1,
        "explanation": "B and H add from one face, and oxidation replaces B with OH with retention."
      },
      {
        "question": "Under complete strong oxidative cleavage followed by acid workup, propene gives:",
        "options": [
          "Propan-1-ol only",
          "Two ethanal molecules",
          "Ethanoic acid and carbon dioxide",
          "Propanone and methanal"
        ],
        "answer": 2,
        "explanation": "The CH3CH= carbon becomes the two-carbon acid and terminal =CH2 is fully oxidized to CO2."
      },
      {
        "question": "Strong oxidative cleavage of 2-methylbut-2-ene with acid workup gives:",
        "options": [
          "Two propanone molecules",
          "Methanal and butanal",
          "Only a five-carbon alcohol",
          "Propanone and ethanoic acid"
        ],
        "answer": 3,
        "explanation": "The carbon without a double-bond hydrogen gives a ketone; the other gives an acid, preserving 3+2=5 carbons."
      },
      {
        "question": "A and B hydrogenate to the same alkane with illustrative ΔH values −120 and −116 kJ/mol. Which statement follows?",
        "options": [
          "B starts 4 kJ/mol lower in enthalpy",
          "A starts 4 kJ/mol lower",
          "B must hydrogenate faster",
          "The equilibrium constant is exactly 4"
        ],
        "answer": 0,
        "explanation": "A releases four more kJ/mol to reach the common endpoint, so A starts higher."
      },
      {
        "question": "The simple subtraction of hydrogenation enthalpies requires:",
        "options": [
          "Different unrelated product alkanes",
          "A common product and matched stoichiometry and states",
          "Equal reaction rates",
          "A catalyst with zero activation barrier"
        ],
        "answer": 1,
        "explanation": "The endpoint must cancel in the enthalpy cycle; reaction rate is a separate issue."
      },
      {
        "question": "Mixed methyl and ethyl halides in a Wurtz coupling model can give which alkane skeletons?",
        "options": [
          "Methane and pentane only",
          "Propane only",
          "Ethane, propane and butane",
          "Ethene and ethyne only"
        ],
        "answer": 2,
        "explanation": "The pairings are methyl/methyl, methyl/ethyl and ethyl/ethyl."
      },
      {
        "question": "Why is mixed Wurtz coupling generally unsuitable for claiming a pure unsymmetrical alkane?",
        "options": [
          "Carbon atoms disappear",
          "Sodium supplies extra carbons",
          "Only self coupling can ever occur",
          "Self and cross coupling can produce a mixture"
        ],
        "answer": 3,
        "explanation": "Possible competing pairings limit selectivity; the net equation does not guarantee a product ratio."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: alkene hydroboration–oxidation",
        "url": "https://openstax.org/books/organic-chemistry/pages/8-5-hydration-of-alkenes-addition-of-h2o-by-hydroboration"
      },
      {
        "title": "OpenStax: alkene stability and hydrogenation",
        "url": "https://openstax.org/books/organic-chemistry/pages/7-6-stability-of-alkenes"
      },
      {
        "title": "OpenStax: alkene oxidation and cleavage",
        "url": "https://openstax.org/books/organic-chemistry/pages/8-8-oxidation-of-alkenes-cleavage-to-carbonyl-compounds"
      },
      {
        "title": "NCERT: alkyl halides and Wurtz coupling",
        "url": "https://ncert.nic.in/textbook/pdf/lech201.pdf"
      }
    ]
  },
  "practical-chemistry": {
    "base": 17,
    "quizBase": 24,
    "chapters": [
      {
        "title": "Choose an indicator from the equivalence region",
        "formula": "Strong/strong: near pH 7 at 25 °C; weak acid/strong base: above 7",
        "script": "Indicator selection follows the titration curve rather than a rule that every equivalence point has p H seven. For an ordinary dilute strong acid and strong base titration at twenty five degrees Celsius, equivalence is near neutral. A weak acid titrated by a strong base instead leaves its conjugate base in solution, so hydrolysis makes the equivalence solution basic. A weak base titrated by a strong acid leaves a conjugate acid and gives an acidic equivalence solution. Choose an indicator whose transition lies within the steep p H change for the actual concentration and system. Phenolphthalein is commonly suitable for a typical ethanoic acid and sodium hydroxide titration, while methyl orange would change too early in that comparison. This is not a guarantee that one named indicator works at every dilution. The observed colour endpoint is also not identical by definition to the stoichiometric equivalence point. For a weak acid with supplied p K a four point seven six, the ideal half equivalence buffer has equal acid and conjugate base amounts, giving p H four point seven six. Half equivalence and equivalence therefore answer different questions.",
        "points": [
          "Strong acid / strong base; 25 °C · Matched dilute system · Equivalence near pH 7",
          "Weak acid / strong base · Conjugate base hydrolysis · Equivalence above 7; suitable basic indicator",
          "Weak acid; half equivalence · [A⁻]=[HA] in ideal buffer · pH=pKa; not equivalence pH"
        ],
        "board": {
          "heading": "Choose an indicator from the equivalence region",
          "columns": [
            "Given / system",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Strong acid / strong base; 25 °C",
              "Matched dilute system",
              "Equivalence near pH 7"
            ],
            [
              "Weak acid / strong base",
              "Conjugate base hydrolysis",
              "Equivalence above 7; suitable basic indicator"
            ],
            [
              "Weak acid; half equivalence",
              "[A⁻]=[HA] in ideal buffer",
              "pH=pKa; not equivalence pH"
            ]
          ]
        }
      },
      {
        "title": "Two carbonate endpoints separate a mixture",
        "formula": "Carbonate + bicarbonate only: n(CO₃²⁻)=cVP; n(HCO₃⁻)=c(VT−2VP)",
        "script": "A two endpoint acid titration can distinguish carbonate from bicarbonate when the sample composition is restricted appropriately. Assume the only acid consuming bases are carbonate and bicarbonate. At the first idealized endpoint, carbonate has accepted one proton to become bicarbonate. The acid amount used to that stage therefore equals the initial carbonate amount. At the total second endpoint, each initial carbonate has accepted two protons and each initial bicarbonate one. If the same acid concentration is used, the initial bicarbonate amount equals concentration times the total volume minus twice the first endpoint volume. Use litres for volumes. For zero point one zero zero molar acid, a first endpoint at ten point zero zero millilitres and a total endpoint at twenty six point zero zero correspond to one point zero zero millimole carbonate and zero point six zero zero millimole bicarbonate. The second stage alone consumes sixteen millilitres, which is different from the total twenty six. A negative calculated bicarbonate amount flags a failed assumption or inconsistent data in this restricted model. Other bases, dissolved carbon dioxide behaviour and endpoint uncertainty require separate treatment in real analysis.",
        "points": [
          "Only CO₃²⁻ and HCO₃⁻ consume acid · First endpoint: one H⁺ per CO₃²⁻ · n(CO₃²⁻)=cVP",
          "Total endpoint from original reading · Two H⁺ / carbonate; one / bicarbonate · n(HCO₃⁻)=c(VT−2VP)",
          "c=0.100 M; VP=10.00; VT=26.00 mL · Carbonate 1.00 mmol · Bicarbonate 0.600 mmol"
        ],
        "board": {
          "heading": "Two carbonate endpoints separate a mixture",
          "columns": [
            "Given / system",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Only CO₃²⁻ and HCO₃⁻ consume acid",
              "First endpoint: one H⁺ per CO₃²⁻",
              "n(CO₃²⁻)=cVP"
            ],
            [
              "Total endpoint from original reading",
              "Two H⁺ / carbonate; one / bicarbonate",
              "n(HCO₃⁻)=c(VT−2VP)"
            ],
            [
              "c=0.100 M; VP=10.00; VT=26.00 mL",
              "Carbonate 1.00 mmol",
              "Bicarbonate 0.600 mmol"
            ]
          ]
        }
      },
      {
        "title": "An aliquot result must be scaled to the whole sample",
        "formula": "Whole-sample analyte = aliquot analyte × total solution volume / aliquot volume",
        "script": "A titration measures the analyte in the portion actually transferred to the flask. To report the whole sample amount, restore any dilution and aliquot factors explicitly. Suppose a one point zero zero zero gram sample is completely dissolved and made to two hundred fifty point zero millilitres, with all relevant iron present as iron two. A twenty five point zero zero millilitre aliquot consumes ten point zero zero millilitres of zero point zero two zero zero molar permanganate in the stipulated acidic iron two titration. The permanganate amount is zero point two zero zero millimole. The one to five ratio gives one point zero zero millimole iron in that aliquot. The volumetric flask contains ten such aliquots, so the whole sample contains ten point zero millimoles iron. Using the supplied rounded iron molar mass of fifty six grams per mole, this is zero point five six zero gram iron, or fifty six point zero percent by mass. The result assumes quantitative transfer, complete reaction and no interfering reductants. The flask volume scales the measured amount; it does not replace the aliquot volume in the original reaction stoichiometry.",
        "points": [
          "10.00 mL of 0.0200 M MnO₄⁻ · Acidic Fe²⁺ ratio 1:5 · 1.00 mmol Fe²⁺ in aliquot",
          "250.0 mL flask; 25.00 mL aliquot · Scale factor 250.0/25.00=10 · 10.0 mmol Fe in whole sample",
          "Fe=56 g/mol; sample=1.000 g · Mass Fe=0.560 g · 56.0% Fe; no interfering reductants"
        ],
        "board": {
          "heading": "An aliquot result must be scaled to the whole sample",
          "columns": [
            "Given / system",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "10.00 mL of 0.0200 M MnO₄⁻",
              "Acidic Fe²⁺ ratio 1:5",
              "1.00 mmol Fe²⁺ in aliquot"
            ],
            [
              "250.0 mL flask; 25.00 mL aliquot",
              "Scale factor 250.0/25.00=10",
              "10.0 mmol Fe in whole sample"
            ],
            [
              "Fe=56 g/mol; sample=1.000 g",
              "Mass Fe=0.560 g",
              "56.0% Fe; no interfering reductants"
            ]
          ]
        }
      },
      {
        "title": "Iodine-clock time measures a fixed conversion threshold",
        "formula": "I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻; at fixed threshold, average rate ∝ 1/t",
        "script": "An iodine clock separates formation of a species from the later appearance of a visible signal. In a suitable acidic iodide and peroxide system, iodine is produced while added thiosulfate consumes it. One iodine molecule reacts with two thiosulfate ions. The familiar starch colour becomes persistent only when the scavenger is exhausted and iodine species can accumulate. A delayed colour therefore does not mean that no iodine was formed earlier. For an idealized initial thiosulfate amount of one point zero zero millimole, exhaustion corresponds to zero point five zero zero millimole iodine consumed by that reaction. If two otherwise comparable mixtures have the same total volume and threshold but times of forty and twenty seconds, the second has twice the average iodine formation rate to the threshold. This is an average over the induction interval, not automatically an instantaneous rate constant. Inferring a reaction order also requires knowing which concentration changed while other conditions were held fixed. Temperature, mixing, reagent volumes and scavenger amount can all change the time. Keep a fixed conversion threshold before using reciprocal time as a rate proxy.",
        "points": [
          "Iodine forms before persistent colour · Thiosulfate consumes I₂ in 2:1 ratio · No colour does not mean no reaction",
          "Initial S₂O₃²⁻=1.00 mmol · I₂ consumed at exhaustion=half · 0.500 mmol; fixed threshold",
          "Same threshold and volume; 40 s → 20 s · Average formation rate doubles · 1/t proxy is not itself rate constant"
        ],
        "board": {
          "heading": "Iodine-clock time measures a fixed conversion threshold",
          "columns": [
            "Given / system",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Iodine forms before persistent colour",
              "Thiosulfate consumes I₂ in 2:1 ratio",
              "No colour does not mean no reaction"
            ],
            [
              "Initial S₂O₃²⁻=1.00 mmol",
              "I₂ consumed at exhaustion=half",
              "0.500 mmol; fixed threshold"
            ],
            [
              "Same threshold and volume; 40 s → 20 s",
              "Average formation rate doubles",
              "1/t proxy is not itself rate constant"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "At equivalence in a typical weak-acid/strong-base titration at 25 °C, the solution is basic mainly because:",
        "options": [
          "Every equivalence point is pH 14",
          "The conjugate base hydrolyses",
          "The acid never reacts",
          "An indicator creates hydroxide stoichiometrically"
        ],
        "answer": 1,
        "explanation": "The weak acid has become its conjugate base, which reacts with water to produce OH−."
      },
      {
        "question": "An ideal weak-acid buffer is at half equivalence with supplied pKa=4.76. Its pH is:",
        "options": [
          "7.00",
          "9.52",
          "4.76",
          "2.38"
        ],
        "answer": 2,
        "explanation": "Equal acid and conjugate-base concentrations give pH=pKa in the ideal buffer approximation."
      },
      {
        "question": "For carbonate/bicarbonate only, 0.100 M acid gives VP=10.00 mL and total VT=26.00 mL. Initial bicarbonate is:",
        "options": [
          "2.60 mmol",
          "1.60 mmol",
          "1.00 mmol",
          "0.600 mmol"
        ],
        "answer": 3,
        "explanation": "n(HCO3−)=0.100×(0.02600−2×0.01000)=0.000600 mol."
      },
      {
        "question": "With those endpoint volumes, the acid volume added during the second stage alone is:",
        "options": [
          "16.00 mL",
          "26.00 mL",
          "10.00 mL",
          "36.00 mL"
        ],
        "answer": 0,
        "explanation": "The second stage is the difference VT−VP, not the total volume from the start."
      },
      {
        "question": "A 25.00 mL aliquot from a 250.0 mL sample solution contains 1.00 mmol Fe. The whole solution contains:",
        "options": [
          "1.00 mmol",
          "10.0 mmol",
          "0.100 mmol",
          "250 mmol"
        ],
        "answer": 1,
        "explanation": "The flask contains ten equal aliquots, so multiply the aliquot amount by ten."
      },
      {
        "question": "That whole solution contains 0.0100 mol Fe from a 1.000 g sample. Using Fe=56 g/mol, iron mass percent is:",
        "options": [
          "5.60%",
          "0.560%",
          "56.0%",
          "560%"
        ],
        "answer": 2,
        "explanation": "Iron mass is 0.0100×56=0.560 g, or 56.0% of the original sample."
      },
      {
        "question": "An iodine clock initially has 1.00 mmol thiosulfate. Ideal exhaustion consumes how much I2?",
        "options": [
          "2.00 mmol",
          "1.00 mmol",
          "0.250 mmol",
          "0.500 mmol"
        ],
        "answer": 3,
        "explanation": "I2 consumes two thiosulfate ions, so the iodine amount is half the thiosulfate amount."
      },
      {
        "question": "At equal clock threshold and total volume, times change from 40 s to 20 s. The average iodine formation rate changes by:",
        "options": [
          "A factor of 2 increase",
          "A factor of 2 decrease",
          "No change",
          "A factor of 4 increase"
        ],
        "answer": 0,
        "explanation": "The same conversion in half the time gives twice the average formation rate; this does not by itself determine a rate constant."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: acid–base titration curves and indicators",
        "url": "https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations"
      },
      {
        "title": "NSEC: carbonate alkalinity and two endpoints",
        "url": "https://www.nsec.ac.in/images/bes_ACID%20%E2%80%93%20BASE%20TITRATION.pdf"
      },
      {
        "title": "OpenStax: quantitative chemical analysis",
        "url": "https://openstax.org/books/chemistry-2e/pages/4-5-quantitative-chemical-analysis"
      },
      {
        "title": "Royal Society of Chemistry: iodine clock reaction",
        "url": "https://edu.rsc.org/experiments/iodine-clock-reaction-demonstration-method/744.article"
      }
    ]
  }
} as const;
