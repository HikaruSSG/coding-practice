// Create a method to check for a valid Sudoku board

// Solution 1: Using sets
function isValidSudoku1(board) {
    for (let i = 0; i < 9; i++) {
        const rowSet = new Set();
        const colSet = new Set();
        const boxSet = new Set();
        for (let j = 0; j < 9; j++) {
            const rowVal = board[i][j];
            const colVal = board[j][i];
            const boxVal = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
            if (rowVal !== '.') {
                if (rowSet.has(rowVal)) return false;
                rowSet.add(rowVal);
            }
            if (colVal !== '.') {
                if (colSet.has(colVal)) return false;
                colSet.add(colVal);
            }
            if (boxVal !== '.') {
                if (boxSet.has(boxVal)) return false;
                boxSet.add(boxVal);
            }
        }
    }
    return true;
}
// Pros: Efficient and concise, uses sets to check for duplicates.
// Cons: None.
// Recommended: This is generally the recommended approach due to its efficiency and clarity.

// Solution 2: Using nested for loops and helper functions
function isValidSudoku2(board) {
    const isValidRow = (row) => {
        const set = new Set();
        for (let num of row) {
            if (num !== '.') {
                if (set.has(num)) return false;
                set.add(num);
            }
        }
        return true;
    };
    const isValidCol = (colIndex) => {
        const set = new Set();
        for (let i = 0; i < 9; i++) {
            const num = board[i][colIndex];
            if (num !== '.') {
                if (set.has(num)) return false;
                set.add(num);
            }
        }
        return true;
    };
    const isValidBox = (boxRow, boxCol) => {
        const set = new Set();
        for (let i = boxRow; i < boxRow + 3; i++) {
            for (let j = boxCol; j < boxCol + 3; j++) {
                const num = board[i][j];
                if (num !== '.') {
                    if (set.has(num)) return false;
                    set.add(num);
                }
            }
        }
        return true;
    };
    for (let i = 0; i < 9; i++) {
        if (!isValidRow(board[i]) || !isValidCol(i)) {
            return false;
        }
    }
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            if (!isValidBox(i, j)) {
                return false;
            }
        }
    }
    return true;
}
// Pros: More structured, uses helper functions for row, column, and box validation.
// Cons: Slightly more verbose than the first approach.

// Solution 3: Using a while loop and helper functions
function isValidSudoku3(board) {
    const isValidRow = (row) => {
        const set = new Set();
        let i = 0;
        while (i < row.length) {
            const num = row[i];
            if (num !== '.') {
                if (set.has(num)) return false;
                set.add(num);
            }
            i++;
        }
        return true;
    };
    const isValidCol = (colIndex) => {
        const set = new Set();
        let i = 0;
        while (i < 9) {
            const num = board[i][colIndex];
            if (num !== '.') {
                if (set.has(num)) return false;
                set.add(num);
            }
            i++;
        }
        return true;
    };
    const isValidBox = (boxRow, boxCol) => {
        const set = new Set();
        let i = boxRow;
        while (i < boxRow + 3) {
            let j = boxCol;
            while (j < boxCol + 3) {
                const num = board[i][j];
                if (num !== '.') {
                    if (set.has(num)) return false;
                    set.add(num);
                }
                j++;
            }
            i++;
        }
        return true;
    };
    let i = 0;
    while (i < 9) {
        if (!isValidRow(board[i]) || !isValidCol(i)) {
            return false;
        }
        i++;
    }
    i = 0;
    while (i < 9) {
        let j = 0;
        while (j < 9) {
            if (!isValidBox(i, j)) {
                return false;
            }
            j += 3;
        }
        i += 3;
    }
    return true;
}
// Pros: Similar to the second solution, uses while loops.
// Cons: Slightly more verbose than the second approach.

// Solution 4: Using forEach and sets
function isValidSudoku4(board) {
    for (let i = 0; i < 9; i++) {
        const rowSet = new Set();
        const colSet = new Set();
        const boxSet = new Set();
        board[i].forEach((rowVal, j) => {
            const colVal = board[j][i];
            const boxVal = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
            if (rowVal !== '.') {
                if (rowSet.has(rowVal)) return false;
                rowSet.add(rowVal);
            }
            if (colVal !== '.') {
                if (colSet.has(colVal)) return false;
                colSet.add(colVal);
            }
            if (boxVal !== '.') {
                if (boxSet.has(boxVal)) return false;
                boxSet.add(boxVal);
            }
        });
    }
    return true;
}
// Pros: Uses forEach for iteration.
// Cons: Slightly less efficient than the nested for loop approach.

// Solution 5: Using reduce and sets
function isValidSudoku5(board) {
    for (let i = 0; i < 9; i++) {
        const rowSet = new Set();
        const colSet = new Set();
        const boxSet = new Set();
        board[i].reduce((_, rowVal, j) => {
            const colVal = board[j][i];
            const boxVal = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
            if (rowVal !== '.') {
                if (rowSet.has(rowVal)) return false;
                rowSet.add(rowVal);
            }
            if (colVal !== '.') {
                if (colSet.has(colVal)) return false;
                colSet.add(colVal);
            }
            if (boxVal !== '.') {
                if (boxSet.has(boxVal)) return false;
                boxSet.add(boxVal);
            }
        }, null);
    }
    return true;
}
// Pros: Uses reduce for iteration.
// Cons: Less efficient than the nested for loop approach.
