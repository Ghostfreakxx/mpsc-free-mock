import { syllabusSource, type StudyLesson } from "./course.ts";

export const opticsCompanion: StudyLesson = {
  id: "optics-study",
  subject: "Physics",
  unit: 16,
  title: "Optics from image formation to interference",
  summary: "Keep a signed axis · Use the normal at an interface · Combine optics carefully",
  prerequisites: "Geometry, trigonometry and waves.",
  remaining: "Use the recordings for instruments, lens combinations, prisms and the derivations of the spherical-surface formulas.",
  sections: [
    {
      title: "Keep a signed axis",
      paragraphs: [
        "Measure distances from the pole or optical centre, positive along incident light. Within the paraxial model, mirrors obey 1/f = 1/v + 1/u, with magnification −v/u. Thin lenses in air obey 1/f = 1/v − 1/u and magnification v/u."
      ]
    },
    {
      title: "Use the normal at an interface",
      paragraphs: [
        "Snell’s law uses angles from the normal. A ray can reflect totally when travelling from higher to lower refractive index above the critical angle. For a single spherical refracting surface in the paraxial limit, signed object, image and radius satisfy the equation below."
      ],
      formula: "n₂/v − n₁/u = (n₂ − n₁)/R; sin θ_c = n₂/n₁ for n₁ > n₂"
    },
    {
      title: "Combine optics carefully",
      paragraphs: [
        "In air, contacting thin lens powers add; measure focal length in metres to obtain dioptres. A lensmaker calculation uses signed radii. At minimum deviation in a prism, incidence equals emergence. A microscope’s objective magnifies a nearby specimen while a telescope’s objective forms an image of a distant object."
      ]
    },
    {
      title: "Use wavefronts and path differences",
      paragraphs: [
        "Huygens’ construction advances wavefronts using secondary wavelets and recovers the ray laws. Stable interference needs a stable phase difference. For small angles in Young’s double slit, fringe spacing is λD/d, where d is slit separation."
      ]
    },
    {
      title: "Separate diffraction and polarization",
      paragraphs: [
        "A single slit of width a has its first minima at sin θ = ±λ/a; the small-angle central width on a distant screen is 2λD/a. A polarizer selects an electric-field direction. At the Brewster angle for a dielectric interface, the reflected and refracted rays are perpendicular, with tan θ_B = n₂/n₁."
      ]
    }
  ],
  examples: [
    {
      question: "A converging thin lens has f = +10 cm and u = −30 cm. Find the image.",
      steps: [
        "Use 1/v = 1/10 − 1/30 = 1/15 in inverse centimetres."
      ],
      answer: "v = +15 cm, m = −0.50. The image is real and inverted."
    },
    {
      question: "A double slit has d = 0.30 mm, D = 1.5 m and λ = 600 nm. Find fringe spacing.",
      steps: [
        "Convert all lengths to SI and evaluate λD/d."
      ],
      answer: "0.0030 m = 3.0 mm"
    }
  ],
  quiz: [
    {
      question: "Light travels from n = 1.50 towards air. At 50° from the normal, what happens in the ideal interface model?",
      options: [
        "It refracts along the normal",
        "It totally internally reflects",
        "It emerges at 50°",
        "It reaches exactly the critical angle"
      ],
      answer: 1,
      explanation: "The critical angle is arcsin(1/1.50), about 41.8°. The angle is above it and light approaches from the denser medium."
    },
    {
      question: "What happens to the single-slit central maximum width when slit width doubles in the small-angle limit?",
      options: [
        "It halves",
        "It doubles",
        "It stays fixed",
        "It quadruples"
      ],
      answer: 0,
      explanation: "The width is 2λD/a. With the screen and wavelength fixed, doubling a halves the central width."
    }
  ],
  figure: {
    alt: "A converging thin lens forms a real inverted image."
  },
  sources: [{ title: "NTA JEE Main Paper 1 syllabus", url: syllabusSource }],
};
