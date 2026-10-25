// Authored by scripts/expand-electrochemistry-kinetic-balances.mjs.
export const electrochemistryKineticBalancesAdditions = {
  "redox-electrochemistry": {
    "base": 18,
    "quizBase": 26,
    "chapters": [
      {
        "title": "Calibrate the conductivity cell before comparing solutions",
        "formula": "Cell constant = κstandard Rstandard; κunknown = cell constant / Runknown",
        "script": "A measured resistance depends on both the liquid and the electrode geometry. Calibrate the cell with a standard of known conductivity at the stated temperature. Suppose the standard conductivity is zero point zero zero one two zero siemens per centimetre and its measured resistance is one hundred ohms. Multiplying gives cell constant zero point one two zero per centimetre. Now put the unknown solution in the same unchanged cell. A resistance of three hundred ohms gives conductivity zero point zero zero zero four zero zero siemens per centimetre. If its analytical concentration is zero point zero zero two zero zero mole per litre, multiply conductivity by one thousand and divide by that concentration to obtain molar conductivity two hundred siemens square centimetres per mole. Resistance is not simply the reciprocal of conductivity: its reciprocal is conductance, which still contains geometry. The factor one thousand converts the litre concentration convention to the centimetre volume convention. Keep temperature, immersion geometry and units consistent between calibration and measurement. These supplied values illustrate calibration arithmetic rather than certify a particular commercial reference solution.",
        "points": [
          "Standard: κ=.00120 S/cm · R = 100 Ω; multiply κR · Cell constant .120 cm⁻¹",
          "Unknown: R = 300 Ω · κ = .120 / 300 · .000400 S/cm",
          "c = .00200 mol/L · Λm = 1000κ / c · 200 S cm²/mol"
        ],
        "board": {
          "heading": "Calibrate the conductivity cell before comparing solutions",
          "columns": [
            "Specified measurement",
            "Balance / relation",
            "Result / limit"
          ],
          "rows": [
            [
              "Standard: κ=.00120 S/cm",
              "R = 100 Ω; multiply κR",
              "Cell constant .120 cm⁻¹"
            ],
            [
              "Unknown: R = 300 Ω",
              "κ = .120 / 300",
              ".000400 S/cm"
            ],
            [
              "c = .00200 mol/L",
              "Λm = 1000κ / c",
              "200 S cm²/mol"
            ]
          ]
        }
      },
      {
        "title": "Changing current requires an area under the curve",
        "formula": "Q = ∫I(t)dt; mCu = ηQMCu/(2F)",
        "script": "Faraday calculations begin with charge, not with a current reading taken at an arbitrary instant. Suppose current rises linearly from two amperes to four amperes during six hundred seconds. The current time area is a rectangle of twelve hundred coulombs plus a triangle of six hundred, giving eighteen hundred coulombs in total. Equivalently, the average of the two endpoint currents is three amperes for this linear ramp. Using the final current for the entire interval would wrongly give twenty four hundred coulombs. In a supplied copper deposition model, only eighty percent of the charge reduces copper two ions to metal; the remainder goes to other electrode processes. Copper receives fourteen hundred forty coulombs. With two electrons per copper atom, Faraday constant ninety six thousand five hundred coulombs per mole and copper molar mass sixty three point five grams per mole, the deposited mass is about zero point four seven four gram. Current efficiency allocates charge, not the number of electrons required by the copper half reaction. An endpoint average is exact for this linear ramp, but a general current trace needs its actual area.",
        "points": [
          "Linear ramp: 2 → 4 A · 600 s; mean current 3 A · Total Q = 1800 C",
          "Cu²⁺ + 2e⁻ → Cu · 80% current efficiency · Cu charge = 1440 C",
          "MCu=63.5; F=96500 · m = 1440 × 63.5 / (2F) · Approximately .474 g"
        ],
        "board": {
          "heading": "Changing current requires an area under the curve",
          "columns": [
            "Specified measurement",
            "Balance / relation",
            "Result / limit"
          ],
          "rows": [
            [
              "Linear ramp: 2 → 4 A",
              "600 s; mean current 3 A",
              "Total Q = 1800 C"
            ],
            [
              "Cu²⁺ + 2e⁻ → Cu",
              "80% current efficiency",
              "Cu charge = 1440 C"
            ],
            [
              "MCu=63.5; F=96500",
              "m = 1440 × 63.5 / (2F)",
              "Approximately .474 g"
            ]
          ]
        }
      },
      {
        "title": "Alkaline redox balancing must keep hydroxide",
        "formula": "2MnO₄⁻ + 3SO₃²⁻ + H₂O → 2MnO₂ + 3SO₄²⁻ + 2OH⁻",
        "script": "Oxidation numbers determine electron exchange, but they do not finish an aqueous equation. In a supplied alkaline model, permanganate is reduced to manganese dioxide while sulfite is oxidized to sulfate. Manganese changes from plus seven to plus four, accepting three electrons per atom. Sulfur changes from plus four to plus six, losing two electrons per atom. The smallest shared electron count is six, so use two permanganates and three sulfites. Completing the basic half reaction balance and cancelling common water and hydroxide gives two permanganates, three sulfites and one water forming two manganese dioxides, three sulfates and two hydroxides. Each side contains two manganese atoms, three sulfur atoms, eighteen oxygen atoms and two hydrogens. Total charge is negative eight on each side. Thus zero point zero two zero zero mole permanganate corresponds to zero point zero three zero zero mole sulfite consumed in this stated net conversion. Do not carry over the five electron acidic permanganate factor: the selected manganese product is different. Medium and endpoint species must be specified before assigning the redox equivalent factor.",
        "points": [
          "Mn: +7 → +4; S: +4 → +6 · 3e⁻ accepted; 2e⁻ lost · LCM: 6 electrons",
          "2MnO₄⁻ + 3SO₃²⁻ + H₂O · 2MnO₂ + 3SO₄²⁻ + 2OH⁻ · Charge −8; O18; H2 each",
          ".0200 mol permanganate · Sulfite / permanganate = 3/2 · .0300 mol sulfite"
        ],
        "board": {
          "heading": "Alkaline redox balancing must keep hydroxide",
          "columns": [
            "Specified measurement",
            "Balance / relation",
            "Result / limit"
          ],
          "rows": [
            [
              "Mn: +7 → +4; S: +4 → +6",
              "3e⁻ accepted; 2e⁻ lost",
              "LCM: 6 electrons"
            ],
            [
              "2MnO₄⁻ + 3SO₃²⁻ + H₂O",
              "2MnO₂ + 3SO₄²⁻ + 2OH⁻",
              "Charge −8; O18; H2 each"
            ],
            [
              ".0200 mol permanganate",
              "Sulfite / permanganate = 3/2",
              ".0300 mol sulfite"
            ]
          ]
        }
      },
      {
        "title": "Battery capacity counts electrons and active reactants",
        "formula": "Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O; Q = 2Fξ",
        "script": "Battery capacity in ampere hours is an amount of charge, not an amount of energy. One ampere hour equals three thousand six hundred coulombs. For an ideal lead acid cell discharging by the stated overall reaction, one mole of lead metal and one mole of lead dioxide consume two moles of sulfuric acid while two moles of electrons pass through the external circuit. Thus an ideal one ampere hour discharge corresponds to three thousand six hundred divided by twice the Faraday constant moles of reaction. Using ninety six thousand five hundred coulombs per mole gives about zero point zero one eight seven mole each of lead and lead dioxide consumed, and zero point zero three seven three mole sulfuric acid. The acid is a reactant, not merely an unchanged conducting medium. These are theoretical stoichiometric amounts for one cell under the stated discharge model. Actual usable capacity depends on accessible material, operating conditions and losses. To calculate electrical energy, integrate cell voltage against transferred charge, or use a justified average voltage; an ampere hour rating alone does not supply that voltage.",
        "points": [
          "Capacity 1.00 A h · Q = 1.00 × 3600 · 3600 C; not an energy",
          "One reaction transfers 2e⁻ · ξ = Q/(2F) · .0187 mol Pb and PbO₂",
          "H₂SO₄ coefficient 2 · Acid consumed = 2ξ · .0373 mol; ideal model"
        ],
        "board": {
          "heading": "Battery capacity counts electrons and active reactants",
          "columns": [
            "Specified measurement",
            "Balance / relation",
            "Result / limit"
          ],
          "rows": [
            [
              "Capacity 1.00 A h",
              "Q = 1.00 × 3600",
              "3600 C; not an energy"
            ],
            [
              "One reaction transfers 2e⁻",
              "ξ = Q/(2F)",
              ".0187 mol Pb and PbO₂"
            ],
            [
              "H₂SO₄ coefficient 2",
              "Acid consumed = 2ξ",
              ".0373 mol; ideal model"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "A conductivity standard has κ=.00120 S/cm and R=100 Ω. The calibrated cell constant is:",
        "options": [
          ".120 cm⁻¹",
          "120 cm⁻¹",
          ".000012 cm⁻¹",
          "83333 cm⁻¹"
        ],
        "answer": 0,
        "explanation": "The cell constant equals κR=.00120×100=.120 cm⁻¹."
      },
      {
        "question": "That cell measures an unknown R=300 Ω at c=.00200 mol/L. Its molar conductivity is:",
        "options": [
          ".400 S cm²/mol",
          "200 S cm²/mol",
          "2.00 S cm²/mol",
          "600 S cm²/mol"
        ],
        "answer": 1,
        "explanation": "κ=.120/300=.000400 S/cm; Λm=1000κ/c=200 S cm²/mol."
      },
      {
        "question": "Current rises linearly from 2 to 4 A over 600 s. Total charge is:",
        "options": [
          "1200 C",
          "2400 C",
          "1800 C",
          "3600 C"
        ],
        "answer": 2,
        "explanation": "The mean current is 3 A for this linear ramp; Q=3×600=1800 C."
      },
      {
        "question": "For that charge, Cu²⁺ deposition at 80% efficiency with F=96500 C/mol and MCu=63.5 g/mol gives approximately:",
        "options": [
          ".592 g",
          ".948 g",
          ".237 g",
          ".474 g"
        ],
        "answer": 3,
        "explanation": "Only 1440 C deposits copper, so m=1440×63.5/(2×96500)=.474 g."
      },
      {
        "question": "In the stated alkaline MnO4−→MnO2 and SO3²−→SO4²− model, the permanganate:sulfite coefficient ratio is:",
        "options": [
          "2:3",
          "1:5",
          "3:2",
          "1:1"
        ],
        "answer": 0,
        "explanation": "Manganese accepts three electrons and sulfur loses two; the smallest common exchange is six."
      },
      {
        "question": "For .0200 mol MnO4− completely converted to MnO2 in that net model, consumed sulfite is:",
        "options": [
          ".0200 mol",
          ".0300 mol",
          ".0500 mol",
          ".0133 mol"
        ],
        "answer": 1,
        "explanation": "The balanced ratio SO3²−:MnO4− is 3:2, giving .0300 mol sulfite."
      },
      {
        "question": "A capacity rating of 1.00 A h corresponds to charge:",
        "options": [
          "1 C",
          "60 C",
          "3600 C",
          "96500 C"
        ],
        "answer": 2,
        "explanation": "One hour is 3600 seconds, and one ampere equals one coulomb per second."
      },
      {
        "question": "For an ideal single lead-acid cell transferring 3600 C on discharge, the stated overall equation predicts H2SO4 consumption approximately:",
        "options": [
          ".0187 mol",
          ".00933 mol",
          ".0746 mol",
          ".0373 mol"
        ],
        "answer": 3,
        "explanation": "There are two acid molecules per two transferred electrons; acid amount=Q/F≈.0373 mol."
      }
    ],
    "sources": [
      {
        "title": "IIT Kanpur SATHEE: NCERT electrochemistry and conductivity-cell calibration",
        "url": "https://sathee.iitk.ac.in/ncert-books/ncert-books-theory/class-12/nbt-che-12/chem-12-unit-3-electrochemistry/"
      },
      {
        "title": "OpenStax: electrolysis and charge stoichiometry",
        "url": "https://openstax.org/books/chemistry-2e/pages/17-7-electrolysis"
      },
      {
        "title": "OpenStax: redox balancing",
        "url": "https://openstax.org/books/chemistry-2e/pages/17-1-review-of-redox-chemistry"
      },
      {
        "title": "OpenStax: batteries and fuel cells",
        "url": "https://openstax.org/books/chemistry-2e/pages/17-5-batteries-and-fuel-cells"
      }
    ]
  },
  "chemical-kinetics": {
    "base": 18,
    "quizBase": 34,
    "chapters": [
      {
        "title": "A clock time measures a specified product threshold",
        "formula": "Mean formation rate = cumulative product threshold / elapsed time",
        "script": "A clock measurement records the time needed to reach a specified chemical threshold. It does not directly measure a rate constant. Suppose a calibrated iodine clock signals after a cumulative iodine production of zero point zero zero zero two zero zero mole per litre of final mixture. This is iodine produced over the interval, not necessarily free iodine accumulated, because a fast auxiliary reaction can consume iodine until its scavenger is exhausted. Reaching that same threshold in twenty seconds gives average iodine formation rate one point zero zero times ten to the negative five mole per litre per second. Forty seconds gives half that rate. Comparing reciprocal times is valid only when the threshold and volume convention match. If conversion is small enough that reactant concentrations barely change, these averages may approximate initial rates. A large threshold, changing scavenger amount, mixing delay or a different detection criterion can invalidate that shortcut. In the thiosulfate clock model, two thiosulfates consume one iodine, so the cumulative iodine threshold is half the initial thiosulfate concentration in the final mixture. This is interpretation of supplied measurements, not a preparation procedure.",
        "points": [
          "Same iodine threshold · .000200 mol/L cumulative · Not necessarily free [I₂]",
          "Clock times: 20 s and 40 s · Divide threshold by time · 1.00×10⁻⁵ and 5.00×10⁻⁶",
          "Use reciprocal-time ratios · Fixed threshold; small conversion · Approximate initial rates only"
        ],
        "board": {
          "heading": "A clock time measures a specified product threshold",
          "columns": [
            "Specified measurement",
            "Balance / relation",
            "Result / limit"
          ],
          "rows": [
            [
              "Same iodine threshold",
              ".000200 mol/L cumulative",
              "Not necessarily free [I₂]"
            ],
            [
              "Clock times: 20 s and 40 s",
              "Divide threshold by time",
              "1.00×10⁻⁵ and 5.00×10⁻⁶"
            ],
            [
              "Use reciprocal-time ratios",
              "Fixed threshold; small conversion",
              "Approximate initial rates only"
            ]
          ]
        }
      },
      {
        "title": "A tangent rate differs from a finite-interval average",
        "formula": "For [A]=[A]₀e⁻ᵏᵗ: instantaneous disappearance rate = k[A](t)",
        "script": "Average and instantaneous rates answer different questions about the same concentration curve. Consider a supplied first order disappearance at fixed volume with initial concentration zero point one zero zero molar and rate constant zero point one zero zero per minute. After ten minutes, concentration is zero point one times exponential minus one, about zero point zero three six eight molar. The mean disappearance rate over those ten minutes is the lost concentration divided by ten, about zero point zero zero six three two molar per minute. At the midpoint, five minutes, the instantaneous rate is instead k times the concentration at that instant, about zero point zero zero six zero seven molar per minute. A secant slope over an interval and a tangent slope at one time need not agree, even if that time is the interval midpoint. For this decaying exponential the rate falls continuously as reactant disappears. Shortening an interval around a chosen instant makes its mean approach the tangent value, subject to measurement uncertainty. A straight line concentration trace would be a different case in which interval and tangent slopes are equal.",
        "points": [
          "[A]₀=.100 M; k=.100/min · [A](10)=.100e⁻¹ · .0368 M remaining",
          "Mean over 0–10 min · (.100 − .0368)/10 · .00632 M/min",
          "Instantaneous at 5 min · .100 × .100e⁻⁰·⁵ · .00607 M/min"
        ],
        "board": {
          "heading": "A tangent rate differs from a finite-interval average",
          "columns": [
            "Specified measurement",
            "Balance / relation",
            "Result / limit"
          ],
          "rows": [
            [
              "[A]₀=.100 M; k=.100/min",
              "[A](10)=.100e⁻¹",
              ".0368 M remaining"
            ],
            [
              "Mean over 0–10 min",
              "(.100 − .0368)/10",
              ".00632 M/min"
            ],
            [
              "Instantaneous at 5 min",
              ".100 × .100e⁻⁰·⁵",
              ".00607 M/min"
            ]
          ]
        }
      },
      {
        "title": "Supporting balance: changing volume also changes concentration",
        "formula": "nA = CA V; dCA/dt = −rA,loss − (CA/V)(dV/dt)",
        "script": "Concentration can fall because a substance reacts and because its occupied volume increases. As a supporting material balance, consider a uniform closed reacting system whose boundary can move, with no inflow or outflow of A. Write its amount as concentration times volume. Differentiating that product gives amount change equal to volume times concentration change plus concentration times volume change. Define the positive chemical disappearance rate per current volume as r. Then the concentration derivative is negative r minus concentration divided by volume times the volume derivative. At a specified instant let volume be one litre, A concentration zero point one zero zero molar, chemical disappearance rate zero point zero zero two zero zero molar per second and expansion rate zero point zero one zero zero litre per second. The expansion contributes an additional concentration decrease of zero point zero zero one zero zero molar per second. The observed concentration slope is therefore negative zero point zero zero three zero zero, while chemical amount loss is only zero point zero zero two zero zero mole per second. This distinction extends the constant volume rate definition; it is not an additional required integrated-order law.",
        "points": [
          "At an instant: V=1.00 L · CA=.100 M; dV/dt=.0100 L/s · Closed to flow of A",
          "Chemical loss r=.00200 M/s · Expansion term=.00100 M/s · dCA/dt=−.00300 M/s",
          "Amount balance: −dnA/dt=rV · Chemical loss=.00200 mol/s · Concentration loss ≠ reaction alone"
        ],
        "board": {
          "heading": "Supporting balance: changing volume also changes concentration",
          "columns": [
            "Specified measurement",
            "Balance / relation",
            "Result / limit"
          ],
          "rows": [
            [
              "At an instant: V=1.00 L",
              "CA=.100 M; dV/dt=.0100 L/s",
              "Closed to flow of A"
            ],
            [
              "Chemical loss r=.00200 M/s",
              "Expansion term=.00100 M/s",
              "dCA/dt=−.00300 M/s"
            ],
            [
              "Amount balance: −dnA/dt=rV",
              "Chemical loss=.00200 mol/s",
              "Concentration loss ≠ reaction alone"
            ]
          ]
        }
      },
      {
        "title": "Supporting model: reversible first-order relaxation",
        "formula": "A ⇌ B: krelax = kf + kr; [B]eq/[A]eq = kf/kr",
        "script": "A reversible first order model approaches an equilibrium plateau rather than consuming all reactant. Consider a fixed volume closed system with one to one conversion between A and B. Let forward and reverse constants be zero point one zero zero and zero point zero five zero zero per minute, and let their conserved total concentration be zero point three zero zero molar. Equal opposing rates at equilibrium give B to A concentration ratio two. The equilibrium concentrations are therefore zero point two zero zero molar B and zero point one zero zero molar A. The supplied relaxation result says displacement from equilibrium decays with the sum of the two constants, zero point one five zero per minute. Its half time is natural logarithm two divided by that sum, about four point six two minutes. Starting with only A, after one such half time B is zero point one zero zero molar and A is zero point two zero zero. This halves the distance to equilibrium, not the initial A concentration. It is a supporting kinetic model, not a universal formula for every reversible mechanism. The ratio of these two constants describes equilibrium only for the stated compatible rate laws.",
        "points": [
          "kf=.100/min; kr=.0500/min · A+B=.300 M; ratio B/A=2 · Aeq=.100; Beq=.200 M",
          "Deviation from equilibrium · Decays with kf+kr=.150/min · Half-time ln2/.150=4.62 min",
          "Initially only A; one half-time · A=.200 M; B=.100 M · Distance to equilibrium halves"
        ],
        "board": {
          "heading": "Supporting model: reversible first-order relaxation",
          "columns": [
            "Specified measurement",
            "Balance / relation",
            "Result / limit"
          ],
          "rows": [
            [
              "kf=.100/min; kr=.0500/min",
              "A+B=.300 M; ratio B/A=2",
              "Aeq=.100; Beq=.200 M"
            ],
            [
              "Deviation from equilibrium",
              "Decays with kf+kr=.150/min",
              "Half-time ln2/.150=4.62 min"
            ],
            [
              "Initially only A; one half-time",
              "A=.200 M; B=.100 M",
              "Distance to equilibrium halves"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "A clock threshold is .000200 mol/L of cumulative iodine formed in 20.0 s. Mean iodine formation rate is:",
        "options": [
          "1.00×10⁻⁵ mol/(L s)",
          "1.00×10⁻² mol/(L s)",
          "4.00×10⁻³ mol/(L s)",
          "1.00×10⁻⁴ mol/(L s)"
        ],
        "answer": 0,
        "explanation": "Divide the supplied cumulative production by elapsed time: .000200/20=1.00×10⁻⁵."
      },
      {
        "question": "Comparing reciprocal clock times as approximate initial rates requires:",
        "options": [
          "Different thresholds for each run",
          "The same calibrated threshold and sufficiently small conversion",
          "No knowledge of the final mixture volume convention",
          "A first-order mechanism in every case"
        ],
        "answer": 1,
        "explanation": "The fixed-threshold ratio gives mean-rate ratios; small conversion is needed for an initial-rate approximation."
      },
      {
        "question": "For [A]0=.100 M and k=.100/min, the mean disappearance rate over 0–10 min is approximately:",
        "options": [
          ".0100 M/min",
          ".00368 M/min",
          ".00632 M/min",
          ".100 M/min"
        ],
        "answer": 2,
        "explanation": "The mean is (.100−.100e⁻¹)/10=.006321 M/min."
      },
      {
        "question": "For the same first-order model, instantaneous disappearance rate at 5 min is approximately:",
        "options": [
          ".00632 M/min",
          ".0100 M/min",
          ".0607 M/min",
          ".00607 M/min"
        ],
        "answer": 3,
        "explanation": "Use k[A](5)=.100×.100e⁻⁰·⁵=.006065 M/min."
      },
      {
        "question": "At V=1.00 L, CA=.100 M, dV/dt=.0100 L/s and positive chemical loss r=.00200 M/s, dCA/dt is:",
        "options": [
          "−.00300 M/s",
          "−.00200 M/s",
          "−.00100 M/s",
          "+.00300 M/s"
        ],
        "answer": 0,
        "explanation": "The expansion term is −(CA/V)dV/dt=−.00100 M/s, added to chemical concentration loss −.00200 M/s."
      },
      {
        "question": "In that closed, uniformly reacting system, the positive chemical amount-loss rate is:",
        "options": [
          ".00300 mol/s",
          ".00200 mol/s",
          ".00100 mol/s",
          ".0100 mol/s"
        ],
        "answer": 1,
        "explanation": "Chemical loss is rV=.00200×1.00=.00200 mol/s; expansion alone does not destroy A."
      },
      {
        "question": "For A⇌B with kf=.100/min, kr=.0500/min and total concentration .300 M, equilibrium [B] is:",
        "options": [
          ".100 M",
          ".150 M",
          ".200 M",
          ".300 M"
        ],
        "answer": 2,
        "explanation": "Equal opposing rates require B/A=2; with A+B=.300 M, B=.200 M."
      },
      {
        "question": "Starting with only A in that model, one relaxation half-time gives:",
        "options": [
          "A=.150 M, B=.150 M",
          "A=.100 M, B=.200 M",
          "A=0, B=.300 M",
          "A=.200 M, B=.100 M"
        ],
        "answer": 3,
        "explanation": "The distance to equilibrium halves in ln2/(kf+kr)≈4.62 min; this is not necessarily halving A itself."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: average and instantaneous reaction rates",
        "url": "https://openstax.org/books/chemistry-2e/pages/12-1-chemical-reaction-rates"
      },
      {
        "title": "Indiana University East: interpreting iodine-clock kinetics",
        "url": "https://iu.pressbooks.pub/iuegenchemlabs/chapter/kinetics-of-the-iodine-clock-reaction/"
      },
      {
        "title": "University of Michigan: batch mole-balance derivation",
        "url": "https://websites.umich.edu/~elements/7e/02chap/summary-derive_batch.html"
      },
      {
        "title": "Texas A&M: reversible reaction rates and relaxation",
        "url": "https://www.chem.tamu.edu/class/majors/chem328/CHEM%20328_Chapter%2020.pdf"
      }
    ]
  }
} as const;
