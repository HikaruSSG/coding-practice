describe('Temperature Converter', () => {
    const testCases = [
      { input: [0, 'CtoF'], expected: 32 },
      { input: [100, 'CtoF'], expected: 212 },
      { input: [25, 'CtoF'], expected: 77 },
      { input: [32, 'FtoC'], expected: 0 },
      { input: [212, 'FtoC'], expected: 100 },
      { input: [77, 'FtoC'], expected: 25 },
      { input: [10, 'CtoF'], expected: 50 },
      { input: [-40, 'CtoF'], expected: -40 },
      { input: [-40, 'FtoC'], expected: -40 },
      { input: [68, 'FtoC'], expected: 20 },
      { input: [20, 'invalid'], expected: 'Invalid unit' },
    ];

    // Solution 1: Using if-else statements
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should convert temperature using if-else statements', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = convertTemperature1(input[0], input[1]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using a switch statement
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should convert temperature using a switch statement', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = convertTemperature2(input[0], input[1]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using an object literal
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should convert temperature using an object literal', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = convertTemperature3(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using a map
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should convert temperature using a map', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = convertTemperature4(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using ternary operators
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should convert temperature using ternary operators', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = convertTemperature5(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function convertTemperature1(temp, unit) {
        if (unit === "CtoF") {
          return (temp * 9) / 5 + 32;
        } else if (unit === "FtoC") {
          return ((temp - 32) * 5) / 9;
        } else {
          return "Invalid unit";
        }
    }

    function convertTemperature2(temp, unit) {
        switch (unit) {
            case "CtoF":
                return (temp * 9) / 5 + 32;
            case "FtoC":
                return ((temp - 32) * 5) / 9;
            default:
                return "Invalid unit";
        }
    }

    function convertTemperature3(temp, unit) {
        const conversions = {
            CtoF: (t) => (t * 9) / 5 + 32,
            FtoC: (t) => ((t - 32) * 5) / 9
        };
        return conversions[unit] ? conversions[unit](temp) : "Invalid unit";
    }

    function convertTemperature4(temp, unit) {
        const conversions = new Map([
            ["CtoF", (t) => (t * 9) / 5 + 32],
            ["FtoC", (t) => ((t - 32) * 5) / 9]
        ]);
        return conversions.get(unit) ? conversions.get(unit)(temp) : "Invalid unit";
    }

    function convertTemperature5(temp, unit) {
        return unit === "CtoF" ? (temp * 9) / 5 + 32 :
               unit === "FtoC" ? ((temp - 32) * 5) / 9 :
               "Invalid unit";
    }
});
