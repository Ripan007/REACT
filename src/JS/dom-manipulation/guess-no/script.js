// change style ,content ,attribute => dom manipulation
//  refactoring  the code
//  stick to the dry principle => try to not repeat the code

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '☠️ nothing is selected';
    // when guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'guess correct';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess > secretNumber ? 'high score' : 'to low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'you lost the game';
        document.querySelector('.score').textContent = 0;
      }
    }

    document.querySelector('.again').addEventListener('click', function () {
      score = 20;
      secretNumber = Math.trunc(Math.random() * 20) + 1;

      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = '?';
      document.querySelector('.message').textContent = 'Start guessing..';
      document.querySelector('.guess').value = '';
      document.querySelector('body').style.backgroundColor = 'black';
      document.querySelector('.number').style.width = '15rem';
    });

    // REPETITIVE CODE
    // when guess is to high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'guess is high';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'you loose the game';
    //     document.querySelector('.score').textContent = 0;
    //   }
    //   // when guess is low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'guess is low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'you loose the game';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
  }
});
