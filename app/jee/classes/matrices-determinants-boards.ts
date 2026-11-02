// Authored by scripts/create-matrices-determinants.mjs.
export const matrixBoards = [
  {
    "title": "Read matrix order, entries and types",
    "lines": [
      "ORDER: rows × columns",
      "A = [1  2  3; 4  5  6]",
      "Order 2 × 3; a₂₃ = 6",
      "I₂ = [1  0; 0  1]"
    ]
  },
  {
    "title": "Add, scale and transpose matrices",
    "lines": [
      "A = [1  3; 1  2]",
      "S = [1  2; 2  2]",
      "K = [0  1; −1  0]",
      "A = S + K"
    ]
  },
  {
    "title": "Multiply row by column and keep the order",
    "lines": [
      "A = [1  2; 0  1]",
      "B = [1  0; 3  1]",
      "AB = [7  2; 3  1]",
      "BA = [1  2; 3  7]"
    ]
  },
  {
    "title": "Evaluate a two by two determinant and use its properties",
    "lines": [
      "A = [2  1; 5  3]",
      "det(A) = 2×3 − 1×5 = 1",
      "det(3A) = 3² det(A) = 9",
      "One row ×3 gives factor 3"
    ]
  },
  {
    "title": "Evaluate three by three determinants with cofactors",
    "lines": [
      "A = [1  1  0; 0  1  1; 1  0  1]",
      "First-row cofactors: 1, 1, −1",
      "det(A) = 1×1 + 1×1 = 2",
      "Track every row operation"
    ]
  },
  {
    "title": "Construct the adjoint and inverse",
    "lines": [
      "2 × 2: adj(A) = [d  −b; −c  a]",
      "A = [2  1; 5  3]; det(A) = 1",
      "A⁻¹ = [3  −1; −5  2]",
      "Check AA⁻¹ = I"
    ]
  },
  {
    "title": "Solve two-variable equations using a matrix inverse",
    "lines": [
      "2x + y = 5",
      "5x + 3y = 13",
      "X = [3  −1; −5  2] [5; 13]",
      "x = 2, y = 1"
    ]
  },
  {
    "title": "Solve a three-variable system and verify every equation",
    "lines": [
      "x + y = 3; y + z = 5",
      "x + z = 4; det(A) = 2",
      "adj(A)B = [2; 4; 6]",
      "X = [1; 2; 3]"
    ]
  },
  {
    "title": "Distinguish unique, infinite and inconsistent systems",
    "lines": [
      "x + y = 2",
      "2x + 2y = 4 → infinitely many",
      "2x + 2y = 5 → no solution",
      "Same det(A) = 0; different constants"
    ]
  },
  {
    "title": "Use determinants for triangle area and parameter cases",
    "lines": [
      "P(0,0), Q(4,0), R(0,3)",
      "Area = ½ |12| = 6",
      "(1,2), (3,4), (5,k) collinear",
      "2k − 12 = 0 → k = 6"
    ]
  }
] as const;
