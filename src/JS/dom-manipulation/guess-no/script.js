const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '☠️ nothing is selected';
  } else if (guess === secretNumber) {
  }
});
