import { syllabusSource, type StudyLesson } from "./course.ts";

export const atomsNucleiCompanion: StudyLesson = {
  id: "atoms-nuclei-study",
  subject: "Physics",
  unit: 18,
  title: "Atomic spectra and nuclear binding energy",
  summary: "Read scattering as evidence · Use discrete levels · Read nuclear labels",
  prerequisites: "Electric potential energy and energy conservation.",
  remaining: "The recorded applications cover further scattering geometry, spectra and mass-balanced reaction calculations.",
  sections: [
    {
      title: "Read scattering as evidence",
      paragraphs: [
        "Most alpha particles in Rutherford scattering pass with small deflection, but a small fraction scatter at large angles. The observations are consistent with a compact positive nucleus. In a head-on fixed-target estimate, initial kinetic energy becomes electrostatic potential energy at closest approach."
      ]
    },
    {
      title: "Use discrete levels",
      paragraphs: [
        "Hydrogen’s Bohr model gives Eₙ = −13.6 eV/n² and radius proportional to n². A downward transition emits a photon of energy E_initial − E_final. The model is useful for a one-electron spectrum and has limits for multielectron atoms."
      ]
    },
    {
      title: "Read nuclear labels",
      paragraphs: [
        "Atomic number Z counts protons. Mass number A counts nucleons, so neutrons number A − Z. A commonly used size estimate is R ≈ r₀A^(1/3). Mass number is a count and atomic mass is a measured quantity."
      ]
    },
    {
      title: "Choose a mass convention",
      paragraphs: [
        "For nuclear masses, mass defect is Zm_p + (A − Z)m_n − m_nucleus. Multiply by c² for binding energy. When using neutral atomic masses, a usual exam approximation replaces proton mass with neutral hydrogen mass and neglects the small electronic binding differences."
      ]
    },
    {
      title: "Compare binding per nucleon",
      paragraphs: [
        "Binding energy per nucleon indicates the average energy to separate nucleons. Fusion of suitable light nuclei and fission of suitable heavy nuclei can release energy when products are more tightly bound. Verify reaction energy from the total initial and final rest masses with matching conventions."
      ],
      formula: "Q = (Σm_initial − Σm_final)c²"
    }
  ],
  examples: [
    {
      question: "Find the hydrogen photon energy for n = 3 to n = 2.",
      steps: [
        "Evaluate 13.6(1/2² − 1/3²) eV."
      ],
      answer: "1.89 eV, about 656 nm."
    },
    {
      question: "A four-nucleon nucleus has a 0.030 u mass defect. Find binding energy per nucleon.",
      steps: [
        "Multiply by about 931.5 MeV/u, then divide by four."
      ],
      answer: "About 6.99 MeV per nucleon."
    }
  ],
  quiz: [
    {
      question: "How many neutrons are in carbon-14 (Z = 6)?",
      options: [
        "6",
        "8",
        "14",
        "20"
      ],
      answer: 1,
      explanation: "The mass number counts protons plus neutrons, so carbon-14 contains 14 − 6 = 8 neutrons."
    },
    {
      question: "Which transition in hydrogen emits a photon?",
      options: [
        "n = 2 to n = 3",
        "n = 3 to n = 4",
        "n = 3 to n = 2",
        "n = 2 to n = 2"
      ],
      answer: 2,
      explanation: "The hydrogen levels are more negative at smaller n. Only the transition from 3 to 2 loses energy here."
    }
  ],
  figure: {
    alt: "A hydrogen transition from n = 3 to n = 2 emits a photon."
  },
  sources: [{ title: "NTA JEE Main Paper 1 syllabus", url: syllabusSource }],
};
