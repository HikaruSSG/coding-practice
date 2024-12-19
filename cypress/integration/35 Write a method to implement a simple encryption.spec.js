describe('Simple Encryption Methods', () => {
    const testCases = [
      { input: ['abc', 3], expected1: 'def' },
      { input: ['xyz', 3], expected1: 'abc' },
      { input: ['AbCd', 1], expected1: 'BcDe' },
      { input: ['aBc', 2], expected1: 'cDe' },
      { input: ['hello world', 1], expected1: 'ifmmp xpsme' },
      { input: ['hello world', 0], expected1: 'hello world' },
      { input: ['hello world', 26], expected1: 'hello world' },
      { input: ['hello world', 27], expected1: 'ifmmp xpsme' },
      { input: ['123 abc', 3], expected1: '123 def' },
      { input: ['abc', ''], expected2: 'cba' },
      { input: ['hello', 'zyxwvutsrqponmlkjihgfedcba'], expected3: 'svool' },
      { input: ['abc', 'zyxwvutsrqponmlkjihgfedcba'], expected3: 'zyx' },
      { input: ['hello', 'key'], expected4: '\x0b\x04\x0c\x0c\x17' },
      { input: ['abc', 'key'], expected4: '\x04\x05\x06' },
      { input: ['hello', ''], expected5: 'svool' },
      { input: ['abc', ''], expected5: 'zyx' },
    ];

    // Solution 1: Caesar cipher
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should encrypt using Caesar cipher', () => {
      testCases.forEach(({ input, expected1 }) => {
        if (expected1) {
            const startTime = performance.now();
            const result = caesarCipher1(input[0], input[1]);
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
            expect(result).to.equal(expected1);
        }
      });
    });

    // Solution 2: Reverse string
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should encrypt using reverse string', () => {
      testCases.forEach(({ input, expected2 }) => {
        if (expected2) {
            const startTime = performance.now();
            const result = reverseEncryption2(input[0]);
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for input "${input[0]}": ${executionTime}ms`);
            expect(result).to.equal(expected2);
        }
      });
    });

    // Solution 3: Simple substitution cipher
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should encrypt using simple substitution cipher', () => {
        testCases.forEach(({ input, expected3 }) => {
            if (expected3) {
                const startTime = performance.now();
                const result = substitutionCipher3(input[0], input[1]);
                const endTime = performance.now();
                const executionTime = endTime - startTime;
                cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
                expect(result).to.equal(expected3);
            }
        });
    });

    // Solution 4: XOR cipher
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should encrypt using XOR cipher', () => {
        testCases.forEach(({ input, expected4 }) => {
            if (expected4) {
                const startTime = performance.now();
                const result = xorCipher4(input[0], input[1]);
                const endTime = performance.now();
                const executionTime = endTime - startTime;
                cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
                expect(result).to.equal(expected4);
            }
        });
    });

    // Solution 5: Atbash cipher
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should encrypt using Atbash cipher', () => {
        testCases.forEach(({ input, expected5 }) => {
            if (expected5) {
                const startTime = performance.now();
                const result = atbashCipher5(input[0]);
                const endTime = performance.now();
                const executionTime = endTime - startTime;
                cy.log(`Execution time for input "${input[0]}": ${executionTime}ms`);
                expect(result).to.equal(expected5);
            }
        });
    });

    function caesarCipher1(str, shift) {
        let result = "";
        for (let char of str) {
          if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            let shiftedCode;
            if (code >= 65 && code <= 90) {
              shiftedCode = ((code - 65 + shift) % 26) + 65;
            } else if (code >= 97 && code <= 122) {
              shiftedCode = ((code - 97 + shift) % 26) + 97;
            }
            result += String.fromCharCode(shiftedCode);
          } else {
            result += char;
          }
        }
        return result;
    }

    function reverseEncryption2(str) {
        return str.split("").reverse().join("");
    }

    function substitutionCipher3(str, key) {
        if (key.length !== 26) {
            return "Invalid key";
        }
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        let result = "";
        for (let char of str.toLowerCase()) {
            const index = alphabet.indexOf(char);
            if (index !== -1) {
                result += key[index];
            } else {
                result += char;
            }
        }
        return result;
    }

    function xorCipher4(str, key) {
        let result = "";
        for (let i = 0; i < str.length; i++) {
            result += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return result;
    }

    function atbashCipher5(str) {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const reversedAlphabet = "zyxwvutsrqponmlkjihgfedcba";
        let result = "";
        for (let char of str.toLowerCase()) {
            const index = alphabet.indexOf(char);
            if (index !== -1) {
                result += reversedAlphabet[index];
            } else {
                result += char;
            }
        }
        return result;
    }
});
