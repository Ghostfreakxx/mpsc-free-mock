export const setsFunctionsBoards = [
  {
    "title": "Represent sets and count their subsets",
    "lines": [
      "A = {2, 4, 6}; |A| = 3",
      "P(A) has 2³ = 8 members",
      "Proper subsets: 8 − 1 = 7",
      "∅ has 0 members; {∅} has 1"
    ]
  },
  {
    "title": "Use set algebra with a stated universal set",
    "lines": [
      "U = {1,2,3,4,5,6}",
      "A∪B = {1,2,3,4}; A∩B = {3}",
      "A∖B = {1,2}; B∖A = {4}",
      "(A∪B)ᶜ = Aᶜ∩Bᶜ"
    ]
  },
  {
    "title": "Count unions without double counting",
    "lines": [
      "24 + 19 − 8 = 35 in A∪B",
      "40 − 35 = 5 in neither",
      "Three sets: 20+18+15−8−7−6+3",
      "Union = 35; exactly two = 12"
    ]
  },
  {
    "title": "Distinguish relation properties using ordered pairs",
    "lines": [
      "Identity: reflexive and symmetric",
      "Identity is also antisymmetric",
      "≤ : reflexive, antisymmetric, transitive",
      "One counterexample disproves a property"
    ]
  },
  {
    "title": "Build equivalence classes from an equivalence relation",
    "lines": [
      "aRb when 3 divides a−b",
      "Reflexive + symmetric + transitive",
      "[0], [1], [2] partition ℤ",
      "−1 and 2 lie in the same class"
    ]
  },
  {
    "title": "Keep domain, codomain and range distinct",
    "lines": [
      "f: ℝ→ℝ, f(x)=x²",
      "Range = [0,∞), not all of ℝ",
      "√(x−1)/(x−3): x≥1 and x≠3",
      "Cancellation preserves original exclusions"
    ]
  },
  {
    "title": "Classify injective, onto, into and bijective functions",
    "lines": [
      "x²: ℝ→ℝ is neither one-one nor onto",
      "x²: ℝ→[0,∞) is onto only",
      "x²: [0,∞)→[0,∞) is bijective",
      "2x+3: ℝ→ℝ is bijective"
    ]
  },
  {
    "title": "Count functions, injections and finite bijections",
    "lines": [
      "3 inputs → 2 targets: 2³ = 8 maps",
      "Onto in this case: 8 − 2 = 6",
      "2 inputs → 3 targets: 3×2 = 6 injections",
      "3 ↔ 3: 3! = 6 bijections"
    ]
  },
  {
    "title": "Compose functions in the correct order and domain",
    "lines": [
      "f(x)=2x+1; g(x)=x²",
      "f∘g = 2x²+1; g∘f = (2x+1)²",
      "1/(√x−1): x≥0, x≠1",
      "Inner function first; preserve restrictions"
    ]
  },
  {
    "title": "Find inverses by choosing a bijective domain",
    "lines": [
      "f(x)=2x+3; f⁻¹(y)=(y−3)/2",
      "x² on ℝ has no inverse function",
      "x² on [0,∞) has inverse √y",
      "x²−4: [0,∞)→[−4,∞)"
    ]
  }
] as const;
