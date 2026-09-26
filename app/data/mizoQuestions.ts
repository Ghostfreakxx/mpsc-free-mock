export type MizoQuestion = {
  subject: string;
  category: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  hint?: string;
};

export const mizoQuestions: MizoQuestion[] = [
  {
    subject: "Mizo Tawng",
    category: "Alphabet",
    question: "How many letter units are listed in the Mizo alphabet lesson?",
    options: ["21", "23", "25", "26"],
    answer: "25",
    explanation: "The lesson lists 25 units, including the combinations AW, CH, and NG.",
    hint: "Count the combined letter units as entries in their own right.",
  },
  {
    subject: "Mizo Tawng",
    category: "Alphabet",
    question: "Which letter unit follows A in the Mizo alphabet list?",
    options: ["B", "AW", "CH", "E"],
    answer: "AW",
    explanation: "The sequence begins A, AW, B, CH, D.",
    hint: "It is also one of the Mizo vowels.",
  },
  {
    subject: "Mizo Tawng",
    category: "Vowels",
    question: "Which sequence contains the six Mizo vowels shown in the lesson?",
    options: ["A, AW, E, I, O, U", "A, E, I, O, U, Z", "A, B, E, I, O, U", "AW, CH, E, I, O, U"],
    answer: "A, AW, E, I, O, U",
    explanation: "The lesson identifies A, AW, E, I, O, and U as the Mizo vowels.",
    hint: "One vowel is written with two Roman letters.",
  },
  {
    subject: "Mizo Tawng",
    category: "Pronunciation",
    question: "In the pronunciation guide, CH is compared with which English sound?",
    options: ["The ch in chop", "The sh in ship", "The th in thin", "The ng in sing"],
    answer: "The ch in chop",
    explanation: "The guide compares Mizo CH with the opening sound in the English word 'chop'.",
    hint: "Say the first sound in 'chop'.",
  },
  {
    subject: "Mizo Tawng",
    category: "Pronunciation",
    question: "Which pair of letters is treated as one alphabet unit in the Mizo list?",
    options: ["NG", "BC", "EF", "UV"],
    answer: "NG",
    explanation: "NG is one of the combined letter units in the listed Mizo alphabet.",
    hint: "The other listed combinations are AW and CH.",
  },
  {
    subject: "Mizo Tawng",
    category: "Alphabet",
    question: "What is the lowercase form of the Mizo letter Ṭ?",
    options: ["t", "ṭ", "ţ", "ŧ"],
    answer: "ṭ",
    explanation: "The lowercase form keeps the dot below: capital Ṭ, lowercase ṭ.",
    hint: "Keep the same letter mark when changing case.",
  },
  {
    subject: "Mizo Tawng",
    category: "Vocabulary",
    question: "In the examples supplied for this lesson, what does Arpa mean?",
    options: ["Rooster", "Crocodile", "River", "Mountain"],
    answer: "Rooster",
    explanation: "Arpa is given as the example word for A and means rooster or cock.",
    hint: "It is the example beginning with A.",
  },
  {
    subject: "Mizo Tawng",
    category: "Vocabulary",
    question: "In the examples supplied for this lesson, what does Awle mean?",
    options: ["Rooster", "Crocodile", "Cloud", "Forest"],
    answer: "Crocodile",
    explanation: "Awle is given as the example word for AW and means crocodile.",
    hint: "It is the example beginning with AW.",
  },
  {
    subject: "Mizo Tawng",
    category: "Pronunciation",
    question: "In the supplied pronunciation note, AW is approximated by which English letter sound?",
    options: ["A", "E", "O", "U"],
    answer: "O",
    explanation: "The note approximates AW with the English O sound and uses Aizawl as an example, often rendered informally as 'Aizol'.",
    hint: "It is the vowel used in the word 'go'.",
  },
  {
    subject: "Mizo Tawng",
    category: "Alphabet",
    question: "Which letter is not listed as a separate letter unit in the Mizo alphabet lesson?",
    options: ["F", "O", "C", "Z"],
    answer: "C",
    explanation: "C is not listed on its own; the alphabet includes the combined unit CH.",
    hint: "A combined unit can be present even when its first character is not a separate entry.",
  },
];
