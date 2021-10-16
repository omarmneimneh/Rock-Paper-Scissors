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
    let play = window.prompt("Rock, paper, or scissors?")
}

function winner(cPlay, pPlay){
    let winner = "";
    if(cPlay === "rock" && pPLay === "scissors") winner = "computer";
    if(cPlay === "scissors" && pPLay === "paper") winner = "computer";
    if(cPlay === "paper" && pPLay === "rock") winner = "computer";
    if(cPlay === "rock" && pPLay === "paper") winner = "player";
    if(cPlay === "paper" && pPLay === "scissors") winner = "player";
    if(cPlay === "scissors" && pPLay === "rock") winner = "player";
    
    return winner;
}

let playerScore = 0;
let computerScore = 0;
let playerPlay = "";
let compPlay = "";


while((playerScore!=3)||(computerScore!=3)){
    compPlay = computerPlay();
    playerPlay = player();
    
    if(winner(compPlay, playerPlay)==="computer")computerScore++;
    if(winner(compPlay, playerPlay)==="player")playerScore++;
    if(computerScore==3)console.log("The computer wins :(");
    if(playerScore==3)console.log("You win!");
}

