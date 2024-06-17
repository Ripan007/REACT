'use strict';

const show = document.querySelector('.message').textContent;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log('🚀 ~ guess:', guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = '🚫 no number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '😀 correct number';
    }
});

//  i have to understand  the logic
//
