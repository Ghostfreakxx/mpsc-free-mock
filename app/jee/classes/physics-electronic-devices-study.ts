import { syllabusSource, type StudyLesson } from "./course.ts";

export const electronicDevicesCompanion: StudyLesson = {
  id: "electronic-devices-study",
  subject: "Physics",
  unit: 19,
  title: "Diodes, regulation and logic gates",
  summary: "Trace the bias · Explain rectification · Compare light-sensitive devices",
  prerequisites: "Voltage, current and resistance in circuits.",
  remaining: "Recorded applications extend these ideal models to clamp states, current limits and gate networks.",
  sections: [
    {
      title: "Trace the bias",
      paragraphs: [
        "A forward bias makes the p side more positive than the n side and eases conduction. A reverse bias generally leaves small leakage before breakdown. An ideal diode simplifies this to a short when conducting and an open when blocking; verify that the inferred current and voltage agree with that state."
      ]
    },
    {
      title: "Explain rectification",
      paragraphs: [
        "A half-wave rectifier passes one input polarity. A bridge routes both half cycles through the load in the same direction, using two conducting diodes on each half cycle. The output remains pulsating unless filtered."
      ]
    },
    {
      title: "Compare light-sensitive devices",
      paragraphs: [
        "An LED emits when forward current recombines carriers, and it needs a suitable current limiter. A photodiode can sense incident light in reverse bias. An illuminated solar cell can deliver power to a load without a separate reverse-bias supply."
      ]
    },
    {
      title: "Check Zener current at the load extremes",
      paragraphs: [
        "A reverse-biased Zener can hold output near its breakdown voltage when supplied through a series resistor. Subtract load current from resistor current to find Zener current. Check the minimum useful current and the maximum current or dissipation allowed by the part."
      ],
      formula: "I_Z = (V_in − V_Z)/R_series − I_load"
    },
    {
      title: "Translate gates to conditions",
      paragraphs: [
        "AND needs all inputs high; OR needs at least one high. NOT inverts. NAND and NOR invert the corresponding two-input operation. For a network, calculate each intermediate gate output before evaluating the final gate."
      ]
    }
  ],
  examples: [
    {
      question: "A 12 V source feeds a 5 V Zener through 350 Ω. The load takes 14 mA. Find the ideal Zener current.",
      steps: [
        "The resistor supplies (12 − 5)/350 = 20 mA. Subtract the load current."
      ],
      answer: "6 mA, provided the diode regulates there."
    },
    {
      question: "Two equal inputs feed a NAND gate. What is its output for each shared input value?",
      steps: [
        "For 0 and 0, AND = 0. For 1 and 1, AND = 1. Invert both outputs."
      ],
      answer: "Output 1 for input 0 and output 0 for input 1."
    }
  ],
  quiz: [
    {
      question: "For a 50 Hz sinusoidal supply, what is the ripple repetition rate of an ideal unfiltered bridge rectifier?",
      options: [
        "25 Hz",
        "50 Hz",
        "100 Hz",
        "200 Hz"
      ],
      answer: 2,
      explanation: "The bridge makes both half cycles the same polarity. There are two output pulses per input cycle."
    },
    {
      question: "In the Zener example, what happens to Zener current if load current increases by 2 mA while regulation holds?",
      options: [
        "Rises by 2 mA",
        "Falls by 2 mA",
        "Stays unchanged",
        "Doubles"
      ],
      answer: 1,
      explanation: "Fixed source, series resistance and regulated output fix total current. The extra 2 mA for the load comes from the Zener branch."
    }
  ],
  figure: {
    alt: "Full-wave rectification produces two pulses per input cycle."
  },
  sources: [{ title: "NTA JEE Main Paper 1 syllabus", url: syllabusSource }],
};
