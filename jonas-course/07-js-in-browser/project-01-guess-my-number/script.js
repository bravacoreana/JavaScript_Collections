'use strict';

const input = document.querySelector('input');
const checkBtn = document.querySelector('.check');
const msg = document.querySelector('.message');
const againBtn = document.querySelector('.again');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

let RANDOM_NUMBER;
let BEGIN_SCORE = 20;
const compareScore = score => {
  if (highscore.innerHTML < score) highscore.innerHTML = score;
  else return;
};

const handleLost = () => {
  msg.innerText = 'You lost. Start Again';
  checkBtn.removeEventListener('click', handleValue);
};

const handleValue = () => {
  if (!input.value) return;
  const inputValue = parseInt(input.value, 10);
  if (RANDOM_NUMBER > inputValue) {
    msg.innerText = 'The number is higher...';
    BEGIN_SCORE--;
    score.textContent = BEGIN_SCORE;
    if (BEGIN_SCORE === 0) handleLost();
  } else if (RANDOM_NUMBER < inputValue) {
    msg.innerText = 'The number is lower...';
    score.innerHTML = parseInt(score.innerHTML) - 1;
    BEGIN_SCORE--;
    score.textContent = BEGIN_SCORE;
    if (BEGIN_SCORE === 0) handleLost();
  } else {
    msg.innerText = 'Correct!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    compareScore(score.innerHTML);
  }
};

const random = () => {
  let randomNumber = Math.random() * 20 + 1;
  randomNumber = Math.trunc(randomNumber);
  return randomNumber;
};

const handleAgain = () => {
  if (input.value) input.value = '';
  RANDOM_NUMBER = random();
  checkBtn.addEventListener('click', handleValue);
  document.querySelector('body').style.backgroundColor = '#222';
  msg.innerText = 'Start guessing...';
  BEGIN_SCORE = 20;
  score.textContent = BEGIN_SCORE;
};

const init = () => {
  RANDOM_NUMBER = random();
  checkBtn.addEventListener('click', handleValue);
  againBtn.addEventListener('click', handleAgain);
};

init();
