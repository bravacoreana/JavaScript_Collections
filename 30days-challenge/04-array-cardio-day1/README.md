# Array

keyword : [filter](#filter), [map](#map), [sort](#sort), [reduce](#reduce)

---

## 1. filter

- [question1](q1-array-filter.js)
- [question6](q6-web-filter.js)

- <details>
  filter() calls a provided callback function once for each element in an array, and constructs a **new array** of all the values for which callback returns a value that coerces to _true_.

  ```javascript
  const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
  ];

  const result = words.filter((word) => word.length > 6);

  console.log(result);
  // expected output: Array ["exuberant", "destruction", "present"]
  ```

</details>

## 2. map

- [question2](q2-array-map.js)
- <details>
  <summary>Objects vs maps</summary>
  The Map object **holds key-value pairs** and **remembers the original insertion order of the keys**. Any value (both objects and primitive values) may be used as either a key or a value.

  - Objects vs. Maps
    | | Map | Object |
    | :-------------: | :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------: |
    | Accidental Keys | does not contain any keys by default. | Has a prototype, so it contains default keys |
    | Key Types | any value (including functions, objects, or any primitive). | must be either a String or a Symbol. |
    | Key Order | are ordered(Simple) ∴ A Map object iterates in the order of entry insertion. | are ordered now(Complex) ∴ it's best not to rely on property order. |
    | size | property `size` | manually |
    | Iteration | iterable → directly iterated | does not implement an iteration protocol |
    | Performance | better in scenarios involving frequent additions and removals of key-value pairs. | Not optimized for frequent additions and removals of key-value pairs. |

</details>

## 3. sort

- [question3](q3-array-sort.js)
- [question7](q7-sort-exercise.js)

## 4. reduce

- [question4](q4-array-reduce.js)
- [question8](q8-reduce-exercise.js)
- <details>

  ```javascript
  const array1 = [1, 2, 3, 4];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  // 1 + 2 + 3 + 4
  console.log(array1.reduce(reducer));
  // expected output: 10

  // 5 + 1 + 2 + 3 + 4
  console.log(array1.reduce(reducer, 5));
  // expected output: 15
  ```

  </details>
