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
