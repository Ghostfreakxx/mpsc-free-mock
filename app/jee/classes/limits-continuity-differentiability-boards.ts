export const calculusBoards = [
  {
    "title": "Start with real function domains and simple graphs",
    "lines": [
      "ln(x−1)/(x−2): x>1, x≠2",
      "Domain: (1,2)∪(2,∞)",
      "eˣ: ℝ→(0,∞); ln: (0,∞)→ℝ",
      "Combine all original restrictions"
    ]
  },
  {
    "title": "Separate a limit from the value at the point",
    "lines": [
      "(x²−4)/(x−2)=x+2 for x≠2",
      "As x→2, both sides approach 4",
      "x/|x| near 0: left −1, right 1",
      "Different one-sided limits ⇒ no two-sided limit"
    ]
  },
  {
    "title": "Evaluate algebraic limits by valid local simplification",
    "lines": [
      "Rationalize with √(1+x)+1",
      "(√(1+x)−1)/x = 1/(√(1+x)+1)",
      "Limit at 0 = 1/2",
      "Leading powers: (3x²+1)/(x²−2)→3"
    ]
  },
  {
    "title": "Use standard trigonometric, exponential and logarithmic limits",
    "lines": [
      "sin(3x)/x = 3·sin(3x)/(3x) →3",
      "(1−cosx)/x² →1/2",
      "(eˣ−1)/x →1; ln(1+x)/x →1",
      "Angles in radians; retain real domains"
    ]
  },
  {
    "title": "Test continuity and choose a missing point value",
    "lines": [
      "(x²−1)/(x−1)=x+1 for x≠1",
      "Define f(1)=k: continuity needs k=2",
      "Define sinx/x at 0 by its limit 1",
      "A jump cannot be fixed by one point value"
    ]
  },
  {
    "title": "Define the derivative and distinguish it from continuity",
    "lines": [
      "For x²: difference quotient = 2x+h",
      "f′(x)=2x; f′(3)=6",
      "|x| is continuous at 0",
      "Left slope −1, right slope 1 ⇒ no derivative"
    ]
  },
  {
    "title": "Differentiate powers, sums, products and quotients",
    "lines": [
      "[(x²+1)(x−1)]′=3x²−2x+1",
      "[x/(1+x)]′=1/(1+x)²",
      "Product: u′v+uv′",
      "Quotient: (u′v−uv′)/v²"
    ]
  },
  {
    "title": "Apply the chain rule to composite functions",
    "lines": [
      "[sin(x²)]′=2x cos(x²)",
      "[(3x+1)⁵]′=15(3x+1)⁴",
      "[√(1+x²)]′=x/√(1+x²)",
      "Outer derivative × inner derivative"
    ]
  },
  {
    "title": "Differentiate the six trigonometric functions in radians",
    "lines": [
      "sin′=cos; cos′=−sin",
      "tan′=sec²; cot′=−csc²",
      "sec′=sec·tan; csc′=−csc·cot",
      "Use radians and exclude original poles"
    ]
  },
  {
    "title": "Differentiate inverse trigonometric functions on their open derivative domains",
    "lines": [
      "arcsin′=1/√(1−x²), |x|<1",
      "arccos′=−1/√(1−x²)",
      "arctan′=1/(1+x²); arccot′=−1/(1+x²)",
      "arcsec′=1/(|x|√(x²−1)), |x|>1"
    ]
  },
  {
    "title": "Differentiate exponentials and logarithms, including variable powers",
    "lines": [
      "[ln(2x+1)]′=2/(2x+1), x>−1/2",
      "y=xˣ ⇒ ln y=x ln x",
      "y′/y=lnx+1",
      "y′=xˣ(lnx+1), x>0"
    ]
  },
  {
    "title": "Use implicit differentiation and identify vertical tangent exceptions",
    "lines": [
      "x²+y²=25 ⇒ 2x+2y y′=0",
      "At (3,4): y′=−3/4",
      "Tangent: y−4=−3(x−3)/4",
      "At (5,0): vertical tangent x=5"
    ]
  },
  {
    "title": "Find second derivatives without dropping product or chain factors",
    "lines": [
      "y=x³−3x ⇒ y′=3x²−3",
      "y″=6x, not (y′)²",
      "Circle: y′=−x/y ⇒ y″=−25/y³",
      "At (3,4): y″=−25/64"
    ]
  },
  {
    "title": "Interpret derivatives as instantaneous rates with units",
    "lines": [
      "s(t)=t³ ⇒ s′(2)=12",
      "A=πr²; r depends on time",
      "dA/dt=2πr·dr/dt",
      "r=3, dr/dt=2 ⇒ dA/dt=12π"
    ]
  },
  {
    "title": "Use derivative signs to locate increasing and decreasing intervals",
    "lines": [
      "f′=3(x−1)(x+1)",
      "Increasing: (−∞,−1) and (1,∞)",
      "Decreasing: (−1,1)",
      "x³ has f′(0)=0 but no extremum there"
    ]
  },
  {
    "title": "Classify extrema and compare endpoints on a closed interval",
    "lines": [
      "f=x³−3x on [0,2]",
      "Candidates: x=0,1,2",
      "Values: 0,−2,2",
      "Min −2 at 1; max 2 at endpoint 2"
    ]
  }
] as const;
