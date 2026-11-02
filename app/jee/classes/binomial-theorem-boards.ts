export const binomialBoards = [
  {
    "title": "Derive the finite binomial expansion by counting choices",
    "lines": [
      "Choose r factors to contribute b",
      "(a+b)⁴: coefficients 1,4,6,4,1",
      "General term: C(n,r)aⁿ⁻ʳbʳ",
      "r=0,…,n gives n+1 indexed terms"
    ]
  },
  {
    "title": "Find a specified term while keeping signs and term numbers",
    "lines": [
      "(2x−3)⁵: a=2x, b=−3",
      "For x³: 5−r=3 ⇒ r=2",
      "T₃ = C(5,2)(2x)³(−3)²",
      "Coefficient = 10×8×9 = 720"
    ]
  },
  {
    "title": "Solve exponent equations for constant and specified powers",
    "lines": [
      "(x²+x⁻¹)⁶; x≠0",
      "Variable exponent = 12−3r",
      "Constant: r=4 ⇒ C(6,4)=15",
      "Outer power 5: r=10/3 is invalid"
    ]
  },
  {
    "title": "Locate one or two middle terms by counting positions",
    "lines": [
      "(a+b)⁸ has 9 terms: middle T₅",
      "T₅ = C(8,4)a⁴b⁴ = 70a⁴b⁴",
      "(1+2x)⁷: middle T₄ and T₅",
      "T₄=280x³; T₅=560x⁴"
    ]
  },
  {
    "title": "Extract coefficient sums by evaluating a polynomial",
    "lines": [
      "(1+x)⁶: F(1)=64, F(−1)=0",
      "Even sum = odd sum = 32",
      "(2−3x)⁴: coefficient sum = 1",
      "Alternating sum = (2+3)⁴ = 625"
    ]
  },
  {
    "title": "Derive weighted coefficient sums by marking selected objects",
    "lines": [
      "n=5: Σr C(5,r)=5×16=80",
      "Σr(r−1)C(5,r)=5×4×8=160",
      "r² = r(r−1)+r",
      "Σr²C(5,r) = 160+80 = 240"
    ]
  },
  {
    "title": "Compare adjacent coefficients and positive numerical terms",
    "lines": [
      "(1+x)⁵: coefficients 1,5,10,10,5,1",
      "For (1+2)⁵, term ratio = 2(5−r)/(r+1)",
      "Terms: 1,10,40,80,80,32",
      "Greatest: T₄=T₅=80"
    ]
  },
  {
    "title": "Extract coefficients from products of finite expansions",
    "lines": [
      "[x³](1+x)⁴(1+x)⁵ = C(9,3)=84",
      "Match powers r and k−r",
      "[x²](1+2x)³(1−x)²",
      "Coefficient = 12−12+1 = 1"
    ]
  },
  {
    "title": "Recover integer exponents and real parameters from coefficients",
    "lines": [
      "[x²](1+x)ⁿ=45 ⇒ C(n,2)=45",
      "n=10 or −9; keep positive n=10",
      "[x²](1+ax)⁴=24 ⇒ 6a²=24",
      "Real a=±2; another condition fixes sign"
    ]
  },
  {
    "title": "Separate exact finite expansions from approximations and remainders",
    "lines": [
      "(1.02)⁵: linear estimate = 1.10",
      "Quadratic estimate = 1.104",
      "Exact = 1.1040808032",
      "5⁵=(1+4)⁵ ≡ 1+20 ≡ 5 (mod 16)"
    ]
  }
] as const;
