// Rock Paper Scissors project (https://www.theodinproject.com/lessons/foundations-rock-paper-scissors)
// JS script file

// Helper function which returns the string parameter with its first letter Uppercased
function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);   // (1.) Uppercase first letter (2.) Concatenate that with rest of the original string (3.) Return result
}

// Returns a string representing the computer opponent's play ('rock', 'paper', or 'scissors') at random.
function computerPlay() {
    const playOptions = ['rock','paper','scissors'];
    return playOptions[Math.floor(Math.random() * 3)];  // Chooses a random number between (0-2) and returns the element in playOptions at that index
}

// Simulates a round of the game, returns a string exclaiming the results of that round
function playRound(playerSelection, computerSelection) {
    const winners = new Map([       // Hash map where the key & value are plays in the game and key==winner/value==loser between the two
        ['rock', 'scissors'],
        ['scissors', 'paper'],
        ['paper', 'rock']
    ])

    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return `It's a tie! You both chose ${capitalize(playerSelection)}`;     // if the user and computer pick the same play, it's a tie
    }
    else if(winners.get(playerSelection.toLowerCase()) !== computerSelection.toLowerCase()) {
        return (`You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);     // if Map[user's play] doesn't return the computer's play, then the user loses
    }
    else {
        return (`You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);      // else the user wins
    }
}

// Simulates the entire game with all 5 rounds between the user and computer
function game() {
    const playOptions = ['rock','paper','scissors'];

    for(let i=0; i < 5; i++) {
        let userPlay = prompt('Choose: Rock, Paper, or Scissors');      // ask user for their play selection
        if(userPlay === playOptions[0].toLowerCase() || userPlay === playOptions[1].toLowerCase() || userPlay === playOptions[2].toLowerCase()) {
            alert('Round ' + (i+1) + ': ' + playRound(userPlay, computerPlay()));       // if the user's input matches an element from playOptions, then call playRound(user play, computer play)
        }                                                                              
        else {
            alert('Invalid Input, Try Again');      // else print an error
            i--;                                    // decrement i so the round doesn't advance until a valid input is given
        }
    }
}

game();