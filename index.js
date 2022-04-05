// function game() {
//     for (let i = 0; i < 5; i++) {
//       playRound();
//     };
// };

// Array of objects for the user selection. Key value pairs, 'name' is key, 'rock' is value etc.
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
const selectionsDiv = document.querySelector('selections')
// Select all buttons and their data, and store this in a variable:
const buttonClicked = document.querySelectorAll('[data-selection');
// Iterate through each button:
buttonClicked.forEach(buttonClicked => {
    // Add event listener to register a click on each button:
    buttonClicked.addEventListener('click', e => {
        // Take the data of the button that user clicks and store it in a var:
        const playerChoice = buttonClicked.dataset.selection
        // Match the user selection up with the value from the array of objects:
        const userSelection = SELECTIONS.find(selection => selection.name === playerChoice)
        // Call function for user to make selection, and pass in the button click:
        makeSelection(userSelection)
    });
});
const body = document.body
// Create function, console log to test working:
function makeSelection(userSelection){
    const computerSelection = computerChoice();
    const youWin = winner(userSelection, computerSelection);
    const youLose = winner(computerSelection, userSelection);
    addSelectionResult (computerSelection, youLose);
    addSelectionResult (userSelection, youWin);
    if (youWin) incrementScore(yourScore);
    if (youLose) incrementScore(computerScore);
    if (youWin) {
        const youWinText = document.createElement('h2');
        youWinText.textContent = 'You win! ' + userSelection.name + ' beats ' + computerSelection.name;
        body.append(youWinText);
    }
    if (youLose) {
        const youLoseText = document.createElement('h2');
        youLoseText.textContent = 'You lose! ' + computerSelection.name + ' beats ' + userSelection.name;
        body.append(youLoseText);
    }
    else if (userSelection === computerSelection) {
        const  drawText = document.createElement('h2');
        drawText.textContent = 'Draw!';
        body.append(drawText);
    };
};

function winner(userSelection, computerSelection){
    return userSelection.beats === computerSelection.name
}

function addSelectionResult(userSelection, winner) {
    const div = document.createElement('div');
    div.textContent = userSelection.emoji;
    div.classList.add('result-selection');
    if (winner) div.classList.add('winner');
    secondColumn.after(div)
}

function computerChoice() {
    const randomChoice = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomChoice];
};

function incrementScore(scoreSpan) {
    scoreSpan.textContent = parseInt(scoreSpan.textContent) + 1
};

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