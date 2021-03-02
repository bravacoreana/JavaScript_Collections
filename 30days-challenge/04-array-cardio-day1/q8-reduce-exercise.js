// 8. Reduce Exercise
// Sum up the instances of each of these

const data = require("./data-data");

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) obj[item] = 0;
  obj[item]++;
  return obj;
}, {});

console.log(transportation);
