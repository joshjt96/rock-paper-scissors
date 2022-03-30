// Function called computerPlay that randomly returns rock, paper or scissors.
// variables that store rock, paper and scissors
// function called computerPlay that returns a random one of these

// Initial code:
// const rock = "Rock"
// const paper = "Paper"
// const scissors = "Scissors"
// function computerPlay() {
//     return 
// }

// Now going to use array to store the rock, paper, scissors
function computerPlay() {
    let rps = ['Rock', 'Paper', 'Scissors'];
    return rps[Math.floor(Math.random() * rps.length)]
};

