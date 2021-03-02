// Array.prototype.some() // is at least one person 19 or older?

const people = require("./data-people");

const currentYear = new Date().getFullYear();
const older = people.some((person) => currentYear - person.year >= 19);
console.log(older);
