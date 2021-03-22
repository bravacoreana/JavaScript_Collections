// * 043. Dot vs. Bracket Notations

const jonas = {
  firstName: "Jonas",
  lastName: "Kim",
  age: 2037 - 2000,
  job: "teacher",
  friends: ["Mike", "Bilbo", "Nenya"],
};

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "what do you wanna know about him? firstName, lastName, job"
// );
// console.log(jonas[interestedIn]);
// console.log(jonas.interestedIn);  // > undefined : . 을 쓰면 프로퍼티로 직접 감. jonas는 interestedIn 프로퍼티가 없음.

jonas.location = "Spain";
jonas["twitter"] = "@jonaoanaoanao";
console.log(jonas);

// * Small Challenge : Print this with using objects.
// > Jonas has three friends called Mike, Peter, Steven. And his BFF is Mike.

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends called ${jonas.friends}. And his BFF is ${jonas.friends[0]}.`
);
