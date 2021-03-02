// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const inventors = require("./data-inventors");

//* solution
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);
