//Good Examples: 
//https://rlmoser99.github.io/rock-paper-scissors/ 
//https://mooniidev.github.io/rock-paper-scissors-game/



/******************************************** 
 * Author: Jason Dewese
 * Initial Creation: 1/3/2021
 * Last Edit: 1/5/2021
 * Last Edit: 1/8/2021
 * Title: Rock-Paper-Scissors
 *
 *Edits made without git to style.css and script.js and index.html
 *Need to add and commit to git log
 
 
 *1/8 Edits:
 *Added logic to end game after someone scores 5 points
 *Added 'New Game' button and code to reset game board when clicked
 *Removed background color of container div
 
*********************************************/


const MAX_SCORE = 5;
let gameOver = false;

let playerScore = 0;
let computerScore = 0;
let gameResults = "";
let roundCounter = 0;

const pScoreDisplay = document.querySelector('#pScore');
const cScoreDisplay = document.querySelector('#cScore');
const gameResult = document.querySelector('#gameResults');
const rockBtn = document.querySelector('#playerRock');
const paperBtn = document.querySelector('#playerPaper');
const scissorsBtn = document.querySelector('#playerScissors');
const newGameButton = document.querySelector('#newGameButton');

//play game with 'Rock' as player selection
rockBtn.addEventListener('click', () => {
  if (gameOver === false)
  {
	 playGame('Rock', computerPlay());
  }
    
});

//player game with 'Paper' as player selection
paperBtn.addEventListener('click', () => {
  
  if (gameOver === false)
  {
	playGame('Paper', computerPlay());
  }
   
  
});

//player game with 'Scissors' as player selection
scissorsBtn.addEventListener('click', () => {
  
  if (gameOver === false)
  {
	 playGame('Scissors', computerPlay());
  }
    
});


//reset game screen
newGameButton.addEventListener('click', () => {
	
	playerScore = 0;
	computerScore = 0;
	gameResults = "";
	roundCounter = 0;
	
	gameOver = false;
	
	updateScreen();
	
	
});


function playGame(playerSelection, computerSelection) {
    //Count and display round number
	roundCounter++;
	gameResults += "Round " + roundCounter + ". ";
    
    
    
    //If player picked Rock
    if (playerSelection.toLowerCase() === 'rock')
    {
        if (computerSelection.toLowerCase() === 'rock')
        {
            gameResults += "Draw! Rock ties Rock\n";
            updateScreen();
        }
        if (computerSelection.toLowerCase() === 'paper')
        {
            gameResults +='You Lose! Paper beats Rock\n';
            computerScore++;
            updateScreen();
        }
        if (computerSelection.toLowerCase() === 'scissors')
        {
            gameResults += 'You Win! Rock beats Scissors\n';
            playerScore++;
            updateScreen();
        }
    }


    //If player picked Paper
    else if (playerSelection.toLowerCase() === 'paper')
    {
        if (computerSelection.toLowerCase() === 'rock')
        {
            gameResults+=  'You Win! Paper beats Rock\n';
            playerScore++;
            updateScreen();
        }
        if (computerSelection.toLowerCase() === 'paper')
        {
            gameResults += 'Draw! Paper ties Paper\n';
            updateScreen();
            
        }
        if (computerSelection.toLowerCase() === 'scissors')
        {
            gameResults += 'You Lose! Scissors beats Paper\n';
            computerScore++;
            updateScreen();
        }
    }

    //If player picked Scissors
    else if (playerSelection.toLowerCase() === 'scissors')
    {
        if (computerSelection.toLowerCase() === 'rock')
        {
            gameResults += "You Lose! Rock beats Scissors\n"
            computerScore++;
            updateScreen();
        }
        if (computerSelection.toLowerCase() === 'paper')
        {
            gameResults += "You Win! Scissors beats Paper\n";
            playerScore++;
            updateScreen();
        }
        if (computerSelection.toLowerCase() === 'scissors')
        {
            gameResults += "Draw! Scissors ties Scissors\n";
            updateScreen();
        }
    }

    //if something goes wrong
    else{
        console.log('Error: invalid input. Click "Rock", "Paper", or "Scissors"');
		
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

//Print new scores to screen and update game log
function updateScreen() {
    pScoreDisplay.textContent = playerScore;
    cScoreDisplay.textContent = computerScore;
    gameResult.innerText = gameResults;
	
	//game ends once someone scores 5 points
	if (playerScore === MAX_SCORE)
	{
		gameResult.innerText += "\n\nYou win!\nClick 'New Game' to play again!";
		gameOver = true;
	}
	else if (computerScore === MAX_SCORE)
	{
		gameResult.innerText += "\n\nOh no, the computer won...\nClick 'New Game' to play again!";
		gameOver = true;
	}

	
}


/*
*This was used for the 5 round game when it was still a console based game


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
*/