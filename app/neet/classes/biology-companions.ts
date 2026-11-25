export const biologyCompanions = [
  {
    id: "cell-cycle-division",
    unit: 3,
    title: "Mitosis and meiosis: chromosome counting",
    reference: {
      title: "OpenStax Biology 2e: The Cell Cycle",
      url: "https://openstax.org/books/biology-2e/pages/10-2-the-cell-cycle"
    },
    lab: {
      title: "Compare cell structures before division",
      href: "/laboratory#plant-animal-cells"
    },
    alt: "Cell counting diagram: the diploid cell is 2n, 2C in G1 and 2n, 4C after S phase. Each daughter is n, 2C after meiosis I and n, 1C after meiosis II.",
    sections: [
      {
        title: "Track three quantities",
        paragraphs: [
          "Ploidy counts chromosome sets. C is DNA content relative to an unreplicated haploid set. A chromatid is one DNA-containing copy of a replicated chromosome. Count joined sisters as one chromosome until they separate."
        ]
      },
      {
        title: "Separate the two divisions",
        paragraphs: [
          "In mitosis the sister chromatids separate and daughter nuclei retain the parent ploidy. In meiosis I homologous chromosomes separate, reducing ploidy. In meiosis II sister chromatids separate without another S phase."
        ]
      },
      {
        title: "State what you are counting",
        paragraphs: [
          "After meiosis I each daughter cell is haploid but each chromosome still has two chromatids. During anaphase, counts for the undivided cell can differ from counts at one pole. In mitotic anaphase, a cell that started with eight chromosomes has sixteen single-chromatid chromosomes before cytokinesis, eight headed to each pole. Total nuclear DNA in the undivided cell is still 4C. Use the question’s boundary."
        ]
      },
      {
        title: "Quick revision",
        paragraphs: [
          "G1 → S: DNA doubles; chromosome number and ploidy stay the same.",
          "Meiosis I separates homologs; meiosis II separates sisters."
        ]
      }
    ],
    examples: [
      {
        question: "A cell with 2n = 8 has completed S phase. Give chromosome, chromatid and DNA counts after replication and after each meiotic division.",
        steps: [
          "After S: 8 chromosomes, each with two chromatids, so 16 chromatids and 4C DNA.",
          "After meiosis I each daughter receives one from each homologous pair: 4 chromosomes, 8 chromatids and 2C DNA.",
          "After meiosis II each product has 4 single-chromatid chromosomes and 1C DNA."
        ],
        answer: "Per cell: (8, 16, 4C) → (4, 8, 2C) → (4, 4, 1C)."
      }
    ],
    quiz: [
      {
        question: "A diploid cell with 2n = 12 has just completed meiosis I. How many chromatids are in each daughter cell?",
        options: [
          "3",
          "6",
          "12",
          "24"
        ],
        answer: 2,
        explanation: "Each daughter has six replicated chromosomes, with two sister chromatids each."
      },
      {
        question: "Which event makes the first meiotic division reductional?",
        options: [
          "Replication of each chromosome",
          "Separation of homologous chromosomes",
          "Separation of sister chromatids",
          "Formation of the spindle"
        ],
        answer: 1,
        explanation: "Each daughter receives one chromosome of each homologous pair. Sister chromatids remain together at this division."
      },
      {
        question: "When is DNA replicated in the normal meiotic sequence?",
        options: [
          "Only before meiosis I",
          "Only before meiosis II",
          "Before both divisions",
          "During telophase II"
        ],
        answer: 0,
        explanation: "There is one premeiotic S phase. A second round of DNA replication does not precede meiosis II."
      },
      {
        question: "A diploid cell with 2n = 6 is in mitotic anaphase before cytokinesis. How many chromosomes are moving toward each pole, and what is total DNA content in the whole cell?",
        options: [
          "3 and 2C",
          "6 and 2C",
          "6 and 4C",
          "12 and 4C"
        ],
        answer: 2,
        explanation: "Six separated chromosomes move toward each pole. There are twelve in the undivided cell, which still contains 4C DNA."
      }
    ]
  },
  {
    id: "genetics-evolution",
    unit: 7,
    title: "Mendelian test crosses and conditional probability",
    reference: {
      title: "OpenStax Biology 2e: Laws of Inheritance",
      url: "https://openstax.org/books/biology-2e/pages/12-3-laws-of-inheritance"
    },
    lab: {
      title: "Try the pea-seed inheritance experiment",
      href: "/laboratory#pea-seed-inheritance"
    },
    alt: "Test-cross diagram: a heterozygous Yy parent produces Y or y gametes, a yy parent produces y. Offspring are equally likely to be Yy, yellow, or yy, green.",
    sections: [
      {
        title: "Distinguish genotype from phenotype",
        paragraphs: [
          "A genotype is an allele combination; a phenotype is an observable trait. Under complete dominance, YY and Yy both give yellow seeds and yy gives green seeds. The dominant phenotype alone does not identify the genotype."
        ]
      },
      {
        title: "Use a test cross",
        paragraphs: [
          "Cross the unknown yellow parent with yy. All offspring are predicted yellow for YY × yy. For Yy × yy, each offspring independently has probability 1/2 of being green under the simple model. A small all-yellow sample does not prove YY. This model assumes a single gene, complete dominance, equal segregation, random fertilization and comparable survival. Linkage in two-gene problems or unequal survival can change predicted ratios."
        ]
      },
      {
        title: "Choose the correct denominator",
        paragraphs: [
          "Yy × Yy predicts YY, Yy and yy in proportions 1/4, 1/2 and 1/4. If an offspring is known to be yellow, exclude yy from the denominator. P(Yy | yellow) is (1/2)/(3/4) = 2/3."
        ]
      },
      {
        title: "Quick revision",
        paragraphs: [
          "A test cross uses a homozygous recessive partner.",
          "When a phenotype is already given, divide by the probability of that phenotype."
        ]
      }
    ],
    examples: [
      {
        question: "A known Yy plant is crossed with yy. What is the probability that three offspring are all yellow?",
        steps: [
          "One offspring has probability 1/2 of inheriting Y.",
          "Under the stated independent-offspring model, multiply the three probabilities."
        ],
        answer: "1/8. An all-yellow sample of three is possible even with a heterozygous parent."
      }
    ],
    quiz: [
      {
        question: "In Yy × Yy, what fraction of the yellow offspring are expected to be heterozygous?",
        options: [
          "1/4",
          "1/2",
          "2/3",
          "3/4"
        ],
        answer: 2,
        explanation: "Two of the three equally weighted yellow Punnett cells contain Yy."
      },
      {
        question: "A yellow parent crossed with yy gives a green offspring. Which genotype can the yellow parent have under this model?",
        options: [
          "YY only",
          "Yy only",
          "yy only",
          "Both YY and Yy"
        ],
        answer: 1,
        explanation: "The green offspring is yy and received one recessive allele from each parent. The yellow parent must also carry Y."
      },
      {
        question: "What is P(exactly one green offspring in two) for Yy × yy, assuming independent offspring?",
        options: [
          "1/4",
          "1/2",
          "3/4",
          "1"
        ],
        answer: 1,
        explanation: "One green can occur first or second. Each order has probability 1/4, so the total is 1/2."
      },
      {
        question: "A heterozygous pea is test-crossed. Given that its first offspring was yellow, what is the probability that the second is green under the independent-offspring model?",
        options: [
          "1/4",
          "1/2",
          "2/3",
          "3/4"
        ],
        answer: 1,
        explanation: "Each offspring independently receives Y or y from the known heterozygote with equal probability. The first outcome does not change the second."
      }
    ]
  },
  {
    id: "biomolecules",
    unit: 3,
    title: "Enzyme activity and substrate saturation",
    reference: {
      title: "OpenStax Biology 2e: Enzymes",
      url: "https://openstax.org/books/biology-2e/pages/6-5-enzymes"
    },
    lab: null,
    alt: "Initial rate rises toward a plateau as substrate concentration increases, with active enzyme amount, pH and temperature fixed.",
    sections: [
      {
        title: "What an enzyme changes",
        paragraphs: [
          "A substrate is a reactant on which an enzyme acts. It binds at the active site. An enzyme accelerates the reaction by lowering the activation barrier and is regenerated. It speeds the approach to equilibrium without shifting the equilibrium position."
        ]
      },
      {
        title: "Read the axes",
        paragraphs: [
          "Initial rate is plotted against substrate concentration. With active enzyme amount held fixed, increasing substrate initially raises the rate. At high substrate concentration, active sites are occupied much of the time and extra substrate has little effect. The schematic represents simple saturation behaviour."
        ]
      },
      {
        title: "Control the comparison",
        paragraphs: [
          "Temperature, pH and active enzyme amount can each affect rate. Keep them fixed before attributing a difference to substrate concentration. A drop in measured rate alone cannot establish that an enzyme has been permanently denatured."
        ]
      },
      {
        title: "Quick revision",
        paragraphs: [
          "Catalysts lower the activation barrier without changing equilibrium.",
          "The plateau is consistent with saturation under fixed assay conditions.",
          "Vary one factor at a time."
        ]
      }
    ],
    examples: [
      {
        question: "With active enzyme amount held fixed, doubling substrate changes initial rate from 2.0 to 3.8 at low substrate, and from 9.8 to 9.9 at high substrate. Which result supports saturation?",
        steps: [
          "Compare the gains: 1.8 and 0.1 rate units respectively.",
          "The smaller gain at high substrate is consistent with most active sites being occupied much of the time."
        ],
        answer: "The high-substrate comparison supports saturation. Two points do not establish an exact limiting rate."
      }
    ],
    quiz: [
      {
        question: "What does an enzyme lower?",
        options: [
          "Equilibrium constant",
          "Activation barrier",
          "Product free energy only",
          "Equilibrium product concentration"
        ],
        answer: 1,
        explanation: "An enzyme offers a faster pathway. It does not alter the free-energy difference between reactants and products."
      },
      {
        question: "Why does extra substrate have little effect near the plateau?",
        options: [
          "All enzyme is destroyed",
          "Most sites are already occupied much of the time",
          "The reaction is uncatalysed",
          "Substrate and enzyme are equally concentrated"
        ],
        answer: 1,
        explanation: "Under simple saturation, existing active sites already spend much of their time occupied."
      },
      {
        question: "How can you isolate the effect of substrate concentration?",
        options: [
          "Vary pH and substrate",
          "Vary enzyme amount and substrate",
          "Hold enzyme amount, pH and temperature fixed",
          "Compare different enzymes at different temperatures"
        ],
        answer: 2,
        explanation: "Holding other factors constant allows the initial-rate difference to be attributed to substrate concentration."
      },
      {
        question: "Two curves plateau at different initial rates. The higher curve used twice as much active enzyme at the same pH and temperature. Which interpretation is consistent with simple saturation?",
        options: [
          "The higher curve has more available catalytic sites",
          "The enzyme changed equilibrium",
          "The lower curve proves permanent denaturation",
          "Substrate never binds at saturation"
        ],
        answer: 0,
        explanation: "More active enzyme provides more catalytic sites and can raise the limiting initial rate. The observation does not imply an equilibrium change."
      }
    ]
  },
  {
    id: "plant-physiology",
    unit: 4,
    title: "Photosynthesis: limiting factors and net gas exchange",
    reference: {
      title: "NCERT Biology: Photosynthesis in Higher Plants",
      url: "https://ncert.nic.in/textbook/pdf/kebo111.pdf"
    },
    lab: null,
    alt: "Schematic of net carbon dioxide uptake versus light intensity. Uptake is negative in darkness, crosses zero at the light compensation point, then levels off under the fixed comparison conditions.",
    sections: [
      {
        title: "Separate net exchange from carbon fixation",
        paragraphs: [
          "A leaf exchanges carbon dioxide through stomata. In the light it fixes carbon and also releases carbon dioxide through respiratory processes. Net uptake is the amount taken up minus the amount released. At the light compensation point, net exchange is zero even though these processes continue. For example, four units of gross uptake and four units of total carbon dioxide release give zero net uptake. The compensation point can shift as the light response or respiratory losses change."
        ]
      },
      {
        title: "Identify what limits the rate",
        paragraphs: [
          "Increasing light may raise net uptake at low light. A plateau means additional light has little effect under those conditions. It does not alone identify the limiting factor. Compare results while varying carbon dioxide, temperature or another factor one at a time."
        ]
      },
      {
        title: "Interpret the evidence",
        paragraphs: [
          "A starch test indicates starch accumulation in the tested tissue. It does not directly measure an instantaneous photosynthetic rate. Compare similar leaves with matched starting conditions and vary only the factor under investigation."
        ]
      },
      {
        title: "Quick revision",
        paragraphs: [
          "Net uptake is zero at the light compensation point.",
          "A light-response plateau alone does not identify the limiting factor.",
          "A starch test is evidence of accumulation over time."
        ]
      }
    ],
    examples: [
      {
        question: "At low light, increasing carbon dioxide has no measurable effect. At high light it raises net uptake from 6 to 10 units. What can you infer?",
        steps: [
          "Compare leaves at the same light level with only carbon dioxide changed.",
          "The high-light increase shows carbon dioxide supply constrained uptake under those high-light conditions."
        ],
        answer: "The low-light result alone does not prove that carbon dioxide can never limit that leaf."
      }
    ],
    quiz: [
      {
        question: "What happens at the light compensation point?",
        options: [
          "Photosynthesis stops",
          "Respiration stops",
          "Net carbon dioxide exchange is zero",
          "Stomata must close"
        ],
        answer: 2,
        explanation: "Carbon dioxide uptake and release balance. Zero net exchange does not imply that either process stops."
      },
      {
        question: "What can a single light-response plateau establish?",
        options: [
          "Only that extra light has little effect in that comparison",
          "Carbon dioxide is always limiting",
          "The leaf has stopped respiring",
          "Heat has irreversibly killed the leaf"
        ],
        answer: 0,
        explanation: "Other factors or the capacity of the photosynthetic system may limit the response. An additional controlled comparison is needed."
      },
      {
        question: "Which comparison isolates light intensity most directly?",
        options: [
          "Vary light and temperature",
          "Vary light with carbon dioxide and temperature matched",
          "Vary light and leaf age",
          "Compare unmatched plants in different chambers"
        ],
        answer: 1,
        explanation: "Matching the other factors makes light intensity the variable under comparison."
      }
    ]
  },
  {
    id: "human-physiology",
    unit: 5,
    title: "Nephron transport: filtration, reabsorption and secretion",
    reference: {
      title: "OpenStax Biology 2e: The Kidneys and Osmoregulatory Organs",
      url: "https://openstax.org/books/biology-2e/pages/41-2-the-kidneys-and-osmoregulatory-organs"
    },
    lab: null,
    alt: "Filtration moves solute from blood to Bowman’s space. Reabsorption moves solute from tubular fluid toward blood. Secretion moves solute from blood toward tubular fluid. Excretion leaves in urine.",
    sections: [
      {
        title: "Follow the direction of transport",
        paragraphs: [
          "During glomerular filtration, water and many small solutes pass from glomerular capillaries into Bowman’s space. Blood cells and most large plasma proteins remain in the circulation under normal conditions."
        ]
      },
      {
        title: "Track a solute along the tubule",
        paragraphs: [
          "Reabsorption transfers material from tubular fluid back toward the blood. Secretion transfers material in the opposite direction, from blood or cells into tubular fluid. Filtrate composition changes as it moves through the nephron."
        ]
      },
      {
        title: "Keep amount and concentration separate",
        paragraphs: [
          "For a substance unchanged by the kidney, the excreted amount over a given interval equals the filtered amount minus the reabsorbed amount plus the secreted amount. All terms must use the same units and interval. Concentration also depends on urine volume."
        ]
      },
      {
        title: "Quick revision",
        paragraphs: [
          "Filtration: glomerular blood to Bowman’s space.",
          "Reabsorption: tubule toward blood. Secretion: toward the tubule.",
          "Excreted = filtered − reabsorbed + secreted."
        ]
      }
    ],
    examples: [
      {
        question: "Over one hour, 100 mg of a model solute is filtered, 93 mg is reabsorbed and 2 mg is secreted. No solute is produced or broken down. How much is excreted?",
        steps: [
          "Start with 100 mg in the filtrate.",
          "Subtract the 93 mg returned toward blood. Add the 2 mg transferred into the tubule."
        ],
        answer: "9 mg is excreted over the hour. Urine concentration cannot be calculated without its volume."
      }
    ],
    quiz: [
      {
        question: "Which process transfers a substance from tubular fluid toward the blood?",
        options: [
          "Filtration",
          "Tubular reabsorption",
          "Tubular secretion",
          "Excretion"
        ],
        answer: 1,
        explanation: "Reabsorption returns material from the tubule toward circulation."
      },
      {
        question: "A substance is filtered at 15 mg/min, reabsorbed at 6 mg/min and secreted at 4 mg/min. What is its excretion rate?",
        options: [
          "5 mg/min",
          "9 mg/min",
          "13 mg/min",
          "25 mg/min"
        ],
        answer: 2,
        explanation: "Apply the mass balance with matched units: 15 − 6 + 4 = 13 mg/min."
      },
      {
        question: "If 10 mg is excreted per minute and urine flow doubles while that excretion rate stays fixed, what happens to urine concentration?",
        options: [
          "It doubles",
          "It halves",
          "It stays fixed",
          "It becomes zero"
        ],
        answer: 1,
        explanation: "Concentration equals mass excretion rate divided by urine flow. Doubling the denominator halves the concentration."
      }
    ]
  },
  {
    id: "reproduction",
    unit: 6,
    title: "Double fertilization and seed tissue ploidy",
    reference: {
      title: "OpenStax Biology 2e: Angiosperms",
      url: "https://openstax.org/books/biology-2e/pages/26-3-angiosperms"
    },
    lab: null,
    alt: "Two panels show a sperm plus egg making a diploid zygote, and the other sperm plus two polar nuclei making a triploid primary endosperm nucleus.",
    sections: [
      {
        title: "Follow the two sperm cells",
        paragraphs: [
          "In the typical diploid angiosperm model, one haploid sperm fuses with the haploid egg to form the diploid zygote. The other sperm fuses with the central cell’s two haploid polar nuclei, or with their combined nucleus, forming the triploid primary endosperm nucleus."
        ]
      },
      {
        title: "Follow each tissue’s origin",
        paragraphs: [
          "The embryo develops from the zygote. The endosperm develops from the fertilized central cell. The seed coat develops from maternal integuments, which remain diploid in this model. Ploidy reflects nuclear contributions and tissue origin."
        ]
      },
      {
        title: "Quick revision",
        paragraphs: [
          "Syngamy forms the zygote. Triple fusion forms the primary endosperm nucleus.",
          "The typical diploid model has a 2n embryo, 3n primary endosperm nucleus and 2n maternal seed coat."
        ]
      }
    ],
    examples: [
      {
        question: "In a typical diploid plant with 2n = 18, compare the zygote, primary endosperm nucleus and seed coat.",
        steps: [
          "Each sperm and each haploid female nucleus contributes nine chromosomes. Add two sets for the zygote and three for the primary endosperm nucleus. The seed coat retains maternal ploidy."
        ],
        answer: "18, 27 and 18 chromosomes per nucleus respectively."
      }
    ],
    quiz: [
      {
        question: "What directly becomes the embryo?",
        options: [
          "Zygote",
          "Primary endosperm nucleus",
          "Integument",
          "Pollen tube"
        ],
        answer: 0,
        explanation: "The zygote develops into the embryo; the other fusion initiates endosperm development."
      },
      {
        question: "Why is triple fusion called triple?",
        options: [
          "Three sperm arrive",
          "Three haploid nuclear contributions combine",
          "Three eggs are fertilized",
          "Three zygotes form"
        ],
        answer: 1,
        explanation: "One sperm contributes one set and the two polar nuclei contribute one set each in the typical model."
      },
      {
        question: "If n = 7, what is the chromosome number in a typical primary endosperm nucleus?",
        options: [
          "7",
          "14",
          "21",
          "28"
        ],
        answer: 2,
        explanation: "The usual primary endosperm nucleus is 3n, which is 21 for n = 7."
      }
    ]
  },
  {
    id: "ecology",
    unit: 10,
    title: "Ecosystem productivity and trophic transfer",
    reference: {
      title: "OpenStax: Energy Flow through Ecosystems",
      url: "https://openstax.org/books/biology-2e/pages/46-2-energy-flow-through-ecosystems"
    },
    lab: null,
    alt: "An energy budget shows 1,500 units of gross production minus 500 units of producer respiration, leaving 1,000 units of net primary production. A 12 percent transfer leaves 120 units of herbivore production.",
    sections: [
      {
        title: "Distinguish production from standing stock",
        paragraphs: [
          "Standing biomass describes mass present at a time. Productivity is a rate of formation of new organic material. A small producer stock can sustain consumers if it turns over quickly. A snapshot of mass does not directly measure productivity."
        ]
      },
      {
        title: "Balance the energy budget",
        paragraphs: [
          "Net primary productivity equals gross primary productivity minus producer respiration. Compare on the same area and time basis. Trophic transfer efficiency compares production at the receiving level with production at the preceding level."
        ]
      },
      {
        title: "Quick revision",
        paragraphs: [
          "NPP = GPP − producer respiration.",
          "Multiply by each stated transfer fraction. Ten percent is a simplified classroom model.",
          "An inverted standing biomass pyramid can coexist with decreasing production across trophic levels."
        ]
      }
    ],
    examples: [
      {
        question: "Producers gross 1,500 kJ per square metre per year and respire 500. Herbivores produce 12% of the producer NPP. What are the two production rates?",
        steps: [
          "Subtract producer respiration to find net production, then multiply by 0.12 for herbivore production."
        ],
        answer: "NPP = 1,000 and herbivore production = 120 kJ per square metre per year."
      }
    ],
    quiz: [
      {
        question: "Why can a small phytoplankton standing stock support greater consumer standing mass?",
        options: [
          "Consumers create energy",
          "Phytoplankton may turn over rapidly",
          "Biomass and productivity are identical",
          "Consumers transfer all food energy"
        ],
        answer: 1,
        explanation: "Standing stock is a snapshot. Fast replacement can sustain a substantial production rate."
      },
      {
        question: "Which term is subtracted from GPP to obtain NPP?",
        options: [
          "Producer respiration",
          "All consumer respiration",
          "Decomposer biomass",
          "Consumer ingestion"
        ],
        answer: 0,
        explanation: "NPP is producer production left after producer respiration."
      },
      {
        question: "Starting with 1,000 units, successive transfers of 12% and 15% produce what final amount?",
        options: [
          "150",
          "120",
          "27",
          "18"
        ],
        answer: 3,
        explanation: "Multiply by both transfer fractions: 1,000 × 0.12 × 0.15 = 18."
      }
    ]
  }
];

export function biologyNotesHref(id: string) {
  return `/neet/classes/written/${id}`;
}
