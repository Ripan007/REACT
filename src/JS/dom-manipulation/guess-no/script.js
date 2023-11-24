//  dry principle
//  refactoring the code

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//  refactoring the code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
});

//  when  there is no input
if (!guess) {
  displayMessage('🛑 no  number');
}
