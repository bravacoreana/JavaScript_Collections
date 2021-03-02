// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const inventors = require("./data-inventors");

//* my answer [1]
const array1_1 = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.log(array1_1);

//* my answer [2] functional programming
function filter(list, predicate) {
  newList = [];
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) newList.push(list[i]);
  }
  return newList;
}
const array1_2 = filter(inventors, function (inventor) {
  return inventor.year >= 1500 && inventor.year < 1600;
});
console.log(array1_2);

//* solution
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(fifteen);
