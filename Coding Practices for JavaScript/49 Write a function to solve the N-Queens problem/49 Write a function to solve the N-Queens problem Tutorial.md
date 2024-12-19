# 49 Write a function to solve the N-Queens problem Tutorial

## Prerequisites

*   Understanding of the N-Queens problem and its constraints.
*   Knowledge of backtracking algorithms.
*   Familiarity with arrays or matrices.

## Approach

### Approach 1: Backtracking with 2D Array

This approach uses a 2D array to represent the chessboard and backtracking to explore possible queen placements.

### Procedure

1. Define a function `solveNQueens` that takes an integer `n` (the size of the board) as input.
2. Create an `n x n` 2D array (e.g., `board`) initialized with 0s, where 0 represents an empty cell and 1 represents a queen.
3. Define a helper function `isSafe` that takes the `board`, a row `row`, and a column `col` as input and checks if it's safe to place a queen at `board[row][col]` by checking:
    *   The current row on the left side.
    *   The upper diagonal on the left side.
    *   The lower diagonal on the left side.
    *   (No need to check the right side as we're placing queens from left to right).
4. Define a recursive function `solveNQUtil` that takes the `board` and the current column `col` as input:
    *   Base case: If `col` is greater than or equal to `n`, it means all queens are placed successfully. Add a copy of the current `board` to the list of solutions.
    *   Iterate through each row `i` from 0 to `n-1`:
        *   If `isSafe(board, i, col)` returns `true`:
            *   Place a queen at `board[i][col]` (set the cell to 1).
            *   Recursively call `solveNQUtil` with `board` and `col + 1` to place queens in the next column.
            *   If the recursive call returns `true`, a solution is found.
            *   Remove the queen from `board[i][col]` (backtrack, set the cell back to 0).
5. In the `solveNQueens` function:
    *   Create an empty list `solutions` to store the solutions.
    *   Call `solveNQUtil` with the initial `board` and `col = 0`.
    *   Return the `solutions` list.

### Approach 2: Backtracking with 1D Array (Optimized Space)

This approach optimizes space by using a 1D array to represent the board, where `board[i]` stores the row position of the queen in column `i`.

### Procedure

1. Define a function `solveNQueens` that takes an integer `n` as input.
2. Create a 1D array `board` of size `n` initialized with -1s. `board[i]` will represent the row position of the queen in column `i`.
3. Define a helper function `isSafe` that takes the `board`, a row `row`, and a column `col` as input. It checks if it's safe to place a queen at `board[col] = row` by checking the same conditions as in Approach 1, but using the 1D array representation.
4. Define a recursive function `solveNQUtil` that takes the `board` and the current column `col` as input:
    *   Base case: If `col` is greater than or equal to `n`, it means all queens are placed successfully. Convert the `board` to a list of strings representing the board and add it to the list of solutions.
    *   Iterate through each row `i` from 0 to `n-1`:
        *   If `isSafe(board, i, col)` returns `true`:
            *   Place a queen at `board[col] = i`.
            *   Recursively call `solveNQUtil` with `board` and `col + 1`.
            *   Remove the queen (backtrack, set `board[col]` back to -1).
5. In the `solveNQueens` function:
    *   Create an empty list `solutions` to store the solutions.
    *   Call `solveNQUtil` with the initial `board` and `col = 0`.
    *   Return the `solutions` list.

### Approach 3: Backtracking with Bit Manipulation (Advanced)

This approach uses bit manipulation to represent the board and efficiently check for conflicts.

### Procedure

1. Define a function `solveNQueens` that takes an integer `n` as input.
2. Initialize three bitmasks:
    *   `colmask`: Represents occupied columns (initially 0).
    *   `diag1mask`: Represents occupied diagonals with a positive slope (initially 0).
    *   `diag2mask`: Represents occupied diagonals with a negative slope (initially 0).
3. Define a recursive function `solveNQUtil` that takes the current row `row`, `colmask`, `diag1mask`, `diag2mask`, and a list `placement` (to store queen positions) as input:
    *   Base case: If `row` equals `n`, add a copy of `placement` to the list of solutions.
    *   Iterate through each column `col` from 0 to `n-1`:
        *   Calculate the diagonal indices:
            *   `diag1 = row - col + n - 1`
            *   `diag2 = row + col`
        *   Check if the current position is safe using bitwise operations:
            *   `if (colmask & (1 << col)) == 0 && (diag1mask & (1 << diag1)) == 0 && (diag2mask & (1 << diag2)) == 0`
        *   If safe:
            *   Add `col` to `placement`.
            *   Update the bitmasks:
                *   `colmask |= (1 << col)`
                *   `diag1mask |= (1 << diag1)`
                *   `diag2mask |= (1 << diag2)`
            *   Recursively call `solveNQUtil` with `row + 1`, updated bitmasks, and `placement`.
            *   Remove `col` from `placement` (backtrack).
            *   Reset the bitmasks (backtrack):
                *   `colmask &= ~(1 << col)`
                *   `diag1mask &= ~(1 << diag1)`
                *   `diag2mask &= ~(1 << diag2)`
4. In the `solveNQueens` function:
    *   Create an empty list `solutions` to store the solutions.
    *   Create an empty list `placement`.
    *   Call `solveNQUtil` with initial values (row 0, all bitmasks 0, and empty `placement`).
    *   Convert the `solutions` (list of queen positions) to a list of strings representing the board and return it.

### Approach 4: Iterative Backtracking with a Stack

This approach uses a stack to simulate the recursive calls in the backtracking algorithm.

### Procedure

1. Define a function `solveNQueens` that takes an integer `n` as input.
2. Create an empty list `solutions` to store the solutions.
3. Create an empty stack `stack` and push an initial state onto it. The state can be represented as a tuple containing:
    *   The current board (either a 2D array or a 1D array as in Approach 2).
    *   The current column `col` being considered.
4. Use a `while` loop with the condition that the `stack` is not empty:
    *   Pop a state from the `stack`.
    *   If `col` is equal to `n` (all queens placed), add the current board configuration to `solutions`.
    *   Otherwise, iterate through each row `i` from 0 to `n-1`:
        *   If it's safe to place a queen at `(i, col)` (using the `isSafe` function from previous approaches):
            *   Create a new board configuration by placing a queen at `(i, col)`.
            *   Push a new state onto the `stack` with the new board and `col + 1`.
5. Return the `solutions` list.

### Approach 5: Permutations Approach (less efficient)

This approach generates all possible permutations of queen placements and checks if each permutation is a valid solution. This is less efficient than backtracking but can be used for smaller values of `n`.

### Procedure

1. Define a function `solveNQueens` that takes an integer `n` as input.
2. Generate all permutations of the numbers 0 to `n-1` (representing the row positions of queens in each column). You can use a library function or implement a permutation generation algorithm.
3. For each permutation:
    *   Check if the permutation represents a valid N-Queens solution using a helper function `isValidSolution` that checks for diagonal conflicts.
    *   If it's a valid solution, convert the permutation to a list of strings representing the board and add it to the list of solutions.
4. Return the `solutions` list.
