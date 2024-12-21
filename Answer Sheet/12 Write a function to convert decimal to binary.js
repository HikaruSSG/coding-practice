function decimalToBinary1(decimal) {
  return decimal.toString(2);
}
function decimalToBinary2(decimal) {
    if (decimal === 0) {
        return "0";
    }
    let binary = "";
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}
function decimalToBinary3(decimal) {
    if (decimal === 0) {
        return "0";
    }
    if (decimal === 1) {
        return "1";
    }
    return decimalToBinary3(Math.floor(decimal / 2)) + (decimal % 2);
}
function decimalToBinary4(decimal) {
    if (decimal === 0) {
        return "0";
    }
    let binary = "";
    while (decimal > 0) {
        binary = (decimal & 1) + binary;
        decimal = decimal >> 1;
    }
    return binary;
}
function decimalToBinary5(decimal) {
    if (decimal === 0) {
        return "0";
    }
    const binaryArray = [];
    while (decimal > 0) {
        binaryArray.unshift(decimal % 2);
        decimal = Math.floor(decimal / 2);
    }
    return binaryArray.join('');
}
