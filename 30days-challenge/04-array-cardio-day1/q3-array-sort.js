// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const inventors = require("./data-inventors");

//* solution [1]
const ordered = inventors.sort(function (firstPerson, secondPerson) {
  if (firstPerson.year > secondPerson.year) return 1;
  // Have a priority order.
  else return -1; // Keep the order
});
console.table(ordered);

//* solution [2]
const ordered_2 = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(ordered_2);
