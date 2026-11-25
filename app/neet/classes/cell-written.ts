export const cellWrittenHref = "/neet/classes/cell-unit-life/notes";

export const cellNotes = [
  "A bacterial cell has a plasma membrane, cytoplasm, ribosomes and DNA in a nucleoid. A typical eukaryotic cell encloses its DNA in a nucleus and has membrane-bound compartments. Both use ribosomes to translate messenger RNA.",
  "A secreted protein commonly enters the rough endoplasmic reticulum during synthesis, travels by vesicle to the Golgi apparatus for further processing and sorting, and reaches the plasma membrane in secretory vesicles. When those vesicles fuse with the membrane, soluble cargo is released outside by exocytosis.",
  "A cell wall supports the cell and helps resist expansion. The plasma membrane controls exchange. In a photosynthetic plant cell, chloroplasts capture light energy and the large central vacuole helps maintain turgor. Plant cells also have mitochondria.",
  "After DNA replication, two sister chromatids remain attached at each chromosome’s centromeric region. A cell with six replicated chromosomes contains twelve chromatids before the sisters separate.",
];

export const cellRevision = [
  "Nucleoid: DNA-containing region without a nuclear envelope. Nucleus: DNA-containing compartment bounded by an envelope.",
  "Secretory route: rough ER → transport vesicle → Golgi → secretory vesicle → plasma membrane.",
  "Count joined sister chromatids as one replicated chromosome until they separate.",
];

export const cellQuestions = [
  {
    question: "A cell completes DNA replication and contains six replicated chromosomes. How many chromatids are present?",
    options: ["3", "6", "12", "24"],
    answer: 2,
    explanation: "Each replicated chromosome has two sister chromatids. Six times two gives twelve chromatids before separation.",
  },
  {
    question: "Which compartment receives a newly made secretory protein from the rough ER for further processing and sorting?",
    options: ["Golgi apparatus", "Nucleolus", "Chloroplast", "Centromere"],
    answer: 0,
    explanation: "Transport vesicles carry cargo from the rough ER to the Golgi, which processes and sorts many secretory proteins.",
  },
  {
    question: "Which structure provides the selectively permeable boundary of a plant cell?",
    options: ["Cell wall", "Plasma membrane", "Nucleolus", "Cellulose fibre"],
    answer: 1,
    explanation: "The plasma membrane regulates what crosses the cell boundary. The porous cell wall provides structural support outside it.",
  },
  {
    question: "If vesicles leave the Golgi but cannot fuse with the plasma membrane, which step is directly impaired for a soluble secretory protein?",
    options: ["Synthesis of its mRNA", "Entry into the rough ER", "Release outside the cell", "DNA replication"],
    answer: 2,
    explanation: "Fusion exposes the vesicle lumen to the outside and releases its soluble cargo. Earlier synthesis and sorting are distinct steps.",
  },
];

export const cellSyllabus = {
  title: "NTA NEET UG 2026 syllabus",
  url: "https://neet.nta.nic.in/document/syllabus-for-neet-ug-2026-examination/",
};
