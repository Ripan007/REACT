'use strict';

const show = document.querySelector('.message').textContent;
let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('🚀 ~ secretNumber:', secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log('🚀 ~ guess:', guess, typeof guess);
  //  when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 no number!';
    //  when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '😀 correct number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // when guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 guess is to high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 you lost the game';
      document.querySelector('.score').textContent = 0;
    }
    //  when guess is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 correct is to low ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
