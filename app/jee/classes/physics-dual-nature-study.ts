import { syllabusSource, type StudyLesson } from "./course.ts";

export const dualNatureCompanion: StudyLesson = {
  id: "dual-nature-study",
  subject: "Physics",
  unit: 17,
  title: "Photons, photoelectric graphs and matter waves",
  summary: "Apply a single-photon energy balance · Interpret the stopping voltage · Separate brightness and frequency",
  prerequisites: "Energy units and basic graph slopes.",
  remaining: "Use the recordings for the historical observations and additional photon and matter-wave comparisons.",
  sections: [
    {
      title: "Apply a single-photon energy balance",
      paragraphs: [
        "Light at frequency f has photon energy hf. In the ordinary single-photon photoelectric effect, an electron can take at most hf − φ as kinetic energy, where φ is the surface work function."
      ],
      formula: "K_max = hf − φ; f₀ = φ/h"
    },
    {
      title: "Interpret the stopping voltage",
      paragraphs: [
        "The magnitude of the retarding voltage that cuts off photocurrent obeys eV_s = K_max. Plotting V_s against f above threshold gives slope h/e. The intercept on the frequency axis gives the threshold, while the negative voltage intercept is an extrapolation."
      ]
    },
    {
      title: "Separate brightness and frequency",
      paragraphs: [
        "At fixed above-threshold frequency, increasing intensity usually increases the available photon flux and saturation current with collection and emission conditions fixed. It leaves the ideal stopping voltage unchanged. Below threshold, brighter light alone does not cause emission in the single-photon regime."
      ]
    },
    {
      title: "Connect electron momentum to wavelength",
      paragraphs: [
        "de Broglie wavelength is h/p. An electron that starts at rest and is accelerated through potential-difference magnitude V gains kinetic energy eV in the ideal model. In the nonrelativistic approximation p = √(2meV)."
      ]
    },
    {
      title: "Distinguish the two wavelength models",
      paragraphs: [
        "For a photon p = h/λ and E = pc in vacuum. An electron with the same momentum has the same de Broglie wavelength but a different energy relation. Electron diffraction provides evidence for matter waves."
      ]
    }
  ],
  examples: [
    {
      question: "A 3.5 eV photon hits a surface with work function 2.1 eV. Find stopping voltage magnitude.",
      steps: [
        "Subtract to get maximum kinetic energy of 1.4 eV. Divide that energy by charge magnitude e."
      ],
      answer: "1.4 V"
    },
    {
      question: "Compare electron wavelengths at 25 V and 100 V, starting from rest.",
      steps: [
        "In the nonrelativistic regime λ ∝ 1/√V; the voltage increases fourfold."
      ],
      answer: "The 100 V wavelength is half the 25 V wavelength."
    }
  ],
  quiz: [
    {
      question: "At fixed above-threshold frequency, what does doubling intensity do to the ideal stopping voltage?",
      options: [
        "Doubles it",
        "Halves it",
        "Leaves it unchanged",
        "Makes it zero"
      ],
      answer: 2,
      explanation: "Intensity changes photon arrival rate. The maximum energy per emitted electron comes from the unchanged photon frequency."
    },
    {
      question: "What is the slope of stopping voltage magnitude versus frequency above threshold?",
      options: [
        "h",
        "e/h",
        "h/e",
        "φ/h"
      ],
      answer: 2,
      explanation: "Dividing the photoelectric equation by e gives V_s = (h/e)f − φ/e, so the slope is h/e."
    }
  ],
  figure: {
    alt: "Above threshold, stopping voltage rises linearly with frequency."
  },
  sources: [{ title: "NTA JEE Main Paper 1 syllabus", url: syllabusSource }],
};
