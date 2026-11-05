// Authored by scripts/create-neet-review-classes.mjs.
export const boards = [
  {
    "title": "Components, magnitude and unit vectors",
    "lines": [
      "A = Aₓ î + Aᵧ ĵ + A𝓏 k̂",
      "|A| = √(Aₓ² + Aᵧ² + A𝓏²)",
      "A unit vector has magnitude one",
      "Â = A / |A| requires A ≠ 0"
    ],
    "flow": [
      "Choose orthonormal Cartesian axes",
      "Write signed components along î, ĵ and k̂",
      "Compute the nonnegative magnitude",
      "Divide a nonzero vector by its magnitude"
    ]
  },
  {
    "title": "Addition, subtraction and resolution",
    "lines": [
      "Add and subtract corresponding signed components",
      "A − B = A + (−B)",
      "For an angle from +x: Aₓ = A cos θ",
      "For that same convention: Aᵧ = A sin θ"
    ],
    "flow": [
      "A = (3,4), B = (−1,2)",
      "A + B = (2,6)",
      "A − B = (4,2)",
      "State the angle reference before resolving"
    ]
  },
  {
    "title": "Scalar product: components, angle and work",
    "lines": [
      "A·B = |A||B| cos θ",
      "A·B = AₓBₓ + AᵧBᵧ + A𝓏B𝓏",
      "The dot product is a scalar and is commutative",
      "Nonzero perpendicular vectors have zero dot product"
    ],
    "flow": [
      "A = (2,−1,2), B = (1,3,0)",
      "A·B = 2 − 3 + 0 = −1",
      "A negative result indicates an obtuse angle",
      "Work by a constant force: W = F·s"
    ]
  },
  {
    "title": "Vector product: direction, order and area",
    "lines": [
      "|A×B| = |A||B| sin θ",
      "Direction follows the right-hand rule",
      "A×B = −(B×A)",
      "î×ĵ = k̂; ĵ×î = −k̂"
    ],
    "flow": [
      "A = î + 2ĵ, B = 3î",
      "A×B = −6k̂",
      "Magnitude gives parallelogram area in matching units",
      "Torque uses r×F, with the specified origin"
    ]
  }
] as const;
