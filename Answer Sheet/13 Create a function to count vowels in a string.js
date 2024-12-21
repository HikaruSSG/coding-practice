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
function countVowels2(str) {
  const matches = str.match(/[aeiouAEIOU]/g);
  return matches ? matches.length : 0;
}
function countVowels3(str) {
    const vowels = "aeiouAEIOU";
    return str.split('').filter(char => vowels.includes(char)).length;
}
function countVowels4(str) {
    const vowels = "aeiouAEIOU";
    return str.split('').reduce((count, char) => {
        return vowels.includes(char) ? count + 1 : count;
    }, 0);
}
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
export { countVowels1, countVowels2, countVowels3, countVowels4, countVowels5 };
