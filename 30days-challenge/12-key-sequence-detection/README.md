## Array.prototype.splice()

[👉🏼 MDN](https://developer.cdn.mozilla.net/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```javascript
let arrDeletedItems = arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

```javascript
const months = ["Jan", "March", "April", "June"];

months.splice(1, 0, "Feb");
// inserts at index 1

console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4

console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

#### start

The index at which to start changing the array.<br/><br/>
If greater than the length of the array, start will be set to the length of the array. In this case, no element will be deleted but the method will behave as an adding function, adding as many element as item[n*] provided.<br/><br/>
If negative, it will begin that many elements from the end of the array. (In this case, the origin -1, meaning -n is the index of the nth last element, and is therefore equivalent to the index of array.length - n.) If array.length + start is less than 0, it will begin from index 0.

### 📖 What I learnt

- How to use splice() with negative

```javascript
pressedKeys.splice(
  -secretCode.length - 1,
  // secretCode.length = 8
  // ∴ -8-1 = -9
  // starting from index 9
  pressedKeys.length - secretCode.length
  // The number of the array - my secret code length
);
```