
const playerScoreEl =document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');

const computerScoreEl =document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const resultText = document.getElementById('resultText');
const allGameIcons = document.querySelectorAll('.far');


const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice ='';

// reset all selected class from icons
function resetSelected() {
  allGameIcons.forEach((icon) =>{
    icon.classList.remove('selected');
  });
}

function resetAll() {
  resetSelected();
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  resultText.textContent = '';
}

function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if(computerChoiceNumber < 0.2){
    computerChoice ='rock'
  } else if(computerChoiceNumber <= 0.4){
    computerChoice = 'paper';
  } else if(computerChoiceNumber <=0.6) {
    computerChoice = 'scissors';
  } else if(computerChoice <= 0.8) {
    computerChoice = 'lizard';
  } else {
    computerChoice = 'spock' 
  }
}

function displayComputerChoice() {
  switch(computerChoice){
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ` ---${computerChoice.toUpperCase()}`;
      break; 
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ` ---${computerChoice.toUpperCase()}`;
      break; 
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ` ---${computerChoice.toUpperCase()}`;
      break; 
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ` ---${computerChoice.toUpperCase()}`;
      break; 
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ` ---${computerChoice.toUpperCase()}`;
      break; 
    default:
      break;
  }
}

function updateScore(playerChoice){
  if(playerChoice === computerChoice){
    resultText.textContent = "It's a tie."
  } else {
    const choice = choices[playerChoice];
    if(choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = 'You Won!';
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = 'You Lost!';
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}


function checkResult(playerChoice){
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

// passing player selection value and styling icons
function select(playerChoice) {
  checkResult(playerChoice);
  switch(playerChoice){
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ` ---${playerChoice.toUpperCase()}`;
      break; 
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ` ---${playerChoice.toUpperCase()}`;
      break; 
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ` ---${playerChoice.toUpperCase()}`;
      break; 
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ` ---${playerChoice.toUpperCase()}`;
      break; 
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ` ---${playerChoice.toUpperCase()}`;
      break; 
    default:
      break;
  }
}

resetAll();