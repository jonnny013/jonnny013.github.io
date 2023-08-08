//html variables
const scoreBox = document.querySelector("#scoreBox");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resetBtn = document.querySelector("#reset");
const choiceDisplay = document.querySelector("#choiceDisplay");
const messageBox = document.querySelector("#messageBox");
const buttonDiv = document.querySelector("#buttonDiv");

//Game message/info

let startMessage = document.createElement('h4');
let winLoseMessage = document.createElement('p')
messageBox.append(startMessage);
messageBox.append(winLoseMessage);
startMessage.textContent = "Choose rock, paper or scissors";


//player input

function playerInput() {
buttonDiv.addEventListener('click', function(event){
 
    if (event.target.tagName === 'BUTTON') {
        const clickedButton = event.target;

        if (clickedButton === rockBtn) {
            return "rock"
        }
        if (clickedButton === paperBtn) {
            return "paper"
        }
        if (clickedButton === scissorsBtn) {
            return "scissors"
        }
    }
});
};


//computer input
function computerInput(){
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


//create a play function
    //it will take the computer input and player input and assess the winner
function play(playerInput, computerInput) {
    let player = playerInput;

    let comp = computerInput;

    
        if ((player === "rock" && comp === "scissors") ||
        (player === "paper" && comp === "rock") ||
        (player === "scissors" && comp === "paper")) {

        return "winner"; }
      
        else if ((player === "rock" && comp === "paper") ||
        (player === "paper" && comp === "scissors") ||
        (player === "scissors" && comp === "rock")) {

        return "loser"; }
        
       else {

        return "tie";}
}


//create a winning output function
function playRound (x, y) {
    let player = x;

    let computer = y;

    let result = play(player, computer);

    if (result === "winner") {
        return `You win! Your ${player} beats ${computer}!`;
    }
    else if (result === "loser") {
        return `You lose! Your ${player} loses to ${computer}!`;
    }
    else if (result === "tie") {
        return `It's a tie! Your ${player} is the same as ${computer}!`;
    }
    else {return "What happened?"}
}

//create a loop to play five rounds
let scoreInfo = document.createElement('p');
scoreBox.append(scoreInfo);

function game() {
    let userScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        let player = playerInput();
        let computer = computerInput();
        let finish = playRound(player, computer);


        let score = play(player, computer);

        if (score == "winner") {
            userScore++;
        }
        else if (score == "loser") {
            compScore++;
        }
        scoreInfo.textContent += `${finish} Score = Computer ${compScore} and you ${userScore}.\n`; 
    }
    startMessage.textContent = "Game over:";
    if (compScore < userScore) {
        winLoseMessage.textContent = "You are the winner!";
    }
    else if (compScore > userScore) {
        winLoseMessage.textContent = "You lost...";
    }
    else {
        winLoseMessage.textContent = "Oops...";
    }
}
buttonDiv.addEventListener('click', game);

//reset game

function resetGame() {
    userScore = 0;
    compScore = 0;
    scoreInfo.textContent = "";
    startMessage.textContent = "Choose rock, paper or scissors";
    winLoseMessage.textContent = "";
}

resetBtn.addEventListener('click', resetGame);