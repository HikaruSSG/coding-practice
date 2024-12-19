describe('Reverse String', () => {
  const testCases = [
    { input: 'hello', expected: 'olleh' },
    { input: 'world', expected: 'dlrow' },
    { input: '12345', expected: '54321' },
    { input: '', expected: '' },
    { input: 'a', expected: 'a' },
    { input: '  ', expected: '  ' },
    { input: 'madam', expected: 'madam' },
    { input: 'A man, a plan, a canal: Panama', expected: 'amanaP :lanac a ,nalp a ,nam A' },
    { input: 'racecar', expected: 'racecar' },
    { input: '12321', expected: '12321' },
  ];

  // Solution 1: Using built-in methods
  // Time Complexity: O(n), Memory Allocation: O(n)
  it('should reverse a string using built-in methods', () => {
    testCases.forEach(({ input, expected }) => {
      const startTime = performance.now();
      const result = reverseString1(input);
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      cy.log(`Execution time for input "${input}": ${executionTime}ms`);
      expect(result).to.equal(expected);
    });
  });

  // Solution 2: Using a for loop
  // Time Complexity: O(n), Memory Allocation: O(n)
  it('should reverse a string using a for loop', () => {
    testCases.forEach(({ input, expected }) => {
      const startTime = performance.now();
      const result = reverseString2(input);
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      cy.log(`Execution time for input "${input}": ${executionTime}ms`);
      expect(result).to.equal(expected);
    });
  });

  // Solution 3: Using recursion
  // Time Complexity: O(n), Memory Allocation: O(n) due to call stack
  it('should reverse a string using recursion', () => {
    testCases.forEach(({ input, expected }) => {
      const startTime = performance.now();
      const result = reverseString3(input);
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      cy.log(`Execution time for input "${input}": ${executionTime}ms`);
      expect(result).to.equal(expected);
    });
  });

  // Solution 4: Using reduce
  // Time Complexity: O(n), Memory Allocation: O(n)
  it('should reverse a string using reduce', () => {
    testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = reverseString4(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
  });

  // Solution 5: Using a while loop
  // Time Complexity: O(n), Memory Allocation: O(n)
  it('should reverse a string using a while loop', () => {
    testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = reverseString5(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
  });

  function reverseString1(str) {
    return str.split("").reverse().join("");
  }

  function reverseString2(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }

  function reverseString3(str) {
    if (str === "") {
      return "";
    } else {
      return reverseString3(str.substr(1)) + str.charAt(0);
    }
  }

  function reverseString4(str) {
    return str.split('').reduce((reversed, character) => character + reversed, '');
  }

  function reverseString5(str) {
    let reversed = "";
    let i = str.length - 1;
    while (i >= 0) {
      reversed += str[i];
      i--;
    }
    return reversed;
  }
});
