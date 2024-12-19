describe('Balanced Parentheses Checker', () => {
    const testCases = [
      { input: '()', expected: true },
      { input: '[]', expected: true },
      { input: '{}', expected: true },
      { input: '()[]{}', expected: true },
      { input: '([{}])', expected: true },
      { input: '((()))', expected: true },
      { input: '([])', expected: true },
      { input: '{[()]}', expected: true },
      { input: '(', expected: false },
      { input: ')', expected: false },
      { input: '[(])', expected: false },
      { input: '([)', expected: false },
      { input: '((', expected: false },
      { input: '))', expected: false },
      { input: '([{}', expected: false },
      { input: '([{}])(', expected: false },
      { input: 'a(b[c{d}e]f)g', expected: true },
      { input: 'a(b[c{d}e]f', expected: false },
      { input: 'a(b[c{d}e]f))', expected: false },
    ];

    // Solution 1: Using a stack
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should check for balanced parentheses using a stack', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isBalanced1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using recursion
    // Time Complexity: O(n), Memory Allocation: O(n) due to call stack
    it('should check for balanced parentheses using recursion', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isBalanced2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using a counter
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should check for balanced parentheses using a counter', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isBalanced3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using replace
    // Time Complexity: O(n^2), Memory Allocation: O(1)
    it('should check for balanced parentheses using replace', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isBalanced4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using a while loop and stack
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should check for balanced parentheses using a while loop and stack', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isBalanced5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function isBalanced1(str) {
        const stack = [];
        const map = {
          ")": "(",
          "]": "[",
          "}": "{",
        };
        for (let char of str) {
          if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
          } else if (char === ")" || char === "]" || char === "}") {
            if (stack.length === 0 || stack.pop() !== map[char]) {
              return false;
            }
          }
        }
        return stack.length === 0;
    }

    function isBalanced2(str) {
        if (str.length === 0) {
            return true;
        }
        const first = str[0];
        if (first === '(' || first === '[' || first === '{') {
            let count = 1;
            for (let i = 1; i < str.length; i++) {
                if (str[i] === first) {
                    count++;
                } else if (
                    (first === '(' && str[i] === ')') ||
                    (first === '[' && str[i] === ']') ||
                    (first === '{' && str[i] === '}')
                ) {
                    count--;
                }
                if (count === 0) {
                    return isBalanced2(str.slice(1, i)) && isBalanced2(str.slice(i + 1));
                }
            }
            return false;
        } else if (first === ')' || first === ']' || first === '}') {
            return false;
        } else {
            return isBalanced2(str.slice(1));
        }
    }

    function isBalanced3(str) {
        let count = 0;
        for (let char of str) {
            if (char === '(') {
                count++;
            } else if (char === ')') {
                count--;
            }
            if (count < 0) {
                return false;
            }
        }
        return count === 0;
    }

    function isBalanced4(str) {
        let len;
        do {
            len = str.length;
            str = str.replace('()', '').replace('[]', '').replace('{}', '');
        } while (len !== str.length);
        return str.length === 0;
    }

    function isBalanced5(str) {
        const stack = [];
        let i = 0;
        while (i < str.length) {
            const char = str[i];
            if (char === '(' || char === '[' || char === '{') {
                stack.push(char);
            } else if (char === ')' || char === ']' || char === '}') {
                if (stack.length === 0) {
                    return false;
                }
                const top = stack.pop();
                if (
                    (char === ')' && top !== '(') ||
                    (char === ']' && top !== '[') ||
                    (char === '}' && top !== '{')
                ) {
                    return false;
                }
            }
            i++;
        }
        return stack.length === 0;
    }
});
