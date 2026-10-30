// Authored by scripts/expand-equilibrium-activity-maps.mjs.
export const equilibriumActivityMapsAdditions = {
  "equilibrium": {
    "base": 29,
    "quizBase": 50,
    "chapters": [
      {
        "title": "A diprotic acid distribution counts all three forms at one supplied pH",
        "formula": "For pKa1=4,pKa2=6,pH5:[H2A]:[HA−]:[A2−]=1:10:1;fractions1/12,10/12,1/12",
        "script": "A supplied pH can determine the relative populations of several acid forms without identifying the total acid concentration. Consider an ideal diprotic acid with first p K a four and second p K a six, held at p H five by the stated external conditions. The first dissociation relation makes the singly charged form ten times as abundant as the fully protonated acid. The second makes the doubly charged form one tenth as abundant as the singly charged form. The three amounts are therefore in the ratio one to ten to one. Dividing by their sum gives fractions one twelfth, ten twelfths and one twelfth. The middle form predominates but is not the only form present. These are species fractions, not separate p H values for separate portions of the same solution. The total analytical acid amount fixes absolute concentrations once these fractions are known. If p H is not supplied or maintained, acid mass balance and solution charge balance must be solved together rather than assuming the midpoint value. Nonideal activities or additional complexation require a more complete model.",
        "points": [
          "pKa1=4;pKa2=6;pH5 · H2A:HA−:A2−=1:10:1 · Ideal supplied-pH model",
          "Normalize by12 · 1/12;10/12;1/12 · Middle form predominates",
          "Total acid concentration · Scales all three amounts · Not three separate pH values"
        ],
        "board": {
          "heading": "Normalize the entire acid-family inventory",
          "columns": [
            "Given / model",
            "Result / balance",
            "Condition / limit"
          ],
          "rows": [
            [
              "pKa1=4;pKa2=6;pH5",
              "H2A:HA−:A2−=1:10:1",
              "Ideal supplied-pH model"
            ],
            [
              "Normalize by12",
              "1/12;10/12;1/12",
              "Middle form predominates"
            ],
            [
              "Total acid concentration",
              "Scales all three amounts",
              "Not three separate pH values"
            ]
          ]
        }
      },
      {
        "title": "Coupling dissolution with protonation changes the net equilibrium constant",
        "formula": "MX2(s)⇌M2++2X− has Ksp;HX⇌H++X− has Ka;net MX2+2H+⇌M2++2HX has K=Ksp/Ka²",
        "script": "Acid can promote dissolution when the anion released by a solid accepts protons, but the net equation must be assembled before its equilibrium constant is calculated. Use a stipulated salt M X two that dissolves to one divalent metal ion and two monovalent X anions. Its dissolution constant is K s p. The weak acid H X dissociates to a proton and X with constant K a. Reverse that acid reaction to describe protonation, then take it twice because the solid supplies two X ions. Adding these steps cancels the two free X anions. The net reaction consumes one solid formula unit and two protons, producing one metal ion and two H X molecules. Its constant is K s p divided by K a squared. With supplied dimensionless values four times ten to minus twelve and two times ten to minus six, the net constant is one. This result does not mean that every possible starting mixture completely dissolves the solid. The reaction quotient, available acid, remaining solid and other equilibria still determine the final state.",
        "points": [
          "MX2(s)→M2++2X− · Dissolution constant Ksp · Solid activity1 while present",
          "2(H++X−→HX) · Constant1/Ka² · Reverse and double",
          "Add;cancel2X− · K=Ksp/Ka²=1 · Given4e−12 and2e−6"
        ],
        "board": {
          "heading": "Cancel species before combining the constants",
          "columns": [
            "Given / model",
            "Result / balance",
            "Condition / limit"
          ],
          "rows": [
            [
              "MX2(s)→M2++2X−",
              "Dissolution constant Ksp",
              "Solid activity1 while present"
            ],
            [
              "2(H++X−→HX)",
              "Constant1/Ka²",
              "Reverse and double"
            ],
            [
              "Add;cancel2X−",
              "K=Ksp/Ka²=1",
              "Given4e−12 and2e−6"
            ]
          ]
        }
      },
      {
        "title": "An equilibrium temperature comparison needs reaction enthalpy and a stated approximation",
        "formula": "ln(K330/K300)=(50000/8.314)(1/300−1/330)≈1.822;K330/K300≈6.19",
        "script": "Temperature can change an equilibrium constant even when changing concentration at fixed temperature cannot. In a supplied constant enthalpy approximation, the natural logarithm of K at the second temperature divided by K at the first equals reaction enthalpy divided by R, multiplied by the first reciprocal temperature minus the second reciprocal temperature. Consider a reaction with positive standard enthalpy fifty kilojoules per mole, comparing three hundred and three hundred thirty kelvin. Convert the enthalpy to fifty thousand joules per mole before using R eight point three one four joules per mole per kelvin. The logarithmic ratio is about one point eight two two, so the constant increases by a factor about six point one nine. If the first constant is two, the second is about twelve point four, not the old value plus six point one nine. This exercise assumes the enthalpy is effectively constant over the interval and uses the same reaction and standard state convention. A catalyst can change the approach to equilibrium but does not supply this thermodynamic change in K at a fixed temperature.",
        "points": [
          "ΔH°=+50 kJ/mol · Use50000 J/mol · R in J mol−1 K−1",
          "300 K→330 K · ln ratio≈1.822 · K ratio≈6.19",
          "K300=2 · K330≈12.4 · Constant-enthalpy approximation"
        ],
        "board": {
          "heading": "A logarithmic change becomes a multiplicative ratio",
          "columns": [
            "Given / model",
            "Result / balance",
            "Condition / limit"
          ],
          "rows": [
            [
              "ΔH°=+50 kJ/mol",
              "Use50000 J/mol",
              "R in J mol−1 K−1"
            ],
            [
              "300 K→330 K",
              "ln ratio≈1.822",
              "K ratio≈6.19"
            ],
            [
              "K300=2",
              "K330≈12.4",
              "Constant-enthalpy approximation"
            ]
          ]
        }
      },
      {
        "title": "A product gas feed changes a heterogeneous equilibrium without changing K",
        "formula": "NH4HS(s)⇌NH3(g)+H2S(g);Kp=(pNH3/p°)(pH2S/p°);(.30+x)x=.040 gives x=.10 bar",
        "script": "A heterogeneous gas equilibrium can have unequal product partial pressures when one product was already present. In a selected ideal model, solid ammonium hydrosulfide can form ammonia and hydrogen sulfide in a closed vessel at fixed temperature and volume. Begin with ammonia partial pressure zero point three zero bar and no hydrogen sulfide, with sufficient solid available. Each amount of solid that dissociates adds equal pressure increments of the two gases, but it does not erase the initial ammonia. If the supplied dimensionless pressure constant is zero point zero four zero and standard pressure is one bar, call the hydrogen sulfide increment x in bar. The product of zero point three zero plus x and x must equal zero point zero four zero under these pressure conventions. The physically acceptable root is zero point one zero bar. Final ammonia pressure is zero point four zero bar and total gas pressure zero point five zero bar. The negative root is not a permitted gas amount. If the solid is exhausted before these pressures are reached, the assumption of solid coexistence fails and the final quotient need not equal this saturation value.",
        "points": [
          "Initial NH3=.30 bar · H2S starts at0 · Fixed T,V;enough solid",
          "Final pressures:.30+x;x · (.30+x)x=.040 · Positive root x=.10 bar",
          "Final:.40+.10=.50 bar · Unequal product pressures · Requires solid coexistence"
        ],
        "board": {
          "heading": "Retain the initial gas in the pressure ledger",
          "columns": [
            "Given / model",
            "Result / balance",
            "Condition / limit"
          ],
          "rows": [
            [
              "Initial NH3=.30 bar",
              "H2S starts at0",
              "Fixed T,V;enough solid"
            ],
            [
              "Final pressures:.30+x;x",
              "(.30+x)x=.040",
              "Positive root x=.10 bar"
            ],
            [
              "Final:.40+.10=.50 bar",
              "Unequal product pressures",
              "Requires solid coexistence"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "An ideal diprotic acid has pKa1=4,pKa2=6 at supplied pH5. Ratio H2A:HA−:A2−?",
        "options": [
          "1:1:1",
          "1:10:1",
          "10:1:10",
          "1:100:1"
        ],
        "answer": 1,
        "explanation": "HA−/H2A=10 and A2−/HA−=.1,so the three-form ratio is1:10:1."
      },
      {
        "question": "What fraction is HA− in that stipulated distribution?",
        "options": [
          "1/2",
          "1/12",
          "10/12",
          "1"
        ],
        "answer": 2,
        "explanation": "Normalize the middle amount10 by the full sum12;predominance does not mean exclusivity."
      },
      {
        "question": "MX2(s) dissolution has Ksp and HX dissociation has Ka. Constant for MX2(s)+2H+⇌M2++2HX?",
        "options": [
          "KspKa²",
          "Ksp/Ka",
          "Ka²/Ksp",
          "Ksp/Ka²"
        ],
        "answer": 3,
        "explanation": "Reverse the acid reaction twice and cancel the two X− intermediates."
      },
      {
        "question": "Use supplied dimensionless Ksp=4×10^−12,Ka=2×10^−6. Net constant in that coupled equation?",
        "options": [
          "1",
          "2×10^−6",
          "4×10^−12",
          "10^12"
        ],
        "answer": 0,
        "explanation": "Ka²=4×10^−12,so Ksp/Ka²=1. This is a constant,not a guarantee of complete dissolution."
      },
      {
        "question": "For ΔH°=+50 kJ/mol and constant enthalpy,300→330 K gives ln(K2/K1)≈1.822. Approximate K2/K1?",
        "options": [
          "1.822",
          "6.19",
          "−6.19",
          "0.162"
        ],
        "answer": 1,
        "explanation": "Exponentiate the natural logarithm;e^1.822≈6.19."
      },
      {
        "question": "If K300=2 in that model,approximate K330?",
        "options": [
          "3.822",
          "8.19",
          "12.4",
          "2 because catalysts affect rates"
        ],
        "answer": 2,
        "explanation": "Multiply the initial constant by the ratio6.19;temperature and catalysis are different changes."
      },
      {
        "question": "For the stated NH4HS solid equilibrium,initial pNH3=.30 bar,pH2S=0,Kp=.040,p°=1 bar. Final pH2S with sufficient solid?",
        "options": [
          ".20 bar",
          ".30 bar",
          ".40 bar",
          ".10 bar"
        ],
        "answer": 3,
        "explanation": "The acceptable root of x(.30+x)=.040 is x=.10 bar,giving pNH3=.40 bar."
      },
      {
        "question": "If the entire solid is exhausted before that gas composition is reached,what must change?",
        "options": [
          "The solid-coexistence assumption cannot be imposed blindly",
          "Both gas partial pressures must always be equal",
          "K changes merely because the vessel has less solid",
          "A negative gas amount becomes acceptable"
        ],
        "answer": 0,
        "explanation": "The saturation relation describes coexistence with the solid;an exhausted phase changes which equilibrium condition can be imposed."
      }
    ],
    "sources": [
      {
        "title": "UCI R. Corn: diprotic alpha fractions",
        "url": "https://www.chem.uci.edu/~unicorn/M3LC/handouts/Week4/AlphaFractions2018.pdf"
      },
      {
        "title": "OpenStax: precipitation,dissolution and pH",
        "url": "https://openstax.org/books/chemistry-2e/pages/15-1-precipitation-and-dissolution"
      },
      {
        "title": "University of Texas: chemical equilibria and van’t Hoff",
        "url": "https://ch302.cm.utexas.edu/chemEQ/equilibrium/chemEQ-all.php"
      },
      {
        "title": "OpenStax: gas and heterogeneous equilibrium quotients",
        "url": "https://openstax.org/books/chemistry-2e/pages/13-2-equilibrium-constants"
      }
    ]
  },
  "redox-electrochemistry": {
    "base": 30,
    "quizBase": 50,
    "chapters": [
      {
        "title": "A Nernst quotient uses activities rather than an uncorrected concentration ratio",
        "formula": "For a2-electron cell:E=E°−(.05916/2)log10 Q at298 K;if Q=.50,E−E°≈+.00890 V",
        "script": "A concentration quotient is an approximation to the activity quotient in a thermodynamic electrode relation. In a selected two electron cell with pure metal electrodes, let the reaction quotient be the activity of the product metal ion divided by that of the reactant metal ion. Write each solute activity as an activity coefficient times concentration divided by its standard concentration. If the ion concentrations are equal, the concentration ratio is one. That alone does not prove the activity ratio is one. Suppose a consistent supplied correction makes the activity quotient zero point five zero. At two hundred ninety-eight kelvin, the Nernst correction is minus zero point zero five nine one six divided by two, times the base ten logarithm of that quotient. Because the logarithm of one half is negative, the cell potential lies about zero point zero zero eight nine zero volts above its standard value. For a supplied standard potential one point one zero volts, the result is about one point one zero nine volts. These are original model inputs,not universal coefficients for all salt solutions. Keep the standard-state convention and the activity correction consistent before interpreting a small measured voltage difference.",
        "points": [
          "Equal ion concentrations · Concentration ratio1 · Activity ratio can differ",
          "Supplied Qactivity=.50 · ΔE≈+.00890 V · 298 K;n=2",
          "E°=1.10 V · E≈1.109 V · Consistent supplied model"
        ],
        "board": {
          "heading": "Equal concentration is not always unit activity ratio",
          "columns": [
            "Given / model",
            "Result / balance",
            "Condition / limit"
          ],
          "rows": [
            [
              "Equal ion concentrations",
              "Concentration ratio1",
              "Activity ratio can differ"
            ],
            [
              "Supplied Qactivity=.50",
              "ΔE≈+.00890 V",
              "298 K;n=2"
            ],
            [
              "E°=1.10 V",
              "E≈1.109 V",
              "Consistent supplied model"
            ]
          ]
        }
      },
      {
        "title": "Electrode potentials must share a reference before subtraction",
        "formula": "E(vs SHE)=E(vs R)+ER(vs SHE);a common reference offset cancels in Ecathode−Eanode",
        "script": "An electrode potential is a relative quantity,so the reference belongs with the numerical value. Use a stipulated reference electrode R whose potential is plus zero point two zero volts relative to the standard hydrogen electrode. A cathode reading plus zero point one four volts versus R corresponds to plus zero point three four volts on the hydrogen reference scale. An anode reduction potential minus zero point nine six volts versus the same R corresponds to minus zero point seven six volts on that scale. Subtracting cathode minus anode gives one point one zero volts on either common scale because the shared offset cancels. The cancellation fails if the two quoted values use different references and are subtracted without conversion. For example,an anode reading minus zero point six six volts versus a second reference at plus zero point one zero volts maps to minus zero point five six volts versus hydrogen. With the earlier cathode,the resulting difference is zero point nine zero volts. These supplied reference values are an accounting exercise;actual reference electrodes also depend on specified composition and temperature.",
        "points": [
          "Reference R:+.20 V vs SHE · Cathode+.14→+.34 · Add reference offset",
          "Anode−.96 vs same R · →−.76 vs SHE · Difference1.10 V",
          "Anode−.66 vs S(+.10) · →−.56 vs SHE · With cathode: .90 V"
        ],
        "board": {
          "heading": "Convert to one scale before comparing readings",
          "columns": [
            "Given / model",
            "Result / balance",
            "Condition / limit"
          ],
          "rows": [
            [
              "Reference R:+.20 V vs SHE",
              "Cathode+.14→+.34",
              "Add reference offset"
            ],
            [
              "Anode−.96 vs same R",
              "→−.76 vs SHE",
              "Difference1.10 V"
            ],
            [
              "Anode−.66 vs S(+.10)",
              "→−.56 vs SHE",
              "With cathode: .90 V"
            ]
          ]
        }
      },
      {
        "title": "Supporting ionic transport fractions divide solution current,not electrode yield",
        "formula": "For a stated dilute binary1:1 electrolyte:t+=λ+/(λ++λ−);50/(50+75)=.40;t−=.60",
        "script": "Conductance can be shared unequally by the positive and negative ions of an electrolyte. In a supporting dilute binary one to one model,suppose the supplied ionic molar conductivities are fifty and seventy-five in matching units. Their sum is one hundred twenty-five. The cation current fraction is fifty divided by that sum,or zero point four zero;the anion fraction is zero point six zero. These fractions are called transport or transference numbers under the stated model. If the total charge transported through a chosen cross section is one thousand coulombs,the corresponding conventional current contributions are four hundred and six hundred coulombs. Oppositely charged ions move in opposite directions,but both motions can contribute to the same direction of conventional current. This split is not a statement that only forty percent of the externally measured charge is available at an electrode,or that a metal deposition current efficiency must be forty percent. Electrode reactions and competing products require their own electron ledger. Multiple electrolytes,finite-concentration interactions,diffusion and changing composition can require a more complete transport treatment than this supplied limiting comparison.",
        "points": [
          "λ+=50;λ−=75 · Sum125;matching units · Dilute binary1:1 model",
          "t+=50/125=.40 · t−=75/125=.60 · Fractions sum1",
          "Total charge1000 C · 400 C and600 C · Not deposition efficiency"
        ],
        "board": {
          "heading": "Ionic current shares and electrode products differ",
          "columns": [
            "Given / model",
            "Result / balance",
            "Condition / limit"
          ],
          "rows": [
            [
              "λ+=50;λ−=75",
              "Sum125;matching units",
              "Dilute binary1:1 model"
            ],
            [
              "t+=50/125=.40",
              "t−=75/125=.60",
              "Fractions sum1"
            ],
            [
              "Total charge1000 C",
              "400 C and600 C",
              "Not deposition efficiency"
            ]
          ]
        }
      },
      {
        "title": "Uniform pH shifts both reversible water-electrode lines by the same amount",
        "formula": "At298 K,unit gas activities and water activity1:EO2=1.229−.05916pH;EH2=−.05916pH;gap1.229 V",
        "script": "The potential of one water-related electrode can shift with p H while the difference between two matched electrodes stays the same. In a supplied reversible model at two hundred ninety-eight kelvin,hold hydrogen and oxygen gas activities at one and water activity at one. On the standard hydrogen reference scale,the hydrogen reduction line is minus zero point zero five nine one six times p H volts. The oxygen to water reduction line is one point two two nine volts minus that same p H term. If both electrodes experience the same p H,the common term cancels from their difference. At p H seven,the two potentials are approximately minus zero point four one four and plus zero point eight one five volts,still separated by one point two two nine volts. The positive difference refers to reversible hydrogen oxygen fuel-cell operation;reversing the reaction to split water requires external work. A practical electrolyser generally needs additional voltage for kinetic overpotentials and resistance. Unequal compartment p H,membranes,nonunit gas activities or other reactions require a complete cell balance rather than blindly applying the cancellation.",
        "points": [
          "EH2=−.05916pH · EO2=1.229−.05916pH · 298 K;unit gas activities",
          "Same pH7 · −.414 and+.815 V · Both versus SHE",
          "Subtract matched lines · Gap1.229 V · Not practical operating voltage"
        ],
        "board": {
          "heading": "A common pH term cancels from the matched gap",
          "columns": [
            "Given / model",
            "Result / balance",
            "Condition / limit"
          ],
          "rows": [
            [
              "EH2=−.05916pH",
              "EO2=1.229−.05916pH",
              "298 K;unit gas activities"
            ],
            [
              "Same pH7",
              "−.414 and+.815 V",
              "Both versus SHE"
            ],
            [
              "Subtract matched lines",
              "Gap1.229 V",
              "Not practical operating voltage"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "A supplied2-electron cell at298 K has activity quotient Q=.50. Sign of E−E°?",
        "options": [
          "Negative",
          "Positive,about+.00890 V",
          "Zero because concentrations were equal",
          "Undefined for every activity below1"
        ],
        "answer": 1,
        "explanation": "log10(.50)<0,so the negative Nernst logarithm gives a positive correction."
      },
      {
        "question": "With E°=1.10 V and that correction,approximate E?",
        "options": [
          "1.091 V",
          "1.100 V",
          "1.109 V",
          "1.159 V"
        ],
        "answer": 2,
        "explanation": "Add.00890 V to1.10 V. The activity quotient,not the uncorrected concentration ratio,is used."
      },
      {
        "question": "Cathode+.14 V and anode−.96 V are both versus a reference at+.20 V vs SHE. Cell potential?",
        "options": [
          ".90 V",
          "1.30 V",
          ".20 V",
          "1.10 V"
        ],
        "answer": 3,
        "explanation": "Both values receive the same+.20 V shift;the common offset cancels in the difference."
      },
      {
        "question": "Cathode+.14 vs R(+.20 vs SHE);anode−.66 vs S(+.10 vs SHE). Correct cell potential?",
        "options": [
          ".90 V",
          ".80 V",
          "1.00 V",
          "1.10 V"
        ],
        "answer": 0,
        "explanation": "Convert to+.34 and−.56 V versus SHE,then subtract;different reference offsets do not cancel."
      },
      {
        "question": "In the supplied dilute binary1:1 model,λ+=50 and λ−=75 in matching units. Cation transport fraction?",
        "options": [
          ".60",
          ".40",
          ".50",
          "1.50"
        ],
        "answer": 1,
        "explanation": "t+=50/(50+75)=.40;the anion fraction is.60."
      },
      {
        "question": "For1000 C total transported charge and t+=.40,the cation and anion conventional-current contributions are?",
        "options": [
          "1000 C and1000 C",
          "40 C and60 C",
          "400 C and600 C",
          "400 C and−600 C,so only−200 C total"
        ],
        "answer": 2,
        "explanation": "Both ion motions contribute to the conventional current;the positive fractions sum to the measured total."
      },
      {
        "question": "At common pH7,the supplied reversible hydrogen and oxygen reduction lines are−.414 and+.815 V vs SHE. Gap?",
        "options": [
          ".401 V",
          ".815 V",
          ".414 V",
          "1.229 V"
        ],
        "answer": 3,
        "explanation": "Subtract oxygen minus hydrogen reduction potentials:.815−(−.414)=1.229 V under the stipulated matched conditions."
      },
      {
        "question": "Does this cancellation prove every practical water electrolyser operates at exactly1.229 V?",
        "options": [
          "No;overpotentials,resistance and actual conditions also matter",
          "Yes;kinetics cannot affect operating voltage",
          "Yes;gas activity and compartment pH never matter",
          "Yes;fuel-cell and electrolysis reaction directions are identical"
        ],
        "answer": 0,
        "explanation": "The reversible matched-cell value is not a universal practical operating voltage or an excuse to omit cell conditions."
      }
    ],
    "sources": [
      {
        "title": "Lower: Nernst equation and activities",
        "url": "https://chem.libretexts.org/Bookshelves/General_Chemistry/Chem1_%28Lower%29/16%3A_Electrochemistry/16.04%3A_The_Nernst_Equation"
      },
      {
        "title": "Harvey: reference-electrode conversion",
        "url": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_%28LibreTexts%29/23%3A_Potentiometry/23.01%3A_Reference_Electrodes"
      },
      {
        "title": "Lower: ionic migration and transference numbers",
        "url": "https://chem.libretexts.org/Bookshelves/General_Chemistry/Chem1_%28Lower%29/08%3A_Solutions/8.10%3A_Ions_and_Electrolytes/8.10.9D%3A_8.10.9D%3A_Ionic_migration"
      },
      {
        "title": "Williams chemistry: water-cell pH cancellation",
        "url": "https://chem.libretexts.org/Courses/Williams_School/Advanced_Chemistry/16%3A_Introduction_to_Inorganic_Chemistry/16.03%3A_Electrochemical_Potentials"
      }
    ]
  }
} as const;
