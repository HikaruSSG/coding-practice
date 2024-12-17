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

// Solution 2: Using Map
function countWordOccurrences2(str) {
    const wordCounts = new Map();
    const words = str.toLowerCase().split(/\s+/);
    for (let word of words) {
        wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
    }
    return Object.fromEntries(wordCounts);
}

// Solution 3: Using reduce
function countWordOccurrences3(str) {
    return str.toLowerCase().split(/\s+/).reduce((counts, word) => {
        counts[word] = (counts[word] || 0) + 1;
        return counts;
    }, {});
}

// Solution 4: Using forEach
function countWordOccurrences4(str) {
    const wordCounts = {};
    str.toLowerCase().split(/\s+/).forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
    return wordCounts;
}

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
