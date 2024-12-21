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
export { caesarCipher1, reverseEncryption2, substitutionCipher3, xorCipher4, atbashCipher5 };
