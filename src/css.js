'use strict';

const show = document.querySelector('.message').textContent;

document.querySelector('.check').addEventListener('click', function () {
    console.log(document.querySelector('.guess').value);
});
