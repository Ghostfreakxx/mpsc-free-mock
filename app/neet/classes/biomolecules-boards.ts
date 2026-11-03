// Authored by scripts/create-neet-biomolecules.mjs.
export const biomoleculeBoards = [
  {
    "title": "Chemical composition and tissue fractions",
    "kind": "fractions",
    "lines": [
      "Small metabolites: acid-soluble pool",
      "Macromolecules: acid-insoluble fraction",
      "Lipids are not repeating-unit polymers",
      "Secondary metabolites have real functions"
    ]
  },
  {
    "title": "Polymer bonds and metabolic transformations",
    "kind": "bonds",
    "lines": [
      "Condensation forms links; hydrolysis breaks",
      "Protein: peptide; sugar: glycosidic",
      "Nucleic acid: phosphodiester backbone",
      "Anabolism builds; catabolism breaks down"
    ]
  },
  {
    "title": "Monosaccharides differ in carbon number and carbonyl type",
    "kind": "sugars",
    "lines": [
      "Glucose: aldohexose",
      "Fructose: ketohexose",
      "Ribose: pentose; deoxyribose differs",
      "A shared formula need not mean identity"
    ]
  },
  {
    "title": "Disaccharides and polysaccharides depend on linkage",
    "kind": "carbohydrates",
    "lines": [
      "Sucrose gives glucose + fructose",
      "Maltose gives 2 glucose",
      "Starch and glycogen: glucose stores",
      "Cellulose: structural beta-linked glucose"
    ]
  },
  {
    "title": "Lipids include fats and membrane components",
    "kind": "lipid",
    "lines": [
      "Triacylglycerol: glycerol + 3 fatty acids",
      "Three ester links in the simple fat ledger",
      "Saturated: no C=C; unsaturated: C=C",
      "Phospholipids have polar and nonpolar regions"
    ]
  },
  {
    "title": "Amino acid side chains and charge states",
    "kind": "amino",
    "lines": [
      "Amino acid: amino, carboxyl and R group",
      "R groups distinguish amino acids",
      "Zwitterion: positive and negative groups",
      "Charge depends on pH and ionizable groups"
    ]
  },
  {
    "title": "Peptide bonds give proteins a directional backbone",
    "kind": "peptide",
    "lines": [
      "Peptide link: –C(=O)–NH–",
      "Linear n-residue chain: n−1 peptide bonds",
      "Read sequence N terminus to C terminus",
      "Side chains differ from the backbone"
    ]
  },
  {
    "title": "Protein structure and denaturation are different levels",
    "kind": "protein",
    "lines": [
      "Primary: amino acid sequence",
      "Secondary: alpha helix or beta sheet",
      "Tertiary: one chain folded in space",
      "Quaternary: multiple polypeptide subunits"
    ]
  },
  {
    "title": "Nucleotides build DNA and RNA backbones",
    "kind": "nucleotide",
    "lines": [
      "Nucleoside = base + sugar",
      "Nucleotide = nucleoside + phosphate",
      "DNA: deoxyribose; RNA: ribose",
      "Phosphodiester links run along a strand"
    ]
  },
  {
    "title": "Enzymes lower barriers without changing equilibrium",
    "kind": "energy",
    "lines": [
      "Catalyst lowers activation energy",
      "Reactant/product energy gap unchanged",
      "Equilibrium position is unchanged",
      "Most enzymes are proteins; ribozymes are RNA"
    ]
  },
  {
    "title": "Substrate binding and saturation explain the rate curve",
    "kind": "saturation",
    "lines": [
      "E + S ⇌ ES → E + P",
      "Active-site chemistry enables catalysis",
      "Initial rate rises then approaches a limit",
      "Vmax depends on available active enzyme"
    ]
  },
  {
    "title": "Temperature pH and concentration affect activity",
    "kind": "conditions",
    "lines": [
      "Low temperature can slow catalysis",
      "High temperature can disrupt native structure",
      "pH changes ionization and interactions",
      "Optimum conditions depend on the enzyme"
    ]
  },
  {
    "title": "Classify enzymes by the reaction catalysed",
    "kind": "classes",
    "lines": [
      "Oxidoreductase: redox; transferase: transfer",
      "Hydrolase: hydrolysis; lyase: other cleavage",
      "Isomerase: rearrange; ligase: coupled joining",
      "Modern EC also recognizes translocases"
    ]
  },
  {
    "title": "Cofactors complete the functional enzyme system",
    "kind": "cofactors",
    "lines": [
      "Apoenzyme: protein component",
      "Cofactor: required nonprotein helper",
      "Coenzyme: organic; metal ion: inorganic",
      "Holoenzyme: complete functional combination"
    ]
  },
  {
    "title": "Interpret inhibitors within a defined model",
    "kind": "inhibition",
    "lines": [
      "Competitive model: substrate-site competition",
      "More substrate can overcome competition",
      "Vmax same; apparent Km rises in this model",
      "Other inhibition patterns need separate analysis"
    ]
  },
  {
    "title": "Check an answer through structure and bond counts",
    "kind": "integration",
    "lines": [
      "10 residues in one linear chain: 9 peptide links",
      "Two 10-nucleotide strands: 18 backbone links",
      "One triacylglycerol: 3 ester links",
      "Connectivity first; then count and classify"
    ]
  }
] as const;
