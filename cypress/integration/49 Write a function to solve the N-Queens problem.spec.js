describe('N-Queens Problem Solver', () => {
    const testCases = [
      { input: 1, expected: [['Q']] },
      { input: 2, expected: [] },
      { input: 3, expected: [] },
      { input: 4, expected: [
        [".Q..", "...Q", "Q...", "..Q."],
        ["..Q.", "Q...", "...Q", ".Q.."]
      ]},
      { input: 5, expected: [
        [".Q...", "...Q.", "Q....", "..Q..", "....Q"],
        ["..Q..", "....Q", ".Q...", "...Q.", "Q...."],
        ["Q....", "..Q..", "....Q", ".Q...", "...Q."],
        ["...Q.", "Q....", "..Q..", "....Q", ".Q..."],
        [".Q...", "....Q", "..Q..", "Q....", "...Q."],
        ["...Q.", ".Q...", "....Q", "Q....", "..Q.."],
        ["..Q..", "Q....", "...Q.", ".Q...", "....Q"],
        ["....Q", ".Q...", "...Q.", "Q....", "..Q.."],
        ["....Q", "..Q..", "Q....", "...Q.", ".Q..."],
        ["Q....", "...Q.", ".Q...", "....Q", "..Q.."]
      ]},
    ];

    // Solution 1: Using backtracking
    // Time Complexity: O(n!), Memory Allocation: O(n^2)
    it('should solve N-Queens problem using backtracking', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = solveNQueens1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 2: Using recursion and helper functions
    // Time Complexity: O(n!), Memory Allocation: O(n^2)
    it('should solve N-Queens problem using recursion and helper functions', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = solveNQueens2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 3: Using a while loop and backtracking
    // Time Complexity: O(n!), Memory Allocation: O(n^2)
    it('should solve N-Queens problem using a while loop and backtracking', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = solveNQueens3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 4: Using a for loop and recursion
    // Time Complexity: O(n!), Memory Allocation: O(n^2)
    it('should solve N-Queens problem using a for loop and recursion', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = solveNQueens4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 5: Using a generator function
    // Time Complexity: O(n!), Memory Allocation: O(n^2)
    it('should solve N-Queens problem using a generator function', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = getAllSolutions(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    function solveNQueens1(n) {
        const solutions = [];
        const solve = (row, board) => {
            if (row === n) {
                solutions.push(board.map(row => row.join('')));
                return;
            }
            for (let col = 0; col < n; col++) {
                if (isValid(board, row, col)) {
                    board[row][col] = 'Q';
                    solve(row + 1, board);
                    board[row][col] = '.';
                }
            }
        };
        const isValid = (board, row, col) => {
            for (let i = 0; i < row; i++) {
                if (board[i][col] === 'Q') return false;
                const diagonalLeft = col - (row - i);
                const diagonalRight = col + (row - i);
                if (diagonalLeft >= 0 && board[i][diagonalLeft] === 'Q') return false;
                if (diagonalRight < board.length && board[i][diagonalRight] === 'Q') return false;
            }
            return true;
        };
        const initialBoard = Array(n).fill(null).map(() => Array(n).fill('.'));
        solve(0, initialBoard);
        return solutions;
    }

    function solveNQueens2(n) {
        const solutions = [];
        const solve = (row, board) => {
            if (row === n) {
                solutions.push(board.map(row => row.join('')));
                return;
            }
            for (let col = 0; col < n; col++) {
                if (isSafe(board, row, col)) {
                    board[row][col] = 'Q';
                    solve(row + 1, board);
                    board[row][col] = '.';
                }
            }
        };
        const isSafe = (board, row, col) => {
            return checkColumn(board, row, col) && checkDiagonals(board, row, col);
        };
        const checkColumn = (board, row, col) => {
            for (let i = 0; i < row; i++) {
                if (board[i][col] === 'Q') return false;
            }
            return true;
        };
        const checkDiagonals = (board, row, col) => {
            for (let i = 0; i < row; i++) {
                const diagonalLeft = col - (row - i);
                const diagonalRight = col + (row - i);
                if (diagonalLeft >= 0 && board[i][diagonalLeft] === 'Q') return false;
                if (diagonalRight < board.length && board[i][diagonalRight] === 'Q') return false;
            }
            return true;
        };
        const initialBoard = Array(n).fill(null).map(() => Array(n).fill('.'));
        solve(0, initialBoard);
        return solutions;
    }

    function solveNQueens3(n) {
        const solutions = [];
        const board = Array(n).fill(null).map(() => Array(n).fill('.'));
        let row = 0;
        const stack = [];
        while (row < n) {
            let col = stack.length > 0 ? stack[stack.length - 1][1] + 1 : 0;
            while (col < n) {
                if (isValid(board, row, col)) {
                    board[row][col] = 'Q';
                    stack.push([row, col]);
                    row++;
                    break;
                }
                col++;
            }
            if (col === n) {
                if (stack.length === 0) break;
                const [prevRow, prevCol] = stack.pop();
                board[prevRow][prevCol] = '.';
                row = prevRow;
            }
            if (row === n) {
                solutions.push(board.map(row => row.join('')));
                if (stack.length === 0) break;
                const [prevRow, prevCol] = stack.pop();
                board[prevRow][prevCol] = '.';
                row = prevRow;
            }
        }
        return solutions;

        function isValid(board, row, col) {
            for (let i = 0; i < row; i++) {
                if (board[i][col] === 'Q') return false;
                const diagonalLeft = col - (row - i);
                const diagonalRight = col + (row - i);
                if (diagonalLeft >= 0 && board[i][diagonalLeft] === 'Q') return false;
                if (diagonalRight < board.length && board[i][diagonalRight] === 'Q') return false;
            }
            return true;
        }
    }

    function solveNQueens4(n) {
        const solutions = [];
        const board = Array(n).fill(null).map(() => Array(n).fill('.'));
        const solve = (row) => {
            if (row === n) {
                solutions.push(board.map(row => row.join('')));
                return;
            }
            for (let col = 0; col < n; col++) {
                if (isValid(board, row, col)) {
                    board[row][col] = 'Q';
                    solve(row + 1);
                    board[row][col] = '.';
                }
            }
        };
        const isValid = (board, row, col) => {
            for (let i = 0; i < row; i++) {
                if (board[i][col] === 'Q') return false;
                const diagonalLeft = col - (row - i);
                const diagonalRight = col + (row - i);
                if (diagonalLeft >= 0 && board[i][diagonalLeft] === 'Q') return false;
                if (diagonalRight < board.length && board[i][diagonalRight] === 'Q') return false;
            }
            return true;
        };
        solve(0);
        return solutions;
    }

    function* solveNQueens5(n) {
        const board = Array(n).fill(null).map(() => Array(n).fill('.'));
        function* solve(row) {
            if (row === n) {
                yield board.map(row => row.join(''));
                return;
            }
            for (let col = 0; col < n; col++) {
                if (isValid(board, row, col)) {
                    board[row][col] = 'Q';
                    yield* solve(row + 1);
                    board[row][col] = '.';
                }
            }
        }
        function isValid(board, row, col) {
            for (let i = 0; i < row; i++) {
                if (board[i][col] === 'Q') return false;
                const diagonalLeft = col - (row - i);
                const diagonalRight = col + (row - i);
                if (diagonalLeft >= 0 && board[i][diagonalLeft] === 'Q') return false;
                if (diagonalRight < board.length && board[i][diagonalRight] === 'Q') return false;
            }
            return true;
        }
        yield* solve(0);
    }

    function getAllSolutions(n) {
        return Array.from(solveNQueens5(n));
    }
});
