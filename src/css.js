'use strict';

const show = document.querySelector('.message').textContent;
const again = document.querySelector('.again');
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('🚀 ~ secretNumber:', secretNumber);

const displayMessage = function (message) {};

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
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }
        //    when  guess is  wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent =
                guess > secretNumber ? '📈to high' : '📉to low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
                '💥 you lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
});

//  reset the game
again.addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log('🚀 ~ secretNumber:', secretNumber);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = ' start guessing.. ';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.background = '#222';
    document.querySelector('.number').style.width = '15rem';
});
