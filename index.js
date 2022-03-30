function game() {
    playRound();
};

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    return "You lose! " + playerSelection + " beats " + computerSelection
};

function playerChoice() {
    const userPrompt = prompt("Choose rock, paper or scissors.");
    return userPrompt;
};

function computerChoice() {
    let rps = ['Rock', 'Paper', 'Scissors'];
    return rps[Math.floor(Math.random() * rps.length)]
};
