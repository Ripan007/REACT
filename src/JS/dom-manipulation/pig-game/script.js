'use strict';
// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('btn--new');
const btnRoll = document.querySelector('btn--roll');
const btnHold = document.querySelector('btn--hold');
// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//  rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1.generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2.display dice
  // 3.check for rolled 1:if true,switch to next player
});
