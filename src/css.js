'use strict';

const show = document.querySelector('.message').textContent;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log('🚀 ~ guess:', guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = '🚫 no number!';
    }
});
