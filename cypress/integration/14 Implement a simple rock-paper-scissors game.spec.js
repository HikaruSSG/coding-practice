describe('Rock Paper Scissors Game', () => {
    const choices = ['rock', 'paper', 'scissors'];

    // Helper function to mock Math.random for consistent testing
    const mockMath = (value) => {
        return {
            random: () => value,
            floor: Math.floor,
        };
    };

    // Solution 1: Using if-else statements
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should play rock paper scissors using if-else statements', () => {
        choices.forEach(playerChoice => {
            for (let i = 0; i < 3; i++) {
                const mock = mockMath(i / 3);
                cy.stub(Math, 'random').callsFake(mock.random);
                cy.stub(Math, 'floor').callsFake(mock.floor);
                const startTime = performance.now();
                const result = rockPaperScissors1(playerChoice);
                const endTime = performance.now();
                const executionTime = endTime - startTime;
                cy.log(`Execution time for input "${playerChoice}": ${executionTime}ms`);
                const computerChoice = choices[i];
                if (playerChoice === computerChoice) {
                    expect(result).to.equal("It's a tie!");
                } else if (
                    (playerChoice === "rock" && computerChoice === "scissors") ||
                    (playerChoice === "paper" && computerChoice === "rock") ||
                    (playerChoice === "scissors" && computerChoice === "paper")
                ) {
                    expect(result).to.equal("You win!");
                } else {
                    expect(result).to.equal("You lose!");
                }
            }
        });
    });

    // Solution 2: Using a switch statement
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should play rock paper scissors using a switch statement', () => {
        choices.forEach(playerChoice => {
            for (let i = 0; i < 3; i++) {
                const mock = mockMath(i / 3);
                cy.stub(Math, 'random').callsFake(mock.random);
                cy.stub(Math, 'floor').callsFake(mock.floor);
                const startTime = performance.now();
                const result = rockPaperScissors2(playerChoice);
                const endTime = performance.now();
                const executionTime = endTime - startTime;
                cy.log(`Execution time for input "${playerChoice}": ${executionTime}ms`);
                const computerChoice = choices[i];
                if (playerChoice === computerChoice) {
                    expect(result).to.equal("It's a tie!");
                } else if (
                    (playerChoice === "rock" && computerChoice === "scissors") ||
                    (playerChoice === "paper" && computerChoice === "rock") ||
                    (playerChoice === "scissors" && computerChoice === "paper")
                ) {
                    expect(result).to.equal("You win!");
                } else {
                    expect(result).to.equal("You lose!");
                }
            }
        });
    });

    // Solution 3: Using an object literal
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should play rock paper scissors using an object literal', () => {
        choices.forEach(playerChoice => {
            for (let i = 0; i < 3; i++) {
                const mock = mockMath(i / 3);
                cy.stub(Math, 'random').callsFake(mock.random);
                cy.stub(Math, 'floor').callsFake(mock.floor);
                const startTime = performance.now();
                const result = rockPaperScissors3(playerChoice);
                const endTime = performance.now();
                const executionTime = endTime - startTime;
                cy.log(`Execution time for input "${playerChoice}": ${executionTime}ms`);
                const computerChoice = choices[i];
                 if (playerChoice === computerChoice) {
                    expect(result).to.equal("It's a tie!");
                } else if (
                    (playerChoice === "rock" && computerChoice === "scissors") ||
                    (playerChoice === "paper" && computerChoice === "rock") ||
                    (playerChoice === "scissors" && computerChoice === "paper")
                ) {
                    expect(result).to.equal("You win!");
                } else {
                    expect(result).to.equal("You lose!");
                }
            }
        });
    });

    // Solution 4: Using a map
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should play rock paper scissors using a map', () => {
        choices.forEach(playerChoice => {
            for (let i = 0; i < 3; i++) {
                const mock = mockMath(i / 3);
                cy.stub(Math, 'random').callsFake(mock.random);
                cy.stub(Math, 'floor').callsFake(mock.floor);
                const startTime = performance.now();
                const result = rockPaperScissors4(playerChoice);
                const endTime = performance.now();
                const executionTime = endTime - startTime;
                cy.log(`Execution time for input "${playerChoice}": ${executionTime}ms`);
                const computerChoice = choices[i];
                 if (playerChoice === computerChoice) {
                    expect(result).to.equal("It's a tie!");
                } else if (
                    (playerChoice === "rock" && computerChoice === "scissors") ||
                    (playerChoice === "paper" && computerChoice === "rock") ||
                    (playerChoice === "scissors" && computerChoice === "paper")
                ) {
                    expect(result).to.equal("You win!");
                } else {
                    expect(result).to.equal("You lose!");
                }
            }
        });
    });

    // Solution 5: Using a function to determine the winner
    // Time Complexity: O(1), Memory Allocation: O(1)
    it('should play rock paper scissors using a function to determine the winner', () => {
        choices.forEach(playerChoice => {
            for (let i = 0; i < 3; i++) {
                const mock = mockMath(i / 3);
                cy.stub(Math, 'random').callsFake(mock.random);
                cy.stub(Math, 'floor').callsFake(mock.floor);
                const startTime = performance.now();
                const result = rockPaperScissors5(playerChoice);
                const endTime = performance.now();
                const executionTime = endTime - startTime;
                cy.log(`Execution time for input "${playerChoice}": ${executionTime}ms`);
                const computerChoice = choices[i];
                 if (playerChoice === computerChoice) {
                    expect(result).to.equal("It's a tie!");
                } else if (
                    (playerChoice === "rock" && computerChoice === "scissors") ||
                    (playerChoice === "paper" && computerChoice === "rock") ||
                    (playerChoice === "scissors" && computerChoice === "paper")
                ) {
                    expect(result).to.equal("You win!");
                } else {
                    expect(result).to.equal("You lose!");
                }
            }
        });
    });

    function rockPaperScissors1(playerChoice) {
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        if (playerChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }

    function rockPaperScissors2(playerChoice) {
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        switch (playerChoice) {
            case computerChoice:
                return "It's a tie!";
            case "rock":
                return computerChoice === "scissors" ? "You win!" : "You lose!";
            case "paper":
                return computerChoice === "rock" ? "You win!" : "You lose!";
            case "scissors":
                return computerChoice === "paper" ? "You win!" : "You lose!";
            default:
                return "Invalid choice";
        }
    }

    function rockPaperScissors3(playerChoice) {
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        const outcomes = {
            rock: {
                rock: "It's a tie!",
                paper: "You lose!",
                scissors: "You win!"
            },
            paper: {
                rock: "You win!",
                paper: "It's a tie!",
                scissors: "You lose!"
            },
            scissors: {
                rock: "You lose!",
                paper: "You win!",
                scissors: "It's a tie!"
            }
        };
        return outcomes[playerChoice] ? outcomes[playerChoice][computerChoice] : "Invalid choice";
    }

    function rockPaperScissors4(playerChoice) {
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        const outcomes = new Map([
            ['rock', new Map([
                ['rock', "It's a tie!"],
                ['paper', "You lose!"],
                ['scissors', "You win!"]
            ])],
            ['paper', new Map([
                ['rock', "You win!"],
                ['paper', "It's a tie!"],
                ['scissors', "You lose!"]
            ])],
            ['scissors', new Map([
                ['rock', "You lose!"],
                ['paper', "You win!"],
                ['scissors', "It's a tie!"]
            ])]
        ]);
        return outcomes.get(playerChoice)?.get(computerChoice) || "Invalid choice";
    }

    function rockPaperScissors5(playerChoice) {
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        const determineWinner = (player, computer) => {
            if (player === computer) return "It's a tie!";
            if ((player === "rock" && computer === "scissors") ||
                (player === "paper" && computer === "rock") ||
                (player === "scissors" && computer === "paper")) {
                return "You win!";
            }
            return "You lose!";
        };
        return determineWinner(playerChoice, computerChoice);
    }
});
