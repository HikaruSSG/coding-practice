describe('Palindrome Checker', () => {
    const testCases = [
      { input: 'racecar', expected: true },
      { input: 'hello', expected: false },
      { input: 'madam', expected: true },
      { input: 'A man, a plan, a canal: Panama', expected: true },
      { input: '12321', expected: true },
      { input: '12345', expected: false },
      { input: '', expected: true },
      { input: 'a', expected: true },
      { input: '  ', expected: true },
      { input: 'Was it a car or a cat I saw?', expected: true },
      { input: 'No lemon, no melon', expected: true },
      { input: 'Not a palindrome', expected: false },
    ];

    // Solution 1: Using built-in methods
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should check if a string is a palindrome using built-in methods', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isPalindrome1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using a for loop
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should check if a string is a palindrome using a for loop', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isPalindrome2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using recursion
    // Time Complexity: O(n), Memory Allocation: O(n) due to call stack
    it('should check if a string is a palindrome using recursion', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isPalindrome3(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 4: Using two pointers
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should check if a string is a palindrome using two pointers', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isPalindrome4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using every
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should check if a string is a palindrome using every', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isPalindrome5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function isPalindrome1(str) {
        const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        const reversedStr = cleanStr.split('').reverse().join('');
        return cleanStr === reversedStr;
    }

    function isPalindrome2(str) {
        const len = str.length;
        for (let i = 0; i < len / 2; i++) {
          if (str[i] !== str[len - 1 - i]) {
            return false;
          }
        }
        return true;
    }

    function isPalindrome3(str) {
        if (str.length <= 1) {
          return true;
        }
        if (str[0] !== str[str.length - 1]) {
          return false;
        }
        return isPalindrome3(str.slice(1, -1));
    }

    function isPalindrome4(str) {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    function isPalindrome5(str) {
        return str.split('').every((char, i) => {
            return char === str[str.length - 1 - i];
        });
    }
});
