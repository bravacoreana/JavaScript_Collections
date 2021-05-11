const log = console.log;

let a = "coffee";

let obj = {
  id: 1,
};

obj[a] = "tea";
log(obj); // { id: 1, abc: 'def' }
log(obj[a]); // tea

// < object value 를 얻는 3가지 방법

const people = {
  name: "bilbo",
};

// - 1. Dot notation
log(people.name); // bilbo

// - 2. Bracket notation (string key)
log(people["name"]); // bilbo

// - 3. Bracket notation (variable key)
const key = "name";
log(people[key]); // bilbo

//==================================

const newKey = "type";
const whatIsIt = {
  name: "nenya",
  [newKey]: "cat",
};

log(whatIsIt[newKey]);
log(whatIsIt.type);
log(whatIsIt["type"]);
