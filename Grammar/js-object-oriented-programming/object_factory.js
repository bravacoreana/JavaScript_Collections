//[1]
const park = {
  name: "park",
  first: 10,
  second: 20,
  third: 30,
  sum: function () {
    return this.first + this.second + this.third;
  },
};
console.log("park : ", park.sum());

//[2]
const lee = {
  name: "lee",
  first: 20,
  second: 20,
  third: 20,
  sum: function () {
    return this.first + this.second + this.third;
  },
};
console.log("lee : ", lee.sum());

const day = new Date("2021-2-2");
console.log("day.getFullYear() : ", day.getFullYear());
console.log("day.getMonth() : ", day.getMonth());

// [3]
function Person() {
  this.name = "kim";
  this.first = 10;
  this.second = 20;
  this.third = 30;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}

console.log("Person() : ", Person()); // undefined
console.log("new Person() : ", new Person());

const choi = new Person();
console.log("choi.sum() : ", choi.sum());

// [4]
function Person2(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}

const soo = new Person2("soo", 20, 20, 30);
const hee = new Person2("hee", 30, 30, 30);
console.log("soo.sum() : ", soo.sum());
console.log("hee.sum() : ", hee.sum());
