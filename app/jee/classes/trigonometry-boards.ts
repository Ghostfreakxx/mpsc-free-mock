export const trigonometryBoards = [
  {
    "title": "Use radians and the unit circle to fix signs and exact values",
    "lines": [
      "150° = 5π/6 radians",
      "(cosθ,sinθ) lies on the unit circle",
      "θ=2π/3: cosθ=−½, sinθ=√3/2",
      "tan=sin/cos; sec=1/cos"
    ]
  },
  {
    "title": "Read trigonometric domains, ranges, periods and symmetries",
    "lines": [
      "sin,cos: domain ℝ; range [−1,1]",
      "tan,cot: period π; range ℝ",
      "sec,csc: |output|≥1",
      "tan,sec require cosx≠0"
    ]
  },
  {
    "title": "Use fundamental identities without restoring excluded inputs",
    "lines": [
      "sin²x+cos²x=1",
      "1+tan²x=sec²x where cosx≠0",
      "(1−cos²x)/sinx=sinx, sinx≠0",
      "sinx=3/5, quadrant II ⇒ cosx=−4/5"
    ]
  },
  {
    "title": "Apply compound-angle formulas with the correct signs",
    "lines": [
      "sin(A−B)=sinA cosB−cosA sinB",
      "cos(A+B)=cosA cosB−sinA sinB",
      "sin15°=(√6−√2)/4",
      "tan15°=2−√3"
    ]
  },
  {
    "title": "Derive double, triple and half angle identities with quadrant signs",
    "lines": [
      "sin2x=2sinx cosx",
      "cos2x=1−2sin²x=2cos²x−1",
      "sin3x=3sinx−4sin³x",
      "x=4π/3 ⇒ cos(x/2)=−½"
    ]
  },
  {
    "title": "Transform sums into products and products into sums",
    "lines": [
      "sinA+sinB=2sin((A+B)/2)cos((A−B)/2)",
      "2sinA cosB=sin(A+B)+sin(A−B)",
      "2sinA sinB=cos(A−B)−cos(A+B)",
      "sin75°+sin15°=√6/2"
    ]
  },
  {
    "title": "Solve trigonometric equations without dividing away solutions",
    "lines": [
      "sin2x=sinx ⇒ sinx(2cosx−1)=0",
      "On [0,2π): 0,π/3,π,5π/3",
      "tanx=1 ⇒ x=π/4+kπ",
      "Preserve zero factors before division"
    ]
  },
  {
    "title": "Find ranges of a sine-cosine combination by its amplitude",
    "lines": [
      "3sinx+4cosx = 5sin(x+φ)",
      "cosφ=3/5; sinφ=4/5",
      "For x∈ℝ: range [−5,5]",
      "Restricted x requires a fresh attainment check"
    ]
  },
  {
    "title": "Define inverse sine, cosine and tangent by principal ranges",
    "lines": [
      "arcsin outputs [−π/2,π/2]",
      "arccos outputs [0,π]",
      "arctan outputs (−π/2,π/2)",
      "arcsin(sin5π/6)=π/6"
    ]
  },
  {
    "title": "State the inverse cotangent, secant and cosecant conventions",
    "lines": [
      "arccot(−1)=3π/4 using (0,π)",
      "arcsec(−2)=2π/3",
      "arccsc(−2)=−π/6",
      "arcsec,arccsc require |x|≥1"
    ]
  },
  {
    "title": "Use inverse identities with their real domains",
    "lines": [
      "arcsinx+arccosx=π/2, |x|≤1",
      "arctanx+arccotx=π/2, x∈ℝ",
      "arcsecx=arccos(1/x), |x|≥1",
      "arcsinx=2arccosx ⇒ x=√3/2"
    ]
  },
  {
    "title": "Correct the branch in inverse tangent addition",
    "lines": [
      "arctan(1/2)+arctan(1/3)=π/4",
      "arctan2+arctan3: tangent = −1",
      "Actual sum in (π/2,π) ⇒ 3π/4",
      "uv=1 requires a separate angle check"
    ]
  }
] as const;
