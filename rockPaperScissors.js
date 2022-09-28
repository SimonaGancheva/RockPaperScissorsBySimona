function rockPaperScissors(playerTurn) {
    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';

    let isInvalid = false;

    if(playerTurn == 'r' || playerTurn == 'rock') {
        playerTurn = rock;
        console.log(`You chose ${playerTurn}`);
    } else if(playerTurn == 'p' || playerTurn == 'paper') {
        playerTurn = paper;
        console.log(`You chose ${playerTurn}`);
    } else if(playerTurn == 's' || playerTurn == 'scissors') {
        playerTurn = scissors;
        console.log(`You chose ${playerTurn}`);
    } else {
        isInvalid = true;
        console.log('Invalid input! Try again...')
    }

    

    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
    let computerMove;

    switch(computerRandomNumber) {
        case 1: computerMove = rock;
        break;
        case 2: computerMove = paper;
        break;
        case 3: computerMove = scissors;
        break;
    }

    if(!isInvalid) {
        console.log(`The computer chose ${computerMove}`);

        if((playerTurn === rock && computerMove === scissors) || 
    (playerTurn === paper && computerMove === rock) || 
    (playerTurn === scissors && computerMove === paper)) {
        console.log('You win!');
    } else if((computerMove === rock && playerTurn === scissors) || 
    (computerMove === paper && playerTurn === rock) || 
    (computerMove === scissors && playerTurn === paper)) {
        console.log('You lose!');
    } else {
        console.log('The game was a draw!')
    }
    }

    

}

rockPaperScissors('r')