describe('Sudoku Board Validator', () => {
    const validBoard = [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
      ];

    const invalidBoard = [
        ["8","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
      ];

    const testCases = [
      { input: validBoard, expected: true },
      { input: invalidBoard, expected: false },
      { input: [
        [".",".",".",".","5",".",".","1","."],
        [".","4",".","3",".",".",".",".","."],
        [".",".",".",".",".","3",".",".","1"],
        ["8",".",".",".",".",".","2",".","."],
        [".",".","2",".","7",".",".",".","."],
        [".","1","5",".",".",".",".",".","."],
        [".",".",".",".",".","2",".",".","."],
        [".","2",".",".",".",".",".","6","."],
        [".",".",".",".",".",".","2","8","."]
      ], expected: false },
      { input: [
        ["5","3","4","6","7","8","9","1","2"],
        ["6","7","2","1","9","5","3","4","8"],
        ["1","9","8","3","4","2","5","6","7"],
        ["8","5","9","7","6","1","4","2","3"],
        ["4","2","6","8","5","3","7","9","1"],
        ["7","1","3","9","2","4","8","5","6"],
        ["9","6","1","5","3","7","2","8","4"],
        ["2","8","7","4","1","9","6","3","5"],
        ["3","4","5","2","8","6","1","7","9"]
      ], expected: true },
    ];

    // Solution 1: Using sets
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should check if a Sudoku board is valid using sets', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isValidSudoku1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using nested for loops and helper functions
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should check if a Sudoku board is valid using nested for loops and helper functions', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isValidSudoku2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using a while loop and helper functions
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should check if a Sudoku board is valid using a while loop and helper functions', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isValidSudoku3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using forEach and sets
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should check if a Sudoku board is valid using forEach and sets', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isValidSudoku4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using reduce and sets
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should check if a Sudoku board is valid using reduce and sets', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isValidSudoku5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

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
});
