'use strict';

const show = document.querySelector('.message');
const again = document.querySelector('.again');
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('🚀 ~ secretNumber:', secretNumber);

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log('🚀 ~ guess:', guess, typeof guess);
    //  when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '🚫 no number!';
        displayMessage('🚫 no number!');

        //  when player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '😀 correct number';
        displayMessage('😀 correct number');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.background = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }
        //    when  guess is  wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent =
            //     guess > secretNumber ? '📈to high' : '📉to low';
            score--;
            displayMessage(guess > secretNumber ? '📈to high' : '📉to low');
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 you lost the game');
            // document.querySelector('.message').textContent =
            //     '💥 you lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
});

//  reset the game
again.addEventListener('click', function () {
    score = 20;
    highScore = 0;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log('🚀 ~ secretNumber:', secretNumber);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    displayMessage(' start guessing.. ');
    // document.querySelector('.message').textContent = ' start guessing.. ';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.background = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.highscore').textContent = highScore;
});
