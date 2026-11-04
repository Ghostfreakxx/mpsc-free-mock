// Authored by scripts/create-neet-cell-division.mjs.
export const divisionBoards = [
  {
    "title": "The cell cycle coordinates growth and division",
    "kind": "cycle",
    "lines": [
      "G1 → S → G2 → M",
      "Interphase is active, not simply resting",
      "G0: outside the proliferating cycle",
      "Stage durations vary with cell type"
    ]
  },
  {
    "title": "Chromosomes chromatids and DNA amount need separate counts",
    "kind": "counts",
    "lines": [
      "Chromosome count follows centromeres",
      "One replicated chromosome: 2 sister chromatids",
      "n describes chromosome sets",
      "C describes DNA amount, not chromosome count"
    ]
  },
  {
    "title": "S phase doubles DNA without changing ploidy",
    "kind": "replication",
    "lines": [
      "Diploid G1: 2n, 2C",
      "After S and in G2: 2n, 4C",
      "Example: 4 chromosomes → 4 replicated chromosomes",
      "Chromatids in that example: 4 → 8"
    ]
  },
  {
    "title": "Prophase prepares chromosomes and spindle attachment",
    "kind": "prophase",
    "lines": [
      "Chromatin condenses into visible chromosomes",
      "Each replicated chromosome has 2 chromatids",
      "Spindle forms; nuclear envelope breaks down",
      "Prometaphase may be grouped with late prophase"
    ]
  },
  {
    "title": "Metaphase aligns replicated chromosomes",
    "kind": "metaphase",
    "lines": [
      "Replicated chromosomes align at the plate",
      "Sister kinetochores face opposite poles",
      "A metaphase plate is an alignment plane",
      "Homologues do not form meiotic bivalents here"
    ]
  },
  {
    "title": "Anaphase separates sisters and changes the whole-cell count",
    "kind": "anaphase",
    "lines": [
      "Sister chromatids separate in mitotic anaphase",
      "Each separated chromatid is now a chromosome",
      "One 2n=4 cell: 8 daughter chromosomes transiently",
      "Each pole receives 4, not 8"
    ]
  },
  {
    "title": "Telophase and cytokinesis complete different tasks",
    "kind": "cytokinesis",
    "lines": [
      "Telophase reforms daughter nuclear organization",
      "Animal cytokinesis: cleavage furrow",
      "Plant cytokinesis: cell plate expands outward",
      "Nuclear division can occur without cytokinesis"
    ]
  },
  {
    "title": "Mitosis preserves chromosome complement in its products",
    "kind": "mitosis-result",
    "lines": [
      "Normal mitosis preserves the nuclear complement",
      "Diploid can divide to diploid; haploid to haploid",
      "Growth, repair and some asexual reproduction",
      "No obligatory homologous synapsis or reduction"
    ]
  },
  {
    "title": "Meiosis uses one replication and two divisions",
    "kind": "meiosis-overview",
    "lines": [
      "Premeiotic S → meiosis I → meiosis II",
      "Meiosis I separates homologues",
      "Meiosis II separates sister chromatids",
      "No intervening S phase between I and II"
    ]
  },
  {
    "title": "Prophase I has five characteristic substages",
    "kind": "prophase-one",
    "lines": [
      "Leptotene → zygotene → pachytene",
      "Then diplotene → diakinesis",
      "Synapsis: zygotene; crossing over: pachytene",
      "Chiasmata become clear in diplotene"
    ]
  },
  {
    "title": "Meiosis I aligns pairs and separates homologues",
    "kind": "anaphase-one",
    "lines": [
      "Metaphase I: bivalents align",
      "Anaphase I: homologues move apart",
      "Sister chromatids remain associated",
      "Reduction concerns sets per product nucleus"
    ]
  },
  {
    "title": "Interkinesis does not include another DNA replication",
    "kind": "interkinesis",
    "lines": [
      "After meiosis I: n chromosomes, 2C DNA",
      "Each chromosome still has 2 chromatids",
      "Interkinesis may separate the two divisions",
      "No S phase restoring 4C before meiosis II"
    ]
  },
  {
    "title": "Meiosis II separates sisters without a preceding S phase",
    "kind": "meiosis-two",
    "lines": [
      "Metaphase II: replicated chromosomes align",
      "Anaphase II: sister chromatids separate",
      "Products: n chromosomes and 1C DNA each",
      "Four products in the ideal complete sequence"
    ]
  },
  {
    "title": "Recombination and assortment generate different kinds of variation",
    "kind": "variation",
    "lines": [
      "Crossing over exchanges nonsister segments",
      "Independent assortment distributes homologues",
      "Without crossing over: 2ⁿ assortment possibilities",
      "Four products need not always all be different"
    ]
  },
  {
    "title": "Compare chromosome and DNA values through a complete sequence",
    "kind": "comparison",
    "lines": [
      "Diploid G1: 2n, 2C; after S: 2n, 4C",
      "Mitosis daughter: 2n, 2C",
      "After meiosis I: n, 2C",
      "After meiosis II: n, 1C"
    ]
  },
  {
    "title": "Solve counts by identifying what separates and where",
    "kind": "integration",
    "lines": [
      "One nucleus, one cell, one pole or all products?",
      "Replication changes DNA before segregation",
      "Anaphase I: homologues; anaphase II: sisters",
      "Cell counts and genetic possibilities differ"
    ]
  }
] as const;
