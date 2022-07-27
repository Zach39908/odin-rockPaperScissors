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
    const btns = document.querySelectorAll('button');
    const resultDiv = document.querySelector('div');
    const roundMsg = document.createElement('p');
    const runningScore = document.createElement('p');
    const gameWinner = document.createElement('p');
    let userScore = 0;
    let computerScore = 0;
    btns.forEach(btn => btn.addEventListener('click', () => {
        roundMsg.textContent = playRound(btn.textContent, computerPlay());
        resultDiv.appendChild(roundMsg);

        if(roundMsg.textContent.includes('Win'))
            userScore++;
        else if(roundMsg.textContent.includes('Lose'))
            computerScore++;
        
        runningScore.textContent = `Your Score: ${userScore}\nComputer Score: ${computerScore}`;
        resultDiv.appendChild(runningScore);

        gameWinner.textContent = "";
        if(userScore == 5) {
            gameWinner.textContent = "Users Wins!";
            userScore = computerScore = 0;
        }
        else if(computerScore == 5) {
            gameWinner.textContent = "Computer Wins!";
            userScore = computerScore = 0;
        }
        resultDiv.appendChild(gameWinner);
    }));
}

game();