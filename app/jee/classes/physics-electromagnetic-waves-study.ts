import { syllabusSource, type StudyLesson } from "./course.ts";

export const electromagneticWavesCompanion: StudyLesson = {
  id: "electromagnetic-waves-study",
  subject: "Physics",
  unit: 15,
  title: "Electromagnetic waves and the spectrum",
  summary: "Follow a changing electric field · Describe a plane wave in vacuum · Order the spectrum",
  prerequisites: "Current, electric field and wave speed.",
  remaining: "See the recorded applications for vacuum intensity and capacitor-field calculations.",
  sections: [
    {
      title: "Follow a changing electric field",
      paragraphs: [
        "A charging capacitor has conduction current in its leads and changing electric flux through the gap. In vacuum the displacement-current term is ε₀ dΦ_E/dt. It contributes to the magnetic field even where no conduction charge crosses."
      ],
      formula: "I_d = ε₀ dΦ_E/dt"
    },
    {
      title: "Describe a plane wave in vacuum",
      paragraphs: [
        "The electric field and magnetic field are perpendicular to each other and to propagation. Their oscillations are in phase for a plane travelling wave. For propagation along +x with E along +y, B points along +z when E is positive."
      ],
      formula: "E₀/B₀ = c; c = fλ"
    },
    {
      title: "Order the spectrum",
      paragraphs: [
        "Increasing frequency runs from radio through microwave, infrared, visible, ultraviolet, X-rays and gamma rays. Vacuum wavelength decreases in that order. Boundaries are approximate and X-ray and gamma classifications can also reflect origin."
      ]
    },
    {
      title: "Connect frequency to use",
      paragraphs: [
        "Radio and microwaves carry signals; infrared detection can map thermal emission; visible light supports imaging; appropriate UV can disinfect; X-rays image through differential attenuation; gamma rays have selected medical and industrial uses. Penetration and absorption depend on photon energy and material."
      ]
    },
    {
      title: "Keep vacuum and material quantities separate",
      paragraphs: [
        "Frequency stays fixed across a stationary interface in ordinary linear refraction. A different phase speed then changes wavelength. Use c for vacuum and the specified medium speed elsewhere."
      ]
    }
  ],
  examples: [
    {
      question: "A microwave has frequency 3.0 GHz. Find its vacuum wavelength.",
      steps: [
        "Divide 3.0 × 10⁸ m/s by 3.0 × 10⁹ Hz."
      ],
      answer: "0.10 m"
    },
    {
      question: "A vacuum plane wave has electric amplitude 60 V/m. Find magnetic amplitude.",
      steps: [
        "Divide E₀ by c = 3.0 × 10⁸ m/s."
      ],
      answer: "2.0 × 10⁻⁷ T"
    }
  ],
  quiz: [
    {
      question: "What crosses an ideal vacuum gap in a charging capacitor as a contribution to Ampère–Maxwell law?",
      options: [
        "A conduction electron beam",
        "A displacement-current term",
        "A steady ion current",
        "A magnetic monopole current"
      ],
      answer: 1,
      explanation: "The changing electric flux gives a displacement-current term even though the ideal gap conducts no charge."
    },
    {
      question: "A wave enters a stationary medium where its phase speed halves. Which quantity halves?",
      options: [
        "Frequency",
        "Period",
        "Wavelength",
        "Both frequency and period"
      ],
      answer: 2,
      explanation: "Frequency is fixed by the incoming oscillation. The wavelength follows λ = v/f and halves with the speed."
    }
  ],
  figure: {
    alt: "Electromagnetic spectrum ordered by increasing frequency."
  },
  sources: [{ title: "NTA JEE Main Paper 1 syllabus", url: syllabusSource }],
};
