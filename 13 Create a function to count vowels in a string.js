// Create a function to count vowels in a string

// Solution 1: Using a for loop and includes
function countVowels1(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Solution 2: Using regex
function countVowels2(str) {
  const matches = str.match(/[aeiouAEIOU]/g);
  return matches ? matches.length : 0;
}

// Solution 3: Using filter
function countVowels3(str) {
    const vowels = "aeiouAEIOU";
    return str.split('').filter(char => vowels.includes(char)).length;
}

// Solution 4: Using reduce
function countVowels4(str) {
    const vowels = "aeiouAEIOU";
    return str.split('').reduce((count, char) => {
        return vowels.includes(char) ? count + 1 : count;
    }, 0);
}

// Solution 5: Using a while loop
function countVowels5(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    let i = 0;
    while (i < str.length) {
        if (vowels.includes(str[i])) {
            count++;
        }
        i++;
    }
    return count;
}
