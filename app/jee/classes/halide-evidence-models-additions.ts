// Authored by scripts/expand-halide-evidence-models.mjs.
export const halideEvidenceModelsAdditions = {
  "chapters": [
    {
      "title": "An ester usually accepts two Grignard carbon groups before workup",
      "formula": "CH3COOCH2CH3+2 CH3MgBr→alkoxide→(CH3)3COH after aqueous workup;ethoxy fragment→ethanol",
      "script": "An ester and a ketone do not use the same Grignard equivalent count in the usual reaction model. Consider ethyl ethanoate reacting with methylmagnesium bromide, followed by a separate aqueous workup. The first methyl addition to the ester is followed by loss of its ethoxy group from the acyl intermediate, producing a ketone in the standard mechanism. That ketone can accept another methyl group before workup, so two methyl groups from the Grignard reagent reach the final alcohol carbon. The named alcohol is two methylpropan two ol, also called tert butyl alcohol. The original acyl methyl group is the third methyl attached to that carbon. The ethoxy fragment gives ethanol on workup; it has not been grafted onto the tertiary alcohol skeleton. Count four carbons in the starting ester and two added methyl carbons, giving six carbons distributed between a four carbon tertiary alcohol and two carbon ethanol. This is a reaction ledger, not a promise of quantitative isolated yield. Supplying only one equivalent does not generally provide a clean way to stop an ordinary ester at the ketone, because the newly formed ketone can react further.",
      "points": [
        "Ethyl ethanoate C4 · Two methyl additions C2 · Two equivalents in ideal ledger",
        "Alcohol after workup · 2-Methylpropan-2-ol C4 · Ethoxy fragment→ethanol C2",
        "Total organic carbon · 4+2=4+2=6 · One equivalent not clean ketone stop"
      ],
      "board": {
        "heading": "Separate the ester acyl fragment from its leaving alkoxy fragment",
        "columns": [
          "Given / model",
          "Result / ledger",
          "Condition / limit"
        ],
        "rows": [
          [
            "Ethyl ethanoate C4",
            "Two methyl additions C2",
            "Two equivalents in ideal ledger"
          ],
          [
            "Alcohol after workup",
            "2-Methylpropan-2-ol C4",
            "Ethoxy fragment→ethanol C2"
          ],
          [
            "Total organic carbon",
            "4+2=4+2=6",
            "One equivalent not clean ketone stop"
          ]
        ]
      }
    },
    {
      "title": "A nitrile Grignard adduct gives its ketone during hydrolysis",
      "formula": "CH3CN+CH3CH2MgBr→imine salt;aqueous hydrolysis→CH3COCH2CH3;2+2=4 carbons",
      "script": "A nitrile provides a useful contrast to the ester Grignard sequence. In a selected supporting transformation, ethanenitrile reacts with ethylmagnesium bromide before aqueous workup. The ethyl carbon group bonds to the nitrile carbon, and the immediate product is represented as a magnesium imine salt. Hydrolysis of that intermediate during workup gives butan two one. The carbonyl carbon in this ketone is the carbon that originally belonged to the nitrile group. The two carbons of ethanenitrile and the two of the ethyl group therefore give four carbons in the ketone. Nitrogen leaves the organic carbon skeleton into aqueous nitrogen containing species during hydrolysis; it is not retained as a new alcohol nitrogen substituent. Under this standard sequence, the neutral ketone is released when water is added, and water also destroys remaining active Grignard reagent. One must not automatically draw a second ordinary carbonyl addition during the earlier dry stage as though free ketone were already present. This distinction explains why a nitrile can furnish a ketone after workup while an ordinary ester with sufficient reagent commonly proceeds to a tertiary alcohol. Other reactive groups and competing pathways would need separate analysis.",
      "points": [
        "Ethane nitrile C2+ethyl C2 · Imine magnesium salt first · Supporting reaction map",
        "Aqueous hydrolysis · Butan-2-one C4 · Nitrile carbon becomes C=O",
        "Ketone released at workup · No automatic second addition · Water destroys active Grignard"
      ],
      "board": {
        "heading": "Identify when the carbonyl product actually becomes available",
        "columns": [
          "Given / model",
          "Result / ledger",
          "Condition / limit"
        ],
        "rows": [
          [
            "Ethane nitrile C2+ethyl C2",
            "Imine magnesium salt first",
            "Supporting reaction map"
          ],
          [
            "Aqueous hydrolysis",
            "Butan-2-one C4",
            "Nitrile carbon becomes C=O"
          ],
          [
            "Ketone released at workup",
            "No automatic second addition",
            "Water destroys active Grignard"
          ]
        ]
      }
    },
    {
      "title": "A deuterium rate comparison is mechanism evidence with controlled conditions",
      "formula": "Supplied matched kH=.120 L mol−1 s−1;kD=.020 L mol−1 s−1;kH/kD=6.0",
      "script": "Replacing a hydrogen by deuterium can help test which bond changes influence a reaction rate. Use a supplied comparison of two otherwise matched elimination substrates, one with a removable beta hydrogen and the other with deuterium at that same site. At identical temperature, solvent and concentration conventions, let their bimolecular rate constants be zero point one two zero and zero point zero two zero litres per mole per second. The ratio of the hydrogen value to the deuterium value is six. At equal substrate and base concentrations, their initial rate ratio is also six. Such a normal primary isotope effect supports an important role for breaking that labelled carbon hydrogen bond in the rate controlling reaction pathway and is consistent with an E two interpretation in the stated comparison. The ratio alone does not establish every detail of a mechanism. Changes in substrate geometry, competing reactions or different experimental conditions can complicate the inference. If the deuterated substrate concentration is doubled while the base concentration stays fixed, its initial rate doubles under the supplied bimolecular law, and the hydrogen to deuterium rate ratio becomes three. Compare rate constants and measured rates only after stating what concentrations were held equal.",
      "points": [
        "Matched kH.120;kD.020 · kH/kD=6.0 · Same units,T,medium",
        "Equal substrate and base · Initial rate ratio6.0 · Supports labelled bond involvement",
        "Double only D-substrate · Rate ratio becomes3.0 · Stipulated bimolecular laws"
      ],
      "board": {
        "heading": "Control concentrations before interpreting an isotope rate ratio",
        "columns": [
          "Given / model",
          "Result / ledger",
          "Condition / limit"
        ],
        "rows": [
          [
            "Matched kH.120;kD.020",
            "kH/kD=6.0",
            "Same units,T,medium"
          ],
          [
            "Equal substrate and base",
            "Initial rate ratio6.0",
            "Supports labelled bond involvement"
          ],
          [
            "Double only D-substrate",
            "Rate ratio becomes3.0",
            "Stipulated bimolecular laws"
          ]
        ]
      }
    },
    {
      "title": "A product enantiomer ratio does not uniquely measure mechanism fractions",
      "formula": "70 inverted:30 retained→40% ee;only stipulated perfect-inversion+exact-racemization model gives40:60 channel fractions",
      "script": "A stereochemical product ratio contains quantitative information without uniquely identifying its mechanism. Start with an enantiopure substrate and suppose a specified substitution gives only a pair of enantiomeric products, seventy percent having the inverted spatial arrangement and thirty percent the retained arrangement under a consistent atom mapping. The magnitude of enantiomeric excess is forty percent, obtained from the difference between the two fractions. Now add a separate hypothetical model: one product channel gives perfect inversion, while a second gives exactly equal amounts of the two enantiomers. In that model, the retained thirty percent must be half of the second channel, so the second channel accounts for sixty percent and the perfect inversion channel forty percent. These are fractions of the counted product population under the stated assumptions, not an automatic experimental measurement of S N one and S N two contributions. Real ion pairs can make an ionization pathway depart from exact racemization. Product rearrangement, changing priority order or unequal recovery can also invalidate the simple two channel interpretation. Use spatial mapping rather than assuming that inversion always changes an R label to S. Report the measured ratio separately from any model dependent mechanism inference.",
      "points": [
        "Product70 inverted:30 retained · Enantiomeric excess40% · Enantiomer pair;enantiopure start",
        "Assume perfect inversion+racemic · 40% first;60% second channel · Conditional product-fraction model",
        "Ion pairs;mapping;recovery · Can invalidate inference · Not unique SN1/SN2 proof"
      ],
      "board": {
        "heading": "Separate measured stereochemical composition from a pathway model",
        "columns": [
          "Given / model",
          "Result / ledger",
          "Condition / limit"
        ],
        "rows": [
          [
            "Product70 inverted:30 retained",
            "Enantiomeric excess40%",
            "Enantiomer pair;enantiopure start"
          ],
          [
            "Assume perfect inversion+racemic",
            "40% first;60% second channel",
            "Conditional product-fraction model"
          ],
          [
            "Ion pairs;mapping;recovery",
            "Can invalidate inference",
            "Not unique SN1/SN2 proof"
          ]
        ]
      }
    }
  ],
  "quiz": [
    {
      "question": "Ethyl ethanoate reacts with sufficient methylmagnesium bromide before aqueous workup. The usual alcohol product is:",
      "options": [
        "Butan-2-ol",
        "2-Methylpropan-2-ol",
        "Ethanol only",
        "Propanone as a guaranteed isolated product"
      ],
      "answer": 1,
      "explanation": "Two methyl groups enter the acyl carbon before workup, giving a tertiary alcohol with three methyl groups attached to the hydroxyl-bearing carbon."
    },
    {
      "question": "In that ideal ester ledger, the number of Grignard carbon-group additions per ester is:",
      "options": [
        "Zero",
        "One",
        "Two",
        "Four"
      ],
      "answer": 2,
      "explanation": "The ester first gives a ketone through addition and elimination; the ketone then accepts another carbon group before aqueous workup."
    },
    {
      "question": "Ethane nitrile plus ethylmagnesium bromide followed by hydrolysis gives the selected ketone:",
      "options": [
        "Propanone",
        "Pentan-2-one",
        "Butan-1-ol",
        "Butan-2-one"
      ],
      "answer": 3,
      "explanation": "The two-carbon nitrile and two-carbon ethyl group combine into a four-carbon ketone; the nitrile carbon becomes the carbonyl carbon."
    },
    {
      "question": "Why is a second ordinary ketone addition not automatically drawn in the dry nitrile sequence?",
      "options": [
        "The free ketone is released during aqueous hydrolysis",
        "The nitrile carbon is discarded",
        "Grignard reagents never add to ketones",
        "The ethyl group loses both carbons"
      ],
      "answer": 0,
      "explanation": "Before workup the intermediate is an imine salt; hydrolysis releases ketone while water consumes active Grignard reagent."
    },
    {
      "question": "Supplied matched rate constants kH=.120 and kD=.020 in the same units give kH/kD:",
      "options": [
        ".167",
        "6.0",
        "3.0",
        ".100"
      ],
      "answer": 1,
      "explanation": "Divide the matched rate constants .120/.020=6.0; equal substrate and base concentrations then give the same initial-rate ratio."
    },
    {
      "question": "With the same base concentration, doubling only the D-substrate concentration changes the H-rate/D-rate ratio from6.0 to:",
      "options": [
        "12.0",
        "6.0",
        "3.0",
        "1.0"
      ],
      "answer": 2,
      "explanation": "Under both supplied bimolecular laws, doubling the deuterated substrate doubles its rate, so the ratio becomes6/2=3."
    },
    {
      "question": "A product enantiomer pair is70% spatially inverted and30% retained. The magnitude of enantiomeric excess is:",
      "options": [
        "70%",
        "30%",
        "60%",
        "40%"
      ],
      "answer": 3,
      "explanation": "For the stipulated pair, ee magnitude is the difference70−30=40 percentage points; mechanism fractions need additional assumptions."
    },
    {
      "question": "Only in a model with one perfectly inverting and one exactly racemizing channel, that70:30 product ratio implies:",
      "options": [
        "40% inversion channel;60% racemizing channel",
        "70% inversion channel;30% racemizing channel",
        "60% inversion channel;40% racemizing channel",
        "A unique experimental proof of SN2 only"
      ],
      "answer": 0,
      "explanation": "The retained30% is half of the racemizing contribution, so that channel gives60% of counted products and the inversion channel40%."
    }
  ],
  "sources": [
    {
      "title": "OpenStax: ester Grignard reactions",
      "url": "https://openstax.org/books/organic-chemistry/pages/21-6-chemistry-of-esters"
    },
    {
      "title": "OpenStax: nitrile reactions and hydrolysis of Grignard adducts",
      "url": "https://openstax.org/books/organic-chemistry/pages/20-7-chemistry-of-nitriles"
    },
    {
      "title": "OpenStax: E2 and the deuterium isotope effect",
      "url": "https://openstax.org/books/organic-chemistry/pages/11-8-the-e2-reaction-and-the-deuterium-isotope-effect"
    },
    {
      "title": "OpenStax: ion pairs and incomplete SN1 racemization",
      "url": "https://openstax.org/books/organic-chemistry/pages/11-4-the-sn1-reaction"
    },
    {
      "title": "IUPAC Gold Book: enantiomeric excess",
      "url": "https://goldbook.iupac.org/terms/view/E02070"
    }
  ]
} as const;
