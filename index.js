function game() {
    for (let i = 0; i < 5; i++) {
      playRound();
    };
};

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    if (playerSelection === 'rock' && computerSelection === 'Paper') {
        console.log('You lose! ' + computerSelection + ' beats ' + playerSelection);
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
    } else if (playerSelection === 'paper' && computerSelection === 'Paper') {
        console.log('Tie! You both chose ' + playerSelection);
    } else if (playerSelection === 'rock' && computerSelection === 'Rock') {
        console.log('Tie! You both chose ' + playerSelection);
    } else if (playerSelection === 'scissors' && computerSelection === 'Scissors') {
        console.log('Tie! You both chose ' + playerSelection);
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        console.log('You lose! ' + computerSelection + ' beats ' + playerSelection);
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        console.log('You lose! ' + computerSelection + ' beats ' + playerSelection);
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
    }  
};

function playerChoice() {
    const userPrompt = prompt('Choose rock, paper or scissors.');
    return userPrompt;
};

function computerChoice() {
    let rps = ['Rock', 'Paper', 'Scissors'];
    return rps[Math.floor(Math.random() * rps.length)]
};

// Refactored code
// function playRound() {
//     const playerSelection = playerChoice();
//     const computerSelection = computerChoice();
//     if ((playerSelection === 'paper' && computerSelection === 'Rock') ||
//     (playerSelection === 'rock' && computerSelection === 'Scissors') ||
//     (playerSelection === 'scissors' && computerSelection === 'Paper')) {
//         console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
//     } else if (playerSelection === computerSelection) {
//         console.log('Tie! You both chose ' + playerSelection);
//     } else if ((playerSelection === 'paper' && computerSelection === 'Scissors') ||
//     (playerSelection === 'rock' && computerSelection === 'Paper') ||
//     (playerSelection === 'scissors' && computerSelection === 'Rock')) {
//         console.log('You lose! ' + computerSelection + ' beats ' + playerSelection);
//     }
// }