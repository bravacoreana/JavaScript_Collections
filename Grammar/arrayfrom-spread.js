const array1 = { 0: "a", 1: "b" };
const array2 = { 0: "a", 1: "b", length: 2 };

console.log(Array.from(array1)); // []
console.log([...array1]); // TypeError: array1 is not iterable

console.log(Array.from(array2)); // ['a', 'b']
console.log([...array2]); // TypeError: array1 is not iterable
