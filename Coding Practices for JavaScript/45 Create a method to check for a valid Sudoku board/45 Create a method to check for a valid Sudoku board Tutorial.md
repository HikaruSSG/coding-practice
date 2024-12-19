# 45 Create a method to check for a valid Sudoku board Tutorial

## Prerequisites

*   Understanding of Sudoku rules.
*   Knowledge of arrays (or matrices) and sets (or hash sets).
*   Familiarity with loops.

## Approach

### Approach 1: Using Sets to Check Rows, Columns, and Subgrids

This approach uses sets to efficiently check if each row, column, and 3x3 subgrid contains unique digits (1-9).

### Procedure

1. Define a function that takes a 9x9 Sudoku board (represented as a 2D array or list of lists) as input.
2. Iterate through each row (from 0 to 8):
    *   Create an empty set `rowSet`.
    *   Iterate through each element in the row (from 0 to 8):
        *   If the element is not a dot ('.'), check if it's already in `rowSet`.
        *   If it's in `rowSet`, return `false` (duplicate in row).
        *   Otherwise, add the element to `rowSet`.
3. Iterate through each column (from 0 to 8):
    *   Create an empty set `colSet`.
    *   Iterate through each element in the column (from 0 to 8):
        *   If the element is not a dot, check if it's already in `colSet`.
        *   If it's in `colSet`, return `false` (duplicate in column).
        *   Otherwise, add the element to `colSet`.
4. Iterate through each 3x3 subgrid (using nested loops with a step of 3):
    *   Create an empty set `subgridSet`.
    *   Iterate through each cell within the subgrid (using nested loops):
        *   If the element is not a dot, check if it's already in `subgridSet`.
        *   If it's in `subgridSet`, return `false` (duplicate in subgrid).
        *   Otherwise, add the element to `subgridSet`.
5. If all checks pass, return `true` (valid Sudoku).

### Approach 2: Using Arrays for Counting

This approach uses arrays to count the occurrences of digits in each row, column, and subgrid.

### Procedure

1. Define a function that takes a 9x9 Sudoku board as input.
2. Create three 9x9 arrays: `rows`, `cols`, and `subgrids`.
    *   `rows[i][j]` will store the count of digit `j+1` in row `i`.
    *   `cols[i][j]` will store the count of digit `j+1` in column `i`.
    *   `subgrids[i][j]` will store the count of digit `j+1` in subgrid `i`.
3. Iterate through each cell of the board (using nested loops from 0 to 8):
    *   If the element is not a dot:
        *   Convert the element to an integer `num`.
        *   Calculate the subgrid index: `subgridIndex = (row / 3) * 3 + (col / 3)`.
        *   Increment `rows[row][num-1]`, `cols[col][num-1]`, and `subgrids[subgridIndex][num-1]`.
        *   If any of these counts become greater than 1, return `false` (duplicate found).
4. If all checks pass, return `true`.

### Approach 3: Bit Manipulation (for advanced users)

This approach uses bit manipulation to efficiently track the presence of digits in each row, column, and subgrid.

### Procedure

1. Define a function that takes a 9x9 Sudoku board as input.
2. Create three arrays: `rows`, `cols`, and `subgrids`, each of size 9.
    *   Each element in these arrays will be an integer representing a bitmask.
    *   The `i`-th bit in the bitmask will indicate whether the digit `i+1` is present in the corresponding row, column, or subgrid.
3. Iterate through each cell of the board (using nested loops from 0 to 8):
    *   If the element is not a dot:
        *   Convert the element to an integer `num`.
        *   Calculate the subgrid index: `subgridIndex = (row / 3) * 3 + (col / 3)`.
        *   Create a bitmask `mask = 1 << (num - 1)`.
        *   Check if the `num`-th bit is already set in `rows[row]`, `cols[col]`, or `subgrids[subgridIndex]` using the bitwise AND operator (`&`).
        *   If any of these checks are true, return `false` (duplicate found).
        *   Set the `num`-th bit in `rows[row]`, `cols[col]`, and `subgrids[subgridIndex]` using the bitwise OR operator (`|`).
4. If all checks pass, return `true`.

### Approach 4: Using a Single Set with String Representation

This approach uses a single set to store the occurrences of digits, representing each occurrence with a unique string.

### Procedure

1. Define a function that takes a 9x9 Sudoku board as input.
2. Create an empty set `seen`.
3. Iterate through each cell of the board (using nested loops from 0 to 8):
    * If the element is not a dot:
        * Create three strings representing the occurrence of the digit in the row, column, and subgrid:
            * `rowString = num + " in row " + row`
            * `colString = num + " in column " + col`
            * `subgridString = num + " in subgrid " + row/3 + "-" + col/3`
        * If any of these strings are already in `seen`, return `false` (duplicate found).
        * Add all three strings to `seen`.
4. If all checks pass, return `true`.

### Approach 5: Backtracking (for solving Sudoku, not just validating)

This approach uses backtracking to try filling in empty cells and check for a valid solution. This is primarily used for solving Sudoku puzzles, but it can also be used for validation.

### Procedure

1. Define a function that takes a 9x9 Sudoku board as input.
2. Find an empty cell (represented by a dot). If no empty cell is found, return `true` (board is complete and valid).
3. Iterate through digits from 1 to 9:
    * If the current digit is valid for the current cell (check row, column, and subgrid constraints):
        * Place the digit in the cell.
        * Recursively call the function to try solving the rest of the board.
        * If the recursive call returns `true`, return `true` (solution found).
        * Otherwise, reset the cell to a dot (backtrack).
4. If no digit can be placed in the current cell, return `false` (no solution).
