// Create a method to count word occurrences in a string

// Solution 1: Using an object literal
function countWordOccurrences1(str) {
  const wordCounts = {};
  const words = str.toLowerCase().split(/\s+/);
  for (let word of words) {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  }
  return wordCounts;
}
// Pros: Efficient and simple, uses an object literal to store word counts.
// Cons: None.
// Recommended: This is generally the recommended approach due to its efficiency and simplicity.

// Solution 2: Using Map
function countWordOccurrences2(str) {
    const wordCounts = new Map();
    const words = str.toLowerCase().split(/\s+/);
    for (let word of words) {
        wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
    }
    return Object.fromEntries(wordCounts);
}
// Pros: Similar to object literal, but uses a Map.
// Cons: Slightly more verbose than object literal, requires conversion to object.

// Solution 3: Using reduce
function countWordOccurrences3(str) {
    return str.toLowerCase().split(/\s+/).reduce((counts, word) => {
        counts[word] = (counts[word] || 0) + 1;
        return counts;
    }, {});
}
// Pros: Functional approach, concise and readable.
// Cons: May be slightly less performant than a for loop for very large strings.

// Solution 4: Using forEach
function countWordOccurrences4(str) {
    const wordCounts = {};
    str.toLowerCase().split(/\s+/).forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
    return wordCounts;
}
// Pros: Easy to read and understand.
// Cons: Slightly more verbose than the reduce approach, not as efficient as a for loop.

// Solution 5: Using a for loop
function countWordOccurrences5(str) {
    const wordCounts = {};
    const words = str.toLowerCase().split(/\s+/);
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    }
    return wordCounts;
}
// Pros: Good performance, explicit control over the iteration process.
// Cons: More verbose than the object literal approach.
