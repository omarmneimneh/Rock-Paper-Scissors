let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const message_h2 = document.querySelector('.winner-message > h2');

function computerChoice(){
    choices= ['r', 'p', 's']
    const num = (Math.floor(Math.random()*3));
    return choices[num];
}

function converter(letter){
    if(letter==='r') return "Rock";
    else if(letter==='p') return "Paper";
    else return "Scissors";
}

function win(user, comp){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${converter(user)} beats ${converter(comp)}. You win!`;
}

function loss(user, comp){
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${converter(user)} loses to ${converter(comp)}. You lose :(`;
}

function tie(user, comp){
    result_div.innerHTML = `${converter(user)} ties with ${converter(comp)}. It's a tie :/`;
}

function game(userChoice){
    const compChoice = computerChoice();
    switch(userChoice+compChoice){
        case "sp":
        case "pr":
        case "rs":
            win(userChoice,compChoice);
            break;    
        case "ps":
        case "rp":
        case "sr":
            loss(userChoice, compChoice );
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, compChoice);
            break;
        
    }

    if(userScore==5){
        message_h2.innerHTML="You win the game!"
    }

    if(compScore==5){
        message_h2.innerHTML="You lost the game :("
    }
}

function main(){

    rock_div.addEventListener('click', () =>{
        game('r')
    });

    paper_div.addEventListener('click', () =>{
        game('p')
    });

    scissors_div.addEventListener('click', () =>{
        game('s')
    });

}

main();

