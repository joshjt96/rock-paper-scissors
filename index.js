const SELECTIONS = [
    {
        name: 'Rock',
        emoji: '👊',
        beats: 'Scissors'
    },
    {
        name: 'Paper',
        emoji: '✋',
        beats: 'Rock'
    },
    {
        name: 'Scissors',
        emoji: '✌️',
        beats: 'Paper'
    }
];

const startGame = document.querySelectorAll('selection');
startGame.forEach(startGame => {
    startGame.addEventListener('click', e => {
        playRound();
    })
});

const yourScore = document.querySelector('[data-your-score');
const computerScore = document.querySelector('[data-computer-score');
const secondColumn = document.querySelector('[data-second-column]');
const resultText = document.querySelector('[data-result-text');
const selectionsDiv = document.querySelector('selections')

const buttonClicked = document.querySelectorAll('[data-selection');
buttonClicked.forEach(buttonClicked => {
    buttonClicked.addEventListener('click', e => {
        const playerChoice = buttonClicked.dataset.selection
        const userSelection = SELECTIONS.find(selection => selection.name === playerChoice)
        makeSelection(userSelection)
    });
});

function makeSelection(userSelection){
    const computerSelection = computerChoice();
    const youWin = winner(userSelection, computerSelection);
    const youLose = winner(computerSelection, userSelection);
    // addSelectionResult (computerSelection, youLose);
    // addSelectionResult (userSelection, youWin);
    if (youWin) incrementScore(yourScore);
    if (youLose) incrementScore(computerScore);
    if (youWin) {
        const youWinText = document.createElement('h2');
        youWinText.textContent = 'You win! ' + userSelection.emoji + ' beats ' + computerSelection.emoji;
        resultText.after(youWinText);
    }
    if (youLose) {
        const youLoseText = document.createElement('h2');
        youLoseText.textContent = 'You lose! ' + computerSelection.emoji + ' beats ' + userSelection.emoji;
        resultText.after(youLoseText);
    }
    else if (userSelection === computerSelection) {
        const  drawText = document.createElement('h2');
        drawText.textContent = 'Draw!';
        resultText.after(drawText);
    };
};

function winner(userSelection, computerSelection){
    return userSelection.beats === computerSelection.name
}

// function addSelectionResult(userSelection, winner) {
//     const div = document.createElement('div');
//     div.textContent = userSelection.emoji;
//     div.classList.add('result-selection');
//     if (winner) div.classList.add('winner');
//     secondColumn.after(div)
// }

function computerChoice() {
    const randomChoice = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomChoice];
};

function incrementScore(scoreSpan) {
    scoreSpan.textContent = parseInt(scoreSpan.textContent) + 1
};

// function game() {
//     for (let i = 0; i < 5; i++) {
//       makeSelection();
//     };
// };

// function playRound() {
//     const playerSelection = userSelection();
//     const computerSelection = computerChoice();
//     if (playerSelection === 'Rock' && computerSelection === 'Paper') {
//         console.log('You lose! ' + computerSelection + ' beats ' + playerSelection);
//     } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
//         console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
//     } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
//         console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
//     } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
//         console.log('Tie! You both chose ' + playerSelection);
//     } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
//         console.log('Tie! You both chose ' + playerSelection);
//     } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
//         console.log('Tie! You both chose ' + playerSelection);
//     } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
//         console.log('You lose! ' + computerSelection + ' beats ' + playerSelection);
//     } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
//         console.log('You lose! ' + computerSelection + ' beats ' + playerSelection);
//     } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
//         console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
//     }  
// };

// function playerChoice() {
//     // const userPrompt = prompt('Choose rock, paper or scissors.');
//     // return userPrompt;
// };

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


// const body = document.body
// const btnRock = document.createElement('button')
// btnRock.textContent = 'Rock'
// body.append(btnRock)

// const btnPaper = document.createElement('button')
// btnPaper.textContent = 'Paper'
// body.append(btnPaper)

// const btnScissors = document.createElement('button')
// btnScissors.textContent = 'Scissors'
// body.append(btnScissors)

// rockClick.addEventListener('click', e => {
//     console.log(e.target);
// });

// const paperClick = document.querySelector('#paper');

// paperClick.addEventListener('click', e => {
//     console.log(e.target);
// });

// const scissorsClick = document.querySelector('#scissors');

// scissorsClick.addEventListener('click', e => {
//     console.log(e.target);
// });