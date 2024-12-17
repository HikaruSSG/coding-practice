// Write a method to convert a number to Roman numerals

// Solution 1: Using arrays and a for loop
function toRoman1(num) {
  if (num <= 0 || num > 3999) {
    return "Invalid input";
  }
  const romanValues = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const decimalValues = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
  ];
  let roman = "";
  for (let i = 0; i < decimalValues.length; i++) {
    while (num >= decimalValues[i]) {
      roman += romanValues[i];
      num -= decimalValues[i];
    }
  }
  return roman;
}

// Solution 2: Using a while loop and string concatenation
function toRoman2(num) {
    if (num <= 0 || num > 3999) {
        return "Invalid input";
    }
    const romanValues = {
        1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL',
        50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
    };
    const decimalValues = Object.keys(romanValues).sort((a, b) => b - a);
    let roman = "";
    let i = 0;
    while (num > 0) {
        if (num >= decimalValues[i]) {
            roman += romanValues[decimalValues[i]];
            num -= decimalValues[i];
        } else {
            i++;
        }
    }
    return roman;
}

// Solution 3: Using recursion
function toRoman3(num) {
    if (num <= 0 || num > 3999) {
        return "Invalid input";
    }
    const romanValues = {
        1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL',
        50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
    };
    const decimalValues = Object.keys(romanValues).sort((a, b) => b - a);
    if (num === 0) {
        return "";
    }
    for (let value of decimalValues) {
        if (num >= value) {
            return romanValues[value] + toRoman3(num - value);
        }
    }
}

// Solution 4: Using a map
function toRoman4(num) {
    if (num <= 0 || num > 3999) {
        return "Invalid input";
    }
    const romanMap = new Map([
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"],
        [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"],
        [5, "V"], [4, "IV"], [1, "I"]
    ]);
    let roman = "";
    for (let [value, numeral] of romanMap) {
        while (num >= value) {
            roman += numeral;
            num -= value;
        }
    }
    return roman;
}

// Solution 5: Using reduce
function toRoman5(num) {
    if (num <= 0 || num > 3999) {
        return "Invalid input";
    }
    const romanValues = {
        1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL',
        50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
    };
    const decimalValues = Object.keys(romanValues).sort((a, b) => b - a);
    return decimalValues.reduce((roman, value) => {
        while (num >= value) {
            roman += romanValues[value];
            num -= value;
        }
        return roman;
    }, "");
}
