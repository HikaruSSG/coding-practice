function reverseString1(str) {
  return str.split("").reverse().join("");
}
function reverseString2(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
function reverseString3(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString3(str.substr(1)) + str.charAt(0);
  }
}
function reverseString4(str) {
    return str.split('').reduce((reversed, character) => character + reversed, '');
}
function reverseString5(str) {
  let reversed = "";
  let i = str.length - 1;
  while (i >= 0) {
    reversed += str[i];
    i--;
  }
  return reversed;
}
