//* 048. Looping Backwards and Loops in Loops

// > Looping Backwards

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(jonas[i]);
// }

// > Loops in Loops

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`--------Starting exercise ${exercise}`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`rep ${rep}`);
  }
}
