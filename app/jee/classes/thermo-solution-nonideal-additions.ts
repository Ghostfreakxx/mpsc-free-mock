// Authored by scripts/expand-thermo-solution-nonideal.mjs.
export const thermoSolutionNonidealAdditions = {
  "chemical-thermodynamics": {
    "chapters": [
      {
        "title": "A closed cycle can transfer net heat and work while state changes vanish",
        "formula": "Clockwise rectangle:P_high=2 bar,P_low=1 bar,V=1→3 L;Wby=200 J,wchem=−200 J,qnet=+200 J",
        "script": "Returning to the same thermodynamic state does not mean that no energy was transferred along the way. Consider a closed working substance following a specified quasistatic rectangular pressure volume cycle. It expands from one to three litres at two bar, changes pressure at fixed volume, compresses back at one bar, and returns to its original pressure at fixed volume. The net work done by the substance is the enclosed area: one bar times two litres, or two hundred joules. In the chemistry convention, work on the system is therefore minus two hundred joules. Because internal energy returns to its initial value, the first law requires net heat into the system of plus two hundred joules. The system entropy also returns to its original value, but that alone does not prove zero entropy generation in the surroundings. Heat and work are path transfers; internal energy and entropy are state functions. The loop area gives net work, not the total heat absorbed on only the hot portions or an efficiency without additional information.",
        "points": [
          "2 bar expansion;1 bar return · Area=2 bar L=200 J · Clockwise quasistatic cycle",
          "Chemistry work w · −200 J · Work done by substance",
          "Cycle:ΔU=0;ΔSsystem=0 · qnet=+200 J · Not zero heat transfer"
        ],
        "board": {
          "heading": "A cycle closes states,not energy transfers",
          "columns": [
            "Given / model",
            "Balance / result",
            "Condition / limit"
          ],
          "rows": [
            [
              "2 bar expansion;1 bar return",
              "Area=2 bar L=200 J",
              "Clockwise quasistatic cycle"
            ],
            [
              "Chemistry work w",
              "−200 J",
              "Work done by substance"
            ],
            [
              "Cycle:ΔU=0;ΔSsystem=0",
              "qnet=+200 J",
              "Not zero heat transfer"
            ]
          ]
        }
      },
      {
        "title": "Two finite bodies conserve energy while generating entropy",
        "formula": "C1=C2=100 J/K;T1=400 K,T2=300 K;Tf=350 K;ΔStotal=100 ln(350/400)+100 ln(350/300)>0",
        "script": "The surroundings in a heat transfer problem are not always an infinite reservoir at fixed temperature. Take two bodies with equal constant heat capacities of one hundred joules per kelvin, initially at four hundred and three hundred kelvin. Place the pair in an ideal insulated enclosure, allow only heat exchange between them, and neglect mechanical work and phase changes. Energy conservation gives a common final temperature of three hundred fifty kelvin. The hotter body loses five thousand joules and the cooler gains the same amount, so the combined energy change is zero. Entropy is a separate ledger. Evaluate each state change along a reversible reference heating or cooling path using heat capacity times the natural logarithm of final temperature divided by initial temperature. Adding the two changes gives one hundred times the logarithm of forty-nine divided by forty-eight, about two point zero six joules per kelvin. The total is positive even though no heat crossed the enclosure boundary. This models spontaneous finite-temperature heat exchange; replacing both logarithms by one heat divided by an arbitrary average temperature would lose the entropy-generation information.",
        "points": [
          "100 J/K each;400 and300 K · Final350 K · Insulated pair;no work",
          "Hot loses5000 J · Cold gains5000 J · Combined ΔU=0",
          "ΔSsum=100 ln(49/48) · ≈+2.06 J/K · Heat exchange is irreversible"
        ],
        "board": {
          "heading": "Energy conservation does not imply zero entropy change",
          "columns": [
            "Given / model",
            "Balance / result",
            "Condition / limit"
          ],
          "rows": [
            [
              "100 J/K each;400 and300 K",
              "Final350 K",
              "Insulated pair;no work"
            ],
            [
              "Hot loses5000 J",
              "Cold gains5000 J",
              "Combined ΔU=0"
            ],
            [
              "ΔSsum=100 ln(49/48)",
              "≈+2.06 J/K",
              "Heat exchange is irreversible"
            ]
          ]
        }
      },
      {
        "title": "Electrical calibration precedes the reaction heat calculation",
        "formula": "200 W×100 s=20 kJ;20 kJ/4 K=5 kJ/K;reaction3 K gives qrxn=−15 kJ in the stated constant-volume model",
        "script": "A calorimeter temperature rise becomes a reaction energy only after the effective heat capacity is known. In a selected calibration, an electrical heater supplies two hundred watts for one hundred seconds, depositing twenty kilojoules while the measured temperature rises four kelvin. Assume heat leakage and other losses have been corrected or are negligible. The effective heat capacity of the complete calorimeter assembly is then five kilojoules per kelvin. Under the same assembly conditions, a reaction produces a three kelvin rise, so the calorimeter gains fifteen kilojoules. The reacting sample loses that energy as heat. If the sample corresponds to zero point zero one zero mole of the written reaction, its molar energy change is minus one thousand five hundred kilojoules per mole. In the stipulated rigid constant volume experiment with no other significant work, this measures a reaction internal energy change. It is not automatically a constant pressure enthalpy. Ignition energy, evaporation, changed filling and background heat can require separate corrections in a real instrument; calibration is not permission to ignore those differences.",
        "points": [
          "200 W for100 s · 20 kJ input;ΔT4 K · Ccal=5 kJ/K",
          "Reaction ΔT3 K · qcal=+15 kJ · qrxn=−15 kJ",
          "Reaction amount.010 mol · ΔUm=−1500 kJ/mol · Rigid;other work negligible"
        ],
        "board": {
          "heading": "Calibrate the assembly before assigning reaction heat",
          "columns": [
            "Given / model",
            "Balance / result",
            "Condition / limit"
          ],
          "rows": [
            [
              "200 W for100 s",
              "20 kJ input;ΔT4 K",
              "Ccal=5 kJ/K"
            ],
            [
              "Reaction ΔT3 K",
              "qcal=+15 kJ",
              "qrxn=−15 kJ"
            ],
            [
              "Reaction amount.010 mol",
              "ΔUm=−1500 kJ/mol",
              "Rigid;other work negligible"
            ]
          ]
        }
      },
      {
        "title": "Supporting temperature correction updates enthalpy and entropy together",
        "formula": "ΔH600=40 kJ+50 J/K×300 K=55 kJ;ΔS600=100+50 ln2=134.66 J/K;ΔG600≈−25.79 kJ/mol",
        "script": "Using an enthalpy from one temperature with an entropy from another can create an inconsistent Gibbs calculation. In a supporting constant heat capacity model, take a standard reaction enthalpy of forty kilojoules per mole and entropy of one hundred joules per mole per kelvin at three hundred kelvin. Let the reaction heat capacity difference be fifty joules per mole per kelvin throughout the interval to six hundred kelvin, with no phase transition. The enthalpy correction is the heat capacity difference times the temperature interval, adding fifteen kilojoules per mole. The entropy correction instead integrates heat capacity difference divided by temperature, adding fifty times the natural logarithm of two joules per mole per kelvin. At six hundred kelvin, the consistent enthalpy is fifty-five kilojoules per mole and entropy about one hundred thirty-four point six six joules per mole per kelvin. Subtracting temperature times entropy gives standard Gibbs energy about minus twenty-five point seven nine kilojoules per mole. Use compatible units and the same reaction with the stated constant heat capacity difference.",
        "points": [
          "300 K:ΔH40 kJ/mol · ΔS100 J mol−1 K−1 · ΔCp=50 J mol−1 K−1",
          "At600 K · ΔH55 kJ;ΔS134.66 J/K · No phase transition",
          "ΔG=ΔH−TΔS · ≈−25.79 kJ/mol · Use both corrected values"
        ],
        "board": {
          "heading": "Correct both state functions to the same temperature",
          "columns": [
            "Given / model",
            "Balance / result",
            "Condition / limit"
          ],
          "rows": [
            [
              "300 K:ΔH40 kJ/mol",
              "ΔS100 J mol−1 K−1",
              "ΔCp=50 J mol−1 K−1"
            ],
            [
              "At600 K",
              "ΔH55 kJ;ΔS134.66 J/K",
              "No phase transition"
            ],
            [
              "ΔG=ΔH−TΔS",
              "≈−25.79 kJ/mol",
              "Use both corrected values"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "A clockwise rectangular cycle expands1→3 L at2 bar and compresses at1 bar. Chemistry-convention net work on the system?",
        "options": [
          "+200 J",
          "−200 J",
          "0 J",
          "−600 J"
        ],
        "answer": 1,
        "explanation": "The net work by the system is(2−1)(3−1)=2 bar L=200 J;work on it has the opposite sign."
      },
      {
        "question": "For that closed cycle with ΔU=0,what is net heat into the system?",
        "options": [
          "−200 J",
          "0 J",
          "+200 J",
          "It cannot exchange heat because entropy returns"
        ],
        "answer": 2,
        "explanation": "ΔU=q+w=0 with w=−200 J gives q=+200 J. A state function returning does not make transfers vanish."
      },
      {
        "question": "Two insulated bodies each have constant C=100 J/K at400 and300 K,with no work or phase change. Final common temperature?",
        "options": [
          "300 K",
          "400 K",
          "About346 K",
          "350 K"
        ],
        "answer": 3,
        "explanation": "Energy conservation with equal heat capacities gives the arithmetic mean350 K;the geometric mean belongs to a different reversible-work comparison."
      },
      {
        "question": "Total entropy change for those two finite bodies?",
        "options": [
          "100 ln(49/48) J/K,positive",
          "0 because no heat enters the enclosure",
          "−100 ln(49/48) J/K",
          "5000/350 J/K for the whole pair"
        ],
        "answer": 0,
        "explanation": "Sum100 ln(350/400)+100 ln(350/300). Internal heat exchange can generate entropy in an insulated composite."
      },
      {
        "question": "A200 W heater runs100 s and causes a corrected4 K rise. Effective calorimeter heat capacity?",
        "options": [
          "20 kJ/K",
          "5 kJ/K",
          ".05 kJ/K",
          "800 kJ/K"
        ],
        "answer": 1,
        "explanation": "Energy is20000 J=20 kJ;divide by4 K to obtain5 kJ/K."
      },
      {
        "question": "That assembly rises3 K for.010 mol reaction at rigid volume,other work negligible. Molar internal energy change?",
        "options": [
          "+1500 kJ/mol",
          "−15 kJ/mol",
          "−1500 kJ/mol",
          "+15 kJ/mol"
        ],
        "answer": 2,
        "explanation": "The calorimeter gains15 kJ,so reaction heat is−15 kJ;divide by.010 mol."
      },
      {
        "question": "ΔH300=40 kJ/mol,ΔCp=50 J mol−1 K−1 constant. Find ΔH600 with no phase change.",
        "options": [
          "40 kJ/mol",
          "−15 kJ/mol",
          "70 kJ/mol",
          "55 kJ/mol"
        ],
        "answer": 3,
        "explanation": "Add50×300=15000 J/mol=15 kJ/mol to the original40."
      },
      {
        "question": "With ΔS300=100 J mol−1 K−1,that same model gives ΔS600=100+50 ln2. Approximate ΔG600?",
        "options": [
          "−25.79 kJ/mol",
          "−20.00 kJ/mol",
          "+25.79 kJ/mol",
          "−55.00 kJ/mol"
        ],
        "answer": 0,
        "explanation": "Use55−600×(100+50 ln2)/1000≈−25.79 kJ/mol;both H and S must refer to600 K."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: cyclic pressure-volume work",
        "url": "https://openstax.org/books/college-physics-2e/pages/15-2-the-first-law-of-thermodynamics-and-some-simple-processes"
      },
      {
        "title": "Arovas: thermal equilibrium and entropy",
        "url": "https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book%3A_Thermodynamics_and_Statistical_Mechanics_%28Arovas%29/04%3A_Statistical_Ensembles/4.03%3A_Thermal_Equilibrium"
      },
      {
        "title": "Monash: electrical calorimeter calibration",
        "url": "https://www.monash.edu/student-academic-success/chemistry/quantifying-changes-in-chemical-reactions/using-calorimeters-for-accurate-heat-measurement"
      },
      {
        "title": "DeVoe: reaction heat capacity and enthalpy",
        "url": "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/DeVoes_Thermodynamics_and_Chemistry/11%3A_Reactions_and_Other_Chemical_Processes/11.03%3A_Molar_Reaction_Enthalpy"
      }
    ]
  },
  "solutions": {
    "chapters": [
      {
        "title": "Supplied activity coefficients correct ideal liquid vapour pressures",
        "formula": "pA=xAγA pA°=.4×1.5×100=60 kPa;pB=.6×1.2×50=36 kPa;P=96 kPa;yA=.625",
        "script": "A nonideal liquid mixture can be compared with Raoult's law when the activity convention is stated. In a selected two volatile component example, assume an ideal vapour and use pure liquid standard states for the liquid activities. Component A has liquid mole fraction zero point four, activity coefficient one point five and pure vapour pressure one hundred kilopascals. Component B has mole fraction zero point six, coefficient one point two and pure vapour pressure fifty kilopascals. Multiply mole fraction,activity coefficient and pure vapour pressure for each component. The partial pressures are sixty and thirty-six kilopascals, giving total pressure ninety-six. Without the supplied nonideal corrections,the ideal total would be seventy kilopascals. The vapour fraction of A is sixty divided by ninety-six,or zero point six two five,not the liquid fraction zero point four. These coefficients are supplied at this temperature and composition;they must not be treated as universal constants over an entire composition curve. One corrected pressure point still does not establish an azeotrope or its boiling composition.",
        "points": [
          "xA=.4;γA=1.5;pA°100 · pA=60 kPa · Pure-liquid standard",
          "xB=.6;γB=1.2;pB°50 · pB=36 kPa · Ideal vapour assumed",
          "P=96 kPa;yA=.625 · Ideal reference P=70 · One composition only"
        ],
        "board": {
          "heading": "Correct each partial pressure before summing",
          "columns": [
            "Given / model",
            "Balance / result",
            "Condition / limit"
          ],
          "rows": [
            [
              "xA=.4;γA=1.5;pA°100",
              "pA=60 kPa",
              "Pure-liquid standard"
            ],
            [
              "xB=.6;γB=1.2;pB°50",
              "pB=36 kPa",
              "Ideal vapour assumed"
            ],
            [
              "P=96 kPa;yA=.625",
              "Ideal reference P=70",
              "One composition only"
            ]
          ]
        }
      },
      {
        "title": "Partial molar volumes describe the mixture rather than pure-liquid volumes",
        "formula": "At the supplied composition:V=2×17+1×56=90 cm³;pure-volume sum2×18+58=94 cm³",
        "script": "Mixing volumes need not equal the sum of the original pure liquid volumes. A partial molar volume describes the local volume contribution of adding a component to a mixture at specified temperature,pressure and composition. In a supplied hypothetical binary example,take two moles of A and one mole of B. At that final composition,their partial molar volumes are seventeen and fifty-six cubic centimetres per mole. The mixture volume is amount A times its partial molar volume plus amount B times its partial molar volume,giving ninety cubic centimetres. If the corresponding supplied pure liquid molar volumes are eighteen and fifty-eight,the unmixed volume sum is ninety-four cubic centimetres. The mixing volume change is therefore minus four cubic centimetres. This is a volume contraction,not a loss of four grams or four moles. With supplied molar masses eighteen and forty-six grams per mole,the mass remains eighty-two grams and the density is about zero point nine one one grams per cubic centimetre. Partial molar volumes may vary with composition,so these local values cannot be reused indiscriminately for every mixture ratio.",
        "points": [
          "nA=2;nB=1 mol · VbarA17;VbarB56 · cm³/mol at final mix",
          "Mixture V=90 cm³ · Pure-volume sum94 cm³ · ΔVmix=−4 cm³",
          "Mass82 g retained · Density≈.911 g/cm³ · No material disappears"
        ],
        "board": {
          "heading": "Volume contraction is not a mass loss",
          "columns": [
            "Given / model",
            "Balance / result",
            "Condition / limit"
          ],
          "rows": [
            [
              "nA=2;nB=1 mol",
              "VbarA17;VbarB56",
              "cm³/mol at final mix"
            ],
            [
              "Mixture V=90 cm³",
              "Pure-volume sum94 cm³",
              "ΔVmix=−4 cm³"
            ],
            [
              "Mass82 g retained",
              "Density≈.911 g/cm³",
              "No material disappears"
            ]
          ]
        }
      },
      {
        "title": "Supporting ionic strength weights squared charge after dilution",
        "formula": "Mix100 mL .10 M CaCl2 with100 mL .20 M NaCl;[Ca2+]=.05,[Na+]=.10,[Cl−]=.20 M;I=.25 M",
        "script": "A solution's ionic strength is not simply its salt concentration or its total number of dissolved ions. In a supporting concentration based calculation,it is one half the sum over all ions of concentration times the square of charge number. Consider mixing one hundred millilitres of zero point one zero molar calcium chloride with one hundred millilitres of zero point two zero molar sodium chloride. Assume complete dissociation,no precipitation and additive solution volumes. After dilution to two hundred millilitres,the calcium concentration is zero point zero five molar,sodium zero point one zero,and chloride zero point two zero. Chloride receives contributions from both salts. The ionic strength is one half of four times the calcium concentration plus the sodium and chloride concentrations,giving zero point two five molar. The total ion concentration is instead zero point three five molar. Squaring charge means opposite signs do not cancel;electrical neutrality is a different sum. Ionic strength alone does not determine every activity coefficient. An additional model and its valid concentration range must be specified.",
        "points": [
          "After mixing:[Ca2+]=.05 M · [Na+]=.10;[Cl−]=.20 · Complete ions;volume additive",
          "I=.5Σci zi² · .5(.20+.10+.20)=.25 M · Charge signs do not cancel",
          "Total ion concentration · .35 M,not.25 M · Not a coefficient model"
        ],
        "board": {
          "heading": "Dilute first,then square the charge numbers",
          "columns": [
            "Given / model",
            "Balance / result",
            "Condition / limit"
          ],
          "rows": [
            [
              "After mixing:[Ca2+]=.05 M",
              "[Na+]=.10;[Cl−]=.20",
              "Complete ions;volume additive"
            ],
            [
              "I=.5Σci zi²",
              ".5(.20+.10+.20)=.25 M",
              "Charge signs do not cancel"
            ],
            [
              "Total ion concentration",
              ".35 M,not.25 M",
              "Not a coefficient model"
            ]
          ]
        }
      },
      {
        "title": "Supporting osmotic virial correction can mimic a smaller apparent molar mass",
        "formula": "Supplied model:π/(RT)=c+B c²;c=.010 mol/L,B=20 L/mol→.012 mol/L;single-point Mapp=83.3 g/mol for true M100",
        "script": "A single osmotic measurement need not reveal a solute's true molar mass if the ideal pressure law is used outside its model. In a supporting supplied nonideal equation,osmotic pressure divided by R T equals solute molar concentration plus a coefficient B times concentration squared. Let a nondissociating solute have true molar mass one hundred grams per mole and mass concentration one gram per litre. Its molar concentration is zero point zero one zero mole per litre. With supplied B twenty litres per mole,the equation gives pressure divided by R T equal to zero point zero one two mole per litre. If that pressure were interpreted as ideal,the apparent concentration would be twenty percent too high and apparent molar mass about eighty-three point three grams per mole. This discrepancy does not require chemical dissociation or a changed molecular formula. At smaller concentrations,the quadratic correction becomes less important. A suitable concentration-series extrapolation can recover the dilute limit when the model applies. The coefficient,units,temperature and neglected higher terms must be specified;this exercise is not a universal virial law for every electrolyte or concentrated solution.",
        "points": [
          "Mass1 g/L;true M100 · c=.010 mol/L · Nondissociating solute",
          "B=20 L/mol · π/(RT)=.012 mol/L · Supplied second-order model",
          "Ideal interpretation · Mapp=1/.012≈83.3 · Not proof of dissociation"
        ],
        "board": {
          "heading": "Nonideal pressure can bias a single-point molar mass",
          "columns": [
            "Given / model",
            "Balance / result",
            "Condition / limit"
          ],
          "rows": [
            [
              "Mass1 g/L;true M100",
              "c=.010 mol/L",
              "Nondissociating solute"
            ],
            [
              "B=20 L/mol",
              "π/(RT)=.012 mol/L",
              "Supplied second-order model"
            ],
            [
              "Ideal interpretation",
              "Mapp=1/.012≈83.3",
              "Not proof of dissociation"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "At a supplied composition,xA=.4,γA=1.5,pA°=100 kPa;xB=.6,γB=1.2,pB°=50 kPa. Total pressure with ideal vapour?",
        "options": [
          "70 kPa",
          "96 kPa",
          "150 kPa",
          "60 kPa"
        ],
        "answer": 1,
        "explanation": "Partial pressures are60 and36 kPa;sum them to obtain96."
      },
      {
        "question": "Vapour mole fraction of A in that model?",
        "options": [
          ".400",
          ".600",
          ".625",
          ".960"
        ],
        "answer": 2,
        "explanation": "yA=pA/P=60/96=.625;liquid and vapour fractions are different."
      },
      {
        "question": "At one supplied composition,nA=2 mol,nB=1 mol,VbarA=17,VbarB=56 cm³/mol. Mixture volume?",
        "options": [
          "94 cm³",
          "73 cm³",
          "112 cm³",
          "90 cm³"
        ],
        "answer": 3,
        "explanation": "V=ΣniVbar_i=2×17+56=90 cm³ at the specified composition."
      },
      {
        "question": "If the unmixed pure-volume sum is94 cm³ while final mixture is90 cm³,what follows?",
        "options": [
          "ΔVmix=−4 cm³ without implying mass loss",
          "Four grams must disappear",
          "Four moles must react",
          "Partial molar volumes are constants for all compositions"
        ],
        "answer": 0,
        "explanation": "Volumes can contract on mixing while mass is conserved;local partial molar values describe the supplied composition."
      },
      {
        "question": "Mix100 mL .10 M CaCl2 and100 mL .20 M NaCl with complete dissociation and additive volumes. Final chloride concentration?",
        "options": [
          ".10 M",
          ".20 M",
          ".30 M",
          ".40 M"
        ],
        "answer": 1,
        "explanation": "There are.020 mol chloride from each salt solution:total.040 mol/.200 L=.20 M."
      },
      {
        "question": "For that mixture,ionic strength I=.5Σci zi² is?",
        "options": [
          ".35 M",
          ".15 M",
          ".25 M",
          "0 because the solution is electrically neutral"
        ],
        "answer": 2,
        "explanation": "Final concentrations are Ca.05,Na.10,Cl.20 M,so I=.5(4×.05+.10+.20)=.25 M."
      },
      {
        "question": "Supplied π/(RT)=c+B c²,c=.010 mol/L,B=20 L/mol. Find π/(RT).",
        "options": [
          ".010 mol/L",
          ".002 mol/L",
          ".030 mol/L",
          ".012 mol/L"
        ],
        "answer": 3,
        "explanation": ".010+20×.010²=.012 mol/L;the units of B make the correction a concentration."
      },
      {
        "question": "For mass concentration1 g/L and that measured π/(RT),what molar mass would an ideal single-point calculation infer?",
        "options": [
          "About83.3 g/mol",
          "100 g/mol exactly",
          "120 g/mol",
          "The solute must chemically dissociate"
        ],
        "answer": 0,
        "explanation": "Mapp=(1 g/L)/(.012 mol/L)≈83.3 g/mol. The supplied nonideal correction alone explains the bias."
      }
    ],
    "sources": [
      {
        "title": "Ellgen: activities and deviations from Raoult’s law",
        "url": "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Thermodynamics_and_Chemical_Equilibrium_%28Ellgen%29/16%3A_The_Chemical_Activity_of_the_Components_of_a_Solution/16.03%3A_Expressing_the_Activity_Coefficient_as_a_Deviation_from_Raoult%27s_Law"
      },
      {
        "title": "DeVoe: partial molar quantities",
        "url": "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/DeVoes_Thermodynamics_and_Chemistry/09%253A_Mixtures/9.02%253A_Partial_Molar_Quantities"
      },
      {
        "title": "Bucknell: ionic strength",
        "url": "https://eng.libretexts.org/Courses/Bucknell_University/CEEG_445%3A_Environmental_Engineering_Chemistry_%28Fall_2020%29/04%3A_Activity_and_Ionic_Strength/4.02%3A_Ionic_Strength"
      },
      {
        "title": "Gutow: nonideal osmotic virial treatment",
        "url": "https://chem.libretexts.org/Courses/University_of_Wisconsin_Oshkosh/Chem_370%253A_Physical_Chemistry_1_-_Thermodynamics_%28Gutow%29/01%253A_Thermodynamics/1.08%253A_Colligative_Properties"
      }
    ]
  }
} as const;
