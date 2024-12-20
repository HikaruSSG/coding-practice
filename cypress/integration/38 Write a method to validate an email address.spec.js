describe('Email Validator', () => {
    const testCases = [
      { input: 'test@example.com', expected: true },
      { input: 'test.test@example.com', expected: true },
      { input: 'test@example.co.uk', expected: true },
      { input: 'test@example', expected: false },
      { input: 'test.com', expected: false },
      { input: '@example.com', expected: false },
      { input: 'test@.com', expected: false },
      { input: 'test@example.', expected: false },
      { input: 'test@example..com', expected: false },
      { input: 'test@example.c', expected: true },
      { input: 'test@example.123', expected: true },
      { input: 'test@123.com', expected: true },
      { input: 'test@example.com.uk', expected: true },
      { input: 'test@example.com.', expected: false },
      { input: 'test@example.com-', expected: false },
      { input: 'test@example.com_', expected: false },
      { input: 'test@example.com+', expected: false },
      { input: 'test@example.com=', expected: false },
      { input: 'test@example.com!', expected: false },
      { input: 'test@example.com#', expected: false },
      { input: 'test@example.com$', expected: false },
      { input: 'test@example.com%', expected: false },
      { input: 'test@example.com^', expected: false },
      { input: 'test@example.com&', expected: false },
      { input: 'test@example.com*', expected: false },
      { input: 'test@example.com(', expected: false },
      { input: 'test@example.com)', expected: false },
      { input: 'test@example.com[', expected: false },
      { input: 'test@example.com]', expected: false },
      { input: 'test@example.com{', expected: false },
      { input: 'test@example.com}', expected: false },
      { input: 'test@example.com|', expected: false },
      { input: 'test@example.com\\', expected: false },
      { input: 'test@example.com/', expected: false },
      { input: 'test@example.com?', expected: false },
      { input: 'test@example.com<', expected: false },
      { input: 'test@example.com>', expected: false },
      { input: 'test@example.com,', expected: false },
      { input: 'test@example.com;', expected: false },
      { input: 'test@example.com:', expected: false },
      { input: 'test@example.com"', expected: false },
      { input: 'test@example.com\'', expected: false },
      { input: 'test@example.com`', expected: false },
      { input: 'test@example.com~', expected: false },
    ];

    // Solution 1: Using a regular expression
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should validate email using a regular expression', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = validateEmail1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using a more detailed regular expression
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should validate email using a more detailed regular expression', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = validateEmail2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using a simple check for @ and .
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should validate email using a simple check for @ and .', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = validateEmail3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using a for loop and character checks
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should validate email using a for loop and character checks', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = validateEmail4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using a while loop and character checks
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should validate email using a while loop and character checks', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = validateEmail5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function validateEmail1(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validateEmail2(email) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    function validateEmail3(email) {
        if (!email.includes('@') || !email.includes('.')) {
            return false;
        }
        const parts = email.split('@');
        if (parts.length !== 2 || parts[0].length === 0 || parts[1].length === 0) {
            return false;
        }
        const domainParts = parts[1].split('.');
        if (domainParts.length < 2 || domainParts.some(part => part.length === 0)) {
            return false;
        }
        return true;
    }

    function validateEmail4(email) {
        let atCount = 0;
        let dotCount = 0;
        let atIndex = -1;
        let dotIndex = -1;
        for (let i = 0; i < email.length; i++) {
            if (email[i] === '@') {
                atCount++;
                atIndex = i;
            } else if (email[i] === '.') {
                dotCount++;
                dotIndex = i;
            }
        }
        if (atCount !== 1 || dotCount < 1 || atIndex === 0 || dotIndex === email.length - 1 || atIndex > dotIndex) {
            return false;
        }
        return true;
    }

    function validateEmail5(email) {
        let atCount = 0;
        let dotCount = 0;
        let atIndex = -1;
        let dotIndex = -1;
        let i = 0;
        while (i < email.length) {
            if (email[i] === '@') {
                atCount++;
                atIndex = i;
            } else if (email[i] === '.') {
                dotCount++;
                dotIndex = i;
            }
            i++;
        }
        if (atCount !== 1 || dotCount < 1 || atIndex === 0 || dotIndex === email.length - 1 || atIndex > dotIndex) {
            return false;
        }
        return true;
    }
});
