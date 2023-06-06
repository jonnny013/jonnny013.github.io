//Create a function to get computer choice (paper, scissors or stone)
    //create a random result using mathnumber?

const options = ["rock", "paper", "scissors"]

function compDecision (){
    let choice = Math.floor(Math.random() * 3);
if (choice === 0) {
    return "rock";
}
else if (choice === 1) {
    return "paper";
}

else {
    return "scissors";
}};
let computer = compDecision();
console.log(computer);

//create an input for the player
    //correct for case sensitve issues


function playerDecision() {
    let input = false;
    while (input == false) {
        const userInput = prompt("Choose rock, paper or scissors: "); 
        if(userInput == null) {
            continue;
        }
    inputLowerCase = userInput.toLowerCase();
    if (options.includes(inputLowerCase)){
        input = true;
        return inputLowerCase;
        }
    }
}
let player = playerDecision();
console.log(player);
//Compare the two and declare a winner/loser or tie 



function chooseWinner (x, y) {
    let compDecision = x;
    let playerDecision = y;
    if (compDecision === playerDecision) {
        return "It is a tie!"
    }
    else if (compDecision === "rock" && playerDecision === "paper") {
        return "You win! Paper beats rock!"
    }
    else if (compDecision === "paper" && playerDecision === "rock") {
        return "You lose! Paper beats rock!"
    }
    else if (compDecision === "paper" && playerDecision === "scissors") {
        return "You win! Scissors beats paper!"
    }
    else if (compDecision === "scissors" && playerDecision === "paper") {
        return "You lose! Scissors beats paper!"
    }
    else if (compDecision === "rock" && playerDecision === "scissors") {
        return "You lose! Rock beats scissors!"
    }
    else if (compDecision === "scissors" && playerDecision === "rock") {
        return "You win! Rock beats scissors!"
    }
}

function playRound() {
let result = chooseWinner(computer, player);
console.log(result);
return result;

}



//create a game loop function that plays five rounds and records the winner
function game() {
    let userScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {

        playRound();
        if (chooseWinner(computer, player) == "You win! Rock beats scissors!" || chooseWinner(computer, player) == "You win! Scissors beats paper!" || chooseWinner(computer, player) == "You win! Paper beats rock!"){
            userScore++;
        }
        else if (chooseWinner(computer, player) == "It is a tie!") {
            continue;
        }
        else {
            compScore++;
        }
    
    if (userScore < compScore ){
        console.log("Computer wins");
    }
    else if (userScore > compScore) {
        console.log("Player wins");
    }
    else {
        console.log("tie");
    }
    console.log("Well played");
}
}
game();
//validate
