// * Challenge 2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI.
The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.
Example:"Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 😉
*/

// * [1]
// BMI_COMPARISON(MARK1.bmi, JOHN1.bmi)
//   ? console.log(`${MARK1.name}'s BMI is higher than ${JOHN1.name}`)
//   : console.log(`${JOHN1.name}'s BMI is higher than ${MARK1.name}`);

// * [2]
// class User {
//   constructor(name, mass, height) {
//     this.name = name;
//     this.mass = mass;
//     this.height = height;
//     this.bmi = BMI(this.mass, this.height);
//     BMI(mass, height);
//   }
// }

// const BMI = (mass, height) => {
//   const bmi = mass / height ** 2;
//   return bmi;
// };

// mark = new User("mark", 78, 1.69);
// john = new User("john", 92, 1.95);

// mark.bmi > john.bmi
//   ? console.log(`${mark.name}'s BMI is higher than ${john.name}`)
//   : console.log(`${john.name}'s BMI is higher than ${mark.name}`);

// 5 Falsy Values : 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean([])); // true
// console.log(Boolean("0")); // true
