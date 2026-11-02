export const sequenceBoards = [
  {
    "title": "Distinguish a term, a sequence and a partial sum",
    "lines": [
      "aₙ=3n+2 ⇒ a₄=14",
      "Sₙ adds the first n terms",
      "aₙ=Sₙ−Sₙ₋₁; S₀=0",
      "Sₙ=3n²+2n ⇒ aₙ=6n−1"
    ]
  },
  {
    "title": "Derive the nth term of an arithmetic progression",
    "lines": [
      "a₃=8; a₈=23",
      "5d=23−8 ⇒ d=3",
      "a=8−2×3=2",
      "a₁₀=2+9×3=29"
    ]
  },
  {
    "title": "Pair an AP with its reverse to derive its finite sum",
    "lines": [
      "AP: 2,5,8,…,29 has 10 terms",
      "2S₁₀=10(2+29)",
      "S₁₀=155",
      "1+3+⋯+(2n−1)=n²"
    ]
  },
  {
    "title": "Insert arithmetic means by counting the gaps",
    "lines": [
      "Insert 3 means between 2 and 18",
      "4 gaps ⇒ d=(18−2)/4=4",
      "2,6,10,14,18",
      "AM of 4 and 16 is (4+16)/2=10"
    ]
  },
  {
    "title": "Recognize geometric progressions and track the ratio sign",
    "lines": [
      "GP: 3,6,12,24,48,96",
      "a₆=3×2⁵=96",
      "Ratio −3: 2,−6,18,−54",
      "Use recurrence when division is undefined"
    ]
  },
  {
    "title": "Derive a finite GP sum and handle ratio one separately",
    "lines": [
      "S₆=3(2⁶−1)/(2−1)=189",
      "Subtract rSₙ from Sₙ to cancel",
      "r=1: Sₙ=na, not a 0/0 formula",
      "2−2+2−2+2=2"
    ]
  },
  {
    "title": "Insert positive geometric means and retain sign conditions",
    "lines": [
      "2,6,18,54,162 is a positive GP",
      "r⁴=162/2=81 ⇒ positive r=3",
      "Three inserted means: 6,18,54",
      "Positive GM of 4 and 16 is 8"
    ]
  },
  {
    "title": "Prove and interpret the relation between AM and GM",
    "lines": [
      "A=(u+v)/2; G=√(uv), u,v>0",
      "(√u−√v)²≥0 ⇒ A≥G",
      "A=G exactly when u=v",
      "A=10,G=8 ⇒ numbers 4 and 16"
    ]
  },
  {
    "title": "Apply AM–GM with the equality condition and domain",
    "lines": [
      "u+v=20 ⇒ uv≤100",
      "Equality: u=v=10",
      "x+9/x≥6 for x>0",
      "Equality: x=3 gives the minimum"
    ]
  },
  {
    "title": "Use an infinite GP sum only when its partial sums converge",
    "lines": [
      "3+3/2+3/4+⋯ = 6",
      "3−3/2+3/4−⋯ = 2",
      "Require |r|<1 for nonzero first term",
      "r=−1: partial sums 3,0,3,0,…"
    ]
  }
] as const;
