import type { StudyLesson } from './course';
// Authored by scripts/create-vector-algebra.mjs.
export const vectorAlgebraLesson:StudyLesson = {
  "id": "vector-algebra",
  "subject": "Mathematics",
  "unit": 12,
  "title": "Vector algebra: components, scalar and vector products",
  "summary": "Scalars and vectors, two and three dimensional components, addition and scaling, position vectors, scalar products, angles and projections, vector products and areas, with supporting triple product volumes.",
  "prerequisites": "Algebra, Cartesian coordinates, basic trigonometry and the distinction between a point and a displacement.",
  "remaining": "Fourteen-chapter recorded foundation for Unit 12 with original examples and practice covering vectors and scalars, addition, components in two and three dimensions, scalar products and vector products. Further mixed parameter conditions, vector identities, projection and area constructions and timed practice remain. Triple product volumes are supporting enrichment. This is not exhaustive problem coverage or official PYQs.",
  "sections": [
    {
      "title": "Distinguish scalars, vectors and the zero vector",
      "formula": "A vector has magnitude and direction; a scalar has magnitude only",
      "paragraphs": [
        "A scalar is described by a numerical magnitude with its relevant unit, while a vector also carries direction. Mass and elapsed time are scalar examples. Displacement and force are vector examples. A vector is often drawn as an arrow whose length represents magnitude and whose orientation represents direction. In this algebra class we use free vectors, so translating an arrow without rotating or changing its length preserves the vector. Equal free vectors have identical components in the same coordinate system. Opposite vectors have equal magnitude and reversed direction; adding one to its opposite gives the zero vector. The zero vector has magnitude zero and every component zero, but no unique direction or associated unit direction. Equal magnitudes alone do not make two vectors equal: eastward and northward displacements of the same length are different vectors. A position vector depends on the chosen origin, while a displacement between two fixed points is their difference. Keep the distinction between a vector and its nonnegative magnitude in notation and in calculations. A signed component can be negative without making the vector's magnitude negative."
      ]
    },
    {
      "title": "Resolve vectors into two and three dimensional components",
      "formula": "u=uₓi+uᵧj+u_zk; |u|=√(uₓ²+uᵧ²+u_z²)",
      "paragraphs": [
        "An orthonormal Cartesian basis has three mutually perpendicular unit vectors, conventionally called i, j and k. A space vector is written as its x component times i plus its y component times j plus its z component times k. A vector in the x y plane has z component zero and can be recorded using only its first two components. Its magnitude follows from the Pythagorean theorem: square the components, add and take the nonnegative root. The vector three, four, zero has length five, while two, negative one, two has length three. Components are signed scalar coefficients, so a negative y coefficient points opposite to the positive y basis direction. The magnitude formula assumes perpendicular unit axes; it cannot be copied unchanged to an arbitrary nonorthogonal basis. Vectors are equal precisely when corresponding components in the same basis are equal. Write a zero component explicitly when it helps avoid confusing a plane vector with a different space vector. A point's coordinate triple and a vector's component triple may use the same numbers, but their geometric roles should still be identified."
      ]
    },
    {
      "title": "Add vectors using triangle and parallelogram laws",
      "formula": "u+v=(uₓ+vₓ,uᵧ+vᵧ,u_z+v_z)",
      "paragraphs": [
        "Vector addition describes a combined displacement. In the triangle construction, translate the second vector so its tail starts at the head of the first; the resultant runs from the first tail to the final head. In the parallelogram construction, place both tails together and use the diagonal from that common tail. These two constructions give the same vector. Algebraically, add corresponding components. For u equal to three, zero, zero and v equal to zero, four, zero, the sum is three, four, zero, whose magnitude is five. Adding the two magnitudes would instead give seven, which is not the resultant length because the directions differ. Vector addition is commutative and associative, so the order and grouping of a sum do not change its result. The zero vector is its identity. For a closed polygon of successive displacements returning to its start, the vector sum is zero even though the total distance travelled can be positive. The resultant magnitude lies between the absolute difference and the sum of the two input magnitudes. The endpoint cases correspond to collinear directions."
      ]
    },
    {
      "title": "Subtract vectors and keep component signs",
      "formula": "u−v=u+(−v)",
      "paragraphs": [
        "Subtraction means adding the opposite vector. If u is two, negative one, three and v is negative one, four, one, their sum is one, three, four. Their difference u minus v is three, negative five, two. Each subtraction acts on the entire corresponding component, so subtracting negative one adds one. Reversing the order gives v minus u equal to negative three, five, negative two, the opposite of the first difference. Subtraction is therefore not commutative. If u and v are drawn from a common tail, u minus v points from the head of v to the head of u. This picture helps verify the order of a displacement calculation. The magnitude of a difference is unchanged when its sign is reversed, even though the vector itself changes direction. The identity u minus u equal to the zero vector holds component by component. Keep brackets around a vector being subtracted or multiplied by a negative scalar so every component receives the sign. A component check is often the quickest way to catch an arrow drawn in the wrong direction."
      ]
    },
    {
      "title": "Scale vectors and construct unit vectors",
      "formula": "|λu|=|λ||u|; û=u/|u| for u≠0",
      "paragraphs": [
        "Multiplying a vector by a real scalar multiplies each component by that scalar. Its magnitude is multiplied by the absolute value of the scalar. A positive scalar preserves direction, a negative scalar reverses it, and zero gives the zero vector. For u equal to two, negative one, two, the length is three. Multiplication by negative two gives negative four, two, negative four, with magnitude six. To construct the unit vector in the direction of a nonzero u, divide the vector by its positive magnitude. Here the answer is two thirds, negative one third, two thirds. Its squared component sum is one and it has the same orientation as u. The opposite unit vector is its negative. A requested vector of length L in the direction of u is L times this unit vector, for nonnegative L. Normalizing the zero vector is undefined because its length is zero and it has no unique direction. Scalar multiplication distributes over vector sums, and vector addition distributes over sums of scalar coefficients. These laws make component calculations consistent with the geometric scaling of arrows."
      ]
    },
    {
      "title": "Use position vectors, displacements and section points",
      "formula": "AB=b−a; AP:PB=m:n ⇒ p=(na+mb)/(m+n)",
      "paragraphs": [
        "With a chosen origin, let a and b be the position vectors of points A and B. The displacement from A to B is b minus a, not their sum. For A at one, negative one, two and B at four, five, negative one, the displacement is three, six, negative three. Changing the origin changes both position vectors by the same translation, so their difference remains unchanged. Position vectors also express the internal section formula. If A P to P B is m to n with positive m and n, the position of P is n a plus m b divided by m plus n. For ratio one to two, this gives two a plus b divided by three, or P at two, one, one in this example. The displacement A P is one third of A B, so its length is half of P B as required. Equal weights give the midpoint, five halves, two, one half. The same vector reasoning works in two and three dimensions. Verify the ratio and collinearity together; a point with a matching distance ratio alone need not lie on the endpoint line."
      ]
    },
    {
      "title": "Solve linear combinations and recognize collinearity",
      "formula": "αu+βv=w; nonzero parallel vectors are scalar multiples",
      "paragraphs": [
        "A linear combination scales vectors and adds the results. To express w equal to three, two as alpha times u equal to one, zero plus beta times v equal to one, one, compare components. The y equation gives beta equal to two, and the x equation then gives alpha equal to one. Since these two input vectors are nonparallel, the representation of every plane vector in their span is unique. If the input vectors are parallel, there may be no representation of a particular target or multiple representations, so do not assume uniqueness without checking directions. Two nonzero vectors are parallel when one is a scalar multiple of the other. Thus two, negative one, two and negative four, two, negative four are parallel with opposite orientation. Collinearity of points A, B and C is tested using the displacements A B and A C, rather than their position vectors alone. The zero vector is algebraically a multiple of every vector but has no unique direction. Handle that case explicitly when a question speaks about an angle or a parallel direction."
      ]
    },
    {
      "title": "Calculate scalar products and the angle between vectors",
      "formula": "u·v=uₓvₓ+uᵧvᵧ+u_zv_z=|u||v|cosθ",
      "paragraphs": [
        "The scalar product, or dot product, multiplies corresponding components and adds them to give a scalar. For nonzero vectors it also equals the product of their magnitudes times cosine of their angle, where the vector angle ranges from zero to pi. The vectors one, one, zero and one, negative one, zero have dot product zero and are perpendicular. For one, zero, zero and negative one, one, zero, the dot product is negative one and the product of lengths is square root of two. Their cosine is negative one over square root of two, giving angle three pi over four. Keep the sign when finding a vector angle. Taking an absolute value would instead give the smaller angle between the unoriented supporting lines, a different question. A positive dot product indicates an acute vector angle, a negative one an obtuse angle and zero a right angle, provided both vectors are nonzero. The dot product with the zero vector is zero but no vector angle with it is defined. Before using the angle formula, check both magnitudes are positive and the normalized result lies between negative one and one."
      ]
    },
    {
      "title": "Use dot product identities to find resultants",
      "formula": "|u±v|²=|u|²+|v|²±2u·v",
      "paragraphs": [
        "The dot product is commutative and distributes over addition. In particular, u dotted with itself equals its squared magnitude. Expanding the dot product of u plus v with itself gives the squared resultant length as magnitude u squared plus magnitude v squared plus twice u dot v. The difference formula has a minus sign before that last term. If the magnitudes are three and four and the vector angle is pi over three, the dot product is six. The sum has squared length thirty seven, while the difference has squared length thirteen. Their squared lengths add to fifty, twice the sum of nine and sixteen, illustrating the parallelogram law. Another expansion gives u plus v dotted with u minus v equal to magnitude u squared minus magnitude v squared because the mixed terms cancel. Equal length input vectors therefore produce perpendicular sum and difference when those two resulting vectors are both nonzero. If either result is zero, the dot identity still holds but a right angle is not defined. Expand first and then apply the relevant angle or magnitude condition, rather than treating dot products as ordinary products of lengths in every situation."
      ]
    },
    {
      "title": "Find scalar and vector projections",
      "formula": "compᵥu=(u·v)/|v|; projᵥu=((u·v)/|v|²)v, v≠0",
      "paragraphs": [
        "Projection separates the part of a vector along a chosen nonzero direction from the perpendicular remainder. The signed scalar projection of u on v is u dot v divided by magnitude v. The vector projection is u dot v divided by magnitude v squared, multiplied by v. For u equal to three, four, zero and v equal to one, zero, zero, the scalar projection is three and the projected vector is three, zero, zero. The remaining vector zero, four, zero is perpendicular to v. Reversing v reverses the sign of the scalar projection because the oriented measuring direction changes. The vector projection onto the same axis is unchanged because both its coefficient and the direction vector reverse. Thus a scalar projection, a projection length and a projected vector are related but different objects. The nonnegative projection length is the absolute value of the signed scalar projection. Projection onto the zero vector is undefined. Check a computed vector projection by verifying that it is parallel to v and that subtracting it from u leaves a vector with zero dot product with v."
      ]
    },
    {
      "title": "Compute vector products with the right hand orientation",
      "formula": "u×v=(uᵧv_z−u_zvᵧ,u_zvₓ−uₓv_z,uₓvᵧ−uᵧvₓ)",
      "paragraphs": [
        "The vector product, or cross product, of two space vectors is another vector perpendicular to both. Its direction follows the right hand rule in a right handed coordinate basis. The cyclic basis products i cross j equal k, j cross k equal i, and k cross i equal j are positive; reversing any order gives the negative. In components, the x component is u y times v z minus u z times v y. The y component is u z times v x minus u x times v z. The z component is u x times v y minus u y times v x. For u equal to one, two, three and v equal to two, negative one, one, these give five, five, negative five. Dotting the result with either original vector gives zero, checking perpendicularity. That check alone does not distinguish a vector from its negative, so also verify the chosen order and right hand sign. Unlike a dot product, a cross product has vector components rather than a single scalar value. Plane vectors can be embedded in three dimensions by adding zero z components before taking their cross product."
      ]
    },
    {
      "title": "Use cross product magnitude for parallelism and area",
      "formula": "|u×v|=|u||v|sinθ; triangle area=|u×v|/2",
      "paragraphs": [
        "The magnitude of the cross product equals the product of the input magnitudes times sine of their angle. Geometrically, this is the area of the parallelogram formed by the two vectors as adjacent sides. Half that magnitude is the corresponding triangle area. For three, zero, zero and zero, four, zero, the cross product is zero, zero, twelve, so the parallelogram area is twelve and the triangle area is six. A triangle from points A, B and C uses the two side displacements B minus A and C minus A, both starting at the same vertex. For A at one, zero, zero, B at three, zero, zero and C at one, three, zero, these side lengths are two and three at a right angle, giving triangle area three. A zero cross product for two nonzero vectors means the directions are parallel or opposite. If an input is zero, the product is also zero but its direction and angle need separate interpretation. Cross products distribute over vector sums and scalar multiples, but reversing the input order changes the sign. Area uses the magnitude, so it is nonnegative regardless of that orientation sign."
      ]
    },
    {
      "title": "Apply a scalar triple product to volume and coplanarity",
      "formula": "[u,v,w]=u·(v×w); volume=|[u,v,w]|",
      "paragraphs": [
        "A supporting application combines the two vector products into a scalar triple product. Write u dot the quantity v cross w. Its absolute value is the volume of the parallelepiped with edge vectors u, v and w. The sign records orientation, while geometric volume is nonnegative. With mutually perpendicular edges two, zero, zero; zero, three, zero; and zero, zero, four, the triple product is twenty four. The volume is twenty four cubic units, and the tetrahedron formed by those three edges from one vertex has one sixth of that volume, or four. A cyclic permutation of the three vectors preserves the triple product, while swapping two reverses its sign. A zero triple product means the three vectors are linearly dependent and lie in a common plane through their shared tail, including degenerate zero cases. To test four points for coplanarity, form three displacement vectors from one selected point rather than using three unrelated position vectors. These volume and coplanarity examples support the main scalar and vector product methods and the preceding 3D Geometry class. Retain brackets so the cross product is calculated before the final dot product."
      ]
    },
    {
      "title": "Choose the correct operation and verify parameter answers",
      "formula": "Vector equality → components; perpendicularity → dot; parallelism → cross",
      "paragraphs": [
        "A mixed vector question is easier when the required geometric condition determines the operation. Equality uses corresponding components. A magnitude uses the square root of a self dot product. Perpendicular nonzero vectors have dot product zero, while parallel nonzero vectors have proportional components or zero cross product. An area uses a cross product magnitude. For u equal to one, two, negative one and v equal to two, k, four, perpendicularity gives two plus two k minus four equal to zero, so k equals one. Substituting that value restores a zero dot product and both vectors remain nonzero. Do not solve a dot product equation for a parameter and forget to check a condition that excludes the zero vector. Similarly, cancelling a possibly zero component in a proportionality equation can remove valid cases. Keep track of the type of each result: a sum and a cross product are vectors, whereas a magnitude and a dot product are scalars. A diagram can suggest a direction or sign, but component verification establishes the numerical answer. Final checks should include the original condition, any normalization denominator and the units of a geometric length, area or volume."
      ]
    }
  ],
  "examples": [
    {
      "question": "Find the magnitude and unit direction of u=(2,−1,2).",
      "steps": [
        "Compute |u|²=4+1+4=9.",
        "The positive magnitude is three.",
        "Divide all components by three and check unit squared length."
      ],
      "answer": "|u|=3; û=(2/3,−1/3,2/3)."
    },
    {
      "question": "For u=(2,−1,3), v=(−1,4,1), find u+v and u−v.",
      "steps": [
        "Add corresponding components for the sum.",
        "Subtract whole components for the difference.",
        "Check that reversing the difference gives its negative."
      ],
      "answer": "u+v=(1,3,4), u−v=(3,−5,2)."
    },
    {
      "question": "Find the resultant of perpendicular vectors (3,0,0),(0,4,0).",
      "steps": [
        "The sum is (3,4,0).",
        "Its squared length is 3²+4²=25.",
        "The sum of lengths seven is travelled path length, not resultant magnitude."
      ],
      "answer": "Resultant (3,4,0), magnitude 5."
    },
    {
      "question": "For A=(1,−1,2), B=(4,5,−1), find AB and the internal 1:2 point.",
      "steps": [
        "AB=B−A=(3,6,−3).",
        "The section point is (2A+B)/3.",
        "AP=(1,2,−1) is one third of AB, giving AP:PB=1:2."
      ],
      "answer": "AB=(3,6,−3), P=(2,1,1)."
    },
    {
      "question": "Solve α(1,0)+β(1,1)=(3,2).",
      "steps": [
        "The y component gives β=2.",
        "The x component then gives α+2=3.",
        "Substitute both coefficients to check the target vector."
      ],
      "answer": "α=1, β=2."
    },
    {
      "question": "Find the vector angle between (1,0,0),(−1,1,0).",
      "steps": [
        "Their dot product is −1.",
        "The product of magnitudes is √2.",
        "The angle in [0,π] with cosine −1/√2 is 3π/4."
      ],
      "answer": "3π/4; the smaller angle of the supporting lines would be π/4."
    },
    {
      "question": "Given |u|=3, |v|=4, angle π/3, find sum and difference lengths.",
      "steps": [
        "The dot product is 3·4·(1/2)=6.",
        "Expand the squared sum and difference lengths.",
        "Take the nonnegative square roots of 37 and 13."
      ],
      "answer": "|u+v|=√37; |u−v|=√13."
    },
    {
      "question": "Project u=(3,4,0) onto v=(−1,0,0).",
      "steps": [
        "The signed scalar projection is (u·v)/|v|=−3.",
        "The vector projection is (u·v)v/|v|²=(3,0,0).",
        "The remainder (0,4,0) is perpendicular to v."
      ],
      "answer": "Scalar projection −3; vector projection (3,0,0)."
    },
    {
      "question": "Compute (1,2,3)×(2,−1,1) and check it.",
      "steps": [
        "Compute the components: 5,5,−5.",
        "Dotting with the first vector gives 5+10−15=0.",
        "Dotting with the second gives 10−5−5=0; retain the right hand order for its sign."
      ],
      "answer": "(5,5,−5), magnitude 5√3."
    },
    {
      "question": "Find the area of the triangle (1,0,0),(3,0,0),(1,3,0).",
      "steps": [
        "Use side displacements (2,0,0),(0,3,0) from the same vertex.",
        "Their cross product is (0,0,6).",
        "Take half its magnitude."
      ],
      "answer": "3 square units."
    },
    {
      "question": "Find the parallelepiped and tetrahedron volumes for edges (2,0,0),(0,3,0),(0,0,4).",
      "steps": [
        "The scalar triple product is 24.",
        "Its absolute value is the parallelepiped volume.",
        "Divide by six for the tetrahedron from the common vertex."
      ],
      "answer": "24 and 4 cubic units respectively."
    },
    {
      "question": "Choose k so (1,2,−1) and (2,k,4) are perpendicular.",
      "steps": [
        "Set their dot product 2+2k−4 to zero.",
        "Solve k=1.",
        "Both vectors remain nonzero; substituting gives dot product zero."
      ],
      "answer": "k=1."
    }
  ],
  "quiz": [
    {
      "question": "Which quantity is a vector?",
      "options": [
        "Mass",
        "Displacement",
        "Elapsed time",
        "Temperature"
      ],
      "answer": 1,
      "explanation": "Displacement requires both magnitude and direction, unlike the listed scalar quantities."
    },
    {
      "question": "The zero vector has:",
      "options": [
        "Magnitude one",
        "A unique direction along x",
        "Zero magnitude and no unique direction",
        "Three nonzero components"
      ],
      "answer": 2,
      "explanation": "All its components vanish, so there is no nonzero direction to normalize."
    },
    {
      "question": "The magnitude of (2,−1,2) is:",
      "options": [
        "5",
        "9",
        "√5",
        "3"
      ],
      "answer": 3,
      "explanation": "The squared component sum is 4+1+4=9, giving magnitude three."
    },
    {
      "question": "In an orthonormal Cartesian basis, k has components:",
      "options": [
        "(0,0,1)",
        "(1,0,0)",
        "(0,1,0)",
        "(1,1,1)"
      ],
      "answer": 0,
      "explanation": "The standard unit basis k points along the positive z axis and has length one."
    },
    {
      "question": "For u=(3,0,0), v=(0,4,0), the magnitude of u+v is:",
      "options": [
        "7",
        "5",
        "1",
        "12"
      ],
      "answer": 1,
      "explanation": "The sum is (3,4,0), so its magnitude is √25=5 rather than the sum of magnitudes."
    },
    {
      "question": "A closed polygon of successive displacements has resultant:",
      "options": [
        "Its perimeter",
        "A unit vector",
        "The zero vector",
        "Always a positive x vector"
      ],
      "answer": 2,
      "explanation": "Returning to the starting point makes the total vector displacement zero, even though travelled distance can be positive."
    },
    {
      "question": "For u=(2,−1,3), v=(−1,4,1), u−v equals:",
      "options": [
        "(1,3,4)",
        "(−3,5,−2)",
        "(3,3,2)",
        "(3,−5,2)"
      ],
      "answer": 3,
      "explanation": "Subtract each entire component: 2−(−1)=3, −1−4=−5, and 3−1=2."
    },
    {
      "question": "Reversing a vector difference gives:",
      "options": [
        "v−u=−(u−v)",
        "v−u=u−v for all vectors",
        "v−u=0 for all vectors",
        "v−u=u+v"
      ],
      "answer": 0,
      "explanation": "The difference reverses direction when the order changes; the two magnitudes remain equal."
    },
    {
      "question": "The unit vector in the direction of (2,−1,2) is:",
      "options": [
        "(2,−1,2)",
        "(2/3,−1/3,2/3)",
        "(2/9,−1/9,2/9)",
        "(−2/3,1/3,−2/3)"
      ],
      "answer": 1,
      "explanation": "Divide by the positive magnitude three to keep the same orientation and obtain unit length."
    },
    {
      "question": "The magnitude of −2(2,−1,2) is:",
      "options": [
        "−6",
        "3",
        "6",
        "12"
      ],
      "answer": 2,
      "explanation": "Scalar multiplication changes magnitude by the absolute scalar factor, here 2·3=6."
    },
    {
      "question": "For A=(1,−1,2), B=(4,5,−1), the displacement AB is:",
      "options": [
        "(5,4,1)",
        "(−3,−6,3)",
        "(3,4,−1)",
        "(3,6,−3)"
      ],
      "answer": 3,
      "explanation": "Use the endpoint position minus the starting position, component by component."
    },
    {
      "question": "The internal point with AP:PB=1:2 for those endpoints is:",
      "options": [
        "(2,1,1)",
        "(3,3,0)",
        "(5/2,2,1/2)",
        "(4,5,−1)"
      ],
      "answer": 0,
      "explanation": "The weighted position (2A+B)/3 is (2,1,1), one third of the way from A to B."
    },
    {
      "question": "If α(1,0)+β(1,1)=(3,2), then (α,β) is:",
      "options": [
        "(2,1)",
        "(1,2)",
        "(3,2)",
        "(1,3)"
      ],
      "answer": 1,
      "explanation": "The y equation gives β=2, and α+β=3 then gives α=1."
    },
    {
      "question": "The nonzero vectors (2,−1,2) and (−4,2,−4) are:",
      "options": [
        "Perpendicular",
        "Equal",
        "Parallel with opposite orientations",
        "Nonparallel in every case"
      ],
      "answer": 2,
      "explanation": "The second is −2 times the first, a common negative multiplier in every component."
    },
    {
      "question": "The dot product (1,1,0)·(1,−1,0) equals:",
      "options": [
        "2",
        "−2",
        "1",
        "0"
      ],
      "answer": 3,
      "explanation": "The component products sum to 1−1+0=0, and both vectors are nonzero."
    },
    {
      "question": "The vector angle between (1,0,0) and (−1,1,0) is:",
      "options": [
        "3π/4",
        "π/4",
        "π/2",
        "0"
      ],
      "answer": 0,
      "explanation": "The cosine is −1/√2; keep the negative sign for the oriented vector angle in [0,π]."
    },
    {
      "question": "If |u|=3, |v|=4 and their angle is π/3, then u·v is:",
      "options": [
        "12",
        "6",
        "0",
        "−6"
      ],
      "answer": 1,
      "explanation": "Multiply the magnitudes by the cosine of their angle: 3·4·cos(π/3)=12·(1/2)=6."
    },
    {
      "question": "For those vectors, (|u+v|,|u−v|) equals:",
      "options": [
        "(5,5)",
        "(7,1)",
        "(√37,√13)",
        "(√13,√37)"
      ],
      "answer": 2,
      "explanation": "The squared magnitudes are 9+16+12=37 and 9+16−12=13."
    },
    {
      "question": "The scalar projection of (3,4,0) onto (1,0,0) is:",
      "options": [
        "4",
        "5",
        "(3,0,0)",
        "3"
      ],
      "answer": 3,
      "explanation": "The signed scalar projection is the dot product three divided by the direction length one."
    },
    {
      "question": "The vector projection of (3,4,0) onto (−1,0,0) is:",
      "options": [
        "(3,0,0)",
        "(−3,0,0)",
        "−3",
        "(0,4,0)"
      ],
      "answer": 0,
      "explanation": "The projection coefficient and reversed direction both change sign, preserving the projected vector on the same axis."
    },
    {
      "question": "The basis cross product j×i is:",
      "options": [
        "k",
        "−k",
        "0",
        "i"
      ],
      "answer": 1,
      "explanation": "Reversing i×j=k reverses its sign; the cross product is not commutative."
    },
    {
      "question": "The cross product (1,2,3)×(2,−1,1) is:",
      "options": [
        "(−5,−5,5)",
        "(5,−5,−5)",
        "(5,5,−5)",
        "3"
      ],
      "answer": 2,
      "explanation": "The components are 2+3=5, 6−1=5 and −1−4=−5."
    },
    {
      "question": "Vectors (3,0,0) and (0,4,0) span a parallelogram of area:",
      "options": [
        "6",
        "7",
        "5",
        "12"
      ],
      "answer": 3,
      "explanation": "Their cross product has magnitude twelve, the full parallelogram area."
    },
    {
      "question": "The triangle with vertices (1,0,0),(3,0,0),(1,3,0) has area:",
      "options": [
        "3",
        "6",
        "12",
        "3/2"
      ],
      "answer": 0,
      "explanation": "The two sides from the first vertex have perpendicular lengths two and three, so the area is half their product."
    },
    {
      "question": "The parallelepiped with edges (2,0,0),(0,3,0),(0,0,4) has volume:",
      "options": [
        "4",
        "24",
        "12",
        "9"
      ],
      "answer": 1,
      "explanation": "The absolute scalar triple product is 2·3·4=24 cubic units."
    },
    {
      "question": "The tetrahedron formed by those three edges from one vertex has volume:",
      "options": [
        "24",
        "12",
        "4",
        "8"
      ],
      "answer": 2,
      "explanation": "A tetrahedron with three edge vectors from a shared vertex has one sixth of their parallelepiped volume."
    },
    {
      "question": "If (1,2,−1) is perpendicular to (2,k,4), k equals:",
      "options": [
        "−1",
        "2",
        "0",
        "1"
      ],
      "answer": 3,
      "explanation": "The dot equation is 2+2k−4=0, so k=1, with both vectors nonzero."
    },
    {
      "question": "For two nonzero vectors, parallelism is equivalent to:",
      "options": [
        "A zero cross product",
        "A zero dot product",
        "Equal magnitudes in every case",
        "A dot product of one"
      ],
      "answer": 0,
      "explanation": "The cross product magnitude is |u||v|sinθ, which vanishes at parallel or opposite directions."
    }
  ],
  "sources": [
    {
      "title": "NTA JEE Main 2026 Mathematics Unit 12",
      "url": "https://jeemain.nta.nic.in/document/syllabus-2026/"
    },
    {
      "title": "OpenStax Calculus: Vectors in the Plane",
      "url": "https://openstax.org/books/calculus-volume-3/pages/2-1-vectors-in-the-plane"
    },
    {
      "title": "OpenStax Calculus: The Dot Product",
      "url": "https://openstax.org/books/calculus-volume-3/pages/2-3-the-dot-product"
    },
    {
      "title": "OpenStax Calculus: The Cross Product",
      "url": "https://openstax.org/books/calculus-volume-3/pages/2-4-the-cross-product"
    }
  ]
};
