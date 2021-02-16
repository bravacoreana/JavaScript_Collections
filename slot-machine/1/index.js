"use strict";

const slots = document.querySelector(".slots");
const slot1 = document.querySelector(".slot1");
const slot2 = document.querySelector(".slot2");
const slot3 = document.querySelector(".slot3");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const usermoney = document.querySelector(".usermoney");
const result = document.querySelector(".result span");
let earn;

const compare = (n1, n2, n3) => {
  slot1.textContent = n1;
  slot2.textContent = n2;
  slot3.textContent = n3;
  if (((n1 === n2) === n3) === 7) {
    earn = input.value * 10;
    result.innerHTML = `777! You earned ${earn} euros!`;
    usermoney.textContent = Number(usermoney.textContent) + earn;
  } else if ((n1 === n2) === n3 && n1 !== 7) {
    earn = input.value * 5;
    result.innerHTML = `Triple! You earned ${earn} euros!`;
    usermoney.textContent = Number(usermoney.textContent) + earn;
  } else if (
    (n1 === n2 && n2 !== n3) ||
    (n2 === n3 && n3 !== n1) ||
    (n1 === n3 && n3 !== n2)
  ) {
    earn = input.value * 2;
    result.innerHTML = `Double! You earned ${earn} euros!`;
    usermoney.textContent = Number(usermoney.textContent) + earn;
  } else {
    result.innerHTML = `Damn! You were close!`;
    usermoney.textContent = Number(usermoney.textContent) - Number(input.value);
  }

  if (Number(usermoney.textContent) === 0) {
    alert("You lost all your money!");
    btn.innerText = "REPLAY";
    result.innerHTML = "Play again and get your chance!";
    btn.removeEventListener("click", getValue);
    btn.addEventListener("click", startOver);
  }
};

const startOver = () => {
  usermoney.textContent = 1000;
  btn.removeEventListener("click", startOver);
  btn.addEventListener("click", getValue);
  result.innerHTML = "";
  btn.innerText = "START";
};

const startSlot = () => {
  const num1 = Math.trunc(Math.random() * 9 + 1);
  const num2 = Math.trunc(Math.random() * 9 + 1);
  const num3 = Math.trunc(Math.random() * 9 + 1);

  compare(num1, num2, num3);
};

const getValue = () => {
  const value = Number(input.value);
  if (value > Number(usermoney.textContent)) {
    alert("You can't bet more than seedmoney");
    input.value = "";
  } else if (value === "") {
    alert("You have to bet");
    input.value = "";
  } else if (value === 0) {
    alert("Bet more than 0");
    input.value = "";
  } else startSlot();
};

const init = () => {
  btn.addEventListener("click", getValue);
};

init();
