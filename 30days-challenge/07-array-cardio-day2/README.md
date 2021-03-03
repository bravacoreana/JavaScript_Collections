# 07. Array Cardio Day 2

---

## 🎉 Things I've learnt

[1]

```javascript
// Part of Question 2
const currentYear = new Date().getFullYear(); // (1)
const CURRENT_YEAR = 2021; // (2)
```

To create a `current` year, (1) is better than (2) for a maintenance reason.

<br/>

[2]

```javascript
// Part of Question 4
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
```

- The `slice()` method returns a shallow copy of a portion of an array into a `new array` object selected from start to end (end not included) where start and end represent the index of items in that array. **The original array will not be modified**.

  ```javascript
  // slice()

  const animals = ["ant", "bison", "camel", "duck", "elephant"];

  console.log(animals.slice(2)); // create a new array starting from index 2 til the end
  // expected output: Array ["camel", "duck", "elephant"]

  console.log(animals.slice(2, 4)); // create a new array starting from index2 to index3
  // expected output: Array ["camel", "duck"]

  console.log(animals.slice(1, 5));
  // expected output: Array ["bison", "camel", "duck", "elephant"]
  ```

- `Spread syntax(...)` allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
  - A more powerful array literal
    ```javascript
    var parts = ["shoulders", "knees"];
    var lyrics = ["head", ...parts, "and", "toes"];
    // ["head", "shoulders", "knees", "and", "toes"]
    ```
