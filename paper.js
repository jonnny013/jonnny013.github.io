//player input
function playerInput(){

}

//computer input
function computerInput(){

}

//create a play function
    //it will take the computer input and player input and assess the winner
function play(playerInput, computerInput) {
    let player = playerInput;
    let comp = computerInput;
    let winner = 0;
    switch (winner) {
        case (player === "rock" && comp === "scissors"):
        case (player === "paper" && comp === "rock"):
        case (player === "scissors" && comp === "paper"):
        return "winner";
        break;
        case (player === "rock" && comp === "paper"):
        case (player === "paper" && comp === "scissors"):
        case (player === "scissors" && comp === "rock"):
        return "loser";
        break;
       default:
        return "tie";
    }

}
console.log(play("rock", "scissors"));
//create a winning output function

//create a loop to play five rounds