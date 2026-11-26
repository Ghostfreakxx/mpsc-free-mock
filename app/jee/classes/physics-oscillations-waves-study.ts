import { syllabusSource, type StudyLesson } from "./course.ts";

export const oscillationsWavesCompanion: StudyLesson = {
  id: "oscillations-waves-study",
  subject: "Physics",
  unit: 10,
  title: "Oscillations and waves from phase to resonance",
  summary: "Recognise simple harmonic motion · Apply the period to its model · Read a travelling wave",
  prerequisites: "Trigonometry and Newton’s second law.",
  remaining: "The recordings develop additional superposition, air-column and spring-combination problems.",
  sections: [
    {
      title: "Recognise simple harmonic motion",
      paragraphs: [
        "If acceleration is proportional to displacement and points toward equilibrium, the motion is simple harmonic. The phase gives the position within a cycle. At equilibrium the speed magnitude is greatest, and at a turning point the speed is zero."
      ],
      formula: "a = −ω²x; x = A cos(ωt + φ)"
    },
    {
      title: "Apply the period to its model",
      paragraphs: [
        "The ideal spring period is 2π√(m/k). A simple pendulum gives 2π√(L/g) only for small swings. For ideal SHM the total energy is constant; damping transfers energy to the surroundings."
      ]
    },
    {
      title: "Read a travelling wave",
      paragraphs: [
        "In A cos(kx − ωt), constant phase moves in the positive x direction. Transverse motion is perpendicular to travel, while longitudinal motion is parallel. For the same wave, v = fλ. Superposition adds displacements where the model is linear."
      ]
    },
    {
      title: "Use boundary conditions",
      paragraphs: [
        "Both ends of a fixed string are displacement nodes, giving λₙ = 2L/n. In an ideal pipe closed at one end, air displacement has a node at the capped end and an antinode at the open end. Its resonant frequencies are odd multiples of v/(4L), neglecting end correction."
      ]
    },
    {
      title: "Distinguish beats and standing waves",
      paragraphs: [
        "Close frequencies yield a beat rate |f₁ − f₂|. Identical waves travelling in opposite directions can give stationary nodes. Forced resonance occurs when periodic driving is near the natural frequency for a weakly damped oscillator."
      ]
    }
  ],
  examples: [
    {
      question: "A 0.50 kg mass hangs from an ideal spring of 200 N/m. Find its small vertical period.",
      steps: [
        "Compute ω = √(200/0.50) = 20 rad/s. Gravity shifts the equilibrium."
      ],
      answer: "T = 2π/20 ≈ 0.314 s"
    },
    {
      question: "Find the first two resonances of a 0.85 m pipe closed at one end, using v = 340 m/s.",
      steps: [
        "Compute f₁ = 340/(4 × 0.85). The next resonance is 3f₁."
      ],
      answer: "100 Hz and 300 Hz"
    }
  ],
  quiz: [
    {
      question: "Two tones at 256 Hz and 260 Hz overlap. What is the beat frequency?",
      options: [
        "2 Hz",
        "4 Hz",
        "258 Hz",
        "516 Hz"
      ],
      answer: 1,
      explanation: "The envelope produces four loudness maxima a second, given by the difference of the two frequencies."
    },
    {
      question: "Where is the acceleration magnitude greatest in ideal SHM?",
      options: [
        "At the centre",
        "Halfway to either extreme",
        "At either extreme",
        "It is constant"
      ],
      answer: 2,
      explanation: "The acceleration magnitude is ω²|x|, so it is largest at the two points where |x| = A."
    }
  ],
  figure: {
    alt: "A string with fixed ends has nodes at both ends and at the midpoint in its second harmonic."
  },
  sources: [{ title: "NTA JEE Main Paper 1 syllabus", url: syllabusSource }],
};
