// Authored by scripts/expand-kinetics-practical-controls.mjs.
export const kineticsPracticalControlsAdditions = {
  "chemical-kinetics": {
    "base": 26,
    "quizBase": 50,
    "chapters": [
      {
        "title": "Changing two concentrations together does not identify both partial orders",
        "formula": "If both[A] and[B] double: rate multiplier = 2^(m+n); a separate perturbation is needed to find m and n",
        "script": "An experimental rate law is a claim about independently controlled variables, not just a pattern in one table. Suppose the law is rate equals k times concentration A to power m times concentration B to power n. A first comparison doubles both concentrations and gives a fourfold rate. This fixes the sum of the two orders at two, but it does not establish that each order is one. Orders two and zero, one and one, or zero and two all satisfy that comparison. Now use an additional experiment that doubles A alone while keeping B and temperature fixed. If this also gives a fourfold rate, the order in A is two. Combining that result with the earlier sum gives order zero in B over the tested range. The zero order is an empirical local statement, not proof that B never participates in any molecular step. Uncontrolled temperature, dilution or catalyst changes would compromise the inference. Design the extra comparison to break the ambiguity instead of reading balanced equation coefficients as measured exponents.",
        "points": [
          "Both A and B doubled · Rate×4 → m+n=2 · Not two separate orders",
          "Only A doubled · Rate×4 → m=2 · B and T fixed",
          "Combine comparisons · n=0 in tested range · Not molecularity"
        ],
        "board": {
          "heading": "Independent perturbations resolve the orders",
          "columns": [
            "Given / observation",
            "Inference / result",
            "Condition / limit"
          ],
          "rows": [
            [
              "Both A and B doubled",
              "Rate×4 → m+n=2",
              "Not two separate orders"
            ],
            [
              "Only A doubled",
              "Rate×4 → m=2",
              "B and T fixed"
            ],
            [
              "Combine comparisons",
              "n=0 in tested range",
              "Not molecularity"
            ]
          ]
        }
      },
      {
        "title": "Enough collision energy does not remove an orientation requirement",
        "formula": "Stated factor model: successful fraction = energy fraction × orientation fraction; 0.020×0.10=0.0020",
        "script": "Collision theory separates encounter frequency from the chance that an encounter produces a reaction. In a selected elementary gas collision model, stipulate that two percent of collisions satisfy the chosen energy criterion. Among those energetic collisions, only one tenth have a suitable relative orientation. The fraction satisfying both requirements is two percent times one tenth, which is zero point two percent of all collisions. If the system has a supplied total collision count of one million per second, this ideal comparison predicts two thousand successful events per second. That event count is not automatically a molar rate constant; converting between event counts and concentration based rates requires the appropriate amount, volume and pair-count conventions. Increasing an orientation factor in this fixed comparison need not mean lowering the activation energy. Likewise, increasing temperature changes the energy distribution and can also affect collision frequency. The factor multiplication here uses the stated conditional orientation fraction among energetic encounters, so no extra assumption that the two properties are statistically independent is needed. This simple model is not a universal quantitative description of every solution or surface reaction.",
        "points": [
          "Energetic fraction · 0.020 of collisions · Supplied criterion",
          "Suitable among energetic · 0.10 conditional fraction · Both:.0020",
          "1,000,000 collisions/s · 2,000 events/s · Not automatically k"
        ],
        "board": {
          "heading": "Energy and orientation are separate filters",
          "columns": [
            "Given / observation",
            "Inference / result",
            "Condition / limit"
          ],
          "rows": [
            [
              "Energetic fraction",
              "0.020 of collisions",
              "Supplied criterion"
            ],
            [
              "Suitable among energetic",
              "0.10 conditional fraction",
              "Both:.0020"
            ],
            [
              "1,000,000 collisions/s",
              "2,000 events/s",
              "Not automatically k"
            ]
          ]
        }
      },
      {
        "title": "A zero-order line has a domain and must be restarted after a feed pulse",
        "formula": "[A]=[A]0−kt only while the zero-order regime persists and A remains; a stated instantaneous feed resets the ledger",
        "script": "A straight concentration versus time line is not permission to predict negative material. Consider a stipulated zero order disappearance with initial concentration zero point zero eight molar and a constant loss rate of zero point zero zero two molar per second. The line reaches zero at forty seconds. In an ideal model that maintains this rate until depletion and has no other source of A, there is no A left between forty and sixty seconds. A feed pulse is applied at sixty seconds. It establishes concentration zero point zero four molar, with negligible volume change. If the same zero order regime resumes immediately, ten more seconds remove zero point zero two molar, leaving zero point zero two molar at seventy seconds. Applying the original line continuously through the pause and pulse would lose both the depletion boundary and the added material. Real zero order behaviour may fail before complete depletion, so the abrupt stop and restart are explicit assumptions of this exercise. Specify each interval and its starting concentration before using the integrated equation.",
        "points": [
          "0.080 M; k=.002 M/s · Depletion at40 s · Specified ideal regime",
          "40–60 s: no feed · A remains zero · Never negative",
          "At60 s: reset to.040 M · At70 s:.020 M · Same regime resumes"
        ],
        "board": {
          "heading": "Respect depletion and reset the initial state",
          "columns": [
            "Given / observation",
            "Inference / result",
            "Condition / limit"
          ],
          "rows": [
            [
              "0.080 M; k=.002 M/s",
              "Depletion at40 s",
              "Specified ideal regime"
            ],
            [
              "40–60 s: no feed",
              "A remains zero",
              "Never negative"
            ],
            [
              "At60 s: reset to.040 M",
              "At70 s:.020 M",
              "Same regime resumes"
            ]
          ]
        }
      },
      {
        "title": "Supporting mixture: two first-order populations need not show one half-life",
        "formula": "Equal initial contributions: f(t)=0.5×2^(−t/10)+0.5×2^(−t/20), with t in minutes",
        "script": "A total signal can combine two independent contributions even when each follows a simple first order law. In a supporting model, let two noninterconverting populations contribute equally to the initial calibrated signal. One population has a ten minute half life and the other a twenty minute half life. Assume signal is linear in their remaining amounts with the stated equal initial weights and that neither product contributes. After twenty minutes, the fast population retains one quarter and the slow population one half. Their weighted sum is three eighths of the initial signal. After forty minutes, the corresponding fractions are one sixteenth and one quarter, giving a total fraction of five divided by thirty-two. The signal ratio from twenty to forty minutes is therefore five twelfths, not the same multiplier as in the first twenty minute interval. The total is a sum of exponentials, not generally one exponential with an averaged half life. The surviving signal becomes increasingly dominated by the slower population. A curved logarithmic plot can flag a failed single population model, but it does not by itself uniquely prove this particular two component explanation.",
        "points": [
          "Two equal initial weights · Half-lives10 and20 min · Independent populations",
          "At20 min · f=3/8=.375 · At40:f=5/32",
          "Second20-min ratio · 5/12, not3/8 · No single fixed half-life"
        ],
        "board": {
          "heading": "Adding exponentials changes the total pattern",
          "columns": [
            "Given / observation",
            "Inference / result",
            "Condition / limit"
          ],
          "rows": [
            [
              "Two equal initial weights",
              "Half-lives10 and20 min",
              "Independent populations"
            ],
            [
              "At20 min",
              "f=3/8=.375",
              "At40:f=5/32"
            ],
            [
              "Second20-min ratio",
              "5/12, not3/8",
              "No single fixed half-life"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Both[A] and[B] double and rate increases fourfold for rate=k[A]^m[B]^n. What alone follows?",
        "options": [
          "m=n=1 necessarily",
          "m+n=2",
          "m=2 necessarily",
          "n=0 necessarily"
        ],
        "answer": 1,
        "explanation": "The ratio is2^(m+n)=4; one combined perturbation cannot separately determine two unknown orders."
      },
      {
        "question": "In addition, doubling A alone at fixed B and T gives rate×4. Find m,n.",
        "options": [
          "1,1",
          "0,2",
          "2,0",
          "2,2"
        ],
        "answer": 2,
        "explanation": "The independent comparison gives2^m=4, so m=2 and the earlier m+n=2 gives n=0 in this range."
      },
      {
        "question": "A supplied2% of collisions meet an energy criterion;10% of those have the required orientation. Successful fraction of all collisions?",
        "options": [
          "20%",
          "2%",
          "0.02%",
          "0.2%"
        ],
        "answer": 3,
        "explanation": "0.020×0.10=.0020, or0.2%; the orientation fraction is conditional on energetic collisions."
      },
      {
        "question": "For1,000,000 collisions/s and successful fraction.0020, predicted event count?",
        "options": [
          "2,000 events/s",
          "20,000 events/s",
          "200 events/s",
          "A rate constant of2,000 s−1 automatically"
        ],
        "answer": 0,
        "explanation": "Multiply the event count by.0020. A collision count does not itself supply a concentration-normalized rate constant."
      },
      {
        "question": "A specified zero-order regime has[A]0=.080 M,k=.002 M/s until depletion. Ideal depletion time?",
        "options": [
          "20 s",
          "40 s",
          "60 s",
          "80 s"
        ],
        "answer": 1,
        "explanation": ".080/.002=40 s; extending that line beyond depletion without a source would be unphysical."
      },
      {
        "question": "A is zero before a feed at60 s that resets it to.040 M. The same loss rate.002 M/s resumes. Concentration at70 s?",
        "options": [
          "−.060 M",
          "0 M",
          ".020 M",
          ".040 M"
        ],
        "answer": 2,
        "explanation": "Use the post-feed initial state:.040−.002×10=.020 M; the original line cannot span the feed jump."
      },
      {
        "question": "Two equally weighted independent populations have half-lives10 and20 min. Remaining total signal at20 min?",
        "options": [
          "1/2",
          "1/4",
          "3/4",
          "3/8"
        ],
        "answer": 3,
        "explanation": "The components retain1/4 and1/2; half of each sums to3/8."
      },
      {
        "question": "In that mixture, total signal at40 min as a fraction of its initial value?",
        "options": [
          "5/32",
          "9/64",
          "1/8",
          "1/4"
        ],
        "answer": 0,
        "explanation": "The weighted sum is.5×1/16+.5×1/4=5/32, not(3/8)^2."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: experimental rate laws",
        "url": "https://openstax.org/books/chemistry-2e/pages/12-3-rate-laws"
      },
      {
        "title": "OpenStax: collision theory",
        "url": "https://openstax.org/books/chemistry/pages/12-5-collision-theory"
      },
      {
        "title": "OpenStax: integrated rate laws",
        "url": "https://openstax.org/books/chemistry-2e/pages/12-4-integrated-rate-laws"
      }
    ]
  },
  "practical-chemistry": {
    "base": 29,
    "quizBase": 48,
    "chapters": [
      {
        "title": "Nickel confirmation links a red precipitate with a two-ligand chelate",
        "formula": "Ni2+ +2H2dmg ⇌ Ni(Hdmg)2(s)+2H+; each ligand loses one proton in this formal balance",
        "script": "A confirmatory test is more informative when the reagent and medium are named along with the colour. In the selected nickel two comparison, dimethylglyoxime can produce a characteristic red precipitate in a suitable controlled medium. Represent the neutral ligand as H two d m g and its singly deprotonated form as H d m g minus. Two such monoanionic ligands combine with one nickel two ion to make a neutral chelate. The formal balance releases two protons for each nickel ion precipitated. Each ligand supplies two nitrogen donor atoms, giving four donor atoms around the metal in the familiar square planar complex. In an ideal amount calculation, one millimole of nickel requires two millimoles of the neutral ligand, provided enough base capacity and suitable conditions maintain the precipitation. A smaller amount of ligand limits the possible precipitate even if nickel is present in excess. This chemical evidence is not simply the original colour of an aqueous nickel salt. Interfering ions, unsuitable acidity and reagent quality can affect the observation, so a red solid outside the defined test is not a universal unique identity.",
        "points": [
          "Ni2+ +2H2dmg · Neutral red chelate · 2 H+ released",
          "2 bidentate ligands · 4 N donors; planar · Selected Ni complex",
          "1 mmol Ni2+ · 2 mmol ligand required · Ideal complete binding"
        ],
        "board": {
          "heading": "Name the reagent, medium and ligand count",
          "columns": [
            "Given / observation",
            "Inference / result",
            "Condition / limit"
          ],
          "rows": [
            [
              "Ni2+ +2H2dmg",
              "Neutral red chelate",
              "2 H+ released"
            ],
            [
              "2 bidentate ligands",
              "4 N donors; planar",
              "Selected Ni complex"
            ],
            [
              "1 mmol Ni2+",
              "2 mmol ligand required",
              "Ideal complete binding"
            ]
          ]
        }
      },
      {
        "title": "Calcium oxalate evidence changes when oxalate is protonated",
        "formula": "CaC2O4(s) ⇌ Ca2+ + C2O4^2−; acid can lower free C2O4^2− by protonation",
        "script": "Calcium confirmation can include a white calcium oxalate precipitate in a defined separation scheme. The observation is not that every white solid contains calcium. Its meaning comes from the identified aliquot, the added oxalate reagent and the surrounding conditions. Write the dissolution equilibrium as solid calcium oxalate giving calcium two plus and oxalate two minus. Increasing acidity can protonate free oxalate, reducing the concentration of the dianion that appears in the solubility product. Under suitable mineral acid conditions, this promotes dissolution rather than proving the original calcium disappeared by a redox reaction. The traditional comparison distinguishes persistence in the specified acetic acid test from dissolution in a suitable stronger mineral acid test. Acid identity, concentration and other equilibria matter; the word acid alone is not enough to predict every observation. In an ideal precipitation ledger, each mole of calcium oxalate contains one mole of calcium and one mole of oxalate. That stoichiometry does not automatically make precipitation quantitative in every solution. Combine the controlled oxalate response with other evidence instead of relying on whiteness alone.",
        "points": [
          "Ca2+ + oxalate · White CaC2O4 · Defined test aliquot",
          "Strong-acid protonation · Free oxalate decreases · Dissolution favoured",
          "1 mol precipitate · 1 mol calcium · Not automatically quantitative"
        ],
        "board": {
          "heading": "Acidity changes the available precipitating ion",
          "columns": [
            "Given / observation",
            "Inference / result",
            "Condition / limit"
          ],
          "rows": [
            [
              "Ca2+ + oxalate",
              "White CaC2O4",
              "Defined test aliquot"
            ],
            [
              "Strong-acid protonation",
              "Free oxalate decreases",
              "Dissolution favoured"
            ],
            [
              "1 mol precipitate",
              "1 mol calcium",
              "Not automatically quantitative"
            ]
          ]
        }
      },
      {
        "title": "Flame observations need a clean blank and a separate confirmation",
        "formula": "Selected flame comparisons: Ca brick red; Ba apple green; sodium contamination can dominate yellow emission",
        "script": "A flame test is an emission observation, not a precipitate test or a direct oxidation state measurement. In the elementary comparison, calcium gives a brick red flame and barium an apple green flame under appropriate test conditions. Heating populates excited states, and emitted light appears as those species return to lower energy states. The familiar classroom colour does not imply one single visible wavelength or a unique spectrum from every compound in every flame. Sodium contamination can contribute a strong yellow signal, so an unclean support or reagent can obscure the sample response. A blank using the same support and reagents helps determine whether a colour comes from the test sample. Mixtures may show overlapping signals, and a weak or absent visible colour is not proof that every relevant ion is absent. For a calcium or barium identification, combine the flame comparison with a separate controlled chemical confirmation from the correct aliquot. These are interpretations of supplied observations rather than instructions for conducting a flame experiment. Do not treat colour names as sufficient evidence to infer concentration or sample purity.",
        "points": [
          "Calcium comparison · Brick red · Selected flame conditions",
          "Barium comparison · Apple green · Not a precipitate colour",
          "Blank: yellow persists · Sodium contamination possible · Use separate confirmation"
        ],
        "board": {
          "heading": "An emission colour needs a blank",
          "columns": [
            "Given / observation",
            "Inference / result",
            "Condition / limit"
          ],
          "rows": [
            [
              "Calcium comparison",
              "Brick red",
              "Selected flame conditions"
            ],
            [
              "Barium comparison",
              "Apple green",
              "Not a precipitate colour"
            ],
            [
              "Blank: yellow persists",
              "Sodium contamination possible",
              "Use separate confirmation"
            ]
          ]
        }
      },
      {
        "title": "Phosphate confirmation names the molybdate reagent and acidic medium",
        "formula": "Selected orthophosphate test: ammonium molybdate in nitric-acid medium can give yellow ammonium phosphomolybdate",
        "script": "A phosphate confirmation must be tied to a stated reagent system. In the standard selected comparison, orthophosphate with ammonium molybdate in an appropriate nitric acid medium can give a yellow ammonium phosphomolybdate precipitate. The yellow solid belongs to that combined phosphate and molybdate chemistry; it is not the assertion that every phosphate salt is yellow. A reagent blank matters because contamination or an existing coloured suspension can imitate the visual observation. Compare an appropriately treated sample aliquot with a blank rather than reusing a mixture whose earlier reagents could introduce interferences. A negative result is meaningful only when reagent function, medium and the expected detection conditions are established. The test does not directly measure total phosphorus in arbitrary organophosphorus compounds unless a suitable prior conversion to the measured phosphate form has been specified. Nor does visible colour intensity alone supply a calibrated phosphate concentration. A quantitative colour measurement requires an applicable calibration, controlled matrix and a defined signal. Keep the qualitative confirmation, the identity of the phosphorus species being tested and a later quantitative assay as separate claims.",
        "points": [
          "Orthophosphate aliquot · Ammonium molybdate · Specified nitric-acid medium",
          "Selected positive response · Yellow phosphomolybdate · Compare reagent blank",
          "Visible yellow alone · No calibrated concentration · Not all phosphorus forms"
        ],
        "board": {
          "heading": "Identify the reagent system before the ion",
          "columns": [
            "Given / observation",
            "Inference / result",
            "Condition / limit"
          ],
          "rows": [
            [
              "Orthophosphate aliquot",
              "Ammonium molybdate",
              "Specified nitric-acid medium"
            ],
            [
              "Selected positive response",
              "Yellow phosphomolybdate",
              "Compare reagent blank"
            ],
            [
              "Visible yellow alone",
              "No calibrated concentration",
              "Not all phosphorus forms"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "In the supplied Ni2+ dimethylglyoxime balance, how many monoanionic bidentate ligands form one neutral chelate?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": 1,
        "explanation": "Two charges of−1 balance Ni2+; two nitrogen donors per ligand give four donors."
      },
      {
        "question": "Ideal ligand amount needed for1.00 mmol Ni2+ in Ni(Hdmg)2?",
        "options": [
          ".50 mmol",
          "1.00 mmol",
          "2.00 mmol",
          "4.00 mmol"
        ],
        "answer": 2,
        "explanation": "The selected chelate has two ligand units per nickel ion; suitable precipitation conditions are still required."
      },
      {
        "question": "Why can suitable strong-acid conditions dissolve calcium oxalate?",
        "options": [
          "Calcium must be reduced to metal",
          "Acid creates unlimited oxalate dianion",
          "The calcium atom is destroyed",
          "Protonation lowers free oxalate dianion and favours dissolution"
        ],
        "answer": 3,
        "explanation": "The solubility equilibrium responds to removal of free C2O4^2− by protonation."
      },
      {
        "question": "An ideal.50 mmol calcium oxalate precipitate contains what calcium amount?",
        "options": [
          ".50 mmol",
          "1.00 mmol",
          ".25 mmol",
          "Its white colour alone fixes the amount"
        ],
        "answer": 0,
        "explanation": "CaC2O4 has one calcium per formula unit; a measured precipitate amount is distinct from an uncalibrated visual colour."
      },
      {
        "question": "Which ordered flame comparison is correct under the selected classroom conditions: calcium, barium?",
        "options": [
          "Apple green; brick red",
          "Brick red; apple green",
          "Yellow; violet",
          "Deep blue solution; white solid"
        ],
        "answer": 1,
        "explanation": "These are selected emission colours, not unique identifications or precipitate colours."
      },
      {
        "question": "A yellow flame also appears in the support-and-reagent blank. Best inference?",
        "options": [
          "The sample must contain only calcium",
          "Barium is certainly absent",
          "Contamination such as sodium may contribute, so the sample signal needs discrimination",
          "The sample is proven pure sodium chloride"
        ],
        "answer": 2,
        "explanation": "A blank shows a source independent of the sample; a separate confirmation is needed."
      },
      {
        "question": "Which selected reagent system supports a yellow phosphomolybdate phosphate confirmation?",
        "options": [
          "Silver nitrate in ammonia only",
          "Oxalate in neutral water only",
          "Dimethylglyoxime for nickel",
          "Ammonium molybdate in suitable nitric-acid medium"
        ],
        "answer": 3,
        "explanation": "The named reagent and medium define this phosphate comparison; colour alone is insufficient."
      },
      {
        "question": "Does a visible positive orthophosphate test automatically quantify total phosphorus in any organic sample?",
        "options": [
          "No; speciation, prior conversion and calibration must be established",
          "Yes; all phosphorus forms give an identical calibrated colour",
          "Yes; yellow intensity gives concentration without standards",
          "Yes; any yellow solid is pure phosphate"
        ],
        "answer": 0,
        "explanation": "The qualitative response is specific to the stated test conditions and measured species, not a universal total-phosphorus assay."
      }
    ],
    "sources": [
      {
        "title": "Virtual Labs: nickel dimethylglyoxime theory",
        "url": "https://inoc-amrt.vlabs.ac.in/exp/gravimetric-estimation-nickel/theory.html"
      },
      {
        "title": "Malik: calcium confirmation and solubility",
        "url": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Qualitative_Analysis_of_Common_Cations_in_Water_%28Malik%29/6%3A_Group_IV_and_Group_V_cations/6.2%3A_Separation_and_confirmation_of_individual_ions_in_group_IV_precipitates_and_group_V_mixture"
      },
      {
        "title": "NCERT Exemplar via SATHEE: selected flame colours",
        "url": "https://sathee.iitk.ac.in/ncert-books/neet-ncert-exemplar/ncert_c11_exemplar/the_s_block_elements/"
      },
      {
        "title": "Arizona Geological Survey: common-metal field tests",
        "url": "https://data.azgs.arizona.edu/api/v1/collections/AGSB-1552427216934-631/b-136_field_tests_common_metals_6.pdf"
      }
    ]
  }
} as const;
