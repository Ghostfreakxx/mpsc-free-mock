export const complexQuadraticsBoards = [
  {
    "title": "Treat complex numbers as ordered pairs and algebraic quantities",
    "lines": [
      "(2+3i)(1−i) = 5+i",
      "Re(a+ib)=a; Im(a+ib)=b",
      "i, −1, −i, 1: period 4",
      "i²³ = i³ = −i"
    ]
  },
  {
    "title": "Use conjugates for modulus and division",
    "lines": [
      "z = 3+4i; z̄ = 3−4i",
      "|z| = 5; zz̄ = 25",
      "(3+4i)/(1−2i) = (−5+10i)/5",
      "Quotient = −1+2i"
    ]
  },
  {
    "title": "Read the Argand plane and distance loci",
    "lines": [
      "z=x+iy ↔ point (x,y)",
      "|z−2|=3: centre (2,0), radius 3",
      "|z−1|=|z+1| ⇒ x=0",
      "Conjugation reflects in the real axis"
    ]
  },
  {
    "title": "Choose arguments by quadrant and use polar form",
    "lines": [
      "−1+i: modulus √2",
      "Quadrant II ⇒ Arg(z)=3π/4",
      "Multiply: moduli ×, arguments +",
      "Arg(0) is undefined"
    ]
  },
  {
    "title": "Solve quadratics over real and complex numbers",
    "lines": [
      "z²−2z+5=0; D=−16",
      "Roots: 1+2i and 1−2i",
      "(2+i)² = 3+4i",
      "Square roots: ±(2+i)"
    ]
  },
  {
    "title": "Keep parameter conditions attached to the discriminant",
    "lines": [
      "x²−2kx+k+2=0",
      "D = 4(k−2)(k+1)",
      "Real roots: k≤−1 or k≥2",
      "D=0 at k=−1 and k=2"
    ]
  },
  {
    "title": "Use root sums and products without finding each root",
    "lines": [
      "2x²−5x+2=0",
      "S = α+β = 5/2; P = αβ = 1",
      "α²+β² = S²−2P = 17/4",
      "1/α+1/β = S/P when P≠0"
    ]
  },
  {
    "title": "Form equations with given or transformed roots",
    "lines": [
      "Roots 2,3: x²−5x+6=0",
      "Shifted roots 3,4: x²−7x+12=0",
      "Reciprocals: 6x²−5x+1=0",
      "Roots 1±2i: x²−2x+5=0"
    ]
  },
  {
    "title": "Handle common roots and changes in degree",
    "lines": [
      "x²−3x+2=0 and x²−kx+2=0",
      "Common root r≠0 ⇒ (3−k)r=0",
      "Hence k=3; check both originals",
      "k=1 in (k−1)x²+2x+1 gives x=−½"
    ]
  },
  {
    "title": "Locate roots relative to a boundary and solve sign intervals",
    "lines": [
      "x=t+1 ⇒ t²−4t+(k−5)=0",
      "Sₜ=4>0; Pₜ=k−5>0",
      "D≥0 ⇒ k≤9; combine: 5<k≤9",
      "x²−5x+6≤0 ⇒ x∈[2,3]"
    ]
  }
] as const;
