export const differentialBoards = [
  {
    "title": "Read ordinary differential equations and their order",
    "lines": [
      "y′=dy/dx; y″=d²y/dx²",
      "y″+3y′+2y=0 has order 2",
      "(y′)³=x+y has order 1",
      "Derivative power is different from order"
    ]
  },
  {
    "title": "Determine degree only when the derivative dependence is polynomial",
    "lines": [
      "(y″)²+(y′)³+y=0: order 2, degree 2",
      "(y′)³=x+y: order 1, degree 3",
      "y″+sin(y′)=0: degree not defined",
      "Clear derivative radicals with equivalence checks"
    ]
  },
  {
    "title": "Verify general solutions, particular solutions and initial values",
    "lines": [
      "Differentiate the candidate function",
      "Substitute into the original equation",
      "Use the initial condition to choose C",
      "Check the interval and excluded inputs"
    ]
  },
  {
    "title": "Form an equation by eliminating arbitrary constants",
    "lines": [
      "Differentiate y=Ce²ˣ",
      "Use y′=2Ce²ˣ=2y",
      "For y=Ax+B, differentiate twice",
      "The line family satisfies y″=0"
    ]
  },
  {
    "title": "Separate variables and restore equilibrium solutions",
    "lines": [
      "For y≠0, write dy/y=x dx",
      "ln|y|=x²/2+C₁",
      "Exponentiation gives either nonzero sign",
      "Check y=0 separately; include C=0"
    ]
  },
  {
    "title": "Solve a nonlinear initial value problem on its valid interval",
    "lines": [
      "For y≠0, integrate dy/y²=dx",
      "−1/y=x+C",
      "Initial data gives C=−1",
      "Also y=0 solves the original equation"
    ]
  },
  {
    "title": "Handle inverse trigonometric separation and branch intervals",
    "lines": [
      "Integrate dy/(1+y²)=2x dx",
      "arctan y=x²+C on a local branch",
      "Initial data gives C=0",
      "Initial interval: |x|<√(π/2)"
    ]
  },
  {
    "title": "Recognize homogeneous ratio equations and substitute y=vx",
    "lines": [
      "Right side is F(y/x)",
      "Let v=y/x, so y=vx",
      "Then y′=v+xv′",
      "xv′=1 ⇒ v=ln|x|+C"
    ]
  },
  {
    "title": "Check constant ratio solutions lost by homogeneous separation",
    "lines": [
      "Set y=vx: xv′=v(v−1)",
      "Division excludes v=0 and v=1",
      "Restore y=0 and y=x by substitution",
      "Use x≠0 and 1−Cx≠0"
    ]
  },
  {
    "title": "Derive and apply the linear integrating factor",
    "lines": [
      "Normalize the coefficient of y′ to one",
      "For y′+2y=4, μ=e²ˣ",
      "y=2+Ce^(−2x)",
      "y(0)=3 gives y=2+e^(−2x)"
    ]
  },
  {
    "title": "Normalize variable coefficients and preserve singular points",
    "lines": [
      "Divide by x: y′+y/x=2",
      "A convenient integrating factor is μ=x",
      "(xy)′=2x ⇒ xy=x²+C",
      "y(1)=3 ⇒ y=x+2/x on x>0"
    ]
  },
  {
    "title": "Choose the dependent variable correctly in a linear equation",
    "lines": [
      "Here y is independent and x is unknown",
      "μ(y)=eʸ",
      "d(eʸx)/dy=yeʸ",
      "x(0)=1 ⇒ x=y−1+2e^(−y)"
    ]
  },
  {
    "title": "Model exponential growth and decay with units",
    "lines": [
      "Initial value: N(0)=N₀",
      "Half life T gives e^(−kT)=1/2",
      "Therefore k=ln2/T",
      "After two half lives, N=N₀/4"
    ]
  },
  {
    "title": "Choose a method, check every solution and state its interval",
    "lines": [
      "Separable: y′=f(x)g(y)",
      "Homogeneous ratio: y′=F(y/x)",
      "Linear: y′+P(x)y=Q(x)",
      "Check equation, initial data and domain"
    ]
  }
] as const;
