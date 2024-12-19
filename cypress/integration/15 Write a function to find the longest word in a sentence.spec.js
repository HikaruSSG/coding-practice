describe('Find Longest Word in Sentence', () => {
    const testCases = [
      { input: 'hello world', expected: 'hello' },
      { input: 'The quick brown fox jumps over the lazy dog', expected: 'jumps' },
      { input: 'This is a test sentence', expected: 'sentence' },
      { input: 'one two three four five', expected: 'three' },
      { input: 'a b c d e', expected: 'a' },
      { input: '', expected: '' },
      { input: '  ', expected: '' },
      { input: 'programming is fun', expected: 'programming' },
      { input: 'javascript is awesome', expected: 'javascript' },
      { input: 'supercalifragilisticexpialidocious', expected: 'supercalifragilisticexpialidocious' },
      { input: 'a very long word', expected: 'supercalifragilisticexpialidocious' },
    ];

    // Solution 1: Using a for loop
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should find the longest word using a for loop', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = findLongestWord1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using reduce
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should find the longest word using reduce', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = findLongestWord2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using sort
    // Time Complexity: O(n log n), Memory Allocation: O(n)
    it('should find the longest word using sort', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = findLongestWord3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using forEach
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should find the longest word using forEach', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = findLongestWord4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using a while loop
    // Time Complexity: O(n), Memory Allocation: O(1)
    it('should find the longest word using a while loop', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = findLongestWord5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function findLongestWord1(sentence) {
        const words = sentence.split(" ");
        let longestWord = "";
        for (let word of words) {
          if (word.length > longestWord.length) {
            longestWord = word;
          }
        }
        return longestWord;
    }

    function findLongestWord2(sentence) {
        return sentence.split(" ").reduce((longest, current) => {
          return current.length > longest.length ? current : longest;
        }, "");
    }

    function findLongestWord3(sentence) {
        const words = sentence.split(" ");
        words.sort((a, b) => b.length - a.length);
        return words[0];
    }

    function findLongestWord4(sentence) {
        let longestWord = "";
        sentence.split(" ").forEach(word => {
            if (word.length > longestWord.length) {
                longestWord = word;
            }
        });
        return longestWord;
    }

    function findLongestWord5(sentence) {
        const words = sentence.split(" ");
        let longestWord = "";
        let i = 0;
        while (i < words.length) {
            if (words[i].length > longestWord.length) {
                longestWord = words[i];
            }
            i++;
        }
        return longestWord;
    }
});
