export const vectorBoards = [
  {
    "title": "Distinguish scalars, vectors and the zero vector",
    "lines": [
      "Mass and time are scalar quantities",
      "Displacement is a vector quantity",
      "Equal free vectors have equal components",
      "The zero vector has no unique direction"
    ]
  },
  {
    "title": "Resolve vectors into two and three dimensional components",
    "lines": [
      "i=(1,0,0), j=(0,1,0), k=(0,0,1)",
      "(3,4,0) has magnitude 5",
      "(2,−1,2) has magnitude 3",
      "Components depend on the chosen orthonormal axes"
    ]
  },
  {
    "title": "Add vectors using triangle and parallelogram laws",
    "lines": [
      "u=(3,0,0), v=(0,4,0)",
      "u+v=(3,4,0), magnitude 5",
      "Triangle law: join the vectors head to tail",
      "Parallelogram diagonal gives the same resultant"
    ]
  },
  {
    "title": "Subtract vectors and keep component signs",
    "lines": [
      "u=(2,−1,3), v=(−1,4,1)",
      "u+v=(1,3,4)",
      "u−v=(3,−5,2)",
      "v−u=−(u−v)"
    ]
  },
  {
    "title": "Scale vectors and construct unit vectors",
    "lines": [
      "u=(2,−1,2), |u|=3",
      "û=(2/3,−1/3,2/3)",
      "−2u=(−4,2,−4), magnitude 6",
      "The zero vector cannot be normalized"
    ]
  },
  {
    "title": "Use position vectors, displacements and section points",
    "lines": [
      "A=(1,−1,2), B=(4,5,−1)",
      "AB=(3,6,−3)",
      "Internal ratio AP:PB=1:2 gives P=(2,1,1)",
      "Midpoint=(5/2,2,1/2)"
    ]
  },
  {
    "title": "Solve linear combinations and recognize collinearity",
    "lines": [
      "u=(1,0), v=(1,1), w=(3,2)",
      "α+β=3 and β=2 ⇒ α=1",
      "(2,−1,2) and (−4,2,−4) are parallel",
      "A zero vector does not define a direction"
    ]
  },
  {
    "title": "Calculate scalar products and the angle between vectors",
    "lines": [
      "(1,1,0)·(1,−1,0)=0",
      "Nonzero vectors: dot zero ⇒ perpendicular",
      "(1,0,0)·(−1,1,0)=−1",
      "Vector angle is 3π/4 in the second example"
    ]
  },
  {
    "title": "Use dot product identities to find resultants",
    "lines": [
      "|u|=3, |v|=4, θ=π/3 ⇒ u·v=6",
      "|u+v|=√37; |u−v|=√13",
      "|u+v|²+|u−v|²=2(|u|²+|v|²)",
      "(u+v)·(u−v)=|u|²−|v|²"
    ]
  },
  {
    "title": "Find scalar and vector projections",
    "lines": [
      "u=(3,4,0), v=(1,0,0)",
      "Scalar projection=3; vector projection=(3,0,0)",
      "Reversing v changes the scalar projection sign",
      "The projected vector onto that axis is unchanged"
    ]
  },
  {
    "title": "Compute vector products with the right hand orientation",
    "lines": [
      "i×j=k, j×k=i, k×i=j",
      "Reversing order reverses the sign",
      "(1,2,3)×(2,−1,1)=(5,5,−5)",
      "The result is perpendicular to both inputs"
    ]
  },
  {
    "title": "Use cross product magnitude for parallelism and area",
    "lines": [
      "(3,0,0)×(0,4,0)=(0,0,12)",
      "Parallelogram area=12; triangle area=6",
      "For nonzero inputs, u×v=0 means parallel",
      "Cross product distributes but is not commutative"
    ]
  },
  {
    "title": "Apply a scalar triple product to volume and coplanarity",
    "lines": [
      "u=(2,0,0), v=(0,3,0), w=(0,0,4)",
      "Scalar triple product=24; volume=24",
      "Tetrahedron volume=24/6=4",
      "Triple product zero ⇒ coplanar vectors"
    ]
  },
  {
    "title": "Choose the correct operation and verify parameter answers",
    "lines": [
      "u=(1,2,−1), v=(2,k,4)",
      "u·v=2+2k−4=0 ⇒ k=1",
      "Parallel nonzero vectors are scalar multiples",
      "Check scalar versus vector output and zero cases"
    ]
  }
] as const;
