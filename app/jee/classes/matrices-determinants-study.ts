import type { StudyLesson } from './course';
// Authored by scripts/create-matrices-determinants.mjs.
export const matricesDeterminantsLesson: StudyLesson = {
  "id": "matrices-determinants",
  "subject": "Mathematics",
  "unit": 3,
  "title": "Matrices and determinants: operations, inverses and linear systems",
  "summary": "Matrix types and algebra, determinants of orders two and three, adjoints, inverses, triangle area and consistent or inconsistent linear systems.",
  "prerequisites": "Signed arithmetic, simultaneous linear equations, coordinate pairs and elementary algebra.",
  "remaining": "Teaches the core headings of Mathematics Unit 3 in ten recorded chapters with worked examples and original practice. Further parameter-dependent three-variable systems, longer mixed problems and timed exam practice remain. This is not a claim of exhaustive problem coverage or official PYQs.",
  "sections": [
    {
      "title": "Read matrix order, entries and types",
      "formula": "A = [aᵢⱼ]ₘ×ₙ; equality requires the same order and entries",
      "paragraphs": [
        "Welcome to our first recorded mathematics class. A matrix is a rectangular arrangement of entries, with rows running across and columns running down. Its order is the number of rows followed by the number of columns. A matrix with two rows and three columns has order two by three, even though it contains six entries. The entry a sub i j lies in row i and column j. Equality requires equal orders and equality at every corresponding position. A row matrix has one row; a column matrix has one column. A square matrix has the same number of rows and columns. Its main diagonal joins positions with equal row and column indices. In a diagonal matrix, all entries outside that diagonal are zero. Diagonal entries themselves may also be zero. A scalar matrix is a diagonal matrix with every diagonal entry equal to the same scalar. The identity matrix has diagonal entries one and all other entries zero. Every identity matrix is scalar, but a scalar matrix with diagonal entry two is not an identity. A zero matrix has every entry zero and need not be square. Before any calculation, write the order and check the defining condition. A name such as square describes structure, not whether an inverse exists."
      ]
    },
    {
      "title": "Add, scale and transpose matrices",
      "formula": "(A + B)ᵀ = Aᵀ + Bᵀ; S = (A + Aᵀ)/2; K = (A − Aᵀ)/2",
      "paragraphs": [
        "Matrix addition pairs corresponding entries, so the two matrices must have the same order. Scalar multiplication multiplies every entry. Multiplying a two by two matrix by three changes its entries, not its order. Transposition exchanges rows with columns. If A has order m by n, its transpose has order n by m, and the entry at row i column j becomes the entry at row j column i. Transposing twice returns the original matrix. Transposition distributes over addition and scalar multiplication. A real square matrix is symmetric when its transpose equals itself. It is skew symmetric when its transpose is the negative of itself. For a skew symmetric real matrix, each diagonal entry equals its own negative and therefore must be zero. The zero diagonal alone is not sufficient: opposite off diagonal entries must also have opposite signs. Every real square matrix can be decomposed into a symmetric part and a skew symmetric part. Take half the sum with its transpose for the symmetric part, and half the difference for the skew symmetric part. Adding those parts restores A. For A with rows one, three and one, two, the symmetric part has rows one, two and two, two. The skew part has rows zero, one and negative one, zero. This decomposition preserves the order and can be checked entry by entry."
      ]
    },
    {
      "title": "Multiply row by column and keep the order",
      "formula": "(AB)ᵢⱼ = Σₖ aᵢₖbₖⱼ; (AB)ᵀ = BᵀAᵀ",
      "paragraphs": [
        "Matrix multiplication combines a row of the first matrix with a column of the second. Multiply corresponding entries along that row and column, then add the products. A matrix of order m by n can multiply one of order n by p, producing a matrix of order m by p. The inner dimensions agree and the outer dimensions remain. With A having rows one, two and zero, one, and B having rows one, zero and three, one, calculate the first entry of A B. It is one times one plus two times three, giving seven. The complete product has rows seven, two and three, one. Reverse the order and B A has rows one, two and three, seven. Thus both products exist but differ. Matrix multiplication is associative and distributive, yet it is generally not commutative. Even a product equal to the zero matrix does not force one factor to be zero. For example, the diagonal matrices with diagonals one, zero and zero, one have zero product. In a transpose of a product, reverse the factor order: the transpose of A B is B transpose times A transpose. Finally, A X equals A Y does not permit cancellation unless A is known to be invertible. Always check order, compute row by column, and justify any cancellation."
      ]
    },
    {
      "title": "Evaluate a two by two determinant and use its properties",
      "formula": "det([a b; c d]) = ad − bc; det(kA) = kⁿ det(A)",
      "paragraphs": [
        "For a two by two matrix with first row a, b and second row c, d, the determinant is a d minus b c. It is a scalar, not a new matrix. With rows two, one and five, three, the determinant is six minus five, or one. Determinants are defined here for square matrices; do not assign this formula to a rectangular array. Several properties make larger evaluations faster. Swapping two rows changes the determinant sign. Multiplying one row by k multiplies the determinant by k. Adding a multiple of another row to a row leaves the determinant unchanged. These same statements hold for columns. Equal or proportional rows give determinant zero. A triangular matrix has determinant equal to the product of its diagonal entries. Transposing a matrix preserves its determinant, and the determinant of a product equals the product of the determinants. Be careful with scaling the whole matrix. In an n by n matrix, multiplying every entry by k scales all n rows, so the determinant is multiplied by k to the power n. For a two by two matrix the factor is k squared, not k. Finally, determinants are not generally additive: the determinant of A plus B is not generally the sum of their determinants."
      ]
    },
    {
      "title": "Evaluate three by three determinants with cofactors",
      "formula": "Cᵢⱼ = (−1)ⁱ⁺ʲ Mᵢⱼ; det(A) = Σⱼ aᵢⱼCᵢⱼ",
      "paragraphs": [
        "A minor is the determinant left after deleting a specified row and column. A cofactor attaches the sign negative one to the power i plus j to that minor. The first cofactor sign row is plus, minus, plus. The second is minus, plus, minus. To expand a determinant along a row, multiply each row entry by its own cofactor and add. Choose a row or column containing zeros when possible. Consider A with rows one, one, zero; zero, one, one; and one, zero, one. Expand along its first row. The first minor is one times one minus one times zero, giving one. The second minor is zero times one minus one times one, giving negative one. Its cofactor sign is negative, so the second cofactor is positive one. The determinant is one times one plus one times one plus zero, giving two. A common mistake is to apply the negative sign twice or forget it entirely. An independent check is useful: subtract the first row from the third, producing third row zero, negative one, one, without changing the determinant. Expansion along the first column then gives two again. Determinant preserving row additions simplify evaluation, but swapping or scaling rows requires tracking the corresponding factor or sign."
      ]
    },
    {
      "title": "Construct the adjoint and inverse",
      "formula": "A adj(A) = det(A) I; A⁻¹ = adj(A)/det(A), det(A) ≠ 0",
      "paragraphs": [
        "The adjoint, also called the adjugate, is the transpose of the cofactor matrix. The transpose step matters: writing cofactors in their original positions generally does not give the adjoint. Multiplying a square matrix by its adjoint, in either order, gives its determinant times the identity. Consequently, a matrix has an inverse exactly when its determinant is nonzero. Divide its adjoint by that determinant. For a two by two matrix, swap the two diagonal entries and negate the other two entries to obtain its adjoint. For A with rows two, one and five, three, the determinant is one, so its inverse has rows three, negative one and negative five, two. Multiplying A by that proposed inverse gives rows one, zero and zero, one. For our three by three example with rows one, one, zero; zero, one, one; and one, zero, one, the adjoint has rows one, negative one, one; one, one, negative one; and negative one, one, one. Its inverse is half that array because the determinant is two. A zero determinant does not mean the adjoint is always zero, and division by zero is never an inverse formula. Also, the inverse of A B is B inverse times A inverse when both inverses exist. Put B inverse first and A inverse second. Check the factor order before simplifying a product inverse."
      ]
    },
    {
      "title": "Solve two-variable equations using a matrix inverse",
      "formula": "AX = B; X = A⁻¹B when det(A) ≠ 0",
      "paragraphs": [
        "A system of linear equations becomes A X equals B when each row of A contains the coefficients in the same variable order. For two x plus y equals five and five x plus three y equals thirteen, choose X as the column x, y. A has rows two, one and five, three, and B has entries five, thirteen. The determinant is one, so a unique solution exists. Multiply the inverse of A on the left of both sides. This gives X equals A inverse times B, not B times A inverse. Using inverse rows three, negative one and negative five, two, the first component is fifteen minus thirteen, giving x equal to two. The second is negative twenty five plus twenty six, giving y equal to one. Substitute: two times two plus one equals five, and five times two plus three times one equals thirteen. Both equations check. A missing variable contributes coefficient zero; it does not remove its column. If an equation is written with constants on both sides, collect variable terms and constants before building the matrix. The inverse method is available only after checking the determinant is nonzero. A zero determinant sends us to consistency analysis rather than allowing us to conclude automatically that there is no solution."
      ]
    },
    {
      "title": "Solve a three-variable system and verify every equation",
      "formula": "X = adj(A)B/det(A); det(A) = 2 in the worked system",
      "paragraphs": [
        "Now take three equations: x plus y equals three; y plus z equals five; and x plus z equals four. In variable order x, y, z, the coefficient matrix has rows one, one, zero; zero, one, one; and one, zero, one. The constant column has entries three, five, four. We already evaluated the coefficient determinant as two, so the inverse exists. Its adjoint has rows one, negative one, one; one, one, negative one; and negative one, one, one. Multiply that adjoint by the constant column before dividing by two. The first component is three minus five plus four, giving two; after division, x is one. The second is three plus five minus four, giving four; hence y is two. The third is negative three plus five plus four, giving six; hence z is three. Verify all three original equations: one plus two is three, two plus three is five, and one plus three is four. A useful independent solution is to add the first and third equations and subtract the second, obtaining two x equals two. This agrees with the matrix method. The point of the inverse calculation is to organize a systematic method, not to forbid a shorter check. When a parameter enters a coefficient, identify determinant zero cases before dividing by its expression."
      ]
    },
    {
      "title": "Distinguish unique, infinite and inconsistent systems",
      "formula": "det(A) = 0 requires further checks; 0 = nonzero means inconsistency",
      "paragraphs": [
        "A zero determinant means the coefficient matrix is singular. It does not by itself distinguish no solution from infinitely many solutions. Compare x plus y equals two with two x plus two y equals four. Subtract twice the first equation from the second and obtain zero equals zero. The second equation is redundant. Set y equal to a free real parameter t and x equal to two minus t; infinitely many pairs solve both equations. Change the second constant to five and the same subtraction gives zero equals one. This is a contradiction, so no solution exists. The coefficient determinants are identical in these two examples. For three variables, consider x plus y plus z equals three; x minus y plus z equals one; and two x plus two z equals four. The third equation is the sum of the first two. Subtracting the second equation from the first gives y equal to one, leaving x plus z equals two. Thus x equals two minus t and z equals t is an infinite solution family. Replacing the last constant four with five creates a contradiction after subtracting the first two equations from the third. Row reduction must act on the augmented matrix, including constants. Inspect the exceptional values of a parameter separately; a vanished denominator is a warning to analyze the original equations. Check their constants for a contradiction or a free variable before classifying the solution set."
      ]
    },
    {
      "title": "Use determinants for triangle area and parameter cases",
      "formula": "Area = ½ |det([x₁ y₁ 1; x₂ y₂ 1; x₃ y₃ 1])|",
      "paragraphs": [
        "For three points in a plane, place their x coordinate, y coordinate and one in successive rows of a three by three determinant. Half its absolute value is the triangle area. The determinant itself is an oriented quantity: swapping two points reverses its sign, while the geometric area remains unchanged. For the points zero, zero; four, zero; and zero, three, expansion gives determinant twelve and area six square units. Subtracting the first point from the others reduces the same calculation to half the absolute value of a two by two determinant of the displacement vectors. If the determinant is zero, the three points are collinear or include repeated points, and the triangle is degenerate. For points one, two; three, four; and five, k, the determinant simplifies to two k minus twelve. Collinearity therefore requires k equal to six. Finish by connecting determinant tests across the class. The matrix with rows lambda, one and one, lambda has determinant lambda squared minus one. It is invertible for all real lambda except plus one and minus one. At an exceptional value, a linear system needs its constants checked for consistency. Determinants summarize important information, but zero area, a singular coefficient matrix and inconsistency are different conclusions attached to different questions. Name the question, compute the determinant, and interpret it in context."
      ]
    }
  ],
  "examples": [
    {
      "question": "Decompose A = [1 3; 1 2] into symmetric and skew-symmetric parts.",
      "steps": [
        "Aᵀ = [1 1; 3 2].",
        "S = (A+Aᵀ)/2 = [1 2; 2 2].",
        "K = (A−Aᵀ)/2 = [0 1; −1 0]. Check Sᵀ=S, Kᵀ=−K and S+K=A."
      ],
      "answer": "S = [1 2; 2 2], K = [0 1; −1 0]."
    },
    {
      "question": "For A = [1 2; 0 1] and B = [1 0; 3 1], compare AB and BA.",
      "steps": [
        "Use row-by-column multiplication in the stated order.",
        "AB = [1+6, 0+2; 0+3, 0+1] = [7 2; 3 1].",
        "BA = [1 2; 3 7]. The two products differ although both exist."
      ],
      "answer": "AB ≠ BA; do not commute matrix factors."
    },
    {
      "question": "Evaluate det(A) for A = [1 1 0; 0 1 1; 1 0 1], then find its inverse.",
      "steps": [
        "First-row expansion: det(A)=1(1−0)−1(0−1)=2.",
        "The cofactor matrix is [1 1 −1; −1 1 1; 1 −1 1]. Transpose it.",
        "adj(A)=[1 −1 1; 1 1 −1; −1 1 1]. Divide each entry by 2 and verify A adj(A)=2I."
      ],
      "answer": "A⁻¹ = ½[1 −1 1; 1 1 −1; −1 1 1]."
    },
    {
      "question": "Solve 2x+y=5 and 5x+3y=13 using an inverse.",
      "steps": [
        "A=[2 1; 5 3], B=[5;13] and det(A)=6−5=1.",
        "A⁻¹=[3 −1; −5 2]. Thus X=A⁻¹B=[15−13; −25+26].",
        "Substitute x=2,y=1 into both original equations."
      ],
      "answer": "The unique solution is x=2, y=1."
    },
    {
      "question": "Solve x+y=3, y+z=5, x+z=4 by matrices.",
      "steps": [
        "A=[1 1 0; 0 1 1; 1 0 1], B=[3;5;4], det(A)=2.",
        "adj(A)B=[3−5+4;3+5−4;−3+5+4]=[2;4;6].",
        "Divide by 2; check x+y=3, y+z=5 and x+z=4."
      ],
      "answer": "The unique solution is (x,y,z)=(1,2,3)."
    },
    {
      "question": "Classify x+y+z=3, x−y+z=1, 2x+2z=c.",
      "steps": [
        "Subtract the second equation from the first: 2y=2, hence y=1. Add them: 2x+2z=4.",
        "The third equation is consistent only when c=4. For c≠4, subtraction gives 0=c−4, a contradiction.",
        "When c=4, set z=t; then x=2−t, y=1. There are infinitely many solutions."
      ],
      "answer": "For c=4: (2−t,1,t), t real; for c≠4: no solution."
    },
    {
      "question": "Find the area of the triangle P(0,0), Q(4,0), R(0,3), and find k making (1,2), (3,4), (5,k) collinear.",
      "steps": [
        "For P,Q,R the coordinate determinant is 12. Area=½|12|=6 square units.",
        "For the parameter points, expand the coordinate determinant: (4−k)−2(3−5)+(3k−20)=2k−12.",
        "Set the determinant equal to zero for collinearity: k=6. Swapping point order changes the determinant sign but not area."
      ],
      "answer": "Area 6 square units; k=6 for the separate collinearity problem."
    },
    {
      "question": "For A=[λ 1; 1 λ], locate singular cases and classify AX=[2;2].",
      "steps": [
        "det(A)=λ²−1, so the singular cases are λ=1 and λ=−1.",
        "For λ≠±1, symmetry or inverse multiplication gives x=y=2/(λ+1).",
        "At λ=1 both equations are x+y=2, so there are infinitely many solutions. At λ=−1, equations −x+y=2 and x−y=2 add to 0=4, so there is no solution."
      ],
      "answer": "Unique if λ≠±1; infinitely many if λ=1; inconsistent if λ=−1."
    }
  ],
  "quiz": [
    {
      "question": "A matrix with 2 rows and 3 columns has order:",
      "options": [
        "3 × 2",
        "2 × 3",
        "6 × 1",
        "2 × 2"
      ],
      "answer": 1,
      "explanation": "Matrix order lists the number of rows first and columns second, so two rows and three columns give order 2 × 3."
    },
    {
      "question": "Which condition defines a scalar matrix?",
      "options": [
        "All entries are equal",
        "It has one row",
        "It is diagonal with equal diagonal entries",
        "Only its determinant is zero"
      ],
      "answer": 2,
      "explanation": "A scalar matrix is square and diagonal, with one common scalar on its main diagonal. Entries off the diagonal must be zero."
    },
    {
      "question": "For a real skew-symmetric matrix, the diagonal entries are:",
      "options": [
        "Always one",
        "Arbitrary positive numbers",
        "All equal to the determinant",
        "All zero"
      ],
      "answer": 3,
      "explanation": "Aᵀ = −A forces each diagonal entry aᵢᵢ to equal its own negative. Over the reals, this means every diagonal entry is zero."
    },
    {
      "question": "For A = [1 3; 1 2], its symmetric part is:",
      "options": [
        "[1 2; 2 2]",
        "[0 1; −1 0]",
        "[1 3; 1 2]",
        "[2 4; 4 4]"
      ],
      "answer": 0,
      "explanation": "The symmetric part is (A + Aᵀ)/2. Adding corresponding entries and dividing by two gives rows (1,2) and (2,2)."
    },
    {
      "question": "A has order 2 × 3 and B has order 3 × 4. The order of AB is:",
      "options": [
        "3 × 3",
        "2 × 4",
        "4 × 2",
        "The product is undefined"
      ],
      "answer": 1,
      "explanation": "The inner dimensions 3 and 3 agree, so the product exists. Its outer dimensions are 2 and 4, giving order 2 × 4."
    },
    {
      "question": "For A = [1 2; 0 1], B = [1 0; 3 1], AB equals:",
      "options": [
        "[1 2; 3 7]",
        "[7 0; 0 1]",
        "[7 2; 3 1]",
        "[1 0; 3 1]"
      ],
      "answer": 2,
      "explanation": "Row-by-column multiplication gives 1+6=7, 0+2=2, 0+3=3 and 0+1=1. The reversed product BA is different."
    },
    {
      "question": "For compatible matrices A and B, (AB)ᵀ is:",
      "options": [
        "AᵀBᵀ",
        "AB",
        "BA",
        "BᵀAᵀ"
      ],
      "answer": 3,
      "explanation": "Transposing a product reverses the factor order. This also gives the correct dimensions when A and B are rectangular."
    },
    {
      "question": "The determinant of [2 1; 5 3] is:",
      "options": [
        "1",
        "11",
        "−1",
        "6"
      ],
      "answer": 0,
      "explanation": "For a two by two matrix use ad − bc. Here it is 2×3 − 1×5 = 6 − 5 = 1, a scalar rather than a matrix."
    },
    {
      "question": "If det(A)=2 for a 3 × 3 matrix, det(3A) is:",
      "options": [
        "6",
        "54",
        "18",
        "27"
      ],
      "answer": 1,
      "explanation": "Scaling every entry by 3 scales each of three rows by 3. Thus det(3A)=3³det(A)=27×2=54, not simply 3det(A)."
    },
    {
      "question": "Replacing row 2 by row 2 + 5 row 1 makes the determinant:",
      "options": [
        "Five times larger",
        "Zero in every case",
        "Unchanged",
        "Change sign"
      ],
      "answer": 2,
      "explanation": "Adding a multiple of one row to a different row preserves the determinant. Scaling a row or swapping rows has different effects."
    },
    {
      "question": "For A = [1 1 0; 0 1 1; 1 0 1], det(A) equals:",
      "options": [
        "0",
        "1",
        "−2",
        "2"
      ],
      "answer": 3,
      "explanation": "Expanding along the first row gives 1×1 − 1×(−1) + 0 = 2. The sign of the middle cofactor must be included."
    },
    {
      "question": "The cofactor C₁₂ for A = [1 1 0; 0 1 1; 1 0 1] equals:",
      "options": [
        "1",
        "−1",
        "0",
        "2"
      ],
      "answer": 0,
      "explanation": "Deleting row 1 and column 2 leaves determinant −1. The cofactor sign (−1)³ is −1, giving cofactor +1."
    },
    {
      "question": "The adjoint of a square matrix is the:",
      "options": [
        "Original matrix multiplied by its determinant",
        "Transpose of its cofactor matrix",
        "Cofactor matrix without transposition",
        "Inverse even when its determinant is zero"
      ],
      "answer": 1,
      "explanation": "Form every signed minor to make the cofactor matrix, then transpose it. Dividing the adjoint by a nonzero determinant gives the inverse."
    },
    {
      "question": "The inverse of [2 1; 5 3] is:",
      "options": [
        "[2 −1; −5 3]",
        "[3 1; 5 2]",
        "[3 −1; −5 2]",
        "[−3 1; 5 −2]"
      ],
      "answer": 2,
      "explanation": "The determinant is 1. Swap the diagonal entries and negate the off-diagonal entries; multiplication then gives the identity matrix."
    },
    {
      "question": "Solve 2x+y=5 and 5x+3y=13. The pair (x,y) is:",
      "options": [
        "(1,3)",
        "(3,−1)",
        "(1,2)",
        "(2,1)"
      ],
      "answer": 3,
      "explanation": "The pair (2,1) gives 2×2+1=5 and 5×2+3×1=13. The coefficient determinant is 1, guaranteeing uniqueness."
    },
    {
      "question": "Solve x+y=3, y+z=5 and x+z=4. The triple is:",
      "options": [
        "(1,2,3)",
        "(2,1,4)",
        "(3,2,1)",
        "(0,3,2)"
      ],
      "answer": 0,
      "explanation": "Adding the first and third equations and subtracting the second gives 2x=2. Then y=2 and z=3, which satisfy all equations."
    },
    {
      "question": "The system x+y=2 and 2x+2y=5 has:",
      "options": [
        "One solution",
        "No solution",
        "Infinitely many solutions",
        "Exactly two solutions"
      ],
      "answer": 1,
      "explanation": "Subtracting twice the first equation from the second gives 0=1. This contradiction makes the system inconsistent."
    },
    {
      "question": "The system x+y+z=3, x−y+z=1, 2x+2z=4 has:",
      "options": [
        "No solution",
        "One solution",
        "Infinitely many solutions",
        "Exactly three solutions"
      ],
      "answer": 2,
      "explanation": "The third equation is the sum of the first two. They require y=1 and x+z=2, leaving one free parameter and infinitely many solutions."
    },
    {
      "question": "The area of the triangle with vertices (0,0), (4,0), (0,3) is:",
      "options": [
        "12 square units",
        "3 square units",
        "24 square units",
        "6 square units"
      ],
      "answer": 3,
      "explanation": "The coordinate determinant has magnitude 12; the area is half its magnitude, giving 6 square units. This also equals half base times height."
    },
    {
      "question": "The points (1,2), (3,4), (5,k) are collinear when k equals:",
      "options": [
        "6",
        "5",
        "4",
        "3"
      ],
      "answer": 0,
      "explanation": "The coordinate determinant simplifies to 2k−12. Collinearity requires determinant zero, hence k=6; all three points then lie on y=x+1."
    }
  ],
  "sources": [
    {
      "title": "NTA JEE Main 2026 syllabus: Mathematics Unit 3",
      "url": "https://jeemain.nta.nic.in/document/syllabus-2026/"
    },
    {
      "title": "NCERT Mathematics XII: Matrices",
      "url": "https://ncert.nic.in/textbook/pdf/lemh103.pdf"
    },
    {
      "title": "NCERT Mathematics XII: Determinants",
      "url": "https://ncert.nic.in/textbook/pdf/lemh104.pdf"
    }
  ]
};
