export const countingBoards = [
  {
    "title": "Choose the addition rule or multiplication rule",
    "lines": [
      "Outfit: 2 shirts × 3 trousers × 2 shoes",
      "Successive choices: 2×3×2 = 12",
      "One service: 4 trains OR 3 buses",
      "Disjoint alternatives: 4+3 = 7"
    ]
  },
  {
    "title": "Count ordered selections using permutations",
    "lines": [
      "7 runners, 3 ranked positions",
      "7×6×5 = P(7,3) = 210",
      "P(n,r) = n!/(n−r)!",
      "P(n,0)=1; 0!=1"
    ]
  },
  {
    "title": "Count unordered selections and derive combination identities",
    "lines": [
      "Choose 3 from 7: C(7,3)=35",
      "P(7,3) = 3! C(7,3)",
      "C(7,3) = C(7,4)",
      "C(7,3) = C(6,2)+C(6,3)"
    ]
  },
  {
    "title": "Arrange objects with repeated types",
    "lines": [
      "BANANA: A×3, N×2, B×1",
      "6!/(3!2!) = 60 strings",
      "AAB, ABA, BAA: 3 strings",
      "Divide only for indistinguishable copies"
    ]
  },
  {
    "title": "Use blocks to enforce adjacency",
    "lines": [
      "5 distinct people; A,B adjacent",
      "Block AB or BA + 3 other people",
      "4! × 2! = 48 rows",
      "Three together: 3! × 3! = 36"
    ]
  },
  {
    "title": "Use gaps to prevent selected neighbours",
    "lines": [
      "3 anchors create 4 gaps",
      "Choose 2 gaps; order the 2 specials",
      "3! C(4,2)2! = 72",
      "4 anchors, 3 specials: 4! C(5,3)3!"
    ]
  },
  {
    "title": "Specify what makes circular arrangements equivalent",
    "lines": [
      "6 people; rotations identified",
      "Fix one person: 5! = 120",
      "Reflections distinct in this model",
      "6 labelled chairs: 6! = 720"
    ]
  },
  {
    "title": "Count digit strings and numbers with a leading-zero rule",
    "lines": [
      "Digits {0,1,2,3,4}; no repeats",
      "3-digit numbers: 4×4×3 = 48",
      "Even: end 0 → 12; end 2 or 4 → 18",
      "Total even numbers = 12+18 = 30"
    ]
  },
  {
    "title": "Select constrained committees and then assign roles",
    "lines": [
      "C(9,3) = 84 total committees",
      "At least 1 woman: 84−C(4,3)=80",
      "Exactly 2 women: C(5,2)C(4,1)=40",
      "Committee + chair: C(9,3)×3 = 252"
    ]
  },
  {
    "title": "Translate identical-object distributions into nonnegative solutions",
    "lines": [
      "5 identical balls → 3 labelled boxes",
      "x+y+z=5, nonnegative: C(7,2)=21",
      "Every box nonempty: C(4,2)=6",
      "5 distinct balls: 3⁵=243 assignments"
    ]
  }
] as const;
