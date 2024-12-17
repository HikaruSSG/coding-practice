// Write a function to find the longest word in a sentence

// Solution 1: Using a for loop
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

// Solution 2: Using reduce
function findLongestWord2(sentence) {
  return sentence.split(" ").reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
}

// Solution 3: Using sort
function findLongestWord3(sentence) {
    const words = sentence.split(" ");
    words.sort((a, b) => b.length - a.length);
    return words[0];
}

// Solution 4: Using forEach
function findLongestWord4(sentence) {
    let longestWord = "";
    sentence.split(" ").forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    return longestWord;
}

// Solution 5: Using a while loop
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
