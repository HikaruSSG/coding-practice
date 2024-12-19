describe('Word Occurrence Counter', () => {
    const testCases = [
      { input: 'hello world hello', expected: { hello: 2, world: 1 } },
      { input: 'The quick brown fox jumps over the lazy dog', expected: { the: 2, quick: 1, brown: 1, fox: 1, jumps: 1, over: 1, lazy: 1, dog: 1 } },
      { input: 'This is a test sentence is', expected: { this: 1, is: 2, a: 1, test: 1, sentence: 1 } },
      { input: 'one two three four five one two', expected: { one: 2, two: 2, three: 1, four: 1, five: 1 } },
      { input: 'a a a a a', expected: { a: 5 } },
      { input: '', expected: {} },
      { input: '  ', expected: {} },
      { input: 'Programming is fun is', expected: { programming: 1, is: 2, fun: 1 } },
      { input: 'JavaScript is awesome is', expected: { javascript: 1, is: 2, awesome: 1 } },
      { input: 'apple banana apple orange banana apple', expected: { apple: 3, banana: 2, orange: 1 } },
      { input: 'Word word WORD word', expected: { word: 4 } },
    ];

    // Solution 1: Using an object literal
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should count word occurrences using an object literal', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = countWordOccurrences1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 2: Using Map
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should count word occurrences using Map', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = countWordOccurrences2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.deep.equal(expected);
      });
    });

    // Solution 3: Using reduce
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should count word occurrences using reduce', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = countWordOccurrences3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 4: Using forEach
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should count word occurrences using forEach', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = countWordOccurrences4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    // Solution 5: Using a for loop
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should count word occurrences using a for loop', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = countWordOccurrences5(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.deep.equal(expected);
        });
      });

    function countWordOccurrences1(str) {
        const wordCounts = {};
        const words = str.toLowerCase().split(/\s+/);
        for (let word of words) {
          wordCounts[word] = (wordCounts[word] || 0) + 1;
        }
        return wordCounts;
    }

    function countWordOccurrences2(str) {
        const wordCounts = new Map();
        const words = str.toLowerCase().split(/\s+/);
        for (let word of words) {
            wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
        }
        return Object.fromEntries(wordCounts);
    }

    function countWordOccurrences3(str) {
        return str.toLowerCase().split(/\s+/).reduce((counts, word) => {
            counts[word] = (counts[word] || 0) + 1;
            return counts;
        }, {});
    }

    function countWordOccurrences4(str) {
        const wordCounts = {};
        str.toLowerCase().split(/\s+/).forEach(word => {
            wordCounts[word] = (wordCounts[word] || 0) + 1;
        });
        return wordCounts;
    }

    function countWordOccurrences5(str) {
        const wordCounts = {};
        const words = str.toLowerCase().split(/\s+/);
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            wordCounts[word] = (wordCounts[word] || 0) + 1;
        }
        return wordCounts;
    }
});
