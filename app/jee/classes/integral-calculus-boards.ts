export const integralBoards = [
  {
    "title": "Understand antiderivatives and the integration constant",
    "lines": [
      "An antiderivative differentiates back to f",
      "∫2x dx=x²+C",
      "One constant on each connected interval",
      "Check every answer by differentiation"
    ]
  },
  {
    "title": "Integrate powers, logarithmic and exponential forms",
    "lines": [
      "Power rule excludes n=−1",
      "∫(3x²−4)dx=x³−4x+C",
      "∫e²ˣdx=e²ˣ/2+C",
      "∫aˣdx=aˣ/ln a+C; a>0, a≠1"
    ]
  },
  {
    "title": "Reverse the six trigonometric derivative formulas",
    "lines": [
      "∫sec²x dx=tanx+C",
      "∫csc²x dx=−cotx+C",
      "∫secx tanx dx=secx+C",
      "∫cscx cotx dx=−cscx+C"
    ]
  },
  {
    "title": "Apply substitution as the reverse chain rule",
    "lines": [
      "Set u=x², du=2x dx",
      "Replace the whole integrand and differential",
      "∫cosu du=sinu+C",
      "Substitute back for an indefinite integral"
    ]
  },
  {
    "title": "Use integration by parts and choose useful factors",
    "lines": [
      "Choose u=x and dv=eˣdx",
      "Then du=dx and v=eˣ",
      "∫xeˣdx=xeˣ−eˣ+C",
      "∫lnx dx=xlnx−x+C; x>0"
    ]
  },
  {
    "title": "Decompose rational functions into partial fractions",
    "lines": [
      "Divide first if numerator degree is too large",
      "Match coefficients in the identity",
      "∫dx/[x(x+1)]=ln|x|−ln|x+1|+C",
      "Exclude x=0 and x=−1"
    ]
  },
  {
    "title": "Complete the square in quadratic denominators",
    "lines": [
      "x²+2x+5=(x+1)²+4",
      "∫dx/(x²+a²)=arctan(x/a)/a+C",
      "∫dx/(a²−x²)=ln|(a+x)/(a−x)|/(2a)+C",
      "a>0; exclude denominator zeros"
    ]
  },
  {
    "title": "Split linear numerators over a quadratic",
    "lines": [
      "Write px+q=AQ′+B",
      "∫Q′/Q dx=ln|Q|+C",
      "∫(2x+3)/Q dx=lnQ+(1/2)arctan((x+1)/2)+C",
      "Differentiate both terms to verify"
    ]
  },
  {
    "title": "Recognize reciprocal square root integral families",
    "lines": [
      "∫dx/√(x²+a²)=ln|x+√(x²+a²)|+C",
      "∫dx/√(x²−a²)=ln|x+√(x²−a²)|+C",
      "∫x dx/√(x²+4)=√(x²+4)+C",
      "a>0; use each real domain"
    ]
  },
  {
    "title": "Integrate square roots with trigonometric substitution",
    "lines": [
      "Set x=a sinθ, −π/2<θ<π/2",
      "Then √(a²−x²)=a cosθ",
      "∫√(x²+a²)dx=[x√(x²+a²)+a²ln|x+√(x²+a²)|]/2+C",
      "For x²−a² use the minus logarithm"
    ]
  },
  {
    "title": "Transform trigonometric integrands before integrating",
    "lines": [
      "∫sin²x dx=x/2−sin2x/4+C",
      "∫cos²x dx=x/2+sin2x/4+C",
      "∫sinx cosx dx=sin²x/2+C",
      "Use identities, then account for inner scales"
    ]
  },
  {
    "title": "Define a definite integral as a limit of sums",
    "lines": [
      "Divide [0,1] into n equal pieces",
      "Right endpoint xₖ=k/n; width=1/n",
      "Σk²=n(n+1)(2n+1)/6",
      "A definite integral is signed accumulation"
    ]
  },
  {
    "title": "Use the Fundamental Theorem of Calculus",
    "lines": [
      "For continuous f, d/dx ∫ₐˣf(t)dt=f(x)",
      "∫₀²3x²dx=[x³]₀²=8",
      "d/dx ∫₀ˣ²cost dt=2x cos(x²)",
      "Check continuity and the chain factor"
    ]
  },
  {
    "title": "Apply definite integral properties without losing conditions",
    "lines": [
      "Equal bounds give zero",
      "Linearity applies to sums and constants",
      "If f≥0 and a<b, its integral is ≥0",
      "An interior pole needs separate analysis"
    ]
  },
  {
    "title": "Change bounds consistently in definite substitution",
    "lines": [
      "Set u=x², du=2x dx",
      "Transform both limits: 0→0, 1→1",
      "∫₀¹2x/(1+x²)dx=∫₁²du/u=ln2",
      "Keep bounds and differential in one variable"
    ]
  },
  {
    "title": "Exploit reflection and even or odd symmetry",
    "lines": [
      "Odd f: ∫₋ₐᵃf=0, if integrable",
      "Even f: ∫₋ₐᵃf=2∫₀ᵃf",
      "∫₀¹x/(1+x²)dx=(ln2)/2",
      "∫₀^(π/2)sinx/(sinx+cosx)dx=π/4"
    ]
  },
  {
    "title": "Separate signed integrals from geometric area",
    "lines": [
      "For y=x on [−1,1], signed integral=0",
      "Area=∫₋₁⁰(−x)dx+∫₀¹x dx=1",
      "Between curves use upper minus lower",
      "Intersections of y=x and y=x²: x=0,1"
    ]
  },
  {
    "title": "Calculate areas bounded by circles, ellipses and parabolas",
    "lines": [
      "Upper circle: y=√(r²−x²)",
      "Ellipse quarter: ∫₀ᵃb√(1−x²/a²)dx",
      "Area under y²=4ax, 0≤x≤a: 4a²/3",
      "Draw the region and state all boundaries"
    ]
  }
] as const;
