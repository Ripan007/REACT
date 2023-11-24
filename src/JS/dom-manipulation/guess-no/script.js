//  dry principle
//  refactoring the code
'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//  refactoring the code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
});

//  when  there is no input
if (!guess) {
  displayMessage('🛑 no  number');
  //  when player win
} else if (guess === secretNumber) {
  displayMessage('✴️ correct number');
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.background = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'high' : 'low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
}
