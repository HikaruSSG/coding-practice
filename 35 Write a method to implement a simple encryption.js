// Write a method to implement a simple encryption

// Solution 1: Caesar cipher
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
// Pros: Simple and easy to implement, basic substitution cipher.
// Cons: Very weak encryption, easily breakable.
// Recommended: This is generally the recommended approach for a simple encryption due to its ease of implementation.

// Solution 2: Reverse string
function reverseEncryption2(str) {
    return str.split("").reverse().join("");
}
// Pros: Very simple to implement.
// Cons: Not a real encryption method, easily reversible.

// Solution 3: Simple substitution cipher
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
// Pros: Slightly more secure than Caesar cipher, uses a key for substitution.
// Cons: Still relatively weak, vulnerable to frequency analysis.

// Solution 4: XOR cipher
function xorCipher4(str, key) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}
// Pros: Simple and relatively fast, uses bitwise XOR operation.
// Cons: Vulnerable to known-plaintext attacks, not very secure.

// Solution 5: Atbash cipher
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
// Pros: Simple substitution cipher.
// Cons: Very weak encryption, easily breakable.
