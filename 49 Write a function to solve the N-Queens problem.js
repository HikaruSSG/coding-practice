// Write a function to solve the N-Queens problem

// Solution 1: Using backtracking
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

// Solution 2: Using recursion and helper functions
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

// Solution 3: Using a while loop and backtracking
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

// Solution 4: Using a for loop and backtracking
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

// Solution 5: Using a generator function
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
