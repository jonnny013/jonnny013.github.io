//player input
function playerInput(){
let input = prompt("Choose paper, scissors or rock");
    /*while (input != "paper" || input != "scissors" || input != "rock") {
        input = prompt("Choose paper, scissors or rock");
    } */
let lowerInput = input.toLowerCase();
return lowerInput;
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
function playRound () {
    play(playerInput(), computerInput());

}
console.log(playRound());
//create a loop to play five rounds