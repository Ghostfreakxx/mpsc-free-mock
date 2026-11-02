import type { StudyLesson } from './course';
// Authored by scripts/create-differential-equations.mjs.
export const differentialEquationsLesson:StudyLesson = {
  "id": "differential-equations",
  "subject": "Mathematics",
  "unit": 9,
  "title": "Differential equations: separation, homogeneous and linear methods",
  "summary": "Order and degree, solution verification and initial values, supporting formation, separable and homogeneous equations, linear integrating factors and a decay model.",
  "prerequisites": "Functions, differentiation rules, Integral Calculus including substitution, partial fractions, parts and logarithmic integration.",
  "remaining": "Fourteen-chapter recorded foundation for Unit 9 with original examples and practice covering order, degree, separation, homogeneous ratio equations and first order linear equations. Further mixed substitutions, parameter initial conditions, exceptional-branch analysis and timed practice remain. Formation and exponential decay provide supporting applications. This is not exhaustive problem coverage or official PYQs.",
  "sections": [
    {
      "title": "Read ordinary differential equations and their order",
      "formula": "Order = highest derivative order appearing in the equation",
      "paragraphs": [
        "A differential equation relates an unknown function to one or more of its derivatives. In an ordinary differential equation the function depends on one independent variable, such as y depending on x. A prime usually means differentiation with respect to that independent variable: y prime means d y over d x, and y double prime means the second derivative. The order is the highest derivative order actually present in the equation. In y double prime plus three y prime plus two y equal to zero, the order is two. In the cube of y prime equal to x plus y, the order is one. Cubing a first derivative does not make it a third derivative. Before classifying a written equation, simplify exact cancellations so that a term that disappears is not counted. An equation containing partial derivatives belongs to a different category and is outside this class. The original equation also carries domain restrictions. For example, a denominator x excludes zero even if an expression is later simplified on an allowed interval. State which variable is independent and which function is unknown before reading either the notation or the solution."
      ]
    },
    {
      "title": "Determine degree only when the derivative dependence is polynomial",
      "formula": "Degree = power of highest order derivative in polynomial form",
      "paragraphs": [
        "Degree concerns algebraic powers of derivatives, rather than the highest derivative order. It is defined when the equation can be expressed as a polynomial in the derivatives after valid removal of fractions and radicals involving derivatives. The degree is the power of the highest order derivative in that polynomial form. In the square of y double prime plus the cube of y prime plus y equal to zero, the order is two and the degree is two. The cube on the lower derivative does not determine the degree. The cube of y prime equal to x plus y instead has order one and degree three. In y double prime plus sine of y prime equal to zero, the derivative appears inside a trigonometric function, so its degree is not defined. A sine of x or a sine of y alone does not create that same obstacle because neither is a sine of a derivative. When squaring a derivative radical or clearing a derivative denominator, record any sign or nonzero conditions required for equivalence. Otherwise the transformed equation may acquire solutions that do not satisfy the original equation. Always check a proposed solution in the original relation."
      ]
    },
    {
      "title": "Verify general solutions, particular solutions and initial values",
      "formula": "y′=2x ⇒ y=x²+C; y(1)=3 ⇒ C=2",
      "paragraphs": [
        "Solving a differential equation means finding functions that satisfy it on an interval. For y prime equal to two x, direct integration gives y equal to x squared plus C. The constant is arbitrary, so this is a family of solutions. A particular initial condition selects a member when it is compatible with the equation. If y of one is three, substituting gives three equal to one plus C, so C is two. The selected solution is y equal to x squared plus two. Verify it in two separate ways: its derivative must equal the right hand side for every input in the chosen interval, and its value at the initial input must equal the stated value. A function that merely passes through the initial point need not solve the equation. A formula that satisfies the equation away from a pole cannot be declared a solution on an interval containing that pole. First order equations often yield one integration constant, but that observation is not a replacement for verification or a universal existence claim. Nonlinear equations can also have exceptional solutions that a division step misses. Keep such candidates until the original equation has been tested."
      ]
    },
    {
      "title": "Form an equation by eliminating arbitrary constants",
      "formula": "y=Ce²ˣ ⇒ y′−2y=0",
      "paragraphs": [
        "Eliminating arbitrary constants provides one way to form a differential equation from a family of curves. Consider y equal to C times e to the two x. Differentiation gives y prime equal to two C times e to the two x. Replace the repeated expression C times e to the two x by y, obtaining y prime minus two y equal to zero. No division by y is needed, so the member with C equal to zero remains included. For the family of straight lines y equal to A x plus B, one differentiation gives y prime equal to A. A second differentiation eliminates A as well, giving y double prime equal to zero. Conversely, integrating that last equation twice recovers the full line family on an interval. The number of independent constants suggests how many differentiations may be useful in a nondegenerate family. It does not justify blindly differentiating every formula a fixed number of times without elimination. If the family contains parameters that are not independent, or if a manipulation divides by an expression that can vanish, inspect those cases separately. Formation is a supporting technique here; the main solution methods are separation, homogeneous substitution and linear integrating factors."
      ]
    },
    {
      "title": "Separate variables and restore equilibrium solutions",
      "formula": "y′=xy ⇒ y=Ce^(x²/2), C∈ℝ",
      "paragraphs": [
        "A separable equation can be written as y prime equal to a function of x times a function of y. On an interval where the y factor is nonzero, move that factor to the y side and integrate each side in its own variable. For y prime equal to x y, division by y gives d y over y equal to x d x. Integration gives natural log of absolute y equal to x squared over two plus a constant. Exponentiating and absorbing the nonzero magnitude and sign into a new constant gives y equal to C times e to the x squared over two for nonzero C. The division excluded y equal to zero, so test that function in the original equation. It also satisfies y prime equal to x y. Including C equal to zero now represents it in the final family. A logarithmic intermediate constant and the final multiplicative constant are not the same parameter, even when both are conventionally named C. For an initial value y of zero equal to two, the multiplicative constant is two. Differentiate the resulting exponential to check that the inner derivative x restores the original right hand side."
      ]
    },
    {
      "title": "Solve a nonlinear initial value problem on its valid interval",
      "formula": "y′=y², y(0)=1 ⇒ y=1/(1−x), x<1",
      "paragraphs": [
        "For y prime equal to y squared, the equation is separable. When y is nonzero, integrate y to the negative two with respect to y to obtain negative one over y equal to x plus a constant. The initial condition y of zero equal to one gives the constant negative one. Solving for y produces one divided by one minus x. Its derivative is one divided by the square of one minus x, which equals y squared wherever the denominator is nonzero. The formula has a pole at x equal to one. The maximal interval containing the initial input zero is therefore all x less than one. The same algebraic formula on x greater than one does not extend the initial solution across the pole. Division by y also excluded the constant solution y equal to zero; verify and restore it when describing the original equation's solutions. An equation that looks simple can thus produce a finite input where a solution becomes unbounded. The answer should include both the explicit function and the interval associated with the initial condition, rather than just the rational expression alone."
      ]
    },
    {
      "title": "Handle inverse trigonometric separation and branch intervals",
      "formula": "y′=2x(1+y²), y(0)=0 ⇒ y=tan(x²)",
      "paragraphs": [
        "Separation can produce inverse trigonometric integrals as well as logarithms. For y prime equal to two x times the quantity one plus y squared, divide by one plus y squared. This factor is strictly positive for real y, so this division loses no real constant solution. Integrating gives arctangent y equal to x squared plus an integration constant on a suitable branch interval. The initial condition y of zero equal to zero selects constant zero near the initial point. Taking tangent gives y equal to tangent of x squared. The interval containing zero must stop before x squared reaches pi over two, because tangent has a pole there. Thus absolute x must be less than square root of pi over two. Differentiate on this interval: y prime is two x times secant squared of x squared, which equals two x times one plus y squared. Although tangent is periodic, an initial solution cannot be continued through one of its infinite poles by switching branches. State the local inverse convention used in the integration and verify the explicit solution on the interval selected by its initial data."
      ]
    },
    {
      "title": "Recognize homogeneous ratio equations and substitute y=vx",
      "formula": "y′=1+y/x ⇒ y=x(ln|x|+C), x≠0",
      "paragraphs": [
        "A first order homogeneous ratio equation has right hand side depending only on y over x, on a region where x is nonzero. This use of homogeneous is different from the word homogeneous in a linear equation with zero forcing term. For y prime equal to one plus y over x, set v equal to y over x, or y equal to v x. Here v depends on x. The product rule gives y prime equal to v plus x times v prime. Substituting produces v plus x v prime equal to one plus v. The v terms cancel, leaving v prime equal to one over x. Integration gives v equal to natural log of absolute x plus C, so y equals x times the quantity natural log of absolute x plus C. Differentiating this expression gives natural log of absolute x plus C plus one, exactly one plus y over x. Use an interval entirely on one side of zero, because the original equation excludes x equal to zero. Replacing y prime by only v would omit the derivative of the changing ratio and destroy the method."
      ]
    },
    {
      "title": "Check constant ratio solutions lost by homogeneous separation",
      "formula": "y′=(y/x)² ⇒ y=x/(1−Cx), plus y=0",
      "paragraphs": [
        "Homogeneous substitution can introduce a division that hides straight line solutions. Consider y prime equal to the square of y over x, with x nonzero. Put y equal to v x. The transformed equation is x v prime equal to v squared minus v, or v times v minus one. Before dividing by that product, inspect its zeros. Constant v equal to zero gives y equal to zero, and constant v equal to one gives y equal to x. Both solve the original equation on intervals excluding zero. For the other branches, separation gives d v divided by v times v minus one equal to d x over x. Partial fractions integrate the left side to natural log of the absolute value of the ratio v minus one to v. Solving the resulting relation gives y equal to x divided by one minus C x. Setting C equal to zero recovers y equal to x in this displayed family, while y equal to zero remains an additional solution. Require both x nonzero and one minus C x nonzero. Verification distinguishes an actually missing branch from one already represented by a special value of the final constant."
      ]
    },
    {
      "title": "Derive and apply the linear integrating factor",
      "formula": "y′+P(x)y=Q(x); μ=e^(∫P dx); (μy)′=μQ",
      "paragraphs": [
        "A first order linear equation in y has the normalized form y prime plus P of x times y equal to Q of x. Neither P nor Q depends on y. Choose an integrating factor mu equal to the exponential of an antiderivative of P. Its derivative equals P times mu. Multiplying the equation by mu makes the left hand side the derivative of the product mu y. Integration then gives mu y equal to the integral of mu Q with respect to x, plus C. A nonzero constant multiplier in mu does not change the final solution family, so one convenient integrating factor is enough. For y prime plus two y equal to four, use mu equal to e to the two x. Integration gives y equal to two plus C e to the negative two x. If y of zero is three, C is one. Differentiate and substitute to verify the decaying term cancels in y prime plus two y. The method requires normalization first. If the coefficient of y prime vanishes somewhere, dividing by it restricts the interval and that excluded location must be considered separately in the original equation."
      ]
    },
    {
      "title": "Normalize variable coefficients and preserve singular points",
      "formula": "xy′+y=2x ⇒ y=x+C/x, x≠0",
      "paragraphs": [
        "A variable coefficient equation should be normalized before its integrating factor is read. For x y prime plus y equal to two x, divide by x only on an interval where x is nonzero. The normalized equation is y prime plus y over x equal to two. Integrating P equal to one over x gives natural log of absolute x, so the positive exponential choice for mu is absolute x. On either side of zero, x itself is also a valid nonzero constant multiple of that factor, and is convenient. Multiplication makes the equation the derivative of x y equal to two x. Integrating gives x y equal to x squared plus C, hence y equal to x plus C over x. If y of one equals three, C equals two and the initial solution lies on x greater than zero. Do not claim that every member passes through zero. The member with C equal to zero can be extended as y equal to x and satisfies the original unnormalized equation even there, but members with nonzero C have a pole. The original equation, rather than the divided form alone, decides what an extension can mean."
      ]
    },
    {
      "title": "Choose the dependent variable correctly in a linear equation",
      "formula": "dx/dy+x=y ⇒ x=y−1+Ce^(−y)",
      "paragraphs": [
        "Sometimes an equation is linear when x is treated as the dependent variable and y as the independent variable. For d x over d y plus x equal to y, the unknown is a function x of y. The coefficient of x is one, so the integrating factor is e to the y. Multiplication gives the derivative with respect to y of the product e to the y times x equal to y e to the y. Integration by parts gives the integral on the right as e to the y times the quantity y minus one, plus C. Dividing by e to the y gives x equal to y minus one plus C e to the negative y. The condition x of zero equal to one sets C equal to two. Differentiate with respect to y to check that d x over d y plus x equals y. Do not silently substitute d y over d x for d x over d y. Reciprocating a derivative needs a local inverse and a nonzero derivative, and may exclude points. Keeping the chosen independent variable explicit is safer than assuming every first order equation must be linear in y as a function of x."
      ]
    },
    {
      "title": "Model exponential growth and decay with units",
      "formula": "dN/dt=−kN ⇒ N=N₀e^(−kt), k>0",
      "paragraphs": [
        "A rate proportional to the current amount gives a simple separable differential equation. For decay, write d N over d t equal to negative k N, with k positive. Separation or the linear method yields N equal to the initial amount times e to the negative k t. The initial value is N of zero, and the model keeps a positive initial amount positive at every finite time. The coefficient k has inverse time units, so its product with t in the exponent is dimensionless. A half life T means the amount at time T is one half of the initial amount. Substitution gives e to the negative k T equal to one half, hence k equal to natural log two divided by T. After two half lives the remaining amount is one quarter, not zero. For an initial amount eighty and half life three time units, the amount at time six is twenty. Growth uses the positive sign instead and gives an increasing exponential for a positive initial amount. The proportional rate assumption is a modelling choice; it should not be inferred merely from one observed pair of amounts without stating that assumption."
      ]
    },
    {
      "title": "Choose a method, check every solution and state its interval",
      "formula": "Classify → solve → restore excluded branches → verify",
      "paragraphs": [
        "A reliable solution begins by classifying the equation after checking its domain. If the right hand side factors into a function of x times a function of y, try separation and inspect the zeros of the factor divided out. If the right hand side depends on y over x, use y equal to v x and the product rule, then inspect any constant v branches excluded during separation. If the normalized equation is linear in its chosen unknown, find the integrating factor from the coefficient of that unknown. These categories can overlap: y prime equal to x y is both separable and linear. Choosing either valid method should produce equivalent families on the same interval. They do not cover every differential equation. For example, a nonlinear equation need not become separable just because it is first order. After integration, absorb constants only through valid operations, restore exceptional solutions, and differentiate the candidate in the original equation. Then check the initial condition and identify the connected interval containing its input. A pole, a logarithmic restriction or an excluded original denominator can end that interval. These checks are part of the solution, not optional finishing details after the algebra."
      ]
    }
  ],
  "examples": [
    {
      "question": "Find order and degree of (y″)²+(y′)³+y=0, and the degree of y″+sin(y′)=0.",
      "steps": [
        "The highest derivative in both equations is y″.",
        "In the first polynomial its exponent is two.",
        "In the second a derivative appears inside sine, so polynomial degree is unavailable."
      ],
      "answer": "Both have order 2; degrees are 2 and not defined respectively."
    },
    {
      "question": "Solve y′=2x, y(1)=3, and verify.",
      "steps": [
        "Integrate to y=x²+C.",
        "Substitute 3=1+C to get C=2.",
        "Differentiate x²+2 to get 2x and evaluate it at x=1."
      ],
      "answer": "y=x²+2 for all real x."
    },
    {
      "question": "Eliminate constants from y=Ce²ˣ and y=Ax+B.",
      "steps": [
        "Differentiate the exponential family once: y′=2y.",
        "Differentiate the line family twice.",
        "Neither operation needs division by y, so zero members are retained."
      ],
      "answer": "y′−2y=0 and y″=0 respectively."
    },
    {
      "question": "Solve y′=xy with y(0)=2.",
      "steps": [
        "For nonzero y, separate dy/y=x dx.",
        "Integrate and exponentiate: y=Ce^(x²/2), including the separately checked C=0 branch.",
        "The initial value selects C=2."
      ],
      "answer": "y=2e^(x²/2), x∈ℝ."
    },
    {
      "question": "Solve y′=y², y(0)=1, stating the initial interval.",
      "steps": [
        "Integrate dy/y²=dx on a nonzero branch.",
        "Use −1/y=x+C and the initial condition C=−1.",
        "The pole at 1 bounds the connected interval containing 0."
      ],
      "answer": "y=1/(1−x), x∈(−∞,1). The original equation also has equilibrium y=0."
    },
    {
      "question": "Solve y′=2x(1+y²), y(0)=0.",
      "steps": [
        "Separate dy/(1+y²)=2x dx.",
        "Integrate to arctan y=x² near zero.",
        "Take tangent and stop at the nearest poles x²=π/2."
      ],
      "answer": "y=tan(x²), |x|<√(π/2)."
    },
    {
      "question": "Solve y′=1+y/x on x≠0.",
      "steps": [
        "Put y=vx, giving y′=v+xv′.",
        "The equation reduces to xv′=1.",
        "Integrate v=ln|x|+C and substitute back."
      ],
      "answer": "y=x(ln|x|+C) on either side of zero."
    },
    {
      "question": "Solve y′=(y/x)² and check constant ratios.",
      "steps": [
        "Put y=vx to get xv′=v(v−1).",
        "Before dividing, test v=0 and v=1, giving y=0 and y=x.",
        "For other branches integrate ln|(v−1)/v|=ln|x|+K and solve for y."
      ],
      "answer": "y=x/(1−Cx), with x≠0 and 1−Cx≠0, plus y=0; C=0 already includes y=x."
    },
    {
      "question": "Solve y′+2y=4, y(0)=3.",
      "steps": [
        "Use μ=e²ˣ, so (e²ˣy)′=4e²ˣ.",
        "Integration gives y=2+Ce^(−2x).",
        "The initial value gives C=1; verify by substitution."
      ],
      "answer": "y=2+e^(−2x), x∈ℝ."
    },
    {
      "question": "Solve xy′+y=2x, y(1)=3.",
      "steps": [
        "For x>0 normalize to y′+y/x=2.",
        "Using μ=x gives (xy)′=2x, hence xy=x²+C.",
        "The initial condition gives 3=1+C."
      ],
      "answer": "y=x+2/x on (0,∞)."
    },
    {
      "question": "Solve dx/dy+x=y, x(0)=1.",
      "steps": [
        "Treat x as a function of y and use μ=eʸ.",
        "Integrate (eʸx)′=yeʸ by parts to get x=y−1+Ce^(−y).",
        "At y=0, x=1 gives C=2."
      ],
      "answer": "x(y)=y−1+2e^(−y), y∈ℝ."
    },
    {
      "question": "An amount decays proportionally, starting at 80 with half life 3. Find its value at time 6.",
      "steps": [
        "Write N′=−kN and N=80e^(−kt).",
        "The half life implies k=ln2/3.",
        "At t=6, the exponential is e^(−2ln2)=1/4."
      ],
      "answer": "N(6)=20 in the original amount units."
    }
  ],
  "quiz": [
    {
      "question": "The order of (y″)²+(y′)³+y=0 is:",
      "options": [
        "1",
        "2",
        "3",
        "5"
      ],
      "answer": 1,
      "explanation": "The highest derivative is y″, regardless of its exponent or the lower derivative powers."
    },
    {
      "question": "The order of (y′)³=x+y is:",
      "options": [
        "2",
        "3",
        "1",
        "Not defined"
      ],
      "answer": 2,
      "explanation": "The cube is a power of a first derivative; it is not a third derivative."
    },
    {
      "question": "The degree of (y″)²+(y′)³+y=0 is:",
      "options": [
        "1",
        "3",
        "Not defined",
        "2"
      ],
      "answer": 3,
      "explanation": "The polynomial equation has highest order derivative y″ raised to power two."
    },
    {
      "question": "The degree of y″+sin(y′)=0 is:",
      "options": [
        "Not defined",
        "1",
        "2",
        "3"
      ],
      "answer": 0,
      "explanation": "The derivative inside sine prevents polynomial dependence on the derivatives."
    },
    {
      "question": "The solution of y′=2x with y(1)=3 is:",
      "options": [
        "y=x²+3",
        "y=x²+2",
        "y=2x+1",
        "y=x²−2"
      ],
      "answer": 1,
      "explanation": "Integrating gives x²+C, and 3=1+C fixes C=2."
    },
    {
      "question": "A solution of an initial value problem must satisfy:",
      "options": [
        "Only the initial condition",
        "Only a transformed equation",
        "Both the original equation and the initial condition",
        "Only one endpoint of the interval"
      ],
      "answer": 2,
      "explanation": "Differentiate and substitute on the valid interval, then check the stated initial value separately."
    },
    {
      "question": "Eliminating C from y=Ce²ˣ gives:",
      "options": [
        "y′+2y=0",
        "y″=0 only",
        "y′=2x",
        "y′−2y=0"
      ],
      "answer": 3,
      "explanation": "Differentiation gives y′=2Ce²ˣ=2y, including C=0 without division."
    },
    {
      "question": "The full line family y=Ax+B satisfies:",
      "options": [
        "y″=0",
        "y′=0",
        "y″=1",
        "y′=x"
      ],
      "answer": 0,
      "explanation": "Two differentiations eliminate the two independent constants A and B."
    },
    {
      "question": "A solution family of y′=xy including its zero solution is:",
      "options": [
        "y=Ceˣ",
        "y=Ce^(x²/2), C∈ℝ",
        "y=Cx²",
        "y=Ce^(2x²)"
      ],
      "answer": 1,
      "explanation": "Differentiation gives xy; setting C=0 restores the equilibrium excluded by division by y."
    },
    {
      "question": "For y′=xy and y(0)=2, the multiplicative constant is:",
      "options": [
        "0",
        "1",
        "2",
        "ln2"
      ],
      "answer": 2,
      "explanation": "At x=0 the exponential factor is one, so its multiplier must be two."
    },
    {
      "question": "For y′=y² and y(0)=1, the solution is:",
      "options": [
        "y=1/(1+x)",
        "y=eˣ",
        "y=1−x",
        "y=1/(1−x)"
      ],
      "answer": 3,
      "explanation": "Separation gives −1/y=x−1, and differentiation verifies y′=y²."
    },
    {
      "question": "The maximal interval containing zero for this initial solution is:",
      "options": [
        "(−∞,1)",
        "ℝ",
        "(1,∞)",
        "(−∞,0)"
      ],
      "answer": 0,
      "explanation": "The pole at x=1 prevents continuation through that input; the interval must contain zero."
    },
    {
      "question": "For y′=2x(1+y²), y(0)=0, a solution near zero is:",
      "options": [
        "y=arctan(x²)",
        "y=tan(x²)",
        "y=tan(2x)",
        "y=x²"
      ],
      "answer": 1,
      "explanation": "Separation gives arctan y=x² near zero, then tangent recovers y."
    },
    {
      "question": "Its maximal initial interval is:",
      "options": [
        "|x|<π/2",
        "All real x",
        "|x|<√(π/2)",
        "x>√(π/2)"
      ],
      "answer": 2,
      "explanation": "The nearest poles occur when x²=π/2 on either side of the initial input."
    },
    {
      "question": "If y=vx with v depending on x, then y′ equals:",
      "options": [
        "v",
        "xv′",
        "v′+x",
        "v+xv′"
      ],
      "answer": 3,
      "explanation": "The product rule includes both the derivative of x and the derivative of v."
    },
    {
      "question": "The solution family of y′=1+y/x is:",
      "options": [
        "y=x(ln|x|+C), x≠0",
        "y=ln|x|+C",
        "y=x²+C",
        "y=Ceˣ"
      ],
      "answer": 0,
      "explanation": "Substituting y=vx yields xv′=1 and v=ln|x|+C."
    },
    {
      "question": "For y′=(y/x)², division by v(v−1) after y=vx excludes:",
      "options": [
        "Only v=0",
        "v=0 and v=1",
        "Only v=1",
        "No values"
      ],
      "answer": 1,
      "explanation": "Both zero factors must be checked in the original equation before division."
    },
    {
      "question": "Which solution is additional to y=x/(1−Cx) with finite constant C?",
      "options": [
        "y=x",
        "y=2x",
        "y=0",
        "y=1"
      ],
      "answer": 2,
      "explanation": "The displayed family includes y=x at C=0 but never the identically zero function on x≠0."
    },
    {
      "question": "An integrating factor of y′+2y=4 is:",
      "options": [
        "e^(−2x)",
        "2x",
        "1/x",
        "e²ˣ"
      ],
      "answer": 3,
      "explanation": "Use exp(∫P dx) with normalized coefficient P=2."
    },
    {
      "question": "For y′+2y=4 and y(0)=3, the solution is:",
      "options": [
        "y=2+e^(−2x)",
        "y=2+e²ˣ",
        "y=3e^(−2x)",
        "y=4+e^(−2x)"
      ],
      "answer": 0,
      "explanation": "The general family is 2+Ce^(−2x), and the initial condition sets C=1."
    },
    {
      "question": "On x≠0, xy′+y=2x normalizes to:",
      "options": [
        "y′+y=2",
        "y′+y/x=2",
        "y′+xy=2x",
        "y′+y/x=2x"
      ],
      "answer": 1,
      "explanation": "Every term is divided by x on an interval excluding zero."
    },
    {
      "question": "With y(1)=3, the solution of xy′+y=2x on x>0 is:",
      "options": [
        "y=x+3/x",
        "y=2x+1",
        "y=x+2/x",
        "y=x²+2"
      ],
      "answer": 2,
      "explanation": "The product equation (xy)′=2x gives y=x+C/x; the data gives C=2."
    },
    {
      "question": "In dx/dy+x=y, the independent variable is:",
      "options": [
        "x",
        "Both independently",
        "Neither variable",
        "y"
      ],
      "answer": 3,
      "explanation": "The derivative dx/dy treats x as the unknown function of y."
    },
    {
      "question": "The solution of dx/dy+x=y with x(0)=1 is:",
      "options": [
        "x=y−1+2e^(−y)",
        "x=y+1",
        "x=y−1+e^(−y)",
        "x=eʸ"
      ],
      "answer": 0,
      "explanation": "The family y−1+Ce^(−y) satisfies the equation, and x(0)=1 requires C=2."
    },
    {
      "question": "For dN/dt=−kN and half life T>0, k equals:",
      "options": [
        "T ln2",
        "ln2/T",
        "1/T²",
        "−ln2/T"
      ],
      "answer": 1,
      "explanation": "The half life equation e^(−kT)=1/2 gives kT=ln2 with k positive."
    },
    {
      "question": "An initial amount 80 with half life 3 has amount at time 6:",
      "options": [
        "0",
        "40",
        "20",
        "10"
      ],
      "answer": 2,
      "explanation": "Six time units are two half lives, so 80 is multiplied by one quarter."
    },
    {
      "question": "The equation y′=xy is:",
      "options": [
        "Separable only",
        "Linear only",
        "Neither",
        "Both separable and linear"
      ],
      "answer": 3,
      "explanation": "It factors as x times y and also has normalized linear form y′−xy=0."
    },
    {
      "question": "After dividing by a factor that may vanish, the correct next check is:",
      "options": [
        "Test excluded cases in the original equation",
        "Discard them permanently",
        "Assume they are all solutions",
        "Ignore the interval"
      ],
      "answer": 0,
      "explanation": "Division can remove equilibrium or constant-ratio solutions; substitution decides which excluded cases are valid."
    }
  ],
  "sources": [
    {
      "title": "NTA JEE Main 2026 Mathematics Unit 9",
      "url": "https://jeemain.nta.nic.in/document/syllabus-2026/"
    },
    {
      "title": "OpenStax Calculus: Separable Equations",
      "url": "https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations"
    },
    {
      "title": "OpenStax Calculus: First-Order Linear Equations",
      "url": "https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations"
    }
  ]
};
