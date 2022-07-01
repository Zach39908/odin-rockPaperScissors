// Rock Paper Scissors project (https://www.theodinproject.com/lessons/foundations-rock-paper-scissors)
// JS script file

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function computerPlay() {
    const playOptions = ['rock','paper','scissors'];
    return playOptions[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    const winners = new Map([
        ['rock', 'scissors'],
        ['scissors', 'paper'],
        ['paper', 'rock']
    ])

    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return `It's a tie! You both chose ${capitalize(playerSelection)}`;
    }
    else if(winners.get(playerSelection.toLowerCase()) !== computerSelection.toLowerCase()) {
        return (`You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
    }
    else {
        return (`You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
    }
}

function game() {
    const playOptions = ['rock','paper','scissors'];

    for(let i=0; i < 5; i++) {
        let userPlay = prompt('Choose: Rock, Paper, or Scissors');
        if(userPlay === playOptions[0].toLowerCase() || userPlay === playOptions[1].toLowerCase() || userPlay === playOptions[2].toLowerCase()) {
            alert('Round ' + (i+1) + ': ' + playRound(userPlay, computerPlay()));
        }
        else {
            alert('Invalid Input, Try Again');
            i--;
        }
    }
}

game();