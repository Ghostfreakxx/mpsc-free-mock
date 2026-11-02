import type { StudyLesson } from './course';
// Authored by scripts/create-binomial-theorem.mjs.
export const binomialTheoremLesson:StudyLesson = {
  "id": "binomial-theorem",
  "subject": "Mathematics",
  "unit": 5,
  "title": "Binomial theorem: general terms, middle terms and coefficients",
  "summary": "Finite positive integer expansions, general and middle terms, coefficient and constant-term extraction, sums, products and original applications.",
  "prerequisites": "Permutations and combinations, exponent laws, polynomial multiplication and elementary algebra.",
  "remaining": "Ten-chapter recorded companion for Mathematics Unit 5: finite expansions for positive integral indices, general and middle terms and original applications. Weighted sums, greatest positive numerical terms and finite approximation bounds support the core methods. Further mixed parameter and timed practice remain. This is not exhaustive problem coverage or official PYQs.",
  "sections": [
    {
      "title": "Derive the finite binomial expansion by counting choices",
      "formula": "(a+b)ⁿ = Σᵣ₌₀ⁿ C(n,r)aⁿ⁻ʳbʳ, n a positive integer",
      "paragraphs": [
        "The binomial theorem connects multiplication with combinations. For a positive integer n, the expression a plus b raised to n is a product of n identical factors. To produce a term containing r copies of b, choose b from exactly r factors and a from all the others. There are C of n, r ways to choose those factors. Each contributes a to the power n minus r times b to the power r. Adding over r from zero through n gives the finite expansion. There are n plus one indexed terms, with the first using no b and the last using only b. For n equal to four, the coefficients are one, four, six, four, one. Every term has total degree four in a and b. The symmetry of the coefficients follows by exchanging the selected and unselected factors. This counting proof explains why combinations appear instead of permutations: the selected factor positions form a subset. The finite formula applies to positive integer exponents in this class. An exponent such as one half does not produce the same finite expansion. If specific substitutions make some terms vanish or combine, distinguish that simplified expression from the original indexed binomial list."
      ]
    },
    {
      "title": "Find a specified term while keeping signs and term numbers",
      "formula": "Tᵣ₊₁ = C(n,r)aⁿ⁻ʳbʳ; in (2x−3)⁵, [x³] = 720",
      "paragraphs": [
        "The general term is indexed by r, but its position in the expansion is r plus one. The first term uses r equal to zero, so the third term uses r equal to two. This distinction prevents many off by one errors. To find the coefficient of x cubed in two x minus three raised to five, take a as two x and b as negative three. The general term is C of five, r times two x to the power five minus r times negative three to the power r. The variable power is five minus r, so matching it to three gives r equal to two. The coefficient is C of five, two times two cubed times negative three squared, or ten times eight times nine, giving seven hundred twenty. The full term is seven hundred twenty x cubed; the coefficient alone is seven hundred twenty. For the x to the fourth term, r equals one, so its coefficient is five times sixteen times negative three, or negative two hundred forty. Bracket the negative base before taking a power. Finally, check that the solved r is an integer in the allowed range from zero to five before evaluating the combination."
      ]
    },
    {
      "title": "Solve exponent equations for constant and specified powers",
      "formula": "(x²+x⁻¹)⁶: Tᵣ₊₁ = C(6,r)x¹²⁻³ʳ, x≠0",
      "paragraphs": [
        "A binomial may contain the variable in both of its parts. For x squared plus one over x raised to six, the denominator requires x nonzero. The general term is C of six, r times x squared to the power six minus r times one over x to the power r. Combine the exponents to obtain x to the power twelve minus three r. For a constant term, set that exponent to zero, giving r equal to four. The coefficient is C of six, four, or fifteen. The term occupies position five because the term number is r plus one. To find the x cubed term instead, solve twelve minus three r equals three, giving r equal to three and coefficient twenty. Do not assume that every requested power occurs. If the outer exponent were five, the variable exponent would be ten minus three r. Setting it to zero would require r equal to ten thirds, which is not an integer. Therefore that expansion has no constant term. The finite binomial theorem still applies even though the resulting expression contains negative powers of x. Retain the original nonzero domain condition while simplifying all terms."
      ]
    },
    {
      "title": "Locate one or two middle terms by counting positions",
      "formula": "n even: middle Tₙ/₂₊₁; n odd: middle T₍ₙ₊₁₎/₂ and T₍ₙ₊₃₎/₂",
      "paragraphs": [
        "The number of terms, not the exponent by itself, determines how many middle terms exist. An exponent n gives n plus one indexed terms. When n is even, that count is odd and there is one central term at position n divided by two plus one. Thus a plus b raised to eight has nine terms, and its middle is the fifth term. It uses r equal to four and is seventy a to the fourth b to the fourth. When n is odd, the term count is even and there are two central positions. For exponent seven there are eight terms, so take positions four and five, corresponding to r equal to three and four. In one plus two x raised to seven, the fourth term is C of seven, three times two x cubed, giving two hundred eighty x cubed. The fifth is C of seven, four times two x to the fourth, giving five hundred sixty x to the fourth. Their binomial coefficients are equal, but the complete terms need not have equal numerical coefficients after substitution. Write the term positions first, convert them to r values, and then substitute into the general term. This keeps term indexing separate from any special form of a or b."
      ]
    },
    {
      "title": "Extract coefficient sums by evaluating a polynomial",
      "formula": "If F(x)=Σcᵣxʳ, then Σcᵣ=F(1); Σ(−1)ʳcᵣ=F(−1)",
      "paragraphs": [
        "Suppose a polynomial F of x is written as the sum of coefficients c r times x to the power r. Substituting x equal to one makes every variable power equal to one, so F of one is the sum of all coefficients. Substituting negative one gives the sum of even power coefficients minus the sum of odd power coefficients. For one plus x raised to a positive integer n, these values are two to the power n and zero. Adding and subtracting the two equations shows that the even and odd coefficient sums are each two to the power n minus one. For n equal to six, the total sum is sixty four and each parity sum is thirty two. The positive exponent condition matters: for n equal to zero there is only the constant coefficient, so the parity sums are not equal. The same evaluation technique applies to other polynomials, but the numerical results change. For two minus three x raised to four, the sum of coefficients is its value at one, namely one. Its alternating coefficient sum is the value at negative one, namely six hundred twenty five. Keep the polynomial and the chosen evaluation point visible rather than memorizing two to the n for every binomial."
      ]
    },
    {
      "title": "Derive weighted coefficient sums by marking selected objects",
      "formula": "Σr C(n,r)=n2ⁿ⁻¹; Σr(r−1)C(n,r)=n(n−1)2ⁿ⁻² for n≥2",
      "paragraphs": [
        "A weighted coefficient sum can be understood by counting marked subsets. Take n distinct objects and count pairs consisting of a subset and one marked member of that subset. If the subset has size r, it contributes r choices for the mark, so the total is the sum of r times C of n, r. Alternatively, choose the marked object first in n ways. Each of the other n minus one objects may be included or excluded independently. The count is n times two to the power n minus one. For an ordered pair of distinct marked members, the same argument gives n times n minus one times two to the power n minus two, provided n is at least two. Counting by subset size instead gives the sum of r times r minus one times C of n, r. For n equal to five, the first weighted sum is eighty and the ordered pair sum is one hundred sixty. Since r squared equals r times r minus one plus r, the sum of r squared times C of five, r is two hundred forty. The ordered nature of the two marks matters; using an unordered pair would introduce an additional factor of one half. State what is marked before choosing a weighted identity."
      ]
    },
    {
      "title": "Compare adjacent coefficients and positive numerical terms",
      "formula": "C(n,r+1)/C(n,r)=(n−r)/(r+1)",
      "paragraphs": [
        "Neighbouring binomial coefficients can be compared without calculating every factorial. The ratio of C of n, r plus one to C of n, r is n minus r divided by r plus one. As r increases, this ratio moves from above one to below one. This explains the central greatest coefficient or equal central pair. For exponent five, the coefficient row is one, five, ten, ten, five, one; its greatest coefficients are the two tens. Complete numerical terms can have different maxima because their powers also contribute. In one plus two raised to five, the indexed terms are C of five, r times two to the power r. The ratio of the next term to the current term is two times five minus r divided by r plus one. The numerical list is one, ten, forty, eighty, eighty, thirty two. Its greatest terms are the fourth and fifth, each eighty. The equality case in the ratio must be retained to find both. This argument compares positive terms; for signed expressions distinguish algebraically greatest values from greatest magnitudes. If a variable appears, its specified value and sign are needed before ranking complete terms. A greatest coefficient question and a greatest numerical term question therefore require different comparisons."
      ]
    },
    {
      "title": "Extract coefficients from products of finite expansions",
      "formula": "[xᵏ](1+x)ᵐ(1+x)ⁿ = C(m+n,k)",
      "paragraphs": [
        "A product coefficient receives contributions from every pair of powers that adds to the requested exponent. For one plus x raised to four times one plus x raised to five, the product is one plus x raised to nine. Its x cubed coefficient is therefore C of nine, three, or eighty four. Expanding the factors separately gives the same result by summing C of four, r times C of five, three minus r over the valid indices. This is a finite coefficient identity, often called Vandermonde's identity. Its reason is the same selection count split between two disjoint groups. For factors with different weights or signs, do not combine their exponents as though their bases were identical. Consider the product of two binomial powers: one plus two x, all cubed, multiplied by one minus x, all squared. The x squared coefficient has three contributions: twelve from x squared times the constant, negative twelve from the two x coefficients, and one from the constant times x squared. Their sum is one. Write each contribution explicitly to preserve signs. For coefficient extraction, only terms up to the desired degree are needed, which can save substantial expansion work."
      ]
    },
    {
      "title": "Recover integer exponents and real parameters from coefficients",
      "formula": "C(n,2)=45 ⇒ n(n−1)=90 ⇒ n=10 for positive integer n",
      "paragraphs": [
        "A coefficient condition can determine an unknown exponent or parameter. If the coefficient of x squared in one plus x raised to n is forty five, then C of n, two equals forty five. This gives n times n minus one equals ninety, or n squared minus n minus ninety equals zero. Factoring yields n equal to ten or negative nine. The stated exponent is a positive integer, so only ten is admissible. If the ratio C of n, three divided by C of n, two equals two, simplifying gives n minus two divided by three equals two, hence n equal to eight. This ratio presumes the relevant coefficients exist and the denominator is nonzero. Now let the coefficient of x squared in one plus a x raised to four be twenty four. That coefficient is six a squared, so a squared equals four. For real a there are two possibilities, plus two and minus two. A positive answer cannot be chosen without another condition. If the coefficient of x is additionally eight, then four a equals eight and selects a equal to two. Solve the algebra, then restore all original integer, domain and sign restrictions."
      ]
    },
    {
      "title": "Separate exact finite expansions from approximations and remainders",
      "formula": "(1+t)⁵=1+5t+10t²+10t³+5t⁴+t⁵",
      "paragraphs": [
        "A finite expansion is exact when every term is retained. Approximating means deliberately discarding some of those terms. For one plus t raised to five, the exact coefficients are one, five, ten, ten, five, one. With t equal to zero point zero two, retaining only the constant and linear term gives one point one zero. Retaining the quadratic term as well gives one point one zero four. The exact value is one point one zero four zero eight zero eight zero three two. Because t is positive, all omitted terms here are positive, so both truncations underestimate the exact value. The error after the quadratic term is ten t cubed plus five t to the fourth plus t to the fifth. For zero at most t at most zero point zero two, replacing t in each positive remainder term by zero point zero two bounds that error by eight point zero eight zero three two times ten to the power negative five. Check a requested accuracy before deciding how many terms to keep. A different application uses integer divisibility: write five to the fifth as one plus four raised to five. Modulo sixteen, every term from r equal to two onward is divisible by sixteen. The remainder is therefore that of one plus twenty, namely five. These applications use the same exact positive integer expansion with clearly stated operations."
      ]
    }
  ],
  "examples": [
    {
      "question": "Find the coefficient of x³ and the term number producing it in (2x−3)⁵.",
      "steps": [
        "Tᵣ₊₁=C(5,r)(2x)⁵⁻ʳ(−3)ʳ.",
        "Set 5−r=3, giving r=2 and term number 3.",
        "Compute C(5,2)2³(−3)²=10×8×9=720."
      ],
      "answer": "Third term 720x³; coefficient 720."
    },
    {
      "question": "Find the constant term of (x²+x⁻¹)⁶ and decide whether (x²+x⁻¹)⁵ has one.",
      "steps": [
        "For outer exponent 6, the variable exponent is 12−3r. Set it to zero to obtain r=4.",
        "The constant term is C(6,4)=15. Keep the original condition x≠0.",
        "For outer exponent 5, zero exponent requires r=10/3, which is not an integer."
      ],
      "answer": "15 in the first expansion; no constant term in the second."
    },
    {
      "question": "Find both middle terms of (1+2x)⁷.",
      "steps": [
        "There are 8 indexed terms, so use positions 4 and 5.",
        "Their indices are r=3 and r=4.",
        "C(7,3)(2x)³=280x³ and C(7,4)(2x)⁴=560x⁴."
      ],
      "answer": "280x³ and 560x⁴."
    },
    {
      "question": "For the binomial coefficients C(5,r), find the total sum, each parity sum and Σr²C(5,r).",
      "steps": [
        "At x=1 and x=−1, (1+x)⁵ gives total 32 and even-minus-odd sum 0, so each parity sum is 16.",
        "Marked-subset counting gives ΣrC(5,r)=5×16=80.",
        "Ordered-pair marking gives Σr(r−1)C(5,r)=5×4×8=160; add 80 using r²=r(r−1)+r."
      ],
      "answer": "Total 32; even and odd sums 16 each; square-weighted sum 240."
    },
    {
      "question": "Find the greatest numerical terms in the indexed expansion of (1+2)⁵.",
      "steps": [
        "Write Uᵣ=C(5,r)2ʳ for r=0,…,5.",
        "The adjacent ratio is Uᵣ₊₁/Uᵣ=2(5−r)/(r+1). It equals 1 at r=3.",
        "The list 1,10,40,80,80,32 confirms the equal maximum at indices 3 and 4."
      ],
      "answer": "Fourth and fifth terms, each 80."
    },
    {
      "question": "Find the coefficient of x² in (1+2x)³(1−x)².",
      "steps": [
        "Terms needed from the first factor are 1+6x+12x²; terms from the second are 1−2x+x².",
        "Power pairs contributing x² are (2,0), (1,1) and (0,2).",
        "Multiply coefficients and add: 12×1+6×(−2)+1×1=1."
      ],
      "answer": "Coefficient 1."
    },
    {
      "question": "Determine a real a from [x²](1+ax)⁴=24, then impose [x](1+ax)⁴=8.",
      "steps": [
        "The first condition gives 6a²=24, so a=2 or a=−2.",
        "The second condition gives 4a=8.",
        "Intersect both conditions rather than discarding a negative root without evidence."
      ],
      "answer": "The first condition permits ±2; together they give a=2."
    },
    {
      "question": "Estimate (1.02)⁵ through its quadratic term and bound the remainder for 0≤t≤0.02 in (1+t)⁵.",
      "steps": [
        "The quadratic truncation is 1+5t+10t², equal to 1.104 at t=0.02.",
        "The exact omitted remainder is R=10t³+5t⁴+t⁵. Every term is nonnegative in the stated interval.",
        "Substituting the upper endpoint into each increasing term gives 0≤R≤0.0000808032."
      ],
      "answer": "Estimate 1.104; exact value at t=0.02 is 1.1040808032; stated remainder bound holds."
    }
  ],
  "quiz": [
    {
      "question": "Before special substitutions, (a+b)⁷ has how many indexed binomial terms?",
      "options": [
        "7",
        "8",
        "6",
        "14"
      ],
      "answer": 1,
      "explanation": "The index runs from r=0 through r=7 inclusive. This gives n+1=8 terms before substitutions make any terms vanish or combine."
    },
    {
      "question": "The coefficient of a²b² in (a+b)⁴ is:",
      "options": [
        "4",
        "12",
        "6",
        "8"
      ],
      "answer": 2,
      "explanation": "Choose the two factors supplying b from four factors. The coefficient is C(4,2)=4!/(2!2!)=6."
    },
    {
      "question": "In Tᵣ₊₁=C(n,r)aⁿ⁻ʳbʳ, r=2 corresponds to the:",
      "options": [
        "First term",
        "Second term",
        "Fourth term",
        "Third term"
      ],
      "answer": 3,
      "explanation": "The indexing begins at r=0 for the first term, so r=2 means term number r+1=3."
    },
    {
      "question": "The coefficient of x³ in (2x−3)⁵ is:",
      "options": [
        "720",
        "−720",
        "240",
        "−240"
      ],
      "answer": 0,
      "explanation": "Matching 5−r=3 gives r=2. The coefficient is C(5,2)2³(−3)²=10×8×9=720, including the even power of the negative base."
    },
    {
      "question": "For x≠0, the constant term of (x²+x⁻¹)⁶ is:",
      "options": [
        "20",
        "15",
        "6",
        "1"
      ],
      "answer": 1,
      "explanation": "The exponent of x is 2(6−r)−r=12−3r. Setting it to zero gives r=4, so the constant term is C(6,4)=15."
    },
    {
      "question": "The expansion of (x²+x⁻¹)⁵, x≠0, has:",
      "options": [
        "Constant term 10",
        "Constant term 5",
        "No constant term",
        "Constant term 1"
      ],
      "answer": 2,
      "explanation": "A zero exponent would require 10−3r=0, hence r=10/3. This is not an integer index, so the expansion has no constant term."
    },
    {
      "question": "The single middle term of (a+b)⁸ occupies position:",
      "options": [
        "4",
        "6",
        "8",
        "5"
      ],
      "answer": 3,
      "explanation": "The expansion has nine indexed terms, so its central position is the fifth. It uses r=4 in the general term."
    },
    {
      "question": "The two middle terms of (1+2x)⁷ are:",
      "options": [
        "280x³ and 560x⁴",
        "35x³ and 35x⁴",
        "560x³ and 280x⁴",
        "140x³ and 280x⁴"
      ],
      "answer": 0,
      "explanation": "Eight terms have central positions 4 and 5, corresponding to r=3 and r=4. Include the factors 2³ and 2⁴ to obtain 280 and 560."
    },
    {
      "question": "The sum of all coefficients of (1+x)⁶ is:",
      "options": [
        "32",
        "64",
        "6",
        "12"
      ],
      "answer": 1,
      "explanation": "Set x=1 in the polynomial. The coefficient sum becomes (1+1)⁶=2⁶=64."
    },
    {
      "question": "The sum of the coefficients of even powers in (1+x)⁶ is:",
      "options": [
        "64",
        "16",
        "32",
        "0"
      ],
      "answer": 2,
      "explanation": "Evaluation at x=1 gives even sum plus odd sum equal to 64. Evaluation at x=−1 gives their difference zero, so each sum is 32."
    },
    {
      "question": "The value of Σᵣ₌₀⁵ r C(5,r) is:",
      "options": [
        "32",
        "160",
        "240",
        "80"
      ],
      "answer": 3,
      "explanation": "Choose a marked element first in 5 ways, then independently include or exclude each of the other 4 elements. The count is 5×2⁴=80."
    },
    {
      "question": "The value of Σᵣ₌₀⁵ r²C(5,r) is:",
      "options": [
        "240",
        "80",
        "160",
        "320"
      ],
      "answer": 0,
      "explanation": "Use r²=r(r−1)+r. The two weighted sums are 5×4×2³=160 and 5×2⁴=80, giving 240 in total."
    },
    {
      "question": "The greatest binomial coefficient in (1+x)⁵ is:",
      "options": [
        "5",
        "10",
        "20",
        "32"
      ],
      "answer": 1,
      "explanation": "The row is 1,5,10,10,5,1. Its two central coefficients are both 10; the powers of a numerical substitution are not included here."
    },
    {
      "question": "In the indexed expansion of (1+2)⁵, the greatest numerical terms are:",
      "options": [
        "T₃ only, value 40",
        "T₄ only, value 80",
        "T₄ and T₅, each 80",
        "T₅ and T₆, each 32"
      ],
      "answer": 2,
      "explanation": "The term list is 1,10,40,80,80,32. Keeping the equality case in the adjacent-term ratio identifies both greatest terms."
    },
    {
      "question": "The coefficient of x³ in (1+x)⁴(1+x)⁵ is:",
      "options": [
        "35",
        "45",
        "126",
        "84"
      ],
      "answer": 3,
      "explanation": "The identical bases allow the product to be written (1+x)⁹. Its x³ coefficient is C(9,3)=84."
    },
    {
      "question": "The coefficient of x² in (1+2x)³(1−x)² is:",
      "options": [
        "1",
        "12",
        "−1",
        "25"
      ],
      "answer": 0,
      "explanation": "The contributions are 12 from x²×1, −12 from x×x, and 1 from 1×x². Their sum is 1."
    },
    {
      "question": "For a positive integer n, C(n,2)=45 gives:",
      "options": [
        "n=9",
        "n=10",
        "n=−9",
        "n=11"
      ],
      "answer": 1,
      "explanation": "The equation n(n−1)=90 has roots 10 and −9. Only the positive integer root n=10 is admissible."
    },
    {
      "question": "If a is real and the coefficient of x² in (1+ax)⁴ is 24, then:",
      "options": [
        "a=2 only",
        "a=−2 only",
        "a=±2",
        "a=4"
      ],
      "answer": 2,
      "explanation": "The coefficient is C(4,2)a²=6a². Thus a²=4, giving two real possibilities unless another condition determines the sign."
    },
    {
      "question": "Keeping only the constant and linear terms to estimate (1.02)⁵ gives:",
      "options": [
        "1.104",
        "1.1040808032",
        "1.02",
        "1.10"
      ],
      "answer": 3,
      "explanation": "Write (1+0.02)⁵ and retain 1+5(0.02)=1.10. The higher positive terms are omitted, so this estimate is an underestimate."
    },
    {
      "question": "The remainder when 5⁵ is divided by 16 is:",
      "options": [
        "5",
        "1",
        "4",
        "9"
      ],
      "answer": 0,
      "explanation": "Expand (1+4)⁵. Terms containing 4² or higher powers are divisible by 16, leaving 1+5×4=21, whose remainder is 5."
    }
  ],
  "sources": [
    {
      "title": "NTA JEE Main 2026 Mathematics Unit 5",
      "url": "https://jeemain.nta.nic.in/document/syllabus-2026/"
    },
    {
      "title": "OpenStax: Binomial Theorem",
      "url": "https://openstax.org/books/algebra-and-trigonometry-2e/pages/13-6-binomial-theorem"
    }
  ]
};
