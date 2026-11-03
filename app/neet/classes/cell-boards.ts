// Authored by scripts/create-neet-cell.mjs.
export const cellBoards = [
  {
    "title": "Cell theory identifies the basic unit of life",
    "kind": "cell",
    "lines": [
      "Cells: structural and functional units",
      "Schleiden + Schwann: cell theory",
      "Virchow: cells arise from existing cells",
      "Organelles cooperate inside one cell"
    ]
  },
  {
    "title": "Prokaryotic and eukaryotic organization differ",
    "kind": "bacterium",
    "lines": [
      "Prokaryote: nucleoid, no nuclear envelope",
      "Eukaryote: nuclear compartment",
      "Both: membrane, DNA and ribosomes",
      "No nucleus alone is not a full diagnosis"
    ]
  },
  {
    "title": "The prokaryotic envelope has distinct layers",
    "kind": "envelope",
    "lines": [
      "Outside → glycocalyx → wall → membrane",
      "Capsule or slime layer: glycocalyx forms",
      "Flagellum: movement; fimbriae: adhesion",
      "Some bacteria lack a cell wall"
    ]
  },
  {
    "title": "A fluid membrane controls selective exchange",
    "kind": "membrane",
    "lines": [
      "Hydrophilic heads face water",
      "Hydrophobic tails face inward",
      "Proteins: channels, carriers, receptors",
      "Passive down-gradient; active uses energy"
    ]
  },
  {
    "title": "Cell walls support cells without replacing membranes",
    "kind": "wall",
    "lines": [
      "Plant wall: cellulose-rich framework",
      "Middle lamella: pectate-rich cement",
      "Plasmodesmata connect plant cytoplasm",
      "Fungal wall differs from bacterial wall"
    ]
  },
  {
    "title": "Rough and smooth ER support different tasks",
    "kind": "er",
    "lines": [
      "Rough ER: attached ribosomes",
      "Secreted and membrane proteins",
      "Smooth ER: lipid-related functions",
      "ER lumen differs from cytosol"
    ]
  },
  {
    "title": "Golgi lysosomes and vacuoles have distinct roles",
    "kind": "golgi",
    "lines": [
      "Golgi: receive, modify, sort, dispatch",
      "Lysosome: hydrolytic digestion",
      "Vacuole: storage and water balance",
      "Tonoplast = vacuolar membrane"
    ]
  },
  {
    "title": "Mitochondrial compartments support energy conversion",
    "kind": "mitochondrion",
    "lines": [
      "Outer membrane surrounds organelle",
      "Inner membrane forms cristae",
      "Matrix contains enzymes, DNA, ribosomes",
      "Plant cells also have mitochondria"
    ]
  },
  {
    "title": "Plastids differ in pigments and internal structure",
    "kind": "chloroplast",
    "lines": [
      "Chloroplast: thylakoids and stroma",
      "Grana are stacks of thylakoids",
      "Chromoplast: carotenoid-rich colours",
      "Leucoplast: storage specializations"
    ]
  },
  {
    "title": "Ribosomes and microbodies are different structures",
    "kind": "ribosome",
    "lines": [
      "Ribosome: rRNA + protein; no membrane",
      "70S: 50S + 30S subunits",
      "80S: 60S + 40S subunits",
      "Peroxisome: oxidative enzymes, one membrane"
    ]
  },
  {
    "title": "The cytoskeleton organizes support and movement",
    "kind": "cytoskeleton",
    "lines": [
      "Actin → microfilaments",
      "Tubulin → microtubules",
      "Intermediate filaments → reinforcement",
      "Tracks and motors organize movement"
    ]
  },
  {
    "title": "Axonemes and centrioles use different microtubule patterns",
    "kind": "axoneme",
    "lines": [
      "Motile axoneme: 9 doublets + central pair",
      "Centriole: 9 peripheral triplets",
      "Central pair = 2 individual microtubules",
      "Bacterial flagellum has different construction"
    ]
  },
  {
    "title": "The nucleus separates chromatin from cytoplasm",
    "kind": "nucleus",
    "lines": [
      "Nuclear envelope: two membranes, pores",
      "Chromatin: DNA with associated proteins",
      "Nucleolus: rRNA and ribosome assembly",
      "Pores regulate traffic across the envelope"
    ]
  },
  {
    "title": "Centromeres distinguish chromosome shapes and counts",
    "kind": "chromosome",
    "lines": [
      "Metacentric: near middle; equal arms",
      "Submetacentric: displaced; unequal arms",
      "Acrocentric: near end; telocentric: at end",
      "One replicated chromosome has 2 chromatids"
    ]
  },
  {
    "title": "Integrate structure with a secretory protein route",
    "kind": "route",
    "lines": [
      "Ribosome/RER → transport vesicle",
      "Golgi processing → outgoing vesicle",
      "Fusion releases cargo outside cell",
      "Structure + destination resolve the answer"
    ]
  }
] as const;
