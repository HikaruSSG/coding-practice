# 35 Write a method to implement a simple encryption Tutorial

## Prerequisites

*   Understanding of basic encryption concepts.
*   Knowledge of string manipulation and character encoding.
*   Familiarity with basic arithmetic and bitwise operations.

## Approach

### Approach 1: Caesar Cipher (Substitution Cipher)

This approach shifts each letter in the plaintext by a fixed number of positions down the alphabet.

### Procedure

1. Define a function that takes a plaintext string and a shift value (key) as input.
2. Create an empty string `ciphertext` to store the encrypted result.
3. Iterate through each character in the plaintext:
    *   If the character is a letter:
        *   Determine if it's uppercase or lowercase.
        *   Shift the letter by the `key` value, wrapping around the alphabet if necessary (e.g., using modular arithmetic).
        *   Convert the shifted letter back to a character.
        *   Append the shifted character to `ciphertext`.
    *   If the character is not a letter (e.g., space, punctuation):
        *   Append the character to `ciphertext` as is.
4. Return `ciphertext`.

### Approach 2: Substitution Cipher with a Key

This approach uses a keyword to create a mapping between plaintext letters and ciphertext letters.

### Procedure

1. Define a function that takes a plaintext string and a keyword as input.
2. Create a mapping (e.g., using a dictionary or array) from each letter of the alphabet to a ciphertext letter based on the keyword.
    *   Remove duplicate letters from the keyword.
    *   Create a new alphabet by concatenating the keyword (without duplicates) and the remaining letters of the alphabet in order.
    *   Map each letter of the original alphabet to the corresponding letter in the new alphabet.
3. Create an empty string `ciphertext`.
4. Iterate through each character in the plaintext:
    *   If the character is a letter, look up its corresponding ciphertext letter in the mapping and append it to `ciphertext`.
    *   If the character is not a letter, append it to `ciphertext` as is.
5. Return `ciphertext`.

### Approach 3: Transposition Cipher (Rail Fence Cipher)

This approach writes the plaintext in a zigzag pattern across multiple "rails" and then reads it off row by row to create the ciphertext.

### Procedure

1. Define a function that takes a plaintext string and the number of rails as input.
2. Create a 2D array (or a list of lists) with the specified number of rails.
3. Initialize a variable `row` to 0 and a variable `down` to `true`.
4. Iterate through each character in the plaintext:
    *   Append the character to the `row`-th list in the 2D array.
    *   If `row` is 0, set `down` to `true`.
    *   If `row` is the last rail, set `down` to `false`.
    *   If `down` is `true`, increment `row`; otherwise, decrement `row`.
5. Concatenate the rows of the 2D array to create the `ciphertext`.
6. Return `ciphertext`.

### Approach 4: XOR Cipher (Simple Stream Cipher)

This approach uses the XOR (exclusive OR) operation with a key to encrypt the plaintext.

### Procedure

1. Define a function that takes a plaintext string and a key (which can be a string or a number) as input.
2. Create an empty string `ciphertext`.
3. Iterate through each character in the plaintext:
    *   Get the ASCII (or Unicode) value of the current character.
    *   If the key is a string, get the ASCII value of the corresponding character in the key (using modulo to wrap around the key if it's shorter than the plaintext).
    *   If the key is a number, use the key directly.
    *   Perform the XOR operation between the character's ASCII value and the key value.
    *   Convert the result back to a character.
    *   Append the character to `ciphertext`.
4. Return `ciphertext`.

### Approach 5: Vigenère Cipher (Polyalphabetic Substitution Cipher)

This approach uses a keyword to shift each letter of the plaintext by a different amount, based on the corresponding letter in the keyword.

### Procedure

1. Define a function that takes a plaintext string and a keyword as input.
2. Create an empty string `ciphertext`.
3. Initialize a variable `keyIndex` to 0.
4. Iterate through each character in the plaintext:
    * If the character is a letter:
        * Determine if it's uppercase or lowercase.
        * Get the shift value from the corresponding letter in the keyword (using `keyIndex` and wrapping around with modulo). Convert the keyword letter to a shift value (A=0, B=1, etc.).
        * Shift the plaintext letter by the calculated shift value, wrapping around the alphabet if necessary.
        * Convert the shifted letter back to a character.
        * Append the shifted character to `ciphertext`.
        * Increment `keyIndex` (modulo the length of the keyword).
    * If the character is not a letter, append it to `ciphertext` as is.
5. Return `ciphertext`.
