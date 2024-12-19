describe('Roman Numeral Converter', () => {
    const testCases = [
      { input: 1, expected: 'I' },
      { input: 4, expected: 'IV' },
      { input: 5, expected: 'V' },
      { input: 9, expected: 'IX' },
      { input: 10, expected: 'X' },
      { input: 40, expected: 'XL' },
      { input: 50, expected: 'L' },
      { input: 90, expected: 'XC' },
      { input: 100, expected: 'C' },
      { input: 400, expected: 'CD' },
      { input: 500, expected: 'D' },
      { input: 900, expected: 'CM' },
      { input: 1000, expected: 'M' },
      { input: 3, expected: 'III' },
      { input: 20, expected: 'XX' },
      { input: 49, expected: 'XLIX' },
      { input: 99, expected: 'XCIX' },
      { input: 399, expected: 'CCCXCIX' },
      { input: 1999, expected: 'MCMXCIX' },
      { input: 3999, expected: 'MMMCMXCIX' },
      { input: 0, expected: 'Invalid input' },
      { input: 4000, expected: 'Invalid input' },
    ];

    // Solution 1: Using arrays and a for loop
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should convert to roman numerals using arrays and a for loop', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = toRoman1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using a while loop and string concatenation
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should convert to roman numerals using a while loop and string concatenation', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = toRoman2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using recursion
    // Time Complexity: O(1), Memory Allocation: O(1) due to call stack
    it('should convert to roman numerals using recursion', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = toRoman3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using a map
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should convert to roman numerals using a map', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = toRoman4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using reduce
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should convert to roman numerals using reduce', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = toRoman5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function toRoman1(num) {
        if (num <= 0 || num > 3999) {
          return "Invalid input";
        }
        const romanValues = [
          "M",
          "CM",
          "D",
          "CD",
          "C",
          "XC",
          "L",
          "XL",
          "X",
          "IX",
          "V",
          "IV",
          "I",
        ];
        const decimalValues = [
          1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
        ];
        let roman = "";
        for (let i = 0; i < decimalValues.length; i++) {
          while (num >= decimalValues[i]) {
            roman += romanValues[i];
            num -= decimalValues[i];
          }
        }
        return roman;
    }

    function toRoman2(num) {
        if (num <= 0 || num > 3999) {
            return "Invalid input";
        }
        const romanValues = {
            1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL',
            50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
        };
        const decimalValues = Object.keys(romanValues).sort((a, b) => b - a);
        let roman = "";
        let i = 0;
        while (num > 0) {
            if (num >= decimalValues[i]) {
                roman += romanValues[decimalValues[i]];
                num -= decimalValues[i];
            } else {
                i++;
            }
        }
        return roman;
    }

    function toRoman3(num) {
        if (num <= 0 || num > 3999) {
            return "Invalid input";
        }
        const romanValues = {
            1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL',
            50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
        };
        const decimalValues = Object.keys(romanValues).sort((a, b) => b - a);
        if (num === 0) {
            return "";
        }
        for (let value of decimalValues) {
            if (num >= value) {
                return romanValues[value] + toRoman3(num - value);
            }
        }
    }

    function toRoman4(num) {
        if (num <= 0 || num > 3999) {
            return "Invalid input";
        }
        const romanMap = new Map([
            [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"],
            [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"],
            [5, "V"], [4, "IV"], [1, "I"]
        ]);
        let roman = "";
        for (let [value, numeral] of romanMap) {
            while (num >= value) {
                roman += numeral;
                num -= value;
            }
        }
        return roman;
    }

    function toRoman5(num) {
        if (num <= 0 || num > 3999) {
            return "Invalid input";
        }
        const romanValues = {
            1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL',
            50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
        };
        const decimalValues = Object.keys(romanValues).sort((a, b) => b - a);
        return decimalValues.reduce((roman, value) => {
            while (num >= value) {
                roman += romanValues[value];
                num -= value;
            }
            return roman;
        }, "");
    }
});
