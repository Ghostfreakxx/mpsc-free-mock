import type { StudyLesson } from './course';
// Authored by scripts/create-trigonometry.mjs.
export const trigonometryLesson:StudyLesson = {
  "id": "trigonometry",
  "subject": "Mathematics",
  "unit": 14,
  "title": "Trigonometry: identities, equations and inverse functions",
  "summary": "Radian measure, trigonometric functions and identities, equations, amplitude and principal inverse-function domains, ranges and properties.",
  "prerequisites": "Functions, elementary algebra, square roots, coordinate pairs and interval notation.",
  "remaining": "Twelve-chapter recorded companion for Mathematics Unit 14 covering trigonometric functions, identities and principal inverse-function properties, with supporting equations and range applications. Further mixed equation, branch-restriction and timed practice remain. This is not exhaustive problem coverage or official PYQs.",
  "sections": [
    {
      "title": "Use radians and the unit circle to fix signs and exact values",
      "formula": "180°=π rad; unit-circle point=(cosθ,sinθ); tanθ=sinθ/cosθ",
      "paragraphs": [
        "An angle in radians is the length of its circular arc divided by the radius. A full turn is two pi radians, so one hundred eighty degrees equals pi radians. Multiply degrees by pi over one hundred eighty to convert them. One hundred fifty degrees is five pi over six. On the unit circle, the point at angle theta has horizontal coordinate cosine theta and vertical coordinate sine theta. Tangent is sine divided by cosine when cosine is nonzero. Secant is the reciprocal of cosine, cosecant the reciprocal of sine, and cotangent is cosine divided by sine where defined. The coordinates give quadrant signs without a separate memorized sign rule. At two pi over three, the reference angle is pi over three, but the point is in quadrant two. Its cosine is negative one half and its sine is square root of three over two. Useful reference values are sine pi over six equal to one half, sine pi over four equal to square root of two over two, and sine pi over three equal to square root of three over two. Cosine reverses that list by complementary angles. Use exact fractions and radicals until a numerical approximation is requested."
      ]
    },
    {
      "title": "Read trigonometric domains, ranges, periods and symmetries",
      "formula": "sin,cos: range [−1,1], period 2π; tan,cot: range ℝ, period π",
      "paragraphs": [
        "A graph helps separate a function's domain from its range. Sine and cosine accept every real angle and produce values from negative one to one inclusive. They repeat after two pi. Sine is odd, so sine of negative x is negative sine x; cosine is even, so cosine of negative x equals cosine x. Tangent repeats after pi and has every real number as an output, but it is undefined at pi over two plus an integer multiple of pi. Its graph has vertical asymptotes there. Cotangent also has period pi and all real outputs, with excluded inputs at integer multiples of pi. Secant shares cosine's excluded zeros and has period two pi. Cosecant shares sine's excluded zeros and also has period two pi. Their outputs have magnitude at least one, so neither can equal zero. For a scaled function sine of two x, the least positive period is pi. A nonzero vertical scale changes amplitude without changing that period. A horizontal shift moves the graph while preserving its basic range and period. State excluded input values whenever a denominator vanishes. An asymptote is a boundary of a graph branch, not an extra point where an infinite real output is assigned."
      ]
    },
    {
      "title": "Use fundamental identities without restoring excluded inputs",
      "formula": "sin²x+cos²x=1; 1+tan²x=sec²x; 1+cot²x=csc²x",
      "paragraphs": [
        "The unit circle has equation horizontal coordinate squared plus vertical coordinate squared equals one. Substituting cosine and sine gives sine squared x plus cosine squared x equal to one. Divide this identity by cosine squared x where cosine is nonzero to obtain one plus tangent squared x equal to secant squared x. Dividing by sine squared x instead gives one plus cotangent squared x equal to cosecant squared x. These identities retain the restrictions created by division. For example, one minus cosine squared x divided by sine x simplifies to sine x only when sine x is nonzero in the original expression. The simplified formula is defined at additional inputs, but those points do not automatically belong to the original expression. If sine x equals three fifths, cosine squared x equals sixteen twenty fifths. Cosine may be plus or minus four fifths; its sign needs a quadrant condition. If x is in quadrant two, cosine is negative four fifths. Squaring can determine a magnitude while losing sign information. To prove an identity, work on a common domain and transform one side using valid steps. A few numerical checks may disprove an incorrect identity, but they do not prove it for every permitted input."
      ]
    },
    {
      "title": "Apply compound-angle formulas with the correct signs",
      "formula": "sin(A±B)=sinA cosB±cosA sinB; cos(A±B)=cosA cosB∓sinA sinB",
      "paragraphs": [
        "Compound angle identities connect an angle sum or difference to familiar values. Sine of A plus B equals sine A cosine B plus cosine A sine B. For a difference, change the middle sign to minus. Cosine of A plus B equals cosine A cosine B minus sine A sine B; the difference formula uses plus instead. Keep this opposite sign pattern visible. To find sine fifteen degrees, write fifteen as forty five minus thirty. Substitution gives square root of six minus square root of two, all divided by four. Tangent of A plus B is the sum of tangent A and tangent B divided by one minus their product, where the component tangents and the final denominator are defined. For tangent fifteen degrees, use the difference formula with forty five and thirty. The result simplifies to two minus square root of three. If a component tangent is undefined, the sine and cosine sum formulas may still evaluate the angle, so a tangent formula is not a universal replacement at every input. Compound identities can be derived from unit circle rotations and then checked at zero. They do not say that sine of a sum is the sum of the two sines."
      ]
    },
    {
      "title": "Derive double, triple and half angle identities with quadrant signs",
      "formula": "sin2x=2sinx cosx; cos2x=1−2sin²x=2cos²x−1",
      "paragraphs": [
        "Set both angles equal in the compound identities. This gives sine two x equal to twice sine x cosine x, and cosine two x equal to cosine squared x minus sine squared x. Replacing one square using the fundamental identity gives one minus twice sine squared x or twice cosine squared x minus one. Repeated use of the compound formulas gives sine three x equal to three sine x minus four sine cubed x, and cosine three x equal to four cosine cubed x minus three cosine x. Half angle formulas follow by rearranging the double angle identities. Sine squared of x over two is one minus cosine x divided by two, and cosine squared of x over two is one plus cosine x divided by two. Taking square roots requires the sign from the quadrant of the half angle. If x equals four pi over three, its half is two pi over three, so the half angle cosine is negative one half, not positive one half. Tangent of x over two can be written as sine x divided by one plus cosine x where that denominator is nonzero. A rearranged formula may have a different exceptional set, so keep the conditions of the form actually used."
      ]
    },
    {
      "title": "Transform sums into products and products into sums",
      "formula": "sinA+sinB=2sin((A+B)/2)cos((A−B)/2)",
      "paragraphs": [
        "Compound angle formulas can be added or subtracted to transform sums into products. Set u as half the sum of A and B and v as half their difference. Then A equals u plus v and B equals u minus v. Adding their sine expansions gives sine A plus sine B equal to twice sine of their half sum times cosine of their half difference. Their cosine sum similarly becomes twice cosine of the half sum times cosine of the half difference. For products, twice sine A cosine B equals sine of A plus B plus sine of A minus B. Twice sine A sine B equals cosine of A minus B minus cosine of A plus B. Signs matter because changing the order of a sine difference reverses it. As an exact value example, sine seventy five degrees plus sine fifteen degrees becomes twice sine forty five degrees times cosine thirty degrees, giving square root of six divided by two. These forms are also useful for equations: a product equals zero when at least one of its factors is zero. Before dividing out a factor, consider whether it can vanish and supply a separate solution family."
      ]
    },
    {
      "title": "Solve trigonometric equations without dividing away solutions",
      "formula": "sinx=sinα ⇒ x=α+2kπ or π−α+2kπ; k∈ℤ",
      "paragraphs": [
        "A trigonometric equation generally has periodic families of solutions. Sine x equals sine alpha when x is alpha plus an integer multiple of two pi, or pi minus alpha plus an integer multiple of two pi. Cosine x equals cosine alpha when x is plus or minus alpha plus an integer multiple of two pi. Tangent x equals tangent alpha when x is alpha plus an integer multiple of pi, provided the values are defined. Now solve sine two x equals sine x on the interval from zero inclusive to two pi exclusive. The double angle identity gives sine x times two cosine x minus one equal to zero. Keep both factors. Sine x equal to zero supplies zero and pi in this interval. Cosine x equal to one half supplies pi over three and five pi over three. There are four distinct solutions. Dividing by sine x at the start would lose zero and pi. Sort the final list and remove duplicates that arise when periodic families coincide. If a transformation involved squaring or a denominator, substitute the candidates into the original equation. Interval endpoints must be checked according to whether they are included, rather than copied from a memorized cycle."
      ]
    },
    {
      "title": "Find ranges of a sine-cosine combination by its amplitude",
      "formula": "a sinx+b cosx=R sin(x+φ), R=√(a²+b²)",
      "paragraphs": [
        "A linear combination of sine and cosine can be written as one shifted sine. Let R equal the square root of a squared plus b squared. If R is positive, choose an angle phi whose cosine is a over R and whose sine is b over R. Expanding R sine of x plus phi gives a sine x plus b cosine x. The quadrant of phi must match both ratios, not just a tangent quotient. Since sine ranges from negative one to one over all real inputs, the combination has range negative R to R, with both extremes attained. For three sine x plus four cosine x, R equals five, so its maximum is five and minimum negative five. An independent bound follows by applying the vector dot product inequality to the coefficient vector and the unit circle vector. If both coefficients are zero, the expression is constantly zero and no phase angle is needed. A restricted input interval may prevent one of the extreme values from being attained, so the unrestricted range cannot always be copied to an interval problem. Distinguish this amplitude calculation from adding the separate maxima of sine and cosine, which may occur at different inputs."
      ]
    },
    {
      "title": "Define inverse sine, cosine and tangent by principal ranges",
      "formula": "arcsin:[−1,1]→[−π/2,π/2]; arccos:[−1,1]→[0,π]; arctan:ℝ→(−π/2,π/2)",
      "paragraphs": [
        "Sine, cosine and tangent repeat their values, so each needs an appropriate restriction before an inverse function is defined. We use arcsine with outputs from negative pi over two to pi over two, including both endpoints. Arccosine returns an angle from zero to pi inclusive. Arctangent returns an angle strictly between negative pi over two and pi over two. Arcsine and arccosine accept real inputs only from negative one to one, while arctangent accepts every real input. The notation sine inverse means arcsine here, not the reciprocal cosecant. Sine of arcsine x equals x throughout the inverse domain. Reversing the composition needs care: arcsine of sine theta equals theta only when theta is already in the principal sine interval. For theta equal to five pi over six, sine theta is one half, so arcsine returns pi over six instead. Arctangent of tangent three pi over four returns negative pi over four, the principal angle with tangent negative one. Arccosine of cosine negative pi over three returns positive pi over three. Find the function value first, then select the unique angle in the declared principal range."
      ]
    },
    {
      "title": "State the inverse cotangent, secant and cosecant conventions",
      "formula": "arccot:ℝ→(0,π); arcsec:|x|≥1→[0,π]∖{π/2}; arccsc:|x|≥1→[−π/2,π/2]∖{0}",
      "paragraphs": [
        "The remaining inverse functions also need explicit principal branches. In this class, arccotangent accepts every real number and returns an angle strictly between zero and pi. Arcsecant accepts inputs with absolute value at least one and returns an angle from zero to pi, excluding pi over two. Arccosecant has the same input restriction and returns an angle from negative pi over two to pi over two, excluding zero. Both endpoints of that latter interval remain included. Some references choose different conventions, so retain these declarations when applying identities. For arccotangent of negative one, the required angle lies in quadrant two and equals three pi over four. For arcsecant of negative two, solve cosine theta equal to negative one half in the arcsecant range, giving two pi over three. For arccosecant of negative two, solve sine theta equal to negative one half in its chosen range, giving negative pi over six. Secant and cosecant cannot have magnitudes below one, which explains their inverse domains. Check a proposed answer by applying the original function and checking the principal range. A correct ratio at an angle outside that range is not the chosen inverse value."
      ]
    },
    {
      "title": "Use inverse identities with their real domains",
      "formula": "arcsinx+arccosx=π/2 for |x|≤1; arctanx+arccotx=π/2 for x∈ℝ under our convention",
      "paragraphs": [
        "Inverse identities come from both function values and branch restrictions. For x between negative one and one inclusive, arcsine x plus arccosine x equals pi over two. If theta is arcsine x, its complement pi over two minus theta lies in the arccosine range and has cosine x. This proves the identity across the whole domain. Under our arccotangent convention, arctangent x plus arccotangent x also equals pi over two for every real x. The complement of an arctangent output lies strictly between zero and pi. Arcsine is odd, so arcsine of negative x equals negative arcsine x. Arccosine instead satisfies arccosine of negative x equal to pi minus arccosine x. For input magnitude at least one, arcsecant x equals arccosine of one over x, and arccosecant x equals arcsine of one over x under the stated branches. As an equation example, set arcsine x equal to twice arccosine x. Combining it with the complementary sum gives arccosine x equal to pi over six and x equal to square root of three over two. Substitute back and check that x belongs to both inverse domains."
      ]
    },
    {
      "title": "Correct the branch in inverse tangent addition",
      "formula": "tan(A+B)=(u+v)/(1−uv), A=arctanu, B=arctanv; recover A+B in its actual range",
      "paragraphs": [
        "The tangent addition formula does not by itself determine the value of an inverse tangent sum. Let A be arctangent u and B be arctangent v. When one minus u v is nonzero, tangent of A plus B is u plus v divided by one minus u v. Applying the principal arctangent to that quotient may shift the actual sum by pi. For u equal to one half and v equal to one third, both angles are positive and their sum is less than pi over two. The quotient equals one, so the sum is pi over four. For u equal to two and v equal to three, both angles lie between pi over four and pi over two. Their sum is between pi over two and pi. The tangent quotient is negative one, so the sum is three pi over four, not negative pi over four. If u and v are both one, the sum is pi over two; the zero denominator warns that the tangent quotient is undefined there. Use the original angles to handle that case. In every inverse identity calculation, retain the real input domains and determine the output interval before choosing the final angle."
      ]
    }
  ],
  "examples": [
    {
      "question": "Convert 150° to radians and evaluate sin(2π/3), cos(2π/3).",
      "steps": [
        "150×π/180=5π/6.",
        "The angle 2π/3 is in quadrant II with reference angle π/3.",
        "Use the reference values and quadrant signs."
      ],
      "answer": "150°=5π/6; sin(2π/3)=√3/2; cos(2π/3)=−1/2."
    },
    {
      "question": "Find exact values of sin15° and tan15°.",
      "steps": [
        "Write 15°=45°−30°.",
        "Sine difference gives (√6−√2)/4.",
        "Tangent difference gives (1−1/√3)/(1+1/√3)=2−√3."
      ],
      "answer": "sin15°=(√6−√2)/4 and tan15°=2−√3."
    },
    {
      "question": "If sinx=3/5 in quadrant I, evaluate sin2x and cos2x; separately find cos(x/2) for x=4π/3.",
      "steps": [
        "Quadrant I gives cosx=4/5.",
        "sin2x=2(3/5)(4/5)=24/25 and cos2x=1−2(9/25)=7/25.",
        "For the separate half angle, x/2=2π/3 is in quadrant II, so cosine is −1/2."
      ],
      "answer": "24/25, 7/25; separate half-angle answer −1/2."
    },
    {
      "question": "Evaluate sin75°+sin15° using a transformation.",
      "steps": [
        "Half-sum angle=(75°+15°)/2=45°.",
        "Half-difference angle=(75°−15°)/2=30°.",
        "The sum is 2sin45°cos30°=√6/2."
      ],
      "answer": "√6/2."
    },
    {
      "question": "Solve sin2x=sinx on [0,2π).",
      "steps": [
        "Replace sin2x by 2sinxcosx and factor sinx(2cosx−1)=0.",
        "sinx=0 gives 0 and π; cosx=1/2 gives π/3 and 5π/3.",
        "Keep all four distinct values and exclude 2π. Do not divide by sinx."
      ],
      "answer": "x∈{0,π/3,π,5π/3}."
    },
    {
      "question": "Find the full real range of 3sinx+4cosx.",
      "steps": [
        "Set R=√(3²+4²)=5.",
        "Choose cosφ=3/5 and sinφ=4/5, giving 5sin(x+φ).",
        "As x varies over ℝ, the sine attains both −1 and 1."
      ],
      "answer": "The range is [−5,5]."
    },
    {
      "question": "Evaluate arcsin(sin5π/6), arccos(cos(−π/3)) and arctan(tan3π/4).",
      "steps": [
        "Evaluate the inner functions: 1/2, 1/2 and −1 respectively.",
        "Use principal ranges [−π/2,π/2], [0,π] and (−π/2,π/2).",
        "Select the unique angle in each range with the stated value."
      ],
      "answer": "π/6, π/3 and −π/4."
    },
    {
      "question": "Using the declared branches, evaluate arccot(−1), arcsec(−2), arccsc(−2).",
      "steps": [
        "Cotangent −1 in (0,π) selects quadrant II: 3π/4.",
        "Secant −2 means cosine −1/2 in [0,π]∖{π/2}: 2π/3.",
        "Cosecant −2 means sine −1/2 in [−π/2,π/2]∖{0}: −π/6."
      ],
      "answer": "3π/4, 2π/3 and −π/6."
    },
    {
      "question": "Solve arcsinx=2arccosx over the real domain.",
      "steps": [
        "Both inverse functions require x∈[−1,1].",
        "Let B=arccosx. Then arcsinx=π/2−B, so π/2−B=2B and B=π/6.",
        "Thus x=√3/2; direct inverse values π/3 and π/6 verify the equation."
      ],
      "answer": "x=√3/2."
    },
    {
      "question": "Evaluate arctan(1/2)+arctan(1/3) and arctan2+arctan3.",
      "steps": [
        "For the first sum, both angles are positive and their tangent quotient is 1. The denominator is positive, so the sum lies in (0,π/2) and equals π/4.",
        "For the second, both angles exceed π/4 and the tangent quotient is (2+3)/(1−6)=−1.",
        "The actual sum lies in (π/2,π), so choose 3π/4, not the principal arctangent −π/4."
      ],
      "answer": "π/4 and 3π/4 respectively."
    }
  ],
  "quiz": [
    {
      "question": "The radian measure of 150° is:",
      "options": [
        "5π/3",
        "5π/6",
        "3π/5",
        "π/6"
      ],
      "answer": 1,
      "explanation": "Convert by multiplying 150 by π/180. The result is 5π/6, which lies in quadrant II."
    },
    {
      "question": "The value of cos(2π/3) is:",
      "options": [
        "1/2",
        "√3/2",
        "−1/2",
        "−√3/2"
      ],
      "answer": 2,
      "explanation": "The reference angle is π/3 and the original angle lies in quadrant II, where cosine is negative. Thus the value is −1/2."
    },
    {
      "question": "The least positive period of tanx is:",
      "options": [
        "2π",
        "π/2",
        "4π",
        "π"
      ],
      "answer": 3,
      "explanation": "Both sine and cosine change sign after a shift of π, leaving their ratio unchanged. The least positive period of tangent is π."
    },
    {
      "question": "The real domain of secx excludes angles satisfying:",
      "options": [
        "cosx=0",
        "sinx=0",
        "cosx=1",
        "sinx=1/2"
      ],
      "answer": 0,
      "explanation": "Secant is 1/cosx, so it is undefined exactly where cosine vanishes: x=π/2+kπ for integers k."
    },
    {
      "question": "For every real x, sin²x+cos²x equals:",
      "options": [
        "0",
        "1",
        "2",
        "sin2x"
      ],
      "answer": 1,
      "explanation": "The unit-circle coordinates satisfy x-coordinate squared plus y-coordinate squared equal to 1, yielding the fundamental identity."
    },
    {
      "question": "On its original domain sinx≠0, (1−cos²x)/sinx simplifies to:",
      "options": [
        "cosx",
        "tanx",
        "sinx",
        "1"
      ],
      "answer": 2,
      "explanation": "Replace 1−cos²x by sin²x and cancel one sine factor. The original exclusion sinx≠0 still applies after simplification."
    },
    {
      "question": "The exact value of sin15° is:",
      "options": [
        "(√6+√2)/4",
        "(√3−1)/2",
        "(√6−√2)/2",
        "(√6−√2)/4"
      ],
      "answer": 3,
      "explanation": "Use sin(45°−30°)=sin45°cos30°−cos45°sin30°. The exact result is (√6−√2)/4."
    },
    {
      "question": "The exact value of tan15° is:",
      "options": [
        "2−√3",
        "2+√3",
        "√3−1",
        "1/√3"
      ],
      "answer": 0,
      "explanation": "The tangent difference formula with 45° and 30° gives (1−1/√3)/(1+1/√3)=2−√3 after rationalization."
    },
    {
      "question": "A valid form of cos2x is:",
      "options": [
        "1−sin²x",
        "1−2sin²x",
        "2sin²x−1",
        "2sinxcosx"
      ],
      "answer": 1,
      "explanation": "The double angle identity cos2x=cos²x−sin²x becomes 1−2sin²x after replacing cos²x by 1−sin²x."
    },
    {
      "question": "If x=4π/3, the value of cos(x/2) is:",
      "options": [
        "1/2",
        "√3/2",
        "−1/2",
        "−√3/2"
      ],
      "answer": 2,
      "explanation": "The half angle is 2π/3, in quadrant II. Its cosine is −1/2; the positive square-root branch would be incorrect."
    },
    {
      "question": "The product 2sinAcosB equals:",
      "options": [
        "sin(A+B)−sin(A−B)",
        "cos(A−B)−cos(A+B)",
        "cos(A+B)+cos(A−B)",
        "sin(A+B)+sin(A−B)"
      ],
      "answer": 3,
      "explanation": "Add the sine expansions for A+B and A−B. Their cosine-A sine-B terms cancel, leaving 2sinAcosB."
    },
    {
      "question": "The exact value of sin75°+sin15° is:",
      "options": [
        "√6/2",
        "√2/2",
        "√3/2",
        "√6/4"
      ],
      "answer": 0,
      "explanation": "Use the sum-to-product identity: 2sin45°cos30°=2(√2/2)(√3/2)=√6/2."
    },
    {
      "question": "The number of solutions of sin2x=sinx in [0,2π) is:",
      "options": [
        "3",
        "4",
        "5",
        "2"
      ],
      "answer": 1,
      "explanation": "Factoring gives sinx(2cosx−1)=0. The solutions are 0,π/3,π,5π/3; the excluded endpoint 2π is not added."
    },
    {
      "question": "The general real solution of tanx=1 is:",
      "options": [
        "x=π/4+2kπ only",
        "x=3π/4+kπ",
        "x=π/4+kπ, k∈ℤ",
        "x=kπ"
      ],
      "answer": 2,
      "explanation": "Tangent equals 1 at π/4 and repeats with period π. Thus x=π/4+kπ captures every real solution."
    },
    {
      "question": "For unrestricted real x, the maximum of 3sinx+4cosx is:",
      "options": [
        "7",
        "4",
        "3",
        "5"
      ],
      "answer": 3,
      "explanation": "Write the expression as Rsin(x+φ) with R=√(3²+4²)=5. The upper bound 5 is attained for an appropriate real x."
    },
    {
      "question": "For unrestricted real x, the minimum of 3sinx+4cosx is:",
      "options": [
        "−5",
        "−7",
        "−4",
        "0"
      ],
      "answer": 0,
      "explanation": "The shifted-sine representation has amplitude 5 and range [−5,5]. Adding separate minima would ignore that sine and cosine are linked."
    },
    {
      "question": "Using principal inverse values, arcsin(sin(5π/6)) equals:",
      "options": [
        "5π/6",
        "π/6",
        "−π/6",
        "π/3"
      ],
      "answer": 1,
      "explanation": "The inner sine is 1/2. Arcsine must return the angle π/6 in [−π/2,π/2], rather than the original angle outside that interval."
    },
    {
      "question": "Using principal inverse values, arctan(tan(3π/4)) equals:",
      "options": [
        "3π/4",
        "π/4",
        "−π/4",
        "−3π/4"
      ],
      "answer": 2,
      "explanation": "The tangent is −1 and the principal arctangent range is (−π/2,π/2). Its selected angle is −π/4."
    },
    {
      "question": "With arccotangent range (0,π), arccot(−1) equals:",
      "options": [
        "−π/4",
        "π/4",
        "π/2",
        "3π/4"
      ],
      "answer": 3,
      "explanation": "Cotangent is −1 at 3π/4, which lies in the declared principal interval. The angle −π/4 is outside that interval."
    },
    {
      "question": "With arcsecant range [0,π] excluding π/2, arcsec(−2) equals:",
      "options": [
        "2π/3",
        "π/3",
        "−2π/3",
        "5π/3"
      ],
      "answer": 0,
      "explanation": "Solve cosθ=−1/2 and select the angle in the declared arcsecant range. This gives θ=2π/3."
    },
    {
      "question": "For x∈[−1,1], arcsinx+arccosx equals:",
      "options": [
        "π",
        "π/2",
        "0",
        "x"
      ],
      "answer": 1,
      "explanation": "The two principal angles are complementary throughout the common real domain, including its endpoints, so their sum is π/2."
    },
    {
      "question": "With arccosecant range [−π/2,π/2] excluding 0, arccsc(−2) equals:",
      "options": [
        "π/6",
        "−5π/6",
        "−π/6",
        "5π/6"
      ],
      "answer": 2,
      "explanation": "The sine of the selected angle must be −1/2. The angle −π/6 lies in the declared range and has cosecant −2."
    },
    {
      "question": "Using principal arctangents, arctan2+arctan3 equals:",
      "options": [
        "−π/4",
        "π/4",
        "π/2",
        "3π/4"
      ],
      "answer": 3,
      "explanation": "Both input angles are greater than π/4, so their sum lies in (π/2,π). Its tangent is −1, selecting 3π/4 rather than −π/4."
    },
    {
      "question": "The real solution of arcsinx=2arccosx is:",
      "options": [
        "√3/2",
        "1/2",
        "−√3/2",
        "0"
      ],
      "answer": 0,
      "explanation": "Combining with arcsinx+arccosx=π/2 gives arccosx=π/6 and arcsinx=π/3. Hence x=cos(π/6)=√3/2, within both domains."
    }
  ],
  "sources": [
    {
      "title": "NTA JEE Main 2026 Mathematics Unit 14",
      "url": "https://jeemain.nta.nic.in/document/syllabus-2026/"
    },
    {
      "title": "OpenStax: Inverse Trigonometric Functions",
      "url": "https://openstax.org/books/algebra-and-trigonometry-2e/pages/8-3-inverse-trigonometric-functions"
    },
    {
      "title": "NCERT Mathematics XII: Inverse Trigonometric Functions",
      "url": "https://ncert.nic.in/textbook/pdf/lemh102.pdf"
    }
  ]
};
