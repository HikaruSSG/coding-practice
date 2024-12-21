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
export { countWordOccurrences1, countWordOccurrences2, countWordOccurrences3, countWordOccurrences4, countWordOccurrences5 };
