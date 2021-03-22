// * 50. the While Loop

// > Recap For loop
// for (let rep = 1; rep <= 5; rep++) {
//   console.log(`rep ${rep}`);
// }

// > While loop
let rep = 1;
while (rep <= 5) {
  //   console.log(`rep ${rep}`);
  rep++;
}

// > when do we use While loop?
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is over!");
}
