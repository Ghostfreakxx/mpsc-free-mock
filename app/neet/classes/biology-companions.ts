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
          "After meiosis I each daughter cell is haploid but each chromosome still has two chromatids. During anaphase, counts for the undivided cell can differ from counts at one pole. Use the question’s boundary."
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
          "Cross the unknown yellow parent with yy. All offspring are predicted yellow for YY × yy. For Yy × yy, each offspring independently has probability 1/2 of being green under the simple model. A small all-yellow sample does not prove YY."
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
      }
    ]
  }
];

export function biologyNotesHref(id: string) {
  return `/neet/classes/written/${id}`;
}
