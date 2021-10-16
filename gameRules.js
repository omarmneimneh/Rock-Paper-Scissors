function computerPlay(){
    let min = 1;
    let max = 3;
    let number = Math.floor(Math.random()*(3-1+1)+1);
    let play = "";
    if(number == 1)play = "rock";
    if(number == 2)play = "paper";
    if(number == 3)play = "scissors";
    return play;
}

function player(){
    let play = window.prompt("Rock, paper, or scissors?");
    return play;
}

function winner(cPlay, pPlay){
    let winner = "";
    if(cPlay === "rock" && pPlay === "scissors") winner = "computer";
    if(cPlay === "scissors" && pPlay === "paper") winner = "computer";
    if(cPlay === "paper" && pPlay === "rock") winner = "computer";
    if(cPlay === "rock" && pPlay === "paper") winner = "player";
    if(cPlay === "paper" && pPlay === "scissors") winner = "player";
    if(cPlay === "scissors" && pPlay === "rock") winner = "player";
    
    return winner;
}

let playerScore = 0;
let computerScore = 0;
let playerPlay = "";
let compPlay = "";


while((playerScore!=3)||(computerScore!=3)){
    compPlay = computerPlay();
    playerPlay = player();
    
    if(winner(compPlay, playerPlay)==="computer"){
        computerScore++;
        console.log("Computer wins this round :(");
    }

    if(winner(compPlay, playerPlay)==="player"){
        playerScore++;
        console.log("Player wins this round!");
    }
    if(computerScore==3)console.log("The computer wins :(");
    if(playerScore==3)console.log("You win!");
}

