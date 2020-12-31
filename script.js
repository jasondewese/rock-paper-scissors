
//begin the 5 round rock-paper-scissors game!
game();



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
            console.log('Draw! Rock ties Rock');
            return 0;
        }
        if (computerSelection.toLowerCase() === 'paper')
        {
            console.log('You Lose! Paper beats Rock');
            return -1;
        }
        if (computerSelection.toLowerCase() === 'scissors')
        {
            console.log('You Win! Rock beats Scissors');
            return 1;
        }
    }


    //If player picked Paper
    else if (playerSelection.toLowerCase() === 'paper')
    {
        if (computerSelection.toLowerCase() === 'rock')
        {
            console.log('You Win! Paper beats Rock');
            return 1;
        }
        if (computerSelection.toLowerCase() === 'paper')
        {
            console.log('Draw! Paper ties Paper');
            return 0;
        }
        if (computerSelection.toLowerCase() === 'scissors')
        {
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