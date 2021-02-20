"use strict";

//* Promise is a JS object for asynchronous operation
//* State: pending -> fulfilled
//* Producer vs Consumer

//* 1. Producer
//! when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing sth...");
  setTimeout(() => {
    // resolve("yeay!");
    reject(new Error("no network😅"));
  }, 2000);
});

//* 2. Consumers: then, catch, finally

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

//* 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => resolve(num - 1), 1000)
    );
  })
  .then((num) => console.log("FetchNumber : " + num));

// ///////////////////////////////////

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen}=>🥚`), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=>🍳`), 1000);
  });

//* way 1
getHen()
  .then((hen) => getEgg(hen))
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal));

//* way 2
getHen()
  .then(getEgg)
  .then(cook)
  .then((meal) => console.log(meal));
