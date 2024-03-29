//html variables
const scoreBox = document.querySelector("#scoreBox");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resetBtn = document.querySelector("#reset");
const choiceDisplay = document.querySelector("#choiceDisplay");
const messageBox = document.querySelector("#messageBox");
const buttonDiv = document.querySelector("#buttonDiv");
const playerArm = document.querySelector("#playerArm");
const robotArm = document.querySelector("#robotArm");
const paperImg = document.querySelector("#paperImg");
const scissorsImg = document.querySelector("#scissorsImg");
const stoneImg = document.querySelector("#stoneImg");
const paperImgRobot = document.querySelector("#paperImgRobot");
const scissorsImgRobot = document.querySelector("#scissorsImgRobot");
const stoneImgRobot = document.querySelector("#stoneImgRobot");
const playerScoreBox = document.querySelector("#playerScoreBox");
const robotScoreBox = document.querySelector("#robotScoreBox");
const mouthDiv = document.querySelector("#mouthDiv");
const eye1 = document.querySelector("#leftEye");
const eye2 = document.querySelector("#rightEye");
const arrow1 = document.querySelector("#arrow1");
const arrow2 = document.querySelector("#arrow2");
const firework1 = document.querySelector("#firework1");
const firework2 = document.querySelector("#firework2");
const firework3 = document.querySelector("#firework3");



buttonDiv.addEventListener('click', function(event) {clearPage(); game(0, 0, 0); });

//clear page before game start
function clearPage () {
    scissorsImg.classList.add("clearPage");
    paperImg.classList.add("clearPage");
    stoneImg.classList.add("clearPage");
    scissorsImgRobot.classList.add("clearPage");
    paperImgRobot.classList.add("clearPage");
    stoneImgRobot.classList.add("clearPage");
    playerArm.classList.remove("playerArmAnimation");
    robotArm.classList.remove("robotArmAnimation");
    mouthDiv.classList.remove("bigSmile", "frown");
    eye1.classList.remove("sadEyes", "happyEyes");
    eye2.classList.remove("sadEyes", "happyEyes");
    console.log("1")
}

//Game message/info

let startMessage = document.createElement('h4');
let winLoseMessage = document.createElement('p');
messageBox.append(startMessage);
messageBox.append(winLoseMessage);
startMessage.textContent = "Choose rock, paper or scissors";


//animation function

function playerAnimation(img) {
    console.log("2")
    img.classList.remove("clearPage");
    setTimeout(function(){playerArm.classList.add("playerArmAnimation")}, 100);
}

function robotAnimation(img) {
    img.classList.remove("clearPage");
    setTimeout(function(){robotArm.classList.add("robotArmAnimation")}, 100);
}
function playerWin() {
    eye1.classList.add("sadEyes");
    eye2.classList.add("sadEyes");
    mouthDiv.classList.add("bigSmile");
}
function playerLose() {
    eye1.classList.add("happyEyes");
    eye2.classList.add("happyEyes");
    mouthDiv.classList.add("frown");
}



//player input

function playerInput(event) {

    if (event.target.tagName === 'BUTTON') {
        const clickedButton = event.target;

        if (clickedButton === rockBtn) {
            playerAnimation(stoneImg);
            return "rock"
        }
        if (clickedButton === paperBtn) {
            playerAnimation(paperImg);
            return "paper"
        }
        if (clickedButton === scissorsBtn) {
            playerAnimation(scissorsImg);
            return "scissors"
        }
    }
};


//computer input
function computerInput(){
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        robotAnimation(stoneImgRobot);
        return "rock";
    }
    else if (choice === 1) {
        robotAnimation(paperImgRobot);
        return "paper";
    }
    else if (choice === 2){
        robotAnimation(scissorsImgRobot);
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

let userScore = 0;
let compScore = 0;
let round = 0;

function game() {
    if (round < 5) {
        let player = playerInput(event);
        if (player) {
            let computer = computerInput();
        let finish = playRound(player, computer);


        let score = play(player, computer);

        if (score == "winner") {
            playerWin();
            userScore++;
        }
        else if (score == "loser") {
            playerLose();
            compScore++;
        }
        scoreInfo.innerHTML += `${finish}.<br>`; 
        playerScoreBox.textContent = `You: ${userScore}`;
        robotScoreBox.textContent = `Robot: ${compScore}`;
        round++;
        }
    }
    if (round == 5) {
        arrow1.classList.remove("clearPage");
        arrow2.classList.remove("clearPage");
        firework1.classList.add("firework");
        firework2.classList.add("firework");
        firework3.classList.add("firework");
        startMessage.textContent = "Game over:";
    if (compScore < userScore) {
        
        winLoseMessage.textContent = "You are the winner!";
    }
    else if (compScore > userScore) {
        winLoseMessage.textContent = "You lost...";
    }
    else {
        winLoseMessage.textContent = "Oops... It's a tie!";
    }
}
}

//reset game

function resetGame() {
    userScore = 0;
    compScore = 0;
    round = 0;
    scoreInfo.textContent = "";
    startMessage.textContent = "Choose rock, paper or scissors";
    winLoseMessage.textContent = "";
    robotScoreBox.textContent = "Robot: 0";
    playerScoreBox.textContent = "You: 0";
    arrow1.classList.add("clearPage");
    arrow2.classList.add("clearPage");
    firework1.classList.remove("firework");
    firework2.classList.remove("firework");
    firework3.classList.remove("firework");
    clearPage();
}

resetBtn.addEventListener('click', resetGame);
clearPage();