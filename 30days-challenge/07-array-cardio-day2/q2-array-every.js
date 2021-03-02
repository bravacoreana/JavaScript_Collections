q2 - array - every.js;
// Array.prototype.every() // is everyone 19 or older?

const people = require("./data-people");
const CURRENT_YEAR = 2021;
const every = people.every((person) => CURRENT_YEAR - person.year >= 19);
console.log(every);
