// Authored by scripts/expand-kinetics-electrochemistry-models.mjs.
export const kineticsElectrochemistryModelsAdditions = {
  "chemical-kinetics": {
    "chapters": [
      {
        "title": "Supporting second-order decay has progressively longer half intervals",
        "formula": "−d[A]/dt=k[A]²;1/[A]t−1/[A]0=kt;t1/2=1/(k[A]0)",
        "script": "Equal successive half intervals are a feature of the simple first order model, not a universal property of every decay. In a supporting second order example, define the disappearance rate of A as k times its concentration squared. The integrated law states that reciprocal concentration at time t minus reciprocal initial concentration equals k t. Use an initial concentration of zero point one zero zero molar and a rate constant of zero point five zero zero litre per mole per second. The time to reach zero point zero five zero molar is twenty seconds. Starting from that smaller concentration, a further halving to zero point zero two five molar needs forty additional seconds, making sixty seconds from the original start. The half interval doubles because the starting concentration for each interval is halved. The rate constant itself has not changed. A straight reciprocal concentration plot can test this supplied model, but a limited noisy dataset does not uniquely prove an elementary mechanism. The coefficient k here belongs to the explicitly defined disappearance rate, so an extra stoichiometric factor must not be inserted silently.",
        "points": [
          "[A]0=.100 M;k=.500 L/mol/s · .100→.050 M:20 s · Disappearance rate specified",
          ".050→.025 M · 40 additional s · Total elapsed60 s",
          "1/[A] versus time · Slope+k for supplied model · Not proof of one mechanism"
        ],
        "board": {
          "heading": "Second-order half intervals depend on the starting concentration",
          "columns": [
            "Given / model",
            "Result / balance",
            "Condition / limit"
          ],
          "rows": [
            [
              "[A]0=.100 M;k=.500 L/mol/s",
              ".100→.050 M:20 s",
              "Disappearance rate specified"
            ],
            [
              ".050→.025 M",
              "40 additional s",
              "Total elapsed60 s"
            ],
            [
              "1/[A] versus time",
              "Slope+k for supplied model",
              "Not proof of one mechanism"
            ]
          ]
        }
      },
      {
        "title": "A supplied saturation law changes its apparent concentration dependence",
        "formula": "v=Vmax[S]/(K+[S]);Vmax=.00200 M/s;K=.0100 M",
        "script": "An experimental rate need not follow one simple concentration power across its entire range. In a supporting saturation model, rate equals a maximum rate multiplied by substrate concentration, divided by a supplied concentration constant plus substrate concentration. When substrate is much smaller than that constant, the denominator is nearly constant and the rate is approximately proportional to substrate. When substrate is much larger, the ratio approaches one and the rate approaches the maximum. Use a maximum rate of zero point zero zero two zero zero molar per second and a concentration constant of zero point zero one zero zero molar. At substrate concentration zero point zero one zero zero molar, the predicted rate is half the maximum, or zero point zero zero one zero zero molar per second. At zero point zero nine zero zero molar, the prediction is ninety percent of the maximum. These limits do not make the reaction globally first order or globally zero order. A finite high concentration can still change the rate slightly. Fitting this supplied equation does not by itself establish a unique enzyme or catalytic mechanism.",
        "points": [
          "[S] much smaller than K · v≈(Vmax/K)[S] · Approximate first-order limit",
          "[S]=K=.0100 M · v=.00100 M/s · Half of supplied Vmax",
          "[S]=.0900 M · v=.00180 M/s · 90% of Vmax;not exactly flat"
        ],
        "board": {
          "heading": "One saturation curve has different limiting behaviours",
          "columns": [
            "Given / model",
            "Result / balance",
            "Condition / limit"
          ],
          "rows": [
            [
              "[S] much smaller than K",
              "v≈(Vmax/K)[S]",
              "Approximate first-order limit"
            ],
            [
              "[S]=K=.0100 M",
              "v=.00100 M/s",
              "Half of supplied Vmax"
            ],
            [
              "[S]=.0900 M",
              "v=.00180 M/s",
              "90% of Vmax;not exactly flat"
            ]
          ]
        }
      },
      {
        "title": "Mixing dead time shifts the recorded origin without changing a first-order slope",
        "formula": "True time=tdead+tmeasured;[A]measured0=[A]true0 exp(−ktdead)",
        "script": "The first recorded concentration need not be the concentration at the instant a reaction began. A reaction may already progress during mixing and instrument preparation. In a stipulated first order example, the true starting concentration is zero point eight zero zero molar and the half life is ten seconds. Suppose the first measurement is made ten seconds after the actual start, and the instrument labels that measurement time zero. Its initial recorded concentration is then zero point four zero zero molar. Ten seconds later on the instrument clock, the concentration is zero point two zero zero molar. Fitting the ratio between these measured points still gives k equal to natural logarithm two divided by ten seconds. However, conversion relative to the true original sample is seventy-five percent at the second measurement, while loss relative to the first recorded amount is fifty percent. These are different reference amounts. Back extrapolation needs the independently known dead time and the assumption that the same rate law held during that interval. A slope alone cannot identify how much reaction occurred before data collection.",
        "points": [
          "True start .800 M;half-life10 s · First record after10 s:.400 M · Instrument calls this t=0",
          "10 measured seconds later · .200 M;ratio .400/.200=2 · Same k=ln2/10 s−1",
          "Conversion at second record · 75% true basis;50% record basis · Back extrapolation needs dead time"
        ],
        "board": {
          "heading": "The first recorded amount may already exclude early conversion",
          "columns": [
            "Given / model",
            "Result / balance",
            "Condition / limit"
          ],
          "rows": [
            [
              "True start .800 M;half-life10 s",
              "First record after10 s:.400 M",
              "Instrument calls this t=0"
            ],
            [
              "10 measured seconds later",
              ".200 M;ratio .400/.200=2",
              "Same k=ln2/10 s−1"
            ],
            [
              "Conversion at second record",
              "75% true basis;50% record basis",
              "Back extrapolation needs dead time"
            ]
          ]
        }
      },
      {
        "title": "Subtract a background rate before assigning a concentration exponent",
        "formula": "vobserved=vblank+k[A];supplied vblank=.00100 M/s",
        "script": "A measured product formation rate can contain more than the target reaction contribution. In a stipulated initial rate experiment, suppose a validated matrix matched blank contributes a constant rate of zero point zero zero one zero zero molar per second. At target reactant concentrations of zero point zero one zero zero and zero point zero two zero zero molar, observed rates are zero point zero zero three zero zero and zero point zero zero five zero zero molar per second. Subtracting the matched blank leaves target rates of zero point zero zero two zero zero and zero point zero zero four zero zero. Doubling the target concentration therefore doubles the corrected rate, and the selected first order coefficient is zero point two zero zero per second. The uncorrected rates have ratio five thirds, which would produce a misleading exponent if treated as a pure power law. This background rate is not a fixed absorbance offset: it contributes to the rate itself. Subtraction is justified only if the blank reproduces the relevant matrix and remains independent of target concentration over the tested range.",
        "points": [
          "[A]=.0100,.0200 M · Observed v=.00300,.00500 M/s · Matched blank .00100 M/s",
          "Corrected target rates · .00200,.00400 M/s · Doubled concentration;rate doubles",
          "Target law v=k[A] · k=.200 s−1 · Blank rate,not signal offset"
        ],
        "board": {
          "heading": "A background rate can disguise the target rate law",
          "columns": [
            "Given / model",
            "Result / balance",
            "Condition / limit"
          ],
          "rows": [
            [
              "[A]=.0100,.0200 M",
              "Observed v=.00300,.00500 M/s",
              "Matched blank .00100 M/s"
            ],
            [
              "Corrected target rates",
              ".00200,.00400 M/s",
              "Doubled concentration;rate doubles"
            ],
            [
              "Target law v=k[A]",
              "k=.200 s−1",
              "Blank rate,not signal offset"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "For−d[A]/dt=k[A]² with k=.500 L/mol/s and [A]0=.100 M, the first half interval is:",
        "options": [
          "10 s",
          "20 s",
          "40 s",
          "60 s"
        ],
        "answer": 1,
        "explanation": "The specified second-order disappearance law gives t1/2=1/(.500×.100)=20 s."
      },
      {
        "question": "In that same model, time from .050 M to .025 M is:",
        "options": [
          "20 s",
          "60 s",
          "40 s",
          "10 s"
        ],
        "answer": 2,
        "explanation": "The new half interval is1/(.500×.050)=40 s; total time from .100 to .025 M is60 s."
      },
      {
        "question": "For v=.00200[S]/(.0100+[S]) in compatible units, v at [S]=.0100 M is:",
        "options": [
          ".00200 M/s",
          ".000100 M/s",
          ".000500 M/s",
          ".00100 M/s"
        ],
        "answer": 3,
        "explanation": "At substrate concentration equal to K, the rate is Vmax/2=.00100 M/s."
      },
      {
        "question": "At [S]=.0900 M, the supplied saturation model predicts which fraction of Vmax?",
        "options": [
          "90%",
          "50%",
          "100% exactly",
          "10%"
        ],
        "answer": 0,
        "explanation": "The fraction is .0900/(.0100+.0900)=.90; finite substrate does not make the curve exactly flat."
      },
      {
        "question": "True [A]0=.800 M, half-life10 s, and first record after10 s. First recorded concentration?",
        "options": [
          ".800 M",
          ".400 M",
          ".200 M",
          ".600 M"
        ],
        "answer": 1,
        "explanation": "One true half-life has already elapsed before the instrument labels its first record time zero."
      },
      {
        "question": "Ten measured seconds later, [A]=.200 M. Conversion relative to the true .800 M start is:",
        "options": [
          "50%",
          "25%",
          "75%",
          "100%"
        ],
        "answer": 2,
        "explanation": "The fraction left is .200/.800=.25 of the true initial concentration, so75% has converted."
      },
      {
        "question": "Observed rates .00300 and .00500 M/s contain a matched blank .00100 M/s. Corrected rate ratio is:",
        "options": [
          "5/3",
          "3",
          "1",
          "2"
        ],
        "answer": 3,
        "explanation": "Blank subtraction gives .00200 and .00400 M/s, so the target rate ratio is2."
      },
      {
        "question": "At [A]=.0100 M, corrected rate=.00200 M/s for the stated first-order target law. k is:",
        "options": [
          ".200 s−1",
          ".300 s−1",
          ".0200 s−1",
          "2.00 s−1"
        ],
        "answer": 0,
        "explanation": "Use the corrected target rate: k=.00200/.0100=.200 s−1."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: integrated rate laws",
        "url": "https://openstax.org/books/chemistry/pages/12-4-integrated-rate-laws"
      },
      {
        "title": "NCBI Assay Guidance Manual: saturation and initial-rate controls",
        "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK92007/"
      }
    ]
  },
  "redox-electrochemistry": {
    "chapters": [
      {
        "title": "A liquid junction adds a separate term to a measured cell voltage",
        "formula": "Selected convention:Eobserved=Eright−Eleft+Ejunction",
        "script": "A cell voltage measured between two electrodes can include a contribution from the liquid junction between solutions. Such a junction can develop a potential difference when ions with different transport behaviour diffuse across a composition boundary. In a selected sign convention, observed voltage equals right electrode potential minus left electrode potential plus a separately supplied junction contribution. If the electrode difference is zero point one zero zero volt and the junction term in that orientation is positive zero point zero one five volt, the observed result is zero point one one five volt. Reversing the voltmeter orientation reverses the complete measured voltage, not just one conveniently chosen term. A salt bridge maintains ionic conduction and can reduce junction problems, but its name alone does not prove that the junction contribution is identically zero. The junction is different from an ohmic drop caused by current under load. This model supplies the junction term instead of pretending to predict it from one concentration ratio. The electrode potentials still need the same reference scale. Distinguish the theoretical electrode difference from the actual measurement before interpreting a discrepancy.",
        "points": [
          "Electrode difference .100 V · Junction term +.015 V · Specified meter orientation",
          "Observed=.100+.015 · .115 V · Reverse leads reverses full result",
          "Junction contribution · Separate from loaded-cell iR · A bridge does not prove zero Ej"
        ],
        "board": {
          "heading": "An electrode difference need not be the whole measured voltage",
          "columns": [
            "Given / model",
            "Result / balance",
            "Condition / limit"
          ],
          "rows": [
            [
              "Electrode difference .100 V",
              "Junction term +.015 V",
              "Specified meter orientation"
            ],
            [
              "Observed=.100+.015",
              ".115 V",
              "Reverse leads reverses full result"
            ],
            [
              "Junction contribution",
              "Separate from loaded-cell iR",
              "A bridge does not prove zero Ej"
            ]
          ]
        }
      },
      {
        "title": "A loaded cell has a terminal voltage below its simple open-circuit emf",
        "formula": "Simple discharge model:Vterminal=E−Ir;Pload=IV;Pinternal=I²r",
        "script": "An electrochemical source delivering current is not measured under the same condition as a reversible open circuit voltage. In a supporting lumped model, represent the source by a fixed electromotive force in series with an internal resistance. During discharge, terminal voltage is the electromotive force minus current times that resistance. Use a supplied electromotive force of one point one zero volt, current zero point two zero zero ampere and internal resistance two point zero zero ohm. The internal drop is zero point four zero zero volt, leaving a terminal voltage of zero point seven zero zero volt. The load receives zero point one four zero watt, while the internal resistive contribution is zero point zero eight zero watt. Their sum equals the ideal source power of zero point two two zero watt in this circuit model. These numbers do not redefine the standard electrode potential. Real cells also have polarization, mass transport limits and time dependent behaviour that a fixed resistance does not capture. At zero current the model predicts no ohmic drop, but a real equilibrium interpretation still needs appropriate conditions.",
        "points": [
          "E1.10 V;I.200 A;r2.00 Ω · Ir=.400 V;Vterminal=.700 V · Simple discharge model",
          "Load power IV · .140 W · Terminal electrical output",
          "Internal I²r=.080 W · Source EI=.220 W · Not full battery dynamics"
        ],
        "board": {
          "heading": "Loaded terminal voltage includes an internal current drop",
          "columns": [
            "Given / model",
            "Result / balance",
            "Condition / limit"
          ],
          "rows": [
            [
              "E1.10 V;I.200 A;r2.00 Ω",
              "Ir=.400 V;Vterminal=.700 V",
              "Simple discharge model"
            ],
            [
              "Load power IV",
              ".140 W",
              "Terminal electrical output"
            ],
            [
              "Internal I²r=.080 W",
              "Source EI=.220 W",
              "Not full battery dynamics"
            ]
          ]
        }
      },
      {
        "title": "Two calibration buffers determine the slope and intercept of a pH response",
        "formula": "E=E0−S pH;pH4:E=.180 V;pH7:E=.003 V;S=.0590 V/pH",
        "script": "A potentiometric reading becomes an analytical result only after the response relation and calibration are established. In a supplied linear model for one electrode orientation, voltage equals an intercept minus a positive slope multiplied by pH. Suppose buffers at pH four and pH seven give zero point one eight zero volt and zero point zero zero three volt under matched conditions. The voltage change of zero point one seven seven volt over three pH units gives a slope magnitude of zero point zero five nine zero volt per pH unit. The intercept is zero point four one six volt. An unknown giving zero point zero six two volt would therefore have model pH six point zero zero. This is a two point calibration, not a claim that every glass electrode has precisely that slope in every solution or temperature. Electrode condition, temperature, junction effects and drift affect actual measurements. A reversed voltage orientation changes the signs consistently. The fitted slope must not be replaced silently by a memorized theoretical value. Keep millivolts distinct from volts and choose calibration points appropriate to the measurement range.",
        "points": [
          "pH4:E.180 V;pH7:E.003 V · Slope magnitude .0590 V/pH · Matched conditions",
          "E0=.180+4×.0590 · .416 V · Model E=E0−S pH",
          "Unknown E=.062 V · pH=(.416−.062)/.0590=6 · Calibration,not universal slope"
        ],
        "board": {
          "heading": "Two points fix both response slope and offset",
          "columns": [
            "Given / model",
            "Result / balance",
            "Condition / limit"
          ],
          "rows": [
            [
              "pH4:E.180 V;pH7:E.003 V",
              "Slope magnitude .0590 V/pH",
              "Matched conditions"
            ],
            [
              "E0=.180+4×.0590",
              ".416 V",
              "Model E=E0−S pH"
            ],
            [
              "Unknown E=.062 V",
              "pH=(.416−.062)/.0590=6",
              "Calibration,not universal slope"
            ]
          ]
        }
      },
      {
        "title": "Parallel electrolysis branches need their own charge inventories",
        "formula": "Qbranch=Ibranch t;n=Qbranch/(zF);ICu=.400 A,IAg=.200 A,t9650 s,F96500 C/mol",
        "script": "Faraday's law uses the charge through the electrode of interest, not automatically the total charge from an external supply. Consider two electrolytic cells connected in parallel in a supplied steady current model. The copper two branch carries zero point four zero zero ampere and the silver one branch carries zero point two zero zero ampere for nine thousand six hundred fifty seconds. The source current is their sum, zero point six zero zero ampere. Copper branch charge is three thousand eight hundred sixty coulombs, while silver branch charge is one thousand nine hundred thirty coulombs. With a supplied Faraday constant of ninety-six thousand five hundred coulombs per mole, these are zero point zero four zero and zero point zero two zero mole of electrons. Copper two needs two electrons per deposited atom and silver one needs one, so both ideal deposited amounts are zero point zero two zero mole. Equal product amounts do not mean equal branch charges. Common parallel voltage does not determine the current split without additional cell information; here the branch currents are supplied. Complete current efficiency and the stated electrode products are assumed.",
        "points": [
          "Currents .400 A Cu;.200 A Ag · Source current .600 A · Branch currents supplied",
          "t9650 s;QCu3860 C;QAg1930 C · Electrons .0400,.0200 mol · F96500 C/mol",
          "Cu2+ needs2e−;Ag+ needs1e− · Both deposit .0200 mol · Equal amount,unequal charge"
        ],
        "board": {
          "heading": "Faraday’s law uses the charge in the relevant branch",
          "columns": [
            "Given / model",
            "Result / balance",
            "Condition / limit"
          ],
          "rows": [
            [
              "Currents .400 A Cu;.200 A Ag",
              "Source current .600 A",
              "Branch currents supplied"
            ],
            [
              "t9650 s;QCu3860 C;QAg1930 C",
              "Electrons .0400,.0200 mol",
              "F96500 C/mol"
            ],
            [
              "Cu2+ needs2e−;Ag+ needs1e−",
              "Both deposit .0200 mol",
              "Equal amount,unequal charge"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "For Eobserved=.100 V+Ejunction and supplied Ejunction=+.015 V, Eobserved is:",
        "options": [
          ".085 V",
          ".115 V",
          ".100 V",
          ".015 V"
        ],
        "answer": 1,
        "explanation": "The separately supplied junction term adds under the selected orientation: .100+.015=.115 V."
      },
      {
        "question": "Which distinguishes a junction term from ohmic drop?",
        "options": [
          "Both must be zero",
          "Only electron mass sets a junction term",
          "A junction term can exist across differing solutions without a loaded-cell iR calculation",
          "A bridge proves zero junction potential"
        ],
        "answer": 2,
        "explanation": "A liquid junction potential concerns the solution boundary; an ohmic drop is a separate current-dependent contribution."
      },
      {
        "question": "For simple discharge E1.10 V,I.200 A,r2.00 Ω, terminal voltage is:",
        "options": [
          "1.50 V",
          "1.10 V",
          ".400 V",
          ".700 V"
        ],
        "answer": 3,
        "explanation": "The internal drop isIr=.400 V, leaving terminal voltage1.10−.400=.700 V."
      },
      {
        "question": "For that model, load power and internal resistive power are:",
        "options": [
          ".140 W and .080 W",
          ".220 W and .140 W",
          ".080 W and .140 W",
          ".700 W and .400 W"
        ],
        "answer": 0,
        "explanation": "Load power=.200×.700=.140 W; internal power=.200²×2=.080 W; the sum isEI=.220 W."
      },
      {
        "question": "E=.180 V at pH4 and .003 V at pH7 for E=E0−S pH gives S:",
        "options": [
          ".177 V/pH",
          ".0590 V/pH",
          ".00300 V/pH",
          ".416 V/pH"
        ],
        "answer": 1,
        "explanation": "The positive slope magnitude is(.180−.003)/(7−4)=.0590 V per pH unit."
      },
      {
        "question": "With E0=.416 V,S=.0590 V/pH and unknown E=.062 V, the model pH is:",
        "options": [
          "4.00",
          "7.00",
          "6.00",
          "5.00"
        ],
        "answer": 2,
        "explanation": "Rearranging the calibrated relation gives pH=(.416−.062)/.0590=6.00."
      },
      {
        "question": "Parallel branches carry .400 A Cu and .200 A Ag for9650 s. Copper branch charge is:",
        "options": [
          "5790 C",
          "1930 C",
          "9650 C",
          "3860 C"
        ],
        "answer": 3,
        "explanation": "Use the copper branch current: .400×9650=3860 C, not the total source charge."
      },
      {
        "question": "With F96500 C/mol and ideal Cu2+/Cu and Ag+/Ag products, the supplied charges deposit:",
        "options": [
          ".0200 mol Cu and .0200 mol Ag",
          ".0400 mol Cu and .0200 mol Ag",
          ".0300 mol each",
          "Equal charges because the cells are parallel"
        ],
        "answer": 0,
        "explanation": "Copper receives .0400 mol electrons and needs2 per atom; silver receives .0200 mol electrons and needs1 per atom."
      }
    ],
    "sources": [
      {
        "title": "IUPAC Gold Book: liquid junction",
        "url": "https://old.goldbook.iupac.org/html/L/L03584.html"
      },
      {
        "title": "OpenStax: internal resistance and terminal voltage",
        "url": "https://openstax.org/books/university-physics-volume-2/pages/10-1-electromotive-force"
      },
      {
        "title": "IUPAC: operational pH measurement and calibration",
        "url": "https://publications.iupac.org/publications/pac/2002/pdf/7411x2169.pdf"
      },
      {
        "title": "OpenStax: current conservation",
        "url": "https://openstax.org/books/university-physics-volume-2/pages/10-3-kirchhoffs-rules"
      },
      {
        "title": "OpenStax: electrolysis equivalents",
        "url": "https://openstax.org/books/chemistry-2e/pages/17-7-electrolysis"
      }
    ]
  }
} as const;
