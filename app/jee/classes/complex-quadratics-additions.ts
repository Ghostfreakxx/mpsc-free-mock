// Authored by scripts/create-complex-quadratics-recording.mjs.
export const complexQuadraticsAdditions = {
  "sections": [
    {
      "title": "Treat complex numbers as ordered pairs and algebraic quantities",
      "formula": "z=a+ib ↔ (a,b); i²=−1; iⁿ repeats with period 4",
      "paragraphs": [
        "A complex number can be represented as an ordered pair of real numbers a, b, or written a plus i b, where i squared equals negative one. Its real part is a and its imaginary part is b, not i b. Equality means both corresponding real components agree. Addition and subtraction operate component by component. Multiplication follows distribution together with i squared equals negative one. For example, two plus three i times one minus i equals two minus two i plus three i minus three i squared. Replacing i squared by negative one gives five plus i. Powers of i repeat every four steps: i, negative one, negative i, one. Divide an integer exponent by four and use its remainder. Twenty three leaves remainder three, so i to the power twenty three is negative i. For negative exponents, use reciprocals or extend the same four step cycle. A complex number is real exactly when its imaginary part is zero, and is purely imaginary with nonzero imaginary component when its real part is zero. Do not apply ordinary greater than comparisons to arbitrary complex numbers. Algebraic equality and modulus comparisons are meaningful, but there is no usual real ordering compatible with complex arithmetic."
      ]
    },
    {
      "title": "Use conjugates for modulus and division",
      "formula": "z z̄ = |z|² = a²+b²; 1/z = z̄/|z|² for z≠0",
      "paragraphs": [
        "The conjugate of a plus i b is a minus i b. Their product is a squared plus b squared, a nonnegative real number. Its square root is the modulus, the distance of the point from the origin. Thus three plus four i has modulus five and conjugate three minus four i. Conjugation respects addition and multiplication, while the modulus of a product equals the product of the moduli. To divide by a nonzero complex number, multiply numerator and denominator by the conjugate of the denominator. For three plus four i divided by one minus two i, multiply by one plus two i. The numerator becomes negative five plus ten i, and the denominator becomes five. The quotient is negative one plus two i. Check by multiplying that quotient by one minus two i to recover three plus four i. The reciprocal formula uses the conjugate divided by modulus squared, not divided by the modulus alone. If the denominator is zero, the formula is unavailable. Also, the modulus of a sum is at most the sum of the moduli, not generally equal to it. For one plus i and one minus i, the sum has modulus two, while the individual moduli add to two square root of two."
      ]
    },
    {
      "title": "Read the Argand plane and distance loci",
      "formula": "|z−z₀| = distance between z and z₀",
      "paragraphs": [
        "In the Argand plane, a complex number a plus i b is the point with horizontal coordinate a and vertical coordinate b. This connects algebra to geometry. The modulus of z minus a fixed complex number z zero is the ordinary distance between their points. Consequently, modulus of z minus two equals three describes a circle centred at two, zero with radius three. It does not mean that the modulus of z is one. Squaring the nonnegative distance equation gives x minus two squared plus y squared equals nine when z is x plus i y. Equal distances from two fixed points describe their perpendicular bisector. For example, modulus of z minus one equals modulus of z plus one compares distances from one, zero and negative one, zero. Squaring and simplifying gives x equal to zero, the imaginary axis. Conjugation reflects a point across the real axis, while negation reflects it through the origin. Addition combines coordinate displacements. A modulus cannot be negative, so an equation asking a modulus to equal a negative real number has no solution. Keep the complex variable and its real coordinate components distinct while translating a geometric condition into algebra."
      ]
    },
    {
      "title": "Choose arguments by quadrant and use polar form",
      "formula": "z=r(cosθ+i sinθ), r>0; principal argument chosen in (−π,π]",
      "paragraphs": [
        "For a nonzero complex number, an argument is the angle its position vector makes with the positive real axis. Angles differing by an integer multiple of two pi describe the same direction. We use the principal interval greater than negative pi and at most pi in this class. Always state the convention because another text may use a different endpoint convention. The point negative one plus i lies in quadrant two, has modulus square root of two, and principal argument three pi over four. Using only inverse tangent of imaginary part divided by real part would suggest negative pi over four and miss the quadrant. In polar form, write z as r times cosine theta plus i sine theta, with positive r equal to the modulus. Multiplication multiplies moduli and adds arguments; division by a nonzero number divides moduli and subtracts arguments. Reduce the angle to the chosen principal interval only after the operation. For example, i times i has modulus one and angle pi, giving negative one. The zero complex number has modulus zero but no defined direction, so its argument is undefined. Argument is also not additive across sums: determine the sum's coordinates before assigning its direction."
      ]
    },
    {
      "title": "Handle common roots and changes in degree",
      "formula": "Subtract equations to obtain a necessary common-root condition; substitute back",
      "paragraphs": [
        "Two equations sharing a root must both vanish at the same input. Subtracting them can simplify the search, but any candidate must still satisfy the originals. Compare x squared minus three x plus two equals zero and x squared minus k x plus two equals zero. Subtracting gives three minus k times x equals zero. The first polynomial has roots one and two, so the common root cannot be zero. Therefore k equals three. At that value the two polynomials coincide and share both roots. If you divided by x without first excluding zero, the reasoning would have missed a possible case in another problem. Degree changes deserve the same care. For k minus one times x squared plus two x plus one equals zero, k equal to one gives the linear equation two x plus one equals zero, whose solution is negative one half. For k not equal to one the equation is quadratic, and its discriminant is four times two minus k. At k equal to two there is a repeated root negative one; for k greater than two there are no real roots. Parameter conclusions must retain the exceptional linear case instead of silently dividing by zero."
      ]
    },
    {
      "title": "Locate roots relative to a boundary and solve sign intervals",
      "formula": "Both roots of x²−6x+k=0 exceed 1 iff 5<k≤9",
      "paragraphs": [
        "A root location question needs more than a positive product. First ensure real roots, then combine their sum and product with the desired boundary. For x squared minus six x plus k equals zero, ask when both roots are strictly greater than one, allowing a repeated root. Set x equal to t plus one so the condition becomes both t roots positive. The transformed equation is t squared minus four t plus k minus five equals zero. Its root sum is four, already positive. For real roots with a positive sum, a positive product forces both to be positive; a negative product would put them on opposite sides of zero. Thus require k greater than five. Reality of the roots requires the original discriminant thirty six minus four k to be nonnegative, so k is at most nine. Combining gives k greater than five and at most nine. At k equal to five, one original root is exactly one and fails the strict condition. At k equal to nine, both roots equal three and qualify. Finally, for an upward opening quadratic with real roots two and three, the expression is nonpositive between those roots and positive outside. Mark endpoints according to whether equality is permitted."
      ]
    }
  ],
  "quiz": [
    {
      "question": "The value of i²³ is:",
      "options": [
        "i",
        "−i",
        "1",
        "−1"
      ],
      "answer": 1,
      "explanation": "The powers of i repeat with period four. Since 23 leaves remainder 3 when divided by 4, i²³=i³=−i."
    },
    {
      "question": "The quotient (3+4i)/(1−2i) is:",
      "options": [
        "1+2i",
        "−1−2i",
        "−1+2i",
        "3+4i"
      ],
      "answer": 2,
      "explanation": "Multiply by the denominator’s conjugate 1+2i. The numerator is −5+10i and denominator 5, giving −1+2i."
    },
    {
      "question": "For z=3+4i, the product zz̄ equals:",
      "options": [
        "5",
        "7",
        "−7",
        "25"
      ],
      "answer": 3,
      "explanation": "The product of a complex number and its conjugate is its modulus squared: 3²+4²=25, a nonnegative real number."
    },
    {
      "question": "Using principal arguments in (−π,π], Arg(−1+i) is:",
      "options": [
        "3π/4",
        "−π/4",
        "π/4",
        "−3π/4"
      ],
      "answer": 0,
      "explanation": "The point is in quadrant II with reference angle π/4. Its principal argument is therefore π−π/4=3π/4."
    },
    {
      "question": "The locus |z−2|=3 is:",
      "options": [
        "A line x=2",
        "A circle centred at (2,0) with radius 3",
        "A circle centred at (0,0) with radius 1",
        "An empty set"
      ],
      "answer": 1,
      "explanation": "The modulus |z−z₀| measures distance from the point z₀. Here z₀=2+0i, so a fixed distance 3 describes the stated circle."
    },
    {
      "question": "The argument of the zero complex number is:",
      "options": [
        "0",
        "π",
        "Undefined",
        "2π"
      ],
      "answer": 2,
      "explanation": "The zero vector has no direction. Although its modulus is zero, assigning it a unique argument is not defined."
    },
    {
      "question": "The roots of z²−2z+5=0 are:",
      "options": [
        "1±2",
        "−1±2i",
        "2±i",
        "1±2i"
      ],
      "answer": 3,
      "explanation": "The discriminant is 4−20=−16. The quadratic formula gives (2±4i)/2=1±2i, a conjugate pair."
    },
    {
      "question": "The two square roots of 3+4i are:",
      "options": [
        "±(2+i)",
        "2±i",
        "±(1+2i)",
        "3±4i"
      ],
      "answer": 0,
      "explanation": "Squaring 2+i gives 4+4i−1=3+4i. Its negative has the same square; the conjugate 2−i squares to 3−4i."
    },
    {
      "question": "For real k, x²−2kx+k+2=0 has real roots when:",
      "options": [
        "−1<k<2",
        "k≤−1 or k≥2",
        "k≥−1",
        "k≤2"
      ],
      "answer": 1,
      "explanation": "The discriminant is 4(k−2)(k+1). It is nonnegative outside the open interval (−1,2), including both repeated-root endpoints."
    },
    {
      "question": "If α,β are roots of 2x²−5x+2=0, α²+β² equals:",
      "options": [
        "25/4",
        "5/2",
        "17/4",
        "1"
      ],
      "answer": 2,
      "explanation": "Vieta gives S=5/2 and P=1. The sum of squares is S²−2P=25/4−2=17/4, including the cross-term correction."
    },
    {
      "question": "If the roots 2,3 are each increased by 1, their monic quadratic is:",
      "options": [
        "x²−5x+6=0",
        "x²+7x+12=0",
        "x²−6x+7=0",
        "x²−7x+12=0"
      ],
      "answer": 3,
      "explanation": "The new roots are 3 and 4, whose sum is 7 and product is 12. A monic equation is x²−Sx+P=0."
    },
    {
      "question": "The reciprocals of the roots of x²−5x+6=0 satisfy:",
      "options": [
        "6x²−5x+1=0",
        "x²−5x+6=0",
        "x²−6x+5=0",
        "6x²+5x+1=0"
      ],
      "answer": 0,
      "explanation": "The original roots 2 and 3 are nonzero. Their reciprocals have sum 5/6 and product 1/6; multiply the monic equation by 6."
    },
    {
      "question": "At k=1, the equation (k−1)x²+2x+1=0 has solution:",
      "options": [
        "No solution",
        "x=−1/2",
        "x=1/2",
        "A repeated root x=−1"
      ],
      "answer": 1,
      "explanation": "The squared term vanishes at k=1, leaving the linear equation 2x+1=0. The quadratic formula cannot be used with a zero leading coefficient."
    },
    {
      "question": "The equations x²−3x+2=0 and x²−kx+2=0 have a common root only when:",
      "options": [
        "k=0",
        "k=2",
        "k=3",
        "k=−3"
      ],
      "answer": 2,
      "explanation": "Subtracting gives (3−k)r=0 at a common root r. The first equation’s roots are 1 and 2, so r≠0 and k=3."
    },
    {
      "question": "Allowing repeated roots, both roots of x²−6x+k=0 are strictly greater than 1 when:",
      "options": [
        "k>5",
        "k≤9",
        "5≤k<9",
        "5<k≤9"
      ],
      "answer": 3,
      "explanation": "Shift x=t+1. The t-root sum is 4 and product k−5, requiring k>5; real roots require 36−4k≥0, hence k≤9."
    },
    {
      "question": "The real solution set of x²−5x+6≤0 is:",
      "options": [
        "[2,3]",
        "(−∞,2]∪[3,∞)",
        "(2,3)",
        "ℝ"
      ],
      "answer": 0,
      "explanation": "Factor as (x−2)(x−3). An upward opening quadratic is negative between its roots and zero at them, so both endpoints are included."
    }
  ],
  "examples": [
    {
      "question": "Calculate (3+4i)/(1−2i) and verify the quotient.",
      "steps": [
        "Multiply numerator and denominator by 1+2i.",
        "The numerator is 3+6i+4i+8i²=−5+10i, and denominator is 1+4=5.",
        "Divide by 5 to get −1+2i; multiplying by 1−2i returns 3+4i."
      ],
      "answer": "−1+2i."
    },
    {
      "question": "Find the modulus and principal argument of −1+i using (−π,π].",
      "steps": [
        "Modulus=√(1+1)=√2.",
        "The point is in quadrant II, with reference angle π/4.",
        "Choose 3π/4; −π/4 is in the wrong quadrant."
      ],
      "answer": "Modulus √2; principal argument 3π/4."
    },
    {
      "question": "Find both square roots of 3+4i.",
      "steps": [
        "Set (u+iv)²=3+4i, giving u²−v²=3 and 2uv=4.",
        "The choice u=2,v=1 satisfies both equations.",
        "Negating both components gives the second square root; check both by squaring."
      ],
      "answer": "2+i and −2−i."
    },
    {
      "question": "For which real k does x²−2kx+k+2=0 have real roots?",
      "steps": [
        "Its leading coefficient is always 1.",
        "D=4k²−4k−8=4(k−2)(k+1).",
        "D≥0 holds for k≤−1 or k≥2; both boundary values give repeated roots."
      ],
      "answer": "k∈(−∞,−1]∪[2,∞)."
    },
    {
      "question": "Starting with roots of x²−5x+6=0, form equations for shifted roots α+1,β+1 and reciprocals 1/α,1/β.",
      "steps": [
        "Original sum S=5 and product P=6, so neither root is zero.",
        "Shifted sum S+2=7 and product P+S+1=12.",
        "Reciprocal sum S/P=5/6 and product 1/P=1/6."
      ],
      "answer": "Shifted: x²−7x+12=0; reciprocals: 6x²−5x+1=0."
    },
    {
      "question": "Find k for which both roots of x²−6x+k=0 are strictly greater than 1; repeated roots are allowed.",
      "steps": [
        "Set x=t+1, obtaining t²−4t+(k−5)=0.",
        "For real roots, positive sum 4 and positive product k−5 force both t roots positive; require k>5.",
        "Reality also requires D=36−4k≥0. Combine with k>5; test k=5 and k=9 to check endpoint choices."
      ],
      "answer": "5<k≤9; at k=9 both original roots equal 3."
    }
  ],
  "sources": [
    {
      "title": "NTA JEE Main 2026 Mathematics Unit 2",
      "url": "https://jeemain.nta.nic.in/document/syllabus-2026/"
    },
    {
      "title": "NCERT Mathematics XI: Complex Numbers and Quadratic Equations",
      "url": "https://ncert.nic.in/textbook/pdf/kemh105.pdf"
    }
  ]
};
