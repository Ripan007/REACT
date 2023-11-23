const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '☠️ nothing is selected';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'guess correct';
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'guess is high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you loose the game';
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'guess is low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
