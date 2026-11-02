import type { StudyLesson } from './course';
// Authored by scripts/create-permutations-combinations.mjs.
export const permutationsCombinationsLesson:StudyLesson = {
  "id": "permutations-combinations",
  "subject": "Mathematics",
  "unit": 4,
  "title": "Permutations and combinations: count choices, order and restrictions",
  "summary": "Counting principles, ordered and unordered selections, repeated objects, blocks, gaps, circular seating, digit constraints and committee selection.",
  "prerequisites": "Sets, factorial arithmetic, multiplication, simple algebra and nonnegative integers.",
  "remaining": "Ten-chapter recorded companion for Mathematics Unit 4 covering fundamental counting, permutations, combinations and original applications. Circular and identical-object distribution models state their additional assumptions explicitly. Further overlapping constraints, mixed counting and timed practice remain. This is not exhaustive problem coverage or official PYQs.",
  "sections": [
    {
      "title": "Choose the addition rule or multiplication rule",
      "formula": "Disjoint alternatives: m+n; successive choices: m×n",
      "paragraphs": [
        "Counting begins by defining an outcome. If you choose one shirt, one pair of trousers and one pair of shoes, an outfit is the complete triple of choices. With two shirts, three trousers and two shoe options, there are two times three times two, or twelve outfits. This multiplication rule works because each partial choice admits the stated number of next choices. It does not require probability independence. If restrictions make that number vary, split into cases or count each branch separately. The addition rule combines disjoint alternatives. If a journey uses either one of four train services or one of three bus services, and the services are distinct options, there are seven choices. You add because taking one service is the outcome; you are not taking a train and then a bus. If cases overlap, simple addition double counts the shared outcomes. Remove that overlap or rewrite the cases so each outcome belongs to exactly one. A small tree diagram is useful: branches represent successive choices, and completed paths represent outcomes. Before using a factorial or a combination symbol, say whether you are selecting, ordering or performing several stages."
      ]
    },
    {
      "title": "Count ordered selections using permutations",
      "formula": "P(n,r)=n!/(n−r)! for 0≤r≤n; 0!=1",
      "paragraphs": [
        "Suppose seven distinct runners compete for first, second and third positions, with no ties. A podium is an ordered list of three different people. There are seven choices for first, six for second and five for third, giving two hundred ten podiums. This is the permutation count P of seven, three. For n distinct objects placed into r ordered positions without replacement, multiply n by n minus one, continuing for r factors. In factorial notation the result is n factorial divided by n minus r factorial. A factorial multiplies positive integers down to one, and zero factorial is defined as one. This is consistent with one empty arrangement when no positions are filled. Arranging all n distinct objects gives n factorial. Choosing zero positions gives one outcome, not zero. The formula assumes r is an integer between zero and n. If more distinct objects are requested than are available without replacement, there are no such arrangements. When repetition is allowed instead, each position may have n choices and the count becomes n to the power r. Always attach the replacement rule and the meaning of positions to the formula. A selection of three people with no assigned roles is a different outcome from a ranked podium."
      ]
    },
    {
      "title": "Count unordered selections and derive combination identities",
      "formula": "C(n,r)=n!/[r!(n−r)!]; C(n,r)=C(n,n−r)",
      "paragraphs": [
        "A committee of three chosen from seven distinct people has no ranking among its members. Listing the same three names in a different order does not create a different committee. The permutation count two hundred ten counts each committee three factorial times, because its members can occupy the three list positions in six orders. Divide by six to obtain thirty five committees. In general, C of n, r equals n factorial divided by r factorial times n minus r factorial. The relation P of n, r equals r factorial times C of n, r explains the distinction between selection and arrangement. Selecting r people is also equivalent to specifying the n minus r people left out, giving C of n, r equal to C of n, n minus r. Pascal's identity follows by fixing one distinguished person. A committee either contains that person and chooses its remaining r minus one members from the others, or excludes that person and chooses all r from the others. The cases are disjoint. Thus C of n, r is C of n minus one, r minus one plus C of n minus one, r. For choosing three from seven, this gives fifteen plus twenty, again thirty five."
      ]
    },
    {
      "title": "Arrange objects with repeated types",
      "formula": "Distinct arrangements = n!/(n₁!n₂!…); Σnᵢ=n",
      "paragraphs": [
        "Repeated symbols change the meaning of an arrangement. The word BANANA contains six letters: three copies of A, two copies of N and one B. If every physical copy were temporarily labelled, six factorial orders would be possible. Removing labels makes each visible arrangement occur three factorial times from the A labels and two factorial times from the N labels. Divide by both factors to obtain sixty distinct strings. More generally, with n objects divided into indistinguishable types of multiplicities n one, n two and so on, the count is n factorial divided by the product of the multiplicity factorials. The multiplicities must sum to n. For A, A, B, the visible strings are AAB, ABA and BAA, agreeing with three factorial divided by two factorial. Do not divide by a factorial merely because two objects share a broad description if the problem treats those objects as distinct. Two named students remain distinct even if they wear identical uniforms. Conversely, labelling identical balls changes a distribution problem. The right divisor comes from how many labelled outcomes collapse to each visible outcome. Check that this number is constant before using division as a shortcut. This keeps repeated object reasoning connected to the actual objects being counted."
      ]
    },
    {
      "title": "Use blocks to enforce adjacency",
      "formula": "Two specified people adjacent in a 5-person row: 2!×4!=48",
      "paragraphs": [
        "Adjacency constraints often become simpler when a group is treated as one block. Five distinct people, including A and B, stand in a row. If A and B must be adjacent, combine them into one block. Along with the other three people, this makes four units to arrange, giving four factorial orders. Inside the block, A B and B A are two different orders. Multiply to obtain forty eight rows. If three specified people among the same five must all stand consecutively, the block and two remaining people form three units. There are three factorial outer orders and three factorial internal orders, giving thirty six rows. The phrase together must mean consecutive positions for this construction. It does not automatically mean a fixed internal order; that needs a separate condition. If a particular order A before B is required within their two person block, only one internal order remains. Blocks may also fail when several adjacency requirements overlap, so draw the intended pattern before multiplying. A useful check for the two person example is that all five person rows number one hundred twenty. The forty eight adjacent rows form a subset, leaving seventy two rows where A and B are separated. We will recover that separated count with gaps."
      ]
    },
    {
      "title": "Use gaps to prevent selected neighbours",
      "formula": "3 anchors and 2 distinct specials: 3! C(4,2)2!=72",
      "paragraphs": [
        "To keep two specified people apart in a five person row, arrange the other three people first. There are three factorial anchor orders. Each anchor row has four gaps: before the first person, between consecutive people and after the last. Put the two special people into different gaps, choosing two of the four gaps in six ways. Then decide which special person uses which chosen gap in two ways. The result is six times six times two, or seventy two rows. Each valid row has a unique anchor order and choice of occupied gaps, so no row is counted twice. This agrees with subtracting the forty eight adjacent rows from all one hundred twenty rows. The same method handles four distinct anchors and three distinct special people when no two specials may be neighbours. Four factorial anchor orders give five gaps; choose three gaps and arrange the three specials, giving four factorial times C of five, three times three factorial, or one thousand four hundred forty. If specials are indistinguishable, remove their internal arrangement factor. If several may share a gap, the simple different gap formula is unavailable. The wording of the separation condition determines which placement pattern is valid."
      ]
    },
    {
      "title": "Specify what makes circular arrangements equivalent",
      "formula": "n distinct people around an unlabelled circle: (n−1)!",
      "paragraphs": [
        "Circular arrangements require an equivalence convention. Suppose six distinct people sit around a round table, with rotations treated as the same seating and reflections treated as different. Fix one chosen person as the reference position. The other five can be placed clockwise in five factorial orders, giving one hundred twenty circular seatings. This removes the rotational overcount that would appear if we numbered all six starting positions. If the chairs are labelled, rotations change which labelled chair each person occupies, so there are six factorial seat assignments instead. Do not automatically divide by another factor of two: clockwise and anticlockwise orders are different under the stated convention. Necklaces or bracelets can use different conventions, especially when repeated objects create additional symmetries. Those require a separate analysis. If A and B among the six people must be adjacent, treat them as a block. The block plus the other four people gives five units around the table. Fix a reference unit to count four factorial circular orders, then multiply by two internal block orders, obtaining forty eight. Always name the objects, decide whether chairs are labelled, and state whether reflection is identified before selecting a circular counting formula. The formula follows from those choices rather than from the word circle alone."
      ]
    },
    {
      "title": "Count digit strings and numbers with a leading-zero rule",
      "formula": "Digits {0,1,2,3,4}: 3-digit numbers without repeats = 4×4×3=48",
      "paragraphs": [
        "A digit string and a three digit number need not have the same count. Using zero, one, two, three and four without repetition, a three digit number has four choices for its first digit because zero is excluded. After choosing a nonzero first digit, four digits remain, including zero, for the second position. Three remain for the third. The total is forty eight. A length three code allowing an initial zero instead has five times four times three, or sixty possibilities. If repetition is allowed for a three digit number, the count is four times five times five, or one hundred. To count even three digit numbers without repeated digits, split by the final digit. If it is zero, the first digit has four choices and the middle digit three, giving twelve. If the last digit is two or four, there are two choices for that last position. The first digit must exclude zero and the chosen last digit, leaving three choices. Then three digits remain for the middle position, giving eighteen. Add the disjoint cases to obtain thirty. Filling a constrained position first often makes the available choices easier to track. State the digit set and repetition rule throughout the argument."
      ]
    },
    {
      "title": "Select constrained committees and then assign roles",
      "formula": "From 5 women and 4 men: at least one woman in a 3-person committee = C(9,3)−C(4,3)=80",
      "paragraphs": [
        "A committee usually records who belongs, not the order in which names were chosen. From five distinct women and four distinct men, the total number of three person committees is C of nine, three, or eighty four. To require at least one woman, subtract the committees containing only men. There are C of four, three, or four of those, leaving eighty committees. The complement condition none is simpler than adding separate cases for one, two and three women. For exactly two women and one man, choose two from the five women and one from the four men. Multiply ten by four to obtain forty committees. Now suppose any three people may form a committee, but one of them must be designated chair. Choose the committee in eighty four ways and choose its chair in three ways, giving two hundred fifty two outcomes. Equivalently, choose the chair first in nine ways and the other two members from the remaining eight in twenty eight ways. The results agree because they describe the same final outcome. If several distinct roles are assigned, record which person fills each role. A committee with a chair is different from a committee with no roles, even when the same people belong to it."
      ]
    },
    {
      "title": "Translate identical-object distributions into nonnegative solutions",
      "formula": "x+y+z=5, x,y,z≥0: C(7,2)=21; x,y,z≥1: C(4,2)=6",
      "paragraphs": [
        "A distribution problem must say whether the objects and boxes are distinguishable. Consider five identical balls placed into three labelled boxes, allowing an empty box. An outcome is completely described by nonnegative integers x, y and z whose sum is five. Write five stars and insert two bars to split them into three groups. A group may be empty, so bars may be adjacent or occur at either end. Choosing the two bar positions among seven total positions gives C of seven, two, or twenty one distributions. This is the stars and bars argument for a finite nonnegative integer solution count. If every box must receive at least one ball, place one ball in each box first. Two balls remain to distribute without restrictions. There are C of four, two, or six possibilities. Equivalently, positive x, y, z become one plus three new nonnegative variables. If the five balls were distinct instead, each independently chooses one of the three labelled boxes, giving three to the fifth power, or two hundred forty three assignments when empty boxes are allowed. Neither count applies automatically to unlabelled boxes. Before choosing a formula, state the object types, box labels and lower bounds so the combinatorial model matches the question."
      ]
    }
  ],
  "examples": [
    {
      "question": "Compare a 3-person committee with a ranked podium selected from seven distinct people.",
      "steps": [
        "A committee records membership only: C(7,3)=7!/(3!4!)=35.",
        "A podium distinguishes first, second and third: P(7,3)=7×6×5=210.",
        "Each committee produces 3!=6 podium orders, giving 35×6=210."
      ],
      "answer": "35 committees; 210 podiums."
    },
    {
      "question": "Count the distinct arrangements of BANANA.",
      "steps": [
        "Count six letters: A appears 3 times, N appears 2 times and B once.",
        "Start with 6! arrangements of temporarily labelled copies.",
        "Divide by 3!2! to remove permutations of identical letters."
      ],
      "answer": "6!/(3!2!)=60."
    },
    {
      "question": "Five distinct people include A and B. Count rows where A,B are adjacent, and rows where they are separated.",
      "steps": [
        "Adjacent: arrange the pair as one block with three other people, then order A,B inside it: 4!×2=48.",
        "Separated by complement: 5!−48=72.",
        "Gap check: 3! orders for the others, C(4,2) occupied gaps and 2! orders for A,B, giving 72."
      ],
      "answer": "48 adjacent rows and 72 separated rows."
    },
    {
      "question": "Count circular seatings of six distinct people, with rotations identified and reflections distinct; then require A,B adjacent.",
      "steps": [
        "Unrestricted circular count: fix one person, then arrange five others, giving 5!=120.",
        "For adjacent A,B, the block and four other people form five circular units.",
        "Count (5−1)! circular orders and two internal block orders: 4!×2=48."
      ],
      "answer": "120 unrestricted; 48 with A,B adjacent under the stated convention."
    },
    {
      "question": "Count even 3-digit numbers using {0,1,2,3,4} without repetition.",
      "steps": [
        "If the units digit is 0, choose a nonzero first digit in 4 ways and the middle digit in 3: 12.",
        "If the units digit is 2 or 4, there are 2 choices; the first digit has 3 nonzero unused choices, and the middle digit has 3 choices: 18.",
        "Add disjoint units-digit cases."
      ],
      "answer": "12+18=30."
    },
    {
      "question": "From five women and four men, select a 3-person committee containing at least one woman; separately count unrestricted committees with one designated chair.",
      "steps": [
        "At least one woman: all C(9,3)=84 committees minus C(4,3)=4 all-male committees.",
        "For the separate chair problem, choose any committee, then choose one of its three members as chair.",
        "Cross-check by choosing the chair first: 9×C(8,2)=252."
      ],
      "answer": "80 committees with at least one woman; 252 unrestricted committee-and-chair outcomes."
    },
    {
      "question": "Distribute five identical balls into three labelled boxes, first allowing empty boxes, then requiring every box nonempty.",
      "steps": [
        "Allowing empties: count x+y+z=5 with nonnegative integers using five stars and two bars: C(7,2).",
        "For positive variables, put one ball in each box and distribute two remaining balls.",
        "Count C(4,2) for the remaining nonnegative allocation."
      ],
      "answer": "21 with empties allowed; 6 with all boxes nonempty."
    },
    {
      "question": "Place four distinct anchors and three distinct special people in a row with no two specials adjacent.",
      "steps": [
        "The four anchors can be arranged in 4!=24 orders.",
        "Each such row creates five gaps; select three distinct gaps in C(5,3)=10 ways.",
        "Place the three distinct specials in the selected gaps in 3!=6 orders."
      ],
      "answer": "24×10×6=1440 valid rows."
    }
  ],
  "quiz": [
    {
      "question": "With 2 shirts, 3 trousers and 2 shoe choices, the number of outfits choosing one of each is:",
      "options": [
        "7",
        "12",
        "6",
        "24"
      ],
      "answer": 1,
      "explanation": "An outfit is a triple of successive choices. Multiply 2×3×2=12; addition would count individual options rather than complete outfits."
    },
    {
      "question": "A traveller chooses exactly one of 4 train services or 3 distinct bus services. The number of choices is:",
      "options": [
        "12",
        "4",
        "7",
        "1"
      ],
      "answer": 2,
      "explanation": "The alternatives are disjoint and exactly one service is chosen, so the addition principle gives 4+3=7 distinct choices."
    },
    {
      "question": "Seven distinct runners fill first, second and third places without ties. The number of podiums is:",
      "options": [
        "35",
        "343",
        "42",
        "210"
      ],
      "answer": 3,
      "explanation": "Ranked places make order matter and each runner is used at most once. Thus P(7,3)=7×6×5=210 possible podiums."
    },
    {
      "question": "The value of 0! is:",
      "options": [
        "1",
        "0",
        "Undefined",
        "−1"
      ],
      "answer": 0,
      "explanation": "There is one empty arrangement of no objects. Defining 0!=1 also makes P(n,n)=n! and C(n,0)=1 consistent with their counts."
    },
    {
      "question": "The number of unordered 3-person committees from 7 distinct people is:",
      "options": [
        "210",
        "35",
        "21",
        "7"
      ],
      "answer": 1,
      "explanation": "The committee has no ranked positions. Divide P(7,3)=210 by the 3!=6 orders of each selected triple, obtaining 35."
    },
    {
      "question": "For 0≤r≤n, P(n,r) equals:",
      "options": [
        "C(n,r)/r!",
        "nC(n,r)",
        "r!C(n,r)",
        "C(n,r)+r!"
      ],
      "answer": 2,
      "explanation": "Every unordered r-element selection gives exactly r! ordered lists, so P(n,r)=r!C(n,r) for distinct objects without replacement."
    },
    {
      "question": "How many distinct strings use all letters of BANANA?",
      "options": [
        "720",
        "120",
        "90",
        "60"
      ],
      "answer": 3,
      "explanation": "There are six letters with three indistinguishable As and two indistinguishable Ns. The count is 6!/(3!2!)=60."
    },
    {
      "question": "The distinct arrangements of A,A,B number:",
      "options": [
        "3",
        "6",
        "2",
        "1"
      ],
      "answer": 0,
      "explanation": "The visible strings are AAB, ABA and BAA. Equivalently, divide 3! by the 2! permutations of the indistinguishable As."
    },
    {
      "question": "Five distinct people stand in a row. Two specified people must be adjacent in either order. The count is:",
      "options": [
        "24",
        "48",
        "72",
        "120"
      ],
      "answer": 1,
      "explanation": "Treat the pair as a block, giving four units to arrange in 4! ways. Multiply by the two internal pair orders to get 48."
    },
    {
      "question": "Five distinct people stand in a row. Three specified people must be consecutive in any internal order. The count is:",
      "options": [
        "12",
        "60",
        "36",
        "18"
      ],
      "answer": 2,
      "explanation": "The three-person block and the other two people form three units. There are 3! outer orders and 3! internal block orders, giving 36."
    },
    {
      "question": "Five distinct people stand in a row. Two specified people must not be adjacent. The count is:",
      "options": [
        "48",
        "24",
        "120",
        "72"
      ],
      "answer": 3,
      "explanation": "All rows number 5!=120. Adjacent rows number 2×4!=48. The required complement is 120−48=72."
    },
    {
      "question": "Four distinct anchors and three distinct specials form a row with no neighbouring specials. The count is:",
      "options": [
        "1440",
        "720",
        "240",
        "120"
      ],
      "answer": 0,
      "explanation": "Arrange the anchors in 4! ways, choose three of the five gaps, and order the specials in 3! ways: 24×10×6=1440."
    },
    {
      "question": "Six distinct people sit around an unlabelled round table. Rotations are identical and reflections distinct. The count is:",
      "options": [
        "720",
        "120",
        "60",
        "36"
      ],
      "answer": 1,
      "explanation": "Fix one person to remove rotational duplication. The other five have 5!=120 clockwise orders; reflections are not identified."
    },
    {
      "question": "Six distinct people occupy six labelled chairs. The number of assignments is:",
      "options": [
        "120",
        "60",
        "720",
        "36"
      ],
      "answer": 2,
      "explanation": "Chair labels distinguish rotations, so each full seat assignment is an ordinary permutation of six people: 6!=720."
    },
    {
      "question": "Using {0,1,2,3,4} without repetition, how many 3-digit numbers are possible?",
      "options": [
        "60",
        "100",
        "125",
        "48"
      ],
      "answer": 3,
      "explanation": "The first digit has four nonzero choices; then four digits remain for the second place and three for the last. The product is 48."
    },
    {
      "question": "Using {0,1,2,3,4} without repetition, how many even 3-digit numbers are possible?",
      "options": [
        "30",
        "24",
        "48",
        "20"
      ],
      "answer": 0,
      "explanation": "Ending in zero gives 4×3=12. Ending in 2 or 4 gives 2×3×3=18. The disjoint cases sum to 30."
    },
    {
      "question": "From 5 distinct women and 4 distinct men, how many 3-person committees contain at least one woman?",
      "options": [
        "40",
        "80",
        "84",
        "60"
      ],
      "answer": 1,
      "explanation": "Subtract all-male committees from all committees: C(9,3)−C(4,3)=84−4=80. At least one includes committees with two or three women."
    },
    {
      "question": "From 5 distinct women and 4 distinct men, how many committees contain exactly 2 women and 1 man?",
      "options": [
        "80",
        "20",
        "40",
        "60"
      ],
      "answer": 2,
      "explanation": "Choose two of the five women and one of the four men: C(5,2)C(4,1)=10×4=40, without assigning committee roles."
    },
    {
      "question": "The number of nonnegative integer triples satisfying x+y+z=5 is:",
      "options": [
        "6",
        "15",
        "243",
        "21"
      ],
      "answer": 3,
      "explanation": "Five stars and two bars give C(7,2)=21 possibilities. Empty groups are allowed, matching the nonnegative condition."
    },
    {
      "question": "The number of positive integer triples satisfying x+y+z=5 is:",
      "options": [
        "6",
        "21",
        "10",
        "3"
      ],
      "answer": 0,
      "explanation": "Assign one unit to each variable first. The remaining two units have C(2+3−1,3−1)=C(4,2)=6 nonnegative distributions."
    }
  ],
  "sources": [
    {
      "title": "NTA JEE Main 2026 Mathematics Unit 4",
      "url": "https://jeemain.nta.nic.in/document/syllabus-2026/"
    },
    {
      "title": "OpenStax: Counting Principles",
      "url": "https://openstax.org/books/algebra-and-trigonometry-2e/pages/13-5-counting-principles"
    }
  ]
};
