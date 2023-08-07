//player input
function playerInput(){
let input = prompt("Choose paper, scissors or rock");
return input.toLowerCase();
} 


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
        console.log(finish + ` Score = Computer ${compScore} and you ${userScore}`); 
    }
    console.log("Game over:");
    if (compScore < userScore) {
        console.log("You are the winner!");
    }
    else if (compScore > userScore) {
        console.log("You lost...");
    }
}
game();