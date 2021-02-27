// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
//* my answer
const array2_1 = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log(array2_1);

//* solution
const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log(fullNames);
