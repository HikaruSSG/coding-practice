// Write a method to validate an email address

// Solution 1: Using a regular expression
function validateEmail1(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
// Pros: Concise and easy to understand, uses a basic regular expression.
// Cons: Does not cover all valid email formats, may not be accurate enough.

// Solution 2: Using a more detailed regular expression
function validateEmail2(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}
// Pros: More accurate, covers more valid email formats.
// Cons: More complex to understand, can be less readable.
// Recommended: This is generally the recommended approach due to its accuracy and robustness.

// Solution 3: Using a simple check for @ and .
function validateEmail3(email) {
    if (!email.includes('@') || !email.includes('.')) {
        return false;
    }
    const parts = email.split('@');
    if (parts.length !== 2 || parts[0].length === 0 || parts[1].length === 0) {
        return false;
    }
    const domainParts = parts[1].split('.');
    if (domainParts.length < 2 || domainParts.some(part => part.length === 0)) {
        return false;
    }
    return true;
}
// Pros: Simple and easy to understand.
// Cons: Does not cover all valid email formats, may not be accurate enough.

// Solution 4: Using a for loop and character checks
function validateEmail4(email) {
    let atCount = 0;
    let dotCount = 0;
    let atIndex = -1;
    let dotIndex = -1;
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            atCount++;
            atIndex = i;
        } else if (email[i] === '.') {
            dotCount++;
            dotIndex = i;
        }
    }
    if (atCount !== 1 || dotCount < 1 || atIndex === 0 || dotIndex === email.length - 1 || atIndex > dotIndex) {
        return false;
    }
    return true;
}
// Pros: Simple and easy to understand, avoids regular expressions.
// Cons: Does not cover all valid email formats, may not be accurate enough.

// Solution 5: Using a while loop and character checks
function validateEmail5(email) {
    let atCount = 0;
    let dotCount = 0;
    let atIndex = -1;
    let dotIndex = -1;
    let i = 0;
    while (i < email.length) {
        if (email[i] === '@') {
            atCount++;
            atIndex = i;
        } else if (email[i] === '.') {
            dotCount++;
            dotIndex = i;
        }
        i++;
    }
    if (atCount !== 1 || dotCount < 1 || atIndex === 0 || dotIndex === email.length - 1 || atIndex > dotIndex) {
        return false;
    }
    return true;
}
// Pros: Similar to the for loop approach, uses a while loop.
// Cons: Does not cover all valid email formats, may not be accurate enough.
