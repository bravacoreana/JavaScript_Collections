// 7. sort Exercise
// Sort the people alphabetically by last name

const people = require("./data-people");
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(",");
  const [bLast, bFirst] = nextOne.split(",");
  return aLast > bLast ? 1 : -1;
});
console.table(alpha);
