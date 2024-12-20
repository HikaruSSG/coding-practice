describe('Pascal\'s Triangle Generator', () => {
    const testCases = [
      { input: 0, expected: [] },
      { input: 1, expected: [[1]] },
      { input: 2, expected: [[1], [1, 1]] },
      { input: 3, expected: [[1], [1, 1], [1, 2, 1]] },
      { input: 4, expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]] },
      { input: 5, expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]] },
      { input: 6, expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]] },
      { input: 7, expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1]] },
    ];

    // Solution 1: Using nested for loops
    // Time Complexity: O(n^2), Memory Allocation: O(n^2)
    it('should generate Pascal\'s triangle using nested for loops', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = generatePascalsTriangle1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 2: Using recursion
    // Time Complexity: O(n^2), Memory Allocation: O(n^2) due to call stack
    it('should generate Pascal\'s triangle using recursion', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = generatePascalsTriangle2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 3: Using map and reduce
    // Time Complexity: O(n^2), Memory Allocation: O(n^2)
    it('should generate Pascal\'s triangle using map and reduce', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = generatePascalsTriangle3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 4: Using a while loop
    // Time Complexity: O(n^2), Memory Allocation: O(n^2)
    it('should generate Pascal\'s triangle using a while loop', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = generatePascalsTriangle4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 5: Using a for loop and array destructuring
    // Time Complexity: O(n^2), Memory Allocation: O(n^2)
    it('should generate Pascal\'s triangle using a for loop and array destructuring', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = generatePascalsTriangle5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    function generatePascalsTriangle1(numRows) {
        if (numRows <= 0) {
          return [];
        }
        const triangle = [];
        for (let i = 0; i < numRows; i++) {
          const row = [];
          for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
              row.push(1);
            } else {
              row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
            }
          }
          triangle.push(row);
        }
        return triangle;
    }

    function generatePascalsTriangle2(numRows) {
        if (numRows <= 0) {
            return [];
        }
        if (numRows === 1) {
            return [[1]];
        }
        const prevTriangle = generatePascalsTriangle2(numRows - 1);
        const prevRow = prevTriangle[prevTriangle.length - 1];
        const newRow = [];
        for (let i = 0; i < numRows; i++) {
            if (i === 0 || i === numRows - 1) {
                newRow.push(1);
            } else {
                newRow.push(prevRow[i - 1] + prevRow[i]);
            }
        }
        prevTriangle.push(newRow);
        return prevTriangle;
    }

    function generatePascalsTriangle3(numRows) {
        if (numRows <= 0) {
            return [];
        }
        const triangle = [];
        for (let i = 0; i < numRows; i++) {
            triangle.push(Array(i + 1).fill(0).map((_, j) => {
                if (j === 0 || j === i) {
                    return 1;
                } else {
                    return triangle[i - 1][j - 1] + triangle[i - 1][j];
                }
            }));
        }
        return triangle;
    }

    function generatePascalsTriangle4(numRows) {
        if (numRows <= 0) {
            return [];
        }
        const triangle = [];
        let i = 0;
        while (i < numRows) {
            const row = [];
            let j = 0;
            while (j <= i) {
                if (j === 0 || j === i) {
                    row.push(1);
                } else {
                    row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
                }
                j++;
            }
            triangle.push(row);
            i++;
        }
        return triangle;
    }

    function generatePascalsTriangle5(numRows) {
        if (numRows <= 0) {
            return [];
        }
        const triangle = [];
        for (let i = 0; i < numRows; i++) {
            const row = [];
            for (let j = 0; j <= i; j++) {
                if (j === 0 || j === i) {
                    row.push(1);
                } else {
                    const [prevRow] = triangle.slice(-1);
                    row.push(prevRow[j - 1] + prevRow[j]);
                }
            }
            triangle.push(row);
        }
        return triangle;
    }
});
