import { syllabusSource, type StudyLesson } from "./course.ts";

export const experimentalSkillsCompanion: StudyLesson = {
  id: "experimental-skills-study",
  subject: "Physics",
  unit: 20,
  title: "Experimental skills through observable measurements",
  summary: "Correct a reading before using it · Extract a slope or balance · Control the thermal and fluid assumptions",
  prerequisites: "Units, graphs, circuits and ray optics.",
  remaining: "Use the eight Unit 20 recordings for full observations and safe, supervised practical work.",
  sections: [
    {
      title: "Correct a reading before using it",
      paragraphs: [
        "A vernier reading combines the main scale with the matching division times least count. For a screw gauge, use pitch divided by divisions per turn. Correct signed zero error. Choose vernier jaws or depth rod for the dimensions required, and avoid crushing soft samples."
      ]
    },
    {
      title: "Extract a slope or balance",
      paragraphs: [
        "In a metre-scale balance, compare clockwise and anticlockwise moments about the pivot, including the rule’s weight when it has a nonzero moment. Plot squared pendulum amplitude versus time to track energy loss in the small-angle regime. Wire extension under load gives Young’s modulus using stress divided by strain."
      ]
    },
    {
      title: "Control the thermal and fluid assumptions",
      paragraphs: [
        "In heat-of-mixtures work, account for the calorimeter’s heat capacity and identify the common final temperature. For falling-sphere viscosity, use terminal speed after transients and a regime appropriate to Stokes drag. In capillary rise, check tube radius and contact angle before comparing detergent solutions. Adjacent closed-pipe resonances differ by half a wavelength."
      ]
    },
    {
      title: "Choose electrical axes and references",
      paragraphs: [
        "A V versus I graph has slope R in an Ohmic region. With an unknown resistance X in the left metre-bridge gap, X/R = l/(100 − l) for l in centimetres, ideally. Combine R_wire with length and area to infer resistivity. In half-deflection work, include the effect of the known series resistance on the shunt estimate."
      ]
    },
    {
      title: "Record observations in optics and devices",
      paragraphs: [
        "Remove parallax by moving your eye and adjusting until pointer and image move together. A travelling microscope uses real over apparent slab thickness for refractive index in the near-normal model. Prism deviation versus incidence has a minimum at symmetric passage. Compare forward and reverse diode curves with suitable scales; use current limiting when locating Zener breakdown. Identify components by markings and appropriate circuit tests."
      ]
    }
  ],
  examples: [
    {
      question: "A screw gauge has 0.50 mm pitch, 50 divisions and +0.02 mm zero error. The uncorrected reading is 1.27 mm.",
      steps: [
        "Compute least count 0.50/50 = 0.01 mm. Subtract the positive zero error."
      ],
      answer: "Thickness 1.25 mm."
    },
    {
      question: "Adjacent resonance lengths are 0.16 and 0.50 m with a 500 Hz fork. Estimate sound speed.",
      steps: [
        "Their difference is 0.34 m = λ/2. Multiply λ = 0.68 m by 500 Hz."
      ],
      answer: "340 m/s."
    }
  ],
  quiz: [
    {
      question: "An unknown X occupies the left metre-bridge gap, R = 6 Ω is on the right, and balance is at 40 cm from the left. Find X.",
      options: [
        "4 Ω",
        "6 Ω",
        "9 Ω",
        "15 Ω"
      ],
      answer: 0,
      explanation: "The zero-current balance gives X/6 = 40/60, so X = 4 Ω in the ideal bridge."
    },
    {
      question: "A glass slab is 3.0 cm thick and appears 2.0 cm thick near normal incidence. What index is inferred?",
      options: [
        "0.67",
        "1.00",
        "1.50",
        "2.00"
      ],
      answer: 2,
      explanation: "The near-normal apparent-depth model gives index equal to real thickness divided by apparent thickness."
    }
  ],
  figure: {
    alt: "A bridge balanced at 40 cm divides the wire in the ratio 40 to 60."
  },
  sources: [{ title: "NTA JEE Main Paper 1 syllabus", url: syllabusSource }],
};
