// Authored by scripts/expand-equilibrium-inventory-models.mjs.
export const equilibriumInventoryModelsAdditions = {
  "chapters": [
    {
      "title": "Activity coefficients change a concentration saturation product",
      "formula": "MX(s)⇌M+ +X−;Ksp=aM aX;ai=γi[ i ]/c°;γM=γX=.50 gives normalized concentration product4Ksp",
      "script": "An equilibrium constant describes activities, while many introductory calculations replace activity with concentration divided by a standard concentration. The distinction matters in a supplied nonideal example. Consider a hypothetical solid that releases one singly charged cation and one singly charged anion. Its thermodynamic solubility product is one times ten to the minus ten. Take the standard concentration as one mole per litre. Suppose both ion activity coefficients are supplied as zero point five zero in a fixed background medium. The product of the coefficients is zero point two five. At saturation the product of the two normalized free ion concentrations must therefore be four times ten to the minus ten. With equal free ion concentrations and no other reactions, each concentration is two times ten to the minus five mole per litre. The ideal coefficient calculation would instead give one times ten to the minus five. This is a comparison within the stated model, not a universal rule that adding any salt doubles solubility. The background must maintain the supplied coefficients approximately constant. Complex formation, common ions and changing coefficients require additional balances. The thermodynamic constant has not changed just because its concentration representation changes.",
      "points": [
        "Ksp1×10−10;γ+γ−=.25 · ([M+]/c°)([X−]/c°)=4×10−10 · Fixed supplied coefficients",
        "Equal free ion concentrations · Each2×10−5 mol/L · No competing reactions",
        "Ideal coefficients both1 · Each1×10−5 mol/L · Same thermodynamic Ksp"
      ],
      "board": {
        "heading": "Separate the activity constant from its concentration representation",
        "columns": [
          "Given / model",
          "Result / balance",
          "Condition / limit"
        ],
        "rows": [
          [
            "Ksp1×10−10;γ+γ−=.25",
            "([M+]/c°)([X−]/c°)=4×10−10",
            "Fixed supplied coefficients"
          ],
          [
            "Equal free ion concentrations",
            "Each2×10−5 mol/L",
            "No competing reactions"
          ],
          [
            "Ideal coefficients both1",
            "Each1×10−5 mol/L",
            "Same thermodynamic Ksp"
          ]
        ]
      }
    },
    {
      "title": "Ionic strength weights each ion concentration by squared charge",
      "formula": "Ic=½Σci zi²;0.010 M CaCl2 gives Ic=.030 M;not total ion concentration",
      "script": "A supporting measure of the ionic environment counts more than the total number of dissolved ions. Concentration based ionic strength is one half of the sum of each ion concentration multiplied by the square of its charge number. Consider a hypothetical fully dissociated zero point zero one zero molar calcium chloride solution, ignoring ion pairing. Calcium concentration is zero point zero one zero molar and chloride concentration is zero point zero two zero molar. Calcium has charge number plus two, whose square is four; chloride has charge number minus one, whose square is one. The weighted sum is zero point zero four zero plus zero point zero two zero molar. Dividing by two gives ionic strength zero point zero three zero molar. For zero point zero one zero molar sodium chloride, the same procedure gives zero point zero one zero molar. A neutral dissolved molecule contributes zero directly because its charge number is zero. This does not mean it can never affect solution properties. Ionic strength alone also does not specify an exact activity coefficient without an additional model and conditions. Check electroneutrality and include every charged species before applying the squared charge weighting.",
      "points": [
        ".010 M Ca2+;.020 M Cl− · Ic=½(.010×4+.020)=.030 M · Complete dissociation assumed",
        ".010 M Na+;.010 M Cl− · Ic=.010 M · Same formula-unit molarity",
        "Neutral solute z=0 · Zero direct contribution · Not an activity-coefficient law"
      ],
      "board": {
        "heading": "Square the charge number before summing the ion inventory",
        "columns": [
          "Given / model",
          "Result / balance",
          "Condition / limit"
        ],
        "rows": [
          [
            ".010 M Ca2+;.020 M Cl−",
            "Ic=½(.010×4+.020)=.030 M",
            "Complete dissociation assumed"
          ],
          [
            ".010 M Na+;.010 M Cl−",
            "Ic=.010 M",
            "Same formula-unit molarity"
          ],
          [
            "Neutral solute z=0",
            "Zero direct contribution",
            "Not an activity-coefficient law"
          ]
        ]
      }
    },
    {
      "title": "Beyond buffer exhaustion use excess strong acid before weak-acid corrections",
      "formula": "Initial10 mmol HA+10 mmol A−;add12 mmol HCl;final V=.200 L;excess H+=.010 M gives pH≈2.00",
      "script": "A buffer equation cannot use a negative amount of its conjugate base. Start with a supplied mixture containing ten millimoles of a weak acid and ten millimoles of its conjugate base. Add twelve millimoles of strong hydrochloric acid and specify the final volume as zero point two zero zero litre. The first ten millimoles of added hydrogen ions consume the ten millimoles of conjugate base, forming additional weak acid. Two millimoles of strong acid remain in excess, and the weak acid inventory becomes twenty millimoles. The excess strong acid concentration is zero point zero one zero molar. Its leading pH estimate is two point zero zero under ideal dilute solution assumptions. For a supplied weak acid constant of one times ten to the minus five and formal weak acid concentration zero point one zero zero molar, the extra dissociation is small compared with this strong acid background. Writing the extra dissociation as x gives the acid constant from zero point zero one zero plus x, multiplied by x, divided by zero point one zero zero minus x. The positive solution changes pH only slightly. Do not insert a negative base amount into a logarithm or claim that the initial buffer holds its original pH after its reactive partner has been exhausted.",
      "points": [
        "10 mmol HA;10 mmol A− · 12 mmol HCl consumes all A− · 20 mmol HA;2 mmol H+ left",
        "Final volume.200 L · Excess H+=.010 M · Leading pH≈2.00",
        "Ka1×10−5;CHA=.100 M · Small extra dissociation x · No negative buffer ratio"
      ],
      "board": {
        "heading": "Finish the stoichiometric reaction before choosing a pH equation",
        "columns": [
          "Given / model",
          "Result / balance",
          "Condition / limit"
        ],
        "rows": [
          [
            "10 mmol HA;10 mmol A−",
            "12 mmol HCl consumes all A−",
            "20 mmol HA;2 mmol H+ left"
          ],
          [
            "Final volume.200 L",
            "Excess H+=.010 M",
            "Leading pH≈2.00"
          ],
          [
            "Ka1×10−5;CHA=.100 M",
            "Small extra dissociation x",
            "No negative buffer ratio"
          ]
        ]
      }
    },
    {
      "title": "A finite solid supply can leave an unsaturated final solution",
      "formula": "Ideal MX:Ksp1×10−8;V1.00 L;only5.0×10−5 mol supplied;all dissolves,Q=2.5×10−9<Ksp",
      "script": "A solubility product fixes the saturation condition when the solid phase can coexist with the solution. It does not create missing material. Consider a hypothetical one to one salt in one litre of initially pure water, with an ideal concentration solubility product of one times ten to the minus eight under the stated one molar standard convention. Saturation would require each free ion concentration to be one times ten to the minus four molar, or one times ten to the minus four mole of dissolved salt in this volume. Suppose only five times ten to the minus five mole of solid was supplied. Even complete dissolution gives each ion concentration five times ten to the minus five molar. Their normalized product is two point five times ten to the minus nine, below the saturation constant. All of the supplied salt can dissolve, leaving an unsaturated solution and no solid reservoir. If instead two times ten to the minus four mole was supplied under the same assumptions, one times ten to the minus four mole dissolves and the same amount remains solid at saturation. These results assume equilibrium is reached and exclude complexation, hydrolysis and other precipitates. Always compare the available inventory with the amount required by the saturation calculation.",
      "points": [
        "Ksp1×10−8;V1.00 L · Saturation requires1×10−4 mol · Ideal1:1 salt",
        "Supply5×10−5 mol · All dissolves;Q2.5×10−9 · Unsaturated;no solid left",
        "Supply2×10−4 mol · Dissolved1×10−4 mol · Solid remaining1×10−4 mol"
      ],
      "board": {
        "heading": "Check the available solid before imposing saturation equality",
        "columns": [
          "Given / model",
          "Result / balance",
          "Condition / limit"
        ],
        "rows": [
          [
            "Ksp1×10−8;V1.00 L",
            "Saturation requires1×10−4 mol",
            "Ideal1:1 salt"
          ],
          [
            "Supply5×10−5 mol",
            "All dissolves;Q2.5×10−9",
            "Unsaturated;no solid left"
          ],
          [
            "Supply2×10−4 mol",
            "Dissolved1×10−4 mol",
            "Solid remaining1×10−4 mol"
          ]
        ]
      }
    }
  ],
  "quiz": [
    {
      "question": "A supplied Ksp is1×10−10 and both free-ion activity coefficients are.50. The product of normalized free-ion concentrations at saturation is:",
      "options": [
        "2.5×10−11",
        "4×10−10",
        "1×10−10",
        "2×10−10"
      ],
      "answer": 1,
      "explanation": "Divide Ksp by the coefficient product .50×.50=.25, using the same standard concentration for both activities."
    },
    {
      "question": "In that fixed-coefficient1:1 salt model with equal free-ion concentrations and c°1 M, each ion concentration is:",
      "options": [
        "5×10−6 M",
        "1×10−5 M",
        "2×10−5 M",
        "4×10−10 M"
      ],
      "answer": 2,
      "explanation": "Take the square root of4×10−10 and restore the1 M standard concentration; this assumes no competing reactions."
    },
    {
      "question": "For completely dissociated.010 M CaCl2 with no other ions, concentration-based ionic strength is:",
      "options": [
        ".010 M",
        ".020 M",
        ".060 M",
        ".030 M"
      ],
      "answer": 3,
      "explanation": "Ic=½[(.010)(2²)+(.020)(1²)]=.030 M; squared charge weights the calcium contribution."
    },
    {
      "question": "A neutral solute contributes what directly to Ic=½Σci zi²?",
      "options": [
        "Zero because z=0",
        "Its full concentration",
        "Twice its concentration",
        "A negative contribution"
      ],
      "answer": 0,
      "explanation": "The direct ionic-strength term contains z²=0. Neutral solutes may still affect other solution properties."
    },
    {
      "question": "A buffer initially has10 mmol HA and10 mmol A−. After adding12 mmol strong HCl, the leading stoichiometric inventory is:",
      "options": [
        "10 mmol HA;12 mmol H+",
        "20 mmol HA;2 mmol excess H+",
        "22 mmol HA;no H+",
        "Negative2 mmol A−"
      ],
      "answer": 1,
      "explanation": "Ten millimoles of H+ consume all ten millimoles of A−; two remain, while HA rises from ten to twenty millimoles."
    },
    {
      "question": "With final volume.200 L, that2 mmol excess H+ gives the leading ideal pH estimate:",
      "options": [
        "1.00",
        "3.00",
        "2.00",
        "4.00"
      ],
      "answer": 2,
      "explanation": "Excess strong acid concentration is.002/.200=.010 M; −log10(.010)=2 before the small weak-acid correction."
    },
    {
      "question": "An ideal1:1 salt has Ksp1×10−8 in1.00 L water but only5×10−5 mol is supplied. After complete dissolution, Q is:",
      "options": [
        "1×10−8",
        "5×10−5",
        "2×10−4",
        "2.5×10−9"
      ],
      "answer": 3,
      "explanation": "Each free ion is5×10−5 M, giving the normalized product2.5×10−9, below saturation; inventory limits dissolution."
    },
    {
      "question": "Under that same ideal model, supplying2×10−4 mol leaves how much solid at equilibrium?",
      "options": [
        "1×10−4 mol",
        "Zero",
        "2×10−4 mol",
        "5×10−5 mol"
      ],
      "answer": 0,
      "explanation": "Saturation requires1×10−4 mol dissolved in1.00 L, leaving1×10−4 mol of the original solid inventory."
    }
  ],
  "sources": [
    {
      "title": "IUPAC Gold Book: ionic strength",
      "url": "https://goldbook.iupac.org/terms/view/I03180"
    },
    {
      "title": "OpenStax: equilibrium constants and activities",
      "url": "https://openstax.org/books/chemistry-2e/pages/13-2-equilibrium-constants"
    },
    {
      "title": "OpenStax: buffer reactions and capacity",
      "url": "https://openstax.org/books/chemistry/pages/14-6-buffers"
    },
    {
      "title": "University of Calgary: finite solid inventory in equilibrium calculations",
      "url": "https://chem-textbook.ucalgary.ca/version2/chapter-13-main/equilibrium-calculations/equilibrium-calculations-summary/"
    }
  ]
} as const;
