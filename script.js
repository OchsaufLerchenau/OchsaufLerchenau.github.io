let playerScore = 0;
let computerScore = 0;
      
function computerPlay() {
    let a = Math.floor(Math.random()*3);
    if (a === 0) {return 'rock'}
    else if (a === 1) {return 'paper'}
    else {return 'scissors'}
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock') {
        if (computerSelection ==='rock') {
            alert('Draw!')
            playerScore++
            computerScore++
        } else if (computerSelection === 'paper') {
            alert('You lose! Paper beats Rock.')
            computerScore++
        } else {
            alert('You win! Rock beats Scissors.')
            playerScore++
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection ==='paper') {
        alert('Draw!')
        playerScore++
        computerScore++
        } else if (computerSelection === 'rock') {
            alert('You Win! Paper beats Rock.')
            playerScore++
        } else {
            alert('You lose! Scissors beat Paper.')
            computerScore++
        }
    } else if (playerSelection === 'scissors') { 
        if (computerSelection === 'scissors') {
            alert('Draw!')
            playerScore++
            computerScore++
        } else if (computerSelection === 'paper') {
            alert('You win! Scissors beat paper.')
            playerScore++
        } else {
            alert('You lose! Rock beats Scissors.')
            computerScore++
        }
    } else {
        alert('wrong input')
        computerScore++
    }
}

function game() {    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.id, computerPlay());
            
            player.textContent = playerScore;
            computer.textContent = computerScore;

            header1.appendChild(player);
            header2.appendChild(computer);
            if (playerScore === 5 && computerScore === 5) {
                whoWon.textContent = 'Ugh, even Rock Paper Scissors can\'t decide. Just press any key to star over';
                window.addEventListener('keydown', () => {
                    location.reload();
                });
            } else if (computerScore === 5) {
                whoWon.textContent = 'What an ignominious defeat! Press any key to try again';
                window.addEventListener('keydown', () => {
                    location.reload();
                });
            } else if (playerScore === 5) {
                whoWon.textContent = 'Yay, you\'ve won! Press any key to try again';
                window.addEventListener('keydown', () => {
                    location.reload();
                });
                
            }
            
        });
    
    });      
}

const player = document.createElement('p');
const computer = document.createElement('p');
const header1 = document.createElement('h2');
const header2 = document.createElement('h2');
const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');
const whoWon = document.createElement('h1');



player.classList.add('score');
computer.classList.add('score');
header1.classList.add('h2');
header2.classList.add('h2');
header1.textContent = 'Your score: ';
header2.textContent = 'Computer\'s score: ';
whoWon.classList.add('won');
results.appendChild(header1);
results.appendChild(header2);
window.onload = game()
results.appendChild(whoWon);

