"use strict";

const img = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");

let scores, activePlayer, currentScore, playing;

const rollDice = () => {
  if (playing) {
    img.classList.remove("hidden");
    const dice = Math.trunc(Math.random() * 6) + 1;
    img.src = `./src/dice-${dice}.png`;
    if (dice !== 1) {
      const crntPlayerScore = document.querySelector(
        `#current--${activePlayer}`
      );
      currentScore += dice;
      crntPlayerScore.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
};

const switchPlayer = () => {
  const crntPlayerScore = document.querySelector(`#current--${activePlayer}`);
  crntPlayerScore.textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

const handleHold = () => {
  if (playing) {
    scores[activePlayer] += currentScore;

    const totScore = document.getElementById(`score--${activePlayer}`);
    totScore.textContent = scores[activePlayer];
    // document.getElementById(`score--${activePlayer}`).textContent =
    //   scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
};

const handleReset = () => {
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  img.classList.add("hidden");
  const player = document.querySelector(`.player--${activePlayer}`);
  if (player.classList.contains("player--winner"))
    player.classList.remove("player--winner");
  init();
};

const init = () => {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;
  img.classList.add("hidden");
  btnRoll.addEventListener("click", rollDice);
  btnHold.addEventListener("click", handleHold);
  btnNew.addEventListener("click", handleReset);
};

init();
