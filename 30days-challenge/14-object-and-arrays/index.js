// start with strings, numbers and booleans
let age1 = 100;
let age2 = age1;
console.log(age1, age2); // 100 100
age1 = 200;
console.log(age1, age2); // 200 100

let name1 = "liha";
let name2 = name1;
console.log(name1, name2); // liha liha
name1 = "Liha";
console.log(name1, name2); // Liha liha

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;
console.log(players, team); //[ 'Wes', 'Sarah', 'Ryan', 'Poppy' ] [ 'Wes', 'Sarah', 'Ryan', 'Poppy' ]

// You might think we can just do something like this:
team[3] = "Lux";
console.log(team); //[ 'Wes', 'Sarah', 'Ryan', 'Lux' ]
console.log(players); //[ 'Wes', 'Sarah', 'Ryan', 'Lux' ]

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice(); //[ 'Wes', 'Sarah', 'Ryan', 'Poppy' ]
team2[3] = "Lux";
console.log(players, team2); //[ 'Wes', 'Sarah', 'Ryan', 'Poppy' ] [ 'Wes', 'Sarah', 'Ryan', 'Lux' ]

// or create a new array and concat the old one in
const team3 = [].concat(players); //[ 'Wes', 'Sarah', 'Ryan', 'Poppy' ]
team3[3] = "Lux";
console.log(players, team3); //[ 'Wes', 'Sarah', 'Ryan', 'Poppy' ] [ 'Wes', 'Sarah', 'Ryan', 'Lux' ]

// or use the new ES6 Spread
const team4 = [...players]; //[ 'Wes', 'Sarah', 'Ryan', 'Poppy' ]
team4[3] = "Lux";
console.log(players, team4); //[ 'Wes', 'Sarah', 'Ryan', 'Poppy' ] [ 'Wes', 'Sarah', 'Ryan', 'Lux' ]

const team5 = Array.from(players); //[ 'Wes', 'Sarah', 'Ryan', 'Poppy' ]
team5[3] = "Lux";
console.log(players, team5); //[ 'Wes', 'Sarah', 'Ryan', 'Poppy' ] [ 'Wes', 'Sarah', 'Ryan', 'Lux' ]

// now when we update it, the original one isn't changed
// The same thing goes for objects, let's say we have a person object
// with Objects

const person = {
  name: "Wes Bos",
  age: 10,
};

// // and think we make a copy:

const captain = person;
captain.number = 1;
console.log(person, captain); // { name: 'Wes Bos', age: 10, number: 1 } { name: 'Wes Bos', age: 10, number: 1 }

// how do we take a copy instead?
const captain2 = Object.assign({}, person, { number: 1 });
// Object.assign(빈 객체에, person 의 내용을 모두 담고, 원하는 내용을 추가)
console.log(person, captain2); // { name: 'Wes Bos', age: 10 } { name: 'Wes Bos', age: 10, number: 1 }

// object ...spread
const captain3 = { ...person };
captain3.number = 1;
console.log(person, captain3); //{ name: 'Wes Bos', age: 10 } { name: 'Wes Bos', age: 10, number: 1 }

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const user = {
  name: "Bilbo",
  age: 1,
  social: {
    twitter: "@bilboKT",
    facebook: "bilbo.K.T.",
  },
};

const copyUser = Object.assign({}, user);

// practice [1]
copyUser.name = "BilboKT";
console.log(copyUser);
console.log(user);

// practice [2]
copyUser.social.twitter = "@bilboKT_New";
console.log(copyUser);
console.log(user); // 1 level 보다 더 deep 한 경우, 오리지널 객체의 데이터까지 바꿔 버린다

const copyUser2 = JSON.parse(JSON.stringify(user));
copyUser2.social.twitter = "@BILBO_KT_NEW";
console.log(copyUser2); // Only new object has been changed.
console.log(user); // Original one remains as it is.
