// change style ,content ,attribute => dom manipulation
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;

const reset = document
  .querySelector('.again')
  .addEventListener('click', function () {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.number').textContent = 0;
  });

document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '☠️ nothing is selected';
    // when guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'guess correct';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    // when guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'guess is high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you loose the game';
      document.querySelector('.score').textContent = 0;
    }
    // when guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'guess is low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you loose the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
