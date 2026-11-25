import { syllabusSource, type StudyLesson } from "./course.ts";

export const workEnergyCompanion: StudyLesson = {
  id: "work-energy-study",
  subject: "Physics",
  unit: 4,
  title: "Work, energy and power through system boundaries",
  summary: "Use signed work · Account for energy transfers · Power measures a rate",
  prerequisites: "Force components, momentum and graph area.",
  remaining: "Use the linked recordings for more vertical-circle contact cases and oblique collisions.",
  sections: [
    {
      title: "Use signed work",
      paragraphs: [
        "For a constant force, project it onto the displacement. For a variable one-dimensional force, add signed areas under Fₓ versus x. Net work equals the kinetic-energy change. An individual force can do negative work while net work is positive."
      ],
      formula: "W = ∫ Fₓ dx; W_net = ΔK"
    },
    {
      title: "Account for energy transfers",
      paragraphs: [
        "With gravity and an ideal spring represented by potential energies, compare K + U at the endpoints. The spring stores kx²/2 relative to its natural length. Friction can transfer mechanical energy to internal energy. Choose the system before assigning that transfer."
      ],
      formula: "Δ(K + U) = W_other"
    },
    {
      title: "Power measures a rate",
      paragraphs: [
        "Average power is work over elapsed time. Instantaneous power is the force dotted with the instantaneous velocity. A centripetal force does zero instantaneous work when perpendicular to velocity."
      ]
    },
    {
      title: "Check circular contact separately",
      paragraphs: [
        "Energy gives speed along an ideal track. At the top of a vertical loop, inward acceleration points down and mg + N = mv²/R for a rider inside the loop. Loss of contact begins when the normal force would have to become negative."
      ]
    },
    {
      title: "Choose collision equations",
      paragraphs: [
        "When external impulse is negligible, conserve each component of total momentum. Apply kinetic-energy conservation only to an elastic collision. Sticking fixes a common final velocity. An oblique collision can require further directional or contact information."
      ]
    }
  ],
  examples: [
    {
      question: "An ideal spring of 200 N/m compresses 0.10 m. Find stored energy.",
      steps: [
        "Use ½kx² = ½ × 200 × 0.10²."
      ],
      answer: "1.0 J"
    },
    {
      question: "A 2 kg cart at 3 m/s sticks to a stationary 1 kg cart. Find speed and kinetic-energy loss.",
      steps: [
        "Conserve momentum: v = 6/3 = 2 m/s."
      ],
      answer: "Final speed 2 m/s. Kinetic energy falls from 9 J to 6 J, a loss of 3 J."
    }
  ],
  quiz: [
    {
      question: "Inside a frictionless loop, what is the minimum top speed for contact?",
      options: [
        "gR",
        "√(gR)",
        "√(2gR)",
        "Zero"
      ],
      answer: 1,
      explanation: "At the threshold N is zero and mg = mv²/R, so speed is √(gR)."
    },
    {
      question: "A force of 10 N points opposite to a velocity of 2 m/s. What power does that force deliver?",
      options: [
        "20 W",
        "5 W",
        "−20 W",
        "0 W"
      ],
      answer: 2,
      explanation: "The dot product is 10 × 2 × cos 180°, so the instantaneous power is negative."
    }
  ],
  figure: {
    alt: "The area under an increasing spring force gives work."
  },
  sources: [{ title: "NTA JEE Main Paper 1 syllabus", url: syllabusSource }],
};
