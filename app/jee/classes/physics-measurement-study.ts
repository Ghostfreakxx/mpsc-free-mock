import { syllabusSource, type StudyLesson } from "./course.ts";

export const measurementCompanion: StudyLesson = {
  id: "measurement-study",
  subject: "Physics",
  unit: 1,
  title: "Measurements, significant figures and dimensions",
  summary: "Build derived SI units · Read the instrument · Round to the precision justified",
  prerequisites: "Scientific notation and ratios.",
  remaining: "Uncertainty distributions and additional instrument readings are covered through further practice.",
  sections: [
    {
      title: "Build derived SI units",
      paragraphs: [
        "A derived unit is an algebraic product of base units. A newton is kg·m·s⁻², and a joule is N·m. Convert prefixes before squaring or cubing a quantity: 1 cm² is 10⁻⁴ m²."
      ],
      formula: "[force] = M L T⁻²"
    },
    {
      title: "Read the instrument",
      paragraphs: [
        "Least count is the smallest scale increment under the stated reading method. It is distinct from accuracy. Subtract the signed indication obtained at true zero. Repeating readings can reduce random spread, but leaves a common zero offset in place."
      ]
    },
    {
      title: "Round to the precision justified",
      paragraphs: [
        "Leading zeros locate the decimal point. Zeros after a displayed decimal digit can carry precision. Express ambiguous whole numbers in scientific notation. Use the fewest decimal places in addition and the fewest significant figures in multiplication, rounding only at the end."
      ]
    },
    {
      title: "Propagate small bounds",
      paragraphs: [
        "For a sum or difference, add absolute uncertainty bounds. For a product or quotient, add fractional bounds to first order. A power multiplies the fractional bound by the magnitude of its exponent. Independent statistical uncertainties call for a different treatment."
      ],
      formula: "Δ(xⁿ)/|xⁿ| ≈ |n| Δx/|x|"
    },
    {
      title: "Check a proposed equation",
      paragraphs: [
        "Terms added together must have identical dimensions. Dimensional consistency cannot determine numerical constants or prove the physics. A sine or exponential takes a dimensionless argument."
      ]
    }
  ],
  examples: [
    {
      question: "Convert 2.5 cm² to SI.",
      steps: [
        "Square the length conversion factor: 2.5 × (10⁻²)²."
      ],
      answer: "2.5 × 10⁻⁴ m²"
    },
    {
      question: "A length reads 4.32 cm and the closed instrument reads +0.02 cm. Correct the length.",
      steps: [
        "Subtract the signed zero indication: 4.32 − 0.02."
      ],
      answer: "4.30 cm"
    }
  ],
  quiz: [
    {
      question: "A period is proposed as k√(length / g). Which dimension must k have?",
      options: [
        "Time",
        "Length",
        "Inverse time",
        "Dimensionless"
      ],
      answer: 3,
      explanation: "Length divided by acceleration has dimension T². Its square root already supplies the required time dimension."
    },
    {
      question: "A cube edge has a 1% uncertainty bound. What is the first-order bound for its volume?",
      options: [
        "1%",
        "3%",
        "6%",
        "9%"
      ],
      answer: 1,
      explanation: "Volume is the cube of edge length, so the first-order fractional bound is three times that of the edge."
    }
  ],
  figure: {
    alt: "A signed scale zero offset is subtracted from the observed length."
  },
  sources: [{ title: "NTA JEE Main Paper 1 syllabus", url: syllabusSource }],
};
