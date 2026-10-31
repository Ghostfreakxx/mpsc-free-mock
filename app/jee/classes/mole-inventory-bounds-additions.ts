// Authored by scripts/expand-mole-inventory-bounds.mjs.
export const moleInventoryBoundsAdditions = {
  "chapters": [
    {
      "title": "A staged hydrate mass loss distinguishes waters lost from waters remaining",
      "formula": "Hypothetical S,M160 g/mol:10.00 g→8.56 g→6.40 g;initial S·5H2O;intermediate S·3H2O",
      "script": "A mass plateau during dehydration need not represent the anhydrous salt. Consider a supplied hypothetical hydrate of a salt whose anhydrous molar mass is one hundred sixty grams per mole. A ten gram sample first reaches a mass of eight point five six grams and finally six point four zero grams. Assume the final material is independently identified as anhydrous salt, only water is lost, no salt is lost and no other decomposition occurs. The salt amount is six point four zero divided by one hundred sixty, or zero point zero four zero zero mole. The total water lost from the initial sample is three point six zero grams, corresponding to zero point two zero zero mole. Dividing water amount by salt amount gives five waters per formula unit initially. The first mass loss is one point four four grams, or zero point zero eight zero zero mole of water, meaning two waters per salt unit were removed at that stage. The intermediate therefore retains three waters per formula unit. A two water loss does not mean the starting solid was a dihydrate. These mass data alone do not establish the structures or purity of every plateau; the hydrate assignments depend on the stated phase and loss assumptions.",
      "points": [
        "Initial10.00;intermediate8.56 g · Final anhydrous6.40 g · Only water lost;M(S)160",
        "n(S)=.0400 mol · Total water.200 mol · Initial hydrate ratio5",
        "First loss1.44 g=.0800 mol · Two waters lost;three remain · Intermediate ratio3 under model"
      ],
      "board": {
        "heading": "A partial mass loss is not the complete hydration number",
        "columns": [
          "Given / model",
          "Result / balance",
          "Condition / limit"
        ],
        "rows": [
          [
            "Initial10.00;intermediate8.56 g",
            "Final anhydrous6.40 g",
            "Only water lost;M(S)160"
          ],
          [
            "n(S)=.0400 mol",
            "Total water.200 mol",
            "Initial hydrate ratio5"
          ],
          [
            "First loss1.44 g=.0800 mol",
            "Two waters lost;three remain",
            "Intermediate ratio3 under model"
          ]
        ]
      }
    },
    {
      "title": "Consecutive reaction extents give the intermediate left rather than all ever formed",
      "formula": "A→B→C;initial1.00 mol A;ξ1=.80 mol,ξ2=.30 mol→A.20,B.50,C.30 mol",
      "script": "In consecutive reactions, an intermediate can be formed in one step and consumed in the next. Use a stipulated one to one sequence A to B followed by B to C, with no side reactions and one conserved molecular unit in every species. Start with one mole of A and no B or C. Suppose the first reaction extent is zero point eight zero mole and the second is zero point three zero mole. The first step consumes zero point eight zero mole of A and forms that amount of B. The second consumes zero point three zero mole of B and forms C. Final amounts are therefore zero point two zero mole A, zero point five zero mole B and zero point three zero mole C. Their sum is one mole in this particular one to one model. Conversion of A is eighty percent, but the final B yield relative to starting A is fifty percent. The final B selectivity relative to converted A is zero point five divided by zero point eight, or sixty-two point five percent. The second extent is an absolute molar amount, not a thirty percent yield factor to multiply blindly by the first extent. More complicated stoichiometries require their own coefficient balances.",
      "points": [
        "Initial1.00 mol A · ξ1=.80;ξ2=.30 mol · A→B→C;one-to-one steps",
        "Final A.20;B.50;C.30 mol · B formed.80;B consumed.30 · No side reactions",
        "A conversion80%;B yield50% · B selectivity62.5% · Selectivity basis:converted A"
      ],
      "board": {
        "heading": "Subtract the intermediate consumed from the intermediate formed",
        "columns": [
          "Given / model",
          "Result / balance",
          "Condition / limit"
        ],
        "rows": [
          [
            "Initial1.00 mol A",
            "ξ1=.80;ξ2=.30 mol",
            "A→B→C;one-to-one steps"
          ],
          [
            "Final A.20;B.50;C.30 mol",
            "B formed.80;B consumed.30",
            "No side reactions"
          ],
          [
            "A conversion80%;B yield50%",
            "B selectivity62.5%",
            "Selectivity basis:converted A"
          ]
        ]
      }
    },
    {
      "title": "Measurement bounds can make a limiting-reactant identity certain or uncertain",
      "formula": "A+2B→P;A∈[.98,1.02],B∈[2.09,2.11] mol→A always limiting;P∈[.98,1.02] mol",
      "script": "A limiting reactant calculation can depend on whether the measured ranges overlap after division by stoichiometric coefficients. Consider the model reaction one A plus two B giving one P, driven to complete consumption of the limiting reactant with no side reactions. In a supplied bounded dataset, A lies between zero point nine eight and one point zero two mole, while B lies between two point zero nine and two point one one mole. The available reaction extent from B is its amount divided by two, between one point zero four five and one point zero five five mole. Even the largest allowed A amount is below the smallest B based extent, so A is limiting for every permitted combination. The possible P amount spans zero point nine eight to one point zero two mole. Now change the ranges to A between zero point nine five and one point zero five mole, and B between one point nine five and two point zero five mole. The scaled ranges overlap, so either reactant can be limiting for allowed values. These are stipulated hard bounds, not standard deviations or confidence intervals. Keeping more calculator digits does not resolve a physical ambiguity that the measurements leave open.",
      "points": [
        "A.98–1.02;B2.09–2.11 mol · B/2=1.045–1.055 mol · A+2B→P;complete limiting use",
        "max A1.02<min B/2 1.045 · A always limiting · P.98–1.02 mol",
        "A.95–1.05;B1.95–2.05 mol · Scaled ranges overlap · Limiting identity not fixed"
      ],
      "board": {
        "heading": "Compare whole coefficient-scaled ranges before naming the limiting reactant",
        "columns": [
          "Given / model",
          "Result / balance",
          "Condition / limit"
        ],
        "rows": [
          [
            "A.98–1.02;B2.09–2.11 mol",
            "B/2=1.045–1.055 mol",
            "A+2B→P;complete limiting use"
          ],
          [
            "max A1.02<min B/2 1.045",
            "A always limiting",
            "P.98–1.02 mol"
          ],
          [
            "A.95–1.05;B1.95–2.05 mol",
            "Scaled ranges overlap",
            "Limiting identity not fixed"
          ]
        ]
      }
    },
    {
      "title": "Hydrated crystals remove solvent water as well as dissolved solute",
      "formula": "Hypothetical S,M100;S·2H2O,M136;13.6 g crystals=10.0 g S+3.6 g water",
      "script": "A hydrated crystal crop contains water, so its total mass is not the recovered mass of anhydrous solute. Start with a supplied hundred gram solution containing twenty grams of a hypothetical dissolved substance S and eighty grams of water. Its anhydrous molar mass is one hundred grams per mole, and the stipulated pure crystal phase is S with two waters per formula unit, with molar mass one hundred thirty-six. Suppose thirteen point six grams of this pure hydrate separates, with no evaporation, entrained mother liquor or other loss. The crystals contain zero point one zero zero mole of S, so ten grams of anhydrous solute and three point six grams of water leave the liquid together. The remaining mother liquor contains ten grams of S and seventy-six point four grams of water, for total mass eighty-six point four grams. Its solute mass fraction is ten divided by eighty-six point four, about eleven point five seven percent. The recovered solute fraction is ten divided by the original twenty, or fifty percent. Using the full crystal mass over initial solute mass would incorrectly count crystallization water as recovered solute. These balances use a supplied final crystal crop; they do not independently predict solubility or crystallization equilibrium.",
      "points": [
        "Initial20 g S+80 g water · Pure hydrate crop13.6 g · M(S)100;M(hydrate)136",
        "Crop10 g S+3.6 g water · Mother liquor10 g S+76.4 g water · No evaporation or entrainment",
        "Mother liquor mass86.4 g · S mass fraction11.57% · Anhydrous solute recovery50%"
      ],
      "board": {
        "heading": "Separate solute and water in the crystal crop and mother liquor",
        "columns": [
          "Given / model",
          "Result / balance",
          "Condition / limit"
        ],
        "rows": [
          [
            "Initial20 g S+80 g water",
            "Pure hydrate crop13.6 g",
            "M(S)100;M(hydrate)136"
          ],
          [
            "Crop10 g S+3.6 g water",
            "Mother liquor10 g S+76.4 g water",
            "No evaporation or entrainment"
          ],
          [
            "Mother liquor mass86.4 g",
            "S mass fraction11.57%",
            "Anhydrous solute recovery50%"
          ]
        ]
      }
    }
  ],
  "quiz": [
    {
      "question": "For the supplied10.00→8.56→6.40 g hydrate dataset with anhydrous S molar mass160, the initial water-to-salt mole ratio is:",
      "options": [
        "2",
        "5",
        "3",
        "8"
      ],
      "answer": 1,
      "explanation": "Anhydrous salt amount is6.40/160=.0400 mol; total water loss3.60/18=.200 mol gives ratio5."
    },
    {
      "question": "In that model, the first1.44 g loss removes two waters per salt unit. The intermediate retains how many waters per unit?",
      "options": [
        "Two",
        "Five",
        "Three",
        "Zero"
      ],
      "answer": 2,
      "explanation": "The initial ratio is five, and the first stage removes two, leaving three waters per formula unit under the stated assumptions."
    },
    {
      "question": "For initial1.00 mol A in A→B→C with extents.80 and.30 mol, final B is:",
      "options": [
        ".80 mol",
        ".30 mol",
        ".24 mol",
        ".50 mol"
      ],
      "answer": 3,
      "explanation": "B is formed by the first extent and consumed by the second: .80−.30=.50 mol remains, rather than all .80 ever formed."
    },
    {
      "question": "For that sequence, final B selectivity relative to converted A is:",
      "options": [
        "62.5%",
        "50%",
        "80%",
        "30%"
      ],
      "answer": 0,
      "explanation": "Final B is.50 mol and converted A is.80 mol; their ratio.50/.80=.625 uses the stated selectivity denominator."
    },
    {
      "question": "For A+2B→P with A bounded.98–1.02 mol and B2.09–2.11 mol, the limiting identity is:",
      "options": [
        "Always B",
        "Always A",
        "Neither can be consumed",
        "Impossible for any allowed values"
      ],
      "answer": 1,
      "explanation": "Even maximum A1.02 mol is below minimum B/2=1.045 mol, so A is limiting throughout the supplied bounds."
    },
    {
      "question": "If A is instead.95–1.05 mol and B1.95–2.05 mol, what can be concluded?",
      "options": [
        "Always A",
        "Always B",
        "Either can limit for allowed values",
        "The bounds prove exact stoichiometry"
      ],
      "answer": 2,
      "explanation": "A and B/2 ranges overlap. Examples within the bounds can make either A or B limiting, so a single identity is not guaranteed."
    },
    {
      "question": "A13.6 g crop of stipulated S·2H2O, with M(S)100 and M(hydrate)136, contains what anhydrous S mass?",
      "options": [
        "13.6 g",
        "3.6 g",
        "20.0 g",
        "10.0 g"
      ],
      "answer": 3,
      "explanation": "The crop contains13.6/136=.100 mol hydrate and therefore.100×100=10.0 g S; the other3.6 g is crystal water."
    },
    {
      "question": "After that crop forms from20 g S+80 g water without evaporation or entrainment, remaining water mass is:",
      "options": [
        "76.4 g",
        "80.0 g",
        "66.4 g",
        "70.0 g"
      ],
      "answer": 0,
      "explanation": "The hydrate removes3.6 g water as well as10.0 g solute, leaving80.0−3.6=76.4 g water in the mother liquor."
    }
  ],
  "sources": [
    {
      "title": "University of Arkansas Little Rock: hydrate mole ratios",
      "url": "https://chem.libretexts.org/Courses/University_of_Arkansas_Little_Rock/Chem_1402%3A_General_Chemistry_1_%28Belford%29/Text/03%3A_Atoms_Molecules_and_Ions/3.12%3A_Hydrates"
    },
    {
      "title": "OpenStax: reaction yields and limiting reactants",
      "url": "https://openstax.org/books/chemistry-atoms-first-2e/pages/7-4-reaction-yields"
    },
    {
      "title": "OpenStax: measurement uncertainty",
      "url": "https://openstax.org/books/chemistry-2e/pages/1-5-measurement-uncertainty-accuracy-and-precision"
    },
    {
      "title": "University of Colorado Boulder LearnChemE: crystallization component balances",
      "url": "https://learncheme.github.io/demos/MassBalancesInEvaporativeCrystallizationQuiz/dist/"
    }
  ]
} as const;
