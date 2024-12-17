// Implement a function to convert temperature (C to F, F to C)

// Solution 1: Using if-else statements
function convertTemperature1(temp, unit) {
  if (unit === "CtoF") {
    return (temp * 9) / 5 + 32;
  } else if (unit === "FtoC") {
    return ((temp - 32) * 5) / 9;
  } else {
    return "Invalid unit";
  }
}

// Solution 2: Using a switch statement
function convertTemperature2(temp, unit) {
    switch (unit) {
        case "CtoF":
            return (temp * 9) / 5 + 32;
        case "FtoC":
            return ((temp - 32) * 5) / 9;
        default:
            return "Invalid unit";
    }
}

// Solution 3: Using an object literal
function convertTemperature3(temp, unit) {
    const conversions = {
        CtoF: (t) => (t * 9) / 5 + 32,
        FtoC: (t) => ((t - 32) * 5) / 9
    };
    return conversions[unit] ? conversions[unit](temp) : "Invalid unit";
}

// Solution 4: Using a map
function convertTemperature4(temp, unit) {
    const conversions = new Map([
        ["CtoF", (t) => (t * 9) / 5 + 32],
        ["FtoC", (t) => ((t - 32) * 5) / 9]
    ]);
    return conversions.get(unit) ? conversions.get(unit)(temp) : "Invalid unit";
}

// Solution 5: Using ternary operators
function convertTemperature5(temp, unit) {
    return unit === "CtoF" ? (temp * 9) / 5 + 32 :
           unit === "FtoC" ? ((temp - 32) * 5) / 9 :
           "Invalid unit";
}
