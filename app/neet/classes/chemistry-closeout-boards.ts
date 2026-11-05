// Authored by scripts/create-neet-review-classes.mjs.
export const boards = [
  {
    "title": "Ethyne preparation and the existing elimination route",
    "lines": [
      "CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂",
      "The calcium-carbide route produces ethyne",
      "Double dehydrohalogenation supplies another alkyne route",
      "Stoichiometric equations are not operating instructions"
    ],
    "flow": [
      "Calcium carbide + water",
      "Ethyne + calcium hydroxide",
      "Alternative: suitable dihalide → two eliminations",
      "Keep carbon and hydrogen inventories balanced"
    ]
  },
  {
    "title": "Alkyne polymerisation: chains and cyclic combination",
    "lines": [
      "n HC≡CH → (−CH=CH−)ₙ is the ideal chain comparison",
      "Each ethyne unit retains two C and two H atoms",
      "3 C₂H₂ → C₆H₆ is the cyclic trimerisation comparison",
      "Chain growth and formation of one ring are different"
    ],
    "flow": [
      "Ethyne monomer: C₂H₂",
      "Linear comparison: conjugated polyacetylene chain",
      "Cyclic comparison: three ethyne units → benzene",
      "Compare connectivity as well as total atom counts"
    ]
  },
  {
    "title": "Freon-12: use, persistence and the ozone mechanism",
    "lines": [
      "The textbook Freon-12 example is CCl₂F₂",
      "CFCs had refrigerant and propellant uses",
      "Stratospheric UV can release reactive chlorine",
      "Ozone depletion differs from greenhouse warming"
    ],
    "flow": [
      "Historical refrigerant / propellant applications",
      "Atmospheric persistence enables transport",
      "UV cleavage → reactive chlorine chemistry",
      "Catalytic ozone loss; not every refrigerant has this mechanism"
    ]
  },
  {
    "title": "Ethane: connect Newman and sawhorse drawings",
    "lines": [
      "Newman views along the C−C bond",
      "Sawhorse shows that bond obliquely",
      "Staggered ethane has a 60° nearest H−C−C−H dihedral",
      "Eclipsed ethane has a 0° nearest dihedral"
    ],
    "flow": [
      "Choose front and rear carbons consistently",
      "Newman: front point, rear circle",
      "Sawhorse: draw both carbon centres and their bond",
      "Rotation changes conformation, not connectivity"
    ]
  },
  {
    "title": "Transition-element occurrence: mineral, ore and metal",
    "lines": [
      "Many transition elements occur in mineral compounds",
      "An ore is a resource usable under the stated economic context",
      "Chromite: FeCr₂O₄; pyrolusite: MnO₂",
      "Occurrence does not uniquely determine a metal’s properties"
    ],
    "flow": [
      "Natural occurrence in compounds or occasionally native form",
      "Example oxide minerals and their formulae",
      "Distinguish a mineral name from a pure element",
      "Connect occurrence with existing oxidant chapters"
    ]
  },
  {
    "title": "Oxygen compounds: connect properties with familiar uses",
    "lines": [
      "Alcohols, ethers and ketones can serve as suitable solvents",
      "Methanol and ethanol have different biological hazards",
      "Phenol/formaldehyde participate in resin chemistry",
      "Acetic acid has chemical and food-related contexts"
    ],
    "flow": [
      "Identify the functional group",
      "Relate polarity, bonding and volatility to a selected use",
      "Distinguish a product’s composition and concentration",
      "A familiar use does not establish universal interchangeability"
    ]
  },
  {
    "title": "Phenol sulphonation: which atom receives the new group?",
    "lines": [
      "Phenolic OH activates ortho/para ring positions",
      "Sulphonation introduces a ring −SO₃H group",
      "The familiar temperature comparison changes major isomer",
      "Ring substitution differs from forming an O-sulfate ester"
    ],
    "flow": [
      "Phenol: retain the ring −OH group",
      "Electrophilic substitution adds ring −SO₃H",
      "Cooler textbook comparison: ortho emphasis",
      "Warmer comparison: para emphasis; conditions matter"
    ]
  },
  {
    "title": "Alkyne halogen and hydrogen-halide additions",
    "lines": [
      "One or two equivalents can give different products",
      "Propyne + HBr: usual ionic major product is 2-bromopropene",
      "A second HBr gives the geminal dibromide comparison",
      "Halogen addition differs from hydrogen-halide addition"
    ],
    "flow": [
      "Propyne: CH₃−C≡CH",
      "One HBr → CH₃−C(Br)=CH₂",
      "Second HBr → CH₃−CBr₂−CH₃",
      "Track equivalents and functional class"
    ]
  },
  {
    "title": "Homologous series: common pattern, changing chain size",
    "lines": [
      "A homologous series shares a structural/functional pattern",
      "Successive ordinary members differ by CH₂",
      "General formulae require the stated structural class",
      "Similar reaction types do not mean identical physical properties"
    ],
    "flow": [
      "Methanol: CH₄O",
      "Ethanol: C₂H₆O",
      "Propanol member: C₃H₈O",
      "A CH₂ step changes relative formula mass by about 14"
    ]
  },
  {
    "title": "Combining gas volumes: connect the laws with stoichiometry",
    "lines": [
      "Compare gas volumes at the same temperature and pressure",
      "Simple whole-number volume ratios reflect the stated reaction",
      "2 H₂(g) + O₂(g) → 2 H₂O(g)",
      "A condensed product is not another gas volume in that ratio"
    ],
    "flow": [
      "Balanced gas equation: coefficients 2:1:2",
      "Ideal gas amounts share one molar-volume basis",
      "4 L H₂ + 2 L O₂ → 4 L water vapor in the model",
      "Specify phase and avoid mixing temperature/pressure conditions"
    ]
  }
] as const;
