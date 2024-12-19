# 14 Implement a simple rock-paper-scissors game Tutorial

## Prerequisites

*   Understanding of the rules of Rock-Paper-Scissors.
*   Basic knowledge of conditional statements (if/else if/else).
*   Familiarity with random number generation.

## Approach

### Approach 1: Using conditional statements

This approach uses nested conditional statements to determine the winner based on the player's and computer's choices.

### Procedure

1. Define a function that represents the game.
2. Get the player's choice (e.g., through user input or a predefined value).
3. Generate a random choice for the computer (e.g., using a random number generator and mapping the numbers to "rock", "paper", or "scissors").
4. Use conditional statements to compare the player's choice and the computer's choice:
    *   If the choices are the same, it's a tie.
    *   If the player chooses "rock":
        *   If the computer chooses "scissors", the player wins.
        *   If the computer chooses "paper", the computer wins.
    *   If the player chooses "paper":
        *   If the computer chooses "rock", the player wins.
        *   If the computer chooses "scissors", the computer wins.
    *   If the player chooses "scissors":
        *   If the computer chooses "paper", the player wins.
        *   If the computer chooses "rock", the computer wins.
5. Display the result (who won or if it's a tie).

### Approach 2: Using a lookup table (matrix)

This approach uses a 2D array (matrix) to represent the game's rules and determine the winner.

### Procedure

1. Define a function that represents the game.
2. Get the player's choice.
3. Generate a random choice for the computer.
4. Create a 2D array (matrix) where rows represent the player's choice, columns represent the computer's choice, and the cell values represent the result (e.g., 0 for tie, 1 for player win, -1 for computer win).
5. Map "rock", "paper", and "scissors" to numerical indices (e.g., 0, 1, 2).
6. Use the player's choice index and the computer's choice index to look up the result in the matrix.
7. Display the result.

### Approach 3: Using modular arithmetic

This approach uses modular arithmetic to determine the winner based on the numerical representation of the choices.

### Procedure

1. Define a function that represents the game.
2. Get the player's choice.
3. Generate a random choice for the computer.
4. Map "rock", "paper", and "scissors" to numerical indices (e.g., 0, 1, 2).
5. Calculate the difference between the player's choice index and the computer's choice index.
6. Take the modulo 3 of the difference.
7. If the result is 0, it's a tie.
8. If the result is 1 or -2, the player wins.
9. If the result is 2 or -1, the computer wins.
10. Display the result.

### Approach 4: Using a dictionary (hash map)

This approach uses a dictionary to store the winning combinations for each choice.

### Procedure

1. Define a function that represents the game.
2. Get the player's choice.
3. Generate a random choice for the computer.
4. Create a dictionary where keys are the choices ("rock", "paper", "scissors") and values are the choices they beat (e.g., "rock": "scissors", "paper": "rock", "scissors": "paper").
5. Check if the computer's choice is the value associated with the player's choice in the dictionary.
6. If it is, the player wins.
7. If the choices are the same, it's a tie.
8. Otherwise, the computer wins.
9. Display the result.

### Approach 5: Using a state machine

This approach represents the game as a state machine where each state represents a choice and transitions represent the outcome.

### Procedure

1. Define a function that represents the game.
2. Get the player's choice.
3. Generate a random choice for the computer.
4. Define the state machine's transitions (e.g., using a dictionary or nested conditional statements).
5. Start from the player's choice state.
6. Transition to the next state based on the computer's choice.
7. The final state determines the winner.
8. Display the result.
