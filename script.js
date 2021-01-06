//Good Examples: 
//https://rlmoser99.github.io/rock-paper-scissors/ 
//https://mooniidev.github.io/rock-paper-scissors-game/



/*************** 
 * Author: Jason Dewese
 * Initial Creation: 1/3/2021
 * Last Edit: 1/5/2021
 * 
 * CURRENT ERROR: Rock button is triggering rock, paper,
 * and scissors in the console and not displaying correct result.
*/


//begin the 5 round rock-paper-scissors game!
//game();
const gameResult = document.querySelector('#gameResults');


//play game with 'Rock' as player selection
const rockBtn = document.querySelector('#playerRock');
rockBtn.addEventListener('click', () => {
  playGame('Rock', computerPlay());  
});

//player game with 'Paper' as player selection
const paperBtn = document.querySelector('#playerPaper');
rockBtn.addEventListener('click', () => {
  playGame('Paper', computerPlay());  
});

//player game with 'Scissors' as player selection
const scissorsBtn = document.querySelector('#playerScissors');
rockBtn.addEventListener('click', () => {
  playGame('Scissors', computerPlay());  
});




//this function plays a 5 round game of rock-paper-scissors
//this keeps score and reports a winner or loser
function game(){
    
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper, or Scissors?');
        let result = playGame(playerSelection, computerPlay());

        if (result === 1){
            playerScore++;
        }
        else if (result === -1){
            computerScore++;
        }
        else{
            //draw - score does not change
        }
        console.log('Your Score = ' + playerScore + '\tComputer Score: ' + computerScore);
    }

    //output the final game result
    console.log("Game Over");
    if (playerScore > computerScore){
        console.log('You Win!');
    }
    else if (playerScore < computerScore){
        console.log('You Lose!');
    }
    else {
        console.log("It's a Draw!");
    }

}


function playGame(playerSelection, computerSelection) {
    
    
    //make the game case insensitive
    
    //If player picked Rock
    if (playerSelection.toLowerCase() === 'rock')
    {
        if (computerSelection.toLowerCase() === 'rock')
        {
            gameResult.textContent = "Draw! Rock ties Rock";
            console.log('Draw! Rock ties Rock');
            return 0;
        }
        if (computerSelection.toLowerCase() === 'paper')
        {
            gameResult.textContent ='You Lose! Paper beats Rock';
            console.log('You Lose! Paper beats Rock');
            return -1;
        }
        if (computerSelection.toLowerCase() === 'scissors')
        {
            gameResult.textContent = 'You Win! Rock beats Scissors';
            console.log('You Win! Rock beats Scissors');
            return 1;
        }
    }


    //If player picked Paper
    else if (playerSelection.toLowerCase() === 'paper')
    {
        if (computerSelection.toLowerCase() === 'rock')
        {
            gameResult.textContent = 'You Win! Paper beats Rock';
            console.log('You Win! Paper beats Rock');
            return 1;
        }
        if (computerSelection.toLowerCase() === 'paper')
        {
            gameResult.textContent = 'Draw! Paper ties Paper';
            console.log('Draw! Paper ties Paper');
            return 0;
        }
        if (computerSelection.toLowerCase() === 'scissors')
        {
            gameResult.textContent = 'You Lose! Scissors beats Paper';
            console.log('You Lose! Scissors beats Paper');
            return -1;
        }
    }

    //If player picked Scissors
    else if (playerSelection.toLowerCase() === 'scissors')
    {
        if (computerSelection.toLowerCase() === 'rock')
        {
            console.log('You Lose! Rock beats Scissors');
            return -1;
        }
        if (computerSelection.toLowerCase() === 'paper')
        {
            console.log('You Win! Scissors beats Paper');
            return 1;
        }
        if (computerSelection.toLowerCase() === 'scissors')
        {
            console.log('Draw! Scissors ties Scissors');
            return 0;
        }
    }

    //if you user mispelled or provided invalid input
    else{
        console.log('Error: invalid input. Enter "Rock", "Paper", or "Scissors"');
    }

}

//randomly returns 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
    let decision = Math.random();
    
    if (decision < 0.33) {
        return 'Rock';
    }
    else if (decision < 0.67)
    {
        return 'Paper';
    }
    else
    {
        return 'Scissors';
    }

    
}