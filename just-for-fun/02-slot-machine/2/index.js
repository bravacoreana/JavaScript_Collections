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
let seven;

const handleSeven = (seven) => {
  if (seven === 3) {
    earn = input.value * 10;
    result.innerHTML = `777! You earned ${earn} euros!`;
    return earn;
  } else if (seven === 2) {
    earn = input.value * 3;
    result.innerHTML = `Double seven! You earned ${earn} euros!`;
    return earn;
  } else if (seven === 1) {
    earn = input.value * 1;
    result.innerHTML = `Single seven! You earned ${earn} euros!`;
    return earn;
  }
  usermoney.textContent = Number(usermoney.textContent) + earn;
};

const handleDouble = () => {
  earn = input.value * 2;
  result.innerHTML = `Double numbers! You earned ${earn} euros!`;
  usermoney.textContent = Number(usermoney.textContent) + earn;
};

const handleTriple = () => {
  earn = input.value * 5;
  result.innerHTML = `Double numbers! You earned ${earn} euros!`;
  usermoney.textContent = Number(usermoney.textContent) + earn;
};

const lostGame = () => {
  earn = 0;
  result.innerHTML = `Damn! You were close!`;
  usermoney.textContent = Number(usermoney.textContent) - Number(input.value);
  if (usermoney.textContent === "0") gameOver();
};

const otherNumbers = (slotNumbers) => {
  const newNumbers = new Set(slotNumbers).size;
  if (newNumbers === 1) handleTriple();
  if (newNumbers === 2) handleDouble();
  else slotNumbers.includes(7) ? handleSeven(1) : lostGame();
};

const compare = (n1, n2, n3) => {
  seven = 0;
  slot1.textContent = n1;
  slot2.textContent = n2;
  slot3.textContent = n3;

  const slotNumbers = [n1, n2, n3];
  slotNumbers.forEach((n) => {
    if (n === 7) seven++;
  });
  if (seven >= 2) handleSeven(seven);
  else otherNumbers(slotNumbers);
};

const startSlot = () => {
  const num1 = Math.trunc(Math.random() * 9 + 1);
  const num2 = Math.trunc(Math.random() * 9 + 1);
  const num3 = Math.trunc(Math.random() * 9 + 1);
  compare(num1, num2, num3);
};

const validateMoney = () => {
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

const gameOver = () => {
  btn.innerHTML = "RESET";
  btn.removeEventListener("click", validateMoney);
  btn.addEventListener("click", resetGame);
};

const resetGame = () => {
  usermoney.textContent = 1000;
  btn.innerHTML = "START";
  btn.removeEventListener("click", resetGame);
  btn.addEventListener("click", validateMoney);
};

const init = () => {
  if (btn.innerHTML === "RESET") btn.textContent === "START";
  btn.addEventListener("click", validateMoney);
};

init();
