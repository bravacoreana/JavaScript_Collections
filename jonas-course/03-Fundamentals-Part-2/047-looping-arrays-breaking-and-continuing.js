//* 047. Looping Arrays, Breaking and Continuing

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  //   console.log(jonas[i], typeof jonas[i]);
  //
  //   types[i] = typeof jonas[i];   // > way 1
  types.push(typeof jonas[i]); // > way 2
}
console.log(types); // [ 'string', 'string', 'number', 'string', 'object' ]

// > Another Example
const years = [1991, 1994, "hi", 1997, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages); // [ 46, 43, NaN, 40, 17 ]

// > Continue
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue; // > SKIP if it's string
  //   ages.push(2021 - years[i]);
  //   console.log(jonas[i], typeof jonas[i]);
}

// > Break
console.log("--- BREAK THE LOOP ---");

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") break; // > BREAK if it's not string
  console.log(jonas[i], typeof jonas[i]);
  // Jonas string
  // Schmedtmann string
}
