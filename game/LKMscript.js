const choices = document.querySelectorAll('#choices button');
const result = document.querySelector('#result');
const audio = new Audio('zvuk/mahrina.m4a');
let playerChoice = '';
let computerChoice = '';
let resultMessage = '';

function computerPlay() {
  const choices = ['kamen', 'list', 'makaze'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Izjednaceno je!';
  } else if (
    (playerSelection === 'kamen' && computerSelection === 'makaze') ||
    (playerSelection === 'list' && computerSelection === 'kamen') ||
    (playerSelection === 'makaze' && computerSelection === 'list')
  ) {
    return 'Pobijedio si!';
  } else {
    return 'Izgubio si!';
  }
}

function updateResult() {
  result.innerHTML = `
    <p>Igrao si ${playerChoice}</p>
    <p>Racunar je igrao ${computerChoice}</p>
    <p>${resultMessage}</p>
  `;
}

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    playerChoice = choice.id;
    computerChoice = computerPlay();
    resultMessage = playRound(playerChoice, computerChoice);
    updateResult();
  });
});

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    playerChoice = choice.id;
    computerChoice = computerPlay();
    resultMessage = playRound(playerChoice, computerChoice);
    updateResult();
    audio.play(); 
  });
});