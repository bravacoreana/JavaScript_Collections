##

```js
const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNodes
  .map((node) => node.dataset.time) // take data-time values and create an array
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    // array as constant : ES6
    // map(parseFloat) : each value becomes float. (originally all are strings)
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);
  });

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`${hours} : ${mins} : ${secondsLeft}`);
```

## Array.from() vs spread syntax(...)

Spread syntax (...) allows an **iterable** such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

```js
const array1 = { 0: "a", 1: "b" };
const array2 = { 0: "a", 1: "b", length: 2 };

console.log(Array.from(array1)); // []
console.log([...array1]); // TypeError: array1 is not iterable

console.log(Array.from(array2)); // ['a', 'b']
console.log([...array2]); // TypeError: array1 is not iterable
```

## reduce

```js
Array.reduce(function(accumulator, currentValue, currentIndex, array)){
    return accumulator + currentValue
}
```
