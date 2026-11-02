// Authored by scripts/create-sets-functions-recording.mjs.
export const setsFunctionsAdditions = {
  "sections": [
    {
      "title": "Use set algebra with a stated universal set",
      "formula": "(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ; (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ",
      "paragraphs": [
        "Fix the universal set before taking a complement. Let U contain the integers one through six, A contain one, two, three, and B contain three, four. The union contains one, two, three, four; the intersection contains only three. The complement of A contains four, five, six. The difference A minus B contains one, two, whereas B minus A contains four. Set difference is therefore not commutative. De Morgan's laws explain how a complement crosses a union or intersection. Not belonging to either A or B means belonging to both complements, so the complement of their union is the intersection of their complements. Not belonging to their intersection means failing at least one membership condition, so it gives the union of complements. Intersection distributes over union, and union distributes over intersection. You can check a proposed identity by following one arbitrary element and its membership conditions. For example, membership in A intersect B union C means membership in A and membership in at least one of B or C. This becomes the union of A intersect B and A intersect C. Keep brackets clear: changing them can change the set being described."
      ]
    },
    {
      "title": "Count unions without double counting",
      "formula": "|A∪B∪C| = |A|+|B|+|C|−|A∩B|−|B∩C|−|C∩A|+|A∩B∩C|",
      "paragraphs": [
        "Counting union members requires correcting repeated counts. Suppose a group has forty students, twenty four in A, nineteen in B, and eight in both. Adding twenty four and nineteen counts those eight students twice. Subtract them once to obtain thirty five in at least one set, leaving five in neither. Exactly one set contains twenty four plus nineteen minus twice eight, giving twenty seven. With three sets, add the three sizes, subtract all three pairwise intersection sizes, then add the triple intersection once. Why add it back? A student in all three was counted three times initially and subtracted three times, so needs one final count. For sizes twenty, eighteen, fifteen, pairwise intersection sizes eight, seven, six, and triple size three, the union has thirty five members. The number in exactly two sets is the sum of the pairwise sizes minus three times the triple size, giving twelve. Pairwise intersection counts ordinarily include students in the third set unless the wording explicitly says otherwise. Draw disjoint regions starting at the triple intersection when the data feel confusing. Finally, verify that every derived region is nonnegative and that the union does not exceed the supplied group size."
      ]
    },
    {
      "title": "Distinguish relation properties using ordered pairs",
      "formula": "R ⊆ A×A; reflexive, symmetric, antisymmetric and transitive are separate tests",
      "paragraphs": [
        "A binary relation from A to B is a subset of the Cartesian product A cross B. Each member is an ordered pair, so reversing its entries need not preserve membership. For a relation on A, reflexivity requires every pair a, a. Symmetry says that whenever a, b belongs, b, a also belongs. Antisymmetry says that if both a, b and b, a belong, then a must equal b. This is not simply the opposite of symmetry: the identity relation is both symmetric and antisymmetric. Transitivity requires a, c whenever a, b and b, c belong. Consider the less than or equal relation on real numbers. It is reflexive, antisymmetric and transitive, but not symmetric. The relation of having the same absolute value is reflexive, symmetric and transitive. To disprove a property, one counterexample is enough. To establish it for an infinite set, use an argument covering arbitrary elements rather than checking only a few examples. The empty relation on a nonempty set is not reflexive, while symmetry and transitivity hold because no pairs trigger a failure. Always state the underlying set: changing it can change the truth of a property."
      ]
    },
    {
      "title": "Build equivalence classes from an equivalence relation",
      "formula": "aRb ⇔ a−b is divisible by 3; classes [0], [1], [2]",
      "paragraphs": [
        "An equivalence relation is reflexive, symmetric and transitive. These three conditions make its equivalence classes divide the underlying set into disjoint groups. On the integers, define a related to b when a minus b is divisible by three. Reflexivity follows because a minus a is zero, a multiple of three. If a minus b is divisible by three, its negative b minus a is too, establishing symmetry. If a minus b and b minus c are divisible by three, their sum a minus c is divisible by three, establishing transitivity. Integers fall into three classes according to remainder zero, one or two after division by three. Negative integers belong too: negative one is in the same class as two because their difference is negative three. Every integer belongs to exactly one class, and two classes sharing a member must be the same class. This is the partition property. Conversely, a partition defines an equivalence relation by declaring two elements related when they lie in the same block. Do not use a merely symmetric relation as an equivalence relation without checking transitivity and reflexivity. For example, being unequal is symmetric on the integers but fails reflexivity and also fails transitivity."
      ]
    },
    {
      "title": "Classify injective, onto, into and bijective functions",
      "formula": "Injective: f(a)=f(b) ⇒ a=b; onto: range = codomain",
      "paragraphs": [
        "A function is injective, or one to one, when equal outputs imply equal inputs. It is onto, or surjective, when every member of its codomain is reached. A function whose range is a proper subset of its codomain is often called into. These conditions answer different questions. The square function from the reals to the reals is neither injective nor onto: one and negative one share an output, and negative numbers are missed. Keep the real domain but change the codomain to the nonnegative reals. It becomes onto but remains noninjective. Restrict both domain and codomain to the nonnegative reals. It is now injective and onto, hence bijective. An affine function two x plus three from the reals to the reals is bijective: equal outputs give equal inputs, and any target y has input y minus three divided by two. A constant function on a domain with at least two elements is not injective, but it is onto a codomain containing only its constant value. State the sets every time; a formula alone does not settle the classification. Use a counterexample to refute injectivity and solve for a preimage to establish surjectivity."
      ]
    },
    {
      "title": "Count functions, injections and finite bijections",
      "formula": "|A|=m, |B|=n: functions nᵐ; injections n!/(n−m)! when m≤n",
      "paragraphs": [
        "For a finite domain containing m elements and a finite codomain containing n elements, each input can independently choose any of n outputs. This gives n to the power m functions. With a three element domain and a two element codomain, there are eight functions. Exactly two are constant, and the other six hit both target elements, so there are six onto functions in this particular case. There are no injections because three distinct inputs cannot have distinct outputs in only two target positions. Reverse the sizes: a two element domain and three element codomain give nine functions and six injections, but no surjections. An injection uses three choices for the first output and two for the second. In general, for m no greater than n, the injection count is n factorial divided by n minus m factorial. If m exceeds n, it is zero. A bijection between two finite sets of the same size n is a permutation of the targets, giving n factorial choices. For equal finite sizes, injectivity and surjectivity are equivalent, but this shortcut is not a general rule for infinite sets. Keep the finite hypothesis attached to the counting argument."
      ]
    },
    {
      "title": "Find inverses by choosing a bijective domain",
      "formula": "f⁻¹∘f = I_A; f∘f⁻¹ = I_B for a bijection f:A→B",
      "paragraphs": [
        "An inverse function undoes a bijection. If f maps A bijectively onto B, its inverse maps B back to A. Composing the inverse after f gives the identity on A, and composing f after its inverse gives the identity on B. The notation f inverse is not a reciprocal. For f of x equal two x plus three on the reals, solve y equals two x plus three for x. This gives x equal to y minus three divided by two, so the inverse takes an input y to that value. Verify both compositions, not just a symbolic swap. The square function on all reals has no inverse function because positive and negative inputs can share an output. Restrict the original domain to the nonnegative reals and take the nonnegative reals as codomain. Then its inverse is the nonnegative square root. The alternative negative half line produces a different inverse branch. For f of x equal x squared minus four on x at least zero, the codomain must be the interval starting at negative four for a bijection. Its inverse is square root of y plus four. Domain and codomain restrictions therefore determine which inverse is valid."
      ]
    }
  ],
  "quiz": [
    {
      "question": "How many proper subsets does a set of 4 distinct elements have?",
      "options": [
        "16",
        "15",
        "8",
        "4"
      ],
      "answer": 1,
      "explanation": "There are 2⁴=16 subsets, including the whole set. Remove only the whole set to obtain 15 proper subsets; the empty set remains included."
    },
    {
      "question": "For U={1,2,3,4,5,6}, A={1,2,3}, B={3,4}, A∖B is:",
      "options": [
        "{4}",
        "{3}",
        "{1,2}",
        "{1,2,3,4}"
      ],
      "answer": 2,
      "explanation": "A∖B contains members of A that do not belong to B. Remove the shared element 3 from A, leaving the set {1,2}."
    },
    {
      "question": "The complement of A∪B, relative to a fixed U, is:",
      "options": [
        "Aᶜ∪Bᶜ",
        "A∩B",
        "A∪Bᶜ",
        "Aᶜ∩Bᶜ"
      ],
      "answer": 3,
      "explanation": "De Morgan’s law says an element is outside the union exactly when it is outside both sets, giving the intersection of the two complements."
    },
    {
      "question": "In a group of 40, |A|=24, |B|=19 and |A∩B|=8. How many are in neither?",
      "options": [
        "5",
        "13",
        "8",
        "27"
      ],
      "answer": 0,
      "explanation": "The union has 24+19−8=35 members. Subtract that from the universal total 40 to obtain 5 students in neither set."
    },
    {
      "question": "For three sets of sizes 20,18,15, pairwise intersections 8,7,6 and triple intersection 3, the union size is:",
      "options": [
        "32",
        "35",
        "38",
        "44"
      ],
      "answer": 1,
      "explanation": "Inclusion-exclusion gives 20+18+15−8−7−6+3=35. Pairwise intersections already include the triple intersection."
    },
    {
      "question": "Which property requires that (a,b) and (b,a) in R imply a=b?",
      "options": [
        "Symmetry",
        "Reflexivity",
        "Antisymmetry",
        "Surjectivity"
      ],
      "answer": 2,
      "explanation": "Antisymmetry allows a pair and its reverse simultaneously only when their entries coincide. It is different from the property called symmetry."
    },
    {
      "question": "An equivalence relation must be:",
      "options": [
        "Symmetric only",
        "Reflexive and antisymmetric only",
        "Onto and one-one",
        "Reflexive, symmetric and transitive"
      ],
      "answer": 3,
      "explanation": "All three properties are required. Together they ensure equivalence classes form disjoint blocks whose union is the underlying set."
    },
    {
      "question": "On ℤ, aRb means 3 divides a−b. Which pair lies in one equivalence class?",
      "options": [
        "−1 and 2",
        "0 and 1",
        "1 and 2",
        "2 and 3"
      ],
      "answer": 0,
      "explanation": "The difference −1−2 is −3, a multiple of 3. The two integers therefore have the same remainder class modulo 3."
    },
    {
      "question": "The real domain of √(x−1)/(x−3) is:",
      "options": [
        "All real numbers",
        "[1,3)∪(3,∞)",
        "[1,∞)",
        "(3,∞)"
      ],
      "answer": 1,
      "explanation": "The square root requires x≥1 and the denominator requires x≠3. Intersecting the conditions gives the stated two intervals."
    },
    {
      "question": "The function f:ℝ→[0,∞), f(x)=x², is:",
      "options": [
        "One-one and onto",
        "One-one but not onto",
        "Onto but not one-one",
        "Neither"
      ],
      "answer": 2,
      "explanation": "Every nonnegative target has a real square root, so the map is onto. Inputs 1 and −1 have the same output, so it is not injective."
    },
    {
      "question": "Which square-function specification is bijective?",
      "options": [
        "ℝ→ℝ",
        "ℝ→[0,∞)",
        "[0,∞)→ℝ",
        "[0,∞)→[0,∞)"
      ],
      "answer": 3,
      "explanation": "Restricting to nonnegative inputs makes squaring injective, and every nonnegative target is reached. Both conditions for bijection hold."
    },
    {
      "question": "How many functions map a 3-element set onto a 2-element set?",
      "options": [
        "6",
        "8",
        "2",
        "0"
      ],
      "answer": 0,
      "explanation": "There are 2³=8 functions in total. Exactly two are constant and fail to hit both targets; the remaining 6 are onto."
    },
    {
      "question": "How many injections map a 2-element set into a 3-element set?",
      "options": [
        "9",
        "6",
        "3",
        "0"
      ],
      "answer": 1,
      "explanation": "The first input has three possible outputs and the second must use one of the other two. Thus the injection count is 3×2=6."
    },
    {
      "question": "For f(x)=2x+1 and g(x)=x², (f∘g)(x) is:",
      "options": [
        "(2x+1)²",
        "2x+2",
        "2x²+1",
        "x²+1"
      ],
      "answer": 2,
      "explanation": "Apply g first to obtain x², then apply f. The result is 2x²+1; reversing the order would give (2x+1)²."
    },
    {
      "question": "The domain of 1/(√x−1) over the reals is:",
      "options": [
        "ℝ except 1",
        "(0,∞)",
        "[0,∞)",
        "[0,1)∪(1,∞)"
      ],
      "answer": 3,
      "explanation": "The square root requires x≥0 and the denominator vanishes at x=1. Zero is permitted, but one must be excluded."
    },
    {
      "question": "For f:[0,∞)→[−4,∞), f(x)=x²−4, the inverse is:",
      "options": [
        "√(y+4)",
        "±√(y+4)",
        "1/(y²−4)",
        "√y−4"
      ],
      "answer": 0,
      "explanation": "The original nonnegative domain chooses the positive square-root branch. Solving y=x²−4 gives x=√(y+4) for y≥−4."
    }
  ],
  "examples": [
    {
      "question": "For A={∅,1,2}, find |A|, |P(A)| and the number of proper subsets.",
      "steps": [
        "The empty set is one member of A, so A contains three distinct members.",
        "A power set has 2³=8 members.",
        "Only A itself is excluded when counting proper subsets."
      ],
      "answer": "3 members; 8 subsets; 7 proper subsets."
    },
    {
      "question": "Prove that congruence modulo 3 is an equivalence relation on ℤ.",
      "steps": [
        "a−a=0 is divisible by 3, giving reflexivity.",
        "If 3 divides a−b, it divides its negative b−a, giving symmetry.",
        "If 3 divides a−b and b−c, it divides their sum a−c, giving transitivity."
      ],
      "answer": "The three classes represented by 0,1,2 partition ℤ."
    },
    {
      "question": "Classify f(x)=x² under real and nonnegative domain/codomain choices.",
      "steps": [
        "ℝ→ℝ misses all negative targets and repeats outputs for ±x.",
        "ℝ→[0,∞) is onto but repeats outputs.",
        "[0,∞)→[0,∞) is both one-one and onto."
      ],
      "answer": "The third specification is bijective; a formula alone does not fix classification."
    },
    {
      "question": "Count all functions, injections and surjections from a 3-element set to a 2-element set.",
      "steps": [
        "Each of three inputs chooses one of two targets: 2³=8 functions.",
        "An injection cannot place three distinct inputs into two distinct target positions.",
        "Remove two constant maps to obtain all onto maps."
      ],
      "answer": "8 functions, 0 injections, 6 surjections."
    },
    {
      "question": "Find the domain of f(g(x)) when f(u)=1/(u−1) and g(x)=√x.",
      "steps": [
        "The inner square root requires x≥0.",
        "The outer function excludes g(x)=1, hence x=1.",
        "Combine the conditions; do not exclude x=0, since the denominator there is −1."
      ],
      "answer": "[0,1)∪(1,∞)."
    },
    {
      "question": "Find and verify the inverse of f:[0,∞)→[−4,∞), f(x)=x²−4.",
      "steps": [
        "Solve y=x²−4 for the nonnegative x: x=√(y+4).",
        "For x≥0, √(x²)=x, so f⁻¹(f(x))=x.",
        "For y≥−4, (√(y+4))²−4=y, so f(f⁻¹(y))=y."
      ],
      "answer": "f⁻¹(y)=√(y+4), with domain [−4,∞)."
    }
  ],
  "sources": [
    {
      "title": "NTA JEE Main 2026 Mathematics Unit 1",
      "url": "https://jeemain.nta.nic.in/document/syllabus-2026/"
    },
    {
      "title": "NCERT Mathematics XI: Sets",
      "url": "https://ncert.nic.in/textbook/pdf/kemh101.pdf"
    },
    {
      "title": "NCERT Mathematics XII: Relations and Functions",
      "url": "https://ncert.nic.in/textbook/pdf/lemh101.pdf"
    }
  ]
};
